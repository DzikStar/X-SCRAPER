"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.WorkHistory~bundle.ExtendedUserProfile", "icons/IconNumberedList-js", "icons/IconPlusCircle-js"],
    {
        876242: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o,
                r,
                l = {
                    fragment: {
                        argumentDefinitions: (o = [
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
                    operation: { argumentDefinitions: o, kind: "Operation", name: "useDeleteProfileBlockMutation", selections: r },
                    params: { id: "EvvA9IQR0sKW0tGqXwSzKA", metadata: {}, name: "useDeleteProfileBlockMutation", operationKind: "mutation", text: null },
                };
            l.hash = "5d2c7077ac04854de170e0b8fd37dc6f";
            const i = l;
        },
        949626: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            var o = n(950822);
            const r = (e) => (0, o.Z)("div", e);
        },
        96702: (e, t, n) => {
            n.d(t, { Z: () => V });
            var o = n(202784),
                r = n(325686),
                l = n(392237),
                i = n(520385),
                a = n(991617),
                s = n(516951),
                c = n(381335),
                d = n(154003),
                u = n(885724);
            const m = o.createElement(u.default, null),
                f = l.default.create((e) => ({ editButton: { height: "auto" } })),
                b = () => {
                    const { blockId: e } = (0, a._L)();
                    return e ? o.createElement(r.Z, { style: f.editButton }, o.createElement(d.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var p = n(301503),
                h = n(989272),
                g = n(524496),
                y = n(925873),
                k = n(731708),
                E = n(757483),
                w = n(187669),
                $ = n(478414),
                D = n(949626);
            const v = ({ content: e }) => (
                    (0, w.q)(() => {
                        (0, h.fH)((0, $.yW)($.Hx, $.K), $.Hx);
                    }),
                    o.createElement(o.Fragment, null, e && e.hasText() && o.createElement(D.Z, { className: $.Hx }, o.createElement(r.Z, { style: S.richText }, o.createElement(g.Z, { contentState: (0, p.convertToRaw)(e) }))))
                ),
                S = l.default.create((e) => {
                    const t = E.Z.hexToCss(e.colors.gray0, 0),
                        n = E.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})` } };
                }),
                _ = ({ content: e, previewHeight: t, shouldTruncate: n = !0 }) => {
                    const [l, i] = o.useState(0),
                        [a, s] = o.useState(0),
                        [c, d] = o.useState(!n),
                        u = o.useRef(null);
                    o.useEffect(() => {
                        u.current && 0 === l && i(u.current.offsetHeight);
                    }, [l]);
                    const m = o.useMemo(() => {
                            const t = y.Z.getContentStateFromRaw(e);
                            return t ? (0, p.convertFromRaw)(t) : null;
                        }, [e]),
                        f = o.useMemo(() => n && l > t, [n, t, l]);
                    return m && m.hasText()
                        ? o.createElement(
                              r.Z,
                              { style: { flex: 1 } },
                              o.createElement(
                                  r.Z,
                                  {
                                      onLayout: () => {
                                          u.current && u.current.offsetHeight !== a && s(u.current.offsetHeight);
                                      },
                                      ref: u,
                                      style: f && !c ? { ...S.previewContainer, maxHeight: t } : void 0,
                                  },
                                  o.createElement(v, { content: m }),
                                  f && !c ? o.createElement(r.Z, { style: S.fade }) : null,
                              ),
                              f && o.createElement(k.ZP, { color: "link", onPress: () => d(!c), size: "subtext1", style: S.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                x = l.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                I = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: n, sectionType: l } = (0, a.eF)(),
                        d = e.result?.content,
                        u = o.useMemo(() => l === i.NB.ABOUT && n, [n, l]);
                    return o.createElement(r.Z, { style: { ...x.row, ...(t ? { justifyContent: "space-between" } : {}) } }, o.createElement(_, { content: d?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: u }), t ? o.createElement(r.Z, { style: x.row }, o.createElement(b, null), o.createElement(c.Z, { onCompleted: s.Z, useIconButton: !0 })) : null);
                };
            var Z = n(470397),
                z = n(823161),
                C = n(111677),
                P = n.n(C),
                T = n(873302);
            const R = P().a2f2faab,
                F = ({ endMonth: e, endYear: t, isCurrent: n, startMonth: r, startYear: l }) => {
                    const i = (0, T.ZU)(r, l),
                        a = (0, T.ZU)(e, t);
                    return i ? o.createElement(Z.Z, null, o.createElement(P().I18NFormatMessage, { $i18n: "bab4ce51", start: R(i), end: n ? "Present" : a ? R(a) : "" }), o.createElement(k.ZP, null, (0, T.HM)(i, a || new Date()))) : null;
                },
                H = l.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                B = ({ block: e, isEditing: t }) => {
                    const n = e?.result?.content,
                        l = n?.company_profile_results?.result;
                    return n ? o.createElement(r.Z, { style: { ...H.row, ...(t ? { justifyContent: "space-between" } : {}) } }, o.createElement(r.Z, { style: { ...H.row, flex: 1 } }, o.createElement(z.default, { shape: "square", size: "large", uri: l?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), o.createElement(r.Z, { style: H.workInfo }, o.createElement(k.ZP, { size: "subtext1", weight: "bold" }, n.title), o.createElement(Z.Z, null, l?.core?.name || n.company_profile_name ? o.createElement(k.ZP, { color: "gray700", size: "subtext1" }, l?.core?.name || n.company_profile_name) : null, n.location_text ? o.createElement(k.ZP, { color: "gray700", size: "subtext1" }, n.location_text) : null), o.createElement(k.ZP, { color: "gray700", size: "subtext1" }, o.createElement(F, { endMonth: n.end_month, endYear: n.end_year, isCurrent: !!n.active_role, startMonth: n.start_month, startYear: n.start_year })), o.createElement(_, { content: n.description, previewHeight: 120, shouldTruncate: !0 }))), t ? o.createElement(r.Z, { style: H.row }, o.createElement(b, null), o.createElement(c.Z, { onCompleted: s.Z, useIconButton: !0 })) : null) : null;
                },
                M = ({ block: e, blockId: t, isEditing: n = !1 }) => {
                    const r = o.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case i.Mp.RICHTEXT:
                                return o.createElement(I, { block: e, isEditing: n });
                            case i.Mp.WORK_HISTORY:
                                return o.createElement(B, { block: e, isEditing: n });
                            default:
                                return null;
                        }
                    }, [e, n]);
                    return e ? o.createElement(a.Vo.Provider, { value: { ...a.dq, blockId: t, blockQueryId: e.__id } }, r()) : null;
                },
                L = l.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                V = ({ blocks: e, isEditing: t }) =>
                    e
                        ? o.createElement(
                              r.Z,
                              null,
                              e.map((n, l) => {
                                  if (!n) return null;
                                  const i = n.rest_id.block_id;
                                  if (!i || !n?.result?.core) return null;
                                  return o.createElement(
                                      r.Z,
                                      { key: i, style: L.blockGroup },
                                      o.createElement(
                                          r.Z,
                                          {
                                              style: (() => {
                                                  const t = L.block;
                                                  return 1 === e.length ? t : 0 === l ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : l > 0 && l < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : l === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          o.createElement(M, { block: n, blockId: i, isEditing: t }),
                                      ),
                                  );
                              }),
                          )
                        : null;
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(190286),
                l = n(111677),
                i = n.n(l),
                a = n(782642),
                s = n(72130),
                c = n(725516),
                d = n(876242),
                u = (n(585488), n(351743)),
                m = n.n(u);
            const f = d.Z,
                b = () => {
                    const [e, t] = m()(f);
                    return [
                        o.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                p = i().g9677c6e,
                h = i().a2b8c54c,
                g = ({ blockId: e, headline: t, onClose: n, onCompleted: l, queryId: i, subtext: d, userId: u }) => {
                    const m = (0, a.p)(),
                        f = (0, c.z)(),
                        [g, y] = b(),
                        k = o.useCallback(() => {
                            n();
                        }, [n]),
                        E = o.useCallback(() => {
                            f.scribe({ ...(0, s.MA)("delete_block_btn", "click") }),
                                g({
                                    variables: { blockId: e, userId: u },
                                    updater: (e, t) => {
                                        i && e.delete(i);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: h }), n(), l && l());
                                    },
                                });
                        }, [m, f, e, g, n, l, i, u]);
                    return o.createElement(r.Z, { confirmButtonDisabled: y, confirmButtonLabel: p, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: k, onConfirm: E, text: d });
                };
        },
        381335: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(325686),
                l = n(154003),
                i = n(392237),
                a = n(111677),
                s = n.n(a),
                c = n(607127),
                d = n(991617),
                u = n(512547);
            const m = s().h6a724ac,
                f = s().f94aacae,
                b = s().d96cf7ce,
                p = i.default.create((e) => ({ iconButton: { height: "auto" } })),
                h = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: n, sectionQueryId: i } = (0, d.eF)(),
                        { blockId: a, blockQueryId: s } = (0, d._L)(),
                        { userId: h, userQueryId: g } = (0, d.se)(),
                        [y, k] = o.useState(!1),
                        E = o.useCallback(() => {
                            k(!1);
                        }, []),
                        w = o.useCallback(() => {
                            k(!0);
                        }, []);
                    return o.createElement(o.Fragment, null, t ? o.createElement(r.Z, { style: p.iconButton }, o.createElement(l.ZP, { disabled: !a || !h, icon: o.createElement(c.default, null), onClick: w, size: "xSmall", type: "destructiveText" })) : o.createElement(l.ZP, { disabled: !a || !h, onClick: w, size: "large", type: "destructiveText" }, b), y && a && h ? o.createElement(u.Z, { blockId: a, headline: m, onClose: E, onCompleted: e, queryId: n > 1 ? s : i || g, subtext: f, userId: h }) : null);
                };
        },
        785813: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(366635);
            const l = (e) => (e ? o.createElement(r.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(823161);
            const l = (e) => {
                if (!e) return null;
                const t = "Square" === e?.profile_image_shape ? "square" : "circle";
                return o.createElement(r.default, { shape: t, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        485822: (e, t, n) => {
            n.d(t, { Z: () => S });
            n(136728);
            var o = n(202784),
                r = n(325686),
                l = n(277660),
                i = n.n(l),
                a = n(107267),
                s = n(58881),
                c = n(392237),
                d = n(731708),
                u = n(530732),
                m = n(111677),
                f = n.n(m),
                b = n(982866),
                p = n(952793),
                h = n(462166),
                g = n(873302),
                y = n(96702),
                k = n(991617),
                E = n(732368);
            const w = f().b721eb38,
                $ = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: l } = (0, k.eF)(),
                        { userId: i, userQueryId: m } = (0, k.se)(),
                        f = (0, a.useHistory)(),
                        $ = o.useCallback(() => {
                            f.push("/settings/bio/new/about");
                        }, [f]),
                        v = (0, p.hC)("xprofile_section_visibility_enabled"),
                        S = s.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const _ = i === m,
                        x = (0, g.Kh)(e?.slice(), h.GL);
                    return o.createElement(r.Z, { style: D.root }, o.createElement(r.Z, { style: D.header }, o.createElement(d.ZP, { size: "title4", weight: "bold" }, w), v && _ && o.createElement(d.ZP, { hoverLabel: { label: (0, E.Q)(l) } }, o.createElement(E.K3, { style: D.visibilityIcon, visibility: l })), v && t && o.createElement(E.ZP, { currentVisibility: l, sectionId: n })), o.createElement(r.Z, null, e?.length ? o.createElement(y.Z, { blocks: x, isEditing: t }) : o.createElement(o.Fragment, null, t ? o.createElement(u.Z, { interactiveStyles: S, onClick: $, style: D.container }, o.createElement(d.ZP, null, "Tell us about yourself"), o.createElement(b.default, null)) : null)));
                },
                D = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                v = ({ isEditing: e = !1, section: t }) => {
                    const n = i()(h.C_, t),
                        r = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? o.createElement($, { blocks: r, isEditing: e }) : null;
                },
                S = ({ isEditing: e = !1, section: t }) => (t && t.id ? o.createElement(v, { isEditing: e, section: t }) : o.createElement($, { isEditing: e }));
        },
        164349: (e, t, n) => {
            n.d(t, { Z: () => S });
            n(136728);
            var o = n(202784),
                r = n(325686),
                l = n(277660),
                i = n.n(l),
                a = n(107267),
                s = n(58881),
                c = n(392237),
                d = n(731708),
                u = n(530732),
                m = n(111677),
                f = n.n(m),
                b = n(982866),
                p = n(952793),
                h = n(462166),
                g = n(873302),
                y = n(96702),
                k = n(991617),
                E = n(732368);
            const w = f().a622dfcc,
                $ = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: l } = (0, k.eF)(),
                        { userId: i, userQueryId: m } = (0, k.se)(),
                        f = (0, a.useHistory)(),
                        $ = o.useCallback(() => {
                            n ? f.push(`/settings/bio/new/${n}/work_experience`) : f.push("/settings/bio/new/work_experience");
                        }, [f, n]),
                        v = (0, p.hC)("xprofile_section_visibility_enabled"),
                        S = s.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const _ = i === m,
                        x = (0, g.Kh)(e?.slice(), h.lw),
                        I = (0, g.s1)(x);
                    return o.createElement(r.Z, { style: D.root }, o.createElement(r.Z, { style: D.headerSection }, o.createElement(d.ZP, { size: "title4", weight: "bold" }, w), v && _ && o.createElement(d.ZP, { hoverLabel: { label: (0, E.Q)(l) } }, o.createElement(E.K3, { style: D.visibilityIcon, visibility: l })), v && t && o.createElement(E.ZP, { currentVisibility: l, sectionId: n })), o.createElement(r.Z, { style: D.blocksList }, I && I.length > 0 ? o.createElement(y.Z, { blocks: I, isEditing: t }) : null, o.createElement(o.Fragment, null, t ? o.createElement(u.Z, { interactiveStyles: S, onClick: $, style: D.container }, o.createElement(d.ZP, null, "Add experience"), o.createElement(b.default, null)) : null)));
                },
                D = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                v = ({ isEditing: e = !1, section: t }) => {
                    const n = i()(h.C_, t),
                        r = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? o.createElement($, { blocks: r, isEditing: e }) : null;
                },
                S = ({ isEditing: e = !1, section: t }) => (t && t.id ? o.createElement(v, { isEditing: e, section: t }) : o.createElement($, { isEditing: e }));
        },
        732368: (e, t, n) => {
            n.d(t, { K3: () => D, ZP: () => x, Q: () => _ });
            var o,
                r,
                l = {
                    fragment: {
                        argumentDefinitions: (o = [
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
                    operation: { argumentDefinitions: o, kind: "Operation", name: "VisibilityDropdown_updateSectionVisibilityMutation", selections: r },
                    params: { id: "8ICa6FMhnv00iHBjpoXdAQ", metadata: {}, name: "VisibilityDropdown_updateSectionVisibilityMutation", operationKind: "mutation", text: null },
                };
            l.hash = "8915833d692c94a47b0fcb2939731579";
            const i = l;
            var a = n(202784),
                s = n(400752),
                c = n(325686),
                d = (n(585488), n(351743)),
                u = n.n(d),
                m = n(731708),
                f = n(797553),
                b = n(143670),
                p = n(392237),
                h = n(111677),
                g = n.n(h),
                y = n(14284),
                k = n(468670),
                E = n(520385),
                w = n(991617);
            const $ = i,
                D = ({ style: e, visibility: t }) => (t === E.pR.PUBLIC ? a.createElement(y.default, { style: e }) : t === E.pR.PRIVATE ? a.createElement(k.default, { style: e }) : void a.Fragment),
                v = g().baffe39a,
                S = g().je07e266,
                _ = (e) => (e === E.pR.PUBLIC ? v : e === E.pR.PRIVATE ? S : ""),
                x = ({ currentVisibility: e, sectionId: t }) => {
                    const n = (0, s.b9)(w.j7),
                        [o, r] = a.useState(e ?? E.pR.PUBLIC),
                        [l, i] = a.useState(!1),
                        [d] = u()($),
                        p = a.useCallback(
                            (e) => {
                                t &&
                                    (r(e),
                                    i(!1),
                                    d({
                                        variables: { sectionId: t, visibility: e },
                                        onCompleted: () => {
                                            n(!0);
                                        },
                                    }));
                            },
                            [d, t, n],
                        );
                    return a.createElement(c.Z, null, a.createElement(c.Z, { onClick: () => i(!0), style: I.target }, a.createElement(D, { style: I.icon, visibility: o }), a.createElement(m.ZP, { style: I.targetText }, _(o))), l && a.createElement(f.default, { isFixed: !0, onDismiss: () => i(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, a.createElement(b.Z, { Icon: y.default, actionText: g().baffe39a, onClick: () => p(E.pR.PUBLIC) }), a.createElement(b.Z, { Icon: k.default, actionText: g().je07e266, onClick: () => p(E.pR.PRIVATE) })));
                },
                I = p.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, n) => {
            n.d(t, { Fo: () => i, Vo: () => m, Y_: () => s, _L: () => f, bQ: () => c, dq: () => u, eF: () => d, j7: () => b, se: () => a, w: () => l });
            var o = n(202784),
                r = n(565058);
            const l = { userId: null, userQueryId: null },
                i = o.createContext(l),
                a = () => o.useContext(i),
                s = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = o.createContext(s),
                d = () => o.useContext(c),
                u = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = o.createContext(u),
                f = () => o.useContext(m),
                b = (0, r.cn)(!1);
        },
        478414: (e, t, n) => {
            n.d(t, { Hx: () => s, K: () => l, bb: () => a, gv: () => i, kg: () => c, yW: () => d });
            var o = n(779802),
                r = n(392237);
            const l = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                i = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                a = ({ h1FontSize: e, h2FontSize: t, paragraphFontSize: n }) => [
                    { blockType: o.P7.header1, label: o.et, component: (0, o.LI)({ size: e, children: o.et, extendedWidth: !0 }) },
                    { blockType: o.P7.header2, label: o.PW, component: (0, o.LI)({ size: t, weight: "bold", children: o.PW }) },
                    { blockType: o.P7.paragraph, label: o.$u, component: (0, o.LI)({ size: n, children: o.$u }) },
                ],
                s = "extended-profile",
                c = "extended-profile-mobile-webview",
                d = (e, { h1FontSize: t, h2FontSize: n, paragraphFontSize: o }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${r.default.theme.fontSizes[n]};\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: calc(${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        72130: (e, t, n) => {
            n.d(t, { Ak: () => a, MA: () => i, Rz: () => o, Zi: () => l, he: () => r });
            const o = () => ({ component: "extended_profile_settings", action: "click" }),
                r = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                l = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                i = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                a = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => r, NB: () => l, P2: () => i, j3: () => o, pR: () => a });
            const o = 5e4,
                r = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                l = (r.RICHTEXT, r.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                i = { about: l.ABOUT, work_experience: l.WORK_EXPERIENCE },
                a = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => b, Kh: () => m, ZU: () => u, hW: () => h, s1: () => f, uR: () => p });
            var o = n(990242),
                r = n.n(o),
                l = n(111677),
                i = n.n(l),
                a = n(520385),
                s = n(462166);
            const c = i().eb7710f1,
                d = i().bfc38bb5,
                u = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const n = e?.filter((e) => e);
                    return n
                        ? n.map((e) => {
                              const n = { ...e },
                                  o = r()(s.wJ, n),
                                  l = r()(t, o.result?.content);
                              return { __id: n.__id, id: n.id, rest_id: n.rest_id, result: { ...o.result, content: l } };
                          })
                        : [];
                },
                f = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const n = e.result?.content,
                                o = t.result?.content,
                                r = (n?.active_role ? new Date() : u(n?.end_month, n?.end_year)) ?? new Date(0),
                                l = (o?.active_role ? new Date() : u(o?.end_month, o?.end_year)) ?? new Date(0);
                            if (r.getFullYear() !== l.getFullYear()) return l.getFullYear() - r.getFullYear();
                            if (r.getMonth() !== l.getMonth()) return l.getMonth() - r.getMonth();
                            const i = u(n?.start_month, n?.start_year) ?? new Date(0),
                                a = u(o?.start_month, o?.start_year) ?? new Date(0);
                            return i.getFullYear() !== a.getFullYear() ? a.getFullYear() - i.getFullYear() : a.getMonth() - i.getMonth();
                        });
                },
                b = (e, t) => {
                    let n = t.getMonth() - e.getMonth() + 1,
                        o = t.getFullYear() - e.getFullYear();
                    return n < 0 && (o--, (n += 12)), o && n ? `${c({ years: o })} ${d({ months: n })}` : o ? c({ years: o }) : n ? d({ months: n }) : "";
                },
                p = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === a.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === a.Mp.RICHTEXT)) : void 0),
                h = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => l, n: () => r });
            var o = n(392237);
            const r = "longform-styles",
                l = `\n    .longform-header-one {\n        font-size: ${o.default.theme.fontSizes.title2};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${o.default.theme.fontSizes.title3};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title2};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: ${o.default.theme.spaces.space12};\n        margin-left: calc(${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${o.default.theme.spaces.space12} / 2);\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${o.default.theme.spaces.space24} + ${o.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => E });
            n(136728);
            var o = n(202784),
                r = n(301503),
                l = n(325686),
                i = n(595088),
                a = n(516951),
                s = n(731708),
                c = n(779802),
                d = n(537392),
                u = n(989272),
                m = n(925873),
                f = n(202253),
                b = n(786475),
                p = n(392237),
                h = n(135904);
            const g = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: o.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: o.createElement(s.ZP, null) } },
                y = (0, i.Z)(g).reduce((e, [t, n]) => e.set(t, n), r.DefaultDraftBlockRenderMap);
            let k = !1;
            const E = o.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: s } = e;
                    o.useEffect(() => {
                        k || (u.fH(h.c, h.n), (k = !0));
                    }, []);
                    const p = [(0, f.ez)(i, s), f.aF, f.RU];
                    e.disable_entityLinkDecorator || p.push((0, f.NA)(i, s));
                    const g = m.Z.initEditorState(n, { decorators: p });
                    let E = a.Z;
                    return (
                        t &&
                            (E = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        o.createElement(d.ZP, null, ({ containerWidth: e }) => o.createElement(l.Z, { style: w.fontFamily }, o.createElement(r.Editor, { blockRenderMap: y, blockRendererFn: E, blockStyleFn: (0, c.su)(b.Z.isNarrowScreenWidth(e)), editorState: g, onChange: a.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                w = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => v, Ak: () => Z, KJ: () => E, LI: () => S, P7: () => h, PW: () => D, QF: () => g, Qm: () => k, Tr: () => _, b$: () => p, db: () => C, et: () => $, fR: () => b, iH: () => x, lD: () => y, su: () => w, u4: () => z, wX: () => I });
            var o = n(202784),
                r = n(111677),
                l = n.n(r),
                i = n(394123),
                a = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                f = n(731708);
            const b = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: b.bold, onPress: e(b.bold) },
                    { buttonTestId: "btn-italic", Icon: a.default, key: b.italic, onPress: e(b.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: b.strikethrough, onPress: e(b.strikethrough) },
                ],
                h = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                g = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: h.blockquote, onPress: e(h.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: h.bulleted, onPress: e(h.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: h.numbered, onPress: e(h.numbered) },
                ],
                k = "LINK",
                E = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: k, onPress: e }],
                w = (e, t) => (n) => {
                    const o = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case h.bulleted:
                            return o("longform-unordered-list-item");
                        case h.blockquote:
                            return o("longform-blockquote");
                        case h.header1:
                            return o("longform-header-one");
                        case h.header2:
                            return o("longform-header-two");
                        case h.numbered:
                            return o("longform-ordered-list-item");
                        case h.paragraph:
                            return o("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                $ = l().d5a48014,
                D = l().b92b6156,
                v = l().ec5ed598,
                S = ({ children: e, extendedWidth: t, size: n, weight: r }) => o.createElement(f.ZP, { extendedWidth: t, size: n, weight: r }, e),
                _ = { blockType: h.paragraph, label: v, component: S({ size: "body", children: v }) },
                x = [{ blockType: h.header1, label: $, component: S({ size: "title1", extendedWidth: !0, children: $ }) }, { blockType: h.header2, label: D, component: S({ size: "title3", weight: "heavy", children: D }) }, _],
                I = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                Z = ["delete", "delete-word", "delete-to-start-of-line"],
                z = "increase-text-size",
                C = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => r, fH: () => i, w3: () => l });
            n(136728);
            var o = n(392237);
            const r = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function l(e) {
                i(
                    (function () {
                        const e = o.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${r.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    a,
                );
                const t = s(e);
                return (
                    i(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const r = e.contentHorizontalPadding;
                            n || (n = o.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${r ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${r};\n          padding-right: ${r};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function i(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const o = document.head;
                    o && o.insertBefore(n, o.firstChild);
                }
            }
            const a = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < c.length; t++) {
                        if (c[t] === e) return String(t);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${a}_${t}`;
            }
            const c = [];
        },
        89085: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                l = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        982866: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                l = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.WorkHistory~bundle.ExtendedUserProfile.0a80f74a.js.map
