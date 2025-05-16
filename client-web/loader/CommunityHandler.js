"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CommunityHandler"],
    {
        812190: (e, i, n) => {
            n.d(i, { Z: () => p });
            var t = n(202784),
                o = n(544239),
                r = n(872788),
                m = n(71620),
                a = n(668214),
                c = n(491963),
                s = n(709318);
            const l = (e, i) => (i.communityId ? c.ZP.select(e, i.communityId) : void 0),
                d = (e, i) => !!i.communityId && (0, s.H4)(e, i.communityId),
                u = ({ community: e, communityId: i, createLocalApiErrorHandler: n, isPinned: m, onActionButtonJoinClick: a, onPress: c, pinTimeline: s, shouldDisplayPin: l, style: d, thumbnailSize: u, unpinTimeline: p, withActionButton: h }) => {
                    const y = t.useMemo(() => e && { isPinned: m, handlePinOrUnpin: () => (m ? p({ id: i, name: e.name, type: r.FO.COMMUNITY }).catch(n) : s({ id: i, name: e.name, type: r.FO.COMMUNITY }).catch(n)) }, [e, i, n, m, s, p]),
                        v = l ? y : void 0;
                    if (e) {
                        const { is_nsfw: n, media: r, member_count: m, membersFacepileUrls: s, name: l, primary_community_topic: p } = e;
                        return t.createElement(o.Z, { communityId: i, isNsfw: n, media: r, memberCount: m, membersFacepile: s, name: l, onActionButtonJoinClick: a, onPress: c, style: d, thumbnailSize: u, topic: p?.topic_name, withActionButton: h, withPinAction: v });
                    }
                    return null;
                },
                p = (0, a.Z)()
                    .propsFromState(() => ({ community: l, isPinned: d }))
                    .propsFromActions(() => ({ pinTimeline: s.qM, unpinTimeline: s.bK, createLocalApiErrorHandler: (0, m.zr)("TOGGLE_PIN_COMMUNITY") }))(t.memo(u));
        },
        325800: (e, i, n) => {
            n.r(i), n.d(i, { default: () => s });
            var t = n(459643),
                o = n(351322),
                r = n(202784),
                m = n(812190);
            const a = ({ entry: e, shouldDisplayPin: i }) => {
                    const n = e.content.id;
                    return r.createElement(m.Z, { communityId: n, shouldDisplayPin: i });
                },
                c = r.memo(a),
                s = (e) => o.iH({ component: c, shouldDisplayBorder: (0, t.Z)(!1), isFocusable: (0, t.Z)(!0) }).getHandler(() => e);
        },
        678773: (e, i, n) => {
            n.r(i), n.d(i, { default: () => c });
            var t = n(202784),
                o = n(890601),
                r = n(783427),
                m = n(347101);
            const a = (e = {}) => {
                const { direction: i } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [m.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: i });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        730895: (e, i, n) => {
            var t = n(821176);
            e.exports = function () {
                var e = t(this),
                    i = "";
                return e.hasIndices && (i += "d"), e.global && (i += "g"), e.ignoreCase && (i += "i"), e.multiline && (i += "m"), e.dotAll && (i += "s"), e.unicode && (i += "u"), e.unicodeSets && (i += "v"), e.sticky && (i += "y"), i;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.79f5985a.js.map
