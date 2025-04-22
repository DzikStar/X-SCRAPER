"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.SideNav"],
    {
        837249: (e, t, a) => {
            a.r(t), a.d(t, { default: () => h });
            var n = a(202784),
                o = a(325686),
                l = a(537392),
                r = a(392237),
                s = a(763881),
                i = a(105131),
                c = a(464097),
                p = a(880647),
                d = a(439332),
                m = a(997657),
                g = a(279918),
                u = a(866481);
            const h = n.memo(function (e) {
                    const { AdditionalFooterContent: t, SideNavButton: a, TabBar: r, history: h, isCollapsedSmall: f, isExpanded: E, isLoggedIn: C, isTwoColumn: b, logoButton: Z, onTabRefresh: y, widthStyle: v, withTweetButton: x = !0 } = e,
                        B = [w.root, v, f ? w.rootPaddingSmall : w.rootPaddingNormal],
                        I = Z || n.createElement(d.Z, { onClick: y, pullLeft: !1, size: "large" }),
                        { accountSwitcherRef: S, buttonRef: T, logoRef: H, rank: k } = (0, g.mw)(!(!C || (!a && !x))),
                        _ = (0, l.Zx)(({ windowHeight: e }) => p.Z.getHeightMode(e));
                    return n.createElement(
                        o.Z,
                        { style: B },
                        n.createElement(
                            o.Z,
                            { style: [w.topSection, !E && w.alignItemsCenter] },
                            n.createElement(o.Z, { ref: H, style: w.topControl }, I),
                            n.createElement(o.Z, { style: [w.appTabBar, !E && w.alignItemsCenter] }, n.createElement(m.hC.Provider, { value: k }, n.createElement(r, { history: h, layout: "vertical", onTabRefresh: y, wideMode: b, withExtendedItems: !0, withLabel: E }))),
                            C && (a || x)
                                ? (function () {
                                      const { SideNavButton: t, composeOptions: a, isExpanded: l } = e;
                                      return n.createElement(o.Z, { ref: T, style: [w.button, !l && w.alignItemsCenter, "tall" === _ && w.withTallHeight] }, t ? n.createElement(t, { isExpanded: l }) : n.createElement(c.Z, { composeOptions: a, isExpanded: l, testID: u.Z.tweet }));
                                  })()
                                : null,
                        ),
                        C ? n.createElement(o.Z, { ref: S, style: [w.footerContainer, !E && w.alignItemsCenter] }, t && n.createElement(t, null), n.createElement(i.ux, null, n.createElement(s.Z, { isExpanded: E }))) : null,
                    );
                }),
                w = r.default.create((e) => ({ root: { height: "100%", overflowY: "auto", justifyContent: "space-between" }, rootPaddingNormal: { paddingHorizontal: e.spaces.space8 }, rootPaddingSmall: { paddingHorizontal: e.spaces.space4 }, topSection: { alignItems: "flex-start" }, topControl: { paddingVertical: e.spaces.space2, maxWidth: "100%" }, appTabBar: { marginBottom: e.spaces.space4, marginTop: e.spaces.space2, width: "100%" }, button: { marginVertical: e.spaces.space4, width: "90%" }, withTallHeight: { marginVertical: e.spaces.space16 }, alignItemsCenter: { alignItems: "center" }, settingsButton: { marginBottom: e.spaces.space20, marginHorizontal: e.spaces.space4 }, footerContainer: { marginVertical: e.spaces.space12 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SideNav.7474f0da.js.map
