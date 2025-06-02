"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-8ed0fac5"],
    {
        873302: (e, t, o) => {
            o.d(t, { HM: () => b, Kh: () => m, ZU: () => d, hW: () => E, s1: () => p, uR: () => f });
            var r = o(990242),
                n = o.n(r),
                l = o(111677),
                a = o.n(l),
                s = o(520385),
                c = o(462166);
            const i = a().eb7710f1,
                u = a().bfc38bb5,
                d = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const o = e?.filter((e) => e);
                    return o
                        ? o.map((e) => {
                              const o = { ...e },
                                  r = n()(c.wJ, o),
                                  l = n()(t, r.result?.content);
                              return { __id: o.__id, id: o.id, rest_id: o.rest_id, result: { ...r.result, content: l } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const o = e.result?.content,
                                r = t.result?.content,
                                n = (o?.active_role ? new Date() : d(o?.end_month, o?.end_year)) ?? new Date(0),
                                l = (r?.active_role ? new Date() : d(r?.end_month, r?.end_year)) ?? new Date(0);
                            if (n.getFullYear() !== l.getFullYear()) return l.getFullYear() - n.getFullYear();
                            if (n.getMonth() !== l.getMonth()) return l.getMonth() - n.getMonth();
                            const a = d(o?.start_month, o?.start_year) ?? new Date(0),
                                s = d(r?.start_month, r?.start_year) ?? new Date(0);
                            return a.getFullYear() !== s.getFullYear() ? s.getFullYear() - a.getFullYear() : s.getMonth() - a.getMonth();
                        });
                },
                b = (e, t) => {
                    let o = t.getMonth() - e.getMonth() + 1,
                        r = t.getFullYear() - e.getFullYear();
                    return o < 0 && (r--, (o += 12)), r && o ? `${i({ years: r })} ${u({ months: o })}` : r ? i({ years: r }) : o ? u({ months: o }) : "";
                },
                f = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === s.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === s.Mp.RICHTEXT)) : void 0),
                E = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        794057: (e, t, o) => {
            o.d(t, { C0: () => a, DC: () => r, _e: () => l, iN: () => i, kd: () => s, pc: () => n });
            const r = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                n = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                l = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                a = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                c = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                i = Object.freeze({ DRAFT: c.DRAFT, PUBLISHED: c.PUBLISHED });
        },
        482924: (e, t, o) => {
            o.d(t, { A: () => p });
            var r = o(202784),
                n = o(437429),
                l = o.n(n),
                a = o(57074),
                s = o.n(a),
                c = o(10622),
                i = o.n(c),
                u = o(71620),
                d = o(312771),
                m = o(535338);
            function p(e, t, o) {
                const n = s()(t),
                    a = s()(o),
                    c = l()(),
                    p = (0, u.po)(),
                    [b, f] = r.useState(null),
                    [E, y] = r.useState(!1),
                    _ = r.useCallback(() => {
                        E ||
                            (y(!0),
                            i()(c, e, n, { networkCacheConfig: a?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    y(!1);
                                },
                                error: (e) => {
                                    p(e), y(!1), f(e);
                                },
                            }));
                    }, [c, p, e, E, n, a]),
                    h = (0, m.p)(e, t, o);
                return r.useMemo(() => (b ? { data: h, refetch: _, refetchStatus: d.ZP.FAILED, refetchError: b } : { data: h, refetch: _, refetchStatus: E ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [h, b, E, _]);
            }
        },
        154283: (e, t, o) => {
            o.r(t), o.d(t, { default: () => b });
            var r = o(202784),
                n = o(325686),
                l = o(731708),
                a = o(779610),
                s = o(392237),
                c = o(394123),
                i = o(720930),
                u = o(757700);
            const d = r.createElement(c.default, null),
                m = r.createElement(i.default, null),
                p = s.default.create((e) => ({ title: { padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, pivot: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, pivotItem: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.text } })),
                b = ({ history: e, location: t, match: o }) => {
                    const s = r.useMemo(() => o.params.profileSectionId, [o]),
                        c = r.useCallback((e, t) => r.createElement(n.Z, { style: p.pivotItem }, t, r.createElement(l.ZP, null, e)), []),
                        i = r.useCallback(
                            (e) => {
                                if (s) return { pathname: `/settings/bio/new/${s}/${e}`, method: "replace", state: t.state };
                            },
                            [t.state, s],
                        );
                    return r.createElement(u.ZP, { clickMaskToClose: !0, history: e, modalSize: "dynamic", withBackground: !0 }, r.createElement(n.Z, null, r.createElement(l.ZP, { align: "center", size: "headline2", style: p.title, weight: "bold" }, "Add Block"), r.createElement(n.Z, { style: p.pivot }, r.createElement(a.Z, { label: c("Rich Text", d), link: i("richtext") })), r.createElement(n.Z, null, r.createElement(a.Z, { label: c("Work Experience", m), link: i("work_history") }))));
                };
        },
        449059: (e, t, o) => {
            o.r(t), o.d(t, { default: () => et });
            var r = o(948632),
                n = o(202784),
                l = o(400752),
                a = (o(585488), o(990242)),
                s = o.n(a),
                c = o(107267),
                i = o(731708),
                u = o(392237),
                d = o(111677),
                m = o.n(d),
                p = o(991617),
                b = o(980407),
                f = o(443781),
                E = o(736063),
                y = o(520385),
                _ = o(462166),
                h = o(535338),
                k = o(807896),
                g = o(301503),
                I = o(325686),
                C = o(925873),
                T = o(386802),
                Z = o(989272),
                v = o(891198),
                x = o(977952),
                w = o(167630),
                R = o(297256),
                S = o(40610),
                P = o(751475),
                M = o(154003),
                B = o(908478),
                D = o(516951),
                O = o(187669),
                H = o(949626),
                L = o(381335),
                N = o(313433),
                W = o(874111),
                A = o(536790),
                F = o(952793),
                j = o(478414),
                Y = o(339110),
                z = o(725516),
                U = o(242470);
            const Q = m().c2333081,
                K = m().cfd2f35e,
                V = u.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, editorRoot: { maxHeight: "100%", overflow: "auto", justifyContent: "space-between", flex: 1 }, mobileRoot: { maxHeight: `calc(100vh - ${e.componentDimensions.appBarHeight})` }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, richtextRoot: { paddingBottom: e.spaces.space16 }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16, borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, zIndex: 3, backgroundColor: e.colors.navigationBackground }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                X = (0, z.Z)(({ initialState: e = "", onSave: t }) => {
                    const { isModal: o } = n.useContext(T.Z),
                        { sectionId: r, sectionType: l } = (0, p.eF)(),
                        { blockId: a, blocksQueryId: s } = (0, p._L)(),
                        { userId: u, userQueryId: d } = (0, p.se)(),
                        m = (0, F.hC)("xprofile_emojis_enabled"),
                        b = (0, c.useHistory)(),
                        [f, E] = n.useState(""),
                        [_, h] = n.useState(
                            ((e) => {
                                const t = C.Z.getContentStateFromRaw(e),
                                    o = C.Z.initEditorState(t);
                                return C.Z.convertEmojiToEntities(o);
                            })(e),
                        ),
                        [k, z] = n.useState(!1),
                        [X, $] = n.useState(!1),
                        q = n.useCallback((e, t) => X && !k, [X, k]),
                        J = n.useCallback(() => {
                            b.goBack({ backLocation: "/settings/bio" });
                        }, [b]),
                        G = n.useCallback(() => {
                            $(!1), z(!1);
                        }, []);
                    (0, O.q)(() => {
                        (0, Z.fH)((0, j.yW)(j.Hx, j.K), j.Hx);
                    });
                    const ee = (0, W.c6)(_);
                    let te = ee;
                    ee > 1 && (te = v.ZP.getFormattedCount(ee));
                    const oe = n.useMemo(() => _?.getCurrentContent()?.hasText(), [_]),
                        re = n.useCallback(
                            (e) => {
                                const t = C.Z.convertMentionsToEntities(C.Z.convertEmojiToEntities(e));
                                X || (0, B.Z)((0, g.convertToRaw)(t.getCurrentContent()), (0, g.convertToRaw)(_.getCurrentContent())) || $(!0), h(t);
                            },
                            [_, X],
                        ),
                        ne = n.useMemo(() => ({ editorState: _, element: x.Z, stripPastedStyles: !0 }), [_]),
                        le = n.useMemo(() => {
                            if (k) return n.createElement(I.Z, { style: V.flexRow }, n.createElement(w.Z, { size: "small" }), n.createElement(i.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!y.j3 && ee > y.j3;
                            return n.createElement(I.Z, null, n.createElement(i.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: V.textCountLabel }, Q({ count: te })));
                        }, [ee, te, k]),
                        ae = n.useMemo(() => [V.stickyButton, V.flexRow, V.v2Button], []),
                        se = n.useCallback(() => (m ? n.createElement(N.Z, { editorState: _, onChange: re }) : null), [_, m, re]),
                        ce = n.useCallback(
                            () => (e) =>
                                n.createElement(R.b, {
                                    emojiPickerButton: se,
                                    inputStyle: V.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), re(t);
                                    },
                                    richTextInputContext: ne,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, j.bb)(j.K),
                                    toolbarRightControl: le,
                                }),
                            [re, se, ne, le],
                        );
                    return n.createElement(I.Z, { style: { ...V.editorRoot, ...(o ? {} : V.mobileRoot) } }, f ? n.createElement(I.Z, { style: V.error }, n.createElement(S.Z.Danger, { text: f, withIcon: !0 })) : null, n.createElement(P.Z, { fallbackBackPath: "/", history: b, onNavigation: G, shouldBlockNavigation: q, shouldBlockUnload: X }, n.createElement(H.Z, { className: j.Hx, style: { ...V.richtextRoot } }, n.createElement(A.Z, { contextText: (0, W.iT)(_), isInline: !0, onTextUpdated: re, onTypeaheadStateChange: D.Z, source: Y._4.LongformComposer }, ce()))), n.createElement(I.Z, { style: ae }, n.createElement(L.Z, { onCompleted: J, useIconButton: !1 }), n.createElement(I.Z, { style: V.flexRow }, n.createElement(M.ZP, { onClick: J, size: "large", type: "primaryFilled" }, K), n.createElement(U.Z, { blockId: a, characterCount: ee, disabled: k || !X || !oe || ee > y.j3, editorState: _, onSave: t, queryId: s || d, sectionId: r, sectionType: l, setDirty: $, setError: E, setSaving: z, userId: u }))));
                }),
                $ = ({ content: e, ...t }) => {
                    const o = s()(_.GL, e) ?? null;
                    return n.createElement(X, (0, k.Z)({ initialState: o?.value || null }, t));
                };
            var q = o(855488),
                J = o(96083),
                G = o(260706),
                ee = o(924108),
                te = o(664052),
                oe = o(998693),
                re = o(944681),
                ne = o(72130),
                le = o(725405),
                ae = o(289992),
                se = o(614983),
                ce = o.n(se),
                ie = o(351743),
                ue = o.n(ie);
            const de = ae.Z,
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
                fe = "WorkHistory_StartMonth_Selector",
                Ee = "WorkHistory_StartYear_Selector",
                ye = "WorkHistory_EndMonth_Selector",
                _e = "WorkHistory_EndYear_Selector",
                he = new Date().getFullYear(),
                ke = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                ge = { jobTitle: "", companyProfileId: null, companyProfileName: null, companyProfileLogoUrl: null, location: {}, isCurrentJob: !1, startMonth: 0, startYear: he, endMonth: 0, endYear: he, description: null },
                Ie = m().hd332c96,
                Ce = m().d2fb1b80,
                Te = m().b3590132,
                Ze = m().debb6abe,
                ve = m().j7d08ada,
                xe = m().a8c7d3fc,
                we = m().b335d507,
                Re = (e, t) => {
                    const { active_role: o, company_profile_name: r, company_profile_results: n, description: l, end_month: a, end_year: s, location_text: c, start_month: i, start_year: u, structured_location: d, title: m } = e || {};
                    return t ? { ...ge, jobTitle: m, companyProfileId: n?.result?.rest_id, companyProfileName: n?.result?.core?.name || r, companyProfileLogoUrl: n?.result?.logo?.normal_url || (r ? ke : null), location: { name: c || "", id: d?.rest_id }, isCurrentJob: o, startMonth: i, startYear: u, endMonth: a, endYear: s, description: l } : ge;
                },
                Se = (e, t) => (e && t ? new Date(t, e - 1) : null),
                Pe = (e) => {
                    let t = !0;
                    const o = {};
                    e.jobTitle || ((o.jobTitle = Ie), (t = !1)), e.companyProfileId || e.companyProfileName || ((o.companyProfileName = Ce), (t = !1));
                    const r = ((e, t, o, r, n) => {
                        const l = Se(e, t),
                            a = n ? new Date() : Se(o, r),
                            s = new Date();
                        return l && a ? (l > s ? Ze : a > s ? ve : l > a ? xe : "") : Te;
                    })(e.startMonth, e.startYear, e.endMonth, e.endYear, !!e.isCurrentJob);
                    if ((r && ((o.startMonth = r), (t = !1)), e.description)) {
                        const r = C.Z.getContentStateFromRaw(e.description),
                            n = r ? C.Z.initEditorState(r) : null;
                        n && C.Z.getCharacterCount(n) > 750 && ((o.description = we({ maxChars: 750 })), (t = !1));
                    }
                    return { isValid: t, errors: o };
                },
                Me = (e) => {
                    const { companyProfileId: t, companyProfileLogoUrl: o, companyProfileName: r } = e;
                    return r ? { id: t || "-1", name: r, type: "company_profile", data: { logoUrl: o || ke, query: "" } } : null;
                },
                Be = m().eba5a8ec,
                De = m().fd20adb8,
                Oe = m().cd3059f2,
                He = m().b86019ae,
                Le = m().e36287c6,
                Ne = m().cfd2f35e,
                We = m().i2209530,
                Ae = ({ initialForm: e }) => {
                    const t = (0, le.Z)(),
                        { isModal: o } = n.useContext(T.Z),
                        r = (0, l.b9)(p.j7),
                        { sectionId: a } = (0, p.eF)(),
                        { blockId: s, blocksQueryId: u } = (0, p._L)(),
                        { userId: d, userQueryId: m } = (0, p.se)(),
                        b = (0, c.useHistory)(),
                        f = (0, c.useLocation)(),
                        [E, _] = n.useState(Me(e)),
                        [h, k] = n.useState(e),
                        [C, Z] = n.useState(null),
                        [v] = me(),
                        [x] = be(),
                        w = (e, t) => {
                            k((o) => ({ ...o, [e]: t }));
                        },
                        R = (e) => {
                            k((t) => ({ ...t, ...e }));
                        },
                        S = n.useCallback(() => {
                            f.state?.fromProfile ? b.replace({ pathname: "/settings/bio", state: {} }) : b.goBack({ backLocation: "/settings/bio" });
                        }, [b, f]),
                        P = n.useCallback((e) => {
                            R(e), _(Me(e));
                        }, []),
                        B = (e) => {
                            Z((t) => ({ ...t, [e]: "" }));
                        },
                        O = n.useCallback(() => {
                            const e = s ? "update_block_btn" : "save_block_btn",
                                o = () => {
                                    t.scribe({ ...(0, ne.Ak)(e, "success") }), r(!0), f.state?.fromProfile ? b.replace({ pathname: "/settings/bio", state: {} }) : b.goBack({ backLocation: "/settings/bio" });
                                },
                                n = () => {
                                    t.scribe({ ...(0, ne.Ak)(e, "error") });
                                };
                            t.scribe({ ...(0, ne.Ak)(e, "click") });
                            const l = ((e) => {
                                const { companyProfileId: t, companyProfileName: o, description: r, endMonth: n, endYear: l, isCurrentJob: a, jobTitle: s, location: c, startMonth: i, startYear: u } = e;
                                return { active_role: a, company_profile: t || null, company_profile_name: o, description: r, end_month: n, end_year: l, location_text: c?.id ? c?.name : c?.value, start_month: i, start_year: u, structured_location: c?.id, title: s };
                            })(h);
                            s ? x({ variables: { data: l, blockId: s }, onCompleted: o, onError: n }, u) : d && v({ variables: { data: l, sectionId: a, userId: d, sectionType: a ? null : y.Mp.WORK_HISTORY }, onCompleted: o, onError: n }, m);
                        }, [t, s, u, v, h, b, f.state?.fromProfile, a, r, x, d, m]),
                        N = n.useCallback(() => {
                            r(!0), b.goBack({ backLocation: "/settings/bio" });
                        }, [b, r]),
                        W = n.useCallback(() => {
                            const { errors: e, isValid: t } = Pe(h);
                            t ? O() : Z(e);
                        }, [h, O]);
                    return n.createElement(
                        I.Z,
                        { style: { ...Fe.editorRoot, ...(o ? {} : Fe.mobileRoot) } },
                        n.createElement(
                            I.Z,
                            { style: Fe.formRoot },
                            n.createElement(q.Z, {
                                errorText: C?.jobTitle,
                                invalid: !!C?.jobTitle,
                                label: Be,
                                name: "job_title",
                                onChange: (e) => {
                                    B("jobTitle"), w("jobTitle", e.target.value);
                                },
                                testID: "job-title-input",
                                type: "text",
                                value: h.jobTitle || "",
                            }),
                            n.createElement(
                                I.Z,
                                { style: [Fe.inputContainer, { zIndex: 5 }] },
                                n.createElement(ee.Z, {
                                    errorText: C?.companyProfileName,
                                    onChange: (e) => {
                                        B("companyProfileName"), R({ companyProfileId: null, companyProfileName: e });
                                    },
                                    onEnter: D.Z,
                                    onSelect: (e, t, o) => P({ companyProfileId: e, companyProfileName: t, companyProfileLogoUrl: o }),
                                    selectedValue: E,
                                    value: h.companyProfileName || "",
                                }),
                            ),
                            n.createElement(I.Z, { style: [Fe.inputContainer, { zIndex: 4 }] }, n.createElement(oe.Z, { onChange: (e) => w("location", e), onEnter: D.Z, onSelect: (e) => w("location", e), value: h.location?.name || h.location?.value || "" })),
                            n.createElement(I.Z, { style: Fe.inputContainer }, n.createElement(I.Z, { style: Fe.checkbox }, n.createElement(J.Z, { checked: !!h.isCurrentJob, onChange: (e) => w("isCurrentJob", e) }), n.createElement(i.ZP, null, De))),
                            n.createElement(
                                I.Z,
                                { style: Fe.inputContainer },
                                n.createElement(i.ZP, { weight: "bold" }, Oe),
                                n.createElement(G.Z, {
                                    errors: { month: !!C?.startMonth, year: !!C?.startMonth },
                                    hideDay: !0,
                                    label: Oe,
                                    minSelectableYear: (0, re.Q)(),
                                    month: h.startMonth || 0,
                                    monthSelectorTestID: fe,
                                    onChange: (e) => {
                                        B("startMonth"), R({ startMonth: e.month || 0, startYear: e.year || 2024 });
                                    },
                                    year: h.startYear || he,
                                    yearSelectorTestID: Ee,
                                }),
                            ),
                            n.createElement(
                                I.Z,
                                { style: Fe.inputContainer },
                                n.createElement(i.ZP, { weight: "bold" }, He),
                                n.createElement(G.Z, {
                                    disabled: !!h.isCurrentJob,
                                    errors: { month: !!C?.startMonth, year: !!C?.startMonth },
                                    hideDay: !0,
                                    label: He,
                                    minSelectableYear: (0, re.Q)(),
                                    month: h.endMonth || 0,
                                    monthSelectorTestID: ye,
                                    onChange: (e) => {
                                        B("startMonth"), R({ endMonth: e.month || 0, endYear: e.year || 2024 });
                                    },
                                    year: h.endYear || he,
                                    yearSelectorTestID: _e,
                                }),
                                C?.startMonth ? n.createElement(i.ZP, { color: "red500", size: "subtext2", style: Fe.dateError }, C.startMonth) : null,
                            ),
                            n.createElement(
                                I.Z,
                                { style: Fe.inputContainer },
                                n.createElement(i.ZP, { size: "body", style: Fe.label, weight: "bold" }, Le),
                                n.createElement(
                                    H.Z,
                                    { className: j.Hx },
                                    n.createElement(te.Z, {
                                        characterLimit: 750,
                                        editorClass: j.Hx,
                                        editorStyles: (0, j.yW)(j.Hx, j.K),
                                        initialState: h.description,
                                        limitedRichText: !0,
                                        numberOfLines: 5,
                                        onChange: (e) =>
                                            w(
                                                "description",
                                                ((e) => {
                                                    if (!e) return;
                                                    const t = e.getCurrentContent(),
                                                        o = (0, g.convertToRaw)(t);
                                                    return JSON.stringify(o);
                                                })(e),
                                            ),
                                        textSizesOverride: (0, j.bb)(j.K),
                                    }),
                                ),
                                C?.description ? n.createElement(i.ZP, { color: "red500", size: "subtext2", style: Fe.dateError }, C.description) : null,
                            ),
                        ),
                        n.createElement(I.Z, { style: [Fe.stickyButton, Fe.flexRow] }, n.createElement(L.Z, { onCompleted: N, useIconButton: !1 }), n.createElement(I.Z, { style: Fe.flexRow }, n.createElement(M.ZP, { onClick: S, size: "large", type: "primaryFilled" }, Ne), n.createElement(M.ZP, { disabled: !1, onClick: W, size: "large", type: "brandFilled" }, We))),
                    );
                },
                Fe = u.default.create((e) => ({ checkbox: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, editorRoot: { maxHeight: "100%", overflow: "auto", justifyContent: "space-between", flex: 1, zIndex: 4 }, mobileRoot: { maxHeight: `calc(100vh - ${e.componentDimensions.appBarHeight})` }, formRoot: { flex: 1, overflow: "auto" }, inputContainer: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16, justifyContent: "space-between", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor }, dateError: { marginTop: `-${e.spaces.space12}`, paddingHorizontal: e.spaces.space8 }, label: { marginBottom: e.spaces.space16 } })),
                je = ({ block: e }) => {
                    const { blockId: t } = (0, p._L)(),
                        o = s()(_.lw, e?.result?.content) ?? null;
                    return t && !o ? null : n.createElement(Ae, { initialForm: Re(o, t) });
                },
                Ye = r.Z,
                ze = m().af40a8e0,
                Ue = m().abd845fe,
                Qe = m().a6ec7ff8,
                Ke = m().eeb6d22c,
                Ve = ({ block: e, blockId: t, blockType: o, blocksQueryId: r, sectionId: a, sectionType: s, userQueryId: u }) => {
                    const [d, E] = n.useState(!1),
                        _ = (0, l.b9)(p.j7),
                        h = (0, c.useHistory)(),
                        { loggedInUserId: k } = (0, f.QZ)(),
                        g = n.useCallback(() => {
                            E(!1);
                        }, []),
                        I = n.useCallback(() => {
                            _(!0), h.goBack({ backLocation: "/settings/bio" });
                        }, [h, _]),
                        C = n.useCallback(
                            () =>
                                (() => {
                                    switch (
                                        ((e, t) => {
                                            if (e) return e;
                                            switch (t) {
                                                case y.NB.ABOUT:
                                                    return y.Mp.RICHTEXT;
                                                case y.NB.WORK_EXPERIENCE:
                                                    return y.Mp.WORK_HISTORY;
                                                default:
                                                    return null;
                                            }
                                        })(o, s)
                                    ) {
                                        case y.Mp.RICHTEXT:
                                            return k ? n.createElement($, { closeConfirm: g, content: e?.result?.content, onSave: I, showConfirmDelete: d }) : null;
                                        case y.Mp.WORK_HISTORY:
                                            return n.createElement(je, { block: e });
                                        default:
                                            return null;
                                    }
                                })(),
                            [e, o, g, I, s, d, k],
                        ),
                        T = n.useCallback(() => {
                            let e = "";
                            return o === y.Mp.RICHTEXT ? (e = Qe) : o === y.Mp.WORK_HISTORY && (e = Ke), n.createElement(i.ZP, { size: "headline2", style: Xe.modalHeader, weight: "bold" }, n.createElement(m().I18NFormatMessage, { $i18n: "a1b5887f", action: t ? Ue : ze, type: e }));
                        }, [t, o]);
                    return o ? n.createElement(p.Fo.Provider, { value: { ...p.w, userId: k, userQueryId: u } }, n.createElement(p.bQ.Provider, { value: { ...p.Y_, sectionId: a, sectionType: s } }, n.createElement(p.Vo.Provider, { value: { ...p.dq, blockId: t, blocksQueryId: r } }, n.createElement(b.Z, { containerStyle: Xe.root, renderHeader: T }, C())))) : null;
                },
                Xe = u.default.create((e) => ({ root: { height: "auto", backgroundColor: e.colors.cellBackground, zIndex: 4, maxWidth: "600px" }, modalHeader: { padding: e.spaces.space16 } })),
                $e = ({ block: e, blockId: t }) => {
                    const o = (0, c.useLocation)(),
                        r = s()(_.wJ, e),
                        l = r?.result?.core?.block_type;
                    if (!r || !l) return null;
                    const a = t ? r?.result?.id : o.state?.blocksQueryId;
                    return n.createElement(Ve, { block: r, blockId: t, blockType: l, blocksQueryId: a });
                },
                qe = ({ profileBlockId: e }) => {
                    const t = (0, h.p)(Ye, { blockId: e }),
                        o = t.viewer_v2.user_results.result.profile_block_results;
                    return t && o && e ? n.createElement($e, { block: o, blockId: e }) : null;
                },
                Je = ({ blockType: e, sectionId: t, sectionType: o }) => {
                    const r = (0, h.p)(_.Bq, {}),
                        l = r?.viewer?.user_results?.result?.__id,
                        a = r?.viewer?.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results,
                        s = a?.find((e) => e?.result?.core?.section_type === o),
                        c = s?.result?.profile_blocks?.items_results?.[0]?.result?.rest_id?.block_id;
                    return s && o === y.NB.ABOUT && c ? n.createElement(qe, { profileBlockId: c }) : r && l ? n.createElement(Ve, { blockType: e, sectionId: t, sectionType: o, userQueryId: l }) : null;
                },
                Ge = { context: "EXTENDED_PROFILE_EDIT_BLOCK" },
                et = ({ location: e, match: t }) => {
                    const o = !!(0, c.matchPath)(e.pathname, { path: ["/settings/bio/new/:sectionId/:xprofileType", "/settings/bio/new/:xprofileType"], exact: !0 }),
                        { profileBlockId: r, profileSectionId: l, xprofileType: a } = t.params;
                    return n.createElement(E.H, { errorConfig: Ge }, o ? n.createElement(n.Fragment, null, a ? n.createElement(Je, { blockType: y.P2[a] === y.NB.WORK_EXPERIENCE ? y.Mp.WORK_HISTORY : y.Mp.RICHTEXT, sectionId: l, sectionType: y.P2[a] }) : null) : n.createElement(qe, { profileBlockId: r }));
                };
        },
        242470: (e, t, o) => {
            o.d(t, { Z: () => C });
            var r = o(202784),
                n = o(301503),
                l = o(614983),
                a = o.n(l),
                s = o(154003),
                c = o(111677),
                i = o.n(c),
                u = o(952793),
                d = o(72130),
                m = o(520385),
                p = o(725405),
                b = o(681488),
                f = (o(585488), o(351743)),
                E = o.n(f);
            const y = b.Z,
                _ = () => {
                    const [e, t] = E()(y);
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
                    const [e, t] = E()(h);
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
                g = i().a9cc8f96,
                I = i().i2209530,
                C = ({ blockId: e, characterCount: t, disabled: o, editorState: l, onSave: c, queryId: i, sectionId: b, sectionType: f, setDirty: E, setError: y, setSaving: h, userId: C }) => {
                    const T = (0, u.hC)("xprofile_work_history_enabled"),
                        Z = (0, p.Z)(),
                        [v] = _(),
                        [x] = k(),
                        w = r.useCallback(() => {
                            h(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            Z.scribe({ ...(0, d.MA)(t, "error", { version: T ? 2 : 1 }) });
                        }, [Z, e, T, h]),
                        R = r.useCallback(() => {
                            E(!1), h(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            Z.scribe({ ...(0, d.MA)(t, "success", { version: T ? 2 : 1 }) }), c();
                        }, [Z, e, T, c, E, h]),
                        S = r.useCallback(() => {
                            const o = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    o = (0, n.convertToRaw)(t);
                                return JSON.stringify(o);
                            })(l);
                            if (!o) return;
                            if (t > m.j3) return void y(g);
                            h(!0);
                            const r = e ? "update_block_btn" : "save_block_btn";
                            Z.scribe({ ...(0, d.MA)(r, "click", {}) }),
                                e && C
                                    ? x({
                                          variables: { richtextValue: o, blockId: e, userId: C },
                                          onCompleted: R,
                                          onError: w,
                                          updater: (e, t) => {
                                              if ((a()(i, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (T) {
                                                      const t = e.get(`client:${i}:content`);
                                                      t && t.setValue(o, "value");
                                                  } else {
                                                      const t = e.get(i);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : C &&
                                      v(
                                          {
                                              variables: { richtextValue: o, userId: C, sectionId: b, sectionType: f },
                                              onCompleted: R,
                                              updater: (e, t) => {
                                                  if ((a()(i, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(i);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          i,
                                      );
                        }, [l, t, h, e, Z, y, x, C, R, w, i, T, v, b, f]);
                    return r.createElement(s.ZP, { disabled: o, onClick: S, size: "large", type: "brandFilled" }, I);
                };
        },
        600193: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(668214),
                n = o(919022);
            const l = (0, r.Z)()
                .propsFromState(() => ({ viewerUser: n.ZP.selectViewerUser }))
                .withAnalytics({ page: "settings", section: "extendedprofile" });
        },
        161030: (e, t, o) => {
            o.r(t), o.d(t, { default: () => x });
            var r = o(202784),
                n = o(400752),
                l = o(325686),
                a = o(107267),
                s = o(392237),
                c = o(718e3),
                i = o(991617),
                u = o(785813),
                d = o(825495),
                m = o(485822),
                p = o(164349),
                b = o(252021),
                f = o(736063),
                E = o(520385),
                y = o(462166),
                _ = o(873302),
                h = o(312771),
                k = o(482924),
                g = o(615027),
                I = o(600193);
            const C = ({ sections: e }) => {
                    const t = (0, _.uR)(e, E.NB.ABOUT),
                        o = (0, _.uR)(e, E.NB.WORK_EXPERIENCE),
                        n = (0, _.hW)(t),
                        a = (0, _.hW)(o);
                    return r.createElement(l.Z, { style: Z.root }, r.createElement(i.bQ.Provider, { value: { ...i.Y_, hasAboutSection: n, hasWorkHistorySection: a, sectionId: t?.rest_id?.section_id, sectionType: E.NB.ABOUT, blockCount: t?.result?.profile_blocks?.total_count || 0, sectionQueryId: t?.id, sectionVisibility: t?.result?.core?.visibility } }, r.createElement(m.Z, { isEditing: !0, section: t })), r.createElement(i.bQ.Provider, { value: { ...i.Y_, hasAboutSection: n, hasWorkHistorySection: a, sectionId: o?.rest_id?.section_id, sectionType: E.NB.WORK_EXPERIENCE, blockCount: o?.result?.profile_blocks?.total_count || 0, sectionQueryId: o?.id, sectionVisibility: o?.result?.core?.visibility } }, r.createElement(p.Z, { isEditing: !0, section: o })));
                },
                T = ({ history: e, location: t, viewerUser: o }) => {
                    const l = (0, n.Dv)(i.j7),
                        s = (0, n.b9)(i.j7),
                        { data: m, refetch: p, refetchStatus: f } = (0, k.A)(y.Bq, {}),
                        E = m.viewer.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results,
                        _ = m.viewer.user_results.result.__id;
                    r.useEffect(() => {
                        l && p();
                    }, [l, p]),
                        r.useEffect(() => {
                            f !== h.ZP.LOADING && s(!1);
                        }, [f, s]);
                    const I = !!t.state?.addWorkExperience,
                        T = t.state?.sectionId,
                        Z = r.useCallback(() => {
                            const e = T ? `/settings/bio/new/${T}/work_experience` : "/settings/bio/new/work_experience";
                            return r.createElement(i.Fo.Provider, { value: { ...i.w, userId: o?.id_str, userQueryId: _ } }, r.createElement(C, { sections: E }), I && r.createElement(a.Switch, null, r.createElement(a.Route, null, r.createElement(g.Z, { to: { pathname: e, state: { fromProfile: !0 } } }))));
                        }, [T, E, I, _, o?.id_str]);
                    return m && o ? r.createElement(b.Z, { backLocation: `/${o.screen_name}/bio`, history: e, primaryContent: Z(), rightControl: null, sidebarContent: r.createElement(c.Z, null), subtitle: `@${o.screen_name}`, title: (0, u.Z)(o), titleIconCell: (0, d.Z)(o) }) : null;
                },
                Z = s.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                v = { context: "EXTENDED_PROFILE_SETTINGS_V2" },
                x = (0, I.Z)((e) => r.createElement(f.H, { errorConfig: v }, r.createElement(T, e)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-8ed0fac5.1d96c01a.js.map
