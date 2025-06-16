"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-63cb1cc4"],
    {
        794057: (e, t, o) => {
            o.d(t, { C0: () => l, DC: () => r, _e: () => a, iN: () => i, kd: () => s, pc: () => n });
            const r = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                n = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                a = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                l = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                c = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                i = Object.freeze({ DRAFT: c.DRAFT, PUBLISHED: c.PUBLISHED });
        },
        482924: (e, t, o) => {
            o.d(t, { A: () => p });
            var r = o(202784),
                n = o(437429),
                a = o.n(n),
                l = o(57074),
                s = o.n(l),
                c = o(10622),
                i = o.n(c),
                d = o(71620),
                u = o(312771),
                m = o(535338);
            function p(e, t, o) {
                const n = s()(t),
                    l = s()(o),
                    c = a()(),
                    p = (0, d.po)(),
                    [b, E] = r.useState(null),
                    [y, f] = r.useState(!1),
                    _ = r.useCallback(() => {
                        y ||
                            (f(!0),
                            i()(c, e, n, { networkCacheConfig: l?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    f(!1);
                                },
                                error: (e) => {
                                    p(e), f(!1), E(e);
                                },
                            }));
                    }, [c, p, e, y, n, l]),
                    h = (0, m.p)(e, t, o);
                return r.useMemo(() => (b ? { data: h, refetch: _, refetchStatus: u.ZP.FAILED, refetchError: b } : { data: h, refetch: _, refetchStatus: y ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [h, b, y, _]);
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
                d = o(757700);
            const u = r.createElement(c.default, null),
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
                    return r.createElement(d.ZP, { clickMaskToClose: !0, history: e, modalSize: "dynamic", withBackground: !0 }, r.createElement(n.Z, null, r.createElement(a.ZP, { align: "center", size: "headline2", style: p.title, weight: "bold" }, "Add Block"), r.createElement(n.Z, { style: p.pivot }, r.createElement(l.Z, { label: c("Rich Text", u), link: i("richtext") })), r.createElement(n.Z, null, r.createElement(l.Z, { label: c("Work Experience", m), link: i("work_history") }))));
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
                d = o(392237),
                u = o(111677),
                m = o.n(u),
                p = o(991617),
                b = o(980407),
                E = o(443781),
                y = o(736063),
                f = o(520385),
                _ = o(462166),
                h = o(535338),
                k = o(807896),
                I = o(301503),
                C = o(325686),
                g = o(925873),
                T = o(386802),
                Z = o(989272),
                x = o(891198),
                v = o(977952),
                S = o(167630),
                R = o(297256),
                w = o(40610),
                P = o(751475),
                B = o(154003),
                M = o(908478),
                D = o(516951),
                O = o(187669),
                H = o(949626),
                L = o(381335),
                N = o(313433),
                W = o(874111),
                A = o(536790),
                j = o(952793),
                z = o(478414),
                F = o(339110),
                Y = o(725516),
                U = o(242470);
            const Q = m().c2333081,
                V = m().cfd2f35e,
                K = d.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, editorRoot: { maxHeight: "100%", overflow: "auto", justifyContent: "space-between", flex: 1 }, mobileRoot: { maxHeight: `calc(100vh - ${e.componentDimensions.appBarHeight})` }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, richtextRoot: { paddingBottom: e.spaces.space16 }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16, borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, zIndex: 3, backgroundColor: e.colors.navigationBackground }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                X = (0, Y.Z)(({ initialState: e = "", onSave: t }) => {
                    const { isModal: o } = n.useContext(T.Z),
                        { sectionId: r, sectionType: a } = (0, p.eF)(),
                        { blockId: l, blocksQueryId: s } = (0, p._L)(),
                        { userId: d, userQueryId: u } = (0, p.se)(),
                        m = (0, j.hC)("xprofile_emojis_enabled"),
                        b = (0, c.useHistory)(),
                        [E, y] = n.useState(""),
                        [_, h] = n.useState(
                            ((e) => {
                                const t = g.Z.getContentStateFromRaw(e),
                                    o = g.Z.initEditorState(t);
                                return g.Z.convertEmojiToEntities(o);
                            })(e),
                        ),
                        [k, Y] = n.useState(!1),
                        [X, q] = n.useState(!1),
                        J = n.useCallback((e, t) => X && !k, [X, k]),
                        $ = n.useCallback(() => {
                            b.goBack({ backLocation: "/settings/bio" });
                        }, [b]),
                        G = n.useCallback(() => {
                            q(!1), Y(!1);
                        }, []);
                    (0, O.q)(() => {
                        (0, Z.fH)((0, z.yW)(z.Hx, z.K), z.Hx);
                    });
                    const ee = (0, W.c6)(_);
                    let te = ee;
                    ee > 1 && (te = x.ZP.getFormattedCount(ee));
                    const oe = n.useMemo(() => _?.getCurrentContent()?.hasText(), [_]),
                        re = n.useCallback(
                            (e) => {
                                const t = g.Z.convertMentionsToEntities(g.Z.convertEmojiToEntities(e));
                                X || (0, M.Z)((0, I.convertToRaw)(t.getCurrentContent()), (0, I.convertToRaw)(_.getCurrentContent())) || q(!0), h(t);
                            },
                            [_, X],
                        ),
                        ne = n.useMemo(() => ({ editorState: _, element: v.Z, stripPastedStyles: !0 }), [_]),
                        ae = n.useMemo(() => {
                            if (k) return n.createElement(C.Z, { style: K.flexRow }, n.createElement(S.Z, { size: "small" }), n.createElement(i.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!f.j3 && ee > f.j3;
                            return n.createElement(C.Z, null, n.createElement(i.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: K.textCountLabel }, Q({ count: te })));
                        }, [ee, te, k]),
                        le = n.useMemo(() => [K.stickyButton, K.flexRow, K.v2Button], []),
                        se = n.useCallback(() => (m ? n.createElement(N.Z, { editorState: _, onChange: re }) : null), [_, m, re]),
                        ce = n.useCallback(
                            () => (e) =>
                                n.createElement(R.b, {
                                    emojiPickerButton: se,
                                    inputStyle: K.root,
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
                    return n.createElement(C.Z, { style: { ...K.editorRoot, ...(o ? {} : K.mobileRoot) } }, E ? n.createElement(C.Z, { style: K.error }, n.createElement(w.Z.Danger, { text: E, withIcon: !0 })) : null, n.createElement(P.Z, { fallbackBackPath: "/", history: b, onNavigation: G, shouldBlockNavigation: J, shouldBlockUnload: X }, n.createElement(H.Z, { className: z.Hx, style: { ...K.richtextRoot } }, n.createElement(A.Z, { contextText: (0, W.iT)(_), isInline: !0, onTextUpdated: re, onTypeaheadStateChange: D.Z, source: F._4.LongformComposer }, ce()))), n.createElement(C.Z, { style: le }, n.createElement(L.Z, { onCompleted: $, useIconButton: !1 }), n.createElement(C.Z, { style: K.flexRow }, n.createElement(B.ZP, { onClick: $, size: "large", type: "primaryFilled" }, V), n.createElement(U.Z, { blockId: l, characterCount: ee, disabled: k || !X || !oe || ee > f.j3, editorState: _, onSave: t, queryId: s || u, sectionId: r, sectionType: a, setDirty: q, setError: y, setSaving: Y, userId: d }))));
                }),
                q = ({ content: e, ...t }) => {
                    const o = s()(_.GL, e) ?? null;
                    return n.createElement(X, (0, k.Z)({ initialState: o?.value || null }, t));
                };
            var J = o(855488),
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
                de = o.n(ie);
            const ue = le.Z,
                me = () => {
                    const [e, t] = de()(ue);
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
                    const [e, t] = de()(pe);
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
                Ee = "WorkHistory_StartMonth_Selector",
                ye = "WorkHistory_StartYear_Selector",
                fe = "WorkHistory_EndMonth_Selector",
                _e = "WorkHistory_EndYear_Selector",
                he = new Date().getFullYear(),
                ke = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                Ie = { jobTitle: "", companyProfileId: null, companyProfileName: null, companyProfileLogoUrl: null, location: {}, isCurrentJob: !1, startMonth: 0, startYear: he, endMonth: 0, endYear: he, description: null },
                Ce = m().hd332c96,
                ge = m().d2fb1b80,
                Te = m().b3590132,
                Ze = m().debb6abe,
                xe = m().j7d08ada,
                ve = m().a8c7d3fc,
                Se = m().b335d507,
                Re = (e, t) => {
                    const { active_role: o, company_profile_name: r, company_profile_results: n, description: a, end_month: l, end_year: s, location_text: c, start_month: i, start_year: d, structured_location: u, title: m } = e || {};
                    return t ? { ...Ie, jobTitle: m, companyProfileId: n?.result?.rest_id, companyProfileName: n?.result?.core?.name || r, companyProfileLogoUrl: n?.result?.logo?.normal_url || (r ? ke : null), location: { name: c || "", id: u?.rest_id }, isCurrentJob: o, startMonth: i, startYear: d, endMonth: l, endYear: s, description: a } : Ie;
                },
                we = (e, t) => (e && t ? new Date(t, e - 1) : null),
                Pe = (e) => {
                    let t = !0;
                    const o = {};
                    e.jobTitle || ((o.jobTitle = Ce), (t = !1)), e.companyProfileId || e.companyProfileName || ((o.companyProfileName = ge), (t = !1));
                    const r = ((e, t, o, r, n) => {
                        const a = we(e, t),
                            l = n ? new Date() : we(o, r),
                            s = new Date();
                        return a && l ? (a > s ? Ze : l > s ? xe : a > l ? ve : "") : Te;
                    })(e.startMonth, e.startYear, e.endMonth, e.endYear, !!e.isCurrentJob);
                    if ((r && ((o.startMonth = r), (t = !1)), e.description)) {
                        const r = g.Z.getContentStateFromRaw(e.description),
                            n = r ? g.Z.initEditorState(r) : null;
                        n && g.Z.getCharacterCount(n) > 750 && ((o.description = Se({ maxChars: 750 })), (t = !1));
                    }
                    return { isValid: t, errors: o };
                },
                Be = (e) => {
                    const { companyProfileId: t, companyProfileLogoUrl: o, companyProfileName: r } = e;
                    return r ? { id: t || "-1", name: r, type: "company_profile", data: { logoUrl: o || ke, query: "" } } : null;
                },
                Me = m().eba5a8ec,
                De = m().fd20adb8,
                Oe = m().cd3059f2,
                He = m().b86019ae,
                Le = m().e36287c6,
                Ne = m().cfd2f35e,
                We = m().i2209530,
                Ae = ({ initialForm: e }) => {
                    const t = (0, ae.Z)(),
                        { isModal: o } = n.useContext(T.Z),
                        r = (0, a.b9)(p.j7),
                        { sectionId: l } = (0, p.eF)(),
                        { blockId: s, blocksQueryId: d } = (0, p._L)(),
                        { userId: u, userQueryId: m } = (0, p.se)(),
                        b = (0, c.useHistory)(),
                        E = (0, c.useLocation)(),
                        [y, _] = n.useState(Be(e)),
                        [h, k] = n.useState(e),
                        [g, Z] = n.useState(null),
                        [x] = me(),
                        [v] = be(),
                        S = (e, t) => {
                            k((o) => ({ ...o, [e]: t }));
                        },
                        R = (e) => {
                            k((t) => ({ ...t, ...e }));
                        },
                        w = n.useCallback(() => {
                            E.state?.fromProfile ? b.replace({ pathname: "/settings/bio", state: {} }) : b.goBack({ backLocation: "/settings/bio" });
                        }, [b, E]),
                        P = n.useCallback((e) => {
                            R(e), _(Be(e));
                        }, []),
                        M = (e) => {
                            Z((t) => ({ ...t, [e]: "" }));
                        },
                        O = n.useCallback(() => {
                            const e = s ? "update_block_btn" : "save_block_btn",
                                o = () => {
                                    t.scribe({ ...(0, ne.Ak)(e, "success") }), r(!0), E.state?.fromProfile ? b.replace({ pathname: "/settings/bio", state: {} }) : b.goBack({ backLocation: "/settings/bio" });
                                },
                                n = () => {
                                    t.scribe({ ...(0, ne.Ak)(e, "error") });
                                };
                            t.scribe({ ...(0, ne.Ak)(e, "click") });
                            const a = ((e) => {
                                const { companyProfileId: t, companyProfileName: o, description: r, endMonth: n, endYear: a, isCurrentJob: l, jobTitle: s, location: c, startMonth: i, startYear: d } = e;
                                return { active_role: l, company_profile: t || null, company_profile_name: o, description: r, end_month: n, end_year: a, location_text: c?.id ? c?.name : c?.value, start_month: i, start_year: d, structured_location: c?.id, title: s };
                            })(h);
                            s ? v({ variables: { data: a, blockId: s }, onCompleted: o, onError: n }, d) : u && x({ variables: { data: a, sectionId: l, userId: u, sectionType: l ? null : f.Mp.WORK_HISTORY }, onCompleted: o, onError: n }, m);
                        }, [t, s, d, x, h, b, E.state?.fromProfile, l, r, v, u, m]),
                        N = n.useCallback(() => {
                            r(!0), b.goBack({ backLocation: "/settings/bio" });
                        }, [b, r]),
                        W = n.useCallback(() => {
                            const { errors: e, isValid: t } = Pe(h);
                            t ? O() : Z(e);
                        }, [h, O]);
                    return n.createElement(
                        C.Z,
                        { style: { ...je.editorRoot, ...(o ? {} : je.mobileRoot) } },
                        n.createElement(
                            C.Z,
                            { style: je.formRoot },
                            n.createElement(J.Z, {
                                errorText: g?.jobTitle,
                                invalid: !!g?.jobTitle,
                                label: Me,
                                name: "job_title",
                                onChange: (e) => {
                                    M("jobTitle"), S("jobTitle", e.target.value);
                                },
                                testID: "job-title-input",
                                type: "text",
                                value: h.jobTitle || "",
                            }),
                            n.createElement(
                                C.Z,
                                { style: [je.inputContainer, { zIndex: 5 }] },
                                n.createElement(ee.Z, {
                                    errorText: g?.companyProfileName,
                                    onChange: (e) => {
                                        M("companyProfileName"), R({ companyProfileId: null, companyProfileName: e });
                                    },
                                    onEnter: D.Z,
                                    onSelect: (e, t, o) => P({ companyProfileId: e, companyProfileName: t, companyProfileLogoUrl: o }),
                                    selectedValue: y,
                                    value: h.companyProfileName || "",
                                }),
                            ),
                            n.createElement(C.Z, { style: [je.inputContainer, { zIndex: 4 }] }, n.createElement(oe.Z, { onChange: (e) => S("location", e), onEnter: D.Z, onSelect: (e) => S("location", e), value: h.location?.name || h.location?.value || "" })),
                            n.createElement(C.Z, { style: je.inputContainer }, n.createElement(C.Z, { style: je.checkbox }, n.createElement($.Z, { checked: !!h.isCurrentJob, onChange: (e) => S("isCurrentJob", e) }), n.createElement(i.ZP, null, De))),
                            n.createElement(
                                C.Z,
                                { style: je.inputContainer },
                                n.createElement(i.ZP, { weight: "bold" }, Oe),
                                n.createElement(G.Z, {
                                    errors: { month: !!g?.startMonth, year: !!g?.startMonth },
                                    hideDay: !0,
                                    label: Oe,
                                    minSelectableYear: (0, re.Q)(),
                                    month: h.startMonth || 0,
                                    monthSelectorTestID: Ee,
                                    onChange: (e) => {
                                        M("startMonth"), R({ startMonth: e.month || 0, startYear: e.year || 2024 });
                                    },
                                    year: h.startYear || he,
                                    yearSelectorTestID: ye,
                                }),
                            ),
                            n.createElement(
                                C.Z,
                                { style: je.inputContainer },
                                n.createElement(i.ZP, { weight: "bold" }, He),
                                n.createElement(G.Z, {
                                    disabled: !!h.isCurrentJob,
                                    errors: { month: !!g?.startMonth, year: !!g?.startMonth },
                                    hideDay: !0,
                                    label: He,
                                    minSelectableYear: (0, re.Q)(),
                                    month: h.endMonth || 0,
                                    monthSelectorTestID: fe,
                                    onChange: (e) => {
                                        M("startMonth"), R({ endMonth: e.month || 0, endYear: e.year || 2024 });
                                    },
                                    year: h.endYear || he,
                                    yearSelectorTestID: _e,
                                }),
                                g?.startMonth ? n.createElement(i.ZP, { color: "red500", size: "subtext2", style: je.dateError }, g.startMonth) : null,
                            ),
                            n.createElement(
                                C.Z,
                                { style: je.inputContainer },
                                n.createElement(i.ZP, { size: "body", style: je.label, weight: "bold" }, Le),
                                n.createElement(
                                    H.Z,
                                    { className: z.Hx },
                                    n.createElement(te.Z, {
                                        characterLimit: 750,
                                        editorClass: z.Hx,
                                        editorStyles: (0, z.yW)(z.Hx, z.K),
                                        initialState: h.description,
                                        limitedRichText: !0,
                                        numberOfLines: 5,
                                        onChange: (e) =>
                                            S(
                                                "description",
                                                ((e) => {
                                                    if (!e) return;
                                                    const t = e.getCurrentContent(),
                                                        o = (0, I.convertToRaw)(t);
                                                    return JSON.stringify(o);
                                                })(e),
                                            ),
                                        textSizesOverride: (0, z.bb)(z.K),
                                    }),
                                ),
                                g?.description ? n.createElement(i.ZP, { color: "red500", size: "subtext2", style: je.dateError }, g.description) : null,
                            ),
                        ),
                        n.createElement(C.Z, { style: [je.stickyButton, je.flexRow] }, n.createElement(L.Z, { onCompleted: N, useIconButton: !1 }), n.createElement(C.Z, { style: je.flexRow }, n.createElement(B.ZP, { onClick: w, size: "large", type: "primaryFilled" }, Ne), n.createElement(B.ZP, { disabled: !1, onClick: W, size: "large", type: "brandFilled" }, We))),
                    );
                },
                je = d.default.create((e) => ({ checkbox: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, editorRoot: { maxHeight: "100%", overflow: "auto", justifyContent: "space-between", flex: 1, zIndex: 4 }, mobileRoot: { maxHeight: `calc(100vh - ${e.componentDimensions.appBarHeight})` }, formRoot: { flex: 1, overflow: "auto" }, inputContainer: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16, justifyContent: "space-between", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor }, dateError: { marginTop: `-${e.spaces.space12}`, paddingHorizontal: e.spaces.space8 }, label: { marginBottom: e.spaces.space16 } })),
                ze = ({ block: e }) => {
                    const { blockId: t } = (0, p._L)(),
                        o = s()(_.lw, e?.result?.content) ?? null;
                    return t && !o ? null : n.createElement(Ae, { initialForm: Re(o, t) });
                },
                Fe = r.Z,
                Ye = m().af40a8e0,
                Ue = m().abd845fe,
                Qe = m().a6ec7ff8,
                Ve = m().eeb6d22c,
                Ke = ({ block: e, blockId: t, blockType: o, blocksQueryId: r, sectionId: l, sectionType: s, userQueryId: d }) => {
                    const [u, y] = n.useState(!1),
                        _ = (0, a.b9)(p.j7),
                        h = (0, c.useHistory)(),
                        { loggedInUserId: k } = (0, E.QZ)(),
                        I = n.useCallback(() => {
                            y(!1);
                        }, []),
                        C = n.useCallback(() => {
                            _(!0), h.goBack({ backLocation: "/settings/bio" });
                        }, [h, _]),
                        g = n.useCallback(
                            () =>
                                (() => {
                                    switch (
                                        ((e, t) => {
                                            if (e) return e;
                                            switch (t) {
                                                case f.NB.ABOUT:
                                                    return f.Mp.RICHTEXT;
                                                case f.NB.WORK_EXPERIENCE:
                                                    return f.Mp.WORK_HISTORY;
                                                default:
                                                    return null;
                                            }
                                        })(o, s)
                                    ) {
                                        case f.Mp.RICHTEXT:
                                            return k ? n.createElement(q, { closeConfirm: I, content: e?.result?.content, onSave: C, showConfirmDelete: u }) : null;
                                        case f.Mp.WORK_HISTORY:
                                            return n.createElement(ze, { block: e });
                                        default:
                                            return null;
                                    }
                                })(),
                            [e, o, I, C, s, u, k],
                        ),
                        T = n.useCallback(() => {
                            let e = "";
                            return o === f.Mp.RICHTEXT ? (e = Qe) : o === f.Mp.WORK_HISTORY && (e = Ve), n.createElement(i.ZP, { size: "headline2", style: Xe.modalHeader, weight: "bold" }, n.createElement(m().I18NFormatMessage, { $i18n: "a1b5887f", action: t ? Ue : Ye, type: e }));
                        }, [t, o]);
                    return o ? n.createElement(p.Fo.Provider, { value: { ...p.w, userId: k, userQueryId: d } }, n.createElement(p.bQ.Provider, { value: { ...p.Y_, sectionId: l, sectionType: s } }, n.createElement(p.Vo.Provider, { value: { ...p.dq, blockId: t, blocksQueryId: r } }, n.createElement(b.Z, { containerStyle: Xe.root, renderHeader: T }, g())))) : null;
                },
                Xe = d.default.create((e) => ({ root: { height: "auto", backgroundColor: e.colors.cellBackground, zIndex: 4, maxWidth: "600px" }, modalHeader: { padding: e.spaces.space16 } })),
                qe = ({ block: e, blockId: t }) => {
                    const o = (0, c.useLocation)(),
                        r = s()(_.wJ, e),
                        a = r?.result?.core?.block_type;
                    if (!r || !a) return null;
                    const l = t ? r?.result?.id : o.state?.blocksQueryId;
                    return n.createElement(Ke, { block: r, blockId: t, blockType: a, blocksQueryId: l });
                },
                Je = ({ profileBlockId: e }) => {
                    const t = (0, h.p)(Fe, { blockId: e }),
                        o = t.viewer_v2.user_results.result.profile_block_results;
                    return t && o && e ? n.createElement(qe, { block: o, blockId: e }) : null;
                },
                $e = ({ blockType: e, sectionId: t, sectionType: o }) => {
                    const r = (0, h.p)(_.Bq, {}),
                        a = r?.viewer?.user_results?.result?.__id,
                        l = r?.viewer?.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results,
                        s = l?.find((e) => e?.result?.core?.section_type === o),
                        c = s?.result?.profile_blocks?.items_results?.[0]?.result?.rest_id?.block_id;
                    return s && o === f.NB.ABOUT && c ? n.createElement(Je, { profileBlockId: c }) : r && a ? n.createElement(Ke, { blockType: e, sectionId: t, sectionType: o, userQueryId: a }) : null;
                },
                Ge = { context: "EXTENDED_PROFILE_EDIT_BLOCK" },
                et = ({ location: e, match: t }) => {
                    const o = !!(0, c.matchPath)(e.pathname, { path: ["/settings/bio/new/:sectionId/:xprofileType", "/settings/bio/new/:xprofileType"], exact: !0 }),
                        { profileBlockId: r, profileSectionId: a, xprofileType: l } = t.params;
                    return n.createElement(y.H, { errorConfig: Ge }, o ? n.createElement(n.Fragment, null, l ? n.createElement($e, { blockType: f.P2[l] === f.NB.WORK_EXPERIENCE ? f.Mp.WORK_HISTORY : f.Mp.RICHTEXT, sectionId: a, sectionType: f.P2[l] }) : null) : n.createElement(Je, { profileBlockId: r }));
                };
        },
        242470: (e, t, o) => {
            o.d(t, { Z: () => g });
            var r = o(202784),
                n = o(301503),
                a = o(614983),
                l = o.n(a),
                s = o(154003),
                c = o(111677),
                i = o.n(c),
                d = o(952793),
                u = o(72130),
                m = o(520385),
                p = o(725405),
                b = o(681488),
                E = (o(585488), o(351743)),
                y = o.n(E);
            const f = b.Z,
                _ = () => {
                    const [e, t] = y()(f);
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
            const h = o(163956).Z,
                k = () => {
                    const [e, t] = y()(h);
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
                I = i().a9cc8f96,
                C = i().i2209530,
                g = ({ blockId: e, characterCount: t, disabled: o, editorState: a, onSave: c, queryId: i, sectionId: b, sectionType: E, setDirty: y, setError: f, setSaving: h, userId: g }) => {
                    const T = (0, d.hC)("xprofile_work_history_enabled"),
                        Z = (0, p.Z)(),
                        [x] = _(),
                        [v] = k(),
                        S = r.useCallback(() => {
                            h(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            Z.scribe({ ...(0, u.MA)(t, "error", { version: T ? 2 : 1 }) });
                        }, [Z, e, T, h]),
                        R = r.useCallback(() => {
                            y(!1), h(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            Z.scribe({ ...(0, u.MA)(t, "success", { version: T ? 2 : 1 }) }), c();
                        }, [Z, e, T, c, y, h]),
                        w = r.useCallback(() => {
                            const o = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    o = (0, n.convertToRaw)(t);
                                return JSON.stringify(o);
                            })(a);
                            if (!o) return;
                            if (t > m.j3) return void f(I);
                            h(!0);
                            const r = e ? "update_block_btn" : "save_block_btn";
                            Z.scribe({ ...(0, u.MA)(r, "click", {}) }),
                                e && g
                                    ? v({
                                          variables: { richtextValue: o, blockId: e, userId: g },
                                          onCompleted: R,
                                          onError: S,
                                          updater: (e, t) => {
                                              if ((l()(i, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (T) {
                                                      const t = e.get(`client:${i}:content`);
                                                      t && t.setValue(o, "value");
                                                  } else {
                                                      const t = e.get(i);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : g &&
                                      x(
                                          {
                                              variables: { richtextValue: o, userId: g, sectionId: b, sectionType: E },
                                              onCompleted: R,
                                              updater: (e, t) => {
                                                  if ((l()(i, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(i);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          i,
                                      );
                        }, [a, t, h, e, Z, f, v, g, R, S, i, T, x, b, E]);
                    return r.createElement(s.ZP, { disabled: o, onClick: w, size: "large", type: "brandFilled" }, C);
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
            o.r(t), o.d(t, { default: () => v });
            var r = o(202784),
                n = o(400752),
                a = o(325686),
                l = o(107267),
                s = o(392237),
                c = o(718e3),
                i = o(991617),
                d = o(785813),
                u = o(825495),
                m = o(485822),
                p = o(164349),
                b = o(252021),
                E = o(736063),
                y = o(520385),
                f = o(462166),
                _ = o(873302),
                h = o(312771),
                k = o(482924),
                I = o(615027),
                C = o(600193);
            const g = ({ sections: e }) => {
                    const t = (0, _.uR)(e, y.NB.ABOUT),
                        o = (0, _.uR)(e, y.NB.WORK_EXPERIENCE),
                        n = (0, _.hW)(t),
                        l = (0, _.hW)(o);
                    return r.createElement(a.Z, { style: Z.root }, r.createElement(i.bQ.Provider, { value: { ...i.Y_, hasAboutSection: n, hasWorkHistorySection: l, sectionId: t?.rest_id?.section_id, sectionType: y.NB.ABOUT, blockCount: t?.result?.profile_blocks?.total_count || 0, sectionQueryId: t?.id, sectionVisibility: t?.result?.core?.visibility } }, r.createElement(m.Z, { isEditing: !0, section: t })), r.createElement(i.bQ.Provider, { value: { ...i.Y_, hasAboutSection: n, hasWorkHistorySection: l, sectionId: o?.rest_id?.section_id, sectionType: y.NB.WORK_EXPERIENCE, blockCount: o?.result?.profile_blocks?.total_count || 0, sectionQueryId: o?.id, sectionVisibility: o?.result?.core?.visibility } }, r.createElement(p.Z, { isEditing: !0, section: o })));
                },
                T = ({ history: e, location: t, viewerUser: o }) => {
                    const a = (0, n.Dv)(i.j7),
                        s = (0, n.b9)(i.j7),
                        { data: m, refetch: p, refetchStatus: E } = (0, k.A)(f.Bq, {}),
                        y = m.viewer.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results,
                        _ = m.viewer.user_results.result.__id;
                    r.useEffect(() => {
                        a && p();
                    }, [a, p]),
                        r.useEffect(() => {
                            E !== h.ZP.LOADING && s(!1);
                        }, [E, s]);
                    const C = !!t.state?.addWorkExperience,
                        T = t.state?.sectionId,
                        Z = r.useCallback(() => {
                            const e = T ? `/settings/bio/new/${T}/work_experience` : "/settings/bio/new/work_experience";
                            return r.createElement(i.Fo.Provider, { value: { ...i.w, userId: o?.id_str, userQueryId: _ } }, r.createElement(g, { sections: y }), C && r.createElement(l.Switch, null, r.createElement(l.Route, null, r.createElement(I.Z, { to: { pathname: e, state: { fromProfile: !0 } } }))));
                        }, [T, y, C, _, o?.id_str]);
                    return m && o ? r.createElement(b.Z, { backLocation: `/${o.screen_name}/bio`, history: e, primaryContent: Z(), rightControl: null, sidebarContent: r.createElement(c.Z, null), subtitle: `@${o.screen_name}`, title: (0, d.Z)(o), titleIconCell: (0, u.Z)(o) }) : null;
                },
                Z = s.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                x = { context: "EXTENDED_PROFILE_SETTINGS_V2" },
                v = (0, C.Z)((e) => r.createElement(E.H, { errorConfig: x }, r.createElement(T, e)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-63cb1cc4.e4b1a00a.js.map
