"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs"],
    {
        626926: (e, n, a) => {
            a.d(n, { Z: () => i });
            var t,
                r,
                l,
                o = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: (t = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: t, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "InlineFragment", selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }, r], storageKey: null }, l], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "RxOP--hDqELH_fWn5VylUA", metadata: {}, name: "JobListItemContentUserQuery", operationKind: "query", text: null } };
            o.hash = "a917044255331aa25e3b5342759ae37c";
            const i = o;
        },
        436065: (e, n, a) => {
            a.d(n, { Z: () => r });
            var t = {
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
            const r = t;
        },
        501527: (e, n, a) => {
            a.d(n, { Z: () => o });
            var t,
                r,
                l = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "JobSearchListItem_item",
                    selections: [
                        {
                            kind: "InlineFragment",
                            selections: [
                                (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_job" }], storageKey: null },
                                { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [t, (r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t, r, { args: null, kind: "FragmentSpread", name: "JobSearchListItem_company" }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
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
            l.hash = "de9a0be55f653b840e5aa925f7ba7b80";
            const o = l;
        },
        891717: (e, n, a) => {
            a.d(n, { Z: () => r });
            var t = {
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
            const r = t;
        },
        176811: (e, n, a) => {
            a.d(n, { Z: () => r });
            var t = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobSearchListItem_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
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
                hash: "260023464e8aca3b7ae13a5f7bf7d391",
            };
            const r = t;
        },
        643331: (e, n, a) => {
            a.d(n, { Z: () => s });
            var t,
                r,
                l,
                o,
                i,
                d = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "jobId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sentiment" }), (l = { defaultValue: null, kind: "LocalArgument", name: "twclid" }), (o = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [o, t, r, l], kind: "Operation", name: "SentimentActionButtonMutation", selections: i },
                    params: { id: "1smesvHITcf79zPEvtAqOA", metadata: {}, name: "SentimentActionButtonMutation", operationKind: "mutation", text: null },
                };
            d.hash = "0a931e00dd50f5310fb28d29e83f884c";
            const s = d;
        },
        15022: (e, n, a) => {
            a.d(n, { Z: () => m });
            var t,
                r,
                l,
                o,
                i,
                d,
                s,
                c,
                u = {
                    fragment: {
                        argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "jobId" }]),
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
                                selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null }], type: "ApiJob", abstractKey: null })], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (d = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: t,
                        kind: "Operation",
                        name: "SentimentActionsQuery",
                        selections: [
                            { alias: "jobData", args: r, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [l, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), i], storageKey: null }, o], storageKey: null },
                            { alias: "viewer", args: d, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [o], type: "User", abstractKey: null }, s], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "qHd1d0swWQGc38vT_2YChQ", metadata: {}, name: "SentimentActionsQuery", operationKind: "query", text: null },
                };
            u.hash = "e5a668a0d2bfaed6901573b493e6449a";
            const m = u;
        },
        229333: (e, n, a) => {
            a.d(n, { Z: () => u });
            var t = a(202784),
                r = a(466999),
                l = a(325686),
                o = a(392237),
                i = a(332920);
            const d = a.n(i)().e5b0063d;
            let s = 0;
            class c extends t.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${s}`), (s += 1);
                }
                render() {
                    const { children: e, title: n } = this.props,
                        a = d({ title: n });
                    return t.createElement(l.Z, { "aria-labelledby": this._listDomId, role: "region" }, t.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, n), t.createElement(l.Z, { "aria-label": a }, e));
                }
            }
            const u = c;
        },
        949626: (e, n, a) => {
            a.d(n, { Z: () => r });
            a(202784);
            var t = a(950822);
            const r = (e) => (0, t.Z)("div", e);
        },
        414939: (e, n, a) => {
            a.d(n, { Z: () => d });
            var t = a(202784),
                r = a(325686),
                l = a(392237);
            class o extends t.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return t.createElement(r.Z, { style: i.root });
                }
            }
            const i = l.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                d = o;
        },
        856438: (e, n, a) => {
            a.d(n, { Z: () => m });
            var t = a(202784),
                r = a(868634),
                l = a(731708),
                o = a(392237),
                i = a(332920),
                d = a.n(i),
                s = a(262009);
            const c = d().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => t.createElement(r.ZP, { style: u.label, type: "priority" }, t.createElement(l.ZP, { style: u.featuredLabel }, t.createElement(s.default, { style: u.featuredIcon }), c));
        },
        471957: (e, n, a) => {
            a.d(n, { Z: () => $ });
            var t = a(626926),
                r = a(202784),
                l = a(325686),
                o = (a(585488), a(277660)),
                i = a.n(o),
                d = a(392237),
                s = a(725405),
                c = a(535338),
                u = a(164936),
                m = (a(136728), a(107267)),
                b = a(731708),
                p = a(519172),
                h = a(601413),
                f = a(952428),
                g = a(823161),
                y = a(757483),
                S = a(457458),
                D = a(412876),
                k = a(549599);
            const w = ({ fallbackName: e, user: n }) => {
                    const a = i()(k.fR, n);
                    return a && a.legacy && a.legacy.name && a.legacy.screen_name ? r.createElement(b.ZP, { size: "subtext2", style: v.userName }, r.createElement(l.Z, { style: v.name }, r.createElement(b.ZP, { numberOfLines: 1 }, a.legacy.name), r.createElement(p.Z, { isVerified: a.verification?.verified ?? !1, verifiedType: a.verification?.verified_type ?? void 0 })), r.createElement(h.Z, { screenName: a.legacy.screen_name, size: "subtext2" })) : e ? r.createElement(b.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                v = d.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: y.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                A = ({ companyProfile: e, formattedSalary: n, jobId: a, jobLocation: t, jobTitle: o, onClick: i, renderActions: d, salaryInterval: s, user: c, withBottomBorder: u = !0 }) => {
                    const { jobId: p } = (0, m.useParams)(),
                        h = r.useMemo(() => ({ label: o }), [o]),
                        y = r.useMemo(() => {
                            const e = [v.listContainer];
                            return p === a ? e.push(v.activeItem) : u && e.push(v.inactiveItem), e;
                        }, [p, a, u]);
                    return r.createElement(f.Z, { onClick: i, role: "listitem", style: y }, r.createElement(l.Z, { style: v.itemRow }, c ? r.createElement(D.Y, { size: "xLarge", user: c }) : r.createElement(g.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(l.Z, { style: v.items }, r.createElement(b.ZP, { hoverLabel: h, numberOfLines: 2, size: "subtext1", weight: "bold" }, o), r.createElement(w, { fallbackName: e?.core?.name, user: c }), r.createElement(b.ZP, { color: "gray700", size: "subtext2" }, t), n ? r.createElement(b.ZP, { color: "gray700", size: "subtext2" }, (0, S.M)(n, s)) : null)), d && r.createElement(l.Z, null, d()));
                },
                _ = t.Z,
                I = d.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                $ = ({ actions: e, companyProfile: n, job: a, jobId: t, jobIndex: o, onClick: d, relayId: m, user: b, userSentiment: p, withBottomBorder: h = !0 }) => {
                    const f = (0, s.Z)(),
                        { viewer: g } = (0, c.p)(_, {}),
                        y = i()(k.qV, a),
                        S = i()(k.dB, n),
                        D = g?.user_results?.result?.__id,
                        w = r.useCallback(() => {
                            f.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: t, position: o }] } }), d();
                        }, [f, t, o, d]),
                        v = r.useCallback(() => r.createElement(l.Z, { style: I.actions }, r.createElement(u.ZP, { actions: e, jobId: t, relayId: m, userRelayId: D, userSentiment: p })), [e, t, m, D, p]);
                    return y && y.title && y.location ? r.createElement(A, { companyProfile: S, formattedSalary: y.formatted_salary, jobId: t, jobLocation: y.location, jobTitle: y.title, onClick: w, renderActions: v, salaryInterval: y.salary_interval, user: b, withBottomBorder: h }) : null;
                };
        },
        549599: (e, n, a) => {
            a.d(n, { KM: () => g, ZP: () => y, dB: () => h, fR: () => f, qV: () => p });
            a(136728);
            var t = a(501527),
                r = a(176811),
                l = a(436065),
                o = a(891717),
                i = a(202784),
                d = (a(585488), a(277660)),
                s = a.n(d),
                c = a(107267),
                u = a(708852),
                m = a(471957),
                b = a(512549);
            const p = o.Z,
                h = l.Z,
                f = r.Z,
                g = t.Z,
                y = ({ item: e, itemId: n, itemIndex: a }) => {
                    const t = (0, u.Ji)(),
                        r = (0, c.useHistory)(),
                        l = (0, c.useLocation)(),
                        o = s()(g, e),
                        d = o?.core,
                        p = o?.user_results?.result,
                        h = o?.company_profile_results?.result,
                        f = o?.id || "",
                        y = o?.user_sentiment,
                        S = i.useCallback(() => {
                            t ? r.push({ pathname: `/jobs/${n}`, query: l.query }) : r.push({ pathname: `/m/jobs/${n}`, query: l.query });
                        }, [r, t, n, l.query]);
                    return o && d ? i.createElement(m.Z, { actions: [b.h5], companyProfile: h, job: d, jobId: n, jobIndex: a, onClick: S, relayId: f, user: p, userSentiment: y }) : null;
                };
        },
        324948: (e, n, a) => {
            a.d(n, { Z: () => o });
            var t = a(202784),
                r = a(691533);
            const l = (0, a(523561).Z)({
                    loader: () =>
                        Promise.all([
                            a.e("icons.5"),
                            a.e("icons.6"),
                            a.e("icons.25"),
                            a.e("icons.22"),
                            a.e("icons.9"),
                            a.e("icons.4"),
                            a.e("icons.15"),
                            a.e("icons.2"),
                            a.e("icons.20"),
                            a.e("icons.7"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.0"),
                            a.e("icons.11"),
                            a.e("icons.27"),
                            a.e("icons.17"),
                            a.e("icons.12"),
                            a.e("icons.3"),
                            a.e("icons.13"),
                            a.e("icons.24"),
                            a.e("icons.26"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2f4a3d25"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            a.e("loader.WideLayout-752e56d7"),
                            a.e("loader.WideLayout-2e365fe7"),
                            a.e("loader.WideLayout-9f4db315"),
                        ]).then(a.bind(a, 741494)),
                }),
                o = (e) => t.createElement(r.Z, { hideOnError: !0 }, t.createElement(l, e));
        },
        512549: (e, n, a) => {
            a.d(n, { ZP: () => w, h5: () => y, pN: () => S, tv: () => g });
            var t = a(643331),
                r = a(202784),
                l = a(325686),
                o = (a(585488), a(351743)),
                i = a.n(o),
                d = a(530732),
                s = a(731708),
                c = a(392237),
                u = a(106186),
                m = a(258292),
                b = a(616894),
                p = a(443781),
                h = a(292546);
            const f = t.Z,
                g = (e, n, a) => {
                    const { viewerUserId: t } = (0, p.QZ)(),
                        [l] = i()(f),
                        [o] = (0, h.Z)(),
                        d = o.get("twclid") || null,
                        s = r.useCallback(
                            (e, t) => {
                                const r = e.get(n);
                                if ((r && r.setValue(t, "user_sentiment"), a)) {
                                    const n = e.get(a);
                                    n && n.invalidateRecord();
                                }
                            },
                            [n, a],
                        );
                    return r.useCallback(
                        (n) => {
                            t && l({ variables: { jobId: e, userId: t, sentiment: n, twclid: d }, optimisticUpdater: (e) => s(e, n), updater: (e) => s(e, n) });
                        },
                        [l, s, e, d, t],
                    );
                },
                y = "like",
                S = "dislike",
                D = ({ Icon: e, SelectedIcon: n, activeStyle: a, hoverStyle: t, isSelected: o, label: i, onClick: c, sentiment: u }) => {
                    const m = (e) => (e ? t : o ? a : {});
                    return r.createElement(
                        l.Z,
                        null,
                        r.createElement(d.Z, { interactiveStyles: null, onClick: (e) => c(u, e), style: k.sentimentActionContainer }, ({ isHovered: a }) => r.createElement(r.Fragment, null, o ? r.createElement(n, { style: m(a) }) : r.createElement(e, { style: m(a) }), r.createElement(s.ZP, { size: "subtext2", style: { ...m(a) } }, i))),
                    );
                },
                k = c.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                w = ({ jobId: e, relayId: n, type: a, userRelayId: t, userSentiment: l }) => {
                    const o = g(e, n, t),
                        i = r.useCallback(
                            (e, n) => {
                                n.stopPropagation();
                                o(e !== l ? e : "none");
                            },
                            [o, l],
                        );
                    return a === y ? r.createElement(D, { Icon: u.default, SelectedIcon: m.default, activeStyle: k.likeActive, hoverStyle: k.likeHover, isSelected: l === y, label: "Save job", onClick: i, sentiment: y }) : a === S ? r.createElement(D, { Icon: b.default, SelectedIcon: b.default, activeStyle: k.dislikeActive, hoverStyle: k.dislikeHover, isSelected: l === S, label: "Not interested", onClick: i, sentiment: S }) : null;
                };
        },
        965245: (e, n, a) => {
            a.d(n, { Z: () => d });
            var t = a(807896),
                r = a(202784),
                l = a(229333),
                o = a(414939),
                i = a(334346);
            const d = ({ accessibilityTitle: e, footer: n = r.createElement(o.Z, null), ...a }) => {
                const d = r.createElement(i.C, (0, t.Z)({}, a, { footer: n }));
                return e ? r.createElement(l.Z, { title: e }, d) : d;
            };
        },
        652904: (e, n, a) => {
            a.d(n, { Z: () => c });
            var t = a(202784),
                r = a(500002),
                l = a(668214),
                o = a(997174),
                i = a(118823);
            const d = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class s extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: n },
                            location: { pathname: a, search: t },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: o },
                            locationKey: i,
                        } = e;
                    let d = !1;
                    n.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && n.pathname === a && ((this._isInBackground = !1), (d = !0));
                    const s = r || i;
                    ((s && r !== i) || (!s && a !== l) || t !== o || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: n, updateLocation: a, updateTweetDetailNav: t } = e;
                    n.scribePageImpression(), a(n.contextualScribeNamespace, n.contextualScribeData), t(n.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, r.ZP)(d(s));
        },
        292546: (e, n, a) => {
            a.d(n, { Z: () => l });
            a(543673), a(240753), a(128399), a(136728);
            var t = a(202784),
                r = a(107267);
            const l = () => {
                const e = (0, r.useLocation)(),
                    n = (0, r.useHistory)(),
                    [a, l] = t.useState(new URLSearchParams(e.search));
                t.useEffect(() => {
                    l(new URLSearchParams(e.search));
                }, [e.search]);
                const o = t.useCallback(
                    (t, r) => {
                        const l = new URLSearchParams(a);
                        l.set(t, r), n.push(`${e.pathname}?${l.toString()}`);
                    },
                    [n, e.pathname, a],
                );
                return [t.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        478414: (e, n, a) => {
            a.d(n, { Hx: () => d, K: () => l, bb: () => i, gv: () => o, kg: () => s, yW: () => c });
            var t = a(779802),
                r = a(392237);
            const l = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                o = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                i = ({ h1FontSize: e, h2FontSize: n, paragraphFontSize: a }) => [
                    { blockType: t.P7.header1, label: t.et, component: (0, t.LI)({ size: e, children: t.et, extendedWidth: !0 }) },
                    { blockType: t.P7.header2, label: t.PW, component: (0, t.LI)({ size: n, weight: "bold", children: t.PW }) },
                    { blockType: t.P7.paragraph, label: t.$u, component: (0, t.LI)({ size: a, children: t.$u }) },
                ],
                d = "extended-profile",
                s = "extended-profile-mobile-webview",
                c = (e, { h1FontSize: n, h2FontSize: a, paragraphFontSize: t }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[n]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[n]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${r.default.theme.fontSizes[a]};\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes[a]} + 1px);\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: calc(${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[t]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[t]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        985124: (e, n, a) => {
            a.d(n, { $J: () => i, WA: () => M, ZC: () => v, cj: () => R, eo: () => t.eo, hb: () => H, kW: () => d, pg: () => A, rP: () => o, u4: () => q, xk: () => Z });
            var t = a(89217),
                r = a(332920),
                l = a.n(r);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                i = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                d = Object.entries(t.eo).map(([e, n]) => ({ label: String(n), value: e })),
                s = l().d2b8da2c,
                c = l().cd958040,
                u = l().c5760ca2,
                m = l().d31b4a2a,
                b = l().df1b7550,
                p = l().f38959a6,
                h = l().bc78a26c,
                f = l().ec28738e,
                g = l().icb06308,
                y = l().d0b978ec,
                S = l().af19cdc2,
                D = l().e4a51fca,
                k = l().e8ca78ae,
                w = l().c365dcc6,
                v = Object.freeze({ software_engineering: s, data_analytics: c, product: u, design: m, marketing: b, sales_am: p, operations: h, people_hr: f, finance_accounting: g, legal_compliance: y, science_engineering: S, medical: D, construction_trades: k, other: w }),
                A = Object.entries(v).map(([e, n]) => ({ label: String(n), value: e })),
                _ = l().e25d75e4,
                I = l().e89b3f04,
                $ = l().h55825dc,
                E = l().cc537386,
                P = l().jfc3cece,
                C = l().e1b683aa,
                x = l().c4627fda,
                F = l().db75b47c,
                M = Object.freeze({ intern: _, entry_level: I, junior: $, mid_level: E, senior: P, lead: C, manager: x, executive: F }),
                Z = Object.entries(M).map(([e, n]) => ({ label: String(n), value: e })),
                L = l().i312f0ce,
                z = l().b4aff05e,
                B = l().c08b9138,
                j = l().ia5d6422,
                K = l().h97c7f42,
                T = l().ibed2d04,
                R = Object.freeze({ onsite: { label: L, description: j, value: "onsite" }, remote: { label: B, description: T, value: "remote" }, hybrid: { label: z, description: K, value: "hybrid" } }),
                q = Object.keys(R).map((e) => ({ label: R[e].label, value: e, description: R[e].description })),
                H = Object.keys(t.Qw).map((e) => ({ ...t.Qw[e], value: String(t.Qw[e].value) }));
        },
        943052: (e, n, a) => {
            a.d(n, { Z: () => l });
            a(543673), a(240753), a(128399), a(136728);
            var t = a(202784),
                r = a(107267);
            const l = () => {
                const e = (0, r.useLocation)(),
                    n = (0, r.useHistory)(),
                    [a, l] = t.useState(new URLSearchParams(e.search));
                t.useEffect(() => {
                    l(new URLSearchParams(e.search));
                }, [e.search]);
                const o = t.useCallback(
                        (t, r) => {
                            const l = new URLSearchParams(a);
                            l.set(t, r), n.push(`${e.pathname}?${l.toString()}`);
                        },
                        [n, e.pathname, a],
                    ),
                    i = t.useCallback(
                        (t) => {
                            const r = new URLSearchParams(a);
                            for (const e in t) t[e] ? r.set(e, t[e]) : r.delete(e);
                            n.push(`${e.pathname}?${r.toString()}`);
                        },
                        [n, e.pathname, a],
                    );
                return [t.useMemo(() => new URLSearchParams(e.search), [e.search]), o, i];
            };
        },
        127218: (e, n, a) => {
            a.d(n, { C: () => g });
            var t = a(202784),
                r = a(614983),
                l = a.n(r),
                o = a(437429),
                i = a.n(o),
                d = a(57074),
                s = a.n(d),
                c = a(10622),
                u = a.n(c),
                m = a(585488),
                b = a(71620),
                p = a(163889),
                h = a(312771),
                f = a(535338);
            function g(e, n, a) {
                const [r, o] = t.useState(!1),
                    [d, c] = t.useState(null),
                    g = i()(),
                    y = s()(n),
                    S = (0, b.po)(),
                    D = (0, f.p)(e, y, a);
                return t.useMemo(() => {
                    const n = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    l()(!!n, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: a, previous_cursor: t } =
                            (function (e, n) {
                                try {
                                    l()("slice_info" === n[n.length - 1], "Invalid sliceInfoPath!");
                                    let a = e;
                                    for (const e of n) l()(!!a, "The provided path is invalid."), l()("string" == typeof e, "Unexpected value for path!"), (a = a?.[e]);
                                    return a;
                                } catch (e) {
                                    return void (0, p.ZP)(e.message);
                                }
                            })(D, n) || {},
                        i = (n) => {
                            r ||
                                (o(!0),
                                u()(g, e, { ...y, cursor: n }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), S(e);
                                    },
                                }));
                        },
                        s = () => {
                            a && i(a);
                        },
                        b = () => {
                            t && i(t);
                        },
                        f = () => {
                            i(void 0);
                        };
                    return d ? { subsequentFetchStatus: h.ZP.FAILED, error: d, fetchNext: s, fetchPrevious: b, refetch: f, data: D, hasNext: Boolean(a), hasPrevious: Boolean(t) } : { subsequentFetchStatus: r ? h.ZP.LOADING : h.ZP.NONE, error: void 0, fetchNext: s, fetchPrevious: b, refetch: f, data: D, hasNext: Boolean(a), hasPrevious: Boolean(t) };
                }, [e, D, r, d, g, y, S]);
            }
        },
        164936: (e, n, a) => {
            a.d(n, { ZP: () => u, r1: () => s });
            var t = a(15022),
                r = a(202784),
                l = (a(585488), a(512549)),
                o = a(952793),
                i = a(535338);
            const d = t.Z,
                s = ({ actions: e, jobId: n }) => {
                    const { jobData: a, viewer: t } = (0, i.p)(d, { jobId: n }),
                        l = a?.result?.id ?? "",
                        o = a?.result?.user_sentiment;
                    return r.createElement(c, { actions: e, jobId: n, relayId: l, userRelayId: t?.user_results?.result?.__id, userSentiment: o });
                },
                c = ({ actions: e, jobId: n, relayId: a, userRelayId: t, userSentiment: i }) => {
                    const d = (0, o.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && d ? r.createElement(r.Fragment, null, e.includes(l.pN) && r.createElement(l.ZP, { jobId: n, relayId: a, type: l.pN, userRelayId: t, userSentiment: i }), e.includes(l.h5) && r.createElement(l.ZP, { jobId: n, relayId: a, type: l.h5, userRelayId: t, userSentiment: i })) : null;
                },
                u = c;
        },
        28135: (e, n, a) => {
            a.d(n, { Z: () => E });
            a(136728);
            var t = a(202784),
                r = a(576648),
                l = a(107267),
                o = a(811176),
                i = a(40644),
                d = a(332920),
                s = a.n(d),
                c = a(630715),
                u = a(717160),
                m = a(885724),
                b = a(106186),
                p = a(786272),
                h = a(443781),
                f = a(952793),
                g = a(782642);
            const y = (e) => `/i/jobs/${e}`;
            var S = a(701796);
            const D = s().f508c49c,
                k = s().f88553c8,
                w = s().d6825dce,
                v = s().b9613442,
                A = s().c2b3f0da,
                _ = s().c791d3fc,
                I = { label: s().ifea3114, withDelay: !0 },
                $ = ({ iconSize: e = "normal", jobId: n, jobUserId: a }) => {
                    const d = (0, g.p)(),
                        s = (0, l.useHistory)(),
                        { userClaims: $, viewerUserId: E } = (0, h.QZ)(),
                        P = (0, f.hC)("recruiting_jobs_list_share_enabled"),
                        C = (0, f.hC)("recruiting_pin_job_enabled") && ($.isTrueAndEnabled("subscriptions_feature_premium_jobs") || $.isVerifiedOrg()) && E !== a,
                        x = t.useCallback(() => {
                            s.push({ query: { text: (0, S.w)(y(n)) }, pathname: "/messages/compose" });
                        }, [s, n]),
                        F = t.useCallback(() => {
                            r.Z.setString((0, S.w)(y(n))), d({ text: k });
                        }, [d, n]),
                        M = t.useCallback(() => {
                            s.push({ query: { text: (0, S.w)(y(n)) }, pathname: "/compose/post" });
                        }, [s, n]),
                        Z = t.useCallback(() => {
                            s.push({ query: { jid: n }, pathname: "/i/share-job", state: { from: s.location.pathname } });
                        }, [s, n]),
                        L = t.useCallback(() => {
                            const e = [];
                            return r.Z.isAvailable() && e.push({ text: D, onClick: F, Icon: c.default }), E && (e.push(((e) => ({ text: w, onClick: e, Icon: u.default }))(x)), e.push(((e) => ({ text: v, onClick: e, Icon: m.default }))(M))), C && e.push(((e) => ({ text: A, onClick: e, Icon: b.default }))(Z)), e;
                        }, [F, x, Z, M, C, E]),
                        z = t.useCallback(
                            (e) => {
                                const n = L();
                                return n.length ? t.createElement(o.Z, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [L],
                        ),
                        B = t.useCallback(() => {}, []);
                    return P ? t.createElement(i.ZP, { Icon: p.default, "aria-label": _, color: "text", hoverLabel: I, iconSize: e, onPress: B, renderMenu: z, testID: "job-share-action-btn" }) : null;
                },
                E = t.memo($);
        },
        89217: (e, n, a) => {
            a.d(n, { Ju: () => m, Qw: () => b, eo: () => s });
            var t = a(332920),
                r = a.n(t);
            const l = r().c69eb656,
                o = r().g46ae43c,
                i = r().jf7d4cc6,
                d = r().b2214572,
                s = Object.freeze({ full_time: l, full_time_contract: o, part_time: i, contract_to_hire: d }),
                c = r().f8337bd6,
                u = r().i935bf88,
                m = Object.freeze({ 1: c, 2: u }),
                b = Object.freeze({ annually: { label: c, value: 1 }, hourly: { label: u, value: 2 } });
        },
        457458: (e, n, a) => {
            a.d(n, { G: () => s, M: () => d });
            a(571372);
            var t = a(301503),
                r = a(332920),
                l = a.n(r),
                o = a(89217);
            const i = l().b75b8ffd,
                d = (e, n = 1) => {
                    const a = n ?? 1;
                    return o.Ju[a.toString()] ? i({ salary: e, interval: o.Ju[a.toString()] }) : e;
                },
                s = (e) => {
                    if (e)
                        try {
                            const n = JSON.parse(e);
                            if (!n.entityMap || !n.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, t.convertFromRaw)(n).hasText()) return;
                            return n;
                        } catch (e) {}
                };
        },
        135904: (e, n, a) => {
            a.d(n, { c: () => l, n: () => r });
            var t = a(392237);
            const r = "longform-styles",
                l = `\n    .longform-header-one {\n        font-size: ${t.default.theme.fontSizes.title2};\n        font-weight: ${t.default.theme.fontWeights.heavy};\n        line-height: ${t.default.theme.lineHeights.title1};\n        margin-bottom: ${t.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${t.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${t.default.theme.fontWeights.heavy};\n        line-height: ${t.default.theme.lineHeights.title4};\n        margin-bottom: ${t.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${t.default.theme.fontSizes.title3};\n        font-weight: ${t.default.theme.fontWeights.heavy};\n        line-height: ${t.default.theme.lineHeights.title2};\n        margin-bottom: ${t.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${t.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${t.default.theme.fontWeights.heavy};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: ${t.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${t.default.theme.fontSizes.headline2};\n        line-height: ${t.default.theme.lineHeights.title4};\n        margin-bottom: ${t.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${t.default.theme.fontSizes.headline2};\n        line-height: ${t.default.theme.lineHeights.title4};\n        margin-bottom: ${t.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${t.default.theme.fontSizes.headline2};\n        line-height: ${t.default.theme.lineHeights.title4};   \n        margin-bottom: ${t.default.theme.spaces.space12};\n        margin-left: calc(${t.default.theme.spaces.space28} + ${t.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${t.default.theme.fontSizes.headline2};\n        line-height: ${t.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${t.default.theme.spaces.space12} / 2);\n        margin-left: ${t.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${t.default.theme.spaces.space24} + ${t.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${t.default.theme.spaces.space2});\n        padding-left: calc(${t.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${t.default.theme.colors.gray900};\n        border-radius: ${t.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${t.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${t.default.theme.spaces.space28} + ${t.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${t.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${t.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, n, a) => {
            a.d(n, { Z: () => D });
            a(136728);
            var t = a(202784),
                r = a(301503),
                l = a(325686),
                o = a(595088),
                i = a(516951),
                d = a(731708),
                s = a(779802),
                c = a(537392),
                u = a(989272),
                m = a(925873),
                b = a(202253),
                p = a(786475),
                h = a(392237),
                f = a(135904);
            const g = { [s.P7.atomic]: { element: "section" }, [s.P7.header1]: { element: "h1", wrapper: t.createElement(d.ZP, null) }, [s.P7.header2]: { element: "h2", wrapper: t.createElement(d.ZP, null) } },
                y = (0, o.Z)(g).reduce((e, [n, a]) => e.set(n, a), r.DefaultDraftBlockRenderMap);
            let S = !1;
            const D = t.memo(function (e) {
                    const { componentByType: n, contentState: a, onScribeEvent: o, paragraphFontSizeOverride: d } = e;
                    t.useEffect(() => {
                        S || (u.fH(f.c, f.n), (S = !0));
                    }, []);
                    const h = [(0, b.ez)(o, d), b.aF, b.RU];
                    e.disable_entityLinkDecorator || h.push((0, b.NA)(o, d));
                    const g = m.Z.initEditorState(a, { decorators: h });
                    let D = i.Z;
                    return (
                        n &&
                            (D = (e) => {
                                const a = e.getType();
                                return n[a] || null;
                            }),
                        t.createElement(c.ZP, null, ({ containerWidth: e }) => t.createElement(l.Z, { style: k.fontFamily }, t.createElement(r.Editor, { blockRenderMap: y, blockRendererFn: D, blockStyleFn: (0, s.su)(p.Z.isNarrowScreenWidth(e)), editorState: g, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                k = h.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, n, a) => {
            a.d(n, { $u: () => A, Ak: () => P, KJ: () => D, LI: () => _, P7: () => f, PW: () => v, QF: () => g, Qm: () => S, Tr: () => I, b$: () => h, db: () => x, et: () => w, fR: () => p, iH: () => $, lD: () => y, su: () => k, u4: () => C, wX: () => E });
            var t = a(202784),
                r = a(332920),
                l = a.n(r),
                o = a(394123),
                i = a(856661),
                d = a(69893),
                s = a(474761),
                c = a(428259),
                u = a(89085),
                m = a(630715),
                b = a(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                h = (e) => [
                    { buttonTestId: "btn-bold", Icon: o.default, key: p.bold, onPress: e(p.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: p.italic, onPress: e(p.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: d.default, key: p.strikethrough, onPress: e(p.strikethrough) },
                ],
                f = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                g = (e) => [{ buttonTestId: "btn-blockquote", Icon: s.default, key: f.blockquote, onPress: e(f.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: f.bulleted, onPress: e(f.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: f.numbered, onPress: e(f.numbered) },
                ],
                S = "LINK",
                D = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: S, onPress: e }],
                k = (e, n) => (a) => {
                    const t = (n) => (e ? `${n}-narrow` : n);
                    switch (a.getType()) {
                        case f.bulleted:
                            return t("longform-unordered-list-item");
                        case f.blockquote:
                            return t("longform-blockquote");
                        case f.header1:
                            return t("longform-header-one");
                        case f.header2:
                            return t("longform-header-two");
                        case f.numbered:
                            return t("longform-ordered-list-item");
                        case f.paragraph:
                            return t("longform-unstyled");
                        default:
                            return n?.(a) || "";
                    }
                },
                w = l().d5a48014,
                v = l().b92b6156,
                A = l().ec5ed598,
                _ = ({ children: e, extendedWidth: n, size: a, weight: r }) => t.createElement(b.ZP, { extendedWidth: n, size: a, weight: r }, e),
                I = { blockType: f.paragraph, label: A, component: _({ size: "body", children: A }) },
                $ = [{ blockType: f.header1, label: w, component: _({ size: "title1", extendedWidth: !0, children: w }) }, { blockType: f.header2, label: v, component: _({ size: "title3", weight: "heavy", children: v }) }, I],
                E = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                P = ["delete", "delete-word", "delete-to-start-of-line"],
                C = "increase-text-size",
                x = "decrease-text-size";
        },
        941978: (e, n, a) => {
            a.d(n, { C: () => t });
            class t {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const n = this._load(e);
                    return !(n instanceof Promise) && !!n;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, n) {
                    if (this._cache[e]) return this._cache[e];
                    const a = n().then((n) => {
                        this._cache[e] = n;
                    });
                    return this._cache[e] || (this._cache[e] = a), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((n) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(n)
                                          .catch(() => n(!1))
                                    : n(!0);
                            }),
                    );
                }
            }
            new t();
        },
        491915: (e, n, a) => {
            a.d(n, { ZP: () => f });
            a(571372);
            var t = a(202784),
                r = a(325686),
                l = a(392237),
                o = a(332920),
                i = a.n(o),
                d = a(643442),
                s = a(466445),
                c = a(731708),
                u = a(154003),
                m = a(173739);
            const b = i().jcf3e7a2;
            function p({ animation: e, autoplay: n }) {
                const [a, l] = t.useState(n),
                    [o, i] = t.useState(0);
                return (
                    t.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && i(Math.round(e.currentTime));
                        });
                    }, [e]),
                    t.createElement(
                        r.Z,
                        { style: h.container },
                        t.createElement(u.ZP, {
                            "aria-label": a ? "Pause" : "Play",
                            icon: a ? t.createElement(d.default, null) : t.createElement(s.default, null),
                            onClick: function () {
                                a ? (e.pause(), l(!1)) : (e.play(), l(!0));
                            },
                            type: "primaryText",
                        }),
                        t.createElement(c.ZP, { style: h.frames }, `${o}/${e.totalFrames}`),
                        t.createElement(
                            r.Z,
                            { style: h.slider },
                            t.createElement(m.Z, {
                                "aria-label": b,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (n) {
                                    e.goToAndStop(n, !0), l(!1);
                                },
                                value: o,
                            }),
                        ),
                    )
                );
            }
            const h = l.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function f(e) {
                const { autoplay: n = !0, loop: a = !1, onAnimationEnd: l, onAnimationStart: o, onError: i, withControls: d } = e,
                    s = t.useRef(void 0),
                    c = t.useRef({ animationLoaded: !1 }),
                    u = t.useRef(null),
                    [m, b] = t.useState(!1);
                return (
                    t.useEffect(() => {
                        function t(e, n) {
                            "function" == typeof l && l(n), e && e.destroy();
                        }
                        const { animationLoaded: r } = c.current;
                        r ||
                            ((c.current.animationLoaded = !0),
                            g.load().then((r) => {
                                if (r && u.current) {
                                    const l = { container: u.current, renderer: "svg", loop: a, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        d = r.loadAnimation(l);
                                    (s.current = d),
                                        (d.onError = (e) => {
                                            const n = new y(e);
                                            "function" == typeof i && i(n), t(d, n);
                                        }),
                                        d.addEventListener("DOMLoaded", () => {
                                            b(!0), n && (d.play(), o && o());
                                        }),
                                        d.addEventListener("complete", () => {
                                            t(d);
                                        });
                                }
                            }));
                    }, [e.animation, n, a, l, o, i, d]),
                    t.useEffect(
                        () =>
                            function () {
                                s.current && s.current.destroy();
                            },
                        [s],
                    ),
                    t.createElement(r.Z, null, t.createElement(r.Z, { style: [e.animationContainerStyle, S.centerAnimation] }, t.createElement("div", { ref: u, style: e.animationStyle }), d && s.current && m && t.createElement(p, { animation: s.current, autoplay: n })))
                );
            }
            f.Prepare = function () {
                return (
                    t.useEffect(() => {
                        g.load();
                    }, []),
                    null
                );
            };
            const g = { load: () => a.e("ondemand.LottieWeb").then(a.t.bind(a, 548888, 23)) };
            class y extends Error {
                constructor(e, ...n) {
                    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const S = l.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        989272: (e, n, a) => {
            a.d(n, { _i: () => r, fH: () => o, w3: () => l });
            a(136728);
            var t = a(392237);
            const r = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function l(e) {
                o(
                    (function () {
                        const e = t.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${r.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const n = d(e);
                return (
                    o(
                        (function (e) {
                            const n = d(e);
                            let a = e.placeholderTextColor;
                            const r = e.contentHorizontalPadding;
                            a || (a = t.default.theme.colors.gray700);
                            return `\n    .${n} .public-DraftEditorPlaceholder-root {\n      color: ${a};\n    }\n\n    .${n} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${a};\n    }\n\n    ${r ? `\n        .${n} .public-DraftEditor-content,\n        .${n} .public-DraftEditorPlaceholder-root {\n          padding-left: ${r};\n          padding-right: ${r};\n        }\n      ` : ""}\n  `;
                        })(e),
                        n,
                    ),
                    n
                );
            }
            function o(e, n) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(n)
                ) {
                    const a = document.createElement("style");
                    a.setAttribute("id", n), (a.innerHTML = e);
                    const t = document.head;
                    t && t.insertBefore(a, t.firstChild);
                }
            }
            const i = "draftjs-styles";
            function d(e) {
                const n = (function (e) {
                    for (let n = 0; n < s.length; n++) {
                        if (s[n] === e) return String(n);
                    }
                    return s.push(e), String(s.length - 1);
                })(JSON.stringify(e));
                return `${i}_${n}`;
            }
            const s = [];
        },
        40644: (e, n, a) => {
            a.d(n, { ZP: () => k });
            var t = a(202784),
                r = a(325686),
                l = a(461756),
                o = a(731708),
                i = a(58881),
                d = a(530732),
                s = a(224162),
                c = a(491915),
                u = a(392237),
                m = a(551611),
                b = a(332920),
                p = a.n(b),
                h = a(891198),
                f = a(537392),
                g = a(280278);
            const y = p().e8d93005,
                S = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                D = ({ color: e, count: n }) => {
                    const a = (0, h.wl)(n, !0);
                    return t.createElement(f.ZP, null, ({ containerWidth: r }) => {
                        return t.createElement(g.ZP, { color: e, count: n, size: "subtext2", style: [S.count, ((l = r), l < u.default.theme.breakpoints.small && S.narrowCount)] }, n > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || a.length >= 5 ? y(n) : a) : void 0);
                        var l;
                    });
                };
            class k extends t.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, n) => {
                            const { activeColor: a, color: l, decoration: i } = this.props;
                            return t.createElement(s.ZP.Consumer, null, ({ direction: d }) => t.createElement(o.ZP, { color: e ? a : l, dir: d, style: [A.inner, e && "blue500" === a && A.blue500] }, t.createElement(r.Z, { ref: this.props.actionIconContainerRef }, n ? this._renderButton(n) : null, this._renderIcon()), i, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: n, backgroundColor: a, hoverLabel: r, iconSize: l, isActive: o, isDisabled: s, showBackgroundWhenActive: c } = this.props,
                                m = i.Z.generate({ backgroundColor: u.default.theme.colors[a], color: u.default.theme.colors[n], insetFocusRing: !0 }),
                                b = c && o && !e?.isHovered;
                            return t.createElement(d.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, v[b ? "haloBackground" : a], !s && A.iconBackground, "small" === l && A.iconSmallBoundingBox, b && A.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: n, isActive: a, isDisabled: r, isFaded: o, onAnimationEnd: i, onAnimationStart: d, onError: s, showAnimation: b, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !l.Z.reducedMotionEnabled && e && b) return t.createElement(c.ZP, { animation: p || m.Bf, animationContainerStyle: w[n], animationStyle: I, onAnimationEnd: i, onAnimationStart: d, onError: s });
                            {
                                const l = a && e ? e : this.props.Icon;
                                return t.createElement(l, { style: [w[n], !r && o && A.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: n } = this.props;
                            return n ? t.createElement(D, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: n, renderWrapper: a } = this.props;
                            a || (e.stopPropagation(), n && n(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: n, enableKeyboardShortcuts: a, isActive: o, isDisabled: i, isPresentational: s, keyboardShortcut: m, link: b, preventFocusShift: p, renderMenu: h, renderWrapper: f = t.Fragment, style: g, testID: y } = this.props,
                        S = !u.default.theme.highContrastEnabled && !l.Z.reducedMotionEnabled;
                    return t.createElement(
                        r.Z,
                        { style: [A.root, g] },
                        t.createElement(
                            f,
                            null,
                            s
                                ? this._renderContent(o)
                                : t.createElement(d.Z, { "aria-haspopup": h ? "menu" : void 0, "aria-label": e, disabled: i, enableKeyboardShortcuts: a, focusable: n, interactiveStyles: null, keyboardShortcut: m, link: b, onClick: this._handlePress, preventFocusShift: p, renderMenu: h, style: [A.triggerAreaRoot, A.outlineNone], testID: y }, (e) => {
                                      const { isFocused: n, isHovered: a, isPressed: t } = e,
                                          r = o || a || t || n;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        S ? t.createElement(c.ZP.Prepare, null) : null,
                    );
                }
            }
            k.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const w = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                A = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                _ = "224.5%",
                I = { width: _, height: _ };
        },
        551611: (e, n, a) => {
            a.d(n, { Bf: () => r, ZP: () => o });
            var t = a(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class l extends t.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const o = new l();
        },
        183806: (e, n, a) => {
            a.d(n, { Z: () => t });
            const t = a(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.9161571a.js.map
