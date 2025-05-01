"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ShareJob"],
    {
        9577: (e, a, l) => {
            l.d(a, { Z: () => y });
            var n = l(202784),
                t = l(325686),
                r = l(530732),
                i = l(392237),
                s = l(731708),
                o = l(264171),
                c = l(190636),
                u = l(457458),
                d = l(725516),
                m = l(272590);
            const g = i.default.create((e) => ({ card: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space20, height: "100%" }, cardLayout: { display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%" }, cardMeta: { display: "flex", flexDirection: "column", gap: 8 }, cardSubtext: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 }, withIcon: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, contentBackground: { backgroundColor: e.colors.cellBackground }, darkModeContentBackground: { backgroundColor: e.colors.gray0 } })),
                y = ({ formattedSalary: e, id: a, isVerifiedOrg: l, isViewerFollowsUser: y, jobIndex: p, location: b, profileId: k, redirectUrl: f, salaryInterval: h, timestamp: _, title: F }) => {
                    const E = (0, d.z)(),
                        v = n.useCallback(() => {
                            E.scribe({ ...(0, m.yt)("jobs_module", "click", "job"), data: { profile_id: k, items: [{ position: p, id: a, is_viewer_follows_user: y }] } });
                        }, [E, a, y, p, k]),
                        w = n.useMemo(() => `/i/jobs/${a}`, [a]);
                    return n.createElement(r.Z, { link: l ? { pathname: w, external: !0 } : f || "", onClick: v, role: "link", style: [g.card, i.default.isDarkMode() ? g.darkModeContentBackground : g.contentBackground] }, n.createElement(t.Z, { style: g.cardLayout }, n.createElement(s.ZP, { hoverLabel: { label: F, withDelay: !0 }, numberOfLines: 1, size: "subtext2", weight: "bold" }, F), n.createElement(t.Z, { style: g.cardMeta }, n.createElement(t.Z, { style: g.withIcon }, n.createElement(s.ZP, { color: "gray700", size: "subtext3" }, n.createElement(o.default, null)), n.createElement(s.ZP, { color: "gray700", hoverLabel: { label: b, withDelay: !0 }, numberOfLines: 1, size: "subtext3", weight: "normal" }, b)), e || _ ? n.createElement(t.Z, { style: g.cardSubtext }, e ? n.createElement(t.Z, { style: g.withIcon }, n.createElement(s.ZP, { color: "gray700", size: "subtext3" }, n.createElement(c.default, null)), n.createElement(s.ZP, { color: "gray700", hoverLabel: { label: b, withDelay: !0 }, numberOfLines: 1, size: "subtext3", style: g.withIcon, weight: "normal" }, (0, u.M)(e, h))) : null, _ ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "normal" }, _) : null) : null)));
                };
        },
        272590: (e, a, l) => {
            function n() {
                return { section: "profile_modules", action: "impression" };
            }
            function t(e, a) {
                return { section: "profile_modules", component: "about_module", element: a, action: e };
            }
            function r(e, a, l) {
                return { section: "profile_modules", component: e, element: l, action: a };
            }
            l.d(a, { RV: () => o, UJ: () => r, dm: () => t, nw: () => n, yt: () => i });
            const i = (e, a, l) => ({ section: "profile_modules", component: e, element: l, action: a }),
                s = (e, a, l) => ({ id: e, position: a, is_viewer_follows_user: l }),
                o = (e, a, l, n) => ({ profile_id: n, items: [s(e, a, l)] });
        },
        664727: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n,
                t,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "status" }), (t = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useSetupOrgMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "status", variableName: "status" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "ConfigureOrganizationResult",
                                kind: "LinkedField",
                                name: "configure_organization",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [t, n], kind: "Operation", name: "useSetupOrgMutation", selections: r },
                    params: { id: "oLe4Lwz_ozrlSO5yPyzFLg", metadata: {}, name: "useSetupOrgMutation", operationKind: "mutation", text: null },
                };
            i.hash = "439dfdcba4832cc106164180b8ada679";
            const s = i;
            var o = l(202784),
                c = (l(585488), l(351743)),
                u = l.n(c);
            const d = s,
                m = () => {
                    const [e, a] = u()(d);
                    return [
                        o.useCallback(
                            (a) => {
                                e(a);
                            },
                            [e],
                        ),
                        a,
                    ];
                };
        },
        638679: (e, a, l) => {
            l.r(a), l.d(a, { default: () => Ee });
            var n,
                t,
                r,
                i,
                s,
                o,
                c = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "ShareJobQuery",
                        selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (r = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }), { alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), t, { alias: null, args: null, concreteType: "RecruitingOrganizationCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "ApiRecruitingOrganization", abstractKey: null })], storageKey: null }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "ShareJobQuery", selections: [{ alias: "viewer", args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [t, r, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, { alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [o, s], storageKey: null }, i], storageKey: null }, i], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "WJzdyXabqnLlXPJFh_IfNw", metadata: {}, name: "ShareJobQuery", operationKind: "query", text: null },
                };
            c.hash = "531d2873f9e79301a2eadecd409a4051";
            const u = c;
            var d = l(202784),
                m = l(325686),
                g = (l(585488), l(167630)),
                y = l(392237),
                p = l(757700),
                b = l(736063),
                k = l(535338),
                f = (function () {
                    var e = [
                            { defaultValue: null, kind: "LocalArgument", name: "jobId" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ],
                        a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "job_id", variableName: "jobId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "CreateJobShareItemOutput",
                                kind: "LinkedField",
                                name: "create_job_share_item",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ];
                    return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "AddJobMutation", selections: a, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "AddJobMutation", selections: a }, params: { id: "Jpo1B2QEin48EYWnH55r1w", metadata: {}, name: "AddJobMutation", operationKind: "mutation", text: null } };
                })();
            f.hash = "5536f9946dcfe5afd51e8f6ffecde72c";
            const h = f;
            var _ = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "jobId" }],
                    a = [
                        { kind: "Variable", name: "rest_id", variableName: "jobId" },
                        { kind: "Literal", name: "s", value: "f3d8" },
                    ],
                    l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    t = {
                        alias: null,
                        args: null,
                        concreteType: "JobCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                        ],
                        storageKey: null,
                    };
                return {
                    fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "AddJobQuery", selections: [{ alias: "jobData", args: a, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [l, n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t], type: "ApiJob", abstractKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "AddJobQuery",
                        selections: [
                            {
                                alias: "jobData",
                                args: a,
                                concreteType: "ApiJobResults",
                                kind: "LinkedField",
                                name: "job_by_rest_id",
                                plural: !1,
                                selections: [
                                    l,
                                    n,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                            { kind: "InlineFragment", selections: [t, l], type: "ApiJob", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "k6yQNpBSEO93ZgAM113Qgw", metadata: {}, name: "AddJobQuery", operationKind: "query", text: null },
                };
            })();
            _.hash = "d1623fcb8bdbdb0fa14bb939cf0849a7";
            const F = _;
            var E = l(351743),
                v = l.n(E),
                w = l(107267),
                x = l(731708),
                K = l(154003),
                S = l(674132),
                Z = l.n(S),
                C = l(9577),
                I = l(2430),
                L = l(454104);
            const z = Z().caa352f0,
                j = Z().i08bee0e,
                O = Z().d7ccaea2,
                P = Z().h05e4a7a,
                R = Z().b518daae,
                J = Z().cfd2f35e,
                M = Z().fc2a5c92,
                T = Z().d338f53e,
                D = ({ onClose: e }) => {
                    const { isVerifiedOrg: a } = (0, L.Z)();
                    return d.createElement(d.Fragment, null, d.createElement(x.ZP, { color: "text", size: "headline1", weight: "bold" }, a ? j : z), d.createElement(x.ZP, { color: "gray700", size: "subtext1", style: V.root }, a ? P : O), d.createElement(K.ZP, { link: { pathname: a ? "/i/verified/jobs" : "/i/premium/hiring", method: "replace" }, type: "brandFilled" }, R), d.createElement(K.ZP, { onClick: e, type: "primaryOutlined" }, J));
                },
                V = y.default.create((e) => ({ root: { maxWidth: "400px" } })),
                A = ({ errorMsg: e, onClose: a, retry: l, title: n = M }) => ("too many active job share items" === e ? d.createElement(D, { onClose: a }) : d.createElement(d.Fragment, null, d.createElement(x.ZP, { color: "text", size: "headline1", weight: "bold" }, n), d.createElement(x.ZP, { color: "gray700", size: "subtext1" }, e), d.createElement(K.ZP, { onClick: l, type: "brandFilled" }, T), d.createElement(K.ZP, { onClick: a, type: "primaryOutlined" }, J))),
                N = Z().f48e9c52,
                Q = Z().f6757978,
                B = Z().i329c5a6,
                q = Z().j58e7b00,
                H = Z().ia5e7488,
                U = y.default.create((e) => ({ root: { maxWidth: "400px" } })),
                W = ({ onClose: e, screenName: a }) => {
                    const { isVerifiedOrg: l } = (0, L.Z)();
                    return d.createElement(d.Fragment, null, d.createElement(x.ZP, { color: "text", size: "headline1", weight: "bold" }, N), d.createElement(x.ZP, { color: "gray700", size: "subtext1", style: U.root }, Q), d.createElement(K.ZP, { link: { pathname: l ? "/i/verified/jobs" : "/i/premium/hiring", method: "replace" }, type: "primaryFilled" }, B), d.createElement(K.ZP, { link: { pathname: `/${a}`, method: "replace" }, type: "primaryFilled" }, q), d.createElement(K.ZP, { onClick: e, type: "primaryOutlined" }, H));
                },
                $ = Z().bae2f5f0,
                X = Z().cbcaaa1a,
                G = Z().f58cf1ac,
                Y = Z().cfd2f35e,
                ee = Z().j4ae9960,
                ae = F,
                le = h,
                ne = "SUCCESS",
                te = ({ job: e, jobId: a, screenName: l, userId: n }) => {
                    const t = (0, w.useHistory)(),
                        [r, i] = d.useState(null),
                        [s, o] = v()(le),
                        c = d.useCallback(() => {
                            s({
                                variables: { jobId: a, userId: n },
                                onCompleted: (e) => {
                                    e.create_job_share_item?.success ? i(ne) : i(e.create_job_share_item?.message || ee);
                                },
                                onError: () => {
                                    i(ee);
                                },
                            });
                        }, [s, a, n]),
                        u = d.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return r === ne ? d.createElement(W, { onClose: u, screenName: l }) : r ? d.createElement(A, { errorMsg: r, onClose: u, retry: c, screenName: l }) : d.createElement(d.Fragment, null, d.createElement(x.ZP, { color: "text", size: "headline1", weight: "bold" }, $), d.createElement(x.ZP, { color: "gray700", size: "subtext1" }, X), d.createElement(m.Z, { style: re.spotlightCard }, d.createElement(C.Z, { formattedSalary: e.formatted_salary, id: a, jobIndex: 0, location: e.location, maxSalary: e.salary_max, minSalary: e.salary_min, redirectUrl: "", salaryInterval: e.salary_interval, title: e.title || "" })), d.createElement(K.ZP, { disabled: o, onClick: c, type: "brandFilled" }, G), d.createElement(K.ZP, { disabled: o, onClick: u, type: "primaryOutlined" }, Y));
                },
                re = y.default.create((e) => ({ spotlightCard: { borderRadius: e.borderRadii.large, boxShadow: e.boxShadows.xSmall, marginVertical: e.spaces.space16, marginHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})`, overflow: "hidden", flexGrow: 1 } })),
                ie = ({ jobId: e, screenName: a, userId: l }) => {
                    const { jobData: n } = (0, k.p)(ae, { jobId: e });
                    return n?.result?.core ? d.createElement(te, { job: n.result.core, jobId: e, screenName: a, userId: l }) : null;
                },
                se = ({ screenName: e, userId: a }) => {
                    const l = (0, w.useHistory)(),
                        n = (0, w.useLocation)(),
                        t = (0, I.BX)(n.query.jid);
                    return t ? d.createElement(ie, { jobId: t, screenName: e, userId: a }) : (l.goBack(), null);
                };
            var oe = l(614983),
                ce = l.n(oe),
                ue = l(992942),
                de = l(664727),
                me = l(62668);
            const ge = Z().h39a5448,
                ye = Z().d204515c,
                pe = Z().hc67be9e,
                be = y.default.create((e) => ({ imageContainer: { flex: 1 }, image: { minHeight: "300px" } })),
                ke = ({ orgQueryId: e, userId: a }) => {
                    const [l, n] = (0, de.Z)(),
                        t = d.useCallback(() => {
                            a &&
                                l({
                                    variables: { userId: a },
                                    updater: (a, l) => {
                                        if (!e || !l?.configure_organization?.success) return;
                                        const n = a.get(e);
                                        ce()(n, "orgRecord must be specified");
                                        const t = n.getOrCreateLinkedRecord("core", "RecruitingOrganizationCore");
                                        n.setLinkedRecord(t, "core");
                                    },
                                });
                        }, [e, l, a]);
                    return d.createElement(d.Fragment, null, d.createElement(x.ZP, { color: "text", size: "headline1", weight: "bold" }, ge), d.createElement(x.ZP, { color: "gray700", size: "subtext1" }, ye), d.createElement(m.Z, { style: be.imageContainer }, d.createElement(ue.Z, { "aria-label": "Jobs preview", resizeMode: "contain", source: me, style: be.image })), d.createElement(K.ZP, { disabled: n, onClick: t, type: "brandFilled" }, pe));
                },
                fe = u,
                he = () => {
                    const {
                            viewer: {
                                user_results: { result: e },
                            },
                        } = (0, k.p)(fe, {}),
                        a = Boolean(e.recruiting_organization_results?.result?.core),
                        l = e.recruiting_organization_results?.result?.__id,
                        n = e.rest_id,
                        t = e.legacy?.screen_name,
                        r = d.useCallback(() => (e ? (a && n && t ? d.createElement(se, { screenName: t, userId: n }) : d.createElement(ke, { orgQueryId: l, userId: n })) : d.createElement(g.Z, null)), [a, l, e, t, n]);
                    return d.createElement(d.Fragment, null, r());
                },
                _e = { context: "ShareJob" },
                Fe = y.default.create((e) => ({ modalStyles: { padding: e.spaces.space16, gap: e.spaces.space16 } })),
                Ee = ({ history: e }) => d.createElement(b.H, { errorConfig: _e }, d.createElement(p.ZP, { clickMaskToClose: !0, history: e, modalSize: "fitChildren", withBackground: !0 }, d.createElement(m.Z, { style: Fe.modalStyles }, d.createElement(he, null))));
        },
        454104: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n = l(443781);
            const t = () => {
                const { userClaims: e } = (0, n.QZ)(),
                    a = e.isVerifiedOrg();
                return { isVerifiedOrg: a, basePath: a ? "/i/verified/jobs" : "/i/premium/hiring" };
            };
        },
        89217: (e, a, l) => {
            l.d(a, { Ju: () => m, Qw: () => g, eo: () => c });
            var n = l(674132),
                t = l.n(n);
            const r = t().c69eb656,
                i = t().g46ae43c,
                s = t().jf7d4cc6,
                o = t().b2214572,
                c = Object.freeze({ full_time: r, full_time_contract: i, part_time: s, contract_to_hire: o }),
                u = t().f8337bd6,
                d = t().i935bf88,
                m = Object.freeze({ 1: u, 2: d }),
                g = Object.freeze({ annually: { label: u, value: 1 }, hourly: { label: d, value: 2 } });
        },
        457458: (e, a, l) => {
            l.d(a, { G: () => c, M: () => o });
            l(571372);
            var n = l(301503),
                t = l(674132),
                r = l.n(t),
                i = l(89217);
            const s = r().b75b8ffd,
                o = (e, a = 1) => {
                    const l = a ?? 1;
                    return i.Ju[l.toString()] ? s({ salary: e, interval: i.Ju[l.toString()] }) : e;
                },
                c = (e) => {
                    if (e)
                        try {
                            const a = JSON.parse(e);
                            if (!a.entityMap || !a.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, n.convertFromRaw)(a).hasText()) return;
                            return a;
                        } catch (e) {}
                };
        },
        264171: (e, a, l) => {
            l.r(a), l.d(a, { default: () => o });
            var n = l(202784),
                t = l(890601),
                r = l(783427),
                i = l(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        62668: (e, a, l) => {
            e.exports = l.p + "splash-preview.9856fd5a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ShareJob.15b3e20a.js.map
