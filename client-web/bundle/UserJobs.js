"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs"],
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
                        u = t.blocking,
                        d = r({ displaySensitiveMedia: e, isOwnProfile: o, user: t, userProfileInterstitialType: s }),
                        m = (o || !n) && !a;
                    return { avatar: o || (!d && !l && !a && !n), badges: o || !n, description: o || (!u && !c && !d && !a && !n), followButton: !(o || c || d || l || a || n), followersYouKnow: !o && !c && !u && !d && !l && !a && !n && (t.following || !t.protected), followIndicator: !n, fullName: m, label: m, stats: o || (!c && !d && !a && !n), subscriptionsCount: o || !t.has_hidden_subscriptions_on_profile };
                },
                r = ({ displaySensitiveMedia: e, isOwnProfile: l, user: a, userProfileInterstitialType: t }) => (t === n.Z.SensitiveMedia || t === n.Z.OffensiveProfileContent) && !(l || a.following || e),
                s = ({ isOwnProfile: e, isSoftBlockEnabled: l = !1, user: a }) => {
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
                s = a(956272),
                i = a(666536),
                o = a(943052);
            const c = ({ basePath: e, isCompact: l = !1, resetPageOnSearch: a = !1, styleType: c }) => {
                    const [u, d, m] = (0, o.Z)(),
                        [p, g] = n.useState(u.get("q") || ""),
                        y = (0, t.useHistory)(),
                        f = n.useRef(!1);
                    n.useEffect(
                        () => (
                            (f.current = !0),
                            () => {
                                f.current = !1;
                            }
                        ),
                        [],
                    );
                    const b = n.useCallback(() => {
                            g(""), y.replace(e);
                        }, [e, y]),
                        _ = n.useMemo(
                            () =>
                                (0, i.Z)((e) => {
                                    f.current && (e.length > 0 ? (a ? m({ q: e, p: "1" }) : d("q", e)) : b());
                                }, 1e3),
                            [b, d, m, a],
                        ),
                        h = n.useCallback(
                            (e) => {
                                const { value: l } = e.target;
                                g(l), _(l);
                            },
                            [_],
                        );
                    return n.createElement(r.Z, { Icon: s.default, autoComplete: "off", isCompact: l, leftAligned: !0, onChange: h, onClear: b, placeholder: "Search jobs", styleType: c || "pill", testID: "search-jobs-input", value: p, withClearButton: !0 });
                },
                u = n.memo(c);
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
                u = a(332920),
                d = a.n(u),
                m = a(324948),
                p = a(252021),
                g = a(443781),
                y = a(952793),
                f = a(835546),
                b = a(615027),
                _ = a(771035),
                h = a(668214),
                k = a(919022);
            const S = (e, l) => l.match.params.screenName || void 0,
                F = (e, l) => {
                    const a = S(0, l);
                    if (a) return k.ZP.selectByScreenName(e, a);
                },
                E = (0, h.Z)()
                    .propsFromState(() => ({ screenName: S, user: F }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: k.ZP.fetchOneByScreenNameIfNeeded }));
            var x,
                v,
                C,
                w,
                Z,
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
                        argumentDefinitions: [(x = { defaultValue: null, kind: "LocalArgument", name: "count" }), (v = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (C = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (w = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: (Z = [
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
                        argumentDefinitions: [w, x, v, C],
                        kind: "Operation",
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: Z,
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
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                    params: { id: "G2XRfcXMILmbhcMSSMTMGQ", metadata: { sliceInfoPath: ["data", "result", "recruiting_organization_results", "result", "consumer_job_search", "slice_info"] }, name: "UserJobListQueryScreenJobsQuery", operationKind: "query", text: null },
                };
            U.hash = "cf4e007b7ad023aef8084b7aaf88e6a1";
            const J = U;
            a(585488);
            var B = a(38293),
                M = a(652904),
                O = a(736063),
                A = a(943052),
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
                G = a(965245),
                X = a(725516);
            const Y = (e, l, a) => ({ id: e, position: l, is_viewer_follows_user: a }),
                ee = (e, l, a, n) => ({ profile_id: n, items: [Y(e, l, a)] });
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
                ue = a(966886),
                de = a(187669),
                me = a(949626),
                pe = a(856438),
                ge = a(549599),
                ye = a(478414),
                fe = a(28135);
            const be = ({ fallbackName: e, user: l }) => {
                    const a = Q()(ge.fR, l);
                    return a && a.legacy && a.legacy.name && a.legacy.screen_name ? n.createElement(te.Z, { avatarSize: "small", isVerified: a.verification?.verified ?? !1, name: a.legacy.name, nameSize: "subtext2", screenName: a.legacy.screen_name, screenNameSize: "subtext2", verifiedType: a.verification?.verified_type ?? void 0, weight: "normal" }) : e ? n.createElement(i.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                _e = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                he = "user-job-list-item-short-description",
                ke = c.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                Se = ({ allowShare: e = !1, companyName: l, createdAt: a, formattedSalary: r, isFeatured: s, isVerifiedOrg: o, jobId: c, jobTitle: u, location: d, onClick: m, profileId: p, redirectUrl: g, salaryInterval: y, shortDescription: f, user: b, withUserInfo: _ = !1 }) => {
                    (0, de.q)(() => {
                        (0, re.fH)((0, ye.yW)(he, _e), he);
                    });
                    const h = n.useMemo(() => ({ label: u }), [u]),
                        k = n.useMemo(() => se.Z.getContentStateFromRaw(f), [f]),
                        S = n.useMemo(() => k && (0, ne.convertFromRaw)(k).hasText(), [k]),
                        F = n.useMemo(() => `/i/jobs/${c}`, [c]);
                    return n.createElement(ie.Z, { interactive: !0, link: o ? { pathname: F, external: !0 } : g || "", onClick: m, style: ke.listContainer }, n.createElement(t.Z, { style: ke.items }, n.createElement(i.ZP, { hoverLabel: h, numberOfLines: 2, size: "subtext1", weight: "bold" }, u), _ ? n.createElement(be, { fallbackName: l, user: b }) : null, n.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, d), r ? n.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, oe.M)(r, y)) : null, k && S ? n.createElement(t.Z, { style: ke.shortDescription }, n.createElement(me.Z, { className: he }, n.createElement(ce.Z, { contentState: k, paragraphFontSizeOverride: _e.paragraphFontSize }))) : null), n.createElement(t.Z, { style: ke.lastRow }, n.createElement(t.Z, { style: ke.itemRow }, n.createElement(t.Z, { style: ke.itemRow }, a ? n.createElement(ue.Z, { cutoff: "years", humanReadable: !0, style: ke.timestamp, timestamp: a }) : null, s ? n.createElement(pe.Z, null) : null), e ? n.createElement(fe.Z, { iconSize: "small", jobId: c, jobUserId: p }) : null)));
                },
                Fe = ae,
                Ee = ({ isViewerFollowsUser: e, item: l, jobId: a, jobIndex: t, profileId: r, user: s }) => {
                    const i = (0, X.z)(),
                        o = Q()(Fe, l),
                        c = n.useCallback(() => {
                            i.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: r, items: [{ id: a, position: t, is_viewer_follows_user: e }] } });
                        }, [i, e, a, t, r]),
                        u = Boolean(s?.is_verified_organization);
                    return o && o.title && o.location ? n.createElement(Se, { allowShare: u, createdAt: o.created_at, formattedSalary: o.formatted_salary, isFeatured: Boolean(o.featured), isVerifiedOrg: s?.is_verified_organization, jobId: a, jobTitle: o.title, location: o.location, onClick: c, profileId: r, redirectUrl: o.redirect_url || "", salaryInterval: o.salary_interval, salaryMax: o.salary_max, salaryMin: o.salary_min, shortDescription: o.short_description, user: s }) : null;
                },
                xe = n.memo(Ee),
                ve = $,
                Ce = (e) => e.rest_id,
                we = ({ fetchNext: e, isViewerFollowsUser: l, profileId: a, slice: t, user: s }) => {
                    const i = (0, X.z)(),
                        o = Q()(ve, t).items_results,
                        c = n.useCallback(
                            (e) => {
                                const t = e.result?.core;
                                return t ? n.createElement(xe, { isViewerFollowsUser: l, item: t, jobId: e.rest_id, jobIndex: o.findIndex((l) => l.rest_id === e.rest_id), profileId: a, user: s }) : null;
                            },
                            [l, o, a, s],
                        ),
                        [u, d] = n.useState([]),
                        m = n.useCallback(
                            (e) => {
                                e.positions.forEach((n, t) => {
                                    var r, s, o;
                                    n.rectangle.getTop() + n.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && n.id && !u.includes(n.id) && (i.scribe({ ...((r = "job_list"), (s = "impression"), (o = "job"), { section: "jobs_list", component: r, element: o, action: s }), data: { ...ee(n.id, t, l, a) } }), d((e) => [...e, n.id]));
                                });
                            },
                            [i, u, l, a],
                        );
                    return o ? (o.length ? n.createElement(G.Z, { cacheKey: "userJobList", footer: null, identityFunction: Ce, items: o, onItemsRendered: m, onNearEnd: e, renderer: c }) : n.createElement(r.Z, { header: "No jobs" })) : null;
                },
                Ze = n.memo(we),
                Te = { page: "jobs_list", section: "all" },
                Ke = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                Ie = J,
                Le = (e) => {
                    const { query: l, screenName: a, user: t } = e,
                        r = n.useMemo(() => {
                            const e = l?.keyword ? { keyword: l.keyword } : null;
                            return { userId: t.id_str, count: 50, cursor: null, searchParams: e };
                        }, [l, t.id_str]),
                        { data: s, fetchNext: i } = (0, V.C)(Ie, r),
                        o = s?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return o ? n.createElement(H.nO, { namespace: Te }, n.createElement(M.Z, null, n.createElement(n.Fragment, null, n.createElement(B.Z, { title: Ke(a) }), n.createElement(Ze, { fetchNext: i, isViewerFollowsUser: t.following, profileId: t.id_str, slice: o, user: s.data.result })))) : null;
                },
                ze = { context: "UserJobs" },
                je = (e) => {
                    const [l] = (0, A.Z)(),
                        a = n.useMemo(() => ({ keyword: l.get("q") }), [l]);
                    return n.createElement(O.H, { errorConfig: ze }, n.createElement(Le, (0, N.Z)({}, e, { query: a })));
                },
                Pe = n.memo(je);
            var Re = a(138099),
                De = a(154003),
                Ne = a(466818),
                Ue = a(985124);
            const Je = () => {
                    const [e, l] = (0, A.Z)(),
                        a = n.useCallback(
                            (e, a) => {
                                l("t", e);
                            },
                            [l],
                        ),
                        t = n.useMemo(() => e.get("t") ?? "", [e]);
                    return n.createElement(Ne.ZP, { label: "Job category", onChange: a, options: Ue.pg, testID: "select-team", value: t, withEmptyOption: !0 });
                },
                Be = ({ onDismiss: e, screenName: l }) => n.createElement(Re.Z, { onMaskClick: e, style: Me.modalContainer, type: "full", withMask: !0 }, n.createElement(t.Z, { style: Me.modalContent }, n.createElement(i.ZP, null, "Search jobs")), n.createElement(_.Z, { basePath: `/${l}/jobs` }), n.createElement(Je, null), n.createElement(De.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Me = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Oe = n.memo(Be),
                Ae = d().b007440a,
                He = d().c5fb5a1a,
                Ve = c.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                qe = E((e) => {
                    const [l, a] = n.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: c, history: u, screenName: d, user: h } = e,
                        { viewerUserId: k } = n.useContext(g.rC),
                        S = (0, y.hC)("recruiting_jobs_list_search_enabled"),
                        F = (0, y.hC)("recruiting_job_recommendations_enabled"),
                        E = (0, y.hC)("xprofile_blocked_by_view_enabled");
                    n.useEffect(() => {
                        d && c(d);
                    }, [c, d]);
                    const x = h?.id_str === k,
                        v = !h || (h && (0, f.n5)({ isOwnProfile: x, isSoftBlockEnabled: E, user: h })),
                        C = n.useCallback(() => {
                            a(!1);
                        }, []);
                    if (d) {
                        const e = () => {
                            const e = "Business" === h?.verified_type || "Square" === h?.profile_image_shape ? "square" : "circle";
                            return n.createElement(t.Z, { style: Ve.rightControlContainer }, n.createElement(t.Z, null, h ? n.createElement(s.default, { screenName: d, shape: e, size: "large", uri: h.profile_image_url_https }) : n.createElement(s.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), n.createElement(t.Z, null, n.createElement(i.ZP, { size: "body", weight: "bold" }, Ae), n.createElement(o.Z, { screenName: d, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return v ? n.createElement(n.Fragment, null, n.createElement(p.Z, { backLocation: "/", history: u, primaryContent: h ? (!h?.protected || h?.following || x ? n.createElement(n.Fragment, null, S && d ? n.createElement(t.Z, { style: Ve.rightControlContainer }, n.createElement(t.Z, { style: Ve.searchContainer }, n.createElement(_.Z, { basePath: `/${d}/jobs`, styleType: "selection" }))) : null, n.createElement(Pe, { screenName: d, user: h })) : n.createElement(r.Z, { header: He })) : null, primaryContentLabel: Ae, sidebarContent: F ? n.createElement(t.Z, { style: Ve.sidebarRoot }, n.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), l ? n.createElement(Oe, { onDismiss: C, screenName: d }) : null) : n.createElement(b.Z, { to: `/${d}` });
                    }
                    return null;
                });
        },
        466818: (e, l, a) => {
            a.d(l, { ZP: () => b });
            var n = a(202784),
                t = a(325686),
                r = a(487552),
                s = a(302752),
                i = a(183806),
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
                    const { "aria-describedby": e, disabled: l, errorText: a, hasError: c, helperText: g, options: y, style: b, testID: _, value: h, withEmptyOption: k } = this.props,
                        { isFocused: S } = this.state,
                        F = o.ZP.getLanguage(),
                        E = void 0 === c ? !!a : c,
                        x = new Set();
                    a && x.add(this._errorID), e && x.add(e), g && x.add(this._helperID);
                    const v = x.size ? [...x].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(u.ZP.Consumer, null, ({ direction: e }) => {
                            const o = "ja" === F ? d.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(F) ? d.default.theme.fontFamilies.rtl : d.default.theme.fontFamilies.normal;
                            return n.createElement(
                                t.Z,
                                { style: [i.Z.border, f.container, l && i.Z.disabled, S && i.Z.focusedBorderValid, E && i.Z.invalidBorderColor, S && E && i.Z.focusedBorderInvalid, b] },
                                this._renderLabel(),
                                n.createElement(
                                    m,
                                    { "aria-describedby": v, "aria-invalid": E, "aria-labelledby": this._labelID, disabled: l, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [f.select, { fontFamily: o }, l && i.Z.disabled], testID: _ || "", value: h },
                                    k ? n.createElement(p, { disabled: !0, style: f.option, value: "" }) : null,
                                    y.map((e) => {
                                        const { disabled: l, label: a, value: t } = e;
                                        return n.createElement(p, { disabled: l, key: `${a}-${t}`, style: f.option, value: t }, a);
                                    }),
                                ),
                                n.createElement(r.default, { style: [f.dropdownCaret, S && i.Z.validColor, !(!c && !a) && i.Z.invalidColor] }),
                            );
                        }),
                        g ? this._renderHelperText() : null,
                        E && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: l, label: a } = this.props,
                        { isFocused: t } = this.state;
                    return n.createElement(o.ZP, { color: l || e ? "red500" : t ? "primary" : "gray700", id: this._labelID, role: "label", style: f.label }, a);
                }
                _renderHelperText() {
                    return n.createElement(t.Z, { "aria-live": "polite" }, n.createElement(o.ZP, { color: "gray700", id: this._helperID, style: f.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return n.createElement(t.Z, { "aria-live": "polite" }, n.createElement(o.ZP, { color: "red500", id: this._errorID, style: f.helperText }, this.props.errorText));
                }
            }
            y.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const f = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                b = y;
        },
        280278: (e, l, a) => {
            a.d(l, { ZP: () => y });
            var n = a(202784),
                t = a(325686),
                r = a(827515),
                s = a(461756),
                i = a(731708),
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
                        [y, f] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (b.current)
                                if (s.Z.reducedMotionEnabled) f((a) => ({ ...a, oldText: null, text: l, pendingText: null, pendingCount: null, count: e.count }));
                                else if (l !== y.pendingText) {
                                    l === y.text || ((0, r.Z)(e.count) && y.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((a) => ({ ...a, pendingCount: e.count, pendingText: l })), y.animating || d(e.count, l, f));
                                }
                        }, [l]),
                        n.useEffect(() => {
                            b.current &&
                                !1 === y.animating &&
                                (y.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : y.pendingText && d(y.pendingCount, y.pendingText, f));
                        }, [y.animating, y.oldText]),
                        n.useMemo(() => {
                            const e = m[y.transitionDirection],
                                l = y.oldText && !s.Z.reducedMotionEnabled,
                                r = !y.animating && y.oldText && !s.Z.reducedMotionEnabled,
                                o = { ...p, ...(y.animating ? e.post : e.active) },
                                c = { ...(r ? e.pre : e.active) };
                            return n.createElement(
                                t.Z,
                                { style: [g.root, a] },
                                l ? n.createElement("span", { style: o }, n.createElement(i.ZP, u, y.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, l) => {
                                                e && l((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, f),
                                        style: c,
                                    },
                                    n.createElement(i.ZP, u, y.text),
                                ),
                            );
                        }, [a, u, y, b, f])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.c004303a.js.map
