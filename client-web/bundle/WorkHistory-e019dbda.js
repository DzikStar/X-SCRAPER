"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-e019dbda"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => m });
            var r = n(202784),
                o = n(614983),
                l = n.n(o),
                a = n(325686),
                s = n(370006),
                i = n(786998),
                c = n(929028),
                u = n(386802);
            function d(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            l()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: o, hideBackButton: l, isFullWidth: a, isLarge: c, leftControl: u, middleControl: m, position: p, rightControl: g, secondaryBar: h, style: b, subtitle: f, title: y, titleDomId: E, titleIconCell: _, titleIconCellSize: C, withBackground: k, withWideContainer: x } = this.props,
                        { isModal: I } = this.context,
                        Z = l ? u : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        T = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!k, I, !!h);
                    return r.createElement(r.Fragment, null, r.createElement(i.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: Z, middleControl: m, position: d(p, I, o), rightControl: g, style: b, subtitle: f, title: y, titleDomId: E, titleIconCell: _, titleIconCellSize: C, withBackground: T, withWideContainer: x }), h || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? r.createElement(a.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = u.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        924108: (e, t, n) => {
            n.d(t, { Z: () => ee });
            var r = n(264964),
                o = n(617277),
                l = n(202784),
                a = n(325686),
                s = n(10622),
                i = n.n(s),
                c = (n(585488), n(351743)),
                u = n.n(c),
                d = n(437429),
                m = n.n(d),
                p = n(167630),
                g = n(731708),
                h = n(386802),
                b = n(530732),
                f = n(823161),
                y = n(855488),
                E = n(392237),
                _ = n(111677),
                C = n.n(_),
                k = n(379327),
                x = n(666536),
                I = n(125568),
                Z = n(874088),
                T = n(952793),
                S = n(339110),
                w = n(524110),
                v = n(109659),
                R = n(224484),
                P = n(277660),
                B = n.n(P),
                D = n(154003),
                F = n(665285),
                M = n(757700);
            const L = R.Z,
                O = v.Z,
                W = C().caa46e54,
                A = C().e893fe6e,
                z = C().j1c09ca4,
                H = C().i2209530,
                U = C().cfd2f35e,
                j = C().b679ff6a,
                V = "DuplicateDomain",
                q = ({ companyProfile: e, onSelect: t }) => {
                    const n = B()(L, e),
                        r = n?.id ? n?.result?.logo?.normal_url : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                        o = l.useCallback(() => {
                            t(n.rest_id, n.result.core.name, r);
                        }, [r, n.rest_id, n.result.core.name, t]);
                    return l.createElement(
                        g.ZP,
                        { size: "subtext1", style: K.suggestion },
                        l.createElement(
                            C().I18NFormatMessage,
                            { $i18n: "ca584c31" },
                            l.createElement(
                                a.Z,
                                { style: K.suggestion },
                                l.createElement(a.Z, { style: K.logo }, l.createElement(f.default, { shape: "square", size: "medium", uri: r })),
                                l.createElement(b.Z, { interactiveStyles: null, onClick: o }, ({ isHovered: e }) => l.createElement(g.ZP, { color: "text", style: { textDecoration: "underline", cursor: "pointer", color: e ? E.default.theme.colors.primary : E.default.theme.colors.text }, weight: "bold" }, n.result.core.name)),
                            ),
                        ),
                    );
                },
                K = E.default.create((e) => ({ root: { width: "100%", minWidth: "300px", maxWidth: "600px" }, header: { padding: e.spaces.space16 }, logo: { paddingEnd: e.spaces.space4 }, suggestion: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, actions: { padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 } })),
                N = ({ companyName: e, onCancel: t, onSelect: n, onSuccess: r }) => {
                    const [o, s] = l.useState(!1),
                        [i, c] = l.useState(null),
                        [d, m] = l.useState(""),
                        [p] = u()(O),
                        [h, b] = l.useState(null),
                        f = l.useCallback(() => {
                            s(!0),
                                p({
                                    variables: { name: e, domain: i },
                                    onCompleted: (t) => {
                                        const o = t.create_company_profile?.create_company_profile_result;
                                        t.create_company_profile?.success ? (s(!1), n(o.company_profile_results.rest_id, e, null), r()) : o?.error_code === V && (s(!1), m(V), o.company_profile_results && b(o.company_profile_results));
                                    },
                                });
                        }, [e, p, i, n, r]),
                        E = l.useCallback(() => {
                            !i || (0, F.Z)(i, null, !1) ? f() : m(j);
                        }, [i, f]),
                        _ = l.useCallback(() => {
                            c(null), t();
                        }, [t]);
                    return l.createElement(
                        M.ZP,
                        { clickMaskToClose: !1, modalSize: "dynamic", withBackground: !0 },
                        l.createElement(
                            a.Z,
                            { style: K.root },
                            l.createElement(a.Z, { style: K.header }, l.createElement(g.ZP, { size: "headline2", weight: "bold" }, A)),
                            l.createElement(y.Z, { editable: !1, label: W, name: "company_name", onChange: () => {}, value: e }),
                            l.createElement(y.Z, {
                                editable: !o,
                                errorText: d !== V ? d : "",
                                helperText: (() => {
                                    if (d === V && h)
                                        return l.createElement(q, {
                                            companyProfile: h,
                                            onSelect: (e, t, o) => {
                                                n(e, t, o), r();
                                            },
                                        });
                                })(),
                                invalid: !!d,
                                label: z,
                                name: "domain",
                                onChange: (e) => c(e.target.value),
                                value: i || "",
                            }),
                            l.createElement(a.Z, { style: K.actions }, l.createElement(D.ZP, { disabled: o, onClick: _, size: "large", type: "primaryOutlined" }, U), l.createElement(D.ZP, { disabled: o, onClick: E, size: "large", type: "brandFilled" }, H)),
                        ),
                    );
                },
                Q = o.Z,
                Y = r.Z,
                $ = C().eedfd35c,
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
                        t || n ? l.createElement(a.Z, null, t && l.createElement(p.Z, { size: "small" }), n && l.createElement(g.ZP, { style: J.success }, "Saved")) : null
                    );
                },
                X = ({ errorText: e, onChange: t, onEnter: n, onSelect: r, selectedValue: o, value: s }) => {
                    const { isModal: c } = l.useContext(h.Z),
                        d = l.useRef(null),
                        p = m()(),
                        [E, _] = l.useState(!1),
                        [v, R] = l.useState(!1),
                        [P, B] = l.useState(!1),
                        [D, F] = l.useState(!1),
                        [M, L] = l.useState(null),
                        [O, W] = l.useState([]),
                        [A, z] = l.useState(!1),
                        H = (0, I.t)(),
                        [U, j] = u()(Y),
                        V = (0, T.hC)("xprofile_work_history_domain_enabled"),
                        q = l.useMemo(
                            () =>
                                (0, x.Z)((e) => {
                                    H() &&
                                        e.length >= 1 &&
                                        (z(!0),
                                        ((e) => {
                                            i()(p, Q, { query: e })
                                                .toPromise()
                                                .then((e) => {
                                                    W(e?.company_profile_type_ahead || []), z(!1);
                                                });
                                        })(e));
                                }, 500),
                            [p, H],
                        ),
                        K = l.useCallback(
                            (e) => {
                                _(!0), t(e.target.value), q(e.target.value);
                            },
                            [q, t],
                        ),
                        X = l.useCallback(
                            (e, t) => {
                                d?.current?.focus(), r(e.id, e.name, e.data?.logoUrl), _(!1);
                            },
                            [r],
                        ),
                        ee = l.useCallback((e) => {
                            _(!1), L(e), F(!0);
                        }, []),
                        te = l.useCallback(
                            (e) => {
                                V
                                    ? ee(e)
                                    : (B(!1),
                                      R(!0),
                                      U({
                                          variables: { name: e },
                                          onCompleted: (t) => {
                                              t.create_company_profile?.success && (R(!1), B(!0), r(t.create_company_profile.company_profile_results.rest_id, e, null));
                                          },
                                      }),
                                      _(!1));
                            },
                            [V, U, ee, r],
                        ),
                        ne = l.useCallback(() => {
                            _(!1), F(!1), L(null), t("");
                        }, [t]),
                        re = l.useCallback(() => {
                            _(!1), F(!1), L(null);
                        }, []),
                        oe = l.useCallback(
                            (e) => {
                                const t = s ? O?.map((e) => ({ id: e.rest_id, name: e.core?.name || "", type: "company_profile", data: { logoUrl: e.logo?.normal_url || "", query: s } })) : [];
                                return l.createElement(l.Fragment, null, E ? l.createElement(w.Z, { isLoading: A, items: t, onItemClick: X, ref: e.ref, renderFooter: () => (s ? l.createElement(b.Z, { onClick: () => te(s), style: J.createRow, testID: "create-company-profile-btn" }, l.createElement(a.Z, { style: J.createAvatar }, l.createElement(k.default, null)), l.createElement(g.ZP, { size: "subtext1" }, l.createElement(C().I18NFormatMessage, { $i18n: "h8b54e37" }, l.createElement(g.ZP, { weight: "bold" }, s)))) : null), shouldAlwaysRender: s?.length > 0, source: S._4.CompanyProfile, style: [e.style, J.dropdown] }) : null);
                            },
                            [te, X, O, A, E, s],
                        ),
                        le = l.useCallback(
                            (t) => {
                                const { onFocus: r } = t;
                                return l.createElement(y.Z, {
                                    autoComplete: "off",
                                    endContent: V ? null : l.createElement(G, { hasSaved: P, isSaving: v || j }),
                                    errorText: e,
                                    invalid: !!e,
                                    label: $,
                                    name: "company-profile-selector-input",
                                    onChange: K,
                                    onFocus: r,
                                    onKeyPress: n,
                                    ref: d,
                                    startContent: (() => {
                                        if ("" === s) return null;
                                        const e = o?.id && s === o?.name ? o?.data?.logoUrl : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
                                        return o?.id ? l.createElement(a.Z, { style: J.logo }, l.createElement(f.default, { shape: "square", size: "medium", uri: e })) : void 0;
                                    })(),
                                    style: J.inputStyle,
                                    testID: "company-profile-selector-input",
                                    value: s,
                                });
                            },
                            [V, e, K, P, v, j, n, o?.data?.logoUrl, o?.id, o?.name, s],
                        );
                    return l.createElement(a.Z, { style: J.input }, l.createElement(Z.default, { isInModal: c, renderCustomDropdown: oe, renderCustomInput: le, rounded: !0, source: S._4.CompanyProfile, testID: "company-profile-selector", userLimit: 20 }), V && D && M && l.createElement(N, { companyName: M || "", onCancel: ne, onSelect: r, onSuccess: re }));
                },
                J = E.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 }, createRow: { flexDirection: "row", gap: 4, alignItems: "center", padding: e.spaces.space8 }, createAvatar: { width: 24, height: 24, borderRadius: e.borderRadii.xSmall, backgroundColor: e.colors.blue500, alignItems: "center", justifyContent: "center", color: e.colors.white }, logo: { paddingEnd: e.spaces.space4 }, dropdown: { maxHeight: "200px" }, input: { flexDirection: "row", gap: 16, alignItems: "center" }, success: { color: e.colors.green500 } })),
                ee = l.memo(X);
        },
        96702: (e, t, n) => {
            n.d(t, { Z: () => z });
            var r = n(202784),
                o = n(325686),
                l = n(392237),
                a = n(520385),
                s = n(991617),
                i = n(516951),
                c = n(381335),
                u = n(154003),
                d = n(885724);
            const m = r.createElement(d.default, null),
                p = l.default.create((e) => ({ editButton: { height: "auto" } })),
                g = () => {
                    const { blockId: e } = (0, s._L)();
                    return e ? r.createElement(o.Z, { style: p.editButton }, r.createElement(u.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var h = n(301503),
                b = n(989272),
                f = n(524496),
                y = n(925873),
                E = n(731708),
                _ = n(757483),
                C = n(187669),
                k = n(478414),
                x = n(949626);
            const I = ({ content: e }) => (
                    (0, C.q)(() => {
                        (0, b.fH)((0, k.yW)(k.Hx, k.K), k.Hx);
                    }),
                    r.createElement(r.Fragment, null, e && e.hasText() && r.createElement(x.Z, { className: k.Hx }, r.createElement(o.Z, { style: Z.richText }, r.createElement(f.Z, { contentState: (0, h.convertToRaw)(e) }))))
                ),
                Z = l.default.create((e) => {
                    const t = _.Z.hexToCss(e.colors.gray0, 0),
                        n = _.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})` } };
                }),
                T = ({ content: e, previewHeight: t, shouldTruncate: n = !0 }) => {
                    const [l, a] = r.useState(0),
                        [s, i] = r.useState(0),
                        [c, u] = r.useState(!n),
                        d = r.useRef(null);
                    r.useEffect(() => {
                        d.current && 0 === l && a(d.current.offsetHeight);
                    }, [l]);
                    const m = r.useMemo(() => {
                            const t = y.Z.getContentStateFromRaw(e);
                            return t ? (0, h.convertFromRaw)(t) : null;
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
                                          d.current && d.current.offsetHeight !== s && i(d.current.offsetHeight);
                                      },
                                      ref: d,
                                      style: p && !c ? { ...Z.previewContainer, maxHeight: t } : void 0,
                                  },
                                  r.createElement(I, { content: m }),
                                  p && !c ? r.createElement(o.Z, { style: Z.fade }) : null,
                              ),
                              p && r.createElement(E.ZP, { color: "link", onPress: () => u(!c), size: "subtext1", style: Z.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                S = l.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                w = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: n, sectionType: l } = (0, s.eF)(),
                        u = e.result?.content,
                        d = r.useMemo(() => l === a.NB.ABOUT && n, [n, l]);
                    return r.createElement(o.Z, { style: { ...S.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(T, { content: u?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: d }), t ? r.createElement(o.Z, { style: S.row }, r.createElement(g, null), r.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null);
                };
            var v = n(470397),
                R = n(823161),
                P = n(111677),
                B = n.n(P),
                D = n(873302);
            const F = B().a2f2faab,
                M = ({ endMonth: e, endYear: t, isCurrent: n, startMonth: o, startYear: l }) => {
                    const a = (0, D.ZU)(o, l),
                        s = (0, D.ZU)(e, t);
                    return a ? r.createElement(v.Z, null, r.createElement(B().I18NFormatMessage, { $i18n: "bab4ce51", start: F(a), end: n ? "Present" : s ? F(s) : "" }), r.createElement(E.ZP, null, (0, D.HM)(a, s || new Date()))) : null;
                },
                L = l.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                O = ({ block: e, isEditing: t }) => {
                    const n = e?.result?.content,
                        l = n?.company_profile_results?.result;
                    return n ? r.createElement(o.Z, { style: { ...L.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(o.Z, { style: { ...L.row, flex: 1 } }, r.createElement(R.default, { shape: "square", size: "large", uri: l?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(o.Z, { style: L.workInfo }, r.createElement(E.ZP, { size: "subtext1", weight: "bold" }, n.title), r.createElement(v.Z, null, l?.core?.name || n.company_profile_name ? r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, l?.core?.name || n.company_profile_name) : null, n.location_text ? r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, n.location_text) : null), r.createElement(E.ZP, { color: "gray700", size: "subtext1" }, r.createElement(M, { endMonth: n.end_month, endYear: n.end_year, isCurrent: !!n.active_role, startMonth: n.start_month, startYear: n.start_year })), r.createElement(T, { content: n.description, previewHeight: 120, shouldTruncate: !0 }))), t ? r.createElement(o.Z, { style: L.row }, r.createElement(g, null), r.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null) : null;
                },
                W = ({ block: e, blockId: t, isEditing: n = !1 }) => {
                    const o = r.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case a.Mp.RICHTEXT:
                                return r.createElement(w, { block: e, isEditing: n });
                            case a.Mp.WORK_HISTORY:
                                return r.createElement(O, { block: e, isEditing: n });
                            default:
                                return null;
                        }
                    }, [e, n]);
                    return e ? r.createElement(s.Vo.Provider, { value: { ...s.dq, blockId: t, blockQueryId: e.__id } }, o()) : null;
                },
                A = l.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                z = ({ blocks: e, isEditing: t }) =>
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
                                      { key: a, style: A.blockGroup },
                                      r.createElement(
                                          o.Z,
                                          {
                                              style: (() => {
                                                  const t = A.block;
                                                  return 1 === e.length ? t : 0 === l ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : l > 0 && l < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : l === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          r.createElement(W, { block: n, blockId: a, isEditing: t }),
                                      ),
                                  );
                              }),
                          )
                        : null;
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(190286),
                l = n(111677),
                a = n.n(l),
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
                h = a().g9677c6e,
                b = a().a2b8c54c,
                f = ({ blockId: e, headline: t, onClose: n, onCompleted: l, queryId: a, subtext: u, userId: d }) => {
                    const m = (0, s.p)(),
                        p = (0, c.z)(),
                        [f, y] = g(),
                        E = r.useCallback(() => {
                            n();
                        }, [n]),
                        _ = r.useCallback(() => {
                            p.scribe({ ...(0, i.MA)("delete_block_btn", "click") }),
                                f({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, t) => {
                                        a && e.delete(a);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: b }), n(), l && l());
                                    },
                                });
                        }, [m, p, e, f, n, l, a, d]);
                    return r.createElement(o.Z, { confirmButtonDisabled: y, confirmButtonLabel: h, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: E, onConfirm: _, text: u });
                };
        },
        381335: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                o = n(325686),
                l = n(154003),
                a = n(392237),
                s = n(111677),
                i = n.n(s),
                c = n(607127),
                u = n(991617),
                d = n(512547);
            const m = i().h6a724ac,
                p = i().f94aacae,
                g = i().d96cf7ce,
                h = a.default.create((e) => ({ iconButton: { height: "auto" } })),
                b = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: n, sectionQueryId: a } = (0, u.eF)(),
                        { blockId: s, blockQueryId: i } = (0, u._L)(),
                        { userId: b, userQueryId: f } = (0, u.se)(),
                        [y, E] = r.useState(!1),
                        _ = r.useCallback(() => {
                            E(!1);
                        }, []),
                        C = r.useCallback(() => {
                            E(!0);
                        }, []);
                    return r.createElement(r.Fragment, null, t ? r.createElement(o.Z, { style: h.iconButton }, r.createElement(l.ZP, { disabled: !s || !b, icon: r.createElement(c.default, null), onClick: C, size: "xSmall", type: "destructiveText" })) : r.createElement(l.ZP, { disabled: !s || !b, onClick: C, size: "large", type: "destructiveText" }, g), y && s && b ? r.createElement(d.Z, { blockId: s, headline: m, onClose: _, onCompleted: e, queryId: n > 1 ? i : a || f, subtext: p, userId: b }) : null);
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
            n.d(t, { Z: () => Z });
            n(136728);
            var r = n(202784),
                o = n(325686),
                l = n(277660),
                a = n.n(l),
                s = n(107267),
                i = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(111677),
                p = n.n(m),
                g = n(982866),
                h = n(952793),
                b = n(462166),
                f = n(873302),
                y = n(96702),
                E = n(991617),
                _ = n(736993);
            const C = p().b721eb38,
                k = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: l } = (0, E.eF)(),
                        { userId: a, userQueryId: m } = (0, E.se)(),
                        p = (0, s.useHistory)(),
                        k = r.useCallback(() => {
                            p.push("/settings/bio/new/about");
                        }, [p]),
                        I = (0, h.hC)("xprofile_section_visibility_enabled"),
                        Z = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const T = a === m,
                        S = (0, f.Kh)(e?.slice(), b.GL);
                    return r.createElement(o.Z, { style: x.root }, r.createElement(o.Z, { style: x.header }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, C), I && T && r.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(l) } }, r.createElement(_.K3, { style: x.visibilityIcon, visibility: l })), I && t && r.createElement(_.ZP, { currentVisibility: l, sectionId: n })), r.createElement(o.Z, null, e?.length ? r.createElement(y.Z, { blocks: S, isEditing: t }) : r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: Z, onClick: k, style: x.container }, r.createElement(u.ZP, null, "Tell us about yourself"), r.createElement(g.default, null)) : null)));
                },
                x = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                I = ({ isEditing: e = !1, section: t }) => {
                    const n = a()(b.C_, t),
                        o = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(k, { blocks: o, isEditing: e }) : null;
                },
                Z = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(I, { isEditing: e, section: t }) : r.createElement(k, { isEditing: e }));
        },
        164349: (e, t, n) => {
            n.d(t, { Z: () => Z });
            n(136728);
            var r = n(202784),
                o = n(325686),
                l = n(277660),
                a = n.n(l),
                s = n(107267),
                i = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(111677),
                p = n.n(m),
                g = n(982866),
                h = n(952793),
                b = n(462166),
                f = n(873302),
                y = n(96702),
                E = n(991617),
                _ = n(736993);
            const C = p().a622dfcc,
                k = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: l } = (0, E.eF)(),
                        { userId: a, userQueryId: m } = (0, E.se)(),
                        p = (0, s.useHistory)(),
                        k = r.useCallback(() => {
                            n ? p.push(`/settings/bio/new/${n}/work_experience`) : p.push("/settings/bio/new/work_experience");
                        }, [p, n]),
                        I = (0, h.hC)("xprofile_section_visibility_enabled"),
                        Z = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const T = a === m,
                        S = (0, f.Kh)(e?.slice(), b.lw),
                        w = (0, f.s1)(S);
                    return r.createElement(o.Z, { style: x.root }, r.createElement(o.Z, { style: x.headerSection }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, C), I && T && r.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(l) } }, r.createElement(_.K3, { style: x.visibilityIcon, visibility: l })), I && t && r.createElement(_.ZP, { currentVisibility: l, sectionId: n })), r.createElement(o.Z, { style: x.blocksList }, w && w.length > 0 ? r.createElement(y.Z, { blocks: w, isEditing: t }) : null, r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: Z, onClick: k, style: x.container }, r.createElement(u.ZP, null, "Add experience"), r.createElement(g.default, null)) : null)));
                },
                x = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                I = ({ isEditing: e = !1, section: t }) => {
                    const n = a()(b.C_, t),
                        o = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(k, { blocks: o, isEditing: e }) : null;
                },
                Z = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(I, { isEditing: e, section: t }) : r.createElement(k, { isEditing: e }));
        },
        736993: (e, t, n) => {
            n.d(t, { K3: () => _, Q: () => x, ZP: () => I });
            var r = n(163015),
                o = n(202784),
                l = n(400752),
                a = n(325686),
                s = (n(585488), n(351743)),
                i = n.n(s),
                c = n(731708),
                u = n(797553),
                d = n(143670),
                m = n(392237),
                p = n(111677),
                g = n.n(p),
                h = n(14284),
                b = n(468670),
                f = n(520385),
                y = n(991617);
            const E = r.Z,
                _ = ({ style: e, visibility: t }) => (t === f.pR.PUBLIC ? o.createElement(h.default, { style: e }) : t === f.pR.PRIVATE ? o.createElement(b.default, { style: e }) : void o.Fragment),
                C = g().baffe39a,
                k = g().je07e266,
                x = (e) => (e === f.pR.PUBLIC ? C : e === f.pR.PRIVATE ? k : ""),
                I = ({ currentVisibility: e, sectionId: t }) => {
                    const n = (0, l.b9)(y.j7),
                        [r, s] = o.useState(e ?? f.pR.PUBLIC),
                        [m, p] = o.useState(!1),
                        [C] = i()(E),
                        k = o.useCallback(
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
                    return o.createElement(a.Z, null, o.createElement(a.Z, { onClick: () => p(!0), style: Z.target }, o.createElement(_, { style: Z.icon, visibility: r }), o.createElement(c.ZP, { style: Z.targetText }, x(r))), m && o.createElement(u.default, { isFixed: !0, onDismiss: () => p(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, o.createElement(d.Z, { Icon: h.default, actionText: g().baffe39a, onClick: () => k(f.pR.PUBLIC) }), o.createElement(d.Z, { Icon: b.default, actionText: g().je07e266, onClick: () => k(f.pR.PRIVATE) })));
                },
                Z = m.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, n) => {
            n.d(t, { Fo: () => a, Vo: () => m, Y_: () => i, _L: () => p, bQ: () => c, dq: () => d, eF: () => u, j7: () => g, se: () => s, w: () => l });
            var r = n(202784),
                o = n(565058);
            const l = { userId: null, userQueryId: null },
                a = r.createContext(l),
                s = () => r.useContext(a),
                i = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = r.createContext(i),
                u = () => r.useContext(c),
                d = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = r.createContext(d),
                p = () => r.useContext(m),
                g = (0, o.cn)(!1);
        },
        664052: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                o = n(301503),
                l = n(325686),
                a = n(925873),
                s = n(989272),
                i = n(891198),
                c = n(731708),
                u = n(977952),
                d = n(297256),
                m = n(524496),
                p = n(392237),
                g = n(111677),
                h = n.n(g),
                b = n(187669),
                f = n(874111);
            const y = h().c2333081,
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
                C = ({ allowExtendedPasteStyles: e, characterLimit: t, editable: n = !0, editorClass: p, editorStyles: g, initialState: h = "", limitedRichText: C = !1, numberOfLines: k = 10, onChange: x, textSizesOverride: I }) => {
                    const [Z, T] = r.useState(E(h));
                    (0, b.q)(() => {
                        g && p && (0, s.fH)(g, p);
                    });
                    const S = r.useMemo(() => Z?.getCurrentContent(), [Z]),
                        w = r.useCallback(
                            (e) => {
                                const t = a.Z.convertEmojiToEntities(e);
                                T(t), x(t);
                            },
                            [x],
                        ),
                        v = (0, f.c6)(Z);
                    let R = v;
                    v > 1 && (R = i.ZP.getFormattedCount(v));
                    const P = r.useMemo(() => {
                            const e = !!t && v > t;
                            return r.createElement(l.Z, null, r.createElement(c.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: _.textCountLabel }, y({ count: R })));
                        }, [v, R, t]),
                        B = r.useMemo(() => ({ allowExtendedPasteStyles: e, editorState: Z, element: u.Z, stripPastedStyles: !0 }), [e, Z]);
                    return r.createElement(l.Z, null, n ? r.createElement(l.Z, { style: _.richTextWrapper }, r.createElement(d.b, { inputStyle: _.container, isInputFullWidth: !0, limitedRichText: C, numberOfLines: k, onChange: w, richTextInputContext: B, textSizesOverride: I, toolbarRightControl: P })) : r.createElement(r.Fragment, null, S && S.hasText() ? r.createElement(l.Z, { style: _.richTextWrapper }, r.createElement(l.Z, { style: _.readOnlyContainer }, r.createElement(m.Z, { contentState: (0, o.convertToRaw)(S) }))) : null));
                };
        },
        998693: (e, t, n) => {
            n.d(t, { Z: () => x });
            var r = n(36879),
                o = n(202784),
                l = n(10622),
                a = n.n(l),
                s = (n(585488), n(437429)),
                i = n.n(s),
                c = n(386802),
                u = n(855488),
                d = n(392237),
                m = n(111677),
                p = n.n(m),
                g = n(665468),
                h = n(666536),
                b = n(125568),
                f = n(874088),
                y = n(339110),
                E = n(524110);
            const _ = p().jaaa8984,
                C = r.Z,
                k = d.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                x = ({ onChange: e, onEnter: t, onSelect: n, value: r }) => {
                    const { isModal: l } = o.useContext(c.Z),
                        s = o.useRef(null),
                        d = i()(),
                        [m, p] = o.useState(!1),
                        [x, I] = o.useState([]),
                        [Z, T] = o.useState(!1),
                        S = (0, b.t)(),
                        w = o.useMemo(
                            () =>
                                (0, h.Z)((e) => {
                                    S() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              T(!0),
                                              ((e) => {
                                                  a()(d, C, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          I(e?.location_type_ahead || []), T(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [d, S],
                        ),
                        v = o.useCallback(
                            (t) => {
                                e({ value: t.target.value }), w(t.target.value);
                            },
                            [w, e],
                        ),
                        R = o.useCallback(
                            (e, t) => {
                                s?.current?.focus(), n({ id: e.id, name: e.name }), p(!1);
                            },
                            [n],
                        ),
                        P = o.useCallback(
                            (e) => {
                                const t = x?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return o.createElement(o.Fragment, null, m ? o.createElement(E.Z, { isLoading: Z, items: t, onItemClick: R, ref: e.ref, source: y._4.JobLocation, style: e.style }) : null);
                            },
                            [R, x, Z, m],
                        ),
                        B = o.useCallback(
                            (e) => {
                                const { onFocus: n } = e;
                                return o.createElement(u.Z, { Icon: g.default, autoComplete: "off", label: _, name: "location-selector-input", onChange: v, onFocus: n, onKeyPress: t, ref: s, style: k.inputStyle, testID: "location-selector-input", value: r });
                            },
                            [v, t, r],
                        );
                    return o.createElement(f.default, { isInModal: l, renderCustomDropdown: P, renderCustomInput: B, rounded: !0, source: y._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(925873),
                l = n(392237),
                a = n(913670);
            const s = l.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                i = ({ editorState: e, onChange: t }) => {
                    const n = r.useCallback(
                        (n) => {
                            const r = o.Z.insertTextAtCursor(e, n.text);
                            t(r);
                        },
                        [e, t],
                    );
                    return r.createElement(a.Z, { iconStyle: s.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var r = n(202784),
                o = n(301503),
                l = n(597496),
                a = n(339110),
                s = n(456910),
                i = n(230295),
                c = n(267446);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = r.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: o, isInlineReply: s, onTypeaheadStateChange: i, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                m = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return r.createElement(l.H1, { composeCommunityId: t, contextText: n, isInline: o, isInlineReply: s, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: i, query: m, ref: this._genericWrapperRef, source: c || a._4.Compose }, e(this._handleInputChange));
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
                                    { end: o, start: l, word: a } = s.si(this._getCaret(e), r),
                                    i = s.bR(a || "", "compose");
                                if (i?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === l)) this._setQueryContext(void 0);
                                else if (i) {
                                    const { q: t, result_type: n } = i;
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
                        s = o.Modifier.replaceText(n.getCurrentContent(), a, e),
                        i = o.EditorState.push(n, s, "insert-characters"),
                        c = l + e.length,
                        u = i.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return o.EditorState.forceSelection(i, u);
                }
            }
            const d = u;
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                o = n(500002),
                l = n(668214),
                a = n(997174),
                s = n(118823);
            const i = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: r },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: l, search: a },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (i = !0));
                    const c = o || s;
                    ((c && o !== s) || (!c && n !== l) || r !== a || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const u = (0, o.ZP)(i(c));
        },
        72130: (e, t, n) => {
            n.d(t, { Ak: () => s, MA: () => a, Rz: () => r, Zi: () => l, he: () => o });
            const r = () => ({ component: "extended_profile_settings", action: "click" }),
                o = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                l = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                a = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                s = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => o, NB: () => l, P2: () => a, j3: () => r, pR: () => s });
            const r = 5e4,
                o = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                l = (o.RICHTEXT, o.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                a = { about: l.ABOUT, work_experience: l.WORK_EXPERIENCE },
                s = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => g, Kh: () => m, ZU: () => d, hW: () => b, s1: () => p, uR: () => h });
            var r = n(990242),
                o = n.n(r),
                l = n(111677),
                a = n.n(l),
                s = n(520385),
                i = n(462166);
            const c = a().eb7710f1,
                u = a().bfc38bb5,
                d = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const n = e?.filter((e) => e);
                    return n
                        ? n.map((e) => {
                              const n = { ...e },
                                  r = o()(i.wJ, n),
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
                                s = d(r?.start_month, r?.start_year) ?? new Date(0);
                            return a.getFullYear() !== s.getFullYear() ? s.getFullYear() - a.getFullYear() : s.getMonth() - a.getMonth();
                        });
                },
                g = (e, t) => {
                    let n = t.getMonth() - e.getMonth() + 1,
                        r = t.getFullYear() - e.getFullYear();
                    return n < 0 && (r--, (n += 12)), r && n ? `${c({ years: r })} ${u({ months: n })}` : r ? c({ years: r }) : n ? u({ months: n }) : "";
                },
                h = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === s.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === s.Mp.RICHTEXT)) : void 0),
                b = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => a, DC: () => r, _e: () => l, iN: () => c, kd: () => s, pc: () => o });
            const r = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                o = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                l = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                a = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                i = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: i.DRAFT, PUBLISHED: i.PUBLISHED });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-e019dbda.004291ea.js.map
