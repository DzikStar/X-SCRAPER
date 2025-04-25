"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-e6266db0"],
    {
        246851: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784);
            function l(e) {
                const t = a.useRef();
                return (
                    a.useEffect(() => {
                        t.current = e;
                    }),
                    t.current
                );
            }
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var a = n(202784),
                l = n(437429),
                r = n.n(l),
                o = n(57074),
                s = n.n(o),
                i = n(10622),
                c = n.n(i),
                d = n(71620),
                m = n(312771),
                u = n(535338);
            function p(e, t, n) {
                const l = s()(t),
                    o = s()(n),
                    i = r()(),
                    p = (0, d.po)(),
                    [h, b] = a.useState(null),
                    [g, E] = a.useState(!1),
                    f = a.useCallback(() => {
                        g ||
                            (E(!0),
                            c()(i, e, l, { networkCacheConfig: o?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    E(!1);
                                },
                                error: (e) => {
                                    p(e), E(!1), b(e);
                                },
                            }));
                    }, [i, p, e, g, l, o]),
                    y = (0, u.p)(e, t, n);
                return a.useMemo(() => (h ? { data: y, refetch: f, refetchStatus: m.ZP.FAILED, refetchError: h } : { data: y, refetch: f, refetchStatus: g ? m.ZP.LOADING : m.ZP.NONE, refetchError: void 0 }), [y, h, g, f]);
            }
        },
        263870: (e, t, n) => {
            n.r(t), n.d(t, { default: () => N });
            var a = n(202784),
                l = n(247411),
                r = n(736063),
                o = n(325686),
                s = n(107267),
                i = n(708852),
                c = n(530732),
                d = n(731708),
                m = n(392237),
                u = n(894966),
                p = n(512549),
                h = n(903233),
                b = n(652904),
                g = n(293115),
                E = n(254221),
                f = n(771741),
                y = (n(585488), n(457311)),
                x = n(154003),
                Z = n(97301),
                w = n(58399),
                C = n(292546),
                v = n(482924),
                k = n(62941),
                j = n(965245),
                _ = n(609927),
                P = n(715601),
                I = n(768572),
                S = n(46858);
            const B = { isGlobal: !0, isSticky: !1 },
                T = (e) => e.rest_id,
                A = m.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 }, mobileContainer: { position: "relative", height: "calc(100vh - 112px)", overflow: "auto" } })),
                z = ({ items: e }) => {
                    const t = (0, i.Ji)(),
                        n = a.useCallback((t) => a.createElement(S.Z, { item: t.result, itemId: t.rest_id, itemIndex: e.findIndex((e) => e.rest_id === t.rest_id), pathPrefix: "/jobs/saved" }), [e]),
                        l = a.useCallback(() => a.createElement(j.Z, { cacheKey: "jobSearchList", footer: null, identityFunction: T, items: e, renderer: n, withoutHeadroom: !0 }), [e, n]);
                    return e ? (e.length && t ? a.createElement(_.Z.Provider, { value: B }, a.createElement(I.y3.Provider, { value: void 0 }, a.createElement(P.Z, { style: A.viewport }, l()))) : e.length && !t ? a.createElement(o.Z, { style: A.mobileContainer }, l()) : null) : null;
                },
                D = f.Z,
                H = 10,
                R = () => {
                    const e = (0, s.useHistory)(),
                        [t, n] = (0, C.Z)(),
                        [l, r] = a.useState(!1),
                        c = (0, i.Ji)(),
                        m = t.get("page") ? parseInt(t?.get("page"), 10) : 1,
                        { data: u, refetchStatus: p } = (0, v.A)(D, { limit: H, offset: ((h = m), (h - 1) * H) });
                    var h;
                    a.useEffect(() => {
                        "none" === p && r(!1);
                    }, [p]);
                    const b = u?.viewer_v2?.user_results?.result,
                        g = b?.saved_jobs ?? {},
                        E = g.total || 0,
                        f = Math.ceil(E / H),
                        j = g.items_results ?? [],
                        _ = j.length > 0 ? j[0].rest_id : null,
                        P = !b || l;
                    a.useEffect(() => {
                        _ && "/jobs/saved" === location.pathname && c && !P && e.replace(`/jobs/saved/${_}?page=${m}`);
                    }, [_, c, P, m, e]);
                    const I = a.useCallback(() => {
                            m < f && n("page", (m + 1).toString());
                        }, [m, n, f]),
                        S = a.useCallback(() => {
                            m > 1 && n("page", (m - 1).toString());
                        }, [m, n]);
                    return P
                        ? a.createElement(k.Z, null)
                        : E <= 0
                          ? a.createElement(y.Z, { header: "No saved jobs" })
                          : a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(z, { items: j }),
                                a.createElement(
                                    o.Z,
                                    { style: { ...L.actionBar, ...(c ? {} : L.mobileActionBar) } },
                                    a.createElement(
                                        o.Z,
                                        { style: L.actionBarInner },
                                        a.createElement(x.ZP, { disabled: 1 === m, icon: a.createElement(Z.default, null), onClick: S, type: "brandText" }),
                                        a.createElement(
                                            d.ZP,
                                            { color: "gray900", size: "subtext1" },
                                            ((e, t) => {
                                                if (t > 0) {
                                                    let n = e * H;
                                                    return n > t && (n = t), `Viewing ${e * H - 9} - ${n} of ${t}`;
                                                }
                                                return "";
                                            })(m, E),
                                        ),
                                        a.createElement(x.ZP, { disabled: m === f, icon: a.createElement(w.default, null), onClick: I, type: "brandText" }),
                                    ),
                                ),
                            );
                },
                L = m.default.create((e) => ({ actionBar: { width: "100%", backgroundColor: e.colors.gray200 }, mobileActionBar: { width: "100%", backgroundColor: e.colors.gray200 }, actionBarInner: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space4 } })),
                F = { context: "JobBookmarksList" },
                J = () => a.createElement(r.H, { errorConfig: F }, a.createElement(R, null)),
                W = { page: "saved_jobs", section: "all" },
                M = () => {
                    const e = (0, s.useLocation)(),
                        t = (0, s.useHistory)(),
                        n = !(0, i.Ji)(),
                        l = /\/jobs\/saved\/\d+/.test(e.pathname),
                        r = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return a.createElement(g.nO, { namespace: W }, a.createElement(b.Z, { locationKey: W.page }, a.createElement(h.Z, { isRightRootActive: l, leftContent: a.createElement(o.Z, { style: { display: "flex", overflow: "auto", width: "30%" } }, a.createElement(J, null)), mobileRootStyles: { height: "calc(100vh - 68px)" }, rightContent: a.createElement(o.Z, null, n && a.createElement(c.Z, { onClick: r, style: V.mobileDetailBackButton }, a.createElement(u.default, null), a.createElement(d.ZP, { size: "body", weight: "bold" }, "Back to saved jobs")), a.createElement(E.Z, { actions: [p.h5] })), rootStyles: { height: "calc(100vh - 116px)" } })));
                },
                V = m.default.create((e) => ({ mobileDetailBackButton: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16 }, mobileDetailActionsItemBreak: { flexBasis: "100%" } })),
                $ = { context: "JobRecommendations" },
                N = () => a.createElement(r.H, { errorConfig: $ }, a.createElement(l.Z, null, a.createElement(M, null)));
        },
        879930: (e, t, n) => {
            n.r(t), n.d(t, { default: () => N });
            var a = n(202784),
                l = n(107267),
                r = n(323265),
                o = n(252021),
                s = n(736063),
                i = n(255875),
                c = n(325686),
                d = (n(585488), n(167630)),
                m = n(482924),
                u = (n(136728), n(731708)),
                p = n(40610),
                h = n(154003),
                b = n(392237),
                g = n(908478),
                E = n(443781),
                f = n(181666),
                y = n(855488),
                x = n(379327);
            const Z = ({ onAdd: e }) => {
                    const [t, n] = a.useState(""),
                        [l, r] = a.useState(""),
                        o = () => {
                            t || r("Job title can't be empty"), e(t), n("");
                        };
                    return a.createElement(
                        c.Z,
                        null,
                        a.createElement(
                            c.Z,
                            { style: w.inputField },
                            a.createElement(
                                c.Z,
                                { style: w.inputWrapper },
                                a.createElement(y.Z, {
                                    label: "Job Title",
                                    name: "jobTitle",
                                    onChange: (e) => {
                                        r(""), n(e.target.value);
                                    },
                                    onKeyPress: (e) => {
                                        "Enter" === e.key && o();
                                    },
                                    style: w.textInput,
                                    testID: "job-rec-title-input",
                                    value: t,
                                }),
                            ),
                            a.createElement(c.Z, { style: w.buttonWrapper }, a.createElement(h.ZP, { icon: a.createElement(x.default, null), onPress: o, size: "large", testID: "job-rec-title-btn", type: "primaryFilled" })),
                        ),
                        l ? a.createElement(u.ZP, { color: "red500", size: "subtext2" }, l) : a.createElement(u.ZP, { color: "gray700", size: "subtext2" }, "Press enter to add"),
                    );
                },
                w = b.default.create((e) => ({ inputField: { display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, inputWrapper: { position: "relative", flexGrow: 1, marginEnd: e.spaces.space16 }, buttonWrapper: { flexShrink: 0, marginTop: "-2px" }, textInput: { paddingStart: "0px", paddingBottom: "0px", paddingTop: "0px", paddingEnd: "0px" }, loader: { position: "absolute", end: "12px", top: "20px", zIndex: 5 } }));
            var C = n(516951),
                v = n(998693);
            const k = ({ onAdd: e }) => {
                    const [t, n] = a.useState("");
                    return a.createElement(
                        c.Z,
                        { style: j.locationInputContainer },
                        a.createElement(v.Z, {
                            onChange: ({ value: e }) => {
                                n(e || "");
                            },
                            onEnter: C.Z,
                            onSelect: (t) => {
                                e(t), n("");
                            },
                            value: t,
                        }),
                    );
                },
                j = b.default.create((e) => ({ locationInputContainer: { display: "flex", zIndex: 5, position: "relative" }, loader: { position: "absolute", end: "12px", top: "20px", zIndex: 6 } }));
            var _ = n(837020);
            const P = b.default.create((e) => ({ listItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, paddingHorizontal: e.spaces.space2, paddingVertical: e.spaces.space4, marginBottom: e.spaces.space2 }, icon: { cursor: "pointer" } })),
                I = ({ item: e, onDelete: t, textPath: n }) => a.createElement(c.Z, { style: P.listItem }, a.createElement(u.ZP, null, S(e, n)), a.createElement(_.default, { onClick: () => t(e), style: P.icon, testID: "delete-matching-criteria-btn" })),
                S = (e, t, n = "") => {
                    const a = t.split(".");
                    let l = e;
                    for (const e of a) {
                        if (!l || "object" != typeof l || !(e in l)) return n;
                        l = l[e];
                    }
                    return void 0 !== l ? l : n;
                };
            var B = n(451566);
            const T = ({ label: e, onChange: t, value: n }) => a.createElement(c.Z, { style: A.fieldContainer }, a.createElement(u.ZP, null, e), a.createElement(B.Z, { onValueChange: t, value: n })),
                A = b.default.create((e) => ({ fieldContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, paddingVertical: e.spaces.space8 } }));
            var z = n(594695),
                D = n(351743),
                H = n.n(D);
            const R = z.Z,
                L = () => {
                    const [e, t] = H()(R);
                    return [
                        a.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                F = ({ matchingProfile: e, refetch: t }) => {
                    const n = ((r = e), { recommendationsEnabled: r?.recommendations_enabled ?? !0, remoteWorkAllowed: r?.remote_work_allowed ?? !0, jobTitles: [...(r?.job_titles || [])], locations: [...(r?.locations || [])].map((e) => ({ id: e.id, location_id: e.location_id, location_name: e.location?.core?.display_name })) });
                    var r;
                    const [o, s] = a.useState(n),
                        [i, m] = a.useState(!1),
                        [b] = L(),
                        [y] = (0, f.Z)(),
                        { viewerUserId: x } = (0, E.QZ)(),
                        w = (0, l.useHistory)(),
                        C = !e?.consented_at,
                        v = 0 === o.jobTitles.length,
                        j = (0, g.Z)(n, o),
                        _ = a.useCallback(() => {
                            if (x) {
                                const e = ((e) => {
                                    const t = [...e.jobTitles, ...e.locations].map((e) => ({ id: e.id, job_title: e.job_title, location_id: e.location_id }));
                                    return { consented: !0, recommendationsEnabled: e.recommendationsEnabled, remoteWorkAllowed: e.remoteWorkAllowed, matchingCriteria: t };
                                })(o);
                                m(!0),
                                    b({
                                        variables: { userId: x, consented: !0, ...e },
                                        onCompleted: () => {
                                            y({
                                                variables: { userId: x },
                                                onCompleted: () => {
                                                    m(!1), w.push("/jobs/recommended");
                                                },
                                            });
                                        },
                                    });
                            }
                        }, [b, y, o, w, x]),
                        P = (e, t) => {
                            s({ ...o, [e]: t });
                        },
                        S = (e) => {
                            const t = [...o.jobTitles].filter((t) => (e.id ? e.id !== t.id : e.job_title !== t.job_title));
                            s({ ...o, jobTitles: t });
                        },
                        B = (e) => {
                            const t = [...o.locations].filter((t) => (e.id ? e.id !== t.id : e.location_id !== t.location_id));
                            s({ ...o, locations: t });
                        };
                    return a.createElement(
                        c.Z,
                        { style: J.settingsContainer },
                        a.createElement(c.Z, { style: J.pageHeader }, a.createElement(u.ZP, { size: "title4", style: J.pageTitle, weight: "bold" }, "Share your job preferences"), a.createElement(u.ZP, null, "Tell us what job titles and work locations you’re interested in and we’ll show you jobs that meet your preferences.")),
                        a.createElement(
                            W,
                            { title: "Job Titles" },
                            a.createElement(u.ZP, { color: "gray700", size: "subtext1", style: J.sectionHelpText }, "Enter the job titles you’re interested in."),
                            v && a.createElement(p.Z.Primary, { style: J.jobTitleCallout, text: "You must add at least one job title", withIcon: !0 }),
                            a.createElement(Z, {
                                onAdd: (e) => {
                                    e && s({ ...o, jobTitles: [...o.jobTitles, { job_title: e }] });
                                },
                            }),
                            a.createElement(
                                c.Z,
                                null,
                                o.jobTitles.map((e) => a.createElement(I, { item: e, key: e.id || e.job_title, onDelete: S, textPath: "job_title" })),
                            ),
                        ),
                        a.createElement(
                            W,
                            { additionalStyles: J.locationSection, title: "Locations" },
                            a.createElement(T, { label: "Open to remote work", onChange: (e) => P("remoteWorkAllowed", e), value: o.remoteWorkAllowed }),
                            a.createElement(u.ZP, { color: "gray700", size: "subtext1", style: J.sectionHelpText }, "Enter the locations you’re interested in if performing the job on-site."),
                            a.createElement(k, {
                                onAdd: (e) => {
                                    s({ ...o, locations: [...o.locations, { location_id: e.id, location_name: e.name }] });
                                },
                            }),
                            a.createElement(
                                c.Z,
                                null,
                                o.locations.map((e) => a.createElement(I, { item: e, key: e.id || e.location_id, onDelete: B, textPath: "location_name" })),
                            ),
                        ),
                        a.createElement(W, { title: "Recommendation Preferences" }, a.createElement(T, { label: "See recommendations in your timeline", onChange: (e) => P("recommendationsEnabled", e), value: o.recommendationsEnabled })),
                        a.createElement(h.ZP, { disabled: i || v || j, onClick: _, type: "brandFilled" }, i ? a.createElement(c.Z, { style: J.buttonLoader }, a.createElement(d.Z, { color: "white", size: "small" }), a.createElement(u.ZP, null, "Saving")) : a.createElement(a.Fragment, null, C ? "Agree and see recommendations" : "Save preferences")),
                        C && a.createElement(u.ZP, { color: "gray700", size: "subtext3", style: J.disclaimerText }, "By clicking 'Agree and see recommendations,' you are agreeing to allow X to use your job preferences to provide personalized job recommendations and to enhance your overall experience. This information will be used to improve our services and deliver tailored content that aligns with your interests. Your privacy is important to us, and we will handle your data in accordance with our Privacy Policy."),
                    );
                },
                J = b.default.create((e) => ({ settingsContainer: { padding: e.spaces.space16, zIndex: 1 }, pageHeader: { marginBottom: e.spaces.space20 }, pageTitle: { marginBottom: e.spaces.space12 }, settingsSection: { display: "flex", flexDirection: "column", gap: e.spaces.space8, marginBottom: e.spaces.space16, paddingBottom: e.spaces.space16, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.gray200 }, locationSection: { zIndex: 5 }, sectionHeader: { marginBottom: e.spaces.space8 }, sectionHelpText: { marginBottom: e.spaces.space8 }, disclaimerText: { marginTop: e.spaces.space16 }, buttonLoader: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, jobTitleCallout: { marginBottom: e.spaces.space8 } })),
                W = ({ children: e, title: t, additionalStyles: n = {} }) => {
                    const l = { ...J.settingsSection, ...n };
                    return a.createElement(c.Z, { style: l }, a.createElement(u.ZP, { color: "text", size: "headline2", style: J.sectionHeader, weight: "bold" }, t), e);
                },
                M = i.Z,
                V = () => {
                    const { data: e, refetch: t } = (0, m.A)(M, {}),
                        n = !e,
                        l = e?.viewer_v2?.user_results?.result?.matching_profile;
                    return n ? a.createElement(c.Z, null, a.createElement(d.Z, { size: "large" })) : a.createElement(F, { matchingProfile: l, refetch: t });
                },
                $ = { context: "job_recommendations_onboarding" },
                N = () => {
                    const e = (0, l.useHistory)();
                    return r.ZP.isWebView() ? a.createElement(s.H, { errorConfig: $ }, a.createElement(V, null)) : a.createElement(s.H, { errorConfig: $ }, a.createElement(o.Z, { backLocation: "/", history: e, primaryContent: V, sidebarContent: null, title: "Job Recommendations" }));
                };
        },
        46858: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var a = n(202784),
                l = n(277660),
                r = n.n(l),
                o = n(107267),
                s = n(471957),
                i = n(549599);
            const c = ({ actions: e, item: t, itemId: n, itemIndex: l, pathPrefix: c }) => {
                const d = (0, o.useHistory)(),
                    { search: m } = (0, o.useLocation)(),
                    u = r()(i.KM, t),
                    p = u?.core,
                    h = u?.user_results?.result,
                    b = u?.company_profile_results?.result,
                    g = u?.id || "",
                    E = u?.user_sentiment,
                    f = a.useCallback(() => {
                        d.push({ pathname: `${c}/${n}`, search: m });
                    }, [d, n, c, m]);
                return u && p ? a.createElement(s.Z, { actions: e, companyProfile: b, job: p, jobId: n, jobIndex: l, onClick: f, relayId: g, user: h, userSentiment: E }) : null;
            };
        },
        62941: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                l = n(325686),
                r = n(392237);
            const o = () => a.createElement(l.Z, null, a.createElement(s, null), a.createElement(s, null), a.createElement(s, null), a.createElement(s, null), a.createElement(s, null)),
                s = () => a.createElement(l.Z, { style: i.stencilContainer }, a.createElement(l.Z, { style: i.stencilAvatarContainer }, a.createElement(l.Z, { style: i.stencilAvatar })), a.createElement(l.Z, { style: i.stencilText }, a.createElement(l.Z, { style: i.stencilTitle }), a.createElement(l.Z, { style: i.stencilCompany }), a.createElement(l.Z, { style: i.stencilLocation }), a.createElement(l.Z, { style: i.stencilActions }, a.createElement(l.Z, { style: i.stencilAction }), a.createElement(l.Z, { style: i.stencilAction })))),
                i = r.default.create((e) => ({ stencilContainer: { flex: 1, display: "flex", flexDirection: "row", padding: e.spaces.space20, borderBottomColor: e.colors.gray200, borderBottomWidth: "1px" }, stencilAvatarContainer: { marginEnd: e.spaces.space16 }, stencilAvatar: { width: "40px", height: "40px", backgroundColor: e.colors.gray400 }, stencilText: { flex: 1, display: "flex", flexDirection: "column", gap: 6 }, stencilTitle: { width: "180px", height: "12px", backgroundColor: e.colors.gray400, borderRadius: "32px" }, stencilCompany: { width: "80px", height: "9px", backgroundColor: e.colors.gray400, borderRadius: "32px" }, stencilLocation: { width: "130px", height: "8px", backgroundColor: e.colors.gray300, borderRadius: "32px" }, stencilActions: { flex: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16 }, stencilAction: { width: "64px", height: "12px", backgroundColor: e.colors.gray400, borderRadius: "32px" } }));
        },
        947698: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ee });
            var a = n(202784),
                l = n(247411),
                r = n(736063),
                o = n(335572),
                s = n(325686),
                i = (n(585488), n(107267)),
                c = n(903233),
                d = n(652904),
                m = n(293115),
                u = n(535338),
                p = n(708852),
                h = n(530732),
                b = n(731708),
                g = n(392237),
                E = n(894966),
                f = n(512549),
                y = n(254221);
            const x = ({ height: e }) => {
                    const t = a.useMemo(() => ({ height: e || g.default.theme.spaces.space16 }), [e]);
                    return a.createElement(s.Z, { style: t });
                },
                Z = ({ borderRadius: e, height: t, width: n }) => {
                    const l = a.useMemo(() => ({ ...w.stencil, borderRadius: e || g.default.theme.borderRadii.infinite, width: n, height: t }), [e, n, t]);
                    return a.createElement(s.Z, { style: l });
                },
                w = g.default.create((e) => ({ root: { padding: e.spaces.space20, flexGrow: 0, flexShrink: 1 }, header: { flexDirection: "row", gap: 16, flex: 1 }, container: { gap: 8 }, stencil: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray400 } })),
                C = () => {
                    const { theme: e } = g.default;
                    return a.createElement(s.Z, { style: w.root }, a.createElement(s.Z, { style: w.container }, a.createElement(Z, { height: e.spaces.space16, width: "50%" }), a.createElement(Z, { height: e.spaces.space12, width: "25%" })), a.createElement(x, { height: e.spaces.space20 }), a.createElement(s.Z, { style: w.header }, a.createElement(Z, { borderRadius: e.borderRadii.small, height: e.spaces.space48, width: e.spaces.space48 }), a.createElement(s.Z, { style: { ...w.container, flex: 1 } }, a.createElement(Z, { height: e.spaces.space16, width: "50%" }), a.createElement(Z, { height: e.spaces.space12, width: "25%" }), a.createElement(Z, { height: e.spaces.space12, width: "100%" }), a.createElement(Z, { height: e.spaces.space12, width: "75%" }))), a.createElement(x, { height: e.spaces.space40 }), a.createElement(s.Z, { style: w.container }, a.createElement(Z, { height: e.spaces.space16, width: "25%" }), a.createElement(Z, { height: e.spaces.space12, width: "90%" }), a.createElement(Z, { height: e.spaces.space12, width: "95%" }), a.createElement(Z, { height: e.spaces.space12, width: "75%" })), a.createElement(x, { height: e.spaces.space20 }), a.createElement(s.Z, { style: w.container }, a.createElement(Z, { height: e.spaces.space16, width: "50%" }), a.createElement(Z, { height: e.spaces.space12, width: "85%" }), a.createElement(Z, { height: e.spaces.space12, width: "90%" }), a.createElement(Z, { height: e.spaces.space12, width: "75%" })));
                },
                v = g.default.create((e) => ({ mobileDetailBackButton: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16 } })),
                k = ({ isLoading: e }) => {
                    const t = (0, i.useHistory)(),
                        n = !(0, p.Ji)(),
                        l = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return e ? (n ? null : a.createElement(C, null)) : a.createElement(s.Z, null, n && a.createElement(h.Z, { onClick: l, style: v.mobileDetailBackButton }, a.createElement(E.default, null), a.createElement(b.ZP, { size: "body", weight: "bold" }, "Back to recommendations")), a.createElement(y.Z, { actions: [f.h5, f.pN] }));
                };
            var j = n(893211),
                _ = n(482924),
                P = n(715601),
                I = n(46858),
                S = n(154003),
                B = n(443781),
                T = n(181666);
            const A = ({ onClick: e, refetchList: t }) => {
                    const [n, l] = (0, T.Z)(),
                        r = (0, i.useHistory)(),
                        { viewerUserId: o } = (0, B.QZ)(),
                        s = a.useCallback(() => {
                            o && (e(), r.replace("/jobs/recommended"), n({ variables: { userId: o }, onCompleted: t }));
                        }, [n, o, t, e, r]);
                    return a.createElement(S.ZP, { disabled: l, onPress: s, type: "primaryOutlined" }, "Refresh recommendations");
                },
                z = ({ item: e, items: t, shouldBeInView: n }) => {
                    const l = a.useRef(null);
                    return (
                        a.useEffect(() => {
                            n && l.current?.scrollIntoView({ behavior: "instant" });
                        }, [n, l]),
                        a.createElement(s.Z, { ref: l }, a.createElement(I.Z, { actions: [f.pN, f.h5], item: e.result, itemId: e.rest_id, itemIndex: t.findIndex((t) => t.rest_id === e.rest_id), pathPrefix: "/jobs/recommended" }))
                    );
                },
                D = g.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 }, mobileContainer: { height: "calc(100vh - 136px)", overflow: "auto" }, refreshButtonContainer: { display: "flex", alignItems: "center", padding: e.spaces.space16, backgroundColor: "rgba(255, 255, 255, .1)" }, mobileRefreshButtonContainer: { width: "100%", zIndex: 5, backgroundColor: e.colors.gray100 } })),
                H = ({ items: e, refetchList: t, setIsLoading: n }) => {
                    const [l, r] = a.useState(null),
                        o = (0, i.useParams)(),
                        c = (0, p.Ji)();
                    a.useEffect(() => {
                        !l && o.jobId && r(o.jobId);
                    }, [l, o.jobId]);
                    const d = a.useCallback(
                            () =>
                                a.createElement(
                                    s.Z,
                                    null,
                                    e.map((t) => a.createElement(z, { item: t, items: e, key: t.rest_id, shouldBeInView: l === t.rest_id })),
                                ),
                            [l, e],
                        ),
                        m = a.useCallback(() => a.createElement(s.Z, { style: { ...D.refreshButtonContainer, ...(c ? {} : D.mobileRefreshButtonContainer) } }, a.createElement(A, { onClick: () => n(!0), refetchList: t })), [t, c, n]);
                    return e ? (e.length && c ? a.createElement(a.Fragment, null, a.createElement(P.Z, { style: D.viewport }, d()), m()) : e.length && !c ? a.createElement(a.Fragment, null, a.createElement(s.Z, { style: D.mobileContainer }, d()), m()) : null) : null;
                };
            var R = n(293723),
                L = n(757700);
            const F = "first-time",
                J = "criteria-changed",
                W = g.default.create((e) => ({ modalContent: { padding: e.spaces.space48 }, modalHeader: { paddingBottom: e.spaces.space20 }, bodyText: { paddingBottom: e.spaces.space12 }, sentimentTextContainer: { display: "flex", flexDirection: "row", gap: 12, justify: "center", flex: 1 }, button: { marginTop: e.spaces.space12 }, icon: { marginEnd: e.spaces.space8 } })),
                M = ({ onDismiss: e, refetchList: t, type: n }) => {
                    const [l, r] = (0, T.Z)(),
                        { viewerUserId: o } = (0, B.QZ)(),
                        i = a.useCallback(() => {
                            o &&
                                l({
                                    variables: { userId: o },
                                    onCompleted: () => {
                                        t(), e();
                                    },
                                });
                        }, [l, o, t, e]);
                    return a.createElement(
                        L.ZP,
                        { modalSize: "fitChildren", onMaskClick: e, withBackground: !0 },
                        a.createElement(
                            s.Z,
                            { style: W.modalContent },
                            ((e) => {
                                switch (e) {
                                    case F:
                                        return a.createElement(a.Fragment, null, a.createElement(b.ZP, { size: "title4", style: W.modalHeader, weight: "bold" }, "How job recommendations work"), a.createElement(b.ZP, { size: "body", style: W.bodyText }, a.createElement(R.default, { style: W.icon }), "See jobs based on the job titles and locations you shared"), a.createElement(b.ZP, { size: "body", style: W.bodyText }, a.createElement(R.default, { style: W.icon }), "Update your recommendation settings at any point"), a.createElement(b.ZP, { size: "body", style: W.bodyText }, a.createElement(R.default, { style: W.icon }), "Help us fine tune your recommendations by using the ‘Save job’ and ‘Not interested’ buttons"));
                                    case J:
                                        return a.createElement(a.Fragment, null, a.createElement(b.ZP, { size: "title4", style: W.modalHeader, weight: "bold" }, "Your preferences have changed"), a.createElement(b.ZP, { size: "body", style: W.bodyText }, "Please refresh for updated job recommendations"));
                                    default:
                                        return a.createElement(s.Z, null);
                                }
                            })(n),
                            a.createElement(
                                S.ZP,
                                { disabled: r, onPress: i, style: W.button, type: "brandFilled" },
                                ((e) => {
                                    switch (e) {
                                        case J:
                                            return "Refresh recommendations";
                                        case F:
                                            return "Show recommendations";
                                        default:
                                            return "";
                                    }
                                })(n),
                            ),
                        ),
                    );
                };
            var V = n(62941);
            const $ = j.Z,
                N = ({ setActiveModal: e }) => {
                    const [t, n] = a.useState(null),
                        [l, r] = a.useState(!1),
                        o = (0, p.Ji)(),
                        s = (0, i.useHistory)(),
                        { pathname: c } = (0, i.useLocation)(),
                        { data: d, refetch: m, refetchStatus: u } = (0, _.A)($, { count: 10 }),
                        h = d?.viewer_v2?.user_results?.result,
                        b = h?.job_recommendations_results ?? [],
                        g = h?.matching_profile ?? {},
                        E = g.job_recommendations_refreshed_at,
                        f = g.updated_at,
                        y = b.find((e) => e.result)?.rest_id ?? null,
                        x = !h || l || !E;
                    return (
                        a.useEffect(() => {
                            "none" === u && r(!1);
                        }, [u]),
                        a.useEffect(() => {
                            f && E && f > E && e(J);
                        }, [E, f, e]),
                        a.useEffect(() => {
                            y && "/jobs/recommended" === c && o && !x && s.replace(`/jobs/recommended/${y}`);
                        }, [y, s, c, o, x]),
                        l ? a.createElement(V.Z, null) : a.createElement(a.Fragment, null, a.createElement(H, { items: b, refetchList: m, setIsLoading: r }), t && a.createElement(M, { onDismiss: () => n(null), refetchList: m, type: t }))
                    );
                },
                O = { context: "JobRecommendationsList" },
                U = (e) => a.createElement(r.H, { errorConfig: O }, a.createElement(N, e)),
                K = g.default.create((e) => ({ emptyStateContainer: { display: "flex", flexDirection: "column", flex: 1, gap: 12, padding: e.spaces.space48, alignItems: "center" } })),
                G = ({ subtext: e, title: t }) => a.createElement(s.Z, { style: K.emptyStateContainer }, a.createElement(b.ZP, { color: "text", size: "title3", weight: "bold" }, t), a.createElement(b.ZP, { color: "text" }, e), a.createElement(S.ZP, { link: "/jobs/get-recommendations", type: "primaryFilled" }, "Update preferences")),
                Y = o.Z,
                Q = { page: "job_recommendations", section: "all" },
                X = () => {
                    const [e, t] = a.useState(null),
                        n = (0, i.useLocation)(),
                        l = (0, u.p)(Y, {}),
                        r = l?.viewer_v2?.user_results?.result?.job_recommendations_results ?? [],
                        o = l?.viewer_v2?.user_results?.result?.matching_profile?.job_titles ?? [],
                        p = a.useMemo(() => 0 === r.length, [r.length]),
                        h = a.useMemo(() => 0 === o.length, [o.length]),
                        b = a.useCallback(() => (h ? a.createElement(G, { subtext: "Share the job titles you’re interested in so we can find jobs that meet your preferences.", title: "You’re missing preferences" }) : p ? a.createElement(G, { subtext: "Update your preferences or check back soon for more job recommendations.", title: "Sorry, no jobs to see" }) : null), [h, p]),
                        g = /\/jobs\/recommended\/\d+/.test(n.pathname);
                    return a.createElement(m.nO, { namespace: Q }, a.createElement(d.Z, { locationKey: Q.page }, a.createElement(c.Z, { isRightRootActive: g, leftContent: a.createElement(s.Z, { style: { display: "flex", overflow: "auto", width: "30%" } }, a.createElement(U, { setActiveModal: t })), mobileRootStyles: { height: "calc(100vh - 68px)" }, overlay: b(), rightContent: a.createElement(k, { isLoading: Boolean(e) || p || h }), rootStyles: { height: "calc(100vh - 116px)" } })));
                },
                q = { context: "JobRecommendations" },
                ee = () => a.createElement(r.H, { errorConfig: q }, a.createElement(l.Z, null, a.createElement(X, null)));
        },
        181666: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(488248),
                l = n(202784),
                r = (n(585488), n(351743)),
                o = n.n(r);
            const s = a.Z,
                i = () => {
                    const [e, t] = o()(s);
                    return [
                        l.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-e6266db0.92cd31aa.js.map
