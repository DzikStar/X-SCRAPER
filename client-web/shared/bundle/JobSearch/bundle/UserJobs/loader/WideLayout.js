"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"],
    {
        822502: (e, l, a) => {
            a.d(l, { Z: () => E });
            var n,
                t,
                r,
                i = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }, t], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "RxOP--hDqELH_fWn5VylUA", metadata: {}, name: "JobListItemContentUserQuery", operationKind: "query", text: null } };
            i.hash = "a917044255331aa25e3b5342759ae37c";
            const s = i;
            var o = a(202784),
                u = a(325686),
                c = (a(585488), a(277660)),
                d = a.n(c),
                m = a(392237),
                y = a(725405),
                g = a(535338),
                p = a(665971),
                k = (a(136728), a(107267)),
                b = a(731708),
                f = a(519172),
                _ = a(601413),
                v = a(952428),
                S = a(823161),
                F = a(757483),
                h = a(457458),
                I = a(412876),
                K = a(910113);
            const L = ({ fallbackName: e, user: l }) => {
                    const a = d()(K.fR, l);
                    return a && a.legacy && a.legacy.name && a.legacy.screen_name ? o.createElement(b.ZP, { size: "subtext2", style: w.userName }, o.createElement(u.Z, { style: w.name }, o.createElement(b.ZP, { numberOfLines: 1 }, a.legacy.name), o.createElement(f.Z, { isVerified: a.verification?.verified ?? !1, verifiedType: a.verification?.verified_type ?? void 0 })), o.createElement(_.Z, { screenName: a.legacy.screen_name, size: "subtext2" })) : e ? o.createElement(b.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                w = m.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: F.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                j = ({ companyProfile: e, formattedSalary: l, jobId: a, jobLocation: n, jobTitle: t, onClick: r, renderActions: i, salaryInterval: s, user: c, withBottomBorder: d = !0 }) => {
                    const { jobId: m } = (0, k.useParams)(),
                        y = o.useMemo(() => ({ label: t }), [t]),
                        g = o.useMemo(() => {
                            const e = [w.listContainer];
                            return m === a ? e.push(w.activeItem) : d && e.push(w.inactiveItem), e;
                        }, [m, a, d]);
                    return o.createElement(v.Z, { onClick: r, role: "listitem", style: g }, o.createElement(u.Z, { style: w.itemRow }, c ? o.createElement(I.Y, { size: "xLarge", user: c }) : o.createElement(S.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), o.createElement(u.Z, { style: w.items }, o.createElement(b.ZP, { hoverLabel: y, numberOfLines: 2, size: "subtext1", weight: "bold" }, t), o.createElement(L, { fallbackName: e?.core?.name, user: c }), o.createElement(b.ZP, { color: "gray700", size: "subtext2" }, n), l ? o.createElement(b.ZP, { color: "gray700", size: "subtext2" }, (0, h.M)(l, s)) : null)), i && o.createElement(u.Z, null, i()));
                },
                C = s,
                x = m.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                E = ({ actions: e, companyProfile: l, job: a, jobId: n, jobIndex: t, onClick: r, relayId: i, user: s, userSentiment: c, withBottomBorder: m = !0 }) => {
                    const k = (0, y.Z)(),
                        { viewer: b } = (0, g.p)(C, {}),
                        f = d()(K.qV, a),
                        _ = d()(K.dB, l),
                        v = b?.user_results?.result?.__id,
                        S = o.useCallback(() => {
                            k.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: n, position: t }] } }), r();
                        }, [k, n, t, r]),
                        F = o.useCallback(() => o.createElement(u.Z, { style: x.actions }, o.createElement(p.ZP, { actions: e, jobId: n, relayId: i, userRelayId: v, userSentiment: c })), [e, n, i, v, c]);
                    return f && f.title && f.location ? o.createElement(j, { companyProfile: _, formattedSalary: f.formatted_salary, jobId: n, jobLocation: f.location, jobTitle: f.title, onClick: S, renderActions: F, salaryInterval: f.salary_interval, user: s, withBottomBorder: m }) : null;
                };
        },
        910113: (e, l, a) => {
            a.d(l, { ZP: () => I, dB: () => S, KM: () => h, qV: () => v, fR: () => F });
            a(136728);
            var n,
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
                                (n = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_job" }], storageKey: null },
                                { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [n, (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [n, t, { args: null, kind: "FragmentSpread", name: "JobSearchListItem_company" }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
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
            const i = r;
            var s = {
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
            const o = s;
            var u = {
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
            const c = u;
            var d = {
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
            const m = d;
            var y = a(202784),
                g = (a(585488), a(277660)),
                p = a.n(g),
                k = a(107267),
                b = a(708852),
                f = a(822502),
                _ = a(318178);
            const v = m,
                S = c,
                F = o,
                h = i,
                I = ({ item: e, itemId: l, itemIndex: a }) => {
                    const n = (0, b.Ji)(),
                        t = (0, k.useHistory)(),
                        r = (0, k.useLocation)(),
                        i = p()(h, e),
                        s = i?.core,
                        o = i?.user_results?.result,
                        u = i?.company_profile_results?.result,
                        c = i?.id || "",
                        d = i?.user_sentiment,
                        m = y.useCallback(() => {
                            n ? t.push({ pathname: `/jobs/${l}`, query: r.query }) : t.push({ pathname: `/m/jobs/${l}`, query: r.query });
                        }, [t, n, l, r.query]);
                    return i && s ? y.createElement(f.Z, { actions: [_.h5], companyProfile: u, job: s, jobId: l, jobIndex: a, onClick: m, relayId: c, user: o, userSentiment: d }) : null;
                };
        },
        318178: (e, l, a) => {
            a.d(l, { pN: () => K, h5: () => I, ZP: () => j, tv: () => h });
            var n,
                t,
                r,
                i,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "jobId" }), (t = { defaultValue: null, kind: "LocalArgument", name: "sentiment" }), (r = { defaultValue: null, kind: "LocalArgument", name: "twclid" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [i, n, t, r], kind: "Operation", name: "SentimentActionButtonMutation", selections: s },
                    params: { id: "1smesvHITcf79zPEvtAqOA", metadata: {}, name: "SentimentActionButtonMutation", operationKind: "mutation", text: null },
                };
            o.hash = "0a931e00dd50f5310fb28d29e83f884c";
            const u = o;
            var c = a(202784),
                d = a(325686),
                m = (a(585488), a(351743)),
                y = a.n(m),
                g = a(530732),
                p = a(731708),
                k = a(392237),
                b = a(106186),
                f = a(258292),
                _ = a(616894),
                v = a(443781),
                S = a(292546);
            const F = u,
                h = (e, l, a) => {
                    const { viewerUserId: n } = (0, v.QZ)(),
                        [t] = y()(F),
                        [r] = (0, S.Z)(),
                        i = r.get("twclid") || null,
                        s = c.useCallback(
                            (e, n) => {
                                const t = e.get(l);
                                if ((t && t.setValue(n, "user_sentiment"), a)) {
                                    const l = e.get(a);
                                    l && l.invalidateRecord();
                                }
                            },
                            [l, a],
                        );
                    return c.useCallback(
                        (l) => {
                            n && t({ variables: { jobId: e, userId: n, sentiment: l, twclid: i }, optimisticUpdater: (e) => s(e, l), updater: (e) => s(e, l) });
                        },
                        [t, s, e, i, n],
                    );
                },
                I = "like",
                K = "dislike",
                L = ({ Icon: e, SelectedIcon: l, activeStyle: a, hoverStyle: n, isSelected: t, label: r, onClick: i, sentiment: s }) => {
                    const o = (e) => (e ? n : t ? a : {});
                    return c.createElement(
                        d.Z,
                        null,
                        c.createElement(g.Z, { interactiveStyles: null, onClick: (e) => i(s, e), style: w.sentimentActionContainer }, ({ isHovered: a }) => c.createElement(c.Fragment, null, t ? c.createElement(l, { style: o(a) }) : c.createElement(e, { style: o(a) }), c.createElement(p.ZP, { size: "subtext2", style: { ...o(a) } }, r))),
                    );
                },
                w = k.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                j = ({ jobId: e, relayId: l, type: a, userRelayId: n, userSentiment: t }) => {
                    const r = h(e, l, n),
                        i = c.useCallback(
                            (e, l) => {
                                l.stopPropagation();
                                r(e !== t ? e : "none");
                            },
                            [r, t],
                        );
                    return a === I ? c.createElement(L, { Icon: b.default, SelectedIcon: f.default, activeStyle: w.likeActive, hoverStyle: w.likeHover, isSelected: t === I, label: "Save job", onClick: i, sentiment: I }) : a === K ? c.createElement(L, { Icon: _.default, SelectedIcon: _.default, activeStyle: w.dislikeActive, hoverStyle: w.dislikeHover, isSelected: t === K, label: "Not interested", onClick: i, sentiment: K }) : null;
                };
        },
        292546: (e, l, a) => {
            a.d(l, { Z: () => r });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                t = a(107267);
            const r = () => {
                const e = (0, t.useLocation)(),
                    l = (0, t.useHistory)(),
                    [a, r] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const i = n.useCallback(
                    (n, t) => {
                        const r = new URLSearchParams(a);
                        r.set(n, t), l.push(`${e.pathname}?${r.toString()}`);
                    },
                    [l, e.pathname, a],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), i];
            };
        },
        665971: (e, l, a) => {
            a.d(l, { r1: () => f, ZP: () => v });
            var n,
                t,
                r,
                i,
                s,
                o,
                u,
                c,
                d = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "jobId" }]),
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
                                selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null }], type: "ApiJob", abstractKey: null })], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (o = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(u = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
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
                            { alias: "jobData", args: t, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), s], storageKey: null }, i], storageKey: null },
                            { alias: "viewer", args: o, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [i], type: "User", abstractKey: null }, u], storageKey: null }, i], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "qHd1d0swWQGc38vT_2YChQ", metadata: {}, name: "SentimentActionsQuery", operationKind: "query", text: null },
                };
            d.hash = "e5a668a0d2bfaed6901573b493e6449a";
            const m = d;
            var y = a(202784),
                g = (a(585488), a(318178)),
                p = a(952793),
                k = a(535338);
            const b = m,
                f = ({ actions: e, jobId: l }) => {
                    const { jobData: a, viewer: n } = (0, k.p)(b, { jobId: l }),
                        t = a?.result?.id ?? "",
                        r = a?.result?.user_sentiment;
                    return y.createElement(_, { actions: e, jobId: l, relayId: t, userRelayId: n?.user_results?.result?.__id, userSentiment: r });
                },
                _ = ({ actions: e, jobId: l, relayId: a, userRelayId: n, userSentiment: t }) => {
                    const r = (0, p.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && r ? y.createElement(y.Fragment, null, e.includes(g.pN) && y.createElement(g.ZP, { jobId: l, relayId: a, type: g.pN, userRelayId: n, userSentiment: t }), e.includes(g.h5) && y.createElement(g.ZP, { jobId: l, relayId: a, type: g.h5, userRelayId: n, userSentiment: t })) : null;
                },
                v = _;
        },
        89217: (e, l, a) => {
            a.d(l, { Ju: () => m, Qw: () => y, eo: () => u });
            var n = a(674132),
                t = a.n(n);
            const r = t().c69eb656,
                i = t().g46ae43c,
                s = t().jf7d4cc6,
                o = t().b2214572,
                u = Object.freeze({ full_time: r, full_time_contract: i, part_time: s, contract_to_hire: o }),
                c = t().f8337bd6,
                d = t().i935bf88,
                m = Object.freeze({ 1: c, 2: d }),
                y = Object.freeze({ annually: { label: c, value: 1 }, hourly: { label: d, value: 2 } });
        },
        457458: (e, l, a) => {
            a.d(l, { G: () => u, M: () => o });
            a(571372);
            var n = a(301503),
                t = a(674132),
                r = a.n(t),
                i = a(89217);
            const s = r().b75b8ffd,
                o = (e, l = 1) => {
                    const a = l ?? 1;
                    return i.Ju[a.toString()] ? s({ salary: e, interval: i.Ju[a.toString()] }) : e;
                },
                u = (e) => {
                    if (e)
                        try {
                            const l = JSON.parse(e);
                            if (!l.entityMap || !l.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, n.convertFromRaw)(l).hasText()) return;
                            return l;
                        } catch (e) {}
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout.89633f8a.js.map
