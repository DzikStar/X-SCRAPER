"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-63cb1cc4"],
    {
        482924: (e, t, o) => {
            o.d(t, { A: () => p });
            var r = o(202784),
                n = o(437429),
                a = o.n(n),
                l = o(57074),
                s = o.n(l),
                c = o(10622),
                i = o.n(c),
                u = o(71620),
                d = o(312771),
                m = o(535338);
            function p(e, t, o) {
                const n = s()(t),
                    l = s()(o),
                    c = a()(),
                    p = (0, u.po)(),
                    [b, y] = r.useState(null),
                    [f, h] = r.useState(!1),
                    E = r.useCallback(() => {
                        f ||
                            (h(!0),
                            i()(c, e, n, { networkCacheConfig: l?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    h(!1);
                                },
                                error: (e) => {
                                    p(e), h(!1), y(e);
                                },
                            }));
                    }, [c, p, e, f, n, l]),
                    k = (0, m.p)(e, t, o);
                return r.useMemo(() => (b ? { data: k, refetch: E, refetchStatus: d.ZP.FAILED, refetchError: b } : { data: k, refetch: E, refetchStatus: f ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [k, b, f, E]);
            }
        },
        154283: (e, t, o) => {
            o.r(t), o.d(t, { default: () => b });
            var r = o(202784),
                n = o(325686),
                a = o(731708),
                l = o(779610),
                s = o(392237),
                c = o(394123),
                i = o(720930),
                u = o(757700);
            const d = r.createElement(c.default, null),
                m = r.createElement(i.default, null),
                p = s.default.create((e) => ({ title: { padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, pivot: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, pivotItem: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.text } })),
                b = ({ history: e, location: t, match: o }) => {
                    const s = r.useMemo(() => o.params.profileSectionId, [o]),
                        c = r.useCallback((e, t) => r.createElement(n.Z, { style: p.pivotItem }, t, r.createElement(a.ZP, null, e)), []),
                        i = r.useCallback(
                            (e) => {
                                if (s) return { pathname: `/settings/bio/new/${s}/${e}`, method: "replace", state: t.state };
                            },
                            [t.state, s],
                        );
                    return r.createElement(u.ZP, { clickMaskToClose: !0, history: e, modalSize: "dynamic", withBackground: !0 }, r.createElement(n.Z, null, r.createElement(a.ZP, { align: "center", size: "headline2", style: p.title, weight: "bold" }, "Add Block"), r.createElement(n.Z, { style: p.pivot }, r.createElement(l.Z, { label: c("Rich Text", d), link: i("richtext") })), r.createElement(n.Z, null, r.createElement(l.Z, { label: c("Work Experience", m), link: i("work_history") }))));
                };
        },
        449059: (e, t, o) => {
            o.r(t), o.d(t, { default: () => et });
            var r = o(948632),
                n = o(202784),
                a = o(400752),
                l = (o(585488), o(990242)),
                s = o.n(l),
                c = o(107267),
                i = o(731708),
                u = o(392237),
                d = o(674132),
                m = o.n(d),
                p = o(991617),
                b = o(980407),
                y = o(443781),
                f = o(736063),
                h = o(520385),
                E = o(462166),
                k = o(535338),
                _ = o(807896),
                C = o(301503),
                g = o(325686),
                I = o(925873),
                Z = o(386802),
                x = o(989272),
                v = o(891198),
                T = o(977952),
                w = o(167630),
                S = o(297256),
                P = o(40610),
                R = o(751475),
                B = o(154003),
                M = o(908478),
                H = o(516951),
                N = o(187669),
                D = o(949626),
                O = o(381335),
                W = o(313433),
                L = o(874111),
                j = o(536790),
                Y = o(952793),
                z = o(478414),
                F = o(339110),
                Q = o(725516),
                A = o(242470);
            const U = m().c2333081,
                K = m().cfd2f35e,
                q = u.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, editorRoot: { maxHeight: "100%", overflow: "auto", justifyContent: "space-between", flex: 1 }, mobileRoot: { maxHeight: `calc(100vh - ${e.componentDimensions.appBarHeight})` }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, richtextRoot: { paddingBottom: e.spaces.space16 }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16, borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, zIndex: 3, backgroundColor: e.colors.navigationBackground }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                V = (0, Q.Z)(({ initialState: e = "", onSave: t }) => {
                    const { isModal: o } = n.useContext(Z.Z),
                        { sectionId: r, sectionType: a } = (0, p.eF)(),
                        { blockId: l, blocksQueryId: s } = (0, p._L)(),
                        { userId: u, userQueryId: d } = (0, p.se)(),
                        m = (0, Y.hC)("xprofile_emojis_enabled"),
                        b = (0, c.useHistory)(),
                        [y, f] = n.useState(""),
                        [E, k] = n.useState(
                            ((e) => {
                                const t = I.Z.getContentStateFromRaw(e),
                                    o = I.Z.initEditorState(t);
                                return I.Z.convertEmojiToEntities(o);
                            })(e),
                        ),
                        [_, Q] = n.useState(!1),
                        [V, J] = n.useState(!1),
                        X = n.useCallback((e, t) => V && !_, [V, _]),
                        $ = n.useCallback(() => {
                            b.goBack({ backLocation: "/settings/bio" });
                        }, [b]),
                        G = n.useCallback(() => {
                            J(!1), Q(!1);
                        }, []);
                    (0, N.q)(() => {
                        (0, x.fH)((0, z.yW)(z.Hx, z.K), z.Hx);
                    });
                    const ee = (0, L.c6)(E);
                    let te = ee;
                    ee > 1 && (te = v.ZP.getFormattedCount(ee));
                    const oe = n.useMemo(() => E?.getCurrentContent()?.hasText(), [E]),
                        re = n.useCallback(
                            (e) => {
                                const t = I.Z.convertMentionsToEntities(I.Z.convertEmojiToEntities(e));
                                V || (0, M.Z)((0, C.convertToRaw)(t.getCurrentContent()), (0, C.convertToRaw)(E.getCurrentContent())) || J(!0), k(t);
                            },
                            [E, V],
                        ),
                        ne = n.useMemo(() => ({ editorState: E, element: T.Z, stripPastedStyles: !0 }), [E]),
                        ae = n.useMemo(() => {
                            if (_) return n.createElement(g.Z, { style: q.flexRow }, n.createElement(w.Z, { size: "small" }), n.createElement(i.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!h.j3 && ee > h.j3;
                            return n.createElement(g.Z, null, n.createElement(i.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: q.textCountLabel }, U({ count: te })));
                        }, [ee, te, _]),
                        le = n.useMemo(() => [q.stickyButton, q.flexRow, q.v2Button], []),
                        se = n.useCallback(() => (m ? n.createElement(W.Z, { editorState: E, onChange: re }) : null), [E, m, re]),
                        ce = n.useCallback(
                            () => (e) =>
                                n.createElement(S.b, {
                                    emojiPickerButton: se,
                                    inputStyle: q.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), re(t);
                                    },
                                    richTextInputContext: ne,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, z.bb)(z.K),
                                    toolbarRightControl: ae,
                                }),
                            [re, se, ne, ae],
                        );
                    return n.createElement(g.Z, { style: { ...q.editorRoot, ...(o ? {} : q.mobileRoot) } }, y ? n.createElement(g.Z, { style: q.error }, n.createElement(P.Z.Danger, { text: y, withIcon: !0 })) : null, n.createElement(R.Z, { fallbackBackPath: "/", history: b, onNavigation: G, shouldBlockNavigation: X, shouldBlockUnload: V }, n.createElement(D.Z, { className: z.Hx, style: { ...q.richtextRoot } }, n.createElement(j.Z, { contextText: (0, L.iT)(E), isInline: !0, onTextUpdated: re, onTypeaheadStateChange: H.Z, source: F._4.LongformComposer }, ce()))), n.createElement(g.Z, { style: le }, n.createElement(O.Z, { onCompleted: $, useIconButton: !1 }), n.createElement(g.Z, { style: q.flexRow }, n.createElement(B.ZP, { onClick: $, size: "large", type: "primaryFilled" }, K), n.createElement(A.Z, { blockId: l, characterCount: ee, disabled: _ || !V || !oe || ee > h.j3, editorState: E, onSave: t, queryId: s || d, sectionId: r, sectionType: a, setDirty: J, setError: f, setSaving: Q, userId: u }))));
                }),
                J = ({ content: e, ...t }) => {
                    const o = s()(E.GL, e) ?? null;
                    return n.createElement(V, (0, _.Z)({ initialState: o?.value || null }, t));
                };
            var X = o(855488),
                $ = o(96083),
                G = o(260706),
                ee = o(601289),
                te = o(664052),
                oe = o(998693),
                re = o(944681),
                ne = o(72130),
                ae = o(725405),
                le = o(289992),
                se = o(614983),
                ce = o.n(se),
                ie = o(351743),
                ue = o.n(ie);
            const de = le.Z,
                me = () => {
                    const [e, t] = ue()(de);
                    return [
                        n.useCallback(
                            (t, o) => {
                                e({
                                    updater: (e, t) => {
                                        ce()(o, "queryId must be specified");
                                        const r = e.get(o);
                                        r && t?.create_work_experience_item?.block_results?.id && r.invalidateRecord();
                                    },
                                    ...t,
                                });
                            },
                            [e],
                        ),
                        t,
                    ];
                };
            const pe = o(727689).Z,
                be = () => {
                    const [e, t] = ue()(pe);
                    return [
                        n.useCallback(
                            (t, o) => {
                                e({
                                    updater: (e, t) => {
                                        ce()(o, "queryId must exist");
                                        const r = e.get(o);
                                        r && r.invalidateRecord();
                                    },
                                    ...t,
                                });
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                ye = "WorkHistory_StartMonth_Selector",
                fe = "WorkHistory_StartYear_Selector",
                he = "WorkHistory_EndMonth_Selector",
                Ee = "WorkHistory_EndYear_Selector",
                ke = new Date().getFullYear(),
                _e = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                Ce = { jobTitle: "", companyProfileId: null, companyProfileName: null, companyProfileLogoUrl: null, location: {}, isCurrentJob: !1, startMonth: 0, startYear: ke, endMonth: 0, endYear: ke, description: null },
                ge = m().hd332c96,
                Ie = m().d2fb1b80,
                Ze = m().b3590132,
                xe = m().debb6abe,
                ve = m().j7d08ada,
                Te = m().a8c7d3fc,
                we = m().b335d507,
                Se = (e, t) => {
                    const { active_role: o, company_profile_name: r, company_profile_results: n, description: a, end_month: l, end_year: s, location_text: c, start_month: i, start_year: u, structured_location: d, title: m } = e || {};
                    return t ? { ...Ce, jobTitle: m, companyProfileId: n?.result?.rest_id, companyProfileName: n?.result?.core?.name || r, companyProfileLogoUrl: n?.result?.logo?.normal_url || (r ? _e : null), location: { name: c || "", id: d?.rest_id }, isCurrentJob: o, startMonth: i, startYear: u, endMonth: l, endYear: s, description: a } : Ce;
                },
                Pe = (e, t) => (e && t ? new Date(t, e - 1) : null),
                Re = (e) => {
                    let t = !0;
                    const o = {};
                    e.jobTitle || ((o.jobTitle = ge), (t = !1)), e.companyProfileId || e.companyProfileName || ((o.companyProfileName = Ie), (t = !1));
                    const r = ((e, t, o, r, n) => {
                        const a = Pe(e, t),
                            l = n ? new Date() : Pe(o, r),
                            s = new Date();
                        return a && l ? (a > s ? xe : l > s ? ve : a > l ? Te : "") : Ze;
                    })(e.startMonth, e.startYear, e.endMonth, e.endYear, !!e.isCurrentJob);
                    if ((r && ((o.startMonth = r), (t = !1)), e.description)) {
                        const r = I.Z.getContentStateFromRaw(e.description),
                            n = r ? I.Z.initEditorState(r) : null;
                        n && I.Z.getCharacterCount(n) > 750 && ((o.description = we({ maxChars: 750 })), (t = !1));
                    }
                    return { isValid: t, errors: o };
                },
                Be = (e) => {
                    const { companyProfileId: t, companyProfileLogoUrl: o, companyProfileName: r } = e;
                    return r ? { id: t || "-1", name: r, type: "company_profile", data: { logoUrl: o || _e, query: "" } } : null;
                },
                Me = m().eba5a8ec,
                He = m().fd20adb8,
                Ne = m().cd3059f2,
                De = m().b86019ae,
                Oe = m().e36287c6,
                We = m().cfd2f35e,
                Le = m().i2209530,
                je = ({ initialForm: e }) => {
                    const t = (0, ae.Z)(),
                        { isModal: o } = n.useContext(Z.Z),
                        r = (0, a.b9)(p.j7),
                        { sectionId: l } = (0, p.eF)(),
                        { blockId: s, blocksQueryId: u } = (0, p._L)(),
                        { userId: d, userQueryId: m } = (0, p.se)(),
                        b = (0, c.useHistory)(),
                        y = (0, c.useLocation)(),
                        [f, E] = n.useState(Be(e)),
                        [k, _] = n.useState(e),
                        [I, x] = n.useState(null),
                        [v] = me(),
                        [T] = be(),
                        w = (e, t) => {
                            _((o) => ({ ...o, [e]: t }));
                        },
                        S = (e) => {
                            _((t) => ({ ...t, ...e }));
                        },
                        P = n.useCallback(() => {
                            y.state?.fromProfile ? b.replace({ pathname: "/settings/bio", state: {} }) : b.goBack({ backLocation: "/settings/bio" });
                        }, [b, y]),
                        R = n.useCallback((e) => {
                            S(e), E(Be(e));
                        }, []),
                        M = (e) => {
                            x((t) => ({ ...t, [e]: "" }));
                        },
                        N = n.useCallback(() => {
                            const e = s ? "update_block_btn" : "save_block_btn",
                                o = () => {
                                    t.scribe({ ...(0, ne.Ak)(e, "success") }), r(!0), y.state?.fromProfile ? b.replace({ pathname: "/settings/bio", state: {} }) : b.goBack({ backLocation: "/settings/bio" });
                                },
                                n = () => {
                                    t.scribe({ ...(0, ne.Ak)(e, "error") });
                                };
                            t.scribe({ ...(0, ne.Ak)(e, "click") });
                            const a = ((e) => {
                                const { companyProfileId: t, companyProfileName: o, description: r, endMonth: n, endYear: a, isCurrentJob: l, jobTitle: s, location: c, startMonth: i, startYear: u } = e;
                                return { active_role: l, company_profile: t || null, company_profile_name: o, description: r, end_month: n, end_year: a, location_text: c?.id ? c?.name : c?.value, start_month: i, start_year: u, structured_location: c?.id, title: s };
                            })(k);
                            s ? T({ variables: { data: a, blockId: s }, onCompleted: o, onError: n }, u) : d && v({ variables: { data: a, sectionId: l, userId: d, sectionType: l ? null : h.Mp.WORK_HISTORY }, onCompleted: o, onError: n }, m);
                        }, [t, s, u, v, k, b, y.state?.fromProfile, l, r, T, d, m]),
                        W = n.useCallback(() => {
                            r(!0), b.goBack({ backLocation: "/settings/bio" });
                        }, [b, r]),
                        L = n.useCallback(() => {
                            const { errors: e, isValid: t } = Re(k);
                            t ? N() : x(e);
                        }, [k, N]);
                    return n.createElement(
                        g.Z,
                        { style: { ...Ye.editorRoot, ...(o ? {} : Ye.mobileRoot) } },
                        n.createElement(
                            g.Z,
                            { style: Ye.formRoot },
                            n.createElement(X.Z, {
                                errorText: I?.jobTitle,
                                invalid: !!I?.jobTitle,
                                label: Me,
                                name: "job_title",
                                onChange: (e) => {
                                    M("jobTitle"), w("jobTitle", e.target.value);
                                },
                                testID: "job-title-input",
                                type: "text",
                                value: k.jobTitle || "",
                            }),
                            n.createElement(
                                g.Z,
                                { style: [Ye.inputContainer, { zIndex: 5 }] },
                                n.createElement(ee.Z, {
                                    errorText: I?.companyProfileName,
                                    onChange: (e) => {
                                        M("companyProfileName"), S({ companyProfileId: null, companyProfileName: e });
                                    },
                                    onEnter: H.Z,
                                    onSelect: (e, t, o) => R({ companyProfileId: e, companyProfileName: t, companyProfileLogoUrl: o }),
                                    selectedValue: f,
                                    value: k.companyProfileName || "",
                                }),
                            ),
                            n.createElement(g.Z, { style: [Ye.inputContainer, { zIndex: 4 }] }, n.createElement(oe.Z, { onChange: (e) => w("location", e), onEnter: H.Z, onSelect: (e) => w("location", e), value: k.location?.name || k.location?.value || "" })),
                            n.createElement(g.Z, { style: Ye.inputContainer }, n.createElement(g.Z, { style: Ye.checkbox }, n.createElement($.Z, { checked: !!k.isCurrentJob, onChange: (e) => w("isCurrentJob", e) }), n.createElement(i.ZP, null, He))),
                            n.createElement(
                                g.Z,
                                { style: Ye.inputContainer },
                                n.createElement(i.ZP, { weight: "bold" }, Ne),
                                n.createElement(G.Z, {
                                    errors: { month: !!I?.startMonth, year: !!I?.startMonth },
                                    hideDay: !0,
                                    label: Ne,
                                    minSelectableYear: (0, re.Q)(),
                                    month: k.startMonth || 0,
                                    monthSelectorTestID: ye,
                                    onChange: (e) => {
                                        M("startMonth"), S({ startMonth: e.month || 0, startYear: e.year || 2024 });
                                    },
                                    year: k.startYear || ke,
                                    yearSelectorTestID: fe,
                                }),
                            ),
                            n.createElement(
                                g.Z,
                                { style: Ye.inputContainer },
                                n.createElement(i.ZP, { weight: "bold" }, De),
                                n.createElement(G.Z, {
                                    disabled: !!k.isCurrentJob,
                                    errors: { month: !!I?.startMonth, year: !!I?.startMonth },
                                    hideDay: !0,
                                    label: De,
                                    minSelectableYear: (0, re.Q)(),
                                    month: k.endMonth || 0,
                                    monthSelectorTestID: he,
                                    onChange: (e) => {
                                        M("startMonth"), S({ endMonth: e.month || 0, endYear: e.year || 2024 });
                                    },
                                    year: k.endYear || ke,
                                    yearSelectorTestID: Ee,
                                }),
                                I?.startMonth ? n.createElement(i.ZP, { color: "red500", size: "subtext2", style: Ye.dateError }, I.startMonth) : null,
                            ),
                            n.createElement(
                                g.Z,
                                { style: Ye.inputContainer },
                                n.createElement(i.ZP, { size: "body", style: Ye.label, weight: "bold" }, Oe),
                                n.createElement(
                                    D.Z,
                                    { className: z.Hx },
                                    n.createElement(te.Z, {
                                        characterLimit: 750,
                                        editorClass: z.Hx,
                                        editorStyles: (0, z.yW)(z.Hx, z.K),
                                        initialState: k.description,
                                        limitedRichText: !0,
                                        numberOfLines: 5,
                                        onChange: (e) =>
                                            w(
                                                "description",
                                                ((e) => {
                                                    if (!e) return;
                                                    const t = e.getCurrentContent(),
                                                        o = (0, C.convertToRaw)(t);
                                                    return JSON.stringify(o);
                                                })(e),
                                            ),
                                        textSizesOverride: (0, z.bb)(z.K),
                                    }),
                                ),
                                I?.description ? n.createElement(i.ZP, { color: "red500", size: "subtext2", style: Ye.dateError }, I.description) : null,
                            ),
                        ),
                        n.createElement(g.Z, { style: [Ye.stickyButton, Ye.flexRow] }, n.createElement(O.Z, { onCompleted: W, useIconButton: !1 }), n.createElement(g.Z, { style: Ye.flexRow }, n.createElement(B.ZP, { onClick: P, size: "large", type: "primaryFilled" }, We), n.createElement(B.ZP, { disabled: !1, onClick: L, size: "large", type: "brandFilled" }, Le))),
                    );
                },
                Ye = u.default.create((e) => ({ checkbox: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, editorRoot: { maxHeight: "100%", overflow: "auto", justifyContent: "space-between", flex: 1, zIndex: 4 }, mobileRoot: { maxHeight: `calc(100vh - ${e.componentDimensions.appBarHeight})` }, formRoot: { flex: 1, overflow: "auto" }, inputContainer: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16, justifyContent: "space-between", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor }, dateError: { marginTop: `-${e.spaces.space12}`, paddingHorizontal: e.spaces.space8 }, label: { marginBottom: e.spaces.space16 } })),
                ze = ({ block: e }) => {
                    const { blockId: t } = (0, p._L)(),
                        o = s()(E.lw, e?.result?.content) ?? null;
                    return t && !o ? null : n.createElement(je, { initialForm: Se(o, t) });
                },
                Fe = r.Z,
                Qe = m().af40a8e0,
                Ae = m().abd845fe,
                Ue = m().a6ec7ff8,
                Ke = m().eeb6d22c,
                qe = ({ block: e, blockId: t, blockType: o, blocksQueryId: r, sectionId: l, sectionType: s, userQueryId: u }) => {
                    const [d, f] = n.useState(!1),
                        E = (0, a.b9)(p.j7),
                        k = (0, c.useHistory)(),
                        { loggedInUserId: _ } = (0, y.QZ)(),
                        C = n.useCallback(() => {
                            f(!1);
                        }, []),
                        g = n.useCallback(() => {
                            E(!0), k.goBack({ backLocation: "/settings/bio" });
                        }, [k, E]),
                        I = n.useCallback(
                            () =>
                                (() => {
                                    switch (
                                        ((e, t) => {
                                            if (e) return e;
                                            switch (t) {
                                                case h.NB.ABOUT:
                                                    return h.Mp.RICHTEXT;
                                                case h.NB.WORK_EXPERIENCE:
                                                    return h.Mp.WORK_HISTORY;
                                                default:
                                                    return null;
                                            }
                                        })(o, s)
                                    ) {
                                        case h.Mp.RICHTEXT:
                                            return _ ? n.createElement(J, { closeConfirm: C, content: e?.result?.content, onSave: g, showConfirmDelete: d }) : null;
                                        case h.Mp.WORK_HISTORY:
                                            return n.createElement(ze, { block: e });
                                        default:
                                            return null;
                                    }
                                })(),
                            [e, o, C, g, s, d, _],
                        ),
                        Z = n.useCallback(() => {
                            let e = "";
                            return o === h.Mp.RICHTEXT ? (e = Ue) : o === h.Mp.WORK_HISTORY && (e = Ke), n.createElement(i.ZP, { size: "headline2", style: Ve.modalHeader, weight: "bold" }, n.createElement(m().I18NFormatMessage, { $i18n: "a1b5887f", action: t ? Ae : Qe, type: e }));
                        }, [t, o]);
                    return o ? n.createElement(p.Fo.Provider, { value: { ...p.w, userId: _, userQueryId: u } }, n.createElement(p.bQ.Provider, { value: { ...p.Y_, sectionId: l, sectionType: s } }, n.createElement(p.Vo.Provider, { value: { ...p.dq, blockId: t, blocksQueryId: r } }, n.createElement(b.Z, { containerStyle: Ve.root, renderHeader: Z }, I())))) : null;
                },
                Ve = u.default.create((e) => ({ root: { height: "auto", backgroundColor: e.colors.cellBackground, zIndex: 4, maxWidth: "600px" }, modalHeader: { padding: e.spaces.space16 } })),
                Je = ({ block: e, blockId: t }) => {
                    const o = (0, c.useLocation)(),
                        r = s()(E.wJ, e),
                        a = r?.result?.core?.block_type;
                    if (!r || !a) return null;
                    const l = t ? r?.result?.id : o.state?.blocksQueryId;
                    return n.createElement(qe, { block: r, blockId: t, blockType: a, blocksQueryId: l });
                },
                Xe = ({ profileBlockId: e }) => {
                    const t = (0, k.p)(Fe, { blockId: e }),
                        o = t.viewer_v2.user_results.result.profile_block_results;
                    return t && o && e ? n.createElement(Je, { block: o, blockId: e }) : null;
                },
                $e = ({ blockType: e, sectionId: t, sectionType: o }) => {
                    const r = (0, k.p)(E.Bq, {}),
                        a = r?.viewer?.user_results?.result?.__id,
                        l = r?.viewer?.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results,
                        s = l?.find((e) => e?.result?.core?.section_type === o),
                        c = s?.result?.profile_blocks?.items_results?.[0]?.result?.rest_id?.block_id;
                    return s && o === h.NB.ABOUT && c ? n.createElement(Xe, { profileBlockId: c }) : r && a ? n.createElement(qe, { blockType: e, sectionId: t, sectionType: o, userQueryId: a }) : null;
                },
                Ge = { context: "EXTENDED_PROFILE_EDIT_BLOCK" },
                et = ({ location: e, match: t }) => {
                    const o = !!(0, c.matchPath)(e.pathname, { path: ["/settings/bio/new/:sectionId/:xprofileType", "/settings/bio/new/:xprofileType"], exact: !0 }),
                        { profileBlockId: r, profileSectionId: a, xprofileType: l } = t.params;
                    return n.createElement(f.H, { errorConfig: Ge }, o ? n.createElement(n.Fragment, null, l ? n.createElement($e, { blockType: h.P2[l] === h.NB.WORK_EXPERIENCE ? h.Mp.WORK_HISTORY : h.Mp.RICHTEXT, sectionId: a, sectionType: h.P2[l] }) : null) : n.createElement(Xe, { profileBlockId: r }));
                };
        },
        242470: (e, t, o) => {
            o.d(t, { Z: () => I });
            var r = o(202784),
                n = o(301503),
                a = o(614983),
                l = o.n(a),
                s = o(154003),
                c = o(674132),
                i = o.n(c),
                u = o(952793),
                d = o(72130),
                m = o(520385),
                p = o(725405),
                b = o(681488),
                y = (o(585488), o(351743)),
                f = o.n(y);
            const h = b.Z,
                E = () => {
                    const [e, t] = f()(h);
                    return [
                        r.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                };
            const k = o(163956).Z,
                _ = () => {
                    const [e, t] = f()(k);
                    return [
                        r.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                C = i().a9cc8f96,
                g = i().i2209530,
                I = ({ blockId: e, characterCount: t, disabled: o, editorState: a, onSave: c, queryId: i, sectionId: b, sectionType: y, setDirty: f, setError: h, setSaving: k, userId: I }) => {
                    const Z = (0, u.hC)("xprofile_work_history_enabled"),
                        x = (0, p.Z)(),
                        [v] = E(),
                        [T] = _(),
                        w = r.useCallback(() => {
                            k(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            x.scribe({ ...(0, d.MA)(t, "error", { version: Z ? 2 : 1 }) });
                        }, [x, e, Z, k]),
                        S = r.useCallback(() => {
                            f(!1), k(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            x.scribe({ ...(0, d.MA)(t, "success", { version: Z ? 2 : 1 }) }), c();
                        }, [x, e, Z, c, f, k]),
                        P = r.useCallback(() => {
                            const o = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    o = (0, n.convertToRaw)(t);
                                return JSON.stringify(o);
                            })(a);
                            if (!o) return;
                            if (t > m.j3) return void h(C);
                            k(!0);
                            const r = e ? "update_block_btn" : "save_block_btn";
                            x.scribe({ ...(0, d.MA)(r, "click", {}) }),
                                e && I
                                    ? T({
                                          variables: { richtextValue: o, blockId: e, userId: I },
                                          onCompleted: S,
                                          onError: w,
                                          updater: (e, t) => {
                                              if ((l()(i, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (Z) {
                                                      const t = e.get(`client:${i}:content`);
                                                      t && t.setValue(o, "value");
                                                  } else {
                                                      const t = e.get(i);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : I &&
                                      v(
                                          {
                                              variables: { richtextValue: o, userId: I, sectionId: b, sectionType: y },
                                              onCompleted: S,
                                              updater: (e, t) => {
                                                  if ((l()(i, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(i);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          i,
                                      );
                        }, [a, t, k, e, x, h, T, I, S, w, i, Z, v, b, y]);
                    return r.createElement(s.ZP, { disabled: o, onClick: P, size: "large", type: "brandFilled" }, g);
                };
        },
        600193: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(668214),
                n = o(919022);
            const a = (0, r.Z)()
                .propsFromState(() => ({ viewerUser: n.ZP.selectViewerUser }))
                .withAnalytics({ page: "settings", section: "extendedprofile" });
        },
        161030: (e, t, o) => {
            o.r(t), o.d(t, { default: () => T });
            var r = o(202784),
                n = o(400752),
                a = o(325686),
                l = o(107267),
                s = o(392237),
                c = o(718e3),
                i = o(991617),
                u = o(785813),
                d = o(825495),
                m = o(485822),
                p = o(164349),
                b = o(252021),
                y = o(736063),
                f = o(520385),
                h = o(462166),
                E = o(873302),
                k = o(312771),
                _ = o(482924),
                C = o(615027),
                g = o(600193);
            const I = ({ sections: e }) => {
                    const t = (0, E.uR)(e, f.NB.ABOUT),
                        o = (0, E.uR)(e, f.NB.WORK_EXPERIENCE),
                        n = (0, E.hW)(t),
                        l = (0, E.hW)(o);
                    return r.createElement(a.Z, { style: x.root }, r.createElement(i.bQ.Provider, { value: { ...i.Y_, hasAboutSection: n, hasWorkHistorySection: l, sectionId: t?.rest_id?.section_id, sectionType: f.NB.ABOUT, blockCount: t?.result?.profile_blocks?.total_count || 0, sectionQueryId: t?.id, sectionVisibility: t?.result?.core?.visibility } }, r.createElement(m.Z, { isEditing: !0, section: t })), r.createElement(i.bQ.Provider, { value: { ...i.Y_, hasAboutSection: n, hasWorkHistorySection: l, sectionId: o?.rest_id?.section_id, sectionType: f.NB.WORK_EXPERIENCE, blockCount: o?.result?.profile_blocks?.total_count || 0, sectionQueryId: o?.id, sectionVisibility: o?.result?.core?.visibility } }, r.createElement(p.Z, { isEditing: !0, section: o })));
                },
                Z = ({ history: e, location: t, viewerUser: o }) => {
                    const a = (0, n.Dv)(i.j7),
                        s = (0, n.b9)(i.j7),
                        { data: m, refetch: p, refetchStatus: y } = (0, _.A)(h.Bq, {}),
                        f = m.viewer.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results,
                        E = m.viewer.user_results.result.__id;
                    r.useEffect(() => {
                        a && p();
                    }, [a, p]),
                        r.useEffect(() => {
                            y !== k.ZP.LOADING && s(!1);
                        }, [y, s]);
                    const g = !!t.state?.addWorkExperience,
                        Z = t.state?.sectionId,
                        x = r.useCallback(() => {
                            const e = Z ? `/settings/bio/new/${Z}/work_experience` : "/settings/bio/new/work_experience";
                            return r.createElement(i.Fo.Provider, { value: { ...i.w, userId: o?.id_str, userQueryId: E } }, r.createElement(I, { sections: f }), g && r.createElement(l.Switch, null, r.createElement(l.Route, null, r.createElement(C.Z, { to: { pathname: e, state: { fromProfile: !0 } } }))));
                        }, [Z, f, g, E, o?.id_str]);
                    return m && o ? r.createElement(b.Z, { backLocation: `/${o.screen_name}/bio`, history: e, primaryContent: x(), rightControl: null, sidebarContent: r.createElement(c.Z, null), subtitle: `@${o.screen_name}`, title: (0, u.Z)(o), titleIconCell: (0, d.Z)(o) }) : null;
                },
                x = s.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                v = { context: "EXTENDED_PROFILE_SETTINGS_V2" },
                T = (0, g.Z)((e) => r.createElement(y.H, { errorConfig: v }, r.createElement(Z, e)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-63cb1cc4.38f61f4a.js.map
