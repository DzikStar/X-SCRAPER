"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs", "icons/IconStarStroke-js"],
    {
        626926: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l,
                r,
                t,
                o = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }, r], storageKey: null }, t], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "RxOP--hDqELH_fWn5VylUA", metadata: {}, name: "JobListItemContentUserQuery", operationKind: "query", text: null } };
            o.hash = "a917044255331aa25e3b5342759ae37c";
            const i = o;
        },
        436065: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobSearchListItem_company",
                selections: [
                    { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null },
                ],
                type: "ApiCompanyProfile",
                abstractKey: null,
                hash: "ca9ca8e5aa20a998fc9c066e6296d8ba",
            };
            const r = l;
        },
        501527: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l,
                r,
                t = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "JobSearchListItem_item",
                    selections: [
                        {
                            kind: "InlineFragment",
                            selections: [
                                (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_job" }], storageKey: null },
                                { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [l, (r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [l, r, { args: null, kind: "FragmentSpread", name: "JobSearchListItem_company" }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null },
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserResults",
                                    kind: "LinkedField",
                                    name: "user_results",
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
                                                        { args: null, kind: "FragmentSpread", name: "JobSearchListItem_user" },
                                                        { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
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
                            type: "ApiJob",
                            abstractKey: null,
                        },
                    ],
                    type: "JobResult",
                    abstractKey: "__isJobResult",
                };
            t.hash = "de9a0be55f653b840e5aa925f7ba7b80";
            const o = t;
        },
        891717: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobSearchListItem_job",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                ],
                type: "JobCore",
                abstractKey: null,
                hash: "abd508d41c19a30fe16054d14e2c50d7",
            };
            const r = l;
        },
        176811: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobSearchListItem_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserVerification",
                        kind: "LinkedField",
                        name: "verification",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "27a5df32b6e468f19d7596bab1b6cd32",
            };
            const r = l;
        },
        643331: (e, a, n) => {
            n.d(a, { Z: () => d });
            var l,
                r,
                t,
                o,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "jobId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sentiment" }), (t = { defaultValue: null, kind: "LocalArgument", name: "twclid" }), (o = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "SentimentActionButtonMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "job_id", variableName: "jobId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "sentiment", variableName: "sentiment" },
                                    { kind: "Variable", name: "twclid", variableName: "twclid" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "UpdateUserJobSentimentResult",
                                kind: "LinkedField",
                                name: "update_user_job_sentiment",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "sentiment", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [o, l, r, t], kind: "Operation", name: "SentimentActionButtonMutation", selections: i },
                    params: { id: "1smesvHITcf79zPEvtAqOA", metadata: {}, name: "SentimentActionButtonMutation", operationKind: "mutation", text: null },
                };
            s.hash = "0a931e00dd50f5310fb28d29e83f884c";
            const d = s;
        },
        15022: (e, a, n) => {
            n.d(a, { Z: () => m });
            var l,
                r,
                t,
                o,
                i,
                s,
                d,
                c,
                u = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "jobId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "SentimentActionsQuery",
                        selections: [
                            {
                                alias: "jobData",
                                args: (r = [
                                    { kind: "Variable", name: "rest_id", variableName: "jobId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "ApiJobResults",
                                kind: "LinkedField",
                                name: "job_by_rest_id",
                                plural: !1,
                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null }], type: "ApiJob", abstractKey: null })], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (s = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(d = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "SentimentActionsQuery",
                        selections: [
                            { alias: "jobData", args: r, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), i], storageKey: null }, o], storageKey: null },
                            { alias: "viewer", args: s, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [o], type: "User", abstractKey: null }, d], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "qHd1d0swWQGc38vT_2YChQ", metadata: {}, name: "SentimentActionsQuery", operationKind: "query", text: null },
                };
            u.hash = "e5a668a0d2bfaed6901573b493e6449a";
            const m = u;
        },
        856438: (e, a, n) => {
            n.d(a, { Z: () => m });
            var l = n(202784),
                r = n(868634),
                t = n(731708),
                o = n(392237),
                i = n(111677),
                s = n.n(i),
                d = n(262009);
            const c = s().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => l.createElement(r.ZP, { style: u.label, type: "priority" }, l.createElement(t.ZP, { style: u.featuredLabel }, l.createElement(d.default, { style: u.featuredIcon }), c));
        },
        471957: (e, a, n) => {
            n.d(a, { Z: () => P });
            var l = n(626926),
                r = n(202784),
                t = n(325686),
                o = (n(585488), n(277660)),
                i = n.n(o),
                s = n(392237),
                d = n(725405),
                c = n(535338),
                u = n(164936),
                m = (n(136728), n(107267)),
                b = n(731708),
                h = n(519172),
                p = n(601413),
                f = n(952428),
                g = n(823161),
                y = n(757483),
                k = n(457458),
                D = n(412876),
                w = n(549599);
            const S = ({ fallbackName: e, user: a }) => {
                    const n = i()(w.fR, a);
                    return n && n.core && n.core.name && n.core.screen_name ? r.createElement(b.ZP, { size: "subtext2", style: v.userName }, r.createElement(t.Z, { style: v.name }, r.createElement(b.ZP, { numberOfLines: 1 }, n.core.name), r.createElement(h.Z, { isVerified: n.verification?.verified ?? !1, verifiedType: n.verification?.verified_type ?? void 0 })), r.createElement(p.Z, { screenName: n.core.screen_name, size: "subtext2" })) : e ? r.createElement(b.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                v = s.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: y.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                _ = ({ companyProfile: e, formattedSalary: a, jobId: n, jobLocation: l, jobTitle: o, onClick: i, renderActions: s, salaryInterval: d, user: c, withBottomBorder: u = !0 }) => {
                    const { jobId: h } = (0, m.useParams)(),
                        p = r.useMemo(() => ({ label: o }), [o]),
                        y = r.useMemo(() => {
                            const e = [v.listContainer];
                            return h === n ? e.push(v.activeItem) : u && e.push(v.inactiveItem), e;
                        }, [h, n, u]);
                    return r.createElement(f.Z, { onClick: i, role: "listitem", style: y }, r.createElement(t.Z, { style: v.itemRow }, c ? r.createElement(D.Y, { size: "xLarge", user: c }) : r.createElement(g.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(t.Z, { style: v.items }, r.createElement(b.ZP, { hoverLabel: p, numberOfLines: 2, size: "subtext1", weight: "bold" }, o), r.createElement(S, { fallbackName: e?.core?.name, user: c }), r.createElement(b.ZP, { color: "gray700", size: "subtext2" }, l), a ? r.createElement(b.ZP, { color: "gray700", size: "subtext2" }, (0, k.M)(a, d)) : null)), s && r.createElement(t.Z, null, s()));
                },
                I = l.Z,
                M = s.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                P = ({ actions: e, companyProfile: a, job: n, jobId: l, jobIndex: o, onClick: s, relayId: m, user: b, userSentiment: h, withBottomBorder: p = !0 }) => {
                    const f = (0, d.Z)(),
                        { viewer: g } = (0, c.p)(I, {}),
                        y = i()(w.qV, n),
                        k = i()(w.dB, a),
                        D = g?.user_results?.result?.__id,
                        S = r.useCallback(() => {
                            f.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: l, position: o }] } }), s();
                        }, [f, l, o, s]),
                        v = r.useCallback(() => r.createElement(t.Z, { style: M.actions }, r.createElement(u.ZP, { actions: e, jobId: l, relayId: m, userRelayId: D, userSentiment: h })), [e, l, m, D, h]);
                    return y && y.title && y.location ? r.createElement(_, { companyProfile: k, formattedSalary: y.formatted_salary, jobId: l, jobLocation: y.location, jobTitle: y.title, onClick: S, renderActions: v, salaryInterval: y.salary_interval, user: b, withBottomBorder: p }) : null;
                };
        },
        549599: (e, a, n) => {
            n.d(a, { KM: () => g, ZP: () => y, dB: () => p, fR: () => f, qV: () => h });
            n(136728);
            var l = n(501527),
                r = n(176811),
                t = n(436065),
                o = n(891717),
                i = n(202784),
                s = (n(585488), n(277660)),
                d = n.n(s),
                c = n(107267),
                u = n(708852),
                m = n(471957),
                b = n(512549);
            const h = o.Z,
                p = t.Z,
                f = r.Z,
                g = l.Z,
                y = ({ item: e, itemId: a, itemIndex: n }) => {
                    const l = (0, u.Ji)(),
                        r = (0, c.useHistory)(),
                        t = (0, c.useLocation)(),
                        o = d()(g, e),
                        s = o?.core,
                        h = o?.user_results?.result,
                        p = o?.company_profile_results?.result,
                        f = o?.id || "",
                        y = o?.user_sentiment,
                        k = i.useCallback(() => {
                            l ? r.push({ pathname: `/jobs/${a}`, query: t.query }) : r.push({ pathname: `/m/jobs/${a}`, query: t.query });
                        }, [r, l, a, t.query]);
                    return o && s ? i.createElement(m.Z, { actions: [b.h5], companyProfile: p, job: s, jobId: a, jobIndex: n, onClick: k, relayId: f, user: h, userSentiment: y }) : null;
                };
        },
        324948: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l = n(202784),
                r = n(691533);
            const t = (0, n(523561).Z)({
                    loader: () =>
                        Promise.all([
                            n.e("icons.21"),
                            n.e("icons.16"),
                            n.e("icons.10"),
                            n.e("icons.1"),
                            n.e("icons.19"),
                            n.e("icons.0"),
                            n.e("icons.23"),
                            n.e("icons.8"),
                            n.e("icons.2"),
                            n.e("icons.3"),
                            n.e("icons.15"),
                            n.e("modules.common-e907d115"),
                            n.e("modules.common-e019dbda"),
                            n.e("icons.9"),
                            n.e("icons.7"),
                            n.e("icons.24"),
                            n.e("icons.13"),
                            n.e("icons.29"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                            n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                            n.e("loader.WideLayout-6107ac1a"),
                            n.e("loader.WideLayout-9f4db315"),
                        ]).then(n.bind(n, 741494)),
                }),
                o = (e) => l.createElement(r.Z, { hideOnError: !0 }, l.createElement(t, e));
        },
        512549: (e, a, n) => {
            n.d(a, { ZP: () => S, h5: () => y, pN: () => k, tv: () => g });
            var l = n(643331),
                r = n(202784),
                t = n(325686),
                o = (n(585488), n(351743)),
                i = n.n(o),
                s = n(530732),
                d = n(731708),
                c = n(392237),
                u = n(106186),
                m = n(258292),
                b = n(616894),
                h = n(443781),
                p = n(292546);
            const f = l.Z,
                g = (e, a, n) => {
                    const { viewerUserId: l } = (0, h.QZ)(),
                        [t] = i()(f),
                        [o] = (0, p.Z)(),
                        s = o.get("twclid") || null,
                        d = r.useCallback(
                            (e, l) => {
                                const r = e.get(a);
                                if ((r && r.setValue(l, "user_sentiment"), n)) {
                                    const a = e.get(n);
                                    a && a.invalidateRecord();
                                }
                            },
                            [a, n],
                        );
                    return r.useCallback(
                        (a) => {
                            l && t({ variables: { jobId: e, userId: l, sentiment: a, twclid: s }, optimisticUpdater: (e) => d(e, a), updater: (e) => d(e, a) });
                        },
                        [t, d, e, s, l],
                    );
                },
                y = "like",
                k = "dislike",
                D = ({ Icon: e, SelectedIcon: a, activeStyle: n, hoverStyle: l, isSelected: o, label: i, onClick: c, sentiment: u }) => {
                    const m = (e) => (e ? l : o ? n : {});
                    return r.createElement(
                        t.Z,
                        null,
                        r.createElement(s.Z, { interactiveStyles: null, onClick: (e) => c(u, e), style: w.sentimentActionContainer }, ({ isHovered: n }) => r.createElement(r.Fragment, null, o ? r.createElement(a, { style: m(n) }) : r.createElement(e, { style: m(n) }), r.createElement(d.ZP, { size: "subtext2", style: { ...m(n) } }, i))),
                    );
                },
                w = c.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                S = ({ jobId: e, relayId: a, type: n, userRelayId: l, userSentiment: t }) => {
                    const o = g(e, a, l),
                        i = r.useCallback(
                            (e, a) => {
                                a.stopPropagation();
                                o(e !== t ? e : "none");
                            },
                            [o, t],
                        );
                    return n === y ? r.createElement(D, { Icon: u.default, SelectedIcon: m.default, activeStyle: w.likeActive, hoverStyle: w.likeHover, isSelected: t === y, label: "Save job", onClick: i, sentiment: y }) : n === k ? r.createElement(D, { Icon: b.default, SelectedIcon: b.default, activeStyle: w.dislikeActive, hoverStyle: w.dislikeHover, isSelected: t === k, label: "Not interested", onClick: i, sentiment: k }) : null;
                };
        },
        334346: (e, a, n) => {
            n.d(a, { C: () => s, Z: () => i });
            var l = n(807896),
                r = n(202784),
                t = n(524084),
                o = n(768572);
            const i = "stable_sort_index",
                s = r.forwardRef((e, a) => {
                    const n = e.cacheKey;
                    return r.createElement(o.ZP, { identifier: n }, r.createElement(t.Z, (0, l.Z)({ ref: a }, e)));
                });
        },
        252021: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l = n(202784),
                r = n(107267),
                t = n(115553);
            const o = (e) => {
                (0, r.useHistory)();
                return l.createElement(t.A, e);
            };
        },
        652904: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l = n(202784),
                r = n(500002),
                t = n(668214),
                o = n(997174),
                i = n(118823);
            const s = (0, t.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends l.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: n, search: l },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: t, search: o },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    a.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && a.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const d = r || i;
                    ((d && r !== i) || (!d && n !== t) || l !== o || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: n, updateTweetDetailNav: l } = e;
                    a.scribePageImpression(), n(a.contextualScribeNamespace, a.contextualScribeData), l(a.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(s(d));
        },
        292546: (e, a, n) => {
            n.d(a, { Z: () => t });
            n(543673), n(240753), n(128399), n(136728);
            var l = n(202784),
                r = n(107267);
            const t = () => {
                const e = (0, r.useLocation)(),
                    a = (0, r.useHistory)(),
                    [n, t] = l.useState(new URLSearchParams(e.search));
                l.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const o = l.useCallback(
                    (l, r) => {
                        const t = new URLSearchParams(n);
                        t.set(l, r), a.push(`${e.pathname}?${t.toString()}`);
                    },
                    [a, e.pathname, n],
                );
                return [l.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        524084: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l = n(202784),
                r = n(523561),
                t = n(195560);
            const o = (0, r.Z)({ loader: () => n.e("loader.AbsolutePower").then(n.bind(n, 590136)), renderPlaceholder: (e, a) => l.createElement(t.Z, { hasError: e, onRetry: a }) });
        },
        478414: (e, a, n) => {
            n.d(a, { Hx: () => s, K: () => t, bb: () => i, gv: () => o, kg: () => d, yW: () => c });
            var l = n(779802),
                r = n(392237);
            const t = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                o = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                i = ({ h1FontSize: e, h2FontSize: a, paragraphFontSize: n }) => [
                    { blockType: l.P7.header1, label: l.et, component: (0, l.LI)({ size: e, children: l.et, extendedWidth: !0 }) },
                    { blockType: l.P7.header2, label: l.PW, component: (0, l.LI)({ size: a, weight: "bold", children: l.PW }) },
                    { blockType: l.P7.paragraph, label: l.$u, component: (0, l.LI)({ size: n, children: l.$u }) },
                ],
                s = "extended-profile",
                d = "extended-profile-mobile-webview",
                c = (e, { h1FontSize: a, h2FontSize: n, paragraphFontSize: l }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[a]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[a]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${r.default.theme.fontSizes[n]};\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes[l]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes[l]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[l]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: calc(${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[l]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[l]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[l]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        985124: (e, a, n) => {
            n.d(a, { $J: () => i, WA: () => Z, ZC: () => v, cj: () => B, eo: () => l.eo, hb: () => N, kW: () => s, pg: () => _, rP: () => o, u4: () => U, xk: () => x });
            var l = n(89217),
                r = n(111677),
                t = n.n(r);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                i = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                s = Object.entries(l.eo).map(([e, a]) => ({ label: String(a), value: e })),
                d = t().d2b8da2c,
                c = t().cd958040,
                u = t().c5760ca2,
                m = t().d31b4a2a,
                b = t().df1b7550,
                h = t().f38959a6,
                p = t().bc78a26c,
                f = t().ec28738e,
                g = t().icb06308,
                y = t().d0b978ec,
                k = t().af19cdc2,
                D = t().e4a51fca,
                w = t().e8ca78ae,
                S = t().c365dcc6,
                v = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: m, marketing: b, sales_am: h, operations: p, people_hr: f, finance_accounting: g, legal_compliance: y, science_engineering: k, medical: D, construction_trades: w, other: S }),
                _ = Object.entries(v).map(([e, a]) => ({ label: String(a), value: e })),
                I = t().e25d75e4,
                M = t().e89b3f04,
                P = t().h55825dc,
                F = t().cc537386,
                C = t().jfc3cece,
                A = t().e1b683aa,
                $ = t().c4627fda,
                L = t().db75b47c,
                Z = Object.freeze({ intern: I, entry_level: M, junior: P, mid_level: F, senior: C, lead: A, manager: $, executive: L }),
                x = Object.entries(Z).map(([e, a]) => ({ label: String(a), value: e })),
                K = t().i312f0ce,
                j = t().b4aff05e,
                R = t().c08b9138,
                E = t().ia5d6422,
                T = t().h97c7f42,
                z = t().ibed2d04,
                B = Object.freeze({ onsite: { label: K, description: E, value: "onsite" }, remote: { label: R, description: z, value: "remote" }, hybrid: { label: j, description: T, value: "hybrid" } }),
                U = Object.keys(B).map((e) => ({ label: B[e].label, value: e, description: B[e].description })),
                N = Object.keys(l.Qw).map((e) => ({ ...l.Qw[e], value: String(l.Qw[e].value) }));
        },
        943052: (e, a, n) => {
            n.d(a, { Z: () => t });
            n(543673), n(240753), n(128399), n(136728);
            var l = n(202784),
                r = n(107267);
            const t = () => {
                const e = (0, r.useLocation)(),
                    a = (0, r.useHistory)(),
                    [n, t] = l.useState(new URLSearchParams(e.search));
                l.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const o = l.useCallback(
                        (l, r) => {
                            const t = new URLSearchParams(n);
                            t.set(l, r), a.push(`${e.pathname}?${t.toString()}`);
                        },
                        [a, e.pathname, n],
                    ),
                    i = l.useCallback(
                        (l) => {
                            const r = new URLSearchParams(n);
                            for (const e in l) l[e] ? r.set(e, l[e]) : r.delete(e);
                            a.push(`${e.pathname}?${r.toString()}`);
                        },
                        [a, e.pathname, n],
                    );
                return [l.useMemo(() => new URLSearchParams(e.search), [e.search]), o, i];
            };
        },
        127218: (e, a, n) => {
            n.d(a, { C: () => g });
            var l = n(202784),
                r = n(614983),
                t = n.n(r),
                o = n(437429),
                i = n.n(o),
                s = n(57074),
                d = n.n(s),
                c = n(10622),
                u = n.n(c),
                m = n(585488),
                b = n(71620),
                h = n(163889),
                p = n(312771),
                f = n(535338);
            function g(e, a, n) {
                const [r, o] = l.useState(!1),
                    [s, c] = l.useState(null),
                    g = i()(),
                    y = d()(a),
                    k = (0, b.po)(),
                    D = (0, f.p)(e, y, n);
                return l.useMemo(() => {
                    const a = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    t()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: l } =
                            (function (e, a) {
                                try {
                                    t()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of a) t()(!!n, "The provided path is invalid."), t()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(D, a) || {},
                        i = (a) => {
                            r ||
                                (o(!0),
                                u()(g, e, { ...y, cursor: a }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), k(e);
                                    },
                                }));
                        },
                        d = () => {
                            n && i(n);
                        },
                        b = () => {
                            l && i(l);
                        },
                        f = () => {
                            i(void 0);
                        };
                    return s ? { subsequentFetchStatus: p.ZP.FAILED, error: s, fetchNext: d, fetchPrevious: b, refetch: f, data: D, hasNext: Boolean(n), hasPrevious: Boolean(l) } : { subsequentFetchStatus: r ? p.ZP.LOADING : p.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: b, refetch: f, data: D, hasNext: Boolean(n), hasPrevious: Boolean(l) };
                }, [e, D, r, s, g, y, k]);
            }
        },
        164936: (e, a, n) => {
            n.d(a, { ZP: () => u, r1: () => d });
            var l = n(15022),
                r = n(202784),
                t = (n(585488), n(512549)),
                o = n(952793),
                i = n(535338);
            const s = l.Z,
                d = ({ actions: e, jobId: a }) => {
                    const { jobData: n, viewer: l } = (0, i.p)(s, { jobId: a }),
                        t = n?.result?.id ?? "",
                        o = n?.result?.user_sentiment;
                    return r.createElement(c, { actions: e, jobId: a, relayId: t, userRelayId: l?.user_results?.result?.__id, userSentiment: o });
                },
                c = ({ actions: e, jobId: a, relayId: n, userRelayId: l, userSentiment: i }) => {
                    const s = (0, o.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && s ? r.createElement(r.Fragment, null, e.includes(t.pN) && r.createElement(t.ZP, { jobId: a, relayId: n, type: t.pN, userRelayId: l, userSentiment: i }), e.includes(t.h5) && r.createElement(t.ZP, { jobId: a, relayId: n, type: t.h5, userRelayId: l, userSentiment: i })) : null;
                },
                u = c;
        },
        28135: (e, a, n) => {
            n.d(a, { Z: () => F });
            n(136728);
            var l = n(202784),
                r = n(576648),
                t = n(107267),
                o = n(811176),
                i = n(40644),
                s = n(111677),
                d = n.n(s),
                c = n(630715),
                u = n(717160),
                m = n(885724),
                b = n(106186),
                h = n(786272),
                p = n(443781),
                f = n(952793),
                g = n(782642);
            const y = (e) => `/i/jobs/${e}`;
            var k = n(701796);
            const D = d().f508c49c,
                w = d().f88553c8,
                S = d().d6825dce,
                v = d().b9613442,
                _ = d().c2b3f0da,
                I = d().c791d3fc,
                M = { label: d().ifea3114, withDelay: !0 },
                P = ({ iconSize: e = "normal", jobId: a, jobUserId: n }) => {
                    const s = (0, g.p)(),
                        d = (0, t.useHistory)(),
                        { userClaims: P, viewerUserId: F } = (0, p.QZ)(),
                        C = (0, f.hC)("recruiting_jobs_list_share_enabled"),
                        A = (0, f.hC)("recruiting_pin_job_enabled") && (P.isTrueAndEnabled("subscriptions_feature_premium_jobs") || P.isVerifiedOrg()) && F !== n,
                        $ = l.useCallback(() => {
                            d.push({ query: { text: (0, k.w)(y(a)) }, pathname: "/messages/compose" });
                        }, [d, a]),
                        L = l.useCallback(() => {
                            r.Z.setString((0, k.w)(y(a))), s({ text: w });
                        }, [s, a]),
                        Z = l.useCallback(() => {
                            d.push({ query: { text: (0, k.w)(y(a)) }, pathname: "/compose/post" });
                        }, [d, a]),
                        x = l.useCallback(() => {
                            d.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, a]),
                        K = l.useCallback(() => {
                            const e = [];
                            return r.Z.isAvailable() && e.push({ text: D, onClick: L, Icon: c.default }), F && (e.push(((e) => ({ text: S, onClick: e, Icon: u.default }))($)), e.push(((e) => ({ text: v, onClick: e, Icon: m.default }))(Z))), A && e.push(((e) => ({ text: _, onClick: e, Icon: b.default }))(x)), e;
                        }, [L, $, x, Z, A, F]),
                        j = l.useCallback(
                            (e) => {
                                const a = K();
                                return a.length ? l.createElement(o.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [K],
                        ),
                        R = l.useCallback(() => {}, []);
                    return C ? l.createElement(i.ZP, { Icon: h.default, "aria-label": I, color: "text", hoverLabel: M, iconSize: e, onPress: R, renderMenu: j, testID: "job-share-action-btn" }) : null;
                },
                F = l.memo(P);
        },
        89217: (e, a, n) => {
            n.d(a, { Ju: () => m, Qw: () => b, eo: () => d });
            var l = n(111677),
                r = n.n(l);
            const t = r().c69eb656,
                o = r().g46ae43c,
                i = r().jf7d4cc6,
                s = r().b2214572,
                d = Object.freeze({ full_time: t, full_time_contract: o, part_time: i, contract_to_hire: s }),
                c = r().f8337bd6,
                u = r().i935bf88,
                m = Object.freeze({ 1: c, 2: u }),
                b = Object.freeze({ annually: { label: c, value: 1 }, hourly: { label: u, value: 2 } });
        },
        457458: (e, a, n) => {
            n.d(a, { G: () => d, M: () => s });
            n(571372);
            var l = n(301503),
                r = n(111677),
                t = n.n(r),
                o = n(89217);
            const i = t().b75b8ffd,
                s = (e, a = 1) => {
                    const n = a ?? 1;
                    return o.Ju[n.toString()] ? i({ salary: e, interval: o.Ju[n.toString()] }) : e;
                },
                d = (e) => {
                    if (e)
                        try {
                            const a = JSON.parse(e);
                            if (!a.entityMap || !a.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, l.convertFromRaw)(a).hasText()) return;
                            return a;
                        } catch (e) {}
                };
        },
        183806: (e, a, n) => {
            n.d(a, { Z: () => l });
            const l = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        106186: (e, a, n) => {
            n.r(a), n.d(a, { default: () => s });
            var l = n(202784),
                r = n(890601),
                t = n(783427),
                o = n(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M23.426 9.29L15.54 8.15 12.013 1 8.486 8.15.6 9.29l5.707 5.56-1.348 7.86L12.013 19l7.053 3.71-1.347-7.86 5.707-5.56zm-11.413 7.45l-4.397 2.31.84-4.89-3.558-3.47 4.916-.72 2.199-4.45 2.198 4.45 4.917.72-3.558 3.47.84 4.89-4.397-2.31z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.1e1f004a.js.map
