"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.PremiumJobs~ondemand.Verified-e6266db0"],
    {
        292546: (e, t, r) => {
            r.d(t, { Z: () => s });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                n = r(107267);
            const s = () => {
                const e = (0, n.useLocation)(),
                    t = (0, n.useHistory)(),
                    [r, s] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    s(new URLSearchParams(e.search));
                }, [e.search]);
                const o = a.useCallback(
                    (a, n) => {
                        const s = new URLSearchParams(r);
                        s.set(a, n), t.push(`${e.pathname}?${s.toString()}`);
                    },
                    [t, e.pathname, r],
                );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        524084: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(202784),
                n = r(523561),
                s = r(195560);
            const o = (0, n.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, t) => a.createElement(s.Z, { hasError: e, onRetry: t }) });
        },
        817524: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(196973),
                n = r(202784),
                s = (r(585488), r(351743)),
                o = r.n(s);
            const l = a.Z,
                i = () => {
                    const [e, t] = o()(l);
                    return [
                        n.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                };
        },
        985124: (e, t, r) => {
            r.d(t, { $J: () => l, WA: () => x, ZC: () => Z, cj: () => U, eo: () => a.eo, hb: () => $, kW: () => i, pg: () => I, rP: () => o, u4: () => B, xk: () => z });
            var a = r(89217),
                n = r(111677),
                s = r.n(n);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                l = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(a.eo).map(([e, t]) => ({ label: String(t), value: e })),
                c = s().d2b8da2c,
                u = s().cd958040,
                d = s().c5760ca2,
                m = s().d31b4a2a,
                b = s().df1b7550,
                g = s().f38959a6,
                f = s().bc78a26c,
                p = s().ec28738e,
                h = s().icb06308,
                E = s().d0b978ec,
                y = s().af19cdc2,
                _ = s().e4a51fca,
                C = s().e8ca78ae,
                v = s().c365dcc6,
                Z = Object.freeze({ software_engineering: c, data_analytics: u, product: d, design: m, marketing: b, sales_am: g, operations: f, people_hr: p, finance_accounting: h, legal_compliance: E, science_engineering: y, medical: _, construction_trades: C, other: v }),
                I = Object.entries(Z).map(([e, t]) => ({ label: String(t), value: e })),
                S = s().e25d75e4,
                j = s().e89b3f04,
                w = s().h55825dc,
                A = s().cc537386,
                k = s().jfc3cece,
                P = s().e1b683aa,
                F = s().c4627fda,
                J = s().db75b47c,
                x = Object.freeze({ intern: S, entry_level: j, junior: w, mid_level: A, senior: k, lead: P, manager: F, executive: J }),
                z = Object.entries(x).map(([e, t]) => ({ label: String(t), value: e })),
                O = s().i312f0ce,
                D = s().b4aff05e,
                T = s().c08b9138,
                R = s().ia5d6422,
                L = s().h97c7f42,
                M = s().ibed2d04,
                U = Object.freeze({ onsite: { label: O, description: R, value: "onsite" }, remote: { label: T, description: M, value: "remote" }, hybrid: { label: D, description: L, value: "hybrid" } }),
                B = Object.keys(U).map((e) => ({ label: U[e].label, value: e, description: U[e].description })),
                $ = Object.keys(a.Qw).map((e) => ({ ...a.Qw[e], value: String(a.Qw[e].value) }));
        },
        943052: (e, t, r) => {
            r.d(t, { Z: () => s });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                n = r(107267);
            const s = () => {
                const e = (0, n.useLocation)(),
                    t = (0, n.useHistory)(),
                    [r, s] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    s(new URLSearchParams(e.search));
                }, [e.search]);
                const o = a.useCallback(
                        (a, n) => {
                            const s = new URLSearchParams(r);
                            s.set(a, n), t.push(`${e.pathname}?${s.toString()}`);
                        },
                        [t, e.pathname, r],
                    ),
                    l = a.useCallback(
                        (a) => {
                            const n = new URLSearchParams(r);
                            for (const e in a) a[e] ? n.set(e, a[e]) : n.delete(e);
                            t.push(`${e.pathname}?${n.toString()}`);
                        },
                        [t, e.pathname, r],
                    );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), o, l];
            };
        },
        540819: (e, t, r) => {
            r.d(t, { n: () => n, p: () => a });
            const a = Object.freeze({ ACCOUNTS: "Accounts", INVITATIONS: "Invitations" }),
                n = Object.freeze({ JOBS: "All", FEATURED_JOBS: "Featured", ARCHIVED: "Archived" });
        },
        482924: (e, t, r) => {
            r.d(t, { A: () => b });
            var a = r(202784),
                n = r(437429),
                s = r.n(n),
                o = r(57074),
                l = r.n(o),
                i = r(10622),
                c = r.n(i),
                u = r(71620),
                d = r(312771),
                m = r(535338);
            function b(e, t, r) {
                const n = l()(t),
                    o = l()(r),
                    i = s()(),
                    b = (0, u.po)(),
                    [g, f] = a.useState(null),
                    [p, h] = a.useState(!1),
                    E = a.useCallback(() => {
                        p ||
                            (h(!0),
                            c()(i, e, n, { networkCacheConfig: o?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    h(!1);
                                },
                                error: (e) => {
                                    b(e), h(!1), f(e);
                                },
                            }));
                    }, [i, b, e, p, n, o]),
                    y = (0, m.p)(e, t, r);
                return a.useMemo(() => (g ? { data: y, refetch: E, refetchStatus: d.ZP.FAILED, refetchError: g } : { data: y, refetch: E, refetchStatus: p ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [y, g, p, E]);
            }
        },
        771035: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                n = r(107267),
                s = r(371344),
                o = r(956272),
                l = r(666536),
                i = r(943052);
            const c = ({ basePath: e, isCompact: t = !1, resetPageOnSearch: r = !1, styleType: c }) => {
                    const [u, d, m] = (0, i.Z)(),
                        [b, g] = a.useState(u.get("q") || ""),
                        f = (0, n.useHistory)(),
                        p = a.useRef(!1);
                    a.useEffect(
                        () => (
                            (p.current = !0),
                            () => {
                                p.current = !1;
                            }
                        ),
                        [],
                    );
                    const h = a.useCallback(() => {
                            g(""), f.replace(e);
                        }, [e, f]),
                        E = a.useMemo(
                            () =>
                                (0, l.Z)((e) => {
                                    p.current && (e.length > 0 ? (r ? m({ q: e, p: "1" }) : d("q", e)) : h());
                                }, 1e3),
                            [h, d, m, r],
                        ),
                        y = a.useCallback(
                            (e) => {
                                const { value: t } = e.target;
                                g(t), E(t);
                            },
                            [E],
                        );
                    return a.createElement(s.Z, { Icon: o.default, autoComplete: "off", isCompact: t, leftAligned: !0, onChange: y, onClear: h, placeholder: "Search jobs", styleType: c || "pill", testID: "search-jobs-input", value: b, withClearButton: !0 });
                },
                u = a.memo(c);
        },
        431890: (e, t, r) => {
            r.d(t, { Z: () => c });
            r(571372);
            var a = r(786033),
                n = r(202784),
                s = (r(585488), r(351743)),
                o = r.n(s),
                l = r(782826);
            const i = a.Z,
                c = () => {
                    const { origin: e } = l.ZP.get(),
                        [t, r] = o()(i);
                    return [
                        n.useCallback(
                            ({ errorPath: r, redirectPath: a, verificationFlow: n }) =>
                                new Promise((s, o) => {
                                    const l = `${e}${a}`;
                                    t({
                                        variables: { success_url: l, error_url: r ? `${e}${r}` : l, verification_flow: n || null },
                                        onCompleted: (e, t) => {
                                            if (e.start_identity_verification) {
                                                if (("StartIdentityVerificationResultSuccessAu10tixSession" !== e?.start_identity_verification?.__typename && "StartIdentityVerificationResultSuccessSession" !== e?.start_identity_verification?.__typename) || !e?.start_identity_verification.session_url) return o(new Error("Expected Session URL"));
                                                s(e?.start_identity_verification.session_url);
                                            }
                                        },
                                        onError: o,
                                    });
                                }),
                            [t, e],
                        ),
                        r,
                    ];
                };
        },
        762522: (e, t, r) => {
            r.d(t, { F: () => Z, Z: () => S });
            var a = r(202784),
                n = r(107267),
                s = r(688715),
                o = r(40610),
                l = r(111677),
                i = r.n(l);
            const c = i().i859a9d4,
                u = { message: i().e0ce628e },
                d = { message: i().ddf35536 },
                m = { message: i().db7144b6 },
                b = { message: i().be78e5fa },
                g = { message: i().fa9709ba },
                f = { message: i().j62f13fc },
                p = { message: i().ff5716fc },
                h = { message: i().fd059188 },
                E = { message: i().b82b5c00 },
                y = { title: i().d74adc30, message: i().e4323c36 },
                _ = { title: i().b3323ada, message: i().ac325eb8, priority: 2 },
                C = { title: i().j4e6e966, message: i().ef86e7f6, action: { label: c, link: (0, s.ju)("https://business.x.com/en/help/ads-policies/about-twitter-ads-approval.html") } },
                v = { title: i().c9c8edae, message: i().b36c6278 },
                Z = Object.freeze({ createInvite: "createInvite", resendInvite: "resendInvite", deleteInvite: "deleteInvite", assignBadge: "assignBadge", deleteAffiliate: "deleteAffiliate", createApplication: "createApplication", createJob: "createJob", updateJob: "updateJob", deleteJob: "deleteJob", featureJob: "featureJob", unfeatureJob: "unfeatureJob", configureOrganization: "configureOrganization", atsSyncErrorMessage: "atsSyncErrorMessage", adsAccountIncorrect: "adsAccountIncorrect", adsAccountInvalidFunding: "adsAccountInvalidFunding", adsAccountReviewNeeded: "adsAccountReviewNeeded", missingVOSubscription: "adsAccountReviewNeeded", adsPromoActivation: "adsPromoActivation" }),
                I = (e) => {
                    const t = (0, n.useLocation)(),
                        r = e.error || t.state?.verifiedOrgAdminError,
                        {
                            action: s,
                            message: l,
                            title: i,
                        } = a.useMemo(() => {
                            switch (r) {
                                case Z.createInvite:
                                case Z.resendInvite:
                                    return u;
                                case Z.deleteInvite:
                                    return d;
                                case Z.assignBadge:
                                    return m;
                                case Z.deleteAffiliate:
                                    return b;
                                case Z.createApplication:
                                    return g;
                                case Z.updateJob:
                                    return f;
                                case Z.createJob:
                                    return p;
                                case Z.atsSyncErrorMessage:
                                    return h;
                                case Z.adsAccountIncorrect:
                                    return y;
                                case Z.adsAccountInvalidFunding:
                                    return _;
                                case Z.adsAccountReviewNeeded:
                                    return C;
                                case Z.missingVOSubscription:
                                    return v;
                                case Z.adsPromoActivation:
                                    return E;
                                default:
                                    return {};
                            }
                        }, [r]);
                    return l ? a.createElement(o.Z.Danger, { action: s, headline: i, style: { marginTop: 10 }, text: l, withIcon: !0 }) : null;
                },
                S = a.memo(I);
        },
        794271: (e, t, r) => {
            r.d(t, { Z: () => I });
            var a = r(807896),
                n = r(202784),
                s = r(325686),
                o = r(40610),
                l = r(154003),
                i = r(167630),
                c = r(392237),
                u = r(111677),
                d = r.n(u),
                m = r(187669),
                b = r(736063),
                g = r(952793),
                f = r(782826),
                p = r(293115),
                h = r(725405),
                E = r(431890),
                y = r(241989);
            const _ = d().ea8c295a,
                C = d().ef4602ec,
                v = ({ redirectPath: e, status: t }) => {
                    const r = (0, h.Z)(),
                        [a] = (0, E.Z)(),
                        [c, u] = n.useState(!1),
                        [d, b] = n.useState(!1);
                    (0, m.q)(() => {
                        r.scribe({ element: t, action: "impression" });
                    });
                    const g = n.useCallback(() => {
                            u(!0),
                                b(!1),
                                a({ redirectPath: e, verificationFlow: "VerifiedOrganizationIdv" })
                                    .then((e) => (r.scribe({ element: "redirect", action: "success" }), f.ZP.navigateTo(e)))
                                    .catch(() => {
                                        u(!1), b(!0), r.scribe({ element: "redirect", action: "error" });
                                    });
                        }, [a, r, e]),
                        p = n.useMemo(() => {
                            if ("CanVerifyIdentity" === t) return n.createElement(n.Fragment, null, d ? n.createElement(o.Z.Danger, { text: C }) : null, n.createElement(l.ZP, { disabled: c, onClick: g, testID: "start-idv-button", type: "primaryFilled" }, c ? n.createElement(i.Z, null) : _));
                        }, [t, g, d, c]);
                    return n.createElement(s.Z, { style: S.container, testID: "identity-verification-entrypoint" }, p);
                },
                Z = (e) => {
                    const { enabled: t, status: r } = (0, y.Z)();
                    return t && r ? n.createElement(v, (0, a.Z)({}, e, { status: r })) : null;
                },
                I = (e) => ((0, g.hC)("responsive_web_verified_organizations_idv_enabled") ? n.createElement(b.H, { errorConfig: { context: "identity_verification_entrypoint" } }, n.createElement(p.nO, { namespace: { component: "vo_idv_entrypoint" } }, n.createElement(Z, e))) : null),
                S = c.default.create((e) => ({ container: { gap: e.spaces.space12 } }));
        },
        483686: (e, t, r) => {
            r.d(t, { Z: () => de });
            var a = r(807896),
                n = r(992152),
                s = r(396345),
                o = r(630673),
                l = r(199544),
                i = r(202784),
                c = r(325686),
                u = (r(585488), r(277660)),
                d = r.n(u),
                m = r(154003),
                b = r(731708),
                g = r(392237),
                f = r(111677),
                p = r.n(f),
                h = r(97301),
                E = r(58399),
                y = r(443781),
                _ = r(736063),
                C = r(292546),
                v = r(693510),
                Z = r(540819),
                I = r(482924),
                S = r(948927),
                j = r(630887),
                w = r(284094),
                A = r(454104),
                k = r(3373),
                P = r(22466),
                F = r(457311),
                J = r(965245);
            const x = p().e46cd68e,
                z = g.default.create((e) => ({ containers: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 } })),
                O = () => i.createElement(c.Z, { style: z.containers }, i.createElement(i.Fragment, null, i.createElement(b.ZP, { size: "headline2", weight: "bold" }, x))),
                D = p().ea7f1a42,
                T = g.default.create((e) => ({ containers: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 } })),
                R = () => i.createElement(c.Z, { style: T.containers }, i.createElement(i.Fragment, null, i.createElement(b.ZP, { size: "headline2", weight: "bold" }, D)));
            var L = r(67369),
                M = r(708852);
            const U = p().eba5a8ec,
                B = p().d1cbcb90,
                $ = p().gf66326c,
                Q = g.default.create((e) => ({ container: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 }, colSpan: { gridColumn: "span 2" } })),
                H = () => {
                    const e = (0, L.GS)(),
                        t = (0, M.Vz)();
                    return i.createElement(i.Fragment, null, e ? null : i.createElement(c.Z, { style: Q.container }, i.createElement(b.ZP, { color: "gray700", size: "subtext1", style: e ? null : Q.colSpan, weight: "bold" }, U), i.createElement(b.ZP, { color: "gray700", size: "subtext1", weight: "bold" }, B), t && i.createElement(b.ZP, { color: "gray700", size: "subtext1", weight: "bold" }, $), i.createElement("div", null)));
                },
                V = ({ emptyMessage: e, filteredJobs: t, jobShares: r, jobSharesIdentityFunction: a, jobs: n, jobsIdentityFunction: s, noJobsTitle: o, renderFooter: l, renderJobItem: c, renderJobShareItem: u, useSearchEndpoint: d }) => (0 === r.items_results.length && 0 === n.items_results.length ? i.createElement(F.Z, { header: o, message: e() }) : i.createElement(i.Fragment, null, r.items_results.length > 0 && i.createElement(i.Fragment, null, i.createElement(O, null), i.createElement(H, null), i.createElement(J.Z, { assumedItemHeight: 1, cacheKey: "jobShareList", footer: 0 === n.items_results.length && l(), identityFunction: a, items: r.items_results, renderer: u, withoutHeadroom: n.items_results.length > 0 })), n.items_results.length > 0 && i.createElement(i.Fragment, null, i.createElement(R, null), 0 === r.items_results.length && i.createElement(H, null), i.createElement(J.Z, { assumedItemHeight: 1, cacheKey: "jobList", footer: l(), identityFunction: s, items: n.items_results, renderer: c })))),
                N = ({ emptyMessage: e, filteredJobs: t, jobs: r, jobsIdentityFunction: a, noJobsTitle: n, renderFooter: s, renderJobItem: o, useSearchEndpoint: l }) => {
                    const c = l ? t : r;
                    return i.createElement(i.Fragment, null, c.items_results.length > 0 ? i.createElement(i.Fragment, null, i.createElement(H, null), i.createElement(J.Z, { assumedItemHeight: 1, cacheKey: "jobList", footer: s(), identityFunction: a, items: c.items_results, renderer: o })) : i.createElement(F.Z, { header: n, message: e() }));
                },
                G = l.Z,
                q = o.Z,
                K = s.Z,
                W = n.Z,
                Y = p().b97e952a,
                X = p().cf1fa156,
                ee = p().fa4a4f50,
                te = p().c5fb5a1a,
                re = p().e9b91cde,
                ae = (e) => e.rest_id,
                ne = (e) => e.rest_id,
                se = ({ adminJobAndShareCount: e, currentTab: t, currentTabJobCount: r = 0, filteredAdminJobs: a, jobShares: n, jobs: s, nextCursor: o, orgQueryId: l, prevCursor: u, refetch: g, setCursor: f, totalFeaturedJobCount: y, useSearchEndpoint: _, withPagination: v = !1 }) => {
                    const { basePath: I } = (0, A.Z)(),
                        [S, j] = (0, C.Z)(),
                        F = S.get("p") ? parseInt(S?.get("p"), 10) : 1,
                        J = i.useMemo(() => (F - 1) * w.UZ + 1, [F]),
                        x = i.useMemo(() => {
                            const e = w.UZ * F;
                            return Math.min(e, r || 0);
                        }, [F, r]),
                        z = i.useCallback(() => {
                            j("p", (F + 1).toString()), _ && f(o);
                        }, [F, j, o, f, _]),
                        O = i.useCallback(() => {
                            j("p", (F - 1).toString()), _ && f(u);
                        }, [F, j, u, f, _]),
                        D = d()(G, s),
                        T = d()(K, n),
                        R = d()(q, a),
                        L = i.useCallback((r) => (r?.result?.core ? i.createElement(k.ZP, { adminJobAndShareCount: e, currentTab: t, item: r.result.core, itemId: r.rest_id, jobQueryId: r.result.id, orgQueryId: l, organization: r.result?.recruiting_organization_results?.result, refetch: g, totalFeaturedJobCount: y }) : null), [t, e, l, g, y]),
                        M = i.useCallback((e) => (e?.result?.core?.job_results?.result?.core ? i.createElement(P.Z, { item: e.result.core.job_results.result.core, jobShareItem: e.result.core, jobShareItemId: e.rest_id, orgQueryId: l, organization: e.result.core.job_results.result.recruiting_organization_results?.result, refetch: g }) : null), [l, g]),
                        U = i.useMemo(() => i.createElement(h.default, null), []),
                        B = i.useMemo(() => i.createElement(E.default, null), []),
                        $ = i.useMemo(() => (v && O && z ? i.createElement(c.Z, { style: ue.pagination }, i.createElement(m.ZP, { alignContent: "center", disabled: 1 === J, icon: U, onClick: O, size: "small", testID: "btn-previous", type: "primaryText" }), i.createElement(b.ZP, { size: "subtext2" }, J, " - ", x, " of ", r), i.createElement(m.ZP, { alignContent: "center", disabled: x >= r, icon: B, onClick: z, size: "small", testID: "btn-next", type: "primaryText" })) : null), [z, O, x, J, U, B, r, v]),
                        Q = i.useCallback(() => {
                            const e = i.createElement(b.ZP, { color: "primary", link: `${I}/new` }, re);
                            return i.createElement(
                                i.Fragment,
                                null,
                                i.createElement(
                                    b.ZP,
                                    null,
                                    (() => {
                                        switch (t) {
                                            case Z.n.FEATURED_JOBS:
                                                return X;
                                            case Z.n.ARCHIVED:
                                                return ee;
                                            default:
                                                return Y;
                                        }
                                    })(),
                                ),
                                t === Z.n.JOBS ? i.createElement(c.Z, null, i.createElement(b.ZP, null, i.createElement(p().I18NFormatMessage, { $i18n: "j766b689" }, e))) : null,
                            );
                        }, [I, t]);
                    return i.createElement(i.Fragment, null, t === Z.n.FEATURED_JOBS ? i.createElement(V, { emptyMessage: Q, filteredJobs: R, jobShares: T, jobSharesIdentityFunction: ne, jobs: D, jobsIdentityFunction: ae, noJobsTitle: te, renderFooter: () => $, renderJobItem: L, renderJobShareItem: M, useSearchEndpoint: _ }) : i.createElement(N, { emptyMessage: Q, filteredJobs: R, jobs: D, jobsIdentityFunction: ae, noJobsTitle: te, renderFooter: () => $, renderJobItem: L, useSearchEndpoint: _ }));
                },
                oe = { context: "JobList" },
                le = (e) => {
                    switch (e) {
                        case Z.n.FEATURED_JOBS:
                            return { status: ["open"], featured: [1], keyword: null };
                        case Z.n.ARCHIVED:
                            return { status: ["closed"], featured: [0, 1], keyword: null };
                        default:
                            return { status: ["open"], featured: [0, 1], keyword: null };
                    }
                },
                ie = (e) => {
                    const [t] = (0, C.Z)(),
                        r = t.get("q"),
                        n = t.get("p") ? parseInt(t?.get("p"), 10) : 1,
                        { currentTab: s, totalFeaturedJobCount: o } = e,
                        l = (0, j.hh)(),
                        c = !!r,
                        [u, d] = i.useState(null),
                        { data: m, refetch: b } = (0, I.A)(W, { jobFilterParams: le(s), jobShareFilterParams: { status: ["active"], featured: [1] }, searchParams: { keyword: r }, keywordSearchCount: w.UZ, keywordSearchCursor: u, pageParams: { limit: w.UZ, offset: (n - 1) * w.UZ }, includeAdvertiserAccounts: l });
                    if (!m) return null;
                    const g = m.viewer.user_results.result;
                    if ("User" !== g.__typename) return null;
                    const f = g.recruiting_organization_results?.result?.admin_jobs,
                        p = g.recruiting_organization_results?.result?.consumer_job_search,
                        h = g.recruiting_organization_results?.result?.admin_job_shares;
                    if (!f || !p || !h) return null;
                    const E = c ? p.total_count : f.total_count,
                        y = s === Z.n.FEATURED_JOBS ? o : E,
                        A = g.recruiting_organization_results?.result?.__id,
                        k = g.recruiting_organization_results?.result?.consumer_job_search?.slice_info,
                        P = k?.next_cursor,
                        F = k?.previous_cursor;
                    return i.createElement(_.H, { errorConfig: oe }, i.createElement(v._3, { user: g }, i.createElement(S.Em, { user: g }, i.createElement(se, (0, a.Z)({}, e, { currentTabJobCount: y, filteredAdminJobs: p, jobShares: h, jobs: f, nextCursor: P, orgQueryId: A, prevCursor: F, refetch: b, setCursor: d, useSearchEndpoint: c })))));
                },
                ce = (e) => {
                    const { viewerUserId: t } = (0, y.QZ)();
                    return t ? i.createElement(ie, (0, a.Z)({}, e, { userId: t })) : null;
                },
                ue = g.default.create((e) => ({ pagination: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "end", padding: e.spaces.space16, columnGap: e.spaces.space8 } })),
                de = i.memo(ce);
        },
        3373: (e, t, r) => {
            r.d(t, { ZP: () => je, sy: () => de, CS: () => be, fO: () => me, t4: () => Ie });
            r(136728);
            var a = r(881934),
                n = r(802832),
                s = r(631110),
                o = r(202784),
                l = r(576648),
                i = r(325686),
                c = (r(585488), r(277660)),
                u = r.n(c),
                d = r(107267),
                m = r(67369),
                b = r(708852),
                g = r(731708),
                f = r(966886),
                p = r(470397),
                h = r(952428),
                E = r(190286),
                y = r(392237),
                _ = r(111677),
                C = r.n(_),
                v = r(782642),
                Z = r(457458),
                I = r(985124),
                S = r(762522),
                j = r(454104),
                w = r(571754),
                A = r(154003),
                k = r(17412),
                P = r(191796),
                F = r(630715),
                J = r(607127),
                x = r(443781),
                z = r(540819),
                O = r(948927),
                D = r(630887),
                T = r(837153),
                R = r(322633),
                L = r(614983),
                M = r.n(L),
                U = r(351743),
                B = r.n(U),
                $ = r(258292),
                Q = r(106186);
            const H = C().c49b7262,
                V = C().i6ecf71a,
                N = C().fe8872f4,
                G = C().i08bee0e,
                q = R.Z,
                K = T.Z,
                W = y.default.create((e) => ({ icon: { height: 16, width: 16 }, disabledIcon: { height: 16, width: 16, opacity: 0.5 } })),
                Y = () => {
                    const { job: e, jobId: t, orgQueryId: r, refetch: a, totalFeaturedJobCount: n } = Ie(),
                        { basePath: s } = (0, j.Z)(),
                        l = (0, d.useHistory)(),
                        i = (0, v.p)(),
                        [c, u] = o.useState(!1),
                        [m] = B()(q),
                        [b] = B()(K),
                        g = o.useMemo(() => n < 10, [n]);
                    o.useEffect(() => {
                        u(Boolean(e.featured));
                    }, [e.featured]);
                    const f = o.useCallback(() => {
                            if (!g && !c) return;
                            const e = (e, t) => {
                                    if (!r) return;
                                    const a = e.get(r);
                                    M()(a, "orgRecord must be specified"), a.invalidateRecord();
                                },
                                n = c;
                            u(!c),
                                n
                                    ? b({
                                          variables: { job_id: t },
                                          updater: e,
                                          onCompleted: () => {
                                              i({ text: N, withAutoDismiss: !0 }), a();
                                          },
                                          onError: () => {
                                              l.push(s, { verifiedOrgAdminError: S.F.unfeatureJob });
                                          },
                                      })
                                    : m({
                                          variables: { job_id: t },
                                          updater: e,
                                          onCompleted: (e) => {
                                              e.feature_job_v2?.success ? i({ text: N, withAutoDismiss: !0 }) : (u(n), i({ text: G, withAutoDismiss: !0 })), a();
                                          },
                                          onError: () => {
                                              l.push(s, { verifiedOrgAdminError: S.F.featureJob });
                                          },
                                      });
                        }, [i, s, m, l, c, t, r, a, b, g]),
                        p = o.useCallback(() => (c ? o.createElement($.default, { style: W.icon }) : g || c ? o.createElement(Q.default, { style: W.icon }) : o.createElement(Q.default, { style: W.disabledIcon })), [c, g]);
                    return o.createElement(A.ZP, { hoverLabel: { label: g || c ? (c ? V : H) : G }, icon: o.createElement(p, null), onClick: f, size: "small", testID: c ? "btn-unpin-job" : "btn-pin-job", type: c ? "brandText" : "primaryText" });
                };
            var X = r(167630),
                ee = r(737691);
            const te = C().a37ef120,
                re = C().fe8872f4,
                ae = y.default.create((e) => ({ loader: { padding: e.spaces.space4 }, icon: { height: 16, width: 16 } })),
                ne = () => {
                    const [e, t] = o.useState(!1),
                        { adminJobAndShareCount: r, job: a, jobId: n, orgQueryId: s, refetch: l } = Ie(),
                        { basePath: c, isVerifiedOrg: u } = (0, j.Z)(),
                        m = (0, d.useHistory)(),
                        b = (0, v.p)(),
                        g = o.useCallback(() => {
                            t(!1), b({ text: re, withAutoDismiss: !0 }), l();
                        }, [b, l]),
                        f = o.useCallback(() => {
                            t(!1), m.push(c, { verifiedOrgAdminError: S.F.deleteJob });
                        }, [m, c]),
                        [p] = (0, w.Z)(s, g, f),
                        h = o.useMemo(() => Boolean(a.integration_id), [a.integration_id]),
                        E = o.useCallback(() => {
                            (u || r < 3) && (t(!0), p(n, { status: "open", featured: 0 }));
                        }, [u, r, n, p]),
                        y = o.useMemo(() => !(!u && r >= 3) && !h, [h, u, r]);
                    return o.createElement(o.Fragment, null, e ? o.createElement(i.Z, { style: ae.loader }, o.createElement(X.Z, { size: "small" })) : o.createElement(A.ZP, { disabled: !y, hoverLabel: { label: te }, icon: o.createElement(ee.default, { style: ae.icon }), onClick: E, size: "small", testID: "btn-reopen-job", type: "primaryText" }));
                },
                se = C().c14cdb18,
                oe = C().c30f0168,
                le = C().f508c49c,
                ie = C().c270ef3e,
                ce = y.default.create((e) => ({ actionsContainer: { display: "flex", flexDirection: "row", gap: 2, justifyContent: "flex-end", alignItems: "flex-start" }, mobileActionsContainer: { alignItems: "flex-start" }, icon: { height: 16, width: 16 } })),
                ue = ({ basePath: e, currentTab: t, isIntegration: r, isMobileLayout: a = !1, jobExternalUrl: n, jobId: s, onCopyLink: l, onDelete: c, onReopen: u }) => {
                    const { userClaims: d } = (0, x.QZ)(),
                        m = d.isVerifiedOrg(),
                        b = (0, O.od)(),
                        g = (0, D.zK)(),
                        f = b?.jobPromotionAccount?.id,
                        p = "EligibleJobPromotionAvailable" !== b?.jobPromotionEligibility,
                        h = g && f ? `https://ads.x.com/campaign_form/${f}/campaign/new?objective=16&jobId=${s}` : null,
                        E = o.useMemo(() => (a ? [ce.actionsContainer, ce.mobileActionsContainer] : ce.actionsContainer), [a]);
                    return o.createElement(
                        i.Z,
                        { onClick: (e) => e.preventDefault(), style: E },
                        t !== z.n.ARCHIVED
                            ? o.createElement(
                                  o.Fragment,
                                  null,
                                  h
                                      ? o.createElement(A.ZP, {
                                            disabled: p,
                                            hoverLabel: { label: se },
                                            icon: o.createElement(k.default, { style: ce.icon }),
                                            link: h,
                                            onClick: () => {
                                                !p && h && window.open(h, "_blank");
                                            },
                                            size: "small",
                                            testID: "btn-promote",
                                            type: "primaryText",
                                        })
                                      : null,
                                  o.createElement(Y, null),
                                  n ? o.createElement(A.ZP, { hoverLabel: { label: oe }, icon: o.createElement(P.default, { style: ce.icon }), link: n, onClick: () => window.open(n, "_blank"), size: "small", testID: "btn-open-external-url", type: "primaryText" }) : null,
                                  m ? o.createElement(A.ZP, { hoverLabel: { label: le }, icon: o.createElement(F.default, { style: ce.icon }), onClick: l, size: "small", testID: "btn-copy-job-link", type: "primaryText" }) : null,
                                  o.createElement(A.ZP, { disabled: r, hoverLabel: { label: ie }, icon: o.createElement(J.default, { style: ce.icon }), onClick: c, size: "small", testID: "btn-delete", type: "destructiveText" }),
                              )
                            : o.createElement(ne, null),
                    );
                },
                de = s.Z,
                me = n.Z,
                be = a.Z,
                ge = C().cfd2f35e,
                fe = C().c270ef3e,
                pe = C().f88553c8,
                he = C().fe8872f4,
                Ee = C().d523cd74,
                ye = C().jfd0b34a,
                _e = C().e2247e08,
                Ce = ({ adminJobAndShareCount: e, currentTab: t, job: r, jobId: a, orgQueryId: n, organization: s, refetch: c }) => {
                    const { basePath: u, isVerifiedOrg: y } = (0, j.Z)(),
                        [_, A] = o.useState(!1),
                        k = (0, d.useHistory)(),
                        P = (0, v.p)(),
                        F = `${u}/${a}/edit`,
                        J = o.useCallback(() => {
                            P({ text: he, withAutoDismiss: !0 }), A(!1), c();
                        }, [P, c]),
                        x = o.useCallback(() => {
                            k.push(u, { verifiedOrgAdminError: S.F.deleteJob });
                        }, [k, u]),
                        [z] = (0, w.Z)(n, J, x),
                        O = o.useCallback(() => {
                            z(a, { status: "closed" });
                        }, [z, a]),
                        D = o.useCallback(() => {
                            A(!1);
                        }, []),
                        T = o.useCallback(() => {
                            A(!0);
                        }, []),
                        R = o.useCallback(() => {
                            (y || e < 3) && z(a, { status: "open" });
                        }, [y, e, a, z]),
                        L = o.useCallback(() => {
                            r.job_page_url && (l.Z.setString(r.job_page_url), P({ text: pe, withAutoDismiss: !0 }));
                        }, [P, r.job_page_url]),
                        M = (0, m.Mv)(),
                        U = (0, b.Vz)(),
                        B = o.useCallback(() => {
                            const e = o.createElement(g.ZP, { weight: "bold" });
                            if (r.integration_id) {
                                const t = s?.core?.integration_service_id;
                                return o.createElement(o.Fragment, null, o.createElement(g.ZP, { color: "gray700", size: "subtext2" }, o.createElement(C().I18NFormatMessage, { $i18n: "ef7ce733" }, o.cloneElement(e, null, C().b737c0b5({ ats: t && I.$J[t] ? I.$J[t] : _e })))), U && s?.core?.last_synced_at ? o.createElement(g.ZP, { color: "gray700", size: "subtext2" }, o.createElement(f.Z, { humanReadable: !0, timestamp: s.core.last_synced_at })) : o.createElement("div", null));
                            }
                            return r.updated_at ? o.createElement(o.Fragment, null, M ? null : o.createElement(g.ZP, { color: "gray700", size: "subtext2" }, "-"), U && o.createElement(g.ZP, { color: "gray700", size: "subtext2" }, o.createElement(f.Z, { humanReadable: !0, timestamp: r.updated_at }))) : o.createElement(o.Fragment, null, o.createElement("div", null), o.createElement("div", null));
                        }, [M, U, r.integration_id, r.updated_at, s?.core?.integration_service_id, s?.core?.last_synced_at]),
                        $ = o.useCallback(() => o.createElement(g.ZP, { color: "text", link: F, size: "subtext1", weight: "bold", withUnderline: !0 }, r.title), [r.title, F]),
                        Q = o.useCallback(() => {
                            const e = [o.createElement(g.ZP, { color: "gray700", key: "location", size: "subtext2" }, r.location)];
                            return r.formatted_salary && e.push(o.createElement(g.ZP, { color: "gray700", key: "salary", size: "subtext2" }, (0, Z.M)(r.formatted_salary, r.salary_interval))), e;
                        }, [r.formatted_salary, r.location, r.salary_interval]);
                    return o.createElement(o.Fragment, null, o.createElement(i.Z, { role: "listitem" }, o.createElement(h.Z, { link: F, style: ve.container }, M ? o.createElement(o.Fragment, null, o.createElement(i.Z, { style: ve.mobileContainer }, o.createElement(i.Z, { style: ve.jobTitle }, $(), Q(), B()))) : o.createElement(o.Fragment, null, o.createElement(i.Z, { style: ve.jobTitle }, $(), o.createElement(p.Z, null, Q())), B()), o.createElement(ue, { basePath: u, currentTab: t, isIntegration: Boolean(r.integration_id), isMobileLayout: M, jobExternalUrl: r.external_url, jobId: a, onCopyLink: L, onDelete: T, onReopen: R }))), _ ? o.createElement(E.Z, { cancelButtonLabel: ge, confirmButtonLabel: fe, confirmButtonType: "primary", headline: Ee, onCancel: D, onConfirm: O, text: ye, withCancelButton: !0 }) : null);
                },
                ve = y.default.create((e) => ({ container: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 }, mobileContainer: { display: "flex", flexDirection: "column", gap: 4 }, jobTitle: { gap: 4, gridColumn: "span 2" } })),
                Ze = o.createContext({}),
                Ie = () => o.useContext(Ze),
                Se = ({ adminJobAndShareCount: e, currentTab: t, item: r, itemId: a, jobQueryId: n, orgQueryId: s, organization: l, refetch: i, totalFeaturedJobCount: c }) => {
                    const d = u()(de, r),
                        m = u()(be, l);
                    return d ? o.createElement(Ze.Provider, { value: { job: d, adminJobAndShareCount: e, totalFeaturedJobCount: c, jobId: a, jobQueryId: n, orgQueryId: s, refetch: i } }, o.createElement(Ce, { adminJobAndShareCount: e, currentTab: t, job: d, jobId: a, orgQueryId: s, organization: m, refetch: i })) : null;
                },
                je = o.memo(Se);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.PremiumJobs~ondemand.Verified-e6266db0.3d7a478a.js.map
