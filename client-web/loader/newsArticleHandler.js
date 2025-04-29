"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.newsArticleHandler"],
    {
        741692: (e, t, r) => {
            r.d(t, { S3: () => g, nn: () => h, Vm: () => p });
            var a = r(202784),
                i = r(325686),
                o = r(366635),
                l = r(392237),
                n = r(453333),
                c = r(784732),
                d = r(689582),
                s = r(68290);
            const m = "placeholderIcon",
                g = ({ author: e, color: t = "text", size: r = "subtext2", style: i, withHoverCard: l = !0, withLink: n = !1, withScreenName: c = !1 }) => a.createElement(o.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[r], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: r, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: r, style: [u.authorUserName, i], verifiedType: e.verified_type, withHoverCard: l, withLink: n, withScreenName: c }),
                h = ({ style: e }) => a.createElement(i.Z, { style: [u.lightningBadge, e] }, a.createElement(n.default, { style: u.lightningIcon })),
                p = ({ icon: e }) => a.createElement(i.Z, { style: u.placeholderIconContainer, testID: m }, "news" === e ? a.createElement(c.default, { style: u.placeholderIcon }) : "lists" === e ? a.createElement(d.default, { style: u.placeholderIcon }) : a.createElement(s.default, { style: u.placeholderIcon })),
                u = l.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        110045: (e, t, r) => {
            r.r(t), r.d(t, { default: () => x });
            var a = r(459643),
                i = r(351322),
                o = r(202784),
                l = r(325686),
                n = r(952428),
                c = r(731708),
                d = r(682474),
                s = r(530525),
                m = r(439592),
                g = r(392237),
                h = r(741692),
                p = r(946409),
                u = r(725516),
                b = r(668214),
                f = r(38562);
            const y = (0, b.Z)().propsFromState(() => ({ dataSaverMode: f.IX })),
                w = ({ dataSaverMode: e, entry: t }) => {
                    const r = (0, u.z)(),
                        { content: a } = t,
                        i = a.landingUrl && (0, p.s9)(a.landingUrl),
                        g = o.useCallback(() => {
                            r.scribe({ action: "click" });
                        }, [r]),
                        b = e ? void 0 : a.originalImage;
                    return o.createElement(n.Z, { link: i, onClick: g, style: I.root }, o.createElement(l.Z, { style: I.details }, o.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a.author), o.createElement(c.ZP, { style: I.title, weight: "bold" }, a.title)), o.createElement(l.Z, { style: I.coverContainer }, o.createElement(d.Z, { ratio: 1 }, b ? o.createElement(s.Z, { "aria-label": "", aspectMode: m.Z.SQUARE, image: b }) : o.createElement(h.Vm, { icon: "news" }))));
                },
                v = "100px",
                E = "70px",
                I = g.default.create((e) => ({ root: { flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, coverImage: { height: "100%", width: "100%" }, coverContainer: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.xLarge, height: "15%", maxHeight: v, maxWidth: v, minHeight: E, minWidth: E, overflow: "hidden", width: "15%" }, details: { flex: 1, marginEnd: e.spaces.space12 }, title: { marginHorizontal: 0, marginVertical: e.spaces.space2 } })),
                C = y(o.memo(w)),
                x = i.iH({ isFocusable: (0, a.Z)(!0), component: C }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.newsArticleHandler.46d7ad0a.js.map
