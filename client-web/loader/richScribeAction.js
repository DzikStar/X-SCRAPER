"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.richScribeAction"],
    {
        481242: (e, i, t) => {
            t.r(i), t.d(i, { richScribeAction: () => p, richScribeFlushImmediate: () => u });
            var r = t(450681),
                s = t(479506),
                c = t(942893),
                d = t(836255),
                n = t(919022);
            const o = [],
                m = Object.freeze({}),
                p =
                    (e, i = m) =>
                    (t, s, { scribe: c }) => {
                        const d = s(),
                            n = Array.isArray(i.items) ? (0, r.Z)(i.items.map((e) => _(e, d))) : o,
                            m = { ...i, items: n };
                        c.log(e, m);
                    },
                u =
                    () =>
                    (e, i, { scribe: t }) => {
                        t.flushImmediate();
                    },
                a = (e) => {
                    if (e.disclosure_type && e.impression_id) return { disclosure_type: e.disclosure_type, impression_id: e.impression_id };
                },
                _ = (e, i) => {
                    if (!e.id) return e;
                    switch (e.item_type) {
                        case s.Z.ItemType.USER: {
                            const t = n.ZP.select(i, e.id),
                                r = a(e);
                            return t ? { ...e, ...c.Z.getUserItem(t, r) } : e;
                        }
                        case s.Z.ItemType.TWEET: {
                            const t = d.Z.selectHydrated(i, e.id),
                                r = a(e);
                            return t ? { ...e, ...c.Z.getTweetItem(t, r, void 0, void 0, e) } : e;
                        }
                        default:
                            return e;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.richScribeAction.372d383a.js.map
