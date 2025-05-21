"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-a94563ff"],
    {
        879930: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Y });
            var a = n(202784),
                l = n(107267),
                o = n(323265),
                r = n(252021),
                s = n(736063),
                i = n(255875),
                c = n(325686),
                d = (n(585488), n(167630)),
                m = n(482924),
                p = (n(136728), n(731708)),
                u = n(40610),
                h = n(154003),
                b = n(392237),
                g = n(908478),
                E = n(443781),
                y = n(181666),
                f = n(855488),
                x = n(379327);
            const Z = ({ onAdd: e }) => {
                    const [t, n] = a.useState(""),
                        [l, o] = a.useState(""),
                        r = () => {
                            t || o("Job title can't be empty"), e(t), n("");
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
                                a.createElement(f.Z, {
                                    label: "Job Title",
                                    name: "jobTitle",
                                    onChange: (e) => {
                                        o(""), n(e.target.value);
                                    },
                                    onKeyPress: (e) => {
                                        "Enter" === e.key && r();
                                    },
                                    style: w.textInput,
                                    testID: "job-rec-title-input",
                                    value: t,
                                }),
                            ),
                            a.createElement(c.Z, { style: w.buttonWrapper }, a.createElement(h.ZP, { icon: a.createElement(x.default, null), onPress: r, size: "large", testID: "job-rec-title-btn", type: "primaryFilled" })),
                        ),
                        l ? a.createElement(p.ZP, { color: "red500", size: "subtext2" }, l) : a.createElement(p.ZP, { color: "gray700", size: "subtext2" }, "Press enter to add"),
                    );
                },
                w = b.default.create((e) => ({ inputField: { display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, inputWrapper: { position: "relative", flexGrow: 1, marginEnd: e.spaces.space16 }, buttonWrapper: { flexShrink: 0, marginTop: "-2px" }, textInput: { paddingStart: "0px", paddingBottom: "0px", paddingTop: "0px", paddingEnd: "0px" }, loader: { position: "absolute", end: "12px", top: "20px", zIndex: 5 } }));
            var C = n(516951),
                v = n(998693);
            const j = ({ onAdd: e }) => {
                    const [t, n] = a.useState("");
                    return a.createElement(
                        c.Z,
                        { style: _.locationInputContainer },
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
                _ = b.default.create((e) => ({ locationInputContainer: { display: "flex", zIndex: 5, position: "relative" }, loader: { position: "absolute", end: "12px", top: "20px", zIndex: 6 } }));
            var k = n(837020);
            const P = b.default.create((e) => ({ listItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, paddingHorizontal: e.spaces.space2, paddingVertical: e.spaces.space4, marginBottom: e.spaces.space2 }, icon: { cursor: "pointer" } })),
                I = ({ item: e, onDelete: t, textPath: n }) => a.createElement(c.Z, { style: P.listItem }, a.createElement(p.ZP, null, S(e, n)), a.createElement(k.default, { onClick: () => t(e), style: P.icon, testID: "delete-matching-criteria-btn" })),
                S = (e, t, n = "") => {
                    const a = t.split(".");
                    let l = e;
                    for (const e of a) {
                        if (!l || "object" != typeof l || !(e in l)) return n;
                        l = l[e];
                    }
                    return void 0 !== l ? l : n;
                };
            var T = n(451566);
            const B = ({ label: e, onChange: t, value: n }) => a.createElement(c.Z, { style: z.fieldContainer }, a.createElement(p.ZP, null, e), a.createElement(T.Z, { onValueChange: t, value: n })),
                z = b.default.create((e) => ({ fieldContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, paddingVertical: e.spaces.space8 } }));
            var A = n(594695),
                H = n(351743),
                R = n.n(H);
            const D = A.Z,
                L = () => {
                    const [e, t] = R()(D);
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
                    const n = ((o = e), { recommendationsEnabled: o?.recommendations_enabled ?? !0, remoteWorkAllowed: o?.remote_work_allowed ?? !0, jobTitles: [...(o?.job_titles || [])], locations: [...(o?.locations || [])].map((e) => ({ id: e.id, location_id: e.location_id, location_name: e.location?.core?.display_name })) });
                    var o;
                    const [r, s] = a.useState(n),
                        [i, m] = a.useState(!1),
                        [b] = L(),
                        [f] = (0, y.Z)(),
                        { viewerUserId: x } = (0, E.QZ)(),
                        w = (0, l.useHistory)(),
                        C = !e?.consented_at,
                        v = 0 === r.jobTitles.length,
                        _ = (0, g.Z)(n, r),
                        k = a.useCallback(() => {
                            if (x) {
                                const e = ((e) => {
                                    const t = [...e.jobTitles, ...e.locations].map((e) => ({ id: e.id, job_title: e.job_title, location_id: e.location_id }));
                                    return { consented: !0, recommendationsEnabled: e.recommendationsEnabled, remoteWorkAllowed: e.remoteWorkAllowed, matchingCriteria: t };
                                })(r);
                                m(!0),
                                    b({
                                        variables: { userId: x, consented: !0, ...e },
                                        onCompleted: () => {
                                            f({
                                                variables: { userId: x },
                                                onCompleted: () => {
                                                    m(!1), w.push("/jobs/recommended");
                                                },
                                            });
                                        },
                                    });
                            }
                        }, [b, f, r, w, x]),
                        P = (e, t) => {
                            s({ ...r, [e]: t });
                        },
                        S = (e) => {
                            const t = [...r.jobTitles].filter((t) => (e.id ? e.id !== t.id : e.job_title !== t.job_title));
                            s({ ...r, jobTitles: t });
                        },
                        T = (e) => {
                            const t = [...r.locations].filter((t) => (e.id ? e.id !== t.id : e.location_id !== t.location_id));
                            s({ ...r, locations: t });
                        };
                    return a.createElement(
                        c.Z,
                        { style: W.settingsContainer },
                        a.createElement(c.Z, { style: W.pageHeader }, a.createElement(p.ZP, { size: "title4", style: W.pageTitle, weight: "bold" }, "Share your job preferences"), a.createElement(p.ZP, null, "Tell us what job titles and work locations you’re interested in and we’ll show you jobs that meet your preferences.")),
                        a.createElement(
                            J,
                            { title: "Job Titles" },
                            a.createElement(p.ZP, { color: "gray700", size: "subtext1", style: W.sectionHelpText }, "Enter the job titles you’re interested in."),
                            v && a.createElement(u.Z.Primary, { style: W.jobTitleCallout, text: "You must add at least one job title", withIcon: !0 }),
                            a.createElement(Z, {
                                onAdd: (e) => {
                                    e && s({ ...r, jobTitles: [...r.jobTitles, { job_title: e }] });
                                },
                            }),
                            a.createElement(
                                c.Z,
                                null,
                                r.jobTitles.map((e) => a.createElement(I, { item: e, key: e.id || e.job_title, onDelete: S, textPath: "job_title" })),
                            ),
                        ),
                        a.createElement(
                            J,
                            { additionalStyles: W.locationSection, title: "Locations" },
                            a.createElement(B, { label: "Open to remote work", onChange: (e) => P("remoteWorkAllowed", e), value: r.remoteWorkAllowed }),
                            a.createElement(p.ZP, { color: "gray700", size: "subtext1", style: W.sectionHelpText }, "Enter the locations you’re interested in if performing the job on-site."),
                            a.createElement(j, {
                                onAdd: (e) => {
                                    s({ ...r, locations: [...r.locations, { location_id: e.id, location_name: e.name }] });
                                },
                            }),
                            a.createElement(
                                c.Z,
                                null,
                                r.locations.map((e) => a.createElement(I, { item: e, key: e.id || e.location_id, onDelete: T, textPath: "location_name" })),
                            ),
                        ),
                        a.createElement(J, { title: "Recommendation Preferences" }, a.createElement(B, { label: "See recommendations in your timeline", onChange: (e) => P("recommendationsEnabled", e), value: r.recommendationsEnabled })),
                        a.createElement(h.ZP, { disabled: i || v || _, onClick: k, type: "brandFilled" }, i ? a.createElement(c.Z, { style: W.buttonLoader }, a.createElement(d.Z, { color: "white", size: "small" }), a.createElement(p.ZP, null, "Saving")) : a.createElement(a.Fragment, null, C ? "Agree and see recommendations" : "Save preferences")),
                        C && a.createElement(p.ZP, { color: "gray700", size: "subtext3", style: W.disclaimerText }, "By clicking 'Agree and see recommendations,' you are agreeing to allow X to use your job preferences to provide personalized job recommendations and to enhance your overall experience. This information will be used to improve our services and deliver tailored content that aligns with your interests. Your privacy is important to us, and we will handle your data in accordance with our Privacy Policy."),
                    );
                },
                W = b.default.create((e) => ({ settingsContainer: { padding: e.spaces.space16, zIndex: 1 }, pageHeader: { marginBottom: e.spaces.space20 }, pageTitle: { marginBottom: e.spaces.space12 }, settingsSection: { display: "flex", flexDirection: "column", gap: e.spaces.space8, marginBottom: e.spaces.space16, paddingBottom: e.spaces.space16, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.gray200 }, locationSection: { zIndex: 5 }, sectionHeader: { marginBottom: e.spaces.space8 }, sectionHelpText: { marginBottom: e.spaces.space8 }, disclaimerText: { marginTop: e.spaces.space16 }, buttonLoader: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, jobTitleCallout: { marginBottom: e.spaces.space8 } })),
                J = ({ children: e, title: t, additionalStyles: n = {} }) => {
                    const l = { ...W.settingsSection, ...n };
                    return a.createElement(c.Z, { style: l }, a.createElement(p.ZP, { color: "text", size: "headline2", style: W.sectionHeader, weight: "bold" }, t), e);
                },
                M = i.Z,
                V = () => {
                    const { data: e, refetch: t } = (0, m.A)(M, {}),
                        n = !e,
                        l = e?.viewer_v2?.user_results?.result?.matching_profile;
                    return n ? a.createElement(c.Z, null, a.createElement(d.Z, { size: "large" })) : a.createElement(F, { matchingProfile: l, refetch: t });
                },
                U = { context: "job_recommendations_onboarding" },
                Y = () => {
                    const e = (0, l.useHistory)();
                    return o.ZP.isWebView() ? a.createElement(s.H, { errorConfig: U }, a.createElement(V, null)) : a.createElement(s.H, { errorConfig: U }, a.createElement(r.Z, { backLocation: "/", history: e, primaryContent: V, sidebarContent: null, title: "Job Recommendations" }));
                };
        },
        46858: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var a = n(202784),
                l = n(277660),
                o = n.n(l),
                r = n(107267),
                s = n(822502),
                i = n(910113);
            const c = ({ actions: e, item: t, itemId: n, itemIndex: l, pathPrefix: c }) => {
                const d = (0, r.useHistory)(),
                    { search: m } = (0, r.useLocation)(),
                    p = o()(i.KM, t),
                    u = p?.core,
                    h = p?.user_results?.result,
                    b = p?.company_profile_results?.result,
                    g = p?.id || "",
                    E = p?.user_sentiment,
                    y = a.useCallback(() => {
                        d.push({ pathname: `${c}/${n}`, search: m });
                    }, [d, n, c, m]);
                return p && u ? a.createElement(s.Z, { actions: e, companyProfile: b, job: u, jobId: n, jobIndex: l, onClick: y, relayId: g, user: h, userSentiment: E }) : null;
            };
        },
        62941: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                l = n(325686),
                o = n(392237);
            const r = () => a.createElement(l.Z, null, a.createElement(s, null), a.createElement(s, null), a.createElement(s, null), a.createElement(s, null), a.createElement(s, null)),
                s = () => a.createElement(l.Z, { style: i.stencilContainer }, a.createElement(l.Z, { style: i.stencilAvatarContainer }, a.createElement(l.Z, { style: i.stencilAvatar })), a.createElement(l.Z, { style: i.stencilText }, a.createElement(l.Z, { style: i.stencilTitle }), a.createElement(l.Z, { style: i.stencilCompany }), a.createElement(l.Z, { style: i.stencilLocation }), a.createElement(l.Z, { style: i.stencilActions }, a.createElement(l.Z, { style: i.stencilAction }), a.createElement(l.Z, { style: i.stencilAction })))),
                i = o.default.create((e) => ({ stencilContainer: { flex: 1, display: "flex", flexDirection: "row", padding: e.spaces.space20, borderBottomColor: e.colors.gray200, borderBottomWidth: "1px" }, stencilAvatarContainer: { marginEnd: e.spaces.space16 }, stencilAvatar: { width: "40px", height: "40px", backgroundColor: e.colors.gray400 }, stencilText: { flex: 1, display: "flex", flexDirection: "column", gap: 6 }, stencilTitle: { width: "180px", height: "12px", backgroundColor: e.colors.gray400, borderRadius: "32px" }, stencilCompany: { width: "80px", height: "9px", backgroundColor: e.colors.gray400, borderRadius: "32px" }, stencilLocation: { width: "130px", height: "8px", backgroundColor: e.colors.gray300, borderRadius: "32px" }, stencilActions: { flex: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16 }, stencilAction: { width: "64px", height: "12px", backgroundColor: e.colors.gray400, borderRadius: "32px" } }));
        },
        947698: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ee });
            var a = n(202784),
                l = n(247411),
                o = n(736063),
                r = n(335572),
                s = n(325686),
                i = (n(585488), n(107267)),
                c = n(903233),
                d = n(652904),
                m = n(293115),
                p = n(535338),
                u = n(708852),
                h = n(530732),
                b = n(731708),
                g = n(392237),
                E = n(894966),
                y = n(318178),
                f = n(254221);
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
                j = ({ isLoading: e }) => {
                    const t = (0, i.useHistory)(),
                        n = !(0, u.Ji)(),
                        l = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return e ? (n ? null : a.createElement(C, null)) : a.createElement(s.Z, null, n && a.createElement(h.Z, { onClick: l, style: v.mobileDetailBackButton }, a.createElement(E.default, null), a.createElement(b.ZP, { size: "body", weight: "bold" }, "Back to recommendations")), a.createElement(f.Z, { actions: [y.h5, y.pN] }));
                };
            var _ = n(893211),
                k = n(482924),
                P = n(715601),
                I = n(46858),
                S = n(154003),
                T = n(443781),
                B = n(181666);
            const z = ({ onClick: e, refetchList: t }) => {
                    const [n, l] = (0, B.Z)(),
                        o = (0, i.useHistory)(),
                        { viewerUserId: r } = (0, T.QZ)(),
                        s = a.useCallback(() => {
                            r && (e(), o.replace("/jobs/recommended"), n({ variables: { userId: r }, onCompleted: t }));
                        }, [n, r, t, e, o]);
                    return a.createElement(S.ZP, { disabled: l, onPress: s, type: "primaryOutlined" }, "Refresh recommendations");
                },
                A = ({ item: e, items: t, shouldBeInView: n }) => {
                    const l = a.useRef(null);
                    return (
                        a.useEffect(() => {
                            n && l.current?.scrollIntoView({ behavior: "instant" });
                        }, [n, l]),
                        a.createElement(s.Z, { ref: l }, a.createElement(I.Z, { actions: [y.pN, y.h5], item: e.result, itemId: e.rest_id, itemIndex: t.findIndex((t) => t.rest_id === e.rest_id), pathPrefix: "/jobs/recommended" }))
                    );
                },
                H = g.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 }, mobileContainer: { height: "calc(100vh - 136px)", overflow: "auto" }, refreshButtonContainer: { display: "flex", alignItems: "center", padding: e.spaces.space16, backgroundColor: "rgba(255, 255, 255, .1)" }, mobileRefreshButtonContainer: { width: "100%", zIndex: 5, backgroundColor: e.colors.gray100 } })),
                R = ({ items: e, refetchList: t, setIsLoading: n }) => {
                    const [l, o] = a.useState(null),
                        r = (0, i.useParams)(),
                        c = (0, u.Ji)();
                    a.useEffect(() => {
                        !l && r.jobId && o(r.jobId);
                    }, [l, r.jobId]);
                    const d = a.useCallback(
                            () =>
                                a.createElement(
                                    s.Z,
                                    null,
                                    e.map((t) => a.createElement(A, { item: t, items: e, key: t.rest_id, shouldBeInView: l === t.rest_id })),
                                ),
                            [l, e],
                        ),
                        m = a.useCallback(() => a.createElement(s.Z, { style: { ...H.refreshButtonContainer, ...(c ? {} : H.mobileRefreshButtonContainer) } }, a.createElement(z, { onClick: () => n(!0), refetchList: t })), [t, c, n]);
                    return e ? (e.length && c ? a.createElement(a.Fragment, null, a.createElement(P.Z, { style: H.viewport }, d()), m()) : e.length && !c ? a.createElement(a.Fragment, null, a.createElement(s.Z, { style: H.mobileContainer }, d()), m()) : null) : null;
                };
            var D = n(293723),
                L = n(757700);
            const F = "first-time",
                W = "criteria-changed",
                J = g.default.create((e) => ({ modalContent: { padding: e.spaces.space48 }, modalHeader: { paddingBottom: e.spaces.space20 }, bodyText: { paddingBottom: e.spaces.space12 }, sentimentTextContainer: { display: "flex", flexDirection: "row", gap: 12, justify: "center", flex: 1 }, button: { marginTop: e.spaces.space12 }, icon: { marginEnd: e.spaces.space8 } })),
                M = ({ onDismiss: e, refetchList: t, type: n }) => {
                    const [l, o] = (0, B.Z)(),
                        { viewerUserId: r } = (0, T.QZ)(),
                        i = a.useCallback(() => {
                            r &&
                                l({
                                    variables: { userId: r },
                                    onCompleted: () => {
                                        t(), e();
                                    },
                                });
                        }, [l, r, t, e]);
                    return a.createElement(
                        L.ZP,
                        { modalSize: "fitChildren", onMaskClick: e, withBackground: !0 },
                        a.createElement(
                            s.Z,
                            { style: J.modalContent },
                            ((e) => {
                                switch (e) {
                                    case F:
                                        return a.createElement(a.Fragment, null, a.createElement(b.ZP, { size: "title4", style: J.modalHeader, weight: "bold" }, "How job recommendations work"), a.createElement(b.ZP, { size: "body", style: J.bodyText }, a.createElement(D.default, { style: J.icon }), "See jobs based on the job titles and locations you shared"), a.createElement(b.ZP, { size: "body", style: J.bodyText }, a.createElement(D.default, { style: J.icon }), "Update your recommendation settings at any point"), a.createElement(b.ZP, { size: "body", style: J.bodyText }, a.createElement(D.default, { style: J.icon }), "Help us fine tune your recommendations by using the ‘Save job’ and ‘Not interested’ buttons"));
                                    case W:
                                        return a.createElement(a.Fragment, null, a.createElement(b.ZP, { size: "title4", style: J.modalHeader, weight: "bold" }, "Your preferences have changed"), a.createElement(b.ZP, { size: "body", style: J.bodyText }, "Please refresh for updated job recommendations"));
                                    default:
                                        return a.createElement(s.Z, null);
                                }
                            })(n),
                            a.createElement(
                                S.ZP,
                                { disabled: o, onPress: i, style: J.button, type: "brandFilled" },
                                ((e) => {
                                    switch (e) {
                                        case W:
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
            const U = _.Z,
                Y = ({ setActiveModal: e }) => {
                    const [t, n] = a.useState(null),
                        [l, o] = a.useState(!1),
                        r = (0, u.Ji)(),
                        s = (0, i.useHistory)(),
                        { pathname: c } = (0, i.useLocation)(),
                        { data: d, refetch: m, refetchStatus: p } = (0, k.A)(U, { count: 10 }),
                        h = d?.viewer_v2?.user_results?.result,
                        b = h?.job_recommendations_results ?? [],
                        g = h?.matching_profile ?? {},
                        E = g.job_recommendations_refreshed_at,
                        y = g.updated_at,
                        f = b.find((e) => e.result)?.rest_id ?? null,
                        x = !h || l || !E;
                    return (
                        a.useEffect(() => {
                            "none" === p && o(!1);
                        }, [p]),
                        a.useEffect(() => {
                            y && E && y > E && e(W);
                        }, [E, y, e]),
                        a.useEffect(() => {
                            f && "/jobs/recommended" === c && r && !x && s.replace(`/jobs/recommended/${f}`);
                        }, [f, s, c, r, x]),
                        l ? a.createElement(V.Z, null) : a.createElement(a.Fragment, null, a.createElement(R, { items: b, refetchList: m, setIsLoading: o }), t && a.createElement(M, { onDismiss: () => n(null), refetchList: m, type: t }))
                    );
                },
                K = { context: "JobRecommendationsList" },
                N = (e) => a.createElement(o.H, { errorConfig: K }, a.createElement(Y, e)),
                O = g.default.create((e) => ({ emptyStateContainer: { display: "flex", flexDirection: "column", flex: 1, gap: 12, padding: e.spaces.space48, alignItems: "center" } })),
                Q = ({ subtext: e, title: t }) => a.createElement(s.Z, { style: O.emptyStateContainer }, a.createElement(b.ZP, { color: "text", size: "title3", weight: "bold" }, t), a.createElement(b.ZP, { color: "text" }, e), a.createElement(S.ZP, { link: "/jobs/get-recommendations", type: "primaryFilled" }, "Update preferences")),
                $ = r.Z,
                G = { page: "job_recommendations", section: "all" },
                X = () => {
                    const [e, t] = a.useState(null),
                        n = (0, i.useLocation)(),
                        l = (0, p.p)($, {}),
                        o = l?.viewer_v2?.user_results?.result?.job_recommendations_results ?? [],
                        r = l?.viewer_v2?.user_results?.result?.matching_profile?.job_titles ?? [],
                        u = a.useMemo(() => 0 === o.length, [o.length]),
                        h = a.useMemo(() => 0 === r.length, [r.length]),
                        b = a.useCallback(() => (h ? a.createElement(Q, { subtext: "Share the job titles you’re interested in so we can find jobs that meet your preferences.", title: "You’re missing preferences" }) : u ? a.createElement(Q, { subtext: "Update your preferences or check back soon for more job recommendations.", title: "Sorry, no jobs to see" }) : null), [h, u]),
                        g = /\/jobs\/recommended\/\d+/.test(n.pathname);
                    return a.createElement(m.nO, { namespace: G }, a.createElement(d.Z, { locationKey: G.page }, a.createElement(c.Z, { isRightRootActive: g, leftContent: a.createElement(s.Z, { style: { display: "flex", overflow: "auto", width: "30%" } }, a.createElement(N, { setActiveModal: t })), mobileRootStyles: { height: "calc(100vh - 68px)" }, overlay: b(), rightContent: a.createElement(j, { isLoading: Boolean(e) || u || h }), rootStyles: { height: "calc(100vh - 116px)" } })));
                },
                q = { context: "JobRecommendations" },
                ee = () => a.createElement(o.H, { errorConfig: q }, a.createElement(l.Z, null, a.createElement(X, null)));
        },
        181666: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(488248),
                l = n(202784),
                o = (n(585488), n(351743)),
                r = n.n(o);
            const s = a.Z,
                i = () => {
                    const [e, t] = r()(s);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-a94563ff.79c69aaa.js.map
