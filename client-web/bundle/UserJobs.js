"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs", "icons/IconSparkle-js"],
    {
        42508: (e, l, a) => {
            a.d(l, { Z: () => n });
            const n = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, l, a) => {
            a.d(l, { ZP: () => t, n5: () => s });
            var n = a(42508);
            const t = ({ displaySensitiveMedia: e, isNotFound: l, isSuspended: a, isWithheld: n, user: t, userProfileInterstitialType: s, viewerUserId: i }) => {
                    const o = !!i && i === t.id_str,
                        c = t.blocked_by,
                        d = t.blocking,
                        u = r({ displaySensitiveMedia: e, isOwnProfile: o, user: t, userProfileInterstitialType: s }),
                        m = (o || !n) && !a;
                    return { avatar: o || (!u && !l && !a && !n), badges: o || !n, description: o || (!d && !c && !u && !a && !n), followButton: !(o || c || u || l || a || n), followersYouKnow: !o && !c && !d && !u && !l && !a && !n && (t.following || !t.protected), followIndicator: !n, fullName: m, label: m, stats: o || (!c && !u && !a && !n), subscriptionsCount: o || !t.has_hidden_subscriptions_on_profile };
                },
                r = ({ displaySensitiveMedia: e, isOwnProfile: l, user: a, userProfileInterstitialType: t }) => (t === n.Z.SensitiveMedia || t === n.Z.OffensiveProfileContent) && !(l || a.following || e),
                s = ({ isOwnProfile: e, isSoftBlockEnabled: l = !1, user: a }) => {
                    const n = a.blocked_by,
                        t = a.protected && !a.following;
                    return l ? e || !t : e || (!t && !n);
                };
        },
        771035: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n = a(202784),
                t = a(107267),
                r = a(371344),
                s = a(956272),
                i = a(666536),
                o = a(943052);
            const c = ({ basePath: e, isCompact: l = !1, resetPageOnSearch: a = !1, styleType: c }) => {
                    const [d, u, m] = (0, o.Z)(),
                        [p, g] = n.useState(d.get("q") || ""),
                        y = (0, t.useHistory)(),
                        b = n.useRef(!1);
                    n.useEffect(
                        () => (
                            (b.current = !0),
                            () => {
                                b.current = !1;
                            }
                        ),
                        [],
                    );
                    const h = n.useCallback(() => {
                            g(""), y.replace(e);
                        }, [e, y]),
                        _ = n.useMemo(
                            () =>
                                (0, i.Z)((e) => {
                                    b.current && (e.length > 0 ? (a ? m({ q: e, p: "1" }) : u("q", e)) : h());
                                }, 1e3),
                            [h, u, m, a],
                        ),
                        f = n.useCallback(
                            (e) => {
                                const { value: l } = e.target;
                                g(l), _(l);
                            },
                            [_],
                        );
                    return n.createElement(r.Z, { Icon: s.default, autoComplete: "off", isCompact: l, leftAligned: !0, onChange: f, onClear: h, placeholder: "Search jobs", styleType: c || "pill", testID: "search-jobs-input", value: p, withClearButton: !0 });
                },
                d = n.memo(c);
        },
        736181: (e, l, a) => {
            a.r(l), a.d(l, { default: () => qe });
            var n = a(202784),
                t = a(325686),
                r = a(457311),
                s = a(823161),
                i = a(731708),
                o = a(601413),
                c = a(392237),
                d = a(111677),
                u = a.n(d),
                m = a(324948),
                p = a(252021),
                g = a(443781),
                y = a(952793),
                b = a(835546),
                h = a(615027),
                _ = a(771035),
                f = a(668214),
                k = a(919022);
            const S = (e, l) => l.match.params.screenName || void 0,
                F = (e, l) => {
                    const a = S(0, l);
                    if (a) return k.ZP.selectByScreenName(e, a);
                },
                v = (0, f.Z)()
                    .propsFromState(() => ({ screenName: S, user: F }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: k.ZP.fetchOneByScreenNameIfNeeded }));
            var E,
                C,
                w,
                Z,
                K,
                x,
                I,
                T,
                L,
                z,
                j,
                R,
                P,
                N,
                D = a(807896),
                U = {
                    fragment: {
                        argumentDefinitions: [(E = { defaultValue: null, kind: "LocalArgument", name: "count" }), (C = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (w = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (Z = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: (K = [
                                    { kind: "Variable", name: "rest_id", variableName: "userId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "RequiredField",
                                        field: {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "result",
                                            plural: !1,
                                            selections: [
                                                (x = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (I = { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null }),
                                                        { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                                                        { args: null, kind: "FragmentSpread", name: "JobSearchListItem_user" },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "ApiRecruitingOrganizationResults",
                                                            kind: "LinkedField",
                                                            name: "recruiting_organization_results",
                                                            plural: !1,
                                                            selections: [
                                                                (T = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                                                {
                                                                                    alias: "consumer_job_search",
                                                                                    args: [(L = { kind: "Variable", name: "search_params", variableName: "searchParams" })],
                                                                                    concreteType: "JobSearchSlice",
                                                                                    kind: "LinkedField",
                                                                                    name: "__UserJobListQueryScreen_consumer_job_search_slice_slice",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { args: null, kind: "FragmentSpread", name: "UserJobList_jobsSlice" },
                                                                                        (z = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }),
                                                                                        (j = {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: "JobSliceInfo",
                                                                                            kind: "LinkedField",
                                                                                            name: "slice_info",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "previous_cursor", storageKey: null },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        }),
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            type: "ApiRecruitingOrganization",
                                                                            abstractKey: null,
                                                                        },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                },
                                                (R = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                            ],
                                            storageKey: null,
                                        },
                                        action: "THROW",
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [Z, E, C, w],
                        kind: "Operation",
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: K,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            x,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    I,
                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
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
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                    T,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiRecruitingOrganizationResults",
                                                        kind: "LinkedField",
                                                        name: "recruiting_organization_results",
                                                        plural: !1,
                                                        selections: [
                                                            T,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    x,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: (P = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, L]),
                                                                                concreteType: "JobSearchSlice",
                                                                                kind: "LinkedField",
                                                                                name: "consumer_job_search",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "ApiJobResults",
                                                                                        kind: "LinkedField",
                                                                                        name: "items_results",
                                                                                        plural: !0,
                                                                                        selections: [
                                                                                            (N = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                            T,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    x,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "JobCore",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "core",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "posted_at", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "short_description", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            N,
                                                                                                        ],
                                                                                                        type: "ApiJob",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    z,
                                                                                    j,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: P, filters: ["search_params"], handle: "slice", key: "UserJobListQueryScreen_consumer_job_search_slice", kind: "LinkedHandle", name: "consumer_job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                                                            N,
                                                                        ],
                                                                        type: "ApiRecruitingOrganization",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            N,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    N,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                            R,
                                        ],
                                        storageKey: null,
                                    },
                                    N,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "zNjyUs2MiymdZNSapnTINA", metadata: { sliceInfoPath: ["data", "result", "recruiting_organization_results", "result", "consumer_job_search", "slice_info"] }, name: "UserJobListQueryScreenJobsQuery", operationKind: "query", text: null },
                };
            U.hash = "cf4e007b7ad023aef8084b7aaf88e6a1";
            const J = U;
            a(585488);
            var B = a(38293),
                O = a(652904),
                A = a(736063),
                M = a(943052),
                H = a(293115),
                V = a(127218),
                q = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "UserJobList_jobsSlice",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "ApiJobResults",
                            kind: "LinkedField",
                            name: "items_results",
                            plural: !0,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "UserJobListItem_job" }], storageKey: null }], type: "ApiJob", abstractKey: null }], storageKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "JobSearchSlice",
                    abstractKey: null,
                    hash: "a688905aa4e96a202044a60f562fa122",
                };
            const W = q;
            var $ = a(277660),
                Q = a.n($),
                Y = a(965245),
                G = a(725516);
            const X = (e, l, a) => ({ id: e, position: l, is_viewer_follows_user: a }),
                ee = (e, l, a, n) => ({ profile_id: n, items: [X(e, l, a)] });
            var le = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserJobListItem_job",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "posted_at", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "short_description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                ],
                type: "JobCore",
                abstractKey: null,
                hash: "0e4f5949b9df9ad17952651c89f85a17",
            };
            const ae = le;
            var ne = a(301503),
                te = a(366635),
                re = a(989272),
                se = a(925873),
                ie = a(952428),
                oe = a(457458),
                ce = a(524496),
                de = a(966886),
                ue = a(187669),
                me = a(949626),
                pe = a(856438),
                ge = a(549599),
                ye = a(478414),
                be = a(28135);
            const he = ({ fallbackName: e, user: l }) => {
                    const a = Q()(ge.fR, l);
                    return a && a.core && a.core.name && a.core.screen_name ? n.createElement(te.Z, { avatarSize: "small", isVerified: a.verification?.verified ?? !1, name: a.core.name, nameSize: "subtext2", screenName: a.core.screen_name, screenNameSize: "subtext2", verifiedType: a.verification?.verified_type ?? void 0, weight: "normal" }) : e ? n.createElement(i.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                _e = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                fe = "user-job-list-item-short-description",
                ke = c.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                Se = ({ allowShare: e = !1, companyName: l, createdAt: a, formattedSalary: r, isFeatured: s, isVerifiedOrg: o, jobId: c, jobTitle: d, location: u, onClick: m, profileId: p, redirectUrl: g, salaryInterval: y, shortDescription: b, user: h, withUserInfo: _ = !1 }) => {
                    (0, ue.q)(() => {
                        (0, re.fH)((0, ye.yW)(fe, _e), fe);
                    });
                    const f = n.useMemo(() => ({ label: d }), [d]),
                        k = n.useMemo(() => se.Z.getContentStateFromRaw(b), [b]),
                        S = n.useMemo(() => k && (0, ne.convertFromRaw)(k).hasText(), [k]),
                        F = n.useMemo(() => `/i/jobs/${c}`, [c]);
                    return n.createElement(ie.Z, { interactive: !0, link: o ? { pathname: F, external: !0 } : g || "", onClick: m, style: ke.listContainer }, n.createElement(t.Z, { style: ke.items }, n.createElement(i.ZP, { hoverLabel: f, numberOfLines: 2, size: "subtext1", weight: "bold" }, d), _ ? n.createElement(he, { fallbackName: l, user: h }) : null, n.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, u), r ? n.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, oe.M)(r, y)) : null, k && S ? n.createElement(t.Z, { style: ke.shortDescription }, n.createElement(me.Z, { className: fe }, n.createElement(ce.Z, { contentState: k, paragraphFontSizeOverride: _e.paragraphFontSize }))) : null), n.createElement(t.Z, { style: ke.lastRow }, n.createElement(t.Z, { style: ke.itemRow }, n.createElement(t.Z, { style: ke.itemRow }, a ? n.createElement(de.Z, { cutoff: "years", humanReadable: !0, style: ke.timestamp, timestamp: a }) : null, s ? n.createElement(pe.Z, null) : null), e ? n.createElement(be.Z, { iconSize: "small", jobId: c, jobUserId: p }) : null)));
                },
                Fe = ae,
                ve = ({ isViewerFollowsUser: e, item: l, jobId: a, jobIndex: t, profileId: r, user: s }) => {
                    const i = (0, G.z)(),
                        o = Q()(Fe, l),
                        c = n.useCallback(() => {
                            i.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: r, items: [{ id: a, position: t, is_viewer_follows_user: e }] } });
                        }, [i, e, a, t, r]),
                        d = Boolean(s?.is_verified_organization);
                    return o && o.title && o.location ? n.createElement(Se, { allowShare: d, createdAt: o.created_at, formattedSalary: o.formatted_salary, isFeatured: Boolean(o.featured), isVerifiedOrg: s?.is_verified_organization, jobId: a, jobTitle: o.title, location: o.location, onClick: c, profileId: r, redirectUrl: o.redirect_url || "", salaryInterval: o.salary_interval, salaryMax: o.salary_max, salaryMin: o.salary_min, shortDescription: o.short_description, user: s }) : null;
                },
                Ee = n.memo(ve),
                Ce = W,
                we = (e) => e.rest_id,
                Ze = ({ fetchNext: e, isViewerFollowsUser: l, profileId: a, slice: t, user: s }) => {
                    const i = (0, G.z)(),
                        o = Q()(Ce, t).items_results,
                        c = n.useCallback(
                            (e) => {
                                const t = e.result?.core;
                                return t ? n.createElement(Ee, { isViewerFollowsUser: l, item: t, jobId: e.rest_id, jobIndex: o.findIndex((l) => l.rest_id === e.rest_id), profileId: a, user: s }) : null;
                            },
                            [l, o, a, s],
                        ),
                        [d, u] = n.useState([]),
                        m = n.useCallback(
                            (e) => {
                                e.positions.forEach((n, t) => {
                                    var r, s, o;
                                    n.rectangle.getTop() + n.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && n.id && !d.includes(n.id) && (i.scribe({ ...((r = "job_list"), (s = "impression"), (o = "job"), { section: "jobs_list", component: r, element: o, action: s }), data: { ...ee(n.id, t, l, a) } }), u((e) => [...e, n.id]));
                                });
                            },
                            [i, d, l, a],
                        );
                    return o ? (o.length ? n.createElement(Y.Z, { cacheKey: "userJobList", footer: null, identityFunction: we, items: o, onItemsRendered: m, onNearEnd: e, renderer: c }) : n.createElement(r.Z, { header: "No jobs" })) : null;
                },
                Ke = n.memo(Ze),
                xe = { page: "jobs_list", section: "all" },
                Ie = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                Te = J,
                Le = (e) => {
                    const { query: l, screenName: a, user: t } = e,
                        r = n.useMemo(() => {
                            const e = l?.keyword ? { keyword: l.keyword } : null;
                            return { userId: t.id_str, count: 50, cursor: null, searchParams: e };
                        }, [l, t.id_str]),
                        { data: s, fetchNext: i } = (0, V.C)(Te, r),
                        o = s?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return o ? n.createElement(H.nO, { namespace: xe }, n.createElement(O.Z, null, n.createElement(n.Fragment, null, n.createElement(B.Z, { title: Ie(a) }), n.createElement(Ke, { fetchNext: i, isViewerFollowsUser: t.following, profileId: t.id_str, slice: o, user: s.data.result })))) : null;
                },
                ze = { context: "UserJobs" },
                je = (e) => {
                    const [l] = (0, M.Z)(),
                        a = n.useMemo(() => ({ keyword: l.get("q") }), [l]);
                    return n.createElement(A.H, { errorConfig: ze }, n.createElement(Le, (0, D.Z)({}, e, { query: a })));
                },
                Re = n.memo(je);
            var Pe = a(138099),
                Ne = a(154003),
                De = a(466818),
                Ue = a(985124);
            const Je = () => {
                    const [e, l] = (0, M.Z)(),
                        a = n.useCallback(
                            (e, a) => {
                                l("t", e);
                            },
                            [l],
                        ),
                        t = n.useMemo(() => e.get("t") ?? "", [e]);
                    return n.createElement(De.ZP, { label: "Job category", onChange: a, options: Ue.pg, testID: "select-team", value: t, withEmptyOption: !0 });
                },
                Be = ({ onDismiss: e, screenName: l }) => n.createElement(Pe.Z, { onMaskClick: e, style: Oe.modalContainer, type: "full", withMask: !0 }, n.createElement(t.Z, { style: Oe.modalContent }, n.createElement(i.ZP, null, "Search jobs")), n.createElement(_.Z, { basePath: `/${l}/jobs` }), n.createElement(Je, null), n.createElement(Ne.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Oe = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Ae = n.memo(Be),
                Me = u().b007440a,
                He = u().c5fb5a1a,
                Ve = c.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                qe = v((e) => {
                    const [l, a] = n.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: c, history: d, screenName: u, user: f } = e,
                        { viewerUserId: k } = n.useContext(g.rC),
                        S = (0, y.hC)("recruiting_jobs_list_search_enabled"),
                        F = (0, y.hC)("recruiting_job_recommendations_enabled"),
                        v = (0, y.hC)("xprofile_blocked_by_view_enabled");
                    n.useEffect(() => {
                        u && c(u);
                    }, [c, u]);
                    const E = f?.id_str === k,
                        C = !f || (f && (0, b.n5)({ isOwnProfile: E, isSoftBlockEnabled: v, user: f })),
                        w = n.useCallback(() => {
                            a(!1);
                        }, []);
                    if (u) {
                        const e = () => {
                            const e = "Business" === f?.verified_type || "Square" === f?.profile_image_shape ? "square" : "circle";
                            return n.createElement(t.Z, { style: Ve.rightControlContainer }, n.createElement(t.Z, null, f ? n.createElement(s.default, { screenName: u, shape: e, size: "large", uri: f.profile_image_url_https }) : n.createElement(s.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), n.createElement(t.Z, null, n.createElement(i.ZP, { size: "body", weight: "bold" }, Me), n.createElement(o.Z, { screenName: u, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return C ? n.createElement(n.Fragment, null, n.createElement(p.Z, { backLocation: "/", history: d, primaryContent: f ? (!f?.protected || f?.following || E ? n.createElement(n.Fragment, null, S && u ? n.createElement(t.Z, { style: Ve.rightControlContainer }, n.createElement(t.Z, { style: Ve.searchContainer }, n.createElement(_.Z, { basePath: `/${u}/jobs`, styleType: "selection" }))) : null, n.createElement(Re, { screenName: u, user: f })) : n.createElement(r.Z, { header: He })) : null, primaryContentLabel: Me, sidebarContent: F ? n.createElement(t.Z, { style: Ve.sidebarRoot }, n.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), l ? n.createElement(Ae, { onDismiss: w, screenName: u }) : null) : n.createElement(h.Z, { to: `/${u}` });
                    }
                    return null;
                });
        },
        466818: (e, l, a) => {
            a.d(l, { ZP: () => h });
            var n = a(202784),
                t = a(325686),
                r = a(487552),
                s = a(302752),
                i = a(183806),
                o = a(731708),
                c = a(950822),
                d = a(224162),
                u = a(392237);
            const m = n.forwardRef((e, l) => (0, c.Z)("select", { ...e, ref: l })),
                p = (e) => (0, c.Z)("option", e);
            let g = 1;
            class y extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = n.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: l, withEmptyOption: a } = this.props,
                                { selectedIndex: n, value: t } = e.target;
                            l && l(t, n - (a ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: l } = this.props;
                            this.setState({ isFocused: !1 }), l && l();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: l } = this.props;
                            this.setState({ isFocused: !0 }), l && l();
                        }),
                        (this._id = `SELECTOR_${g}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (g += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: l, errorText: a, hasError: c, helperText: g, options: y, style: h, testID: _, value: f, withEmptyOption: k } = this.props,
                        { isFocused: S } = this.state,
                        F = o.ZP.getLanguage(),
                        v = void 0 === c ? !!a : c,
                        E = new Set();
                    a && E.add(this._errorID), e && E.add(e), g && E.add(this._helperID);
                    const C = E.size ? [...E].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const o = "ja" === F ? u.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(F) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return n.createElement(
                                t.Z,
                                { style: [i.Z.border, b.container, l && i.Z.disabled, S && i.Z.focusedBorderValid, v && i.Z.invalidBorderColor, S && v && i.Z.focusedBorderInvalid, h] },
                                this._renderLabel(),
                                n.createElement(
                                    m,
                                    { "aria-describedby": C, "aria-invalid": v, "aria-labelledby": this._labelID, disabled: l, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: o }, l && i.Z.disabled], testID: _ || "", value: f },
                                    k ? n.createElement(p, { disabled: !0, style: b.option, value: "" }) : null,
                                    y.map((e) => {
                                        const { disabled: l, label: a, value: t } = e;
                                        return n.createElement(p, { disabled: l, key: `${a}-${t}`, style: b.option, value: t }, a);
                                    }),
                                ),
                                n.createElement(r.default, { style: [b.dropdownCaret, S && i.Z.validColor, !(!c && !a) && i.Z.invalidColor] }),
                            );
                        }),
                        g ? this._renderHelperText() : null,
                        v && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: l, label: a } = this.props,
                        { isFocused: t } = this.state;
                    return n.createElement(o.ZP, { color: l || e ? "red500" : t ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, a);
                }
                _renderHelperText() {
                    return n.createElement(t.Z, { "aria-live": "polite" }, n.createElement(o.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return n.createElement(t.Z, { "aria-live": "polite" }, n.createElement(o.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            y.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                h = y;
        },
        262009: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                s = a(347101);
            const i = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: l });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.931ed73a.js.map
