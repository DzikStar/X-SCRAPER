"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TV-7d239244"],
    {
        57431: (e, t, a) => {
            a.d(t, { Z: () => ee });
            a(136728);
            var r = a(202784),
                n = a(325686),
                o = a(731708),
                l = a(721266),
                s = a(392237),
                i = a(111677),
                c = a.n(i),
                u = a(686010),
                d = a(988428),
                p = a(952793),
                y = a(946099),
                m = a(270704),
                g = a(136483);
            const b = Object.freeze({ FontColor: "FontColor", FontSize: "FontSize", FontFamily: "FontFamily", TextOpacity: "TextOpacity", BackgroundColor: "BackgroundColor", BackgroundOpacity: "BackgroundOpacity" }),
                C = Object.freeze({ Color: "color", FontSize: "fontSize", FontFamily: "fontFamily", BackgroundColor: "backgroundColor" }),
                f = Object.freeze({ CaptionStyle: "CaptionStyle", Speed: "Speed", Quality: "Quality", ReportDSA: "ReportDSA", ...b }),
                v = Object.freeze({ White: "rgba(255, 255, 255, 1.0)", Yellow: "rgba(255, 255, 0, 1.0)", Green: "rgba(0, 255, 0, 1.0)", Cyan: "rgba(0, 255, 255, 1.0)", Blue: "rgba(0, 0, 255, 1.0)", Magenta: "rgba(255, 0, 255, 1.0)", Red: "rgba(255, 0, 0, 1.0)", Black: "rgba(0, 0, 0, 1.0)" }),
                h = Object.freeze({ White: "rgba(255, 255, 255, 0.5)", Yellow: "rgba(255, 255, 0, 0.5)", Green: "rgba(0, 255, 0, 0.5)", Cyan: "rgba(0, 255, 255, 0.5)", Blue: "rgba(0, 0, 255, 0.5)", Magenta: "rgba(255, 0, 255, 0.5)", Red: "rgba(255, 0, 0, 0.5)", Black: "rgba(0, 0, 0, 0.5)" }),
                k = RegExp("(?:rgb\\(\\s?(?<red>[1-2]?[0-9]?[0-9]?)\\s?,\\s?(?<green>[1-2]?[0-9]?[0-9]?)\\s?,\\s?(?<blue>[1-2]?[0-9]?[0-9]?)\\s?\\)|rgba\\(\\s?(?<red_alpha>[1-2]?[0-9]?[0-9]?)\\s?,\\s?(?<green_alpha>[1-2]?[0-9]?[0-9]?)\\s?,\\s?(?<blue_alpha>[1-2]?[0-9]?[0-9]?)\\s?,\\s?(?<opacity>[0]?\\.?[0-9]+|1\\.0)\\s?\\))"),
                E =
                    (RegExp("(?:rgb\\(\\s?[1-2]?[0-9]?[0-9]?\\s?,\\s?[1-2]?[0-9]?[0-9]?\\s?,\\s?[1-2]?[0-9]?[0-9]?\\s?\\)|rgba\\(\\s?[1-2]?[0-9]?[0-9]?\\s?,\\s?[1-2]?[0-9]?[0-9]?\\s?,\\s?[1-2]?[0-9]?[0-9]?\\s?,\\s?[0]?\\.?[0-9]+|1\\.0\\s?\\))"),
                    (e, t, a) => (e) => (t) => {
                        const a = k.exec(e),
                            r = k.exec(t),
                            n = a?.groups?.red || a?.groups?.red_alpha || "255",
                            o = a?.groups?.green || a?.groups?.green_alpha || "255",
                            l = a?.groups?.blue || a?.groups?.blue_alpha || "255";
                        return n === (r?.groups?.red || r?.groups?.red_alpha || "255") && o === (r?.groups?.green || r?.groups?.green_alpha || "255") && l === (r?.groups?.blue || r?.groups?.blue_alpha || "255");
                    }),
                S = E(),
                w = E(),
                x = (e) => (t) => (a) => {
                    const r = k.exec(a);
                    return t === (r ? r?.groups?.opacity || e : void 0);
                },
                P = x("1.0"),
                _ = x("1.0"),
                F = { type: b.FontColor, displayName: "", styleName: "", propertyName: "", values: [] },
                R = [
                    { name: c().a4ee9394, value: v.White, isEqual: S(v.White), icon: r.createElement(g.default, { color: v.White }) },
                    { name: c().d818cdd6, value: v.Yellow, isEqual: S(v.Yellow), icon: r.createElement(g.default, { color: v.Yellow }) },
                    { name: c().a7c2204a, value: v.Green, isEqual: S(v.Green), icon: r.createElement(g.default, { color: v.Green }) },
                    { name: c().a9f3474c, value: v.Cyan, isEqual: S(v.Cyan), icon: r.createElement(g.default, { color: v.Cyan }) },
                    { name: c().a52d0fde, value: v.Blue, isEqual: S(v.Blue), icon: r.createElement(g.default, { color: v.Blue }) },
                    { name: c().i50b6538, value: v.Magenta, isEqual: S(v.Magenta), icon: r.createElement(g.default, { color: v.Magenta }) },
                    { name: c().jffeb664, value: v.Red, isEqual: S(v.Red), icon: r.createElement(g.default, { color: v.Red }) },
                    { name: c().e375c2d0, value: v.Black, isEqual: S(v.Black), icon: r.createElement(g.default, { color: v.Black }) },
                ],
                Z = (e) => `linear-gradient(${e}, ${e})`,
                T = [
                    { name: c().a4ee9394, value: h.White, isEqual: w(h.White), icon: r.createElement(g.default, { color: v.White }) },
                    { name: c().d818cdd6, value: h.Yellow, isEqual: w(h.Yellow), icon: r.createElement(g.default, { color: v.Yellow }) },
                    { name: c().a7c2204a, value: h.Green, isEqual: w(h.Green), icon: r.createElement(g.default, { color: v.Green }) },
                    { name: c().a9f3474c, value: h.Cyan, isEqual: w(h.Cyan), icon: r.createElement(g.default, { color: v.Cyan }) },
                    { name: c().a52d0fde, value: h.Blue, isEqual: w(h.Blue), icon: r.createElement(g.default, { color: v.Blue }) },
                    { name: c().i50b6538, value: h.Magenta, isEqual: w(h.Magenta), icon: r.createElement(g.default, { color: v.Magenta }) },
                    { name: c().jffeb664, value: h.Red, isEqual: w(h.Red), icon: r.createElement(g.default, { color: v.Red }) },
                    { name: c().e375c2d0, value: h.Black, isEqual: w(h.Black), icon: r.createElement(g.default, { color: v.Black }) },
                ],
                N = Object.freeze({
                    [b.FontColor]: { type: b.FontColor, propertyName: "color", styleName: C.Color, displayName: c().c2c5dea4, values: R },
                    [b.FontSize]: {
                        type: b.FontSize,
                        propertyName: "font-size",
                        styleName: C.FontSize,
                        displayName: c().ce494bb4,
                        values: [
                            { name: "50%", value: "50%" },
                            { name: "75%", value: "75%" },
                            { name: "100%", value: "100%" },
                            { name: "200%", value: "200%" },
                            { name: "300%", value: "300%" },
                        ],
                    },
                    [b.FontFamily]: {
                        type: b.FontFamily,
                        propertyName: "font-family",
                        styleName: C.FontFamily,
                        displayName: c().ce71b3d0,
                        values: [
                            { name: c().d2eb1582, value: "" },
                            { name: c().e684030e, value: "Arial, sans-serif", textStyle: { fontFamily: "Arial, sans-serif" } },
                            { name: c().jad3900c, value: '"Times New Roman", serif', textStyle: { fontFamily: '"Times New Roman", serif' } },
                            { name: c().e205f3a0, value: '"Courier New", monospace', textStyle: { fontFamily: '"Courier New", monospace' } },
                        ],
                    },
                    [b.TextOpacity]: {
                        type: b.TextOpacity,
                        propertyName: "color",
                        styleName: C.Color,
                        displayName: c().d207d39a,
                        values: [
                            { name: "50%", value: "0.5", isEqual: P("0.5") },
                            { name: "75%", value: "0.75", isEqual: P("0.75") },
                            { name: "100%", value: "1.0", isEqual: P("1.0") },
                        ],
                    },
                    [b.BackgroundColor]: { type: b.BackgroundColor, propertyName: "background", styleName: C.BackgroundColor, displayName: c().a562039c, values: T },
                    [b.BackgroundOpacity]: {
                        type: b.BackgroundOpacity,
                        propertyName: "background",
                        styleName: C.BackgroundColor,
                        displayName: c().h44e879e,
                        values: [
                            { name: "25%", value: "0.25", isEqual: _("0.25") },
                            { name: "50%", value: "0.5", isEqual: _("0.5") },
                            { name: "75%", value: "0.75", isEqual: _("0.75") },
                            { name: "100%", value: "1.0", isEqual: _("1.0") },
                        ],
                    },
                }),
                B = ({ items: e, name: t, style: a }) => r.createElement(n.Z, { style: a }, e);
            var O = a(913973),
                V = a(834048),
                $ = a(467537);
            const L = ({ checked: e, description: t, icon: a, name: l, onClick: s, textStyle: i, title: c, value: u }) => r.createElement($.C, { "aria-label": void 0, name: l, onPress: () => s?.(u), role: "button", style: z.interactiveItem }, r.createElement(n.Z, { style: z.itemContainer }, r.createElement(n.Z, { style: z.textContainer }, r.createElement(o.ZP, { color: "text", size: "headline1", style: i, weight: "bold" }, a ? r.createElement(V.D, { style: z.icon }, a) : null, c), t ? r.createElement(o.ZP, { style: [z.descriptionText, i] }, t) : null), e ? r.createElement(O.default, null) : null)),
                z = s.default.create((e) => ({ interactiveItem: { borderRadius: e.borderRadii.xLarge, marginBottom: e.spaces.space24 }, itemContainer: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.xLarge, border: "1px solid rgba(255, 255, 255, 0.10)", backdropFilter: "blur(0px)", padding: e.spaces.space8, paddingHorizontal: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, textContainer: { flexDirection: "column" }, descriptionText: { marginTop: e.spaces.space8 }, icon: { marginEnd: e.spaces.space8 } })),
                A = c().b843ced4,
                I = -1,
                M = [
                    { text: c().e30d2cea, rate: 0.5 },
                    { text: c().f03848b8, rate: 1 },
                    { text: c().d030db62, rate: 1.25 },
                    { text: c().ga63a594, rate: 1.5 },
                    { text: c().f571bc5a, rate: 1.75 },
                    { text: c().d0284204, rate: 2 },
                ],
                q = (e) => `${Math.min(e.height, e.width)}p`,
                D = (e, t) => {
                    const a = t && q(t);
                    return -1 === e ? (a ? `${A} (${a})` : A) : a || "";
                },
                j = c().bb081ea2,
                H = c().de906774,
                Q = c().caca839e,
                W = c().b049f56c,
                Y = c().fa7169d8,
                U = c().c973ec9c,
                G = c().e9670a81,
                X = c().d0e1b720,
                K = c().j59f0b94,
                J = (e) => {
                    const t = document.createElement("span").style;
                    if (e)
                        for (let a = 0; a < e?.length; a++) {
                            const r = e.item(a);
                            t.setProperty(r, e.getPropertyValue(r));
                        }
                    return t;
                },
                ee = ({ authorScreenName: e, onSettingsClose: t, tweetUrl: a }) => {
                    const [s, i] = r.useState(void 0),
                        c = (0, p.hC)("dsa_report_flow_enabled"),
                        { captionStyle: g, playerApiRef: C, playerState: v, setCaptionStyle: h } = (0, m.L)(),
                        E = v && (0, d.Ci)(v),
                        S = v?.playbackRate || 1,
                        w = r.useMemo(() => E?.availableResolutions || [], [E?.availableResolutions]),
                        x = v?.qualityLevel || I,
                        P = w.find((e) => e.bitrate === E?.currentBitrate),
                        _ = r.useCallback(() => (i(f.Quality), !0), []),
                        R = r.useCallback(() => (i(f.Speed), !0), []),
                        T = r.useCallback(() => (i(f.CaptionStyle), !0), []),
                        O = r.useCallback((e) => {
                            const t = ("string" == typeof e && b[e]) || f.CaptionStyle;
                            return i(t), !0;
                        }, []),
                        V = r.useCallback(() => (i(f.ReportDSA), !0), []),
                        $ = r.useCallback((e) => (C?.current?.setQualityLevel("number" == typeof e ? e : I), !0), [C]),
                        z = r.useCallback((e) => (C?.current?.setPlaybackRate("number" == typeof e ? e : 1), !0), [C]),
                        A = r.useCallback(
                            (e, t, a) => {
                                let r = t;
                                const n = k.exec(g?.getPropertyValue(e) || "")?.groups?.opacity,
                                    o = k.exec(t);
                                if (n) {
                                    r = `rgba(${o?.groups?.red || o?.groups?.red_alpha || a},${o?.groups?.green || o?.groups?.green_alpha || a},${o?.groups?.blue || o?.groups?.blue_alpha || a},${n})`;
                                }
                                return r;
                            },
                            [g],
                        ),
                        ee = r.useCallback(
                            (e, t) => {
                                if (void 0 === t || "number" == typeof t) return !1;
                                const a = A(e, t, "255"),
                                    r = J(g);
                                return r?.setProperty(e || "", a), h(r), !0;
                            },
                            [A, g, h],
                        ),
                        ae = r.useCallback(
                            (e, t) => {
                                if (void 0 === t || "number" == typeof t) return !1;
                                const a = A(e, t, "0"),
                                    r = J(g);
                                return r?.setProperty(e || "", Z(a)), h(r), !0;
                            },
                            [A, g, h],
                        ),
                        re = r.useCallback(
                            (e, t, a) => {
                                const r = k.exec(g?.getPropertyValue(e) || "");
                                return `rgba(${r?.groups?.red || r?.groups?.red_alpha || a}, ${r?.groups?.green || r?.groups?.green_alpha || a}, ${r?.groups?.blue || r?.groups?.blue_alpha || a}, ${t})`;
                            },
                            [g],
                        ),
                        ne = r.useCallback(
                            (e, t) => {
                                if (void 0 === t || "number" == typeof t) return !1;
                                const a = re(e, t, "255"),
                                    r = J(g);
                                return r?.setProperty(e || "", a), h(r), !0;
                            },
                            [re, g, h],
                        ),
                        oe = r.useCallback(
                            (e, t) => {
                                if (void 0 === t || "number" == typeof t) return !1;
                                const a = re(e, t, "0"),
                                    r = J(g);
                                return r?.setProperty(e || "", Z(a)), h(r), !0;
                            },
                            [re, g, h],
                        ),
                        le = r.useCallback((e) => ee(N.FontColor?.propertyName || "", e), [ee]),
                        se = r.useCallback((e) => ae(N.BackgroundColor?.propertyName || "", e), [ae]),
                        ie = r.useCallback((e) => ne(N.TextOpacity?.propertyName || "", e), [ne]),
                        ce = r.useCallback((e) => oe(N.BackgroundOpacity?.propertyName || "", e), [oe]),
                        ue = r.useCallback(
                            (e, t) => {
                                if (void 0 === t) return !1;
                                const a = "number" == typeof t ? t.toString() : t,
                                    r = J(g);
                                return r?.setProperty(e || "", a), h(r), !0;
                            },
                            [g, h],
                        ),
                        de = r.useCallback((e) => ue(N.FontSize?.propertyName || "", e), [ue]),
                        pe = r.useCallback((e) => ue(N.FontFamily?.propertyName || "", e), [ue]),
                        ye = r.useCallback(() => (s ? i(b?.[s] ? f.CaptionStyle : void 0) : t(), !0), [t, s]),
                        me = r.useCallback(() => !0, []),
                        ge = r.useMemo(() => {
                            switch (s) {
                                case f.Quality:
                                    return W;
                                case f.Speed:
                                    return H;
                                default:
                                    return j;
                            }
                        }, [s]),
                        be = r.useCallback(() => M.map((e, t) => r.createElement(L, { checked: e.rate === S, key: `${f.Speed}-${t}`, name: `${f.Speed}-${t}`, onClick: z, title: e.text, value: e.rate })), [z, S]),
                        Ce = r.useCallback(
                            () =>
                                Object.keys(N).map((e, t) => {
                                    const a = N[e] || F,
                                        n = g?.getPropertyValue(a.propertyName),
                                        o = a.values[a.values.findIndex((e) => (e.isEqual ? e.isEqual(n || "") : e.value === n))];
                                    return r.createElement(L, { description: o?.name || K, key: `${f.CaptionStyle}-${t}`, name: `${f.CaptionStyle}-${t}`, onClick: O, title: a.displayName, value: e });
                                }),
                            [g, O],
                        ),
                        fe = r.useCallback(
                            (e) => {
                                const t = { [b.FontColor]: le, [b.FontSize]: de, [b.FontFamily]: pe, [b.TextOpacity]: ie, [b.BackgroundColor]: se, [b.BackgroundOpacity]: ce };
                                return e.values.map((a, n) => {
                                    const o = g?.getPropertyValue(e.propertyName),
                                        l = a.isEqual ? a.isEqual(o || "") : a.value === o;
                                    return r.createElement(L, { checked: l, icon: a.icon, key: `${e.styleName}-${n}`, name: `${e.styleName}-${n}`, onClick: t[e.type], textStyle: a.textStyle, title: a.name || "", value: a.value });
                                });
                            },
                            [g, se, ce, le, pe, de, ie],
                        ),
                        ve = r.useCallback(() => {
                            const e = r.createElement(L, { checked: I === x, key: `${f.Quality}.0`, name: `${f.Quality}.0`, onClick: $, title: D(I, I === x ? P : null), value: I }),
                                t = w
                                    .slice()
                                    .reverse()
                                    .map((e, t) => {
                                        if (!(e.bitrate < 7e5 && e.level !== x)) return r.createElement(L, { checked: e.level === x, key: `${f.Quality}.${t + 1}`, name: `${f.Quality}.${t + 1}`, onClick: $, title: q(e), value: e.level });
                                    })
                                    .filter(Boolean),
                                a = [e];
                            return a.push(...t), a;
                        }, [w, x, P, $]),
                        he = (0, p.hC)("tv_app_enable_lg_speed_setting"),
                        ke = !!(!window?.webOSSystem && !window?.webOS) || he,
                        Ee = (0, p.hC)("tv_app_enable_caption_style_setting"),
                        Se = r.useCallback(() => {
                            const e = [r.createElement(L, { description: D(x, P), key: "settingsList.0", name: "settingsList.0", onClick: _, title: W })];
                            var t;
                            return ke && e.push(r.createElement(L, { description: ((t = S), M.find((e) => e.rate === t)?.text || ""), key: "settingsList.1", name: "settingsList.1", onClick: R, title: H })), Ee && e.push(r.createElement(L, { key: "settingsList.2", name: "settingsList.2", onClick: T, title: Q })), c && e.push(r.createElement(L, { key: "settingsList.3", name: "settingsList.3", onClick: V, title: y.yh })), e;
                        }, [x, P, T, _, V, R, S, c, Ee, ke]),
                        we = r.useMemo(() => r.createElement(n.Z, null, r.createElement(o.ZP, { color: "text", size: "body", style: te.reportText }, Y), r.createElement(o.ZP, { align: "center", color: "primary", size: "title4", style: te.reportText }, "x.com/i/tvreport"), r.createElement(o.ZP, { color: "text", size: "headline2", style: te.reportText }, U), r.createElement(o.ZP, { color: "text", size: "headline2", style: te.reportText, weight: "bold" }, G({ screenName: e })), r.createElement(l.Z, { size: "space12", style: te.reportText }), r.createElement(o.ZP, { color: "text", size: "headline2", style: te.reportText }, X), r.createElement(o.ZP, { color: "text", size: "headline2", style: te.reportText, weight: "bold" }, a)), [e, a]),
                        xe = r.useMemo(() => {
                            switch (s) {
                                case f.Quality:
                                    return r.createElement(B, { items: ve(), name: W });
                                case f.Speed:
                                    return r.createElement(B, { items: be(), name: H });
                                case f.CaptionStyle:
                                    return r.createElement(B, { items: Ce(), name: Q });
                                case b.FontColor:
                                    return r.createElement(B, { items: fe(N.FontColor || F), name: N.FontColor?.displayName || "" });
                                case b.FontSize:
                                    return r.createElement(B, { items: fe(N.FontSize || F), name: N.FontSize?.displayName || "" });
                                case b.FontFamily:
                                    return r.createElement(B, { items: fe(N.FontFamily || F), name: N.FontFamily?.displayName || "" });
                                case b.TextOpacity:
                                    return r.createElement(B, { items: fe(N.TextOpacity || F), name: N.TextOpacity?.displayName || "" });
                                case b.BackgroundColor:
                                    return r.createElement(B, { items: fe(N.BackgroundColor || F), name: N.BackgroundColor?.displayName || "" });
                                case b.BackgroundOpacity:
                                    return r.createElement(B, { items: fe(N.BackgroundOpacity || F), name: N.BackgroundOpacity?.displayName || "" });
                                case f.ReportDSA:
                                    return we;
                                default:
                                    return r.createElement(B, { items: Se(), name: "settingsList" });
                            }
                        }, [s, ve, be, Ce, fe, we, Se]);
                    return E ? r.createElement(u.Z, { "aria-label": void 0, autoFocus: !0, autoRestoreFocus: !0, isFocusBoundary: !0, name: "settings", onEscapeOrBack: ye, onPress: me, role: "region", style: te.settingsContainer, trackChildren: !0 }, r.createElement(o.ZP, { color: "text", size: "title4", style: te.settingsText, weight: "heavy" }, s === f.ReportDSA ? y.yh : ge), xe) : null;
                },
                te = s.default.create((e) => ({ settingsContainer: { width: "30%", minHeight: "50%", backgroundColor: e.colors.gray300, opacity: 0.8, position: "absolute", end: e.spaces.space32, top: e.spaces.space32, borderRadius: e.borderRadii.xLarge, display: "flex", paddingHorizontal: e.spaces.space24, paddingTop: e.spaces.space24, border: "1px solid rgba(255, 255, 255,p 0.10)", backdropFilter: "blur(0px)" }, settingsText: { marginBottom: e.spaces.space24 }, reportText: { marginBottom: e.spaces.space16 } }));
        },
        270704: (e, t, a) => {
            a.d(t, { L: () => S, Z: () => E });
            a(136728), a(571372);
            var r = a(202784),
                n = a(396342),
                o = a(107267),
                l = a(516951),
                s = a(902641),
                i = a(273413),
                c = a(944800),
                u = a(521878),
                d = a(971813),
                p = a(988428),
                y = a(334522),
                m = a(898063),
                g = a(125363),
                b = a(105788),
                C = a(471494),
                f = a(839661),
                v = a(509423);
            const h = 5e3,
                k = r.createContext({ isLoaded: !1, playerApi: null, playerApiRef: null, playerState: null, playerStateRef: null, setPlayerApi: l.Z, setPlayerState: l.Z, showControls: !1, showConversation: !1, showRelatedVideos: !1, showSettings: !1, showPlayNext: !1, animatingConversationOut: !1, openControls: l.Z, closeControls: l.Z, toggleControls: l.Z, openSettings: l.Z, closeSettings: l.Z, openRelatedVideos: l.Z, closeRelatedVideos: l.Z, openConversation: l.Z, closeConversation: l.Z, resetTimeout: l.Z, setCaptionStyle: l.Z, captionStyle: void 0, play: () => !0, pause: () => !0, playPause: () => !0, rewind: () => !0, fastForward: () => !0, setPlaybackLive: l.Z, verticalScrollFraction: 0, setVerticalScrollFraction: l.Z, scrolledVideosIndex: null, scrolledVideosHistory: null });
            function E({ children: e }) {
                const t = r.useRef(!1),
                    a = r.useRef(),
                    [l, E] = r.useState(null),
                    [S, w] = r.useState(null),
                    x = r.useRef(null),
                    P = r.useRef(null),
                    [_, F] = r.useState(!1),
                    [R, Z] = r.useState(!1),
                    [T, N] = r.useState(!1),
                    [B, O] = r.useState(!1),
                    [V, $] = r.useState(!1),
                    [L, z] = r.useState(!1),
                    [A, I] = r.useState(!1),
                    [M, q] = r.useState(void 0),
                    [D, j] = r.useState(0),
                    { vizioClosedCaptionStyles: H } = (0, c.y)();
                r.useEffect(() => {
                    H !== a.current && (q(H), (a.current = H));
                }, [H]);
                const { clearVoiceHandlers: Q, registerVoiceHandlers: W } = (0, s.B)(),
                    Y = (0, g.v9)(d.G),
                    U = (0, o.useHistory)();
                r.useEffect(
                    () => (
                        W({
                            onupdatestate: () => i.E.Player,
                            onchangenexttrack: () => !!(Y && Y.length > 0) && (U.push(`/i/tv/player/${Y[0].id_str}`), !0),
                            onskipbackward: (e) => (x.current?.skipBy(-e), !0),
                            onskipforward: (e) => (x.current?.skipBy(e), !0),
                            onsetplayposition: (e) => (x.current?.seekTo(e), !0),
                            onchangesubtitlemode: (e) => {
                                const t = P.current && (0, p.Ci)(P?.current)?.hasCaptions;
                                return "MEDIA_FUNCTION_ON" !== e || t ? "MEDIA_FUNCTION_OFF" === e && t && x.current?.toggleCaptions() : x.current?.toggleCaptions(), !0;
                            },
                        }),
                        function () {
                            Q();
                        }
                    ),
                    [Q, U, W, Y],
                ),
                    r.useEffect(() => {
                        window?.Android && (l?.isPlaying ? b.X.onPlayVideo() : b.X.onPauseVideo());
                    }, [l?.isPlaying]);
                const G = r.useCallback((e) => {
                        E(e), (P.current = e);
                    }, []),
                    X = r.useCallback((e) => {
                        w(e), (x.current = e);
                    }, []),
                    K = r.useCallback(() => {
                        B || (F(!0), x.current?.setCaptionDefaultOffset({ bottom: C.eo }));
                    }, [B]),
                    J = r.useCallback(() => {
                        F(!1), x.current?.setCaptionDefaultOffset({ bottom: C.CZ }), (0, n.setFocus)(C.hf);
                    }, []),
                    ee = r.useCallback(() => {
                        _ ? J() : K();
                    }, [J, K, _]),
                    te = (0, y.Z)(`${C.hf}.${f.j4}.${f.kq}.${f.d9}`),
                    ae = (0, y.Z)(`${u.R}.${u.P}`),
                    re = (l && (0, p.Ci)(l)?.currentTimeMs) || 0,
                    ne = (l && (0, p.Ci)(l)?.durationMs) || 0,
                    oe = re >= ne;
                r.useEffect(() => {
                    !L && (l?.isPlaying || (A && "PLAY_REQUESTED" !== l?.controls.playState)) && z(!0), "PLAY_REQUESTED" === l?.controls.playState && I(!0);
                }, [L, l?.controls.playState, l?.isPlaying, A]);
                const { vizioClosedCaptioningEnabled: le } = (0, c.y)();
                r.useEffect(() => {
                    const e = P?.current?.areCaptionsShown;
                    void 0 !== le && e !== le && x.current?.toggleCaptions();
                }, [le]);
                const se = !!re && !!ne && oe && !l?.isScrubbing && !V,
                    ie = L && (_ || (l?.hasPlaybackStarted && !l?.isPlaying)) && !B && !R && !V && !se,
                    ce = r.useCallback(() => {
                        Z(!0);
                    }, []),
                    ue = r.useCallback(() => {
                        R &&
                            (Z(!1),
                            N(!0),
                            setTimeout(() => {
                                N(!1), oe ? ae && (0, n.setFocus)(ae) : l?.isPlaying ? (0, n.setFocus)(C.hf) : te && (0, n.setFocus)(te);
                            }, 200));
                    }, [te, l?.isPlaying, R, ae, oe]);
                se && !t.current && (ue(), J()), (t.current = se);
                const de = r.useCallback(() => {
                        ie && P?.current?.isPlaying && J();
                    }, [J, ie]),
                    [pe] = (0, v.K)(de, h),
                    ye = r.useCallback(() => (O(!0), !0), []),
                    me = r.useCallback(() => {
                        O(!1);
                    }, []),
                    ge = r.useCallback(() => ($(!0), !0), []),
                    be = r.useCallback(() => ($(!1), oe || (K(), pe()), !0), [K, pe, oe]),
                    Ce = r.useCallback(() => {
                        S?.pause();
                    }, [S]),
                    fe = r.useCallback(() => {
                        S?.play();
                    }, [S]);
                r.useEffect(
                    () => (
                        window.addEventListener("offline", Ce),
                        window.addEventListener("online", fe),
                        function () {
                            window.removeEventListener("offline", Ce), window.removeEventListener("online", fe);
                        }
                    ),
                    [Ce, fe],
                ),
                    r.useEffect(() => {
                        l?.isScrubbing ? K() : pe();
                    }, [K, l?.isScrubbing, pe]);
                const ve = r.useRef(0),
                    he = r.useRef(1),
                    ke = r.useRef(),
                    Ee = r.useCallback(() => {
                        const e = () => {
                            const e = ((P?.current && (0, p.Ci)(P?.current)?.currentTimeMs) || 0) + C.Er[ve.current] * he.current;
                            if (e > ne || e <= 0) return x?.current?.setScrubbing(!1), void clearInterval(ke.current);
                            x?.current?.pause(), x?.current?.skipBy(C.Er[ve.current] * he.current);
                        };
                        x?.current?.setScrubbing(!0), ke.current && clearInterval(ke.current), e(), (ke.current = setInterval(e, 1e3));
                    }, [ne]),
                    Se = r.useCallback(() => {
                        ke.current && clearInterval(ke.current), x?.current?.setScrubbing(!1);
                    }, [x]),
                    we = r.useCallback(() => (P?.current && x?.current && (x.current.play(), Se()), !0), [Se]);
                (0, m.ZP)("Play", we);
                const xe = r.useCallback(() => (Se(), se && x?.current?.scrubToFraction(0), P?.current?.isPlaying ? x?.current?.pause() : x?.current?.play(), !0), [se, Se]);
                (0, m.ZP)("PlayPause", xe);
                const Pe = r.useCallback(() => (P?.current && x?.current && (x.current.pause(), Se()), !0), [Se]);
                (0, m.ZP)("PauseOrStop", Pe);
                const _e = r.useCallback(() => {
                        x.current?.scrubToFraction(1);
                    }, []),
                    Fe = r.useCallback(() => (P?.current?.isScrubbing && 1 === he.current ? (ve.current = Math.min(ve.current + 1, C.Er.length - 1)) : ((he.current = 1), (ve.current = 0), Ee()), !0), [Ee]);
                (0, m.ZP)("FastForward", Fe);
                const Re = r.useCallback(() => (P?.current?.isScrubbing && -1 === he.current ? ((he.current = -1), (ve.current = Math.min(ve.current + 1, C.Er.length - 1))) : ((he.current = -1), (ve.current = 0), Ee()), !0), [Ee]);
                (0, m.ZP)("Rewind", Re);
                const Ze = r.useRef(-1),
                    Te = r.useRef([]),
                    Ne = { isLoaded: L, playerApi: S, playerApiRef: x, playerState: l, playerStateRef: P, setPlayerApi: X, setPlayerState: G, animatingConversationOut: T, showControls: ie, showConversation: R, showPlayNext: se, showRelatedVideos: V, showSettings: B, openControls: K, closeControls: J, toggleControls: ee, openSettings: ye, closeSettings: me, openRelatedVideos: ge, closeRelatedVideos: be, resetTimeout: pe, closeConversation: ue, openConversation: ce, captionStyle: M, setCaptionStyle: q, setPlaybackLive: _e, play: we, pause: Pe, playPause: xe, rewind: Re, fastForward: Fe, verticalScrollFraction: D, setVerticalScrollFraction: j, scrolledVideosIndex: Ze, scrolledVideosHistory: Te };
                return r.createElement(k.Provider, { value: Ne }, e);
            }
            function S() {
                const e = r.useContext(k);
                if (void 0 === e) throw new Error("useTVVideoPlayerContext was used outside of its provider TVVideoPlayerContextProvider");
                return e;
            }
        },
        471494: (e, t, a) => {
            a.d(t, { $2: () => u, AZ: () => l, CZ: () => d, Er: () => c, PA: () => o, PX: () => i, eo: () => p, hf: () => n, oj: () => y, qx: () => s });
            var r = a(392237);
            const n = "video-player",
                o = 1e4,
                l = 6e4,
                s = 18e4,
                i = 500,
                c = [o / 1e3, l / 1e3, s / 1e3],
                u = "autoplay_next_disabled",
                d = 100 * r.default.theme.scaleMultiplier,
                p = 300 * r.default.theme.scaleMultiplier,
                y = 140;
        },
        312839: (e, t, a) => {
            a.r(t), a.d(t, { default: () => U });
            var r = a(202784),
                n = a(293115),
                o = a(396342),
                l = a(325686),
                s = a(879891),
                i = a(537392),
                c = a(992942),
                u = a(392237),
                d = a(516951),
                p = a(382880),
                y = a(837880),
                m = a(902641),
                g = a(426200),
                b = a(795290),
                C = a(971813),
                f = a(873930),
                v = a(952793),
                h = a(648839),
                k = a(943052),
                E = a(125363),
                S = a(903558),
                w = a(836255),
                x = a(673932),
                P = a(471494),
                _ = a(653122),
                F = a(400752),
                R = a(284702),
                Z = a(738584),
                T = a(905996),
                N = a(123751),
                B = a(614425),
                O = a(334113),
                V = a(443781),
                $ = a(988428),
                L = a(810082),
                z = a(725516),
                A = a(689642),
                I = a(145177),
                M = a(390387),
                q = a(72552),
                D = a(270704);
            const j = ({ autoplayNextDisabled: e, history: t, onApiReady: a, onStateUpdate: o, tweet: l, video: s }) => {
                const i = (0, z.z)(),
                    c = (0, E.v9)(M.VT),
                    u = (0, E.I0)(),
                    d = l?.card?.binding_values?.broadcast_id?.string_value;
                r.useEffect(() => {
                    if (d) {
                        u(A.Z.fetchOne(d));
                        const e = setInterval(() => {
                            u(A.Z.fetchOne(d));
                        }, 2e4);
                        return function () {
                            clearInterval(e);
                        };
                    }
                }, [u, d]);
                const p = (0, E.v9)((0, I.C)(d)),
                    y = d ? N.Z.forBroadcast(d) : N.Z.forTweet(l?.id_str || ""),
                    m = R.Z.extractVideoProps(y, s, void 0),
                    { featureSwitches: g } = r.useContext(V.rC),
                    b = r.useMemo(() => u((e, t, { api: a }) => a.getHttpClient()), [u]),
                    C = m.source?.variants?.map((e) => ({ src: e.url, type: e.content_type })) || [];
                let f;
                if (m.cta) {
                    const { type: e, url: t } = m.cta;
                    e && t && (f = { type: e, url: t });
                }
                let h = ((0, v.hC)("responsive_web_messages_continue_enabled") && s?.media_results?.result?.watch_info?.last_watched_seconds) || 0;
                (m.durationMs || 0) / 1e3 - h < 5 && (h = 0);
                const k = r.useMemo(() => {
                        const e = { scribeContext: { ...i.contextualScribeNamespace }, enableShortFormCompleteLogging: g.isTrue("responsive_web_video_pcomplete_enabled") },
                            t = {
                                log: (e) => {
                                    const { category: t, data: a, namespace: r } = e;
                                    r?.action && i.scribe({ ...r, data: { ...a, _category_: t, items: [(0, O.P_)(l)] } });
                                },
                            };
                        return new T.Z(t, { log: () => {} }, b, e);
                    }, [i, g, l, b]),
                    S = r.useCallback((e) => o(e), [o]),
                    w = r.useCallback(
                        (e) => {
                            m && m.onSetPlayerApi && m.onSetPlayerApi(e), e.setVolume(1), a(e);
                        },
                        [a, m],
                    ),
                    { captionStyle: x, playerState: P } = (0, D.L)(),
                    _ = (0, F.b9)((0, L.P)(l?.id_str || ""));
                r.useEffect(() => {
                    if (l && s) {
                        const e = (P && (0, $.Ci)(P)?.currentTimeMs) || 0;
                        _({ media_key: s.media_key || "", last_watched_seconds: Math.floor(e / 1e3), last_updated_at: Date.now() });
                    }
                }, [P, _, l, s, y]);
                const j = r.useCallback((e) => {
                    e.target.scrollTop = 0;
                }, []);
                return m && m.source
                    ? r.createElement(
                          n.nO,
                          { namespace: { section: "player" } },
                          r.createElement(Z.Z, { analytics: k, "aria-label": m["aria-label"], aspectRatio: m.aspectRatio, autoplay: !0, basePlayerClass: B.Y7, captionStyle: x || void 0, configType: "static", contentId: m.source.contentId, contentType: "media_entity", cta: f, durationMs: m.durationMs, enableVideoPlayerCaptionRendering: !0, eventId: m.source.eventId, featureProvider: g, geolocationPrompt: m.geolocationPrompt, httpClient: b, includeBroadcastEventAssociation: m.includeBroadcastEventAssociation, intentToPlayTime: m.intentToPlayTime, isFullScreen: !0, key: m.source.contentId, language: c, onApiReady: w, onScroll: j, onStateUpdate: S, playbackSessionId: m.tweetId, poster: m.poster?.url, precache: !1, requestedTimecode: h.toString(), setPlayerApi: m.setPlayer, size: "fill", variants: C, videoId: m.source.videoId, viewCount: m.viewCount, vmapUrl: m.source.vmapUrl }, () => r.createElement(q.Z, { autoplayNextDisabled: e, broadcast: p, history: t, tweet: l })),
                      )
                    : r.createElement(r.Fragment, null);
            };
            var H = a(415805);
            const Q = 1e3;
            function W({ history: e, match: t }) {
                const a = t.params.tweetId,
                    n = r.useMemo(() => w.Z.createHydratorForTweet(a || ""), [a]),
                    u = (0, E.v9)(n),
                    F = (0, E.I0)(),
                    { direction: R } = (0, s.Z)(),
                    Z = "rtl" === R,
                    [T] = (0, k.Z)(),
                    N = r.useRef(!1),
                    B = (0, f.Z)(),
                    O = (0, v.hC)("responsive_web_tv_video_player_swipe_scrolling") && B,
                    V = (0, E.v9)(C.G),
                    $ = r.useRef(null),
                    L = (0, i.Zx)(({ windowHeight: e }) => e),
                    { logMessageToScreen: z } = (0, g.n)();
                r.useEffect(() => {
                    z("TVVideoPlayer is initializing");
                }, [z]);
                const { animatingConversationOut: A, closeConversation: I, playerApiRef: M, playerStateRef: q, scrolledVideosHistory: W, scrolledVideosIndex: U, setPlayerApi: G, setPlayerState: X, setVerticalScrollFraction: K, showControls: J, showConversation: ee, showPlayNext: te, showRelatedVideos: ae, showSettings: re, verticalScrollFraction: ne } = (0, D.L)(),
                    { googleCastSenderConnected: oe } = (0, b.Q)({ playerApiRef: M, playerStateRef: q, tweetId: a }),
                    le = U?.current || 0,
                    se = W?.current.length || 0,
                    ie = (100 * ne).toFixed(1),
                    ce = W?.current[le - 1],
                    ue = W?.current[le + 1],
                    { isSamsungTV: de, samsungContinueWatchingEnabled: pe, samsungPlayerSubscriptionHandler: ye } = (0, m.B)(),
                    me = r.useRef(d.Z);
                r.useEffect(
                    () => (
                        M?.current &&
                            !1 === N.current &&
                            ((N.current = !0),
                            M?.current?.seekTo(+T.get("t") || 0),
                            de &&
                                pe &&
                                (me.current =
                                    M?.current?.subscribe((e) => {
                                        ye?.(e, u?.id_str, u?.text);
                                    }) || d.Z)),
                        () => {
                            me.current?.();
                        }
                    ),
                    [T, ye, de, pe, u?.id_str, u?.text, M],
                );
                const ge = r.useCallback(
                        (e) => {
                            G(e), e.setCaptionDefaultOffset({ bottom: P.CZ });
                        },
                        [G],
                    ),
                    be = r.useCallback(() => {
                        M?.current?.pause();
                    }, [M]);
                r.useEffect(
                    () => (
                        document.addEventListener("hdmi-disconnected", be),
                        document.addEventListener("android-on-pause", be),
                        function () {
                            document.removeEventListener("hdmi-disconnected", be), document.removeEventListener("android-on-pause", be);
                        }
                    ),
                    [be],
                ),
                    r.useEffect(() => {
                        !u && a && F(w.Z.fetchOneIfNeeded(a));
                    }, [F, u, a]),
                    r.useEffect(() => {
                        z(`TV Player tweet: ${+u?.id_str} | ${+a}`);
                    }, [z, u?.id_str, a]),
                    r.useEffect(() => {
                        oe && u?.id_str && (0, o.setFocus)(P.hf);
                    }, [oe, z, u?.id_str, a]);
                const Ce = r.useMemo(
                        () =>
                            (0, p.Z)(() => {
                                a &&
                                    setTimeout(() => {
                                        F(w.Z.fetchOne(a));
                                    }, Q);
                            }),
                        [F, a],
                    ),
                    fe = r.useCallback(
                        (e) => {
                            K((0, y.Z)(e, le === se - 1 ? -0.1 : -1, 0 === le ? 0.1 : 1));
                        },
                        [le, se, K],
                    ),
                    ve = r.useCallback(
                        (t) => {
                            if (!U || !W) return;
                            const a = le + t;
                            if (a !== (0, y.Z)(a, 0, se - 1)) return;
                            const r = W.current[a];
                            r &&
                                (fe(-1 * t),
                                setTimeout(() => {
                                    (U.current = a), F(S.eX.tvRelatedVideosClear()), F(S.eX.playerSetVideo(r)), e.replace((0, x.X5)(r)), fe(0.001);
                                }, P.oj));
                        },
                        [le, F, fe, e, W, se, U],
                    ),
                    he = r.useMemo(() => ({ ...Y.scrollingTransitionStyles, transform: `translateY(${ie}%)`, transition: 0 === ne || 1 === ne || -1 === ne ? `transform ${P.oj}ms ease-in` : null }), [ie, ne]),
                    [ke, Ee, Se] = (0, h.Z)({ direction: "vertical", swipeItemLength: L, handleFraction: fe, handleSwipe: ve }),
                    we = r.useCallback(
                        (e) => {
                            re || J || ee || te || ae || ($.current?.setPointerCapture(e.pointerId), ke(e));
                        },
                        [ke, J, ee, te, ae, re],
                    );
                if (!u) return null;
                if ((O && -1 === U?.current && ((U.current = 0), W?.current?.push(u)), O && U?.current === (W?.current.length || 0) - 1)) {
                    const e = V.filter((e) => !W?.current?.includes(e));
                    e.length && W?.current.push(e[0]);
                }
                const xe = (0, H.Rq)(u);
                if (!xe) return Ce(), null;
                const Pe = Boolean(T.get(P.$2));
                return !Pe && O && te && ve(1), r.createElement(l.Z, null, O && ce && r.createElement(c.Z, { source: (0, H.uS)(ce), style: [Y.playerContainer, Y.previousVideoAbove, he] }), r.createElement(l.Z, { onPointerDown: O ? we : void 0, onPointerMove: O ? Ee : void 0, onPointerUp: O ? Se : void 0, ref: $, style: [Y.playerContainer, ee && Y.playerContainerWithRightPanelOpen, ee && Z && Y.playerContainerWithRightPanelOpenRTL, O && he] }, r.createElement(j, { autoplayNextDisabled: Pe, history: e, onApiReady: ge, onStateUpdate: X, tweet: u, video: xe })), O && ue && r.createElement(c.Z, { source: (0, H.uS)(ue), style: [Y.playerContainer, Y.nextVideoBelow, he] }), r.createElement(l.Z, { style: [Y.conversationContainer, Z && Y.conversationContainerRTL, ee && Y.conversationContainerVisible] }, ee || A ? r.createElement(_.r, { onClose: () => I(), tweet: u }) : null));
            }
            const Y = u.default.create((e) => ({ playerContainer: { position: "fixed", zIndex: 100, width: u.default.supports("width: 100dvw") ? "100dvw" : "100vw", height: u.default.supports("height: 100dvh") ? "100dvh" : "100vh", backgroundColor: e.colors.cellBackground, transition: "width linear 0.2s" }, previousVideoAbove: { bottom: "100%" }, nextVideoBelow: { top: "100%" }, scrollingTransitionStyles: { touchAction: "none" }, playerContainerWithRightPanelOpen: { width: u.default.supports("width: 67dvw") ? "67dvw" : "67vw" }, playerContainerWithRightPanelOpenRTL: { width: u.default.supports("width: 67dvw") ? "67dvw" : "67vw" }, conversationContainer: { position: "fixed", width: u.default.supports("width: 33dvw") ? "33dvw" : "33vw", height: u.default.supports("height: 100dvh") ? "100dvh" : "100vh", zIndex: 100, end: 0, transform: "translate(100%, 0)", transition: "transform linear 0.2s" }, conversationContainerRTL: { transform: "translate(-100%, 0)" }, conversationContainerVisible: { transform: "translate(0, 0)" } }));
            function U({ ...e }) {
                return r.createElement(D.Z, null, r.createElement(n.nO, { namespace: { page: "video-player" } }, r.createElement(W, e)));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TV-7d239244.52cc7fda.js.map
