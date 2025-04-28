"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerticalGridItemHandler"],
    {
        395267: (e, t, r) => {
            r.r(t), r.d(t, { default: () => D });
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
            var C = r(674132),
                k = r.n(C),
                Z = r(324688),
                E = r(233391),
                S = r(288955),
                x = r(71620),
                z = r(668214),
                R = r(466380);
            const I = (0, z.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("TOPIC_TILE_CONTEXT"), follow: R.Z.follow, unfollow: R.Z.unfollow }))
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
                    if (t.entry.content.content.topicTile) return R.Z.select(e, t.entry.content.content?.topicTile.topicId);
                },
                M = ({ entry: e, feedbackItems: t, module: r, topic: o }) => {
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
                _ = (0, z.Z)()
                    .propsFromState(() => ({ topic: A }))
                    .withAnalytics()(n.memo(M)),
                D = a
                    .iH({
                        component: _,
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
                s = ({ "aria-label": e, containerStyle: t, disabled: r, isCompact: s, link: d, lower: p, onClick: m, stackLayoutLowerStyle: u, stackLayoutUpperStyle: b, upper: h, withInsetFocusRing: f = !0, withInteractiveStyling: g = !1 }) => {
                    const y = a.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: f }),
                        w = o.createElement(o.Fragment, null, o.createElement(l.Z, { style: [c.defaultUpperContainerStyle, b, s && { height: "auto" }] }, h), p ? o.createElement(l.Z, { style: [c.defaultLowerContainerStyle, u] }, p) : null);
                    return o.createElement(n.Z, { "aria-label": e, disabled: r, interactive: g, interactiveStyles: g ? y : void 0, link: d, onClick: m, style: [c.root, t] }, w);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerticalGridItemHandler.6f71d11a.js.map
