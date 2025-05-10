"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.newsPreviewHandler"],
    {
        111685: (e, t, r) => {
            r.d(t, { Z: () => w });
            var i = r(202784),
                n = r(325686),
                a = r(731708),
                l = r(470397),
                o = r(392237),
                c = r(741692),
                s = r(601413),
                d = r(284702),
                m = r(310452),
                g = r(354149),
                h = r(674132),
                p = r.n(h),
                u = r(946409);
            const v = o.default.create((e) => ({ description: { marginTop: e.spaces.space12 } })),
                E = (e, t, r) =>
                    r && !d.Z.VIDEO_TYPES.includes(t)
                        ? ((e) => {
                              const t = e.url ? (0, u.Mh)(e.url)?.pathname : void 0;
                              return i.createElement(a.ZP, { color: "gray700", link: t }, e.text);
                          })(r)
                        : e && d.Z.VIDEO_TYPES.includes(t)
                          ? ((e, t) => i.createElement(a.ZP, { color: "gray700", link: e.permalink }, b(t, { screenName: i.createElement(s.Z, { screenName: e.user.screen_name }) })))(e, t)
                          : null,
                b = (e, t) => {
                    switch (e) {
                        case "animated_gif":
                            return i.createElement(p().I18NFormatMessage, { $i18n: "a5d9d071" }, t.screenName);
                        case "video":
                        case "vine":
                            return i.createElement(p().I18NFormatMessage, { $i18n: "i9606e33" }, t.screenName);
                        default:
                            return i.createElement(p().I18NFormatMessage, { $i18n: "i1a64d47" }, t.screenName);
                    }
                },
                y = ({ coverTweet: e, description: t, descriptionEntities: r, imageAttribution: l, mediaType: o, pivotText: c }) => {
                    const s = t ? t.trim() : void 0,
                        d = ((e) => (e?.length ? { description: { urls: e } } : void 0))(r),
                        h = s ? m.ZP.descriptionTextParts(s, d) : [];
                    return i.createElement(
                        n.Z,
                        { style: v.description },
                        h.length
                            ? i.createElement(
                                  a.ZP,
                                  null,
                                  h.map((e, t) => i.createElement(g.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        E(e, o, l),
                        c ? i.createElement(a.ZP, { color: "gray700" }, c) : null,
                    );
                },
                f = o.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, timeString: { flexShrink: 0 }, timeStringMargin: { marginTop: e.spaces.space12 }, remindMeButton: { marginTop: e.spaces.space12 } })),
                w = ({ author: e, coverTweet: t, description: r, descriptionEntities: o, imageAttribution: s, isTOO: d, mediaType: m, pivotText: g, preTitle: h, remindMeButton: p, time: u, title: v, withHashflags: E }) => {
                    const b = () => (e ? i.createElement(n.Z, null, i.createElement(c.S3, { author: e, size: "body", withLink: !0, withScreenName: !0 }), u ? w(!0) : null) : null),
                        w = (e = !1) => i.createElement(a.ZP, { color: "gray700", numberOfLines: 1, size: "body", style: [f.timeString, e && f.timeStringMargin] }, u),
                        Z = () => (h ? i.createElement(l.Z, null, i.createElement(a.ZP, { color: "gray700", numberOfLines: 1, size: "body", weight: "bold" }, h), u ? w() : null) : null);
                    return i.createElement(i.Fragment, null, d && h ? Z() : b() || Z(), i.createElement(a.ZP, { dir: "auto", size: "title4", style: f.title, weight: "heavy", withHashflags: E }, v), r || t || s ? i.createElement(y, { coverTweet: t, description: r, descriptionEntities: o, imageAttribution: s, mediaType: m, pivotText: g }) : null, p ? i.createElement(n.Z, { style: f.remindMeButton }, p) : null);
                };
        },
        741692: (e, t, r) => {
            r.d(t, { S3: () => g, nn: () => h, Vm: () => p });
            var i = r(202784),
                n = r(325686),
                a = r(366635),
                l = r(392237),
                o = r(453333),
                c = r(784732),
                s = r(689582),
                d = r(68290);
            const m = "placeholderIcon",
                g = ({ author: e, color: t = "text", size: r = "subtext2", style: n, withHoverCard: l = !0, withLink: o = !1, withScreenName: c = !1 }) => i.createElement(a.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[r], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: r, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: r, style: [u.authorUserName, n], verifiedType: e.verified_type, withHoverCard: l, withLink: o, withScreenName: c }),
                h = ({ style: e }) => i.createElement(n.Z, { style: [u.lightningBadge, e] }, i.createElement(o.default, { style: u.lightningIcon })),
                p = ({ icon: e }) => i.createElement(n.Z, { style: u.placeholderIconContainer, testID: m }, "news" === e ? i.createElement(c.default, { style: u.placeholderIcon }) : "lists" === e ? i.createElement(s.default, { style: u.placeholderIcon }) : i.createElement(d.default, { style: u.placeholderIcon })),
                u = l.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        669720: (e, t, r) => {
            r.r(t), r.d(t, { default: () => Z });
            var i = r(459643),
                n = r(351322),
                a = r(202784),
                l = r(325686),
                o = r(952428),
                c = r(682474),
                s = r(530525),
                d = r(439592),
                m = r(392237),
                g = r(111685),
                h = r(741692),
                p = r(946409),
                u = r(725516),
                v = r(668214),
                E = r(38562);
            const b = (0, v.Z)().propsFromState(() => ({ dataSaverMode: E.IX })),
                y = ({ dataSaverMode: e, entry: t }) => {
                    const r = (0, u.z)(),
                        { content: i } = t,
                        n = i.landingUrl && (0, p.s9)(i.landingUrl),
                        m = e ? void 0 : i.originalImage,
                        v = a.useCallback(() => {
                            r.scribe({ action: "click" });
                        }, [r]);
                    return a.createElement(o.Z, { link: n, onClick: v }, a.createElement(l.Z, { style: f.coverContainer }, a.createElement(c.Z, { ratio: 16 / 9 }, m ? a.createElement(s.Z, { "aria-label": "", aspectMode: d.Z.COVER, image: m }) : a.createElement(h.Vm, { icon: "news" }))), a.createElement(l.Z, { style: f.contentContainer }, a.createElement(g.Z, { description: i.description, pivotText: i.pivotText, preTitle: i.author, title: i.title })));
                },
                f = m.default.create((e) => ({ contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, coverContainer: { backgroundColor: e.colors.gray200, height: "100%", overflow: "hidden", width: "100%" } })),
                w = b(a.memo(y)),
                Z = n.iH({ isFocusable: (0, i.Z)(!0), component: w }).getHandler();
        },
        784732: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                n = r(890601),
                a = r(783427),
                l = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.newsPreviewHandler.41198d9a.js.map
