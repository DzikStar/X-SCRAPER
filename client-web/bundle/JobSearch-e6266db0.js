"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-e6266db0"],
    {
        246851: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784);
            function a(e) {
                const t = o.useRef();
                return (
                    o.useEffect(() => {
                        t.current = e;
                    }),
                    t.current
                );
            }
        },
        478414: (e, t, n) => {
            n.d(t, { Hx: () => s, K: () => l, bb: () => i, gv: () => r, kg: () => c, yW: () => d });
            var o = n(779802),
                a = n(392237);
            const l = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                r = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                i = ({ h1FontSize: e, h2FontSize: t, paragraphFontSize: n }) => [
                    { blockType: o.P7.header1, label: o.et, component: (0, o.LI)({ size: e, children: o.et, extendedWidth: !0 }) },
                    { blockType: o.P7.header2, label: o.PW, component: (0, o.LI)({ size: t, weight: "bold", children: o.PW }) },
                    { blockType: o.P7.paragraph, label: o.$u, component: (0, o.LI)({ size: n, children: o.$u }) },
                ],
                s = "extended-profile",
                c = "extended-profile-mobile-webview",
                d = (e, { h1FontSize: t, h2FontSize: n, paragraphFontSize: o }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${a.default.theme.fontFamilies.chirpExtended};\n        font-size: ${a.default.theme.fontSizes[t]};\n        line-height: ${a.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${a.default.theme.fontFamilies.chirpExtended};\n        font-size: ${a.default.theme.fontSizes[t]};\n        line-height: ${a.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${a.default.theme.fontSizes[n]};\n        font-weight: ${a.default.theme.fontWeights.bold};\n        line-height: ${a.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${a.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${a.default.theme.fontWeights.bold};\n        line-height: ${a.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${a.default.theme.fontSizes[o]};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${a.default.theme.fontSizes[o]};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${a.default.theme.fontSizes[o]};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space2};\n        margin-left: calc(${a.default.theme.spaces.space20} + ${a.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${a.default.theme.fontSizes[o]};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space2};\n        margin-left: ${a.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${a.default.theme.spaces.space2});\n        padding-left: calc(${a.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${a.default.theme.colors.gray900};\n        border-radius: ${a.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${a.default.theme.spaces.space20} + ${a.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var o = n(202784),
                a = n(437429),
                l = n.n(a),
                r = n(57074),
                i = n.n(r),
                s = n(10622),
                c = n.n(s),
                d = n(71620),
                m = n(312771),
                u = n(535338);
            function p(e, t, n) {
                const a = i()(t),
                    r = i()(n),
                    s = l()(),
                    p = (0, d.po)(),
                    [f, h] = o.useState(null),
                    [g, b] = o.useState(!1),
                    y = o.useCallback(() => {
                        g ||
                            (b(!0),
                            c()(s, e, a, { networkCacheConfig: r?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    b(!1);
                                },
                                error: (e) => {
                                    p(e), b(!1), h(e);
                                },
                            }));
                    }, [s, p, e, g, a, r]),
                    E = (0, u.p)(e, t, n);
                return o.useMemo(() => (f ? { data: E, refetch: y, refetchStatus: m.ZP.FAILED, refetchError: f } : { data: E, refetch: y, refetchStatus: g ? m.ZP.LOADING : m.ZP.NONE, refetchError: void 0 }), [E, f, g, y]);
            }
        },
        263870: (e, t, n) => {
            n.r(t), n.d(t, { default: () => N });
            var o = n(202784),
                a = n(247411),
                l = n(736063),
                r = n(325686),
                i = n(107267),
                s = n(708852),
                c = n(530732),
                d = n(731708),
                m = n(392237),
                u = n(894966),
                p = n(512549),
                f = n(903233),
                h = n(652904),
                g = n(293115),
                b = n(254221),
                y = n(771741),
                E = (n(585488), n(457311)),
                x = n(154003),
                w = n(97301),
                Z = n(58399),
                v = n(292546),
                k = n(482924),
                C = n(62941),
                S = n(965245),
                $ = n(609927),
                j = n(715601),
                _ = n(768572),
                z = n(46858);
            const P = { isGlobal: !0, isSticky: !1 },
                I = (e) => e.rest_id,
                D = m.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 }, mobileContainer: { position: "relative", height: "calc(100vh - 112px)", overflow: "auto" } })),
                B = ({ items: e }) => {
                    const t = (0, s.Ji)(),
                        n = o.useCallback((t) => o.createElement(z.Z, { item: t.result, itemId: t.rest_id, itemIndex: e.findIndex((e) => e.rest_id === t.rest_id), pathPrefix: "/jobs/saved" }), [e]),
                        a = o.useCallback(() => o.createElement(S.Z, { cacheKey: "jobSearchList", footer: null, identityFunction: I, items: e, renderer: n, withoutHeadroom: !0 }), [e, n]);
                    return e ? (e.length && t ? o.createElement($.Z.Provider, { value: P }, o.createElement(_.y3.Provider, { value: void 0 }, o.createElement(j.Z, { style: D.viewport }, a()))) : e.length && !t ? o.createElement(r.Z, { style: D.mobileContainer }, a()) : null) : null;
                },
                T = y.Z,
                A = 10,
                H = () => {
                    const e = (0, i.useHistory)(),
                        [t, n] = (0, v.Z)(),
                        [a, l] = o.useState(!1),
                        c = (0, s.Ji)(),
                        m = t.get("page") ? parseInt(t?.get("page"), 10) : 1,
                        { data: u, refetchStatus: p } = (0, k.A)(T, { limit: A, offset: ((f = m), (f - 1) * A) });
                    var f;
                    o.useEffect(() => {
                        "none" === p && l(!1);
                    }, [p]);
                    const h = u?.viewer_v2?.user_results?.result,
                        g = h?.saved_jobs ?? {},
                        b = g.total || 0,
                        y = Math.ceil(b / A),
                        S = g.items_results ?? [],
                        $ = S.length > 0 ? S[0].rest_id : null,
                        j = !h || a;
                    o.useEffect(() => {
                        $ && "/jobs/saved" === location.pathname && c && !j && e.replace(`/jobs/saved/${$}?page=${m}`);
                    }, [$, c, j, m, e]);
                    const _ = o.useCallback(() => {
                            m < y && n("page", (m + 1).toString());
                        }, [m, n, y]),
                        z = o.useCallback(() => {
                            m > 1 && n("page", (m - 1).toString());
                        }, [m, n]);
                    return j
                        ? o.createElement(C.Z, null)
                        : b <= 0
                          ? o.createElement(E.Z, { header: "No saved jobs" })
                          : o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(B, { items: S }),
                                o.createElement(
                                    r.Z,
                                    { style: { ...F.actionBar, ...(c ? {} : F.mobileActionBar) } },
                                    o.createElement(
                                        r.Z,
                                        { style: F.actionBarInner },
                                        o.createElement(x.ZP, { disabled: 1 === m, icon: o.createElement(w.default, null), onClick: z, type: "brandText" }),
                                        o.createElement(
                                            d.ZP,
                                            { color: "gray900", size: "subtext1" },
                                            ((e, t) => {
                                                if (t > 0) {
                                                    let n = e * A;
                                                    return n > t && (n = t), `Viewing ${e * A - 9} - ${n} of ${t}`;
                                                }
                                                return "";
                                            })(m, b),
                                        ),
                                        o.createElement(x.ZP, { disabled: m === y, icon: o.createElement(Z.default, null), onClick: _, type: "brandText" }),
                                    ),
                                ),
                            );
                },
                F = m.default.create((e) => ({ actionBar: { width: "100%", backgroundColor: e.colors.gray200 }, mobileActionBar: { width: "100%", backgroundColor: e.colors.gray200 }, actionBarInner: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space4 } })),
                R = { context: "JobBookmarksList" },
                L = () => o.createElement(l.H, { errorConfig: R }, o.createElement(H, null)),
                W = { page: "saved_jobs", section: "all" },
                J = () => {
                    const e = (0, i.useLocation)(),
                        t = (0, i.useHistory)(),
                        n = !(0, s.Ji)(),
                        a = /\/jobs\/saved\/\d+/.test(e.pathname),
                        l = o.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return o.createElement(g.nO, { namespace: W }, o.createElement(h.Z, { locationKey: W.page }, o.createElement(f.Z, { isRightRootActive: a, leftContent: o.createElement(r.Z, { style: { display: "flex", overflow: "auto", width: "30%" } }, o.createElement(L, null)), mobileRootStyles: { height: "calc(100vh - 68px)" }, rightContent: o.createElement(r.Z, null, n && o.createElement(c.Z, { onClick: l, style: M.mobileDetailBackButton }, o.createElement(u.default, null), o.createElement(d.ZP, { size: "body", weight: "bold" }, "Back to saved jobs")), o.createElement(b.Z, { actions: [p.h5] })), rootStyles: { height: "calc(100vh - 116px)" } })));
                },
                M = m.default.create((e) => ({ mobileDetailBackButton: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16 }, mobileDetailActionsItemBreak: { flexBasis: "100%" } })),
                V = { context: "JobRecommendations" },
                N = () => o.createElement(l.H, { errorConfig: V }, o.createElement(a.Z, null, o.createElement(J, null)));
        },
        879930: (e, t, n) => {
            n.r(t), n.d(t, { default: () => N });
            var o = n(202784),
                a = n(107267),
                l = n(323265),
                r = n(252021),
                i = n(736063),
                s = n(255875),
                c = n(325686),
                d = (n(585488), n(167630)),
                m = n(482924),
                u = (n(136728), n(731708)),
                p = n(40610),
                f = n(154003),
                h = n(392237),
                g = n(908478),
                b = n(443781),
                y = n(181666),
                E = n(855488),
                x = n(379327);
            const w = ({ onAdd: e }) => {
                    const [t, n] = o.useState(""),
                        [a, l] = o.useState(""),
                        r = () => {
                            t || l("Job title can't be empty"), e(t), n("");
                        };
                    return o.createElement(
                        c.Z,
                        null,
                        o.createElement(
                            c.Z,
                            { style: Z.inputField },
                            o.createElement(
                                c.Z,
                                { style: Z.inputWrapper },
                                o.createElement(E.Z, {
                                    label: "Job Title",
                                    name: "jobTitle",
                                    onChange: (e) => {
                                        l(""), n(e.target.value);
                                    },
                                    onKeyPress: (e) => {
                                        "Enter" === e.key && r();
                                    },
                                    style: Z.textInput,
                                    testID: "job-rec-title-input",
                                    value: t,
                                }),
                            ),
                            o.createElement(c.Z, { style: Z.buttonWrapper }, o.createElement(f.ZP, { icon: o.createElement(x.default, null), onPress: r, size: "large", testID: "job-rec-title-btn", type: "primaryFilled" })),
                        ),
                        a ? o.createElement(u.ZP, { color: "red500", size: "subtext2" }, a) : o.createElement(u.ZP, { color: "gray700", size: "subtext2" }, "Press enter to add"),
                    );
                },
                Z = h.default.create((e) => ({ inputField: { display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, inputWrapper: { position: "relative", flexGrow: 1, marginEnd: e.spaces.space16 }, buttonWrapper: { flexShrink: 0, marginTop: "-2px" }, textInput: { paddingStart: "0px", paddingBottom: "0px", paddingTop: "0px", paddingEnd: "0px" }, loader: { position: "absolute", end: "12px", top: "20px", zIndex: 5 } }));
            var v = n(516951),
                k = n(998693);
            const C = ({ onAdd: e }) => {
                    const [t, n] = o.useState("");
                    return o.createElement(
                        c.Z,
                        { style: S.locationInputContainer },
                        o.createElement(k.Z, {
                            onChange: ({ value: e }) => {
                                n(e || "");
                            },
                            onEnter: v.Z,
                            onSelect: (t) => {
                                e(t), n("");
                            },
                            value: t,
                        }),
                    );
                },
                S = h.default.create((e) => ({ locationInputContainer: { display: "flex", zIndex: 5, position: "relative" }, loader: { position: "absolute", end: "12px", top: "20px", zIndex: 6 } }));
            var $ = n(837020);
            const j = h.default.create((e) => ({ listItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, paddingHorizontal: e.spaces.space2, paddingVertical: e.spaces.space4, marginBottom: e.spaces.space2 }, icon: { cursor: "pointer" } })),
                _ = ({ item: e, onDelete: t, textPath: n }) => o.createElement(c.Z, { style: j.listItem }, o.createElement(u.ZP, null, z(e, n)), o.createElement($.default, { onClick: () => t(e), style: j.icon, testID: "delete-matching-criteria-btn" })),
                z = (e, t, n = "") => {
                    const o = t.split(".");
                    let a = e;
                    for (const e of o) {
                        if (!a || "object" != typeof a || !(e in a)) return n;
                        a = a[e];
                    }
                    return void 0 !== a ? a : n;
                };
            var P = n(451566);
            const I = ({ label: e, onChange: t, value: n }) => o.createElement(c.Z, { style: D.fieldContainer }, o.createElement(u.ZP, null, e), o.createElement(P.Z, { onValueChange: t, value: n })),
                D = h.default.create((e) => ({ fieldContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, paddingVertical: e.spaces.space8 } }));
            var B = n(594695),
                T = n(351743),
                A = n.n(T);
            const H = B.Z,
                F = () => {
                    const [e, t] = A()(H);
                    return [
                        o.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                R = ({ matchingProfile: e, refetch: t }) => {
                    const n = ((l = e), { recommendationsEnabled: l?.recommendations_enabled ?? !0, remoteWorkAllowed: l?.remote_work_allowed ?? !0, jobTitles: [...(l?.job_titles || [])], locations: [...(l?.locations || [])].map((e) => ({ id: e.id, location_id: e.location_id, location_name: e.location?.core?.display_name })) });
                    var l;
                    const [r, i] = o.useState(n),
                        [s, m] = o.useState(!1),
                        [h] = F(),
                        [E] = (0, y.Z)(),
                        { viewerUserId: x } = (0, b.QZ)(),
                        Z = (0, a.useHistory)(),
                        v = !e?.consented_at,
                        k = 0 === r.jobTitles.length,
                        S = (0, g.Z)(n, r),
                        $ = o.useCallback(() => {
                            if (x) {
                                const e = ((e) => {
                                    const t = [...e.jobTitles, ...e.locations].map((e) => ({ id: e.id, job_title: e.job_title, location_id: e.location_id }));
                                    return { consented: !0, recommendationsEnabled: e.recommendationsEnabled, remoteWorkAllowed: e.remoteWorkAllowed, matchingCriteria: t };
                                })(r);
                                m(!0),
                                    h({
                                        variables: { userId: x, consented: !0, ...e },
                                        onCompleted: () => {
                                            E({
                                                variables: { userId: x },
                                                onCompleted: () => {
                                                    m(!1), Z.push("/jobs/recommended");
                                                },
                                            });
                                        },
                                    });
                            }
                        }, [h, E, r, Z, x]),
                        j = (e, t) => {
                            i({ ...r, [e]: t });
                        },
                        z = (e) => {
                            const t = [...r.jobTitles].filter((t) => (e.id ? e.id !== t.id : e.job_title !== t.job_title));
                            i({ ...r, jobTitles: t });
                        },
                        P = (e) => {
                            const t = [...r.locations].filter((t) => (e.id ? e.id !== t.id : e.location_id !== t.location_id));
                            i({ ...r, locations: t });
                        };
                    return o.createElement(
                        c.Z,
                        { style: L.settingsContainer },
                        o.createElement(c.Z, { style: L.pageHeader }, o.createElement(u.ZP, { size: "title4", style: L.pageTitle, weight: "bold" }, "Share your job preferences"), o.createElement(u.ZP, null, "Tell us what job titles and work locations you’re interested in and we’ll show you jobs that meet your preferences.")),
                        o.createElement(
                            W,
                            { title: "Job Titles" },
                            o.createElement(u.ZP, { color: "gray700", size: "subtext1", style: L.sectionHelpText }, "Enter the job titles you’re interested in."),
                            k && o.createElement(p.Z.Primary, { style: L.jobTitleCallout, text: "You must add at least one job title", withIcon: !0 }),
                            o.createElement(w, {
                                onAdd: (e) => {
                                    e && i({ ...r, jobTitles: [...r.jobTitles, { job_title: e }] });
                                },
                            }),
                            o.createElement(
                                c.Z,
                                null,
                                r.jobTitles.map((e) => o.createElement(_, { item: e, key: e.id || e.job_title, onDelete: z, textPath: "job_title" })),
                            ),
                        ),
                        o.createElement(
                            W,
                            { additionalStyles: L.locationSection, title: "Locations" },
                            o.createElement(I, { label: "Open to remote work", onChange: (e) => j("remoteWorkAllowed", e), value: r.remoteWorkAllowed }),
                            o.createElement(u.ZP, { color: "gray700", size: "subtext1", style: L.sectionHelpText }, "Enter the locations you’re interested in if performing the job on-site."),
                            o.createElement(C, {
                                onAdd: (e) => {
                                    i({ ...r, locations: [...r.locations, { location_id: e.id, location_name: e.name }] });
                                },
                            }),
                            o.createElement(
                                c.Z,
                                null,
                                r.locations.map((e) => o.createElement(_, { item: e, key: e.id || e.location_id, onDelete: P, textPath: "location_name" })),
                            ),
                        ),
                        o.createElement(W, { title: "Recommendation Preferences" }, o.createElement(I, { label: "See recommendations in your timeline", onChange: (e) => j("recommendationsEnabled", e), value: r.recommendationsEnabled })),
                        o.createElement(f.ZP, { disabled: s || k || S, onClick: $, type: "brandFilled" }, s ? o.createElement(c.Z, { style: L.buttonLoader }, o.createElement(d.Z, { color: "white", size: "small" }), o.createElement(u.ZP, null, "Saving")) : o.createElement(o.Fragment, null, v ? "Agree and see recommendations" : "Save preferences")),
                        v && o.createElement(u.ZP, { color: "gray700", size: "subtext3", style: L.disclaimerText }, "By clicking 'Agree and see recommendations,' you are agreeing to allow X to use your job preferences to provide personalized job recommendations and to enhance your overall experience. This information will be used to improve our services and deliver tailored content that aligns with your interests. Your privacy is important to us, and we will handle your data in accordance with our Privacy Policy."),
                    );
                },
                L = h.default.create((e) => ({ settingsContainer: { padding: e.spaces.space16, zIndex: 1 }, pageHeader: { marginBottom: e.spaces.space20 }, pageTitle: { marginBottom: e.spaces.space12 }, settingsSection: { display: "flex", flexDirection: "column", gap: e.spaces.space8, marginBottom: e.spaces.space16, paddingBottom: e.spaces.space16, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.gray200 }, locationSection: { zIndex: 5 }, sectionHeader: { marginBottom: e.spaces.space8 }, sectionHelpText: { marginBottom: e.spaces.space8 }, disclaimerText: { marginTop: e.spaces.space16 }, buttonLoader: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, jobTitleCallout: { marginBottom: e.spaces.space8 } })),
                W = ({ children: e, title: t, additionalStyles: n = {} }) => {
                    const a = { ...L.settingsSection, ...n };
                    return o.createElement(c.Z, { style: a }, o.createElement(u.ZP, { color: "text", size: "headline2", style: L.sectionHeader, weight: "bold" }, t), e);
                },
                J = s.Z,
                M = () => {
                    const { data: e, refetch: t } = (0, m.A)(J, {}),
                        n = !e,
                        a = e?.viewer_v2?.user_results?.result?.matching_profile;
                    return n ? o.createElement(c.Z, null, o.createElement(d.Z, { size: "large" })) : o.createElement(R, { matchingProfile: a, refetch: t });
                },
                V = { context: "job_recommendations_onboarding" },
                N = () => {
                    const e = (0, a.useHistory)();
                    return l.ZP.isWebView() ? o.createElement(i.H, { errorConfig: V }, o.createElement(M, null)) : o.createElement(i.H, { errorConfig: V }, o.createElement(r.Z, { backLocation: "/", history: e, primaryContent: M, sidebarContent: null, title: "Job Recommendations" }));
                };
        },
        46858: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var o = n(202784),
                a = n(277660),
                l = n.n(a),
                r = n(107267),
                i = n(471957),
                s = n(549599);
            const c = ({ actions: e, item: t, itemId: n, itemIndex: a, pathPrefix: c }) => {
                const d = (0, r.useHistory)(),
                    { search: m } = (0, r.useLocation)(),
                    u = l()(s.KM, t),
                    p = u?.core,
                    f = u?.user_results?.result,
                    h = u?.company_profile_results?.result,
                    g = u?.id || "",
                    b = u?.user_sentiment,
                    y = o.useCallback(() => {
                        d.push({ pathname: `${c}/${n}`, search: m });
                    }, [d, n, c, m]);
                return u && p ? o.createElement(i.Z, { actions: e, companyProfile: h, job: p, jobId: n, jobIndex: a, onClick: y, relayId: g, user: f, userSentiment: b }) : null;
            };
        },
        62941: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(202784),
                a = n(325686),
                l = n(392237);
            const r = () => o.createElement(a.Z, null, o.createElement(i, null), o.createElement(i, null), o.createElement(i, null), o.createElement(i, null), o.createElement(i, null)),
                i = () => o.createElement(a.Z, { style: s.stencilContainer }, o.createElement(a.Z, { style: s.stencilAvatarContainer }, o.createElement(a.Z, { style: s.stencilAvatar })), o.createElement(a.Z, { style: s.stencilText }, o.createElement(a.Z, { style: s.stencilTitle }), o.createElement(a.Z, { style: s.stencilCompany }), o.createElement(a.Z, { style: s.stencilLocation }), o.createElement(a.Z, { style: s.stencilActions }, o.createElement(a.Z, { style: s.stencilAction }), o.createElement(a.Z, { style: s.stencilAction })))),
                s = l.default.create((e) => ({ stencilContainer: { flex: 1, display: "flex", flexDirection: "row", padding: e.spaces.space20, borderBottomColor: e.colors.gray200, borderBottomWidth: "1px" }, stencilAvatarContainer: { marginEnd: e.spaces.space16 }, stencilAvatar: { width: "40px", height: "40px", backgroundColor: e.colors.gray400 }, stencilText: { flex: 1, display: "flex", flexDirection: "column", gap: 6 }, stencilTitle: { width: "180px", height: "12px", backgroundColor: e.colors.gray400, borderRadius: "32px" }, stencilCompany: { width: "80px", height: "9px", backgroundColor: e.colors.gray400, borderRadius: "32px" }, stencilLocation: { width: "130px", height: "8px", backgroundColor: e.colors.gray300, borderRadius: "32px" }, stencilActions: { flex: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16 }, stencilAction: { width: "64px", height: "12px", backgroundColor: e.colors.gray400, borderRadius: "32px" } }));
        },
        947698: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ee });
            var o = n(202784),
                a = n(247411),
                l = n(736063),
                r = n(335572),
                i = n(325686),
                s = (n(585488), n(107267)),
                c = n(903233),
                d = n(652904),
                m = n(293115),
                u = n(535338),
                p = n(708852),
                f = n(530732),
                h = n(731708),
                g = n(392237),
                b = n(894966),
                y = n(512549),
                E = n(254221);
            const x = ({ height: e }) => {
                    const t = o.useMemo(() => ({ height: e || g.default.theme.spaces.space16 }), [e]);
                    return o.createElement(i.Z, { style: t });
                },
                w = ({ borderRadius: e, height: t, width: n }) => {
                    const a = o.useMemo(() => ({ ...Z.stencil, borderRadius: e || g.default.theme.borderRadii.infinite, width: n, height: t }), [e, n, t]);
                    return o.createElement(i.Z, { style: a });
                },
                Z = g.default.create((e) => ({ root: { padding: e.spaces.space20, flexGrow: 0, flexShrink: 1 }, header: { flexDirection: "row", gap: 16, flex: 1 }, container: { gap: 8 }, stencil: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray400 } })),
                v = () => {
                    const { theme: e } = g.default;
                    return o.createElement(i.Z, { style: Z.root }, o.createElement(i.Z, { style: Z.container }, o.createElement(w, { height: e.spaces.space16, width: "50%" }), o.createElement(w, { height: e.spaces.space12, width: "25%" })), o.createElement(x, { height: e.spaces.space20 }), o.createElement(i.Z, { style: Z.header }, o.createElement(w, { borderRadius: e.borderRadii.small, height: e.spaces.space48, width: e.spaces.space48 }), o.createElement(i.Z, { style: { ...Z.container, flex: 1 } }, o.createElement(w, { height: e.spaces.space16, width: "50%" }), o.createElement(w, { height: e.spaces.space12, width: "25%" }), o.createElement(w, { height: e.spaces.space12, width: "100%" }), o.createElement(w, { height: e.spaces.space12, width: "75%" }))), o.createElement(x, { height: e.spaces.space40 }), o.createElement(i.Z, { style: Z.container }, o.createElement(w, { height: e.spaces.space16, width: "25%" }), o.createElement(w, { height: e.spaces.space12, width: "90%" }), o.createElement(w, { height: e.spaces.space12, width: "95%" }), o.createElement(w, { height: e.spaces.space12, width: "75%" })), o.createElement(x, { height: e.spaces.space20 }), o.createElement(i.Z, { style: Z.container }, o.createElement(w, { height: e.spaces.space16, width: "50%" }), o.createElement(w, { height: e.spaces.space12, width: "85%" }), o.createElement(w, { height: e.spaces.space12, width: "90%" }), o.createElement(w, { height: e.spaces.space12, width: "75%" })));
                },
                k = g.default.create((e) => ({ mobileDetailBackButton: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16 } })),
                C = ({ isLoading: e }) => {
                    const t = (0, s.useHistory)(),
                        n = !(0, p.Ji)(),
                        a = o.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return e ? (n ? null : o.createElement(v, null)) : o.createElement(i.Z, null, n && o.createElement(f.Z, { onClick: a, style: k.mobileDetailBackButton }, o.createElement(b.default, null), o.createElement(h.ZP, { size: "body", weight: "bold" }, "Back to recommendations")), o.createElement(E.Z, { actions: [y.h5, y.pN] }));
                };
            var S = n(893211),
                $ = n(482924),
                j = n(715601),
                _ = n(46858),
                z = n(154003),
                P = n(443781),
                I = n(181666);
            const D = ({ onClick: e, refetchList: t }) => {
                    const [n, a] = (0, I.Z)(),
                        l = (0, s.useHistory)(),
                        { viewerUserId: r } = (0, P.QZ)(),
                        i = o.useCallback(() => {
                            r && (e(), l.replace("/jobs/recommended"), n({ variables: { userId: r }, onCompleted: t }));
                        }, [n, r, t, e, l]);
                    return o.createElement(z.ZP, { disabled: a, onPress: i, type: "primaryOutlined" }, "Refresh recommendations");
                },
                B = ({ item: e, items: t, shouldBeInView: n }) => {
                    const a = o.useRef(null);
                    return (
                        o.useEffect(() => {
                            n && a.current?.scrollIntoView({ behavior: "instant" });
                        }, [n, a]),
                        o.createElement(i.Z, { ref: a }, o.createElement(_.Z, { actions: [y.pN, y.h5], item: e.result, itemId: e.rest_id, itemIndex: t.findIndex((t) => t.rest_id === e.rest_id), pathPrefix: "/jobs/recommended" }))
                    );
                },
                T = g.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 }, mobileContainer: { height: "calc(100vh - 136px)", overflow: "auto" }, refreshButtonContainer: { display: "flex", alignItems: "center", padding: e.spaces.space16, backgroundColor: "rgba(255, 255, 255, .1)" }, mobileRefreshButtonContainer: { width: "100%", zIndex: 5, backgroundColor: e.colors.gray100 } })),
                A = ({ items: e, refetchList: t, setIsLoading: n }) => {
                    const [a, l] = o.useState(null),
                        r = (0, s.useParams)(),
                        c = (0, p.Ji)();
                    o.useEffect(() => {
                        !a && r.jobId && l(r.jobId);
                    }, [a, r.jobId]);
                    const d = o.useCallback(
                            () =>
                                o.createElement(
                                    i.Z,
                                    null,
                                    e.map((t) => o.createElement(B, { item: t, items: e, key: t.rest_id, shouldBeInView: a === t.rest_id })),
                                ),
                            [a, e],
                        ),
                        m = o.useCallback(() => o.createElement(i.Z, { style: { ...T.refreshButtonContainer, ...(c ? {} : T.mobileRefreshButtonContainer) } }, o.createElement(D, { onClick: () => n(!0), refetchList: t })), [t, c, n]);
                    return e ? (e.length && c ? o.createElement(o.Fragment, null, o.createElement(j.Z, { style: T.viewport }, d()), m()) : e.length && !c ? o.createElement(o.Fragment, null, o.createElement(i.Z, { style: T.mobileContainer }, d()), m()) : null) : null;
                };
            var H = n(293723),
                F = n(757700);
            const R = "first-time",
                L = "criteria-changed",
                W = g.default.create((e) => ({ modalContent: { padding: e.spaces.space48 }, modalHeader: { paddingBottom: e.spaces.space20 }, bodyText: { paddingBottom: e.spaces.space12 }, sentimentTextContainer: { display: "flex", flexDirection: "row", gap: 12, justify: "center", flex: 1 }, button: { marginTop: e.spaces.space12 }, icon: { marginEnd: e.spaces.space8 } })),
                J = ({ onDismiss: e, refetchList: t, type: n }) => {
                    const [a, l] = (0, I.Z)(),
                        { viewerUserId: r } = (0, P.QZ)(),
                        s = o.useCallback(() => {
                            r &&
                                a({
                                    variables: { userId: r },
                                    onCompleted: () => {
                                        t(), e();
                                    },
                                });
                        }, [a, r, t, e]);
                    return o.createElement(
                        F.ZP,
                        { modalSize: "fitChildren", onMaskClick: e, withBackground: !0 },
                        o.createElement(
                            i.Z,
                            { style: W.modalContent },
                            ((e) => {
                                switch (e) {
                                    case R:
                                        return o.createElement(o.Fragment, null, o.createElement(h.ZP, { size: "title4", style: W.modalHeader, weight: "bold" }, "How job recommendations work"), o.createElement(h.ZP, { size: "body", style: W.bodyText }, o.createElement(H.default, { style: W.icon }), "See jobs based on the job titles and locations you shared"), o.createElement(h.ZP, { size: "body", style: W.bodyText }, o.createElement(H.default, { style: W.icon }), "Update your recommendation settings at any point"), o.createElement(h.ZP, { size: "body", style: W.bodyText }, o.createElement(H.default, { style: W.icon }), "Help us fine tune your recommendations by using the ‘Save job’ and ‘Not interested’ buttons"));
                                    case L:
                                        return o.createElement(o.Fragment, null, o.createElement(h.ZP, { size: "title4", style: W.modalHeader, weight: "bold" }, "Your preferences have changed"), o.createElement(h.ZP, { size: "body", style: W.bodyText }, "Please refresh for updated job recommendations"));
                                    default:
                                        return o.createElement(i.Z, null);
                                }
                            })(n),
                            o.createElement(
                                z.ZP,
                                { disabled: l, onPress: s, style: W.button, type: "brandFilled" },
                                ((e) => {
                                    switch (e) {
                                        case L:
                                            return "Refresh recommendations";
                                        case R:
                                            return "Show recommendations";
                                        default:
                                            return "";
                                    }
                                })(n),
                            ),
                        ),
                    );
                };
            var M = n(62941);
            const V = S.Z,
                N = ({ setActiveModal: e }) => {
                    const [t, n] = o.useState(null),
                        [a, l] = o.useState(!1),
                        r = (0, p.Ji)(),
                        i = (0, s.useHistory)(),
                        { pathname: c } = (0, s.useLocation)(),
                        { data: d, refetch: m, refetchStatus: u } = (0, $.A)(V, { count: 10 }),
                        f = d?.viewer_v2?.user_results?.result,
                        h = f?.job_recommendations_results ?? [],
                        g = f?.matching_profile ?? {},
                        b = g.job_recommendations_refreshed_at,
                        y = g.updated_at,
                        E = h.find((e) => e.result)?.rest_id ?? null,
                        x = !f || a || !b;
                    return (
                        o.useEffect(() => {
                            "none" === u && l(!1);
                        }, [u]),
                        o.useEffect(() => {
                            y && b && y > b && e(L);
                        }, [b, y, e]),
                        o.useEffect(() => {
                            E && "/jobs/recommended" === c && r && !x && i.replace(`/jobs/recommended/${E}`);
                        }, [E, i, c, r, x]),
                        a ? o.createElement(M.Z, null) : o.createElement(o.Fragment, null, o.createElement(A, { items: h, refetchList: m, setIsLoading: l }), t && o.createElement(J, { onDismiss: () => n(null), refetchList: m, type: t }))
                    );
                },
                q = { context: "JobRecommendationsList" },
                K = (e) => o.createElement(l.H, { errorConfig: q }, o.createElement(N, e)),
                O = g.default.create((e) => ({ emptyStateContainer: { display: "flex", flexDirection: "column", flex: 1, gap: 12, padding: e.spaces.space48, alignItems: "center" } })),
                U = ({ subtext: e, title: t }) => o.createElement(i.Z, { style: O.emptyStateContainer }, o.createElement(h.ZP, { color: "text", size: "title3", weight: "bold" }, t), o.createElement(h.ZP, { color: "text" }, e), o.createElement(z.ZP, { link: "/jobs/get-recommendations", type: "primaryFilled" }, "Update preferences")),
                G = r.Z,
                Y = { page: "job_recommendations", section: "all" },
                Q = () => {
                    const [e, t] = o.useState(null),
                        n = (0, s.useLocation)(),
                        a = (0, u.p)(G, {}),
                        l = a?.viewer_v2?.user_results?.result?.job_recommendations_results ?? [],
                        r = a?.viewer_v2?.user_results?.result?.matching_profile?.job_titles ?? [],
                        p = o.useMemo(() => 0 === l.length, [l.length]),
                        f = o.useMemo(() => 0 === r.length, [r.length]),
                        h = o.useCallback(() => (f ? o.createElement(U, { subtext: "Share the job titles you’re interested in so we can find jobs that meet your preferences.", title: "You’re missing preferences" }) : p ? o.createElement(U, { subtext: "Update your preferences or check back soon for more job recommendations.", title: "Sorry, no jobs to see" }) : null), [f, p]),
                        g = /\/jobs\/recommended\/\d+/.test(n.pathname);
                    return o.createElement(m.nO, { namespace: Y }, o.createElement(d.Z, { locationKey: Y.page }, o.createElement(c.Z, { isRightRootActive: g, leftContent: o.createElement(i.Z, { style: { display: "flex", overflow: "auto", width: "30%" } }, o.createElement(K, { setActiveModal: t })), mobileRootStyles: { height: "calc(100vh - 68px)" }, overlay: h(), rightContent: o.createElement(C, { isLoading: Boolean(e) || p || f }), rootStyles: { height: "calc(100vh - 116px)" } })));
                },
                X = { context: "JobRecommendations" },
                ee = () => o.createElement(l.H, { errorConfig: X }, o.createElement(a.Z, null, o.createElement(Q, null)));
        },
        181666: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(488248),
                a = n(202784),
                l = (n(585488), n(351743)),
                r = n.n(l);
            const i = o.Z,
                s = () => {
                    const [e, t] = r()(i);
                    return [
                        a.useCallback(
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-e6266db0.a62673aa.js.map
