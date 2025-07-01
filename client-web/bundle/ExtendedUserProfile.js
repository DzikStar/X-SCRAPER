"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ExtendedUserProfile"],
    {
        899212: (e, l, n) => {
            n.d(l, { Z: () => s });
            var a = {
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
            const s = a;
        },
        523841: () => {
            var e,
                l,
                n,
                a,
                s = {
                    fragment: {
                        argumentDefinitions: (e = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (l = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: l,
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
                                            { kind: "InlineFragment", selections: [n, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    a,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Z2BA99jFw6TxaJM5v7Irmg", metadata: {}, name: "useFetchProfileBlocks_profileExistsQuery", operationKind: "query", text: null },
                };
            s.hash = "159e51b19a254333fecf6035bc3245b7";
        },
        796627: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a,
                s,
                r,
                t,
                i,
                o,
                c = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileQuery",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
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
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null }),
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ProfileBlocksSlice",
                                                        kind: "LinkedField",
                                                        name: "profile_blocks",
                                                        plural: !1,
                                                        selections: [
                                                            { args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" },
                                                            { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null })], storageKey: null },
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: s, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [r, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [t, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [i, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            c.hash = "16584b716a8d455d79eefb53731f55ee";
            const u = c;
        },
        579724: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a,
                s,
                r,
                t,
                i,
                o,
                c = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: (a = [{ kind: "Literal", name: "s", value: "f3d8" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null }), { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null })], storageKey: null }, (t = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }, t], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [s, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [i, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, t], storageKey: null }, t, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
                    params: { id: "vRz7Yom7hObecKwzBRUBiQ", metadata: {}, name: "useFetchProfileBlocks_settingsQuery", operationKind: "query", text: null },
                };
            c.hash = "cb1d5a0879773e36614622dd4379b34e";
            const u = c;
        },
        666259: (e, l, n) => {
            n.d(l, { kI: () => o, m1: () => t, vF: () => i });
            n(523841);
            var a = n(796627),
                s = n(579724),
                r = n(899212);
            n(585488);
            const t = r.Z,
                i = s.Z,
                o = a.Z;
        },
        990229: (e, l, n) => {
            n.d(l, { Z: () => b });
            n(136728);
            var a = n(202784),
                s = n(107267),
                r = n(811176),
                t = n(154003),
                i = n(111677),
                o = n.n(i),
                c = n(149170),
                u = n(415506),
                d = n(443781),
                m = n(395067),
                p = n(725516);
            const k = o().j7bb1a43,
                g = o().h63a5c3c,
                y = a.createElement(c.default, null),
                f = ({ onClose: e, user: l }) => {
                    const n = (0, p.z)(),
                        t = (0, s.useHistory)(),
                        { featureSwitches: i } = (0, d.QZ)(),
                        o = () => ({
                            Icon: u.default,
                            text: k({ screenName: l.screen_name }),
                            onClick: () => {
                                e(),
                                    (() => {
                                        const e = m.C2.User;
                                        if ((0, m.Yw)(i, e)) {
                                            const a = (0, m.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: e, reportedUser: l.id_str, scribeNamespace: n.contextualScribeNamespace });
                                            t.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(a) } } });
                                        } else t.push({ pathname: `/i/report/user/${l.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: n.contextualScribeNamespace } });
                                    })();
                            },
                        });
                    return a.createElement(r.Z, { items: [o()], onCloseRequested: e });
                },
                _ = ({ user: e }) => {
                    const l = a.useCallback((l) => a.createElement(f, { onClose: l, user: e }), [e]),
                        n = a.useMemo(() => ({ label: g }), []);
                    return a.createElement(t.ZP, { "aria-label": g, hoverLabel: n, icon: y, renderMenu: l, type: "primaryOutlined" });
                },
                b = a.memo(_);
        },
        695431: (e, l, n) => {
            n.d(l, { Z: () => m });
            var a = n(71620),
                s = n(668214),
                r = n(390387),
                t = n(919022);
            const i = (e, l) => l.match.params.screenName || "",
                o = (e, l) => t.ZP.selectIsUserNotFound(e, i(0, l)),
                c = (e, l) => t.ZP.selectIsUserSuspended(e, i(0, l)),
                u = (e, l) => t.ZP.selectUserSuspendMessage(e, i(0, l)),
                d = (e, l) => t.ZP.selectByScreenName(e, i(0, l)),
                m = (0, s.Z)()
                    .propsFromState(() => ({ isNotFound: o, isSuspended: c, suspendMessage: u, screenName: i, user: d, viewerUserId: r._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, a.zr)("EXTENDED_USER_PROFILE"), fetchOneUserByScreenNameIfNeeded: t.ZP.fetchOneByScreenNameIfNeeded }))
                    .withAnalytics({ page: "user_profile_extended_profile", component: "extended_profile" });
        },
        728441: (e, l, n) => {
            n.r(l), n.d(l, { default: () => D });
            var a = n(807896),
                s = n(202784),
                r = n(107267),
                t = n(154003),
                i = n(718e3),
                o = n(785813),
                c = n(825495),
                u = n(252021),
                d = n(736063),
                m = n(666670),
                p = n(72130),
                k = n(666259),
                g = n(535338),
                y = n(416699),
                f = n(484163),
                _ = n(21437),
                b = n(220544),
                h = n(695431),
                F = n(990229),
                E = (n(571372), n(301503)),
                N = n(325686),
                K = n(277660),
                S = n.n(K),
                v = n(989272),
                Z = n(524496),
                P = n(392237),
                B = n(187669),
                x = n(949626),
                T = n(478414),
                I = n(520385);
            const L = ({ profileBlocksRef: e }) => {
                    const l = S()(k.m1, e),
                        n = l?.items?.find((e) => e?.block_type === I.Mp.RICHTEXT),
                        a = n?.data?.value || "",
                        r = s.useMemo(() => {
                            try {
                                const e = JSON.parse(a);
                                if (!e.entityMap || !e.blocks) throw new Error("Malformed RawDraftContentState");
                                return e;
                            } catch (e) {}
                        }, [a]);
                    return (
                        (0, B.q)(() => {
                            (0, v.fH)((0, T.yW)(T.Hx, T.K), T.Hx);
                        }),
                        s.createElement(N.Z, { style: R.root }, r && (0, E.convertFromRaw)(r).hasText() ? s.createElement(x.Z, { className: T.Hx }, s.createElement(N.Z, { style: R.richText }, s.createElement(Z.Z, { contentState: r, paragraphFontSizeOverride: T.K.paragraphFontSize }))) : null)
                    );
                },
                R = P.default.create((e) => ({ root: { paddingVertical: e.spaces.space20 }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 }, richText: { color: e.colors.text, padding: e.spaces.space16 } })),
                w = s.memo(L),
                U = ({ analytics: e, hasProfileBlocks: l, profileBlocksRef: n, screenName: a, user: d, viewerUserId: m }) => {
                    const k = (0, r.useHistory)();
                    s.useEffect(() => {
                        d?.id_str && e.scribe({ ...(0, p.Zi)(d?.id_str, { version: 1 }) });
                    }, [e, d?.id_str]);
                    const g = s.useCallback(() => {
                        e.scribe({ ...(0, p.he)({ version: 1 }) });
                    }, [e]);
                    return s.createElement(u.Z, { backLocation: `/${a}`, history: k, primaryContent: d ? (l ? s.createElement(w, { profileBlocksRef: n }) : s.createElement(y.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: a })) : null, rightControl: d?.id_str === m ? s.createElement(t.ZP, { link: "/settings/bio", onClick: g, size: "xSmall", type: "primaryOutlined" }, "Edit") : d ? s.createElement(F.Z, { user: d }) : null, sidebarContent: s.createElement(i.Z, null), subtitle: `@${a}`, title: (0, o.Z)(d), titleIconCell: (0, c.Z)(d) });
                },
                C = (e) => {
                    const { screenName: l } = e,
                        { user_result_by_screen_name: n } = (0, g.p)(k.kI, { screenName: l }),
                        r = n?.result?.profile_blocks,
                        t = !!n?.result?.has_profile_blocks;
                    return l && r ? s.createElement(U, (0, a.Z)({ hasProfileBlocks: t, profileBlocksRef: r }, e)) : null;
                },
                O = { context: "EXTENDED_USER_PROFILE" },
                D = (0, h.Z)((e) => {
                    const { createLocalApiErrorHandler: l, fetchOneUserByScreenNameIfNeeded: n, isNotFound: a, isSuspended: r, screenName: t, suspendMessage: i, user: o, viewerUserId: c } = e;
                    return (
                        s.useEffect(() => {
                            t && n(t).catch(l(m.F));
                        }, [l, n, t]),
                        t && o ? (r ? s.createElement(b.i, { screenName: t, suspendMessage: i }) : !o.protected || (o && c === o.id_str) || o.following ? (a ? s.createElement(f.Y, { screenName: t }) : s.createElement(d.H, { errorConfig: O }, s.createElement(C, e))) : s.createElement(_.X, { screenName: t })) : null
                    );
                });
        },
        806208: (e, l, n) => {
            n.r(l), n.d(l, { default: () => w });
            var a = n(807896),
                s = n(202784),
                r = n(325686),
                t = n(277660),
                i = n.n(t),
                o = n(154003),
                c = n(392237),
                u = n(718e3),
                d = n(991617),
                m = n(785813),
                p = n(825495),
                k = n(485822),
                g = n(164349),
                y = n(252021),
                f = n(736063),
                _ = n(666670),
                b = n(72130),
                h = n(520385),
                F = n(462166),
                E = n(873302),
                N = n(535338),
                K = n(416699),
                S = n(484163),
                v = n(21437),
                Z = n(220544),
                P = n(695431),
                B = n(990229);
            const x = ({ analytics: e, expandedProfile: l, hasProfileBlocks: n, history: a, screenName: t, user: i, viewerUserId: c }) => {
                    s.useEffect(() => {
                        i?.id_str && e.scribe({ ...(0, b.Zi)(i?.id_str, { version: 2 }) });
                    }, [e, i?.id_str]);
                    const f = l?.result?.profile_sections?.items_results,
                        _ = (0, E.uR)(f, h.NB.ABOUT),
                        F = (0, E.uR)(f, h.NB.WORK_EXPERIENCE),
                        N = (0, E.hW)(_),
                        S = (0, E.hW)(F),
                        v = s.useCallback(() => {
                            e.scribe({ ...(0, b.he)({ version: 2 }) });
                        }, [e]);
                    return s.createElement(y.Z, { backLocation: `/${t}`, history: a, primaryContent: i ? (n ? s.createElement(r.Z, { style: T.root }, s.createElement(d.Fo.Provider, { value: { userId: c, userQueryId: i.id_str } }, s.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: N, hasWorkHistorySection: S, sectionId: _?.rest_id?.section_id, sectionType: h.NB.ABOUT, blockCount: _?.result?.profile_blocks?.total_count || 0, sectionQueryId: _?.id, sectionVisibility: _?.result?.core?.visibility } }, s.createElement(k.Z, { isEditing: !1, section: _ })), s.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: N, hasWorkHistorySection: S, sectionId: F?.rest_id?.section_id, sectionType: h.NB.WORK_EXPERIENCE, blockCount: F?.result?.profile_blocks?.total_count || 0, sectionQueryId: F?.id, sectionVisibility: F?.result?.core?.visibility } }, s.createElement(g.Z, { isEditing: !1, section: F })))) : s.createElement(K.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: t })) : null, rightControl: i?.id_str === c ? s.createElement(o.ZP, { link: "/settings/bio", onClick: v, size: "xSmall", type: "primaryOutlined" }, "Edit") : i ? s.createElement(B.Z, { user: i }) : null, sidebarContent: s.createElement(u.Z, null), subtitle: `@${t}`, title: (0, m.Z)(i), titleIconCell: (0, p.Z)(i) });
                },
                T = c.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                I = ({ expandedProfile: e, hasProfileBlocks: l, ...n }) => {
                    const r = i()(F.cH, e);
                    return r ? s.createElement(x, (0, a.Z)({ expandedProfile: r, hasProfileBlocks: l }, n)) : null;
                },
                L = (e) => {
                    const { screenName: l } = e,
                        { user_result_by_screen_name: n } = (0, N.p)(F.Sp, { screenName: l }),
                        r = !!n?.result?.has_profile_blocks,
                        t = n?.result?.expanded_profile_results;
                    return l && t ? s.createElement(I, (0, a.Z)({ expandedProfile: t, hasProfileBlocks: r }, e)) : null;
                },
                R = { context: "EXTENDED_USER_PROFILE_V2" },
                w = (0, P.Z)((e) => {
                    const { createLocalApiErrorHandler: l, fetchOneUserByScreenNameIfNeeded: n, isNotFound: a, isSuspended: r, screenName: t, suspendMessage: i, user: o, viewerUserId: c } = e;
                    return (
                        s.useEffect(() => {
                            t && n(t).catch(l(_.F));
                        }, [l, n, t]),
                        t && o ? (r ? s.createElement(Z.i, { screenName: t, suspendMessage: i }) : !o.protected || (o && c === o.id_str) || o.following ? (a ? s.createElement(S.Y, { screenName: t }) : s.createElement(f.H, { errorConfig: R }, s.createElement(L, e))) : s.createElement(v.X, { screenName: t })) : null
                    );
                });
        },
        416699: (e, l, n) => {
            n.d(l, { Z: () => k });
            var a = n(807896),
                s = n(202784),
                r = n(457311),
                t = n(392237),
                i = n(668214),
                o = n(919022);
            const c = (e, l) => !!l.screenName && o.ZP.selectIsUserSuspended(e, l.screenName),
                u = (e, l) => {
                    const n = l.screenName ? o.ZP.selectByScreenName(e, l.screenName) : void 0;
                    return n?.blocking;
                },
                d = (0, i.Z)().propsFromState(() => ({ isBlocking: u, isSuspended: c })),
                m = (e) => {
                    const { isBlocking: l, isSuspended: n, screenName: t, ...i } = e;
                    return s.createElement(s.Fragment, null, null, s.createElement(r.Z, (0, a.Z)({}, i, { style: [p.root, p.verticalPadding] })));
                },
                p = t.default.create((e) => ({ root: { backgroundColor: t.default.theme.colors.cellBackground, paddingHorizontal: t.default.theme.spaces.space20 }, verticalPadding: { paddingVertical: t.default.theme.spaces.space40 } })),
                k = d(s.memo(m));
        },
        484163: (e, l, n) => {
            n.d(l, { Y: () => c, Z: () => u });
            var a = n(202784),
                s = n(111677),
                r = n.n(s),
                t = n(416699);
            const i = r().c9a1cb5e,
                o = r().e7b201de,
                c = (e) => {
                    const { screenName: l } = e;
                    return a.createElement(t.Z, { header: i, message: o, screenName: l });
                },
                u = a.memo(c);
        },
        21437: (e, l, n) => {
            n.d(l, { X: () => d, Z: () => m });
            var a = n(202784),
                s = n(688715),
                r = n(731708),
                t = n(111677),
                i = n.n(t),
                o = n(416699);
            const c = i().bd598c70,
                u = (0, s.ju)("https://support.x.com/articles/14016"),
                d = (e) => {
                    const { screenName: l } = e,
                        n = a.useMemo(() => a.createElement(i().I18NFormatMessage, { $i18n: "i1824ce3", screenName: l }, a.createElement(r.ZP, { link: u }, i().e617164b)), [l]);
                    return a.createElement(o.Z, { header: c, message: n, screenName: l });
                },
                m = a.memo(d);
        },
        220544: (e, l, n) => {
            n.d(l, { Z: () => m, i: () => d });
            var a = n(202784),
                s = n(731708),
                r = n(111677),
                t = n.n(r),
                i = n(686689),
                o = n(416699);
            const c = t().g8475f82,
                u = a.createElement(t().I18NFormatMessage, { $i18n: "da9d52d7" }, a.createElement(s.ZP, { link: "https://support.x.com/articles/18311" }, t().j5e1cf59)),
                d = (e) => {
                    const { screenName: l, suspendHeader: n, suspendMessage: s } = e,
                        r = n ? a.createElement(i.Z, { entities: n.entities, rtl: n.rtl, text: n.text }) : c,
                        t = s ? a.createElement(i.Z, { entities: s.entities, rtl: s.rtl, text: s.text }) : u;
                    return a.createElement(o.Z, { header: r, message: t, screenName: l });
                },
                m = a.memo(d);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ExtendedUserProfile.5aedfaaa.js.map
