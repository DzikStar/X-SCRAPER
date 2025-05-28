"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.PremiumJobs~ondemand.Verified-2ace1ef0"],
    {
        358981: (e, i, t) => {
            t.d(i, { Z: () => r });
            t(202784);
            const r = (0, t(523561).Z)({ loader: () => Promise.resolve().then(t.bind(t, 8262)) });
        },
        897571: (e, i, t) => {
            t.d(i, { Z: () => y });
            t(136728);
            var r = t(202784),
                n = t(325686),
                o = t(107267),
                a = t(868634),
                s = t(731708),
                l = t(154003),
                c = t(392237),
                d = t(111677),
                u = t.n(d),
                m = t(443781),
                b = t(952793),
                g = t(725405),
                _ = t(125363),
                p = t(390387);
            const v = u().cdace6d2,
                f = u().e957c20e,
                h = () => {
                    const e = (0, g.Z)(),
                        i = (0, o.useHistory)(),
                        { userClaims: t } = (0, m.QZ)(),
                        c = t.isFreeVerifiedOrg(),
                        d = (0, _.v9)(p.Lz),
                        u = (0, b.hC)("responsive_web_verified_organizations_free_upgrade_promo_enabled"),
                        h = (0, b.hC)("responsive_web_verified_organizations_free_to_invoice_enabled"),
                        y = (0, b.hC)("responsive_web_verified_organizations_free_invoice_promo_enabled"),
                        P = r.useMemo(() => h && y, [h, y]),
                        A = r.useCallback(() => {
                            e.scribe({ element: "free_vo_upgrade_link", action: "click" }), P ? i.push("/i/verified-welcome", { interval: "Year" }) : i.push("/i/verified-orgs-free-upgrade");
                        }, [e, P, i]);
                    if (c && !d && u) return r.createElement(n.Z, { style: Z.container }, r.createElement(a.ZP, { style: Z.label }, r.createElement(s.ZP, { size: "subtext3" }, f)), r.createElement(l.ZP, { onClick: A, size: "xSmall", textSizeOverride: "subtext3", type: "primaryFilled" }, v));
                },
                y = r.memo(h),
                Z = c.default.create((e) => ({ container: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center" }, label: { alignSelf: "center", backgroundColor: e.colors.activeFaintGray, borderColor: e.colors.borderColor, borderWidth: "1px", paddingVertical: e.spaces.space12, cursor: "default" } }));
        },
        769310: (e, i, t) => {
            t.d(i, { Z: () => D });
            var r = t(202784),
                n = t(325686),
                o = t(67369),
                a = t(731708),
                s = t(40610),
                l = t(392237),
                c = t(111677),
                d = t.n(c),
                u = t(913973),
                m = t(865023),
                b = t(736063),
                g = t(952793),
                _ = t(693510),
                p = t(241989),
                v = t(794271);
            const f = d().d9cbd02c,
                h = d().a1436e70,
                y = d().f9c85cec,
                Z = d().f178f393,
                P = d().c4930cb6,
                A = d().f9fbeabc,
                z = d().b4c80f5c,
                w = d().f0915094,
                E = d().f259d3f3,
                C = d().a1d3f1f2,
                x = d().i859a9d4,
                k = d().ed4759a6;
            function I({ type: e = "default" }) {
                const i = (0, o.yu)(),
                    { hasApplicationStatus: t, hasVerifiedOrgFeature: l } = (0, _.ZP)(),
                    c = (0, g.hC)("responsive_web_verified_organizations_idv_enabled"),
                    { completedByDate: d, enabled: b, status: I } = (0, p.Z)(),
                    j = c && b && "CanVerifyIdentity" === I,
                    D = r.useMemo(() => l(_.ny.BusinessPreapprovalAdminPortalAccess), [l]),
                    S = r.useMemo(() => t(m.i.ApplicationInReview), [t]),
                    V = r.useCallback(
                        () =>
                            j
                                ? r.createElement(
                                      n.Z,
                                      { style: M.callout, testID: "application-in-review-callout" },
                                      r.createElement(a.ZP, { size: "headline2", weight: "heavy" }, y),
                                      r.createElement(a.ZP, null, Z({ date: d })),
                                      r.createElement(a.ZP, { style: M.margin, weight: "bold" }, P),
                                      [A, z, w].map((e, i) => r.createElement(n.Z, { key: `idv-req-${i}`, style: M.requirementRow }, r.createElement(u.default, null), r.createElement(a.ZP, null, e))),
                                      r.createElement(a.ZP, { style: M.margin }, E({ date: d })),
                                      r.createElement(n.Z, { style: M.footer }, r.createElement(v.Z, { redirectPath: "/i/verified" }), r.createElement(a.ZP, { color: "gray900", size: "subtext2", style: i ? null : M.desktopDisclaimer }, C, " ", r.createElement(a.ZP, { link: "https://help.x.com/rules-and-policies/verification-policy" }, x))),
                                  )
                                : "hiring" === e
                                  ? r.createElement(s.Z.Primary, { headline: f, testID: "application-in-review-callout", text: h })
                                  : r.createElement(s.Z.Primary, { headline: f, testID: "application-in-review-callout", text: k }),
                        [e, j, i, d],
                    );
                return D && S ? V() : null;
            }
            const j = (e) => r.createElement(b.H, { errorConfig: S }, r.createElement(I, e)),
                D = r.memo(j),
                M = l.default.create((e) => ({ textFormat: { display: "inline-block", marginBottom: e.spaces.space12 }, callout: { backgroundColor: e.colors.orange50, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space16, gap: e.spaces.space12, alignItems: "flex-start", flexGrow: 1, maxWidth: "100%" }, successLabelRow: { color: e.colors.green500, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, requirementRow: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, desktopDisclaimer: { maxWidth: "60%" }, footer: { gap: e.spaces.space12, alignItems: "flex-start" }, margin: { marginTop: e.spaces.space12 } })),
                S = { context: "VOApplicationStatus" };
        },
        948927: (e, i, t) => {
            t.d(i, { Em: () => b, kb: () => u, od: () => g });
            var r = t(539089),
                n = t(202784),
                o = (t(585488), t(277660)),
                a = t.n(o),
                s = t(630887),
                l = t(678759);
            const c = r.Z,
                d = new Set(["Dso", "Mms"]),
                u = (e) => {
                    const i = ((e) => {
                            const i = (0, s.hh)(),
                                t = a()(c, i ? e : null);
                            return n.useMemo(() => {
                                const e = t?.verified_organization_advertiser_accounts?.items;
                                return (e || []).map((e) => ({ restId: e.rest_id, id: Number(e.rest_id).toString(36), name: e?.name, eligibility: e?.verified_organization_onboarding_state?.eligibility, serviceLevel: e?.service_level, isAuthenticatedUserAuthorized: e?.verified_organization_onboarding_state?.is_authenticated_user_authorized ?? !1 })).filter((e) => null != e.eligibility);
                            }, [t?.verified_organization_advertiser_accounts]);
                        })(e),
                        t = (0, l.Wy)(e);
                    return n.useMemo(() => {
                        const e = t.jobPromotionAdAccount,
                            r = (i ?? []).map((e) => {
                                return [e, ((i = e), i ? (i.isAuthenticatedUserAuthorized && "IneligibleUnauthorized" !== i.eligibility ? ("EligibleHasPaymentMethod" === i.eligibility || ("EligibleNeedsPaymentMethod" === i.eligibility && d.has(i.serviceLevel)) ? "EligibleJobPromotionAvailable" : "IneligibleAdsAccountNeedsAttention") : "IneligibleUnauthorized") : "IneligibleAdsAccountMissing")];
                                var i;
                            });
                        let n = null;
                        null != e && (n = r.find(([i, t]) => i.id === e)), null == n && (n = r.find(([e, i]) => "EligibleJobPromotionAvailable" === i));
                        const [o, a] = n ?? r[0] ?? [null, "IneligibleAdsAccountMissing"];
                        return { accounts: i || [], jobPromotionAccount: o, jobPromotionEligibility: a };
                    }, [i, t.jobPromotionAdAccount]);
                },
                m = n.createContext({ accounts: [], jobPromotionAccount: null, jobPromotionEligibility: "IneligibleAdsAccountMissing" }),
                b = ({ children: e, user: i }) => n.createElement(m.Provider, { value: u(i) }, e),
                g = () => n.useContext(m);
        },
        630887: (e, i, t) => {
            t.d(i, { DC: () => s, hh: () => a, zK: () => o });
            var r = t(443781),
                n = t(693510);
            const o = () => {
                    const { featureSwitches: e, userClaims: i } = (0, r.QZ)(),
                        t = (0, n.hz)(),
                        o = e.isTrue("recruiting_promoted_jobs_enabled"),
                        a = i.isVerifiedOrg() && t.isAdvertisingEnabled();
                    return o && a;
                },
                a = () => {
                    const e = o(),
                        i = (() => {
                            const { featureSwitches: e } = (0, r.QZ)();
                            return e.isTrue("verified_vo_refreshed_advertising_screen_enabled");
                        })();
                    return e || i;
                },
                s = () => o();
        },
        974097: (e, i, t) => {
            t.d(i, { Z: () => l });
            var r = t(337909),
                n = t(202784),
                o = (t(585488), t(351743)),
                a = t.n(o);
            const s = r.Z,
                l = (e, i) => {
                    const [t, r] = a()(s);
                    return [
                        n.useCallback(
                            ({ userId: r }) =>
                                new Promise((n, o) => {
                                    r || n(!1),
                                        t({
                                            variables: { userId: r },
                                            onCompleted: (t, r) => {
                                                n(t), e && e(!0), i && i();
                                            },
                                            onError: o,
                                        });
                                }),
                            [t, e, i],
                        ),
                        r,
                    ];
                };
        },
        284094: (e, i, t) => {
            t.d(i, { $A: () => l, UZ: () => d, ZP: () => u });
            var r = t(126582),
                n = t(396840),
                o = (t(585488), t(353391)),
                a = t.n(o),
                s = t(482924);
            const l = n.Z,
                c = r.Z,
                d = 50,
                u = (e, i) => {
                    const { data: t, refetch: r, refetchStatus: n } = (0, s.A)(c, { keyword: e, includeAdvertiserAccounts: i ?? !1 }),
                        o = t?.viewer?.user_results?.result?.recruiting_organization_results?.result?.__id || "";
                    return (
                        a()([o], () => {
                            r();
                        }),
                        [t, r, n]
                    );
                };
        },
        454104: (e, i, t) => {
            t.d(i, { Z: () => n });
            var r = t(443781);
            const n = () => {
                const { userClaims: e } = (0, r.QZ)(),
                    i = e.isVerifiedOrg();
                return { isVerifiedOrg: i, basePath: i ? "/i/verified/jobs" : "/i/premium/hiring" };
            };
        },
        678759: (e, i, t) => {
            t.d(i, { Qs: () => b, Wy: () => c, pD: () => g });
            var r = t(458187),
                n = t(202784),
                o = (t(585488), t(277660)),
                a = t.n(o),
                s = t(630887);
            const l = r.Z,
                c = (e) => {
                    const i = (0, s.DC)(),
                        t = a()(l, i ? e : null);
                    return n.useMemo(() => d(t?.verified_organization_settings), [t?.verified_organization_settings]);
                },
                d = (e) => ({ jobPromotionAdAccount: u(e?.hiring_job_promotion_ad_account) }),
                u = (e) => e && Number(e).toString(36),
                m = n.createContext({ jobPromotionAdAccount: null }),
                b = ({ children: e, user: i }) => n.createElement(m.Provider, { value: c(i) }, e),
                g = () => n.useContext(m);
        },
        116093: (e, i, t) => {
            t.d(i, { Z: () => n });
            var r = t(830195);
            t(585488);
            const n = r.Z;
        },
        571754: (e, i, t) => {
            t.d(i, { Z: () => d });
            var r = t(691493),
                n = t(202784),
                o = t(614983),
                a = t.n(o),
                s = (t(585488), t(351743)),
                l = t.n(s);
            const c = r.Z,
                d = (e, i, t) => {
                    const [r, o] = l()(c);
                    return [
                        n.useCallback(
                            (n, o) => {
                                const s = (i, t) => {
                                    if (!e) return;
                                    const r = i.get(e);
                                    a()(r, "orgRecord must be specified"), r.invalidateRecord();
                                };
                                return new Promise((e, a) => {
                                    r({
                                        variables: { jobId: n, data: o },
                                        updater: s,
                                        onCompleted: () => {
                                            i && i(), e(!0);
                                        },
                                        onError: (e) => {
                                            t && t(), a(e);
                                        },
                                    });
                                });
                            },
                            [i, t, e, r],
                        ),
                        o,
                    ];
                };
        },
        320362: (e, i, t) => {
            t.d(i, { Z: () => l });
            var r = t(574456),
                n = t(202784),
                o = (t(585488), t(351743)),
                a = t.n(o);
            const s = r.Z,
                l = () => {
                    const [e, i] = a()(s);
                    return [
                        n.useCallback(
                            (i) => {
                                e(i);
                            },
                            [e],
                        ),
                        i,
                    ];
                };
        },
        241989: (e, i, t) => {
            t.d(i, { Z: () => a });
            var r = t(924523),
                n = (t(585488), t(535338));
            const o = r.Z,
                a = () => {
                    const { viewer_v2: e } = (0, n.p)(o, {}),
                        i = e?.user_results.result.verified_organization_identity_verification?.status,
                        t = e?.user_results.result.verified_organization_identity_verification?.id_verification_enabled || !1,
                        r = e?.user_results.result.verified_organization_identity_verification?.completed_by || null;
                    return { enabled: t, status: i, completedByDate: r ? new Date(r).toLocaleDateString(void 0, { year: "numeric", month: "long", day: "numeric" }) : null };
                };
        },
        526581: (e, i, t) => {
            t.d(i, { Jf: () => n, L8: () => o, RV: () => a });
            const r = Object.freeze({ page: "verified-organizations", section: "hiring" }),
                n = Object.freeze({ ...r, component: "job-splash-screen" }),
                o = Object.freeze({ ...r, component: "sync-ats-jobs" }),
                a = (e, i) => ({ verified_organizations_details: { organization_id: i }, items: [{ id: e }] });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.PremiumJobs~ondemand.Verified-2ace1ef0.005810ea.js.map
