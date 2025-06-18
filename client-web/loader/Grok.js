"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Grok"],
    {
        223526: (e, t, o) => {
            o.r(t), o.d(t, { default: () => w });
            var r = o(202784),
                a = o(325686),
                n = o(107267),
                i = o(782261),
                s = o(194504),
                l = o(530732),
                c = o(731708),
                d = o(215337),
                u = o(392237),
                p = o(457566),
                g = o(306677),
                m = o(725405),
                h = o(979512);
            const y = u.default.create((e) => ({ grokIcon: { transition: "color 0.2s", color: e.colors.gray700, width: 16, heigth: 16, position: "relative" }, grokIconHovered: { color: e.colors.text }, grokFollowupsContainer: { marginTop: e.spaces.space12, position: "relative", maxWidth: "100%" }, label: { transition: "color 0.2s", color: e.colors.gray700 }, labelHover: { color: e.colors.text }, carousel: { maxWidth: "100%" }, grokButton: { borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, color: e.colors.gray900, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4, gap: e.spaces.space4, transition: "background-color 0.2s", flexDirection: "row", alignItems: "center" }, hoveredButton: { backgroundColor: e.colors.gray100 }, buttonsContainer: { flexDirection: "row", gap: e.spaces.space4 }, carouselShadow: { height: "100%", position: "absolute", top: 0, width: 12, zIndex: 10, pointerEvents: "none" }, carouselStartShadow: { start: 0 }, carouselEndShadow: { end: 0 } })),
                w = ({ isFocal: e, tweet: t }) => {
                    const o = i.Z.getOriginalTweet(t),
                        w = (0, n.useLocation)(),
                        b = (0, m.Z)(),
                        { openGrok: f } = (0, h.Z)(),
                        [v, _] = r.useState(!0),
                        [S, k] = r.useState(!0),
                        E = r.useRef(!1),
                        I = r.useRef(new Set()),
                        C = r.useRef(new Set()),
                        Z = o.grok_analysis_followups,
                        x = r.useCallback(() => {
                            if (!E.current) return;
                            const e = new Set([...C.current].filter((e) => !I.current.has(e)));
                            for (const t of e) b.scribe({ element: "grok_post_analysis_followup", action: "impression", data: { message: (Z && Z[t]) || "" } }), I.current.add(t);
                        }, [b, Z, E, C, I]),
                        O = r.useCallback(
                            ({ index: e, intersectionRatio: t }) => {
                                Z && (0 === e && _(1 === t), e === Z.length - 1 && k(1 === t), !C.current.has(e) && t > 0.9 && (C.current.add(e), x()));
                            },
                            [Z, C, x],
                        ),
                        z = r.useCallback(() => {
                            (E.current = !0), x();
                        }, [x]);
                    return w.pathname.startsWith("/i/trending") || !Z || 0 === Z.length
                        ? null
                        : r.createElement(
                              a.Z,
                              { style: y.grokFollowupsContainer },
                              r.createElement(g.D, { id: `followups_${o.id_str}`, onFullyVisible: z, position: "bottom", testID: `followups_${o.id_str}` }),
                              r.createElement(
                                  s.Z,
                                  { buttonsContainerStyle: y.buttonsContainer, onVisibleRangeChange: O, style: y.carousel, withSingleIndexButtons: !0 },
                                  Z.map((o, n) =>
                                      r.createElement(
                                          l.Z,
                                          {
                                              accessibilityRole: "button",
                                              key: `post_analysis_${o}_${n}`,
                                              onPress: () => {
                                                  const r = `https://x.com${t.permalink}`;
                                                  b.scribe({ element: "grok_post_analysis_followup", action: "click", data: { message: o, grok_details: { item_index: n } } }), f({ text: `${o}\n${r}`, autoSubmit: !0, source: e ? "post_analysis_followup_details_page" : "post_analysis_followup_timeline", promptMetadata: { promptSource: "GROK_ANALYZE", action: "INPUT", properties: { element: "FOLLOW_UP" } } });
                                              },
                                              withoutInteractiveStyles: !0,
                                          },
                                          ({ isHovered: e }) => r.createElement(a.Z, { style: [y.grokButton, e ? y.hoveredButton : void 0] }, 0 === n ? r.createElement(p.x1, { style: [y.grokIcon, e ? y.grokIconHovered : void 0] }) : null, r.createElement(c.ZP, { style: [y.label, e ? y.labelHover : void 0] }, o)),
                                      ),
                                  ),
                              ),
                              v ? null : r.createElement(d.Z, { angle: 90, colors: [u.default.theme.colors.cellBackground, u.default.theme.colors.transparent], style: [y.carouselShadow, y.carouselStartShadow] }),
                              S ? null : r.createElement(d.Z, { angle: 90, colors: [u.default.theme.colors.transparent, u.default.theme.colors.cellBackground], style: [y.carouselShadow, y.carouselEndShadow] }),
                          );
                };
        },
        806528: (e, t, o) => {
            o.d(t, { Bz: () => c, ZW: () => m, ey: () => u, fw: () => s, iG: () => g, wM: () => l });
            var r = o(499627),
                a = o(341276);
            const n = "geoLocation",
                i = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const s = (e) => e[n],
                l = (e) => e[n].permissionStatus,
                c = (e) => e[n].position,
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
                [n]: function (e = i, t) {
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
        355586: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        913315: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
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
                n = o(396616),
                i = o(730895),
                s = o(824229),
                l = r.RegExp,
                c = l.prototype;
            a &&
                s(function () {
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
                        n = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var i in (e && (n.hasIndices = "d"), n)) a(i, n[i]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || o !== r;
                }) &&
                n(c, "flags", { configurable: !0, get: i });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Grok.d3314a1a.js.map
