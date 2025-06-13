"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-0cd3da2a"],
    {
        818224: (e, t, a) => {
            a.r(t), a.d(t, { default: () => x });
            var r = a(807896),
                i = (a(136728), a(986611)),
                n = a(230820),
                s = a(202784),
                l = (a(585488), a(277660)),
                c = a.n(l),
                o = a(111677),
                d = a.n(o),
                m = a(545457),
                u = a(252021),
                p = a(736063),
                f = a(535338),
                g = a(762522),
                b = a(454104),
                _ = a(571754),
                y = a(3373),
                E = a(406098),
                h = a(358981);
            n.Z;
            const v = i.Z,
                Z = d().g2c0144a,
                C = d().b075c68a,
                w = (e) => {
                    const { jobId: t } = e,
                        a = (0, f.p)(v, { jobId: t }),
                        i = a?.job_by_rest_id?.result?.core,
                        n = a?.job_by_rest_id?.result?.user_results?.result?.recruiting_organization_results?.result?.__id;
                    return i && n ? s.createElement(k, (0, r.Z)({}, e, { job: i, jobId: t, orgQueryId: n })) : null;
                },
                k = ({ history: e, job: t, jobId: a, orgQueryId: r }) => {
                    const { basePath: i, isVerifiedOrg: n } = (0, b.Z)(),
                        l = c()(y.sy, t),
                        o = s.useCallback(() => {
                            e.push(i);
                        }, [i, e]),
                        d = s.useCallback(() => {
                            e.push(`${i}/${a}/edit`, { verifiedOrgAdminError: g.F.updateJob });
                        }, [e, i, a]),
                        [m, p] = (0, _.Z)(r, o, d),
                        f = s.useCallback(
                            (e) => {
                                const t = { ...e };
                                m(a, t);
                            },
                            [a, m],
                        ),
                        v = s.useCallback(() => {
                            e.push(i);
                        }, [i, e]);
                    if (!l) return null;
                    return s.createElement(u.Z, { TabBar: n ? h.Z : void 0, history: e, isFullWidth: !0, primaryContent: s.createElement(E.Z, { formTitle: C, isIntegration: Boolean(l.integration_id), isMutationInFlight: p, job: l, onCancel: v, onSubmit: f }), sidebarContent: null, title: n ? Z : null, withTweetButton: !1 });
                },
                I = { context: "EditJobScreen" },
                z = (e) => ((0, m.ph)(), e.match.params.jobId ? s.createElement(p.H, { errorConfig: I }, s.createElement(w, (0, r.Z)({}, e, { jobId: e.match.params.jobId }))) : null),
                x = s.memo(z);
        },
        748828: (e, t, a) => {
            a.r(t), a.d(t, { default: () => F });
            a(136728);
            var r = a(202784),
                i = a(392772),
                n = a(107267),
                s = a(111677),
                l = a.n(s),
                c = a(782826),
                o = a(725516),
                d = a(125363),
                m = a(390387),
                u = a(82497),
                p = a(731822),
                f = a(325686),
                g = a(731708),
                b = a(30899),
                _ = a(154003),
                y = a(392237),
                E = a(322481);
            const h = l().b0efe690,
                v = l().g5f9cdaa,
                Z = l().j21911de,
                C = l().b59dec9e,
                w = l().e5ff0e1e,
                k = l().ca004c80,
                I = l().fae108ee,
                { origin: z } = c.ZP.get(),
                x = `${z}/i/verified-orgs-free-upgrade`,
                P = ({ buttonLabel: e, priceElements: t, selectedInterval: a, selectedTier: i }) => {
                    const [n, s] = r.useState(!1),
                        l = r.useCallback((e) => r.createElement(f.Z, { style: A.container }, r.createElement(g.ZP, { size: "title3", style: A.heading, weight: "bold" }, v), r.createElement(g.ZP, null, C), r.createElement(f.Z, { role: "list", style: A.list }, r.createElement(g.ZP, { weight: "bold" }, w), r.createElement(g.ZP, { role: "listitem", style: A.listItem }, k), r.createElement(g.ZP, { role: "listitem", style: A.listItem }, I)), r.createElement(g.ZP, { weight: "bold" }, Z), r.createElement(E.Z, { buttonLabel: h, cancelUrl: x, isTierSwitch: !1, priceElements: t, selectedInterval: a, selectedTier: i, showDisclaimer: !1, withDiscount: !0 })), [t, a, i]);
                    return "Basic" === i ? r.createElement(b.Z, { onDismiss: () => s(!1), onOpen: () => s(!0), renderContent: l }, r.createElement(_.ZP, { "aria-expanded": n, "aria-haspopup": "dialog", role: "button", type: "primaryFilled" }, e)) : r.createElement(E.Z, { buttonLabel: e, cancelUrl: x, isTierSwitch: !1, priceElements: t, selectedInterval: a, selectedTier: i, showDisclaimer: !1, withDiscount: !0 });
                },
                A = y.default.create((e) => ({ button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 }, badgeStyle: { marginEnd: e.spaces.space12 }, container: { display: "flex", flexDirection: "column", paddingHorizontal: e.spaces.space32, paddingVertical: e.spaces.space16 }, heading: { paddingTop: e.spaces.space16 }, list: { marginTop: e.spaces.space16 }, listItem: { display: "list-item", listStyle: "disc", listStylePosition: "inside", paddingBottom: e.spaces.space16 }, fullAccessButton: { marginTop: e.spaces.space8 } })),
                S = r.memo(P),
                T = (e, t) => {
                    const a = (0, p.f)(e, t, { withDiscount: !0 });
                    return { ...a, buttonLabel: "Basic" === e ? l().a51acce8 : l().ie132f40, promotionInfo: { ...a.promotionInfo, promoLabel: "FullAccess" === e ? l().d6b932d4 : void 0 } };
                },
                B = () => {
                    const e = { Year: T("Basic", "Year"), Month: T("Basic", "Month") },
                        t = { Year: T("FullAccess", "Year"), Month: T("FullAccess", "Month") };
                    return r.createElement(i.v, {
                        SubscribeButton: S,
                        basicPrices: e,
                        fullAccessPrices: t,
                        interval: "Year",
                        sectionConfig: [
                            { key: "title", order: 1, visible: !0 },
                            { key: "voCards", order: 2, visible: !0 },
                            { key: "offerBanner", order: 3, visible: !0 },
                            { key: "pricing", order: 4, showTitle: !1, visible: !0 },
                            { key: "socialProof", order: 5, visible: !0 },
                            { key: "benefits", order: 6, visible: !0 },
                            { key: "andMore", order: 7, showTitle: !0, visible: !0 },
                            { key: "hero", order: 8, visible: !0 },
                            { key: "offerBanner", order: 9, visible: !0 },
                            { key: "footer", order: 10, visible: !0 },
                        ],
                    });
                },
                F = () => {
                    const e = (0, n.useHistory)(),
                        t = (0, o.z)(),
                        a = (0, d.v9)(m.Lz);
                    return (
                        r.useEffect(() => {
                            if (a) e.push("/i/verified/home");
                            else {
                                const a = (0, c.G3)(e.location);
                                t.scribe({ page: "verified-organizations-free-upgrade", section: "welcome", component: "sign-up", action: "impression", data: { referer: a, referring_page: a } });
                            }
                        }, [t, e, a]),
                        r.createElement(u.Z, null, r.createElement(B, null))
                    );
                };
        },
        516575: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var r = a(202784),
                i = a(107267),
                n = a(516951),
                s = a(727828);
            const l = (e) => {
                const t = (0, i.useHistory)(),
                    a = (0, i.useLocation)().state,
                    l = a?.variant,
                    c = a?.messageOverride,
                    o = a?.dismissPath,
                    d = r.useCallback(() => {
                        o ? t.replace(o) : t.goBack();
                    }, [t, o]);
                return l ? r.createElement(s.Z, { messageOverride: c ?? void 0, onAction: n.Z, onClose: d, variant: l }) : null;
            };
        },
        290931: (e, t, a) => {
            a.r(t), a.d(t, { default: () => X });
            var r = a(202784),
                i = a(348943),
                n = a(325686),
                s = a(67369),
                l = a(731708),
                c = a(40610),
                o = a(167630),
                d = a(154003),
                m = a(682830),
                u = a(392237),
                p = a(111677),
                f = a.n(p),
                g = a(913973),
                b = a(115553),
                _ = a(736063),
                y = a(293115),
                E = a(725405),
                h = a(817010),
                v = a(8262);
            const Z = f().f06b124e,
                C = f().h677fdcc,
                w = f().a55b39aa,
                k = f().d46bcb3a,
                I = f().c6bcf72c,
                z = f().d478604c,
                x = f().c09f8cd2,
                P = f().d814f020,
                A = f().f600b6f0,
                S = f().i8debc4a,
                T = f().c5199f3c,
                B = f().c20f923e,
                F = r.createElement(f().I18NFormatMessage, { $i18n: "dc53cac9" }, r.createElement(l.ZP, { link: "https://help.x.com/rules-and-policies/x-trademark-policy" }, f().b2fd4c15)),
                D = () => {
                    const e = (0, s.yu)();
                    return r.createElement(n.Z, { style: [H.container, e ? H.containerSmall : H.containerLarge] }, r.createElement("hr", { style: H.rule }), r.createElement(l.ZP, { color: "gray1100", size: "title4" }, Z), r.createElement(n.Z, { style: H.question }, r.createElement(l.ZP, { color: "gray1100" }, C), r.createElement(l.ZP, { color: "gray900" }, w)), r.createElement(n.Z, { style: H.question }, r.createElement(l.ZP, { color: "gray1100" }, k), r.createElement(l.ZP, { color: "gray900" }, I)), r.createElement(n.Z, { size: "headline2", style: H.question }, r.createElement(l.ZP, { color: "gray1100" }, z), r.createElement(l.ZP, { color: "gray900" }, x)), r.createElement(n.Z, { size: "headline2", style: H.question }, r.createElement(l.ZP, { color: "gray1100" }, P), r.createElement(l.ZP, { color: "gray900" }, A)), r.createElement(n.Z, { size: "headline2", style: H.question }, r.createElement(l.ZP, { color: "gray1100" }, S), r.createElement(l.ZP, { color: "gray900" }, T)), r.createElement(n.Z, { size: "headline2", style: H.question }, r.createElement(l.ZP, { color: "gray1100" }, B), r.createElement(l.ZP, { color: "gray900" }, F)));
                },
                H = u.default.create((e) => ({ container: { gap: e.spaces.space32, marginBottom: e.spaces.space72 }, containerSmall: {}, containerLarge: { paddingHorizontal: e.spaces.space72 }, question: { gap: e.spaces.space12 }, rule: { width: "100%", backgroundColor: e.colors.gray50, height: "1px", border: "none" } })),
                L = f().ad37d536,
                O = f().e760074a,
                U = f().j003ef92,
                M = f().d57a8e42,
                q = f().g2c0144a,
                j = f().fc5bfd96,
                N = f().h9367bd6,
                V = f().a6a62e7e,
                R = f().e5912290,
                $ = f().c2e24f66,
                W = f().c94f514e,
                Y = f().cf60d152,
                G = () => {
                    const e = (0, E.Z)(),
                        [t, a] = r.useState(!1),
                        [m, u] = r.useState(!1),
                        p = (0, s.yu)(),
                        f = (0, h.Z)();
                    r.useEffect(() => {
                        e.scribePageImpression();
                    }, [e]),
                        r.useEffect(() => {
                            f &&
                                ((0, i.onHide)(() => {
                                    u(!1), a(!1);
                                }),
                                (0, i.onShow)(() => {
                                    u(!0), a(!1);
                                }));
                        }, [f]);
                    const b = r.useMemo(() => r.createElement(l.ZP, { link: "https://business.x.com/assets/resources/X-Handle-Transfer-Agreement.pdf" }, L), []);
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            n.Z,
                            { style: [Q.container, p ? Q.containerSmall : Q.containerLarge] },
                            r.createElement(l.ZP, { align: "center", size: "title2", weight: "bold" }, O),
                            r.createElement(l.ZP, { align: "center", color: "gray900", size: "body" }, U),
                            r.createElement(c.Z.Primary, { style: p ? Q.calloutSmall : Q.calloutLarge, text: M }),
                            r.createElement(
                                n.Z,
                                { style: [Q.inquiryContainer, p ? Q.inquiryContainerSmall : Q.inquiryContainerLarge] },
                                t
                                    ? r.createElement(r.Fragment, null, r.createElement(n.Z, { style: Q.inquiryHeader }, r.createElement(l.ZP, { size: "headline2", weight: "medium" }, R), r.createElement(o.Z, { size: "small" })), r.createElement(l.ZP, { color: "gray900" }, $, " ", b))
                                    : m
                                      ? r.createElement(r.Fragment, null, r.createElement(n.Z, { style: Q.inquiryHeader }, r.createElement(l.ZP, { size: "headline2", weight: "medium" }, W), r.createElement(g.default, { style: Q.checkmarkIcon })), r.createElement(l.ZP, { color: "gray900" }, Y, " ", b))
                                      : r.createElement(
                                            r.Fragment,
                                            null,
                                            r.createElement(n.Z, { style: Q.inquiryHeader }, r.createElement(l.ZP, { size: "headline2", weight: "medium" }, N)),
                                            r.createElement(l.ZP, { color: "gray900" }, V, " ", b),
                                            r.createElement(
                                                d.ZP,
                                                {
                                                    onClick: () => {
                                                        (0, i.trackEvent)("buy_handle_form"), a(!0), e.scribe({ element: "start_inquiry_button", action: "click" });
                                                    },
                                                    size: "large",
                                                    style: Q.button,
                                                    type: "primaryFilled",
                                                },
                                                j,
                                            ),
                                        ),
                            ),
                            r.createElement(D, null),
                            r.createElement(n.Z, { style: Q.gradient }),
                        ),
                    );
                },
                K = (e) => r.createElement(_.H, { errorConfig: { context: "handles_screen" }, suspenseFallback: r.createElement(m.J, null) }, r.createElement(y.nO, { namespace: { page: "verified-organizations", section: "handles" } }, r.createElement(b.A, { TabBar: v.default, history: e.history, isFullWidth: !0, primaryContent: r.createElement(G, e), sidebarContent: null, title: q, withTweetButton: !1 }))),
                X = r.memo(K),
                Q = u.default.create((e) => ({ container: { flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: e.spaces.space16 }, containerSmall: { marginTop: e.spaces.space32, paddingHorizontal: e.spaces.space16 }, containerLarge: { marginTop: e.spaces.space64, paddingHorizontal: e.spaces.space64 }, inquiryContainer: { alignItems: "flex-start", marginBottom: e.spaces.space32, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, padding: e.spaces.space24, height: 200 }, inquiryContainerSmall: { width: "100%" }, inquiryContainerLarge: { width: "50%", alignSelf: "center" }, button: { marginTop: e.spaces.space16 }, gradient: { backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.navigationBackground} 100%)`, width: "100%", start: 0, height: "150px", position: "sticky", bottom: 0, pointerEvents: "none" }, calloutSmall: { marginTop: e.spaces.space8, width: "100%" }, calloutLarge: { marginTop: e.spaces.space32, width: "50%" }, inquiryHeader: { gap: e.spaces.space8, flexDirection: "row", marginBottom: e.spaces.space8 }, checkmarkIcon: { color: e.colors.green500 } }));
        },
        823906: (e, t, a) => {
            a.r(t), a.d(t, { default: () => y });
            var r = a(202784),
                i = a(279043),
                n = a(107267),
                s = a(952793),
                l = a(782826),
                c = a(725516),
                o = a(125363),
                d = a(390387),
                m = a(82497),
                u = a(731822),
                p = a(322481);
            const { origin: f } = l.ZP.get(),
                g = `${f}/i/hiring`,
                b = ({ buttonLabel: e, priceElements: t, selectedInterval: a, selectedTier: i }) => {
                    const n = (0, s.hC)("responsive_web_verified_organizations_new_year_offer_enabled");
                    return r.createElement(p.Z, { buttonLabel: e, cancelUrl: g, isTierSwitch: !1, priceElements: t, selectedInterval: a, selectedTier: i, showDisclaimer: !1, withDiscount: n });
                },
                _ = () => {
                    const e = (0, s.hC)("responsive_web_verified_organizations_new_year_offer_enabled"),
                        t = { Year: (0, u.f)("Basic", "Year", { withDiscount: e }), Month: (0, u.f)("Basic", "Month") },
                        a = { Year: (0, u.f)("FullAccess", "Year", { withDiscount: e }), Month: (0, u.f)("FullAccess", "Month") },
                        n = { benefits: { order: 5, visible: !0 }, footer: { order: 6, visible: !0 }, pricing: { order: 3, visible: !0 }, stats: { order: 4, visible: !0 }, title: { order: 1, visible: !0, withCTA: !1 }, offerBanner: { order: 2, visible: e } };
                    return r.createElement(i.v, { SubscribeButton: b, basicPrices: t, fullAccessPrices: a, sectionConfig: n, subscribeUrl: "#pricing" });
                },
                y = () => {
                    const e = (0, n.useHistory)(),
                        t = (0, c.z)(),
                        a = !!(0, o.v9)(d._h);
                    return (
                        r.useEffect(() => {
                            const a = (0, l.G3)(e.location);
                            t.scribe({ page: "hiring-landing", section: "welcome", component: "sign-up", action: "impression", data: { referer: a, referring_page: a } });
                        }, [t, e]),
                        r.createElement(m.Z, null, a ? r.createElement(_, null) : r.createElement(i.v, { SubscribeButton: b, basicPrices: void 0, fullAccessPrices: void 0, sectionConfig: { benefits: { order: 4, visible: !0 }, footer: { order: 5, visible: !0 }, pricing: { order: 2, visible: !1 }, stats: { order: 3, visible: !0 }, title: { order: 1, visible: !0, withCTA: !0 } }, subscribeUrl: "/i/flow/login?redirect_after_login=/i/hiring" }))
                    );
                };
        },
        162893: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Ze });
            var r = a(202784),
                i = a(325686),
                n = a(67369),
                s = a(731708),
                l = a(661810),
                c = a(392237),
                o = a(111677),
                d = a.n(o),
                m = a(187669),
                u = a(115553),
                p = a(943914),
                f = a(952793),
                g = a(293115),
                b = a(725405),
                _ = a(125363),
                y = a(390387),
                E = a(919022),
                h = a(665979),
                v = a(907357),
                Z = a(44988),
                C = a(897571),
                w = a(769310),
                k = a(358981),
                I = a(369924),
                z = (a(585488), a(443781)),
                x = a(736063),
                P = a(535338),
                A = a(286960);
            const S = d().a76d58ba,
                T = ["Impressions", "Engagements", "Spend"],
                B = I.Z,
                F = r.memo(({ queryArgs: e, timeFrameArgs: t }) => {
                    const a = (0, P.p)(B, { ...e.variables, ...t }, e.options),
                        i = { current_organic_metrics: null, past_organic_metrics: null, advertiser_accounts_by_primary_promotable_user: { items: [{ current_promoted_metrics: a.user.result.verified_organization_analytics_metrics.current_metrics, past_promoted_metrics: a.user.result.verified_organization_analytics_metrics.past_metrics }] } };
                    return r.createElement(A.If, { metrics: i, metricsKeysToRender: T, showTimeMessage: !1 });
                }),
                D = ({ timeFrameArgs: e }) => {
                    const { viewerUserId: t } = r.useContext(z.rC),
                        a = (0, n.yu)(),
                        [l] = r.useState({ variables: { rest_id: t, to_time: e.to_time, from_time: e.from_time } });
                    return r.createElement(i.Z, { testID: "voAdsAnalytics" }, r.createElement(i.Z, { style: [a ? L.sectionHeadingMobile : L.sectionHeading, a ? L.column : L.row] }, r.createElement(i.Z, null, r.createElement(s.ZP, { size: "headline1", weight: "bold" }, S))), r.createElement(F, { queryArgs: l, timeFrameArgs: e }));
                },
                H = (e) => r.createElement(x.H, { errorConfig: { context: "VoAdsAnalytics" } }, r.createElement(D, e)),
                L = c.default.create((e) => ({ sectionHeading: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, marginTop: e.spaces.space8 }, sectionHeadingMobile: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space16, marginTop: e.spaces.space8 }, row: { flexDirection: "row", justifyContent: "space-between" }, column: { flexDirection: "column", alignItems: "flex-start" }, analyticsGrid: { marginBottom: e.spaces.space72 } }));
            var O = a(136174),
                U = a(59908),
                M = a(40610),
                q = a(497110),
                j = a(973014),
                N = a(30899),
                V = a(371344),
                R = a(154003),
                $ = a(642153),
                W = a(894966),
                Y = a(956272),
                G = a(978789);
            const K = d().h24a8862,
                X = d().c29e3a88,
                Q = d().j8318d57,
                J = d().bf809ec0,
                ee = d().b719e224,
                te = d().c9938100,
                ae = ({ affiliates: e, onAffiliateIdsChange: t }) => {
                    const a = (0, b.Z)(),
                        [n, c] = r.useState(e || []),
                        [o, d] = r.useState(!1),
                        [m, u] = r.useState(""),
                        p = (e) => {
                            c(e), t(e.map((e) => e.result?.legacy?.id_str || "")), a.scribe({ component: "organic_analytics", element: "affiliate_filter", action: "change" });
                        },
                        f = (e) => {
                            u(e.target.value);
                        },
                        g = () => {
                            d(!0);
                        },
                        _ = () => {
                            d(!1), u("");
                        },
                        y = r.useMemo(() => m.length > 0, [m]),
                        E = r.useMemo(
                            () =>
                                e.filter((e) => {
                                    const t = e.result?.core?.screen_name?.toLowerCase().includes(m.toLowerCase()),
                                        a = e.result?.core?.name?.toLowerCase().includes(m.toLowerCase());
                                    return !o || t || a;
                                }),
                            [e, m, o],
                        );
                    return e ? r.createElement(i.Z, { style: re.affiliateFilter }, r.createElement(N.Z, { contentStyle: re.popover, onDismiss: _, renderContent: () => r.createElement(i.Z, null, r.createElement(i.Z, { style: re.affiliateFilterHeader }, o ? r.createElement(r.Fragment, null, r.createElement(V.Z, { autoFocus: !0, leftAligned: !0, leftContent: r.createElement(R.ZP, { icon: r.createElement(W.default, null), onClick: _, style: re.backButton, type: "primaryText" }), onChange: f, style: re.fieldTextInput })) : r.createElement(r.Fragment, null, r.createElement(s.ZP, { size: "headline1", weight: "bold" }, J), r.createElement(R.ZP, { icon: r.createElement(Y.default, null), onClick: g, style: re.searchButton, type: "primaryText" }))), r.createElement(l.Z, null), o ? (y && 0 === E.length ? r.createElement(s.ZP, { color: "gray900", size: "subtext2", style: re.label }, ee) : r.createElement(s.ZP, { color: "gray900", size: "subtext2", style: re.label }, te)) : null, r.createElement(G.Z, { affiliates: o ? E : e, onSelectedChange: p, selectedAffiliates: n, withSelectAll: !o })) }, r.createElement(R.ZP, { "aria-label": K, size: "small", style: re.infoButton, type: n.length > 0 ? "brandFilled" : "primaryOutlined" }, 0 === n.length ? r.createElement(s.ZP, null, X) : null, n.length > 0 ? r.createElement(i.Z, { style: re.affiliateFilterInner }, r.createElement(s.ZP, null, Q({ number: n.length })), r.createElement($.Z, { userAvatarSize: "medium", userAvatarUrls: n.slice(0, 4).map((e) => e.result.avatar?.image_url || "") })) : null))) : null;
                },
                re = c.default.create((e) => ({ affiliateFilter: { flexDirection: "column" }, affiliateFilterInner: { alignItems: "center", flexDirection: "row", gap: e.spaces.space8 }, affiliateFilterHeader: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between", minHeight: e.spaces.space64 }, affiliateFilterDesc: { marginTop: e.spaces.space8 }, infoButton: { position: "relative", start: `-${e.spaces.space4}` }, searchButton: { position: "relative", end: -6 }, backButton: {}, fieldTextInput: {}, popover: { minWidth: 300 }, label: { padding: e.spaces.space16 }, selectButtons: { flexDirection: "row" } })),
                ie = d().h75e3618,
                ne = ({ affiliates: e, excludeOrg: t, handleExcludeOrgChange: a, onAffiliateIdsChange: s }) => {
                    const l = (0, n.yu)(),
                        c = (0, f.hC)("blue_business_analytics_affiliate_filtering_enabled"),
                        o = !t,
                        d = (0, b.Z)(),
                        m = r.useCallback(() => {
                            d.scribe({ component: "organic_analytics", element: "include_org_checkbox", action: "click" }), a(!o);
                        }, [a, o, d]);
                    return r.createElement(i.Z, { style: [se.controls, l ? se.column : se.row], testID: "organicControls" }, r.createElement(i.Z, { style: se.checkbox }, c && e ? r.createElement(ae, { affiliates: e, onAffiliateIdsChange: s }) : null, r.createElement(j.Z, { compact: !0, mode: o ? "active" : "expand", onClick: m, selected: o, testID: "includeOrgSelectionPill", text: ie })));
                },
                se = c.default.create((e) => ({ controls: { paddingHorizontal: e.spaces.space16, alignItems: "flex-end", marginTop: e.spaces.space8, flexWrap: "wrap" }, column: { flexDirection: "column", alignItems: "flex-start" }, checkbox: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, iconInfo: { color: e.colors.gray900, fontSize: e.fontSizes.headline2 }, infoContainer: { padding: e.spaces.space24 }, infoDescription: {}, affiliateFilter: { flexDirection: "column" }, affiliateFilterInner: { alignItems: "center", flexDirection: "row", gap: e.spaces.space8 }, affiliateFilterHeader: { paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, affiliateFilterDesc: { marginTop: e.spaces.space8 } })),
                le = d().g512ddcc,
                ce = d().eccd0e1a,
                oe = d().deea1708,
                de = d().eb603ffc,
                me = d().gf67aae4,
                ue = ["Impressions", "EngagementRate", "Follows", "Replies", "Likes", "Retweets"],
                pe = U.Z,
                fe = O.Z,
                ge = r.memo(({ queryArgs: e, timeFrameArgs: t }) => {
                    const a = (0, P.p)(fe, { ...e.variables, ...t }, e.options),
                        n = { current_organic_metrics: a.user.result.verified_organization_analytics_metrics.current_metrics, past_organic_metrics: a.user.result.verified_organization_analytics_metrics.past_metrics };
                    return r.createElement(i.Z, { style: _e.analyticsGrid }, r.createElement(A.If, { metrics: n, metricsKeysToRender: ue, showTimeMessage: !1 }));
                }),
                be = ({ timeFrameArgs: e }) => {
                    const { userClaims: t, viewerUserId: a } = r.useContext(z.rC),
                        l = t.isTrueAndEnabled("subscriptions_feature_organization_affiliates"),
                        c = (0, f.hC)("blue_business_analytics_affiliate_filtering_enabled"),
                        o = (0, f.hC)("blue_business_ads_metrics"),
                        d = (0, n.yu)(),
                        { affiliateLimit: m } = (0, q.Z)(),
                        u = (0, P.p)(pe, { count: m }),
                        p = u.viewer?.user_results?.result,
                        g = p?.business_team_affiliates?.items_results?.filter((e) => !e?.result.privacy?.protected),
                        b = (g ?? []).length > 0,
                        [_, y] = r.useState({ variables: { rest_id: a, to_time: e.to_time, from_time: e.from_time, exclude_organization: !1, affiliate_ids: c ? (g || []).map((e) => e.result?.legacy?.id_str || "") : null }, options: { networkCacheConfig: { metadata: { forcePost: !0 } } } }),
                        E = r.useCallback(
                            (e) => {
                                y({ ..._, variables: { ..._.variables, affiliate_ids: e } });
                            },
                            [_],
                        ),
                        h = r.useCallback(
                            (e) => {
                                y({ ..._, variables: { ..._.variables, exclude_organization: !e } });
                            },
                            [_],
                        ),
                        v = r.useMemo(() => r.createElement(M.Z.Primary, { action: { label: me, link: "/i/verified-orgs-tier-switch" }, headline: oe, style: _e.callout, text: de }), []);
                    return r.createElement(i.Z, { testID: "voOrganicAnalytics" }, l ? null : v, r.createElement(i.Z, { style: [d ? _e.sectionHeadingMobile : _e.sectionHeading, d ? _e.column : _e.row] }, r.createElement(i.Z, null, r.createElement(s.ZP, { size: "headline1", weight: "bold" }, o ? le : ce))), l && b ? r.createElement(ne, { affiliates: g, excludeOrg: _.variables.exclude_organization, handleExcludeOrgChange: h, onAffiliateIdsChange: E }) : null, r.createElement(x.H, { errorConfig: { context: "VoAnalyticsGrid" } }, r.createElement(ge, { queryArgs: _, timeFrameArgs: e })));
                },
                _e = c.default.create((e) => ({ sectionHeading: { paddingHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 }, sectionHeadingMobile: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space16, marginTop: e.spaces.space8 }, row: { flexDirection: "row", justifyContent: "space-between" }, column: { flexDirection: "column", alignItems: "flex-start" }, title: { marginTop: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, descriptiodescriptionn: { marginTop: e.spaces.space8 }, analyticsGrid: { marginBottom: e.spaces.space24 }, callout: { width: "unset", marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } })),
                ye = d().g2c0144a,
                Ee = d().i5f14be7,
                he = new Date(),
                ve = (e) => {
                    const t = (0, f.hC)("blue_business_ads_metrics"),
                        a = (0, n.yu)(),
                        c = (0, _.v9)(y.Lz),
                        o = (0, b.Z)();
                    (0, m.q)(() => {
                        o.scribe({ action: "impression" });
                    });
                    const d = (0, _.v9)(E.ZP.selectViewerUser),
                        u = r.useCallback((e) => (0, Z.Hk)(he)(e), []),
                        [p, g] = r.useState({ to_time: (0, Z.iX)(he).toISOString(), from_time: (0, h.b7)(u(7)).toISOString() }),
                        C = r.useCallback((e) => {
                            g({ to_time: (0, Z.iX)(e.endDate).toISOString(), from_time: (0, h.b7)(e.startDate).toISOString() });
                        }, []);
                    return r.createElement(i.Z, null, r.createElement(i.Z, { style: Ce.row }, r.createElement(w.Z, null)), r.createElement(i.Z, { style: a ? Ce.column : Ce.row }, r.createElement(s.ZP, { size: "title2", weight: "bold" }, Ee({ displayName: d?.name })), r.createElement(v.Z, { onChange: C })), r.createElement(l.Z, { spacing: "space12" }), r.createElement(be, { timeFrameArgs: p }), t && !c ? r.createElement(H, { timeFrameArgs: p }) : null);
                },
                Ze = (e) => r.createElement(p.B, null, r.createElement(g.nO, { namespace: { page: "verified_organizations", section: "home" } }, r.createElement(u.A, { TabBar: k.Z, history: e.history, isFullWidth: !0, primaryContent: r.createElement(ve, e), rightControl: r.createElement(C.Z, null), sidebarContent: null, title: ye, withTweetButton: !1 }))),
                Ce = c.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, column: { flexDirection: "column", marginTop: e.spaces.space16, paddingHorizontal: e.spaces.space16, gap: e.spaces.space12 }, rightControl: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center" }, label: { alignSelf: "center", backgroundColor: e.colors.activeFaintGray, borderColor: e.colors.borderColor, borderWidth: "1px", paddingVertical: e.spaces.space12, cursor: "default" } }));
        },
        286766: (e, t, a) => {
            a.r(t), a.d(t, { default: () => F });
            a(136728);
            var r = a(202784),
                i = a(576648),
                n = a(325686),
                s = a(731708),
                l = a(154003),
                c = a(392237),
                o = a(111677),
                d = a.n(o),
                m = a(720526),
                u = a(913973),
                p = a(131907),
                f = a(293723),
                g = a(757700),
                b = a(952793),
                _ = a(693510),
                y = a(854219);
            const E = d().b450472c,
                h = d().b33d1518,
                v = d().dd2db402,
                Z = d().edb098c2,
                C = d().c4474460,
                w = d().a08da0fa,
                k = d().b772cd66,
                I = d().ib244b2e,
                z = d().f88553c8,
                x = d().c127374e,
                P = r.createElement(m.default, null),
                A = r.createElement(u.default, null),
                S = r.createElement(p.default, null),
                T = ({ text: e }) => r.createElement(n.Z, { style: B.iconItem }, r.createElement(f.default, null), r.createElement(s.ZP, null, e)),
                B = c.default.create((e) => ({ root: { padding: e.spaces.space48, gap: e.spaces.space20, maxWidth: "600px" }, group: { gap: e.spaces.space12 }, iconItems: { gap: e.spaces.space28, marginBottom: e.spaces.space8 }, iconItem: { flexDirection: "row", gap: 8, alignItems: "center" }, supportButton: { width: "100%" } })),
                F = ({ history: e }) => {
                    const [t, a] = r.useState(!1),
                        { hasVerifiedOrgFeature: c } = (0, _.ZP)(),
                        o = c("BusinessPreapprovalAdminPortalAccess"),
                        m = (0, b.hC)("responsive_web_verified_organizations_intercom_enabled") && !o,
                        u = r.useCallback(() => {
                            e.push("/i/verified/jobs");
                        }, [e]),
                        p = r.useCallback(() => {
                            i.Z.setString("xhiringsupport@x.com"), a(!0);
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
                    const f = r.useMemo(() => ({ label: I }), []);
                    return r.createElement(g.ZP, { clickMaskToClose: !0, history: e, modalSize: "fitChildren", topOfScreen: !0, withBackground: !0 }, r.createElement(n.Z, { style: B.root }, r.createElement(s.ZP, { size: "title4", weight: "bold" }, E), r.createElement(s.ZP, { weight: "bold" }, h), r.createElement(s.ZP, { weight: "bold" }, v), r.createElement(n.Z, { style: B.iconItems }, r.createElement(T, { text: d().b2cb2a0c }), r.createElement(T, { text: d().b8e64002 }), r.createElement(T, { text: d().acb99db6 })), r.createElement(n.Z, { style: B.group }, r.createElement(s.ZP, { weight: "bold" }, m ? Z : C), r.createElement(s.ZP, { color: "gray700", size: "subtext1" }, m ? d().a64a5b7a : d().e3dffb4e)), m ? r.createElement(y.Z, null, r.createElement(l.ZP, { hoverLabel: f, icon: S, size: "large", style: B.supportButton, type: "primaryOutlined" }, x)) : r.createElement(l.ZP, { hoverLabel: f, icon: t ? A : P, onPress: p, size: "large", type: "primaryOutlined" }, t ? z : I), r.createElement(n.Z, { style: B.group }, r.createElement(s.ZP, { weight: "bold" }, w), r.createElement(s.ZP, { color: "gray700", size: "subtext1" }, d().b4fef99e)), r.createElement(s.ZP, { color: "gray700", size: "subtext1" }, d().h37f2d96), r.createElement(l.ZP, { onClick: u, size: "large", type: "primaryFilled" }, k)));
                };
        },
        507364: (e, t, a) => {
            a.d(t, { Z: () => D });
            var r = a(143011),
                i = a(202784),
                n = a(325686),
                s = (a(585488), a(277660)),
                l = a.n(s),
                c = a(392237),
                o = a(965245),
                d = a(725516),
                m = (a(136728), a(56106)),
                u = a(107267),
                p = a(952428),
                f = a(154003),
                g = a(529356),
                b = a(111677),
                _ = a.n(b),
                y = a(837020),
                E = a(412876),
                h = a(553660),
                v = a(762522),
                Z = a(550496);
            const C = _().f323d314,
                w = _().c2dfbb86,
                k = _().cfd2f35e,
                I = _().ac645cde,
                z = _().d12af2dd,
                x = _().ib60b2d5,
                P = m.Z;
            function A({ currentUserIds: e, disabled: t = !1, item: a }) {
                const r = (0, u.useHistory)(),
                    s = (0, d.z)(),
                    c = i.useRef(!1),
                    o = l()(P, a),
                    m = o.invitee_id_results.result,
                    [b, _] = i.useState(!1),
                    [A, S] = i.useState(!1),
                    [B, F] = (0, Z.ao)({ itemRef: o, currentUserIds: e }),
                    [D, H] = (0, Z.QG)({ itemRef: o, currentUserIds: e }),
                    L = l()(P, a).invitee_id_results.result;
                function O() {
                    _(!1);
                }
                i.useEffect(
                    () => (
                        (c.current = !0),
                        () => {
                            c.current = !1;
                        }
                    ),
                    [],
                );
                const U = i.useCallback(() => {
                    c.current && _(!1),
                        B()
                            .then(() => {
                                (L && "User" !== L.__typename) || s.scribe({ component: "invitations", element: "delete-invitation-confirmation", action: "click", data: { verified_organizations_details: { invitee_id: L.rest_id, organization_id: e.restId } } });
                            })
                            .catch(() => {
                                r.push("/i/verified", { verifiedOrgAdminError: v.F.deleteInvite });
                            });
                }, [B, r, s, L, e]);
                function M() {
                    S(!1);
                }
                const q = i.useCallback(() => {
                        c.current && S(!1),
                            D()
                                .then(() => {
                                    (L && "User" !== L.__typename) || s.scribe({ component: "invitations", element: "resend-invitation-confirmation", action: "click", data: { verified_organizations_details: { invitee_id: L.rest_id, organization_id: e.restId } } });
                                })
                                .catch(() => {
                                    r.push("/i/verified", { verifiedOrgAdminError: v.F.resendInvite });
                                });
                    }, [D, r, s, e, L]),
                    j = i.createElement(y.default, { testID: "closeIcon" });
                return i.createElement(
                    n.Z,
                    { role: "listitem" },
                    i.createElement(
                        p.Z,
                        { style: T.root },
                        "User" === m.__typename ? i.createElement(n.Z, { style: T.user }, i.createElement(E.Z, { size: "xLarge", user: m }), i.createElement(h.Z, { style: T.userName, user: m, withLink: !0, withStackedLayout: !0 })) : null,
                        i.createElement(
                            n.Z,
                            { style: T.actions },
                            i.createElement(
                                f.ZP,
                                {
                                    disabled: H || t,
                                    onClick: function () {
                                        S(!0);
                                    },
                                    style: T.resendInvite,
                                    type: "primaryOutlined",
                                },
                                C,
                            ),
                            i.createElement(f.ZP, {
                                disabled: F || t,
                                hoverLabel: { label: "Remove", preferredHorizontalOrientation: "start" },
                                icon: j,
                                onClick: function () {
                                    _(!0);
                                },
                                testID: "removeInvitationButton",
                                type: "destructiveOutlined",
                            }),
                        ),
                    ),
                    b && "User" === m.__typename && m.core?.screen_name ? i.createElement(g.Z, { actionLabel: w, actionType: "primaryFilled", enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: z({ screenName: m.core.screen_name }), onAction: U, onClose: O, onSecondaryAction: O, secondaryActionLabel: k, secondaryActionType: "primaryOutlined", subtext: I }) : null,
                    A && "User" === m.__typename && m.core?.screen_name ? i.createElement(g.Z, { actionLabel: w, actionType: "primaryFilled", enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: x({ screenName: m.core.screen_name }), onAction: q, onClose: M, onSecondaryAction: M, secondaryActionLabel: k, secondaryActionType: "primaryOutlined", subtext: "" }) : null,
                );
            }
            const S = i.memo(A),
                T = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, user: { alignItems: "center", flexDirection: "row", flexShrink: 1 }, verifiedIcon: { color: e.colors.badgeColor }, userName: { marginHorizontal: e.spaces.space8 }, actions: { flexDirection: "row" }, resendInvite: { marginEnd: e.spaces.space8 } })),
                B = r.Z;
            function F(e) {
                const { disabled: t = !1, slice: a, userIds: r } = e,
                    s = (0, d.z)();
                i.useEffect(() => {
                    s.scribe({ component: "invitations", action: "impression" });
                }, [s]);
                const c = l()(B, a),
                    m = i.useCallback((e) => (r ? i.createElement(S, { currentUserIds: { __id: r.currentUserId, restId: r.adminId }, disabled: t, item: e }) : null), []),
                    u = c.items;
                return u
                    ? i.createElement(
                          n.Z,
                          { style: H.wrapper },
                          i.createElement(o.Z, {
                              assumedItemHeight: 64,
                              cacheKey: "invitationList",
                              footer: null,
                              identityFunction: function (e) {
                                  return e.__id;
                              },
                              items: u,
                              renderer: m,
                              withoutHeadroom: !0,
                          }),
                      )
                    : null;
            }
            const D = i.memo(F),
                H = c.default.create((e) => ({ wrapper: { paddingBottom: e.spaces.space64 } }));
        },
        30325: (e, t, a) => {
            a.r(t), a.d(t, { InviteScreen: () => ie, default: () => le });
            a(136728);
            var r = a(202784),
                i = a(325686),
                n = a(351743),
                s = a.n(n),
                l = a(107267),
                c = a(731708),
                o = a(823161),
                d = a(973014),
                m = a(96083),
                u = a(40610),
                p = a(154003),
                f = a(392237),
                g = a(111677),
                b = a.n(g),
                _ = a(236012),
                y = a(980407),
                E = a(443781),
                h = a(736063),
                v = a(874088),
                Z = a(952793),
                C = a(666670),
                w = a(339110),
                k = a(725516),
                I = a(700797),
                z = a(481326),
                x = a(762522),
                P = a(550496),
                A = a(492253),
                S = a(432883),
                T = a(375839),
                B = a(731822),
                F = a(71620),
                D = a(668214),
                H = a(601576),
                L = a(919022);
            const O = (0, D.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, F.zr)("VO_INVITE_SCREEN"), fetchOneUserByScreenName: L.ZP.fetchOneByScreenName, addToast: H.fz })),
                U = b().b5447710,
                M = b().h94755b8,
                q = b().bfb5effe,
                j = b().c4b9664e,
                N = b().g0eadcf6,
                V = b().a8c81f88,
                R = b().b5334780,
                $ = b().e5abe772,
                W = b().e49b97e2,
                Y = b().cfd2f35e,
                G = b().f002f1d6,
                K = b().g2a8bae4,
                X = b().af7293cc,
                Q = b().ec0f203e,
                J = b().cec08784,
                ee = b().ab70828f,
                te = [w.my.Users],
                ae = b().gdb7bc25,
                re = /^(\w+)$/,
                ie = ({ addToast: e, createLocalApiErrorHandler: t, fetchOneUserByScreenName: a }) => {
                    const n = (0, l.useHistory)(),
                        f = (0, Z.hC)("responsive_web_verified_organizations_invoice_enabled"),
                        g = (0, Z.hC)("blue_business_direct_invites_enabled"),
                        h = (0, Z.hC)("responsive_web_verified_organizations_invoice_update_enabled"),
                        F = (0, Z.hC)("responsive_web_verified_organizations_free_to_invoice_enabled"),
                        D = (0, Z.D2)("blue_business_vo_free_affiliate_limit").getNumberValue(),
                        { userClaims: H } = r.useContext(E.rC),
                        L = (0, k.z)(),
                        O = H.isFreeVerifiedOrg(),
                        ie = (0, P.ZH)(),
                        se = (0, Z.hC)("responsive_web_verified_organizations_free_invoice_promo_enabled") && F && O,
                        [{ viewer: le }, ce, oe] = (0, A.Z)("network-only"),
                        de = ce + oe,
                        { interval: me, tier: ue } = (0, T.Z)(),
                        pe = (0, B.f)(ue, me),
                        { affiliateLimit: fe, cacheKey: ge } = (0, P.n5)(),
                        [be, _e] = r.useState([]),
                        ye = fe || (H.isFreeVerifiedOrg() ? D : null),
                        Ee = be.length + de,
                        he = !!ye && Ee > ye,
                        ve = f && !O && !h,
                        Ze = h && !O,
                        Ce = r.useMemo(() => (Ze && ye ? { minAffiliateLimit: ye, invoiceAction: z.hA.updateSeats, cacheKey: ge } : void 0), [Ze, ye, ge]),
                        we = ve && he,
                        ke = r.useMemo(() => ({ learnMoreLink: r.createElement(c.ZP, { link: z.Ld }) }), []),
                        Ie = r.useMemo(() => r.createElement(b().I18NFormatMessage, { $i18n: "if6e211f" }, r.cloneElement(ke.learnMoreLink, null, b().d49b389f)), [ke]);
                    r.useEffect(() => {
                        if ((L.scribe({ component: "invite", action: "impression" }), ye && de >= ye && !ve)) return n.push("/i/verified-welcome", Ce);
                    }, [n, L, he, ve, de, ye, Ce]);
                    const [ze] = s()(S.F),
                        xe = r.useCallback((e) => !!be.find((t) => t.id_str === e), [be]),
                        Pe = r.useCallback(
                            (e) => {
                                const t = [...be, e];
                                _e(t);
                            },
                            [be],
                        ),
                        Ae = r.useCallback(
                            (e) => {
                                _e(be.filter((t) => e !== t.id_str));
                            },
                            [be],
                        ),
                        Se = r.useCallback(
                            (e, t) => {
                                t && t.id_str && (e ? Pe(t) : Ae(t.id_str));
                            },
                            [Pe, Ae],
                        ),
                        Te = r.useCallback(
                            (e, t) => {
                                _e([]), n.push(e, t);
                            },
                            [n],
                        ),
                        Be = r.useCallback(() => {
                            if (he && !ve) return void Te("/i/verified-welcome", { ...(se ? { ...Ce, interval: "Year" } : Ce) });
                            const e = le?.user_results?.result;
                            "User" === e?.__typename
                                ? (be.forEach((t) => {
                                      const a = (0, I.oR)(e.__id, "AffiliatesScreenAffiliatesQuery_verified_organization_invitations", { invitation_type: _.x.Affiliate });
                                      return ze({
                                          variables: { organization_id: e.rest_id, invitee_id: t.id_str, sliceID: a, invitation_detail: ie },
                                          onCompleted: () => {
                                              L.scribe({ component: "invite", element: "send-invitations", action: "click", data: { verified_organizations_details: { invitee_id: t.id_str, organization_id: e.rest_id } } });
                                          },
                                          onError: () => {
                                              n.push("/i/verified/affiliates", { verifiedOrgAdminError: x.F.createInvite });
                                          },
                                      });
                                  }),
                                  Te("/i/verified/affiliates"))
                                : Te("/i/verified/affiliates");
                        }, [he, ve, le?.user_results?.result, be, Te, se, Ce, ze, ie, L, n]),
                        Fe = r.useCallback(() => {
                            Te("/i/verified/affiliates");
                        }, [Te]),
                        De = (e) => r.createElement(o.default, { "aria-hidden": !0, focusable: !1, size: "custom", uri: e.profile_image_url_https }),
                        He = r.useCallback(
                            (e) => {
                                const t = le?.user_results?.result;
                                if (t?.verified_organization_invitations) {
                                    const a = t?.verified_organization_invitations.items.find((t) => {
                                        const a = t.invitee_id_results.result;
                                        if ("User" === a.__typename) return a.legacy?.id_str === e;
                                    });
                                    return !!a;
                                }
                                return !1;
                            },
                            [le],
                        ),
                        Le = r.useCallback(
                            (e) => {
                                const t = le?.user_results?.result;
                                if (t?.business_team_affiliates) {
                                    const a = t.business_team_affiliates?.items_results.find((t) => {
                                        if ("User" === t.result.__typename) return t.result.legacy?.id_str === e;
                                    });
                                    return !!a;
                                }
                                return !1;
                            },
                            [le],
                        ),
                        Oe = r.useCallback((e) => !(!e.highlightedLabel || "BusinessLabel" !== e.highlightedLabel.userLabelType || Le(e.id_str)), [Le]),
                        Ue = r.useCallback(
                            (e) => {
                                const t = le?.user_results?.result;
                                return "User" === t?.__typename && e === t.rest_id;
                            },
                            [le],
                        ),
                        Me = r.useCallback(
                            (r) => {
                                if (r.type === w.El.User) xe(r.id) ? Ae(r.id) : Pe(r.data);
                                else if (r.type === w.El.NoResult) {
                                    const { query: i, type: n } = r.data;
                                    if ("user" === n && i) {
                                        const r = Ve(i);
                                        r &&
                                            a(r)
                                                .then((t) => {
                                                    if (t && t.result && t?.entities?.users[t.result]) {
                                                        const a = t.entities.users[t.result],
                                                            r = a.id_str;
                                                        xe(r) ? e({ text: M }) : Le(r) ? e({ text: q }) : Oe(a) ? e({ text: N }) : He(r) ? e({ text: $ }) : Pe(a);
                                                    }
                                                })
                                                .catch(() => (e({ text: U }), t(C.F)));
                                    }
                                }
                            },
                            [xe, Pe, Ae, e, a, t, Oe, He, Le],
                        ),
                        qe = r.useCallback((e) => r.createElement(d.Z, { "aria-label": ae({ name: e.name }), avatar: De(e), compact: !0, key: e.id_str, mode: "remove", onClick: () => Ae(e.id_str), style: ne.selectedUserPill, text: e.name }), [Ae]),
                        je = r.createElement(i.Z, { style: ne.selectedUsersList }, be.map(qe)),
                        Ne = r.useCallback(({ user: e, userId: t }) => (!e || Le(t) || He(t) || Oe(e) || Ue(t) ? null : r.createElement(m.Z, { checked: xe(e?.id_str), onChange: (t) => Se(t, e) })), [xe, Se, Oe, He, Le, Ue]),
                        Ve = (e) => ("@" === e[0] ? e.substring(1) : e),
                        Re = r.createElement(v.default, {
                            alwaysOpen: !0,
                            filter: te,
                            getItemDisabledMessage: (e) => {
                                if ("user" === e.type) {
                                    const { id_str: t } = e.data;
                                    if (Le(t)) return j;
                                    if (He(t)) return R;
                                    if ($e && Oe(e.data)) return N;
                                    if (Ue(t)) return V;
                                }
                            },
                            getItemIsDisabled: (e) => He(e.id) || Le(e.id) || Oe(e.data) || Ue(e.id),
                            getUserExactMatch: g
                                ? ({ hasResults: e, isLoaded: t, query: a, remoteUsers: r }) => {
                                      const i = Ve(a),
                                          n = r?.find((e) => e.data.screen_name.toLowerCase() === i.toLowerCase());
                                      if (t && i.match(re) && !n) return { id: `${a}_no_result_user`, type: w.El.NoResult, data: { text: ee({ screenName: i }), type: "user", query: a } };
                                  }
                                : void 0,
                            isModal: !0,
                            onItemClick: (e) => Me(e),
                            placeholder: W,
                            renderUserDecoration: Ne,
                            rounded: !0,
                            shouldAutoFocus: !0,
                            shouldClearOnSelect: !0,
                            shouldFocusOnClear: !0,
                            source: w._4.Unknown,
                            style: ne.input,
                            testID: "typeaheadInput",
                        }),
                        $e = le?.user_results?.result;
                    return "User" !== $e?.__typename ? null : r.createElement(y.Z, { backButtonType: "close", history: n }, r.createElement(i.Z, { style: ne.container }, r.createElement(c.ZP, { size: "title2", style: ne.title, weight: "bold" }, K), r.createElement(c.ZP, { size: "subtext1" }, X), O ? null : r.createElement(c.ZP, { size: "subtext1", style: { marginTop: 10 } }, r.createElement(b().I18NFormatMessage, { $i18n: "a994ab9b" }, pe.affiliateCost, pe.affiliateInterval)), r.createElement(c.ZP, { size: "subtext1", style: { marginTop: 10 } }, Q), je, Re, we ? r.createElement(u.Z.Danger, { headline: J, style: ne.limitWarning, text: Ie }) : null, r.createElement(p.ZP, { disabled: 0 === be.length || we, onClick: Be, style: ne.inviteButton, testID: "sendInvitesButton", type: "primaryFilled" }, G), r.createElement(p.ZP, { onClick: Fe, style: ne.cancelButton, testID: "cancelButton", type: "primaryOutlined" }, Y)));
                },
                ne = f.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space72 }, title: { marginBottom: e.spaces.space12 }, input: { marginTop: e.spaces.space24 }, limitWarning: { marginTop: e.spaces.space12 }, inviteButton: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, cancelButton: { marginBottom: e.spaces.space12 }, selectedUserPill: { margin: e.spaces.space4 }, selectedUsersList: { flexDirection: "row", flexWrap: "wrap", marginTop: e.spaces.space16 }, iconCheckmark: { color: e.colors.blue500 } })),
                se = { context: "InviteScreenList" };
            const le = O(function (e) {
                const { addToast: t, createLocalApiErrorHandler: a, fetchOneUserByScreenName: i, history: n, location: s, match: l } = e;
                return r.createElement(h.H, { errorConfig: se }, r.createElement(ie, { addToast: t, createLocalApiErrorHandler: a, fetchOneUserByScreenName: i, history: n, location: s, match: l }));
            });
        },
        244362: (e, t, a) => {
            a.r(t), a.d(t, { default: () => B });
            a(136728);
            var r = a(202784),
                i = a(325686),
                n = a(107267),
                s = a(392237),
                l = a(731708),
                c = a(855488),
                o = a(466818),
                d = a(154003),
                m = a(111677),
                u = a.n(m),
                p = a(822240),
                f = a(980407),
                g = a(952793),
                b = a(359870),
                _ = a(725516),
                y = a(481326),
                E = a(668214),
                h = a(919022);
            const v = (0, E.Z)().propsFromState(() => ({ loggedInUser: h.ZP.selectLoggedInUser })),
                Z = u().c1df579e,
                C = { external: !0, method: "push", pathname: "mailto:verified-sales@twitter.com" },
                w = { affiliatesCount: y.a },
                k = u().dece6c60,
                I = u().c4c1b600,
                z = u().b1e0aec0,
                x = u().c42d5f4a,
                P = u().fca5f04b,
                A = Object.freeze({ [y.hA.switchFromDirect]: u().dca6b3ac, [y.hA.generate]: u().dca6b3ac, [y.hA.updateSeats]: u().c97ad52a }),
                S = u().b36f0fd4,
                T = s.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingTop: e.spaces.space40, paddingBottom: e.spaces.space72, paddingHorizontal: e.spaces.space72, gap: e.spaces.space16 }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, title: { marginBottom: e.spaces.space8 }, noSpacing: { paddingVertical: "0", paddingHorizontal: "0" }, button: { marginTop: e.spaces.space32 } })),
                B = v(({ loggedInUser: e }) => {
                    const t = (0, n.useHistory)(),
                        a = (0, _.z)(),
                        s = t.location?.state,
                        m = s?.invoiceAction ?? y.hA.generate,
                        E = s?.backUrl,
                        h = (0, g.AO)(["responsive_web_verified_organizations_free_to_invoice_enabled", "responsive_web_verified_organizations_paid_to_invoice_enabled"]) ? s?.invoicedUser : null,
                        { affiliateCountOptions: v, initalAffiliateCount: B } = ((e) => {
                            const t = e?.minAffiliateLimit,
                                a = [
                                    ...(0, p.Z)(0, y.a / y.BX).map((e) => {
                                        const t = "" + (e + 1) * y.BX;
                                        return { label: t, value: t };
                                    }),
                                ].filter(({ value: e }) => !t || parseInt(e, 10) > t);
                            return { affiliateCountOptions: a, initalAffiliateCount: e?.affiliateCount ?? a[0].value };
                        })(s),
                        F = e?.screen_name ?? "",
                        [D, H] = r.useState(B),
                        [L, O] = r.useState(h?.billed_to_name),
                        [U, M] = r.useState(h?.billed_to_email_address),
                        [q, j] = r.useState(),
                        N = !U || !!(0, b.Z)(U),
                        V = !L,
                        R = r.useCallback((e) => M(e.currentTarget.value), [M]),
                        $ = r.useCallback((e) => O(e.currentTarget.value), [O]),
                        W = r.useCallback(() => {
                            U && j((0, b.Z)(U));
                        }, [j, U]),
                        Y = V || N;
                    r.useEffect(() => {
                        a && a.scribe({ page: "verified-organizations", section: "invoice-setup", action: "impression" });
                    }, [a]);
                    const G = r.useCallback(() => {
                            a.scribe({ page: "verified-organizations", section: "invoice-setup", element: "next-order-summary", action: "click" });
                        }, [a]),
                        K = r.useMemo(() => ({ learnMoreLink: r.createElement(l.ZP, { link: C }) }), []),
                        X = r.useMemo(() => {
                            const e = { ...s, affiliateCount: D };
                            return e && U && L && !Y && (e.invoicedUser = { billed_to_email_address: U, billed_to_name: L }), { pathname: "/i/verified-order-summary", state: e };
                        }, [D, s, Y, U, L]),
                        Q = r.useCallback(() => {
                            E ? t.push(E) : t.push("/i/verified-welcome", { ...s, affiliateCount: D });
                        }, [t, D, s, E]),
                        J = !!h && Y;
                    return r.createElement(f.Z, { backButtonType: "back", history: t, onBackClick: Q }, r.createElement(i.Z, { style: T.container }, r.createElement(l.ZP, { size: "title2", style: T.title, weight: "heavy" }, A[m]), r.createElement(l.ZP, { color: "gray700", size: "body" }, S), r.createElement(l.ZP, { color: "gray700", size: "body" }, P(w)), r.createElement(l.ZP, { color: "gray700", size: "body" }, r.createElement(u().I18NFormatMessage, { $i18n: "af51185b" }, r.cloneElement(K.learnMoreLink, null, u().b4871f4f))), r.createElement(c.Z, { defaultValue: `@${F}`, editable: !1, label: z, name: "orgHandle", style: T.noSpacing }), h ? r.createElement(r.Fragment, null, r.createElement(c.Z, { label: k, name: "typedOrgName", onChange: $, style: T.noSpacing, testID: "orgNameField", value: L }), r.createElement(c.Z, { errorText: q, invalid: !!q, label: I, name: "typedOrgEmailAddress", onBlur: W, onChange: R, style: T.noSpacing, testID: "orgEmailField", value: U })) : null, r.createElement(o.ZP, { autofocus: !0, label: x, onChange: H, options: v, value: D }), r.createElement(d.ZP, { disabled: J, link: J ? void 0 : X, onPress: G, size: "large", style: T.button, type: "primaryFilled" }, Z)));
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-0cd3da2a.efc5216a.js.map
