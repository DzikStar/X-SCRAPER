"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-e019dbda"],
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
                b = n(731708),
                E = n(386802),
                g = n(530732),
                f = n(823161),
                y = n(855488),
                _ = n(392237),
                h = n(674132),
                C = n.n(h),
                Z = n(379327),
                k = n(666536),
                I = n(125568),
                x = n(874088),
                T = n(952793),
                w = n(339110),
                v = n(524110),
                S = n(109659),
                R = n(224484),
                P = n(277660),
                D = n.n(P),
                M = n(154003),
                B = n(665285),
                F = n(757700);
            const L = R.Z,
                O = S.Z,
                A = C().caa46e54,
                z = C().e893fe6e,
                H = C().j1c09ca4,
                W = C().i2209530,
                j = C().cfd2f35e,
                V = C().b679ff6a,
                U = "DuplicateDomain",
                Y = ({ companyProfile: e, onSelect: t }) => {
                    const n = D()(L, e),
                        r = n?.id ? n?.result?.logo?.normal_url : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                        l = a.useCallback(() => {
                            t(n.rest_id, n.result.core.name, r);
                        }, [r, n.rest_id, n.result.core.name, t]);
                    return a.createElement(
                        b.ZP,
                        { size: "subtext1", style: N.suggestion },
                        a.createElement(
                            C().I18NFormatMessage,
                            { $i18n: "ca584c31" },
                            a.createElement(
                                o.Z,
                                { style: N.suggestion },
                                a.createElement(o.Z, { style: N.logo }, a.createElement(f.default, { shape: "square", size: "medium", uri: r })),
                                a.createElement(g.Z, { interactiveStyles: null, onClick: l }, ({ isHovered: e }) => a.createElement(b.ZP, { color: "text", style: { textDecoration: "underline", cursor: "pointer", color: e ? _.default.theme.colors.primary : _.default.theme.colors.text }, weight: "bold" }, n.result.core.name)),
                            ),
                        ),
                    );
                },
                N = _.default.create((e) => ({ root: { width: "100%", minWidth: "300px", maxWidth: "600px" }, header: { padding: e.spaces.space16 }, logo: { paddingEnd: e.spaces.space4 }, suggestion: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, actions: { padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 } })),
                K = ({ companyName: e, onCancel: t, onSelect: n, onSuccess: r }) => {
                    const [l, s] = a.useState(!1),
                        [i, c] = a.useState(null),
                        [d, m] = a.useState(""),
                        [p] = u()(O),
                        [E, g] = a.useState(null),
                        f = a.useCallback(() => {
                            s(!0),
                                p({
                                    variables: { name: e, domain: i },
                                    onCompleted: (t) => {
                                        const l = t.create_company_profile?.create_company_profile_result;
                                        t.create_company_profile?.success ? (s(!1), n(l.company_profile_results.rest_id, e, null), r()) : l?.error_code === U && (s(!1), m(U), l.company_profile_results && g(l.company_profile_results));
                                    },
                                });
                        }, [e, p, i, n, r]),
                        _ = a.useCallback(() => {
                            !i || (0, B.Z)(i, null, !1) ? f() : m(V);
                        }, [i, f]),
                        h = a.useCallback(() => {
                            c(null), t();
                        }, [t]);
                    return a.createElement(
                        F.ZP,
                        { clickMaskToClose: !1, modalSize: "dynamic", withBackground: !0 },
                        a.createElement(
                            o.Z,
                            { style: N.root },
                            a.createElement(o.Z, { style: N.header }, a.createElement(b.ZP, { size: "headline2", weight: "bold" }, z)),
                            a.createElement(y.Z, { editable: !1, label: A, name: "company_name", onChange: () => {}, value: e }),
                            a.createElement(y.Z, {
                                editable: !l,
                                errorText: d !== U ? d : "",
                                helperText: (() => {
                                    if (d === U && E)
                                        return a.createElement(Y, {
                                            companyProfile: E,
                                            onSelect: (e, t, l) => {
                                                n(e, t, l), r();
                                            },
                                        });
                                })(),
                                invalid: !!d,
                                label: H,
                                name: "domain",
                                onChange: (e) => c(e.target.value),
                                value: i || "",
                            }),
                            a.createElement(o.Z, { style: N.actions }, a.createElement(M.ZP, { disabled: l, onClick: h, size: "large", type: "primaryOutlined" }, j), a.createElement(M.ZP, { disabled: l, onClick: _, size: "large", type: "brandFilled" }, W)),
                        ),
                    );
                },
                q = l.Z,
                Q = r.Z,
                $ = C().eedfd35c,
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
                        t || n ? a.createElement(o.Z, null, t && a.createElement(p.Z, { size: "small" }), n && a.createElement(b.ZP, { style: J.success }, "Saved")) : null
                    );
                },
                X = ({ errorText: e, onChange: t, onEnter: n, onSelect: r, selectedValue: l, value: s }) => {
                    const { isModal: c } = a.useContext(E.Z),
                        d = a.useRef(null),
                        p = m()(),
                        [_, h] = a.useState(!1),
                        [S, R] = a.useState(!1),
                        [P, D] = a.useState(!1),
                        [M, B] = a.useState(!1),
                        [F, L] = a.useState(null),
                        [O, A] = a.useState([]),
                        [z, H] = a.useState(!1),
                        W = (0, I.t)(),
                        [j, V] = u()(Q),
                        U = (0, T.hC)("xprofile_work_history_domain_enabled"),
                        Y = a.useMemo(
                            () =>
                                (0, k.Z)((e) => {
                                    W() &&
                                        e.length >= 1 &&
                                        (H(!0),
                                        ((e) => {
                                            i()(p, q, { query: e })
                                                .toPromise()
                                                .then((e) => {
                                                    A(e?.company_profile_type_ahead || []), H(!1);
                                                });
                                        })(e));
                                }, 500),
                            [p, W],
                        ),
                        N = a.useCallback(
                            (e) => {
                                h(!0), t(e.target.value), Y(e.target.value);
                            },
                            [Y, t],
                        ),
                        X = a.useCallback(
                            (e, t) => {
                                d?.current?.focus(), r(e.id, e.name, e.data?.logoUrl), h(!1);
                            },
                            [r],
                        ),
                        ee = a.useCallback((e) => {
                            h(!1), L(e), B(!0);
                        }, []),
                        te = a.useCallback(
                            (e) => {
                                U
                                    ? ee(e)
                                    : (D(!1),
                                      R(!0),
                                      j({
                                          variables: { name: e },
                                          onCompleted: (t) => {
                                              t.create_company_profile?.success && (R(!1), D(!0), r(t.create_company_profile.company_profile_results.rest_id, e, null));
                                          },
                                      }),
                                      h(!1));
                            },
                            [U, j, ee, r],
                        ),
                        ne = a.useCallback(() => {
                            h(!1), B(!1), L(null), t("");
                        }, [t]),
                        re = a.useCallback(() => {
                            h(!1), B(!1), L(null);
                        }, []),
                        le = a.useCallback(
                            (e) => {
                                const t = s ? O?.map((e) => ({ id: e.rest_id, name: e.core?.name || "", type: "company_profile", data: { logoUrl: e.logo?.normal_url || "", query: s } })) : [];
                                return a.createElement(a.Fragment, null, _ ? a.createElement(v.Z, { isLoading: z, items: t, onItemClick: X, ref: e.ref, renderFooter: () => (s ? a.createElement(g.Z, { onClick: () => te(s), style: J.createRow, testID: "create-company-profile-btn" }, a.createElement(o.Z, { style: J.createAvatar }, a.createElement(Z.default, null)), a.createElement(b.ZP, { size: "subtext1" }, a.createElement(C().I18NFormatMessage, { $i18n: "h8b54e37" }, a.createElement(b.ZP, { weight: "bold" }, s)))) : null), shouldAlwaysRender: s?.length > 0, source: w._4.CompanyProfile, style: [e.style, J.dropdown] }) : null);
                            },
                            [te, X, O, z, _, s],
                        ),
                        ae = a.useCallback(
                            (t) => {
                                const { onFocus: r } = t;
                                return a.createElement(y.Z, {
                                    autoComplete: "off",
                                    endContent: U ? null : a.createElement(G, { hasSaved: P, isSaving: S || V }),
                                    errorText: e,
                                    invalid: !!e,
                                    label: $,
                                    name: "company-profile-selector-input",
                                    onChange: N,
                                    onFocus: r,
                                    onKeyPress: n,
                                    ref: d,
                                    startContent: (() => {
                                        if ("" === s) return null;
                                        const e = l?.id && s === l?.name ? l?.data?.logoUrl : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
                                        return l?.id ? a.createElement(o.Z, { style: J.logo }, a.createElement(f.default, { shape: "square", size: "medium", uri: e })) : void 0;
                                    })(),
                                    style: J.inputStyle,
                                    testID: "company-profile-selector-input",
                                    value: s,
                                });
                            },
                            [U, e, N, P, S, V, n, l?.data?.logoUrl, l?.id, l?.name, s],
                        );
                    return a.createElement(o.Z, { style: J.input }, a.createElement(x.default, { isInModal: c, renderCustomDropdown: le, renderCustomInput: ae, rounded: !0, source: w._4.CompanyProfile, testID: "company-profile-selector", userLimit: 20 }), U && M && F && a.createElement(K, { companyName: F || "", onCancel: ne, onSelect: r, onSuccess: re }));
                },
                J = _.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 }, createRow: { flexDirection: "row", gap: 4, alignItems: "center", padding: e.spaces.space8 }, createAvatar: { width: 24, height: 24, borderRadius: e.borderRadii.xSmall, backgroundColor: e.colors.blue500, alignItems: "center", justifyContent: "center", color: e.colors.white }, logo: { paddingEnd: e.spaces.space4 }, dropdown: { maxHeight: "200px" }, input: { flexDirection: "row", gap: 16, alignItems: "center" }, success: { color: e.colors.green500 } })),
                ee = a.memo(X);
        },
        96702: (e, t, n) => {
            n.d(t, { Z: () => H });
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
                b = () => {
                    const { blockId: e } = (0, s._L)();
                    return e ? r.createElement(l.Z, { style: p.editButton }, r.createElement(u.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var E = n(301503),
                g = n(989272),
                f = n(524496),
                y = n(925873),
                _ = n(731708),
                h = n(757483),
                C = n(187669),
                Z = n(478414),
                k = n(949626);
            const I = ({ content: e }) => (
                    (0, C.q)(() => {
                        (0, g.fH)((0, Z.yW)(Z.Hx, Z.K), Z.Hx);
                    }),
                    r.createElement(r.Fragment, null, e && e.hasText() && r.createElement(k.Z, { className: Z.Hx }, r.createElement(l.Z, { style: x.richText }, r.createElement(f.Z, { contentState: (0, E.convertToRaw)(e) }))))
                ),
                x = a.default.create((e) => {
                    const t = h.Z.hexToCss(e.colors.gray0, 0),
                        n = h.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})` } };
                }),
                T = ({ content: e, previewHeight: t, shouldTruncate: n = !0 }) => {
                    const [a, o] = r.useState(0),
                        [s, i] = r.useState(0),
                        [c, u] = r.useState(!n),
                        d = r.useRef(null);
                    r.useEffect(() => {
                        d.current && 0 === a && o(d.current.offsetHeight);
                    }, [a]);
                    const m = r.useMemo(() => {
                            const t = y.Z.getContentStateFromRaw(e);
                            return t ? (0, E.convertFromRaw)(t) : null;
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
                                      style: p && !c ? { ...x.previewContainer, maxHeight: t } : void 0,
                                  },
                                  r.createElement(I, { content: m }),
                                  p && !c ? r.createElement(l.Z, { style: x.fade }) : null,
                              ),
                              p && r.createElement(_.ZP, { color: "link", onPress: () => u(!c), size: "subtext1", style: x.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                w = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                v = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: n, sectionType: a } = (0, s.eF)(),
                        u = e.result?.content,
                        d = r.useMemo(() => a === o.NB.ABOUT && n, [n, a]);
                    return r.createElement(l.Z, { style: { ...w.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(T, { content: u?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: d }), t ? r.createElement(l.Z, { style: w.row }, r.createElement(b, null), r.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null);
                };
            var S = n(470397),
                R = n(823161),
                P = n(674132),
                D = n.n(P),
                M = n(873302);
            const B = D().a2f2faab,
                F = ({ endMonth: e, endYear: t, isCurrent: n, startMonth: l, startYear: a }) => {
                    const o = (0, M.ZU)(l, a),
                        s = (0, M.ZU)(e, t);
                    return o ? r.createElement(S.Z, null, r.createElement(D().I18NFormatMessage, { $i18n: "bab4ce51", start: B(o), end: n ? "Present" : s ? B(s) : "" }), r.createElement(_.ZP, null, (0, M.HM)(o, s || new Date()))) : null;
                },
                L = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                O = ({ block: e, isEditing: t }) => {
                    const n = e?.result?.content,
                        a = n?.company_profile_results?.result;
                    return n ? r.createElement(l.Z, { style: { ...L.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(l.Z, { style: { ...L.row, flex: 1 } }, r.createElement(R.default, { shape: "square", size: "large", uri: a?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(l.Z, { style: L.workInfo }, r.createElement(_.ZP, { size: "subtext1", weight: "bold" }, n.title), r.createElement(S.Z, null, a?.core?.name || n.company_profile_name ? r.createElement(_.ZP, { color: "gray700", size: "subtext1" }, a?.core?.name || n.company_profile_name) : null, n.location_text ? r.createElement(_.ZP, { color: "gray700", size: "subtext1" }, n.location_text) : null), r.createElement(_.ZP, { color: "gray700", size: "subtext1" }, r.createElement(F, { endMonth: n.end_month, endYear: n.end_year, isCurrent: !!n.active_role, startMonth: n.start_month, startYear: n.start_year })), r.createElement(T, { content: n.description, previewHeight: 120, shouldTruncate: !0 }))), t ? r.createElement(l.Z, { style: L.row }, r.createElement(b, null), r.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null) : null;
                },
                A = ({ block: e, blockId: t, isEditing: n = !1 }) => {
                    const l = r.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case o.Mp.RICHTEXT:
                                return r.createElement(v, { block: e, isEditing: n });
                            case o.Mp.WORK_HISTORY:
                                return r.createElement(O, { block: e, isEditing: n });
                            default:
                                return null;
                        }
                    }, [e, n]);
                    return e ? r.createElement(s.Vo.Provider, { value: { ...s.dq, blockId: t, blockQueryId: e.__id } }, l()) : null;
                },
                z = a.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                H = ({ blocks: e, isEditing: t }) =>
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
                                      { key: o, style: z.blockGroup },
                                      r.createElement(
                                          l.Z,
                                          {
                                              style: (() => {
                                                  const t = z.block;
                                                  return 1 === e.length ? t : 0 === a ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a > 0 && a < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          r.createElement(A, { block: n, blockId: o, isEditing: t }),
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
                b = () => {
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
                E = o().g9677c6e,
                g = o().a2b8c54c,
                f = ({ blockId: e, headline: t, onClose: n, onCompleted: a, queryId: o, subtext: u, userId: d }) => {
                    const m = (0, s.p)(),
                        p = (0, c.z)(),
                        [f, y] = b(),
                        _ = r.useCallback(() => {
                            n();
                        }, [n]),
                        h = r.useCallback(() => {
                            p.scribe({ ...(0, i.MA)("delete_block_btn", "click") }),
                                f({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, t) => {
                                        o && e.delete(o);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: g }), n(), a && a());
                                    },
                                });
                        }, [m, p, e, f, n, a, o, d]);
                    return r.createElement(l.Z, { confirmButtonDisabled: y, confirmButtonLabel: E, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: _, onConfirm: h, text: u });
                };
        },
        381335: (e, t, n) => {
            n.d(t, { Z: () => g });
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
                b = i().d96cf7ce,
                E = o.default.create((e) => ({ iconButton: { height: "auto" } })),
                g = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: n, sectionQueryId: o } = (0, u.eF)(),
                        { blockId: s, blockQueryId: i } = (0, u._L)(),
                        { userId: g, userQueryId: f } = (0, u.se)(),
                        [y, _] = r.useState(!1),
                        h = r.useCallback(() => {
                            _(!1);
                        }, []),
                        C = r.useCallback(() => {
                            _(!0);
                        }, []);
                    return r.createElement(r.Fragment, null, t ? r.createElement(l.Z, { style: E.iconButton }, r.createElement(a.ZP, { disabled: !s || !g, icon: r.createElement(c.default, null), onClick: C, size: "xSmall", type: "destructiveText" })) : r.createElement(a.ZP, { disabled: !s || !g, onClick: C, size: "large", type: "destructiveText" }, b), y && s && g ? r.createElement(d.Z, { blockId: s, headline: m, onClose: h, onCompleted: e, queryId: n > 1 ? i : o || f, subtext: p, userId: g }) : null);
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
            n.d(t, { Z: () => x });
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
                b = n(982866),
                E = n(952793),
                g = n(462166),
                f = n(873302),
                y = n(96702),
                _ = n(991617),
                h = n(736993);
            const C = p().b721eb38,
                Z = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: a } = (0, _.eF)(),
                        { userId: o, userQueryId: m } = (0, _.se)(),
                        p = (0, s.useHistory)(),
                        Z = r.useCallback(() => {
                            p.push("/settings/bio/new/about");
                        }, [p]),
                        I = (0, E.hC)("xprofile_section_visibility_enabled"),
                        x = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const T = o === m,
                        w = (0, f.Kh)(e?.slice(), g.GL);
                    return r.createElement(l.Z, { style: k.root }, r.createElement(l.Z, { style: k.header }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, C), I && T && r.createElement(u.ZP, { hoverLabel: { label: (0, h.Q)(a) } }, r.createElement(h.K3, { style: k.visibilityIcon, visibility: a })), I && t && r.createElement(h.ZP, { currentVisibility: a, sectionId: n })), r.createElement(l.Z, null, e?.length ? r.createElement(y.Z, { blocks: w, isEditing: t }) : r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: x, onClick: Z, style: k.container }, r.createElement(u.ZP, null, "Tell us about yourself"), r.createElement(b.default, null)) : null)));
                },
                k = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                I = ({ isEditing: e = !1, section: t }) => {
                    const n = o()(g.C_, t),
                        l = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(Z, { blocks: l, isEditing: e }) : null;
                },
                x = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(I, { isEditing: e, section: t }) : r.createElement(Z, { isEditing: e }));
        },
        164349: (e, t, n) => {
            n.d(t, { Z: () => x });
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
                b = n(982866),
                E = n(952793),
                g = n(462166),
                f = n(873302),
                y = n(96702),
                _ = n(991617),
                h = n(736993);
            const C = p().a622dfcc,
                Z = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: a } = (0, _.eF)(),
                        { userId: o, userQueryId: m } = (0, _.se)(),
                        p = (0, s.useHistory)(),
                        Z = r.useCallback(() => {
                            n ? p.push(`/settings/bio/new/${n}/work_experience`) : p.push("/settings/bio/new/work_experience");
                        }, [p, n]),
                        I = (0, E.hC)("xprofile_section_visibility_enabled"),
                        x = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const T = o === m,
                        w = (0, f.Kh)(e?.slice(), g.lw),
                        v = (0, f.s1)(w);
                    return r.createElement(l.Z, { style: k.root }, r.createElement(l.Z, { style: k.headerSection }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, C), I && T && r.createElement(u.ZP, { hoverLabel: { label: (0, h.Q)(a) } }, r.createElement(h.K3, { style: k.visibilityIcon, visibility: a })), I && t && r.createElement(h.ZP, { currentVisibility: a, sectionId: n })), r.createElement(l.Z, { style: k.blocksList }, v && v.length > 0 ? r.createElement(y.Z, { blocks: v, isEditing: t }) : null, r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: x, onClick: Z, style: k.container }, r.createElement(u.ZP, null, "Add experience"), r.createElement(b.default, null)) : null)));
                },
                k = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                I = ({ isEditing: e = !1, section: t }) => {
                    const n = o()(g.C_, t),
                        l = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(Z, { blocks: l, isEditing: e }) : null;
                },
                x = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(I, { isEditing: e, section: t }) : r.createElement(Z, { isEditing: e }));
        },
        736993: (e, t, n) => {
            n.d(t, { K3: () => h, Q: () => k, ZP: () => I });
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
                b = n.n(p),
                E = n(14284),
                g = n(468670),
                f = n(520385),
                y = n(991617);
            const _ = r.Z,
                h = ({ style: e, visibility: t }) => (t === f.pR.PUBLIC ? l.createElement(E.default, { style: e }) : t === f.pR.PRIVATE ? l.createElement(g.default, { style: e }) : void l.Fragment),
                C = b().baffe39a,
                Z = b().je07e266,
                k = (e) => (e === f.pR.PUBLIC ? C : e === f.pR.PRIVATE ? Z : ""),
                I = ({ currentVisibility: e, sectionId: t }) => {
                    const n = (0, a.b9)(y.j7),
                        [r, s] = l.useState(e ?? f.pR.PUBLIC),
                        [m, p] = l.useState(!1),
                        [C] = i()(_),
                        Z = l.useCallback(
                            (e) => {
                                t &&
                                    (s(e),
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
                    return l.createElement(o.Z, null, l.createElement(o.Z, { onClick: () => p(!0), style: x.target }, l.createElement(h, { style: x.icon, visibility: r }), l.createElement(c.ZP, { style: x.targetText }, k(r))), m && l.createElement(u.default, { isFixed: !0, onDismiss: () => p(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, l.createElement(d.Z, { Icon: E.default, actionText: b().baffe39a, onClick: () => Z(f.pR.PUBLIC) }), l.createElement(d.Z, { Icon: g.default, actionText: b().je07e266, onClick: () => Z(f.pR.PRIVATE) })));
                },
                x = m.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, n) => {
            n.d(t, { Fo: () => o, Vo: () => m, Y_: () => i, _L: () => p, bQ: () => c, dq: () => d, eF: () => u, j7: () => b, se: () => s, w: () => a });
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
                b = (0, l.cn)(!1);
        },
        664052: (e, t, n) => {
            n.d(t, { Z: () => C });
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
                b = n(674132),
                E = n.n(b),
                g = n(187669),
                f = n(874111);
            const y = E().c2333081,
                _ = (e) => {
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
                h = p.default.create((e) => ({ message: { flexDirection: "row" }, textCountLabel: { flexDirection: "row", alignSelf: "center" }, container: { paddingHorizontal: e.spaces.space20, paddingTop: e.spaces.space28, paddingBottom: e.spaces.space20 }, readOnlyContainer: { padding: e.spaces.space16, maxHeight: "500px", overflowX: "auto", backgroundColor: e.colors.gray0, color: e.colors.gray300 }, richTextWrapper: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderRadius: e.borderRadii.small, padding: e.spaces.space1, marginBottom: e.spaces.space16 } })),
                C = ({ allowExtendedPasteStyles: e, characterLimit: t, editable: n = !0, editorClass: p, editorStyles: b, initialState: E = "", limitedRichText: C = !1, numberOfLines: Z = 10, onChange: k, textSizesOverride: I }) => {
                    const [x, T] = r.useState(_(E));
                    (0, g.q)(() => {
                        b && p && (0, s.fH)(b, p);
                    });
                    const w = r.useMemo(() => x?.getCurrentContent(), [x]),
                        v = r.useCallback(
                            (e) => {
                                const t = o.Z.convertEmojiToEntities(e);
                                T(t), k(t);
                            },
                            [k],
                        ),
                        S = (0, f.c6)(x);
                    let R = S;
                    S > 1 && (R = i.ZP.getFormattedCount(S));
                    const P = r.useMemo(() => {
                            const e = !!t && S > t;
                            return r.createElement(a.Z, null, r.createElement(c.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: h.textCountLabel }, y({ count: R })));
                        }, [S, R, t]),
                        D = r.useMemo(() => ({ allowExtendedPasteStyles: e, editorState: x, element: u.Z, stripPastedStyles: !0 }), [e, x]);
                    return r.createElement(a.Z, null, n ? r.createElement(a.Z, { style: h.richTextWrapper }, r.createElement(d.b, { inputStyle: h.container, isInputFullWidth: !0, limitedRichText: C, numberOfLines: Z, onChange: v, richTextInputContext: D, textSizesOverride: I, toolbarRightControl: P })) : r.createElement(r.Fragment, null, w && w.hasText() ? r.createElement(a.Z, { style: h.richTextWrapper }, r.createElement(a.Z, { style: h.readOnlyContainer }, r.createElement(m.Z, { contentState: (0, l.convertToRaw)(w) }))) : null));
                };
        },
        998693: (e, t, n) => {
            n.d(t, { Z: () => k });
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
                b = n(665468),
                E = n(666536),
                g = n(125568),
                f = n(874088),
                y = n(339110),
                _ = n(524110);
            const h = p().jaaa8984,
                C = r.Z,
                Z = d.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                k = ({ onChange: e, onEnter: t, onSelect: n, value: r }) => {
                    const { isModal: a } = l.useContext(c.Z),
                        s = l.useRef(null),
                        d = i()(),
                        [m, p] = l.useState(!1),
                        [k, I] = l.useState([]),
                        [x, T] = l.useState(!1),
                        w = (0, g.t)(),
                        v = l.useMemo(
                            () =>
                                (0, E.Z)((e) => {
                                    w() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              T(!0),
                                              ((e) => {
                                                  o()(d, C, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          I(e?.location_type_ahead || []), T(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [d, w],
                        ),
                        S = l.useCallback(
                            (t) => {
                                e({ value: t.target.value }), v(t.target.value);
                            },
                            [v, e],
                        ),
                        R = l.useCallback(
                            (e, t) => {
                                s?.current?.focus(), n({ id: e.id, name: e.name }), p(!1);
                            },
                            [n],
                        ),
                        P = l.useCallback(
                            (e) => {
                                const t = k?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return l.createElement(l.Fragment, null, m ? l.createElement(_.Z, { isLoading: x, items: t, onItemClick: R, ref: e.ref, source: y._4.JobLocation, style: e.style }) : null);
                            },
                            [R, k, x, m],
                        ),
                        D = l.useCallback(
                            (e) => {
                                const { onFocus: n } = e;
                                return l.createElement(u.Z, { Icon: b.default, autoComplete: "off", label: h, name: "location-selector-input", onChange: S, onFocus: n, onKeyPress: t, ref: s, style: Z.inputStyle, testID: "location-selector-input", value: r });
                            },
                            [S, t, r],
                        );
                    return l.createElement(f.default, { isInModal: a, renderCustomDropdown: P, renderCustomInput: D, rounded: !0, source: y._4.JobLocation, testID: "location-selector", userLimit: 20 });
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
        72130: (e, t, n) => {
            n.d(t, { Ak: () => s, MA: () => o, Rz: () => r, Zi: () => a, he: () => l });
            const r = () => ({ component: "extended_profile_settings", action: "click" }),
                l = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                a = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                o = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                s = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => l, NB: () => a, P2: () => o, j3: () => r, pR: () => s });
            const r = 5e4,
                l = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                a = (l.RICHTEXT, l.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                o = { about: a.ABOUT, work_experience: a.WORK_EXPERIENCE },
                s = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => b, Kh: () => m, ZU: () => d, hW: () => g, s1: () => p, uR: () => E });
            var r = n(990242),
                l = n.n(r),
                a = n(674132),
                o = n.n(a),
                s = n(520385),
                i = n(462166);
            const c = o().eb7710f1,
                u = o().bfc38bb5,
                d = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const n = e?.filter((e) => e);
                    return n
                        ? n.map((e) => {
                              const n = { ...e },
                                  r = l()(i.wJ, n),
                                  a = l()(t, r.result?.content);
                              return { __id: n.__id, id: n.id, rest_id: n.rest_id, result: { ...r.result, content: a } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const n = e.result?.content,
                                r = t.result?.content,
                                l = (n?.active_role ? new Date() : d(n?.end_month, n?.end_year)) ?? new Date(0),
                                a = (r?.active_role ? new Date() : d(r?.end_month, r?.end_year)) ?? new Date(0);
                            if (l.getFullYear() !== a.getFullYear()) return a.getFullYear() - l.getFullYear();
                            if (l.getMonth() !== a.getMonth()) return a.getMonth() - l.getMonth();
                            const o = d(n?.start_month, n?.start_year) ?? new Date(0),
                                s = d(r?.start_month, r?.start_year) ?? new Date(0);
                            return o.getFullYear() !== s.getFullYear() ? s.getFullYear() - o.getFullYear() : s.getMonth() - o.getMonth();
                        });
                },
                b = (e, t) => {
                    let n = t.getMonth() - e.getMonth() + 1,
                        r = t.getFullYear() - e.getFullYear();
                    return n < 0 && (r--, (n += 12)), r && n ? `${c({ years: r })} ${u({ months: n })}` : r ? c({ years: r }) : n ? u({ months: n }) : "";
                },
                E = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === s.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === s.Mp.RICHTEXT)) : void 0),
                g = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => o, DC: () => r, _e: () => a, iN: () => c, kd: () => s, pc: () => l });
            const r = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                l = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                a = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                o = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                i = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: i.DRAFT, PUBLISHED: i.PUBLISHED });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-e019dbda.2ff9875a.js.map
