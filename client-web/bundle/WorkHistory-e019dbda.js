"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-e019dbda"],
    {
        924108: (e, t, n) => {
            n.d(t, { Z: () => ee });
            var r = n(264964),
                o = n(617277),
                l = n(202784),
                a = n(325686),
                i = n(10622),
                s = n.n(i),
                c = (n(585488), n(351743)),
                u = n.n(c),
                d = n(437429),
                m = n.n(d),
                p = n(167630),
                f = n(731708),
                g = n(386802),
                h = n(530732),
                b = n(823161),
                y = n(855488),
                E = n(392237),
                _ = n(111677),
                C = n.n(_),
                k = n(379327),
                x = n(666536),
                S = n(125568),
                I = n(874088),
                w = n(952793),
                Z = n(339110),
                T = n(524110),
                v = n(109659),
                R = n(224484),
                $ = n(277660),
                D = n.n($),
                z = n(154003),
                P = n(665285),
                F = n(757700);
            const M = R.Z,
                B = v.Z,
                L = C().caa46e54,
                O = C().e893fe6e,
                H = C().j1c09ca4,
                W = C().i2209530,
                A = C().cfd2f35e,
                q = C().b679ff6a,
                j = "DuplicateDomain",
                U = ({ companyProfile: e, onSelect: t }) => {
                    const n = D()(M, e),
                        r = n?.id ? n?.result?.logo?.normal_url : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                        o = l.useCallback(() => {
                            t(n.rest_id, n.result.core.name, r);
                        }, [r, n.rest_id, n.result.core.name, t]);
                    return l.createElement(
                        f.ZP,
                        { size: "subtext1", style: V.suggestion },
                        l.createElement(
                            C().I18NFormatMessage,
                            { $i18n: "ca584c31" },
                            l.createElement(
                                a.Z,
                                { style: V.suggestion },
                                l.createElement(a.Z, { style: V.logo }, l.createElement(b.default, { shape: "square", size: "medium", uri: r })),
                                l.createElement(h.Z, { interactiveStyles: null, onClick: o }, ({ isHovered: e }) => l.createElement(f.ZP, { color: "text", style: { textDecoration: "underline", cursor: "pointer", color: e ? E.default.theme.colors.primary : E.default.theme.colors.text }, weight: "bold" }, n.result.core.name)),
                            ),
                        ),
                    );
                },
                V = E.default.create((e) => ({ root: { width: "100%", minWidth: "300px", maxWidth: "600px" }, header: { padding: e.spaces.space16 }, logo: { paddingEnd: e.spaces.space4 }, suggestion: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, actions: { padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 } })),
                K = ({ companyName: e, onCancel: t, onSelect: n, onSuccess: r }) => {
                    const [o, i] = l.useState(!1),
                        [s, c] = l.useState(null),
                        [d, m] = l.useState(""),
                        [p] = u()(B),
                        [g, h] = l.useState(null),
                        b = l.useCallback(() => {
                            i(!0),
                                p({
                                    variables: { name: e, domain: s },
                                    onCompleted: (t) => {
                                        const o = t.create_company_profile?.create_company_profile_result;
                                        t.create_company_profile?.success ? (i(!1), n(o.company_profile_results.rest_id, e, null), r()) : o?.error_code === j && (i(!1), m(j), o.company_profile_results && h(o.company_profile_results));
                                    },
                                });
                        }, [e, p, s, n, r]),
                        E = l.useCallback(() => {
                            !s || (0, P.Z)(s, null, !1) ? b() : m(q);
                        }, [s, b]),
                        _ = l.useCallback(() => {
                            c(null), t();
                        }, [t]);
                    return l.createElement(
                        F.ZP,
                        { clickMaskToClose: !1, modalSize: "dynamic", withBackground: !0 },
                        l.createElement(
                            a.Z,
                            { style: V.root },
                            l.createElement(a.Z, { style: V.header }, l.createElement(f.ZP, { size: "headline2", weight: "bold" }, O)),
                            l.createElement(y.Z, { editable: !1, label: L, name: "company_name", onChange: () => {}, value: e }),
                            l.createElement(y.Z, {
                                editable: !o,
                                errorText: d !== j ? d : "",
                                helperText: (() => {
                                    if (d === j && g)
                                        return l.createElement(U, {
                                            companyProfile: g,
                                            onSelect: (e, t, o) => {
                                                n(e, t, o), r();
                                            },
                                        });
                                })(),
                                invalid: !!d,
                                label: H,
                                name: "domain",
                                onChange: (e) => c(e.target.value),
                                value: s || "",
                            }),
                            l.createElement(a.Z, { style: V.actions }, l.createElement(z.ZP, { disabled: o, onClick: _, size: "large", type: "primaryOutlined" }, A), l.createElement(z.ZP, { disabled: o, onClick: E, size: "large", type: "brandFilled" }, W)),
                        ),
                    );
                },
                Q = o.Z,
                Y = r.Z,
                N = C().eedfd35c,
                G = ({ hasSaved: e, isSaving: t }) => {
                    const [n, r] = l.useState(!1);
                    return (
                        l.useEffect(() => {
                            !t &&
                                e &&
                                (r(!0),
                                setTimeout(() => {
                                    r(!1);
                                }, 2e3));
                        }, [t, e]),
                        t || n ? l.createElement(a.Z, null, t && l.createElement(p.Z, { size: "small" }), n && l.createElement(f.ZP, { style: J.success }, "Saved")) : null
                    );
                },
                X = ({ errorText: e, onChange: t, onEnter: n, onSelect: r, selectedValue: o, value: i }) => {
                    const { isModal: c } = l.useContext(g.Z),
                        d = l.useRef(null),
                        p = m()(),
                        [E, _] = l.useState(!1),
                        [v, R] = l.useState(!1),
                        [$, D] = l.useState(!1),
                        [z, P] = l.useState(!1),
                        [F, M] = l.useState(null),
                        [B, L] = l.useState([]),
                        [O, H] = l.useState(!1),
                        W = (0, S.t)(),
                        [A, q] = u()(Y),
                        j = (0, w.hC)("xprofile_work_history_domain_enabled"),
                        U = l.useMemo(
                            () =>
                                (0, x.Z)((e) => {
                                    W() &&
                                        e.length >= 1 &&
                                        (H(!0),
                                        ((e) => {
                                            s()(p, Q, { query: e })
                                                .toPromise()
                                                .then((e) => {
                                                    L(e?.company_profile_type_ahead || []), H(!1);
                                                });
                                        })(e));
                                }, 500),
                            [p, W],
                        ),
                        V = l.useCallback(
                            (e) => {
                                _(!0), t(e.target.value), U(e.target.value);
                            },
                            [U, t],
                        ),
                        X = l.useCallback(
                            (e, t) => {
                                d?.current?.focus(), r(e.id, e.name, e.data?.logoUrl), _(!1);
                            },
                            [r],
                        ),
                        ee = l.useCallback((e) => {
                            _(!1), M(e), P(!0);
                        }, []),
                        te = l.useCallback(
                            (e) => {
                                j
                                    ? ee(e)
                                    : (D(!1),
                                      R(!0),
                                      A({
                                          variables: { name: e },
                                          onCompleted: (t) => {
                                              t.create_company_profile?.success && (R(!1), D(!0), r(t.create_company_profile.company_profile_results.rest_id, e, null));
                                          },
                                      }),
                                      _(!1));
                            },
                            [j, A, ee, r],
                        ),
                        ne = l.useCallback(() => {
                            _(!1), P(!1), M(null), t("");
                        }, [t]),
                        re = l.useCallback(() => {
                            _(!1), P(!1), M(null);
                        }, []),
                        oe = l.useCallback(
                            (e) => {
                                const t = i ? B?.map((e) => ({ id: e.rest_id, name: e.core?.name || "", type: "company_profile", data: { logoUrl: e.logo?.normal_url || "", query: i } })) : [];
                                return l.createElement(l.Fragment, null, E ? l.createElement(T.Z, { isLoading: O, items: t, onItemClick: X, ref: e.ref, renderFooter: () => (i ? l.createElement(h.Z, { onClick: () => te(i), style: J.createRow, testID: "create-company-profile-btn" }, l.createElement(a.Z, { style: J.createAvatar }, l.createElement(k.default, null)), l.createElement(f.ZP, { size: "subtext1" }, l.createElement(C().I18NFormatMessage, { $i18n: "h8b54e37" }, l.createElement(f.ZP, { weight: "bold" }, i)))) : null), shouldAlwaysRender: i?.length > 0, source: Z._4.CompanyProfile, style: [e.style, J.dropdown] }) : null);
                            },
                            [te, X, B, O, E, i],
                        ),
                        le = l.useCallback(
                            (t) => {
                                const { onFocus: r } = t;
                                return l.createElement(y.Z, {
                                    autoComplete: "off",
                                    endContent: j ? null : l.createElement(G, { hasSaved: $, isSaving: v || q }),
                                    errorText: e,
                                    invalid: !!e,
                                    label: N,
                                    name: "company-profile-selector-input",
                                    onChange: V,
                                    onFocus: r,
                                    onKeyPress: n,
                                    ref: d,
                                    startContent: (() => {
                                        if ("" === i) return null;
                                        const e = o?.id && i === o?.name ? o?.data?.logoUrl : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
                                        return o?.id ? l.createElement(a.Z, { style: J.logo }, l.createElement(b.default, { shape: "square", size: "medium", uri: e })) : void 0;
                                    })(),
                                    style: J.inputStyle,
                                    testID: "company-profile-selector-input",
                                    value: i,
                                });
                            },
                            [j, e, V, $, v, q, n, o?.data?.logoUrl, o?.id, o?.name, i],
                        );
                    return l.createElement(a.Z, { style: J.input }, l.createElement(I.default, { isInModal: c, renderCustomDropdown: oe, renderCustomInput: le, rounded: !0, source: Z._4.CompanyProfile, testID: "company-profile-selector", userLimit: 20 }), j && z && F && l.createElement(K, { companyName: F || "", onCancel: ne, onSelect: r, onSuccess: re }));
                },
                J = E.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 }, createRow: { flexDirection: "row", gap: 4, alignItems: "center", padding: e.spaces.space8 }, createAvatar: { width: 24, height: 24, borderRadius: e.borderRadii.xSmall, backgroundColor: e.colors.blue500, alignItems: "center", justifyContent: "center", color: e.colors.white }, logo: { paddingEnd: e.spaces.space4 }, dropdown: { maxHeight: "200px" }, input: { flexDirection: "row", gap: 16, alignItems: "center" }, success: { color: e.colors.green500 } })),
                ee = l.memo(X);
        },
        949626: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            var r = n(950822);
            const o = (e) => (0, r.Z)("div", e);
        },
        96702: (e, t, n) => {
            n.d(t, { Z: () => H });
            var r = n(202784),
                o = n(325686),
                l = n(392237),
                a = n(520385),
                i = n(991617),
                s = n(516951),
                c = n(381335),
                u = n(154003),
                d = n(885724);
            const m = r.createElement(d.default, null),
                p = l.default.create((e) => ({ editButton: { height: "auto" } })),
                f = () => {
                    const { blockId: e } = (0, i._L)();
                    return e ? r.createElement(o.Z, { style: p.editButton }, r.createElement(u.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var g = n(301503),
                h = n(989272),
                b = n(524496),
                y = n(925873),
                E = n(731708),
                _ = n(757483),
                C = n(187669),
                k = n(478414),
                x = n(949626);
            const S = ({ content: e }) => (
                    (0, C.q)(() => {
                        (0, h.fH)((0, k.yW)(k.Hx, k.K), k.Hx);
                    }),
                    r.createElement(r.Fragment, null, e && e.hasText() && r.createElement(x.Z, { className: k.Hx }, r.createElement(o.Z, { style: I.richText }, r.createElement(b.Z, { contentState: (0, g.convertToRaw)(e) }))))
                ),
                I = l.default.create((e) => {
                    const t = _.Z.hexToCss(e.colors.gray0, 0),
                        n = _.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})` } };
                }),
                w = ({ content: e, previewHeight: t, shouldTruncate: n = !0 }) => {
                    const [l, a] = r.useState(0),
                        [i, s] = r.useState(0),
                        [c, u] = r.useState(!n),
                        d = r.useRef(null);
                    r.useEffect(() => {
                        d.current && 0 === l && a(d.current.offsetHeight);
                    }, [l]);
                    const m = r.useMemo(() => {
                            const t = y.Z.getContentStateFromRaw(e);
                            return t ? (0, g.convertFromRaw)(t) : null;
                        }, [e]),
                        p = r.useMemo(() => n && l > t, [n, t, l]);
                    return m && m.hasText()
                        ? r.createElement(
                              o.Z,
                              { style: { flex: 1 } },
                              r.createElement(
                                  o.Z,
                                  {
                                      onLayout: () => {
                                          d.current && d.current.offsetHeight !== i && s(d.current.offsetHeight);
                                      },
                                      ref: d,
                                      style: p && !c ? { ...I.previewContainer, maxHeight: t } : void 0,
                                  },
                                  r.createElement(S, { content: m }),
                                  p && !c ? r.createElement(o.Z, { style: I.fade }) : null,
                              ),
                              p && r.createElement(E.ZP, { color: "link", onPress: () => u(!c), size: "subtext1", style: I.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                Z = l.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                T = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: n, sectionType: l } = (0, i.eF)(),
                        u = e.result?.content,
                        d = r.useMemo(() => l === a.NB.ABOUT && n, [n, l]);
                    return r.createElement(o.Z, { style: { ...Z.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(w, { content: u?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: d }), t ? r.createElement(o.Z, { style: Z.row }, r.createElement(f, null), r.createElement(c.Z, { onCompleted: s.Z, useIconButton: !0 })) : null);
                };
            var v = n(470397),
                R = n(823161),
                $ = n(111677),
                D = n.n($),
                z = n(873302);
            const P = D().a2f2faab,
                F = ({ endMonth: e, endYear: t, isCurrent: n, startMonth: o, startYear: l }) => {
                    const a = (0, z.ZU)(o, l),
                        i = (0, z.ZU)(e, t);
                    return a ? r.createElement(v.Z, null, r.createElement(D().I18NFormatMessage, { $i18n: "bab4ce51", start: P(a), end: n ? "Present" : i ? P(i) : "" }), r.createElement(E.ZP, null, (0, z.HM)(a, i || new Date()))) : null;
                },
                M = l.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                B = ({ block: e, isEditing: t }) => {
                    const n = e?.result?.content,
                        l = n?.company_profile_results?.result;
                    return n ? r.createElement(o.Z, { style: { ...M.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(o.Z, { style: { ...M.row, flex: 1 } }, r.createElement(R.default, { shape: "square", size: "large", uri: l?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(o.Z, { style: M.workInfo }, r.createElement(E.ZP, { size: "subtext1", weight: "bold" }, n.title), r.createElement(v.Z, null, l?.core?.name || n.company_profile_name ? r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, l?.core?.name || n.company_profile_name) : null, n.location_text ? r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, n.location_text) : null), r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, r.createElement(F, { endMonth: n.end_month, endYear: n.end_year, isCurrent: !!n.active_role, startMonth: n.start_month, startYear: n.start_year })), r.createElement(w, { content: n.description, previewHeight: 120, shouldTruncate: !0 }))), t ? r.createElement(o.Z, { style: M.row }, r.createElement(f, null), r.createElement(c.Z, { onCompleted: s.Z, useIconButton: !0 })) : null) : null;
                },
                L = ({ block: e, blockId: t, isEditing: n = !1 }) => {
                    const o = r.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case a.Mp.RICHTEXT:
                                return r.createElement(T, { block: e, isEditing: n });
                            case a.Mp.WORK_HISTORY:
                                return r.createElement(B, { block: e, isEditing: n });
                            default:
                                return null;
                        }
                    }, [e, n]);
                    return e ? r.createElement(i.Vo.Provider, { value: { ...i.dq, blockId: t, blockQueryId: e.__id } }, o()) : null;
                },
                O = l.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                H = ({ blocks: e, isEditing: t }) =>
                    e
                        ? r.createElement(
                              o.Z,
                              null,
                              e.map((n, l) => {
                                  if (!n) return null;
                                  const a = n.rest_id.block_id;
                                  if (!a || !n?.result?.core) return null;
                                  return r.createElement(
                                      o.Z,
                                      { key: a, style: O.blockGroup },
                                      r.createElement(
                                          o.Z,
                                          {
                                              style: (() => {
                                                  const t = O.block;
                                                  return 1 === e.length ? t : 0 === l ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : l > 0 && l < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : l === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          r.createElement(L, { block: n, blockId: a, isEditing: t }),
                                      ),
                                  );
                              }),
                          )
                        : null;
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                o = n(190286),
                l = n(111677),
                a = n.n(l),
                i = n(782642),
                s = n(72130),
                c = n(725516),
                u = n(876242),
                d = (n(585488), n(351743)),
                m = n.n(d);
            const p = u.Z,
                f = () => {
                    const [e, t] = m()(p);
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
                g = a().g9677c6e,
                h = a().a2b8c54c,
                b = ({ blockId: e, headline: t, onClose: n, onCompleted: l, queryId: a, subtext: u, userId: d }) => {
                    const m = (0, i.p)(),
                        p = (0, c.z)(),
                        [b, y] = f(),
                        E = r.useCallback(() => {
                            n();
                        }, [n]),
                        _ = r.useCallback(() => {
                            p.scribe({ ...(0, s.MA)("delete_block_btn", "click") }),
                                b({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, t) => {
                                        a && e.delete(a);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: h }), n(), l && l());
                                    },
                                });
                        }, [m, p, e, b, n, l, a, d]);
                    return r.createElement(o.Z, { confirmButtonDisabled: y, confirmButtonLabel: g, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: E, onConfirm: _, text: u });
                };
        },
        381335: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                o = n(325686),
                l = n(154003),
                a = n(392237),
                i = n(111677),
                s = n.n(i),
                c = n(607127),
                u = n(991617),
                d = n(512547);
            const m = s().h6a724ac,
                p = s().f94aacae,
                f = s().d96cf7ce,
                g = a.default.create((e) => ({ iconButton: { height: "auto" } })),
                h = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: n, sectionQueryId: a } = (0, u.eF)(),
                        { blockId: i, blockQueryId: s } = (0, u._L)(),
                        { userId: h, userQueryId: b } = (0, u.se)(),
                        [y, E] = r.useState(!1),
                        _ = r.useCallback(() => {
                            E(!1);
                        }, []),
                        C = r.useCallback(() => {
                            E(!0);
                        }, []);
                    return r.createElement(r.Fragment, null, t ? r.createElement(o.Z, { style: g.iconButton }, r.createElement(l.ZP, { disabled: !i || !h, icon: r.createElement(c.default, null), onClick: C, size: "xSmall", type: "destructiveText" })) : r.createElement(l.ZP, { disabled: !i || !h, onClick: C, size: "large", type: "destructiveText" }, f), y && i && h ? r.createElement(d.Z, { blockId: i, headline: m, onClose: _, onCompleted: e, queryId: n > 1 ? s : a || b, subtext: p, userId: h }) : null);
                };
        },
        785813: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(366635);
            const l = (e) => (e ? r.createElement(o.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(823161);
            const l = (e) => {
                if (!e) return null;
                const t = "Square" === e?.profile_image_shape ? "square" : "circle";
                return r.createElement(o.default, { shape: t, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        485822: (e, t, n) => {
            n.d(t, { Z: () => I });
            n(136728);
            var r = n(202784),
                o = n(325686),
                l = n(277660),
                a = n.n(l),
                i = n(107267),
                s = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(111677),
                p = n.n(m),
                f = n(982866),
                g = n(952793),
                h = n(462166),
                b = n(873302),
                y = n(96702),
                E = n(991617),
                _ = n(736993);
            const C = p().b721eb38,
                k = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: l } = (0, E.eF)(),
                        { userId: a, userQueryId: m } = (0, E.se)(),
                        p = (0, i.useHistory)(),
                        k = r.useCallback(() => {
                            p.push("/settings/bio/new/about");
                        }, [p]),
                        S = (0, g.hC)("xprofile_section_visibility_enabled"),
                        I = s.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const w = a === m,
                        Z = (0, b.Kh)(e?.slice(), h.GL);
                    return r.createElement(o.Z, { style: x.root }, r.createElement(o.Z, { style: x.header }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, C), S && w && r.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(l) } }, r.createElement(_.K3, { style: x.visibilityIcon, visibility: l })), S && t && r.createElement(_.ZP, { currentVisibility: l, sectionId: n })), r.createElement(o.Z, null, e?.length ? r.createElement(y.Z, { blocks: Z, isEditing: t }) : r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: I, onClick: k, style: x.container }, r.createElement(u.ZP, null, "Tell us about yourself"), r.createElement(f.default, null)) : null)));
                },
                x = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                S = ({ isEditing: e = !1, section: t }) => {
                    const n = a()(h.C_, t),
                        o = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(k, { blocks: o, isEditing: e }) : null;
                },
                I = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(S, { isEditing: e, section: t }) : r.createElement(k, { isEditing: e }));
        },
        164349: (e, t, n) => {
            n.d(t, { Z: () => I });
            n(136728);
            var r = n(202784),
                o = n(325686),
                l = n(277660),
                a = n.n(l),
                i = n(107267),
                s = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(111677),
                p = n.n(m),
                f = n(982866),
                g = n(952793),
                h = n(462166),
                b = n(873302),
                y = n(96702),
                E = n(991617),
                _ = n(736993);
            const C = p().a622dfcc,
                k = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: l } = (0, E.eF)(),
                        { userId: a, userQueryId: m } = (0, E.se)(),
                        p = (0, i.useHistory)(),
                        k = r.useCallback(() => {
                            n ? p.push(`/settings/bio/new/${n}/work_experience`) : p.push("/settings/bio/new/work_experience");
                        }, [p, n]),
                        S = (0, g.hC)("xprofile_section_visibility_enabled"),
                        I = s.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const w = a === m,
                        Z = (0, b.Kh)(e?.slice(), h.lw),
                        T = (0, b.s1)(Z);
                    return r.createElement(o.Z, { style: x.root }, r.createElement(o.Z, { style: x.headerSection }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, C), S && w && r.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(l) } }, r.createElement(_.K3, { style: x.visibilityIcon, visibility: l })), S && t && r.createElement(_.ZP, { currentVisibility: l, sectionId: n })), r.createElement(o.Z, { style: x.blocksList }, T && T.length > 0 ? r.createElement(y.Z, { blocks: T, isEditing: t }) : null, r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: I, onClick: k, style: x.container }, r.createElement(u.ZP, null, "Add experience"), r.createElement(f.default, null)) : null)));
                },
                x = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                S = ({ isEditing: e = !1, section: t }) => {
                    const n = a()(h.C_, t),
                        o = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(k, { blocks: o, isEditing: e }) : null;
                },
                I = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(S, { isEditing: e, section: t }) : r.createElement(k, { isEditing: e }));
        },
        736993: (e, t, n) => {
            n.d(t, { K3: () => _, Q: () => x, ZP: () => S });
            var r = n(163015),
                o = n(202784),
                l = n(400752),
                a = n(325686),
                i = (n(585488), n(351743)),
                s = n.n(i),
                c = n(731708),
                u = n(797553),
                d = n(143670),
                m = n(392237),
                p = n(111677),
                f = n.n(p),
                g = n(14284),
                h = n(468670),
                b = n(520385),
                y = n(991617);
            const E = r.Z,
                _ = ({ style: e, visibility: t }) => (t === b.pR.PUBLIC ? o.createElement(g.default, { style: e }) : t === b.pR.PRIVATE ? o.createElement(h.default, { style: e }) : void o.Fragment),
                C = f().baffe39a,
                k = f().je07e266,
                x = (e) => (e === b.pR.PUBLIC ? C : e === b.pR.PRIVATE ? k : ""),
                S = ({ currentVisibility: e, sectionId: t }) => {
                    const n = (0, l.b9)(y.j7),
                        [r, i] = o.useState(e ?? b.pR.PUBLIC),
                        [m, p] = o.useState(!1),
                        [C] = s()(E),
                        k = o.useCallback(
                            (e) => {
                                t &&
                                    (i(e),
                                    p(!1),
                                    C({
                                        variables: { sectionId: t, visibility: e },
                                        onCompleted: () => {
                                            n(!0);
                                        },
                                    }));
                            },
                            [C, t, n],
                        );
                    return o.createElement(a.Z, null, o.createElement(a.Z, { onClick: () => p(!0), style: I.target }, o.createElement(_, { style: I.icon, visibility: r }), o.createElement(c.ZP, { style: I.targetText }, x(r))), m && o.createElement(u.default, { isFixed: !0, onDismiss: () => p(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, o.createElement(d.Z, { Icon: g.default, actionText: f().baffe39a, onClick: () => k(b.pR.PUBLIC) }), o.createElement(d.Z, { Icon: h.default, actionText: f().je07e266, onClick: () => k(b.pR.PRIVATE) })));
                },
                I = m.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, n) => {
            n.d(t, { Fo: () => a, Vo: () => m, Y_: () => s, _L: () => p, bQ: () => c, dq: () => d, eF: () => u, j7: () => f, se: () => i, w: () => l });
            var r = n(202784),
                o = n(565058);
            const l = { userId: null, userQueryId: null },
                a = r.createContext(l),
                i = () => r.useContext(a),
                s = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = r.createContext(s),
                u = () => r.useContext(c),
                d = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = r.createContext(d),
                p = () => r.useContext(m),
                f = (0, o.cn)(!1);
        },
        664052: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                o = n(301503),
                l = n(325686),
                a = n(925873),
                i = n(989272),
                s = n(891198),
                c = n(731708),
                u = n(977952),
                d = n(297256),
                m = n(524496),
                p = n(392237),
                f = n(111677),
                g = n.n(f),
                h = n(187669),
                b = n(874111);
            const y = g().c2333081,
                E = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        n = a.Z.initEditorState(t);
                    return a.Z.convertEmojiToEntities(n);
                },
                _ = p.default.create((e) => ({ message: { flexDirection: "row" }, textCountLabel: { flexDirection: "row", alignSelf: "center" }, container: { paddingHorizontal: e.spaces.space20, paddingTop: e.spaces.space28, paddingBottom: e.spaces.space20 }, readOnlyContainer: { padding: e.spaces.space16, maxHeight: "500px", overflowX: "auto", backgroundColor: e.colors.gray0, color: e.colors.gray300 }, richTextWrapper: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderRadius: e.borderRadii.small, padding: e.spaces.space1, marginBottom: e.spaces.space16 } })),
                C = ({ allowExtendedPasteStyles: e, characterLimit: t, editable: n = !0, editorClass: p, editorStyles: f, initialState: g = "", limitedRichText: C = !1, numberOfLines: k = 10, onChange: x, textSizesOverride: S }) => {
                    const [I, w] = r.useState(E(g));
                    (0, h.q)(() => {
                        f && p && (0, i.fH)(f, p);
                    });
                    const Z = r.useMemo(() => I?.getCurrentContent(), [I]),
                        T = r.useCallback(
                            (e) => {
                                const t = a.Z.convertEmojiToEntities(e);
                                w(t), x(t);
                            },
                            [x],
                        ),
                        v = (0, b.c6)(I);
                    let R = v;
                    v > 1 && (R = s.ZP.getFormattedCount(v));
                    const $ = r.useMemo(() => {
                            const e = !!t && v > t;
                            return r.createElement(l.Z, null, r.createElement(c.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: _.textCountLabel }, y({ count: R })));
                        }, [v, R, t]),
                        D = r.useMemo(() => ({ allowExtendedPasteStyles: e, editorState: I, element: u.Z, stripPastedStyles: !0 }), [e, I]);
                    return r.createElement(l.Z, null, n ? r.createElement(l.Z, { style: _.richTextWrapper }, r.createElement(d.b, { inputStyle: _.container, isInputFullWidth: !0, limitedRichText: C, numberOfLines: k, onChange: T, richTextInputContext: D, textSizesOverride: S, toolbarRightControl: $ })) : r.createElement(r.Fragment, null, Z && Z.hasText() ? r.createElement(l.Z, { style: _.richTextWrapper }, r.createElement(l.Z, { style: _.readOnlyContainer }, r.createElement(m.Z, { contentState: (0, o.convertToRaw)(Z) }))) : null));
                };
        },
        998693: (e, t, n) => {
            n.d(t, { Z: () => x });
            var r = n(36879),
                o = n(202784),
                l = n(10622),
                a = n.n(l),
                i = (n(585488), n(437429)),
                s = n.n(i),
                c = n(386802),
                u = n(855488),
                d = n(392237),
                m = n(111677),
                p = n.n(m),
                f = n(665468),
                g = n(666536),
                h = n(125568),
                b = n(874088),
                y = n(339110),
                E = n(524110);
            const _ = p().jaaa8984,
                C = r.Z,
                k = d.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                x = ({ onChange: e, onEnter: t, onSelect: n, value: r }) => {
                    const { isModal: l } = o.useContext(c.Z),
                        i = o.useRef(null),
                        d = s()(),
                        [m, p] = o.useState(!1),
                        [x, S] = o.useState([]),
                        [I, w] = o.useState(!1),
                        Z = (0, h.t)(),
                        T = o.useMemo(
                            () =>
                                (0, g.Z)((e) => {
                                    Z() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              w(!0),
                                              ((e) => {
                                                  a()(d, C, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          S(e?.location_type_ahead || []), w(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [d, Z],
                        ),
                        v = o.useCallback(
                            (t) => {
                                e({ value: t.target.value }), T(t.target.value);
                            },
                            [T, e],
                        ),
                        R = o.useCallback(
                            (e, t) => {
                                i?.current?.focus(), n({ id: e.id, name: e.name }), p(!1);
                            },
                            [n],
                        ),
                        $ = o.useCallback(
                            (e) => {
                                const t = x?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return o.createElement(o.Fragment, null, m ? o.createElement(E.Z, { isLoading: I, items: t, onItemClick: R, ref: e.ref, source: y._4.JobLocation, style: e.style }) : null);
                            },
                            [R, x, I, m],
                        ),
                        D = o.useCallback(
                            (e) => {
                                const { onFocus: n } = e;
                                return o.createElement(u.Z, { Icon: f.default, autoComplete: "off", label: _, name: "location-selector-input", onChange: v, onFocus: n, onKeyPress: t, ref: i, style: k.inputStyle, testID: "location-selector-input", value: r });
                            },
                            [v, t, r],
                        );
                    return o.createElement(b.default, { isInModal: l, renderCustomDropdown: $, renderCustomInput: D, rounded: !0, source: y._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(925873),
                l = n(392237),
                a = n(913670);
            const i = l.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                s = ({ editorState: e, onChange: t }) => {
                    const n = r.useCallback(
                        (n) => {
                            const r = o.Z.insertTextAtCursor(e, n.text);
                            t(r);
                        },
                        [e, t],
                    );
                    return r.createElement(a.Z, { iconStyle: i.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var r = n(202784),
                o = n(301503),
                l = n(597496),
                a = n(339110),
                i = n(456910),
                s = n(230295),
                c = n(267446);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = r.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: o, isInlineReply: i, onTypeaheadStateChange: s, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                m = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return r.createElement(l.H1, { composeCommunityId: t, contextText: n, isInline: o, isInlineReply: i, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: s, query: m, ref: this._genericWrapperRef, source: c || a._4.Compose }, e(this._handleInputChange));
                        }),
                        (this._getCaret = (e) => e.getSelection().getStartOffset()),
                        (this._getPlaintextFromCurrentBlock = (e) => {
                            const t = e.getSelection().anchorKey;
                            return e.getCurrentContent().getBlockForKey(t).getText();
                        }),
                        (this._handleSelectItem = (e) => {
                            const { onTextUpdated: t } = this.props,
                                { queryContext: n } = this.state;
                            if (n) {
                                const r = (0, c.k)(e, n.resultType);
                                t(this._replaceToken(r, n));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, s.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    r = this._getPlaintextFromCurrentBlock(e),
                                    { end: o, start: l, word: a } = i.si(this._getCaret(e), r),
                                    s = i.bR(a || "", "compose");
                                if (s?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === l)) this._setQueryContext(void 0);
                                else if (s) {
                                    const { q: t, result_type: n } = s;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: l, endIndex: o });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: r, startIndex: l } = t,
                        a = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: l, focusOffset: r }),
                        i = o.Modifier.replaceText(n.getCurrentContent(), a, e),
                        s = o.EditorState.push(n, i, "insert-characters"),
                        c = l + e.length,
                        u = s.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return o.EditorState.forceSelection(s, u);
                }
            }
            const d = u;
        },
        478414: (e, t, n) => {
            n.d(t, { Hx: () => s, K: () => l, bb: () => i, gv: () => a, kg: () => c, yW: () => u });
            var r = n(779802),
                o = n(392237);
            const l = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                a = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                i = ({ h1FontSize: e, h2FontSize: t, paragraphFontSize: n }) => [
                    { blockType: r.P7.header1, label: r.et, component: (0, r.LI)({ size: e, children: r.et, extendedWidth: !0 }) },
                    { blockType: r.P7.header2, label: r.PW, component: (0, r.LI)({ size: t, weight: "bold", children: r.PW }) },
                    { blockType: r.P7.paragraph, label: r.$u, component: (0, r.LI)({ size: n, children: r.$u }) },
                ],
                s = "extended-profile",
                c = "extended-profile-mobile-webview",
                u = (e, { h1FontSize: t, h2FontSize: n, paragraphFontSize: r }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${o.default.theme.fontFamilies.chirpExtended};\n        font-size: ${o.default.theme.fontSizes[t]};\n        line-height: ${o.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${o.default.theme.fontFamilies.chirpExtended};\n        font-size: ${o.default.theme.fontSizes[t]};\n        line-height: ${o.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${o.default.theme.fontSizes[n]};\n        font-weight: ${o.default.theme.fontWeights.bold};\n        line-height: ${o.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${o.default.theme.fontWeights.bold};\n        line-height: ${o.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes[r]};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes[r]};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes[r]};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space2};\n        margin-left: calc(${o.default.theme.spaces.space20} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes[r]};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space2};\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space20} + ${o.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes[r]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes[r]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        72130: (e, t, n) => {
            n.d(t, { Ak: () => i, MA: () => a, Rz: () => r, Zi: () => l, he: () => o });
            const r = () => ({ component: "extended_profile_settings", action: "click" }),
                o = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                l = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                a = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                i = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => o, NB: () => l, P2: () => a, j3: () => r, pR: () => i });
            const r = 5e4,
                o = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                l = (o.RICHTEXT, o.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                a = { about: l.ABOUT, work_experience: l.WORK_EXPERIENCE },
                i = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => f, Kh: () => m, ZU: () => d, hW: () => h, s1: () => p, uR: () => g });
            var r = n(990242),
                o = n.n(r),
                l = n(111677),
                a = n.n(l),
                i = n(520385),
                s = n(462166);
            const c = a().eb7710f1,
                u = a().bfc38bb5,
                d = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const n = e?.filter((e) => e);
                    return n
                        ? n.map((e) => {
                              const n = { ...e },
                                  r = o()(s.wJ, n),
                                  l = o()(t, r.result?.content);
                              return { __id: n.__id, id: n.id, rest_id: n.rest_id, result: { ...r.result, content: l } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const n = e.result?.content,
                                r = t.result?.content,
                                o = (n?.active_role ? new Date() : d(n?.end_month, n?.end_year)) ?? new Date(0),
                                l = (r?.active_role ? new Date() : d(r?.end_month, r?.end_year)) ?? new Date(0);
                            if (o.getFullYear() !== l.getFullYear()) return l.getFullYear() - o.getFullYear();
                            if (o.getMonth() !== l.getMonth()) return l.getMonth() - o.getMonth();
                            const a = d(n?.start_month, n?.start_year) ?? new Date(0),
                                i = d(r?.start_month, r?.start_year) ?? new Date(0);
                            return a.getFullYear() !== i.getFullYear() ? i.getFullYear() - a.getFullYear() : i.getMonth() - a.getMonth();
                        });
                },
                f = (e, t) => {
                    let n = t.getMonth() - e.getMonth() + 1,
                        r = t.getFullYear() - e.getFullYear();
                    return n < 0 && (r--, (n += 12)), r && n ? `${c({ years: r })} ${u({ months: n })}` : r ? c({ years: r }) : n ? u({ months: n }) : "";
                },
                g = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === i.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === i.Mp.RICHTEXT)) : void 0),
                h = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => a, DC: () => r, _e: () => l, iN: () => c, kd: () => i, pc: () => o });
            const r = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                o = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                l = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                a = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                i = { content_state: { blocks: [], entity_map: [] } },
                s = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: s.DRAFT, PUBLISHED: s.PUBLISHED });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-e019dbda.ad41b55a.js.map
