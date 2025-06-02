"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs"],
    {
        229333: (e, l, a) => {
            a.d(l, { Z: () => u });
            var t = a(202784),
                n = a(466999),
                r = a(325686),
                s = a(392237),
                i = a(111677);
            const o = a.n(i)().e5b0063d;
            let c = 0;
            class d extends t.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: l } = this.props,
                        a = o({ title: l });
                    return t.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, t.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, l), t.createElement(r.Z, { "aria-label": a }, e));
                }
            }
            const u = d;
        },
        414939: (e, l, a) => {
            a.d(l, { Z: () => o });
            var t = a(202784),
                n = a(325686),
                r = a(392237);
            class s extends t.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return t.createElement(n.Z, { style: i.root });
                }
            }
            const i = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                o = s;
        },
        965245: (e, l, a) => {
            a.d(l, { Z: () => o });
            var t = a(807896),
                n = a(202784),
                r = a(229333),
                s = a(414939),
                i = a(334346);
            const o = ({ accessibilityTitle: e, footer: l = n.createElement(s.Z, null), ...a }) => {
                const o = n.createElement(i.C, (0, t.Z)({}, a, { footer: l }));
                return e ? n.createElement(r.Z, { title: e }, o) : o;
            };
        },
        42508: (e, l, a) => {
            a.d(l, { Z: () => t });
            const t = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, l, a) => {
            a.d(l, { ZP: () => n, n5: () => s });
            var t = a(42508);
            const n = ({ displaySensitiveMedia: e, isNotFound: l, isSuspended: a, isWithheld: t, user: n, userProfileInterstitialType: s, viewerUserId: i }) => {
                    const o = !!i && i === n.id_str,
                        c = n.blocked_by,
                        d = n.blocking,
                        u = r({ displaySensitiveMedia: e, isOwnProfile: o, user: n, userProfileInterstitialType: s }),
                        m = (o || !t) && !a;
                    return { avatar: o || (!u && !l && !a && !t), badges: o || !t, description: o || (!d && !c && !u && !a && !t), followButton: !(o || c || u || l || a || t), followersYouKnow: !o && !c && !d && !u && !l && !a && !t && (n.following || !n.protected), followIndicator: !t, fullName: m, label: m, stats: o || (!c && !u && !a && !t), subscriptionsCount: o || !n.has_hidden_subscriptions_on_profile };
                },
                r = ({ displaySensitiveMedia: e, isOwnProfile: l, user: a, userProfileInterstitialType: n }) => (n === t.Z.SensitiveMedia || n === t.Z.OffensiveProfileContent) && !(l || a.following || e),
                s = ({ isOwnProfile: e, isSoftBlockEnabled: l = !1, user: a }) => {
                    const t = a.blocked_by,
                        n = a.protected && !a.following;
                    return l ? e || !n : e || (!n && !t);
                };
        },
        771035: (e, l, a) => {
            a.d(l, { Z: () => d });
            var t = a(202784),
                n = a(107267),
                r = a(371344),
                s = a(956272),
                i = a(666536),
                o = a(943052);
            const c = ({ basePath: e, isCompact: l = !1, resetPageOnSearch: a = !1, styleType: c }) => {
                    const [d, u, m] = (0, o.Z)(),
                        [p, g] = t.useState(d.get("q") || ""),
                        y = (0, n.useHistory)(),
                        b = t.useRef(!1);
                    t.useEffect(
                        () => (
                            (b.current = !0),
                            () => {
                                b.current = !1;
                            }
                        ),
                        [],
                    );
                    const _ = t.useCallback(() => {
                            g(""), y.replace(e);
                        }, [e, y]),
                        h = t.useMemo(
                            () =>
                                (0, i.Z)((e) => {
                                    b.current && (e.length > 0 ? (a ? m({ q: e, p: "1" }) : u("q", e)) : _());
                                }, 1e3),
                            [_, u, m, a],
                        ),
                        f = t.useCallback(
                            (e) => {
                                const { value: l } = e.target;
                                g(l), h(l);
                            },
                            [h],
                        );
                    return t.createElement(r.Z, { Icon: s.default, autoComplete: "off", isCompact: l, leftAligned: !0, onChange: f, onClear: _, placeholder: "Search jobs", styleType: c || "pill", testID: "search-jobs-input", value: p, withClearButton: !0 });
                },
                d = t.memo(c);
        },
        736181: (e, l, a) => {
            a.r(l), a.d(l, { default: () => qe });
            var t = a(202784),
                n = a(325686),
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
                _ = a(615027),
                h = a(771035),
                f = a(668214),
                k = a(919022);
            const F = (e, l) => l.match.params.screenName || void 0,
                S = (e, l) => {
                    const a = F(0, l);
                    if (a) return k.ZP.selectByScreenName(e, a);
                },
                E = (0, f.Z)()
                    .propsFromState(() => ({ screenName: F, user: S }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: k.ZP.fetchOneByScreenNameIfNeeded }));
            var v,
                Z,
                C,
                w,
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
                        argumentDefinitions: [(v = { defaultValue: null, kind: "LocalArgument", name: "count" }), (Z = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (C = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (w = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                        argumentDefinitions: [w, v, Z, C],
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
                H = a(943052),
                M = a(293115),
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
                ee = (e, l, a, t) => ({ profile_id: t, items: [X(e, l, a)] });
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
            var te = a(301503),
                ne = a(366635),
                re = a(989272),
                se = a(925873),
                ie = a(952428),
                oe = a(457458),
                ce = a(524496),
                de = a(966886),
                ue = a(187669),
                me = a(949626),
                pe = a(856438),
                ge = a(910113),
                ye = a(478414),
                be = a(28135);
            const _e = ({ fallbackName: e, user: l }) => {
                    const a = Q()(ge.fR, l);
                    return a && a.core && a.core.name && a.core.screen_name ? t.createElement(ne.Z, { avatarSize: "small", isVerified: a.verification?.verified ?? !1, name: a.core.name, nameSize: "subtext2", screenName: a.core.screen_name, screenNameSize: "subtext2", verifiedType: a.verification?.verified_type ?? void 0, weight: "normal" }) : e ? t.createElement(i.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                he = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                fe = "user-job-list-item-short-description",
                ke = c.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                Fe = ({ allowShare: e = !1, companyName: l, createdAt: a, formattedSalary: r, isFeatured: s, isVerifiedOrg: o, jobId: c, jobTitle: d, location: u, onClick: m, profileId: p, redirectUrl: g, salaryInterval: y, shortDescription: b, user: _, withUserInfo: h = !1 }) => {
                    (0, ue.q)(() => {
                        (0, re.fH)((0, ye.yW)(fe, he), fe);
                    });
                    const f = t.useMemo(() => ({ label: d }), [d]),
                        k = t.useMemo(() => se.Z.getContentStateFromRaw(b), [b]),
                        F = t.useMemo(() => k && (0, te.convertFromRaw)(k).hasText(), [k]),
                        S = t.useMemo(() => `/i/jobs/${c}`, [c]);
                    return t.createElement(ie.Z, { interactive: !0, link: o ? { pathname: S, external: !0 } : g || "", onClick: m, style: ke.listContainer }, t.createElement(n.Z, { style: ke.items }, t.createElement(i.ZP, { hoverLabel: f, numberOfLines: 2, size: "subtext1", weight: "bold" }, d), h ? t.createElement(_e, { fallbackName: l, user: _ }) : null, t.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, u), r ? t.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, oe.M)(r, y)) : null, k && F ? t.createElement(n.Z, { style: ke.shortDescription }, t.createElement(me.Z, { className: fe }, t.createElement(ce.Z, { contentState: k, paragraphFontSizeOverride: he.paragraphFontSize }))) : null), t.createElement(n.Z, { style: ke.lastRow }, t.createElement(n.Z, { style: ke.itemRow }, t.createElement(n.Z, { style: ke.itemRow }, a ? t.createElement(de.Z, { cutoff: "years", humanReadable: !0, style: ke.timestamp, timestamp: a }) : null, s ? t.createElement(pe.Z, null) : null), e ? t.createElement(be.Z, { iconSize: "small", jobId: c, jobUserId: p }) : null)));
                },
                Se = ae,
                Ee = ({ isViewerFollowsUser: e, item: l, jobId: a, jobIndex: n, profileId: r, user: s }) => {
                    const i = (0, G.z)(),
                        o = Q()(Se, l),
                        c = t.useCallback(() => {
                            i.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: r, items: [{ id: a, position: n, is_viewer_follows_user: e }] } });
                        }, [i, e, a, n, r]),
                        d = Boolean(s?.is_verified_organization);
                    return o && o.title && o.location ? t.createElement(Fe, { allowShare: d, createdAt: o.created_at, formattedSalary: o.formatted_salary, isFeatured: Boolean(o.featured), isVerifiedOrg: s?.is_verified_organization, jobId: a, jobTitle: o.title, location: o.location, onClick: c, profileId: r, redirectUrl: o.redirect_url || "", salaryInterval: o.salary_interval, salaryMax: o.salary_max, salaryMin: o.salary_min, shortDescription: o.short_description, user: s }) : null;
                },
                ve = t.memo(Ee),
                Ze = W,
                Ce = (e) => e.rest_id,
                we = ({ fetchNext: e, isViewerFollowsUser: l, profileId: a, slice: n, user: s }) => {
                    const i = (0, G.z)(),
                        o = Q()(Ze, n).items_results,
                        c = t.useCallback(
                            (e) => {
                                const n = e.result?.core;
                                return n ? t.createElement(ve, { isViewerFollowsUser: l, item: n, jobId: e.rest_id, jobIndex: o.findIndex((l) => l.rest_id === e.rest_id), profileId: a, user: s }) : null;
                            },
                            [l, o, a, s],
                        ),
                        [d, u] = t.useState([]),
                        m = t.useCallback(
                            (e) => {
                                e.positions.forEach((t, n) => {
                                    var r, s, o;
                                    t.rectangle.getTop() + t.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && t.id && !d.includes(t.id) && (i.scribe({ ...((r = "job_list"), (s = "impression"), (o = "job"), { section: "jobs_list", component: r, element: o, action: s }), data: { ...ee(t.id, n, l, a) } }), u((e) => [...e, t.id]));
                                });
                            },
                            [i, d, l, a],
                        );
                    return o ? (o.length ? t.createElement(Y.Z, { cacheKey: "userJobList", footer: null, identityFunction: Ce, items: o, onItemsRendered: m, onNearEnd: e, renderer: c }) : t.createElement(r.Z, { header: "No jobs" })) : null;
                },
                Ke = t.memo(we),
                xe = { page: "jobs_list", section: "all" },
                Ie = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                Te = J,
                Le = (e) => {
                    const { query: l, screenName: a, user: n } = e,
                        r = t.useMemo(() => {
                            const e = l?.keyword ? { keyword: l.keyword } : null;
                            return { userId: n.id_str, count: 50, cursor: null, searchParams: e };
                        }, [l, n.id_str]),
                        { data: s, fetchNext: i } = (0, V.C)(Te, r),
                        o = s?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return o ? t.createElement(M.nO, { namespace: xe }, t.createElement(O.Z, null, t.createElement(t.Fragment, null, t.createElement(B.Z, { title: Ie(a) }), t.createElement(Ke, { fetchNext: i, isViewerFollowsUser: n.following, profileId: n.id_str, slice: o, user: s.data.result })))) : null;
                },
                ze = { context: "UserJobs" },
                je = (e) => {
                    const [l] = (0, H.Z)(),
                        a = t.useMemo(() => ({ keyword: l.get("q") }), [l]);
                    return t.createElement(A.H, { errorConfig: ze }, t.createElement(Le, (0, D.Z)({}, e, { query: a })));
                },
                Re = t.memo(je);
            var Pe = a(138099),
                Ne = a(154003),
                De = a(466818),
                Ue = a(985124);
            const Je = () => {
                    const [e, l] = (0, H.Z)(),
                        a = t.useCallback(
                            (e, a) => {
                                l("t", e);
                            },
                            [l],
                        ),
                        n = t.useMemo(() => e.get("t") ?? "", [e]);
                    return t.createElement(De.ZP, { label: "Job category", onChange: a, options: Ue.pg, testID: "select-team", value: n, withEmptyOption: !0 });
                },
                Be = ({ onDismiss: e, screenName: l }) => t.createElement(Pe.Z, { onMaskClick: e, style: Oe.modalContainer, type: "full", withMask: !0 }, t.createElement(n.Z, { style: Oe.modalContent }, t.createElement(i.ZP, null, "Search jobs")), t.createElement(h.Z, { basePath: `/${l}/jobs` }), t.createElement(Je, null), t.createElement(Ne.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Oe = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Ae = t.memo(Be),
                He = u().b007440a,
                Me = u().c5fb5a1a,
                Ve = c.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                qe = E((e) => {
                    const [l, a] = t.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: c, history: d, screenName: u, user: f } = e,
                        { viewerUserId: k } = t.useContext(g.rC),
                        F = (0, y.hC)("recruiting_jobs_list_search_enabled"),
                        S = (0, y.hC)("recruiting_job_recommendations_enabled"),
                        E = (0, y.hC)("xprofile_blocked_by_view_enabled");
                    t.useEffect(() => {
                        u && c(u);
                    }, [c, u]);
                    const v = f?.id_str === k,
                        Z = !f || (f && (0, b.n5)({ isOwnProfile: v, isSoftBlockEnabled: E, user: f })),
                        C = t.useCallback(() => {
                            a(!1);
                        }, []);
                    if (u) {
                        const e = () => {
                            const e = "Business" === f?.verified_type || "Square" === f?.profile_image_shape ? "square" : "circle";
                            return t.createElement(n.Z, { style: Ve.rightControlContainer }, t.createElement(n.Z, null, f ? t.createElement(s.default, { screenName: u, shape: e, size: "large", uri: f.profile_image_url_https }) : t.createElement(s.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), t.createElement(n.Z, null, t.createElement(i.ZP, { size: "body", weight: "bold" }, He), t.createElement(o.Z, { screenName: u, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return Z ? t.createElement(t.Fragment, null, t.createElement(p.Z, { backLocation: "/", history: d, primaryContent: f ? (!f?.protected || f?.following || v ? t.createElement(t.Fragment, null, F && u ? t.createElement(n.Z, { style: Ve.rightControlContainer }, t.createElement(n.Z, { style: Ve.searchContainer }, t.createElement(h.Z, { basePath: `/${u}/jobs`, styleType: "selection" }))) : null, t.createElement(Re, { screenName: u, user: f })) : t.createElement(r.Z, { header: Me })) : null, primaryContentLabel: He, sidebarContent: S ? t.createElement(n.Z, { style: Ve.sidebarRoot }, t.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), l ? t.createElement(Ae, { onDismiss: C, screenName: u }) : null) : t.createElement(_.Z, { to: `/${u}` });
                    }
                    return null;
                });
        },
        466818: (e, l, a) => {
            a.d(l, { ZP: () => _ });
            var t = a(202784),
                n = a(325686),
                r = a(487552),
                s = a(302752),
                i = a(183806),
                o = a(731708),
                c = a(950822),
                d = a(224162),
                u = a(392237);
            const m = t.forwardRef((e, l) => (0, c.Z)("select", { ...e, ref: l })),
                p = (e) => (0, c.Z)("option", e);
            let g = 1;
            class y extends t.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = t.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: l, withEmptyOption: a } = this.props,
                                { selectedIndex: t, value: n } = e.target;
                            l && l(n, t - (a ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: l, errorText: a, hasError: c, helperText: g, options: y, style: _, testID: h, value: f, withEmptyOption: k } = this.props,
                        { isFocused: F } = this.state,
                        S = o.ZP.getLanguage(),
                        E = void 0 === c ? !!a : c,
                        v = new Set();
                    a && v.add(this._errorID), e && v.add(e), g && v.add(this._helperID);
                    const Z = v.size ? [...v].join(" ") : void 0;
                    return t.createElement(
                        t.Fragment,
                        null,
                        t.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const o = "ja" === S ? u.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(S) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return t.createElement(
                                n.Z,
                                { style: [i.Z.border, b.container, l && i.Z.disabled, F && i.Z.focusedBorderValid, E && i.Z.invalidBorderColor, F && E && i.Z.focusedBorderInvalid, _] },
                                this._renderLabel(),
                                t.createElement(
                                    m,
                                    { "aria-describedby": Z, "aria-invalid": E, "aria-labelledby": this._labelID, disabled: l, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: o }, l && i.Z.disabled], testID: h || "", value: f },
                                    k ? t.createElement(p, { disabled: !0, style: b.option, value: "" }) : null,
                                    y.map((e) => {
                                        const { disabled: l, label: a, value: n } = e;
                                        return t.createElement(p, { disabled: l, key: `${a}-${n}`, style: b.option, value: n }, a);
                                    }),
                                ),
                                t.createElement(r.default, { style: [b.dropdownCaret, F && i.Z.validColor, !(!c && !a) && i.Z.invalidColor] }),
                            );
                        }),
                        g ? this._renderHelperText() : null,
                        E && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: l, label: a } = this.props,
                        { isFocused: n } = this.state;
                    return t.createElement(o.ZP, { color: l || e ? "red500" : n ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, a);
                }
                _renderHelperText() {
                    return t.createElement(n.Z, { "aria-live": "polite" }, t.createElement(o.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return t.createElement(n.Z, { "aria-live": "polite" }, t.createElement(o.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            y.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                _ = y;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.8ed3ae8a.js.map
