"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CommunityHandler"],
    {
        812190: (e, i, t) => {
            t.d(i, { Z: () => h });
            var n = t(202784),
                o = t(544239),
                r = t(872788),
                c = t(71620),
                a = t(668214),
                l = t(491963),
                m = t(709318);
            const s = (e, i) => (i.communityId ? l.ZP.select(e, i.communityId) : void 0),
                d = (e, i) => !!i.communityId && (0, m.H4)(e, i.communityId),
                u = ({ community: e, communityId: i, createLocalApiErrorHandler: t, isPinned: c, onActionButtonJoinClick: a, onPress: l, pinTimeline: m, shouldDisplayPin: s, style: d, thumbnailSize: u, unpinTimeline: h, withActionButton: p }) => {
                    const y = n.useMemo(() => e && { isPinned: c, handlePinOrUnpin: () => (c ? h({ id: i, name: e.name, type: r.FO.COMMUNITY }).catch(t) : m({ id: i, name: e.name, type: r.FO.COMMUNITY }).catch(t)) }, [e, i, t, c, m, h]),
                        v = s ? y : void 0;
                    if (e) {
                        const { is_nsfw: t, media: r, member_count: c, membersFacepileUrls: m, name: s, primary_community_topic: h } = e;
                        return n.createElement(o.Z, { communityId: i, isNsfw: t, media: r, memberCount: c, membersFacepile: m, name: s, onActionButtonJoinClick: a, onPress: l, style: d, thumbnailSize: u, topic: h?.topic_name, withActionButton: p, withPinAction: v });
                    }
                    return null;
                },
                h = (0, a.Z)()
                    .propsFromState(() => ({ community: s, isPinned: d }))
                    .propsFromActions(() => ({ pinTimeline: m.qM, unpinTimeline: m.bK, createLocalApiErrorHandler: (0, c.zr)("TOGGLE_PIN_COMMUNITY") }))(n.memo(u));
        },
        325800: (e, i, t) => {
            t.r(i), t.d(i, { default: () => m });
            var n = t(459643),
                o = t(351322),
                r = t(202784),
                c = t(812190);
            const a = ({ entry: e, shouldDisplayPin: i }) => {
                    const t = e.content.id;
                    return r.createElement(c.Z, { communityId: t, shouldDisplayPin: i });
                },
                l = r.memo(a),
                m = (e) => o.iH({ component: l, shouldDisplayBorder: (0, n.Z)(!1), isFocusable: (0, n.Z)(!0) }).getHandler(() => e);
        },
        988227: (e, i, t) => {
            t.r(i), t.d(i, { default: () => l });
            var n = t(202784),
                o = t(890601),
                r = t(783427),
                c = t(347101);
            const a = (e = {}) => {
                const { direction: i } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: i });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        748138: (e, i, t) => {
            t.r(i), t.d(i, { default: () => l });
            var n = t(202784),
                o = t(890601),
                r = t(783427),
                c = t(347101);
            const a = (e = {}) => {
                const { direction: i } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: i });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        730895: (e, i, t) => {
            var n = t(821176);
            e.exports = function () {
                var e = n(this),
                    i = "";
                return e.hasIndices && (i += "d"), e.global && (i += "g"), e.ignoreCase && (i += "i"), e.multiline && (i += "m"), e.dotAll && (i += "s"), e.unicode && (i += "u"), e.unicodeSets && (i += "v"), e.sticky && (i += "y"), i;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.dca4db5a.js.map
