"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerticalGridItemHandler"],
    {
        395267: (e, t, r) => {
            r.r(t), r.d(t, { default: () => _ });
            var o = r(459643),
                l = r(942893),
                a = r(351322),
                n = r(202784),
                i = r(118101),
                c = r(725516),
                s = r(807896),
                d = r(325686),
                p = r(293723),
                m = r(731708),
                u = r(58881),
                b = r(530732),
                h = r(392237),
                g = r(165822);
            const f = h.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.cellBackground, justifyContent: "space-between" }, icon: { alignSelf: "flex-end", color: e.colors.white, marginEnd: e.spaces.space12, paddingTop: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, border: { flexGrow: 1, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium }, containerClicked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary, borderWidth: e.borderWidths.medium }, containerUnclicked: { flexDirection: "column-reverse" }, text: { alignSelf: "flex-start", bottom: 0, marginBottom: e.spaces.space12, marginHorizontal: e.spaces.space12, position: "absolute" }, mainContainer: { padding: 0 }, wrapper: { padding: e.spaces.space4 } })),
                y = ({ "aria-label": e, isSelected: t, link: r, onClick: o, text: l }) => {
                    const a = t ? f.containerClicked : f.containerUnclicked,
                        i = u.Z.generate({ backgroundColor: t ? h.default.theme.colors.primary : "transparent", color: t ? h.default.theme.colors.white : h.default.theme.colors.primary }),
                        c = n.createElement(d.Z, { style: f.base }, n.createElement(b.Z, { "aria-label": e, interactiveStyles: i, style: [f.border, a] }, t ? n.createElement(p.default, { style: f.icon }) : null, n.createElement(m.ZP, { color: t ? "whiteOnColor" : "text", numberOfLines: 2, style: f.text, weight: "bold" }, l)));
                    return n.createElement(d.Z, { style: f.wrapper }, n.createElement(g.Z, { "aria-label": e, containerStyle: f.mainContainer, link: r, onClick: o, upper: c, withInteractiveStyling: !0 }));
                },
                w = h.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.primary, justifyContent: "center" }, centerTile: { margin: e.spaces.space8 }, container: { padding: 0, borderRadius: e.borderRadii.large }, wrapper: { padding: e.spaces.space4, borderRadius: e.borderRadii.large } })),
                v = ({ "aria-label": e, link: t, onClick: r, text: o }) => {
                    const l = u.Z.generate({ backgroundColor: h.default.theme.colors.primary, color: h.default.theme.colors.white }),
                        a = n.createElement(b.Z, { "aria-label": e, interactiveStyles: l, style: w.base }, n.createElement(m.ZP, { align: "center", color: "whiteOnColor", numberOfLines: 3, size: "headline2", style: w.centerTile, weight: "bold" }, o));
                    return n.createElement(d.Z, { style: w.wrapper }, n.createElement(g.Z, { "aria-label": e, containerStyle: w.container, link: t, onClick: r, upper: a, withInteractiveStyling: !0 }));
                };
            var C = r(111677),
                Z = r.n(C),
                k = r(324688),
                E = r(233391),
                S = r(288955),
                x = r(71620),
                z = r(668214),
                R = r(466380);
            const I = (0, z.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("TOPIC_TILE_CONTEXT"), follow: R.Z.follow, unfollow: R.Z.unfollow }))
                    .withAnalytics(),
                T = Z().je808a17,
                H = Z().ge8f3043,
                L = Z().aa576cbf,
                F = I((e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, follow: o, isRecommended: l, style: a, topic: c, unfollow: d, url: p } = e,
                        { following: m, id: u, name: b } = c,
                        h = m ? L({ topicName: b }) : H({ topicName: b }),
                        g = n.useRef(!1),
                        f = (e, t, r) => (c.following ? e(C(r)) : e(w(t))),
                        w = (e) => (l) => {
                            o(c.id)
                                .catch(r())
                                .then(e && e(c.id)),
                                t.scribeAction("follow");
                        },
                        C = (e) => (o) => {
                            d(c.id)
                                .catch(r())
                                .then(e && e(c.id)),
                                t.scribeAction("unfollow");
                        },
                        Z = (e) => {
                            t.scribeAction("click");
                        };
                    return n.createElement(S.Z, { customText: b, displayMode: E.BH.topic }, (e) =>
                        n.createElement(k.m.Consumer, null, ({ onFollow: t, onInitialize: r, onUnfollow: o }) => {
                            r && !g.current && (r(u, m), (g.current = !0));
                            const c = l
                                ? ((e, t, r) => ({ "aria-label": h, onClick: f(e, t, r), text: b }))(e, t, o)
                                : ((e) => {
                                      return { "aria-label": T({ topicName: b }), onClick: e(Z), link: p?.url || ((t = u), `/i/topics/${t}`), text: b };
                                      var t;
                                  })(e);
                            return n.createElement(n.Fragment, null, a === i.pI.DoubleStateDefault ? n.createElement(y, (0, s.Z)({}, c, { isSelected: m })) : n.createElement(v, c));
                        }),
                    );
                }),
                A = (e, t) => {
                    if (t.entry.content.content.topicTile) return R.Z.select(e, t.entry.content.content?.topicTile.topicId);
                },
                D = ({ entry: e, feedbackItems: t, module: r, topic: o }) => {
                    const l = (0, c.z)(),
                        { functionalityType: a, style: s, url: d } = e.content.content.topicTile,
                        p = a === i.sv.Recommendation;
                    return (
                        n.useEffect(() => {
                            l.scribe({ action: "impression" });
                        }, [l]),
                        o ? n.createElement(F, { isRecommended: p, style: s, topic: o, url: d }) : null
                    );
                },
                M = (0, z.Z)()
                    .propsFromState(() => ({ topic: A }))
                    .withAnalytics()(n.memo(D)),
                _ = a
                    .iH({
                        component: M,
                        shouldDisplayBorder: (0, o.Z)(!1),
                        isFocusable: (0, o.Z)(!0),
                        getScribeDataItem(e) {
                            const { topicId: t } = e.content.content.topicTile;
                            return l.Z.forTopic(t, e.itemMetadata.clientEventInfo);
                        },
                    })
                    .getHandler();
        },
        324688: (e, t, r) => {
            r.d(t, { m: () => o });
            const o = r(202784).createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 });
        },
        165822: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                l = r(325686),
                a = r(58881),
                n = r(530732),
                i = r(392237);
            const c = i.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                s = ({ "aria-label": e, containerStyle: t, disabled: r, interactiveStyles: s, isCompact: d, link: p, lower: m, onClick: u, stackLayoutLowerStyle: b, stackLayoutUpperStyle: h, upper: g, withInsetFocusRing: f = !0, withInteractiveStyling: y = !1 }) => {
                    const w = s ?? a.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: f }),
                        v = o.createElement(o.Fragment, null, o.createElement(l.Z, { style: [c.defaultUpperContainerStyle, h, d && { height: "auto" }] }, g), m ? o.createElement(l.Z, { style: [c.defaultLowerContainerStyle, b] }, m) : null);
                    return o.createElement(n.Z, { "aria-label": e, disabled: r, interactive: y, interactiveStyles: y ? w : void 0, link: p, onClick: u, style: [c.root, t] }, v);
                };
        },
        41065: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerticalGridItemHandler.144e7f9a.js.map
