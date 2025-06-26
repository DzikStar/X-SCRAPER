"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs"],
    {
        626926: (e, a, n) => {
            n.d(a, { Z: () => s });
            var t,
                r,
                l,
                o = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: (t = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: t, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "InlineFragment", selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }, r], storageKey: null }, l], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "RxOP--hDqELH_fWn5VylUA", metadata: {}, name: "JobListItemContentUserQuery", operationKind: "query", text: null } };
            o.hash = "a917044255331aa25e3b5342759ae37c";
            const s = o;
        },
        436065: (e, a, n) => {
            n.d(a, { Z: () => r });
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
        501527: (e, a, n) => {
            n.d(a, { Z: () => o });
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
        891717: (e, a, n) => {
            n.d(a, { Z: () => r });
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
        176811: (e, a, n) => {
            n.d(a, { Z: () => r });
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
            const r = t;
        },
        643331: (e, a, n) => {
            n.d(a, { Z: () => d });
            var t,
                r,
                l,
                o,
                s,
                i = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "jobId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sentiment" }), (l = { defaultValue: null, kind: "LocalArgument", name: "twclid" }), (o = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "SentimentActionButtonMutation",
                        selections: (s = [
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
                    operation: { argumentDefinitions: [o, t, r, l], kind: "Operation", name: "SentimentActionButtonMutation", selections: s },
                    params: { id: "1smesvHITcf79zPEvtAqOA", metadata: {}, name: "SentimentActionButtonMutation", operationKind: "mutation", text: null },
                };
            i.hash = "0a931e00dd50f5310fb28d29e83f884c";
            const d = i;
        },
        15022: (e, a, n) => {
            n.d(a, { Z: () => m });
            var t,
                r,
                l,
                o,
                s,
                i,
                d,
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
                                selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null }], type: "ApiJob", abstractKey: null })], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(d = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
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
                            { alias: "jobData", args: r, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [l, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), s], storageKey: null }, o], storageKey: null },
                            { alias: "viewer", args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [o], type: "User", abstractKey: null }, d], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "qHd1d0swWQGc38vT_2YChQ", metadata: {}, name: "SentimentActionsQuery", operationKind: "query", text: null },
                };
            u.hash = "e5a668a0d2bfaed6901573b493e6449a";
            const m = u;
        },
        229333: (e, a, n) => {
            n.d(a, { Z: () => u });
            var t = n(202784),
                r = n(466999),
                l = n(325686),
                o = n(392237),
                s = n(111677);
            const i = n.n(s)().e5b0063d;
            let d = 0;
            class c extends t.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        n = i({ title: a });
                    return t.createElement(l.Z, { "aria-labelledby": this._listDomId, role: "region" }, t.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, a), t.createElement(l.Z, { "aria-label": n }, e));
                }
            }
            const u = c;
        },
        414939: (e, a, n) => {
            n.d(a, { Z: () => i });
            var t = n(202784),
                r = n(325686),
                l = n(392237);
            class o extends t.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return t.createElement(r.Z, { style: s.root });
                }
            }
            const s = l.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = o;
        },
        856438: (e, a, n) => {
            n.d(a, { Z: () => m });
            var t = n(202784),
                r = n(868634),
                l = n(731708),
                o = n(392237),
                s = n(111677),
                i = n.n(s),
                d = n(262009);
            const c = i().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => t.createElement(r.ZP, { style: u.label, type: "priority" }, t.createElement(l.ZP, { style: u.featuredLabel }, t.createElement(d.default, { style: u.featuredIcon }), c));
        },
        471957: (e, a, n) => {
            n.d(a, { Z: () => P });
            var t = n(626926),
                r = n(202784),
                l = n(325686),
                o = (n(585488), n(277660)),
                s = n.n(o),
                i = n(392237),
                d = n(725405),
                c = n(535338),
                u = n(164936),
                m = (n(136728), n(107267)),
                h = n(731708),
                p = n(519172),
                y = n(601413),
                b = n(952428),
                g = n(823161),
                f = n(757483),
                k = n(457458),
                v = n(412876),
                D = n(549599);
            const _ = ({ fallbackName: e, user: a }) => {
                    const n = s()(D.fR, a);
                    return n && n.core && n.core.name && n.core.screen_name ? r.createElement(h.ZP, { size: "subtext2", style: S.userName }, r.createElement(l.Z, { style: S.name }, r.createElement(h.ZP, { numberOfLines: 1 }, n.core.name), r.createElement(p.Z, { isVerified: n.verification?.verified ?? !1, verifiedType: n.verification?.verified_type ?? void 0 })), r.createElement(y.Z, { screenName: n.core.screen_name, size: "subtext2" })) : e ? r.createElement(h.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                S = i.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: f.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                I = ({ companyProfile: e, formattedSalary: a, jobId: n, jobLocation: t, jobTitle: o, onClick: s, renderActions: i, salaryInterval: d, user: c, withBottomBorder: u = !0 }) => {
                    const { jobId: p } = (0, m.useParams)(),
                        y = r.useMemo(() => ({ label: o }), [o]),
                        f = r.useMemo(() => {
                            const e = [S.listContainer];
                            return p === n ? e.push(S.activeItem) : u && e.push(S.inactiveItem), e;
                        }, [p, n, u]);
                    return r.createElement(b.Z, { onClick: s, role: "listitem", style: f }, r.createElement(l.Z, { style: S.itemRow }, c ? r.createElement(v.Y, { size: "xLarge", user: c }) : r.createElement(g.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(l.Z, { style: S.items }, r.createElement(h.ZP, { hoverLabel: y, numberOfLines: 2, size: "subtext1", weight: "bold" }, o), r.createElement(_, { fallbackName: e?.core?.name, user: c }), r.createElement(h.ZP, { color: "gray700", size: "subtext2" }, t), a ? r.createElement(h.ZP, { color: "gray700", size: "subtext2" }, (0, k.M)(a, d)) : null)), i && r.createElement(l.Z, null, i()));
                },
                w = t.Z,
                E = i.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                P = ({ actions: e, companyProfile: a, job: n, jobId: t, jobIndex: o, onClick: i, relayId: m, user: h, userSentiment: p, withBottomBorder: y = !0 }) => {
                    const b = (0, d.Z)(),
                        { viewer: g } = (0, c.p)(w, {}),
                        f = s()(D.qV, n),
                        k = s()(D.dB, a),
                        v = g?.user_results?.result?.__id,
                        _ = r.useCallback(() => {
                            b.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: t, position: o }] } }), i();
                        }, [b, t, o, i]),
                        S = r.useCallback(() => r.createElement(l.Z, { style: E.actions }, r.createElement(u.ZP, { actions: e, jobId: t, relayId: m, userRelayId: v, userSentiment: p })), [e, t, m, v, p]);
                    return f && f.title && f.location ? r.createElement(I, { companyProfile: k, formattedSalary: f.formatted_salary, jobId: t, jobLocation: f.location, jobTitle: f.title, onClick: _, renderActions: S, salaryInterval: f.salary_interval, user: h, withBottomBorder: y }) : null;
                };
        },
        549599: (e, a, n) => {
            n.d(a, { KM: () => g, ZP: () => f, dB: () => y, fR: () => b, qV: () => p });
            n(136728);
            var t = n(501527),
                r = n(176811),
                l = n(436065),
                o = n(891717),
                s = n(202784),
                i = (n(585488), n(277660)),
                d = n.n(i),
                c = n(107267),
                u = n(708852),
                m = n(471957),
                h = n(512549);
            const p = o.Z,
                y = l.Z,
                b = r.Z,
                g = t.Z,
                f = ({ item: e, itemId: a, itemIndex: n }) => {
                    const t = (0, u.Ji)(),
                        r = (0, c.useHistory)(),
                        l = (0, c.useLocation)(),
                        o = d()(g, e),
                        i = o?.core,
                        p = o?.user_results?.result,
                        y = o?.company_profile_results?.result,
                        b = o?.id || "",
                        f = o?.user_sentiment,
                        k = s.useCallback(() => {
                            t ? r.push({ pathname: `/jobs/${a}`, query: l.query }) : r.push({ pathname: `/m/jobs/${a}`, query: l.query });
                        }, [r, t, a, l.query]);
                    return o && i ? s.createElement(m.Z, { actions: [h.h5], companyProfile: y, job: i, jobId: a, jobIndex: n, onClick: k, relayId: b, user: p, userSentiment: f }) : null;
                };
        },
        324948: (e, a, n) => {
            n.d(a, { Z: () => o });
            var t = n(202784),
                r = n(691533);
            const l = (0, n(523561).Z)({
                    loader: () =>
                        Promise.all([
                            n.e("icons.5"),
                            n.e("icons.25"),
                            n.e("icons.22"),
                            n.e("icons.6"),
                            n.e("icons.4"),
                            n.e("icons.9"),
                            n.e("icons.15"),
                            n.e("icons.7"),
                            n.e("icons.3"),
                            n.e("icons.20"),
                            n.e("icons.2"),
                            n.e("icons.27"),
                            n.e("icons.13"),
                            n.e("modules.common-e907d115"),
                            n.e("modules.common-e019dbda"),
                            n.e("icons.0"),
                            n.e("icons.24"),
                            n.e("icons.17"),
                            n.e("icons.12"),
                            n.e("icons.11"),
                            n.e("icons.26"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            n.e("loader.WideLayout-6107ac1a"),
                            n.e("loader.WideLayout-2e365fe7"),
                            n.e("loader.WideLayout-9f4db315"),
                        ]).then(n.bind(n, 741494)),
                }),
                o = (e) => t.createElement(r.Z, { hideOnError: !0 }, t.createElement(l, e));
        },
        512549: (e, a, n) => {
            n.d(a, { ZP: () => _, h5: () => f, pN: () => k, tv: () => g });
            var t = n(643331),
                r = n(202784),
                l = n(325686),
                o = (n(585488), n(351743)),
                s = n.n(o),
                i = n(530732),
                d = n(731708),
                c = n(392237),
                u = n(106186),
                m = n(258292),
                h = n(616894),
                p = n(443781),
                y = n(292546);
            const b = t.Z,
                g = (e, a, n) => {
                    const { viewerUserId: t } = (0, p.QZ)(),
                        [l] = s()(b),
                        [o] = (0, y.Z)(),
                        i = o.get("twclid") || null,
                        d = r.useCallback(
                            (e, t) => {
                                const r = e.get(a);
                                if ((r && r.setValue(t, "user_sentiment"), n)) {
                                    const a = e.get(n);
                                    a && a.invalidateRecord();
                                }
                            },
                            [a, n],
                        );
                    return r.useCallback(
                        (a) => {
                            t && l({ variables: { jobId: e, userId: t, sentiment: a, twclid: i }, optimisticUpdater: (e) => d(e, a), updater: (e) => d(e, a) });
                        },
                        [l, d, e, i, t],
                    );
                },
                f = "like",
                k = "dislike",
                v = ({ Icon: e, SelectedIcon: a, activeStyle: n, hoverStyle: t, isSelected: o, label: s, onClick: c, sentiment: u }) => {
                    const m = (e) => (e ? t : o ? n : {});
                    return r.createElement(
                        l.Z,
                        null,
                        r.createElement(i.Z, { interactiveStyles: null, onClick: (e) => c(u, e), style: D.sentimentActionContainer }, ({ isHovered: n }) => r.createElement(r.Fragment, null, o ? r.createElement(a, { style: m(n) }) : r.createElement(e, { style: m(n) }), r.createElement(d.ZP, { size: "subtext2", style: { ...m(n) } }, s))),
                    );
                },
                D = c.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                _ = ({ jobId: e, relayId: a, type: n, userRelayId: t, userSentiment: l }) => {
                    const o = g(e, a, t),
                        s = r.useCallback(
                            (e, a) => {
                                a.stopPropagation();
                                o(e !== l ? e : "none");
                            },
                            [o, l],
                        );
                    return n === f ? r.createElement(v, { Icon: u.default, SelectedIcon: m.default, activeStyle: D.likeActive, hoverStyle: D.likeHover, isSelected: l === f, label: "Save job", onClick: s, sentiment: f }) : n === k ? r.createElement(v, { Icon: h.default, SelectedIcon: h.default, activeStyle: D.dislikeActive, hoverStyle: D.dislikeHover, isSelected: l === k, label: "Not interested", onClick: s, sentiment: k }) : null;
                };
        },
        965245: (e, a, n) => {
            n.d(a, { Z: () => i });
            var t = n(807896),
                r = n(202784),
                l = n(229333),
                o = n(414939),
                s = n(334346);
            const i = ({ accessibilityTitle: e, footer: a = r.createElement(o.Z, null), ...n }) => {
                const i = r.createElement(s.C, (0, t.Z)({}, n, { footer: a }));
                return e ? r.createElement(l.Z, { title: e }, i) : i;
            };
        },
        334346: (e, a, n) => {
            n.d(a, { C: () => i, Z: () => s });
            var t = n(807896),
                r = n(202784),
                l = n(524084),
                o = n(768572);
            const s = "stable_sort_index",
                i = r.forwardRef((e, a) => {
                    const n = e.cacheKey;
                    return r.createElement(o.ZP, { identifier: n }, r.createElement(l.Z, (0, t.Z)({ ref: a }, e)));
                });
        },
        252021: (e, a, n) => {
            n.d(a, { Z: () => o });
            var t = n(202784),
                r = n(107267),
                l = n(115553);
            const o = (e) => {
                (0, r.useHistory)();
                return t.createElement(l.A, e);
            };
        },
        652904: (e, a, n) => {
            n.d(a, { Z: () => c });
            var t = n(202784),
                r = n(500002),
                l = n(668214),
                o = n(997174),
                s = n(118823);
            const i = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: n, search: t },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: o },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    a.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && a.pathname === n && ((this._isInBackground = !1), (i = !0));
                    const d = r || s;
                    ((d && r !== s) || (!d && n !== l) || t !== o || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: n, updateTweetDetailNav: t } = e;
                    a.scribePageImpression(), n(a.contextualScribeNamespace, a.contextualScribeData), t(a.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(i(d));
        },
        292546: (e, a, n) => {
            n.d(a, { Z: () => l });
            n(543673), n(240753), n(128399), n(136728);
            var t = n(202784),
                r = n(107267);
            const l = () => {
                const e = (0, r.useLocation)(),
                    a = (0, r.useHistory)(),
                    [n, l] = t.useState(new URLSearchParams(e.search));
                t.useEffect(() => {
                    l(new URLSearchParams(e.search));
                }, [e.search]);
                const o = t.useCallback(
                    (t, r) => {
                        const l = new URLSearchParams(n);
                        l.set(t, r), a.push(`${e.pathname}?${l.toString()}`);
                    },
                    [a, e.pathname, n],
                );
                return [t.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        524084: (e, a, n) => {
            n.d(a, { Z: () => o });
            var t = n(202784),
                r = n(523561),
                l = n(195560);
            const o = (0, r.Z)({ loader: () => n.e("loader.AbsolutePower").then(n.bind(n, 590136)), renderPlaceholder: (e, a) => t.createElement(l.Z, { hasError: e, onRetry: a }) });
        },
        985124: (e, a, n) => {
            n.d(a, { $J: () => s, WA: () => L, ZC: () => S, cj: () => N, eo: () => t.eo, hb: () => z, kW: () => i, pg: () => I, rP: () => o, u4: () => O, xk: () => x });
            var t = n(89217),
                r = n(111677),
                l = n.n(r);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                s = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(t.eo).map(([e, a]) => ({ label: String(a), value: e })),
                d = l().d2b8da2c,
                c = l().cd958040,
                u = l().c5760ca2,
                m = l().d31b4a2a,
                h = l().df1b7550,
                p = l().f38959a6,
                y = l().bc78a26c,
                b = l().ec28738e,
                g = l().icb06308,
                f = l().d0b978ec,
                k = l().af19cdc2,
                v = l().e4a51fca,
                D = l().e8ca78ae,
                _ = l().c365dcc6,
                S = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: m, marketing: h, sales_am: p, operations: y, people_hr: b, finance_accounting: g, legal_compliance: f, science_engineering: k, medical: v, construction_trades: D, other: _ }),
                I = Object.entries(S).map(([e, a]) => ({ label: String(a), value: e })),
                w = l().e25d75e4,
                E = l().e89b3f04,
                P = l().h55825dc,
                C = l().cc537386,
                Z = l().jfc3cece,
                M = l().e1b683aa,
                F = l().c4627fda,
                A = l().db75b47c,
                L = Object.freeze({ intern: w, entry_level: E, junior: P, mid_level: C, senior: Z, lead: M, manager: F, executive: A }),
                x = Object.entries(L).map(([e, a]) => ({ label: String(a), value: e })),
                j = l().i312f0ce,
                K = l().b4aff05e,
                R = l().c08b9138,
                T = l().ia5d6422,
                B = l().h97c7f42,
                U = l().ibed2d04,
                N = Object.freeze({ onsite: { label: j, description: T, value: "onsite" }, remote: { label: R, description: U, value: "remote" }, hybrid: { label: K, description: B, value: "hybrid" } }),
                O = Object.keys(N).map((e) => ({ label: N[e].label, value: e, description: N[e].description })),
                z = Object.keys(t.Qw).map((e) => ({ ...t.Qw[e], value: String(t.Qw[e].value) }));
        },
        943052: (e, a, n) => {
            n.d(a, { Z: () => l });
            n(543673), n(240753), n(128399), n(136728);
            var t = n(202784),
                r = n(107267);
            const l = () => {
                const e = (0, r.useLocation)(),
                    a = (0, r.useHistory)(),
                    [n, l] = t.useState(new URLSearchParams(e.search));
                t.useEffect(() => {
                    l(new URLSearchParams(e.search));
                }, [e.search]);
                const o = t.useCallback(
                        (t, r) => {
                            const l = new URLSearchParams(n);
                            l.set(t, r), a.push(`${e.pathname}?${l.toString()}`);
                        },
                        [a, e.pathname, n],
                    ),
                    s = t.useCallback(
                        (t) => {
                            const r = new URLSearchParams(n);
                            for (const e in t) t[e] ? r.set(e, t[e]) : r.delete(e);
                            a.push(`${e.pathname}?${r.toString()}`);
                        },
                        [a, e.pathname, n],
                    );
                return [t.useMemo(() => new URLSearchParams(e.search), [e.search]), o, s];
            };
        },
        127218: (e, a, n) => {
            n.d(a, { C: () => g });
            var t = n(202784),
                r = n(614983),
                l = n.n(r),
                o = n(437429),
                s = n.n(o),
                i = n(57074),
                d = n.n(i),
                c = n(10622),
                u = n.n(c),
                m = n(585488),
                h = n(71620),
                p = n(163889),
                y = n(312771),
                b = n(535338);
            function g(e, a, n) {
                const [r, o] = t.useState(!1),
                    [i, c] = t.useState(null),
                    g = s()(),
                    f = d()(a),
                    k = (0, h.po)(),
                    v = (0, b.p)(e, f, n);
                return t.useMemo(() => {
                    const a = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    l()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: t } =
                            (function (e, a) {
                                try {
                                    l()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of a) l()(!!n, "The provided path is invalid."), l()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, p.ZP)(e.message);
                                }
                            })(v, a) || {},
                        s = (a) => {
                            r ||
                                (o(!0),
                                u()(g, e, { ...f, cursor: a }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), k(e);
                                    },
                                }));
                        },
                        d = () => {
                            n && s(n);
                        },
                        h = () => {
                            t && s(t);
                        },
                        b = () => {
                            s(void 0);
                        };
                    return i ? { subsequentFetchStatus: y.ZP.FAILED, error: i, fetchNext: d, fetchPrevious: h, refetch: b, data: v, hasNext: Boolean(n), hasPrevious: Boolean(t) } : { subsequentFetchStatus: r ? y.ZP.LOADING : y.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: h, refetch: b, data: v, hasNext: Boolean(n), hasPrevious: Boolean(t) };
                }, [e, v, r, i, g, f, k]);
            }
        },
        164936: (e, a, n) => {
            n.d(a, { ZP: () => u, r1: () => d });
            var t = n(15022),
                r = n(202784),
                l = (n(585488), n(512549)),
                o = n(952793),
                s = n(535338);
            const i = t.Z,
                d = ({ actions: e, jobId: a }) => {
                    const { jobData: n, viewer: t } = (0, s.p)(i, { jobId: a }),
                        l = n?.result?.id ?? "",
                        o = n?.result?.user_sentiment;
                    return r.createElement(c, { actions: e, jobId: a, relayId: l, userRelayId: t?.user_results?.result?.__id, userSentiment: o });
                },
                c = ({ actions: e, jobId: a, relayId: n, userRelayId: t, userSentiment: s }) => {
                    const i = (0, o.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && i ? r.createElement(r.Fragment, null, e.includes(l.pN) && r.createElement(l.ZP, { jobId: a, relayId: n, type: l.pN, userRelayId: t, userSentiment: s }), e.includes(l.h5) && r.createElement(l.ZP, { jobId: a, relayId: n, type: l.h5, userRelayId: t, userSentiment: s })) : null;
                },
                u = c;
        },
        28135: (e, a, n) => {
            n.d(a, { Z: () => C });
            n(136728);
            var t = n(202784),
                r = n(576648),
                l = n(107267),
                o = n(811176),
                s = n(40644),
                i = n(111677),
                d = n.n(i),
                c = n(630715),
                u = n(717160),
                m = n(885724),
                h = n(106186),
                p = n(786272),
                y = n(443781),
                b = n(952793),
                g = n(782642);
            const f = (e) => `/i/jobs/${e}`;
            var k = n(701796);
            const v = d().f508c49c,
                D = d().f88553c8,
                _ = d().d6825dce,
                S = d().b9613442,
                I = d().c2b3f0da,
                w = d().c791d3fc,
                E = { label: d().ifea3114, withDelay: !0 },
                P = ({ iconSize: e = "normal", jobId: a, jobUserId: n }) => {
                    const i = (0, g.p)(),
                        d = (0, l.useHistory)(),
                        { userClaims: P, viewerUserId: C } = (0, y.QZ)(),
                        Z = (0, b.hC)("recruiting_jobs_list_share_enabled"),
                        M = (0, b.hC)("recruiting_pin_job_enabled") && (P.isTrueAndEnabled("subscriptions_feature_premium_jobs") || P.isVerifiedOrg()) && C !== n,
                        F = t.useCallback(() => {
                            d.push({ query: { text: (0, k.w)(f(a)) }, pathname: "/messages/compose" });
                        }, [d, a]),
                        A = t.useCallback(() => {
                            r.Z.setString((0, k.w)(f(a))), i({ text: D });
                        }, [i, a]),
                        L = t.useCallback(() => {
                            d.push({ query: { text: (0, k.w)(f(a)) }, pathname: "/compose/post" });
                        }, [d, a]),
                        x = t.useCallback(() => {
                            d.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, a]),
                        j = t.useCallback(() => {
                            const e = [];
                            return r.Z.isAvailable() && e.push({ text: v, onClick: A, Icon: c.default }), C && (e.push(((e) => ({ text: _, onClick: e, Icon: u.default }))(F)), e.push(((e) => ({ text: S, onClick: e, Icon: m.default }))(L))), M && e.push(((e) => ({ text: I, onClick: e, Icon: h.default }))(x)), e;
                        }, [A, F, x, L, M, C]),
                        K = t.useCallback(
                            (e) => {
                                const a = j();
                                return a.length ? t.createElement(o.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [j],
                        ),
                        R = t.useCallback(() => {}, []);
                    return Z ? t.createElement(s.ZP, { Icon: p.default, "aria-label": w, color: "text", hoverLabel: E, iconSize: e, onPress: R, renderMenu: K, testID: "job-share-action-btn" }) : null;
                },
                C = t.memo(P);
        },
        89217: (e, a, n) => {
            n.d(a, { Ju: () => m, Qw: () => h, eo: () => d });
            var t = n(111677),
                r = n.n(t);
            const l = r().c69eb656,
                o = r().g46ae43c,
                s = r().jf7d4cc6,
                i = r().b2214572,
                d = Object.freeze({ full_time: l, full_time_contract: o, part_time: s, contract_to_hire: i }),
                c = r().f8337bd6,
                u = r().i935bf88,
                m = Object.freeze({ 1: c, 2: u }),
                h = Object.freeze({ annually: { label: c, value: 1 }, hourly: { label: u, value: 2 } });
        },
        457458: (e, a, n) => {
            n.d(a, { G: () => d, M: () => i });
            n(571372);
            var t = n(301503),
                r = n(111677),
                l = n.n(r),
                o = n(89217);
            const s = l().b75b8ffd,
                i = (e, a = 1) => {
                    const n = a ?? 1;
                    return o.Ju[n.toString()] ? s({ salary: e, interval: o.Ju[n.toString()] }) : e;
                },
                d = (e) => {
                    if (e)
                        try {
                            const a = JSON.parse(e);
                            if (!a.entityMap || !a.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, t.convertFromRaw)(a).hasText()) return;
                            return a;
                        } catch (e) {}
                };
        },
        524496: (e, a, n) => {
            n.d(a, { Z: () => v });
            n(136728);
            var t = n(202784),
                r = n(301503),
                l = n(325686),
                o = n(595088),
                s = n(516951),
                i = n(731708),
                d = n(779802),
                c = n(537392),
                u = n(989272),
                m = n(925873),
                h = n(202253),
                p = n(786475),
                y = n(392237),
                b = n(135904);
            const g = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: t.createElement(i.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: t.createElement(i.ZP, null) } },
                f = (0, o.Z)(g).reduce((e, [a, n]) => e.set(a, n), r.DefaultDraftBlockRenderMap);
            let k = !1;
            const v = t.memo(function (e) {
                    const { componentByType: a, contentState: n, onScribeEvent: o, paragraphFontSizeOverride: i } = e;
                    t.useEffect(() => {
                        k || (u.fH(b.c, b.n), (k = !0));
                    }, []);
                    const y = [(0, h.ez)(o, i), h.aF, h.RU];
                    e.disable_entityLinkDecorator || y.push((0, h.NA)(o, i));
                    const g = m.Z.initEditorState(n, { decorators: y });
                    let v = s.Z;
                    return (
                        a &&
                            (v = (e) => {
                                const n = e.getType();
                                return a[n] || null;
                            }),
                        t.createElement(c.ZP, null, ({ containerWidth: e }) => t.createElement(l.Z, { style: D.fontFamily }, t.createElement(r.Editor, { blockRenderMap: f, blockRendererFn: v, blockStyleFn: (0, d.su)(p.Z.isNarrowScreenWidth(e)), editorState: g, onChange: s.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                D = y.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        941978: (e, a, n) => {
            n.d(a, { C: () => t });
            class t {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const a = this._load(e);
                    return !(a instanceof Promise) && !!a;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, a) {
                    if (this._cache[e]) return this._cache[e];
                    const n = a().then((a) => {
                        this._cache[e] = a;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((a) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(a)
                                          .catch(() => a(!1))
                                    : a(!0);
                            }),
                    );
                }
            }
            new t();
        },
        491915: (e, a, n) => {
            n.d(a, { ZP: () => b });
            n(571372);
            var t = n(202784),
                r = n(325686),
                l = n(392237),
                o = n(111677),
                s = n.n(o),
                i = n(643442),
                d = n(466445),
                c = n(731708),
                u = n(154003),
                m = n(173739);
            const h = s().jcf3e7a2;
            function p({ animation: e, autoplay: a }) {
                const [n, l] = t.useState(a),
                    [o, s] = t.useState(0);
                return (
                    t.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    t.createElement(
                        r.Z,
                        { style: y.container },
                        t.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? t.createElement(i.default, null) : t.createElement(d.default, null),
                            onClick: function () {
                                n ? (e.pause(), l(!1)) : (e.play(), l(!0));
                            },
                            type: "primaryText",
                        }),
                        t.createElement(c.ZP, { style: y.frames }, `${o}/${e.totalFrames}`),
                        t.createElement(
                            r.Z,
                            { style: y.slider },
                            t.createElement(m.Z, {
                                "aria-label": h,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (a) {
                                    e.goToAndStop(a, !0), l(!1);
                                },
                                value: o,
                            }),
                        ),
                    )
                );
            }
            const y = l.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function b(e) {
                const { autoplay: a = !0, loop: n = !1, onAnimationEnd: l, onAnimationStart: o, onError: s, withControls: i } = e,
                    d = t.useRef(void 0),
                    c = t.useRef({ animationLoaded: !1 }),
                    u = t.useRef(null),
                    [m, h] = t.useState(!1);
                return (
                    t.useEffect(() => {
                        function t(e, a) {
                            "function" == typeof l && l(a), e && e.destroy();
                        }
                        const { animationLoaded: r } = c.current;
                        r ||
                            ((c.current.animationLoaded = !0),
                            g.load().then((r) => {
                                if (r && u.current) {
                                    const l = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        i = r.loadAnimation(l);
                                    (d.current = i),
                                        (i.onError = (e) => {
                                            const a = new f(e);
                                            "function" == typeof s && s(a), t(i, a);
                                        }),
                                        i.addEventListener("DOMLoaded", () => {
                                            h(!0), a && (i.play(), o && o());
                                        }),
                                        i.addEventListener("complete", () => {
                                            t(i);
                                        });
                                }
                            }));
                    }, [e.animation, a, n, l, o, s, i]),
                    t.useEffect(
                        () =>
                            function () {
                                d.current && d.current.destroy();
                            },
                        [d],
                    ),
                    t.createElement(r.Z, null, t.createElement(r.Z, { style: [e.animationContainerStyle, k.centerAnimation] }, t.createElement("div", { ref: u, style: e.animationStyle }), i && d.current && m && t.createElement(p, { animation: d.current, autoplay: a })))
                );
            }
            b.Prepare = function () {
                return (
                    t.useEffect(() => {
                        g.load();
                    }, []),
                    null
                );
            };
            const g = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class f extends Error {
                constructor(e, ...a) {
                    super(...a), Error.captureStackTrace && Error.captureStackTrace(this, f), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const k = l.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        40644: (e, a, n) => {
            n.d(a, { ZP: () => D });
            var t = n(202784),
                r = n(325686),
                l = n(461756),
                o = n(731708),
                s = n(58881),
                i = n(530732),
                d = n(224162),
                c = n(491915),
                u = n(392237),
                m = n(551611),
                h = n(111677),
                p = n.n(h),
                y = n(891198),
                b = n(537392),
                g = n(280278);
            const f = p().e8d93005,
                k = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                v = ({ color: e, count: a }) => {
                    const n = (0, y.wl)(a, !0);
                    return t.createElement(b.ZP, null, ({ containerWidth: r }) => {
                        return t.createElement(g.ZP, { color: e, count: a, size: "subtext2", style: [k.count, ((l = r), l < u.default.theme.breakpoints.small && k.narrowCount)] }, a > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? f(a) : n) : void 0);
                        var l;
                    });
                };
            class D extends t.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, a) => {
                            const { activeColor: n, color: l, decoration: s } = this.props;
                            return t.createElement(d.ZP.Consumer, null, ({ direction: i }) => t.createElement(o.ZP, { color: e ? n : l, dir: i, style: [I.inner, e && "blue500" === n && I.blue500] }, t.createElement(r.Z, { ref: this.props.actionIconContainerRef }, a ? this._renderButton(a) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: a, backgroundColor: n, hoverLabel: r, iconSize: l, isActive: o, isDisabled: d, showBackgroundWhenActive: c } = this.props,
                                m = s.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[a], insetFocusRing: !0 }),
                                h = c && o && !e?.isHovered;
                            return t.createElement(i.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, S[h ? "haloBackground" : n], !d && I.iconBackground, "small" === l && I.iconSmallBoundingBox, h && I.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: a, isActive: n, isDisabled: r, isFaded: o, onAnimationEnd: s, onAnimationStart: i, onError: d, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !l.Z.reducedMotionEnabled && e && h) return t.createElement(c.ZP, { animation: p || m.Bf, animationContainerStyle: _[a], animationStyle: E, onAnimationEnd: s, onAnimationStart: i, onError: d });
                            {
                                const l = n && e ? e : this.props.Icon;
                                return t.createElement(l, { style: [_[a], !r && o && I.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: a } = this.props;
                            return a ? t.createElement(v, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: a, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), a && a(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: a, enableKeyboardShortcuts: n, isActive: o, isDisabled: s, isPresentational: d, keyboardShortcut: m, link: h, preventFocusShift: p, renderMenu: y, renderWrapper: b = t.Fragment, style: g, testID: f } = this.props,
                        k = !u.default.theme.highContrastEnabled && !l.Z.reducedMotionEnabled;
                    return t.createElement(
                        r.Z,
                        { style: [I.root, g] },
                        t.createElement(
                            b,
                            null,
                            d
                                ? this._renderContent(o)
                                : t.createElement(i.Z, { "aria-haspopup": y ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: n, focusable: a, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: y, style: [I.triggerAreaRoot, I.outlineNone], testID: f }, (e) => {
                                      const { isFocused: a, isHovered: n, isPressed: t } = e,
                                          r = o || n || t || a;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        k ? t.createElement(c.ZP.Prepare, null) : null,
                    );
                }
            }
            D.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const _ = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                S = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                I = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                w = "224.5%",
                E = { width: w, height: w };
        },
        551611: (e, a, n) => {
            n.d(a, { Bf: () => r, ZP: () => o });
            var t = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class l extends t.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const o = new l();
        },
        183806: (e, a, n) => {
            n.d(a, { Z: () => t });
            const t = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.f3f0f75a.js.map
