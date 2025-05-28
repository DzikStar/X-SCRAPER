"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ParticipantReaction"],
    {
        763023: (i, e, o) => {
            o.d(e, { Z: () => d });
            var t = o(202784),
                n = o(992942),
                a = o(392237),
                s = o(347522),
                r = o(583841);
            const u = a.default.create((i) => ({ root: { height: s.u8.EmojiHeight, width: s.u8.EmojiWidth } })),
                d = function ({ "aria-label": i, emoji: e, skinTone: o, style: a }) {
                    const s = (0, r.al)(e, o);
                    return s ? t.createElement(n.Z, { alt: e.name, "aria-label": i, draggable: !1, resizeMode: "stretch", source: s, style: [u.root, a] }) : null;
                };
        },
        347522: (i, e, o) => {
            o.d(e, { WD: () => l, Zx: () => u, c0: () => c, u8: () => m, uiStrings: () => d, wN: () => s });
            var t = o(111677),
                n = o.n(t),
                a = o(392237);
            const s = { None: "none", Light: "light", MediumLight: "medium-light", Medium: "medium", MediumDark: "medium-dark", Dark: "dark" },
                r = { [s.Light]: "1f3fb", [s.MediumLight]: "1f3fc", [s.Medium]: "1f3fd", [s.MediumDark]: "1f3fe", [s.Dark]: "1f3ff" },
                u = { [s.None]: { id: s.None, name: n().ff3dd27c, color: "#FFDC5D" }, [s.Light]: { codepoint: r[s.Light], id: s.Light, name: n().b554fcf4, color: "#F7DECE" }, [s.MediumLight]: { codepoint: r[s.MediumLight], id: s.MediumLight, name: n().j590b148, color: "#F3D2A2" }, [s.Medium]: { codepoint: r[s.Medium], id: s.Medium, name: n().e7d4ee86, color: "#D5AB88" }, [s.MediumDark]: { codepoint: r[s.MediumDark], id: s.MediumDark, name: n().ia423ebc, color: "#AF7E57" }, [s.Dark]: { codepoint: r[s.Dark], id: s.Dark, name: n().a2cf0942, color: "#7C533E" } },
                d = { search: n().j824dc06, notFoundHeader: n().fffb3384, notFoundMessage: n().j3d20752, skintext: n().d67ad796, clear: n().e6388bfa, recentCategoryName: n().j7c67eca, searchCategoryName: n().da539d38 },
                m = { EmojiWidth: a.default.theme.spaces.space20, EmojiHeight: a.default.theme.spaces.space20, EmojiGutter: a.default.theme.spaces.space4 },
                l = { Search: "search", Recent: "recent", People: "people", Nature: "nature", Foods: "foods", Activity: "activity", Places: "places", Objects: "objects", Symbols: "symbols", Flags: "flags", Custom: "custom" },
                c = 9;
        },
        948729: (i, e, o) => {
            o.d(e, { W: () => u });
            o(136728);
            var t = o(697926);
            const n = { name: "a", keywords: "j", sprite_position: "k", skin_variations: "l" },
                a = { unified: "key", skin_tone: "d", sprite_position: "k" },
                s = (i) => {
                    const e = [],
                        o = (i, o) => {
                            i &&
                                (Array.isArray(i) ? i : [i]).forEach((i) => {
                                    (o ? i.split(/[-|_|\s]+/) : [i]).forEach((i) => {
                                        const o = i.toLowerCase();
                                        -1 === e.indexOf(o) && e.push(o);
                                    });
                                });
                        };
                    return o(i.short_names, !0), o(i.name, !0), o(i.keywords, !1), e.join(",");
                },
                r = (i, e) => {
                    for (const o in e) (i[o] = i[e[o]]), delete i[e[o]];
                },
                u = (i) => {
                    const e = JSON.parse(JSON.stringify(i));
                    e.compressed = !1;
                    for (const i in e.emojis) {
                        const o = e.emojis[i];
                        r(o, n),
                            (o.id = i),
                            (o.unified = i),
                            (o.short_names = [i]),
                            o.text || (o.text = ""),
                            (o.search = s(o)),
                            o.skin_variations &&
                                (o.skin_variations.forEach((i) => {
                                    r(i, a);
                                }),
                                (o.skin_variations = (0, t.Z)(o.skin_variations, (i) => {
                                    const { skin_tone: e } = i;
                                    let o = e[0];
                                    for (let i = 1; i < e.length; i++) o += `+${e[i]}`;
                                    return o;
                                })));
                    }
                    return e;
                };
        },
        583841: (i, e, o) => {
            o.d(e, { A1: () => u, Nw: () => r, XF: () => a, al: () => s, up: () => d });
            var t = o(899492);
            const n = (i, e) => {
                    const o = e && e.codepoint;
                    if (!(o && a(i.skin_variations, o) > 1)) return o && i.skin_variations && i.skin_variations[o] ? i.skin_variations[o] : void 0;
                },
                a = (i = {}, e) => {
                    let o = 0;
                    for (const t in i) e && t.indexOf(e) >= 0 && (o += 1);
                    return o;
                },
                s = (i, e) => {
                    const o = (n(i, e) || i).unified;
                    return t.Z.getTwemojiUrl(o);
                },
                r = (i, e) => {
                    const { name: o, short_names: t, text: a } = i,
                        s = n(i, e),
                        r = s ? s.unified : i.unified;
                    return { id: i.id || t[0], name: o, text: a || r, unified: r };
                },
                u = () => `emojiPicker-${Math.random()}`;
            function d(i, e, o = 0) {
                if (i && e) {
                    const { height: t, top: n } = i.getBoundingClientRect(),
                        a = n + o,
                        { bottom: s, top: r } = e.getBoundingClientRect(),
                        u = t + n;
                    if (r < a) {
                        const e = a - r;
                        i.scrollTop = Math.max(0, i.scrollTop - e);
                    } else if (r > u || s > u) {
                        const e = s - u;
                        i.scrollTop = Math.max(0, i.scrollTop + e);
                    }
                }
            }
        },
        387163: (i, e, o) => {
            o.d(e, { Z: () => f });
            var t = o(202784),
                n = o(744610),
                a = o(392237),
                s = o(763023),
                r = o(948729),
                u = o(347522);
            function d(i) {
                const e = (function (i) {
                    return !!m[i];
                })(i);
                return { rootQualifiedEmoji: e ? m[i]?.qualifiedRootEmoji : i, skinToneOption: e ? m[i]?.skinToneOption : u.Zx[u.wN.None] };
            }
            const m = {
                "👏🏻": { qualifiedRootEmoji: "👏", skinToneOption: u.Zx[u.wN.Light] },
                "👏🏼": { qualifiedRootEmoji: "👏", skinToneOption: u.Zx[u.wN.MediumLight] },
                "👏🏽": { qualifiedRootEmoji: "👏", skinToneOption: u.Zx[u.wN.Medium] },
                "👏🏾": { qualifiedRootEmoji: "👏", skinToneOption: u.Zx[u.wN.MediumDark] },
                "👏🏿": { qualifiedRootEmoji: "👏", skinToneOption: u.Zx[u.wN.Dark] },
                "✊🏻": { qualifiedRootEmoji: "✊", skinToneOption: u.Zx[u.wN.Light] },
                "✊🏼": { qualifiedRootEmoji: "✊", skinToneOption: u.Zx[u.wN.MediumLight] },
                "✊🏽": { qualifiedRootEmoji: "✊", skinToneOption: u.Zx[u.wN.Medium] },
                "✊🏾": { qualifiedRootEmoji: "✊", skinToneOption: u.Zx[u.wN.MediumDark] },
                "✊🏿": { qualifiedRootEmoji: "✊", skinToneOption: u.Zx[u.wN.Dark] },
                "✌🏻": { qualifiedRootEmoji: "✌️", skinToneOption: u.Zx[u.wN.Light] },
                "✌🏼": { qualifiedRootEmoji: "✌️", skinToneOption: u.Zx[u.wN.MediumLight] },
                "✌🏽": { qualifiedRootEmoji: "✌️", skinToneOption: u.Zx[u.wN.Medium] },
                "✌🏾": { qualifiedRootEmoji: "✌️", skinToneOption: u.Zx[u.wN.MediumDark] },
                "✌🏿": { qualifiedRootEmoji: "✌️", skinToneOption: u.Zx[u.wN.Dark] },
                "👋🏻": { qualifiedRootEmoji: "👋", skinToneOption: u.Zx[u.wN.Light] },
                "👋🏼": { qualifiedRootEmoji: "👋", skinToneOption: u.Zx[u.wN.MediumLight] },
                "👋🏽": { qualifiedRootEmoji: "👋", skinToneOption: u.Zx[u.wN.Medium] },
                "👋🏾": { qualifiedRootEmoji: "👋", skinToneOption: u.Zx[u.wN.MediumDark] },
                "👋🏿": { qualifiedRootEmoji: "👋", skinToneOption: u.Zx[u.wN.Dark] },
                "👍🏻": { qualifiedRootEmoji: "👍", skinToneOption: u.Zx[u.wN.Light] },
                "👍🏼": { qualifiedRootEmoji: "👍", skinToneOption: u.Zx[u.wN.MediumLight] },
                "👍🏽": { qualifiedRootEmoji: "👍", skinToneOption: u.Zx[u.wN.Medium] },
                "👍🏾": { qualifiedRootEmoji: "👍", skinToneOption: u.Zx[u.wN.MediumDark] },
                "👍🏿": { qualifiedRootEmoji: "👍", skinToneOption: u.Zx[u.wN.Dark] },
                "👎🏻": { qualifiedRootEmoji: "👎", skinToneOption: u.Zx[u.wN.Light] },
                "👎🏼": { qualifiedRootEmoji: "👎", skinToneOption: u.Zx[u.wN.MediumLight] },
                "👎🏽": { qualifiedRootEmoji: "👎", skinToneOption: u.Zx[u.wN.Medium] },
                "👎🏾": { qualifiedRootEmoji: "👎", skinToneOption: u.Zx[u.wN.MediumDark] },
                "👎🏿": { qualifiedRootEmoji: "👎", skinToneOption: u.Zx[u.wN.Dark] },
            };
            function l(i) {
                const e = t.useMemo(() => (0, r.W)(i.emojiInfo).emojis, [i.emojiInfo]),
                    { emojiData: o, skinTone: n } = (function (i, e) {
                        const { rootQualifiedEmoji: o, skinToneOption: t } = d(i),
                            n = o && e ? e[o] : void 0;
                        return { emojiData: n, skinTone: t };
                    })(i.emojiString, e);
                return o ? t.createElement(s.Z, { emoji: o, skinTone: n, style: i.style }) : null;
            }
            const c = 3e3;
            function f(i) {
                const e = t.useRef(new n.Z.Value(0)).current,
                    o = [0, 1, 2, 3],
                    a = { translateX: { inputRange: o, outputRange: ["0%", "0%", "40%", "40%"] }, translateY: { inputRange: o, outputRange: ["0%", "0%", "-30%", "-30%"] }, scale: { inputRange: o, outputRange: [0, 1.25, 0.6, 0] } };
                return (
                    t.useEffect(
                        () => (
                            n.Z.sequence([n.Z.spring(e, k({ toValue: o[1] })), n.Z.spring(e, k({ toValue: o[2] })), ...(i.persistAfterAnimation ? [] : [n.Z.delay(c), n.Z.spring(e, k({ toValue: o[3] }))])]).start(i.onAnimationEnd),
                            () => {
                                e.resetAnimation();
                            }
                        ),
                        [i.reaction],
                    ),
                    t.createElement(n.Z.View, { style: [p.container, i.style, { transform: [{ translate3d: "0, 0, 0" }, { translateX: e.interpolate(a.translateX) }, { translateY: e.interpolate(a.translateY) }, { scale: e.interpolate(a.scale) }] }] }, t.createElement(l, { emojiInfo: i.emojiInfo, emojiString: i.reaction, style: p.emoji }))
                );
            }
            function k(i) {
                return { ...i, bounciness: 2, useNativeDriver: !1 };
            }
            const p = a.default.create((i) => ({ container: { boxShadow: i.boxShadows.xSmall }, emoji: { width: "67%", height: "67%" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ParticipantReaction.cbe9ac3a.js.map
