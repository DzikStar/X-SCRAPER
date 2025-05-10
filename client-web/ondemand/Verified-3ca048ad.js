"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-3ca048ad"],
    {
        406098: (e, t, a) => {
            a.d(t, { Z: () => Ee });
            var r = a(807896),
                i = a(944042),
                l = a(202784),
                n = a(301503),
                s = a(325686),
                o = (a(585488), a(712696)),
                c = a.n(o),
                u = a(731708),
                d = a(167630),
                p = a(40610),
                m = a(855488),
                b = a(525754),
                f = a(466818),
                g = a(154003),
                y = a(392237),
                _ = a(674132),
                v = a.n(_),
                E = a(665285),
                h = a(949626),
                Z = a(664052),
                C = a(874111),
                x = a(443781),
                w = a(478414),
                k = a(985124),
                S = a(762522),
                I = a(454104);
            const P = v().f4f4dd60,
                T = v().b679ff6a,
                z = v().b2c213e0,
                D = v().i2209530,
                B = v().cfd2f35e,
                j = v().fb146dd2,
                A = v().d84e9c2a,
                H = v().bc8b300c,
                O = v().d1eedb50,
                R = v().eaf3ce64,
                M = v().b36cd50e,
                U = v().jda06238,
                F = v().d3a427ce,
                L = v().i7174442,
                $ = v().fef0cf02,
                W = v().b7800bec,
                Y = v().a5244ece,
                V = v().g2b553f6,
                N = v().c2e77608,
                G = v().cdf414d4,
                J = v().cc59319a,
                K = v().jaaa8984,
                Q = v().e7117ee4,
                q = v().c05176ec,
                X = v().fa7d455a,
                ee = v().d70c24d4,
                te = v().de1c4376,
                ae = v().hf352d42,
                re = v().fcf0ec1c,
                ie = v().a36bebf2,
                le = v().ede7d0a2,
                ne = v().b925c18c,
                se = v().j3d242ce,
                oe = v().f4d07bd2,
                ce = v().b8cbb51a,
                ue = v().bda6881e,
                de = i.Z,
                pe = [{ label: "USD", value: "USD" }],
                me = ({ label: e }) => l.createElement(u.ZP, { size: "subtext2", style: _e.label, weight: "medium" }, e),
                be = ({ text: e }) => l.createElement(u.ZP, { color: "gray700", size: "subtext2", style: _e.helpText }, e),
                fe = ({ text: e }) => l.createElement(u.ZP, { size: "headline1", style: _e.sectionTitle, weight: "bold" }, e),
                ge = (e) => {
                    if (!e) return;
                    const t = e.getCurrentContent(),
                        a = (0, n.convertToRaw)(t);
                    return JSON.stringify(a);
                },
                ye = ({ currencyOptions: e, description: t, formTitle: a, isIntegration: r = !1, isMutationInFlight: i, job: n = {}, onSubmit: o, onCancel: c }) => {
                    const { isVerifiedOrg: y } = (0, I.Z)(),
                        [_, v] = l.useState({ publicUrl: "", jobTitle: "", location: "", minSalary: "" }),
                        [x, de] = l.useState(""),
                        [pe, ye] = l.useState(""),
                        [ve, Ee] = l.useState(""),
                        [he, Ze] = l.useState(""),
                        [Ce, xe] = l.useState(""),
                        [we, ke] = l.useState("USD"),
                        [Se, Ie] = l.useState(1),
                        [Pe, Te] = l.useState(""),
                        [ze, De] = l.useState(""),
                        [Be, je] = l.useState(""),
                        [Ae, He] = l.useState(""),
                        [Oe, Re] = l.useState(""),
                        [Me, Ue] = l.useState(null),
                        [Fe, Le] = l.useState(null),
                        $e = l.useCallback(
                            (e) => {
                                v({ ..._, [e]: "" });
                            },
                            [_],
                        );
                    l.useEffect(() => {
                        n.external_url && de(n.external_url), n.title && ye(n.title), n.location && Ee(n.location), n.salary_min && Ze(n.salary_min), n.salary_max && xe(n.salary_max), n.salary_currency_code && ke(n.salary_currency_code), n.salary_interval && Ie(n.salary_interval), n.employment_type && Te(n.employment_type), n.job_function && De(n.job_function), n.location_type && He(n.location_type), n.seniority_level && Re(n.seniority_level), n.team && je(n.team);
                    }, [n.employment_type, n.external_url, n.location, n.salary_min, n.salary_max, n.salary_currency_code, n.title, n.job_function, n.location_type, n.seniority_level, n.team, n.salary_interval]);
                    const We = l.useCallback((e) => {
                            de(e.target.value);
                        }, []),
                        Ye = l.useCallback((e) => {
                            ye(e.target.value);
                        }, []),
                        Ve = l.useCallback((e) => {
                            Ee(e.target.value);
                        }, []),
                        Ne = l.useCallback((e) => {
                            Ze(e.target.value);
                        }, []),
                        Ge = l.useCallback((e) => {
                            xe(e.target.value);
                        }, []),
                        Je = l.useCallback((e, t) => {
                            ke(e);
                        }, []),
                        Ke = l.useCallback((e, t) => {
                            Ie(parseInt(e, 10));
                        }, []),
                        Qe = l.useCallback((e, t) => {
                            Te(e);
                        }, []),
                        qe = l.useCallback((e, t) => {
                            De(e);
                        }, []),
                        Xe = l.useCallback((e) => {
                            je(e.target.value);
                        }, []),
                        et = l.useCallback((e, t) => {
                            He(t);
                        }, []),
                        tt = l.useCallback(
                            (e, t) => {
                                Re(e);
                            },
                            [Re],
                        ),
                        at = l.useCallback((e) => {
                            Ue(e);
                        }, []),
                        rt = l.useCallback((e) => {
                            Le(e);
                        }, []),
                        it = l.useCallback(() => {
                            let e = !0;
                            const t = {};
                            return x ? (0, E.Z)(x) || ((t.publicUrl = T), (e = !1)) : ((t.publicUrl = P), (e = !1)), pe || ((t.jobTitle = P), (e = !1)), ve || ((t.location = P), (e = !1)), he && Ce && parseInt(he, 10) >= parseInt(Ce, 10) && ((t.minSalary = se), (e = !1)), Me && (0, C.c6)(Me) > 200 && ((t.shortDescription = z), (e = !1)), v(t), e;
                        }, [pe, ve, Ce, he, x, Me]),
                        lt = l.useCallback(() => {
                            if (it()) {
                                const e = { employment_type: Pe || null, external_url: x, job_description: ge(Fe) || null, job_function: ze || null, location: ve, location_type: Ae || null, salary_min: he ? parseInt(he, 10) : -1, salary_max: Ce ? parseInt(Ce, 10) : -1, salary_currency_code: we, salary_interval: Se, seniority_level: Oe || null, short_description: ge(Me) || null, team: Be, title: pe };
                                o(e);
                            }
                        }, [we, Pe, Fe, ze, pe, ve, Ae, Ce, he, o, x, Se, Oe, Me, Be, it]),
                        nt = l.useCallback(() => {
                            $e("publicUrl"), x ? (0, E.Z)(x) || v({ ..._, publicUrl: T }) : v({ ..._, publicUrl: P });
                        }, [$e, _, x]),
                        st = l.useCallback(() => {
                            $e("jobTitle"), pe || v({ ..._, jobTitle: P });
                        }, [$e, _, pe]),
                        ot = l.useCallback(() => {
                            $e("location"), ve || v({ ..._, location: P });
                        }, [$e, _, ve]),
                        ct = l.useCallback(() => {
                            $e("minSalary"), he && Ce && parseInt(he, 10) >= parseInt(Ce, 10) && v({ ..._, minSalary: se });
                        }, [$e, _, Ce, he]),
                        ut = l.useMemo(() => (i ? l.createElement(d.Z, { size: "small" }) : void 0), [i]),
                        dt = l.useMemo(() => k.u4.map((e) => ({ ...e, containerStyle: _e.radioContainer })), []);
                    return l.createElement(
                        s.Z,
                        { style: _e.container },
                        l.createElement(u.ZP, { size: "title2", style: _e.title, weight: "bold" }, a),
                        t ? l.createElement(u.ZP, { size: "subtext1" }, t) : null,
                        r ? l.createElement(p.Z.Attention, { style: _e.title, text: ue, withIcon: !0 }) : null,
                        l.createElement(m.Z, { autoFocus: !0, editable: !r, errorText: _.publicUrl ?? "", helperText: V, invalid: !!_.publicUrl, label: Y, name: "public_url", onBlur: nt, onChange: We, style: _e.input, testID: "input-public-url", type: "url", value: x }),
                        l.createElement(m.Z, { editable: !r, errorText: _.jobTitle ?? "", helperText: y ? G : J, invalid: !!_.jobTitle, label: N, name: "job_title", onBlur: st, onChange: Ye, style: _e.input, testID: "input-job-title", type: "text", value: pe }),
                        l.createElement(fe, { text: K }),
                        l.createElement(me, { label: X }),
                        l.createElement(b.Z, { backgroundStyles: _e.radioGroup, disabled: r, horizontal: !0, name: "job-location-type", onChange: et, options: dt, value: Ae }),
                        l.createElement(be, { text: ee }),
                        l.createElement(m.Z, { editable: !r, errorText: _.location ?? "", helperText: q, invalid: !!_.location, label: Q, name: "location", onBlur: ot, onChange: Ve, style: _e.input, testID: "input-location", type: "text", value: ve }),
                        l.createElement(fe, { text: te }),
                        l.createElement(be, { text: ae }),
                        l.createElement(s.Z, { style: _e.inputRow }, l.createElement(m.Z, { editable: !r, errorText: _.minSalary, invalid: !!_.minSalary, label: re, name: "salary_min", onBlur: ct, onChange: Ne, style: _e.inputRowInput, testID: "input-min-salary", type: "number", value: he.toString() }), l.createElement(m.Z, { editable: !r, label: ie, name: "salary_max", onBlur: ct, onChange: Ge, style: _e.inputRowInput, testID: "input-max-salary", type: "number", value: Ce.toString() }), l.createElement(s.Z, { style: _e.inputRowInput }, l.createElement(f.ZP, { disabled: r, label: le, onChange: Je, options: e, value: we || "" })), l.createElement(s.Z, { style: _e.inputRowInput }, l.createElement(f.ZP, { disabled: r, label: ne, onChange: Ke, options: k.hb, value: String(Se) }))),
                        y ? l.createElement(l.Fragment, null, l.createElement(fe, { text: ce }), l.createElement(be, { text: W }), l.createElement(h.Z, { className: w.Hx }, l.createElement(Z.Z, { characterLimit: 200, editorClass: w.Hx, editorStyles: (0, w.yW)(w.Hx, w.K), initialState: n.short_description, limitedRichText: !0, numberOfLines: 5, onChange: at, textSizesOverride: (0, w.bb)(w.K) })), l.createElement(fe, { text: "Job Details" }), l.createElement(be, { text: oe }), l.createElement(s.Z, { style: _e.inputRow }, l.createElement(s.Z, { style: _e.inputRowInput }, l.createElement(f.ZP, { disabled: r, helperText: A, label: j, onChange: Qe, options: k.kW, testID: "select-employment-type", value: Pe || "", withEmptyOption: !0 })), l.createElement(s.Z, { style: _e.inputRowInput }, l.createElement(f.ZP, { disabled: r, helperText: F, label: U, onChange: tt, options: k.xk, testID: "select-seniority", value: Oe || "", withEmptyOption: !0 }))), l.createElement(s.Z, { style: _e.inputRow }, l.createElement(s.Z, { style: _e.inputRowInput }, l.createElement(f.ZP, { disabled: r, helperText: O, label: H, onChange: qe, options: k.pg, testID: "select-job-function", value: ze || "", withEmptyOption: !0 })), l.createElement(m.Z, { editable: !r, helperText: M, label: R, name: "team", onChange: Xe, style: _e.inputRowInput, testID: "input-team", type: "text", value: Be })), l.createElement(s.Z, { style: _e.jobDescriptionContainer }, l.createElement(me, { label: L }), l.createElement(be, { text: $ }), l.createElement(h.Z, { className: w.Hx }, l.createElement(Z.Z, { allowExtendedPasteStyles: !0, editable: !r, editorClass: w.Hx, editorStyles: (0, w.yW)(w.Hx, w.K), initialState: n.job_description, numberOfLines: 10, onChange: rt, textSizesOverride: (0, w.bb)(w.K) })))) : null,
                        l.createElement(S.Z, null),
                        l.createElement(s.Z, { style: _e.actionsContainer }, l.createElement(g.ZP, { disabled: i, onClick: c, size: "large", type: "primaryOutlined" }, B), l.createElement(g.ZP, { disabled: i, icon: ut, onClick: lt, size: "large", type: "primaryFilled" }, D)),
                    );
                },
                _e = y.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space32, marginHorizontal: "auto", width: "100%", maxWidth: "1000px" }, title: { marginBottom: e.spaces.space16 }, sectionTitle: { marginTop: e.spaces.space12, marginBottom: e.spaces.space8 }, input: { marginTop: e.spaces.space4, paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space20 }, inputRow: { display: "flex", flexDirection: "row", alignItems: "start", gap: e.spaces.space8, marginBottom: e.spaces.space8 }, inputRowInput: { paddingStart: 0, paddingEnd: 0, paddingVertical: e.spaces.space4, minWidth: "24%", flex: 1 }, actionsContainer: { display: "flex", flexDirection: "row", justifyContent: "flex-end", gap: e.spaces.space12, marginTop: e.spaces.space12 }, jobDescriptionContainer: { marginTop: e.spaces.space16 }, label: { marginBottom: e.spaces.space4 }, helpText: { marginBottom: e.spaces.space4, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 }, radioGroup: { gap: e.spaces.space8 }, radioContainer: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderRadius: e.borderRadii.small, paddingHorizontal: e.spaces.space16, flexGrow: "0", flexShrink: "1" } })),
                ve = (e) => {
                    const { featureSwitches: t } = (0, x.QZ)(),
                        a = c()(de, {}),
                        i = (t.isTrue("recruiting_admin_currencies_enabled") && a?.salary_currency_options?.map((e) => ({ label: e.code, value: e.code }))) || pe;
                    return l.createElement(ye, (0, r.Z)({}, e, { currencyOptions: i }));
                },
                Ee = l.memo(ve);
        },
        593043: (e, t, a) => {
            a.r(t), a.d(t, { default: () => W });
            var r = a(807896),
                i = a(142456),
                l = a(202784),
                n = a(325686),
                s = (a(585488), a(277660)),
                o = a.n(s),
                c = a(167630),
                u = a(154003),
                d = a(954110),
                p = a(928088),
                m = a(731708),
                b = a(392237),
                f = a(674132),
                g = a.n(f),
                y = a(625661),
                _ = a(980407),
                v = a(736063),
                E = a(985124),
                h = a(535338),
                Z = a(482924),
                C = a(955010),
                x = a(974097),
                w = a(284094),
                k = a(454104),
                S = a(116093),
                I = a(505057);
            const P = g().bb081ea2,
                T = g().d4b6a6e0,
                z = g().j2dd3686,
                D = g().b772cd66,
                B = g().af1cfd46,
                j = g().d6fa2944,
                A = g().h99f11fa,
                H = g().eef1ae76,
                O = g().a915f5c1,
                R = i.Z,
                M = (e) => {
                    const {
                        viewer: { user_results: t },
                    } = (0, h.p)(R, {});
                    if (!t?.result) return null;
                    const { rest_id: a } = t.result,
                        i = t.result.recruiting_organization_results?.result;
                    return a && i && i.__id && i.core ? l.createElement(U, (0, r.Z)({}, e, { orgQueryId: i.__id, organization: i.core, userId: a })) : null;
                },
                U = (e) => {
                    const { history: t, orgQueryId: a, organization: r, userId: i } = e,
                        { data: s, refetch: b, refetchStatus: f } = (0, Z.A)(S.Z, { userId: i }),
                        g = s.user.result?.profilemodules?.v1,
                        [v, h] = l.useState(0 !== s?.user?.result?.profilemodules?.v1?.length),
                        [R, M] = (0, x.Z)(h, b),
                        U = (0, C.B)(i, h, b),
                        L = o()(w.$A, r),
                        [$, W] = (0, I.Z)(i, a),
                        { basePath: Y } = (0, k.Z)(),
                        V = l.useCallback(
                            (e, t) => {
                                if (t) R({ userId: i });
                                else {
                                    const e = g && g[0].module_id;
                                    e && U(t, e);
                                }
                            },
                            [R, U, g, i],
                        ),
                        N = l.useCallback(() => {
                            $({ integrationStatus: E.rP.DISABLED, integrationServiceId: "" });
                        }, [$]),
                        G = l.useCallback(() => l.createElement(y.ZP, { backButtonType: "close", history: t, rightControl: W || M || "loading" === f ? l.createElement(c.Z, { size: "small" }) : null, title: P }), [t, W, M, f]),
                        J = l.useMemo(() => l.createElement(n.Z, { style: F.buttonContainer }, l.createElement(u.ZP, { link: Y, type: "primaryOutlined" }, D)), [Y]);
                    if (!L) return null;
                    const { integration_service_id: K, integration_status: Q } = L;
                    return l.createElement(_.Z, { bottomBar: J, renderHeader: G }, l.createElement(n.Z, { style: F.container }, l.createElement(d.Z, { checked: v, disabled: M || "loading" === f, helpText: z, label: T, name: "status", onChange: V, type: "switch" }), Q && Q > E.rP.DISABLED && K ? l.createElement(p.Z, null, l.createElement(n.Z, { style: F.itemContainer }, l.createElement(n.Z, null, l.createElement(m.ZP, null, B), l.createElement(n.Z, { style: F.statusContainer }, l.createElement(n.Z, { "aria-label": "Active", style: F.activeStatus }), l.createElement(m.ZP, { color: "gray700", size: "subtext2" }, K && E.$J[K] ? O({ ats: E.$J[K] }) : H))), l.createElement(u.ZP, { onClick: N, type: "destructiveOutlined" }, A)), l.createElement(m.ZP, { color: "gray700", size: "subtext2", style: F.atsDescription }, j)) : null));
                },
                F = b.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space56 }, title: { marginBottom: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, buttonContainer: { padding: e.spaces.space16 }, atsDescription: { marginTop: e.spaces.space4 }, itemContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, statusContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, paddingTop: e.spaces.space12 }, activeStatus: { backgroundColor: e.colors.green500, borderRadius: e.borderRadii.infinite, borderWidth: 0, height: e.baseFontSize - 8, width: e.baseFontSize - 8, userSelect: "none" } })),
                L = { context: "JobsSettingsScreen" },
                $ = (e) => l.createElement(v.H, { errorConfig: L }, l.createElement(M, e)),
                W = l.memo($);
        },
        295364: (e, t, a) => {
            a.r(t), a.d(t, { default: () => v });
            a(136728);
            var r = a(202784),
                i = a(392772),
                l = a(107267),
                n = a(443781),
                s = a(952793),
                o = a(782826),
                c = a(725516),
                u = a(125363),
                d = a(390387),
                p = a(82497),
                m = a(731822),
                b = a(322481);
            const f = ({ buttonLabel: e, priceElements: t, selectedInterval: a, selectedTier: i }) => {
                    const l = (0, s.hC)("responsive_web_verified_organizations_new_year_offer_enabled");
                    return r.createElement(b.Z, { buttonLabel: e, isTierSwitch: !1, priceElements: t, selectedInterval: a, selectedTier: i, showDisclaimer: !1, withDiscount: l });
                },
                g = ({ basicPrices: e, fullAccessPrices: t }) =>
                    r.createElement(i.v, {
                        SubscribeButton: f,
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
                    }),
                y = "/i/organizations",
                _ = () => {
                    const e = (0, s.hC)("responsive_web_verified_organizations_new_year_offer_enabled"),
                        t = { Year: (0, m.f)("Basic", "Year", { withDiscount: e }), Month: (0, m.f)("Basic", "Month") },
                        a = { Year: (0, m.f)("FullAccess", "Year", { withDiscount: e }), Month: (0, m.f)("FullAccess", "Month") };
                    return e && a.Year?.promotionInfo?.programId ? r.createElement(g, { basicPrices: t, fullAccessPrices: a }) : r.createElement(i.v, { SubscribeButton: f, basicPrices: t, fullAccessPrices: a, interval: "Year", sectionConfig: { title: { order: 1, visible: !0 }, voCards: { order: 2, visible: !0 }, pricing: { order: 3, showTitle: !1, visible: !0 }, socialProof: { order: 4, visible: !0 }, benefits: { order: 5, visible: !0 }, andMore: { order: 6, showTitle: !0, visible: !0 }, wallOfLove: { order: 7, showTitle: !0, visible: !1 }, hero: { order: 8, visible: !0 }, footer: { order: 9, visible: !0 } } });
                },
                v = () => {
                    const { userClaims: e } = (0, n.QZ)(),
                        t = (0, l.useHistory)(),
                        a = (0, c.z)(),
                        s = !!(0, u.v9)(d._h),
                        m = e.isVerifiedOrg(),
                        b = { title: { order: 1, visible: !0 }, subscribeButtonCTA: { order: 2, visible: !0, ctaUrl: `/i/flow/login?redirect_after_login=${y}` }, pricing: { order: 3, showTitle: !1, visible: !1 }, socialProof: { order: 4, visible: !0 }, benefits: { order: 5, visible: !0 }, andMore: { order: 6, showTitle: !0, visible: !0 }, wallOfLove: { order: 7, showTitle: !0, visible: !1 }, hero: { order: 8, visible: !0 }, footer: { order: 9, visible: !0, ctaUrl: `/i/flow/login?redirect_after_login=${y}` } };
                    return (
                        r.useEffect(() => {
                            if (m) return t.push("/i/verified/home");
                            const e = (0, o.G3)(t.location);
                            a.scribe({ page: "verified-organizations", section: "welcome", component: "sign-up", action: "impression", data: { referer: e, referring_page: e } });
                        }, [a, t, m]),
                        r.createElement(p.Z, null, s ? r.createElement(_, null) : r.createElement(i.v, { SubscribeButton: f, basicPrices: void 0, fullAccessPrices: void 0, sectionConfig: b }))
                    );
                };
        },
        41057: (e, t, a) => {
            a.r(t), a.d(t, { OrderSummary: () => N, default: () => K });
            a(136728);
            var r = a(434369),
                i = a(761982),
                l = a(202784),
                n = a(325686),
                s = (a(585488), a(351743)),
                o = a.n(s),
                c = a(107267),
                u = a(688715),
                d = a(392237),
                p = a(731708),
                m = a(420412),
                b = a(40610),
                f = a(154003),
                g = a(167630),
                y = a(674132),
                _ = a.n(y),
                v = a(980407),
                E = a(736063),
                h = a(952793),
                Z = a(782642),
                C = a(359870),
                x = a(725516),
                w = a(481326),
                k = a(148309),
                S = a(731822);
            const I = _().e6b0965a,
                P = _().a1b58798,
                T = _().abd845fe,
                z = _().b651c7d7,
                D = _().ec5e9c54,
                B = _().e16093fc,
                j = _().ce4acef6,
                A = _().f4db2df0,
                H = _().b9e0d614,
                O = _().a45c9596,
                R = _().cfe836d1,
                M = _().e4e5532a,
                U = Object.freeze({ [w.hA.generate]: _().fc1f43d0, [w.hA.switchFromDirect]: _().fc1f43d0, [w.hA.updateSeats]: _().c97ad52a }),
                F = (0, u.ju)("https://legal.x.com/purchaser-terms"),
                L = d.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingTop: e.spaces.space40, paddingBottom: e.spaces.space72, paddingHorizontal: e.spaces.space72, gap: e.spaces.space16 }, twitterIcon: { color: e.colors.brandColor, height: "2em" }, title: { marginBottom: e.spaces.space8 }, noSpacing: { paddingHorizontal: "0" }, footer: { marginTop: e.spaces.space32, gap: e.spaces.space16 }, priceList: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, priceItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, priceItemHead: { display: "flex", flexDirection: "column", gap: e.spaces.space2 }, priceItemDescription: { marginStart: e.spaces.space12 }, subscriptionWarning: { marginStart: e.spaces.space4 }, gap: { marginTop: e.spaces.space32 } })),
                $ = { link: l.createElement(p.ZP, { link: F }) },
                W = i.Z,
                Y = r.Z,
                V = _().b557f073,
                N = (e) => {
                    const t = (0, c.useHistory)(),
                        a = (0, x.z)(),
                        [r, i] = l.useState(),
                        s = t.location?.state,
                        u = s?.affiliateCount || `${w.hN}`,
                        d = parseInt(u, 10),
                        y = s?.invoiceAction ?? w.hA.generate,
                        E = s?.successUrl ?? "/i/verified-thank-you",
                        F = (0, h.AO)(["responsive_web_verified_organizations_free_to_invoice_enabled", "responsive_web_verified_organizations_paid_to_invoice_enabled"]),
                        N = (0, h.hC)("responsive_web_verified_organizations_free_invoice_promo_enabled") && F,
                        G = s?.invoicedUser,
                        J = F && G && G.billed_to_email_address && !(0, C.Z)(G.billed_to_email_address) && G.billed_to_name,
                        K = (0, Z.p)();
                    l.useEffect(() => {
                        a && a.scribe({ page: "verified-organizations", section: "order-summary", action: "impression", component: y });
                    }, [a, y]);
                    const { affiliateCost: Q, baseCost: q, basePriceId: X, promotionInfo: ee, totalCost: te } = (0, S.f)("FullAccess", s?.interval || "Month", { affiliateCount: d, removeTrailingZeros: !1, withDiscount: N }),
                        { discountedTotalCost: ae, percentOff: re, programId: ie, totalDiscount: le } = ee || {},
                        ne = "Year" === s?.interval ? j : B,
                        se = l.useCallback(() => {
                            t.push("/i/verified-invoice", s);
                        }, [t, s]),
                        oe = l.useMemo(() => ({ pathname: "/i/verified-invoice", state: s }), [s]),
                        [ce, ue] = o()(W),
                        [de, pe] = o()(Y),
                        me = ue || pe,
                        [, be] = (0, k.Z)(),
                        fe = l.useCallback(() => {
                            a.scribe({ page: "verified-organizations", section: "order-summary", element: "update-invoice-seats", action: "click" }),
                                de({
                                    variables: { affiliate_limit: d },
                                    onCompleted: (e, r) => {
                                        a.scribe({ page: "verified-organizations", section: "order-summary", element: "update-invoice-seats", action: "success" }), K({ text: H, withClearButton: !0, withAutoDismiss: !0 }), t.push("/i/verified");
                                    },
                                    onError: (e) => {
                                        a.scribe({ page: "verified-organizations", section: "order-summary", element: "update-invoice-seats", action: "error" }), i({ subscriptioninvoice_create: { errors: [{ error_message: V({ supportEmail: w.M2 }), shared_error_code: "Undefined" }] } });
                                    },
                                    updater: (e) => {
                                        const t = s?.cacheKey;
                                        if (t) {
                                            const a = e.get(t);
                                            a && (a.setValue(d, "affiliate_limit"), a.invalidateRecord());
                                        }
                                    },
                                });
                        }, [t, a, de, d, K, s]),
                        ge = l.useCallback(() => {
                            const e = ie ? [{ program_id: ie }] : [];
                            i(null),
                                a.scribe({ page: "verified-organizations", section: "order-summary", element: "generate-invoice", action: "click" }),
                                ce({
                                    variables: { product_sku: be, affiliate_limit: d, external_price_id: X, promotion_data: e, ...(J ? { invoiced_user: G } : null) },
                                    onCompleted: (e, r) => {
                                        a.scribe({ page: "verified-organizations", section: "order-summary", element: "generate-invoice", action: "success" });
                                        const l = e.subscriptioninvoice_create;
                                        l?.url ? (window.open(l.url, "_blank"), J && K({ text: O, withClearButton: !0, withAutoDismiss: !0 }), t.push(E)) : l?.errors && i(e);
                                    },
                                    onError: (e) => {
                                        a.scribe({ page: "verified-organizations", section: "order-summary", element: "generate-invoice", action: "error" }), i({ subscriptioninvoice_create: { errors: [{ error_message: V({ supportEmail: w.M2 }), shared_error_code: "Undefined" }] } });
                                    },
                                });
                        }, [ie, a, ce, be, d, X, J, G, t, E, K]),
                        ye = l.useMemo(() => ({ action: U[y] }), [y]),
                        _e = l.useCallback(() => {
                            if (y === w.hA.updateSeats) fe();
                            else ge();
                        }, [ge, fe, y]);
                    return l.createElement(
                        v.Z,
                        { backButtonType: "back", history: t, onBackClick: se },
                        l.createElement(n.Z, { style: L.container }, l.createElement(p.ZP, { size: "title2", style: L.title, weight: "heavy" }, I), l.createElement(p.ZP, { color: "gray700" }, ae && l.createElement(_().I18NFormatMessage, { $i18n: "j4f386b7" }, l.createElement(p.ZP, { color: "green600", weight: "medium" }, ae), te), `${ae ? " " : ""}${P}`), l.createElement(n.Z, { style: L.priceList }, l.createElement(n.Z, { style: L.priceItem }, l.createElement(p.ZP, null, D), l.createElement(p.ZP, null, q)), l.createElement(n.Z, { style: L.priceItem }, l.createElement(p.ZP, null, z({ count: u })), l.createElement(p.ZP, null, Q)), N && re && le && l.createElement(n.Z, { style: L.priceItem }, l.createElement(n.Z, { style: L.priceItemHead }, l.createElement(p.ZP, { color: "gray700" }, M), l.createElement(p.ZP, { color: "green600", size: "subtext2", style: L.priceItemDescription }, R({ percent: re }))), l.createElement(p.ZP, { color: "gray700" }, `-${le}`)), l.createElement(n.Z, null, l.createElement(p.ZP, { link: oe }, T)), l.createElement(n.Z, { style: L.gap }, l.createElement(m.Z, { borderColor: "nestedBorderColor" })), l.createElement(n.Z, { style: L.priceItem }, l.createElement(p.ZP, { size: "headline2", weight: "medium" }, ne), l.createElement(p.ZP, { size: "headline2", weight: "medium" }, ae || te))), r ? r.subscriptioninvoice_create?.errors?.map((e, t) => (e.error_message ? l.createElement(n.Z, { key: t }, l.createElement(b.Z.Danger, { text: e.error_message })) : null)) : null, l.createElement(n.Z, { style: L.footer }, l.createElement(p.ZP, { color: "gray700", size: "subtext2" }, l.createElement(_().I18NFormatMessage, { $i18n: "d9f35d6f", action: ye.action }, l.cloneElement($.link, null, _().e8c366ce)), y === w.hA.generate ? l.createElement(p.ZP, { style: L.subscriptionWarning }, A) : null), l.createElement(f.ZP, { disabled: me, onPress: _e, size: "large", type: "primaryFilled" }, me ? l.createElement(g.Z, null) : U[y]))),
                    );
                },
                G = { context: "OrderSummary" };
            function J(e) {
                return l.createElement(E.H, { errorConfig: G }, l.createElement(N, e));
            }
            const K = l.memo(J);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-3ca048ad.d64f541a.js.map
