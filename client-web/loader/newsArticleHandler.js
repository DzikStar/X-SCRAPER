"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.newsArticleHandler", "icons/IconNewsStroke-js"],
    {
        741692: (e, t, r) => {
            r.d(t, { S3: () => m, nn: () => g, Vm: () => p });
            var a = r(202784),
                i = r(325686),
                o = r(366635),
                l = r(392237),
                n = r(453333),
                c = r(784732),
                d = r(689582),
                s = r(68290);
            const h = "placeholderIcon",
                m = ({ author: e, color: t = "text", size: r = "subtext2", style: i, withHoverCard: l = !0, withLink: n = !1, withScreenName: c = !1 }) => a.createElement(o.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[r], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: r, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: r, style: [u.authorUserName, i], verifiedType: e.verified_type, withHoverCard: l, withLink: n, withScreenName: c }),
                g = ({ style: e }) => a.createElement(i.Z, { style: [u.lightningBadge, e] }, a.createElement(n.default, { style: u.lightningIcon })),
                p = ({ icon: e }) => a.createElement(i.Z, { style: u.placeholderIconContainer, testID: h }, "news" === e ? a.createElement(c.default, { style: u.placeholderIcon }) : "lists" === e ? a.createElement(d.default, { style: u.placeholderIcon }) : a.createElement(s.default, { style: u.placeholderIcon })),
                u = l.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        110045: (e, t, r) => {
            r.r(t), r.d(t, { default: () => C });
            var a = r(459643),
                i = r(351322),
                o = r(202784),
                l = r(325686),
                n = r(952428),
                c = r(731708),
                d = r(682474),
                s = r(530525),
                h = r(439592),
                m = r(392237),
                g = r(741692),
                p = r(946409),
                u = r(725516),
                b = r(668214),
                v = r(38562);
            const f = (0, b.Z)().propsFromState(() => ({ dataSaverMode: v.IX })),
                w = ({ dataSaverMode: e, entry: t }) => {
                    const r = (0, u.z)(),
                        { content: a } = t,
                        i = a.landingUrl && (0, p.s9)(a.landingUrl),
                        m = o.useCallback(() => {
                            r.scribe({ action: "click" });
                        }, [r]),
                        b = e ? void 0 : a.originalImage;
                    return o.createElement(n.Z, { link: i, onClick: m, style: E.root }, o.createElement(l.Z, { style: E.details }, o.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a.author), o.createElement(c.ZP, { style: E.title, weight: "bold" }, a.title)), o.createElement(l.Z, { style: E.coverContainer }, o.createElement(d.Z, { ratio: 1 }, b ? o.createElement(s.Z, { "aria-label": "", aspectMode: h.Z.SQUARE, image: b }) : o.createElement(g.Vm, { icon: "news" }))));
                },
                y = "100px",
                z = "70px",
                E = m.default.create((e) => ({ root: { flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, coverImage: { height: "100%", width: "100%" }, coverContainer: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.xLarge, height: "15%", maxHeight: y, maxWidth: y, minHeight: z, minWidth: z, overflow: "hidden", width: "15%" }, details: { flex: 1, marginEnd: e.spaces.space12 }, title: { marginHorizontal: 0, marginVertical: e.spaces.space2 } })),
                I = f(o.memo(w)),
                C = i.iH({ isFocusable: (0, a.Z)(!0), component: I }).getHandler();
        },
        784732: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                o = r(783427),
                l = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const c = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.newsArticleHandler.091f4e4a.js.map
