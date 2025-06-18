"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Grok"],
    {
        223526: (e, t, o) => {
            o.r(t), o.d(t, { default: () => b });
            var r = o(202784),
                a = o(325686),
                s = o(107267),
                n = o(782261),
                i = o(194504),
                l = o(530732),
                c = o(731708),
                d = o(215337),
                u = o(392237),
                p = o(457566),
                g = o(306677),
                m = o(725405),
                h = o(979512);
            const y = u.default.create((e) => ({ grokIcon: { transition: "color 0.2s", color: e.colors.gray700, width: 16, heigth: 16, position: "relative" }, grokIconHovered: { color: e.colors.text }, grokFollowupsContainer: { marginTop: e.spaces.space12, position: "relative", maxWidth: "100%" }, label: { transition: "color 0.2s", color: e.colors.gray700 }, labelHover: { color: e.colors.text }, carousel: { maxWidth: "100%" }, grokButton: { borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, color: e.colors.gray900, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4, gap: e.spaces.space4, transition: "background-color 0.2s", flexDirection: "row", alignItems: "center" }, hoveredButton: { backgroundColor: e.colors.gray100 }, buttonsContainer: { flexDirection: "row", gap: e.spaces.space4 }, carouselShadow: { height: "100%", position: "absolute", top: 0, width: 12, zIndex: 10, pointerEvents: "none" }, carouselStartShadow: { start: 0 }, carouselEndShadow: { end: 0 } })),
                b = ({ isFocal: e, tweet: t }) => {
                    const o = n.Z.getOriginalTweet(t),
                        b = (0, s.useLocation)(),
                        f = (0, m.Z)(),
                        { openGrok: w } = (0, h.Z)(),
                        [_, S] = r.useState(!0),
                        [k, v] = r.useState(!0),
                        I = r.useRef(!1),
                        E = r.useRef(new Set()),
                        C = r.useRef(new Set()),
                        O = o.grok_analysis_followups,
                        x = r.useCallback(() => {
                            if (!I.current) return;
                            const e = new Set([...C.current].filter((e) => !E.current.has(e)));
                            for (const t of e) f.scribe({ element: "grok_post_analysis_followup", action: "impression", data: { message: (O && O[t]) || "" } }), E.current.add(t);
                        }, [f, O, I, C, E]),
                        P = r.useCallback(
                            ({ index: e, intersectionRatio: t }) => {
                                O && (0 === e && S(1 === t), e === O.length - 1 && v(1 === t), !C.current.has(e) && t > 0.9 && (C.current.add(e), x()));
                            },
                            [O, C, x],
                        ),
                        Z = r.useCallback(() => {
                            (I.current = !0), x();
                        }, [x]);
                    return b.pathname.startsWith("/i/trending") || !O || 0 === O.length
                        ? null
                        : r.createElement(
                              a.Z,
                              { style: y.grokFollowupsContainer },
                              r.createElement(g.D, { id: `followups_${o.id_str}`, onFullyVisible: Z, position: "bottom", testID: `followups_${o.id_str}` }),
                              r.createElement(
                                  i.Z,
                                  { buttonsContainerStyle: y.buttonsContainer, onVisibleRangeChange: P, style: y.carousel, withSingleIndexButtons: !0 },
                                  O.map((o, s) =>
                                      r.createElement(
                                          l.Z,
                                          {
                                              accessibilityRole: "button",
                                              key: `post_analysis_${o}_${s}`,
                                              onPress: () => {
                                                  const r = `https://x.com${t.permalink}`;
                                                  f.scribe({ element: "grok_post_analysis_followup", action: "click", data: { message: o, grok_details: { item_index: s } } }), w({ text: `${o}\n${r}`, autoSubmit: !0, source: e ? "post_analysis_followup_details_page" : "post_analysis_followup_timeline", promptMetadata: { promptSource: "GROK_ANALYZE", action: "INPUT", properties: { element: "FOLLOW_UP" } } });
                                              },
                                              withoutInteractiveStyles: !0,
                                          },
                                          ({ isHovered: e }) => r.createElement(a.Z, { style: [y.grokButton, e ? y.hoveredButton : void 0] }, 0 === s ? r.createElement(p.x1, { style: [y.grokIcon, e ? y.grokIconHovered : void 0] }) : null, r.createElement(c.ZP, { style: [y.label, e ? y.labelHover : void 0] }, o)),
                                      ),
                                  ),
                              ),
                              _ ? null : r.createElement(d.Z, { angle: 90, colors: [u.default.theme.colors.cellBackground, u.default.theme.colors.transparent], style: [y.carouselShadow, y.carouselStartShadow] }),
                              k ? null : r.createElement(d.Z, { angle: 90, colors: [u.default.theme.colors.transparent, u.default.theme.colors.cellBackground], style: [y.carouselShadow, y.carouselEndShadow] }),
                          );
                };
        },
        806528: (e, t, o) => {
            o.d(t, { Bz: () => c, ZW: () => m, ey: () => u, fw: () => i, iG: () => g, wM: () => l });
            var r = o(499627),
                a = o(341276);
            const s = "geoLocation",
                n = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const i = (e) => e[s],
                l = (e) => e[s].permissionStatus,
                c = (e) => e[s].position,
                d = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: d }),
                p = "rweb/geoLocation/SET_POSITION",
                g = () => (e, t) =>
                    h()
                        .then((t) => e({ payload: t, type: p }))
                        .catch((t) => (e(u(a.S.denied)), Promise.reject(t))),
                m = () => (e, t) => (c(t()) ? Promise.resolve() : e(g())),
                h = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const o = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(o);
                        }, t),
                    );
            r.Z.register({
                [s]: function (e = n, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d:
                            return { ...e, permissionStatus: t.payload };
                        case p:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, o) => {
            o.d(t, { M: () => a, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                a = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        730895: (e, t, o) => {
            var r = o(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, o) => {
            var r = o(609859),
                a = o(807400),
                s = o(396616),
                n = o(730895),
                i = o(824229),
                l = r.RegExp,
                c = l.prototype;
            a &&
                i(function () {
                    var e = !0;
                    try {
                        l(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        o = "",
                        r = e ? "dgimsy" : "gimsy",
                        a = function (e, r) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (o += r), !0;
                                },
                            });
                        },
                        s = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var n in (e && (s.hasIndices = "d"), s)) a(n, s[n]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || o !== r;
                }) &&
                s(c, "flags", { configurable: !0, get: n });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Grok.4dc1c64a.js.map
