"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-8ed0fac5"],
    {
        72130: (e, t, o) => {
            o.d(t, { Ak: () => s, MA: () => l, Rz: () => r, Zi: () => a, he: () => n });
            const r = () => ({ component: "extended_profile_settings", action: "click" }),
                n = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                a = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                l = (e, t, o) => ({ component: "rich_text_editor", element: e, action: t, data: o }),
                s = (e, t, o) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...o } });
        },
        520385: (e, t, o) => {
            o.d(t, { Mp: () => n, NB: () => a, P2: () => l, j3: () => r, pR: () => s });
            const r = 5e4,
                n = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                a = (n.RICHTEXT, n.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                l = { about: a.ABOUT, work_experience: a.WORK_EXPERIENCE },
                s = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, o) => {
            o.d(t, { HM: () => b, Kh: () => m, ZU: () => u, hW: () => _, s1: () => p, uR: () => E });
            var r = o(990242),
                n = o.n(r),
                a = o(332920),
                l = o.n(a),
                s = o(520385),
                i = o(462166);
            const c = l().eb7710f1,
                d = l().bfc38bb5,
                u = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const o = e?.filter((e) => e);
                    return o
                        ? o.map((e) => {
                              const o = { ...e },
                                  r = n()(i.wJ, o),
                                  a = n()(t, r.result?.content);
                              return { __id: o.__id, id: o.id, rest_id: o.rest_id, result: { ...r.result, content: a } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const o = e.result?.content,
                                r = t.result?.content,
                                n = (o?.active_role ? new Date() : u(o?.end_month, o?.end_year)) ?? new Date(0),
                                a = (r?.active_role ? new Date() : u(r?.end_month, r?.end_year)) ?? new Date(0);
                            if (n.getFullYear() !== a.getFullYear()) return a.getFullYear() - n.getFullYear();
                            if (n.getMonth() !== a.getMonth()) return a.getMonth() - n.getMonth();
                            const l = u(o?.start_month, o?.start_year) ?? new Date(0),
                                s = u(r?.start_month, r?.start_year) ?? new Date(0);
                            return l.getFullYear() !== s.getFullYear() ? s.getFullYear() - l.getFullYear() : s.getMonth() - l.getMonth();
                        });
                },
                b = (e, t) => {
                    let o = t.getMonth() - e.getMonth() + 1,
                        r = t.getFullYear() - e.getFullYear();
                    return o < 0 && (r--, (o += 12)), r && o ? `${c({ years: r })} ${d({ months: o })}` : r ? c({ years: r }) : o ? d({ months: o }) : "";
                },
                E = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === s.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === s.Mp.RICHTEXT)) : void 0),
                _ = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        794057: (e, t, o) => {
            o.d(t, { C0: () => l, DC: () => r, _e: () => a, iN: () => c, kd: () => s, pc: () => n });
            const r = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                n = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                a = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                l = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                i = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: i.DRAFT, PUBLISHED: i.PUBLISHED });
        },
        482924: (e, t, o) => {
            o.d(t, { A: () => p });
            var r = o(202784),
                n = o(437429),
                a = o.n(n),
                l = o(57074),
                s = o.n(l),
                i = o(10622),
                c = o.n(i),
                d = o(71620),
                u = o(312771),
                m = o(535338);
            function p(e, t, o) {
                const n = s()(t),
                    l = s()(o),
                    i = a()(),
                    p = (0, d.po)(),
                    [b, E] = r.useState(null),
                    [_, f] = r.useState(!1),
                    y = r.useCallback(() => {
                        _ ||
                            (f(!0),
                            c()(i, e, n, { networkCacheConfig: l?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    f(!1);
                                },
                                error: (e) => {
                                    p(e), f(!1), E(e);
                                },
                            }));
                    }, [i, p, e, _, n, l]),
                    h = (0, m.p)(e, t, o);
                return r.useMemo(() => (b ? { data: h, refetch: y, refetchStatus: u.ZP.FAILED, refetchError: b } : { data: h, refetch: y, refetchStatus: _ ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [h, b, _, y]);
            }
        },
        154283: (e, t, o) => {
            o.r(t), o.d(t, { default: () => b });
            var r = o(202784),
                n = o(325686),
                a = o(731708),
                l = o(779610),
                s = o(392237),
                i = o(394123),
                c = o(720930),
                d = o(757700);
            const u = r.createElement(i.default, null),
                m = r.createElement(c.default, null),
                p = s.default.create((e) => ({ title: { padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, pivot: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, pivotItem: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.text } })),
                b = ({ history: e, location: t, match: o }) => {
                    const s = r.useMemo(() => o.params.profileSectionId, [o]),
                        i = r.useCallback((e, t) => r.createElement(n.Z, { style: p.pivotItem }, t, r.createElement(a.ZP, null, e)), []),
                        c = r.useCallback(
                            (e) => {
                                if (s) return { pathname: `/settings/bio/new/${s}/${e}`, method: "replace", state: t.state };
                            },
                            [t.state, s],
                        );
                    return r.createElement(d.ZP, { clickMaskToClose: !0, history: e, modalSize: "dynamic", withBackground: !0 }, r.createElement(n.Z, null, r.createElement(a.ZP, { align: "center", size: "headline2", style: p.title, weight: "bold" }, "Add Block"), r.createElement(n.Z, { style: p.pivot }, r.createElement(l.Z, { label: i("Rich Text", u), link: c("richtext") })), r.createElement(n.Z, null, r.createElement(l.Z, { label: i("Work Experience", m), link: c("work_history") }))));
                };
        },
        449059: (e, t, o) => {
            o.r(t), o.d(t, { default: () => et });
            var r = o(948632),
                n = o(202784),
                a = o(400752),
                l = (o(585488), o(990242)),
                s = o.n(l),
                i = o(107267),
                c = o(731708),
                d = o(392237),
                u = o(332920),
                m = o.n(u),
                p = o(991617),
                b = o(980407),
                E = o(443781),
                _ = o(736063),
                f = o(520385),
                y = o(462166),
                h = o(535338),
                k = o(807896),
                I = o(301503),
                g = o(325686),
                C = o(925873),
                T = o(386802),
                Z = o(989272),
                x = o(891198),
                v = o(977952),
                R = o(167630),
                w = o(297256),
                S = o(40610),
                P = o(751475),
                M = o(154003),
                B = o(908478),
                D = o(516951),
                O = o(187669),
                H = o(949626),
                W = o(381335),
                N = o(313433),
                A = o(874111),
                L = o(536790),
                Y = o(952793),
                j = o(478414),
                F = o(339110),
                z = o(725516),
                U = o(242470);
            const K = m().c2333081,
                Q = m().cfd2f35e,
                V = d.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, editorRoot: { maxHeight: "100%", overflow: "auto", justifyContent: "space-between", flex: 1 }, mobileRoot: { maxHeight: `calc(100vh - ${e.componentDimensions.appBarHeight})` }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, richtextRoot: { paddingBottom: e.spaces.space16 }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16, borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, zIndex: 3, backgroundColor: e.colors.navigationBackground }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                X = (0, z.Z)(({ initialState: e = "", onSave: t }) => {
                    const { isModal: o } = n.useContext(T.Z),
                        { sectionId: r, sectionType: a } = (0, p.eF)(),
                        { blockId: l, blocksQueryId: s } = (0, p._L)(),
                        { userId: d, userQueryId: u } = (0, p.se)(),
                        m = (0, Y.hC)("xprofile_emojis_enabled"),
                        b = (0, i.useHistory)(),
                        [E, _] = n.useState(""),
                        [y, h] = n.useState(
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
                    const ee = (0, A.c6)(y);
                    let te = ee;
                    ee > 1 && (te = x.ZP.getFormattedCount(ee));
                    const oe = n.useMemo(() => y?.getCurrentContent()?.hasText(), [y]),
                        re = n.useCallback(
                            (e) => {
                                const t = C.Z.convertMentionsToEntities(C.Z.convertEmojiToEntities(e));
                                X || (0, B.Z)((0, I.convertToRaw)(t.getCurrentContent()), (0, I.convertToRaw)(y.getCurrentContent())) || $(!0), h(t);
                            },
                            [y, X],
                        ),
                        ne = n.useMemo(() => ({ editorState: y, element: v.Z, stripPastedStyles: !0 }), [y]),
                        ae = n.useMemo(() => {
                            if (k) return n.createElement(g.Z, { style: V.flexRow }, n.createElement(R.Z, { size: "small" }), n.createElement(c.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!f.j3 && ee > f.j3;
                            return n.createElement(g.Z, null, n.createElement(c.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: V.textCountLabel }, K({ count: te })));
                        }, [ee, te, k]),
                        le = n.useMemo(() => [V.stickyButton, V.flexRow, V.v2Button], []),
                        se = n.useCallback(() => (m ? n.createElement(N.Z, { editorState: y, onChange: re }) : null), [y, m, re]),
                        ie = n.useCallback(
                            () => (e) =>
                                n.createElement(w.b, {
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
                                    toolbarRightControl: ae,
                                }),
                            [re, se, ne, ae],
                        );
                    return n.createElement(g.Z, { style: { ...V.editorRoot, ...(o ? {} : V.mobileRoot) } }, E ? n.createElement(g.Z, { style: V.error }, n.createElement(S.Z.Danger, { text: E, withIcon: !0 })) : null, n.createElement(P.Z, { fallbackBackPath: "/", history: b, onNavigation: G, shouldBlockNavigation: q, shouldBlockUnload: X }, n.createElement(H.Z, { className: j.Hx, style: { ...V.richtextRoot } }, n.createElement(L.Z, { contextText: (0, A.iT)(y), isInline: !0, onTextUpdated: re, onTypeaheadStateChange: D.Z, source: F._4.LongformComposer }, ie()))), n.createElement(g.Z, { style: le }, n.createElement(W.Z, { onCompleted: J, useIconButton: !1 }), n.createElement(g.Z, { style: V.flexRow }, n.createElement(M.ZP, { onClick: J, size: "large", type: "primaryFilled" }, Q), n.createElement(U.Z, { blockId: l, characterCount: ee, disabled: k || !X || !oe || ee > f.j3, editorState: y, onSave: t, queryId: s || u, sectionId: r, sectionType: a, setDirty: $, setError: _, setSaving: z, userId: d }))));
                }),
                $ = ({ content: e, ...t }) => {
                    const o = s()(y.GL, e) ?? null;
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
                ae = o(725405),
                le = o(289992),
                se = o(614983),
                ie = o.n(se),
                ce = o(351743),
                de = o.n(ce);
            const ue = le.Z,
                me = () => {
                    const [e, t] = de()(ue);
                    return [
                        n.useCallback(
                            (t, o) => {
                                e({
                                    updater: (e, t) => {
                                        ie()(o, "queryId must be specified");
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
                                        ie()(o, "queryId must exist");
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
                _e = "WorkHistory_StartYear_Selector",
                fe = "WorkHistory_EndMonth_Selector",
                ye = "WorkHistory_EndYear_Selector",
                he = new Date().getFullYear(),
                ke = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                Ie = { jobTitle: "", companyProfileId: null, companyProfileName: null, companyProfileLogoUrl: null, location: {}, isCurrentJob: !1, startMonth: 0, startYear: he, endMonth: 0, endYear: he, description: null },
                ge = m().hd332c96,
                Ce = m().d2fb1b80,
                Te = m().b3590132,
                Ze = m().debb6abe,
                xe = m().j7d08ada,
                ve = m().a8c7d3fc,
                Re = m().b335d507,
                we = (e, t) => {
                    const { active_role: o, company_profile_name: r, company_profile_results: n, description: a, end_month: l, end_year: s, location_text: i, start_month: c, start_year: d, structured_location: u, title: m } = e || {};
                    return t ? { ...Ie, jobTitle: m, companyProfileId: n?.result?.rest_id, companyProfileName: n?.result?.core?.name || r, companyProfileLogoUrl: n?.result?.logo?.normal_url || (r ? ke : null), location: { name: i || "", id: u?.rest_id }, isCurrentJob: o, startMonth: c, startYear: d, endMonth: l, endYear: s, description: a } : Ie;
                },
                Se = (e, t) => (e && t ? new Date(t, e - 1) : null),
                Pe = (e) => {
                    let t = !0;
                    const o = {};
                    e.jobTitle || ((o.jobTitle = ge), (t = !1)), e.companyProfileId || e.companyProfileName || ((o.companyProfileName = Ce), (t = !1));
                    const r = ((e, t, o, r, n) => {
                        const a = Se(e, t),
                            l = n ? new Date() : Se(o, r),
                            s = new Date();
                        return a && l ? (a > s ? Ze : l > s ? xe : a > l ? ve : "") : Te;
                    })(e.startMonth, e.startYear, e.endMonth, e.endYear, !!e.isCurrentJob);
                    if ((r && ((o.startMonth = r), (t = !1)), e.description)) {
                        const r = C.Z.getContentStateFromRaw(e.description),
                            n = r ? C.Z.initEditorState(r) : null;
                        n && C.Z.getCharacterCount(n) > 750 && ((o.description = Re({ maxChars: 750 })), (t = !1));
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
                We = m().e36287c6,
                Ne = m().cfd2f35e,
                Ae = m().i2209530,
                Le = ({ initialForm: e }) => {
                    const t = (0, ae.Z)(),
                        { isModal: o } = n.useContext(T.Z),
                        r = (0, a.b9)(p.j7),
                        { sectionId: l } = (0, p.eF)(),
                        { blockId: s, blocksQueryId: d } = (0, p._L)(),
                        { userId: u, userQueryId: m } = (0, p.se)(),
                        b = (0, i.useHistory)(),
                        E = (0, i.useLocation)(),
                        [_, y] = n.useState(Me(e)),
                        [h, k] = n.useState(e),
                        [C, Z] = n.useState(null),
                        [x] = me(),
                        [v] = be(),
                        R = (e, t) => {
                            k((o) => ({ ...o, [e]: t }));
                        },
                        w = (e) => {
                            k((t) => ({ ...t, ...e }));
                        },
                        S = n.useCallback(() => {
                            E.state?.fromProfile ? b.replace({ pathname: "/settings/bio", state: {} }) : b.goBack({ backLocation: "/settings/bio" });
                        }, [b, E]),
                        P = n.useCallback((e) => {
                            w(e), y(Me(e));
                        }, []),
                        B = (e) => {
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
                                const { companyProfileId: t, companyProfileName: o, description: r, endMonth: n, endYear: a, isCurrentJob: l, jobTitle: s, location: i, startMonth: c, startYear: d } = e;
                                return { active_role: l, company_profile: t || null, company_profile_name: o, description: r, end_month: n, end_year: a, location_text: i?.id ? i?.name : i?.value, start_month: c, start_year: d, structured_location: i?.id, title: s };
                            })(h);
                            s ? v({ variables: { data: a, blockId: s }, onCompleted: o, onError: n }, d) : u && x({ variables: { data: a, sectionId: l, userId: u, sectionType: l ? null : f.Mp.WORK_HISTORY }, onCompleted: o, onError: n }, m);
                        }, [t, s, d, x, h, b, E.state?.fromProfile, l, r, v, u, m]),
                        N = n.useCallback(() => {
                            r(!0), b.goBack({ backLocation: "/settings/bio" });
                        }, [b, r]),
                        A = n.useCallback(() => {
                            const { errors: e, isValid: t } = Pe(h);
                            t ? O() : Z(e);
                        }, [h, O]);
                    return n.createElement(
                        g.Z,
                        { style: { ...Ye.editorRoot, ...(o ? {} : Ye.mobileRoot) } },
                        n.createElement(
                            g.Z,
                            { style: Ye.formRoot },
                            n.createElement(q.Z, {
                                errorText: C?.jobTitle,
                                invalid: !!C?.jobTitle,
                                label: Be,
                                name: "job_title",
                                onChange: (e) => {
                                    B("jobTitle"), R("jobTitle", e.target.value);
                                },
                                testID: "job-title-input",
                                type: "text",
                                value: h.jobTitle || "",
                            }),
                            n.createElement(
                                g.Z,
                                { style: [Ye.inputContainer, { zIndex: 5 }] },
                                n.createElement(ee.Z, {
                                    errorText: C?.companyProfileName,
                                    onChange: (e) => {
                                        B("companyProfileName"), w({ companyProfileId: null, companyProfileName: e });
                                    },
                                    onEnter: D.Z,
                                    onSelect: (e, t, o) => P({ companyProfileId: e, companyProfileName: t, companyProfileLogoUrl: o }),
                                    selectedValue: _,
                                    value: h.companyProfileName || "",
                                }),
                            ),
                            n.createElement(g.Z, { style: [Ye.inputContainer, { zIndex: 4 }] }, n.createElement(oe.Z, { onChange: (e) => R("location", e), onEnter: D.Z, onSelect: (e) => R("location", e), value: h.location?.name || h.location?.value || "" })),
                            n.createElement(g.Z, { style: Ye.inputContainer }, n.createElement(g.Z, { style: Ye.checkbox }, n.createElement(J.Z, { checked: !!h.isCurrentJob, onChange: (e) => R("isCurrentJob", e) }), n.createElement(c.ZP, null, De))),
                            n.createElement(
                                g.Z,
                                { style: Ye.inputContainer },
                                n.createElement(c.ZP, { weight: "bold" }, Oe),
                                n.createElement(G.Z, {
                                    errors: { month: !!C?.startMonth, year: !!C?.startMonth },
                                    hideDay: !0,
                                    label: Oe,
                                    minSelectableYear: (0, re.Q)(),
                                    month: h.startMonth || 0,
                                    monthSelectorTestID: Ee,
                                    onChange: (e) => {
                                        B("startMonth"), w({ startMonth: e.month || 0, startYear: e.year || 2024 });
                                    },
                                    year: h.startYear || he,
                                    yearSelectorTestID: _e,
                                }),
                            ),
                            n.createElement(
                                g.Z,
                                { style: Ye.inputContainer },
                                n.createElement(c.ZP, { weight: "bold" }, He),
                                n.createElement(G.Z, {
                                    disabled: !!h.isCurrentJob,
                                    errors: { month: !!C?.startMonth, year: !!C?.startMonth },
                                    hideDay: !0,
                                    label: He,
                                    minSelectableYear: (0, re.Q)(),
                                    month: h.endMonth || 0,
                                    monthSelectorTestID: fe,
                                    onChange: (e) => {
                                        B("startMonth"), w({ endMonth: e.month || 0, endYear: e.year || 2024 });
                                    },
                                    year: h.endYear || he,
                                    yearSelectorTestID: ye,
                                }),
                                C?.startMonth ? n.createElement(c.ZP, { color: "red500", size: "subtext2", style: Ye.dateError }, C.startMonth) : null,
                            ),
                            n.createElement(
                                g.Z,
                                { style: Ye.inputContainer },
                                n.createElement(c.ZP, { size: "body", style: Ye.label, weight: "bold" }, We),
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
                                            R(
                                                "description",
                                                ((e) => {
                                                    if (!e) return;
                                                    const t = e.getCurrentContent(),
                                                        o = (0, I.convertToRaw)(t);
                                                    return JSON.stringify(o);
                                                })(e),
                                            ),
                                        textSizesOverride: (0, j.bb)(j.K),
                                    }),
                                ),
                                C?.description ? n.createElement(c.ZP, { color: "red500", size: "subtext2", style: Ye.dateError }, C.description) : null,
                            ),
                        ),
                        n.createElement(g.Z, { style: [Ye.stickyButton, Ye.flexRow] }, n.createElement(W.Z, { onCompleted: N, useIconButton: !1 }), n.createElement(g.Z, { style: Ye.flexRow }, n.createElement(M.ZP, { onClick: S, size: "large", type: "primaryFilled" }, Ne), n.createElement(M.ZP, { disabled: !1, onClick: A, size: "large", type: "brandFilled" }, Ae))),
                    );
                },
                Ye = d.default.create((e) => ({ checkbox: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, editorRoot: { maxHeight: "100%", overflow: "auto", justifyContent: "space-between", flex: 1, zIndex: 4 }, mobileRoot: { maxHeight: `calc(100vh - ${e.componentDimensions.appBarHeight})` }, formRoot: { flex: 1, overflow: "auto" }, inputContainer: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16, justifyContent: "space-between", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor }, dateError: { marginTop: `-${e.spaces.space12}`, paddingHorizontal: e.spaces.space8 }, label: { marginBottom: e.spaces.space16 } })),
                je = ({ block: e }) => {
                    const { blockId: t } = (0, p._L)(),
                        o = s()(y.lw, e?.result?.content) ?? null;
                    return t && !o ? null : n.createElement(Le, { initialForm: we(o, t) });
                },
                Fe = r.Z,
                ze = m().af40a8e0,
                Ue = m().abd845fe,
                Ke = m().a6ec7ff8,
                Qe = m().eeb6d22c,
                Ve = ({ block: e, blockId: t, blockType: o, blocksQueryId: r, sectionId: l, sectionType: s, userQueryId: d }) => {
                    const [u, _] = n.useState(!1),
                        y = (0, a.b9)(p.j7),
                        h = (0, i.useHistory)(),
                        { loggedInUserId: k } = (0, E.QZ)(),
                        I = n.useCallback(() => {
                            _(!1);
                        }, []),
                        g = n.useCallback(() => {
                            y(!0), h.goBack({ backLocation: "/settings/bio" });
                        }, [h, y]),
                        C = n.useCallback(
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
                                            return k ? n.createElement($, { closeConfirm: I, content: e?.result?.content, onSave: g, showConfirmDelete: u }) : null;
                                        case f.Mp.WORK_HISTORY:
                                            return n.createElement(je, { block: e });
                                        default:
                                            return null;
                                    }
                                })(),
                            [e, o, I, g, s, u, k],
                        ),
                        T = n.useCallback(() => {
                            let e = "";
                            return o === f.Mp.RICHTEXT ? (e = Ke) : o === f.Mp.WORK_HISTORY && (e = Qe), n.createElement(c.ZP, { size: "headline2", style: Xe.modalHeader, weight: "bold" }, n.createElement(m().I18NFormatMessage, { $i18n: "a1b5887f", action: t ? Ue : ze, type: e }));
                        }, [t, o]);
                    return o ? n.createElement(p.Fo.Provider, { value: { ...p.w, userId: k, userQueryId: d } }, n.createElement(p.bQ.Provider, { value: { ...p.Y_, sectionId: l, sectionType: s } }, n.createElement(p.Vo.Provider, { value: { ...p.dq, blockId: t, blocksQueryId: r } }, n.createElement(b.Z, { containerStyle: Xe.root, renderHeader: T }, C())))) : null;
                },
                Xe = d.default.create((e) => ({ root: { height: "auto", backgroundColor: e.colors.cellBackground, zIndex: 4, maxWidth: "600px" }, modalHeader: { padding: e.spaces.space16 } })),
                $e = ({ block: e, blockId: t }) => {
                    const o = (0, i.useLocation)(),
                        r = s()(y.wJ, e),
                        a = r?.result?.core?.block_type;
                    if (!r || !a) return null;
                    const l = t ? r?.result?.id : o.state?.blocksQueryId;
                    return n.createElement(Ve, { block: r, blockId: t, blockType: a, blocksQueryId: l });
                },
                qe = ({ profileBlockId: e }) => {
                    const t = (0, h.p)(Fe, { blockId: e }),
                        o = t.viewer_v2.user_results.result.profile_block_results;
                    return t && o && e ? n.createElement($e, { block: o, blockId: e }) : null;
                },
                Je = ({ blockType: e, sectionId: t, sectionType: o }) => {
                    const r = (0, h.p)(y.Bq, {}),
                        a = r?.viewer?.user_results?.result?.__id,
                        l = r?.viewer?.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results,
                        s = l?.find((e) => e?.result?.core?.section_type === o),
                        i = s?.result?.profile_blocks?.items_results?.[0]?.result?.rest_id?.block_id;
                    return s && o === f.NB.ABOUT && i ? n.createElement(qe, { profileBlockId: i }) : r && a ? n.createElement(Ve, { blockType: e, sectionId: t, sectionType: o, userQueryId: a }) : null;
                },
                Ge = { context: "EXTENDED_PROFILE_EDIT_BLOCK" },
                et = ({ location: e, match: t }) => {
                    const o = !!(0, i.matchPath)(e.pathname, { path: ["/settings/bio/new/:sectionId/:xprofileType", "/settings/bio/new/:xprofileType"], exact: !0 }),
                        { profileBlockId: r, profileSectionId: a, xprofileType: l } = t.params;
                    return n.createElement(_.H, { errorConfig: Ge }, o ? n.createElement(n.Fragment, null, l ? n.createElement(Je, { blockType: f.P2[l] === f.NB.WORK_EXPERIENCE ? f.Mp.WORK_HISTORY : f.Mp.RICHTEXT, sectionId: a, sectionType: f.P2[l] }) : null) : n.createElement(qe, { profileBlockId: r }));
                };
        },
        242470: (e, t, o) => {
            o.d(t, { Z: () => C });
            var r = o(202784),
                n = o(301503),
                a = o(614983),
                l = o.n(a),
                s = o(154003),
                i = o(332920),
                c = o.n(i),
                d = o(952793),
                u = o(72130),
                m = o(520385),
                p = o(725405),
                b = o(681488),
                E = (o(585488), o(351743)),
                _ = o.n(E);
            const f = b.Z,
                y = () => {
                    const [e, t] = _()(f);
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
                    const [e, t] = _()(h);
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
                I = c().a9cc8f96,
                g = c().i2209530,
                C = ({ blockId: e, characterCount: t, disabled: o, editorState: a, onSave: i, queryId: c, sectionId: b, sectionType: E, setDirty: _, setError: f, setSaving: h, userId: C }) => {
                    const T = (0, d.hC)("xprofile_work_history_enabled"),
                        Z = (0, p.Z)(),
                        [x] = y(),
                        [v] = k(),
                        R = r.useCallback(() => {
                            h(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            Z.scribe({ ...(0, u.MA)(t, "error", { version: T ? 2 : 1 }) });
                        }, [Z, e, T, h]),
                        w = r.useCallback(() => {
                            _(!1), h(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            Z.scribe({ ...(0, u.MA)(t, "success", { version: T ? 2 : 1 }) }), i();
                        }, [Z, e, T, i, _, h]),
                        S = r.useCallback(() => {
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
                                e && C
                                    ? v({
                                          variables: { richtextValue: o, blockId: e, userId: C },
                                          onCompleted: w,
                                          onError: R,
                                          updater: (e, t) => {
                                              if ((l()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (T) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(o, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : C &&
                                      x(
                                          {
                                              variables: { richtextValue: o, userId: C, sectionId: b, sectionType: E },
                                              onCompleted: w,
                                              updater: (e, t) => {
                                                  if ((l()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [a, t, h, e, Z, f, v, C, w, R, c, T, x, b, E]);
                    return r.createElement(s.ZP, { disabled: o, onClick: S, size: "large", type: "brandFilled" }, g);
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
                i = o(718e3),
                c = o(991617),
                d = o(785813),
                u = o(825495),
                m = o(485822),
                p = o(164349),
                b = o(252021),
                E = o(736063),
                _ = o(520385),
                f = o(462166),
                y = o(873302),
                h = o(312771),
                k = o(482924),
                I = o(615027),
                g = o(600193);
            const C = ({ sections: e }) => {
                    const t = (0, y.uR)(e, _.NB.ABOUT),
                        o = (0, y.uR)(e, _.NB.WORK_EXPERIENCE),
                        n = (0, y.hW)(t),
                        l = (0, y.hW)(o);
                    return r.createElement(a.Z, { style: Z.root }, r.createElement(c.bQ.Provider, { value: { ...c.Y_, hasAboutSection: n, hasWorkHistorySection: l, sectionId: t?.rest_id?.section_id, sectionType: _.NB.ABOUT, blockCount: t?.result?.profile_blocks?.total_count || 0, sectionQueryId: t?.id, sectionVisibility: t?.result?.core?.visibility } }, r.createElement(m.Z, { isEditing: !0, section: t })), r.createElement(c.bQ.Provider, { value: { ...c.Y_, hasAboutSection: n, hasWorkHistorySection: l, sectionId: o?.rest_id?.section_id, sectionType: _.NB.WORK_EXPERIENCE, blockCount: o?.result?.profile_blocks?.total_count || 0, sectionQueryId: o?.id, sectionVisibility: o?.result?.core?.visibility } }, r.createElement(p.Z, { isEditing: !0, section: o })));
                },
                T = ({ history: e, location: t, viewerUser: o }) => {
                    const a = (0, n.Dv)(c.j7),
                        s = (0, n.b9)(c.j7),
                        { data: m, refetch: p, refetchStatus: E } = (0, k.A)(f.Bq, {}),
                        _ = m.viewer.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results,
                        y = m.viewer.user_results.result.__id;
                    r.useEffect(() => {
                        a && p();
                    }, [a, p]),
                        r.useEffect(() => {
                            E !== h.ZP.LOADING && s(!1);
                        }, [E, s]);
                    const g = !!t.state?.addWorkExperience,
                        T = t.state?.sectionId,
                        Z = r.useCallback(() => {
                            const e = T ? `/settings/bio/new/${T}/work_experience` : "/settings/bio/new/work_experience";
                            return r.createElement(c.Fo.Provider, { value: { ...c.w, userId: o?.id_str, userQueryId: y } }, r.createElement(C, { sections: _ }), g && r.createElement(l.Switch, null, r.createElement(l.Route, null, r.createElement(I.Z, { to: { pathname: e, state: { fromProfile: !0 } } }))));
                        }, [T, _, g, y, o?.id_str]);
                    return m && o ? r.createElement(b.Z, { backLocation: `/${o.screen_name}/bio`, history: e, primaryContent: Z(), rightControl: null, sidebarContent: r.createElement(i.Z, null), subtitle: `@${o.screen_name}`, title: (0, d.Z)(o), titleIconCell: (0, u.Z)(o) }) : null;
                },
                Z = s.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                x = { context: "EXTENDED_PROFILE_SETTINGS_V2" },
                v = (0, g.Z)((e) => r.createElement(E.H, { errorConfig: x }, r.createElement(T, e)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-8ed0fac5.4aca8b6a.js.map
