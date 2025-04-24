"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs"],
    {
        626926: (e, a, l) => {
            l.d(a, { Z: () => d });
            var n,
                r,
                t,
                o = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }, r], storageKey: null }, t], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "RxOP--hDqELH_fWn5VylUA", metadata: {}, name: "JobListItemContentUserQuery", operationKind: "query", text: null } };
            o.hash = "a917044255331aa25e3b5342759ae37c";
            const d = o;
        },
        436065: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n = {
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
            const r = n;
        },
        501527: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n,
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
                                (n = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_job" }], storageKey: null },
                                { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [n, (r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [n, r, { args: null, kind: "FragmentSpread", name: "JobSearchListItem_company" }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
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
        891717: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n = {
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
            const r = n;
        },
        176811: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n = {
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
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW", path: "legacy.verified" },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "031b1a1f0aff6030b355a6c907547506",
            };
            const r = n;
        },
        643331: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                r,
                t,
                o,
                d,
                i = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "jobId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sentiment" }), (t = { defaultValue: null, kind: "LocalArgument", name: "twclid" }), (o = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "SentimentActionButtonMutation",
                        selections: (d = [
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
                    operation: { argumentDefinitions: [o, n, r, t], kind: "Operation", name: "SentimentActionButtonMutation", selections: d },
                    params: { id: "1smesvHITcf79zPEvtAqOA", metadata: {}, name: "SentimentActionButtonMutation", operationKind: "mutation", text: null },
                };
            i.hash = "0a931e00dd50f5310fb28d29e83f884c";
            const s = i;
        },
        15022: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n,
                r,
                t,
                o,
                d,
                i,
                s,
                c,
                u = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "jobId" }]),
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
                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(d = { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null }], type: "ApiJob", abstractKey: null })], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "SentimentActionsQuery",
                        selections: [
                            { alias: "jobData", args: r, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), d], storageKey: null }, o], storageKey: null },
                            { alias: "viewer", args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [o], type: "User", abstractKey: null }, s], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "qHd1d0swWQGc38vT_2YChQ", metadata: {}, name: "SentimentActionsQuery", operationKind: "query", text: null },
                };
            u.hash = "e5a668a0d2bfaed6901573b493e6449a";
            const m = u;
        },
        229333: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n = l(202784),
                r = l(466999),
                t = l(325686),
                o = l(392237),
                d = l(674132);
            const i = l.n(d)().e5b0063d;
            let s = 0;
            class c extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${s}`), (s += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        l = i({ title: a });
                    return n.createElement(t.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, a), n.createElement(t.Z, { "aria-label": l }, e));
                }
            }
            const u = c;
        },
        414939: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = l(202784),
                r = l(325686),
                t = l(392237);
            class o extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: d.root });
                }
            }
            const d = t.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = o;
        },
        856438: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n = l(202784),
                r = l(868634),
                t = l(731708),
                o = l(392237),
                d = l(674132),
                i = l.n(d),
                s = l(262009);
            const c = i().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => n.createElement(r.ZP, { style: u.label, type: "priority" }, n.createElement(t.ZP, { style: u.featuredLabel }, n.createElement(s.default, { style: u.featuredIcon }), c));
        },
        471957: (e, a, l) => {
            l.d(a, { Z: () => M });
            var n = l(626926),
                r = l(202784),
                t = l(325686),
                o = (l(585488), l(277660)),
                d = l.n(o),
                i = l(392237),
                s = l(725405),
                c = l(535338),
                u = l(164936),
                m = (l(136728), l(107267)),
                b = l(731708),
                p = l(519172),
                y = l(601413),
                h = l(952428),
                S = l(823161),
                D = l(757483),
                g = l(457458),
                f = l(412876),
                k = l(549599);
            const A = ({ fallbackName: e, user: a }) => {
                    const l = d()(k.fR, a);
                    return l && l.legacy && l.legacy.name && l.legacy.screen_name ? r.createElement(b.ZP, { size: "subtext2", style: v.userName }, r.createElement(t.Z, { style: v.name }, r.createElement(b.ZP, { numberOfLines: 1 }, l.legacy.name), r.createElement(p.Z, { isVerified: l.legacy.verified, verifiedType: l.legacy.verified_type ?? void 0 })), r.createElement(y.Z, { screenName: l.legacy.screen_name, size: "subtext2" })) : e ? r.createElement(b.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                v = i.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: D.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                w = ({ companyProfile: e, formattedSalary: a, jobId: l, jobLocation: n, jobTitle: o, onClick: d, renderActions: i, salaryInterval: s, user: c, withBottomBorder: u = !0 }) => {
                    const { jobId: p } = (0, m.useParams)(),
                        y = r.useMemo(() => ({ label: o }), [o]),
                        D = r.useMemo(() => {
                            const e = [v.listContainer];
                            return p === l ? e.push(v.activeItem) : u && e.push(v.inactiveItem), e;
                        }, [p, l, u]);
                    return r.createElement(h.Z, { onClick: d, role: "listitem", style: D }, r.createElement(t.Z, { style: v.itemRow }, c ? r.createElement(f.Y, { size: "xLarge", user: c }) : r.createElement(S.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(t.Z, { style: v.items }, r.createElement(b.ZP, { hoverLabel: y, numberOfLines: 2, size: "subtext1", weight: "bold" }, o), r.createElement(A, { fallbackName: e?.core?.name, user: c }), r.createElement(b.ZP, { color: "gray700", size: "subtext2" }, n), a ? r.createElement(b.ZP, { color: "gray700", size: "subtext2" }, (0, g.M)(a, s)) : null)), i && r.createElement(t.Z, null, i()));
                },
                _ = n.Z,
                I = i.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                M = ({ actions: e, companyProfile: a, job: l, jobId: n, jobIndex: o, onClick: i, relayId: m, user: b, userSentiment: p, withBottomBorder: y = !0 }) => {
                    const h = (0, s.Z)(),
                        { viewer: S } = (0, c.p)(_, {}),
                        D = d()(k.qV, l),
                        g = d()(k.dB, a),
                        f = S?.user_results?.result?.__id,
                        A = r.useCallback(() => {
                            h.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: n, position: o }] } }), i();
                        }, [h, n, o, i]),
                        v = r.useCallback(() => r.createElement(t.Z, { style: I.actions }, r.createElement(u.ZP, { actions: e, jobId: n, relayId: m, userRelayId: f, userSentiment: p })), [e, n, m, f, p]);
                    return D && D.title && D.location ? r.createElement(w, { companyProfile: g, formattedSalary: D.formatted_salary, jobId: n, jobLocation: D.location, jobTitle: D.title, onClick: A, renderActions: v, salaryInterval: D.salary_interval, user: b, withBottomBorder: y }) : null;
                };
        },
        549599: (e, a, l) => {
            l.d(a, { KM: () => S, ZP: () => D, dB: () => y, fR: () => h, qV: () => p });
            l(136728);
            var n = l(501527),
                r = l(176811),
                t = l(436065),
                o = l(891717),
                d = l(202784),
                i = (l(585488), l(277660)),
                s = l.n(i),
                c = l(107267),
                u = l(708852),
                m = l(471957),
                b = l(512549);
            const p = o.Z,
                y = t.Z,
                h = r.Z,
                S = n.Z,
                D = ({ item: e, itemId: a, itemIndex: l }) => {
                    const n = (0, u.Ji)(),
                        r = (0, c.useHistory)(),
                        t = (0, c.useLocation)(),
                        o = s()(S, e),
                        i = o?.core,
                        p = o?.user_results?.result,
                        y = o?.company_profile_results?.result,
                        h = o?.id || "",
                        D = o?.user_sentiment,
                        g = d.useCallback(() => {
                            n ? r.push({ pathname: `/jobs/${a}`, query: t.query }) : r.push({ pathname: `/m/jobs/${a}`, query: t.query });
                        }, [r, n, a, t.query]);
                    return o && i ? d.createElement(m.Z, { actions: [b.h5], companyProfile: y, job: i, jobId: a, jobIndex: l, onClick: g, relayId: h, user: p, userSentiment: D }) : null;
                };
        },
        324948: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n = l(202784),
                r = l(691533);
            const t = (0, l(523561).Z)({
                    loader: () =>
                        Promise.all([
                            l.e("icons.10"),
                            l.e("icons.21"),
                            l.e("icons.16"),
                            l.e("icons.1"),
                            l.e("icons.19"),
                            l.e("icons.0"),
                            l.e("icons.8"),
                            l.e("icons.23"),
                            l.e("icons.2"),
                            l.e("modules.common-e907d115"),
                            l.e("modules.common-e019dbda"),
                            l.e("icons.9"),
                            l.e("icons.7"),
                            l.e("icons.24"),
                            l.e("icons.15"),
                            l.e("icons.3"),
                            l.e("icons.13"),
                            l.e("icons.29"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            l.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee359ff7"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            l.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            l.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            l.e("loader.WideLayout-6107ac1a"),
                            l.e("loader.WideLayout-9f4db315"),
                        ]).then(l.bind(l, 741494)),
                }),
                o = (e) => n.createElement(r.Z, { hideOnError: !0 }, n.createElement(t, e));
        },
        512549: (e, a, l) => {
            l.d(a, { ZP: () => A, h5: () => D, pN: () => g, tv: () => S });
            var n = l(643331),
                r = l(202784),
                t = l(325686),
                o = (l(585488), l(351743)),
                d = l.n(o),
                i = l(530732),
                s = l(731708),
                c = l(392237),
                u = l(106186),
                m = l(258292),
                b = l(616894),
                p = l(443781),
                y = l(292546);
            const h = n.Z,
                S = (e, a, l) => {
                    const { viewerUserId: n } = (0, p.QZ)(),
                        [t] = d()(h),
                        [o] = (0, y.Z)(),
                        i = o.get("twclid") || null,
                        s = r.useCallback(
                            (e, n) => {
                                const r = e.get(a);
                                if ((r && r.setValue(n, "user_sentiment"), l)) {
                                    const a = e.get(l);
                                    a && a.invalidateRecord();
                                }
                            },
                            [a, l],
                        );
                    return r.useCallback(
                        (a) => {
                            n && t({ variables: { jobId: e, userId: n, sentiment: a, twclid: i }, optimisticUpdater: (e) => s(e, a), updater: (e) => s(e, a) });
                        },
                        [t, s, e, i, n],
                    );
                },
                D = "like",
                g = "dislike",
                f = ({ Icon: e, SelectedIcon: a, activeStyle: l, hoverStyle: n, isSelected: o, label: d, onClick: c, sentiment: u }) => {
                    const m = (e) => (e ? n : o ? l : {});
                    return r.createElement(
                        t.Z,
                        null,
                        r.createElement(i.Z, { interactiveStyles: null, onClick: (e) => c(u, e), style: k.sentimentActionContainer }, ({ isHovered: l }) => r.createElement(r.Fragment, null, o ? r.createElement(a, { style: m(l) }) : r.createElement(e, { style: m(l) }), r.createElement(s.ZP, { size: "subtext2", style: { ...m(l) } }, d))),
                    );
                },
                k = c.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                A = ({ jobId: e, relayId: a, type: l, userRelayId: n, userSentiment: t }) => {
                    const o = S(e, a, n),
                        d = r.useCallback(
                            (e, a) => {
                                a.stopPropagation();
                                o(e !== t ? e : "none");
                            },
                            [o, t],
                        );
                    return l === D ? r.createElement(f, { Icon: u.default, SelectedIcon: m.default, activeStyle: k.likeActive, hoverStyle: k.likeHover, isSelected: t === D, label: "Save job", onClick: d, sentiment: D }) : l === g ? r.createElement(f, { Icon: b.default, SelectedIcon: b.default, activeStyle: k.dislikeActive, hoverStyle: k.dislikeHover, isSelected: t === g, label: "Not interested", onClick: d, sentiment: g }) : null;
                };
        },
        965245: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = l(807896),
                r = l(202784),
                t = l(229333),
                o = l(414939),
                d = l(334346);
            const i = ({ accessibilityTitle: e, footer: a = r.createElement(o.Z, null), ...l }) => {
                const i = r.createElement(d.C, (0, n.Z)({}, l, { footer: a }));
                return e ? r.createElement(t.Z, { title: e }, i) : i;
            };
        },
        652904: (e, a, l) => {
            l.d(a, { Z: () => c });
            var n = l(202784),
                r = l(500002),
                t = l(668214),
                o = l(997174),
                d = l(118823);
            const i = (0, t.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class s extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: l, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: t, search: o },
                            locationKey: d,
                        } = e;
                    let i = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (i = !0));
                    const s = r || d;
                    ((s && r !== d) || (!s && l !== t) || n !== o || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: l, updateTweetDetailNav: n } = e;
                    a.scribePageImpression(), l(a.contextualScribeNamespace, a.contextualScribeData), n(a.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, r.ZP)(i(s));
        },
        292546: (e, a, l) => {
            l.d(a, { Z: () => t });
            l(543673), l(240753), l(128399), l(136728);
            var n = l(202784),
                r = l(107267);
            const t = () => {
                const e = (0, r.useLocation)(),
                    a = (0, r.useHistory)(),
                    [l, t] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const o = n.useCallback(
                    (n, r) => {
                        const t = new URLSearchParams(l);
                        t.set(n, r), a.push(`${e.pathname}?${t.toString()}`);
                    },
                    [a, e.pathname, l],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        985124: (e, a, l) => {
            l.d(a, { $J: () => d, WA: () => E, ZC: () => v, cj: () => N, eo: () => n.eo, hb: () => J, kW: () => i, pg: () => w, rP: () => o, u4: () => O, xk: () => K });
            var n = l(89217),
                r = l(674132),
                t = l.n(r);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                d = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(n.eo).map(([e, a]) => ({ label: String(a), value: e })),
                s = t().d2b8da2c,
                c = t().cd958040,
                u = t().c5760ca2,
                m = t().d31b4a2a,
                b = t().df1b7550,
                p = t().f38959a6,
                y = t().bc78a26c,
                h = t().ec28738e,
                S = t().icb06308,
                D = t().d0b978ec,
                g = t().af19cdc2,
                f = t().e4a51fca,
                k = t().e8ca78ae,
                A = t().c365dcc6,
                v = Object.freeze({ software_engineering: s, data_analytics: c, product: u, design: m, marketing: b, sales_am: p, operations: y, people_hr: h, finance_accounting: S, legal_compliance: D, science_engineering: g, medical: f, construction_trades: k, other: A }),
                w = Object.entries(v).map(([e, a]) => ({ label: String(a), value: e })),
                _ = t().e25d75e4,
                I = t().e89b3f04,
                M = t().h55825dc,
                P = t().cc537386,
                F = t().jfc3cece,
                Z = t().e1b683aa,
                C = t().c4627fda,
                L = t().db75b47c,
                E = Object.freeze({ intern: _, entry_level: I, junior: M, mid_level: P, senior: F, lead: Z, manager: C, executive: L }),
                K = Object.entries(E).map(([e, a]) => ({ label: String(a), value: e })),
                j = t().i312f0ce,
                B = t().b4aff05e,
                x = t().c08b9138,
                R = t().ia5d6422,
                T = t().h97c7f42,
                U = t().ibed2d04,
                N = Object.freeze({ onsite: { label: j, description: R, value: "onsite" }, remote: { label: x, description: U, value: "remote" }, hybrid: { label: B, description: T, value: "hybrid" } }),
                O = Object.keys(N).map((e) => ({ label: N[e].label, value: e, description: N[e].description })),
                J = Object.keys(n.Qw).map((e) => ({ ...n.Qw[e], value: String(n.Qw[e].value) }));
        },
        943052: (e, a, l) => {
            l.d(a, { Z: () => t });
            l(543673), l(240753), l(128399), l(136728);
            var n = l(202784),
                r = l(107267);
            const t = () => {
                const e = (0, r.useLocation)(),
                    a = (0, r.useHistory)(),
                    [l, t] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const o = n.useCallback(
                        (n, r) => {
                            const t = new URLSearchParams(l);
                            t.set(n, r), a.push(`${e.pathname}?${t.toString()}`);
                        },
                        [a, e.pathname, l],
                    ),
                    d = n.useCallback(
                        (n) => {
                            const r = new URLSearchParams(l);
                            for (const e in n) n[e] ? r.set(e, n[e]) : r.delete(e);
                            a.push(`${e.pathname}?${r.toString()}`);
                        },
                        [a, e.pathname, l],
                    );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), o, d];
            };
        },
        127218: (e, a, l) => {
            l.d(a, { C: () => S });
            var n = l(202784),
                r = l(614983),
                t = l.n(r),
                o = l(437429),
                d = l.n(o),
                i = l(57074),
                s = l.n(i),
                c = l(10622),
                u = l.n(c),
                m = l(585488),
                b = l(71620),
                p = l(163889),
                y = l(312771),
                h = l(535338);
            function S(e, a, l) {
                const [r, o] = n.useState(!1),
                    [i, c] = n.useState(null),
                    S = d()(),
                    D = s()(a),
                    g = (0, b.po)(),
                    f = (0, h.p)(e, D, l);
                return n.useMemo(() => {
                    const a = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    t()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: l, previous_cursor: n } =
                            (function (e, a) {
                                try {
                                    t()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let l = e;
                                    for (const e of a) t()(!!l, "The provided path is invalid."), t()("string" == typeof e, "Unexpected value for path!"), (l = l?.[e]);
                                    return l;
                                } catch (e) {
                                    return void (0, p.ZP)(e.message);
                                }
                            })(f, a) || {},
                        d = (a) => {
                            r ||
                                (o(!0),
                                u()(S, e, { ...D, cursor: a }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), g(e);
                                    },
                                }));
                        },
                        s = () => {
                            l && d(l);
                        },
                        b = () => {
                            n && d(n);
                        },
                        h = () => {
                            d(void 0);
                        };
                    return i ? { subsequentFetchStatus: y.ZP.FAILED, error: i, fetchNext: s, fetchPrevious: b, refetch: h, data: f, hasNext: Boolean(l), hasPrevious: Boolean(n) } : { subsequentFetchStatus: r ? y.ZP.LOADING : y.ZP.NONE, error: void 0, fetchNext: s, fetchPrevious: b, refetch: h, data: f, hasNext: Boolean(l), hasPrevious: Boolean(n) };
                }, [e, f, r, i, S, D, g]);
            }
        },
        164936: (e, a, l) => {
            l.d(a, { ZP: () => u, r1: () => s });
            var n = l(15022),
                r = l(202784),
                t = (l(585488), l(512549)),
                o = l(952793),
                d = l(535338);
            const i = n.Z,
                s = ({ actions: e, jobId: a }) => {
                    const { jobData: l, viewer: n } = (0, d.p)(i, { jobId: a }),
                        t = l?.result?.id ?? "",
                        o = l?.result?.user_sentiment;
                    return r.createElement(c, { actions: e, jobId: a, relayId: t, userRelayId: n?.user_results?.result?.__id, userSentiment: o });
                },
                c = ({ actions: e, jobId: a, relayId: l, userRelayId: n, userSentiment: d }) => {
                    const i = (0, o.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && i ? r.createElement(r.Fragment, null, e.includes(t.pN) && r.createElement(t.ZP, { jobId: a, relayId: l, type: t.pN, userRelayId: n, userSentiment: d }), e.includes(t.h5) && r.createElement(t.ZP, { jobId: a, relayId: l, type: t.h5, userRelayId: n, userSentiment: d })) : null;
                },
                u = c;
        },
        28135: (e, a, l) => {
            l.d(a, { Z: () => P });
            l(136728);
            var n = l(202784),
                r = l(576648),
                t = l(107267),
                o = l(811176),
                d = l(40644),
                i = l(674132),
                s = l.n(i),
                c = l(630715),
                u = l(717160),
                m = l(885724),
                b = l(106186),
                p = l(786272),
                y = l(443781),
                h = l(952793),
                S = l(782642);
            const D = (e) => `/i/jobs/${e}`;
            var g = l(701796);
            const f = s().f508c49c,
                k = s().f88553c8,
                A = s().d6825dce,
                v = s().b9613442,
                w = s().c2b3f0da,
                _ = s().c791d3fc,
                I = { label: s().ifea3114, withDelay: !0 },
                M = ({ iconSize: e = "normal", jobId: a, jobUserId: l }) => {
                    const i = (0, S.p)(),
                        s = (0, t.useHistory)(),
                        { userClaims: M, viewerUserId: P } = (0, y.QZ)(),
                        F = (0, h.hC)("recruiting_jobs_list_share_enabled"),
                        Z = (0, h.hC)("recruiting_pin_job_enabled") && (M.isTrueAndEnabled("subscriptions_feature_premium_jobs") || M.isVerifiedOrg()) && P !== l,
                        C = n.useCallback(() => {
                            s.push({ query: { text: (0, g.w)(D(a)) }, pathname: "/messages/compose" });
                        }, [s, a]),
                        L = n.useCallback(() => {
                            r.Z.setString((0, g.w)(D(a))), i({ text: k });
                        }, [i, a]),
                        E = n.useCallback(() => {
                            s.push({ query: { text: (0, g.w)(D(a)) }, pathname: "/compose/post" });
                        }, [s, a]),
                        K = n.useCallback(() => {
                            s.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: s.location.pathname } });
                        }, [s, a]),
                        j = n.useCallback(() => {
                            const e = [];
                            return r.Z.isAvailable() && e.push({ text: f, onClick: L, Icon: c.default }), P && (e.push(((e) => ({ text: A, onClick: e, Icon: u.default }))(C)), e.push(((e) => ({ text: v, onClick: e, Icon: m.default }))(E))), Z && e.push(((e) => ({ text: w, onClick: e, Icon: b.default }))(K)), e;
                        }, [L, C, K, E, Z, P]),
                        B = n.useCallback(
                            (e) => {
                                const a = j();
                                return a.length ? n.createElement(o.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [j],
                        ),
                        x = n.useCallback(() => {}, []);
                    return F ? n.createElement(d.ZP, { Icon: p.default, "aria-label": _, color: "text", hoverLabel: I, iconSize: e, onPress: x, renderMenu: B, testID: "job-share-action-btn" }) : null;
                },
                P = n.memo(M);
        },
        89217: (e, a, l) => {
            l.d(a, { Ju: () => m, Qw: () => b, eo: () => s });
            var n = l(674132),
                r = l.n(n);
            const t = r().c69eb656,
                o = r().g46ae43c,
                d = r().jf7d4cc6,
                i = r().b2214572,
                s = Object.freeze({ full_time: t, full_time_contract: o, part_time: d, contract_to_hire: i }),
                c = r().f8337bd6,
                u = r().i935bf88,
                m = Object.freeze({ 1: c, 2: u }),
                b = Object.freeze({ annually: { label: c, value: 1 }, hourly: { label: u, value: 2 } });
        },
        457458: (e, a, l) => {
            l.d(a, { G: () => s, M: () => i });
            l(571372);
            var n = l(301503),
                r = l(674132),
                t = l.n(r),
                o = l(89217);
            const d = t().b75b8ffd,
                i = (e, a = 1) => {
                    const l = a ?? 1;
                    return o.Ju[l.toString()] ? d({ salary: e, interval: o.Ju[l.toString()] }) : e;
                },
                s = (e) => {
                    if (e)
                        try {
                            const a = JSON.parse(e);
                            if (!a.entityMap || !a.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, n.convertFromRaw)(a).hasText()) return;
                            return a;
                        } catch (e) {}
                };
        },
        524496: (e, a, l) => {
            l.d(a, { Z: () => f });
            l(136728);
            var n = l(202784),
                r = l(301503),
                t = l(325686),
                o = l(595088),
                d = l(516951),
                i = l(731708),
                s = l(779802),
                c = l(537392),
                u = l(989272),
                m = l(925873),
                b = l(202253),
                p = l(786475),
                y = l(392237),
                h = l(135904);
            const S = { [s.P7.atomic]: { element: "section" }, [s.P7.header1]: { element: "h1", wrapper: n.createElement(i.ZP, null) }, [s.P7.header2]: { element: "h2", wrapper: n.createElement(i.ZP, null) } },
                D = (0, o.Z)(S).reduce((e, [a, l]) => e.set(a, l), r.DefaultDraftBlockRenderMap);
            let g = !1;
            const f = n.memo(function (e) {
                    const { componentByType: a, contentState: l, onScribeEvent: o, paragraphFontSizeOverride: i } = e;
                    n.useEffect(() => {
                        g || (u.fH(h.c, h.n), (g = !0));
                    }, []);
                    const y = [(0, b.ez)(o, i), b.aF, b.RU];
                    e.disable_entityLinkDecorator || y.push((0, b.NA)(o, i));
                    const S = m.Z.initEditorState(l, { decorators: y });
                    let f = d.Z;
                    return (
                        a &&
                            (f = (e) => {
                                const l = e.getType();
                                return a[l] || null;
                            }),
                        n.createElement(c.ZP, null, ({ containerWidth: e }) => n.createElement(t.Z, { style: k.fontFamily }, n.createElement(r.Editor, { blockRenderMap: D, blockRendererFn: f, blockStyleFn: (0, s.su)(p.Z.isNarrowScreenWidth(e)), editorState: S, onChange: d.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                k = y.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        183806: (e, a, l) => {
            l.d(a, { Z: () => n });
            const n = l(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.4ac4a70a.js.map
