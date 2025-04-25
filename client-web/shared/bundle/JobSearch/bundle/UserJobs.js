"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs"],
    {
        626926: (e, n, a) => {
            a.d(n, { Z: () => i });
            var l,
                t,
                r,
                o = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }, t], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "RxOP--hDqELH_fWn5VylUA", metadata: {}, name: "JobListItemContentUserQuery", operationKind: "query", text: null } };
            o.hash = "a917044255331aa25e3b5342759ae37c";
            const i = o;
        },
        436065: (e, n, a) => {
            a.d(n, { Z: () => t });
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
            const t = l;
        },
        501527: (e, n, a) => {
            a.d(n, { Z: () => o });
            var l,
                t,
                r = {
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
                                { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [l, (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [l, t, { args: null, kind: "FragmentSpread", name: "JobSearchListItem_company" }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
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
            r.hash = "de9a0be55f653b840e5aa925f7ba7b80";
            const o = r;
        },
        891717: (e, n, a) => {
            a.d(n, { Z: () => t });
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
            const t = l;
        },
        176811: (e, n, a) => {
            a.d(n, { Z: () => t });
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
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW" },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "031b1a1f0aff6030b355a6c907547506",
            };
            const t = l;
        },
        643331: (e, n, a) => {
            a.d(n, { Z: () => s });
            var l,
                t,
                r,
                o,
                i,
                d = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "jobId" }), (t = { defaultValue: null, kind: "LocalArgument", name: "sentiment" }), (r = { defaultValue: null, kind: "LocalArgument", name: "twclid" }), (o = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [o, l, t, r], kind: "Operation", name: "SentimentActionButtonMutation", selections: i },
                    params: { id: "1smesvHITcf79zPEvtAqOA", metadata: {}, name: "SentimentActionButtonMutation", operationKind: "mutation", text: null },
                };
            d.hash = "0a931e00dd50f5310fb28d29e83f884c";
            const s = d;
        },
        15022: (e, n, a) => {
            a.d(n, { Z: () => m });
            var l,
                t,
                r,
                o,
                i,
                d,
                s,
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
                                args: (t = [
                                    { kind: "Variable", name: "rest_id", variableName: "jobId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "ApiJobResults",
                                kind: "LinkedField",
                                name: "job_by_rest_id",
                                plural: !1,
                                selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null }], type: "ApiJob", abstractKey: null })], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (d = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
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
                            { alias: "jobData", args: t, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), i], storageKey: null }, o], storageKey: null },
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
            var l = a(202784),
                t = a(466999),
                r = a(325686),
                o = a(392237),
                i = a(674132);
            const d = a.n(i)().e5b0063d;
            let s = 0;
            class c extends l.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${s}`), (s += 1);
                }
                render() {
                    const { children: e, title: n } = this.props,
                        a = d({ title: n });
                    return l.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, l.createElement(t.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, n), l.createElement(r.Z, { "aria-label": a }, e));
                }
            }
            const u = c;
        },
        949626: (e, n, a) => {
            a.d(n, { Z: () => t });
            a(202784);
            var l = a(950822);
            const t = (e) => (0, l.Z)("div", e);
        },
        414939: (e, n, a) => {
            a.d(n, { Z: () => d });
            var l = a(202784),
                t = a(325686),
                r = a(392237);
            class o extends l.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return l.createElement(t.Z, { style: i.root });
                }
            }
            const i = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                d = o;
        },
        856438: (e, n, a) => {
            a.d(n, { Z: () => m });
            var l = a(202784),
                t = a(868634),
                r = a(731708),
                o = a(392237),
                i = a(674132),
                d = a.n(i),
                s = a(262009);
            const c = d().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => l.createElement(t.ZP, { style: u.label, type: "priority" }, l.createElement(r.ZP, { style: u.featuredLabel }, l.createElement(s.default, { style: u.featuredIcon }), c));
        },
        471957: (e, n, a) => {
            a.d(n, { Z: () => _ });
            var l = a(626926),
                t = a(202784),
                r = a(325686),
                o = (a(585488), a(277660)),
                i = a.n(o),
                d = a(392237),
                s = a(725405),
                c = a(535338),
                u = a(164936),
                m = (a(136728), a(107267)),
                b = a(731708),
                p = a(519172),
                f = a(601413),
                h = a(952428),
                g = a(823161),
                y = a(757483),
                D = a(457458),
                S = a(412876),
                k = a(549599);
            const w = ({ fallbackName: e, user: n }) => {
                    const a = i()(k.fR, n);
                    return a && a.legacy && a.legacy.name && a.legacy.screen_name ? t.createElement(b.ZP, { size: "subtext2", style: v.userName }, t.createElement(r.Z, { style: v.name }, t.createElement(b.ZP, { numberOfLines: 1 }, a.legacy.name), t.createElement(p.Z, { isVerified: a.legacy.verified, verifiedType: a.legacy.verified_type ?? void 0 })), t.createElement(f.Z, { screenName: a.legacy.screen_name, size: "subtext2" })) : e ? t.createElement(b.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                v = d.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: y.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                A = ({ companyProfile: e, formattedSalary: n, jobId: a, jobLocation: l, jobTitle: o, onClick: i, renderActions: d, salaryInterval: s, user: c, withBottomBorder: u = !0 }) => {
                    const { jobId: p } = (0, m.useParams)(),
                        f = t.useMemo(() => ({ label: o }), [o]),
                        y = t.useMemo(() => {
                            const e = [v.listContainer];
                            return p === a ? e.push(v.activeItem) : u && e.push(v.inactiveItem), e;
                        }, [p, a, u]);
                    return t.createElement(h.Z, { onClick: i, role: "listitem", style: y }, t.createElement(r.Z, { style: v.itemRow }, c ? t.createElement(S.Y, { size: "xLarge", user: c }) : t.createElement(g.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), t.createElement(r.Z, { style: v.items }, t.createElement(b.ZP, { hoverLabel: f, numberOfLines: 2, size: "subtext1", weight: "bold" }, o), t.createElement(w, { fallbackName: e?.core?.name, user: c }), t.createElement(b.ZP, { color: "gray700", size: "subtext2" }, l), n ? t.createElement(b.ZP, { color: "gray700", size: "subtext2" }, (0, D.M)(n, s)) : null)), d && t.createElement(r.Z, null, d()));
                },
                I = l.Z,
                $ = d.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                _ = ({ actions: e, companyProfile: n, job: a, jobId: l, jobIndex: o, onClick: d, relayId: m, user: b, userSentiment: p, withBottomBorder: f = !0 }) => {
                    const h = (0, s.Z)(),
                        { viewer: g } = (0, c.p)(I, {}),
                        y = i()(k.qV, a),
                        D = i()(k.dB, n),
                        S = g?.user_results?.result?.__id,
                        w = t.useCallback(() => {
                            h.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: l, position: o }] } }), d();
                        }, [h, l, o, d]),
                        v = t.useCallback(() => t.createElement(r.Z, { style: $.actions }, t.createElement(u.ZP, { actions: e, jobId: l, relayId: m, userRelayId: S, userSentiment: p })), [e, l, m, S, p]);
                    return y && y.title && y.location ? t.createElement(A, { companyProfile: D, formattedSalary: y.formatted_salary, jobId: l, jobLocation: y.location, jobTitle: y.title, onClick: w, renderActions: v, salaryInterval: y.salary_interval, user: b, withBottomBorder: f }) : null;
                };
        },
        549599: (e, n, a) => {
            a.d(n, { KM: () => g, ZP: () => y, dB: () => f, fR: () => h, qV: () => p });
            a(136728);
            var l = a(501527),
                t = a(176811),
                r = a(436065),
                o = a(891717),
                i = a(202784),
                d = (a(585488), a(277660)),
                s = a.n(d),
                c = a(107267),
                u = a(708852),
                m = a(471957),
                b = a(512549);
            const p = o.Z,
                f = r.Z,
                h = t.Z,
                g = l.Z,
                y = ({ item: e, itemId: n, itemIndex: a }) => {
                    const l = (0, u.Ji)(),
                        t = (0, c.useHistory)(),
                        r = (0, c.useLocation)(),
                        o = s()(g, e),
                        d = o?.core,
                        p = o?.user_results?.result,
                        f = o?.company_profile_results?.result,
                        h = o?.id || "",
                        y = o?.user_sentiment,
                        D = i.useCallback(() => {
                            l ? t.push({ pathname: `/jobs/${n}`, query: r.query }) : t.push({ pathname: `/m/jobs/${n}`, query: r.query });
                        }, [t, l, n, r.query]);
                    return o && d ? i.createElement(m.Z, { actions: [b.h5], companyProfile: f, job: d, jobId: n, jobIndex: a, onClick: D, relayId: h, user: p, userSentiment: y }) : null;
                };
        },
        324948: (e, n, a) => {
            a.d(n, { Z: () => o });
            var l = a(202784),
                t = a(691533);
            const r = (0, a(523561).Z)({
                    loader: () =>
                        Promise.all([
                            a.e("icons.5"),
                            a.e("icons.6"),
                            a.e("icons.22"),
                            a.e("icons.25"),
                            a.e("icons.9"),
                            a.e("icons.4"),
                            a.e("icons.15"),
                            a.e("icons.20"),
                            a.e("icons.7"),
                            a.e("icons.0"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
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
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
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
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            a.e("loader.WideLayout-6107ac1a"),
                            a.e("loader.WideLayout-9f4db315"),
                        ]).then(a.bind(a, 741494)),
                }),
                o = (e) => l.createElement(t.Z, { hideOnError: !0 }, l.createElement(r, e));
        },
        512549: (e, n, a) => {
            a.d(n, { ZP: () => w, h5: () => y, pN: () => D, tv: () => g });
            var l = a(643331),
                t = a(202784),
                r = a(325686),
                o = (a(585488), a(351743)),
                i = a.n(o),
                d = a(530732),
                s = a(731708),
                c = a(392237),
                u = a(106186),
                m = a(258292),
                b = a(616894),
                p = a(443781),
                f = a(292546);
            const h = l.Z,
                g = (e, n, a) => {
                    const { viewerUserId: l } = (0, p.QZ)(),
                        [r] = i()(h),
                        [o] = (0, f.Z)(),
                        d = o.get("twclid") || null,
                        s = t.useCallback(
                            (e, l) => {
                                const t = e.get(n);
                                if ((t && t.setValue(l, "user_sentiment"), a)) {
                                    const n = e.get(a);
                                    n && n.invalidateRecord();
                                }
                            },
                            [n, a],
                        );
                    return t.useCallback(
                        (n) => {
                            l && r({ variables: { jobId: e, userId: l, sentiment: n, twclid: d }, optimisticUpdater: (e) => s(e, n), updater: (e) => s(e, n) });
                        },
                        [r, s, e, d, l],
                    );
                },
                y = "like",
                D = "dislike",
                S = ({ Icon: e, SelectedIcon: n, activeStyle: a, hoverStyle: l, isSelected: o, label: i, onClick: c, sentiment: u }) => {
                    const m = (e) => (e ? l : o ? a : {});
                    return t.createElement(
                        r.Z,
                        null,
                        t.createElement(d.Z, { interactiveStyles: null, onClick: (e) => c(u, e), style: k.sentimentActionContainer }, ({ isHovered: a }) => t.createElement(t.Fragment, null, o ? t.createElement(n, { style: m(a) }) : t.createElement(e, { style: m(a) }), t.createElement(s.ZP, { size: "subtext2", style: { ...m(a) } }, i))),
                    );
                },
                k = c.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                w = ({ jobId: e, relayId: n, type: a, userRelayId: l, userSentiment: r }) => {
                    const o = g(e, n, l),
                        i = t.useCallback(
                            (e, n) => {
                                n.stopPropagation();
                                o(e !== r ? e : "none");
                            },
                            [o, r],
                        );
                    return a === y ? t.createElement(S, { Icon: u.default, SelectedIcon: m.default, activeStyle: k.likeActive, hoverStyle: k.likeHover, isSelected: r === y, label: "Save job", onClick: i, sentiment: y }) : a === D ? t.createElement(S, { Icon: b.default, SelectedIcon: b.default, activeStyle: k.dislikeActive, hoverStyle: k.dislikeHover, isSelected: r === D, label: "Not interested", onClick: i, sentiment: D }) : null;
                };
        },
        965245: (e, n, a) => {
            a.d(n, { Z: () => d });
            var l = a(807896),
                t = a(202784),
                r = a(229333),
                o = a(414939),
                i = a(334346);
            const d = ({ accessibilityTitle: e, footer: n = t.createElement(o.Z, null), ...a }) => {
                const d = t.createElement(i.C, (0, l.Z)({}, a, { footer: n }));
                return e ? t.createElement(r.Z, { title: e }, d) : d;
            };
        },
        652904: (e, n, a) => {
            a.d(n, { Z: () => c });
            var l = a(202784),
                t = a(500002),
                r = a(668214),
                o = a(997174),
                i = a(118823);
            const d = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class s extends l.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: n },
                            location: { pathname: a, search: l },
                            locationKey: t,
                        } = this.props,
                        {
                            location: { pathname: r, search: o },
                            locationKey: i,
                        } = e;
                    let d = !1;
                    n.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && n.pathname === a && ((this._isInBackground = !1), (d = !0));
                    const s = t || i;
                    ((s && t !== i) || (!s && a !== r) || l !== o || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: n, updateLocation: a, updateTweetDetailNav: l } = e;
                    n.scribePageImpression(), a(n.contextualScribeNamespace, n.contextualScribeData), l(n.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, t.ZP)(d(s));
        },
        292546: (e, n, a) => {
            a.d(n, { Z: () => r });
            a(543673), a(240753), a(128399), a(136728);
            var l = a(202784),
                t = a(107267);
            const r = () => {
                const e = (0, t.useLocation)(),
                    n = (0, t.useHistory)(),
                    [a, r] = l.useState(new URLSearchParams(e.search));
                l.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const o = l.useCallback(
                    (l, t) => {
                        const r = new URLSearchParams(a);
                        r.set(l, t), n.push(`${e.pathname}?${r.toString()}`);
                    },
                    [n, e.pathname, a],
                );
                return [l.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        478414: (e, n, a) => {
            a.d(n, { Hx: () => d, K: () => r, bb: () => i, gv: () => o, kg: () => s, yW: () => c });
            var l = a(779802),
                t = a(392237);
            const r = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                o = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                i = ({ h1FontSize: e, h2FontSize: n, paragraphFontSize: a }) => [
                    { blockType: l.P7.header1, label: l.et, component: (0, l.LI)({ size: e, children: l.et, extendedWidth: !0 }) },
                    { blockType: l.P7.header2, label: l.PW, component: (0, l.LI)({ size: n, weight: "bold", children: l.PW }) },
                    { blockType: l.P7.paragraph, label: l.$u, component: (0, l.LI)({ size: a, children: l.$u }) },
                ],
                d = "extended-profile",
                s = "extended-profile-mobile-webview",
                c = (e, { h1FontSize: n, h2FontSize: a, paragraphFontSize: l }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${t.default.theme.fontFamilies.chirpExtended};\n        font-size: ${t.default.theme.fontSizes[n]};\n        line-height: ${t.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${t.default.theme.fontFamilies.chirpExtended};\n        font-size: ${t.default.theme.fontSizes[n]};\n        line-height: ${t.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${t.default.theme.fontSizes[a]};\n        font-weight: ${t.default.theme.fontWeights.bold};\n        line-height: ${t.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${t.default.theme.fontSizes[a]} + 1px);\n        font-weight: ${t.default.theme.fontWeights.bold};\n        line-height: ${t.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${t.default.theme.fontSizes[l]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${t.default.theme.fontSizes[l]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${t.default.theme.fontSizes[l]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: ${t.default.theme.spaces.space2};\n        margin-left: calc(${t.default.theme.spaces.space20} + ${t.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${t.default.theme.fontSizes[l]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: ${t.default.theme.spaces.space2};\n        margin-left: ${t.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${t.default.theme.spaces.space2});\n        padding-left: calc(${t.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${t.default.theme.colors.gray900};\n        border-radius: ${t.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${t.default.theme.spaces.space20} + ${t.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${t.default.theme.fontSizes[l]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${t.default.theme.fontSizes[l]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        985124: (e, n, a) => {
            a.d(n, { $J: () => i, WA: () => C, ZC: () => v, cj: () => R, eo: () => l.eo, hb: () => H, kW: () => d, pg: () => A, rP: () => o, u4: () => q, xk: () => z });
            var l = a(89217),
                t = a(674132),
                r = a.n(t);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                i = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                d = Object.entries(l.eo).map(([e, n]) => ({ label: String(n), value: e })),
                s = r().d2b8da2c,
                c = r().cd958040,
                u = r().c5760ca2,
                m = r().d31b4a2a,
                b = r().df1b7550,
                p = r().f38959a6,
                f = r().bc78a26c,
                h = r().ec28738e,
                g = r().icb06308,
                y = r().d0b978ec,
                D = r().af19cdc2,
                S = r().e4a51fca,
                k = r().e8ca78ae,
                w = r().c365dcc6,
                v = Object.freeze({ software_engineering: s, data_analytics: c, product: u, design: m, marketing: b, sales_am: p, operations: f, people_hr: h, finance_accounting: g, legal_compliance: y, science_engineering: D, medical: S, construction_trades: k, other: w }),
                A = Object.entries(v).map(([e, n]) => ({ label: String(n), value: e })),
                I = r().e25d75e4,
                $ = r().e89b3f04,
                _ = r().h55825dc,
                P = r().cc537386,
                M = r().jfc3cece,
                F = r().e1b683aa,
                x = r().c4627fda,
                E = r().db75b47c,
                C = Object.freeze({ intern: I, entry_level: $, junior: _, mid_level: P, senior: M, lead: F, manager: x, executive: E }),
                z = Object.entries(C).map(([e, n]) => ({ label: String(n), value: e })),
                L = r().i312f0ce,
                Z = r().b4aff05e,
                K = r().c08b9138,
                B = r().ia5d6422,
                j = r().h97c7f42,
                T = r().ibed2d04,
                R = Object.freeze({ onsite: { label: L, description: B, value: "onsite" }, remote: { label: K, description: T, value: "remote" }, hybrid: { label: Z, description: j, value: "hybrid" } }),
                q = Object.keys(R).map((e) => ({ label: R[e].label, value: e, description: R[e].description })),
                H = Object.keys(l.Qw).map((e) => ({ ...l.Qw[e], value: String(l.Qw[e].value) }));
        },
        943052: (e, n, a) => {
            a.d(n, { Z: () => r });
            a(543673), a(240753), a(128399), a(136728);
            var l = a(202784),
                t = a(107267);
            const r = () => {
                const e = (0, t.useLocation)(),
                    n = (0, t.useHistory)(),
                    [a, r] = l.useState(new URLSearchParams(e.search));
                l.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const o = l.useCallback(
                        (l, t) => {
                            const r = new URLSearchParams(a);
                            r.set(l, t), n.push(`${e.pathname}?${r.toString()}`);
                        },
                        [n, e.pathname, a],
                    ),
                    i = l.useCallback(
                        (l) => {
                            const t = new URLSearchParams(a);
                            for (const e in l) l[e] ? t.set(e, l[e]) : t.delete(e);
                            n.push(`${e.pathname}?${t.toString()}`);
                        },
                        [n, e.pathname, a],
                    );
                return [l.useMemo(() => new URLSearchParams(e.search), [e.search]), o, i];
            };
        },
        127218: (e, n, a) => {
            a.d(n, { C: () => g });
            var l = a(202784),
                t = a(614983),
                r = a.n(t),
                o = a(437429),
                i = a.n(o),
                d = a(57074),
                s = a.n(d),
                c = a(10622),
                u = a.n(c),
                m = a(585488),
                b = a(71620),
                p = a(163889),
                f = a(312771),
                h = a(535338);
            function g(e, n, a) {
                const [t, o] = l.useState(!1),
                    [d, c] = l.useState(null),
                    g = i()(),
                    y = s()(n),
                    D = (0, b.po)(),
                    S = (0, h.p)(e, y, a);
                return l.useMemo(() => {
                    const n = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    r()(!!n, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: a, previous_cursor: l } =
                            (function (e, n) {
                                try {
                                    r()("slice_info" === n[n.length - 1], "Invalid sliceInfoPath!");
                                    let a = e;
                                    for (const e of n) r()(!!a, "The provided path is invalid."), r()("string" == typeof e, "Unexpected value for path!"), (a = a?.[e]);
                                    return a;
                                } catch (e) {
                                    return void (0, p.ZP)(e.message);
                                }
                            })(S, n) || {},
                        i = (n) => {
                            t ||
                                (o(!0),
                                u()(g, e, { ...y, cursor: n }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), D(e);
                                    },
                                }));
                        },
                        s = () => {
                            a && i(a);
                        },
                        b = () => {
                            l && i(l);
                        },
                        h = () => {
                            i(void 0);
                        };
                    return d ? { subsequentFetchStatus: f.ZP.FAILED, error: d, fetchNext: s, fetchPrevious: b, refetch: h, data: S, hasNext: Boolean(a), hasPrevious: Boolean(l) } : { subsequentFetchStatus: t ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: s, fetchPrevious: b, refetch: h, data: S, hasNext: Boolean(a), hasPrevious: Boolean(l) };
                }, [e, S, t, d, g, y, D]);
            }
        },
        164936: (e, n, a) => {
            a.d(n, { ZP: () => u, r1: () => s });
            var l = a(15022),
                t = a(202784),
                r = (a(585488), a(512549)),
                o = a(952793),
                i = a(535338);
            const d = l.Z,
                s = ({ actions: e, jobId: n }) => {
                    const { jobData: a, viewer: l } = (0, i.p)(d, { jobId: n }),
                        r = a?.result?.id ?? "",
                        o = a?.result?.user_sentiment;
                    return t.createElement(c, { actions: e, jobId: n, relayId: r, userRelayId: l?.user_results?.result?.__id, userSentiment: o });
                },
                c = ({ actions: e, jobId: n, relayId: a, userRelayId: l, userSentiment: i }) => {
                    const d = (0, o.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && d ? t.createElement(t.Fragment, null, e.includes(r.pN) && t.createElement(r.ZP, { jobId: n, relayId: a, type: r.pN, userRelayId: l, userSentiment: i }), e.includes(r.h5) && t.createElement(r.ZP, { jobId: n, relayId: a, type: r.h5, userRelayId: l, userSentiment: i })) : null;
                },
                u = c;
        },
        28135: (e, n, a) => {
            a.d(n, { Z: () => P });
            a(136728);
            var l = a(202784),
                t = a(576648),
                r = a(107267),
                o = a(811176),
                i = a(40644),
                d = a(674132),
                s = a.n(d),
                c = a(630715),
                u = a(717160),
                m = a(885724),
                b = a(106186),
                p = a(786272),
                f = a(443781),
                h = a(952793),
                g = a(782642);
            const y = (e) => `/i/jobs/${e}`;
            var D = a(701796);
            const S = s().f508c49c,
                k = s().f88553c8,
                w = s().d6825dce,
                v = s().b9613442,
                A = s().c2b3f0da,
                I = s().c791d3fc,
                $ = { label: s().ifea3114, withDelay: !0 },
                _ = ({ iconSize: e = "normal", jobId: n, jobUserId: a }) => {
                    const d = (0, g.p)(),
                        s = (0, r.useHistory)(),
                        { userClaims: _, viewerUserId: P } = (0, f.QZ)(),
                        M = (0, h.hC)("recruiting_jobs_list_share_enabled"),
                        F = (0, h.hC)("recruiting_pin_job_enabled") && (_.isTrueAndEnabled("subscriptions_feature_premium_jobs") || _.isVerifiedOrg()) && P !== a,
                        x = l.useCallback(() => {
                            s.push({ query: { text: (0, D.w)(y(n)) }, pathname: "/messages/compose" });
                        }, [s, n]),
                        E = l.useCallback(() => {
                            t.Z.setString((0, D.w)(y(n))), d({ text: k });
                        }, [d, n]),
                        C = l.useCallback(() => {
                            s.push({ query: { text: (0, D.w)(y(n)) }, pathname: "/compose/post" });
                        }, [s, n]),
                        z = l.useCallback(() => {
                            s.push({ query: { jid: n }, pathname: "/i/share-job", state: { from: s.location.pathname } });
                        }, [s, n]),
                        L = l.useCallback(() => {
                            const e = [];
                            return t.Z.isAvailable() && e.push({ text: S, onClick: E, Icon: c.default }), P && (e.push(((e) => ({ text: w, onClick: e, Icon: u.default }))(x)), e.push(((e) => ({ text: v, onClick: e, Icon: m.default }))(C))), F && e.push(((e) => ({ text: A, onClick: e, Icon: b.default }))(z)), e;
                        }, [E, x, z, C, F, P]),
                        Z = l.useCallback(
                            (e) => {
                                const n = L();
                                return n.length ? l.createElement(o.Z, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [L],
                        ),
                        K = l.useCallback(() => {}, []);
                    return M ? l.createElement(i.ZP, { Icon: p.default, "aria-label": I, color: "text", hoverLabel: $, iconSize: e, onPress: K, renderMenu: Z, testID: "job-share-action-btn" }) : null;
                },
                P = l.memo(_);
        },
        89217: (e, n, a) => {
            a.d(n, { Ju: () => m, Qw: () => b, eo: () => s });
            var l = a(674132),
                t = a.n(l);
            const r = t().c69eb656,
                o = t().g46ae43c,
                i = t().jf7d4cc6,
                d = t().b2214572,
                s = Object.freeze({ full_time: r, full_time_contract: o, part_time: i, contract_to_hire: d }),
                c = t().f8337bd6,
                u = t().i935bf88,
                m = Object.freeze({ 1: c, 2: u }),
                b = Object.freeze({ annually: { label: c, value: 1 }, hourly: { label: u, value: 2 } });
        },
        457458: (e, n, a) => {
            a.d(n, { G: () => s, M: () => d });
            a(571372);
            var l = a(301503),
                t = a(674132),
                r = a.n(t),
                o = a(89217);
            const i = r().b75b8ffd,
                d = (e, n = 1) => {
                    const a = n ?? 1;
                    return o.Ju[a.toString()] ? i({ salary: e, interval: o.Ju[a.toString()] }) : e;
                },
                s = (e) => {
                    if (e)
                        try {
                            const n = JSON.parse(e);
                            if (!n.entityMap || !n.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, l.convertFromRaw)(n).hasText()) return;
                            return n;
                        } catch (e) {}
                };
        },
        135904: (e, n, a) => {
            a.d(n, { c: () => r, n: () => t });
            var l = a(392237);
            const t = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${l.default.theme.fontSizes.title2};\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title1};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${l.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${l.default.theme.fontSizes.title3};\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title2};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${l.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};   \n        margin-bottom: ${l.default.theme.spaces.space12};\n        margin-left: calc(${l.default.theme.spaces.space28} + ${l.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${l.default.theme.spaces.space12} / 2);\n        margin-left: ${l.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${l.default.theme.spaces.space24} + ${l.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${l.default.theme.spaces.space2});\n        padding-left: calc(${l.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${l.default.theme.colors.gray900};\n        border-radius: ${l.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${l.default.theme.spaces.space28} + ${l.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, n, a) => {
            a.d(n, { Z: () => S });
            a(136728);
            var l = a(202784),
                t = a(301503),
                r = a(325686),
                o = a(595088),
                i = a(516951),
                d = a(731708),
                s = a(779802),
                c = a(537392),
                u = a(989272),
                m = a(925873),
                b = a(202253),
                p = a(786475),
                f = a(392237),
                h = a(135904);
            const g = { [s.P7.atomic]: { element: "section" }, [s.P7.header1]: { element: "h1", wrapper: l.createElement(d.ZP, null) }, [s.P7.header2]: { element: "h2", wrapper: l.createElement(d.ZP, null) } },
                y = (0, o.Z)(g).reduce((e, [n, a]) => e.set(n, a), t.DefaultDraftBlockRenderMap);
            let D = !1;
            const S = l.memo(function (e) {
                    const { componentByType: n, contentState: a, onScribeEvent: o, paragraphFontSizeOverride: d } = e;
                    l.useEffect(() => {
                        D || (u.fH(h.c, h.n), (D = !0));
                    }, []);
                    const f = [(0, b.ez)(o, d), b.aF, b.RU];
                    e.disable_entityLinkDecorator || f.push((0, b.NA)(o, d));
                    const g = m.Z.initEditorState(a, { decorators: f });
                    let S = i.Z;
                    return (
                        n &&
                            (S = (e) => {
                                const a = e.getType();
                                return n[a] || null;
                            }),
                        l.createElement(c.ZP, null, ({ containerWidth: e }) => l.createElement(r.Z, { style: k.fontFamily }, l.createElement(t.Editor, { blockRenderMap: y, blockRendererFn: S, blockStyleFn: (0, s.su)(p.Z.isNarrowScreenWidth(e)), editorState: g, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                k = f.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, n, a) => {
            a.d(n, { $u: () => A, Ak: () => M, KJ: () => S, LI: () => I, P7: () => h, PW: () => v, QF: () => g, Qm: () => D, Tr: () => $, b$: () => f, db: () => x, et: () => w, fR: () => p, iH: () => _, lD: () => y, su: () => k, u4: () => F, wX: () => P });
            var l = a(202784),
                t = a(674132),
                r = a.n(t),
                o = a(394123),
                i = a(856661),
                d = a(69893),
                s = a(474761),
                c = a(428259),
                u = a(89085),
                m = a(630715),
                b = a(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                f = (e) => [
                    { buttonTestId: "btn-bold", Icon: o.default, key: p.bold, onPress: e(p.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: p.italic, onPress: e(p.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: d.default, key: p.strikethrough, onPress: e(p.strikethrough) },
                ],
                h = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                g = (e) => [{ buttonTestId: "btn-blockquote", Icon: s.default, key: h.blockquote, onPress: e(h.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: h.bulleted, onPress: e(h.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: h.numbered, onPress: e(h.numbered) },
                ],
                D = "LINK",
                S = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: D, onPress: e }],
                k = (e, n) => (a) => {
                    const l = (n) => (e ? `${n}-narrow` : n);
                    switch (a.getType()) {
                        case h.bulleted:
                            return l("longform-unordered-list-item");
                        case h.blockquote:
                            return l("longform-blockquote");
                        case h.header1:
                            return l("longform-header-one");
                        case h.header2:
                            return l("longform-header-two");
                        case h.numbered:
                            return l("longform-ordered-list-item");
                        case h.paragraph:
                            return l("longform-unstyled");
                        default:
                            return n?.(a) || "";
                    }
                },
                w = r().d5a48014,
                v = r().b92b6156,
                A = r().ec5ed598,
                I = ({ children: e, extendedWidth: n, size: a, weight: t }) => l.createElement(b.ZP, { extendedWidth: n, size: a, weight: t }, e),
                $ = { blockType: h.paragraph, label: A, component: I({ size: "body", children: A }) },
                _ = [{ blockType: h.header1, label: w, component: I({ size: "title1", extendedWidth: !0, children: w }) }, { blockType: h.header2, label: v, component: I({ size: "title3", weight: "heavy", children: v }) }, $],
                P = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                M = ["delete", "delete-word", "delete-to-start-of-line"],
                F = "increase-text-size",
                x = "decrease-text-size";
        },
        989272: (e, n, a) => {
            a.d(n, { _i: () => t, fH: () => o, w3: () => r });
            a(136728);
            var l = a(392237);
            const t = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                o(
                    (function () {
                        const e = l.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${t.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${t.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${t.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const n = d(e);
                return (
                    o(
                        (function (e) {
                            const n = d(e);
                            let a = e.placeholderTextColor;
                            const t = e.contentHorizontalPadding;
                            a || (a = l.default.theme.colors.gray700);
                            return `\n    .${n} .public-DraftEditorPlaceholder-root {\n      color: ${a};\n    }\n\n    .${n} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${a};\n    }\n\n    ${t ? `\n        .${n} .public-DraftEditor-content,\n        .${n} .public-DraftEditorPlaceholder-root {\n          padding-left: ${t};\n          padding-right: ${t};\n        }\n      ` : ""}\n  `;
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
                    const l = document.head;
                    l && l.insertBefore(a, l.firstChild);
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
        183806: (e, n, a) => {
            a.d(n, { Z: () => l });
            const l = a(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.cad94bba.js.map
