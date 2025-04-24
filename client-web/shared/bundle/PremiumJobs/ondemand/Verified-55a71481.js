"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.PremiumJobs~ondemand.Verified-55a71481"],
    {
        771035: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(202784),
                a = r(107267),
                l = r(371344),
                s = r(956272),
                o = r(666536),
                i = r(943052);
            const c = ({ basePath: e, isCompact: t = !1, resetPageOnSearch: r = !1, styleType: c }) => {
                    const [u, d, m] = (0, i.Z)(),
                        [b, g] = n.useState(u.get("q") || ""),
                        p = (0, a.useHistory)(),
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
                    const E = n.useCallback(() => {
                            g(""), p.replace(e);
                        }, [e, p]),
                        y = n.useMemo(
                            () =>
                                (0, o.Z)((e) => {
                                    f.current && (e.length > 0 ? (r ? m({ q: e, p: "1" }) : d("q", e)) : E());
                                }, 1e3),
                            [E, d, m, r],
                        ),
                        h = n.useCallback(
                            (e) => {
                                const { value: t } = e.target;
                                g(t), y(t);
                            },
                            [y],
                        );
                    return n.createElement(l.Z, { Icon: s.default, autoComplete: "off", isCompact: t, leftAligned: !0, onChange: h, onClear: E, placeholder: "Search jobs", styleType: c || "pill", testID: "search-jobs-input", value: b, withClearButton: !0 });
                },
                u = n.memo(c);
        },
        431890: (e, t, r) => {
            r.d(t, { Z: () => c });
            r(571372);
            var n = r(786033),
                a = r(202784),
                l = (r(585488), r(351743)),
                s = r.n(l),
                o = r(782826);
            const i = n.Z,
                c = () => {
                    const { origin: e } = o.ZP.get(),
                        [t, r] = s()(i);
                    return [
                        a.useCallback(
                            ({ errorPath: r, redirectPath: n, verificationFlow: a }) =>
                                new Promise((l, s) => {
                                    const o = `${e}${n}`;
                                    t({
                                        variables: { success_url: o, error_url: r ? `${e}${r}` : o, verification_flow: a || null },
                                        onCompleted: (e, t) => {
                                            if (e.start_identity_verification) {
                                                if (("StartIdentityVerificationResultSuccessAu10tixSession" !== e?.start_identity_verification?.__typename && "StartIdentityVerificationResultSuccessSession" !== e?.start_identity_verification?.__typename) || !e?.start_identity_verification.session_url) return s(new Error("Expected Session URL"));
                                                l(e?.start_identity_verification.session_url);
                                            }
                                        },
                                        onError: s,
                                    });
                                }),
                            [t, e],
                        ),
                        r,
                    ];
                };
        },
        762522: (e, t, r) => {
            r.d(t, { F: () => v, Z: () => j });
            var n = r(202784),
                a = r(107267),
                l = r(688715),
                s = r(40610),
                o = r(674132),
                i = r.n(o);
            const c = i().i859a9d4,
                u = { message: i().e0ce628e },
                d = { message: i().ddf35536 },
                m = { message: i().db7144b6 },
                b = { message: i().be78e5fa },
                g = { message: i().fa9709ba },
                p = { message: i().j62f13fc },
                f = { message: i().ff5716fc },
                E = { message: i().fd059188 },
                y = { message: i().b82b5c00 },
                h = { title: i().d74adc30, message: i().e4323c36 },
                _ = { title: i().b3323ada, message: i().ac325eb8, priority: 2 },
                C = { title: i().j4e6e966, message: i().ef86e7f6, action: { label: c, link: (0, l.ju)("https://business.x.com/en/help/ads-policies/about-twitter-ads-approval.html") } },
                Z = { title: i().c9c8edae, message: i().b36c6278 },
                v = Object.freeze({ createInvite: "createInvite", resendInvite: "resendInvite", deleteInvite: "deleteInvite", assignBadge: "assignBadge", deleteAffiliate: "deleteAffiliate", createApplication: "createApplication", createJob: "createJob", updateJob: "updateJob", deleteJob: "deleteJob", featureJob: "featureJob", unfeatureJob: "unfeatureJob", configureOrganization: "configureOrganization", atsSyncErrorMessage: "atsSyncErrorMessage", adsAccountIncorrect: "adsAccountIncorrect", adsAccountInvalidFunding: "adsAccountInvalidFunding", adsAccountReviewNeeded: "adsAccountReviewNeeded", missingVOSubscription: "adsAccountReviewNeeded", adsPromoActivation: "adsPromoActivation" }),
                I = (e) => {
                    const t = (0, a.useLocation)(),
                        r = e.error || t.state?.verifiedOrgAdminError,
                        {
                            action: l,
                            message: o,
                            title: i,
                        } = n.useMemo(() => {
                            switch (r) {
                                case v.createInvite:
                                case v.resendInvite:
                                    return u;
                                case v.deleteInvite:
                                    return d;
                                case v.assignBadge:
                                    return m;
                                case v.deleteAffiliate:
                                    return b;
                                case v.createApplication:
                                    return g;
                                case v.updateJob:
                                    return p;
                                case v.createJob:
                                    return f;
                                case v.atsSyncErrorMessage:
                                    return E;
                                case v.adsAccountIncorrect:
                                    return h;
                                case v.adsAccountInvalidFunding:
                                    return _;
                                case v.adsAccountReviewNeeded:
                                    return C;
                                case v.missingVOSubscription:
                                    return Z;
                                case v.adsPromoActivation:
                                    return y;
                                default:
                                    return {};
                            }
                        }, [r]);
                    return o ? n.createElement(s.Z.Danger, { action: l, headline: i, style: { marginTop: 10 }, text: o, withIcon: !0 }) : null;
                },
                j = n.memo(I);
        },
        794271: (e, t, r) => {
            r.d(t, { Z: () => I });
            var n = r(807896),
                a = r(202784),
                l = r(325686),
                s = r(40610),
                o = r(154003),
                i = r(167630),
                c = r(392237),
                u = r(674132),
                d = r.n(u),
                m = r(187669),
                b = r(736063),
                g = r(952793),
                p = r(782826),
                f = r(293115),
                E = r(725405),
                y = r(431890),
                h = r(241989);
            const _ = d().ea8c295a,
                C = d().ef4602ec,
                Z = ({ redirectPath: e, status: t }) => {
                    const r = (0, E.Z)(),
                        [n] = (0, y.Z)(),
                        [c, u] = a.useState(!1),
                        [d, b] = a.useState(!1);
                    (0, m.q)(() => {
                        r.scribe({ element: t, action: "impression" });
                    });
                    const g = a.useCallback(() => {
                            u(!0),
                                b(!1),
                                n({ redirectPath: e, verificationFlow: "VerifiedOrganizationIdv" })
                                    .then((e) => (r.scribe({ element: "redirect", action: "success" }), p.ZP.navigateTo(e)))
                                    .catch(() => {
                                        u(!1), b(!0), r.scribe({ element: "redirect", action: "error" });
                                    });
                        }, [n, r, e]),
                        f = a.useMemo(() => {
                            if ("CanVerifyIdentity" === t) return a.createElement(a.Fragment, null, d ? a.createElement(s.Z.Danger, { text: C }) : null, a.createElement(o.ZP, { disabled: c, onClick: g, testID: "start-idv-button", type: "primaryFilled" }, c ? a.createElement(i.Z, null) : _));
                        }, [t, g, d, c]);
                    return a.createElement(l.Z, { style: j.container, testID: "identity-verification-entrypoint" }, f);
                },
                v = (e) => {
                    const { enabled: t, status: r } = (0, h.Z)();
                    return t && r ? a.createElement(Z, (0, n.Z)({}, e, { status: r })) : null;
                },
                I = (e) => ((0, g.hC)("responsive_web_verified_organizations_idv_enabled") ? a.createElement(b.H, { errorConfig: { context: "identity_verification_entrypoint" } }, a.createElement(f.nO, { namespace: { component: "vo_idv_entrypoint" } }, a.createElement(v, e))) : null),
                j = c.default.create((e) => ({ container: { gap: e.spaces.space12 } }));
        },
        483686: (e, t, r) => {
            r.d(t, { Z: () => de });
            var n = r(807896),
                a = r(992152),
                l = r(396345),
                s = r(630673),
                o = r(199544),
                i = r(202784),
                c = r(325686),
                u = (r(585488), r(277660)),
                d = r.n(u),
                m = r(154003),
                b = r(731708),
                g = r(392237),
                p = r(674132),
                f = r.n(p),
                E = r(97301),
                y = r(58399),
                h = r(443781),
                _ = r(736063),
                C = r(292546),
                Z = r(693510),
                v = r(540819),
                I = r(482924),
                j = r(948927),
                w = r(630887),
                A = r(284094),
                F = r(454104),
                S = r(3373),
                k = r(22466),
                J = r(457311),
                P = r(965245);
            const x = f().e46cd68e,
                z = g.default.create((e) => ({ containers: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 } })),
                T = () => i.createElement(c.Z, { style: z.containers }, i.createElement(i.Fragment, null, i.createElement(b.ZP, { size: "headline2", weight: "bold" }, x))),
                D = f().ea7f1a42,
                M = g.default.create((e) => ({ containers: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 } })),
                O = () => i.createElement(c.Z, { style: M.containers }, i.createElement(i.Fragment, null, i.createElement(b.ZP, { size: "headline2", weight: "bold" }, D)));
            var R = r(67369),
                L = r(708852);
            const B = f().eba5a8ec,
                Q = f().d1cbcb90,
                U = f().gf66326c,
                V = g.default.create((e) => ({ container: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 }, colSpan: { gridColumn: "span 2" } })),
                H = () => {
                    const e = (0, R.GS)(),
                        t = (0, L.Vz)();
                    return i.createElement(i.Fragment, null, e ? null : i.createElement(c.Z, { style: V.container }, i.createElement(b.ZP, { color: "gray700", size: "subtext1", style: e ? null : V.colSpan, weight: "bold" }, B), i.createElement(b.ZP, { color: "gray700", size: "subtext1", weight: "bold" }, Q), t && i.createElement(b.ZP, { color: "gray700", size: "subtext1", weight: "bold" }, U), i.createElement("div", null)));
                },
                $ = ({ emptyMessage: e, filteredJobs: t, jobShares: r, jobSharesIdentityFunction: n, jobs: a, jobsIdentityFunction: l, noJobsTitle: s, renderFooter: o, renderJobItem: c, renderJobShareItem: u, useSearchEndpoint: d }) => (0 === r.items_results.length && 0 === a.items_results.length ? i.createElement(J.Z, { header: s, message: e() }) : i.createElement(i.Fragment, null, r.items_results.length > 0 && i.createElement(i.Fragment, null, i.createElement(T, null), i.createElement(H, null), i.createElement(P.Z, { assumedItemHeight: 1, cacheKey: "jobShareList", footer: 0 === a.items_results.length && o(), identityFunction: n, items: r.items_results, renderer: u, withoutHeadroom: a.items_results.length > 0 })), a.items_results.length > 0 && i.createElement(i.Fragment, null, i.createElement(O, null), 0 === r.items_results.length && i.createElement(H, null), i.createElement(P.Z, { assumedItemHeight: 1, cacheKey: "jobList", footer: o(), identityFunction: l, items: a.items_results, renderer: c })))),
                G = ({ emptyMessage: e, filteredJobs: t, jobs: r, jobsIdentityFunction: n, noJobsTitle: a, renderFooter: l, renderJobItem: s, useSearchEndpoint: o }) => {
                    const c = o ? t : r;
                    return i.createElement(i.Fragment, null, c.items_results.length > 0 ? i.createElement(i.Fragment, null, i.createElement(H, null), i.createElement(P.Z, { assumedItemHeight: 1, cacheKey: "jobList", footer: l(), identityFunction: n, items: c.items_results, renderer: s })) : i.createElement(J.Z, { header: a, message: e() }));
                },
                N = o.Z,
                q = s.Z,
                K = l.Z,
                W = a.Z,
                X = f().b97e952a,
                Y = f().cf1fa156,
                ee = f().fa4a4f50,
                te = f().c5fb5a1a,
                re = f().e9b91cde,
                ne = (e) => e.rest_id,
                ae = (e) => e.rest_id,
                le = ({ adminJobAndShareCount: e, currentTab: t, currentTabJobCount: r = 0, filteredAdminJobs: n, jobShares: a, jobs: l, nextCursor: s, orgQueryId: o, prevCursor: u, refetch: g, setCursor: p, totalFeaturedJobCount: h, useSearchEndpoint: _, withPagination: Z = !1 }) => {
                    const { basePath: I } = (0, F.Z)(),
                        [j, w] = (0, C.Z)(),
                        J = j.get("p") ? parseInt(j?.get("p"), 10) : 1,
                        P = i.useMemo(() => (J - 1) * A.UZ + 1, [J]),
                        x = i.useMemo(() => {
                            const e = A.UZ * J;
                            return Math.min(e, r || 0);
                        }, [J, r]),
                        z = i.useCallback(() => {
                            w("p", (J + 1).toString()), _ && p(s);
                        }, [J, w, s, p, _]),
                        T = i.useCallback(() => {
                            w("p", (J - 1).toString()), _ && p(u);
                        }, [J, w, u, p, _]),
                        D = d()(N, l),
                        M = d()(K, a),
                        O = d()(q, n),
                        R = i.useCallback((r) => (r?.result?.core ? i.createElement(S.ZP, { adminJobAndShareCount: e, currentTab: t, item: r.result.core, itemId: r.rest_id, jobQueryId: r.result.id, orgQueryId: o, organization: r.result?.recruiting_organization_results?.result, refetch: g, totalFeaturedJobCount: h }) : null), [t, e, o, g, h]),
                        L = i.useCallback((e) => (e?.result?.core?.job_results?.result?.core ? i.createElement(k.Z, { item: e.result.core.job_results.result.core, jobShareItem: e.result.core, jobShareItemId: e.rest_id, orgQueryId: o, organization: e.result.core.job_results.result.recruiting_organization_results?.result, refetch: g }) : null), [o, g]),
                        B = i.useMemo(() => i.createElement(E.default, null), []),
                        Q = i.useMemo(() => i.createElement(y.default, null), []),
                        U = i.useMemo(() => (Z && T && z ? i.createElement(c.Z, { style: ue.pagination }, i.createElement(m.ZP, { alignContent: "center", disabled: 1 === P, icon: B, onClick: T, size: "small", testID: "btn-previous", type: "primaryText" }), i.createElement(b.ZP, { size: "subtext2" }, P, " - ", x, " of ", r), i.createElement(m.ZP, { alignContent: "center", disabled: x >= r, icon: Q, onClick: z, size: "small", testID: "btn-next", type: "primaryText" })) : null), [z, T, x, P, B, Q, r, Z]),
                        V = i.useCallback(() => {
                            const e = i.createElement(b.ZP, { color: "primary", link: `${I}/new` }, re);
                            return i.createElement(
                                i.Fragment,
                                null,
                                i.createElement(
                                    b.ZP,
                                    null,
                                    (() => {
                                        switch (t) {
                                            case v.n.FEATURED_JOBS:
                                                return Y;
                                            case v.n.ARCHIVED:
                                                return ee;
                                            default:
                                                return X;
                                        }
                                    })(),
                                ),
                                t === v.n.JOBS ? i.createElement(c.Z, null, i.createElement(b.ZP, null, i.createElement(f().I18NFormatMessage, { $i18n: "j766b689" }, e))) : null,
                            );
                        }, [I, t]);
                    return i.createElement(i.Fragment, null, t === v.n.FEATURED_JOBS ? i.createElement($, { emptyMessage: V, filteredJobs: O, jobShares: M, jobSharesIdentityFunction: ae, jobs: D, jobsIdentityFunction: ne, noJobsTitle: te, renderFooter: () => U, renderJobItem: R, renderJobShareItem: L, useSearchEndpoint: _ }) : i.createElement(G, { emptyMessage: V, filteredJobs: O, jobs: D, jobsIdentityFunction: ne, noJobsTitle: te, renderFooter: () => U, renderJobItem: R, useSearchEndpoint: _ }));
                },
                se = { context: "JobList" },
                oe = (e) => {
                    switch (e) {
                        case v.n.FEATURED_JOBS:
                            return { status: ["open"], featured: [1], keyword: null };
                        case v.n.ARCHIVED:
                            return { status: ["closed"], featured: [0, 1], keyword: null };
                        default:
                            return { status: ["open"], featured: [0, 1], keyword: null };
                    }
                },
                ie = (e) => {
                    const [t] = (0, C.Z)(),
                        r = t.get("q"),
                        a = t.get("p") ? parseInt(t?.get("p"), 10) : 1,
                        { currentTab: l, totalFeaturedJobCount: s } = e,
                        o = (0, w.hh)(),
                        c = !!r,
                        [u, d] = i.useState(null),
                        { data: m, refetch: b } = (0, I.A)(W, { jobFilterParams: oe(l), jobShareFilterParams: { status: ["active"], featured: [1] }, searchParams: { keyword: r }, keywordSearchCount: A.UZ, keywordSearchCursor: u, pageParams: { limit: A.UZ, offset: (a - 1) * A.UZ }, includeAdvertiserAccounts: o });
                    if (!m) return null;
                    const g = m.viewer.user_results.result;
                    if ("User" !== g.__typename) return null;
                    const p = g.recruiting_organization_results?.result?.admin_jobs,
                        f = g.recruiting_organization_results?.result?.consumer_job_search,
                        E = g.recruiting_organization_results?.result?.admin_job_shares;
                    if (!p || !f || !E) return null;
                    const y = c ? f.total_count : p.total_count,
                        h = l === v.n.FEATURED_JOBS ? s : y,
                        F = g.recruiting_organization_results?.result?.__id,
                        S = g.recruiting_organization_results?.result?.consumer_job_search?.slice_info,
                        k = S?.next_cursor,
                        J = S?.previous_cursor;
                    return i.createElement(_.H, { errorConfig: se }, i.createElement(Z._3, { user: g }, i.createElement(j.Em, { user: g }, i.createElement(le, (0, n.Z)({}, e, { currentTabJobCount: h, filteredAdminJobs: f, jobShares: E, jobs: p, nextCursor: k, orgQueryId: F, prevCursor: J, refetch: b, setCursor: d, useSearchEndpoint: c })))));
                },
                ce = (e) => {
                    const { viewerUserId: t } = (0, h.QZ)();
                    return t ? i.createElement(ie, (0, n.Z)({}, e, { userId: t })) : null;
                },
                ue = g.default.create((e) => ({ pagination: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "end", padding: e.spaces.space16, columnGap: e.spaces.space8 } })),
                de = i.memo(ce);
        },
        3373: (e, t, r) => {
            r.d(t, { ZP: () => we, sy: () => de, CS: () => be, fO: () => me, t4: () => Ie });
            r(136728);
            var n = r(881934),
                a = r(802832),
                l = r(631110),
                s = r(202784),
                o = r(576648),
                i = r(325686),
                c = (r(585488), r(277660)),
                u = r.n(c),
                d = r(107267),
                m = r(67369),
                b = r(708852),
                g = r(731708),
                p = r(966886),
                f = r(470397),
                E = r(952428),
                y = r(190286),
                h = r(392237),
                _ = r(674132),
                C = r.n(_),
                Z = r(782642),
                v = r(457458),
                I = r(985124),
                j = r(762522),
                w = r(454104),
                A = r(571754),
                F = r(154003),
                S = r(17412),
                k = r(191796),
                J = r(630715),
                P = r(607127),
                x = r(443781),
                z = r(540819),
                T = r(948927),
                D = r(630887),
                M = r(837153),
                O = r(322633),
                R = r(614983),
                L = r.n(R),
                B = r(351743),
                Q = r.n(B),
                U = r(258292),
                V = r(106186);
            const H = C().c49b7262,
                $ = C().i6ecf71a,
                G = C().fe8872f4,
                N = C().i08bee0e,
                q = O.Z,
                K = M.Z,
                W = h.default.create((e) => ({ icon: { height: 16, width: 16 }, disabledIcon: { height: 16, width: 16, opacity: 0.5 } })),
                X = () => {
                    const { job: e, jobId: t, orgQueryId: r, refetch: n, totalFeaturedJobCount: a } = Ie(),
                        { basePath: l } = (0, w.Z)(),
                        o = (0, d.useHistory)(),
                        i = (0, Z.p)(),
                        [c, u] = s.useState(!1),
                        [m] = Q()(q),
                        [b] = Q()(K),
                        g = s.useMemo(() => a < 10, [a]);
                    s.useEffect(() => {
                        u(Boolean(e.featured));
                    }, [e.featured]);
                    const p = s.useCallback(() => {
                            if (!g && !c) return;
                            const e = (e, t) => {
                                    if (!r) return;
                                    const n = e.get(r);
                                    L()(n, "orgRecord must be specified"), n.invalidateRecord();
                                },
                                a = c;
                            u(!c),
                                a
                                    ? b({
                                          variables: { job_id: t },
                                          updater: e,
                                          onCompleted: () => {
                                              i({ text: G, withAutoDismiss: !0 }), n();
                                          },
                                          onError: () => {
                                              o.push(l, { verifiedOrgAdminError: j.F.unfeatureJob });
                                          },
                                      })
                                    : m({
                                          variables: { job_id: t },
                                          updater: e,
                                          onCompleted: (e) => {
                                              e.feature_job_v2?.success ? i({ text: G, withAutoDismiss: !0 }) : (u(a), i({ text: N, withAutoDismiss: !0 })), n();
                                          },
                                          onError: () => {
                                              o.push(l, { verifiedOrgAdminError: j.F.featureJob });
                                          },
                                      });
                        }, [i, l, m, o, c, t, r, n, b, g]),
                        f = s.useCallback(() => (c ? s.createElement(U.default, { style: W.icon }) : g || c ? s.createElement(V.default, { style: W.icon }) : s.createElement(V.default, { style: W.disabledIcon })), [c, g]);
                    return s.createElement(F.ZP, { hoverLabel: { label: g || c ? (c ? $ : H) : N }, icon: s.createElement(f, null), onClick: p, size: "small", testID: c ? "btn-unpin-job" : "btn-pin-job", type: c ? "brandText" : "primaryText" });
                };
            var Y = r(167630),
                ee = r(737691);
            const te = C().a37ef120,
                re = C().fe8872f4,
                ne = h.default.create((e) => ({ loader: { padding: e.spaces.space4 }, icon: { height: 16, width: 16 } })),
                ae = () => {
                    const [e, t] = s.useState(!1),
                        { adminJobAndShareCount: r, job: n, jobId: a, orgQueryId: l, refetch: o } = Ie(),
                        { basePath: c, isVerifiedOrg: u } = (0, w.Z)(),
                        m = (0, d.useHistory)(),
                        b = (0, Z.p)(),
                        g = s.useCallback(() => {
                            t(!1), b({ text: re, withAutoDismiss: !0 }), o();
                        }, [b, o]),
                        p = s.useCallback(() => {
                            t(!1), m.push(c, { verifiedOrgAdminError: j.F.deleteJob });
                        }, [m, c]),
                        [f] = (0, A.Z)(l, g, p),
                        E = s.useMemo(() => Boolean(n.integration_id), [n.integration_id]),
                        y = s.useCallback(() => {
                            (u || r < 3) && (t(!0), f(a, { status: "open", featured: 0 }));
                        }, [u, r, a, f]),
                        h = s.useMemo(() => !(!u && r >= 3) && !E, [E, u, r]);
                    return s.createElement(s.Fragment, null, e ? s.createElement(i.Z, { style: ne.loader }, s.createElement(Y.Z, { size: "small" })) : s.createElement(F.ZP, { disabled: !h, hoverLabel: { label: te }, icon: s.createElement(ee.default, { style: ne.icon }), onClick: y, size: "small", testID: "btn-reopen-job", type: "primaryText" }));
                },
                le = C().c14cdb18,
                se = C().c30f0168,
                oe = C().f508c49c,
                ie = C().c270ef3e,
                ce = h.default.create((e) => ({ actionsContainer: { display: "flex", flexDirection: "row", gap: 2, justifyContent: "flex-end", alignItems: "flex-start" }, mobileActionsContainer: { alignItems: "flex-start" }, icon: { height: 16, width: 16 } })),
                ue = ({ basePath: e, currentTab: t, isIntegration: r, isMobileLayout: n = !1, jobExternalUrl: a, jobId: l, onCopyLink: o, onDelete: c, onReopen: u }) => {
                    const { userClaims: d } = (0, x.QZ)(),
                        m = d.isVerifiedOrg(),
                        b = (0, T.od)(),
                        g = (0, D.zK)(),
                        p = b?.jobPromotionAccount?.id,
                        f = "EligibleJobPromotionAvailable" !== b?.jobPromotionEligibility,
                        E = g && p ? `https://ads.x.com/campaign_form/${p}/campaign/new?objective=16&jobId=${l}` : null,
                        y = s.useMemo(() => (n ? [ce.actionsContainer, ce.mobileActionsContainer] : ce.actionsContainer), [n]);
                    return s.createElement(
                        i.Z,
                        { onClick: (e) => e.preventDefault(), style: y },
                        t !== z.n.ARCHIVED
                            ? s.createElement(
                                  s.Fragment,
                                  null,
                                  E
                                      ? s.createElement(F.ZP, {
                                            disabled: f,
                                            hoverLabel: { label: le },
                                            icon: s.createElement(S.default, { style: ce.icon }),
                                            link: E,
                                            onClick: () => {
                                                !f && E && window.open(E, "_blank");
                                            },
                                            size: "small",
                                            testID: "btn-promote",
                                            type: "primaryText",
                                        })
                                      : null,
                                  s.createElement(X, null),
                                  a ? s.createElement(F.ZP, { hoverLabel: { label: se }, icon: s.createElement(k.default, { style: ce.icon }), link: a, onClick: () => window.open(a, "_blank"), size: "small", testID: "btn-open-external-url", type: "primaryText" }) : null,
                                  m ? s.createElement(F.ZP, { hoverLabel: { label: oe }, icon: s.createElement(J.default, { style: ce.icon }), onClick: o, size: "small", testID: "btn-copy-job-link", type: "primaryText" }) : null,
                                  s.createElement(F.ZP, { disabled: r, hoverLabel: { label: ie }, icon: s.createElement(P.default, { style: ce.icon }), onClick: c, size: "small", testID: "btn-delete", type: "destructiveText" }),
                              )
                            : s.createElement(ae, null),
                    );
                },
                de = l.Z,
                me = a.Z,
                be = n.Z,
                ge = C().cfd2f35e,
                pe = C().c270ef3e,
                fe = C().f88553c8,
                Ee = C().fe8872f4,
                ye = C().d523cd74,
                he = C().jfd0b34a,
                _e = C().e2247e08,
                Ce = ({ adminJobAndShareCount: e, currentTab: t, job: r, jobId: n, orgQueryId: a, organization: l, refetch: c }) => {
                    const { basePath: u, isVerifiedOrg: h } = (0, w.Z)(),
                        [_, F] = s.useState(!1),
                        S = (0, d.useHistory)(),
                        k = (0, Z.p)(),
                        J = `${u}/${n}/edit`,
                        P = s.useCallback(() => {
                            k({ text: Ee, withAutoDismiss: !0 }), F(!1), c();
                        }, [k, c]),
                        x = s.useCallback(() => {
                            S.push(u, { verifiedOrgAdminError: j.F.deleteJob });
                        }, [S, u]),
                        [z] = (0, A.Z)(a, P, x),
                        T = s.useCallback(() => {
                            z(n, { status: "closed" });
                        }, [z, n]),
                        D = s.useCallback(() => {
                            F(!1);
                        }, []),
                        M = s.useCallback(() => {
                            F(!0);
                        }, []),
                        O = s.useCallback(() => {
                            (h || e < 3) && z(n, { status: "open" });
                        }, [h, e, n, z]),
                        R = s.useCallback(() => {
                            r.job_page_url && (o.Z.setString(r.job_page_url), k({ text: fe, withAutoDismiss: !0 }));
                        }, [k, r.job_page_url]),
                        L = (0, m.Mv)(),
                        B = (0, b.Vz)(),
                        Q = s.useCallback(() => {
                            const e = s.createElement(g.ZP, { weight: "bold" });
                            if (r.integration_id) {
                                const t = l?.core?.integration_service_id;
                                return s.createElement(s.Fragment, null, s.createElement(g.ZP, { color: "gray700", size: "subtext2" }, s.createElement(C().I18NFormatMessage, { $i18n: "ef7ce733" }, s.cloneElement(e, null, C().b737c0b5({ ats: t && I.$J[t] ? I.$J[t] : _e })))), B && l?.core?.last_synced_at ? s.createElement(g.ZP, { color: "gray700", size: "subtext2" }, s.createElement(p.Z, { humanReadable: !0, timestamp: l.core.last_synced_at })) : s.createElement("div", null));
                            }
                            return r.updated_at ? s.createElement(s.Fragment, null, L ? null : s.createElement(g.ZP, { color: "gray700", size: "subtext2" }, "-"), B && s.createElement(g.ZP, { color: "gray700", size: "subtext2" }, s.createElement(p.Z, { humanReadable: !0, timestamp: r.updated_at }))) : s.createElement(s.Fragment, null, s.createElement("div", null), s.createElement("div", null));
                        }, [L, B, r.integration_id, r.updated_at, l?.core?.integration_service_id, l?.core?.last_synced_at]),
                        U = s.useCallback(() => s.createElement(g.ZP, { color: "text", link: J, size: "subtext1", weight: "bold", withUnderline: !0 }, r.title), [r.title, J]),
                        V = s.useCallback(() => {
                            const e = [s.createElement(g.ZP, { color: "gray700", key: "location", size: "subtext2" }, r.location)];
                            return r.formatted_salary && e.push(s.createElement(g.ZP, { color: "gray700", key: "salary", size: "subtext2" }, (0, v.M)(r.formatted_salary, r.salary_interval))), e;
                        }, [r.formatted_salary, r.location, r.salary_interval]);
                    return s.createElement(s.Fragment, null, s.createElement(i.Z, { role: "listitem" }, s.createElement(E.Z, { link: J, style: Ze.container }, L ? s.createElement(s.Fragment, null, s.createElement(i.Z, { style: Ze.mobileContainer }, s.createElement(i.Z, { style: Ze.jobTitle }, U(), V(), Q()))) : s.createElement(s.Fragment, null, s.createElement(i.Z, { style: Ze.jobTitle }, U(), s.createElement(f.Z, null, V())), Q()), s.createElement(ue, { basePath: u, currentTab: t, isIntegration: Boolean(r.integration_id), isMobileLayout: L, jobExternalUrl: r.external_url, jobId: n, onCopyLink: R, onDelete: M, onReopen: O }))), _ ? s.createElement(y.Z, { cancelButtonLabel: ge, confirmButtonLabel: pe, confirmButtonType: "primary", headline: ye, onCancel: D, onConfirm: T, text: he, withCancelButton: !0 }) : null);
                },
                Ze = h.default.create((e) => ({ container: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 }, mobileContainer: { display: "flex", flexDirection: "column", gap: 4 }, jobTitle: { gap: 4, gridColumn: "span 2" } })),
                ve = s.createContext({}),
                Ie = () => s.useContext(ve),
                je = ({ adminJobAndShareCount: e, currentTab: t, item: r, itemId: n, jobQueryId: a, orgQueryId: l, organization: o, refetch: i, totalFeaturedJobCount: c }) => {
                    const d = u()(de, r),
                        m = u()(be, o);
                    return d ? s.createElement(ve.Provider, { value: { job: d, adminJobAndShareCount: e, totalFeaturedJobCount: c, jobId: n, jobQueryId: a, orgQueryId: l, refetch: i } }, s.createElement(Ce, { adminJobAndShareCount: e, currentTab: t, job: d, jobId: n, orgQueryId: l, organization: m, refetch: i })) : null;
                },
                we = s.memo(je);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.PremiumJobs~ondemand.Verified-55a71481.f17d041a.js.map
