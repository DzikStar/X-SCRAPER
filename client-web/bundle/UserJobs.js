"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs", "icons/IconChevronDown-js"],
    {
        42508: (e, l, a) => {
            a.d(l, { Z: () => n });
            const n = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, l, a) => {
            a.d(l, { ZP: () => t, n5: () => i });
            var n = a(42508);
            const t = ({ displaySensitiveMedia: e, isNotFound: l, isSuspended: a, isWithheld: n, user: t, userProfileInterstitialType: i, viewerUserId: s }) => {
                    const o = !!s && s === t.id_str,
                        c = t.blocked_by,
                        u = t.blocking,
                        d = r({ displaySensitiveMedia: e, isOwnProfile: o, user: t, userProfileInterstitialType: i }),
                        m = (o || !n) && !a;
                    return { avatar: o || (!d && !l && !a && !n), badges: o || !n, description: o || (!u && !c && !d && !a && !n), followButton: !(o || c || d || l || a || n), followersYouKnow: !o && !c && !u && !d && !l && !a && !n && (t.following || !t.protected), followIndicator: !n, fullName: m, label: m, stats: o || (!c && !d && !a && !n), subscriptionsCount: o || !t.has_hidden_subscriptions_on_profile };
                },
                r = ({ displaySensitiveMedia: e, isOwnProfile: l, user: a, userProfileInterstitialType: t }) => (t === n.Z.SensitiveMedia || t === n.Z.OffensiveProfileContent) && !(l || a.following || e),
                i = ({ isOwnProfile: e, isSoftBlockEnabled: l = !1, user: a }) => {
                    const n = a.blocked_by,
                        t = a.protected && !a.following;
                    return l ? e || !t : e || (!t && !n);
                };
        },
        771035: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n = a(202784),
                t = a(107267),
                r = a(371344),
                i = a(956272),
                s = a(666536),
                o = a(943052);
            const c = ({ basePath: e, isCompact: l = !1, resetPageOnSearch: a = !1, styleType: c }) => {
                    const [u, d, m] = (0, o.Z)(),
                        [p, g] = n.useState(u.get("q") || ""),
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
                    const f = n.useCallback(() => {
                            g(""), y.replace(e);
                        }, [e, y]),
                        h = n.useMemo(
                            () =>
                                (0, s.Z)((e) => {
                                    b.current && (e.length > 0 ? (a ? m({ q: e, p: "1" }) : d("q", e)) : f());
                                }, 1e3),
                            [f, d, m, a],
                        ),
                        _ = n.useCallback(
                            (e) => {
                                const { value: l } = e.target;
                                g(l), h(l);
                            },
                            [h],
                        );
                    return n.createElement(r.Z, { Icon: i.default, autoComplete: "off", isCompact: l, leftAligned: !0, onChange: _, onClear: f, placeholder: "Search jobs", styleType: c || "pill", testID: "search-jobs-input", value: p, withClearButton: !0 });
                },
                u = n.memo(c);
        },
        736181: (e, l, a) => {
            a.r(l), a.d(l, { default: () => qe });
            var n = a(202784),
                t = a(325686),
                r = a(457311),
                i = a(823161),
                s = a(731708),
                o = a(601413),
                c = a(392237),
                u = a(111677),
                d = a.n(u),
                m = a(324948),
                p = a(252021),
                g = a(443781),
                y = a(952793),
                b = a(835546),
                f = a(615027),
                h = a(771035),
                _ = a(668214),
                k = a(919022);
            const F = (e, l) => l.match.params.screenName || void 0,
                S = (e, l) => {
                    const a = F(0, l);
                    if (a) return k.ZP.selectByScreenName(e, a);
                },
                E = (0, _.Z)()
                    .propsFromState(() => ({ screenName: F, user: S }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: k.ZP.fetchOneByScreenNameIfNeeded }));
            var v,
                x,
                w,
                Z,
                C,
                T,
                K,
                I,
                L,
                z,
                j,
                P,
                R,
                D,
                N = a(807896),
                U = {
                    fragment: {
                        argumentDefinitions: [(v = { defaultValue: null, kind: "LocalArgument", name: "count" }), (x = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (w = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (Z = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: (C = [
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
                                                (T = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (K = { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null }),
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
                                                                (I = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                (P = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
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
                        argumentDefinitions: [Z, v, x, w],
                        kind: "Operation",
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: C,
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
                                            T,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    K,
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
                                                    I,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiRecruitingOrganizationResults",
                                                        kind: "LinkedField",
                                                        name: "recruiting_organization_results",
                                                        plural: !1,
                                                        selections: [
                                                            I,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    T,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: (R = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, L]),
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
                                                                                            (D = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                            I,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    T,
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
                                                                                                            D,
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
                                                                            { alias: null, args: R, filters: ["search_params"], handle: "slice", key: "UserJobListQueryScreen_consumer_job_search_slice", kind: "LinkedHandle", name: "consumer_job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                                                            D,
                                                                        ],
                                                                        type: "ApiRecruitingOrganization",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            D,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    D,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                            P,
                                        ],
                                        storageKey: null,
                                    },
                                    D,
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
            const $ = q;
            var W = a(277660),
                Q = a.n(W),
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
                ie = a(925873),
                se = a(952428),
                oe = a(457458),
                ce = a(524496),
                ue = a(966886),
                de = a(187669),
                me = a(949626),
                pe = a(856438),
                ge = a(910113),
                ye = a(478414),
                be = a(28135);
            const fe = ({ fallbackName: e, user: l }) => {
                    const a = Q()(ge.fR, l);
                    return a && a.core && a.core.name && a.core.screen_name ? n.createElement(te.Z, { avatarSize: "small", isVerified: a.verification?.verified ?? !1, name: a.core.name, nameSize: "subtext2", screenName: a.core.screen_name, screenNameSize: "subtext2", verifiedType: a.verification?.verified_type ?? void 0, weight: "normal" }) : e ? n.createElement(s.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                he = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                _e = "user-job-list-item-short-description",
                ke = c.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                Fe = ({ allowShare: e = !1, companyName: l, createdAt: a, formattedSalary: r, isFeatured: i, isVerifiedOrg: o, jobId: c, jobTitle: u, location: d, onClick: m, profileId: p, redirectUrl: g, salaryInterval: y, shortDescription: b, user: f, withUserInfo: h = !1 }) => {
                    (0, de.q)(() => {
                        (0, re.fH)((0, ye.yW)(_e, he), _e);
                    });
                    const _ = n.useMemo(() => ({ label: u }), [u]),
                        k = n.useMemo(() => ie.Z.getContentStateFromRaw(b), [b]),
                        F = n.useMemo(() => k && (0, ne.convertFromRaw)(k).hasText(), [k]),
                        S = n.useMemo(() => `/i/jobs/${c}`, [c]);
                    return n.createElement(se.Z, { interactive: !0, link: o ? { pathname: S, external: !0 } : g || "", onClick: m, style: ke.listContainer }, n.createElement(t.Z, { style: ke.items }, n.createElement(s.ZP, { hoverLabel: _, numberOfLines: 2, size: "subtext1", weight: "bold" }, u), h ? n.createElement(fe, { fallbackName: l, user: f }) : null, n.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, d), r ? n.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, oe.M)(r, y)) : null, k && F ? n.createElement(t.Z, { style: ke.shortDescription }, n.createElement(me.Z, { className: _e }, n.createElement(ce.Z, { contentState: k, paragraphFontSizeOverride: he.paragraphFontSize }))) : null), n.createElement(t.Z, { style: ke.lastRow }, n.createElement(t.Z, { style: ke.itemRow }, n.createElement(t.Z, { style: ke.itemRow }, a ? n.createElement(ue.Z, { cutoff: "years", humanReadable: !0, style: ke.timestamp, timestamp: a }) : null, i ? n.createElement(pe.Z, null) : null), e ? n.createElement(be.Z, { iconSize: "small", jobId: c, jobUserId: p }) : null)));
                },
                Se = ae,
                Ee = ({ isViewerFollowsUser: e, item: l, jobId: a, jobIndex: t, profileId: r, user: i }) => {
                    const s = (0, G.z)(),
                        o = Q()(Se, l),
                        c = n.useCallback(() => {
                            s.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: r, items: [{ id: a, position: t, is_viewer_follows_user: e }] } });
                        }, [s, e, a, t, r]),
                        u = Boolean(i?.is_verified_organization);
                    return o && o.title && o.location ? n.createElement(Fe, { allowShare: u, createdAt: o.created_at, formattedSalary: o.formatted_salary, isFeatured: Boolean(o.featured), isVerifiedOrg: i?.is_verified_organization, jobId: a, jobTitle: o.title, location: o.location, onClick: c, profileId: r, redirectUrl: o.redirect_url || "", salaryInterval: o.salary_interval, salaryMax: o.salary_max, salaryMin: o.salary_min, shortDescription: o.short_description, user: i }) : null;
                },
                ve = n.memo(Ee),
                xe = $,
                we = (e) => e.rest_id,
                Ze = ({ fetchNext: e, isViewerFollowsUser: l, profileId: a, slice: t, user: i }) => {
                    const s = (0, G.z)(),
                        o = Q()(xe, t).items_results,
                        c = n.useCallback(
                            (e) => {
                                const t = e.result?.core;
                                return t ? n.createElement(ve, { isViewerFollowsUser: l, item: t, jobId: e.rest_id, jobIndex: o.findIndex((l) => l.rest_id === e.rest_id), profileId: a, user: i }) : null;
                            },
                            [l, o, a, i],
                        ),
                        [u, d] = n.useState([]),
                        m = n.useCallback(
                            (e) => {
                                e.positions.forEach((n, t) => {
                                    var r, i, o;
                                    n.rectangle.getTop() + n.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && n.id && !u.includes(n.id) && (s.scribe({ ...((r = "job_list"), (i = "impression"), (o = "job"), { section: "jobs_list", component: r, element: o, action: i }), data: { ...ee(n.id, t, l, a) } }), d((e) => [...e, n.id]));
                                });
                            },
                            [s, u, l, a],
                        );
                    return o ? (o.length ? n.createElement(Y.Z, { cacheKey: "userJobList", footer: null, identityFunction: we, items: o, onItemsRendered: m, onNearEnd: e, renderer: c }) : n.createElement(r.Z, { header: "No jobs" })) : null;
                },
                Ce = n.memo(Ze),
                Te = { page: "jobs_list", section: "all" },
                Ke = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                Ie = J,
                Le = (e) => {
                    const { query: l, screenName: a, user: t } = e,
                        r = n.useMemo(() => {
                            const e = l?.keyword ? { keyword: l.keyword } : null;
                            return { userId: t.id_str, count: 50, cursor: null, searchParams: e };
                        }, [l, t.id_str]),
                        { data: i, fetchNext: s } = (0, V.C)(Ie, r),
                        o = i?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return o ? n.createElement(H.nO, { namespace: Te }, n.createElement(O.Z, null, n.createElement(n.Fragment, null, n.createElement(B.Z, { title: Ke(a) }), n.createElement(Ce, { fetchNext: s, isViewerFollowsUser: t.following, profileId: t.id_str, slice: o, user: i.data.result })))) : null;
                },
                ze = { context: "UserJobs" },
                je = (e) => {
                    const [l] = (0, M.Z)(),
                        a = n.useMemo(() => ({ keyword: l.get("q") }), [l]);
                    return n.createElement(A.H, { errorConfig: ze }, n.createElement(Le, (0, N.Z)({}, e, { query: a })));
                },
                Pe = n.memo(je);
            var Re = a(138099),
                De = a(154003),
                Ne = a(466818),
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
                    return n.createElement(Ne.ZP, { label: "Job category", onChange: a, options: Ue.pg, testID: "select-team", value: t, withEmptyOption: !0 });
                },
                Be = ({ onDismiss: e, screenName: l }) => n.createElement(Re.Z, { onMaskClick: e, style: Oe.modalContainer, type: "full", withMask: !0 }, n.createElement(t.Z, { style: Oe.modalContent }, n.createElement(s.ZP, null, "Search jobs")), n.createElement(h.Z, { basePath: `/${l}/jobs` }), n.createElement(Je, null), n.createElement(De.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Oe = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Ae = n.memo(Be),
                Me = d().b007440a,
                He = d().c5fb5a1a,
                Ve = c.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                qe = E((e) => {
                    const [l, a] = n.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: c, history: u, screenName: d, user: _ } = e,
                        { viewerUserId: k } = n.useContext(g.rC),
                        F = (0, y.hC)("recruiting_jobs_list_search_enabled"),
                        S = (0, y.hC)("recruiting_job_recommendations_enabled"),
                        E = (0, y.hC)("xprofile_blocked_by_view_enabled");
                    n.useEffect(() => {
                        d && c(d);
                    }, [c, d]);
                    const v = _?.id_str === k,
                        x = !_ || (_ && (0, b.n5)({ isOwnProfile: v, isSoftBlockEnabled: E, user: _ })),
                        w = n.useCallback(() => {
                            a(!1);
                        }, []);
                    if (d) {
                        const e = () => {
                            const e = "Business" === _?.verified_type || "Square" === _?.profile_image_shape ? "square" : "circle";
                            return n.createElement(t.Z, { style: Ve.rightControlContainer }, n.createElement(t.Z, null, _ ? n.createElement(i.default, { screenName: d, shape: e, size: "large", uri: _.profile_image_url_https }) : n.createElement(i.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), n.createElement(t.Z, null, n.createElement(s.ZP, { size: "body", weight: "bold" }, Me), n.createElement(o.Z, { screenName: d, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return x ? n.createElement(n.Fragment, null, n.createElement(p.Z, { backLocation: "/", history: u, primaryContent: _ ? (!_?.protected || _?.following || v ? n.createElement(n.Fragment, null, F && d ? n.createElement(t.Z, { style: Ve.rightControlContainer }, n.createElement(t.Z, { style: Ve.searchContainer }, n.createElement(h.Z, { basePath: `/${d}/jobs`, styleType: "selection" }))) : null, n.createElement(Pe, { screenName: d, user: _ })) : n.createElement(r.Z, { header: He })) : null, primaryContentLabel: Me, sidebarContent: S ? n.createElement(t.Z, { style: Ve.sidebarRoot }, n.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), l ? n.createElement(Ae, { onDismiss: w, screenName: d }) : null) : n.createElement(f.Z, { to: `/${d}` });
                    }
                    return null;
                });
        },
        466818: (e, l, a) => {
            a.d(l, { ZP: () => f });
            var n = a(202784),
                t = a(325686),
                r = a(487552),
                i = a(302752),
                s = a(183806),
                o = a(731708),
                c = a(950822),
                u = a(224162),
                d = a(392237);
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
                    const { "aria-describedby": e, disabled: l, errorText: a, hasError: c, helperText: g, options: y, style: f, testID: h, value: _, withEmptyOption: k } = this.props,
                        { isFocused: F } = this.state,
                        S = o.ZP.getLanguage(),
                        E = void 0 === c ? !!a : c,
                        v = new Set();
                    a && v.add(this._errorID), e && v.add(e), g && v.add(this._helperID);
                    const x = v.size ? [...v].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(u.ZP.Consumer, null, ({ direction: e }) => {
                            const o = "ja" === S ? d.default.theme.fontFamilies.japan : "rtl" === e || i.Z.isLocaleRTL(S) ? d.default.theme.fontFamilies.rtl : d.default.theme.fontFamilies.normal;
                            return n.createElement(
                                t.Z,
                                { style: [s.Z.border, b.container, l && s.Z.disabled, F && s.Z.focusedBorderValid, E && s.Z.invalidBorderColor, F && E && s.Z.focusedBorderInvalid, f] },
                                this._renderLabel(),
                                n.createElement(
                                    m,
                                    { "aria-describedby": x, "aria-invalid": E, "aria-labelledby": this._labelID, disabled: l, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: o }, l && s.Z.disabled], testID: h || "", value: _ },
                                    k ? n.createElement(p, { disabled: !0, style: b.option, value: "" }) : null,
                                    y.map((e) => {
                                        const { disabled: l, label: a, value: t } = e;
                                        return n.createElement(p, { disabled: l, key: `${a}-${t}`, style: b.option, value: t }, a);
                                    }),
                                ),
                                n.createElement(r.default, { style: [b.dropdownCaret, F && s.Z.validColor, !(!c && !a) && s.Z.invalidColor] }),
                            );
                        }),
                        g ? this._renderHelperText() : null,
                        E && a ? this._renderErrorText() : null,
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
            const b = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                f = y;
        },
        280278: (e, l, a) => {
            a.d(l, { ZP: () => y });
            var n = a(202784),
                t = a(325686),
                r = a(827515),
                i = a(461756),
                s = a(731708),
                o = a(392237);
            const c = "up",
                u = "down",
                d = (e, l, a) => {
                    a((a) => {
                        const n = (0, r.Z)(e) ? (e > (a.count || 0) ? c : u) : c;
                        return { ...a, count: e, oldText: a.text, pendingCount: null, pendingText: null, text: l, transitionDirection: n };
                    });
                },
                m = {};
            [c, u].forEach((e) => {
                const l = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: l, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: l } };
            });
            const p = { position: "absolute" },
                g = o.default.create({ root: { overflow: "hidden" } }),
                y = (e) => {
                    const { children: l, containerStyle: a, count: o, ...u } = e,
                        [y, b] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (f.current)
                                if (i.Z.reducedMotionEnabled) b((a) => ({ ...a, oldText: null, text: l, pendingText: null, pendingCount: null, count: e.count }));
                                else if (l !== y.pendingText) {
                                    l === y.text || ((0, r.Z)(e.count) && y.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((a) => ({ ...a, pendingCount: e.count, pendingText: l })), y.animating || d(e.count, l, b));
                                }
                        }, [l]),
                        n.useEffect(() => {
                            f.current &&
                                !1 === y.animating &&
                                (y.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : y.pendingText && d(y.pendingCount, y.pendingText, b));
                        }, [y.animating, y.oldText]),
                        n.useMemo(() => {
                            const e = m[y.transitionDirection],
                                l = y.oldText && !i.Z.reducedMotionEnabled,
                                r = !y.animating && y.oldText && !i.Z.reducedMotionEnabled,
                                o = { ...p, ...(y.animating ? e.post : e.active) },
                                c = { ...(r ? e.pre : e.active) };
                            return n.createElement(
                                t.Z,
                                { style: [g.root, a] },
                                l ? n.createElement("span", { style: o }, n.createElement(s.ZP, u, y.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, l) => {
                                                e && l((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, b),
                                        style: c,
                                    },
                                    n.createElement(s.ZP, u, y.text),
                                ),
                            );
                        }, [a, u, y, f, b])
                    );
                };
        },
        487552: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            var n = a(202784),
                t = a(890601),
                r = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.f1d80a2a.js.map
