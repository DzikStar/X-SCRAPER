"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.PremiumJobs~ondemand.Verified-a094b331"],
    {
        22466: (e, t, a) => {
            a.d(t, { Z: () => H });
            a(136728);
            var n = a(202784),
                r = a(614983),
                l = a.n(r),
                i = a(576648),
                s = a(45843),
                o = a(325686),
                c = a(277660),
                u = a.n(c),
                m = a(67369),
                d = a(708852),
                p = a(731708),
                g = a(966886),
                f = a(470397),
                b = a(952428),
                y = a(190286),
                E = a(392237),
                C = a(332920),
                h = a.n(C),
                x = a(782642),
                Z = a(457458),
                _ = a(320362),
                S = a(3373),
                P = a(154003),
                I = a(191796),
                k = a(630715),
                v = a(607127),
                w = a(443781);
            const z = h().c30f0168,
                D = h().f508c49c,
                j = h().i00355d0,
                A = E.default.create((e) => ({ actionsContainer: { display: "flex", flexDirection: "row", gap: 2, justifyContent: "flex-end", alignItems: "flex-start" }, mobileActionsContainer: { alignItems: "flex-start" }, icon: { height: 16, width: 16 } })),
                F = ({ isIntegration: e, isMobileLayout: t = !1, isShared: a, jobExternalUrl: r, onCopyLink: l, onUnshare: i }) => {
                    const { userClaims: s } = (0, w.QZ)(),
                        c = s.isVerifiedOrg(),
                        u = n.useMemo(() => (t ? [A.actionsContainer, A.mobileActionsContainer] : A.actionsContainer), [t]);
                    return n.createElement(o.Z, { onClick: (e) => e.preventDefault(), style: u }, n.createElement(n.Fragment, null, r ? n.createElement(P.ZP, { hoverLabel: { label: z }, icon: n.createElement(I.default, { style: A.icon }), link: r, onClick: () => window.open(r, "_blank"), size: "small", testID: "btn-open-external-url", type: "primaryText" }) : null, c ? n.createElement(P.ZP, { hoverLabel: { label: D }, icon: n.createElement(k.default, { style: A.icon }), onClick: l, size: "small", testID: "btn-copy-job-link", type: "primaryText" }) : null, n.createElement(P.ZP, { hoverLabel: { label: j }, icon: n.createElement(v.default, { style: A.icon }), onClick: i, size: "small", testID: "btn-delete", type: "destructiveText" })));
                },
                T = h().cfd2f35e,
                B = h().i00355d0,
                O = h().f88553c8,
                M = h().fe8872f4,
                R = h().h0481bba,
                J = h().b9dfdc7a,
                V = ({ job: e, jobShareItem: t, jobShareItemId: a, orgQueryId: r, organization: c, refetch: u }) => {
                    const [E, C] = n.useState(!1),
                        S = (0, x.p)(),
                        P = n.useCallback(() => {
                            S({ text: M, withAutoDismiss: !0 }), C(!1), u();
                        }, [S, u]),
                        [I] = (0, _.Z)(),
                        k = n.useCallback(
                            (e) => {
                                if (!r) return;
                                const t = e.get(r);
                                l()(t, "orgRecord must be specified"), t.invalidateRecord();
                            },
                            [r],
                        ),
                        v = n.useCallback(() => {
                            I({ variables: { id: a, data: { status: "inactive" } }, updater: k, onCompleted: P });
                        }, [P, a, k, I]),
                        w = n.useCallback(() => {
                            C(!0);
                        }, []),
                        z = n.useCallback(() => {
                            C(!1);
                        }, []),
                        D = n.useCallback(() => {
                            e.job_page_url && (i.Z.setString(e.job_page_url), S({ text: O, withAutoDismiss: !0 }));
                        }, [S, e.job_page_url]),
                        j = (0, m.Mv)(),
                        A = (0, d.Vz)(),
                        V = n.useCallback(() => {
                            const e = n.createElement(p.ZP, { weight: "bold" });
                            return n.createElement(n.Fragment, null, c?.profile?.screen_name ? n.createElement(p.ZP, { color: "gray700", size: "subtext2" }, n.createElement(h().I18NFormatMessage, { $i18n: "i958b2bd" }, n.cloneElement(e, null, h().h4847fa2({ userName: `@${c?.profile?.screen_name}` })))) : n.createElement("div", null), A && t.updated_at ? n.createElement(p.ZP, { color: "gray700", size: "subtext2" }, n.createElement(g.Z, { humanReadable: !0, timestamp: t.updated_at })) : n.createElement("div", null));
                        }, [A, t, c?.profile?.screen_name]),
                        L = n.useCallback(() => n.createElement(o.Z, { style: N.titleContainer }, !j && c?.profile?.profile_image_url_https && n.createElement(s.Z, { source: { uri: c.profile.profile_image_url_https }, style: N.logo }), n.createElement(p.ZP, { color: "text", size: "subtext1", weight: "bold" }, e.title)), [e.title, c, j]),
                        H = n.useCallback(() => {
                            const t = [n.createElement(p.ZP, { color: "gray700", key: "location", size: "subtext2" }, e.location)];
                            return e.formatted_salary && t.push(n.createElement(p.ZP, { color: "gray700", key: "salary", size: "subtext2" }, (0, Z.M)(e.formatted_salary, e.salary_interval))), t;
                        }, [e.formatted_salary, e.location, e.salary_interval]);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { role: "listitem" }, n.createElement(b.Z, { style: N.container }, j ? n.createElement(n.Fragment, null, n.createElement(o.Z, { style: N.mobileContainer }, n.createElement(o.Z, { style: N.jobTitle }, L(), H(), V()))) : n.createElement(n.Fragment, null, n.createElement(o.Z, { style: N.jobTitle }, L(), n.createElement(f.Z, null, H())), V()), n.createElement(F, { isIntegration: !1, isMobileLayout: j, isShared: !0, jobExternalUrl: e.external_url, onCopyLink: D, onUnshare: w }))), E ? n.createElement(y.Z, { cancelButtonLabel: T, confirmButtonLabel: B, confirmButtonType: "primary", headline: R, onCancel: z, onConfirm: v, text: J, withCancelButton: !0 }) : null);
                },
                N = E.default.create((e) => ({ container: { display: "grid", gridGap: e.spaces.space12, gridAutoFlow: "column", gridAutoColumns: "1fr", padding: e.spaces.space16 }, mobileContainer: { display: "flex", flexDirection: "column", gap: 4 }, jobTitle: { gap: 4, gridColumn: "span 2" }, titleContainer: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, logo: { width: 18, height: 18, borderRadius: 8 } })),
                L = ({ item: e, jobShareItem: t, jobShareItemId: a, orgQueryId: r, organization: l, refetch: i }) => {
                    const s = u()(S.sy, e),
                        o = u()(S.CS, l),
                        c = u()(S.fO, t);
                    return s ? n.createElement(V, { job: s, jobShareItem: c, jobShareItemId: a, orgQueryId: r, organization: o, refetch: i }) : null;
                },
                H = n.memo(L);
        },
        424892: (e, t, a) => {
            a.r(t), a.d(t, { JobsScreen: () => Mt, QueryContainer: () => Jt, default: () => Lt });
            var n = a(807896),
                r = a(202784),
                l = a(325686),
                i = a(277660),
                s = a.n(i),
                o = a(392237),
                c = a(332920),
                u = a.n(c),
                m = a(187669),
                d = a(545457),
                p = a(252021),
                g = a(443781),
                f = a(736063),
                b = a(952793),
                y = a(292546),
                E = a(782642),
                C = a(693510),
                h = a(482924),
                x = a(897571),
                Z = a(769310),
                _ = a(948927),
                S = a(630887),
                P = a(284094),
                I = a(116093),
                k = a(358981),
                v = (a(136728), a(107267)),
                w = a(708852),
                z = a(507651),
                D = a(985124),
                j = a(540819),
                A = a(771035),
                F = a(454104),
                T = a(483686),
                B = a(731708),
                O = a(154003);
            const M = u().b917fc28,
                R = u().g06035e6,
                J = u().aa16581c,
                V = u().g7bb6f58,
                N = u().i859a9d4,
                L = o.default.create((e) => ({ actionGroup: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, callout: { marginTop: e.spaces.space8, backgroundColor: e.colors.orange0, padding: e.spaces.space16, borderRadius: e.borderRadii.large, display: "flex" }, calloutHorizontal: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space16 }, calloutVertical: { flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space16 }, calloutText: { display: "flex", flexDirection: "column", gap: e.spaces.space16, flexShrink: 1 } })),
                H = ({ advertiserAccounts: e }) => {
                    const t = (0, w.Vz)(),
                        a = r.useMemo(() => (t ? [L.callout, L.calloutHorizontal] : [L.callout, L.calloutVertical]), [t]),
                        n = e.jobPromotionEligibility,
                        i = r.useMemo(() => ("IneligibleAdsAccountMissing" === n ? V : "IneligibleUnauthorized" === n ? J : R), [n]);
                    return r.createElement(l.Z, { style: a, testID: "advertiser-accounts-callout" }, r.createElement(l.Z, { style: L.calloutText }, r.createElement(B.ZP, { color: "text", size: "headline2", weight: "bold" }, M), r.createElement(B.ZP, { color: "text", size: "subtext1" }, i)), r.createElement(O.ZP, { link: "/i/verified-advertising", type: "primaryFilled" }, N));
                };
            var Q = a(744610),
                $ = a(868634),
                G = a(966886);
            const U = u().be103b84,
                Y = u().jf1576ba,
                W = u().ff985a36,
                K = u().e5b8058c,
                q = u().a86e335a,
                X = ({ status: e }) => {
                    const t = r.useRef(new Q.Z.Value(1)).current;
                    r.useEffect(() => {
                        var a;
                        return e === D.rP.SYNC_IN_PROGRESS && ((a = t), Q.Z.loop(Q.Z.sequence([Q.Z.timing(a, { toValue: 0, duration: 1e3, useNativeDriver: !1 }), Q.Z.timing(a, { toValue: 1, duration: 1e3, useNativeDriver: !1 })]))).start(), () => t.resetAnimation();
                    }, [t, e]);
                    const a = r.useMemo(() => ({ opacity: t }), [t]),
                        n = r.useMemo(() => {
                            const t = [ee.statusPip];
                            switch (e) {
                                case D.rP.ENABLED:
                                    t.push(ee.activeStatus);
                                    break;
                                case D.rP.SYNC_FAILED:
                                    t.push(ee.failStatus);
                                    break;
                                case D.rP.SYNC_IN_PROGRESS:
                                    t.push(ee.inProgressStatus);
                                    break;
                                default:
                                    t.push(ee.defaultStatus);
                            }
                            return t;
                        }, [e]),
                        i = r.useMemo(() => {
                            switch (e) {
                                case D.rP.ENABLED:
                                    return U;
                                case D.rP.SYNC_FAILED:
                                    return Y;
                                case D.rP.SYNC_IN_PROGRESS:
                                    return W;
                                default:
                                    return K;
                            }
                        }, [e]);
                    return r.createElement($.ZP, { background: "navigationBackground", bold: !0 }, r.createElement(l.Z, { style: ee.statusContainer }, r.createElement(Q.Z.View, { style: a }, r.createElement(l.Z, { style: n })), r.createElement(B.ZP, null, i.toUpperCase())));
                },
                ee = o.default.create((e) => ({ statusHeader: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 }, atsBadge: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, statusContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, statusPip: { borderRadius: e.borderRadii.infinite, borderWidth: 0, height: e.baseFontSize - 8, width: e.baseFontSize - 8, userSelect: "none" }, activeStatus: { backgroundColor: e.colors.green500 }, inProgressStatus: { backgroundColor: e.colors.yellow500 }, failStatus: { backgroundColor: e.colors.red500 }, defaultStatus: { backgroundColor: e.colors.maskColor } })),
                te = ({ atsText: e, lastSyncedAt: t, status: a }) => r.createElement(l.Z, { style: ee.statusHeader }, r.createElement(l.Z, { style: ee.atsBadge }, r.createElement(X, { status: a }), r.createElement(B.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, e)), t ? r.createElement(B.ZP, { color: "gray700", size: "subtext2" }, q, r.createElement(G.Z, { timestamp: t })) : null);
            var ae = a(974097);
            const ne = u().c9838d68,
                re = u().df6835a6,
                le = u().fc504ea0,
                ie = o.default.create((e) => ({ actionGroup: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, callout: { marginTop: e.spaces.space8, backgroundColor: e.colors.orange0, padding: e.spaces.space16, borderRadius: e.borderRadii.large, display: "flex" }, calloutHorizontal: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space16 }, calloutVertical: { flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space16 }, calloutText: { display: "flex", flexDirection: "column", gap: e.spaces.space16, flexShrink: 1 } })),
                se = ({ orgQueryId: e, refetch: t, userId: a }) => {
                    const [n, i] = (0, ae.Z)(t),
                        s = (0, w.Vz)(),
                        o = r.useCallback(() => {
                            n({ userId: a });
                        }, [n, a]),
                        c = r.useMemo(() => (s ? [ie.callout, ie.calloutHorizontal] : [ie.callout, ie.calloutVertical]), [s]);
                    return r.createElement(l.Z, { style: c }, r.createElement(l.Z, { style: ie.calloutText }, r.createElement(B.ZP, { color: "text", size: "headline2", weight: "bold" }, ne), r.createElement(B.ZP, { color: "text", size: "subtext1" }, re)), r.createElement(O.ZP, { disabled: i, onClick: o, type: "primaryFilled" }, le));
                },
                oe = u().fd00a76a,
                ce = u().a71d7584,
                ue = u().d35f645b,
                me = u().bf534b31,
                de = u().c35aded2,
                pe = ({ adminJobAndShareCount: e, adminJobCount: t, filteredAdminJobCount: a, hasJobs: n, integrationServiceId: i, integrationStatus: s, lastSyncedAt: o, orgQueryId: c, profileModules: u, refetch: m, totalFeaturedJobCount: d, userId: p, usingKeywordSearch: g }) => {
                    const { isVerifiedOrg: f } = (0, F.Z)(),
                        y = (0, w.Ji)(),
                        E = (0, w.Vz)(),
                        C = (0, v.useLocation)(),
                        [h, x] = r.useState(0 === t && 0 === a && d > 0 ? j.n.FEATURED_JOBS : j.n.JOBS),
                        Z = (0, b.hC)("recruiting_verified_orgs_ats_integration_enabled"),
                        P = (0, _.od)(),
                        I = (0, S.zK)(),
                        k = s && i,
                        B = r.useCallback((e) => h === e, [h]),
                        O = r.useCallback(() => {
                            const e = g ? a : t;
                            return e ? ue({ count: e }) : oe;
                        }, [t, a, g]),
                        M = r.useMemo(() => {
                            const e = [{ key: j.n.JOBS, label: O(), isActive: () => B(j.n.JOBS), to: C.pathname, onClick: () => x(j.n.JOBS) }];
                            return e.push({ key: j.n.FEATURED_JOBS, label: d ? me({ count: d }) : ce, isActive: () => B(j.n.FEATURED_JOBS), to: C.pathname, onClick: () => x(j.n.FEATURED_JOBS) }), e.push({ key: j.n.ARCHIVED, label: de, isActive: () => B(j.n.ARCHIVED), to: C.pathname, onClick: () => x(j.n.ARCHIVED) }), e;
                        }, [C.pathname, B, d, O]),
                        R = r.useMemo(() => {
                            const e = [ge.tabContainer];
                            return y ? e.push(ge.desktopContainer) : e.push(ge.mobileContainer), e;
                        }, [y]),
                        J = r.useMemo(() => {
                            const e = [ge.statusContainer];
                            return E ? e.push(ge.desktopStatusContainer) : e.push(ge.mobileStatusContainer), e;
                        }, [E]),
                        V = n && u && 0 === u.length,
                        N = I && "EligibleJobPromotionAvailable" !== P.jobPromotionEligibility,
                        L = V || N;
                    return r.createElement(r.Fragment, null, r.createElement(r.Fragment, null, L ? r.createElement(l.Z, { style: ge.calloutContainer }, V ? r.createElement(se, { orgQueryId: c, refetch: m, userId: p }) : null, N ? r.createElement(H, { advertiserAccounts: P }) : null) : null, r.createElement(l.Z, { style: R }, r.createElement(z.Z, { links: M, style: ge.tabs }), r.createElement(l.Z, { style: J }, f && h === j.n.JOBS ? r.createElement(l.Z, { style: ge.searchContainer }, r.createElement(A.Z, { basePath: "/i/verified/jobs", isCompact: !0, resetPageOnSearch: !0, styleType: "legacyPill" })) : null, k && Z ? r.createElement(te, { atsText: i && D.$J[i] ? `${D.$J[i]}` : "ATS", lastSyncedAt: o, status: s }) : null)), r.createElement(T.Z, { adminJobAndShareCount: e, currentTab: h, totalFeaturedJobCount: d, withPagination: !0 })));
                },
                ge = o.default.create((e) => ({ calloutContainer: { padding: e.spaces.space16 }, tabs: { marginTop: e.spaces.space4, border: "none" }, statusContainer: { flex: 1, marginBottom: e.spaces.space8, paddingHorizontal: e.spaces.space16, gap: e.spaces.space16 }, desktopStatusContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }, mobileStatusContainer: { flexDirection: "column", alignItems: "flex-end", gap: e.spaces.space8 }, tabContainer: { display: "flex", justifyContent: "space-between", borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, desktopContainer: { flexDirection: "row", alignItems: "flex-end" }, mobileContainer: { flexDirection: "column-reverse", alignItems: "flex-start" }, searchContainer: { display: "flex", alignItems: "center", justifyContent: "center" } })),
                fe = r.memo(pe);
            var be = a(67369),
                ye = a(167630),
                Ee = a(992942),
                Ce = a(664727),
                he = a(725516),
                xe = a(762522),
                Ze = a(526581),
                _e = a(62668);
            const Se = u().c3f28126,
                Pe = u().dec1601e,
                Ie = u().be8393da,
                ke = u().i8c856ce,
                ve = u().d8bc6eea,
                we = u().a049efd4,
                ze = u().d12be15a,
                De = o.default.create((e) => ({ benefitsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, benefitItem: { display: "flex", flexDirection: "column", gap: e.spaces.space16 } })),
                je = ({ isVerifiedOrg: e }) => r.createElement(l.Z, { style: De.benefitsContainer }, r.createElement(l.Z, { style: De.benefitItem }, r.createElement(B.ZP, { color: "gray700", size: "subtext1", weight: "bold" }, Se), r.createElement(B.ZP, { color: "gray700", size: "subtext1" }, Pe)), r.createElement(l.Z, { style: De.benefitItem }, r.createElement(B.ZP, { color: "gray700", size: "subtext1", weight: "bold" }, Ie), r.createElement(B.ZP, { color: "gray700", size: "subtext1" }, e ? ve : ke)), e ? r.createElement(l.Z, { style: De.benefitItem }, r.createElement(B.ZP, { color: "gray700", size: "subtext1", weight: "bold" }, we), r.createElement(B.ZP, { color: "gray700", size: "subtext1" }, ze)) : null),
                Ae = u().a511934e,
                Fe = u().fc5bfd96,
                Te = u().e68d2d16,
                Be = u().f7a37e30,
                Oe = u().bfef82f0,
                Me = u().h4b890c2,
                Re = o.default.create((e) => ({ loadingContainer: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }, splashContainer: { marginVertical: e.spaces.space16, display: "flex", flexDirection: "row", gap: e.spaces.space16, marginHorizontal: e.spaces.space16 }, mainContent: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space32 }, header: { display: "flex", flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, beta: { height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }, actionsContainer: { display: "flex", flexDirection: "column", alignItems: "center", gap: e.spaces.space16 }, action: { width: "100%" }, contentLayout: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, imageContainer: { flex: 1, maxWidth: "40%" }, image: { minHeight: "400px" } })),
                Je = r.memo(
                    (0, he.Z)(({ analytics: e, refetch: t, userId: a }) => {
                        const { userClaims: n } = (0, g.QZ)(),
                            i = n.isVerifiedOrg(),
                            s = !(0, be.Fy)(),
                            [o, c] = r.useState(!1),
                            m = (0, v.useHistory)(),
                            d = (0, v.useLocation)(),
                            p = (0, b.hC)("recruiting_verified_orgs_enroll_allowed"),
                            [f, y] = (0, Ce.Z)(),
                            E = r.useCallback(() => {
                                const e = () => {
                                        t();
                                    },
                                    n = () => {
                                        c(!1), m.push(d.pathname, { verifiedOrgAdminError: xe.F.configureOrganization });
                                    };
                                a && (c(!0), f({ variables: { userId: a }, onCompleted: e, onError: n }));
                            }, [a, t, m, d.pathname, f]),
                            C = r.useCallback(() => {
                                E();
                            }, [E]),
                            h = r.useCallback(() => {
                                E();
                            }, [E]),
                            x = r.useCallback(() => r.createElement(l.Z, { style: Re.contentLayout }, r.createElement(B.ZP, { size: "subtext2" }, i ? Oe : Me), r.createElement(je, { isVerifiedOrg: i })), [i]);
                        return t && a ? (y || o ? r.createElement(l.Z, { style: Re.loadingContainer }, r.createElement(ye.Z, null)) : r.createElement(l.Z, { style: Re.splashContainer }, r.createElement(l.Z, { style: Re.mainContent }, r.createElement(l.Z, null, r.createElement(B.ZP, { color: "text", size: "title2", style: Re.header, weight: "heavy" }, Ae, r.createElement(l.Z, { style: Re.beta }, r.createElement($.ZP, { background: "orange50" }, u().h7d5d9fa)))), r.createElement(B.ZP, { color: "gray700", size: "subtext3" }, x()), r.createElement(l.Z, { style: Re.actionsContainer }, p ? r.createElement(O.ZP, { onClick: C, size: "large", style: Re.action, type: "primaryFilled" }, Fe) : r.createElement(r.Fragment, null, r.createElement(O.ZP, { onClick: h, size: "large", style: Re.action, type: "primaryFilled" }, Te), r.createElement(B.ZP, { align: "center", color: "gray700", size: "subtext3" }, Be)))), s ? r.createElement(l.Z, { style: Re.imageContainer }, r.createElement(Ee.Z, { "aria-label": "Jobs preview", resizeMode: "contain", source: _e, style: Re.image })) : null)) : null;
                    }, Ze.Jf),
                );
            var Ve = a(576648),
                Ne = a(138099),
                Le = a(698891),
                He = a(692165),
                Qe = a(720526),
                $e = a(913973),
                Ge = a(39611),
                Ue = a(614983),
                Ye = a.n(Ue),
                We = (a(585488), a(351743)),
                Ke = a.n(We);
            const qe = u().aeac3eb4,
                Xe = Ge.Z,
                et = o.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center" } })),
                tt = r.memo(
                    (0, he.Z)(({ analytics: e, integrationStatus: t, orgQueryId: a, userId: n }) => {
                        const i = (0, v.useHistory)(),
                            [s] = Ke()(Xe),
                            o = r.useCallback(() => {
                                s({
                                    variables: { userId: n },
                                    optimisticUpdater: (e) => {
                                        const t = e.get(`client:${a}:core`);
                                        Ye()(t, "core must be specified"), t.setValue(D.rP.SYNC_IN_PROGRESS, "integration_status");
                                    },
                                    updater: (e, t) => {
                                        const n = e.get(`client:${a}:core`);
                                        Ye()(n, "core must be specified");
                                        const r = t?.start_integration_sync?.success ? D.rP.SYNC_IN_PROGRESS : D.rP.SYNC_FAILED;
                                        n.setValue(r, "integration_status");
                                    },
                                    onCompleted: (t) => {
                                        t.start_integration_sync?.success ? e.scribe({ action: "click", element: "sync-ats-button", data: (0, Ze.RV)(void 0, n) }) : i.push("/i/verified/jobs", { verifiedOrgAdminError: xe.F.atsSyncErrorMessage });
                                    },
                                    onError: () => {
                                        i.push("/i/verified/jobs", { verifiedOrgAdminError: xe.F.atsSyncErrorMessage });
                                    },
                                });
                            }, [e, i, a, s, n]),
                            c = [D.rP.SYNC_IN_PROGRESS, D.rP.DISABLED].includes(t);
                        return r.createElement(l.Z, { style: et.container }, r.createElement(O.ZP, { disabled: c, onClick: o, type: "primaryOutlined" }, qe));
                    }, Ze.L8),
                ),
                at = u().ba96929e,
                nt = u().f58cf1ac,
                rt = u().d248d75e,
                lt = u().c49d8e42,
                it = u().b772cd66,
                st = u().ib244b2e,
                ot = u().f88553c8,
                ct = r.createElement(Le.default, null),
                ut = r.createElement(He.default, null),
                mt = r.createElement(Qe.default, null),
                dt = r.createElement($e.default, null),
                pt = u().b450472c,
                gt = ({ onDismiss: e }) => {
                    const [t, a] = r.useState(!1),
                        n = r.useMemo(() => ({ xHiringEmail: r.createElement(B.ZP, { link: { pathname: "mailto:xhiringsupport@x.com", external: !0 } }) }), []),
                        i = r.useCallback(() => {
                            Ve.Z.setString("xhiringsupport@x.com"), a(!0);
                        }, []);
                    r.useEffect(() => {
                        let e;
                        return (
                            t &&
                                (e = setTimeout(() => {
                                    a(!1);
                                }, 2e3)),
                            () => {
                                clearTimeout(e);
                            }
                        );
                    }, [t]);
                    const s = r.useMemo(() => ({ label: st }), []);
                    return r.createElement(Ne.Z, { onMaskClick: e, style: bt.modalContainer, type: "full", withMask: !0 }, r.createElement(l.Z, { style: bt.modalContent }, r.createElement(B.ZP, { size: "title3", weight: "heavy" }, rt), r.createElement(B.ZP, { color: "text", weight: "bold" }, lt), r.createElement(B.ZP, { color: "gray700" }, r.createElement(u().I18NFormatMessage, { $i18n: "b2c03e03" }, r.cloneElement(n.xHiringEmail, null, u().b36022d1)))), r.createElement(l.Z, { style: bt.modalContent }, r.createElement(O.ZP, { hoverLabel: s, icon: t ? dt : mt, onPress: i, size: "large", type: "primaryOutlined" }, t ? ot : st), r.createElement(O.ZP, { onClick: e, size: "large", type: "primaryFilled" }, it)));
                },
                ft = ({ integrationServiceId: e, integrationStatus: t, isVerifiedOrg: a, jobCount: n, orgQueryId: i, refetch: s, refetchStatus: o, userId: c }) => {
                    const u = (0, v.useLocation)(),
                        [m] = (0, y.Z)(),
                        d = m.get("p") ? parseInt(m?.get("p"), 10) : 1,
                        [p, g] = r.useState(!1),
                        f = (0, b.hC)("responsive_web_verified_organizations_intercom_enabled"),
                        E = (0, b.hC)("recruiting_verified_orgs_ats_integration_enabled") && a,
                        C = Boolean(t && e);
                    r.useEffect(() => {
                        if (t !== D.rP.SYNC_IN_PROGRESS) return;
                        const e = setInterval(() => {
                            "none" === o && t === D.rP.SYNC_IN_PROGRESS && s();
                        }, 5e3);
                        return () => {
                            e && clearInterval(e);
                        };
                    }, [t, s, o]);
                    const h = r.useCallback(() => {
                            g(!0);
                        }, []),
                        x = r.useCallback(() => {
                            g(!1);
                        }, []),
                        Z = a || n < 3;
                    return r.createElement(l.Z, { style: bt.container }, r.createElement(r.Fragment, null, r.createElement(l.Z, { style: bt.header }, r.createElement(B.ZP, { size: "title2", weight: "bold" }, at), r.createElement(l.Z, { style: bt.actions }, E ? r.createElement(r.Fragment, null, C ? r.createElement(tt, { integrationStatus: t, orgQueryId: i, userId: c }) : r.createElement(O.ZP, { link: "/i/verified/jobs/import", size: "medium", type: "primaryFilled" }, pt)) : null, r.createElement(O.ZP, { disabled: !Z, link: Z ? `${u.pathname}/new?p=${d}` : void 0, size: "medium", type: "brandFilled" }, nt), r.createElement(l.Z, { style: bt.iconActions }, r.createElement(O.ZP, { icon: ct, link: `${u.pathname}/settings`, testID: "btn-settings", type: "primaryText" }), !f && r.createElement(O.ZP, { icon: ut, onClick: h, testID: "btn-support", type: "primaryText" }))))), r.createElement(xe.Z, null), p ? r.createElement(gt, { onDismiss: x }) : null);
                },
                bt = o.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                yt = r.memo(ft);
            var Et = a(757700);
            const Ct = a.p + "sample-spotlight.08922eea.png",
                ht = u().aa4c37cc,
                xt = u().f5b3dc1e,
                Zt = u().d4b82638,
                _t = u().e405b1c2,
                St = ({ onDismiss: e, orgQueryId: t, refetch: a, userId: n }) => {
                    const i = (0, be.Fy)(),
                        [s, o] = (0, ae.Z)(a),
                        c = r.useCallback(() => {
                            s({ userId: n }).then(() => {
                                e(!0);
                            });
                        }, [s, e, n]),
                        u = r.useMemo(() => {
                            const e = [Pt.container];
                            return i ? e.push(Pt.mobileContainer) : e.push(Pt.desktopContainer), e;
                        }, [i]),
                        m = r.useMemo(() => (i ? Pt.mobileTextContainer : Pt.textContainer), [i]),
                        d = r.useMemo(() => (o ? r.createElement(ye.Z, { size: "small" }) : void 0), [o]),
                        p = r.useCallback(() => e(!1), [e]);
                    return r.createElement(Et.ZP, { modalSize: "fitChildren", onMaskClick: p, withBackground: !0 }, r.createElement(l.Z, { style: u }, r.createElement(l.Z, { style: m }, r.createElement(B.ZP, { size: "title3", weight: "heavy" }, Zt), r.createElement(B.ZP, { color: "gray700", style: Pt.description }, _t), r.createElement(l.Z, { style: Pt.actionContainer }, r.createElement(O.ZP, { icon: d, onClick: c, size: "large", style: Pt.actionButton, type: "primaryFilled" }, ht), r.createElement(O.ZP, { onClick: p, size: "large", style: Pt.actionButton, type: "primaryOutlined" }, xt))), i ? null : r.createElement(l.Z, { style: Pt.imageContainer }, r.createElement(Ee.Z, { "aria-label": "", resizeMode: "contain", source: Ct, style: Pt.image }))));
                },
                Pt = o.default.create((e) => ({ container: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, desktopContainer: { flexDirection: "row", alignItems: "flex-start" }, mobileContainer: { flexDirection: "column" }, textContainer: { flex: 1, maxWidth: "50%", marginTop: e.spacesPx.space64 }, mobileTextContainer: { flex: 1 }, actionContainer: { marginTop: e.spacesPx.space32 }, actionButton: { marginTop: e.spacesPx.space16 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, imageContainer: { flex: 1 }, image: { minHeight: "500px" } })),
                It = r.memo(St),
                kt = u().a85cda86,
                vt = u().c04b6472,
                wt = u().b450472c,
                zt = u().d14c02d0,
                Dt = u().fc5bfd96,
                jt = u().j24c37b2,
                At = ({ onDismiss: e }) => {
                    const t = (0, v.useHistory)(),
                        a = (0, b.hC)("recruiting_verified_orgs_ats_integration_enabled"),
                        n = r.useCallback(() => e(), [e]),
                        i = r.useCallback(() => {
                            e(), t.push("/i/verified/jobs/new");
                        }, [t, e]),
                        s = r.useCallback(() => {
                            e(), t.push("/i/verified/jobs/import");
                        }, [t, e]);
                    return r.createElement(Et.ZP, { clickMaskToClose: !0, history: t, modalSize: "fitChildren", onMaskClick: n, topOfScreen: !0, withBackground: !0 }, r.createElement(l.Z, { style: Ft.container }, r.createElement(l.Z, null, r.createElement(B.ZP, { size: "title3", weight: "heavy" }, kt), r.createElement(B.ZP, { color: "gray700", style: Ft.description }, vt), r.createElement(l.Z, { style: Ft.actionContainer }, a ? r.createElement(r.Fragment, null, r.createElement(O.ZP, { onClick: s, size: "large", type: "primaryFilled" }, wt), r.createElement(O.ZP, { onClick: i, size: "large", style: Ft.actionButton, type: "primaryOutlined" }, zt)) : r.createElement(r.Fragment, null, r.createElement(O.ZP, { onClick: i, size: "large", type: "primaryFilled" }, Dt), r.createElement(O.ZP, { onClick: e, size: "large", style: Ft.actionButton, type: "primaryOutlined" }, jt))))));
                },
                Ft = o.default.create((e) => ({ container: { padding: e.spacesPx.space32, maxWidth: "500px" }, actionContainer: { marginTop: e.spacesPx.space32 }, actionButton: { marginTop: e.spacesPx.space16 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, imageContainer: { flex: 1 }, image: { minHeight: "500px" } })),
                Tt = r.memo(At),
                Bt = u().accbcc78,
                Ot = u().g2c0144a,
                Mt = (e) => {
                    const { userClaims: t } = (0, g.QZ)(),
                        a = t.isVerifiedOrg(),
                        [n, i] = r.useState(!1),
                        [o, c] = r.useState(!1),
                        [u, d] = r.useState(!1),
                        [f, y] = r.useState(!1),
                        { history: C, organization: _, refetch: S, refetchStatus: v, userId: w, usingKeywordSearch: z } = e,
                        {
                            data: { user: D },
                            refetch: j,
                        } = (0, h.A)(I.Z, { userId: w }),
                        A = window.location,
                        F = (0, E.p)(),
                        T = s()(P.$A, _?.core),
                        B = _?.__id ?? "";
                    (0, m.q)(() => {
                        a && !A.pathname.startsWith("/i/verified/jobs") && C.replace("/i/verified/jobs");
                    });
                    const O = (0, b.hC)("recruiting_verified_orgs_ats_integration_enabled") && a,
                        M = r.useCallback(
                            (e) => {
                                e && F({ text: Bt, withAutoDismiss: !0 }), y(!0), d(!1);
                            },
                            [F],
                        ),
                        R = _?.filtered_job_count?.total_count || 0,
                        J = _?.featured_job_count?.total_count || 0,
                        V = _?.featured_job_shares_count?.total_count || 0,
                        N = J + V,
                        L = _?.job_count?.total_count || 0,
                        H = L + V;
                    r.useEffect(() => {
                        !_?.id || 0 !== H || ((!O || (T?.integration_status && T?.integration_service_id)) && O) || "/i/verified/jobs" !== A.pathname || n || c(!0);
                    }, [O, A.pathname, n, _?.id, T?.integration_status, T?.integration_service_id, H]);
                    const Q = r.useCallback(() => {
                            i(!0), c(!1);
                        }, []),
                        $ = D.result?.profilemodules?.v1;
                    r.useEffect(() => {
                        _?.id && H >= 1 && $ && 0 === $.length && "/i/verified/jobs" === A.pathname && !f && d(!0);
                    }, [A.pathname, $, H, f, _?.id]);
                    const G = Boolean(H > 0);
                    return r.createElement(r.Fragment, null, r.createElement(p.Z, { TabBar: a ? k.Z : void 0, history: C, isFullWidth: !0, primaryContent: r.createElement(r.Fragment, null, !!T && a && r.createElement(l.Z, { style: Rt.applicationStatus }, r.createElement(Z.Z, { type: "hiring" })), r.createElement(yt, { integrationServiceId: T?.integration_service_id, integrationStatus: T?.integration_status, isVerifiedOrg: a, jobCount: H, orgQueryId: B, refetch: S, refetchStatus: v, userId: w }), T ? r.createElement(fe, { adminJobAndShareCount: H, adminJobCount: L, filteredAdminJobCount: R, hasJobs: G, integrationServiceId: T.integration_service_id, integrationStatus: T.integration_status, lastSyncedAt: T.last_synced_at, orgQueryId: B, profileModules: $, refetch: j, totalFeaturedJobCount: N, userId: w, usingKeywordSearch: z }) : r.createElement(Je, { refetch: S, userId: w })), rightControl: r.createElement(x.Z, null), sidebarContent: null, title: a ? Ot : null, withTweetButton: !1 }), u ? r.createElement(It, { onDismiss: M, orgQueryId: B, refetch: j, userId: w }) : null, o ? r.createElement(Tt, { onDismiss: Q }) : null);
                },
                Rt = o.default.create((e) => ({ applicationStatus: { marginHorizontal: e.spaces.space16 } })),
                Jt = (e) => {
                    const [t] = (0, y.Z)(),
                        a = t.get("q") || null,
                        l = (0, S.hh)(),
                        [i, s, o] = (0, P.ZP)(a, l),
                        c = r.useMemo(() => i?.viewer?.user_results?.result, [i?.viewer?.user_results?.result]),
                        u = r.useMemo(() => c?.recruiting_organization_results?.result, [c?.recruiting_organization_results?.result]);
                    return c?.rest_id ? r.createElement(C._3, { user: c }, r.createElement(_.Em, { user: c }, r.createElement(Mt, (0, n.Z)({}, e, { organization: u, refetch: s, refetchStatus: o, userId: c.rest_id, usingKeywordSearch: !!a })))) : null;
                },
                Vt = { context: "JobsList" },
                Nt = (e) => ((0, d.ph)(), r.createElement(f.H, { errorConfig: Vt }, r.createElement(Jt, e))),
                Lt = r.memo(Nt);
        },
        62668: (e, t, a) => {
            e.exports = a.p + "splash-preview.9856fd5a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.PremiumJobs~ondemand.Verified-a094b331.575f734a.js.map
