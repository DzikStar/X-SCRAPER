"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CommunityHandler"],
    {
        812190: (e, n, i) => {
            i.d(n, { Z: () => p });
            var t = i(202784),
                o = i(544239),
                m = i(872788),
                r = i(71620),
                c = i(668214),
                s = i(491963),
                a = i(709318);
            const l = (e, n) => (n.communityId ? s.ZP.select(e, n.communityId) : void 0),
                u = (e, n) => !!n.communityId && (0, a.H4)(e, n.communityId),
                d = ({ community: e, communityId: n, createLocalApiErrorHandler: i, isPinned: r, onActionButtonJoinClick: c, onPress: s, pinTimeline: a, shouldDisplayPin: l, style: u, thumbnailSize: d, unpinTimeline: p, withActionButton: y }) => {
                    const h = t.useMemo(() => e && { isPinned: r, handlePinOrUnpin: () => (r ? p({ id: n, name: e.name, type: m.FO.COMMUNITY }).catch(i) : a({ id: n, name: e.name, type: m.FO.COMMUNITY }).catch(i)) }, [e, n, i, r, a, p]),
                        _ = l ? h : void 0;
                    if (e) {
                        const { is_nsfw: i, media: m, member_count: r, membersFacepileUrls: a, name: l, primary_community_topic: p } = e;
                        return t.createElement(o.Z, { communityId: n, isNsfw: i, media: m, memberCount: r, membersFacepile: a, name: l, onActionButtonJoinClick: c, onPress: s, style: u, thumbnailSize: d, topic: p?.topic_name, withActionButton: y, withPinAction: _ });
                    }
                    return null;
                },
                p = (0, c.Z)()
                    .propsFromState(() => ({ community: l, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: a.qM, unpinTimeline: a.bK, createLocalApiErrorHandler: (0, r.zr)("TOGGLE_PIN_COMMUNITY") }))(t.memo(d));
        },
        325800: (e, n, i) => {
            i.r(n), i.d(n, { default: () => a });
            var t = i(459643),
                o = i(351322),
                m = i(202784),
                r = i(812190);
            const c = ({ entry: e, shouldDisplayPin: n }) => {
                    const i = e.content.id;
                    return m.createElement(r.Z, { communityId: i, shouldDisplayPin: n });
                },
                s = m.memo(c),
                a = (e) => o.iH({ component: s, shouldDisplayBorder: (0, t.Z)(!1), isFocusable: (0, t.Z)(!0) }).getHandler(() => e);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.098d7daa.js.map
