"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerticalGridItemHandler"],
    {
        395267: (e, t, r) => {
            r.r(t), r.d(t, { default: () => M });
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
                f = r(165822);
            const g = h.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.cellBackground, justifyContent: "space-between" }, icon: { alignSelf: "flex-end", color: e.colors.white, marginEnd: e.spaces.space12, paddingTop: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, border: { flexGrow: 1, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium }, containerClicked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary, borderWidth: e.borderWidths.medium }, containerUnclicked: { flexDirection: "column-reverse" }, text: { alignSelf: "flex-start", bottom: 0, marginBottom: e.spaces.space12, marginHorizontal: e.spaces.space12, position: "absolute" }, mainContainer: { padding: 0 }, wrapper: { padding: e.spaces.space4 } })),
                y = ({ "aria-label": e, isSelected: t, link: r, onClick: o, text: l }) => {
                    const a = t ? g.containerClicked : g.containerUnclicked,
                        i = u.Z.generate({ backgroundColor: t ? h.default.theme.colors.primary : "transparent", color: t ? h.default.theme.colors.white : h.default.theme.colors.primary }),
                        c = n.createElement(d.Z, { style: g.base }, n.createElement(b.Z, { "aria-label": e, interactiveStyles: i, style: [g.border, a] }, t ? n.createElement(p.default, { style: g.icon }) : null, n.createElement(m.ZP, { color: t ? "whiteOnColor" : "text", numberOfLines: 2, style: g.text, weight: "bold" }, l)));
                    return n.createElement(d.Z, { style: g.wrapper }, n.createElement(f.Z, { "aria-label": e, containerStyle: g.mainContainer, link: r, onClick: o, upper: c, withInteractiveStyling: !0 }));
                },
                w = h.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.primary, justifyContent: "center" }, centerTile: { margin: e.spaces.space8 }, container: { padding: 0, borderRadius: e.borderRadii.large }, wrapper: { padding: e.spaces.space4, borderRadius: e.borderRadii.large } })),
                v = ({ "aria-label": e, link: t, onClick: r, text: o }) => {
                    const l = u.Z.generate({ backgroundColor: h.default.theme.colors.primary, color: h.default.theme.colors.white }),
                        a = n.createElement(b.Z, { "aria-label": e, interactiveStyles: l, style: w.base }, n.createElement(m.ZP, { align: "center", color: "whiteOnColor", numberOfLines: 3, size: "headline2", style: w.centerTile, weight: "bold" }, o));
                    return n.createElement(d.Z, { style: w.wrapper }, n.createElement(f.Z, { "aria-label": e, containerStyle: w.container, link: t, onClick: r, upper: a, withInteractiveStyling: !0 }));
                };
            var C = r(111677),
                k = r.n(C),
                Z = r(324688),
                E = r(233391),
                S = r(288955),
                x = r(71620),
                R = r(668214),
                z = r(466380);
            const I = (0, R.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("TOPIC_TILE_CONTEXT"), follow: z.Z.follow, unfollow: z.Z.unfollow }))
                    .withAnalytics(),
                T = k().je808a17,
                H = k().ge8f3043,
                L = k().aa576cbf,
                F = I((e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, follow: o, isRecommended: l, style: a, topic: c, unfollow: d, url: p } = e,
                        { following: m, id: u, name: b } = c,
                        h = m ? L({ topicName: b }) : H({ topicName: b }),
                        f = n.useRef(!1),
                        g = (e, t, r) => (c.following ? e(C(r)) : e(w(t))),
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
                        k = (e) => {
                            t.scribeAction("click");
                        };
                    return n.createElement(S.Z, { customText: b, displayMode: E.BH.topic }, (e) =>
                        n.createElement(Z.m.Consumer, null, ({ onFollow: t, onInitialize: r, onUnfollow: o }) => {
                            r && !f.current && (r(u, m), (f.current = !0));
                            const c = l
                                ? ((e, t, r) => ({ "aria-label": h, onClick: g(e, t, r), text: b }))(e, t, o)
                                : ((e) => {
                                      return { "aria-label": T({ topicName: b }), onClick: e(k), link: p?.url || ((t = u), `/i/topics/${t}`), text: b };
                                      var t;
                                  })(e);
                            return n.createElement(n.Fragment, null, a === i.pI.DoubleStateDefault ? n.createElement(y, (0, s.Z)({}, c, { isSelected: m })) : n.createElement(v, c));
                        }),
                    );
                }),
                A = (e, t) => {
                    if (t.entry.content.content.topicTile) return z.Z.select(e, t.entry.content.content?.topicTile.topicId);
                },
                _ = ({ entry: e, feedbackItems: t, module: r, topic: o }) => {
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
                D = (0, R.Z)()
                    .propsFromState(() => ({ topic: A }))
                    .withAnalytics()(n.memo(_)),
                M = a
                    .iH({
                        component: D,
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
                s = ({ "aria-label": e, containerStyle: t, disabled: r, interactiveStyles: s, isCompact: d, link: p, lower: m, onClick: u, stackLayoutLowerStyle: b, stackLayoutUpperStyle: h, upper: f, withInsetFocusRing: g = !0, withInteractiveStyling: y = !1 }) => {
                    const w = s ?? a.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: g }),
                        v = o.createElement(o.Fragment, null, o.createElement(l.Z, { style: [c.defaultUpperContainerStyle, h, d && { height: "auto" }] }, f), m ? o.createElement(l.Z, { style: [c.defaultLowerContainerStyle, b] }, m) : null);
                    return o.createElement(n.Z, { "aria-label": e, disabled: r, interactive: y, interactiveStyles: y ? w : void 0, link: p, onClick: u, style: [c.root, t] }, v);
                };
        },
        748138: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerticalGridItemHandler.ebda02aa.js.map
