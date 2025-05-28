"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-c69e90f3"],
    {
        302176: (e, t, n) => {
            n.d(t, { G: () => u, k: () => E });
            var a = n(202784),
                r = n(325686),
                i = n(154003),
                o = n(392237),
                c = n(111677),
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
                        o = a.useCallback((e) => () => t === e, [t]),
                        c = a.useMemo(
                            () => [
                                { key: u.all, label: p, isActive: o(u.all), onClick: () => e(u.all) },
                                { key: u.pins, label: g, isActive: o(u.pins), onClick: () => e(u.pins) },
                                { key: u.images, label: h, isActive: o(u.images), onClick: () => e(u.images) },
                            ],
                            [o, e],
                        );
                    return a.createElement(a.Fragment, null, a.createElement(r.Z, { style: b.header }, n ? a.createElement(r.Z, { style: b.backButtonContainer }, a.createElement(i.ZP, { "aria-label": y, hoverLabel: f, icon: a.createElement(l.default, null), link: "/i/grok", type: "primaryText" })) : null, a.createElement(r.Z, { style: b.tabsContainer }, a.createElement(m.Z, { links: c, style: b.tabs }))));
                },
                b = o.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space24 }, header: { flexDirection: "row", width: "100%" }, tabsContainer: { flex: 1, alignItems: "center", borderBottomWidth: 1, borderColor: e.colors.borderColor }, tabs: { borderBottomWidth: 0, width: "100%", maxWidth: 400, cursor: "pointer" }, backButtonContainer: { alignItems: "center", justifyContent: "center", paddingHorizontal: e.spaces.space8, borderBottomWidth: 1, borderColor: e.colors.borderColor } }));
        },
        281563: (e, t, n) => {
            n.d(t, { G: () => R });
            var a = n(85148),
                r = n(693599),
                i = n(202784),
                o = n(325686),
                c = (n(585488), n(351743)),
                s = n.n(c),
                l = n(58881),
                d = n(392237),
                m = n(811176),
                u = n(530732),
                p = n(371344),
                g = n(731708),
                h = n(247056),
                y = n(111677),
                f = n.n(y),
                E = n(885724),
                b = n(607127),
                C = n(73416),
                k = n(883069),
                v = n(149170),
                Z = n(125363),
                I = n(389071),
                w = n(576466),
                x = n(281030),
                S = n(601576);
            const _ = f().d96cf7ce,
                z = f().ef4602ec,
                M = f().d4eb0e26,
                P = r.Z,
                L = a.Z,
                R = i.memo(({ isFavorite: e, onHistoryLinkClicked: t, restId: n, selected: a, title: r }) => {
                    const c = (0, Z.I0)(),
                        [y, f] = i.useState(!1),
                        [R, H] = i.useState(r),
                        [T] = s()(P),
                        [U] = s()(L);
                    i.useEffect(() => {
                        H(r);
                    }, [r]);
                    const j = l.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors.blue500, insetFocusRing: !0 });
                    function A(e) {
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
                    function D() {
                        f(!0);
                    }
                    function O() {
                        U({
                            onCompleted: (e) => {
                                e.grokconversation_edit?.edit_error ? c(S.fz({ text: z })) : c((0, I.lo)(n, R)), f(!1);
                            },
                            variables: { conversationId: n, title: R },
                        });
                    }
                    function W(e) {
                        const t = [
                            { Icon: E.default, onClick: D, text: M },
                            { Icon: b.default, onClick: F, text: _ },
                        ];
                        return i.createElement(m.Z, { items: t, onCloseRequested: e });
                    }
                    return i.createElement(
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
                            i.createElement(
                                o.Z,
                                { style: [B.conversation, a ? B.selected : null, s.isHovered || y ? B.hover : null] },
                                y
                                    ? i.createElement(p.Z, { autoFocus: !0, inputStyle: B.input, numberOfLines: 3, onBlur: O, onChange: A, onSubmitEditing: O, styleType: "selection", value: R })
                                    : i.createElement(
                                          i.Fragment,
                                          null,
                                          i.createElement(
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
                                          i.createElement(
                                              o.Z,
                                              { style: B.controls },
                                              i.createElement(
                                                  g.ZP,
                                                  { color: "gray500" },
                                                  i.createElement(
                                                      u.Z,
                                                      {
                                                          interactiveStyles: j,
                                                          onPress: (t) => {
                                                              c(e ? (0, x.l)(n) : (0, w.v)(n)), t.preventDefault();
                                                          },
                                                          style: { borderRadius: 999 },
                                                      },
                                                      (t) => i.createElement(o.Z, { style: B.starIconContainer }, i.createElement(g.ZP, { color: t.isHovered ? "blue500" : "gray500" }, e ? i.createElement(C.default, null) : i.createElement(k.default, null))),
                                                  ),
                                              ),
                                              i.createElement(h.Z, { Icon: v.default, renderActionMenu: W }),
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
                i = n(555874),
                o = n(325686),
                c = n(731708),
                s = n(721266),
                l = n(392237),
                d = n(111677),
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
                k = n(253557),
                v = n(281563);
            const Z = m().b3de2628,
                I = m().acfbfb28,
                w = m().ef4602ec,
                x = ({ customSearchBox: e, searchBoxOptions: t }) => r.createElement(o.Z, { style: _.searchContainer }, e || r.createElement(p.Rj, (0, a.Z)({}, t, { isCompact: !0, shouldHandleSearchShortcut: !0 }))),
                S = ({ onHistoryLinkClicked: e, onSearchSubmit: t, searchKey: n, searchValue: a }) => {
                    const l = (0, g.I0)(),
                        d = (0, g.v9)(h.bv),
                        m = (0, g.v9)(h.V$),
                        p = (0, g.v9)(h.JE),
                        S = (0, E.uf)(),
                        z = (0, g.v9)(S.selectConversationId),
                        M = r.useMemo(() => (0, u.Z)(d ?? [], ({ created_at_ms: e }) => (e ? (0, b._)(e) : "")), [d]),
                        P = r.useMemo(() => Object.keys(M), [M]),
                        L = r.useCallback(
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
                        L(!1);
                    }, []);
                    const R = r.useCallback(
                        (t) =>
                            r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(c.ZP, { color: "gray700", style: _.conversation, weight: "bold" }, t.item),
                                M[t.item].map(({ grokConversation: t, is_pinned: n, title: a }) => r.createElement(v.G, { isFavorite: n ?? !1, key: t.rest_id, onHistoryLinkClicked: e, restId: t.rest_id, selected: z === t.rest_id, title: a })),
                            ),
                        [z, M, e],
                    );
                    return 0 === P.length && "loading" === p ? null : d && 0 !== d.length ? r.createElement(o.Z, { style: _.container }, r.createElement(o.Z, { style: _.searchBoxContainer }, r.createElement(x, { customSearchBox: r.createElement(C.v, { initialValue: a, onSubmit: t }) })), a ? r.createElement(k.D, { onSearchHistoryClicked: e, query: a, queryKey: n }) : r.createElement(o.Z, { style: _.content }, r.createElement(i.Z, { ItemSeparatorComponent: () => r.createElement(s.Z, { size: "space8" }), ListFooterComponent: () => r.createElement(s.Z, { size: "space16" }), ListHeaderComponent: () => r.createElement(s.Z, { size: "space8" }), data: P, keyExtractor: (e, t) => P[t], onEndReached: L, onEndReachedThreshold: 0.4, renderItem: R, style: { height: "100%" } }))) : r.createElement(o.Z, { style: _.noHistoryContainer }, r.createElement(o.Z, null, r.createElement(c.ZP, { size: "title3", weight: "bold" }, Z), r.createElement(s.Z, { size: "space4" }), r.createElement(c.ZP, { color: "gray500", size: "body" }, I)));
                },
                _ = l.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" }, content: { width: "100%", maxHeight: "100%", flex: 1, position: "relative" }, conversation: { alignItems: "start", flexDirection: "row", gap: e.spaces.space8, justifyContent: "space-between", paddingStart: e.spaces.space24, paddingEnd: e.spaces.space16, paddingBottom: e.spaces.space12, paddingTop: e.spaces.space4 }, header: { whiteSpace: "nowrap" }, searchBoxContainer: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, width: "100%" }, searchContainer: { flexDirection: "row", flexGrow: 1, flexShrink: 1, marginHorizontal: e.spaces.space4, alignItems: "center", marginVertical: "unset" } }));
        },
        739070: (e, t, n) => {
            n.d(t, { s: () => C });
            var a = n(202784),
                r = n(555874),
                i = n(325686),
                o = n(731708),
                c = n(721266),
                s = n(392237),
                l = n(111677),
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
                        v = a.useCallback(
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
                        v(!1);
                    }, []);
                    const Z = a.useCallback(({ item: e }) => a.createElement(y.G, { isFavorite: !0, key: e.grokConversation.rest_id, onHistoryLinkClicked: () => {}, restId: e.grokConversation.rest_id, selected: s === e.grokConversation.rest_id, title: e.title }), [s]);
                    return 0 === l.length && "loading" === C ? null : l && 0 !== l.length ? a.createElement(i.Z, { style: k.container }, a.createElement(i.Z, { style: k.content }, a.createElement(r.Z, { ItemSeparatorComponent: () => a.createElement(c.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(c.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(c.Z, { size: "space8" }), data: l, keyExtractor: (e, t) => e.grokConversation.id, onEndReached: v, onEndReachedThreshold: 0.4, renderItem: Z, style: { height: "100%" } }))) : a.createElement(i.Z, { style: k.noHistoryContainer }, a.createElement(i.Z, null, a.createElement(o.ZP, { size: "title3", weight: "bold" }, f), a.createElement(c.Z, { size: "space4" }), a.createElement(o.ZP, { color: "gray500", size: "body" }, E)));
                },
                k = s.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center", padding: e.spaces.space16, textAlign: "center" }, content: { width: "100%", maxHeight: "100%", flex: 1, position: "relative", paddingVertical: e.spaces.space8 }, conversation: { alignItems: "start", flexDirection: "row", gap: e.spaces.space8, justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, paddingBottom: e.spaces.space16 }, header: { whiteSpace: "nowrap" } }));
        },
        884058: (e, t, n) => {
            n.d(t, { v: () => x });
            var a = n(202784),
                r = n(555874),
                i = n(325686),
                o = n(537392),
                c = n(392237),
                s = n(731708),
                l = n(721266),
                d = n(111677),
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
            const k = m().d96cf7ce,
                v = ({ chatItemId: e, conversationId: t, mediaId: n, mediaUrl: r }) => {
                    const i = (0, u.I0)(),
                        o = (0, E.z)(),
                        c = a.useMemo(() => {
                            const r = [];
                            return (
                                e &&
                                    r.push(
                                        a.createElement(y.Z, {
                                            Icon: f.default,
                                            actionText: k,
                                            iconThumbnailColor: "danger",
                                            key: "deleteImage",
                                            onClick: (a) => {
                                                o.scribe({ element: "delete_image_button", action: "click" }),
                                                    i((0, b.$)({ chatItemId: e, conversationId: t })).then(() => {
                                                        i((0, p.Pl)(n));
                                                    });
                                            },
                                            textColor: "red500",
                                        }),
                                    ),
                                r
                            );
                        }, [e, o, t, i, n]);
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
                        m = (0, o.Zx)(({ containerWidth: e }) => (e < c.default.theme.breakpoints.small ? 2 : 3)),
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
                                    i.Z,
                                    { style: E },
                                    t.map(({ chat_item_id: e, grokConversation: t, media_id: n, media_url: r }) => (n && t && r ? a.createElement(v, { chatItemId: e, conversationId: t.rest_id, key: e, mediaId: n, mediaUrl: r }) : null)),
                                ),
                            [E],
                        );
                    return 0 === f.length && "loading" === d ? null : 0 === f.length ? a.createElement(i.Z, { style: S.noHistoryContainer }, a.createElement(i.Z, null, a.createElement(s.ZP, { size: "title3", weight: "bold" }, Z), a.createElement(l.Z, { size: "space4" }), a.createElement(s.ZP, { color: "gray500", size: "body" }, I))) : a.createElement(i.Z, { style: S.container }, a.createElement(i.Z, { style: S.content }, a.createElement(r.Z, { ItemSeparatorComponent: () => a.createElement(l.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(l.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(l.Z, { size: "space8" }), data: f, keyExtractor: (e) => e[0]?.media_id ?? "", onEndReached: y, onEndReachedThreshold: 0.4, renderItem: b })));
                },
                S = c.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" }, content: { width: "100%", flex: 1 }, conversation: { gap: e.spaces.space8, marginBottom: e.spaces.space24 }, header: { whiteSpace: "nowrap" }, imagesContainer: { display: "grid", flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space12, marginBottom: e.spaces.space12, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } }));
        },
        751621: (e, t, n) => {
            n.d(t, { v: () => p });
            var a = n(202784),
                r = n(325686),
                i = n(371344),
                o = n(392237),
                c = n(111677),
                s = n.n(c),
                l = n(956272),
                d = n(666536),
                m = n(464023);
            const u = s().i1147548,
                p = ({ initialValue: e, onSubmit: t }) => {
                    const [n, o] = a.useState(e),
                        c = a.useRef(null),
                        [s, m] = a.useState(!1),
                        p = a.useCallback(() => m(!1), [m]),
                        h = a.useCallback(() => m(!0), [m]),
                        y = a.useCallback((e) => {
                            o(e.target.value);
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
                            a.createElement(i.Z, {
                                Icon: l.default,
                                onBlur: p,
                                onChange: y,
                                onClear: (e) => {
                                    o(""), E();
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
                g = o.default.create((e) => ({ container: { width: "100%", alignItems: "center", justifyContent: "center" }, inputWrapper: { width: "100%", maxWidth: `calc(${m.vf}px + ${e.spaces.space32})` }, selected: { outlineWidth: o.default.theme.spaces.space1 }, input: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space32, outlineColor: e.colors.primary, outlineWidth: 0, outlineStyle: "solid" } }));
        },
        253557: (e, t, n) => {
            n.d(t, { D: () => R });
            var a = n(202784),
                r = n(400752),
                i = n(555874),
                o = n(325686),
                c = n(437429),
                s = n.n(c),
                l = n(167630),
                d = n(731708),
                m = n(721266),
                u = n(392237),
                p = n(111677),
                g = n.n(p),
                h = n(166852),
                y = n(420182),
                f = n(125363),
                E = n(931266),
                b = n(530732),
                C = n(123702),
                k = n(725516),
                v = n(975226),
                Z = n(548102),
                I = n.n(Z);
            const w = 200,
                x = (e, t, n) => {
                    const r = new RegExp(I()(t), "i"),
                        i = e.search(r);
                    if (-1 === i) return e.substring(0, w);
                    const o = i > 100 ? i - 100 : 0,
                        c = e.length > i + 100 ? i + 100 : e.length,
                        s = e.substring(o, c),
                        l = s.split(r),
                        m = s.match(r);
                    return a.createElement(
                        d.ZP,
                        null,
                        l.map((e, t) => a.createElement(a.Fragment, { key: t }, e, t < l.length - 1 ? a.createElement(d.ZP, { style: n }, m?.[t] ?? "") : null)),
                    );
                };
            function S({ chatItemId: e, conversationId: t, createdAt: n, message: r, onSearchHistoryClicked: i, searchQuery: o, title: c }) {
                const s = (0, k.z)(),
                    l = a.useMemo(() => {
                        let e = "";
                        return r && ((e = r.replace(/\n/g, "").trim()), (e = (0, C.K)(e))), o && e ? x(e, o, { fontWeight: "900" }) : e;
                    }, [r, o]),
                    p = a.useMemo(() => (o && c ? x(c, o, { color: u.default.theme.colors.text, fontWeight: "900" }) : c), [c, o]),
                    g = a.useMemo(() => (n ? (0, v._)(n) : ""), [n]),
                    h = a.useCallback(() => {
                        i?.(), s.scribe({ element: "grok_search_result", action: "click" });
                    }, [s, i]);
                return a.createElement(b.Z, { interactiveStyles: { hoverStyle: _.hover }, link: `/i/grok?conversation=${t}`, onClick: h, style: _.conversation }, a.createElement(d.ZP, { color: "text", numberOfLines: 2, weight: "bold", withInteractiveStyling: !1 }, p), a.createElement(m.Z, { size: "space2" }), a.createElement(d.ZP, { color: "gray900", numberOfLines: 4 }, l), a.createElement(m.Z, { size: "space8" }), a.createElement(d.ZP, { color: "gray500" }, g));
            }
            const _ = u.default.create((e) => ({ conversation: { alignItems: "start", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12 }, hover: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium } })),
                z = g().ab437026,
                M = g().e12569ec,
                P = g().g61ed8a4,
                L = g().hb52cc4a,
                R = ({ onSearchHistoryClicked: e, query: t, queryKey: n }) => {
                    const [c, u] = a.useState(!1),
                        [p, g] = a.useState(!1),
                        [b, C] = a.useState([]),
                        k = (0, f.I0)(),
                        v = s()(),
                        [{ apiClient: Z }] = (0, r.KO)(y.dd);
                    a.useEffect(() => {
                        u(!0),
                            g(!1),
                            k((0, E.l)({ keyword: t }))
                                .then((e) => C(e))
                                .catch((e) => {
                                    g(!0);
                                })
                                .finally(() => {
                                    u(!1);
                                });
                    }, [t, n, k, Z, v]);
                    const I = a.useMemo(() => (0, h.Z)(b, (e) => e.conversation?.id), [b]);
                    return c ? a.createElement(o.Z, { style: B.fullScreenContainer }, a.createElement(l.Z, { size: "large" })) : p ? a.createElement(o.Z, { style: B.fullScreenContainer }, a.createElement(o.Z, null, a.createElement(d.ZP, { size: "title3", weight: "bold" }, P), a.createElement(m.Z, { size: "space4" }), a.createElement(d.ZP, { color: "gray500", size: "body" }, L))) : 0 === I.length ? a.createElement(o.Z, { style: B.fullScreenContainer }, a.createElement(o.Z, null, a.createElement(d.ZP, { size: "title3", weight: "bold" }, z), a.createElement(m.Z, { size: "space4" }), a.createElement(d.ZP, { color: "gray500", size: "body" }, M))) : a.createElement(o.Z, { style: B.container }, a.createElement(o.Z, { style: B.content }, a.createElement(i.Z, { ItemSeparatorComponent: () => a.createElement(m.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(m.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(m.Z, { size: "space8" }), contentContainerStyle: B.results, data: I, keyExtractor: (e) => `${e.conversation.id}_${e.chatItemId}`, renderItem: ({ item: n }) => a.createElement(S, { chatItemId: n.chatItemId, conversationId: n.conversation.id, createdAt: n.createdAt, message: n.message, onSearchHistoryClicked: e, searchQuery: t, title: n.title }) })));
                },
                B = u.default.create((e) => ({ loadingContainer: { width: "100%", height: "50%", alignItems: "center", justifyContent: "center" }, container: { width: "100%", maxHeight: "100%", alignItems: "center", position: "relative" }, content: { width: "100%", flex: 1 }, results: { paddingHorizontal: e.spaces.space12 }, fullScreenContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" } }));
        },
        663587: (e, t, n) => {
            n.r(t), n.d(t, { default: () => _, titleLabel: () => S });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                r = n(325686),
                i = n(107267),
                o = n(721266),
                c = n(392237),
                s = n(111677),
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
                k = n(739070),
                v = n(884058),
                Z = n(751621),
                I = n(253557),
                w = n(302176);
            const x = { page: d.ZP.isTwitterApp() ? (d.ZP.isAndroid() ? "grok_history_android" : "grok_history_ios") : "grok_history" },
                S = l().ae9cdac6;
            function _({ onDismiss: e }) {
                (0, b.n)(!0);
                const t = (0, i.useHistory)(),
                    n = (0, i.useLocation)(),
                    c = (0, h.z)(),
                    s = (0, p.hC)("responsive_web_grok_history_search_enabled"),
                    l = "string" == typeof n.query.q ? n.query.q : void 0,
                    [_, M] = a.useState(Math.random());
                (0, E.Z)();
                const [P, L] = a.useState(w.G.all),
                    R = a.useCallback(() => {
                        l ? t.replace("/i/grok/history") : t.replace("/i/grok");
                    }, [t, l]),
                    B = a.useCallback(
                        (e) => {
                            const n = new URLSearchParams(window.location.search).get("q");
                            c.scribe({ element: "grok_search", action: "submit" }), e !== n ? t.push(`/i/grok/history?q=${encodeURIComponent(e)}`) : M(Math.random());
                        },
                        [t, c],
                    ),
                    H = a.useMemo(() => (l ? a.createElement(I.D, { query: l, queryKey: _ }) : P === w.G.images ? a.createElement(v.v, null) : P === w.G.pins ? a.createElement(k.s, null) : a.createElement(C.c, { onSearchSubmit: B, searchKey: _, searchValue: l ?? "" })), [l, _, P, B]),
                    [T] = (0, f.ZP)();
                return a.createElement(g.nO, { namespace: x }, a.createElement(u.Z, null, T ? a.createElement(y.T, { documentTitle: S }) : null, a.createElement(m.Z, { customSearchBox: s ? a.createElement(Z.v, { initialValue: l ?? "", onSubmit: B }) : void 0, documentTitle: S, history: t, isFullWidth: !0, onBackClick: R, primaryContent: a.createElement(r.Z, { style: z.container }, d.ZP.isWebView() ? a.createElement(o.Z, { size: "space56" }) : null, H), primaryContentLabel: S, rightControl: a.createElement(a.Fragment, null), secondaryBar: l ? null : a.createElement(w.k, { onTabChange: L, selectedTab: P }), sidebarContent: null, title: s ? void 0 : S, withBorderLessLayout: T, withSearchBox: s })));
            }
            const z = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space24 } }));
        },
        975226: (e, t, n) => {
            n.d(t, { _: () => d });
            var a = n(111677),
                r = n.n(a),
                i = n(207137);
            const o = r().g02dacc0,
                c = r().c6e845c0,
                s = r().f3b9b9a7,
                l = r().jade381b,
                d = (e) => {
                    const t = new Date(e);
                    return (0, i.zk)(t) ? o : (0, i.gO)(t) ? c : (0, i.FI)(t) ? s(t) : l(t);
                };
        },
        774038: (e, t, n) => {
            n.d(t, { N6: () => D, eQ: () => W, rO: () => O });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                r = n(107267),
                i = n(108362),
                o = n(154003),
                c = n(731708),
                s = n(370006),
                l = n(392237),
                d = n(111677),
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
                k = n(125363),
                v = n(270172),
                Z = n(327597),
                I = n(601576),
                w = n(791786),
                x = n(928831),
                S = n(988290),
                _ = n(737368),
                z = n(305442);
            const M = f.ZP.isTwitterApp(),
                P = f.ZP.isTwitterApp() ? (f.ZP.isAndroid() ? "grok_android" : "grok_ios") : "grok",
                L = m().j826e722,
                R = m().a9325f10,
                B = m().f88553c8,
                H = m().g0b12442,
                T = m().edd0c172,
                U = m().abd845fe,
                j = m().d1d3a41a,
                A = m().a2697040,
                F = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function D(e) {
                const t = a.useMemo(() => e || { fileName: "", mimeType: "" }, [e]),
                    n = (0, k.I0)(),
                    [r, i] = a.useState(),
                    o = a.useMemo(() => !!t?.url && F.includes(new URL(t.url).hostname), [t]),
                    c = a.useMemo(() => ((t.url && o) || t.isPublic ? t.url : r ? URL.createObjectURL(r) : void 0), [r, o, t.isPublic, t.url]);
                return (
                    a.useEffect(() => {
                        if (!t.url || t.isPublic || !y.v5.includes(t.mimeType) || o) return;
                        const e = t.url;
                        n((0, v.X)(e))
                            .then((e) => {
                                i(e ?? void 0);
                            })
                            .catch();
                    }, [t.url, t.isPublic, o, t.mimeType, n]),
                    c
                );
            }
            function O({ allMediaIds: e, allMediaUrls: t, buttonSize: n = "xLarge", buttonType: s = "alwaysBlack", contentUrl: l, isLoading: d, mediaId: m, mediaUrl: f, setEditMode: v, withStartAlignment: Z }) {
                const w = (0, k.I0)(),
                    x = (0, C.Z)(),
                    _ = (0, r.useHistory)(),
                    { isGrokDrawer: z } = (0, S.ZP)(),
                    A = (0, E.hC)("responsive_web_grok_image_edit");
                return a.createElement(
                    i.Z,
                    { onClick: (e) => e.stopPropagation(), style: Z ? K.containerCorner : K.container, withGutter: !0 },
                    !M &&
                        a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(o.ZP, {
                                disabled: d,
                                hoverLabel: { label: L },
                                icon: a.createElement(u.default, { style: K.white }),
                                key: "saveImage",
                                onClick: (n) => {
                                    (async () => {
                                        if ((x.scribe({ page: P, element: "save_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: m, mediaUrl: f, allMediaIds: e, allMediaUrls: t }) } }), l)) {
                                            const e = await (0, b.f)(l, !0, !0),
                                                t = URL.createObjectURL(e);
                                            (0, y.uv)(t, "image.jpg");
                                        }
                                    })();
                                },
                                size: n,
                                style: K.button,
                                type: s,
                            }),
                            a.createElement(o.ZP, {
                                disabled: d,
                                hoverLabel: { label: R },
                                icon: a.createElement(p.default, { style: K.white }),
                                key: "copyImage",
                                onClick: (n) => {
                                    (async () => {
                                        if ((x.scribe({ page: P, element: "copy_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: m, mediaUrl: f, allMediaIds: e, allMediaUrls: t }) } }), l)) {
                                            const e = await (0, b.f)(l, !0, !0),
                                                t = URL.createObjectURL(e);
                                            (0, y.VJ)(t)
                                                .then(() => {
                                                    w((0, I.fz)({ text: B }));
                                                })
                                                .catch((e) => {
                                                    w((0, I.fz)({ text: H }));
                                                });
                                        }
                                    })();
                                },
                                size: n,
                                style: K.button,
                                type: s,
                            }),
                            a.createElement(o.ZP, {
                                disabled: d,
                                hoverLabel: { label: T },
                                icon: a.createElement(g.default, { style: K.white }),
                                key: "postImage",
                                onClick: (n) => {
                                    (async () => {
                                        if ((x.scribe({ page: P, element: "post_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: m, mediaUrl: f, allMediaIds: e, allMediaUrls: t }) } }), !l)) return;
                                        const n = await (0, b.f)(l, !0, !0),
                                            a = URL.createObjectURL(n);
                                        _.push({ pathname: "/compose/post", state: { externalMedia: [a], positionCursorAtBeginning: !0 } });
                                    })();
                                },
                                size: n,
                                style: K.button,
                                type: s,
                            }),
                        ),
                    A
                        ? a.createElement(
                              o.ZP,
                              {
                                  disabled: d,
                                  hoverLabel: { label: j },
                                  icon: a.createElement(h.default, { style: K.white }),
                                  key: "editImage",
                                  onClick: (n) => {
                                      (async () => {
                                          x.scribe({ page: P, element: "edit_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: m, mediaUrl: f, allMediaIds: e, allMediaUrls: t }) } }), v && v(!0);
                                      })();
                                  },
                                  size: n,
                                  style: K.button,
                                  type: s,
                              },
                              !z && a.createElement(c.ZP, { style: K.white }, U),
                          )
                        : null,
                );
            }
            function W({ contentUrl: e, conversationKey: t, grokFile: n, onSend: r, setEditMode: o }) {
                const c = (0, _.k)(),
                    l = (0, k.I0)(),
                    d = (0, C.Z)(),
                    { isImageEditEnabled: m, selectImageEditFilterKey: u } = (0, x.w)(),
                    p = (0, z.Z)("image_edit"),
                    g = a.useRef(!1),
                    h = a.useCallback(
                        (a) => {
                            g.current ||
                                ((g.current = !0),
                                (async () => {
                                    const i = [];
                                    if (n && n.mediaId) i.push(n);
                                    else {
                                        const t = await (0, b.f)(e, !0, !0),
                                            n = new AbortController(),
                                            a = await c(((o = t), (s = "edit_grok.jpeg"), new File([o], s, { type: o.type })), n);
                                        i.push(a);
                                    }
                                    var o, s;
                                    const g = { ...a, attachments: i, imageGenerationCount: p, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: n?.url || e } } };
                                    m || u(), l((0, Z.u)({ analytics: d, conversationKey: t })(g)), r();
                                })());
                        },
                        [p, l, d, c, e, t, r, n, m, u],
                    );
                return a.createElement(i.Z, { onClick: (e) => e.stopPropagation(), style: K.container, withGutter: !0 }, !M && a.createElement(s.Z, { backButtonType: "close", onClick: () => o(!1) }), a.createElement(w.Z, { conversationKey: t, disableFileUploads: !0, hasAccess: !0, isIdle: !0, mode: "", placeholder: A, promptSender: h, useMagicWandIcon: !0, useNonExpanded: !0 }));
            }
            const K = l.default.create((e) => ({ button: { borderRadius: e.borderRadii.large, backdropFilter: "blur(8px)" }, container: { padding: e.spaces.space12, flexDirection: "row", gap: e.spaces.space20, justifyContent: "center" }, containerCorner: { padding: e.spaces.space4, flexDirection: "row", gap: e.spaces.space8, justifyContent: "center" }, center: { justifyContent: "center", alignItems: "center" }, flex: { flex: 1 }, white: { color: "white" } }));
        },
        86629: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Z });
            var a = n(202784),
                r = n(325686),
                i = n(107267),
                o = n(174326),
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
                k = 768,
                v = k / C;
            function Z() {
                const e = (0, i.useLocation)(),
                    t = e.state?.conversationKey || "",
                    n = e.state?.messageId || null,
                    r = e.state?.index || 0,
                    o = e.state?.editMode || !1;
                return t ? a.createElement(S, { conversationKey: t, defaultEditMode: o, indexArg: r, messageId: n }) : a.createElement(h.Z, { to: "/home" });
            }
            const I = [],
                w = [],
                x = [];
            function S({ conversationKey: e, defaultEditMode: t, indexArg: n, messageId: c }) {
                (0, E.n)(!0);
                const [Z, S] = a.useState(t),
                    z = (0, i.useHistory)(),
                    M = (0, f.ZP)(),
                    P = a.useCallback(() => {
                        z.goBack();
                    }, [z]),
                    L = e === M.conversationKey,
                    R = L ? M.messageIds : I,
                    B = L && (M.status === g.Q_.TYPING || M.status === g.Q_.WAITING),
                    H = a.useMemo(() => (B ? [...R, null] : R), [B, R]),
                    T = H.length,
                    U = c || H[H.length - 1],
                    j = (0, p.bD)(e),
                    A = (0, u.v9)((e) => j.selectMessageById(e, T ? U : null)),
                    F = A.fileAttachments || w,
                    D = A.intermediateImageResults || x,
                    O = a.useMemo(() => (0, s.Z)([...D.map((e) => e.imageIdStr), ...F.map((e) => e.mediaId)]).filter(Boolean), [F, D]),
                    W = a.useMemo(() => F.map((e) => e.url).filter(Boolean), [F]),
                    [K, G] = a.useState({ width: 0, height: 0 }),
                    N = Math.min(1, Math.max(C / K.width || 0, k / K.height || 0)),
                    [$, V] = a.useState(F.map(() => null)),
                    q = a.useCallback(
                        ({ nativeEvent: { layout: e } }) => {
                            (e.width === K.width && e.height === K.height) || G({ width: e.width, height: e.height });
                        },
                        [G, K],
                    ),
                    [J, Q] = a.useState(0),
                    X = O[J],
                    Y = W[J],
                    ee = F.find((e) => e.mediaId === X) ?? { fileName: "image", mimeType: "image/jpeg" },
                    te = (0, b.N6)(ee);
                if (!T) return a.createElement(h.Z, { to: "/home" });
                const ne = Z ? a.createElement(b.eQ, { contentUrl: te || "", conversationKey: e, grokFile: ee, onSend: P, setEditMode: S }) : a.createElement(b.rO, { allMediaIds: O, allMediaUrls: W, contentUrl: te, isLoading: !te, mediaId: X, mediaUrl: Y, setEditMode: S });
                return a.createElement(
                    d.Z.Configure,
                    { headerless: !0 },
                    a.createElement(
                        l.Z,
                        { backgroundColor: (0, m.L$)(), footerButtons: ne, forceDominantButtonColor: !0, onCloseButtonPress: P },
                        a.createElement(
                            r.Z,
                            { onLayout: q, style: _.flex },
                            K.width &&
                                K.height &&
                                a.createElement(
                                    o.Z,
                                    { contentPadding: 1, onScroll: (e) => Q(Math.round(e.next / K.width)), scrollToCenter: !0, style: [K, _.center], visibleItemIndex: n, withAddedNavButtonClickArea: !0, withGlobalKeyboardNavigation: !0, withScrollIntoView: !1 },
                                    F.map((e, t) => {
                                        const n = O[t],
                                            i = F.find((e) => e.mediaId === n) ?? { fileName: "image", mimeType: "image/jpeg" },
                                            o = D.filter((e) => e.imageIdStr === n),
                                            c = B ? A.expectedImageAspectRatio || v : $[t] || v,
                                            s = $[t] || B ? Math.min(K.width, K.height * c) * N : void 0;
                                        return a.createElement(
                                            r.Z,
                                            { key: `slot_${t}`, style: [K, _.center] },
                                            a.createElement(y.Z, {
                                                aspectRatio: A.expectedImageAspectRatio,
                                                centerJustify: !0,
                                                file: i,
                                                height: K.height * N,
                                                intermediateResults: o,
                                                isLoading: B,
                                                key: `image_${t}`,
                                                onClick: () => {},
                                                onImageSize: (e, n) => {
                                                    if (e && n) {
                                                        const a = e / n;
                                                        V((e) => {
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
                i = n(107267),
                o = n(167630),
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
                        h = (0, i.useLocation)(),
                        f = h.state?.file ?? void 0,
                        E = (0, u.I0)(),
                        [b, C] = a.useState(!1),
                        [k, v] = a.useState(s ? void 0 : (f?.url ?? void 0)),
                        Z = (0, i.useHistory)();
                    a.useEffect(() => {
                        if (!s) return;
                        const e = `https://api.x.com/2/grok/attachment.json?mediaId=${s}`;
                        C(!0),
                            E((0, p.X)(e))
                                .then((e) => {
                                    if (e) {
                                        const t = URL.createObjectURL(e);
                                        v(t);
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
                        w = a.useMemo(() => (k ? { uri: k } : void 0), [k]);
                    return a.createElement(d.Z.Configure, { headerless: !0 }, a.createElement(l.Z, { backgroundColor: (0, m.L$)(), forceDominantButtonColor: !0, onCloseButtonPress: I }, a.createElement(r.Z, { style: y.container }, b ? a.createElement(o.Z, null) : a.createElement(c.Z, { onLoad: () => n(1), resizeMode: "center", source: w, style: [y.image, y.imageTransition, { opacity: t }] }))));
                },
                y = s.default.create((e) => ({ container: { padding: e.spaces.space16, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, image: { width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }, imageTransition: { transition: "opacity 100ms ease-in-out" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-c69e90f3.77b1104a.js.map
