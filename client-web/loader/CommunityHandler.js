"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CommunityHandler"],
    {
        812190: (e, i, n) => {
            n.d(i, { Z: () => p });
            var t = n(202784),
                o = n(544239),
                r = n(872788),
                a = n(71620),
                m = n(668214),
                s = n(491963),
                l = n(709318);
            const c = (e, { communityId: i }) => (i ? s.ZP.select(e, i) : void 0),
                d = (e, { communityId: i }) => !!i && (0, l.H4)(e, i),
                u = ({ community: e, communityId: i, createLocalApiErrorHandler: n, isPinned: a, onActionButtonJoinClick: m, onPress: s, pinTimeline: l, shouldDisplayPin: c, style: d, thumbnailSize: u, unpinTimeline: p, withActionButton: h }) => {
                    const y = t.useMemo(() => e && { isPinned: a, handlePinOrUnpin: () => (a ? p({ id: i, name: e.name, type: r.FO.COMMUNITY }).catch(n) : l({ id: i, name: e.name, type: r.FO.COMMUNITY }).catch(n)) }, [e, i, n, a, l, p]),
                        v = c ? y : void 0;
                    if (e) {
                        const { is_nsfw: n, media: r, member_count: a, membersFacepileUrls: l, name: c, primary_community_topic: p } = e;
                        return t.createElement(o.Z, { communityId: i, isNsfw: n, media: r, memberCount: a, membersFacepile: l, name: c, onActionButtonJoinClick: m, onPress: s, style: d, thumbnailSize: u, topic: p?.topic_name, withActionButton: h, withPinAction: v });
                    }
                    return null;
                },
                p = (0, m.Z)()
                    .propsFromState(() => ({ community: c, isPinned: d }))
                    .propsFromActions(() => ({ pinTimeline: l.qM, unpinTimeline: l.bK, createLocalApiErrorHandler: (0, a.zr)("TOGGLE_PIN_COMMUNITY") }))(t.memo(u));
        },
        325800: (e, i, n) => {
            n.r(i), n.d(i, { default: () => l });
            var t = n(459643),
                o = n(351322),
                r = n(202784),
                a = n(812190);
            const m = ({ entry: e, shouldDisplayPin: i }) => {
                    const n = e.content.id;
                    return r.createElement(a.Z, { communityId: n, shouldDisplayPin: i });
                },
                s = r.memo(m),
                l = (e) => o.iH({ component: s, shouldDisplayBorder: (0, t.Z)(!1), isFocusable: (0, t.Z)(!0) }).getHandler(() => e);
        },
        678773: (e, i, n) => {
            n.r(i), n.d(i, { default: () => s });
            var t = n(202784),
                o = n(890601),
                r = n(783427),
                a = n(347101);
            const m = (e = {}) => {
                const { direction: i } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: i });
            };
            m.metadata = { width: 24, height: 24 };
            const s = m;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.67d3f9ba.js.map
