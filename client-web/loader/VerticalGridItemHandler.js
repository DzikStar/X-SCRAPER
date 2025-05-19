"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerticalGridItemHandler"],
    {
        395267: (e, t, r) => {
            r.r(t), r.d(t, { default: () => O });
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
            const w = f.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.cellBackground, justifyContent: "space-between" }, icon: { alignSelf: "flex-end", color: e.colors.white, marginEnd: e.spaces.space12, paddingTop: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, border: { flexGrow: 1, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium }, containerClicked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary, borderWidth: e.borderWidths.medium }, containerUnclicked: { flexDirection: "column-reverse" }, text: { alignSelf: "flex-start", bottom: 0, marginBottom: e.spaces.space12, marginHorizontal: e.spaces.space12, position: "absolute" }, mainContainer: { padding: 0 }, wrapper: { padding: e.spaces.space4 } })),
                g = ({ "aria-label": e, isSelected: t, link: r, onClick: o, text: l }) => {
                    const a = t ? w.containerClicked : w.containerUnclicked,
                        i = m.Z.generate({ backgroundColor: t ? f.default.theme.colors.primary : "transparent", color: t ? f.default.theme.colors.white : f.default.theme.colors.primary }),
                        c = n.createElement(d.Z, { style: w.base }, n.createElement(b.Z, { "aria-label": e, interactiveStyles: i, style: [w.border, a] }, t ? n.createElement(p.default, { style: w.icon }) : null, n.createElement(u.ZP, { color: t ? "whiteOnColor" : "text", numberOfLines: 2, style: w.text, weight: "bold" }, l)));
                    return n.createElement(d.Z, { style: w.wrapper }, n.createElement(y.Z, { "aria-label": e, containerStyle: w.mainContainer, link: r, onClick: o, upper: c, withInteractiveStyling: !0 }));
                },
                h = f.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.primary, justifyContent: "center" }, centerTile: { margin: e.spaces.space8 }, container: { padding: 0, borderRadius: e.borderRadii.large }, wrapper: { padding: e.spaces.space4, borderRadius: e.borderRadii.large } })),
                C = ({ "aria-label": e, link: t, onClick: r, text: o }) => {
                    const l = m.Z.generate({ backgroundColor: f.default.theme.colors.primary, color: f.default.theme.colors.white }),
                        a = n.createElement(b.Z, { "aria-label": e, interactiveStyles: l, style: h.base }, n.createElement(u.ZP, { align: "center", color: "whiteOnColor", numberOfLines: 3, size: "headline2", style: h.centerTile, weight: "bold" }, o));
                    return n.createElement(d.Z, { style: h.wrapper }, n.createElement(y.Z, { "aria-label": e, containerStyle: h.container, link: t, onClick: r, upper: a, withInteractiveStyling: !0 }));
                };
            var k = r(332920),
                E = r.n(k),
                Z = r(324688),
                S = r(233391),
                v = r(288955),
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
                        w = (e, t, r) => (c.following ? e(k(r)) : e(h(t))),
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
                    return n.createElement(v.Z, { customText: b, displayMode: S.BH.topic }, (e) =>
                        n.createElement(Z.m.Consumer, null, ({ onFollow: t, onInitialize: r, onUnfollow: o }) => {
                            r && !y.current && (r(m, u), (y.current = !0));
                            const c = l
                                ? ((e, t, r) => ({ "aria-label": f, onClick: w(e, t, r), text: b }))(e, t, o)
                                : ((e) => {
                                      return { "aria-label": L({ topicName: b }), onClick: e(E), link: p?.url || ((t = m), `/i/topics/${t}`), text: b };
                                      var t;
                                  })(e);
                            return n.createElement(n.Fragment, null, a === i.pI.DoubleStateDefault ? n.createElement(g, (0, s.Z)({}, c, { isSelected: u })) : n.createElement(C, c));
                        }),
                    );
                }),
                H = (e, t) => {
                    if (t.entry.content.content.topicTile) return I.Z.select(e, t.entry.content.content?.topicTile.topicId);
                },
                U = ({ entry: e, feedbackItems: t, module: r, topic: o }) => {
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
                z = (0, R.Z)()
                    .propsFromState(() => ({ topic: H }))
                    .withAnalytics()(n.memo(U)),
                O = a
                    .iH({
                        component: z,
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
                s = ({ "aria-label": e, containerStyle: t, disabled: r, isCompact: s, link: d, lower: p, onClick: u, stackLayoutLowerStyle: m, stackLayoutUpperStyle: b, upper: f, withInsetFocusRing: y = !0, withInteractiveStyling: w = !1 }) => {
                    const g = a.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: y }),
                        h = o.createElement(o.Fragment, null, o.createElement(l.Z, { style: [c.defaultUpperContainerStyle, b, s && { height: "auto" }] }, f), p ? o.createElement(l.Z, { style: [c.defaultLowerContainerStyle, m] }, p) : null);
                    return o.createElement(n.Z, { "aria-label": e, disabled: r, interactive: w, interactiveStyles: w ? g : void 0, link: d, onClick: u, style: [c.root, t] }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerticalGridItemHandler.aa3a80ca.js.map
