"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MomentSummaryHandler"],
    {
        741692: (e, t, i) => {
            i.d(t, { S3: () => u, nn: () => h, Vm: () => g });
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
                h = ({ style: e }) => o.createElement(a.Z, { style: [p.lightningBadge, e] }, o.createElement(l.default, { style: p.lightningIcon })),
                g = ({ icon: e }) => o.createElement(a.Z, { style: p.placeholderIconContainer, testID: m }, "news" === e ? o.createElement(s.default, { style: p.placeholderIcon }) : "lists" === e ? o.createElement(c.default, { style: p.placeholderIcon }) : o.createElement(d.default, { style: p.placeholderIcon })),
                p = r.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        12352: (e, t, i) => {
            i.r(t), i.d(t, { default: () => le });
            var o = i(459643),
                a = i(351322),
                n = i(202784),
                r = i(807896),
                l = i(111677),
                s = i.n(l),
                c = i(500002),
                d = i(325686),
                m = i(952428),
                u = i(731708),
                h = i(392237),
                g = i(309854),
                p = i(530525),
                b = i(439592),
                y = i(682474),
                v = i(741692);
            const f = ({ coverMedia: e }) => {
                    const t = e && g.Z.getOriginalImage(e);
                    return n.createElement(d.Z, { style: M.coverContainer }, t && e ? n.createElement(p.Z, { "aria-label": "", aspectMode: b.Z.SQUARE, backgroundColor: g.Z.getBackgroundColor(e), cropCandidates: g.Z.getCropCandidates(e), image: t }) : n.createElement(y.Z, { ratio: h.default.theme.aspectRatios.square }, n.createElement(v.Vm, { icon: "lightning" })), e ? n.createElement(v.nn, { style: M.lightningBadge }) : null);
                },
                C = "15%",
                I = "100px",
                E = "70px",
                M = h.default.create((e) => ({ coverContainer: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.xLarge, height: C, maxHeight: I, maxWidth: I, minHeight: E, minWidth: E, overflow: "hidden", width: C }, lightningBadge: { bottom: e.spaces.space12, start: e.spaces.space12 } })),
                Z = n.memo(f),
                _ = h.default.create((e) => ({ root: { flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, justifyContent: "space-between" }, horizontalContainer: { alignItems: "center", flexDirection: "row" }, leftContainer: { justifyContent: "flex-start", maxWidth: `calc(100% - ${E})`, minWidth: `calc(100% - ${I})`, paddingEnd: e.spaces.space16, width: `calc(100% - ${C})` }, topMargin: { marginTop: e.spaces.space8 } }));
            var w = i(232418);
            const S = s().a1d5303c,
                z = s().cc8f8a80,
                x = s().c33a97d6,
                k = { [w.Ar.private]: "magenta500", [w.Ar.public]: "green500", [w.Ar.unlisted]: "gray700" },
                T = { [w.Ar.private]: S, [w.Ar.public]: x, [w.Ar.unlisted]: z },
                O = (e) => {
                    const { visibilityMode: t } = e;
                    if (t !== w.Ar.public) {
                        const e = k[t],
                            i = T[t];
                        return e && i ? n.createElement(u.ZP, { color: e, weight: "bold" }, i) : null;
                    }
                    return null;
                },
                H = n.memo(O);
            var V = i(470397),
                A = i(966886);
            const P = (e) => {
                    const { author: t, category: i, isTOO: o, lastPublishedTime: a } = e,
                        r = n.useMemo(() => (o ? (i ? n.createElement(u.ZP, { color: "gray700", size: "subtext2" }, i) : null) : t ? n.createElement(v.S3, { author: t, size: "subtext2" }) : null), [t, i, o]);
                    return n.createElement(d.Z, { style: B.authorCategoryContainer }, n.createElement(V.Z, { style: _.horizontalContainer }, r, a ? n.createElement(u.ZP, { size: "subtext2" }, n.createElement(A.Z, { timestamp: a })) : null));
                },
                B = h.default.create((e) => ({ authorCategoryContainer: { marginBottom: e.spaces.space2 } })),
                D = n.memo(P),
                R = (e) => {
                    const { author: t, category: i, coverMedia: o, isTOO: a, lastPublishedTime: r, momentId: l, onClick: s, title: c, visibilityMode: h } = e,
                        g = `/i/events/${l}`;
                    return n.createElement(m.Z, { link: g, onClick: s, style: _.root }, n.createElement(d.Z, { style: _.leftContainer }, n.createElement(D, { author: t, category: i, isTOO: a, lastPublishedTime: r }), n.createElement(u.ZP, { weight: "bold", withHashflags: !0 }, c), n.createElement(d.Z, { style: L.topMarginSmall }, n.createElement(H, { visibilityMode: h }))), n.createElement(Z, { coverMedia: o }));
                },
                L = h.default.create((e) => ({ topMarginSmall: { marginTop: e.spaces.space2 } })),
                N = n.memo(R),
                U = s().jceadc3e,
                W = (e) => {
                    const { category: t, creationSource: i, description: o, hasUnpublishedChanges: a, history: l, isCurationStudioMoment: s, lastModifiedTime: c, location: d, title: m, ...u } = e,
                        h = m || U;
                    return n.createElement(N, (0, r.Z)({}, u, { category: t, title: h }));
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
        784732: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var o = i(202784),
                a = i(890601),
                n = i(783427),
                r = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MomentSummaryHandler.9eb0286a.js.map
