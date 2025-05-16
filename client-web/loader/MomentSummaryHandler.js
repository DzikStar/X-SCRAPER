"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MomentSummaryHandler"],
    {
        741692: (e, t, i) => {
            i.d(t, { S3: () => u, nn: () => g, Vm: () => h });
            var o = i(202784),
                a = i(325686),
                n = i(366635),
                r = i(392237),
                l = i(453333),
                s = i(784732),
                c = i(689582),
                d = i(68290);
            const m = "placeholderIcon",
                u = ({ author: e, color: t = "text", size: i = "subtext2", style: a, withHoverCard: r = !0, withLink: l = !1, withScreenName: s = !1 }) => o.createElement(n.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[i], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: i, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: i, style: [p.authorUserName, a], verifiedType: e.verified_type, withHoverCard: r, withLink: l, withScreenName: s }),
                g = ({ style: e }) => o.createElement(a.Z, { style: [p.lightningBadge, e] }, o.createElement(l.default, { style: p.lightningIcon })),
                h = ({ icon: e }) => o.createElement(a.Z, { style: p.placeholderIconContainer, testID: m }, "news" === e ? o.createElement(s.default, { style: p.placeholderIcon }) : "lists" === e ? o.createElement(c.default, { style: p.placeholderIcon }) : o.createElement(d.default, { style: p.placeholderIcon })),
                p = r.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        12352: (e, t, i) => {
            i.r(t), i.d(t, { default: () => le });
            var o = i(459643),
                a = i(351322),
                n = i(202784),
                r = i(807896),
                l = i(674132),
                s = i.n(l),
                c = i(500002),
                d = i(325686),
                m = i(952428),
                u = i(731708),
                g = i(392237),
                h = i(309854),
                p = i(530525),
                b = i(439592),
                y = i(682474),
                f = i(741692);
            const C = ({ coverMedia: e }) => {
                    const t = e && h.Z.getOriginalImage(e);
                    return n.createElement(d.Z, { style: M.coverContainer }, t && e ? n.createElement(p.Z, { "aria-label": "", aspectMode: b.Z.SQUARE, backgroundColor: h.Z.getBackgroundColor(e), cropCandidates: h.Z.getCropCandidates(e), image: t }) : n.createElement(y.Z, { ratio: g.default.theme.aspectRatios.square }, n.createElement(f.Vm, { icon: "lightning" })), e ? n.createElement(f.nn, { style: M.lightningBadge }) : null);
                },
                v = "15%",
                I = "100px",
                E = "70px",
                M = g.default.create((e) => ({ coverContainer: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.xLarge, height: v, maxHeight: I, maxWidth: I, minHeight: E, minWidth: E, overflow: "hidden", width: v }, lightningBadge: { bottom: e.spaces.space12, start: e.spaces.space12 } })),
                Z = n.memo(C),
                _ = g.default.create((e) => ({ root: { flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, justifyContent: "space-between" }, horizontalContainer: { alignItems: "center", flexDirection: "row" }, leftContainer: { justifyContent: "flex-start", maxWidth: `calc(100% - ${E})`, minWidth: `calc(100% - ${I})`, paddingEnd: e.spaces.space16, width: `calc(100% - ${v})` }, topMargin: { marginTop: e.spaces.space8 } }));
            var S = i(232418);
            const w = s().a1d5303c,
                x = s().cc8f8a80,
                k = s().c33a97d6,
                T = { [S.Ar.private]: "magenta500", [S.Ar.public]: "green500", [S.Ar.unlisted]: "gray700" },
                z = { [S.Ar.private]: w, [S.Ar.public]: k, [S.Ar.unlisted]: x },
                O = (e) => {
                    const { visibilityMode: t } = e;
                    if (t !== S.Ar.public) {
                        const e = T[t],
                            i = z[t];
                        return e && i ? n.createElement(u.ZP, { color: e, weight: "bold" }, i) : null;
                    }
                    return null;
                },
                H = n.memo(O);
            var A = i(470397),
                P = i(966886);
            const B = (e) => {
                    const { author: t, category: i, isTOO: o, lastPublishedTime: a } = e,
                        r = n.useMemo(() => (o ? (i ? n.createElement(u.ZP, { color: "gray700", size: "subtext2" }, i) : null) : t ? n.createElement(f.S3, { author: t, size: "subtext2" }) : null), [t, i, o]);
                    return n.createElement(d.Z, { style: R.authorCategoryContainer }, n.createElement(A.Z, { style: _.horizontalContainer }, r, a ? n.createElement(u.ZP, { size: "subtext2" }, n.createElement(P.Z, { timestamp: a })) : null));
                },
                R = g.default.create((e) => ({ authorCategoryContainer: { marginBottom: e.spaces.space2 } })),
                V = n.memo(B),
                D = (e) => {
                    const { author: t, category: i, coverMedia: o, isTOO: a, lastPublishedTime: r, momentId: l, onClick: s, title: c, visibilityMode: g } = e,
                        h = `/i/events/${l}`;
                    return n.createElement(m.Z, { link: h, onClick: s, style: _.root }, n.createElement(d.Z, { style: _.leftContainer }, n.createElement(V, { author: t, category: i, isTOO: a, lastPublishedTime: r }), n.createElement(u.ZP, { weight: "bold", withHashflags: !0 }, c), n.createElement(d.Z, { style: L.topMarginSmall }, n.createElement(H, { visibilityMode: g }))), n.createElement(Z, { coverMedia: o }));
                },
                L = g.default.create((e) => ({ topMarginSmall: { marginTop: e.spaces.space2 } })),
                N = n.memo(D),
                U = s().jceadc3e,
                W = (e) => {
                    const { category: t, creationSource: i, description: o, hasUnpublishedChanges: a, history: l, isCurationStudioMoment: s, lastModifiedTime: c, location: d, title: m, ...u } = e,
                        g = m || U;
                    return n.createElement(N, (0, r.Z)({}, u, { category: t, title: g }));
                },
                j = (0, c.ZP)(n.memo(W));
            var $ = i(942893),
                F = i(725516),
                Q = i(668214),
                q = i(228356),
                G = i(390387);
            const J = (e, t) => q.Z.selectAuthor(e, t.entry.content.momentId),
                K = (e, t) => q.Z.selectCoverMedia(e, t.entry.content.momentId),
                X = (e, t) => q.Z.selectIsCurationStudioMoment(e, t.entry.content.momentId),
                Y = (e, t) => q.Z.selectIsTOO(e, t.entry.content.momentId),
                ee = (e, t) => q.Z.select(e, t.entry.content.momentId),
                te = (e, t) => q.Z.selectVisibilityMode(e, t.entry.content.momentId),
                ie = (0, Q.Z)().propsFromState(() => ({ author: J, coverMedia: K, isCurationStudioMoment: X, isLoggedIn: G.Qb, isTOO: Y, moment: ee, visibilityMode: te })),
                oe = ({ entry: e, moment: t }) => {
                    const i = { ...$.Z.getMomentItem(t.id, t.visibility_mode, t.last_publish_time, !t.author), ...$.Z.getAllSurfaceDetails(e.itemMetadata.clientEventInfo) },
                        o = e.itemMetadata && e.itemMetadata.clientEventInfo && e.itemMetadata.clientEventInfo.details && e.itemMetadata.clientEventInfo.details.momentsDetails;
                    if (o) {
                        const e = o.contextScribeInfo && o.contextScribeInfo.position;
                        return { ...i, moments_details: { ...i.moments_details, guide_category_id: o.guideCategoryId, impression_id: o.impressionId }, position: e ? parseInt(e, 10) : void 0 };
                    }
                    return i;
                },
                ae = (e) => {
                    const { author: t, coverMedia: i, entry: o, isCurationStudioMoment: a, isTOO: r, moment: l, visibilityMode: s } = e,
                        c = (0, F.z)(),
                        d = n.useMemo(() => (l ? oe({ entry: o, moment: l }) : void 0), [o, l]),
                        m = n.useCallback(() => {
                            const e = d ? { items: [d] } : void 0;
                            c.scribe({ component: "moment_summary", action: "click", data: e });
                        }, [c, d]);
                    return l ? n.createElement(j, { author: t, category: l.subcategory_string, coverMedia: i, creationSource: l.creation_source, description: l.description || "", hasUnpublishedChanges: l.has_unpublished_changes, isCurationStudioMoment: a, isTOO: r, lastModifiedTime: l.last_modified_time, lastPublishedTime: l.last_publish_time, momentId: l.id, onClick: m, title: l.title || "", visibilityMode: s }) : null;
                },
                ne = ie(n.memo(ae)),
                re = {},
                le = () => a.iH({ isFocusable: (0, o.Z)(!0), component: ne }).getHandler(() => re);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MomentSummaryHandler.313817ba.js.map
