"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ConversationGapHandler"],
    {
        258132: (e, t, n) => {
            n.d(t, { Z: () => v });
            var a = n(202784),
                o = n(325686),
                i = n(731708),
                s = n(872405),
                r = n(981788),
                l = n(952428),
                c = n(392237),
                d = n(167630),
                p = n(111677);
            const h = n.n(p)().aebb6546,
                g = c.default.create((e) => ({ connectors: { zIndex: 1 }, content: { flexGrow: 1 }, conversationConnector: { alignItems: "center", display: "flex", position: "relative", height: e.spaces.space36, flexGrow: 0 }, conversationLine: { backgroundColor: e.colors.gray200, width: e.componentDimensions.conversationLineWidth, height: e.spaces.space8 }, dot: { display: "block", backgroundColor: e.colors.gray200, height: e.componentDimensions.conversationLineWidth, width: e.componentDimensions.conversationLineWidth }, ellipsis: { alignItems: "center", justifyContent: "space-between", height: e.spaces.space16, marginVertical: "auto" }, ellipsisWithConversationLines: { height: e.spaces.space12 }, enlargeTouchTarget: { paddingVertical: e.spaces.space8 }, gap: { overflow: "hidden" }, hoverBox: { flexGrow: 1, marginStart: e.spaces.space12, paddingStart: e.spaces.space4 }, hoverBoxIndented: { marginStart: 0 }, hoverBoxTopLevel: { marginStart: 0 }, loadingIndicator: { paddingVertical: e.spaces.space4 }, treeContent: { paddingHorizontal: e.spaces.space4 }, treeGap: { flexDirection: "row", paddingStart: e.spaces.space16 }, treeGapTopLevel: { paddingStart: 0 } })),
                m = a.createElement(d.Z, { "aria-label": h, style: g.loadingIndicator }),
                v = ({ indents: e, isLoading: t, label: n, link: c, onClick: d, withConversationLines: p = !1, withElbow: h }) => {
                    const v = a.createElement(i.ZP, { color: "link", style: g.enlargeTouchTarget }, n),
                        u = a.createElement(s.Z, { avatarCell: e ? void 0 : a.createElement(a.Fragment, null, p && a.createElement(o.Z, { style: g.conversationLine, testID: "conversationLine" }), a.createElement(o.Z, { style: [g.ellipsis, p && g.ellipsisWithConversationLines] }, a.createElement(o.Z, { style: g.dot }), a.createElement(o.Z, { style: g.dot }), a.createElement(o.Z, { style: g.dot })), p && a.createElement(o.Z, { style: g.conversationLine, testID: "conversationLine" })), avatarCellStyle: g.conversationConnector, cellStyle: [g.content, e && g.treeContent] }, t ? m : v);
                    return a.createElement(o.Z, { style: [g.gap, e && g.treeGap, e && 0 === e.length && g.treeGapTopLevel] }, e ? a.createElement(r.Z, { indents: e, paddingTop: 5, smallFirstCell: !1, style: g.connectors, wideElbow: 1 === e.length, withElbow: !!h }) : null, d || c ? a.createElement(l.Z, { link: t ? void 0 : c, onClick: t ? void 0 : d, style: [g.hoverBox, e && 0 === e.length && g.hoverBoxTopLevel, e && e.length > 1 && g.hoverBoxIndented], withInteractiveStyling: !t }, u) : u);
                };
        },
        665720: (e, t, n) => {
            n.r(t), n.d(t, { default: () => b });
            var a = n(459643),
                o = n(351322),
                i = n(202784),
                s = n(111677),
                r = n.n(s),
                l = n(258132),
                c = n(725516),
                d = n(443781),
                p = n(286834),
                h = n(668214),
                g = n(836255);
            const m = (e, t) => {
                    let n;
                    return (0, p.Z)(t.entry.content.allTweetIds, (t, a) => {
                        const o = g.Z.select(e, t);
                        return !o || (0 === a ? ((n = o.id_str), !0) : !!o.self_thread && o.self_thread.id_str === n);
                    });
                },
                v = (0, h.Z)().propsFromState(() => ({ isSelfThread: m })),
                u = r().i569ff3e,
                w = r().c837fcaa,
                C = (e) => {
                    const { entry: t, isSelfThread: n } = e,
                        a = (0, c.z)(),
                        { featureSwitches: o } = i.useContext(d.rC),
                        s = o.isTrue("media_edge_to_edge_content_enabled"),
                        r = `/i/status/${t.content.focalTweetId}`,
                        p = n ? "see_more" : "gap",
                        h = i.useCallback(() => {
                            a.scribe({ action: "click", element: p });
                        }, [a, p]),
                        g = i.useCallback(() => {
                            a.scribe({ action: "impression", element: p });
                        }, [a, p]);
                    return (
                        i.useEffect(() => {
                            g();
                        }, [g]),
                        i.createElement(l.Z, { label: n ? u : w, link: r, onClick: h, withConversationLines: s })
                    );
                },
                f = v(i.memo(C)),
                b = o.iH({ component: f, defaultScribeNamespace: { component: "timeline_conversation" }, shouldDisplayBorder: (0, a.Z)(!1) }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ConversationGapHandler.038b13fa.js.map
