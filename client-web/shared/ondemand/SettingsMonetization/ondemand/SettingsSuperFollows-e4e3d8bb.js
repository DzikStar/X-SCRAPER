"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows-e4e3d8bb"],
    {
        524084: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                a = r(523561),
                o = r(195560);
            const i = (0, a.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, t) => n.createElement(o.Z, { hasError: e, onRetry: t }) });
        },
        127218: (e, t, r) => {
            r.d(t, { C: () => h });
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
                f = r(312771),
                b = r(535338);
            function h(e, t, r) {
                const [a, i] = n.useState(!1),
                    [l, p] = n.useState(null),
                    h = s()(),
                    Z = c()(t),
                    E = (0, u.po)(),
                    v = (0, b.p)(e, Z, r);
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
                            })(v, t) || {},
                        s = (t) => {
                            a ||
                                (i(!0),
                                d()(h, e, { ...Z, cursor: t }).subscribe({
                                    complete: () => {
                                        i(!1);
                                    },
                                    error: (e) => {
                                        i(!1), p(e), E(e);
                                    },
                                }));
                        },
                        c = () => {
                            r && s(r);
                        },
                        u = () => {
                            n && s(n);
                        },
                        b = () => {
                            s(void 0);
                        };
                    return l ? { subsequentFetchStatus: f.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: u, refetch: b, data: v, hasNext: Boolean(r), hasPrevious: Boolean(n) } : { subsequentFetchStatus: a ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: u, refetch: b, data: v, hasNext: Boolean(r), hasPrevious: Boolean(n) };
                }, [e, v, a, l, h, Z, E]);
            }
        },
        50998: (e, t, r) => {
            r.d(t, { Z: () => u });
            r(136728);
            var n = r(202784),
                a = r(107267),
                o = r(190286),
                i = r(111677),
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
                    const f = n.useCallback(() => {
                            u(void 0);
                        }, [u]),
                        b = n.useCallback(() => {
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
                    return s ? n.createElement(o.Z, { cancelButtonLabel: d, confirmButtonLabel: m, confirmButtonType: "destructiveFilled", headline: c, onCancel: f, onConfirm: b, text: p }) : null;
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
            r.d(t, { Z: () => v });
            var n = r(807896),
                a = r(202784),
                o = r(325686),
                i = r(107267),
                s = r(822399),
                l = r(392237),
                c = r(111677),
                p = r.n(c),
                d = r(323265),
                m = r(980407),
                u = r(720816),
                g = r(154003),
                f = r(711223),
                b = r(176544);
            const h = p().d1a683b8,
                Z = () => a.createElement(g.ZP, { "aria-label": h, icon: a.createElement(f.default, null), link: b._t, type: "primaryText" }),
                E = p().d7b51c68,
                v = (e) => {
                    const { bottomBar: t, children: r, leftControlShouldClose: l, percentageComplete: c, rightControl: p, screenRef: g, withInfoButton: f, ...b } = e,
                        h = (0, i.useHistory)(),
                        v = l ? "close" : "back",
                        y = u.LI,
                        w = f ? a.createElement(o.Z, { style: _.rightControl }, a.createElement(Z, null), p) : p,
                        k = c ? a.createElement(s.Z, { progress: c }) : void 0,
                        P = a.createElement(a.Fragment, null, a.createElement(o.Z, { style: _.childrenWrapper }, r), t && a.createElement(o.Z, { style: _.bottomBarWrapper }, t)),
                        C = () => {
                            l ? h.goBackThroughModals({ fallbackPath: y }) : h.goBack({ backLocation: y });
                        };
                    g && (g.current = { goBack: C });
                    const x = d.ZP.isTwitterApp();
                    return a.createElement(m.Z, (0, n.Z)({}, b, { backButtonType: v, backLocation: y, children: P, documentTitle: E, hideBackButton: x, onBackClick: C, rightControl: !x && w, secondaryBar: k }));
                },
                _ = l.default.create((e) => ({ iconTwitter: { color: e.colors.primary, flexGrow: 1, height: "1.75rem" }, rightControl: { alignItems: "center", flexDirection: "row", gap: e.spaces.space4 }, childrenWrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto" }, bottomBarWrapper: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, boxShadow: e.boxShadows.small } }));
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
                d = r(111677),
                m = r.n(d),
                u = r(724345),
                g = r(569778),
                f = r(779295),
                b = r(274257),
                h = r(720816),
                Z = r(209434);
            const E = m().iba08a94,
                v = m().a5f55bfa,
                _ = a.Z,
                y = n.Z,
                w = ({ user: e, viewer: t }) => {
                    const r = l()(_, e),
                        n = l()(y, t),
                        { name: a, screen_name: s } = r?.core || {},
                        { image_url: p } = r?.avatar ?? {},
                        { protected: d } = r?.privacy || {},
                        { verified: m } = r.verification || {},
                        { is_blue_verified: w } = r,
                        P = (0, b.JG)(n) ?? "",
                        C = (0, b.fJ)(n) ?? "";
                    return o.createElement(o.Fragment, null, o.createElement(u.Z, { style: k.interstitial }, o.createElement(g.Z, { headline: E, subtext: v })), o.createElement(c.Z, null), o.createElement(u.Z, { style: k.previewCallout }, o.createElement(Z.Z, { path: h.Km })), o.createElement(i.Z, { style: k.summaryFramed }, o.createElement(f.Z, { badgeImageUrl: p ?? void 0, badgeName: a ?? void 0, badgeScreenName: s ?? void 0, descriptionValue: C, imageUrl: p ?? void 0, introValue: P, isBlueVerified: w || !1, isProtected: d ?? !1, isVerified: m ?? !1, name: a ?? void 0, screenName: s ?? void 0 })));
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
                g = r(111677),
                f = r.n(g),
                b = r(187669),
                h = r(272191),
                Z = r(724345),
                E = r(569778),
                v = r(274257),
                _ = r(720816),
                y = r(523361),
                w = r(209434);
            const k = f().gf32cca2,
                P = f().j8ba99b4,
                C = f().j679dcda,
                x = a.Z,
                I = n.Z,
                B = (e, t) => {
                    const { autoFocus: r, descriptionMaxLength: n, user: a, viewer: i } = e,
                        c = (0, d.D2)(),
                        u = o.useRef();
                    (0, b.q)(() => {
                        r && u.current?.scrollIntoView && u.current.scrollIntoView();
                    });
                    const g = p()(x, a),
                        f = p()(I, i),
                        { screen_name: B } = g.core ?? {},
                        { image_url: L } = g.avatar ?? {},
                        T = (0, v.fJ)(f),
                        z = (0, v.NP)(f, "description");
                    return (
                        s()("string" == typeof L, "imageUrl must be defined"),
                        s()("string" == typeof B, "screenName must be defined"),
                        o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(Z.Z, { style: $.interstitial }, o.createElement(E.Z, { headline: k, subtext: P })),
                            o.createElement(Z.Z, { style: $.examplesLink }, o.createElement(y.Z, { label: C, path: _.$w })),
                            o.createElement(m.Z, null),
                            o.createElement(Z.Z, { style: $.previewCallout }, o.createElement(w.Z, { path: _.Km })),
                            o.createElement(h.Z, {
                                autoFocus: r,
                                imageUrl: L,
                                onChange: (e) => {
                                    z(e.currentTarget.value);
                                },
                                ref: t,
                                screenName: B,
                                style: [$.preview, c && $.previewWide],
                                value: T,
                                valueMaxLength: n,
                            }),
                            o.createElement(l.Z, { ref: u }),
                        )
                    );
                },
                L = o.forwardRef(B),
                $ = u.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 }, previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 }, preview: { marginVertical: e.spaces.space16, marginHorizontal: e.spaces.space32 }, previewWide: { marginHorizontal: e.spaces.space16 } }));
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
                g = r(111677),
                f = r.n(g),
                b = r(187669),
                h = r(724345),
                Z = r(569778),
                E = r(126819),
                v = r(274257),
                _ = r(720816),
                y = r(523361),
                w = r(209434);
            const k = f().j325331a,
                P = f().e18e8da8,
                C = f().j679dcda,
                x = a.Z,
                I = n.Z,
                B = (e, t) => {
                    const { autoFocus: r, introMaxLength: n, user: a, viewer: i } = e,
                        c = (0, d.D2)(),
                        u = o.useRef();
                    (0, b.q)(() => {
                        r && u.current?.scrollIntoView && u.current.scrollIntoView();
                    });
                    const g = p()(x, a),
                        f = p()(I, i),
                        { name: B } = g.core ?? {},
                        { image_url: L } = g.avatar ?? {},
                        T = (0, v.JG)(f),
                        z = (0, v.NP)(f, "creator_intro");
                    return (
                        s()("string" == typeof L, "imageUrl must be defined"),
                        s()("string" == typeof B, "name must be defined"),
                        o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(h.Z, { style: $.interstitial }, o.createElement(Z.Z, { headline: k, subtext: P })),
                            o.createElement(h.Z, { style: $.examplesLink }, o.createElement(y.Z, { label: C, path: _.o5 })),
                            o.createElement(m.Z, null),
                            o.createElement(h.Z, { style: $.previewCallout }, o.createElement(w.Z, { path: _.Km })),
                            o.createElement(E.Z, {
                                autoFocus: r,
                                imageUrl: L,
                                name: B,
                                onChange: (e) => {
                                    z(e.currentTarget.value);
                                },
                                ref: t,
                                style: [$.preview, c && $.previewWide],
                                value: T,
                                valueMaxLength: n,
                            }),
                            o.createElement(l.Z, { ref: u }),
                        )
                    );
                },
                L = o.forwardRef(B),
                $ = u.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 }, previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 }, preview: { marginVertical: e.spaces.space16, marginHorizontal: e.spaces.space32 }, previewWide: { marginHorizontal: e.spaces.space16 } }));
        },
        209434: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(392237),
                s = r(111677),
                l = r.n(s),
                c = r(523361);
            const p = l().hf6f2914,
                d = l().i859a9d4,
                m = i.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" } })),
                u = ({ path: e, style: t }) => n.createElement(a.Z, { style: [m.root, t] }, n.createElement(o.ZP, { size: "headline2", weight: "heavy" }, p), n.createElement(c.Z, { label: d, path: e }));
        },
        642097: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(490188),
                a = r(829028),
                o = r(202784),
                i = (r(585488), r(277660)),
                s = r.n(i),
                l = r(111677),
                c = r.n(l),
                p = r(725516),
                d = r(541659),
                m = r(859538);
            const u = c().hf6f2914,
                g = a.Z,
                f = n.Z,
                b = (0, p.Z)(
                    ({ user: e, viewer: t }) => {
                        const r = s()(g, e),
                            n = s()(f, t);
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
                c = r(111677),
                p = r.n(c),
                d = r(725516),
                m = r(541659),
                u = r(973316),
                g = r(325319),
                f = r(376755),
                b = r(274257),
                h = r(535083);
            const Z = p().af5b098e,
                E = p().e36287c6,
                v = p().b772cd66,
                _ = o.Z,
                y = a.Z,
                w = (0, d.Z)(
                    ({ backLocation: e, user: t, viewer: r }) => {
                        const a = l()(_, t),
                            o = l()(y, r),
                            s = (0, f.IH)(a),
                            c = (0, b.fJ)(o),
                            p = c.length > 0 && c.length <= 140 && c !== s,
                            [d, w] = (0, h.Z)(a, { description: c }),
                            k = { disabled: !p || w, label: v, onPress: d, path: e, type: "primaryFilled" },
                            P = i.createElement(u.Z, (0, n.Z)({}, k, { size: "small" }));
                        return i.createElement(m.Z, { rightControl: P, subtitle: E, title: Z }, i.createElement(g.Z, { autoFocus: !0, descriptionMaxLength: 140, user: a, viewer: o }));
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
                c = r(111677),
                p = r.n(c),
                d = r(725516),
                m = r(541659),
                u = r(973316),
                g = r(315121),
                f = r(376755),
                b = r(274257),
                h = r(535083);
            const Z = p().af5b098e,
                E = p().c0348964,
                v = p().b772cd66,
                _ = o.Z,
                y = a.Z,
                w = (0, d.Z)(
                    ({ backLocation: e, user: t, viewer: r }) => {
                        const a = l()(_, t),
                            o = l()(y, r),
                            s = (0, f.IU)(a),
                            c = (0, b.JG)(o),
                            p = c.length > 0 && c.length <= 140 && c !== s,
                            [d, w] = (0, h.Z)(a, { creatorIntro: c }),
                            k = { disabled: !p || w, label: v, onPress: d, path: e, type: "primaryFilled" },
                            P = i.createElement(u.Z, (0, n.Z)({}, k, { size: "small" }));
                        return i.createElement(m.Z, { rightControl: P, subtitle: E, title: Z }, i.createElement(g.Z, { autoFocus: !0, introMaxLength: 140, user: a, viewer: o }));
                    },
                    { component: "management_perks_intro" },
                );
        },
        893903: (e, t, r) => {
            r.d(t, { Z: () => Ce });
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
                f = r(392237),
                b = r(111677),
                h = r.n(b),
                Z = r(439412),
                E = r(443781),
                v = r(652904),
                _ = r(105633),
                y = r(865721),
                w = r(725516),
                k = r(264922),
                P = r(293723);
            const C = h().be103b84,
                x = () => s.createElement(l.Z, { style: I.root }, s.createElement(P.default, { style: I.icon }), s.createElement(m.ZP, { size: "subtext2", weight: "bold" }, C)),
                I = f.default.create((e) => ({ root: { alignItems: "center", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.small, flexDirection: "row", gap: e.spaces.space4, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, icon: { color: e.colors.plum500, height: e.spaces.space16 } }));
            var B = r(75277),
                L = r(161475),
                $ = r(461715),
                T = r(614983),
                z = r.n(T),
                S = r(351743),
                F = r.n(S),
                N = r(376755);
            const O = $.Z,
                j = L.Z,
                D = ({ priceChange: e, user: t }) => {
                    const r = p()(O, t),
                        n = (0, N.d7)(r),
                        [a, o] = F()(j);
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
                                                z()(n, "priceChangeId must be specified");
                                                e.get(n) && e.delete(n);
                                            },
                                        });
                                }),
                            [e, n, a],
                        ),
                        o,
                    ];
                };
            var H = r(973316);
            const V = h().a4c6e458,
                U = h().be54a313,
                J = h().hadd463a,
                R = h().b0728b5c,
                W = h().aea9f79c,
                q = B.Z;
            function M({ perksPricingLocation: e, price: t, priceChangeId: r, requestedPrice: n, user: a }) {
                const o = !!n,
                    i = p()(q, a),
                    [l, c] = D({ user: i, priceChange: r });
                return s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(m.ZP, { color: "gray700" }, V, " ", s.createElement(m.ZP, { weight: "bold" }, U({ price: t }))),
                    o
                        ? s.createElement(
                              s.Fragment,
                              null,
                              s.createElement(m.ZP, { color: "gray700" }, W, " ", s.createElement(m.ZP, { weight: "bold" }, U({ price: n }))),
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
                                      R,
                                  ),
                          )
                        : s.createElement(H.Z, { label: J, path: e, size: "small", type: "primaryOutlined" }),
                );
            }
            const G = s.memo(M);
            var A = r(977126);
            const K = (e) => {
                    const { children: t, headline: r, rightControl: n } = e;
                    return s.createElement(l.Z, { style: Q.root }, s.createElement(l.Z, { style: Q.header }, s.createElement(m.ZP, { "aria-level": 4, role: "heading", size: "headline2", style: Q.headline, weight: "heavy" }, r), t), n);
                },
                Q = f.default.create((e) => ({ root: { alignItems: "start", flexDirection: "row", gap: e.spaces.space8 }, header: { flex: 1 }, headline: { marginBottom: e.spaces.space8 } }));
            var X = r(523361),
                Y = r(274257),
                ee = r(176544);
            const te = h().d7b51c68,
                re = h().a384fda0,
                ne = h().i4313618,
                ae = h().c0348964,
                oe = h().g522fd30,
                ie = h().e85471c6,
                se = h().fd75ca92,
                le = h().ia9c37c4,
                ce = h().f5be83b2,
                pe = h().e4ee8c6a,
                de = h().f3ce76c0,
                me = h().i8982e7e,
                ue = h().i3a90dee,
                ge = h().e261e6e6,
                fe = h().ca5ca5ee,
                be = h().abd845fe,
                he = h().f5be83b2,
                Ze = h().f66d24be,
                Ee = h().g5925628,
                ve = h().e58e85d2,
                _e = i.Z,
                ye = o.Z,
                we = a.Z,
                ke = n.Z,
                Pe = f.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, benefits: { gap: e.spaces.space32, marginTop: e.spaces.space16 }, other: { gap: e.spaces.space24, marginTop: e.spaces.space12 }, buttons: { flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space8 }, button: { flexBasis: `${e.breakpoints.micro}px`, flexGrow: 1, flexShrink: 1 } })),
                Ce = (0, w.Z)(
                    ({ backLocation: e, perksConfirmLocation: t, perksDescriptionLocation: r, perksIntroLocation: n, perksPricingLocation: a, priceOfferings: o, subscriptionsPriceOfferings: i, user: c, viewer: f, withAppBar: b }) => {
                        const { featureSwitches: h } = (0, E.QZ)(),
                            w = h.isTrue("super_follow_web_deactivate_enabled"),
                            P = (0, d.useHistory)(),
                            C = (0, d.useLocation)(),
                            { $fragmentType: I, ...B } = p()(_e, o),
                            { $fragmentType: L, ...$ } = p()(ye, i),
                            T = p()(we, c),
                            z = p()(ke, f),
                            S = (0, N.IU)(T),
                            F = (0, N.IH)(T),
                            O = (0, N.Ex)(T) ?? "offer2",
                            j = T.avatar?.image_url ?? void 0,
                            D = T.core?.screen_name ?? void 0,
                            { new_price: V, price_change: U } = T.super_follow_pending_price_change || {},
                            J = (0, Y.Eo)(O, B, $),
                            R = (0, Y.Eo)(V || "", B, $),
                            W = s.createElement(X.Z, { label: fe, path: t, size: "subtext1" }),
                            q = s.createElement(H.Z, { label: be, path: n, size: "small", type: "primaryOutlined" }),
                            M = s.createElement(H.Z, { label: be, path: r, size: "small", type: "primaryOutlined" }),
                            Q = s.useCallback(() => {
                                P.push(e);
                            }, [P, e]),
                            Ce = s.createElement(s.Fragment, null, s.createElement(A.Z, { childrenStyle: Pe.benefits, headline: re, illustration: A.j.Ribbon, rightControl: W }, s.createElement(m.ZP, { color: "gray700" }, ne), s.createElement(K, { headline: ae, rightControl: q }, s.createElement(Z.Z, { imageUrl: j, screenName: D, value: S })), s.createElement(K, { headline: oe, rightControl: M }, s.createElement(Z.Z, { imageUrl: j, screenName: D, value: F })), s.createElement(K, { headline: ie }, s.createElement(m.ZP, { color: "gray700" }, se)), h.isTrue("responsive_web_creator_preferences_previews_enabled_setting") ? s.createElement(_.Z, null) : null), s.createElement(u.Z, null), s.createElement(A.Z, { childrenStyle: Pe.other, headline: le, illustration: A.j.PiggyBank }, s.createElement(G, { perksPricingLocation: a, price: J, priceChangeId: U || "", requestedPrice: R, user: T })), s.createElement(u.Z, null), s.createElement(A.Z, { childrenStyle: Pe.other, headline: ce, illustration: A.j.Chat }, s.createElement(m.ZP, { color: "gray700" }, pe), s.createElement(l.Z, { style: Pe.buttons }, s.createElement(g.ZP, { link: ee.bJ, style: Pe.button, type: "primaryOutlined" }, he))), s.createElement(u.Z, null), s.createElement(A.Z, { childrenStyle: Pe.other, headline: de, illustration: A.j.LifeSaver }, s.createElement(m.ZP, { color: "gray700" }, me), s.createElement(l.Z, { style: Pe.buttons }, s.createElement(g.ZP, { link: ee._t, style: Pe.button, type: "primaryOutlined" }, Ze), s.createElement(g.ZP, { link: ee.hz, style: Pe.button, type: "primaryOutlined" }, Ee))), w && s.createElement(s.Fragment, null, s.createElement(u.Z, null), s.createElement(A.Z, { childrenStyle: Pe.other, headline: ue, illustration: A.j.Cone }, s.createElement(m.ZP, { color: "gray700" }, ge), s.createElement(l.Z, { style: Pe.buttons }, s.createElement(y.Z, { label: ve, onConfirm: Q, style: Pe.button, viewer: z })))));
                        return b ? s.createElement(v.Z, null, s.createElement(k.Z, { location: C, rightControl: s.createElement(x, null), screenType: "secondaryDetail", title: te }, Ce)) : Ce;
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
                        f = (0, c.fJ)(a),
                        b = (0, c.qO)(a),
                        h = (0, c.NP)(a, "creator_intro"),
                        Z = (0, c.NP)(a, "description"),
                        E = (0, c.NP)(a, "selected_price");
                    return {
                        shouldBlockNavigation: o.useCallback((t, r) => t.pathname === e && "POP" === r && (g !== i || f !== m || b !== u), [g, f, b, i, m, u, e]),
                        discardChanges: o.useCallback(() => {
                            h(i), Z(m), E(u);
                        }, [i, m, u, h, Z, E]),
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
            r.d(t, { JG: () => x, fJ: () => I, NP: () => C, zG: () => P, xX: () => $, qO: () => B, Eo: () => L });
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
                f = (r(585488), r(277660)),
                b = r.n(f),
                h = r(437429),
                Z = r.n(h),
                E = r(187669),
                v = r(674057);
            const _ = "super_follows_onboarding_draft",
                y = (e, t) => (0, v.g)(e, t).getLinkedRecord(_),
                w = (e, t, { creator_intro: r = null, description: n = null, selected_price: a = null } = {}) => {
                    const o = (0, v.E)(t),
                        i = (0, v.g)(e, t);
                    if (y(e, t)) return;
                    const s = e.create(`${o}:${_}`, "SuperFollowsOnboardingDraft");
                    s.setValue(r, "creator_intro"), s.setValue(n, "description"), s.setValue(a, "selected_price"), i.setLinkedRecord(s, "super_follows_onboarding_draft");
                },
                k = (e, t, r, n) => {
                    const a = y(e, t);
                    m()(a, "onboardingDraft must be defined"), a.setValue(n, r);
                };
            function P(e, t) {
                const r = Z()();
                (0, E.q)(() => {
                    m()(e, "viewerRef must be defined"),
                        g()(r, (r) => {
                            w(r, e, t);
                        });
                });
            }
            function C(e, t) {
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
                    const t = b()(c.Z, e);
                    return t.super_follows_onboarding_draft?.creator_intro ?? "";
                },
                I = (e) => {
                    const t = b()(l.Z, e);
                    return t.super_follows_onboarding_draft?.description ?? "";
                },
                B = (e) => {
                    const t = b()(s.Z, e);
                    return t.super_follows_onboarding_draft?.selected_price ?? null;
                },
                L = (e, t, r) => {
                    const n = b()(i.Z, t),
                        a = b()(o.Z, r),
                        { priceOfferings: s, subscriptionsPriceOfferings: l } = $(n, a),
                        c = l.offers.find((t) => t.key === e)?.price;
                    return c || s[e];
                },
                $ = (e, t) => {
                    const r = b()(a.Z, e);
                    return { subscriptionsPriceOfferings: b()(n.Z, t), priceOfferings: r };
                };
        },
        535083: (e, t, r) => {
            r.d(t, { Z: () => f });
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
                f = (e, { creatorIntro: t, description: r }) => {
                    const n = c()(u, e),
                        a = (0, m.Jw)(n),
                        i = (0, m.IU)(n),
                        l = (0, m.IH)(n),
                        p = t || i,
                        f = r || l,
                        [b, h] = d()(g);
                    return [
                        o.useCallback(
                            () =>
                                new Promise((e, t) => {
                                    b({
                                        variables: { creator_intro: p, benefits_data: [{ benefit_type: "ExclusiveContent", title: "", description: f }] },
                                        onCompleted: (t, r) => e(),
                                        onError: t,
                                        updater: (e) => {
                                            s()(a, "benefitsId must be specified");
                                            const t = e.get(a);
                                            if ((s()(t, "benefitsRecord must be specified"), p !== i && t.setValue(p, "creator_intro"), f !== l)) {
                                                const e = t.getLinkedRecords("benefits_data");
                                                e?.forEach((e) => {
                                                    "ExclusiveContent" === e?.getValue("benefit_type") && e?.setValue(f, "description");
                                                });
                                            }
                                        },
                                    });
                                }),
                            [a, p, f, i, l, b],
                        ),
                        h,
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows-e4e3d8bb.052681ea.js.map
