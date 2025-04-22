"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-c69e90f3"],
    {
        302176: (e, t, n) => {
            n.d(t, { G: () => u, k: () => E });
            var a = n(202784),
                r = n(325686),
                o = n(154003),
                i = n(392237),
                c = n(674132),
                s = n.n(c),
                l = n(894966),
                d = n(323265),
                m = n(507651);
            const u = { all: "all", images: "images", pins: "pins" },
                p = s().dab087ee,
                g = s().i3145aa0,
                h = s().a911623c,
                y = s().b08821f4,
                f = { label: y },
                E = ({ onTabChange: e, selectedTab: t }) => {
                    const n = !!d.ZP.isWebView(),
                        i = a.useCallback((e) => () => t === e, [t]),
                        c = a.useMemo(
                            () => [
                                { key: u.all, label: p, isActive: i(u.all), onClick: () => e(u.all) },
                                { key: u.pins, label: g, isActive: i(u.pins), onClick: () => e(u.pins) },
                                { key: u.images, label: h, isActive: i(u.images), onClick: () => e(u.images) },
                            ],
                            [i, e],
                        );
                    return a.createElement(a.Fragment, null, a.createElement(r.Z, { style: b.header }, n ? a.createElement(r.Z, { style: b.backButtonContainer }, a.createElement(o.ZP, { "aria-label": y, hoverLabel: f, icon: a.createElement(l.default, null), link: "/i/grok", type: "primaryText" })) : null, a.createElement(r.Z, { style: b.tabsContainer }, a.createElement(m.Z, { links: c, style: b.tabs }))));
                },
                b = i.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space24 }, header: { flexDirection: "row", width: "100%" }, tabsContainer: { flex: 1, alignItems: "center", borderBottomWidth: 1, borderColor: e.colors.borderColor }, tabs: { borderBottomWidth: 0, width: "100%", maxWidth: 400, cursor: "pointer" }, backButtonContainer: { alignItems: "center", justifyContent: "center", paddingHorizontal: e.spaces.space8, borderBottomWidth: 1, borderColor: e.colors.borderColor } }));
        },
        281563: (e, t, n) => {
            n.d(t, { G: () => R });
            var a = n(85148),
                r = n(693599),
                o = n(202784),
                i = n(325686),
                c = (n(585488), n(351743)),
                s = n.n(c),
                l = n(58881),
                d = n(392237),
                m = n(811176),
                u = n(530732),
                p = n(371344),
                g = n(731708),
                h = n(247056),
                y = n(674132),
                f = n.n(y),
                E = n(885724),
                b = n(607127),
                C = n(73416),
                v = n(883069),
                k = n(149170),
                Z = n(125363),
                I = n(389071),
                w = n(576466),
                x = n(281030),
                S = n(601576);
            const _ = f().d96cf7ce,
                z = f().ef4602ec,
                L = f().d4eb0e26,
                P = r.Z,
                M = a.Z,
                R = o.memo(({ isFavorite: e, onHistoryLinkClicked: t, restId: n, selected: a, title: r }) => {
                    const c = (0, Z.I0)(),
                        [y, f] = o.useState(!1),
                        [R, H] = o.useState(r),
                        [T] = s()(P),
                        [j] = s()(M);
                    o.useEffect(() => {
                        H(r);
                    }, [r]);
                    const A = l.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors.blue500, insetFocusRing: !0 });
                    function D(e) {
                        H(e.target.value);
                    }
                    function F() {
                        T({
                            onCompleted: (e) => {
                                e.delete_grok_conversation?.grok_deletion_error ? c(S.fz({ text: z })) : c((0, I.SJ)(n));
                            },
                            variables: { conversationId: n },
                        });
                    }
                    function U() {
                        f(!0);
                    }
                    function O() {
                        j({
                            onCompleted: (e) => {
                                e.grokconversation_edit?.edit_error ? c(S.fz({ text: z })) : c((0, I.lo)(n, R)), f(!1);
                            },
                            variables: { conversationId: n, title: R },
                        });
                    }
                    function W(e) {
                        const t = [
                            { Icon: E.default, onClick: U, text: L },
                            { Icon: b.default, onClick: F, text: _ },
                        ];
                        return o.createElement(m.Z, { items: t, onCloseRequested: e });
                    }
                    return o.createElement(
                        u.Z,
                        {
                            interactiveStyles: {},
                            link: `/i/grok?conversation=${n}`,
                            onPress: () => {
                                t?.();
                            },
                            style: B.container,
                        },
                        (s) =>
                            o.createElement(
                                i.Z,
                                { style: [B.conversation, a ? B.selected : null, s.isHovered || y ? B.hover : null] },
                                y
                                    ? o.createElement(p.Z, { autoFocus: !0, inputStyle: B.input, numberOfLines: 3, onBlur: O, onChange: D, onSubmitEditing: O, styleType: "selection", value: R })
                                    : o.createElement(
                                          o.Fragment,
                                          null,
                                          o.createElement(
                                              g.ZP,
                                              {
                                                  color: "text",
                                                  link: `/i/grok?conversation=${n}`,
                                                  numberOfLines: 3,
                                                  onPress: () => {
                                                      t?.();
                                                  },
                                                  withInteractiveStyling: !1,
                                              },
                                              r,
                                          ),
                                          o.createElement(
                                              i.Z,
                                              { style: B.controls },
                                              o.createElement(
                                                  g.ZP,
                                                  { color: "gray500" },
                                                  o.createElement(
                                                      u.Z,
                                                      {
                                                          interactiveStyles: A,
                                                          onPress: (t) => {
                                                              c(e ? (0, x.l)(n) : (0, w.v)(n)), t.preventDefault();
                                                          },
                                                          style: { borderRadius: 999 },
                                                      },
                                                      (t) => o.createElement(i.Z, { style: B.starIconContainer }, o.createElement(g.ZP, { color: t.isHovered ? "blue500" : "gray500" }, e ? o.createElement(C.default, null) : o.createElement(v.default, null))),
                                                  ),
                                              ),
                                              o.createElement(h.Z, { Icon: k.default, renderActionMenu: W }),
                                          ),
                                      ),
                            ),
                    );
                }),
                B = d.default.create((e) => ({ controls: { flexDirection: "row", gap: e.spaces.space4 }, selected: { backgroundColor: e.colors.gray100 }, hover: { backgroundColor: e.colors.gray50 }, container: { marginBottom: e.spaces.space1 }, conversation: { gap: e.spaces.space8, marginStart: e.spaces.space12, marginEnd: e.spaces.space16, backgroundColor: e.colors.transparent, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space16, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8, transitionProperty: "background-color", transitionDuration: ".1s", alignItems: "center", flexDirection: "row", justifyContent: "space-between", borderRadius: e.borderRadii.large }, input: { padding: 0 }, starIconContainer: { width: 32, height: 32, borderRadius: e.borderRadii.infinite, alignItems: "center", justifyContent: "center", cursor: "pointer" } }));
        },
        54957: (e, t, n) => {
            n.d(t, { c: () => S });
            var a = n(807896),
                r = n(202784),
                o = n(555874),
                i = n(325686),
                c = n(731708),
                s = n(721266),
                l = n(392237),
                d = n(674132),
                m = n.n(d),
                u = n(933277),
                p = n(597496),
                g = n(125363),
                h = n(389071),
                y = n(931292),
                f = n(601576),
                E = n(654917),
                b = n(975226),
                C = n(751621),
                v = n(253557),
                k = n(281563);
            const Z = m().b3de2628,
                I = m().acfbfb28,
                w = m().ef4602ec,
                x = ({ customSearchBox: e, searchBoxOptions: t }) => r.createElement(i.Z, { style: _.searchContainer }, e || r.createElement(p.Rj, (0, a.Z)({}, t, { isCompact: !0, shouldHandleSearchShortcut: !0 }))),
                S = ({ onHistoryLinkClicked: e, onSearchSubmit: t, searchKey: n, searchValue: a }) => {
                    const l = (0, g.I0)(),
                        d = (0, g.v9)(h.bv),
                        m = (0, g.v9)(h.V$),
                        p = (0, g.v9)(h.JE),
                        S = (0, E.uf)(),
                        z = (0, g.v9)(S.selectConversationId),
                        L = r.useMemo(() => (0, u.Z)(d ?? [], ({ created_at_ms: e }) => (e ? (0, b._)(e) : "")), [d]),
                        P = r.useMemo(() => Object.keys(L), [L]),
                        M = r.useCallback(
                            (e = !0) => {
                                const t = e ? m : void 0;
                                null !== t &&
                                    l((0, y.A)(t)).catch(() => {
                                        l((0, f.fz)({ text: w }));
                                    });
                            },
                            [l, m],
                        );
                    r.useEffect(() => {
                        M(!1);
                    }, []);
                    const R = r.useCallback(
                        (t) =>
                            r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(c.ZP, { color: "gray700", style: _.conversation, weight: "bold" }, t.item),
                                L[t.item].map(({ grokConversation: t, is_pinned: n, title: a }) => r.createElement(k.G, { isFavorite: n ?? !1, key: t.rest_id, onHistoryLinkClicked: e, restId: t.rest_id, selected: z === t.rest_id, title: a })),
                            ),
                        [z, L, e],
                    );
                    return 0 === P.length && "loading" === p ? null : d && 0 !== d.length ? r.createElement(i.Z, { style: _.container }, r.createElement(i.Z, { style: _.searchBoxContainer }, r.createElement(x, { customSearchBox: r.createElement(C.v, { initialValue: a, onSubmit: t }) })), a ? r.createElement(v.D, { onSearchHistoryClicked: e, query: a, queryKey: n }) : r.createElement(i.Z, { style: _.content }, r.createElement(o.Z, { ItemSeparatorComponent: () => r.createElement(s.Z, { size: "space8" }), ListFooterComponent: () => r.createElement(s.Z, { size: "space16" }), ListHeaderComponent: () => r.createElement(s.Z, { size: "space8" }), data: P, keyExtractor: (e, t) => P[t], onEndReached: M, onEndReachedThreshold: 0.4, renderItem: R, style: { height: "100%" } }))) : r.createElement(i.Z, { style: _.noHistoryContainer }, r.createElement(i.Z, null, r.createElement(c.ZP, { size: "title3", weight: "bold" }, Z), r.createElement(s.Z, { size: "space4" }), r.createElement(c.ZP, { color: "gray500", size: "body" }, I)));
                },
                _ = l.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" }, content: { width: "100%", maxHeight: "100%", flex: 1, position: "relative" }, conversation: { alignItems: "start", flexDirection: "row", gap: e.spaces.space8, justifyContent: "space-between", paddingStart: e.spaces.space24, paddingEnd: e.spaces.space16, paddingBottom: e.spaces.space12, paddingTop: e.spaces.space4 }, header: { whiteSpace: "nowrap" }, searchBoxContainer: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, width: "100%" }, searchContainer: { flexDirection: "row", flexGrow: 1, flexShrink: 1, marginHorizontal: e.spaces.space4, alignItems: "center", marginVertical: "unset" } }));
        },
        739070: (e, t, n) => {
            n.d(t, { s: () => C });
            var a = n(202784),
                r = n(555874),
                o = n(325686),
                i = n(731708),
                c = n(721266),
                s = n(392237),
                l = n(674132),
                d = n.n(l),
                m = n(125363),
                u = n(389071),
                p = n(816870),
                g = n(601576),
                h = n(654917),
                y = n(281563);
            const f = d().c64975ea,
                E = d().a3e3db6e,
                b = d().ef4602ec,
                C = ({ onHistoryLinkClicked: e }) => {
                    const t = (0, m.I0)(),
                        n = (0, h.uf)(),
                        s = (0, m.v9)(n.selectConversationId),
                        l = (0, m.v9)(u.OR),
                        d = (0, m.v9)(u.NV),
                        C = (0, m.v9)(u.BU),
                        k = a.useCallback(
                            (e = !0) => {
                                const n = e ? d : void 0;
                                null !== n &&
                                    t((0, p.d)(n)).catch(() => {
                                        t((0, g.fz)({ text: b }));
                                    });
                            },
                            [t, d],
                        );
                    a.useEffect(() => {
                        k(!1);
                    }, []);
                    const Z = a.useCallback(({ item: e }) => a.createElement(y.G, { isFavorite: !0, key: e.grokConversation.rest_id, onHistoryLinkClicked: () => {}, restId: e.grokConversation.rest_id, selected: s === e.grokConversation.rest_id, title: e.title }), [s]);
                    return 0 === l.length && "loading" === C ? null : l && 0 !== l.length ? a.createElement(o.Z, { style: v.container }, a.createElement(o.Z, { style: v.content }, a.createElement(r.Z, { ItemSeparatorComponent: () => a.createElement(c.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(c.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(c.Z, { size: "space8" }), data: l, keyExtractor: (e, t) => e.grokConversation.id, onEndReached: k, onEndReachedThreshold: 0.4, renderItem: Z, style: { height: "100%" } }))) : a.createElement(o.Z, { style: v.noHistoryContainer }, a.createElement(o.Z, null, a.createElement(i.ZP, { size: "title3", weight: "bold" }, f), a.createElement(c.Z, { size: "space4" }), a.createElement(i.ZP, { color: "gray500", size: "body" }, E)));
                },
                v = s.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center", padding: e.spaces.space16, textAlign: "center" }, content: { width: "100%", maxHeight: "100%", flex: 1, position: "relative", paddingVertical: e.spaces.space8 }, conversation: { alignItems: "start", flexDirection: "row", gap: e.spaces.space8, justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, paddingBottom: e.spaces.space16 }, header: { whiteSpace: "nowrap" } }));
        },
        884058: (e, t, n) => {
            n.d(t, { v: () => x });
            var a = n(202784),
                r = n(555874),
                o = n(325686),
                i = n(537392),
                c = n(392237),
                s = n(731708),
                l = n(721266),
                d = n(674132),
                m = n.n(d),
                u = n(125363),
                p = n(389071),
                g = n(756869),
                h = n(601576),
                y = (n(136728), n(143670)),
                f = n(565421),
                E = n(725516),
                b = n(934098),
                C = n(86657);
            const v = m().d96cf7ce,
                k = ({ chatItemId: e, conversationId: t, mediaId: n, mediaUrl: r }) => {
                    const o = (0, u.I0)(),
                        i = (0, E.z)(),
                        c = a.useMemo(() => {
                            const r = [];
                            return (
                                e &&
                                    r.push(
                                        a.createElement(y.Z, {
                                            Icon: f.default,
                                            actionText: v,
                                            iconThumbnailColor: "danger",
                                            key: "deleteImage",
                                            onClick: (a) => {
                                                i.scribe({ element: "delete_image_button", action: "click" }),
                                                    o((0, b.$)({ chatItemId: e, conversationId: t })).then(() => {
                                                        o((0, p.Pl)(n));
                                                    });
                                            },
                                            textColor: "red500",
                                        }),
                                    ),
                                r
                            );
                        }, [e, i, t, o, n]);
                    return a.createElement(C.Z, { extraMenuItems: c, file: { fileName: "image.jpg", mimeType: "image/jpeg", mediaId: n, url: r }, isLoading: !1, key: `image_${n}` });
                },
                Z = m().f4ae77ac,
                I = m().d57d337e,
                w = m().ef4602ec,
                x = () => {
                    const e = (0, u.I0)(),
                        t = (0, u.v9)(p.SL),
                        n = (0, u.v9)(p.Tu),
                        d = (0, u.v9)(p.hi),
                        m = (0, i.Zx)(({ containerWidth: e }) => (e < c.default.theme.breakpoints.small ? 2 : 3)),
                        y = a.useCallback(
                            (t = !0) => {
                                const a = t ? n : void 0;
                                null !== a &&
                                    e((0, g._)(a)).catch(() => {
                                        e((0, h.fz)({ text: w }));
                                    });
                            },
                            [e, n],
                        );
                    a.useEffect(() => {
                        y(!1);
                    }, []);
                    const f = a.useMemo(() => {
                            const e = t ?? [],
                                n = [];
                            for (let t = 0; t < e.length; t++) {
                                const a = Math.floor(t / 12);
                                n[a] = [...(n[a] ?? []), e[t]];
                            }
                            return n;
                        }, [t]),
                        E = a.useMemo(() => [S.imagesContainer, { gridTemplateColumns: `repeat(${m}, 1fr)` }], [m]),
                        b = a.useCallback(
                            ({ index: e, item: t }) =>
                                a.createElement(
                                    o.Z,
                                    { style: E },
                                    t.map(({ chat_item_id: e, grokConversation: t, media_id: n, media_url: r }) => (n && t && r ? a.createElement(k, { chatItemId: e, conversationId: t.rest_id, key: e, mediaId: n, mediaUrl: r }) : null)),
                                ),
                            [E],
                        );
                    return 0 === f.length && "loading" === d ? null : 0 === f.length ? a.createElement(o.Z, { style: S.noHistoryContainer }, a.createElement(o.Z, null, a.createElement(s.ZP, { size: "title3", weight: "bold" }, Z), a.createElement(l.Z, { size: "space4" }), a.createElement(s.ZP, { color: "gray500", size: "body" }, I))) : a.createElement(o.Z, { style: S.container }, a.createElement(o.Z, { style: S.content }, a.createElement(r.Z, { ItemSeparatorComponent: () => a.createElement(l.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(l.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(l.Z, { size: "space8" }), data: f, keyExtractor: (e) => e[0]?.media_id ?? "", onEndReached: y, onEndReachedThreshold: 0.4, renderItem: b })));
                },
                S = c.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" }, content: { width: "100%", flex: 1 }, conversation: { gap: e.spaces.space8, marginBottom: e.spaces.space24 }, header: { whiteSpace: "nowrap" }, imagesContainer: { display: "grid", flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space12, marginBottom: e.spaces.space12, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } }));
        },
        751621: (e, t, n) => {
            n.d(t, { v: () => p });
            var a = n(202784),
                r = n(325686),
                o = n(371344),
                i = n(392237),
                c = n(674132),
                s = n.n(c),
                l = n(956272),
                d = n(666536),
                m = n(464023);
            const u = s().i1147548,
                p = ({ initialValue: e, onSubmit: t }) => {
                    const [n, i] = a.useState(e),
                        c = a.useRef(null),
                        [s, m] = a.useState(!1),
                        p = a.useCallback(() => m(!1), [m]),
                        h = a.useCallback(() => m(!0), [m]),
                        y = a.useCallback((e) => {
                            i(e.target.value);
                        }, []),
                        f = a.useMemo(() => (0, d.Z)((e) => t(e), 400), [t]);
                    a.useEffect(() => {
                        f(n);
                    }, [n, f]);
                    const E = a.useCallback(() => {
                        f.clear(), t(n);
                    }, [n, t, f]);
                    return a.createElement(
                        r.Z,
                        { style: g.container },
                        a.createElement(
                            r.Z,
                            { style: g.inputWrapper },
                            a.createElement(o.Z, {
                                Icon: l.default,
                                onBlur: p,
                                onChange: y,
                                onClear: (e) => {
                                    i(""), E();
                                },
                                onFocus: h,
                                onSubmitEditing: E,
                                placeholder: u,
                                ref: c,
                                style: [g.input, s ? g.selected : void 0],
                                styleType: "selection",
                                value: n,
                                withClearButton: !0,
                            }),
                        ),
                    );
                },
                g = i.default.create((e) => ({ container: { width: "100%", alignItems: "center", justifyContent: "center" }, inputWrapper: { width: "100%", maxWidth: `calc(${m.vf}px + ${e.spaces.space32})` }, selected: { outlineWidth: i.default.theme.spaces.space1 }, input: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space32, outlineColor: e.colors.primary, outlineWidth: 0, outlineStyle: "solid" } }));
        },
        253557: (e, t, n) => {
            n.d(t, { D: () => R });
            var a = n(202784),
                r = n(400752),
                o = n(555874),
                i = n(325686),
                c = n(437429),
                s = n.n(c),
                l = n(167630),
                d = n(731708),
                m = n(721266),
                u = n(392237),
                p = n(674132),
                g = n.n(p),
                h = n(166852),
                y = n(420182),
                f = n(125363),
                E = n(931266),
                b = n(530732),
                C = n(123702),
                v = n(725516),
                k = n(975226),
                Z = n(548102),
                I = n.n(Z);
            const w = 200,
                x = (e, t, n) => {
                    const r = new RegExp(I()(t), "i"),
                        o = e.search(r);
                    if (-1 === o) return e.substring(0, w);
                    const i = o > 100 ? o - 100 : 0,
                        c = e.length > o + 100 ? o + 100 : e.length,
                        s = e.substring(i, c),
                        l = s.split(r),
                        m = s.match(r);
                    return a.createElement(
                        d.ZP,
                        null,
                        l.map((e, t) => a.createElement(a.Fragment, { key: t }, e, t < l.length - 1 ? a.createElement(d.ZP, { style: n }, m?.[t] ?? "") : null)),
                    );
                };
            function S({ chatItemId: e, conversationId: t, createdAt: n, message: r, onSearchHistoryClicked: o, searchQuery: i, title: c }) {
                const s = (0, v.z)(),
                    l = a.useMemo(() => {
                        let e = "";
                        return r && ((e = r.replace(/\n/g, "").trim()), (e = (0, C.K)(e))), i && e ? x(e, i, { fontWeight: "900" }) : e;
                    }, [r, i]),
                    p = a.useMemo(() => (i && c ? x(c, i, { color: u.default.theme.colors.text, fontWeight: "900" }) : c), [c, i]),
                    g = a.useMemo(() => (n ? (0, k._)(n) : ""), [n]),
                    h = a.useCallback(() => {
                        o?.(), s.scribe({ element: "grok_search_result", action: "click" });
                    }, [s, o]);
                return a.createElement(b.Z, { interactiveStyles: { hoverStyle: _.hover }, link: `/i/grok?conversation=${t}`, onClick: h, style: _.conversation }, a.createElement(d.ZP, { color: "text", numberOfLines: 2, weight: "bold", withInteractiveStyling: !1 }, p), a.createElement(m.Z, { size: "space2" }), a.createElement(d.ZP, { color: "gray900", numberOfLines: 4 }, l), a.createElement(m.Z, { size: "space8" }), a.createElement(d.ZP, { color: "gray500" }, g));
            }
            const _ = u.default.create((e) => ({ conversation: { alignItems: "start", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12 }, hover: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium } })),
                z = g().ab437026,
                L = g().e12569ec,
                P = g().g61ed8a4,
                M = g().hb52cc4a,
                R = ({ onSearchHistoryClicked: e, query: t, queryKey: n }) => {
                    const [c, u] = a.useState(!1),
                        [p, g] = a.useState(!1),
                        [b, C] = a.useState([]),
                        v = (0, f.I0)(),
                        k = s()(),
                        [{ apiClient: Z }] = (0, r.KO)(y.dd);
                    a.useEffect(() => {
                        u(!0),
                            g(!1),
                            v((0, E.l)({ keyword: t }))
                                .then((e) => C(e))
                                .catch((e) => {
                                    g(!0);
                                })
                                .finally(() => {
                                    u(!1);
                                });
                    }, [t, n, v, Z, k]);
                    const I = a.useMemo(() => (0, h.Z)(b, (e) => e.conversation?.id), [b]);
                    return c ? a.createElement(i.Z, { style: B.fullScreenContainer }, a.createElement(l.Z, { size: "large" })) : p ? a.createElement(i.Z, { style: B.fullScreenContainer }, a.createElement(i.Z, null, a.createElement(d.ZP, { size: "title3", weight: "bold" }, P), a.createElement(m.Z, { size: "space4" }), a.createElement(d.ZP, { color: "gray500", size: "body" }, M))) : 0 === I.length ? a.createElement(i.Z, { style: B.fullScreenContainer }, a.createElement(i.Z, null, a.createElement(d.ZP, { size: "title3", weight: "bold" }, z), a.createElement(m.Z, { size: "space4" }), a.createElement(d.ZP, { color: "gray500", size: "body" }, L))) : a.createElement(i.Z, { style: B.container }, a.createElement(i.Z, { style: B.content }, a.createElement(o.Z, { ItemSeparatorComponent: () => a.createElement(m.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(m.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(m.Z, { size: "space8" }), contentContainerStyle: B.results, data: I, keyExtractor: (e) => `${e.conversation.id}_${e.chatItemId}`, renderItem: ({ item: n }) => a.createElement(S, { chatItemId: n.chatItemId, conversationId: n.conversation.id, createdAt: n.createdAt, message: n.message, onSearchHistoryClicked: e, searchQuery: t, title: n.title }) })));
                },
                B = u.default.create((e) => ({ loadingContainer: { width: "100%", height: "50%", alignItems: "center", justifyContent: "center" }, container: { width: "100%", maxHeight: "100%", alignItems: "center", position: "relative" }, content: { width: "100%", flex: 1 }, results: { paddingHorizontal: e.spaces.space12 }, fullScreenContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" } }));
        },
        663587: (e, t, n) => {
            n.r(t), n.d(t, { default: () => _, titleLabel: () => S });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                i = n(721266),
                c = n(392237),
                s = n(674132),
                l = n.n(s),
                d = n(323265),
                m = n(252021),
                u = n(652904),
                p = n(952793),
                g = n(293115),
                h = n(725516),
                y = n(609013),
                f = n(428880),
                E = n(222656),
                b = n(991985),
                C = n(54957),
                v = n(739070),
                k = n(884058),
                Z = n(751621),
                I = n(253557),
                w = n(302176);
            const x = { page: d.ZP.isTwitterApp() ? (d.ZP.isAndroid() ? "grok_history_android" : "grok_history_ios") : "grok_history" },
                S = l().ae9cdac6;
            function _({ onDismiss: e }) {
                (0, b.n)(!0);
                const t = (0, o.useHistory)(),
                    n = (0, o.useLocation)(),
                    c = (0, h.z)(),
                    s = (0, p.hC)("responsive_web_grok_history_search_enabled"),
                    l = "string" == typeof n.query.q ? n.query.q : void 0,
                    [_, L] = a.useState(Math.random());
                (0, E.Z)();
                const [P, M] = a.useState(w.G.all),
                    R = a.useCallback(() => {
                        l ? t.replace("/i/grok/history") : t.replace("/i/grok");
                    }, [t, l]),
                    B = a.useCallback(
                        (e) => {
                            const n = new URLSearchParams(window.location.search).get("q");
                            c.scribe({ element: "grok_search", action: "submit" }), e !== n ? t.push(`/i/grok/history?q=${encodeURIComponent(e)}`) : L(Math.random());
                        },
                        [t, c],
                    ),
                    H = a.useMemo(() => (l ? a.createElement(I.D, { query: l, queryKey: _ }) : P === w.G.images ? a.createElement(k.v, null) : P === w.G.pins ? a.createElement(v.s, null) : a.createElement(C.c, { onSearchSubmit: B, searchKey: _, searchValue: l ?? "" })), [l, _, P, B]),
                    [T] = (0, f.ZP)();
                return a.createElement(g.nO, { namespace: x }, a.createElement(u.Z, null, T ? a.createElement(y.T, { documentTitle: S }) : null, a.createElement(m.Z, { customSearchBox: s ? a.createElement(Z.v, { initialValue: l ?? "", onSubmit: B }) : void 0, documentTitle: S, history: t, isFullWidth: !0, onBackClick: R, primaryContent: a.createElement(r.Z, { style: z.container }, d.ZP.isWebView() ? a.createElement(i.Z, { size: "space56" }) : null, H), primaryContentLabel: S, rightControl: a.createElement(a.Fragment, null), secondaryBar: l ? null : a.createElement(w.k, { onTabChange: M, selectedTab: P }), sidebarContent: null, title: s ? void 0 : S, withBorderLessLayout: T, withSearchBox: s })));
            }
            const z = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space24 } }));
        },
        975226: (e, t, n) => {
            n.d(t, { _: () => d });
            var a = n(674132),
                r = n.n(a),
                o = n(207137);
            const i = r().g02dacc0,
                c = r().c6e845c0,
                s = r().f3b9b9a7,
                l = r().jade381b,
                d = (e) => {
                    const t = new Date(e);
                    return (0, o.zk)(t) ? i : (0, o.gO)(t) ? c : (0, o.FI)(t) ? s(t) : l(t);
                };
        },
        774038: (e, t, n) => {
            n.d(t, { N6: () => F, eQ: () => O, rO: () => U });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                r = n(107267),
                o = n(108362),
                i = n(154003),
                c = n(731708),
                s = n(370006),
                l = n(392237),
                d = n(674132),
                m = n.n(d),
                u = n(72591),
                p = n(427783),
                g = n(186444),
                h = n(254944),
                y = n(276259),
                f = n(323265),
                E = n(952793),
                b = n(128225),
                C = n(725405),
                v = n(125363),
                k = n(270172),
                Z = n(327597),
                I = n(601576),
                w = n(791786),
                x = n(928831),
                S = n(988290),
                _ = n(737368),
                z = n(305442);
            const L = f.ZP.isTwitterApp(),
                P = m().j826e722,
                M = m().a9325f10,
                R = m().f88553c8,
                B = m().g0b12442,
                H = m().edd0c172,
                T = m().abd845fe,
                j = m().d1d3a41a,
                A = m().a2697040,
                D = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function F(e) {
                const t = a.useMemo(() => e || { fileName: "", mimeType: "" }, [e]),
                    n = (0, v.I0)(),
                    [r, o] = a.useState(),
                    i = a.useMemo(() => !!t?.url && D.includes(new URL(t.url).hostname), [t]),
                    c = a.useMemo(() => ((t.url && i) || t.isPublic ? t.url : r ? URL.createObjectURL(r) : void 0), [r, i, t.isPublic, t.url]);
                return (
                    a.useEffect(() => {
                        if (!t.url || t.isPublic || !y.v5.includes(t.mimeType) || i) return;
                        const e = t.url;
                        n((0, k.X)(e))
                            .then((e) => {
                                o(e ?? void 0);
                            })
                            .catch();
                    }, [t.url, t.isPublic, i, t.mimeType, n]),
                    c
                );
            }
            function U({ allMediaIds: e, buttonSize: t = "xLarge", buttonType: n = "alwaysBlack", contentUrl: s, isLoading: l, mediaId: d, setEditMode: m, withStartAlignment: f }) {
                const k = (0, v.I0)(),
                    Z = (0, C.Z)(),
                    w = (0, r.useHistory)(),
                    { isGrokDrawer: x } = (0, S.ZP)(),
                    _ = (0, E.hC)("responsive_web_grok_image_edit");
                return a.createElement(
                    o.Z,
                    { onClick: (e) => e.stopPropagation(), style: f ? W.containerCorner : W.container, withGutter: !0 },
                    !L &&
                        a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(i.ZP, {
                                disabled: l,
                                hoverLabel: { label: P },
                                icon: a.createElement(u.default, { style: W.white }),
                                key: "saveImage",
                                onClick: (t) => {
                                    (async () => {
                                        if ((Z.scribe({ element: "save_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: d, allMediaIds: e }) } }), s)) {
                                            const e = await (0, b.f)(s, !0, !0),
                                                t = URL.createObjectURL(e);
                                            (0, y.uv)(t, "image.jpg");
                                        }
                                    })();
                                },
                                size: t,
                                style: W.button,
                                type: n,
                            }),
                            a.createElement(i.ZP, {
                                disabled: l,
                                hoverLabel: { label: M },
                                icon: a.createElement(p.default, { style: W.white }),
                                key: "copyImage",
                                onClick: (t) => {
                                    (async () => {
                                        if ((Z.scribe({ element: "copy_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: d, allMediaIds: e }) } }), s)) {
                                            const e = await (0, b.f)(s, !0, !0),
                                                t = URL.createObjectURL(e);
                                            (0, y.VJ)(t)
                                                .then(() => {
                                                    k((0, I.fz)({ text: R }));
                                                })
                                                .catch((e) => {
                                                    k((0, I.fz)({ text: B }));
                                                });
                                        }
                                    })();
                                },
                                size: t,
                                style: W.button,
                                type: n,
                            }),
                            a.createElement(i.ZP, {
                                disabled: l,
                                hoverLabel: { label: H },
                                icon: a.createElement(g.default, { style: W.white }),
                                key: "postImage",
                                onClick: (t) => {
                                    (async () => {
                                        if ((Z.scribe({ element: "post_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: d, allMediaIds: e }) } }), !s)) return;
                                        const t = await (0, b.f)(s, !0, !0),
                                            n = URL.createObjectURL(t);
                                        w.push({ pathname: "/compose/post", state: { externalMedia: [n], positionCursorAtBeginning: !0 } });
                                    })();
                                },
                                size: t,
                                style: W.button,
                                type: n,
                            }),
                        ),
                    _
                        ? a.createElement(
                              i.ZP,
                              {
                                  disabled: l,
                                  hoverLabel: { label: j },
                                  icon: a.createElement(h.default, { style: W.white }),
                                  key: "editImage",
                                  onClick: (t) => {
                                      (async () => {
                                          Z.scribe({ element: "edit_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: d, allMediaIds: e }) } }), m && m(!0);
                                      })();
                                  },
                                  size: t,
                                  style: W.button,
                                  type: n,
                              },
                              !x && a.createElement(c.ZP, { style: W.white }, T),
                          )
                        : null,
                );
            }
            function O({ contentUrl: e, conversationKey: t, grokFile: n, onSend: r, setEditMode: i }) {
                const c = (0, _.k)(),
                    l = (0, v.I0)(),
                    d = (0, C.Z)(),
                    { isImageEditEnabled: m, selectImageEditMode: u } = (0, x.w)(),
                    p = (0, z.Z)("image_edit"),
                    g = a.useRef(!1),
                    h = a.useCallback(
                        (a) => {
                            g.current ||
                                ((g.current = !0),
                                (async () => {
                                    const o = [];
                                    if (n && n.mediaId) o.push(n);
                                    else {
                                        const t = await (0, b.f)(e, !0, !0),
                                            n = new AbortController(),
                                            a = await c(((i = t), (s = "edit_grok.jpeg"), new File([i], s, { type: i.type })), n);
                                        o.push(a);
                                    }
                                    var i, s;
                                    const g = { ...a, attachments: o, imageGenerationCount: p, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: n?.url || e } } };
                                    m || u(), l((0, Z.u)({ analytics: d, conversationKey: t })(g)), r();
                                })());
                        },
                        [p, l, d, c, e, t, r, n, m, u],
                    );
                return a.createElement(o.Z, { onClick: (e) => e.stopPropagation(), style: W.container, withGutter: !0 }, !L && a.createElement(s.Z, { backButtonType: "close", onClick: () => i(!1) }), a.createElement(w.Z, { conversationKey: t, disableFileUploads: !0, hasAccess: !0, isIdle: !0, mode: "", placeholder: A, promptSender: h, useMagicWandIcon: !0, useNonExpanded: !0 }));
            }
            const W = l.default.create((e) => ({ button: { borderRadius: e.borderRadii.large, backdropFilter: "blur(8px)" }, container: { padding: e.spaces.space12, flexDirection: "row", gap: e.spaces.space20, justifyContent: "center" }, containerCorner: { padding: e.spaces.space4, flexDirection: "row", gap: e.spaces.space8, justifyContent: "center" }, center: { justifyContent: "center", alignItems: "center" }, flex: { flex: 1 }, white: { color: "white" } }));
        },
        86629: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Z });
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                i = n(174326),
                c = n(392237),
                s = n(166852),
                l = n(827094),
                d = n(449067),
                m = n(965728),
                u = n(125363),
                p = n(389071),
                g = n(189953),
                h = n(615027),
                y = n(86657),
                f = n(654917),
                E = n(991985),
                b = n(774038);
            const C = 1024,
                v = 768,
                k = v / C;
            function Z() {
                const e = (0, o.useLocation)(),
                    t = e.state?.conversationKey || "",
                    n = e.state?.messageId || null,
                    r = e.state?.index || 0,
                    i = e.state?.editMode || !1;
                return t ? a.createElement(S, { conversationKey: t, defaultEditMode: i, indexArg: r, messageId: n }) : a.createElement(h.Z, { to: "/home" });
            }
            const I = [],
                w = [],
                x = [];
            function S({ conversationKey: e, defaultEditMode: t, indexArg: n, messageId: c }) {
                (0, E.n)(!0);
                const [Z, S] = a.useState(t),
                    z = (0, o.useHistory)(),
                    L = (0, f.ZP)(),
                    P = a.useCallback(() => {
                        z.goBack();
                    }, [z]),
                    M = e === L.conversationKey,
                    R = M ? L.messageIds : I,
                    B = M && (L.status === g.Q_.TYPING || L.status === g.Q_.WAITING),
                    H = a.useMemo(() => (B ? [...R, null] : R), [B, R]),
                    T = H.length,
                    j = c || H[H.length - 1],
                    A = (0, p.bD)(e),
                    D = (0, u.v9)((e) => A.selectMessageById(e, T ? j : null)),
                    F = D.fileAttachments || w,
                    U = D.intermediateImageResults || x,
                    O = a.useMemo(
                        () =>
                            (0, s.Z)([...U.map((e) => e.imageIdStr), ...F.map((e) => e.mediaId)])
                                .filter(Boolean)
                                .sort(),
                        [F, U],
                    ),
                    [W, G] = a.useState({ width: 0, height: 0 }),
                    K = Math.min(1, Math.max(C / W.width || 0, v / W.height || 0)),
                    [N, $] = a.useState(F.map(() => null)),
                    V = a.useCallback(
                        ({ nativeEvent: { layout: e } }) => {
                            (e.width === W.width && e.height === W.height) || G({ width: e.width, height: e.height });
                        },
                        [G, W],
                    ),
                    [q, J] = a.useState(0),
                    Q = O[q],
                    X = F.find((e) => e.mediaId === Q) ?? { fileName: "image", mimeType: "image/jpeg" },
                    Y = (0, b.N6)(X);
                if (!T) return a.createElement(h.Z, { to: "/home" });
                const ee = Z ? a.createElement(b.eQ, { contentUrl: Y || "", conversationKey: e, grokFile: X, onSend: P, setEditMode: S }) : a.createElement(b.rO, { allMediaIds: O, contentUrl: Y, isLoading: !Y, mediaId: Q, setEditMode: S });
                return a.createElement(
                    d.Z.Configure,
                    { headerless: !0 },
                    a.createElement(
                        l.Z,
                        { backgroundColor: (0, m.L$)(), footerButtons: ee, forceDominantButtonColor: !0, onCloseButtonPress: P },
                        a.createElement(
                            r.Z,
                            { onLayout: V, style: _.flex },
                            W.width &&
                                W.height &&
                                a.createElement(
                                    i.Z,
                                    { contentPadding: 1, onScroll: (e) => J(Math.round(e.next / W.width)), scrollToCenter: !0, style: [W, _.center], visibleItemIndex: n, withAddedNavButtonClickArea: !0, withGlobalKeyboardNavigation: !0, withScrollIntoView: !1 },
                                    F.map((e, t) => {
                                        const n = O[t],
                                            o = F.find((e) => e.mediaId === n) ?? { fileName: "image", mimeType: "image/jpeg" },
                                            i = U.filter((e) => e.imageIdStr === n),
                                            c = B ? D.expectedImageAspectRatio || k : N[t] || k,
                                            s = N[t] || B ? Math.min(W.width, W.height * c) * K : void 0;
                                        return a.createElement(
                                            r.Z,
                                            { key: `slot_${t}`, style: [W, _.center] },
                                            a.createElement(y.Z, {
                                                aspectRatio: D.expectedImageAspectRatio,
                                                centerJustify: !0,
                                                file: o,
                                                height: W.height * K,
                                                intermediateResults: i,
                                                isLoading: B,
                                                key: `image_${t}`,
                                                onClick: () => {},
                                                onImageSize: (e, n) => {
                                                    if (e && n) {
                                                        const a = e / n;
                                                        $((e) => {
                                                            const n = [...e];
                                                            return (n[t] = a), n;
                                                        });
                                                    }
                                                },
                                                style: _.img,
                                                width: s,
                                            }),
                                        );
                                    }),
                                ),
                        ),
                    ),
                );
            }
            const _ = c.default.create((e) => ({ center: { justifyContent: "center", alignItems: "center" }, flex: { flex: 1 }, white: { color: "white" }, img: { animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" } }));
        },
        177695: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                i = n(167630),
                c = n(992942),
                s = n(392237),
                l = n(827094),
                d = n(449067),
                m = n(965728),
                u = n(125363),
                p = n(270172),
                g = n(991985);
            const h = (e) => {
                    (0, g.n)(!0);
                    const [t, n] = a.useState(0),
                        s = e.match.params?.grokMediaId,
                        h = (0, o.useLocation)(),
                        f = h.state?.file ?? void 0,
                        E = (0, u.I0)(),
                        [b, C] = a.useState(!1),
                        [v, k] = a.useState(s ? void 0 : (f?.url ?? void 0)),
                        Z = (0, o.useHistory)();
                    a.useEffect(() => {
                        if (!s) return;
                        const e = `https://api.x.com/2/grok/attachment.json?mediaId=${s}`;
                        C(!0),
                            E((0, p.X)(e))
                                .then((e) => {
                                    if (e) {
                                        const t = URL.createObjectURL(e);
                                        k(t);
                                    }
                                })
                                .catch()
                                .finally(() => {
                                    C(!1);
                                });
                    }, [s, C, E]);
                    const I = a.useCallback(() => {
                            Z.goBack();
                        }, [Z]),
                        w = a.useMemo(() => (v ? { uri: v } : void 0), [v]);
                    return a.createElement(d.Z.Configure, { headerless: !0 }, a.createElement(l.Z, { backgroundColor: (0, m.L$)(), forceDominantButtonColor: !0, onCloseButtonPress: I }, a.createElement(r.Z, { style: y.container }, b ? a.createElement(i.Z, null) : a.createElement(c.Z, { onLoad: () => n(1), resizeMode: "center", source: w, style: [y.image, y.imageTransition, { opacity: t }] }))));
                },
                y = s.default.create((e) => ({ container: { padding: e.spaces.space16, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, image: { width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }, imageTransition: { transition: "opacity 100ms ease-in-out" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-c69e90f3.26fc086a.js.map
