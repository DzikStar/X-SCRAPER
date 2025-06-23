"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"],
    {
        822502: (e, n, t) => {
            t.d(n, { Z: () => P });
            var a,
                l,
                r,
                i = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: (a = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "JobListItemContentUserQuery", selections: [{ alias: "viewer", args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }, l], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "RxOP--hDqELH_fWn5VylUA", metadata: {}, name: "JobListItemContentUserQuery", operationKind: "query", text: null } };
            i.hash = "a917044255331aa25e3b5342759ae37c";
            const s = i;
            var o = t(202784),
                c = t(325686),
                u = (t(585488), t(277660)),
                d = t.n(u),
                m = t(392237),
                p = t(725405),
                y = t(535338),
                g = t(665971),
                b = (t(136728), t(107267)),
                h = t(731708),
                k = t(519172),
                f = t(601413),
                v = t(952428),
                _ = t(823161),
                S = t(757483),
                E = t(457458),
                F = t(412876),
                w = t(910113);
            const I = ({ fallbackName: e, user: n }) => {
                    const t = d()(w.fR, n);
                    return t && t.core && t.core.name && t.core.screen_name ? o.createElement(h.ZP, { size: "subtext2", style: C.userName }, o.createElement(c.Z, { style: C.name }, o.createElement(h.ZP, { numberOfLines: 1 }, t.core.name), o.createElement(k.Z, { isVerified: t.verification?.verified ?? !1, verifiedType: t.verification?.verified_type ?? void 0 })), o.createElement(f.Z, { screenName: t.core.screen_name, size: "subtext2" })) : e ? o.createElement(h.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                C = m.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: S.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                K = ({ companyProfile: e, formattedSalary: n, jobId: t, jobLocation: a, jobTitle: l, onClick: r, renderActions: i, salaryInterval: s, user: u, withBottomBorder: d = !0 }) => {
                    const { jobId: m } = (0, b.useParams)(),
                        p = o.useMemo(() => ({ label: l }), [l]),
                        y = o.useMemo(() => {
                            const e = [C.listContainer];
                            return m === t ? e.push(C.activeItem) : d && e.push(C.inactiveItem), e;
                        }, [m, t, d]);
                    return o.createElement(v.Z, { onClick: r, role: "listitem", style: y }, o.createElement(c.Z, { style: C.itemRow }, u ? o.createElement(F.Y, { size: "xLarge", user: u }) : o.createElement(_.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), o.createElement(c.Z, { style: C.items }, o.createElement(h.ZP, { hoverLabel: p, numberOfLines: 2, size: "subtext1", weight: "bold" }, l), o.createElement(I, { fallbackName: e?.core?.name, user: u }), o.createElement(h.ZP, { color: "gray700", size: "subtext2" }, a), n ? o.createElement(h.ZP, { color: "gray700", size: "subtext2" }, (0, E.M)(n, s)) : null)), i && o.createElement(c.Z, null, i()));
                },
                L = s,
                x = m.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                P = ({ actions: e, companyProfile: n, job: t, jobId: a, jobIndex: l, onClick: r, relayId: i, user: s, userSentiment: u, withBottomBorder: m = !0 }) => {
                    const b = (0, p.Z)(),
                        { viewer: h } = (0, y.p)(L, {}),
                        k = d()(w.qV, t),
                        f = d()(w.dB, n),
                        v = h?.user_results?.result?.__id,
                        _ = o.useCallback(() => {
                            b.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: a, position: l }] } }), r();
                        }, [b, a, l, r]),
                        S = o.useCallback(() => o.createElement(c.Z, { style: x.actions }, o.createElement(g.ZP, { actions: e, jobId: a, relayId: i, userRelayId: v, userSentiment: u })), [e, a, i, v, u]);
                    return k && k.title && k.location ? o.createElement(K, { companyProfile: f, formattedSalary: k.formatted_salary, jobId: a, jobLocation: k.location, jobTitle: k.title, onClick: _, renderActions: S, salaryInterval: k.salary_interval, user: s, withBottomBorder: m }) : null;
                };
        },
        910113: (e, n, t) => {
            t.d(n, { ZP: () => F, dB: () => _, KM: () => E, qV: () => v, fR: () => S });
            t(136728);
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
            const o = s;
            var c = {
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
            const u = c;
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
            var p = t(202784),
                y = (t(585488), t(277660)),
                g = t.n(y),
                b = t(107267),
                h = t(708852),
                k = t(822502),
                f = t(318178);
            const v = m,
                _ = u,
                S = o,
                E = i,
                F = ({ item: e, itemId: n, itemIndex: t }) => {
                    const a = (0, h.Ji)(),
                        l = (0, b.useHistory)(),
                        r = (0, b.useLocation)(),
                        i = g()(E, e),
                        s = i?.core,
                        o = i?.user_results?.result,
                        c = i?.company_profile_results?.result,
                        u = i?.id || "",
                        d = i?.user_sentiment,
                        m = p.useCallback(() => {
                            a ? l.push({ pathname: `/jobs/${n}`, query: r.query }) : l.push({ pathname: `/m/jobs/${n}`, query: r.query });
                        }, [l, a, n, r.query]);
                    return i && s ? p.createElement(k.Z, { actions: [f.h5], companyProfile: c, job: s, jobId: n, jobIndex: t, onClick: m, relayId: u, user: o, userSentiment: d }) : null;
                };
        },
        318178: (e, n, t) => {
            t.d(n, { pN: () => w, h5: () => F, ZP: () => K, tv: () => E });
            var a,
                l,
                r,
                i,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "jobId" }), (l = { defaultValue: null, kind: "LocalArgument", name: "sentiment" }), (r = { defaultValue: null, kind: "LocalArgument", name: "twclid" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [i, a, l, r], kind: "Operation", name: "SentimentActionButtonMutation", selections: s },
                    params: { id: "1smesvHITcf79zPEvtAqOA", metadata: {}, name: "SentimentActionButtonMutation", operationKind: "mutation", text: null },
                };
            o.hash = "0a931e00dd50f5310fb28d29e83f884c";
            const c = o;
            var u = t(202784),
                d = t(325686),
                m = (t(585488), t(351743)),
                p = t.n(m),
                y = t(530732),
                g = t(731708),
                b = t(392237),
                h = t(106186),
                k = t(258292),
                f = t(616894),
                v = t(443781),
                _ = t(292546);
            const S = c,
                E = (e, n, t) => {
                    const { viewerUserId: a } = (0, v.QZ)(),
                        [l] = p()(S),
                        [r] = (0, _.Z)(),
                        i = r.get("twclid") || null,
                        s = u.useCallback(
                            (e, a) => {
                                const l = e.get(n);
                                if ((l && l.setValue(a, "user_sentiment"), t)) {
                                    const n = e.get(t);
                                    n && n.invalidateRecord();
                                }
                            },
                            [n, t],
                        );
                    return u.useCallback(
                        (n) => {
                            a && l({ variables: { jobId: e, userId: a, sentiment: n, twclid: i }, optimisticUpdater: (e) => s(e, n), updater: (e) => s(e, n) });
                        },
                        [l, s, e, i, a],
                    );
                },
                F = "like",
                w = "dislike",
                I = ({ Icon: e, SelectedIcon: n, activeStyle: t, hoverStyle: a, isSelected: l, label: r, onClick: i, sentiment: s }) => {
                    const o = (e) => (e ? a : l ? t : {});
                    return u.createElement(
                        d.Z,
                        null,
                        u.createElement(y.Z, { interactiveStyles: null, onClick: (e) => i(s, e), style: C.sentimentActionContainer }, ({ isHovered: t }) => u.createElement(u.Fragment, null, l ? u.createElement(n, { style: o(t) }) : u.createElement(e, { style: o(t) }), u.createElement(g.ZP, { size: "subtext2", style: { ...o(t) } }, r))),
                    );
                },
                C = b.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                K = ({ jobId: e, relayId: n, type: t, userRelayId: a, userSentiment: l }) => {
                    const r = E(e, n, a),
                        i = u.useCallback(
                            (e, n) => {
                                n.stopPropagation();
                                r(e !== l ? e : "none");
                            },
                            [r, l],
                        );
                    return t === F ? u.createElement(I, { Icon: h.default, SelectedIcon: k.default, activeStyle: C.likeActive, hoverStyle: C.likeHover, isSelected: l === F, label: "Save job", onClick: i, sentiment: F }) : t === w ? u.createElement(I, { Icon: f.default, SelectedIcon: f.default, activeStyle: C.dislikeActive, hoverStyle: C.dislikeHover, isSelected: l === w, label: "Not interested", onClick: i, sentiment: w }) : null;
                };
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
                const i = a.useCallback(
                    (a, l) => {
                        const r = new URLSearchParams(t);
                        r.set(a, l), n.push(`${e.pathname}?${r.toString()}`);
                    },
                    [n, e.pathname, t],
                );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), i];
            };
        },
        665971: (e, n, t) => {
            t.d(n, { r1: () => k, ZP: () => v });
            var a,
                l,
                r,
                i,
                s,
                o,
                c,
                u,
                d = {
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
                                selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null }], type: "ApiJob", abstractKey: null })], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (o = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
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
                            { alias: "jobData", args: l, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_by_rest_id", plural: !1, selections: [r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), s], storageKey: null }, i], storageKey: null },
                            { alias: "viewer", args: o, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [i], type: "User", abstractKey: null }, c], storageKey: null }, i], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "qHd1d0swWQGc38vT_2YChQ", metadata: {}, name: "SentimentActionsQuery", operationKind: "query", text: null },
                };
            d.hash = "e5a668a0d2bfaed6901573b493e6449a";
            const m = d;
            var p = t(202784),
                y = (t(585488), t(318178)),
                g = t(952793),
                b = t(535338);
            const h = m,
                k = ({ actions: e, jobId: n }) => {
                    const { jobData: t, viewer: a } = (0, b.p)(h, { jobId: n }),
                        l = t?.result?.id ?? "",
                        r = t?.result?.user_sentiment;
                    return p.createElement(f, { actions: e, jobId: n, relayId: l, userRelayId: a?.user_results?.result?.__id, userSentiment: r });
                },
                f = ({ actions: e, jobId: n, relayId: t, userRelayId: a, userSentiment: l }) => {
                    const r = (0, g.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && r ? p.createElement(p.Fragment, null, e.includes(y.pN) && p.createElement(y.ZP, { jobId: n, relayId: t, type: y.pN, userRelayId: a, userSentiment: l }), e.includes(y.h5) && p.createElement(y.ZP, { jobId: n, relayId: t, type: y.h5, userRelayId: a, userSentiment: l })) : null;
                },
                v = f;
        },
        89217: (e, n, t) => {
            t.d(n, { Ju: () => m, Qw: () => p, eo: () => c });
            var a = t(111677),
                l = t.n(a);
            const r = l().c69eb656,
                i = l().g46ae43c,
                s = l().jf7d4cc6,
                o = l().b2214572,
                c = Object.freeze({ full_time: r, full_time_contract: i, part_time: s, contract_to_hire: o }),
                u = l().f8337bd6,
                d = l().i935bf88,
                m = Object.freeze({ 1: u, 2: d }),
                p = Object.freeze({ annually: { label: u, value: 1 }, hourly: { label: d, value: 2 } });
        },
        457458: (e, n, t) => {
            t.d(n, { G: () => c, M: () => o });
            t(571372);
            var a = t(301503),
                l = t(111677),
                r = t.n(l),
                i = t(89217);
            const s = r().b75b8ffd,
                o = (e, n = 1) => {
                    const t = n ?? 1;
                    return i.Ju[t.toString()] ? s({ salary: e, interval: i.Ju[t.toString()] }) : e;
                },
                c = (e) => {
                    if (e)
                        try {
                            const n = JSON.parse(e);
                            if (!n.entityMap || !n.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, a.convertFromRaw)(n).hasText()) return;
                            return n;
                        } catch (e) {}
                };
        },
        941978: (e, n, t) => {
            t.d(n, { C: () => a });
            class a {
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
                    const t = n().then((n) => {
                        this._cache[e] = n;
                    });
                    return this._cache[e] || (this._cache[e] = t), this._cache[e];
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
            new a();
        },
        491915: (e, n, t) => {
            t.d(n, { ZP: () => b });
            t(571372);
            var a = t(202784),
                l = t(325686),
                r = t(392237),
                i = t(111677),
                s = t.n(i),
                o = t(643442),
                c = t(466445),
                u = t(731708),
                d = t(154003),
                m = t(173739);
            const p = s().jcf3e7a2;
            function y({ animation: e, autoplay: n }) {
                const [t, r] = a.useState(n),
                    [i, s] = a.useState(0);
                return (
                    a.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    a.createElement(
                        l.Z,
                        { style: g.container },
                        a.createElement(d.ZP, {
                            "aria-label": t ? "Pause" : "Play",
                            icon: t ? a.createElement(o.default, null) : a.createElement(c.default, null),
                            onClick: function () {
                                t ? (e.pause(), r(!1)) : (e.play(), r(!0));
                            },
                            type: "primaryText",
                        }),
                        a.createElement(u.ZP, { style: g.frames }, `${i}/${e.totalFrames}`),
                        a.createElement(
                            l.Z,
                            { style: g.slider },
                            a.createElement(m.Z, {
                                "aria-label": p,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (n) {
                                    e.goToAndStop(n, !0), r(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const g = r.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function b(e) {
                const { autoplay: n = !0, loop: t = !1, onAnimationEnd: r, onAnimationStart: i, onError: s, withControls: o } = e,
                    c = a.useRef(void 0),
                    u = a.useRef({ animationLoaded: !1 }),
                    d = a.useRef(null),
                    [m, p] = a.useState(!1);
                return (
                    a.useEffect(() => {
                        function a(e, n) {
                            "function" == typeof r && r(n), e && e.destroy();
                        }
                        const { animationLoaded: l } = u.current;
                        l ||
                            ((u.current.animationLoaded = !0),
                            h.load().then((l) => {
                                if (l && d.current) {
                                    const r = { container: d.current, renderer: "svg", loop: t, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        o = l.loadAnimation(r);
                                    (c.current = o),
                                        (o.onError = (e) => {
                                            const n = new k(e);
                                            "function" == typeof s && s(n), a(o, n);
                                        }),
                                        o.addEventListener("DOMLoaded", () => {
                                            p(!0), n && (o.play(), i && i());
                                        }),
                                        o.addEventListener("complete", () => {
                                            a(o);
                                        });
                                }
                            }));
                    }, [e.animation, n, t, r, i, s, o]),
                    a.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    a.createElement(l.Z, null, a.createElement(l.Z, { style: [e.animationContainerStyle, f.centerAnimation] }, a.createElement("div", { ref: d, style: e.animationStyle }), o && c.current && m && a.createElement(y, { animation: c.current, autoplay: n })))
                );
            }
            b.Prepare = function () {
                return (
                    a.useEffect(() => {
                        h.load();
                    }, []),
                    null
                );
            };
            const h = { load: () => t.e("ondemand.LottieWeb").then(t.t.bind(t, 548888, 23)) };
            class k extends Error {
                constructor(e, ...n) {
                    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, k), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const f = r.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        40644: (e, n, t) => {
            t.d(n, { ZP: () => _ });
            var a = t(202784),
                l = t(325686),
                r = t(461756),
                i = t(731708),
                s = t(58881),
                o = t(530732),
                c = t(224162),
                u = t(491915),
                d = t(392237),
                m = t(551611),
                p = t(111677),
                y = t.n(p),
                g = t(891198),
                b = t(537392),
                h = t(280278);
            const k = y().e8d93005,
                f = d.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                v = ({ color: e, count: n }) => {
                    const t = (0, g.wl)(n, !0);
                    return a.createElement(b.ZP, null, ({ containerWidth: l }) => {
                        return a.createElement(h.ZP, { color: e, count: n, size: "subtext2", style: [f.count, ((r = l), r < d.default.theme.breakpoints.small && f.narrowCount)] }, n > 0 ? (((e) => e < d.default.theme.breakpoints.xxSmall)(l) || t.length >= 5 ? k(n) : t) : void 0);
                        var r;
                    });
                };
            class _ extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, n) => {
                            const { activeColor: t, color: r, decoration: s } = this.props;
                            return a.createElement(c.ZP.Consumer, null, ({ direction: o }) => a.createElement(i.ZP, { color: e ? t : r, dir: o, style: [F.inner, e && "blue500" === t && F.blue500] }, a.createElement(l.Z, { ref: this.props.actionIconContainerRef }, n ? this._renderButton(n) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: n, backgroundColor: t, hoverLabel: l, iconSize: r, isActive: i, isDisabled: c, showBackgroundWhenActive: u } = this.props,
                                m = s.Z.generate({ backgroundColor: d.default.theme.colors[t], color: d.default.theme.colors[n], insetFocusRing: !0 }),
                                p = u && i && !e?.isHovered;
                            return a.createElement(o.Z, { hoverLabel: l, interactiveStyles: m, interactivityState: e, style: [d.default.absoluteFill, E[p ? "haloBackground" : t], !c && F.iconBackground, "small" === r && F.iconSmallBoundingBox, p && F.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: n, isActive: t, isDisabled: l, isFaded: i, onAnimationEnd: s, onAnimationStart: o, onError: c, showAnimation: p, transitionAnimationUrl: y } = this.props;
                            if (!d.default.theme.highContrastEnabled && !r.Z.reducedMotionEnabled && e && p) return a.createElement(u.ZP, { animation: y || m.Bf, animationContainerStyle: S[n], animationStyle: I, onAnimationEnd: s, onAnimationStart: o, onError: c });
                            {
                                const r = t && e ? e : this.props.Icon;
                                return a.createElement(r, { style: [S[n], !l && i && F.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: n } = this.props;
                            return n ? a.createElement(v, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: n, renderWrapper: t } = this.props;
                            t || (e.stopPropagation(), n && n(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: n, enableKeyboardShortcuts: t, isActive: i, isDisabled: s, isPresentational: c, keyboardShortcut: m, link: p, preventFocusShift: y, renderMenu: g, renderWrapper: b = a.Fragment, style: h, testID: k } = this.props,
                        f = !d.default.theme.highContrastEnabled && !r.Z.reducedMotionEnabled;
                    return a.createElement(
                        l.Z,
                        { style: [F.root, h] },
                        a.createElement(
                            b,
                            null,
                            c
                                ? this._renderContent(i)
                                : a.createElement(o.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: t, focusable: n, interactiveStyles: null, keyboardShortcut: m, link: p, onClick: this._handlePress, preventFocusShift: y, renderMenu: g, style: [F.triggerAreaRoot, F.outlineNone], testID: k }, (e) => {
                                      const { isFocused: n, isHovered: t, isPressed: a } = e,
                                          l = i || t || a || n;
                                      return this._renderContent(l, e);
                                  }),
                        ),
                        f ? a.createElement(u.ZP.Prepare, null) : null,
                    );
                }
            }
            _.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const S = d.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                E = d.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                F = d.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                w = "224.5%",
                I = { width: w, height: w };
        },
        551611: (e, n, t) => {
            t.d(n, { Bf: () => l, ZP: () => i });
            var a = t(941978);
            const l = "https://abs.twimg.com/sticky/animations/like.4.json";
            class r extends a.C {
                check(e) {
                    return super.check(e ?? l);
                }
            }
            const i = new r();
        },
        748138: (e, n, t) => {
            t.r(n), t.d(n, { default: () => o });
            var a = t(202784),
                l = t(890601),
                r = t(783427),
                i = t(347101);
            const s = (e = {}) => {
                const { direction: n } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout.769d82aa.js.map
