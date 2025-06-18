"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown-6bf2d53b"],
    {
        378030: (e, t, n) => {
            n.d(t, { Z: () => v });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(154003),
                c = n(392237),
                l = n(111677),
                s = n.n(l),
                d = n(161924),
                p = n(323265),
                u = n(952793),
                m = n(725516),
                g = n(125363),
                f = n(806528),
                h = n(341276),
                y = n(958602),
                E = n(530326),
                C = n(654917),
                b = n(572929);
            const w = s().a22063d2,
                k = s().db3248a8,
                x = s().ffe0e588;
            function v({ analysisEntityId: e, cardAttachment: t, conversationKey: n, isAnimated: c, userChatItemId: l }) {
                const s = (0, g.I0)(),
                    [v, I] = a.useState(!1),
                    _ = a.useRef(!1),
                    S = (0, g.v9)(f.wM),
                    $ = (0, g.v9)(f.Bz),
                    Z = (0, C.uf)(),
                    P = (0, m.z)(),
                    R = (0, u.hC)("responsive_web_grok_show_citations"),
                    z = !!$,
                    M = S === h.S.granted || z,
                    T = !M && S === h.S.denied;
                a.useEffect(() => {
                    v && z && !_.current && ((_.current = !0), !l && c && s((0, y.I)({ analytics: P, conversationKey: n })), s((0, E.f)({ analytics: P, userChatItemId: l || void 0, conversationKey: n })({ analysisEntityId: e, returnCitations: R })));
                }, [c, Z, P, v, s, l, n, e, z, R]);
                const H = a.useCallback(() => {
                    I(!0), s((0, f.iG)());
                }, [s, I]);
                return T || p.ZP.isAndroid() || z ? null : a.createElement(b.Z, { isAnimated: c }, a.createElement(o.Z, { style: L.container }, a.createElement(o.Z, { style: L.leftContainer }, a.createElement(d.default, null), M ? a.createElement(o.Z, { style: L.searchingLabelContainer }, a.createElement(r.ZP, { style: L.searchingLabel }, a.createElement("span", null, k, "..."))) : a.createElement(r.ZP, null, w)), a.createElement(i.ZP, { disabled: v, onClick: H, size: "small", type: "primaryFilled" }, a.createElement(r.ZP, null, x))));
            }
            const L = c.default.create((e) => ({ container: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", gap: e.spaces.space8 }, leftContainer: { flexShrink: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, searchingLabelContainer: { position: "relative", width: "fit-content", animationDuration: "0.3s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, searchingLabel: { color: e.colors.transparent, backgroundColor: e.colors.gray600, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "0.7s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] } }));
        },
        394418: (e, t, n) => {
            n.d(t, { Z: () => V });
            var a = n(202784),
                o = n(739711),
                r = n(325686),
                i = n(468811),
                c = n.n(i),
                l = n(466792),
                s = n(530732),
                d = n(731708),
                p = n(392237),
                u = n(111677),
                m = n.n(u),
                g = n(660969),
                f = n(25219),
                h = n(419542),
                y = n(988290),
                E = n(572929),
                C = (n(136728), n(616531)),
                b = n(187669);
            const w = new C.aN({ apiKey: "AIzaSyC-2GY8-95swldzMb2tVQPr3ldJfpG13-o", version: "beta" });
            function k({ cardAttachment: e, isExpanded: t, mapId: n, onMarkerClick: o, selectedLocId: i, uniqueMapId: c }) {
                const l = a.useRef(null),
                    s = a.useRef({});
                (0, b.q)(() => {
                    const e = "grok-place-card";
                    if (document.getElementById(e)) return;
                    const t = document.createElement("style");
                    t.setAttribute("id", e),
                        (t.textContent = `\n      a[href^="http://maps.google.com/maps"]{display:none !important}\n      a[href^="https://maps.google.com/maps"]{display:none !important}\n\n      .gmnoprint a, .gmnoprint span, .gm-style-cc {\n          display:none;\n      }\n      .gmnoprint div {\n          background:none !important;\n      }\n\n      @keyframes grok-place-card-fade-in {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n\n      .grok-place-card-marker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        transform: translateY(50%);\n        opacity: 0;\n        -webkit-animation: grok-place-card-fade-in 0.2s ease-in-out forwards;\n        animation: grok-place-card-fade-in 0.2s ease-in-out forwards;\n      }\n\n      @-webkit-keyframes grok-place-card-fade-in {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n\n      .grok-place-card-marker .outer-circle {\n        background-color: ${p.default.theme.colors.white};\n        border: ${p.default.theme.spaces.space2} solid ${p.default.theme.colors.alwaysBlack};\n        border-radius: ${p.default.theme.spaces.space16};\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: ${p.default.theme.spaces.space16};\n        height: ${p.default.theme.spaces.space16};\n      }\n\n      .grok-place-card-marker .outer-circle-preview {\n        border: ${p.default.theme.spaces.space2} solid transparent;\n        background-color: transparent;\n      }\n\n      .grok-place-card-marker .outer-circle-hoverable {\n        transition: all 0.1s ease;\n      }\n\n      .grok-place-card-marker .outer-circle-hoverable:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n      }\n\n      .grok-place-card-marker .inner-circle {\n        width: ${p.default.theme.spaces.space8};\n        height: ${p.default.theme.spaces.space8};\n        border-radius: ${p.default.theme.spaces.space8};\n        background-color: ${p.default.theme.colors.alwaysBlack};\n      }\n\n      .grok-place-card-marker .label-container {\n        background-color: ${p.default.theme.colors.white};\n        border: ${p.default.theme.spaces.space2} solid ${p.default.theme.colors.alwaysBlack};\n        border-radius: ${p.default.theme.borderRadii.xLarge};\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        padding-top: ${p.default.theme.spaces.space2};\n        padding-bottom: ${p.default.theme.spaces.space2};\n        padding-left: ${p.default.theme.spaces.space4};\n        padding-right: ${p.default.theme.spaces.space4};\n        margin-top: ${p.default.theme.spaces.space4};\n      }\n\n      .grok-place-card-marker .label-container-hoverable {\n        transition: 0.1s background-color ease;\n      }\n\n      .grok-place-card-marker .label {\n        color: ${p.default.theme.colors.alwaysBlack};\n        font-size: ${p.default.theme.fontSizes.subtext3};\n        line-height: ${p.default.theme.fontSizes.subtext3};\n        white-space: nowrap;\n        margin: 0px;\n        transition: 0.1s color ease;\n      }\n\n      .grok-place-card-marker .label-container-hoverable:hover {\n        cursor: pointer;\n        background-color: ${p.default.theme.colors.alwaysBlack};\n\n        .label {\n          color: ${p.default.theme.colors.white};\n        }\n      }\n\n      .grok-place-card-marker .label-container-selected {\n        background-color: ${p.default.theme.colors.alwaysBlack};\n\n        .label {\n          color: ${p.default.theme.colors.white};\n        }\n      }\n\n      .grok-place-card-marker .hidden {\n        opacity: 0;\n      }\n    `);
                    const n = document.head;
                    return (
                        n && n.appendChild(t),
                        () => {
                            const t = document.getElementById(e);
                            t && t.remove();
                        }
                    );
                });
                const d = ({ isPreview: e, isSelected: t, loc: n }) => {
                    const a = `${n.name} (★${n.rating})`,
                        r = document.createElement("p");
                    (r.innerText = a), r.classList.add("label");
                    const i = document.createElement("div");
                    i.classList.add("label-container"),
                        e
                            ? i.classList.add("hidden")
                            : (i.classList.add("label-container-hoverable"),
                              i.addEventListener("click", () => {
                                  n.id && o(n.id);
                              }),
                              t && i.classList.add("label-container-selected"));
                    const c = document.createElement("div");
                    c.classList.add("inner-circle");
                    const l = document.createElement("div");
                    l.classList.add("outer-circle"),
                        e
                            ? l.classList.add("outer-circle-preview")
                            : (l.classList.add("outer-circle-hoverable"),
                              l.addEventListener("click", () => {
                                  n.id && o(n.id);
                              }));
                    const s = document.createElement("div");
                    return s.classList.add("grok-place-card-marker"), i.appendChild(r), l.appendChild(c), s.appendChild(l), s.appendChild(i), s;
                };
                return (
                    a.useEffect(() => {
                        w.load().then(async () => {
                            const { Map: t } = await window.google.maps.importLibrary("maps"),
                                { AdvancedMarkerElement: a, CollisionBehavior: o } = await window.google.maps.importLibrary("marker"),
                                r = [];
                            let p, u, m;
                            if (
                                (e.locs.forEach((e) => {
                                    e.id && e.coordinates && r.push(e.coordinates);
                                }),
                                1 === r.length || r.every((e, t, n) => 0 === t || (e.latitude === n[0].latitude && e.longitude === n[0].longitude)) || null !== i)
                            ) {
                                if (i) {
                                    const t = e.locs.find((e) => e.id === i);
                                    t && t.coordinates && (p = new window.google.maps.LatLng(t.coordinates.latitude, t.coordinates.longitude));
                                } else p = new window.google.maps.LatLng(r[0].latitude, r[0].longitude);
                                u = 15;
                            } else
                                (m = new window.google.maps.LatLngBounds()),
                                    r.forEach((e) => {
                                        m.extend(new window.google.maps.LatLng(e.latitude, e.longitude));
                                    });
                            (l.current = new t(document.getElementById(`map-${c}`), { center: p, zoom: u, disableDefaultUI: !0, clickableIcons: !1, mapId: n, gestureHandling: "greedy" })),
                                m && l.current.fitBounds(m, 20),
                                e.locs.forEach((t, n) => {
                                    if (t.coordinates && t.id && t.display_name && t.display_name.text && t.rating) {
                                        const n = t.id,
                                            r = t.display_name.text,
                                            c = t.rating,
                                            p = d({ loc: { id: n, name: r, rating: c }, isSelected: n === i }),
                                            u = d({ loc: { id: n, name: r, rating: c }, isPreview: !0 });
                                        new a({ map: l.current, position: { lat: t.coordinates?.latitude, lng: t.coordinates?.longitude }, content: u, collisionBehavior: o.REQUIRED, zIndex: 1 }), (s.current[n] = new a({ map: l.current, position: { lat: t.coordinates?.latitude, lng: t.coordinates?.longitude }, content: p, collisionBehavior: o.OPTIONAL_AND_HIDES_LOWER_PRIORITY, zIndex: n === i ? e.locs.length : 2 }));
                                    }
                                });
                        });
                    }, []),
                    a.useEffect(() => {
                        if (!i || !l.current) return;
                        const t = l.current,
                            n = e.locs.find((e) => e.id === i);
                        if (n && n.coordinates) {
                            const a = n.coordinates.latitude,
                                o = n.coordinates.longitude;
                            Object.keys(s.current).forEach((t) => {
                                const n = s.current[t].content.getElementsByClassName("label-container")[0];
                                t === i ? ((s.current[t].zIndex = e.locs.length), n.classList.add("label-container-selected")) : ((s.current[t].zIndex = 2), n.classList.remove("label-container-selected"));
                            }),
                                t.panTo(new window.google.maps.LatLng(a, o)),
                                t.setZoom(Math.max(t.zoom, 15));
                        }
                    }, [i]),
                    a.createElement(r.Z, { style: x.map }, a.createElement("div", { id: `map-${c}`, style: { height: "100%", width: "100%" } }))
                );
            }
            const x = p.default.create((e) => ({ map: { height: "100%", width: "100%" } })),
                v = a.memo(k, (e, t) => e.isExpanded === t.isExpanded && e.selectedLocId === t.selectedLocId && e.uniqueMapId === t.uniqueMapId && e.mapId === t.mapId);
            var L = n(214997),
                I = n(992942),
                _ = n(846191),
                S = n(558697);
            const $ = Object.freeze({ PRICE_LEVEL_UNSPECIFIED: "", PRICE_LEVEL_FREE: "", PRICE_LEVEL_INEXPENSIVE: "$", PRICE_LEVEL_MODERATE: "$$", PRICE_LEVEL_EXPENSIVE: "$$$", PRICE_LEVEL_VERY_EXPENSIVE: "$$$$" });
            function Z(e) {
                let t = e.getUTCHours();
                const n = e.getUTCMinutes(),
                    a = t >= 12;
                0 === t ? (t = 12) : t > 12 && (t -= 12);
                return `${t.toString()}${0 === n ? "" : `:${n.toString().padStart(2, "0")}`}${a ? "pm" : "am"}`;
            }
            function P(e, t) {
                const n = new Date(e);
                return n.setUTCMinutes(n.getUTCMinutes() + t), n;
            }
            const R = m().fd00a76a,
                z = m().e41a0dc2;
            function M({ location: e, onClick: t, selected: n, style: o }) {
                const { isCompactLayout: i } = (0, y.ZP)(),
                    [c, l] = a.useState(!1);
                a.useEffect(() => {
                    n || l(!1);
                }, [n]);
                const p = e.photos && e.photos.length > 0 ? e.photos[0] : null,
                    u = a.useMemo(() => {
                        if (void 0 === e.rating || null === e.rating) return null;
                        const t = [],
                            n = Math.round(e.rating);
                        for (let e = 0; e < n; e++) t.push(a.createElement(_.default, { key: `filled-star-${e}`, style: [T.ratingStar, T.filledStar] }));
                        for (let e = n; e < 5; e++) t.push(a.createElement(_.default, { key: `empty-star-${e}`, style: [T.ratingStar, T.emptyStar] }));
                        return a.createElement(r.Z, { style: T.ratingStarContainer }, t);
                    }, [e.rating]),
                    m = a.useMemo(
                        () =>
                            e.opening_hours && e.opening_hours.weekday_descriptions
                                ? e.opening_hours.weekday_descriptions.map((e) => {
                                      const [t, n] = e.split(": ");
                                      return { day: t.trim(), hours: n.trim() };
                                  })
                                : [],
                        [e.opening_hours],
                    ),
                    g = a.useMemo(() => {
                        return e.opening_hours && e.opening_hours.open_now && e.opening_hours.next_close_time ? a.createElement(d.ZP, { style: T.infoText }, ((t = e.opening_hours.next_close_time), (n = Number(e.utc_offset_minutes)), `Closes at ${Z(P(t, n))}`)) : null;
                        var t, n;
                    }, [m, e]),
                    f = a.useMemo(
                        () =>
                            e.opening_hours && !1 === e.opening_hours.open_now && e.opening_hours.next_open_time
                                ? a.createElement(
                                      d.ZP,
                                      { style: T.infoText },
                                      (function (e, t) {
                                          const n = P(e, t);
                                          return `Opens ${Z(n)} ${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n.getUTCDay()]}`;
                                      })(e.opening_hours.next_open_time, Number(e.utc_offset_minutes)),
                                  )
                                : null,
                        [m, e],
                    );
                return a.createElement(s.Z, { onClick: t, style: [T.container, o], withoutInteractiveStyles: !0 }, ({ isHovered: t }) =>
                    a.createElement(
                        r.Z,
                        { style: [T.content, t || n ? T.hoveredContent : void 0] },
                        a.createElement(
                            r.Z,
                            { style: [T.infoContainer, i ? T.compactInfoContainer : void 0] },
                            e.display_name && e.display_name.text && a.createElement(d.ZP, { style: [T.name, i ? T.compactName : void 0], weight: "bold" }, e.display_name.text),
                            a.createElement(r.Z, { style: T.ratingContainer }, void 0 !== e.rating && null !== e.rating && a.createElement(a.Fragment, null, a.createElement(d.ZP, { style: T.infoText }, e.rating), a.createElement(r.Z, { style: T.ratingStarContainer }, u), e.user_ratings_total && a.createElement(d.ZP, { style: T.infoText }, `(${e.user_ratings_total})`), e.price_level && $[e.price_level] && a.createElement(a.Fragment, null, a.createElement(r.Z, { style: T.dot }), a.createElement(d.ZP, { style: T.infoText }, $[e.price_level])))),
                            e.formatted_address && a.createElement(d.ZP, { style: T.infoText }, e.formatted_address),
                            e.opening_hours && null !== e.opening_hours.open_now && a.createElement(s.Z, { interactiveStyles: T.interactiveOpenStatusContainer, onClick: () => l(!c), style: T.openStatusContainer }, ({ isHovered: t }) => a.createElement(a.Fragment, null, a.createElement(d.ZP, { style: [T.infoText, e.opening_hours && e.opening_hours.open_now ? T.open : T.closed] }, e.opening_hours && e.opening_hours.open_now ? R : z), g, f, a.createElement(S.default, { style: [T.hoursCaret, c ? T.expandedHoursCaret : void 0] }))),
                            m.length > 0 &&
                                c &&
                                a.createElement(
                                    r.Z,
                                    { style: T.hoursContainer },
                                    m.map((e) => a.createElement(r.Z, { key: e.day, style: T.dayHoursContainer }, a.createElement(d.ZP, { style: T.dayHoursText }, e.day), a.createElement(d.ZP, { style: T.dayHoursText }, e.hours))),
                                ),
                        ),
                        p && p.photo_uri && a.createElement(I.Z, { resizeMode: "cover", source: p.photo_uri, style: T.photo }),
                    ),
                );
            }
            const T = p.default.create((e) => ({ container: {}, content: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, padding: e.spaces.space16, transition: "0.1s all ease" }, hoveredContent: { backgroundColor: e.colors.gray200 }, photo: { width: e.spaces.space72, height: e.spaces.space72, borderRadius: e.borderRadii.xLarge }, infoContainer: { flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, compactInfoContainer: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, name: { fontSize: e.fontSizes.headline2, lineHeight: e.fontSizes.headline2 }, compactName: { fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1 }, infoText: { fontSize: "inherit", lineHeight: "inherit" }, ratingContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, ratingStarContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space2 }, ratingStar: { width: 10, height: 10 }, filledStar: { color: e.colors.brandColor }, emptyStar: { color: e.colors.gray500 }, dot: { backgroundColor: e.colors.brandColor, width: e.spaces.space2, height: e.spaces.space2, borderRadius: e.spaces.space2 }, openStatusContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, interactiveOpenStatusContainer: { backgroundColor: "transparent" }, open: { color: e.colors.green700 }, closed: { color: e.colors.red700 }, hoursCaret: {}, expandedHoursCaret: { transform: "rotate(180deg)" }, hoursContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space12, width: "100%" }, dayHoursContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, dayHoursText: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 } }));
            function H({ cardAttachment: e, contentContainerStyle: t, handleLocationPreviewLayout: n, onSelectLoc: o, scrollViewRef: i, selectedLocId: c, style: l }) {
                const s = a.useMemo(() => e.locs.sort((e, t) => (e.rating && t.rating ? t.rating - e.rating : 0)), [e.locs]);
                return a.createElement(
                    L.Z,
                    { contentContainerStyle: [D.locationPreviewContentContainer, t], ref: i, showsVerticalScrollIndicator: !0, style: [D.locationPreviewContainer, l] },
                    s.map((e, t) =>
                        a.createElement(
                            r.Z,
                            { key: e.id, onLayout: n(e.id) },
                            a.createElement(M, {
                                location: e,
                                onClick: () => {
                                    e.id && o(e.id);
                                },
                                selected: c === e.id,
                            }),
                        ),
                    ),
                );
            }
            const D = p.default.create((e) => ({ locationPreviewContainer: { width: "100%", flex: 1 }, locationPreviewContentContainer: { display: "flex", flexDirection: "column" } })),
                B = m().b3aab6d4,
                A = "b49f87d230b2ca1b";
            function V({ cardAttachment: e, isAnimated: t, isInline: n }) {
                const { isCompactLayout: i } = (0, y.ZP)(),
                    [p, u] = a.useState(!1),
                    [m, C] = a.useState(null),
                    b = a.useRef(null),
                    w = a.useRef({}),
                    k = a.useRef(null),
                    x = a.useRef({}),
                    [L] = a.useState(c().v4()),
                    [I] = a.useState(c().v4());
                a.useEffect(() => {
                    const e = (e) => {
                        "Escape" === e.key && p && u(!1);
                    };
                    return (
                        document.addEventListener("keydown", e),
                        () => {
                            document.removeEventListener("keydown", e);
                        }
                    );
                }, [p]);
                const _ = (e) => (t) => {
                        if (e) {
                            const n = t.nativeEvent.layout;
                            x.current[e] = n.y;
                        }
                    },
                    S = a.useCallback((e) => {
                        C(e), void 0 !== w.current[e] && b.current && b.current.scrollTo({ y: w.current[e], animated: !0 }), void 0 !== x.current[e] && k.current && k.current.scrollTo({ y: x.current[e], animated: !0 });
                    }, []);
                return e.locs.length <= 0
                    ? null
                    : a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                              r.Z,
                              { style: N.container },
                              a.createElement(
                                  r.Z,
                                  { style: N.previewContainer },
                                  a.createElement(l.Z, null, ({ isHovered: o }) => a.createElement(r.Z, { style: N.previewMapContainer }, a.createElement(E.Z, { isAnimated: t, isInline: n, style: [N.cardContainer, i ? N.compactCardContainer : void 0] }, a.createElement(v, { cardAttachment: e, isExpanded: !1, mapId: A, onMarkerClick: S, selectedLocId: m, uniqueMapId: L })), a.createElement(s.Z, { onClick: p ? void 0 : () => u(!0), style: [N.iconLocationExpandContainer, o ? N.hoveredIconLocationExpandContainer : void 0] }, a.createElement(g.default, { style: N.iconLocationExpand })))),
                                  !i &&
                                      a.createElement(H, {
                                          cardAttachment: e,
                                          handleLocationPreviewLayout: (e) => (t) => {
                                              if (e) {
                                                  const n = t.nativeEvent.layout;
                                                  w.current[e] = n.y;
                                              }
                                          },
                                          onSelectLoc: (e) => C(e),
                                          scrollViewRef: b,
                                          selectedLocId: m,
                                          style: N.previewMapPlacesList,
                                      }),
                              ),
                          ),
                          a.createElement(o.Z, { visible: p }, a.createElement(r.Z, { style: [N.background, i ? N.compactBackground : void 0] }, i ? a.createElement(a.Fragment, null, a.createElement(s.Z, { interactiveStyles: N.closeIconContainer, onClick: () => u(!1), style: N.compactMapCloseIcon }, a.createElement(f.default, { style: N.closeIcon })), a.createElement(r.Z, { style: N.compactExpandedMap }, a.createElement(v, { cardAttachment: e, isExpanded: !0, mapId: A, onMarkerClick: S, selectedLocId: m, uniqueMapId: I })), a.createElement(H, { cardAttachment: e, contentContainerStyle: N.compactPlaceListContentContainer, handleLocationPreviewLayout: _, onSelectLoc: (e) => C(e), scrollViewRef: k, selectedLocId: m, style: N.compactPlaceList })) : a.createElement(a.Fragment, null, a.createElement(r.Z, { style: N.expandedMap }, a.createElement(v, { cardAttachment: e, isExpanded: !0, mapId: A, onMarkerClick: S, selectedLocId: m, uniqueMapId: I })), a.createElement(r.Z, { style: N.placesList }, a.createElement(r.Z, { style: N.placesListHeaderContainer }, a.createElement(r.Z, { style: N.placesListLocationsContainer }, a.createElement(h.default, { style: N.placesListLocationPin }), a.createElement(d.ZP, { style: N.placesListLocationsHeader, weight: "bold" }, B)), a.createElement(s.Z, { interactiveStyles: N.closeIconContainer, onClick: () => u(!1) }, a.createElement(f.default, { style: N.closeIcon }))), a.createElement(H, { cardAttachment: e, handleLocationPreviewLayout: _, onSelectLoc: (e) => C(e), scrollViewRef: k, selectedLocId: m }))))),
                      );
            }
            const N = p.default.create((e) => ({
                container: { display: "flex", flex: 1, overflow: "hidden", marginHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, position: "relative", height: "100%" },
                previewContainer: { display: "flex", flexDirection: "row", flex: 1, backgroundColor: e.colors.gray50 },
                previewMapContainer: { flex: 1 },
                previewMapPlacesList: { height: 350, flexGrow: 0, flexShrink: 1, flexBasis: "auto", width: 300 },
                cardContainer: { paddingVertical: 0, paddingHorizontal: 0, marginHorizontal: 0, marginBottom: 0, borderWidth: 0, height: 350 },
                compactCardContainer: { height: 200 },
                compactMapCloseIcon: { alignSelf: "flex-start", marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
                compactPlaceList: { flex: 1, paddingEnd: e.spaces.space12 },
                compactPlaceListContentContainer: { paddingBottom: e.spaces.space64 },
                iconLocationExpandContainer: { position: "absolute", top: e.spaces.space16, end: e.spaces.space16, backgroundColor: "transparent", transform: "scale(1)", transition: "all 0.2 ease" },
                hoveredIconLocationExpandContainer: { transform: "scale(1.05)" },
                iconLocationExpand: { color: e.colors.alwaysBlack },
                background: { width: "100vw", height: "100vh", backgroundColor: e.colors.navigationBackground, padding: e.spaces.space16, display: "flex", flexDirection: "row" },
                compactBackground: { flexDirection: "column", padding: 0 },
                expandedMap: { height: "100%", display: "flex", flex: 1, borderRadius: e.borderRadii.large, overflow: "hidden", position: "relative", marginEnd: e.spaces.space16 },
                compactExpandedMap: { height: "100%", display: "flex", flex: 1, overflow: "hidden", position: "relative", borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge },
                placesList: { display: "flex", height: "100%", borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray200, marginEnd: e.spaces.space12, width: 380 },
                placesListHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: e.spaces.space20, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 },
                closeIconContainer: { backgroundColor: "transparent" },
                closeIcon: { color: e.colors.brandColor },
                placesListLocationsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 },
                placesListLocationPin: { color: e.colors.brandColor },
                placesListLocationsHeader: { fontSize: e.fontSizes.headline1 },
            }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-6bf2d53b.40f4592a.js.map
