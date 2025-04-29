"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-55a71481"],
    {
        757153: (e, t, l) => {
            l.d(t, { Z: () => W });
            var a = l(202784),
                n = l(301503),
                r = l(325686),
                o = l(731708),
                s = l(708852),
                c = l(989272),
                i = l(925873),
                d = l(673510),
                u = l(823161),
                m = l(154003),
                p = l(524496),
                b = l(392237),
                g = l(674132),
                y = l.n(g),
                E = l(536698),
                f = l(377782),
                h = l(813681),
                C = l(187669),
                Z = l(323265),
                _ = l(949626),
                I = l(856438),
                w = l(318178),
                x = l(443781),
                k = l(478414),
                v = l(457458),
                j = l(985124),
                S = l(725405),
                D = l(665971),
                P = l(499102),
                R = l(787379);
            const T = (e, t) => ({ profile_id: e || "", items: [{ id: t }] }),
                z = y().db8c4158,
                A = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                F = a.createElement(E.default, null),
                B = a.createElement(f.default, null),
                N = a.createElement(h.default, null),
                q = ({ icon: e, text: t }) => a.createElement(o.ZP, { color: "text", size: "subtext1", style: L.detailRow }, e, t),
                L = b.default.create((e) => ({ wrapper: { paddingVertical: e.spaces.space16, gap: e.spaces.space20 }, userContainer: { paddingHorizontal: e.spaces.space8 }, container: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.spaces.space24 }, descriptionContainer: { paddingBottom: e.spaces.space64, color: e.colors.text }, fallbackRow: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "start", marginBottom: e.spaces.space12, paddingHorizontal: e.spaces.space24 }, titleCol: { display: "flex", flexDirection: "column", gap: e.spaces.space4, paddingHorizontal: e.spaces.space24 }, titleRow: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "baseline" }, actions: { flexDirection: "row", paddingHorizontal: e.spaces.space24, gap: e.spaces.space16, flexWrap: "wrap" }, shortDescription: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large, padding: e.spaces.space16, gap: e.spaces.space4 }, details: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center", flexWrap: "wrap", paddingHorizontal: e.spaces.space24 }, detailRow: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, mobileDetailActionsItemBreak: { flexBasis: "100%" } })),
                W = ({ actions: e, companyProfile: t, job: l, jobId: b, jobRelayId: g, user: E, viewerRelayId: f }) => {
                    const { loggedInUserId: h } = (0, x.QZ)(),
                        W = !(0, s.Ji)(),
                        H = (0, S.Z)(),
                        M = (0, R._)(E?.legacy?.entities),
                        O = (0, w.tv)(b, g, f);
                    (0, C.q)(() => {
                        (0, c.fH)((0, k.yW)(k.Hx, k.K), k.Hx);
                    });
                    const V = a.useCallback(() => {
                            H.scribe({ action: "click", component: "job-page-primary", element: "more-info-link", data: T(E?.rest_id, b) });
                        }, [H, E?.rest_id, b]),
                        U = a.useMemo(() => ({ link: a.createElement(o.ZP, { link: l.external_url || "", onClick: V }) }), [V, l.external_url]),
                        J = a.useCallback(
                            (e) => {
                                e.preventDefault(), window.open(l.external_url), O(w.h5), H.scribe({ action: "click", component: "job-page-primary", element: "apply-now-button", data: T(E?.rest_id, b) });
                            },
                            [H, E?.rest_id, b, l.external_url, O],
                        ),
                        K = "Business" === E?.legacy?.verified_type || "Square" === E?.profile_image_shape ? "square" : "circle",
                        Q = t?.core?.name || "",
                        $ = t?.logo?.normal_url || A,
                        G = l.location_type ? `${l.location || ""} (${j.cj[l.location_type].label})` : l.location || "",
                        X = l.formatted_salary ? (0, v.M)(l.formatted_salary, l.salary_interval) : null,
                        Y = l.job_function ? j.ZC[l.job_function] : void 0,
                        ee = l.team || Y,
                        te = a.useMemo(() => i.Z.getContentStateFromRaw(l.short_description), [l.short_description]),
                        le = a.useMemo(() => te && (0, n.convertFromRaw)(te).hasText(), [te]),
                        ae = a.useMemo(() => i.Z.getContentStateFromRaw(l.job_description), [l.job_description]),
                        ne = a.useMemo(() => ae && (0, n.convertFromRaw)(ae).hasText(), [ae]);
                    return a.createElement(
                        r.Z,
                        { style: L.wrapper },
                        a.createElement(r.Z, { style: L.titleCol }, a.createElement(r.Z, { style: L.titleRow }, a.createElement(o.ZP, { size: "headline1", weight: "bold" }, l.title), l.featured ? a.createElement(I.Z, null) : null), a.createElement(o.ZP, { size: "body" }, G), X ? a.createElement(o.ZP, { size: "body" }, X) : null),
                        E && E.legacy && E.legacy.name ? a.createElement(r.Z, { style: L.userContainer }, a.createElement(d.ZP, { avatarShape: K, avatarSize: "xxLarge", avatarUri: E.legacy?.profile_image_url_https || A, description: E.legacy.description || "", displayMode: "UserDetailed", entities: M, name: E.legacy.name, screenName: E.legacy.screen_name || "", userId: E.rest_id, verifiedType: E.legacy?.verified_type || "" })) : a.createElement(r.Z, { style: L.fallbackRow }, a.createElement(u.default, { shape: "square", size: "xxLarge", uri: $ }), a.createElement(o.ZP, { size: "body", weight: "bold" }, Q)),
                        a.createElement(r.Z, { style: L.actions }, l.external_url ? a.createElement(m.ZP, { link: l.external_url || "", onClick: J, size: "medium", type: "brandFilled" }, z) : null, !Z.ZP.isWebView() && a.createElement(P.Z, { jobId: b, jobUserId: E?.rest_id }), W && e.length && a.createElement(r.Z, { style: L.mobileDetailActionsItemBreak }), h ? a.createElement(D.r1, { actions: e, jobId: b }) : null),
                        a.createElement(r.Z, { style: L.details }, l.employment_type ? a.createElement(q, { icon: F, text: j.eo[l.employment_type] }) : null, l.seniority_level ? a.createElement(q, { icon: B, text: j.WA[l.seniority_level] }) : null, ee ? a.createElement(q, { icon: N, text: ee }) : null),
                        te && le ? a.createElement(r.Z, { style: L.container }, a.createElement(r.Z, { style: L.shortDescription }, a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, "Summary"), a.createElement(_.Z, { className: k.Hx }, a.createElement(p.Z, { contentState: te, paragraphFontSizeOverride: k.K.paragraphFontSize })))) : null,
                        a.createElement(r.Z, { style: L.container }, a.createElement(r.Z, { style: L.descriptionContainer }, ae && ne ? a.createElement(_.Z, { className: k.Hx }, a.createElement(p.Z, { contentState: ae, paragraphFontSizeOverride: k.K.paragraphFontSize })) : a.createElement(o.ZP, { color: "gray700", size: "subtext1" }, a.createElement(y().I18NFormatMessage, { $i18n: "e6979e4b" }, a.cloneElement(U.link, null, y().d9c8057a))))),
                    );
                };
        },
        9739: (e, t, l) => {
            l.r(t), l.d(t, { JobScreen: () => j, default: () => D, jobScreenJobFragment: () => I, jobScreenUserFragment: () => w, query: () => x });
            var a = l(807896),
                n = l(377178),
                r = l(962155),
                o = l(455506),
                s = l(202784),
                c = l(325686),
                i = (l(585488), l(277660)),
                d = l.n(i),
                u = l(910113),
                m = l(150123),
                p = l(318178),
                b = l(247411),
                g = l(903233),
                y = l(443781),
                E = l(652904),
                f = l(736063),
                h = l(952793),
                C = l(293115),
                Z = l(535338),
                _ = l(757153);
            const I = o.Z,
                w = r.Z,
                x = n.Z,
                k = ({ jobId: e, loggedInUserId: t }) => {
                    const { jobData: l, viewer: a } = (0, Z.p)(x, { jobId: e, loggedIn: !!t }),
                        n = l?.result?.id ?? "",
                        r = a?.user_results?.result?.id,
                        o = l?.result?.core,
                        c = l?.result?.company_profile_results?.result,
                        i = l?.result?.user_results?.result;
                    return o && (c || i) ? s.createElement(j, { companyProfile: c, job: o, jobId: e, jobRelayId: n, user: i, viewerRelayId: r }) : null;
                },
                v = { page: "job_detail", section: "all" },
                j = ({ companyProfile: e, job: t, jobId: l, jobRelayId: a, user: n, viewerRelayId: r }) => {
                    const { loggedInUserId: o } = (0, y.QZ)(),
                        i = d()(I, t),
                        b = d()(u.dB, e),
                        f = d()(w, n),
                        Z = (0, h.hC)("recruiting_job_recommendations_enabled") && !!o;
                    return i ? s.createElement(C.nO, { namespace: v }, s.createElement(E.Z, { locationKey: v.page }, s.createElement(g.Z, { isFullWidth: !Z, leftContent: s.createElement(c.Z, { style: { display: "flex", overflow: "auto", width: Z ? "70%" : "100%" } }, s.createElement(_.Z, { actions: [p.h5], companyProfile: b, job: i, jobId: l, jobRelayId: a, user: f, viewerRelayId: r })), mobileRootStyles: { height: "calc(100vh - 68px)" }, rightContent: Z ? s.createElement(m.Z, { isSidebarModule: !1 }) : null, rootStyles: { height: "calc(100vh - 116px)" } }))) : null;
                },
                S = { context: "JobScreen" },
                D = (e) => {
                    const { loggedInUserId: t } = (0, y.QZ)();
                    return e?.match?.params?.jobId ? s.createElement(f.H, { errorConfig: S }, s.createElement(b.Z, null, s.createElement(k, (0, a.Z)({}, e, { jobId: e.match.params.jobId, loggedInUserId: t })))) : null;
                };
        },
        499102: (e, t, l) => {
            l.d(t, { Z: () => j });
            l(136728);
            var a = l(202784),
                n = l(576648),
                r = l(107267),
                o = l(811176),
                s = l(40644),
                c = l(674132),
                i = l.n(c),
                d = l(630715),
                u = l(717160),
                m = l(885724),
                p = l(106186),
                b = l(786272),
                g = l(443781),
                y = l(952793),
                E = l(782642),
                f = l(226298),
                h = l(701796);
            const C = i().f508c49c,
                Z = i().f88553c8,
                _ = i().d6825dce,
                I = i().b9613442,
                w = i().c2b3f0da,
                x = i().c791d3fc,
                k = { label: i().ifea3114, withDelay: !0 },
                v = ({ iconSize: e = "normal", jobId: t, jobUserId: l }) => {
                    const c = (0, E.p)(),
                        i = (0, r.useHistory)(),
                        { userClaims: v, viewerUserId: j } = (0, g.QZ)(),
                        S = (0, y.hC)("recruiting_jobs_list_share_enabled"),
                        D = (0, y.hC)("recruiting_pin_job_enabled") && (v.isTrueAndEnabled("subscriptions_feature_premium_jobs") || v.isVerifiedOrg()) && j !== l,
                        P = a.useCallback(() => {
                            i.push({ query: { text: (0, h.w)((0, f.z)(t)) }, pathname: "/messages/compose" });
                        }, [i, t]),
                        R = a.useCallback(() => {
                            n.Z.setString((0, h.w)((0, f.z)(t))), c({ text: Z });
                        }, [c, t]),
                        T = a.useCallback(() => {
                            i.push({ query: { text: (0, h.w)((0, f.z)(t)) }, pathname: "/compose/post" });
                        }, [i, t]),
                        z = a.useCallback(() => {
                            i.push({ query: { jid: t }, pathname: "/i/share-job", state: { from: i.location.pathname } });
                        }, [i, t]),
                        A = a.useCallback(() => {
                            const e = [];
                            return n.Z.isAvailable() && e.push({ text: C, onClick: R, Icon: d.default }), j && (e.push(((e) => ({ text: _, onClick: e, Icon: u.default }))(P)), e.push(((e) => ({ text: I, onClick: e, Icon: m.default }))(T))), D && e.push(((e) => ({ text: w, onClick: e, Icon: p.default }))(z)), e;
                        }, [R, P, z, T, D, j]),
                        F = a.useCallback(
                            (e) => {
                                const t = A();
                                return t.length ? a.createElement(o.Z, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [A],
                        ),
                        B = a.useCallback(() => {}, []);
                    return S ? a.createElement(s.ZP, { Icon: b.default, "aria-label": x, color: "text", hoverLabel: k, iconSize: e, onPress: B, renderMenu: F, testID: "job-share-action-btn" }) : null;
                },
                j = a.memo(v);
        },
        178031: (e, t, l) => {
            l.r(t), l.d(t, { JobDetailsMobileContainer: () => m, default: () => b });
            var a = l(202784),
                n = l(530732),
                r = l(731708),
                o = l(392237),
                s = l(894966),
                c = l(323265),
                i = l(318178),
                d = l(247411),
                u = l(254221);
            const m = ({ history: e }) => {
                    const t = a.useCallback(() => {
                        e.goBack();
                    }, [e]);
                    return a.createElement(d.Z, null, !c.ZP.isWebView() && a.createElement(n.Z, { onClick: t, style: p.backButton }, a.createElement(s.default, null), a.createElement(r.ZP, { size: "body", weight: "bold" }, "Back to search results")), a.createElement(u.Z, { actions: [i.h5] }));
                },
                p = o.default.create((e) => ({ backButton: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16 } })),
                b = m;
        },
        254221: (e, t, l) => {
            l.d(t, { Z: () => Z });
            var a = l(202784),
                n = l(277660),
                r = l.n(n),
                o = l(107267),
                s = l(392237),
                c = l(910113),
                i = l(334346),
                d = l(46705),
                u = l(715601),
                m = l(443781),
                p = l(736063),
                b = l(535338),
                g = l(9739),
                y = l(757153);
            const E = { context: "JobSearchDetails" },
                f = ({ actions: e, companyProfile: t, job: l, jobId: n, jobRelayId: o, user: s, viewerRelayId: i }) => {
                    const d = r()(g.jobScreenJobFragment, l),
                        u = r()(c.dB, t),
                        m = r()(g.jobScreenUserFragment, s);
                    return d ? a.createElement(y.Z, { actions: e, companyProfile: u, job: d, jobId: n, jobRelayId: o, user: m, viewerRelayId: i }) : null;
                },
                h = ({ actions: e, jobId: t, loggedInUserId: l }) => {
                    const { jobData: n, viewer: r } = (0, b.p)(g.query, { jobId: t, loggedIn: !!l }),
                        o = n?.result?.id ?? "",
                        s = r?.user_results?.result?.id,
                        c = n?.result?.core,
                        m = n?.result?.company_profile_results?.result,
                        p = n?.result?.user_results?.result,
                        y = a.useCallback(() => (c && (m || p) ? a.createElement(f, { actions: e, companyProfile: m, job: c, jobId: t, jobRelayId: o, user: p, viewerRelayId: s }) : null), [m, c, t, o, e, p, s]);
                    return a.createElement(u.Z, { style: C.viewport }, a.createElement(i.C, { cacheKey: `jobSearchDetails-${t}`, identityFunction: (e) => e.id, initialAnchor: d.X(t), items: [{ id: t }], renderer: y }));
                },
                C = s.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 } })),
                Z = ({ actions: e }) => {
                    const { loggedInUserId: t } = (0, m.QZ)(),
                        { jobId: l } = (0, o.useParams)();
                    return l ? a.createElement(p.H, { errorConfig: E }, a.createElement(h, { actions: e, jobId: l, loggedInUserId: t })) : null;
                };
        },
        198402: (e, t, l) => {
            l.r(t), l.d(t, { default: () => ut });
            var a = l(202784),
                n = l(325686),
                r = l(450681),
                o = l(318178),
                s = l(247411),
                c = l(903233),
                i = l(652904),
                d = l(943052),
                u = l(293115),
                m = l(254221),
                p = (l(136728), l(708852)),
                b = l(194504),
                g = l(731708),
                y = l(154003),
                E = l(392237),
                f = l(674132),
                h = l.n(f),
                C = l(520913),
                Z = l(262009),
                _ = l(998693),
                I = l(443781),
                w = l(246851),
                x = l(371344),
                k = l(310088),
                v = l(797553),
                j = l(487552);
            const S = h().a5afaf54,
                D = h().a753a870,
                P = E.default.create((e) => ({ dropdownContainer: { padding: e.spaces.space16, gap: e.spaces.space8 }, label: { maxWidth: 200 * e.scaleMultiplier, flex: 1 }, toggle: { flexDirection: "row", gap: 4, alignItems: "center" }, button: { backgroundColor: e.colors.transparent, borderColor: e.colors.borderColor, color: e.colors.text }, activeButton: { backgroundColor: e.colors.primary, borderColor: e.colors.borderColor, color: e.colors.text }, actions: { flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, marginTop: e.spaces.space16 } })),
                R = ({ DropdownItems: e, count: t, label: l, onApply: r, onReset: o, selectedCount: s, selectedLabel: c, unreadBadgeCountLabel: i }) => {
                    const [d, u] = a.useState(!1),
                        [m, p] = a.useState(!1),
                        [b, E] = a.useState(!1),
                        [f, h] = a.useState(!!c);
                    a.useEffect(() => {
                        b && 0 === t && (r(), h(!0), E(!1));
                    }, [b, r, t]);
                    const C = a.useCallback(() => {
                            u(!d), m && (r(), h(!0), p(!1));
                        }, [m, r, d]),
                        Z = a.useCallback(() => {
                            r(), h(!0), u(!1);
                        }, [r]),
                        _ = a.useCallback(() => {
                            o(), E(!0), u(!1);
                        }, [o]),
                        I = a.useMemo(() => (f && c ? c : l), [f, l, c]),
                        w = t > 0;
                    return a.createElement(n.Z, null, a.createElement(y.ZP, { backgroundColor: w ? "primary0" : "transparent", borderColor: "borderColor", color: "text", onClick: C }, a.createElement(n.Z, { style: P.toggle }, a.createElement(g.ZP, { numberOfLines: 1, style: P.label }, I), s > 0 && a.createElement(k.Z, { count: s, standalone: !0, unreadCountLabel: i, withBorder: !1 }), a.createElement(j.default, null))), d && a.createElement(v.default, { isFixed: !0, onDismiss: C }, a.createElement(n.Z, { style: P.dropdownContainer }, a.createElement(e, { setDirty: p, toggleDropdown: C }), a.createElement(n.Z, { style: P.actions }, a.createElement(y.ZP, { onClick: _, size: "xSmall", type: "primaryOutlined" }, S), a.createElement(y.ZP, { onClick: Z, size: "xSmall", type: "brandFilled" }, D)))));
                },
                T = h().b677cb9b,
                z = h().eedfd35c,
                A = h().ja04d37c,
                F = E.default.create((e) => ({ input: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, minWidth: 300 * e.scaleMultiplier } })),
                B = ({ onApply: e, onChange: t, selectedValue: l, value: n }) => {
                    const r = a.useCallback(() => {
                            t("");
                        }, [t]),
                        o = a.useCallback(
                            ({ setDirty: e, toggleDropdown: l }) =>
                                a.createElement(
                                    a.Fragment,
                                    null,
                                    a.createElement(x.Z, {
                                        onChange: (l) => {
                                            e(!0), t(l.target.value);
                                        },
                                        onSubmitEditing: l,
                                        placeholder: A,
                                        style: F.input,
                                        styleType: "selection",
                                        value: n,
                                    }),
                                ),
                            [t, n],
                        );
                    return a.createElement(R, { DropdownItems: o, count: n ? 1 : 0, label: z, onApply: e, onReset: r, selectedCount: 0, selectedLabel: l, unreadBadgeCountLabel: T });
                };
            var N = l(96083),
                q = l(89217),
                L = l(985124);
            const W = h().a1876045,
                H = h().fb146dd2,
                M = ({ onApply: e, onChange: t, selectedValues: l, values: n }) => {
                    const r = a.useCallback(() => {
                            t([]);
                        }, [t]),
                        o = a.useCallback(
                            ({ setDirty: e }) =>
                                a.createElement(
                                    a.Fragment,
                                    null,
                                    L.kW.map((l, r) =>
                                        a.createElement(N.Z, {
                                            checked: n.includes(l.value),
                                            key: l.value,
                                            label: l.label,
                                            onChange: (a) =>
                                                ((l, a) => {
                                                    if (!L.kW.find((e) => e.value === a)) return;
                                                    e(!0);
                                                    const r = n.filter((e) => e !== a);
                                                    t(l ? [...r, a] : r);
                                                })(a, l.value),
                                        }),
                                    ),
                                ),
                            [t, n],
                        );
                    return a.createElement(R, { DropdownItems: o, count: n.length, label: H, onApply: e, onReset: r, selectedCount: l.length, selectedLabel: 1 === l.length ? q.eo[l[0]] : null, unreadBadgeCountLabel: W });
                };
            var O = l(855488),
                V = l(956272);
            const U = h().a7090408,
                J = E.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0, flex: 1 } })),
                K = ({ onChange: e, onEnter: t, value: l }) => {
                    const n = a.useCallback(
                            (t) => {
                                e(t.target.value);
                            },
                            [e],
                        ),
                        r = a.useCallback(() => {}, []);
                    return a.createElement(O.Z, { Icon: V.default, autoComplete: "off", autoFocus: !0, label: U, name: "search-jobs-keyword-input", onChange: n, onClear: r, onKeyPress: t, style: J.inputStyle, testID: "search-jobs-keyword-input", value: l });
                },
                Q = h().f16e9a15,
                $ = h().fa7d455a,
                G = ({ onApply: e, onChange: t, selectedValues: l, values: n }) => {
                    const r = a.useCallback(() => {
                            t([]);
                        }, [t]),
                        o = a.useCallback(
                            ({ setDirty: e }) =>
                                a.createElement(
                                    a.Fragment,
                                    null,
                                    L.u4.map((l, r) =>
                                        a.createElement(N.Z, {
                                            checked: n.includes(l.value),
                                            key: l.value,
                                            label: l.label,
                                            onChange: (a) =>
                                                ((l, a) => {
                                                    if (!L.u4.find((e) => e.value === a)) return;
                                                    e(!0);
                                                    const r = n.filter((e) => e !== a);
                                                    t(l ? [...r, a] : r);
                                                })(a, l.value),
                                        }),
                                    ),
                                ),
                            [t, n],
                        );
                    return a.createElement(R, { DropdownItems: o, count: n.length, label: $, onApply: e, onReset: r, selectedCount: l.length, selectedLabel: 1 === l.length ? L.cj[l[0]].label : null, unreadBadgeCountLabel: Q });
                },
                X = h().caa606db,
                Y = h().jda06238,
                ee = ({ onApply: e, onChange: t, selectedValues: l, values: n }) => {
                    const r = a.useCallback(() => {
                            t([]);
                        }, [t]),
                        o = a.useCallback(
                            ({ setDirty: e }) =>
                                a.createElement(
                                    a.Fragment,
                                    null,
                                    L.xk.map((l, r) =>
                                        a.createElement(N.Z, {
                                            checked: n.includes(l.value),
                                            key: l.value,
                                            label: l.label,
                                            onChange: (a) =>
                                                ((l, a) => {
                                                    if (!L.xk.find((e) => e.value === a)) return;
                                                    e(!0);
                                                    const r = n.filter((e) => e !== a);
                                                    t(l ? [...r, a] : r);
                                                })(a, l.value),
                                        }),
                                    ),
                                ),
                            [t, n],
                        );
                    return a.createElement(R, { DropdownItems: o, count: n.length, label: Y, onApply: e, onReset: r, selectedCount: l.length, selectedLabel: 1 === l.length ? L.WA[l[0]] : null, unreadBadgeCountLabel: X });
                },
                te = E.default.create((e) => ({ textWrapper: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, icon: { height: e.spaces.space16 } })),
                le = ({ icon: e, label: t, onChange: l, selectedValue: r, value: o }) => {
                    const s = r === o;
                    return a.createElement(
                        y.ZP,
                        {
                            backgroundColor: s ? "primary0" : "transparent",
                            borderColor: "borderColor",
                            color: "text",
                            onClick: () => {
                                l(s ? "" : o);
                            },
                        },
                        a.createElement(g.ZP, { style: te.textWrapper }, a.createElement(n.Z, { style: te.icon }, e), t),
                    );
                },
                ae = (e) => (e ? e.split(",") : []),
                ne = (e) => (e?.length ? e.join(",") : ""),
                re = Object.freeze({ locationTypes: [], seniority: [], companyName: "", employmentTypes: [], industry: "" }),
                oe = h().a9ae1e78,
                se = h().a5afaf54,
                ce = h().eb517058,
                ie = ({ hasSearched: e, initialForm: t, withFilters: l }) => {
                    const { featureSwitches: r } = (0, I.QZ)(),
                        [o, s] = a.useState(!1),
                        [c, i] = a.useState(!1),
                        [u, , m] = (0, d.Z)(),
                        [E, f] = a.useState(t),
                        h = (0, w.Z)(E.locationId),
                        x = l && r.isTrue("recruiting_search_filters_enabled"),
                        k = x && r.isTrue("recruiting_job_search_ai_companies_filter_enabled");
                    a.useEffect(() => {
                        u.get("q") !== E.keyword && v("keyword", u.get("q") || "");
                    }, [u]);
                    const v = a.useCallback(
                            (e, t) => {
                                f((l) => ({ ...l, [e]: t }));
                            },
                            [f],
                        ),
                        j = (e) => {
                            f((t) => ({ ...t, ...e }));
                        },
                        S = a.useCallback(({ id: e, name: t, value: l }) => {
                            j({ locationId: e || "", locationName: t || "", locationStr: l || "" });
                        }, []),
                        D = a.useCallback(() => {
                            const e = ((e) => {
                                const t = { q: e.keyword, lid: e.locationId, lval: e.locationName || "", lstr: "", ltype: ne(e.locationTypes), sr: ne(e.seniority), cname: e.companyName, etype: ne(e.employmentTypes), ind: e.industry };
                                return e.locationId || (t.lstr = e.locationStr || ""), t;
                            })(E);
                            m(e);
                        }, [E, m]),
                        P = a.useCallback(
                            (e) => {
                                "Enter" === e.key && D();
                            },
                            [D],
                        ),
                        R = a.useCallback(() => {
                            j(re), s(!0);
                        }, []),
                        T = a.useCallback(
                            (e, t) => {
                                v(e, t), i(!0);
                            },
                            [v, i],
                        );
                    a.useEffect(() => {
                        o && (D(), s(!1));
                    }, [o, D]),
                        a.useEffect(() => {
                            E.locationId && h !== E.locationId && D();
                        }, [D, E.locationId, h]),
                        a.useEffect(() => {
                            c && (D(), i(!1));
                        }, [c, D]);
                    const z = (0, p.Ji)(),
                        A = a.useMemo(() => {
                            const e = [];
                            return z ? e.push(de.root) : e.push(de.mobileRoot), e;
                        }, [z]),
                        F = a.useMemo(() => (z ? de.inputs : de.mobileInputs), [z]),
                        N = a.useMemo(() => (z ? {} : de.mobileButton), [z]),
                        q = a.useCallback(({ children: e }) => (z ? a.createElement(n.Z, { style: de.filterWrapperContainer }, e) : a.createElement(b.Z, { childrenStyle: de.filterButtonsContainer }, e)), [z]);
                    return a.createElement(a.Fragment, null, a.createElement(n.Z, { style: de.container }, e ? null : a.createElement(n.Z, { style: de.header }, a.createElement(C.default, { style: de.icon }), a.createElement(g.ZP, { size: "title1", weight: "bold" }, "Job Search")), a.createElement(n.Z, { style: A }, a.createElement(n.Z, { style: F }, a.createElement(K, { onChange: (e) => v("keyword", e), onEnter: P, value: E.keyword || "" }), a.createElement(_.Z, { onChange: S, onEnter: P, onSelect: S, value: E.locationName || E.locationStr || "" })), a.createElement(n.Z, { style: N }, a.createElement(y.ZP, { onClick: D, size: z ? "xLarge" : "large", type: "brandFilled" }, oe)))), x && e ? a.createElement(n.Z, { style: de.filterContainer }, a.createElement(q, null, a.createElement(G, { onApply: D, onChange: (e) => v("locationTypes", e), selectedValues: t.locationTypes || [], values: E.locationTypes || [] }), a.createElement(ee, { onApply: D, onChange: (e) => v("seniority", e), selectedValues: t.seniority || [], values: E.seniority || [] }), a.createElement(M, { onApply: D, onChange: (e) => v("employmentTypes", e), selectedValues: t.employmentTypes || [], values: E.employmentTypes || [] }), a.createElement(B, { onApply: D, onChange: (e) => v("companyName", e), selectedValue: t.companyName || "", value: E.companyName || "" }), k && a.createElement(le, { icon: a.createElement(Z.default, null), label: ce, onChange: (e) => T("industry", e), selectedValue: E.industry || "", value: "ai" }), a.createElement(y.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "buttonBlack", onClick: R }, se))) : a.createElement(a.Fragment, null, l ? a.createElement(n.Z, { style: de.spacer }) : null));
                },
                de = E.default.create((e) => ({ container: { zIndex: 4, alignItems: "center" }, header: { gap: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center", marginTop: "150px", marginBottom: e.spaces.space48 }, filterContainer: { width: "100%", padding: e.spaces.space16, marginBottom: e.spaces.space4, marginHorizontal: "auto" }, filterWrapperContainer: { flexDirection: "row", gap: 8, alignItems: "center", marginHorizontal: "auto" }, filterButtonsContainer: { paddingHorizontal: e.spaces.space8 }, spacer: { marginBottom: e.spaces.space64 }, root: { flexDirection: "row", marginHorizontal: "auto", alignItems: "center", flexWrap: "wrap", zIndex: 1, gap: e.spaces.space16, maxWidth: "900px", width: "100%", paddingHorizontal: e.spaces.space16 }, mobileRoot: { flexDirection: "column", marginHorizontal: "auto", alignItems: "center", justifyContent: "center", zIndex: 1, marginBottom: e.spaces.space16, gap: e.spaces.space16, width: "100%", paddingHorizontal: e.spaces.space16 }, inputs: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16, flex: 1, zIndex: 4 }, mobileInputs: { flexDirection: "column", gap: e.spaces.space4, flex: 1, width: "100%", zIndex: 4, maxWidth: "500px" }, mobileButton: { width: "100%", maxWidth: "500px" }, icon: { height: "3em" } })),
                ue = ({ hasSearched: e, withFilters: t = !1 }) => {
                    const [l] = (0, d.Z)(),
                        n = { keyword: l.get("q") || "", locationId: l.get("lid") || "", locationName: l.get("lval") || "", locationStr: l.get("lstr") || "", locationTypes: ae(l.get("ltype") || ""), seniority: ae(l.get("sr") || ""), companyName: l.get("cname"), employmentTypes: ae(l.get("etype") || ""), industry: l.get("ind") || "" };
                    return a.createElement(ie, { hasSearched: e, initialForm: n, withFilters: t });
                };
            var me = l(807896),
                pe = l(175967),
                be = (l(585488), l(736063)),
                ge = l(127218),
                ye = l(230747),
                Ee = l(277660),
                fe = l.n(Ee),
                he = l(107267),
                Ce = l(457311),
                Ze = l(910113),
                _e = l(965245),
                Ie = l(609927),
                we = l(715601),
                xe = l(768572),
                ke = l(884038),
                ve = l(780038),
                je = l(614983),
                Se = l.n(je),
                De = l(351743),
                Pe = l.n(De),
                Re = l(286190),
                Te = l(883229),
                ze = l(943914),
                Ae = l(535338),
                Fe = l(167630),
                Be = l(379327),
                Ne = l(913973);
            const qe = a.createElement(Be.default, null),
                Le = a.createElement(Ne.default, null),
                We = ({ alreadyAdded: e, status: t }) => {
                    if (e) return Le;
                    switch (t) {
                        case "IN_PROGRESS":
                            return a.createElement(Fe.Z, { size: 16 });
                        case "COMPLETED":
                            return Le;
                        default:
                            return qe;
                    }
                },
                He = E.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, icon: { marginStart: 4 } })),
                Me = ({ alreadyAdded: e, disabled: t, label: l, onClick: r, status: o }) => a.createElement(y.ZP, { backgroundColor: "transparent", borderColor: "brandColor", color: "text", disabled: t, onClick: r, size: "xSmall" }, a.createElement(n.Z, { style: He.row }, a.createElement(g.ZP, null, l), a.createElement(n.Z, { style: He.icon }, a.createElement(We, { alreadyAdded: e, status: o })))),
                Oe = h().j595df68,
                Ve = h().a1227d5e,
                Ue = ve.Z,
                Je = ke.Z,
                Ke = ({ initialState: e, jobTitles: t, locationIds: l, queryId: r, userId: o }) => {
                    const s = (0, he.useHistory)(),
                        [c, i] = a.useState(e),
                        [u, m] = a.useState("NOT_STARTED"),
                        [p, b] = a.useState("NOT_STARTED"),
                        [E] = (0, d.Z)(),
                        f = E.get("q"),
                        C = E.get("lid"),
                        Z = E.get("lval"),
                        _ = (0, w.Z)(f),
                        I = (0, w.Z)(C),
                        x = f && !t?.includes(f.toLowerCase()),
                        k = C && !l?.includes(C),
                        v = x || k || "NOT_STARTED" !== u || "NOT_STARTED" !== p;
                    a.useEffect(() => {
                        (_ === f && I === C) || (i(e), m("NOT_STARTED"), b("NOT_STARTED"));
                    }, [e, f, C, _, I]);
                    const [j] = Pe()(Ue),
                        S = a.useCallback(() => {
                            const e = { backgroundColor: "transparent", borderColor: "brandColor", color: "text" },
                                t = () => s.push("/jobs/get-recommendations"),
                                l = () => {
                                    x &&
                                        (m("IN_PROGRESS"),
                                        j({
                                            variables: { jobTitle: f, userId: o },
                                            updater: (e, t) => {
                                                const l = t?.create_matching_criteria?.id;
                                                Se()(l, "newRecordId must be defined"), Se()(r, "queryId must be defined");
                                                const a = e.get(r);
                                                Se()(a, "matchingProfileRecord must be defined");
                                                const n = a.getLinkedRecords("job_titles"),
                                                    o = e.create((0, Re.generateUniqueClientID)(), "MatchingCriteria");
                                                o.setValue(l, "id"), o.setValue(f, "job_title"), a.setLinkedRecords([...(n || []), o], "job_titles");
                                            },
                                            onCompleted: () => {
                                                m("COMPLETED");
                                            },
                                        }));
                                },
                                i = () => {
                                    k &&
                                        (b("IN_PROGRESS"),
                                        j({
                                            variables: { locationId: C, userId: o },
                                            updater: (e, t) => {
                                                const l = t?.create_matching_criteria?.id;
                                                Se()(l, "newRecordId must be defined"), Se()(r, "queryId must be defined");
                                                const a = e.get(r);
                                                Se()(a, "matchingProfileRecord must be defined");
                                                const n = a.getLinkedRecords("locations"),
                                                    o = e.create((0, Re.generateUniqueClientID)(), "MatchingCriteria");
                                                o.setValue(l, "id"), o.setValue(C, "location_id"), a.setLinkedRecords([...(n || []), o], "locations");
                                            },
                                            onCompleted: () => {
                                                b("COMPLETED");
                                            },
                                        }));
                                };
                            switch (c) {
                                case "SETUP":
                                    return a.createElement(a.Fragment, null, a.createElement(g.ZP, { size: "subtext1" }, a.createElement(h().I18NFormatMessage, { $i18n: "ie9320f7" }, f ? a.createElement(g.ZP, null, "like ", a.createElement(g.ZP, { weight: "bold" }, f)) : null, C && Z ? a.createElement(g.ZP, null, "in ", a.createElement(g.ZP, { weight: "bold" }, Z)) : null)), a.createElement(n.Z, { style: Qe.singleAction }, a.createElement(y.ZP, (0, me.Z)({}, e, { onClick: t, size: "xSmall" }), Ve)));
                                case "CTA":
                                    return a.createElement(a.Fragment, null, a.createElement(g.ZP, { size: "subtext1" }, a.createElement(h().I18NFormatMessage, { $i18n: "c70aad4b" }, f ? a.createElement(g.ZP, null, "for ", a.createElement(g.ZP, { weight: "bold" }, f)) : null, C && Z ? a.createElement(g.ZP, null, "in ", a.createElement(g.ZP, { weight: "bold" }, Z)) : null)), v && a.createElement(n.Z, { style: { gap: 8 } }, a.createElement(g.ZP, { size: "subtext1" }, Oe), a.createElement(n.Z, { style: Qe.doubleActions }, f && a.createElement(Me, { alreadyAdded: !x, disabled: "NOT_STARTED" !== u || !x, label: f, onClick: l, status: u }), Z && a.createElement(Me, { alreadyAdded: !k, disabled: "NOT_STARTED" !== p || !k, label: Z, onClick: i, status: p }))));
                                default:
                                    return null;
                            }
                        }, [x, k, j, c, s, u, f, C, Z, p, r, v, o]);
                    return f || C ? a.createElement(n.Z, { style: Qe.container }, S()) : null;
                },
                Qe = E.default.create((e) => ({ container: { padding: e.spaces.space16, backgroundColor: e.colors.gray0, gap: 16, borderTopStartRadius: e.borderRadii.small }, spaceBetweenRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, singleAction: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, doubleActions: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 8, flexWrap: "wrap" }, linkButton: { borderBottomWidth: e.borderWidths.medium, borderBottomColor: e.colors.white, borderBottomStyle: "solid" } })),
                $e = () => {
                    const e = (0, Ae.p)(Je, {}),
                        t = e.viewer_v2.user_results.result.matching_profile,
                        l = e.viewer_v2.user_results.result.rest_id,
                        n = t?.locations?.map((e) => e.location_id),
                        r = t?.job_titles?.map((e) => e.job_title.toLowerCase());
                    return e ? a.createElement(Ke, { initialState: t?.consented_at ? "CTA" : "SETUP", jobTitles: r, locationIds: n, queryId: t?.__id, userId: l }) : null;
                },
                Ge = { context: "job_search_recommendations_cta" },
                Xe = () => a.createElement(Te.N, { errorConfig: Ge, fallback: { type: "CustomRetry", content: () => null } }, a.createElement(ze.B, null, a.createElement($e, null))),
                Ye = { isGlobal: !0, isSticky: !1 },
                et = ye.Z,
                tt = (e) => e.id,
                lt = E.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 } })),
                at = ({ fetchNext: e, slice: t }) => {
                    const { featureSwitches: l } = (0, I.QZ)(),
                        n = (0, p.Ji)(),
                        r = (0, he.useHistory)(),
                        o = (0, he.useLocation)(),
                        s = fe()(et, t).items_results,
                        c = s?.find((e) => e.result)?.rest_id ?? null,
                        i = (0, w.Z)(c),
                        d = l.isTrue("recruiting_job_recommendations_enabled");
                    a.useEffect(() => {
                        i !== c && n && r.push({ pathname: `/jobs/${c || ""}`, query: o.query });
                    }, [r, o.query, n, c, i]);
                    const u = a.useCallback((e) => a.createElement(Ze.ZP, { item: e.result, itemId: e.rest_id, itemIndex: s.findIndex((t) => t.rest_id === e.rest_id) }), [s]),
                        m = a.useCallback(() => a.createElement(a.Fragment, null, d ? a.createElement(Xe, null) : null, a.createElement(_e.Z, { cacheKey: "jobSearchList", footer: null, identityFunction: tt, items: s, onNearEnd: e, renderer: u })), [e, d, s, u]);
                    return s ? (s.length && n ? a.createElement(Ie.Z.Provider, { value: Ye }, a.createElement(xe.y3.Provider, { value: void 0 }, a.createElement(we.Z, { style: lt.viewport }, m()))) : s.length && !n ? a.createElement(a.Fragment, null, m()) : a.createElement(Ce.Z, { header: "No jobs" })) : null;
                },
                nt = { page: "jobs_search", section: "all" },
                rt = pe.Z,
                ot = ({ query: e }) => {
                    const { data: t, fetchNext: l } = (0, ge.C)(rt, { count: 25, cursor: null, searchParams: { ...e } }),
                        n = t?.job_search;
                    return n ? a.createElement(u.nO, { namespace: nt }, a.createElement(i.Z, null, a.createElement(at, { fetchNext: l, slice: n }))) : null;
                },
                st = { context: "JobSearch" },
                ct = (e) => {
                    const [t] = (0, d.Z)(),
                        l = a.useMemo(() => {
                            const e = t.get("q"),
                                l = t.get("lid"),
                                a = t.get("lstr"),
                                n = ae(t.get("ltype")),
                                r = ae(t.get("sr")),
                                o = t.get("cname"),
                                s = ae(t.get("etype")),
                                c = t.get("ind");
                            return { keyword: e, job_location_id: l ? [l] : null, job_location: !l && a ? a : null, job_location_type: n, seniority_level: r, company_name: o, employment_type: s, industry: c ? [c] : null };
                        }, [t]);
                    return a.createElement(be.H, { errorConfig: st }, a.createElement(ot, (0, me.Z)({}, e, { query: l })));
                },
                it = a.memo(ct),
                dt = { page: "job_search", section: "all" },
                ut = () => {
                    const [e, t] = a.useState(!1),
                        [l] = (0, d.Z)();
                    a.useEffect(() => {
                        !e && (0, r.Z)(Array.from(l.values()))?.length > 0 && t(!0);
                    }, [e, l]);
                    return a.createElement(s.Z, null, a.createElement(u.nO, { namespace: dt }, a.createElement(i.Z, { locationKey: dt.page }, a.createElement(ue, { hasSearched: e, withFilters: !0 }), e ? a.createElement(c.Z, { leftContent: a.createElement(n.Z, { style: { display: "flex", overflow: "auto", minWidth: "30%" } }, a.createElement(it, null)), rightContent: a.createElement(m.Z, { actions: [o.h5] }) }) : null)));
                };
        },
        787379: (e, t, l) => {
            l.d(t, { _: () => o });
            var a = l(729002),
                n = (l(585488), l(990242)),
                r = l.n(n);
            const o = (e) => {
                const t = r()(a.Z, e);
                return t ? { description: t?.description ? { urls: t.description.urls ? t.description.urls.map((e) => ({ display_url: e.display_url || "", expanded_url: e.expanded_url || "", indices: e.indices ? e.indices.slice() : [], url: e.url || "" })) : [] } : {} } : {};
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-55a71481.d146249a.js.map
