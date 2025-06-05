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
                u = r(731708),
                m = r(58881),
                b = r(530732),
                f = r(392237),
                y = r(165822);
            const g = f.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.cellBackground, justifyContent: "space-between" }, icon: { alignSelf: "flex-end", color: e.colors.white, marginEnd: e.spaces.space12, paddingTop: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, border: { flexGrow: 1, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium }, containerClicked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary, borderWidth: e.borderWidths.medium }, containerUnclicked: { flexDirection: "column-reverse" }, text: { alignSelf: "flex-start", bottom: 0, marginBottom: e.spaces.space12, marginHorizontal: e.spaces.space12, position: "absolute" }, mainContainer: { padding: 0 }, wrapper: { padding: e.spaces.space4 } })),
                w = ({ "aria-label": e, isSelected: t, link: r, onClick: o, text: l }) => {
                    const a = t ? g.containerClicked : g.containerUnclicked,
                        i = m.Z.generate({ backgroundColor: t ? f.default.theme.colors.primary : "transparent", color: t ? f.default.theme.colors.white : f.default.theme.colors.primary }),
                        c = n.createElement(d.Z, { style: g.base }, n.createElement(b.Z, { "aria-label": e, interactiveStyles: i, style: [g.border, a] }, t ? n.createElement(p.default, { style: g.icon }) : null, n.createElement(u.ZP, { color: t ? "whiteOnColor" : "text", numberOfLines: 2, style: g.text, weight: "bold" }, l)));
                    return n.createElement(d.Z, { style: g.wrapper }, n.createElement(y.Z, { "aria-label": e, containerStyle: g.mainContainer, link: r, onClick: o, upper: c, withInteractiveStyling: !0 }));
                },
                h = f.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.primary, justifyContent: "center" }, centerTile: { margin: e.spaces.space8 }, container: { padding: 0, borderRadius: e.borderRadii.large }, wrapper: { padding: e.spaces.space4, borderRadius: e.borderRadii.large } })),
                C = ({ "aria-label": e, link: t, onClick: r, text: o }) => {
                    const l = m.Z.generate({ backgroundColor: f.default.theme.colors.primary, color: f.default.theme.colors.white }),
                        a = n.createElement(b.Z, { "aria-label": e, interactiveStyles: l, style: h.base }, n.createElement(u.ZP, { align: "center", color: "whiteOnColor", numberOfLines: 3, size: "headline2", style: h.centerTile, weight: "bold" }, o));
                    return n.createElement(d.Z, { style: h.wrapper }, n.createElement(y.Z, { "aria-label": e, containerStyle: h.container, link: t, onClick: r, upper: a, withInteractiveStyling: !0 }));
                };
            var k = r(111677),
                E = r.n(k),
                Z = r(324688),
                v = r(233391),
                S = r(288955),
                x = r(71620),
                R = r(668214),
                I = r(466380);
            const T = (0, R.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("TOPIC_TILE_CONTEXT"), follow: I.Z.follow, unfollow: I.Z.unfollow }))
                    .withAnalytics(),
                L = E().je808a17,
                F = E().ge8f3043,
                A = E().aa576cbf,
                _ = T((e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, follow: o, isRecommended: l, style: a, topic: c, unfollow: d, url: p } = e,
                        { following: u, id: m, name: b } = c,
                        f = u ? A({ topicName: b }) : F({ topicName: b }),
                        y = n.useRef(!1),
                        g = (e, t, r) => (c.following ? e(k(r)) : e(h(t))),
                        h = (e) => (l) => {
                            o(c.id)
                                .catch(r())
                                .then(e && e(c.id)),
                                t.scribeAction("follow");
                        },
                        k = (e) => (o) => {
                            d(c.id)
                                .catch(r())
                                .then(e && e(c.id)),
                                t.scribeAction("unfollow");
                        },
                        E = (e) => {
                            t.scribeAction("click");
                        };
                    return n.createElement(S.Z, { customText: b, displayMode: v.BH.topic }, (e) =>
                        n.createElement(Z.m.Consumer, null, ({ onFollow: t, onInitialize: r, onUnfollow: o }) => {
                            r && !y.current && (r(m, u), (y.current = !0));
                            const c = l
                                ? ((e, t, r) => ({ "aria-label": f, onClick: g(e, t, r), text: b }))(e, t, o)
                                : ((e) => {
                                      return { "aria-label": L({ topicName: b }), onClick: e(E), link: p?.url || ((t = m), `/i/topics/${t}`), text: b };
                                      var t;
                                  })(e);
                            return n.createElement(n.Fragment, null, a === i.pI.DoubleStateDefault ? n.createElement(w, (0, s.Z)({}, c, { isSelected: u })) : n.createElement(C, c));
                        }),
                    );
                }),
                z = (e, t) => {
                    if (t.entry.content.content.topicTile) return I.Z.select(e, t.entry.content.content?.topicTile.topicId);
                },
                H = ({ entry: e, feedbackItems: t, module: r, topic: o }) => {
                    const l = (0, c.z)(),
                        { functionalityType: a, style: s, url: d } = e.content.content.topicTile,
                        p = a === i.sv.Recommendation;
                    return (
                        n.useEffect(() => {
                            l.scribe({ action: "impression" });
                        }, [l]),
                        o ? n.createElement(_, { isRecommended: p, style: s, topic: o, url: d }) : null
                    );
                },
                U = (0, R.Z)()
                    .propsFromState(() => ({ topic: z }))
                    .withAnalytics()(n.memo(H)),
                D = a
                    .iH({
                        component: U,
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
                s = ({ "aria-label": e, containerStyle: t, disabled: r, interactiveStyles: s, isCompact: d, link: p, lower: u, onClick: m, stackLayoutLowerStyle: b, stackLayoutUpperStyle: f, upper: y, withInsetFocusRing: g = !0, withInteractiveStyling: w = !1 }) => {
                    const h = s ?? a.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: g }),
                        C = o.createElement(o.Fragment, null, o.createElement(l.Z, { style: [c.defaultUpperContainerStyle, f, d && { height: "auto" }] }, y), u ? o.createElement(l.Z, { style: [c.defaultLowerContainerStyle, b] }, u) : null);
                    return o.createElement(n.Z, { "aria-label": e, disabled: r, interactive: w, interactiveStyles: w ? h : void 0, link: p, onClick: m, style: [c.root, t] }, C);
                };
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerticalGridItemHandler.b088b18a.js.map
