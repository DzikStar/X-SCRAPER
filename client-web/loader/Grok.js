"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Grok"],
    {
        223526: (e, o, t) => {
            t.r(o), t.d(o, { default: () => _ });
            var r = t(202784),
                a = t(325686),
                l = t(107267),
                s = t(782261),
                n = t(194504),
                i = t(530732),
                c = t(731708),
                u = t(215337),
                d = t(392237),
                p = t(457566),
                g = t(306677),
                h = t(725405),
                m = t(979512);
            const w = d.default.create((e) => ({ grokIcon: { transition: "color 0.2s", color: e.colors.gray700, width: 16, heigth: 16, position: "relative" }, grokIconHovered: { color: e.colors.text }, grokFollowupsContainer: { marginTop: e.spaces.space12, position: "relative", maxWidth: "100%" }, label: { transition: "color 0.2s", color: e.colors.gray700 }, labelHover: { color: e.colors.text }, carousel: { maxWidth: "100%" }, grokButton: { borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, color: e.colors.gray900, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4, gap: e.spaces.space4, transition: "background-color 0.2s", flexDirection: "row", alignItems: "center" }, hoveredButton: { backgroundColor: e.colors.gray100 }, buttonsContainer: { flexDirection: "row", gap: e.spaces.space4 }, carouselShadow: { height: "100%", position: "absolute", top: 0, width: 12, zIndex: 10, pointerEvents: "none" }, carouselStartShadow: { start: 0 }, carouselEndShadow: { end: 0 } })),
                _ = ({ isFocal: e, tweet: o }) => {
                    const t = s.Z.getOriginalTweet(o),
                        _ = (0, l.useLocation)(),
                        b = (0, h.Z)(),
                        { openGrok: k } = (0, m.Z)(),
                        [f, y] = r.useState(!0),
                        [S, v] = r.useState(!0),
                        C = r.useRef(!1),
                        x = r.useRef(new Set()),
                        E = r.useRef(new Set()),
                        Z = t.grok_analysis_followups,
                        I = r.useCallback(() => {
                            if (!C.current) return;
                            const e = new Set([...E.current].filter((e) => !x.current.has(e)));
                            for (const o of e) b.scribe({ element: "grok_post_analysis_followup", action: "impression", data: { message: (Z && Z[o]) || "" } }), x.current.add(o);
                        }, [b, Z, C, E, x]),
                        R = r.useCallback(
                            ({ index: e, intersectionRatio: o }) => {
                                Z && (0 === e && y(1 === o), e === Z.length - 1 && v(1 === o), !E.current.has(e) && o > 0.9 && (E.current.add(e), I()));
                            },
                            [Z, E, I],
                        ),
                        B = r.useCallback(() => {
                            (C.current = !0), I();
                        }, [I]);
                    return _.pathname.startsWith("/i/trending") || !Z || 0 === Z.length
                        ? null
                        : r.createElement(
                              a.Z,
                              { style: w.grokFollowupsContainer },
                              r.createElement(g.D, { id: `followups_${t.id_str}`, onFullyVisible: B, position: "bottom", testID: `followups_${t.id_str}` }),
                              r.createElement(
                                  n.Z,
                                  { buttonsContainerStyle: w.buttonsContainer, onVisibleRangeChange: R, style: w.carousel, withSingleIndexButtons: !0 },
                                  Z.map((t, l) =>
                                      r.createElement(
                                          i.Z,
                                          {
                                              accessibilityRole: "button",
                                              key: `post_analysis_${t}_${l}`,
                                              onPress: () => {
                                                  const r = `https://x.com${o.permalink}`;
                                                  b.scribe({ element: "grok_post_analysis_followup", action: "click", data: { message: t, grok_details: { item_index: l } } }), k({ text: `${t}\n${r}`, autoSubmit: !0, source: e ? "post_analysis_followup_details_page" : "post_analysis_followup_timeline", promptMetadata: { promptSource: "GROK_ANALYZE", action: "INPUT", properties: { element: "FOLLOW_UP" } } });
                                              },
                                              withoutInteractiveStyles: !0,
                                          },
                                          ({ isHovered: e }) => r.createElement(a.Z, { style: [w.grokButton, e ? w.hoveredButton : void 0] }, 0 === l ? r.createElement(p.x1, { style: [w.grokIcon, e ? w.grokIconHovered : void 0] }) : null, r.createElement(c.ZP, { style: [w.label, e ? w.labelHover : void 0] }, t)),
                                      ),
                                  ),
                              ),
                              f ? null : r.createElement(u.Z, { angle: 90, colors: [d.default.theme.colors.cellBackground, d.default.theme.colors.transparent], style: [w.carouselShadow, w.carouselStartShadow] }),
                              S ? null : r.createElement(u.Z, { angle: 90, colors: [d.default.theme.colors.transparent, d.default.theme.colors.cellBackground], style: [w.carouselShadow, w.carouselEndShadow] }),
                          );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Grok.89479b1a.js.map
