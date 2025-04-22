"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.newsPreviewHandler"],
    {
        111685: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(202784),
                i = r(325686),
                a = r(731708),
                l = r(470397),
                o = r(392237),
                c = r(741692),
                s = r(601413),
                d = r(284702),
                m = r(310452),
                g = r(354149),
                p = r(674132),
                u = r.n(p),
                h = r(946409);
            const E = o.default.create((e) => ({ description: { marginTop: e.spaces.space12 } })),
                b = (e, t, r) =>
                    r && !d.Z.VIDEO_TYPES.includes(t)
                        ? ((e) => {
                              const t = e.url ? (0, h.Mh)(e.url)?.pathname : void 0;
                              return n.createElement(a.ZP, { color: "gray700", link: t }, e.text);
                          })(r)
                        : e && d.Z.VIDEO_TYPES.includes(t)
                          ? ((e, t) => n.createElement(a.ZP, { color: "gray700", link: e.permalink }, y(t, { screenName: n.createElement(s.Z, { screenName: e.user.screen_name }) })))(e, t)
                          : null,
                y = (e, t) => {
                    switch (e) {
                        case "animated_gif":
                            return n.createElement(u().I18NFormatMessage, { $i18n: "a5d9d071" }, t.screenName);
                        case "video":
                        case "vine":
                            return n.createElement(u().I18NFormatMessage, { $i18n: "i9606e33" }, t.screenName);
                        default:
                            return n.createElement(u().I18NFormatMessage, { $i18n: "i1a64d47" }, t.screenName);
                    }
                },
                v = ({ coverTweet: e, description: t, descriptionEntities: r, imageAttribution: l, mediaType: o, pivotText: c }) => {
                    const s = t ? t.trim() : void 0,
                        d = ((e) => (e?.length ? { description: { urls: e } } : void 0))(r),
                        p = s ? m.ZP.descriptionTextParts(s, d) : [];
                    return n.createElement(
                        i.Z,
                        { style: E.description },
                        p.length
                            ? n.createElement(
                                  a.ZP,
                                  null,
                                  p.map((e, t) => n.createElement(g.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        b(e, o, l),
                        c ? n.createElement(a.ZP, { color: "gray700" }, c) : null,
                    );
                },
                f = o.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, timeString: { flexShrink: 0 }, timeStringMargin: { marginTop: e.spaces.space12 }, remindMeButton: { marginTop: e.spaces.space12 } })),
                w = ({ author: e, coverTweet: t, description: r, descriptionEntities: o, imageAttribution: s, isTOO: d, mediaType: m, pivotText: g, preTitle: p, remindMeButton: u, time: h, title: E, withHashflags: b }) => {
                    const y = () => (e ? n.createElement(i.Z, null, n.createElement(c.S3, { author: e, size: "body", withLink: !0, withScreenName: !0 }), h ? w(!0) : null) : null),
                        w = (e = !1) => n.createElement(a.ZP, { color: "gray700", numberOfLines: 1, size: "body", style: [f.timeString, e && f.timeStringMargin] }, h),
                        Z = () => (p ? n.createElement(l.Z, null, n.createElement(a.ZP, { color: "gray700", numberOfLines: 1, size: "body", weight: "bold" }, p), h ? w() : null) : null);
                    return n.createElement(n.Fragment, null, d && p ? Z() : y() || Z(), n.createElement(a.ZP, { dir: "auto", size: "title4", style: f.title, weight: "heavy", withHashflags: b }, E), r || t || s ? n.createElement(v, { coverTweet: t, description: r, descriptionEntities: o, imageAttribution: s, mediaType: m, pivotText: g }) : null, u ? n.createElement(i.Z, { style: f.remindMeButton }, u) : null);
                };
        },
        741692: (e, t, r) => {
            r.d(t, { S3: () => g, nn: () => p, Vm: () => u });
            var n = r(202784),
                i = r(325686),
                a = r(366635),
                l = r(392237),
                o = r(453333),
                c = r(784732),
                s = r(689582),
                d = r(68290);
            const m = "placeholderIcon",
                g = ({ author: e, color: t = "text", size: r = "subtext2", style: i, withHoverCard: l = !0, withLink: o = !1, withScreenName: c = !1 }) => n.createElement(a.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[r], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: r, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: r, style: [h.authorUserName, i], verifiedType: e.verified_type, withHoverCard: l, withLink: o, withScreenName: c }),
                p = ({ style: e }) => n.createElement(i.Z, { style: [h.lightningBadge, e] }, n.createElement(o.default, { style: h.lightningIcon })),
                u = ({ icon: e }) => n.createElement(i.Z, { style: h.placeholderIconContainer, testID: m }, "news" === e ? n.createElement(c.default, { style: h.placeholderIcon }) : "lists" === e ? n.createElement(s.default, { style: h.placeholderIcon }) : n.createElement(d.default, { style: h.placeholderIcon })),
                h = l.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        669720: (e, t, r) => {
            r.r(t), r.d(t, { default: () => Z });
            var n = r(459643),
                i = r(351322),
                a = r(202784),
                l = r(325686),
                o = r(952428),
                c = r(682474),
                s = r(530525),
                d = r(439592),
                m = r(392237),
                g = r(111685),
                p = r(741692),
                u = r(946409),
                h = r(725516),
                E = r(668214),
                b = r(38562);
            const y = (0, E.Z)().propsFromState(() => ({ dataSaverMode: b.IX })),
                v = ({ dataSaverMode: e, entry: t }) => {
                    const r = (0, h.z)(),
                        { content: n } = t,
                        i = n.landingUrl && (0, u.s9)(n.landingUrl),
                        m = e ? void 0 : n.originalImage,
                        E = a.useCallback(() => {
                            r.scribe({ action: "click" });
                        }, [r]);
                    return a.createElement(o.Z, { link: i, onClick: E }, a.createElement(l.Z, { style: f.coverContainer }, a.createElement(c.Z, { ratio: 16 / 9 }, m ? a.createElement(s.Z, { "aria-label": "", aspectMode: d.Z.COVER, image: m }) : a.createElement(p.Vm, { icon: "news" }))), a.createElement(l.Z, { style: f.contentContainer }, a.createElement(g.Z, { description: n.description, pivotText: n.pivotText, preTitle: n.author, title: n.title })));
                },
                f = m.default.create((e) => ({ contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, coverContainer: { backgroundColor: e.colors.gray200, height: "100%", overflow: "hidden", width: "100%" } })),
                w = y(a.memo(v)),
                Z = i.iH({ isFocusable: (0, n.Z)(!0), component: w }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.newsPreviewHandler.1cf5ed3a.js.map
