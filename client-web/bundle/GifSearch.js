"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch"],
    {
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => m });
            var r = o(202784),
                a = o(325686),
                i = o(108362),
                n = o(386802),
                l = o(392237),
                c = o(652904),
                d = o(555079),
                s = o(625661),
                h = o(449067),
                u = o(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: n, hideBackButton: l, history: c, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: b, rightControl: y, secondaryBar: B, subtitle: f, title: k } = this.props,
                                { isModal: Z } = this.context;
                            return r.createElement(a.Z, { style: Z ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, r.createElement(s.ZP, { backButtonType: o || (Z ? "close" : "back"), backLocation: i, centerTitle: n, fixed: !Z, hideBackButton: l, history: c, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: b, ref: e, rightControl: y, secondaryBar: B, style: [Z && p.appBarModal, t], subtitle: f, title: k, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: l, isFullWidth: d, isLarge: s, renderHeader: m, title: b, withoutBottomBarMobile: y } = this.props,
                        { isModal: B } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(c.Z, null, r.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: b }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, B && p.rootModal] }, !B && f, r.createElement(i.Z, { isFullWidth: d, isLarge: s, style: [p.container, B && p.containerModal, n] }, B ? r.createElement(u.Z, { style: p.viewport }, f, o) : o), t ? r.createElement(a.Z, { style: [p.bottomBarModal, !B && !y && p.bottomBarMobile] }, r.createElement(i.Z, { isFullWidth: d, isLarge: s }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => c, Z: () => l });
            var r = o(807896),
                a = o(202784),
                i = o(524084),
                n = o(768572);
            const l = "stable_sort_index",
                c = a.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return a.createElement(n.ZP, { identifier: o }, a.createElement(i.Z, (0, r.Z)({ ref: t }, e)));
                });
        },
        524084: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                a = o(523561),
                i = o(195560);
            const n = (0, a.Z)({ loader: () => o.e("loader.AbsolutePower").then(o.bind(o, 590136)), renderPlaceholder: (e, t) => r.createElement(i.Z, { hasError: e, onRetry: t }) });
        },
        511985: (e, t, o) => {
            o.d(t, { AD: () => r, Qy: () => i, _f: () => n, zH: () => a });
            const r = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                a = 500,
                i = (e) => Object.values(r).indexOf(e) >= 0,
                n = (e, t) => ("boolean" == typeof e ? e : t);
        },
        800708: (e, t, o) => {
            o.r(t), o.d(t, { GifSearchCategoryScreen: () => s, default: () => h });
            var r = o(807896),
                a = o(202784),
                i = o(111677),
                n = o.n(i),
                l = o(223071),
                c = o(980407);
            const d = n().f5ff0d6f,
                s = (e) => {
                    const { searchBox: t, ...o } = e,
                        { history: i, location: n } = o,
                        s = n.state && n.state.category,
                        h = s && s.display_name;
                    return a.createElement(c.Z, { backButtonType: "back", documentTitle: d({ category: h }), history: i, middleControl: t }, a.createElement(l.Z, (0, r.Z)({ category: s }, o)));
                },
                h = s;
        },
        558969: (e, t, o) => {
            o.r(t), o.d(t, { default: () => p });
            var r = o(202784),
                a = o(111677),
                i = o.n(a),
                n = o(278066),
                l = o(980407),
                c = o(725516);
            const d = i().c6f5ac52,
                s = (0, c.Z)(
                    (e) => {
                        const { analytics: t, location: o, searchBox: a, ...i } = e,
                            { history: c } = i,
                            s = o.state?.searchFocused,
                            h = r.useCallback(() => {
                                s || t.scribeAction("cancel"), c.goBack({ backLocation: "/" });
                            }, [t, c, s]);
                        return r.createElement(l.Z, { documentTitle: d, history: c, middleControl: a, onBackClick: h }, r.createElement(n.ZP, i));
                    },
                    { element: "category" },
                );
            var h = o(237837);
            const u = i().ab468379,
                m = (e) => {
                    const { searchBox: t, ...o } = e,
                        { history: a, query: i } = o;
                    return r.createElement(l.Z, { backButtonType: "back", documentTitle: u({ query: i }), history: a, middleControl: t }, r.createElement(h.Z, o));
                },
                p = ({ gifSearchKey: e, history: t, location: o, searchBox: a, shouldAutoPlayGif: i }) => {
                    const n = o.state && o.state.query;
                    return n ? r.createElement(m, { gifSearchKey: e, history: t, location: o, query: n, searchBox: a, shouldAutoPlayGif: i }) : r.createElement(s, { gifSearchKey: e, history: t, location: o, searchBox: a });
                };
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch.b66aff7a.js.map
