"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerticalGridItemHandler"],
    {
        395267: (e, t, r) => {
            r.r(t), r.d(t, { default: () => U });
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
                C = ({ "aria-label": e, link: t, onClick: r, text: o }) => {
                    const l = u.Z.generate({ backgroundColor: h.default.theme.colors.primary, color: h.default.theme.colors.white }),
                        a = n.createElement(b.Z, { "aria-label": e, interactiveStyles: l, style: w.base }, n.createElement(m.ZP, { align: "center", color: "whiteOnColor", numberOfLines: 3, size: "headline2", style: w.centerTile, weight: "bold" }, o));
                    return n.createElement(d.Z, { style: w.wrapper }, n.createElement(f.Z, { "aria-label": e, containerStyle: w.container, link: t, onClick: r, upper: a, withInteractiveStyling: !0 }));
                };
            var v = r(674132),
                k = r.n(v),
                Z = r(324688),
                E = r(233391),
                S = r(288955),
                x = r(71620),
                R = r(668214),
                I = r(466380);
            const T = (0, R.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("TOPIC_TILE_CONTEXT"), follow: I.Z.follow, unfollow: I.Z.unfollow }))
                    .withAnalytics(),
                z = k().je808a17,
                L = k().ge8f3043,
                F = k().aa576cbf,
                H = T((e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, follow: o, isRecommended: l, style: a, topic: c, unfollow: d, url: p } = e,
                        { following: m, id: u, name: b } = c,
                        h = m ? F({ topicName: b }) : L({ topicName: b }),
                        f = n.useRef(!1),
                        g = (e, t, r) => (c.following ? e(v(r)) : e(w(t))),
                        w = (e) => (l) => {
                            o(c.id)
                                .catch(r())
                                .then(e && e(c.id)),
                                t.scribeAction("follow");
                        },
                        v = (e) => (o) => {
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
                                      return { "aria-label": z({ topicName: b }), onClick: e(k), link: p?.url || ((t = u), `/i/topics/${t}`), text: b };
                                      var t;
                                  })(e);
                            return n.createElement(n.Fragment, null, a === i.pI.DoubleStateDefault ? n.createElement(y, (0, s.Z)({}, c, { isSelected: m })) : n.createElement(C, c));
                        }),
                    );
                }),
                A = (e, t) => {
                    if (t.entry.content.content.topicTile) return I.Z.select(e, t.entry.content.content?.topicTile.topicId);
                },
                _ = ({ entry: e, feedbackItems: t, module: r, topic: o }) => {
                    const l = (0, c.z)(),
                        { functionalityType: a, style: s, url: d } = e.content.content.topicTile,
                        p = a === i.sv.Recommendation;
                    return (
                        n.useEffect(() => {
                            l.scribe({ action: "impression" });
                        }, [l]),
                        o ? n.createElement(H, { isRecommended: p, style: s, topic: o, url: d }) : null
                    );
                },
                D = (0, R.Z)()
                    .propsFromState(() => ({ topic: A }))
                    .withAnalytics()(n.memo(_)),
                U = a
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
                s = ({ "aria-label": e, containerStyle: t, disabled: r, isCompact: s, link: d, lower: p, onClick: m, stackLayoutLowerStyle: u, stackLayoutUpperStyle: b, upper: h, withInsetFocusRing: f = !0, withInteractiveStyling: g = !1 }) => {
                    const y = a.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: f }),
                        w = o.createElement(o.Fragment, null, o.createElement(l.Z, { style: [c.defaultUpperContainerStyle, b, s && { height: "auto" }] }, h), p ? o.createElement(l.Z, { style: [c.defaultLowerContainerStyle, u] }, p) : null);
                    return o.createElement(n.Z, { "aria-label": e, disabled: r, interactive: g, interactiveStyles: g ? y : void 0, link: d, onClick: m, style: [c.root, t] }, w);
                };
        },
        971657: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerticalGridItemHandler.35e5816a.js.map
