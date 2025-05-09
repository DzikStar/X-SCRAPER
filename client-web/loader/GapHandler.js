"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GapHandler"],
    {
        258132: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(325686),
                a = n(731708),
                i = n(872405),
                s = n(530530),
                c = n(952428),
                l = n(392237),
                d = n(167630),
                p = n(674132);
            const h = n.n(p)().aebb6546,
                u = l.default.create((e) => ({ connectors: { zIndex: 1 }, content: { flexGrow: 1 }, conversationConnector: { alignItems: "center", display: "flex", position: "relative", height: e.spaces.space36, flexGrow: 0 }, conversationLine: { backgroundColor: e.colors.gray200, width: e.componentDimensions.conversationLineWidth, height: e.spaces.space8 }, dot: { display: "block", backgroundColor: e.colors.gray200, height: e.componentDimensions.conversationLineWidth, width: e.componentDimensions.conversationLineWidth }, ellipsis: { alignItems: "center", justifyContent: "space-between", height: e.spaces.space16, marginVertical: "auto" }, ellipsisWithConversationLines: { height: e.spaces.space12 }, enlargeTouchTarget: { paddingVertical: e.spaces.space8 }, gap: { overflow: "hidden" }, hoverBox: { flexGrow: 1, marginStart: e.spaces.space12, paddingStart: e.spaces.space4 }, hoverBoxIndented: { marginStart: 0 }, hoverBoxTopLevel: { marginStart: 0 }, loadingIndicator: { paddingVertical: e.spaces.space4 }, treeContent: { paddingHorizontal: e.spaces.space4 }, treeGap: { flexDirection: "row", paddingStart: e.spaces.space16 }, treeGapTopLevel: { paddingStart: 0 } })),
                m = o.createElement(d.Z, { "aria-label": h, style: u.loadingIndicator }),
                g = ({ indents: e, isLoading: t, label: n, link: l, onClick: d, withConversationLines: p = !1, withElbow: h }) => {
                    const g = o.createElement(a.ZP, { color: "link", style: u.enlargeTouchTarget }, n),
                        v = o.createElement(i.Z, { avatarCell: e ? void 0 : o.createElement(o.Fragment, null, p && o.createElement(r.Z, { style: u.conversationLine, testID: "conversationLine" }), o.createElement(r.Z, { style: [u.ellipsis, p && u.ellipsisWithConversationLines] }, o.createElement(r.Z, { style: u.dot }), o.createElement(r.Z, { style: u.dot }), o.createElement(r.Z, { style: u.dot })), p && o.createElement(r.Z, { style: u.conversationLine, testID: "conversationLine" })), avatarCellStyle: u.conversationConnector, cellStyle: [u.content, e && u.treeContent] }, t ? m : g);
                    return o.createElement(r.Z, { style: [u.gap, e && u.treeGap, e && 0 === e.length && u.treeGapTopLevel] }, e ? o.createElement(s.Z, { indents: e, paddingTop: 5, smallFirstCell: !1, style: u.connectors, wideElbow: 1 === e.length, withElbow: !!h }) : null, d || l ? o.createElement(c.Z, { link: t ? void 0 : l, onClick: t ? void 0 : d, style: [u.hoverBox, e && 0 === e.length && u.hoverBoxTopLevel, e && e.length > 1 && u.hoverBoxIndented], withInteractiveStyling: !t }, v) : v);
                };
        },
        178372: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                r = n(325686),
                a = n(952428),
                i = n(167630),
                s = n(593866),
                c = n(731708),
                l = n(392237),
                d = n(674132),
                p = n.n(d);
            const h = p().fe76cacc,
                u = p().aebb6546;
            function m(e) {
                const { children: t = h, isLoading: n, link: l, onClick: d, isTransparentCursor: p } = e;
                return o.createElement(a.Z, { link: l, onClick: d, style: g.root }, o.createElement(r.Z, { style: g.inner }, n ? o.createElement(i.Z, { "aria-label": u }) : p ? o.createElement(o.Fragment, null, o.createElement(s.Z, { containerStyle: g.cursor, items: [{ description: "These may include replies that are potentially spammy, harmful, or offensive.", label: "Other replies" }] }), o.createElement(c.ZP, { children: "View Replies", color: "link", style: g.link })) : o.createElement(c.ZP, { align: "center", children: t, color: "link" })));
            }
            const g = l.default.create((e) => ({ root: { justifyContent: "center", minHeight: e.spaces.space48, width: "100%" }, inner: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, cursor: { paddingTop: e.spaces.space20, paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, link: { paddingBottom: e.spaces.space20, paddingHorizontal: e.spaces.space16 } }));
        },
        329763: (e, t, n) => {
            n.d(t, { Z: () => M });
            var o = n(459643),
                r = n(351322),
                a = n(807896),
                i = n(202784),
                s = n(178372),
                c = n(674132),
                l = n.n(c),
                d = n(258132);
            const p = l().fe76cacc;
            class h extends i.PureComponent {
                render() {
                    const { children: e, conversationTreeMetadata: t, isLoading: n, link: o, onClick: r } = this.props,
                        a = t && t.ancestorConnector,
                        s = t && t.indents;
                    return i.createElement(d.Z, { indents: s, isLoading: n, label: e, link: o, onClick: r, withElbow: s ? "side" === a : void 0 });
                }
            }
            h.defaultProps = { children: p };
            const u = h;
            class m extends i.PureComponent {
                render() {
                    const { children: e, conversationTreeMetadata: t, isLoading: n, link: o, onClick: r } = this.props;
                    return t ? i.createElement(u, this.props) : i.createElement(s.Z, { children: e, isLoading: n, link: o, onClick: r });
                }
            }
            const g = m;
            var v = n(946409),
                C = n(192337),
                y = n(177371),
                w = n(71620),
                T = n(87063),
                f = n(668214);
            const Z = (e, t) => t.module.selectCursorFetchStatus(e, t.entry),
                k = (0, f.Z)()
                    .propsFromState(() => ({ fetchStatus: Z }))
                    .adjustStateProps(({ fetchStatus: e }) => ({ isLoading: e === T.Z.LOADING }))
                    .propsFromActions(({ module: e }) => ({ fetchCursor: e.fetchCursor, createLocalApiErrorHandler: (0, w.zr)("URT_CURSOR") }))
                    .withAnalytics(),
                E = { component: "cursor", action: "click" },
                b = { component: "cursor", action: "impression" },
                L = { action: "get_middle" },
                x = { component: "gap", action: "impression" },
                S = { [C.CursorType.ShowMoreThreads]: { event_info: "ShowMoreThreads" }, [C.CursorType.ShowMoreThreadsPrompt]: { event_info: "ShowMoreThreadsPrompt" } },
                I = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: n, entry: o, fetchCursor: r, isLoading: c } = e,
                        { cursorType: l, displayTreatment: d, url: p } = o.content,
                        h = p && (0, v.s9)(p),
                        m = S[l];
                    i.useEffect(() => {
                        const e = l === C.CursorType.Gap ? x : b;
                        t.scribe({ ...e, data: m });
                    }, []);
                    const w = i.useCallback(
                            (e) => {
                                r(o).then(e).catch(n());
                            },
                            [n, o, r],
                        ),
                        T = i.useCallback(() => {
                            const e = l === C.CursorType.Gap ? L : E;
                            t.scribe({ ...e, data: m });
                        }, [t, l, m]),
                        f = {
                            isLoading: c,
                            onClick: i.useCallback(() => {
                                h ? T() : w(T);
                            }, [h, w, T]),
                            link: h,
                        },
                        Z = { ...f, conversationTreeMetadata: o.conversationTreeMetadata },
                        k = d?.actionText;
                    switch (l) {
                        case C.CursorType.Gap:
                            return i.createElement(s.Z, (0, a.Z)({}, f, { children: k }));
                        case C.CursorType.ShowMore:
                            return i.createElement(u, (0, a.Z)({}, Z, { children: k }));
                        case C.CursorType.ShowMoreThreads:
                            return i.createElement(g, (0, a.Z)({}, Z, { children: k }));
                        case C.CursorType.ShowMoreThreadsPrompt: {
                            const e = d?.labelText || null;
                            return i.createElement(y.Z, (0, a.Z)({}, Z, { actionText: o.content.displayTreatment?.actionText }), e);
                        }
                        default:
                            return null;
                    }
                },
                G = k(i.memo(I)),
                M = ({ divider: e, withRuxInjections: t }) =>
                    r
                        .iH({
                            divider: e || { top: !0, bottom: !0 },
                            component: G,
                            isFocusable: (0, o.Z)(!0),
                            shouldDisplayBorder: (e) => {
                                const { conversationTreeMetadata: t } = e;
                                return !t || (!1 === t.descendantConnector && 0 === t.indents.filter((e) => "line" === e.displayType).length);
                            },
                        })
                        .getHandler(() => ({ withRuxInjections: t }));
        },
        17096: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            const o = (0, n(329763).Z)({});
        },
        231748: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            const o = (0, n(329763).Z)({ divider: { top: !1, bottom: !1 } });
        },
        485002: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            var o = n(329763);
            const r = ({ withRuxInjections: e }) => (0, o.Z)({ divider: (e) => (e.conversationTreeMetadata ? { top: !1, bottom: !1 } : { top: !0, bottom: !1 }), withRuxInjections: e });
        },
        16312: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            var o = n(329763);
            const r = ({ withRuxInjections: e }) => (0, o.Z)({ divider: { top: !1, bottom: !1 }, withRuxInjections: e });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GapHandler.904bc37a.js.map
