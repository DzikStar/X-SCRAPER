"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows-63cb1cc4"],
    {
        127218: (e, t, r) => {
            r.d(t, { C: () => b });
            var n = r(202784),
                a = r(614983),
                o = r.n(a),
                i = r(437429),
                s = r.n(i),
                l = r(57074),
                c = r.n(l),
                p = r(10622),
                d = r.n(p),
                m = r(585488),
                u = r(71620),
                g = r(163889),
                h = r(312771),
                f = r(535338);
            function b(e, t, r) {
                const [a, i] = n.useState(!1),
                    [l, p] = n.useState(null),
                    b = s()(),
                    Z = c()(t),
                    _ = (0, u.po)(),
                    E = (0, f.p)(e, Z, r);
                return n.useMemo(() => {
                    const t = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    o()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: r, previous_cursor: n } =
                            (function (e, t) {
                                try {
                                    o()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let r = e;
                                    for (const e of t) o()(!!r, "The provided path is invalid."), o()("string" == typeof e, "Unexpected value for path!"), (r = r?.[e]);
                                    return r;
                                } catch (e) {
                                    return void (0, g.ZP)(e.message);
                                }
                            })(E, t) || {},
                        s = (t) => {
                            a ||
                                (i(!0),
                                d()(b, e, { ...Z, cursor: t }).subscribe({
                                    complete: () => {
                                        i(!1);
                                    },
                                    error: (e) => {
                                        i(!1), p(e), _(e);
                                    },
                                }));
                        },
                        c = () => {
                            r && s(r);
                        },
                        u = () => {
                            n && s(n);
                        },
                        f = () => {
                            s(void 0);
                        };
                    return l ? { subsequentFetchStatus: h.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: u, refetch: f, data: E, hasNext: Boolean(r), hasPrevious: Boolean(n) } : { subsequentFetchStatus: a ? h.ZP.LOADING : h.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: u, refetch: f, data: E, hasNext: Boolean(r), hasPrevious: Boolean(n) };
                }, [e, E, a, l, b, Z, _]);
            }
        },
        264922: (e, t, r) => {
            r.d(t, { Z: () => y });
            var n = r(202784),
                a = r(108362),
                o = r(420412),
                i = r(154003),
                s = r(392237),
                l = r(674132),
                c = r.n(l),
                p = r(290402),
                d = r(253493),
                m = r(71620),
                u = r(668214),
                g = r(38562),
                h = r(919022);
            const f = (0, u.Z)()
                    .propsFromState(() => ({ fetchStatus: g.UD, viewerUser: h.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: g.Sb, createLocalApiErrorHandler: (0, m.zr)("SETTINGS_LOADER") })),
                b = "settingsDetailSave",
                Z = c().i2209530;
            class _ extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return n.createElement(p.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: r, submitLabel: s, submitType: l, withMarginBottom: c } = this.props;
                            return n.createElement(a.Z, { style: [E.contentRoot, c && E.withMarginBottom] }, e, t ? n.createElement(n.Fragment, null, n.createElement(o.Z, null), n.createElement(a.Z, { style: E.buttonContainer }, n.createElement(i.ZP, { disabled: r, onPress: t, style: E.button, testID: b, type: l }, s))) : null);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                getBackLocation() {
                    const { location: e, viewerUser: t } = this.props,
                        r = t ? "/settings" : "/settings/account/personalization";
                    return e && e.pathname === r ? "/" : r;
                }
                render() {
                    const { onBackClick: e, rightControl: t, screenType: r, secondaryBar: a, title: o, viewerUser: i, withBottomBorder: s } = this.props,
                        l = this.getBackLocation(),
                        c = i ? `@${i.screen_name}` : void 0;
                    return n.createElement(d.Z, { backLocation: l, onBackClick: e, rightControl: t, screenType: r, secondaryBar: a, showSubtitleOnWideDetail: !1, subtitle: c, title: o, withBottomBorder: s }, i ? this._renderWithFetchSettings() : this._render());
                }
            }
            _.defaultProps = { submitLabel: Z, submitType: "brandFilled", withMarginBottom: !0 };
            const E = s.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${s.default.iPhoneOffsetBottom})` } })),
                y = f(_);
        },
        50998: (e, t, r) => {
            r.d(t, { Z: () => u });
            r(136728);
            var n = r(202784),
                a = r(107267),
                o = r(190286),
                i = r(674132),
                s = r.n(i),
                l = r(720816);
            const c = s().af4d0a80,
                p = s().c701e5cc,
                d = s().a649778c,
                m = s().d4ab68e2,
                u = (e) => {
                    const { onNavigation: t, shouldBlockNavigation: r } = e,
                        i = (0, a.useHistory)(),
                        [s, u] = n.useState(void 0),
                        g = n.useCallback((e, t) => !r(e, t) || (u({ nextLocation: e, action: t }), !1), [u, r]);
                    n.useEffect(() => i.block(g), [g, i]);
                    const h = n.useCallback(() => {
                            u(void 0);
                        }, [u]),
                        f = n.useCallback(() => {
                            t?.(),
                                u((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: r } = e;
                                    switch (t) {
                                        case "PUSH":
                                            i.push(r);
                                            break;
                                        case "REPLACE":
                                            i.replace(r);
                                            break;
                                        case "POP":
                                            i.goBackThroughModals({ fallbackPath: l.LI });
                                    }
                                });
                        }, [i, t, u]);
                    return s ? n.createElement(o.Z, { cancelButtonLabel: d, confirmButtonLabel: m, confirmButtonType: "destructiveFilled", headline: c, onCancel: h, onConfirm: f, text: p }) : null;
                };
        },
        977126: (e, t, r) => {
            r.d(t, { Z: () => l, j: () => s.j });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(392237),
                s = r(698537);
            const l = (e) => {
                    const { children: t, childrenStyle: r, headline: i, illustration: l, rightControl: p } = e;
                    return n.createElement(a.Z, { style: c.root }, l && n.createElement(s.Z, { style: c.illustration, type: l }), n.createElement(a.Z, { style: c.header }, n.createElement(o.ZP, { "aria-level": 3, role: "heading", size: "headline1", style: c.headline, weight: "heavy" }, i), p), t && n.createElement(a.Z, { style: r }, t));
                },
                c = i.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginTop: e.spaces.space20, marginBottom: e.spaces.space24 }, header: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, headline: { marginVertical: e.spaces.space12 }, illustration: { alignSelf: "start" } }));
        },
        541659: (e, t, r) => {
            r.d(t, { Z: () => E });
            var n = r(807896),
                a = r(202784),
                o = r(325686),
                i = r(107267),
                s = r(822399),
                l = r(392237),
                c = r(674132),
                p = r.n(c),
                d = r(323265),
                m = r(980407),
                u = r(720816),
                g = r(154003),
                h = r(711223),
                f = r(176544);
            const b = p().d1a683b8,
                Z = () => a.createElement(g.ZP, { "aria-label": b, icon: a.createElement(h.default, null), link: f._t, type: "primaryText" }),
                _ = p().d7b51c68,
                E = (e) => {
                    const { bottomBar: t, children: r, leftControlShouldClose: l, percentageComplete: c, rightControl: p, screenRef: g, withInfoButton: h, ...f } = e,
                        b = (0, i.useHistory)(),
                        E = l ? "close" : "back",
                        v = u.LI,
                        w = h ? a.createElement(o.Z, { style: y.rightControl }, a.createElement(Z, null), p) : p,
                        k = c ? a.createElement(s.Z, { progress: c }) : void 0,
                        C = a.createElement(a.Fragment, null, a.createElement(o.Z, { style: y.childrenWrapper }, r), t && a.createElement(o.Z, { style: y.bottomBarWrapper }, t)),
                        P = () => {
                            l ? b.goBackThroughModals({ fallbackPath: v }) : b.goBack({ backLocation: v });
                        };
                    g && (g.current = { goBack: P });
                    const x = d.ZP.isTwitterApp();
                    return a.createElement(m.Z, (0, n.Z)({}, f, { backButtonType: E, backLocation: v, children: C, documentTitle: _, hideBackButton: x, onBackClick: P, rightControl: !x && w, secondaryBar: k }));
                },
                y = l.default.create((e) => ({ iconTwitter: { color: e.colors.primary, flexGrow: 1, height: "1.75rem" }, rightControl: { alignItems: "center", flexDirection: "row", gap: e.spaces.space4 }, childrenWrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto" }, bottomBarWrapper: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, boxShadow: e.boxShadows.small } }));
        },
        973316: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(807896),
                a = (r(136728), r(202784)),
                o = r(107267),
                i = r(154003);
            const s = (e) => {
                const { disabled: t, label: r, onPress: s, path: l, ...c } = e,
                    p = (0, o.useHistory)(),
                    [d, m] = a.useState(!1),
                    u = () => {
                        p.push(l);
                    };
                return a.createElement(
                    i.ZP,
                    (0, n.Z)({}, c, {
                        disabled: d || t,
                        onPress: (e) => {
                            s
                                ? (m(!0),
                                  s(e)
                                      .then(u)
                                      .finally(() => m(!1)))
                                : u();
                        },
                    }),
                    r,
                );
            };
        },
        523361: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(807896),
                a = (r(136728), r(202784)),
                o = r(107267),
                i = r(731708);
            const s = ({ label: e, path: t, ...r }) => {
                const s = (0, o.useHistory)();
                return a.createElement(
                    i.ZP,
                    (0, n.Z)({}, r, {
                        onPress: () => {
                            s.push(t);
                        },
                        underlineWeight: "heavy",
                        weight: "bold",
                        withUnderline: !0,
                    }),
                    e,
                );
            };
        },
        859538: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(824937),
                a = r(708196),
                o = r(202784),
                i = r(325686),
                s = (r(585488), r(277660)),
                l = r.n(s),
                c = r(420412),
                p = r(392237),
                d = r(674132),
                m = r.n(d),
                u = r(724345),
                g = r(569778),
                h = r(779295),
                f = r(274257),
                b = r(720816),
                Z = r(209434);
            const _ = m().iba08a94,
                E = m().a5f55bfa,
                y = a.Z,
                v = n.Z,
                w = ({ user: e, viewer: t }) => {
                    const r = l()(y, e),
                        n = l()(v, t),
                        { name: a, profile_image_url_https: s, protected: p, screen_name: d } = r?.legacy || {},
                        { verified: m } = r.verification || {},
                        { is_blue_verified: w } = r,
                        C = (0, f.JG)(n) ?? "",
                        P = (0, f.fJ)(n) ?? "";
                    return o.createElement(o.Fragment, null, o.createElement(u.Z, { style: k.interstitial }, o.createElement(g.Z, { headline: _, subtext: E })), o.createElement(c.Z, null), o.createElement(u.Z, { style: k.previewCallout }, o.createElement(Z.Z, { path: b.Km })), o.createElement(i.Z, { style: k.summaryFramed }, o.createElement(h.Z, { badgeImageUrl: s ?? void 0, badgeName: a ?? void 0, badgeScreenName: d ?? void 0, descriptionValue: P, imageUrl: s ?? void 0, introValue: C, isBlueVerified: w || !1, isProtected: p, isVerified: m ?? !1, name: a ?? void 0, screenName: d ?? void 0 })));
                },
                k = p.default.create((e) => ({ interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 }, previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 }, blob: { paddingTop: 0, paddingBottom: 0, paddingStart: 0, paddingEnd: 0 }, summaryFramed: { marginTop: e.spaces.space20, marginHorizontal: e.spaces.space20, marginBottom: e.spaces.space32 } }));
        },
        325319: (e, t, r) => {
            r.d(t, { Z: () => L });
            var n = r(169781),
                a = r(474436),
                o = r(202784),
                i = r(614983),
                s = r.n(i),
                l = r(325686),
                c = (r(585488), r(277660)),
                p = r.n(c),
                d = r(708852),
                m = r(420412),
                u = r(392237),
                g = r(674132),
                h = r.n(g),
                f = r(187669),
                b = r(272191),
                Z = r(724345),
                _ = r(569778),
                E = r(274257),
                y = r(720816),
                v = r(523361),
                w = r(209434);
            const k = h().gf32cca2,
                C = h().j8ba99b4,
                P = h().j679dcda,
                x = a.Z,
                B = n.Z,
                I = (e, t) => {
                    const { autoFocus: r, descriptionMaxLength: n, user: a, viewer: i } = e,
                        c = (0, d.D2)(),
                        u = o.useRef();
                    (0, f.q)(() => {
                        r && u.current?.scrollIntoView && u.current.scrollIntoView();
                    });
                    const g = p()(x, a),
                        h = p()(B, i),
                        { profile_image_url_https: I, screen_name: L } = g.legacy ?? {},
                        T = (0, E.fJ)(h),
                        $ = (0, E.NP)(h, "description");
                    return (
                        s()("string" == typeof I, "imageUrl must be defined"),
                        s()("string" == typeof L, "screenName must be defined"),
                        o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(Z.Z, { style: S.interstitial }, o.createElement(_.Z, { headline: k, subtext: C })),
                            o.createElement(Z.Z, { style: S.examplesLink }, o.createElement(v.Z, { label: P, path: y.$w })),
                            o.createElement(m.Z, null),
                            o.createElement(Z.Z, { style: S.previewCallout }, o.createElement(w.Z, { path: y.Km })),
                            o.createElement(b.Z, {
                                autoFocus: r,
                                imageUrl: I,
                                onChange: (e) => {
                                    $(e.currentTarget.value);
                                },
                                ref: t,
                                screenName: L,
                                style: [S.preview, c && S.previewWide],
                                value: T,
                                valueMaxLength: n,
                            }),
                            o.createElement(l.Z, { ref: u }),
                        )
                    );
                },
                L = o.forwardRef(I),
                S = u.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 }, previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 }, preview: { marginVertical: e.spaces.space16, marginHorizontal: e.spaces.space32 }, previewWide: { marginHorizontal: e.spaces.space16 } }));
        },
        315121: (e, t, r) => {
            r.d(t, { Z: () => L });
            var n = r(498292),
                a = r(885017),
                o = r(202784),
                i = r(614983),
                s = r.n(i),
                l = r(325686),
                c = (r(585488), r(277660)),
                p = r.n(c),
                d = r(708852),
                m = r(420412),
                u = r(392237),
                g = r(674132),
                h = r.n(g),
                f = r(187669),
                b = r(724345),
                Z = r(569778),
                _ = r(126819),
                E = r(274257),
                y = r(720816),
                v = r(523361),
                w = r(209434);
            const k = h().j325331a,
                C = h().e18e8da8,
                P = h().j679dcda,
                x = a.Z,
                B = n.Z,
                I = (e, t) => {
                    const { autoFocus: r, introMaxLength: n, user: a, viewer: i } = e,
                        c = (0, d.D2)(),
                        u = o.useRef();
                    (0, f.q)(() => {
                        r && u.current?.scrollIntoView && u.current.scrollIntoView();
                    });
                    const g = p()(x, a),
                        h = p()(B, i),
                        { name: I, profile_image_url_https: L } = g.legacy ?? {},
                        T = (0, E.JG)(h),
                        $ = (0, E.NP)(h, "creator_intro");
                    return (
                        s()("string" == typeof L, "imageUrl must be defined"),
                        s()("string" == typeof I, "name must be defined"),
                        o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(b.Z, { style: S.interstitial }, o.createElement(Z.Z, { headline: k, subtext: C })),
                            o.createElement(b.Z, { style: S.examplesLink }, o.createElement(v.Z, { label: P, path: y.o5 })),
                            o.createElement(m.Z, null),
                            o.createElement(b.Z, { style: S.previewCallout }, o.createElement(w.Z, { path: y.Km })),
                            o.createElement(_.Z, {
                                autoFocus: r,
                                imageUrl: L,
                                name: I,
                                onChange: (e) => {
                                    $(e.currentTarget.value);
                                },
                                ref: t,
                                style: [S.preview, c && S.previewWide],
                                value: T,
                                valueMaxLength: n,
                            }),
                            o.createElement(l.Z, { ref: u }),
                        )
                    );
                },
                L = o.forwardRef(I),
                S = u.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 }, previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 }, preview: { marginVertical: e.spaces.space16, marginHorizontal: e.spaces.space32 }, previewWide: { marginHorizontal: e.spaces.space16 } }));
        },
        209434: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(392237),
                s = r(674132),
                l = r.n(s),
                c = r(523361);
            const p = l().hf6f2914,
                d = l().i859a9d4,
                m = i.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" } })),
                u = ({ path: e, style: t }) => n.createElement(a.Z, { style: [m.root, t] }, n.createElement(o.ZP, { size: "headline2", weight: "heavy" }, p), n.createElement(c.Z, { label: d, path: e }));
        },
        642097: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(490188),
                a = r(829028),
                o = r(202784),
                i = (r(585488), r(277660)),
                s = r.n(i),
                l = r(674132),
                c = r.n(l),
                p = r(725516),
                d = r(541659),
                m = r(859538);
            const u = c().hf6f2914,
                g = a.Z,
                h = n.Z,
                f = (0, p.Z)(
                    ({ user: e, viewer: t }) => {
                        const r = s()(g, e),
                            n = s()(h, t);
                        return o.createElement(d.Z, { title: u, withInfoButton: !0 }, o.createElement(m.Z, { user: r, viewer: n }));
                    },
                    { component: "management_perks_confirm" },
                );
        },
        43512: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(807896),
                a = r(538341),
                o = r(360462),
                i = r(202784),
                s = (r(585488), r(277660)),
                l = r.n(s),
                c = r(674132),
                p = r.n(c),
                d = r(725516),
                m = r(541659),
                u = r(973316),
                g = r(325319),
                h = r(376755),
                f = r(274257),
                b = r(535083);
            const Z = p().af5b098e,
                _ = p().e36287c6,
                E = p().b772cd66,
                y = o.Z,
                v = a.Z,
                w = (0, d.Z)(
                    ({ backLocation: e, user: t, viewer: r }) => {
                        const a = l()(y, t),
                            o = l()(v, r),
                            s = (0, h.IH)(a),
                            c = (0, f.fJ)(o),
                            p = c.length > 0 && c.length <= 140 && c !== s,
                            [d, w] = (0, b.Z)(a, { description: c }),
                            k = { disabled: !p || w, label: E, onPress: d, path: e, type: "primaryFilled" },
                            C = i.createElement(u.Z, (0, n.Z)({}, k, { size: "small" }));
                        return i.createElement(m.Z, { rightControl: C, subtitle: _, title: Z }, i.createElement(g.Z, { autoFocus: !0, descriptionMaxLength: 140, user: a, viewer: o }));
                    },
                    { component: "management_perks_description" },
                );
        },
        220693: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(807896),
                a = r(116362),
                o = r(886733),
                i = r(202784),
                s = (r(585488), r(277660)),
                l = r.n(s),
                c = r(674132),
                p = r.n(c),
                d = r(725516),
                m = r(541659),
                u = r(973316),
                g = r(315121),
                h = r(376755),
                f = r(274257),
                b = r(535083);
            const Z = p().af5b098e,
                _ = p().c0348964,
                E = p().b772cd66,
                y = o.Z,
                v = a.Z,
                w = (0, d.Z)(
                    ({ backLocation: e, user: t, viewer: r }) => {
                        const a = l()(y, t),
                            o = l()(v, r),
                            s = (0, h.IU)(a),
                            c = (0, f.JG)(o),
                            p = c.length > 0 && c.length <= 140 && c !== s,
                            [d, w] = (0, b.Z)(a, { creatorIntro: c }),
                            k = { disabled: !p || w, label: E, onPress: d, path: e, type: "primaryFilled" },
                            C = i.createElement(u.Z, (0, n.Z)({}, k, { size: "small" }));
                        return i.createElement(m.Z, { rightControl: C, subtitle: _, title: Z }, i.createElement(g.Z, { autoFocus: !0, introMaxLength: 140, user: a, viewer: o }));
                    },
                    { component: "management_perks_intro" },
                );
        },
        893903: (e, t, r) => {
            r.d(t, { Z: () => Pe });
            r(136728);
            var n = r(949289),
                a = r(401301),
                o = r(951503),
                i = r(585158),
                s = r(202784),
                l = r(325686),
                c = (r(585488), r(277660)),
                p = r.n(c),
                d = r(107267),
                m = r(731708),
                u = r(420412),
                g = r(154003),
                h = r(392237),
                f = r(674132),
                b = r.n(f),
                Z = r(439412),
                _ = r(443781),
                E = r(652904),
                y = r(105633),
                v = r(865721),
                w = r(725516),
                k = r(264922),
                C = r(293723);
            const P = b().be103b84,
                x = () => s.createElement(l.Z, { style: B.root }, s.createElement(C.default, { style: B.icon }), s.createElement(m.ZP, { size: "subtext2", weight: "bold" }, P)),
                B = h.default.create((e) => ({ root: { alignItems: "center", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.small, flexDirection: "row", gap: e.spaces.space4, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, icon: { color: e.colors.plum500, height: e.spaces.space16 } }));
            var I = r(75277),
                L = r(161475),
                S = r(461715),
                T = r(614983),
                $ = r.n(T),
                z = r(351743),
                F = r.n(z),
                D = r(376755);
            const N = S.Z,
                H = L.Z,
                O = ({ priceChange: e, user: t }) => {
                    const r = p()(N, t),
                        n = (0, D.d7)(r),
                        [a, o] = F()(H);
                    return [
                        s.useCallback(
                            () =>
                                new Promise((t, r) => {
                                    e &&
                                        a({
                                            variables: { price_change: e },
                                            onCompleted: (e, r) => t(),
                                            onError: r,
                                            updater: (e) => {
                                                $()(n, "priceChangeId must be specified");
                                                e.get(n) && e.delete(n);
                                            },
                                        });
                                }),
                            [e, n, a],
                        ),
                        o,
                    ];
                };
            var V = r(973316);
            const j = b().a4c6e458,
                U = b().be54a313,
                R = b().hadd463a,
                W = b().b0728b5c,
                J = b().aea9f79c,
                M = I.Z;
            function q({ perksPricingLocation: e, price: t, priceChangeId: r, requestedPrice: n, user: a }) {
                const o = !!n,
                    i = p()(M, a),
                    [l, c] = O({ user: i, priceChange: r });
                return s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(m.ZP, { color: "gray700" }, j, " ", s.createElement(m.ZP, { weight: "bold" }, U({ price: t }))),
                    o
                        ? s.createElement(
                              s.Fragment,
                              null,
                              s.createElement(m.ZP, { color: "gray700" }, J, " ", s.createElement(m.ZP, { weight: "bold" }, U({ price: n }))),
                              r &&
                                  s.createElement(
                                      g.ZP,
                                      {
                                          disabled: c,
                                          onPress: (e) => {
                                              l();
                                          },
                                          size: "small",
                                          type: "destructiveOutlined",
                                      },
                                      W,
                                  ),
                          )
                        : s.createElement(V.Z, { label: R, path: e, size: "small", type: "primaryOutlined" }),
                );
            }
            const G = s.memo(q);
            var A = r(977126);
            const K = (e) => {
                    const { children: t, headline: r, rightControl: n } = e;
                    return s.createElement(l.Z, { style: Q.root }, s.createElement(l.Z, { style: Q.header }, s.createElement(m.ZP, { "aria-level": 4, role: "heading", size: "headline2", style: Q.headline, weight: "heavy" }, r), t), n);
                },
                Q = h.default.create((e) => ({ root: { alignItems: "start", flexDirection: "row", gap: e.spaces.space8 }, header: { flex: 1 }, headline: { marginBottom: e.spaces.space8 } }));
            var X = r(523361),
                Y = r(274257),
                ee = r(176544);
            const te = b().d7b51c68,
                re = b().a384fda0,
                ne = b().i4313618,
                ae = b().c0348964,
                oe = b().g522fd30,
                ie = b().e85471c6,
                se = b().fd75ca92,
                le = b().ia9c37c4,
                ce = b().f5be83b2,
                pe = b().e4ee8c6a,
                de = b().f3ce76c0,
                me = b().i8982e7e,
                ue = b().i3a90dee,
                ge = b().e261e6e6,
                he = b().ca5ca5ee,
                fe = b().abd845fe,
                be = b().f5be83b2,
                Ze = b().f66d24be,
                _e = b().g5925628,
                Ee = b().e58e85d2,
                ye = i.Z,
                ve = o.Z,
                we = a.Z,
                ke = n.Z,
                Ce = h.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, benefits: { gap: e.spaces.space32, marginTop: e.spaces.space16 }, other: { gap: e.spaces.space24, marginTop: e.spaces.space12 }, buttons: { flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space8 }, button: { flexBasis: `${e.breakpoints.micro}px`, flexGrow: 1, flexShrink: 1 } })),
                Pe = (0, w.Z)(
                    ({ backLocation: e, perksConfirmLocation: t, perksDescriptionLocation: r, perksIntroLocation: n, perksPricingLocation: a, priceOfferings: o, subscriptionsPriceOfferings: i, user: c, viewer: h, withAppBar: f }) => {
                        const { featureSwitches: b } = (0, _.QZ)(),
                            w = b.isTrue("super_follow_web_deactivate_enabled"),
                            C = (0, d.useHistory)(),
                            P = (0, d.useLocation)(),
                            { $fragmentType: B, ...I } = p()(ye, o),
                            { $fragmentType: L, ...S } = p()(ve, i),
                            T = p()(we, c),
                            $ = p()(ke, h),
                            z = (0, D.IU)(T),
                            F = (0, D.IH)(T),
                            N = (0, D.Ex)(T) ?? "offer2",
                            H = T.legacy?.profile_image_url_https ?? void 0,
                            O = T.legacy?.screen_name ?? void 0,
                            { new_price: j, price_change: U } = T.super_follow_pending_price_change || {},
                            R = (0, Y.Eo)(N, I, S),
                            W = (0, Y.Eo)(j || "", I, S),
                            J = s.createElement(X.Z, { label: he, path: t, size: "subtext1" }),
                            M = s.createElement(V.Z, { label: fe, path: n, size: "small", type: "primaryOutlined" }),
                            q = s.createElement(V.Z, { label: fe, path: r, size: "small", type: "primaryOutlined" }),
                            Q = s.useCallback(() => {
                                C.push(e);
                            }, [C, e]),
                            Pe = s.createElement(s.Fragment, null, s.createElement(A.Z, { childrenStyle: Ce.benefits, headline: re, illustration: A.j.Ribbon, rightControl: J }, s.createElement(m.ZP, { color: "gray700" }, ne), s.createElement(K, { headline: ae, rightControl: M }, s.createElement(Z.Z, { imageUrl: H, screenName: O, value: z })), s.createElement(K, { headline: oe, rightControl: q }, s.createElement(Z.Z, { imageUrl: H, screenName: O, value: F })), s.createElement(K, { headline: ie }, s.createElement(m.ZP, { color: "gray700" }, se)), b.isTrue("responsive_web_creator_preferences_previews_enabled_setting") ? s.createElement(y.Z, null) : null), s.createElement(u.Z, null), s.createElement(A.Z, { childrenStyle: Ce.other, headline: le, illustration: A.j.PiggyBank }, s.createElement(G, { perksPricingLocation: a, price: R, priceChangeId: U || "", requestedPrice: W, user: T })), s.createElement(u.Z, null), s.createElement(A.Z, { childrenStyle: Ce.other, headline: ce, illustration: A.j.Chat }, s.createElement(m.ZP, { color: "gray700" }, pe), s.createElement(l.Z, { style: Ce.buttons }, s.createElement(g.ZP, { link: ee.bJ, style: Ce.button, type: "primaryOutlined" }, be))), s.createElement(u.Z, null), s.createElement(A.Z, { childrenStyle: Ce.other, headline: de, illustration: A.j.LifeSaver }, s.createElement(m.ZP, { color: "gray700" }, me), s.createElement(l.Z, { style: Ce.buttons }, s.createElement(g.ZP, { link: ee._t, style: Ce.button, type: "primaryOutlined" }, Ze), s.createElement(g.ZP, { link: ee.hz, style: Ce.button, type: "primaryOutlined" }, _e))), w && s.createElement(s.Fragment, null, s.createElement(u.Z, null), s.createElement(A.Z, { childrenStyle: Ce.other, headline: ue, illustration: A.j.Cone }, s.createElement(m.ZP, { color: "gray700" }, ge), s.createElement(l.Z, { style: Ce.buttons }, s.createElement(v.Z, { label: Ee, onConfirm: Q, style: Ce.button, viewer: $ })))));
                        return f ? s.createElement(E.Z, null, s.createElement(k.Z, { location: P, rightControl: s.createElement(x, null), screenType: "secondaryDetail", title: te }, Pe)) : Pe;
                    },
                    { component: "management_summary" },
                );
        },
        945338: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(155826),
                a = r(874010),
                o = r(202784),
                i = (r(585488), r(277660)),
                s = r.n(i),
                l = r(376755),
                c = r(274257);
            const p = a.Z,
                d = n.Z,
                m = ({ rootPath: e, user: t, viewer: r }) => {
                    const n = s()(p, t),
                        a = s()(d, r),
                        i = (0, l.IU)(n),
                        m = (0, l.IH)(n),
                        u = (0, l.Ex)(n),
                        g = (0, c.JG)(a),
                        h = (0, c.fJ)(a),
                        f = (0, c.qO)(a),
                        b = (0, c.NP)(a, "creator_intro"),
                        Z = (0, c.NP)(a, "description"),
                        _ = (0, c.NP)(a, "selected_price");
                    return {
                        shouldBlockNavigation: o.useCallback((t, r) => t.pathname === e && "POP" === r && (g !== i || h !== m || f !== u), [g, h, f, i, m, u, e]),
                        discardChanges: o.useCallback(() => {
                            b(i), Z(m), _(u);
                        }, [i, m, u, b, Z, _]),
                    };
                };
        },
        376755: (e, t, r) => {
            r.d(t, { Ex: () => u, IH: () => m, IU: () => d, Jw: () => p, d7: () => g });
            var n = r(816304),
                a = r(57236),
                o = (r(325678), r(360895)),
                i = r(110930),
                s = r(455379),
                l = (r(585488), r(277660)),
                c = r.n(l);
            const p = (e) => {
                    const t = c()(s.Z, e);
                    return t.super_follow_creator_benefits?.__id;
                },
                d = (e) => {
                    const t = c()(i.Z, e);
                    return t.super_follow_creator_benefits?.creator_intro ?? "";
                },
                m = (e) => {
                    const t = c()(o.Z, e),
                        r = (t.super_follow_creator_benefits?.benefits_data ?? []).find((e) => "ExclusiveContent" === e.benefit_type);
                    return r?.description ?? "";
                },
                u = (e) => {
                    const t = c()(a.Z, e);
                    return t.super_follow_creator_price_metadata?.selected_price ?? null;
                },
                g = (e) => {
                    const t = c()(n.Z, e);
                    return t.super_follow_pending_price_change?.__id;
                };
        },
        274257: (e, t, r) => {
            r.d(t, { JG: () => x, fJ: () => B, NP: () => P, zG: () => C, xX: () => S, qO: () => I, Eo: () => L });
            var n = r(117365),
                a = r(770094),
                o = r(249817),
                i = r(261685),
                s = r(124778),
                l = r(791440),
                c = r(608379),
                p = r(202784),
                d = r(614983),
                m = r.n(d),
                u = r(53647),
                g = r.n(u),
                h = (r(585488), r(277660)),
                f = r.n(h),
                b = r(437429),
                Z = r.n(b),
                _ = r(187669),
                E = r(674057);
            const y = "super_follows_onboarding_draft",
                v = (e, t) => (0, E.g)(e, t).getLinkedRecord(y),
                w = (e, t, { creator_intro: r = null, description: n = null, selected_price: a = null } = {}) => {
                    const o = (0, E.E)(t),
                        i = (0, E.g)(e, t);
                    if (v(e, t)) return;
                    const s = e.create(`${o}:${y}`, "SuperFollowsOnboardingDraft");
                    s.setValue(r, "creator_intro"), s.setValue(n, "description"), s.setValue(a, "selected_price"), i.setLinkedRecord(s, "super_follows_onboarding_draft");
                },
                k = (e, t, r, n) => {
                    const a = v(e, t);
                    m()(a, "onboardingDraft must be defined"), a.setValue(n, r);
                };
            function C(e, t) {
                const r = Z()();
                (0, _.q)(() => {
                    m()(e, "viewerRef must be defined"),
                        g()(r, (r) => {
                            w(r, e, t);
                        });
                });
            }
            function P(e, t) {
                const r = Z()();
                return p.useCallback(
                    (n) => {
                        m()(e, "viewerId must be defined"),
                            g()(r, (r) => {
                                k(r, e, t, n);
                            });
                    },
                    [r, t, e],
                );
            }
            const x = (e) => {
                    const t = f()(c.Z, e);
                    return t.super_follows_onboarding_draft?.creator_intro ?? "";
                },
                B = (e) => {
                    const t = f()(l.Z, e);
                    return t.super_follows_onboarding_draft?.description ?? "";
                },
                I = (e) => {
                    const t = f()(s.Z, e);
                    return t.super_follows_onboarding_draft?.selected_price ?? null;
                },
                L = (e, t, r) => {
                    const n = f()(i.Z, t),
                        a = f()(o.Z, r),
                        { priceOfferings: s, subscriptionsPriceOfferings: l } = S(n, a),
                        c = l.offers.find((t) => t.key === e)?.price;
                    return c || s[e];
                },
                S = (e, t) => {
                    const r = f()(a.Z, e);
                    return { subscriptionsPriceOfferings: f()(n.Z, t), priceOfferings: r };
                };
        },
        535083: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(696138),
                a = r(837390),
                o = r(202784),
                i = r(614983),
                s = r.n(i),
                l = (r(585488), r(277660)),
                c = r.n(l),
                p = r(351743),
                d = r.n(p),
                m = r(376755);
            const u = a.Z,
                g = n.Z,
                h = (e, { creatorIntro: t, description: r }) => {
                    const n = c()(u, e),
                        a = (0, m.Jw)(n),
                        i = (0, m.IU)(n),
                        l = (0, m.IH)(n),
                        p = t || i,
                        h = r || l,
                        [f, b] = d()(g);
                    return [
                        o.useCallback(
                            () =>
                                new Promise((e, t) => {
                                    f({
                                        variables: { creator_intro: p, benefits_data: [{ benefit_type: "ExclusiveContent", title: "", description: h }] },
                                        onCompleted: (t, r) => e(),
                                        onError: t,
                                        updater: (e) => {
                                            s()(a, "benefitsId must be specified");
                                            const t = e.get(a);
                                            if ((s()(t, "benefitsRecord must be specified"), p !== i && t.setValue(p, "creator_intro"), h !== l)) {
                                                const e = t.getLinkedRecords("benefits_data");
                                                e?.forEach((e) => {
                                                    "ExclusiveContent" === e?.getValue("benefit_type") && e?.setValue(h, "description");
                                                });
                                            }
                                        },
                                    });
                                }),
                            [a, p, h, i, l, f],
                        ),
                        b,
                    ];
                };
        },
        674057: (e, t, r) => {
            r.d(t, { E: () => l, g: () => c });
            var n = r(42954),
                a = r(614983),
                o = r.n(a),
                i = (r(585488), r(990242)),
                s = r.n(i);
            const l = (e) => {
                    const { __id: t } = s()(n.Z, e);
                    return t;
                },
                c = (e, t) => {
                    const r = l(t),
                        n = e.get(r);
                    return o()(n, "viewer must be defined"), n;
                };
        },
        720816: (e, t, r) => {
            r.d(t, { $w: () => c, D1: () => s, Jz: () => a, Km: () => p, LI: () => n, NW: () => i, o5: () => l, wU: () => o });
            const n = "/settings/monetization",
                a = "/settings/superfollows",
                o = Object.freeze({ root: `${a}/application`, eligibility: `${a}/application/eligibility`, pricing: `${a}/application/pricing`, completeProfile: `${a}/application/complete_profile`, submit: `${a}/application/submit`, submitted: `${a}/application/submitted`, waitlisted: `${a}/application/waitlisted`, rejected: `${a}/application/rejected` }),
                i = Object.freeze({ root: `${a}/onboarding`, perksIntro: `${a}/onboarding/perks_intro`, perksDescription: `${a}/onboarding/perks_description`, perksBadges: `${a}/onboarding/perks_badges`, perksConfirm: `${a}/onboarding/perks_confirm`, pricing: `${a}/onboarding/pricing`, pricingConfirm: `${a}/onboarding/pricing_confirm`, stripeSetup: `${a}/onboarding/stripe_setup`, stripePending: `${a}/onboarding/stripe_pending`, stripeCompleted: `${a}/onboarding/stripe_completed` }),
                s = Object.freeze({ root: `${a}/management`, perksIntro: `${a}/management/perks_intro`, perksDescription: `${a}/management/perks_description`, perksConfirm: `${a}/management/perks_confirm`, perksPricing: `${a}/management/perks_pricing` }),
                l = `${a}/perks_intro_examples`,
                c = `${a}/perks_description_examples`,
                p = `${a}/perks_preview`;
        },
        176544: (e, t, r) => {
            r.d(t, { JD: () => i, _t: () => s, bJ: () => a, hz: () => o });
            var n = r(688715);
            const a = "/i/communities/1506760888291934216",
                o = (0, n.ju)("https://help.x.com/forms/paid-features/superfollows"),
                i = (0, n.ju)("https://legal.x.com/super-follows-creator-terms.html"),
                s = (0, n.ju)("https://help.x.com/using-x/subscriptions-creator");
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows-63cb1cc4.3a59442a.js.map
