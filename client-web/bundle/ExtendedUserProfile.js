"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ExtendedUserProfile"],
    {
        666670: (e, l, n) => {
            n.d(l, { F: () => r });
            var a = n(516951),
                s = n(615656),
                t = n(51525);
            const r = { [s.ZP.AddressBookLookupNotFound]: { customAction: t.vv }, [s.ZP.GenericUserNotFound]: { customAction: a.Z }, [s.ZP.OtherUserSuspended]: { customAction: a.Z }, showToast: !0 };
        },
        238225: (e, l, n) => {
            n.d(l, { kI: () => y, vF: () => g, m1: () => k });
            var a,
                s,
                t,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileExistsQuery",
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: s,
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
                                            { kind: "InlineFragment", selections: [t, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Z2BA99jFw6TxaJM5v7Irmg", metadata: {}, name: "useFetchProfileBlocks_profileExistsQuery", operationKind: "query", text: null },
                };
            i.hash = "159e51b19a254333fecf6035bc3245b7";
            var c = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }],
                    l = [
                        { kind: "Literal", name: "s", value: "f3d8" },
                        { kind: "Variable", name: "screen_name", variableName: "screenName" },
                    ],
                    n = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileQuery",
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
                                                            { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [a], storageKey: null },
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
                    operation: { argumentDefinitions: e, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: l, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [n, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [a, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, t], type: "User", abstractKey: null }], storageKey: null }, t], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            })();
            c.hash = "16584b716a8d455d79eefb53731f55ee";
            const o = c;
            var u = (function () {
                var e = [{ kind: "Literal", name: "s", value: "f3d8" }],
                    l = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    a = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [l, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n], storageKey: null }, a], storageKey: null }, a], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [l, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, a], storageKey: null }, a, t], type: "User", abstractKey: null }], storageKey: null }, t], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
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
            const k = p,
                g = d,
                y = o;
        },
        990229: (e, l, n) => {
            n.d(l, { Z: () => b });
            n(136728);
            var a = n(202784),
                s = n(107267),
                t = n(811176),
                r = n(154003),
                i = n(111677),
                c = n.n(i),
                o = n(149170),
                u = n(415506),
                d = n(443781),
                m = n(395067),
                p = n(725516);
            const k = c().j7bb1a43,
                g = c().h63a5c3c,
                y = a.createElement(o.default, null),
                f = ({ onClose: e, user: l }) => {
                    const n = (0, p.z)(),
                        r = (0, s.useHistory)(),
                        { featureSwitches: i } = (0, d.QZ)(),
                        c = () => ({
                            Icon: u.default,
                            text: k({ screenName: l.screen_name }),
                            onClick: () => {
                                e(),
                                    (() => {
                                        const e = m.C2.User;
                                        if ((0, m.Yw)(i, e)) {
                                            const a = (0, m.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: e, reportedUser: l.id_str, scribeNamespace: n.contextualScribeNamespace });
                                            r.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(a) } } });
                                        } else r.push({ pathname: `/i/report/user/${l.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: n.contextualScribeNamespace } });
                                    })();
                            },
                        });
                    return a.createElement(t.Z, { items: [c()], onCloseRequested: e });
                },
                _ = ({ user: e }) => {
                    const l = a.useCallback((l) => a.createElement(f, { onClose: l, user: e }), [e]),
                        n = a.useMemo(() => ({ label: g }), []);
                    return a.createElement(r.ZP, { "aria-label": g, hoverLabel: n, icon: y, renderMenu: l, type: "primaryOutlined" });
                },
                b = a.memo(_);
        },
        695431: (e, l, n) => {
            n.d(l, { Z: () => m });
            var a = n(71620),
                s = n(668214),
                t = n(390387),
                r = n(919022);
            const i = (e, l) => l.match.params.screenName || "",
                c = (e, l) => r.ZP.selectIsUserNotFound(e, i(0, l)),
                o = (e, l) => r.ZP.selectIsUserSuspended(e, i(0, l)),
                u = (e, l) => r.ZP.selectUserSuspendMessage(e, i(0, l)),
                d = (e, l) => r.ZP.selectByScreenName(e, i(0, l)),
                m = (0, s.Z)()
                    .propsFromState(() => ({ isNotFound: c, isSuspended: o, suspendMessage: u, screenName: i, user: d, viewerUserId: t._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, a.zr)("EXTENDED_USER_PROFILE"), fetchOneUserByScreenNameIfNeeded: r.ZP.fetchOneByScreenNameIfNeeded }))
                    .withAnalytics({ page: "user_profile_extended_profile", component: "extended_profile" });
        },
        728441: (e, l, n) => {
            n.r(l), n.d(l, { default: () => M });
            var a = n(807896),
                s = n(202784),
                t = n(107267),
                r = n(154003),
                i = n(718e3),
                c = n(785813),
                o = n(825495),
                u = n(252021),
                d = n(736063),
                m = n(666670),
                p = n(72130),
                k = n(238225),
                g = n(535338),
                y = n(416699),
                f = n(484163),
                _ = n(972796),
                b = n(21437),
                h = n(220544),
                F = n(695431),
                E = n(990229),
                N = (n(571372), n(301503)),
                v = n(325686),
                K = n(277660),
                S = n.n(K),
                P = n(989272),
                Z = n(524496),
                B = n(392237),
                x = n(187669),
                T = n(949626),
                I = n(478414),
                L = n(520385);
            const R = ({ profileBlocksRef: e }) => {
                    const l = S()(k.m1, e),
                        n = l?.items?.find((e) => e?.block_type === L.Mp.RICHTEXT),
                        a = n?.data?.value || "",
                        t = s.useMemo(() => {
                            try {
                                const e = JSON.parse(a);
                                if (!e.entityMap || !e.blocks) throw new Error("Malformed RawDraftContentState");
                                return e;
                            } catch (e) {}
                        }, [a]);
                    return (
                        (0, x.q)(() => {
                            (0, P.fH)((0, I.yW)(I.Hx, I.K), I.Hx);
                        }),
                        s.createElement(v.Z, { style: w.root }, t && (0, N.convertFromRaw)(t).hasText() ? s.createElement(T.Z, { className: I.Hx }, s.createElement(v.Z, { style: w.richText }, s.createElement(Z.Z, { contentState: t, paragraphFontSizeOverride: I.K.paragraphFontSize }))) : null)
                    );
                },
                w = B.default.create((e) => ({ root: { paddingVertical: e.spaces.space20 }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 }, richText: { color: e.colors.text, padding: e.spaces.space16 } })),
                U = s.memo(R),
                C = ({ analytics: e, hasProfileBlocks: l, profileBlocksRef: n, screenName: a, user: d, viewerUserId: m }) => {
                    const k = (0, t.useHistory)();
                    s.useEffect(() => {
                        d?.id_str && e.scribe({ ...(0, p.Zi)(d?.id_str, { version: 1 }) });
                    }, [e, d?.id_str]);
                    const g = s.useCallback(() => {
                        e.scribe({ ...(0, p.he)({ version: 1 }) });
                    }, [e]);
                    return s.createElement(u.Z, { backLocation: `/${a}`, history: k, primaryContent: d ? (l ? s.createElement(U, { profileBlocksRef: n }) : s.createElement(y.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: a })) : null, rightControl: d?.id_str === m ? s.createElement(r.ZP, { link: "/settings/bio", onClick: g, size: "xSmall", type: "primaryOutlined" }, "Edit") : d ? s.createElement(E.Z, { user: d }) : null, sidebarContent: s.createElement(i.Z, null), subtitle: `@${a}`, title: (0, c.Z)(d), titleIconCell: (0, o.Z)(d) });
                },
                O = (e) => {
                    const { screenName: l } = e,
                        { user_result_by_screen_name: n } = (0, g.p)(k.kI, { screenName: l }),
                        t = n?.result?.profile_blocks,
                        r = !!n?.result?.has_profile_blocks;
                    return l && t ? s.createElement(C, (0, a.Z)({ hasProfileBlocks: r, profileBlocksRef: t }, e)) : null;
                },
                D = { context: "EXTENDED_USER_PROFILE" },
                M = (0, F.Z)((e) => {
                    const { createLocalApiErrorHandler: l, fetchOneUserByScreenNameIfNeeded: n, isNotFound: a, isSuspended: t, screenName: r, suspendMessage: i, user: c, viewerUserId: o } = e;
                    return (
                        s.useEffect(() => {
                            r && n(r).catch(l(m.F));
                        }, [l, n, r]),
                        r && c ? (t ? s.createElement(h.i, { screenName: r, suspendMessage: i }) : c.blocked_by ? s.createElement(_.T, { screenName: r }) : !c.protected || (c && o === c.id_str) || c.following ? (a ? s.createElement(f.Y, { screenName: r }) : s.createElement(d.H, { errorConfig: D }, s.createElement(O, e))) : s.createElement(b.X, { screenName: r })) : null
                    );
                });
        },
        806208: (e, l, n) => {
            n.r(l), n.d(l, { default: () => U });
            var a = n(807896),
                s = n(202784),
                t = n(325686),
                r = n(277660),
                i = n.n(r),
                c = n(154003),
                o = n(392237),
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
                v = n(416699),
                K = n(484163),
                S = n(972796),
                P = n(21437),
                Z = n(220544),
                B = n(695431),
                x = n(990229);
            const T = ({ analytics: e, expandedProfile: l, hasProfileBlocks: n, history: a, screenName: r, user: i, viewerUserId: o }) => {
                    s.useEffect(() => {
                        i?.id_str && e.scribe({ ...(0, b.Zi)(i?.id_str, { version: 2 }) });
                    }, [e, i?.id_str]);
                    const f = l?.result?.profile_sections?.items_results,
                        _ = (0, E.uR)(f, h.NB.ABOUT),
                        F = (0, E.uR)(f, h.NB.WORK_EXPERIENCE),
                        N = (0, E.hW)(_),
                        K = (0, E.hW)(F),
                        S = s.useCallback(() => {
                            e.scribe({ ...(0, b.he)({ version: 2 }) });
                        }, [e]);
                    return s.createElement(y.Z, { backLocation: `/${r}`, history: a, primaryContent: i ? (n ? s.createElement(t.Z, { style: I.root }, s.createElement(d.Fo.Provider, { value: { userId: o, userQueryId: i.id_str } }, s.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: N, hasWorkHistorySection: K, sectionId: _?.rest_id?.section_id, sectionType: h.NB.ABOUT, blockCount: _?.result?.profile_blocks?.total_count || 0, sectionQueryId: _?.id, sectionVisibility: _?.result?.core?.visibility } }, s.createElement(k.Z, { isEditing: !1, section: _ })), s.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: N, hasWorkHistorySection: K, sectionId: F?.rest_id?.section_id, sectionType: h.NB.WORK_EXPERIENCE, blockCount: F?.result?.profile_blocks?.total_count || 0, sectionQueryId: F?.id, sectionVisibility: F?.result?.core?.visibility } }, s.createElement(g.Z, { isEditing: !1, section: F })))) : s.createElement(v.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: r })) : null, rightControl: i?.id_str === o ? s.createElement(c.ZP, { link: "/settings/bio", onClick: S, size: "xSmall", type: "primaryOutlined" }, "Edit") : i ? s.createElement(x.Z, { user: i }) : null, sidebarContent: s.createElement(u.Z, null), subtitle: `@${r}`, title: (0, m.Z)(i), titleIconCell: (0, p.Z)(i) });
                },
                I = o.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                L = ({ expandedProfile: e, hasProfileBlocks: l, ...n }) => {
                    const t = i()(F.cH, e);
                    return t ? s.createElement(T, (0, a.Z)({ expandedProfile: t, hasProfileBlocks: l }, n)) : null;
                },
                R = (e) => {
                    const { screenName: l } = e,
                        { user_result_by_screen_name: n } = (0, N.p)(F.Sp, { screenName: l }),
                        t = !!n?.result?.has_profile_blocks,
                        r = n?.result?.expanded_profile_results;
                    return l && r ? s.createElement(L, (0, a.Z)({ expandedProfile: r, hasProfileBlocks: t }, e)) : null;
                },
                w = { context: "EXTENDED_USER_PROFILE_V2" },
                U = (0, B.Z)((e) => {
                    const { createLocalApiErrorHandler: l, fetchOneUserByScreenNameIfNeeded: n, isNotFound: a, isSuspended: t, screenName: r, suspendMessage: i, user: c, viewerUserId: o } = e;
                    return (
                        s.useEffect(() => {
                            r && n(r).catch(l(_.F));
                        }, [l, n, r]),
                        r && c ? (t ? s.createElement(Z.i, { screenName: r, suspendMessage: i }) : c.blocked_by ? s.createElement(S.T, { screenName: r }) : !c.protected || (c && o === c.id_str) || c.following ? (a ? s.createElement(K.Y, { screenName: r }) : s.createElement(f.H, { errorConfig: w }, s.createElement(R, e))) : s.createElement(P.X, { screenName: r })) : null
                    );
                });
        },
        416699: (e, l, n) => {
            n.d(l, { Z: () => k });
            var a = n(807896),
                s = n(202784),
                t = n(457311),
                r = n(392237),
                i = n(668214),
                c = n(919022);
            const o = (e, l) => !!l.screenName && c.ZP.selectIsUserSuspended(e, l.screenName),
                u = (e, l) => {
                    const n = l.screenName ? c.ZP.selectByScreenName(e, l.screenName) : void 0;
                    return n?.blocking;
                },
                d = (0, i.Z)().propsFromState(() => ({ isBlocking: u, isSuspended: o })),
                m = (e) => {
                    const { isBlocking: l, isSuspended: n, screenName: r, ...i } = e;
                    return s.createElement(s.Fragment, null, null, s.createElement(t.Z, (0, a.Z)({}, i, { style: [p.root, p.verticalPadding] })));
                },
                p = r.default.create((e) => ({ root: { backgroundColor: r.default.theme.colors.cellBackground, paddingHorizontal: r.default.theme.spaces.space20 }, verticalPadding: { paddingVertical: r.default.theme.spaces.space40 } })),
                k = d(s.memo(m));
        },
        484163: (e, l, n) => {
            n.d(l, { Y: () => o, Z: () => u });
            var a = n(202784),
                s = n(111677),
                t = n.n(s),
                r = n(416699);
            const i = t().c9a1cb5e,
                c = t().e7b201de,
                o = (e) => {
                    const { screenName: l } = e;
                    return a.createElement(r.Z, { header: i, message: c, screenName: l });
                },
                u = a.memo(o);
        },
        972796: (e, l, n) => {
            n.d(l, { T: () => d, Z: () => m });
            var a = n(202784),
                s = n(688715),
                t = n(731708),
                r = n(111677),
                i = n.n(r),
                c = n(416699);
            const o = i().ica87fde,
                u = (0, s.ju)("https://support.x.com/articles/20172060"),
                d = (e) => {
                    const { screenName: l } = e,
                        n = a.useMemo(() => a.createElement(i().I18NFormatMessage, { $i18n: "e6264621", screenName: l }, a.createElement(t.ZP, { link: u }, i().c7ec6faf)), [l]);
                    return a.createElement(c.Z, { header: o, message: n, screenName: l });
                },
                m = a.memo(d);
        },
        21437: (e, l, n) => {
            n.d(l, { X: () => d, Z: () => m });
            var a = n(202784),
                s = n(688715),
                t = n(731708),
                r = n(111677),
                i = n.n(r),
                c = n(416699);
            const o = i().bd598c70,
                u = (0, s.ju)("https://support.x.com/articles/14016"),
                d = (e) => {
                    const { screenName: l } = e,
                        n = a.useMemo(() => a.createElement(i().I18NFormatMessage, { $i18n: "i1824ce3", screenName: l }, a.createElement(t.ZP, { link: u }, i().e617164b)), [l]);
                    return a.createElement(c.Z, { header: o, message: n, screenName: l });
                },
                m = a.memo(d);
        },
        220544: (e, l, n) => {
            n.d(l, { Z: () => m, i: () => d });
            var a = n(202784),
                s = n(731708),
                t = n(111677),
                r = n.n(t),
                i = n(686689),
                c = n(416699);
            const o = r().g8475f82,
                u = a.createElement(r().I18NFormatMessage, { $i18n: "da9d52d7" }, a.createElement(s.ZP, { link: "https://support.x.com/articles/18311" }, r().j5e1cf59)),
                d = (e) => {
                    const { screenName: l, suspendHeader: n, suspendMessage: s } = e,
                        t = n ? a.createElement(i.Z, { entities: n.entities, rtl: n.rtl, text: n.text }) : o,
                        r = s ? a.createElement(i.Z, { entities: s.entities, rtl: s.rtl, text: s.text }) : u;
                    return a.createElement(c.Z, { header: t, message: r, screenName: l });
                },
                m = a.memo(d);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ExtendedUserProfile.3c4c8f7a.js.map
