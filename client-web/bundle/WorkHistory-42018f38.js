"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-42018f38"],
    {
        924108: (e, t, n) => {
            n.d(t, { Z: () => ee });
            var r = n(264964),
                l = n(617277),
                a = n(202784),
                o = n(325686),
                s = n(10622),
                i = n.n(s),
                c = (n(585488), n(351743)),
                u = n.n(c),
                d = n(437429),
                m = n.n(d),
                p = n(167630),
                g = n(731708),
                y = n(386802),
                b = n(530732),
                f = n(823161),
                h = n(855488),
                E = n(392237),
                C = n(674132),
                x = n.n(C),
                _ = n(379327),
                Z = n(666536),
                k = n(125568),
                S = n(874088),
                I = n(952793),
                v = n(339110),
                w = n(524110),
                T = n(109659),
                R = n(224484),
                P = n(277660),
                B = n.n(P),
                F = n(154003),
                D = n(665285),
                z = n(757700);
            const H = R.Z,
                L = T.Z,
                M = x().caa46e54,
                q = x().e893fe6e,
                j = x().j1c09ca4,
                W = x().i2209530,
                O = x().cfd2f35e,
                Q = x().b679ff6a,
                V = "DuplicateDomain",
                K = ({ companyProfile: e, onSelect: t }) => {
                    const n = B()(H, e),
                        r = n?.id ? n?.result?.logo?.normal_url : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                        l = a.useCallback(() => {
                            t(n.rest_id, n.result.core.name, r);
                        }, [r, n.rest_id, n.result.core.name, t]);
                    return a.createElement(
                        g.ZP,
                        { size: "subtext1", style: U.suggestion },
                        a.createElement(
                            x().I18NFormatMessage,
                            { $i18n: "ca584c31" },
                            a.createElement(
                                o.Z,
                                { style: U.suggestion },
                                a.createElement(o.Z, { style: U.logo }, a.createElement(f.default, { shape: "square", size: "medium", uri: r })),
                                a.createElement(b.Z, { interactiveStyles: null, onClick: l }, ({ isHovered: e }) => a.createElement(g.ZP, { color: "text", style: { textDecoration: "underline", cursor: "pointer", color: e ? E.default.theme.colors.primary : E.default.theme.colors.text }, weight: "bold" }, n.result.core.name)),
                            ),
                        ),
                    );
                },
                U = E.default.create((e) => ({ root: { width: "100%", minWidth: "300px", maxWidth: "600px" }, header: { padding: e.spaces.space16 }, logo: { paddingEnd: e.spaces.space4 }, suggestion: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, actions: { padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 } })),
                A = ({ companyName: e, onCancel: t, onSelect: n, onSuccess: r }) => {
                    const [l, s] = a.useState(!1),
                        [i, c] = a.useState(null),
                        [d, m] = a.useState(""),
                        [p] = u()(L),
                        [y, b] = a.useState(null),
                        f = a.useCallback(() => {
                            s(!0),
                                p({
                                    variables: { name: e, domain: i },
                                    onCompleted: (t) => {
                                        const l = t.create_company_profile?.create_company_profile_result;
                                        t.create_company_profile?.success ? (s(!1), n(l.company_profile_results.rest_id, e, null), r()) : l?.error_code === V && (s(!1), m(V), l.company_profile_results && b(l.company_profile_results));
                                    },
                                });
                        }, [e, p, i, n, r]),
                        E = a.useCallback(() => {
                            !i || (0, D.Z)(i, null, !1) ? f() : m(Q);
                        }, [i, f]),
                        C = a.useCallback(() => {
                            c(null), t();
                        }, [t]);
                    return a.createElement(
                        z.ZP,
                        { clickMaskToClose: !1, modalSize: "dynamic", withBackground: !0 },
                        a.createElement(
                            o.Z,
                            { style: U.root },
                            a.createElement(o.Z, { style: U.header }, a.createElement(g.ZP, { size: "headline2", weight: "bold" }, q)),
                            a.createElement(h.Z, { editable: !1, label: M, name: "company_name", onChange: () => {}, value: e }),
                            a.createElement(h.Z, {
                                editable: !l,
                                errorText: d !== V ? d : "",
                                helperText: (() => {
                                    if (d === V && y)
                                        return a.createElement(K, {
                                            companyProfile: y,
                                            onSelect: (e, t, l) => {
                                                n(e, t, l), r();
                                            },
                                        });
                                })(),
                                invalid: !!d,
                                label: j,
                                name: "domain",
                                onChange: (e) => c(e.target.value),
                                value: i || "",
                            }),
                            a.createElement(o.Z, { style: U.actions }, a.createElement(F.ZP, { disabled: l, onClick: C, size: "large", type: "primaryOutlined" }, O), a.createElement(F.ZP, { disabled: l, onClick: E, size: "large", type: "brandFilled" }, W)),
                        ),
                    );
                },
                $ = l.Z,
                N = r.Z,
                Y = x().eedfd35c,
                G = ({ hasSaved: e, isSaving: t }) => {
                    const [n, r] = a.useState(!1);
                    return (
                        a.useEffect(() => {
                            !t &&
                                e &&
                                (r(!0),
                                setTimeout(() => {
                                    r(!1);
                                }, 2e3));
                        }, [t, e]),
                        t || n ? a.createElement(o.Z, null, t && a.createElement(p.Z, { size: "small" }), n && a.createElement(g.ZP, { style: X.success }, "Saved")) : null
                    );
                },
                J = ({ errorText: e, onChange: t, onEnter: n, onSelect: r, selectedValue: l, value: s }) => {
                    const { isModal: c } = a.useContext(y.Z),
                        d = a.useRef(null),
                        p = m()(),
                        [E, C] = a.useState(!1),
                        [T, R] = a.useState(!1),
                        [P, B] = a.useState(!1),
                        [F, D] = a.useState(!1),
                        [z, H] = a.useState(null),
                        [L, M] = a.useState([]),
                        [q, j] = a.useState(!1),
                        W = (0, k.t)(),
                        [O, Q] = u()(N),
                        V = (0, I.hC)("xprofile_work_history_domain_enabled"),
                        K = a.useMemo(
                            () =>
                                (0, Z.Z)((e) => {
                                    W() &&
                                        e.length >= 1 &&
                                        (j(!0),
                                        ((e) => {
                                            i()(p, $, { query: e })
                                                .toPromise()
                                                .then((e) => {
                                                    M(e?.company_profile_type_ahead || []), j(!1);
                                                });
                                        })(e));
                                }, 500),
                            [p, W],
                        ),
                        U = a.useCallback(
                            (e) => {
                                C(!0), t(e.target.value), K(e.target.value);
                            },
                            [K, t],
                        ),
                        J = a.useCallback(
                            (e, t) => {
                                d?.current?.focus(), r(e.id, e.name, e.data?.logoUrl), C(!1);
                            },
                            [r],
                        ),
                        ee = a.useCallback((e) => {
                            C(!1), H(e), D(!0);
                        }, []),
                        te = a.useCallback(
                            (e) => {
                                V
                                    ? ee(e)
                                    : (B(!1),
                                      R(!0),
                                      O({
                                          variables: { name: e },
                                          onCompleted: (t) => {
                                              t.create_company_profile?.success && (R(!1), B(!0), r(t.create_company_profile.company_profile_results.rest_id, e, null));
                                          },
                                      }),
                                      C(!1));
                            },
                            [V, O, ee, r],
                        ),
                        ne = a.useCallback(() => {
                            C(!1), D(!1), H(null), t("");
                        }, [t]),
                        re = a.useCallback(() => {
                            C(!1), D(!1), H(null);
                        }, []),
                        le = a.useCallback(
                            (e) => {
                                const t = s ? L?.map((e) => ({ id: e.rest_id, name: e.core?.name || "", type: "company_profile", data: { logoUrl: e.logo?.normal_url || "", query: s } })) : [];
                                return a.createElement(a.Fragment, null, E ? a.createElement(w.Z, { isLoading: q, items: t, onItemClick: J, ref: e.ref, renderFooter: () => (s ? a.createElement(b.Z, { onClick: () => te(s), style: X.createRow, testID: "create-company-profile-btn" }, a.createElement(o.Z, { style: X.createAvatar }, a.createElement(_.default, null)), a.createElement(g.ZP, { size: "subtext1" }, a.createElement(x().I18NFormatMessage, { $i18n: "h8b54e37" }, a.createElement(g.ZP, { weight: "bold" }, s)))) : null), shouldAlwaysRender: s?.length > 0, source: v._4.CompanyProfile, style: [e.style, X.dropdown] }) : null);
                            },
                            [te, J, L, q, E, s],
                        ),
                        ae = a.useCallback(
                            (t) => {
                                const { onFocus: r } = t;
                                return a.createElement(h.Z, {
                                    autoComplete: "off",
                                    endContent: V ? null : a.createElement(G, { hasSaved: P, isSaving: T || Q }),
                                    errorText: e,
                                    invalid: !!e,
                                    label: Y,
                                    name: "company-profile-selector-input",
                                    onChange: U,
                                    onFocus: r,
                                    onKeyPress: n,
                                    ref: d,
                                    startContent: (() => {
                                        if ("" === s) return null;
                                        const e = l?.id && s === l?.name ? l?.data?.logoUrl : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
                                        return l?.id ? a.createElement(o.Z, { style: X.logo }, a.createElement(f.default, { shape: "square", size: "medium", uri: e })) : void 0;
                                    })(),
                                    style: X.inputStyle,
                                    testID: "company-profile-selector-input",
                                    value: s,
                                });
                            },
                            [V, e, U, P, T, Q, n, l?.data?.logoUrl, l?.id, l?.name, s],
                        );
                    return a.createElement(o.Z, { style: X.input }, a.createElement(S.default, { isInModal: c, renderCustomDropdown: le, renderCustomInput: ae, rounded: !0, source: v._4.CompanyProfile, testID: "company-profile-selector", userLimit: 20 }), V && F && z && a.createElement(A, { companyName: z || "", onCancel: ne, onSelect: r, onSuccess: re }));
                },
                X = E.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 }, createRow: { flexDirection: "row", gap: 4, alignItems: "center", padding: e.spaces.space8 }, createAvatar: { width: 24, height: 24, borderRadius: e.borderRadii.xSmall, backgroundColor: e.colors.blue500, alignItems: "center", justifyContent: "center", color: e.colors.white }, logo: { paddingEnd: e.spaces.space4 }, dropdown: { maxHeight: "200px" }, input: { flexDirection: "row", gap: 16, alignItems: "center" }, success: { color: e.colors.green500 } })),
                ee = a.memo(J);
        },
        96702: (e, t, n) => {
            n.d(t, { Z: () => j });
            var r = n(202784),
                l = n(325686),
                a = n(392237),
                o = n(520385),
                s = n(991617),
                i = n(516951),
                c = n(381335),
                u = n(154003),
                d = n(885724);
            const m = r.createElement(d.default, null),
                p = a.default.create((e) => ({ editButton: { height: "auto" } })),
                g = () => {
                    const { blockId: e } = (0, s._L)();
                    return e ? r.createElement(l.Z, { style: p.editButton }, r.createElement(u.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var y = n(301503),
                b = n(989272),
                f = n(524496),
                h = n(925873),
                E = n(731708),
                C = n(757483),
                x = n(187669),
                _ = n(478414),
                Z = n(949626);
            const k = ({ content: e }) => (
                    (0, x.q)(() => {
                        (0, b.fH)((0, _.yW)(_.Hx, _.K), _.Hx);
                    }),
                    r.createElement(r.Fragment, null, e && e.hasText() && r.createElement(Z.Z, { className: _.Hx }, r.createElement(l.Z, { style: S.richText }, r.createElement(f.Z, { contentState: (0, y.convertToRaw)(e) }))))
                ),
                S = a.default.create((e) => {
                    const t = C.Z.hexToCss(e.colors.gray0, 0),
                        n = C.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})` } };
                }),
                I = ({ content: e, previewHeight: t, shouldTruncate: n = !0 }) => {
                    const [a, o] = r.useState(0),
                        [s, i] = r.useState(0),
                        [c, u] = r.useState(!n),
                        d = r.useRef(null);
                    r.useEffect(() => {
                        d.current && 0 === a && o(d.current.offsetHeight);
                    }, [a]);
                    const m = r.useMemo(() => {
                            const t = h.Z.getContentStateFromRaw(e);
                            return t ? (0, y.convertFromRaw)(t) : null;
                        }, [e]),
                        p = r.useMemo(() => n && a > t, [n, t, a]);
                    return m && m.hasText()
                        ? r.createElement(
                              l.Z,
                              { style: { flex: 1 } },
                              r.createElement(
                                  l.Z,
                                  {
                                      onLayout: () => {
                                          d.current && d.current.offsetHeight !== s && i(d.current.offsetHeight);
                                      },
                                      ref: d,
                                      style: p && !c ? { ...S.previewContainer, maxHeight: t } : void 0,
                                  },
                                  r.createElement(k, { content: m }),
                                  p && !c ? r.createElement(l.Z, { style: S.fade }) : null,
                              ),
                              p && r.createElement(E.ZP, { color: "link", onPress: () => u(!c), size: "subtext1", style: S.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                v = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                w = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: n, sectionType: a } = (0, s.eF)(),
                        u = e.result?.content,
                        d = r.useMemo(() => a === o.NB.ABOUT && n, [n, a]);
                    return r.createElement(l.Z, { style: { ...v.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(I, { content: u?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: d }), t ? r.createElement(l.Z, { style: v.row }, r.createElement(g, null), r.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null);
                };
            var T = n(470397),
                R = n(823161),
                P = n(674132),
                B = n.n(P),
                F = n(873302);
            const D = B().a2f2faab,
                z = ({ endMonth: e, endYear: t, isCurrent: n, startMonth: l, startYear: a }) => {
                    const o = (0, F.ZU)(l, a),
                        s = (0, F.ZU)(e, t);
                    return o ? r.createElement(T.Z, null, r.createElement(B().I18NFormatMessage, { $i18n: "bab4ce51", start: D(o), end: n ? "Present" : s ? D(s) : "" }), r.createElement(E.ZP, null, (0, F.HM)(o, s || new Date()))) : null;
                },
                H = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                L = ({ block: e, isEditing: t }) => {
                    const n = e?.result?.content,
                        a = n?.company_profile_results?.result;
                    return n ? r.createElement(l.Z, { style: { ...H.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(l.Z, { style: { ...H.row, flex: 1 } }, r.createElement(R.default, { shape: "square", size: "large", uri: a?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(l.Z, { style: H.workInfo }, r.createElement(E.ZP, { size: "subtext1", weight: "bold" }, n.title), r.createElement(T.Z, null, a?.core?.name || n.company_profile_name ? r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, a?.core?.name || n.company_profile_name) : null, n.location_text ? r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, n.location_text) : null), r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, r.createElement(z, { endMonth: n.end_month, endYear: n.end_year, isCurrent: !!n.active_role, startMonth: n.start_month, startYear: n.start_year })), r.createElement(I, { content: n.description, previewHeight: 120, shouldTruncate: !0 }))), t ? r.createElement(l.Z, { style: H.row }, r.createElement(g, null), r.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null) : null;
                },
                M = ({ block: e, blockId: t, isEditing: n = !1 }) => {
                    const l = r.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case o.Mp.RICHTEXT:
                                return r.createElement(w, { block: e, isEditing: n });
                            case o.Mp.WORK_HISTORY:
                                return r.createElement(L, { block: e, isEditing: n });
                            default:
                                return null;
                        }
                    }, [e, n]);
                    return e ? r.createElement(s.Vo.Provider, { value: { ...s.dq, blockId: t, blockQueryId: e.__id } }, l()) : null;
                },
                q = a.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                j = ({ blocks: e, isEditing: t }) =>
                    e
                        ? r.createElement(
                              l.Z,
                              null,
                              e.map((n, a) => {
                                  if (!n) return null;
                                  const o = n.rest_id.block_id;
                                  if (!o || !n?.result?.core) return null;
                                  return r.createElement(
                                      l.Z,
                                      { key: o, style: q.blockGroup },
                                      r.createElement(
                                          l.Z,
                                          {
                                              style: (() => {
                                                  const t = q.block;
                                                  return 1 === e.length ? t : 0 === a ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a > 0 && a < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          r.createElement(M, { block: n, blockId: o, isEditing: t }),
                                      ),
                                  );
                              }),
                          )
                        : null;
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                l = n(190286),
                a = n(674132),
                o = n.n(a),
                s = n(782642),
                i = n(72130),
                c = n(725516),
                u = n(876242),
                d = (n(585488), n(351743)),
                m = n.n(d);
            const p = u.Z,
                g = () => {
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
                y = o().g9677c6e,
                b = o().a2b8c54c,
                f = ({ blockId: e, headline: t, onClose: n, onCompleted: a, queryId: o, subtext: u, userId: d }) => {
                    const m = (0, s.p)(),
                        p = (0, c.z)(),
                        [f, h] = g(),
                        E = r.useCallback(() => {
                            n();
                        }, [n]),
                        C = r.useCallback(() => {
                            p.scribe({ ...(0, i.MA)("delete_block_btn", "click") }),
                                f({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, t) => {
                                        o && e.delete(o);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: b }), n(), a && a());
                                    },
                                });
                        }, [m, p, e, f, n, a, o, d]);
                    return r.createElement(l.Z, { confirmButtonDisabled: h, confirmButtonLabel: y, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: E, onConfirm: C, text: u });
                };
        },
        381335: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                l = n(325686),
                a = n(154003),
                o = n(392237),
                s = n(674132),
                i = n.n(s),
                c = n(607127),
                u = n(991617),
                d = n(512547);
            const m = i().h6a724ac,
                p = i().f94aacae,
                g = i().d96cf7ce,
                y = o.default.create((e) => ({ iconButton: { height: "auto" } })),
                b = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: n, sectionQueryId: o } = (0, u.eF)(),
                        { blockId: s, blockQueryId: i } = (0, u._L)(),
                        { userId: b, userQueryId: f } = (0, u.se)(),
                        [h, E] = r.useState(!1),
                        C = r.useCallback(() => {
                            E(!1);
                        }, []),
                        x = r.useCallback(() => {
                            E(!0);
                        }, []);
                    return r.createElement(r.Fragment, null, t ? r.createElement(l.Z, { style: y.iconButton }, r.createElement(a.ZP, { disabled: !s || !b, icon: r.createElement(c.default, null), onClick: x, size: "xSmall", type: "destructiveText" })) : r.createElement(a.ZP, { disabled: !s || !b, onClick: x, size: "large", type: "destructiveText" }, g), h && s && b ? r.createElement(d.Z, { blockId: s, headline: m, onClose: C, onCompleted: e, queryId: n > 1 ? i : o || f, subtext: p, userId: b }) : null);
                };
        },
        785813: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                l = n(366635);
            const a = (e) => (e ? r.createElement(l.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                l = n(823161);
            const a = (e) => {
                if (!e) return null;
                const t = "Square" === e?.profile_image_shape ? "square" : "circle";
                return r.createElement(l.default, { shape: t, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        485822: (e, t, n) => {
            n.d(t, { Z: () => S });
            n(136728);
            var r = n(202784),
                l = n(325686),
                a = n(277660),
                o = n.n(a),
                s = n(107267),
                i = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(674132),
                p = n.n(m),
                g = n(982866),
                y = n(952793),
                b = n(462166),
                f = n(873302),
                h = n(96702),
                E = n(991617),
                C = n(736993);
            const x = p().b721eb38,
                _ = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: a } = (0, E.eF)(),
                        { userId: o, userQueryId: m } = (0, E.se)(),
                        p = (0, s.useHistory)(),
                        _ = r.useCallback(() => {
                            p.push("/settings/bio/new/about");
                        }, [p]),
                        k = (0, y.hC)("xprofile_section_visibility_enabled"),
                        S = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const I = o === m,
                        v = (0, f.Kh)(e?.slice(), b.GL);
                    return r.createElement(l.Z, { style: Z.root }, r.createElement(l.Z, { style: Z.header }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, x), k && I && r.createElement(u.ZP, { hoverLabel: { label: (0, C.Q)(a) } }, r.createElement(C.K3, { style: Z.visibilityIcon, visibility: a })), k && t && r.createElement(C.ZP, { currentVisibility: a, sectionId: n })), r.createElement(l.Z, null, e?.length ? r.createElement(h.Z, { blocks: v, isEditing: t }) : r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: S, onClick: _, style: Z.container }, r.createElement(u.ZP, null, "Tell us about yourself"), r.createElement(g.default, null)) : null)));
                },
                Z = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                k = ({ isEditing: e = !1, section: t }) => {
                    const n = o()(b.C_, t),
                        l = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(_, { blocks: l, isEditing: e }) : null;
                },
                S = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(k, { isEditing: e, section: t }) : r.createElement(_, { isEditing: e }));
        },
        164349: (e, t, n) => {
            n.d(t, { Z: () => S });
            n(136728);
            var r = n(202784),
                l = n(325686),
                a = n(277660),
                o = n.n(a),
                s = n(107267),
                i = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(674132),
                p = n.n(m),
                g = n(982866),
                y = n(952793),
                b = n(462166),
                f = n(873302),
                h = n(96702),
                E = n(991617),
                C = n(736993);
            const x = p().a622dfcc,
                _ = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: a } = (0, E.eF)(),
                        { userId: o, userQueryId: m } = (0, E.se)(),
                        p = (0, s.useHistory)(),
                        _ = r.useCallback(() => {
                            n ? p.push(`/settings/bio/new/${n}/work_experience`) : p.push("/settings/bio/new/work_experience");
                        }, [p, n]),
                        k = (0, y.hC)("xprofile_section_visibility_enabled"),
                        S = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const I = o === m,
                        v = (0, f.Kh)(e?.slice(), b.lw),
                        w = (0, f.s1)(v);
                    return r.createElement(l.Z, { style: Z.root }, r.createElement(l.Z, { style: Z.headerSection }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, x), k && I && r.createElement(u.ZP, { hoverLabel: { label: (0, C.Q)(a) } }, r.createElement(C.K3, { style: Z.visibilityIcon, visibility: a })), k && t && r.createElement(C.ZP, { currentVisibility: a, sectionId: n })), r.createElement(l.Z, { style: Z.blocksList }, w && w.length > 0 ? r.createElement(h.Z, { blocks: w, isEditing: t }) : null, r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: S, onClick: _, style: Z.container }, r.createElement(u.ZP, null, "Add experience"), r.createElement(g.default, null)) : null)));
                },
                Z = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                k = ({ isEditing: e = !1, section: t }) => {
                    const n = o()(b.C_, t),
                        l = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(_, { blocks: l, isEditing: e }) : null;
                },
                S = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(k, { isEditing: e, section: t }) : r.createElement(_, { isEditing: e }));
        },
        736993: (e, t, n) => {
            n.d(t, { K3: () => C, Q: () => Z, ZP: () => k });
            var r = n(163015),
                l = n(202784),
                a = n(400752),
                o = n(325686),
                s = (n(585488), n(351743)),
                i = n.n(s),
                c = n(731708),
                u = n(797553),
                d = n(143670),
                m = n(392237),
                p = n(674132),
                g = n.n(p),
                y = n(14284),
                b = n(468670),
                f = n(520385),
                h = n(991617);
            const E = r.Z,
                C = ({ style: e, visibility: t }) => (t === f.pR.PUBLIC ? l.createElement(y.default, { style: e }) : t === f.pR.PRIVATE ? l.createElement(b.default, { style: e }) : void l.Fragment),
                x = g().baffe39a,
                _ = g().je07e266,
                Z = (e) => (e === f.pR.PUBLIC ? x : e === f.pR.PRIVATE ? _ : ""),
                k = ({ currentVisibility: e, sectionId: t }) => {
                    const n = (0, a.b9)(h.j7),
                        [r, s] = l.useState(e ?? f.pR.PUBLIC),
                        [m, p] = l.useState(!1),
                        [x] = i()(E),
                        _ = l.useCallback(
                            (e) => {
                                t &&
                                    (s(e),
                                    p(!1),
                                    x({
                                        variables: { sectionId: t, visibility: e },
                                        onCompleted: () => {
                                            n(!0);
                                        },
                                    }));
                            },
                            [x, t, n],
                        );
                    return l.createElement(o.Z, null, l.createElement(o.Z, { onClick: () => p(!0), style: S.target }, l.createElement(C, { style: S.icon, visibility: r }), l.createElement(c.ZP, { style: S.targetText }, Z(r))), m && l.createElement(u.default, { isFixed: !0, onDismiss: () => p(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, l.createElement(d.Z, { Icon: y.default, actionText: g().baffe39a, onClick: () => _(f.pR.PUBLIC) }), l.createElement(d.Z, { Icon: b.default, actionText: g().je07e266, onClick: () => _(f.pR.PRIVATE) })));
                },
                S = m.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, n) => {
            n.d(t, { Fo: () => o, Vo: () => m, Y_: () => i, _L: () => p, bQ: () => c, dq: () => d, eF: () => u, j7: () => g, se: () => s, w: () => a });
            var r = n(202784),
                l = n(565058);
            const a = { userId: null, userQueryId: null },
                o = r.createContext(a),
                s = () => r.useContext(o),
                i = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = r.createContext(i),
                u = () => r.useContext(c),
                d = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = r.createContext(d),
                p = () => r.useContext(m),
                g = (0, l.cn)(!1);
        },
        664052: (e, t, n) => {
            n.d(t, { Z: () => x });
            var r = n(202784),
                l = n(301503),
                a = n(325686),
                o = n(925873),
                s = n(989272),
                i = n(891198),
                c = n(731708),
                u = n(977952),
                d = n(297256),
                m = n(524496),
                p = n(392237),
                g = n(674132),
                y = n.n(g),
                b = n(187669),
                f = n(874111);
            const h = y().c2333081,
                E = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        n = o.Z.initEditorState(t);
                    return o.Z.convertEmojiToEntities(n);
                },
                C = p.default.create((e) => ({ message: { flexDirection: "row" }, textCountLabel: { flexDirection: "row", alignSelf: "center" }, container: { paddingHorizontal: e.spaces.space20, paddingTop: e.spaces.space28, paddingBottom: e.spaces.space20 }, readOnlyContainer: { padding: e.spaces.space16, maxHeight: "500px", overflowX: "auto", backgroundColor: e.colors.gray0, color: e.colors.gray300 }, richTextWrapper: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderRadius: e.borderRadii.small, padding: e.spaces.space1, marginBottom: e.spaces.space16 } })),
                x = ({ allowExtendedPasteStyles: e, characterLimit: t, editable: n = !0, editorClass: p, editorStyles: g, initialState: y = "", limitedRichText: x = !1, numberOfLines: _ = 10, onChange: Z, textSizesOverride: k }) => {
                    const [S, I] = r.useState(E(y));
                    (0, b.q)(() => {
                        g && p && (0, s.fH)(g, p);
                    });
                    const v = r.useMemo(() => S?.getCurrentContent(), [S]),
                        w = r.useCallback(
                            (e) => {
                                const t = o.Z.convertEmojiToEntities(e);
                                I(t), Z(t);
                            },
                            [Z],
                        ),
                        T = (0, f.c6)(S);
                    let R = T;
                    T > 1 && (R = i.ZP.getFormattedCount(T));
                    const P = r.useMemo(() => {
                            const e = !!t && T > t;
                            return r.createElement(a.Z, null, r.createElement(c.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: C.textCountLabel }, h({ count: R })));
                        }, [T, R, t]),
                        B = r.useMemo(() => ({ allowExtendedPasteStyles: e, editorState: S, element: u.Z, stripPastedStyles: !0 }), [e, S]);
                    return r.createElement(a.Z, null, n ? r.createElement(a.Z, { style: C.richTextWrapper }, r.createElement(d.b, { inputStyle: C.container, isInputFullWidth: !0, limitedRichText: x, numberOfLines: _, onChange: w, richTextInputContext: B, textSizesOverride: k, toolbarRightControl: P })) : r.createElement(r.Fragment, null, v && v.hasText() ? r.createElement(a.Z, { style: C.richTextWrapper }, r.createElement(a.Z, { style: C.readOnlyContainer }, r.createElement(m.Z, { contentState: (0, l.convertToRaw)(v) }))) : null));
                };
        },
        998693: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var r = n(36879),
                l = n(202784),
                a = n(10622),
                o = n.n(a),
                s = (n(585488), n(437429)),
                i = n.n(s),
                c = n(386802),
                u = n(855488),
                d = n(392237),
                m = n(674132),
                p = n.n(m),
                g = n(665468),
                y = n(666536),
                b = n(125568),
                f = n(874088),
                h = n(339110),
                E = n(524110);
            const C = p().jaaa8984,
                x = r.Z,
                _ = d.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                Z = ({ onChange: e, onEnter: t, onSelect: n, value: r }) => {
                    const { isModal: a } = l.useContext(c.Z),
                        s = l.useRef(null),
                        d = i()(),
                        [m, p] = l.useState(!1),
                        [Z, k] = l.useState([]),
                        [S, I] = l.useState(!1),
                        v = (0, b.t)(),
                        w = l.useMemo(
                            () =>
                                (0, y.Z)((e) => {
                                    v() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              I(!0),
                                              ((e) => {
                                                  o()(d, x, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          k(e?.location_type_ahead || []), I(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [d, v],
                        ),
                        T = l.useCallback(
                            (t) => {
                                e({ value: t.target.value }), w(t.target.value);
                            },
                            [w, e],
                        ),
                        R = l.useCallback(
                            (e, t) => {
                                s?.current?.focus(), n({ id: e.id, name: e.name }), p(!1);
                            },
                            [n],
                        ),
                        P = l.useCallback(
                            (e) => {
                                const t = Z?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return l.createElement(l.Fragment, null, m ? l.createElement(E.Z, { isLoading: S, items: t, onItemClick: R, ref: e.ref, source: h._4.JobLocation, style: e.style }) : null);
                            },
                            [R, Z, S, m],
                        ),
                        B = l.useCallback(
                            (e) => {
                                const { onFocus: n } = e;
                                return l.createElement(u.Z, { Icon: g.default, autoComplete: "off", label: C, name: "location-selector-input", onChange: T, onFocus: n, onKeyPress: t, ref: s, style: _.inputStyle, testID: "location-selector-input", value: r });
                            },
                            [T, t, r],
                        );
                    return l.createElement(f.default, { isInModal: a, renderCustomDropdown: P, renderCustomInput: B, rounded: !0, source: h._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                l = n(925873),
                a = n(392237),
                o = n(913670);
            const s = a.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                i = ({ editorState: e, onChange: t }) => {
                    const n = r.useCallback(
                        (n) => {
                            const r = l.Z.insertTextAtCursor(e, n.text);
                            t(r);
                        },
                        [e, t],
                    );
                    return r.createElement(o.Z, { iconStyle: s.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var r = n(202784),
                l = n(301503),
                a = n(597496),
                o = n(339110),
                s = n(456910),
                i = n(230295),
                c = n(267446);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = r.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: l, isInlineReply: s, onTypeaheadStateChange: i, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                m = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return r.createElement(a.H1, { composeCommunityId: t, contextText: n, isInline: l, isInlineReply: s, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: i, query: m, ref: this._genericWrapperRef, source: c || o._4.Compose }, e(this._handleInputChange));
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
                            if (!(0, i.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    r = this._getPlaintextFromCurrentBlock(e),
                                    { end: l, start: a, word: o } = s.si(this._getCaret(e), r),
                                    i = s.bR(o || "", "compose");
                                if (i?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === a)) this._setQueryContext(void 0);
                                else if (i) {
                                    const { q: t, result_type: n } = i;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: a, endIndex: l });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: r, startIndex: a } = t,
                        o = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: a, focusOffset: r }),
                        s = l.Modifier.replaceText(n.getCurrentContent(), o, e),
                        i = l.EditorState.push(n, s, "insert-characters"),
                        c = a + e.length,
                        u = i.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return l.EditorState.forceSelection(i, u);
                }
            }
            const d = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-42018f38.c642910a.js.map
