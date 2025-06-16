"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs", "icons/IconNumberedList-js", "icons/IconStar-js", "icons/IconStarStroke-js"],
    {
        626926: (e, n, t) => {
            t.d(n, { Z: () => i });
            var a,
                l,
                r,
                o = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: (a = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }, l], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "RxOP--hDqELH_fWn5VylUA", metadata: {}, name: "JobListItemContentUserQuery", operationKind: "query", text: null } };
            o.hash = "a917044255331aa25e3b5342759ae37c";
            const i = o;
        },
        436065: (e, n, t) => {
            t.d(n, { Z: () => l });
            var a = {
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
            const l = a;
        },
        501527: (e, n, t) => {
            t.d(n, { Z: () => o });
            var a,
                l,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "JobSearchListItem_item",
                    selections: [
                        {
                            kind: "InlineFragment",
                            selections: [
                                (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_job" }], storageKey: null },
                                { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [a, (l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [a, l, { args: null, kind: "FragmentSpread", name: "JobSearchListItem_company" }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
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
        891717: (e, n, t) => {
            t.d(n, { Z: () => l });
            var a = {
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
            const l = a;
        },
        176811: (e, n, t) => {
            t.d(n, { Z: () => l });
            var a = {
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
            const l = a;
        },
        643331: (e, n, t) => {
            t.d(n, { Z: () => d });
            var a,
                l,
                r,
                o,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "jobId" }), (l = { defaultValue: null, kind: "LocalArgument", name: "sentiment" }), (r = { defaultValue: null, kind: "LocalArgument", name: "twclid" }), (o = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [o, a, l, r], kind: "Operation", name: "SentimentActionButtonMutation", selections: i },
                    params: { id: "1smesvHITcf79zPEvtAqOA", metadata: {}, name: "SentimentActionButtonMutation", operationKind: "mutation", text: null },
                };
            s.hash = "0a931e00dd50f5310fb28d29e83f884c";
            const d = s;
        },
        15022: (e, n, t) => {
            t.d(n, { Z: () => m });
            var a,
                l,
                r,
                o,
                i,
                s,
                d,
                c,
                u = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "jobId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "SentimentActionsQuery",
                        selections: [
                            {
                                alias: "jobData",
                                args: (l = [
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
                            { alias: "viewer", args: (s = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(d = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "SentimentActionsQuery",
                        selections: [
                            { alias: "jobData", args: l, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), i], storageKey: null }, o], storageKey: null },
                            { alias: "viewer", args: s, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [o], type: "User", abstractKey: null }, d], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "qHd1d0swWQGc38vT_2YChQ", metadata: {}, name: "SentimentActionsQuery", operationKind: "query", text: null },
                };
            u.hash = "e5a668a0d2bfaed6901573b493e6449a";
            const m = u;
        },
        229333: (e, n, t) => {
            t.d(n, { Z: () => u });
            var a = t(202784),
                l = t(466999),
                r = t(325686),
                o = t(392237),
                i = t(111677);
            const s = t.n(i)().e5b0063d;
            let d = 0;
            class c extends a.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: n } = this.props,
                        t = s({ title: n });
                    return a.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, a.createElement(l.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, n), a.createElement(r.Z, { "aria-label": t }, e));
                }
            }
            const u = c;
        },
        949626: (e, n, t) => {
            t.d(n, { Z: () => l });
            t(202784);
            var a = t(950822);
            const l = (e) => (0, a.Z)("div", e);
        },
        414939: (e, n, t) => {
            t.d(n, { Z: () => s });
            var a = t(202784),
                l = t(325686),
                r = t(392237);
            class o extends a.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return a.createElement(l.Z, { style: i.root });
                }
            }
            const i = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = o;
        },
        856438: (e, n, t) => {
            t.d(n, { Z: () => m });
            var a = t(202784),
                l = t(868634),
                r = t(731708),
                o = t(392237),
                i = t(111677),
                s = t.n(i),
                d = t(262009);
            const c = s().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => a.createElement(l.ZP, { style: u.label, type: "priority" }, a.createElement(r.ZP, { style: u.featuredLabel }, a.createElement(d.default, { style: u.featuredIcon }), c));
        },
        471957: (e, n, t) => {
            t.d(n, { Z: () => P });
            var a = t(626926),
                l = t(202784),
                r = t(325686),
                o = (t(585488), t(277660)),
                i = t.n(o),
                s = t(392237),
                d = t(725405),
                c = t(535338),
                u = t(164936),
                m = (t(136728), t(107267)),
                f = t(731708),
                h = t(519172),
                p = t(601413),
                b = t(952428),
                g = t(823161),
                y = t(757483),
                k = t(457458),
                D = t(412876),
                w = t(549599);
            const v = ({ fallbackName: e, user: n }) => {
                    const t = i()(w.fR, n);
                    return t && t.core && t.core.name && t.core.screen_name ? l.createElement(f.ZP, { size: "subtext2", style: S.userName }, l.createElement(r.Z, { style: S.name }, l.createElement(f.ZP, { numberOfLines: 1 }, t.core.name), l.createElement(h.Z, { isVerified: t.verification?.verified ?? !1, verifiedType: t.verification?.verified_type ?? void 0 })), l.createElement(p.Z, { screenName: t.core.screen_name, size: "subtext2" })) : e ? l.createElement(f.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                S = s.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: y.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                I = ({ companyProfile: e, formattedSalary: n, jobId: t, jobLocation: a, jobTitle: o, onClick: i, renderActions: s, salaryInterval: d, user: c, withBottomBorder: u = !0 }) => {
                    const { jobId: h } = (0, m.useParams)(),
                        p = l.useMemo(() => ({ label: o }), [o]),
                        y = l.useMemo(() => {
                            const e = [S.listContainer];
                            return h === t ? e.push(S.activeItem) : u && e.push(S.inactiveItem), e;
                        }, [h, t, u]);
                    return l.createElement(b.Z, { onClick: i, role: "listitem", style: y }, l.createElement(r.Z, { style: S.itemRow }, c ? l.createElement(D.Y, { size: "xLarge", user: c }) : l.createElement(g.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), l.createElement(r.Z, { style: S.items }, l.createElement(f.ZP, { hoverLabel: p, numberOfLines: 2, size: "subtext1", weight: "bold" }, o), l.createElement(v, { fallbackName: e?.core?.name, user: c }), l.createElement(f.ZP, { color: "gray700", size: "subtext2" }, a), n ? l.createElement(f.ZP, { color: "gray700", size: "subtext2" }, (0, k.M)(n, d)) : null)), s && l.createElement(r.Z, null, s()));
                },
                $ = a.Z,
                _ = s.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                P = ({ actions: e, companyProfile: n, job: t, jobId: a, jobIndex: o, onClick: s, relayId: m, user: f, userSentiment: h, withBottomBorder: p = !0 }) => {
                    const b = (0, d.Z)(),
                        { viewer: g } = (0, c.p)($, {}),
                        y = i()(w.qV, t),
                        k = i()(w.dB, n),
                        D = g?.user_results?.result?.__id,
                        v = l.useCallback(() => {
                            b.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: a, position: o }] } }), s();
                        }, [b, a, o, s]),
                        S = l.useCallback(() => l.createElement(r.Z, { style: _.actions }, l.createElement(u.ZP, { actions: e, jobId: a, relayId: m, userRelayId: D, userSentiment: h })), [e, a, m, D, h]);
                    return y && y.title && y.location ? l.createElement(I, { companyProfile: k, formattedSalary: y.formatted_salary, jobId: a, jobLocation: y.location, jobTitle: y.title, onClick: v, renderActions: S, salaryInterval: y.salary_interval, user: f, withBottomBorder: p }) : null;
                };
        },
        549599: (e, n, t) => {
            t.d(n, { KM: () => g, ZP: () => y, dB: () => p, fR: () => b, qV: () => h });
            t(136728);
            var a = t(501527),
                l = t(176811),
                r = t(436065),
                o = t(891717),
                i = t(202784),
                s = (t(585488), t(277660)),
                d = t.n(s),
                c = t(107267),
                u = t(708852),
                m = t(471957),
                f = t(512549);
            const h = o.Z,
                p = r.Z,
                b = l.Z,
                g = a.Z,
                y = ({ item: e, itemId: n, itemIndex: t }) => {
                    const a = (0, u.Ji)(),
                        l = (0, c.useHistory)(),
                        r = (0, c.useLocation)(),
                        o = d()(g, e),
                        s = o?.core,
                        h = o?.user_results?.result,
                        p = o?.company_profile_results?.result,
                        b = o?.id || "",
                        y = o?.user_sentiment,
                        k = i.useCallback(() => {
                            a ? l.push({ pathname: `/jobs/${n}`, query: r.query }) : l.push({ pathname: `/m/jobs/${n}`, query: r.query });
                        }, [l, a, n, r.query]);
                    return o && s ? i.createElement(m.Z, { actions: [f.h5], companyProfile: p, job: s, jobId: n, jobIndex: t, onClick: k, relayId: b, user: h, userSentiment: y }) : null;
                };
        },
        324948: (e, n, t) => {
            t.d(n, { Z: () => o });
            var a = t(202784),
                l = t(691533);
            const r = (0, t(523561).Z)({
                    loader: () =>
                        Promise.all([
                            t.e("icons.21"),
                            t.e("icons.16"),
                            t.e("icons.10"),
                            t.e("icons.1"),
                            t.e("icons.19"),
                            t.e("icons.0"),
                            t.e("icons.23"),
                            t.e("icons.8"),
                            t.e("icons.2"),
                            t.e("icons.3"),
                            t.e("icons.15"),
                            t.e("modules.common-e907d115"),
                            t.e("modules.common-e019dbda"),
                            t.e("icons.7"),
                            t.e("icons.9"),
                            t.e("icons.24"),
                            t.e("icons.13"),
                            t.e("icons.29"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            t.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            t.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            t.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            t.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            t.e("loader.WideLayout-6107ac1a"),
                            t.e("loader.WideLayout-9f4db315"),
                        ]).then(t.bind(t, 741494)),
                }),
                o = (e) => a.createElement(l.Z, { hideOnError: !0 }, a.createElement(r, e));
        },
        512549: (e, n, t) => {
            t.d(n, { ZP: () => v, h5: () => y, pN: () => k, tv: () => g });
            var a = t(643331),
                l = t(202784),
                r = t(325686),
                o = (t(585488), t(351743)),
                i = t.n(o),
                s = t(530732),
                d = t(731708),
                c = t(392237),
                u = t(106186),
                m = t(258292),
                f = t(616894),
                h = t(443781),
                p = t(292546);
            const b = a.Z,
                g = (e, n, t) => {
                    const { viewerUserId: a } = (0, h.QZ)(),
                        [r] = i()(b),
                        [o] = (0, p.Z)(),
                        s = o.get("twclid") || null,
                        d = l.useCallback(
                            (e, a) => {
                                const l = e.get(n);
                                if ((l && l.setValue(a, "user_sentiment"), t)) {
                                    const n = e.get(t);
                                    n && n.invalidateRecord();
                                }
                            },
                            [n, t],
                        );
                    return l.useCallback(
                        (n) => {
                            a && r({ variables: { jobId: e, userId: a, sentiment: n, twclid: s }, optimisticUpdater: (e) => d(e, n), updater: (e) => d(e, n) });
                        },
                        [r, d, e, s, a],
                    );
                },
                y = "like",
                k = "dislike",
                D = ({ Icon: e, SelectedIcon: n, activeStyle: t, hoverStyle: a, isSelected: o, label: i, onClick: c, sentiment: u }) => {
                    const m = (e) => (e ? a : o ? t : {});
                    return l.createElement(
                        r.Z,
                        null,
                        l.createElement(s.Z, { interactiveStyles: null, onClick: (e) => c(u, e), style: w.sentimentActionContainer }, ({ isHovered: t }) => l.createElement(l.Fragment, null, o ? l.createElement(n, { style: m(t) }) : l.createElement(e, { style: m(t) }), l.createElement(d.ZP, { size: "subtext2", style: { ...m(t) } }, i))),
                    );
                },
                w = c.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                v = ({ jobId: e, relayId: n, type: t, userRelayId: a, userSentiment: r }) => {
                    const o = g(e, n, a),
                        i = l.useCallback(
                            (e, n) => {
                                n.stopPropagation();
                                o(e !== r ? e : "none");
                            },
                            [o, r],
                        );
                    return t === y ? l.createElement(D, { Icon: u.default, SelectedIcon: m.default, activeStyle: w.likeActive, hoverStyle: w.likeHover, isSelected: r === y, label: "Save job", onClick: i, sentiment: y }) : t === k ? l.createElement(D, { Icon: f.default, SelectedIcon: f.default, activeStyle: w.dislikeActive, hoverStyle: w.dislikeHover, isSelected: r === k, label: "Not interested", onClick: i, sentiment: k }) : null;
                };
        },
        965245: (e, n, t) => {
            t.d(n, { Z: () => s });
            var a = t(807896),
                l = t(202784),
                r = t(229333),
                o = t(414939),
                i = t(334346);
            const s = ({ accessibilityTitle: e, footer: n = l.createElement(o.Z, null), ...t }) => {
                const s = l.createElement(i.C, (0, a.Z)({}, t, { footer: n }));
                return e ? l.createElement(r.Z, { title: e }, s) : s;
            };
        },
        334346: (e, n, t) => {
            t.d(n, { C: () => s, Z: () => i });
            var a = t(807896),
                l = t(202784),
                r = t(524084),
                o = t(768572);
            const i = "stable_sort_index",
                s = l.forwardRef((e, n) => {
                    const t = e.cacheKey;
                    return l.createElement(o.ZP, { identifier: t }, l.createElement(r.Z, (0, a.Z)({ ref: n }, e)));
                });
        },
        252021: (e, n, t) => {
            t.d(n, { Z: () => o });
            var a = t(202784),
                l = t(107267),
                r = t(115553);
            const o = (e) => {
                (0, l.useHistory)();
                return a.createElement(r.A, e);
            };
        },
        652904: (e, n, t) => {
            t.d(n, { Z: () => c });
            var a = t(202784),
                l = t(500002),
                r = t(668214),
                o = t(997174),
                i = t(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: n },
                            location: { pathname: t, search: a },
                            locationKey: l,
                        } = this.props,
                        {
                            location: { pathname: r, search: o },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    n.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && n.pathname === t && ((this._isInBackground = !1), (s = !0));
                    const d = l || i;
                    ((d && l !== i) || (!d && t !== r) || a !== o || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: n, updateLocation: t, updateTweetDetailNav: a } = e;
                    n.scribePageImpression(), t(n.contextualScribeNamespace, n.contextualScribeData), a(n.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, l.ZP)(s(d));
        },
        292546: (e, n, t) => {
            t.d(n, { Z: () => r });
            t(543673), t(240753), t(128399), t(136728);
            var a = t(202784),
                l = t(107267);
            const r = () => {
                const e = (0, l.useLocation)(),
                    n = (0, l.useHistory)(),
                    [t, r] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const o = a.useCallback(
                    (a, l) => {
                        const r = new URLSearchParams(t);
                        r.set(a, l), n.push(`${e.pathname}?${r.toString()}`);
                    },
                    [n, e.pathname, t],
                );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        524084: (e, n, t) => {
            t.d(n, { Z: () => o });
            var a = t(202784),
                l = t(523561),
                r = t(195560);
            const o = (0, l.Z)({ loader: () => t.e("loader.AbsolutePower").then(t.bind(t, 590136)), renderPlaceholder: (e, n) => a.createElement(r.Z, { hasError: e, onRetry: n }) });
        },
        478414: (e, n, t) => {
            t.d(n, { Hx: () => s, K: () => r, bb: () => i, gv: () => o, kg: () => d, yW: () => c });
            var a = t(779802),
                l = t(392237);
            const r = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                o = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                i = ({ h1FontSize: e, h2FontSize: n, paragraphFontSize: t }) => [
                    { blockType: a.P7.header1, label: a.et, component: (0, a.LI)({ size: e, children: a.et, extendedWidth: !0 }) },
                    { blockType: a.P7.header2, label: a.PW, component: (0, a.LI)({ size: n, weight: "bold", children: a.PW }) },
                    { blockType: a.P7.paragraph, label: a.$u, component: (0, a.LI)({ size: t, children: a.$u }) },
                ],
                s = "extended-profile",
                d = "extended-profile-mobile-webview",
                c = (e, { h1FontSize: n, h2FontSize: t, paragraphFontSize: a }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${l.default.theme.fontFamilies.chirpExtended};\n        font-size: ${l.default.theme.fontSizes[n]};\n        line-height: ${l.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${l.default.theme.fontFamilies.chirpExtended};\n        font-size: ${l.default.theme.fontSizes[n]};\n        line-height: ${l.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${l.default.theme.fontSizes[t]};\n        font-weight: ${l.default.theme.fontWeights.bold};\n        line-height: ${l.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${l.default.theme.fontSizes[t]} + 1px);\n        font-weight: ${l.default.theme.fontWeights.bold};\n        line-height: ${l.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${l.default.theme.fontSizes[a]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${l.default.theme.fontSizes[a]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${l.default.theme.fontSizes[a]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space2};\n        margin-left: calc(${l.default.theme.spaces.space20} + ${l.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${l.default.theme.fontSizes[a]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space2};\n        margin-left: ${l.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${l.default.theme.spaces.space2});\n        padding-left: calc(${l.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${l.default.theme.colors.gray900};\n        border-radius: ${l.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${l.default.theme.spaces.space20} + ${l.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes[a]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes[a]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        985124: (e, n, t) => {
            t.d(n, { $J: () => i, WA: () => z, ZC: () => S, cj: () => H, eo: () => a.eo, hb: () => U, kW: () => s, pg: () => I, rP: () => o, u4: () => q, xk: () => C });
            var a = t(89217),
                l = t(111677),
                r = t.n(l);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                i = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                s = Object.entries(a.eo).map(([e, n]) => ({ label: String(n), value: e })),
                d = r().d2b8da2c,
                c = r().cd958040,
                u = r().c5760ca2,
                m = r().d31b4a2a,
                f = r().df1b7550,
                h = r().f38959a6,
                p = r().bc78a26c,
                b = r().ec28738e,
                g = r().icb06308,
                y = r().d0b978ec,
                k = r().af19cdc2,
                D = r().e4a51fca,
                w = r().e8ca78ae,
                v = r().c365dcc6,
                S = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: m, marketing: f, sales_am: h, operations: p, people_hr: b, finance_accounting: g, legal_compliance: y, science_engineering: k, medical: D, construction_trades: w, other: v }),
                I = Object.entries(S).map(([e, n]) => ({ label: String(n), value: e })),
                $ = r().e25d75e4,
                _ = r().e89b3f04,
                P = r().h55825dc,
                E = r().cc537386,
                M = r().jfc3cece,
                x = r().e1b683aa,
                F = r().c4627fda,
                Z = r().db75b47c,
                z = Object.freeze({ intern: $, entry_level: _, junior: P, mid_level: E, senior: M, lead: x, manager: F, executive: Z }),
                C = Object.entries(z).map(([e, n]) => ({ label: String(n), value: e })),
                L = r().i312f0ce,
                A = r().b4aff05e,
                K = r().c08b9138,
                j = r().ia5d6422,
                T = r().h97c7f42,
                R = r().ibed2d04,
                H = Object.freeze({ onsite: { label: L, description: j, value: "onsite" }, remote: { label: K, description: R, value: "remote" }, hybrid: { label: A, description: T, value: "hybrid" } }),
                q = Object.keys(H).map((e) => ({ label: H[e].label, value: e, description: H[e].description })),
                U = Object.keys(a.Qw).map((e) => ({ ...a.Qw[e], value: String(a.Qw[e].value) }));
        },
        943052: (e, n, t) => {
            t.d(n, { Z: () => r });
            t(543673), t(240753), t(128399), t(136728);
            var a = t(202784),
                l = t(107267);
            const r = () => {
                const e = (0, l.useLocation)(),
                    n = (0, l.useHistory)(),
                    [t, r] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const o = a.useCallback(
                        (a, l) => {
                            const r = new URLSearchParams(t);
                            r.set(a, l), n.push(`${e.pathname}?${r.toString()}`);
                        },
                        [n, e.pathname, t],
                    ),
                    i = a.useCallback(
                        (a) => {
                            const l = new URLSearchParams(t);
                            for (const e in a) a[e] ? l.set(e, a[e]) : l.delete(e);
                            n.push(`${e.pathname}?${l.toString()}`);
                        },
                        [n, e.pathname, t],
                    );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), o, i];
            };
        },
        127218: (e, n, t) => {
            t.d(n, { C: () => g });
            var a = t(202784),
                l = t(614983),
                r = t.n(l),
                o = t(437429),
                i = t.n(o),
                s = t(57074),
                d = t.n(s),
                c = t(10622),
                u = t.n(c),
                m = t(585488),
                f = t(71620),
                h = t(163889),
                p = t(312771),
                b = t(535338);
            function g(e, n, t) {
                const [l, o] = a.useState(!1),
                    [s, c] = a.useState(null),
                    g = i()(),
                    y = d()(n),
                    k = (0, f.po)(),
                    D = (0, b.p)(e, y, t);
                return a.useMemo(() => {
                    const n = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    r()(!!n, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: t, previous_cursor: a } =
                            (function (e, n) {
                                try {
                                    r()("slice_info" === n[n.length - 1], "Invalid sliceInfoPath!");
                                    let t = e;
                                    for (const e of n) r()(!!t, "The provided path is invalid."), r()("string" == typeof e, "Unexpected value for path!"), (t = t?.[e]);
                                    return t;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(D, n) || {},
                        i = (n) => {
                            l ||
                                (o(!0),
                                u()(g, e, { ...y, cursor: n }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), k(e);
                                    },
                                }));
                        },
                        d = () => {
                            t && i(t);
                        },
                        f = () => {
                            a && i(a);
                        },
                        b = () => {
                            i(void 0);
                        };
                    return s ? { subsequentFetchStatus: p.ZP.FAILED, error: s, fetchNext: d, fetchPrevious: f, refetch: b, data: D, hasNext: Boolean(t), hasPrevious: Boolean(a) } : { subsequentFetchStatus: l ? p.ZP.LOADING : p.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: f, refetch: b, data: D, hasNext: Boolean(t), hasPrevious: Boolean(a) };
                }, [e, D, l, s, g, y, k]);
            }
        },
        164936: (e, n, t) => {
            t.d(n, { ZP: () => u, r1: () => d });
            var a = t(15022),
                l = t(202784),
                r = (t(585488), t(512549)),
                o = t(952793),
                i = t(535338);
            const s = a.Z,
                d = ({ actions: e, jobId: n }) => {
                    const { jobData: t, viewer: a } = (0, i.p)(s, { jobId: n }),
                        r = t?.result?.id ?? "",
                        o = t?.result?.user_sentiment;
                    return l.createElement(c, { actions: e, jobId: n, relayId: r, userRelayId: a?.user_results?.result?.__id, userSentiment: o });
                },
                c = ({ actions: e, jobId: n, relayId: t, userRelayId: a, userSentiment: i }) => {
                    const s = (0, o.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && s ? l.createElement(l.Fragment, null, e.includes(r.pN) && l.createElement(r.ZP, { jobId: n, relayId: t, type: r.pN, userRelayId: a, userSentiment: i }), e.includes(r.h5) && l.createElement(r.ZP, { jobId: n, relayId: t, type: r.h5, userRelayId: a, userSentiment: i })) : null;
                },
                u = c;
        },
        28135: (e, n, t) => {
            t.d(n, { Z: () => E });
            t(136728);
            var a = t(202784),
                l = t(576648),
                r = t(107267),
                o = t(811176),
                i = t(40644),
                s = t(111677),
                d = t.n(s),
                c = t(630715),
                u = t(717160),
                m = t(885724),
                f = t(106186),
                h = t(786272),
                p = t(443781),
                b = t(952793),
                g = t(782642);
            const y = (e) => `/i/jobs/${e}`;
            var k = t(701796);
            const D = d().f508c49c,
                w = d().f88553c8,
                v = d().d6825dce,
                S = d().b9613442,
                I = d().c2b3f0da,
                $ = d().c791d3fc,
                _ = { label: d().ifea3114, withDelay: !0 },
                P = ({ iconSize: e = "normal", jobId: n, jobUserId: t }) => {
                    const s = (0, g.p)(),
                        d = (0, r.useHistory)(),
                        { userClaims: P, viewerUserId: E } = (0, p.QZ)(),
                        M = (0, b.hC)("recruiting_jobs_list_share_enabled"),
                        x = (0, b.hC)("recruiting_pin_job_enabled") && (P.isTrueAndEnabled("subscriptions_feature_premium_jobs") || P.isVerifiedOrg()) && E !== t,
                        F = a.useCallback(() => {
                            d.push({ query: { text: (0, k.w)(y(n)) }, pathname: "/messages/compose" });
                        }, [d, n]),
                        Z = a.useCallback(() => {
                            l.Z.setString((0, k.w)(y(n))), s({ text: w });
                        }, [s, n]),
                        z = a.useCallback(() => {
                            d.push({ query: { text: (0, k.w)(y(n)) }, pathname: "/compose/post" });
                        }, [d, n]),
                        C = a.useCallback(() => {
                            d.push({ query: { jid: n }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, n]),
                        L = a.useCallback(() => {
                            const e = [];
                            return l.Z.isAvailable() && e.push({ text: D, onClick: Z, Icon: c.default }), E && (e.push(((e) => ({ text: v, onClick: e, Icon: u.default }))(F)), e.push(((e) => ({ text: S, onClick: e, Icon: m.default }))(z))), x && e.push(((e) => ({ text: I, onClick: e, Icon: f.default }))(C)), e;
                        }, [Z, F, C, z, x, E]),
                        A = a.useCallback(
                            (e) => {
                                const n = L();
                                return n.length ? a.createElement(o.Z, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [L],
                        ),
                        K = a.useCallback(() => {}, []);
                    return M ? a.createElement(i.ZP, { Icon: h.default, "aria-label": $, color: "text", hoverLabel: _, iconSize: e, onPress: K, renderMenu: A, testID: "job-share-action-btn" }) : null;
                },
                E = a.memo(P);
        },
        89217: (e, n, t) => {
            t.d(n, { Ju: () => m, Qw: () => f, eo: () => d });
            var a = t(111677),
                l = t.n(a);
            const r = l().c69eb656,
                o = l().g46ae43c,
                i = l().jf7d4cc6,
                s = l().b2214572,
                d = Object.freeze({ full_time: r, full_time_contract: o, part_time: i, contract_to_hire: s }),
                c = l().f8337bd6,
                u = l().i935bf88,
                m = Object.freeze({ 1: c, 2: u }),
                f = Object.freeze({ annually: { label: c, value: 1 }, hourly: { label: u, value: 2 } });
        },
        457458: (e, n, t) => {
            t.d(n, { G: () => d, M: () => s });
            t(571372);
            var a = t(301503),
                l = t(111677),
                r = t.n(l),
                o = t(89217);
            const i = r().b75b8ffd,
                s = (e, n = 1) => {
                    const t = n ?? 1;
                    return o.Ju[t.toString()] ? i({ salary: e, interval: o.Ju[t.toString()] }) : e;
                },
                d = (e) => {
                    if (e)
                        try {
                            const n = JSON.parse(e);
                            if (!n.entityMap || !n.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, a.convertFromRaw)(n).hasText()) return;
                            return n;
                        } catch (e) {}
                };
        },
        135904: (e, n, t) => {
            t.d(n, { c: () => r, n: () => l });
            var a = t(392237);
            const l = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${a.default.theme.fontSizes.title2};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${a.default.theme.fontSizes.title3};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title2};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: ${a.default.theme.spaces.space12};\n        margin-left: calc(${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${a.default.theme.spaces.space12} / 2);\n        margin-left: ${a.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${a.default.theme.spaces.space24} + ${a.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${a.default.theme.spaces.space2});\n        padding-left: calc(${a.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${a.default.theme.colors.gray900};\n        border-radius: ${a.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, n, t) => {
            t.d(n, { Z: () => D });
            t(136728);
            var a = t(202784),
                l = t(301503),
                r = t(325686),
                o = t(595088),
                i = t(516951),
                s = t(731708),
                d = t(779802),
                c = t(537392),
                u = t(989272),
                m = t(925873),
                f = t(202253),
                h = t(786475),
                p = t(392237),
                b = t(135904);
            const g = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: a.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: a.createElement(s.ZP, null) } },
                y = (0, o.Z)(g).reduce((e, [n, t]) => e.set(n, t), l.DefaultDraftBlockRenderMap);
            let k = !1;
            const D = a.memo(function (e) {
                    const { componentByType: n, contentState: t, onScribeEvent: o, paragraphFontSizeOverride: s } = e;
                    a.useEffect(() => {
                        k || (u.fH(b.c, b.n), (k = !0));
                    }, []);
                    const p = [(0, f.ez)(o, s), f.aF, f.RU];
                    e.disable_entityLinkDecorator || p.push((0, f.NA)(o, s));
                    const g = m.Z.initEditorState(t, { decorators: p });
                    let D = i.Z;
                    return (
                        n &&
                            (D = (e) => {
                                const t = e.getType();
                                return n[t] || null;
                            }),
                        a.createElement(c.ZP, null, ({ containerWidth: e }) => a.createElement(r.Z, { style: w.fontFamily }, a.createElement(l.Editor, { blockRenderMap: y, blockRendererFn: D, blockStyleFn: (0, d.su)(h.Z.isNarrowScreenWidth(e)), editorState: g, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                w = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, n, t) => {
            t.d(n, { $u: () => I, Ak: () => M, KJ: () => D, LI: () => $, P7: () => b, PW: () => S, QF: () => g, Qm: () => k, Tr: () => _, b$: () => p, db: () => F, et: () => v, fR: () => h, iH: () => P, lD: () => y, su: () => w, u4: () => x, wX: () => E });
            var a = t(202784),
                l = t(111677),
                r = t.n(l),
                o = t(394123),
                i = t(856661),
                s = t(69893),
                d = t(474761),
                c = t(428259),
                u = t(89085),
                m = t(630715),
                f = t(731708);
            const h = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: o.default, key: h.bold, onPress: e(h.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: h.italic, onPress: e(h.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: h.strikethrough, onPress: e(h.strikethrough) },
                ],
                b = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                g = (e) => [{ buttonTestId: "btn-blockquote", Icon: d.default, key: b.blockquote, onPress: e(b.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: b.bulleted, onPress: e(b.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: b.numbered, onPress: e(b.numbered) },
                ],
                k = "LINK",
                D = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: k, onPress: e }],
                w = (e, n) => (t) => {
                    const a = (n) => (e ? `${n}-narrow` : n);
                    switch (t.getType()) {
                        case b.bulleted:
                            return a("longform-unordered-list-item");
                        case b.blockquote:
                            return a("longform-blockquote");
                        case b.header1:
                            return a("longform-header-one");
                        case b.header2:
                            return a("longform-header-two");
                        case b.numbered:
                            return a("longform-ordered-list-item");
                        case b.paragraph:
                            return a("longform-unstyled");
                        default:
                            return n?.(t) || "";
                    }
                },
                v = r().d5a48014,
                S = r().b92b6156,
                I = r().ec5ed598,
                $ = ({ children: e, extendedWidth: n, size: t, weight: l }) => a.createElement(f.ZP, { extendedWidth: n, size: t, weight: l }, e),
                _ = { blockType: b.paragraph, label: I, component: $({ size: "body", children: I }) },
                P = [{ blockType: b.header1, label: v, component: $({ size: "title1", extendedWidth: !0, children: v }) }, { blockType: b.header2, label: S, component: $({ size: "title3", weight: "heavy", children: S }) }, _],
                E = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                M = ["delete", "delete-word", "delete-to-start-of-line"],
                x = "increase-text-size",
                F = "decrease-text-size";
        },
        989272: (e, n, t) => {
            t.d(n, { _i: () => l, fH: () => o, w3: () => r });
            t(136728);
            var a = t(392237);
            const l = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                o(
                    (function () {
                        const e = a.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${l.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const n = s(e);
                return (
                    o(
                        (function (e) {
                            const n = s(e);
                            let t = e.placeholderTextColor;
                            const l = e.contentHorizontalPadding;
                            t || (t = a.default.theme.colors.gray700);
                            return `\n    .${n} .public-DraftEditorPlaceholder-root {\n      color: ${t};\n    }\n\n    .${n} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${t};\n    }\n\n    ${l ? `\n        .${n} .public-DraftEditor-content,\n        .${n} .public-DraftEditorPlaceholder-root {\n          padding-left: ${l};\n          padding-right: ${l};\n        }\n      ` : ""}\n  `;
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
                    const t = document.createElement("style");
                    t.setAttribute("id", n), (t.innerHTML = e);
                    const a = document.head;
                    a && a.insertBefore(t, a.firstChild);
                }
            }
            const i = "draftjs-styles";
            function s(e) {
                const n = (function (e) {
                    for (let n = 0; n < d.length; n++) {
                        if (d[n] === e) return String(n);
                    }
                    return d.push(e), String(d.length - 1);
                })(JSON.stringify(e));
                return `${i}_${n}`;
            }
            const d = [];
        },
        183806: (e, n, t) => {
            t.d(n, { Z: () => a });
            const a = t(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        89085: (e, n, t) => {
            t.r(n), t.d(n, { default: () => s });
            var a = t(202784),
                l = t(890601),
                r = t(783427),
                o = t(347101);
            const i = (e = {}) => {
                const { direction: n } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: n });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        258292: (e, n, t) => {
            t.r(n), t.d(n, { default: () => s });
            var a = t(202784),
                l = t(890601),
                r = t(783427),
                o = t(347101);
            const i = (e = {}) => {
                const { direction: n } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: n });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        106186: (e, n, t) => {
            t.r(n), t.d(n, { default: () => s });
            var a = t(202784),
                l = t(890601),
                r = t(783427),
                o = t(347101);
            const i = (e = {}) => {
                const { direction: n } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23.426 9.29L15.54 8.15 12.013 1 8.486 8.15.6 9.29l5.707 5.56-1.348 7.86L12.013 19l7.053 3.71-1.347-7.86 5.707-5.56zm-11.413 7.45l-4.397 2.31.84-4.89-3.558-3.47 4.916-.72 2.199-4.45 2.198 4.45 4.917.72-3.558 3.47.84 4.89-4.397-2.31z" })) }, { writingDirection: n });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.3a546b6a.js.map
