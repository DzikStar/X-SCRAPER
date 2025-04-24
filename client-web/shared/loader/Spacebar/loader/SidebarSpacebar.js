"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Spacebar~loader.SidebarSpacebar"],
    {
        530568: (e, t, r) => {
            r.d(t, { B: () => oe, I: () => Q });
            var a = r(202784),
                o = r(744610),
                s = r(392237),
                n = r(530732),
                i = r(321835),
                l = r(22492),
                c = r(254683);
            function d() {
                const [, e] = a.useState({});
                return (
                    a.useEffect(function () {
                        let t = !1;
                        const r = setTimeout(function () {
                            t || e({});
                        }, 200);
                        return function () {
                            (t = !0), clearTimeout(r);
                        };
                    }),
                    a.createElement(c.Z, { audioLevel: 0.5, color: s.default.theme.colors.white, size: s.default.theme.spacesPx.space20 })
                );
            }
            var u = r(325686),
                p = r(642153),
                m = r(757483);
            function f(e) {
                const t = { borderRadius: s.default.theme.borderRadiiPx[e.borderRadius] },
                    r = b("0", "livevideo" === e.type),
                    o = b("1", "livevideo" === e.type),
                    n = b("2", "livevideo" === e.type);
                return a.createElement(u.Z, { style: [t, n] }, a.createElement(u.Z, { style: [t, o] }, a.createElement(u.Z, { style: [t, r] }, e.children)));
            }
            const h = { 0: { opacity_start: 0.2, spread_end: g(2) }, 1: { opacity_start: 0.2, spread_end: g(4) }, 2: { opacity_start: 0.2, spread_end: g(6) } };
            function b(e, t) {
                const r = g(0),
                    a = h[e];
                s.default.isDarkMode() && (a.opacity_start = 2 * a.opacity_start);
                const o = t ? s.default.theme.colors.magenta500 : s.default.theme.colors.purple500,
                    n = m.Z.hexToCss(o, a.opacity_start),
                    i = m.Z.hexToCss(o, 0);
                return { animationDuration: "1.25s", animationIterationCount: "infinite", animationKeyframes: [{ "0%": { boxShadow: `0 0 0 ${r} ${n}` }, "100%": { boxShadow: `0 0 0 ${a.spread_end} ${i}` } }], animationTimingFunction: "linear" };
            }
            function g(e) {
                return `${e}px`;
            }
            function y({ borderRadius: e, children: t, isInverted: r, type: o }) {
                return r ? a.createElement(f, { borderRadius: e, type: o }, t) : t;
            }
            function C(e) {
                const { borderRadius: t, isInverted: r, type: o } = e,
                    n = a.useMemo(() => ({ borderRadius: s.default.theme.borderRadiiPx[t] }), [t]),
                    i = a.useMemo(() => [n, _.backgroundContainer, r ? _.withBorder : _.withPadding, r && "audiospace" === o && _.borderColorAudio, r && "livevideo" === o && _.borderColorVideo, !r && "audiospace" === o && _.backgroundColorAudio, !r && "livevideo" === o && _.backgroundColorVideo], [n, r, o]),
                    l = a.useMemo(() => [n, _.pillContainer], [n]);
                return a.createElement(y, { borderRadius: t, isInverted: r, type: o }, a.createElement(u.Z, { style: l, testID: "pill-contents-container" }, a.createElement(u.Z, { style: i }, a.createElement(u.Z, { style: _.pillContentsContainer }, a.createElement(p.Z, { borderColor: "cellBackground", borderWidth: "small", style: _.facepile, userAvatarSize: "large", userAvatarUrls: e.userAvatarUrls }), e.children))));
            }
            const _ = s.default.create((e) => {
                const t = e.borderWidthsPx.medium;
                return { pillContainer: { display: "flex", flexDirection: "row", width: "100%" }, backgroundContainer: { flex: 1, height: "100%", justifyContent: "center", backgroundColor: e.colors.navigationBackground }, withBorder: { borderWidth: t }, withPadding: { padding: t }, backgroundColorAudio: { backgroundColor: e.colors.purple500 }, backgroundColorVideo: { backgroundColor: e.colors.magenta500 }, borderColorAudio: { borderColor: e.colors.purple500 }, borderColorVideo: { borderColor: e.colors.magenta500 }, pillContentsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, facepile: { pointerEvents: "none" } };
            });
            var v = r(731708),
                E = r(279046),
                w = r(124964);
            function P(e) {
                return a.createElement(u.Z, { style: x.pillTextContent }, a.createElement(v.ZP, { align: "left", color: "white", numberOfLines: 1, size: "subtext2", style: x.pillTextContent_title }, e.count ? a.createElement(v.ZP, { weight: "bold" }, a.createElement(E.Z.ParticipantsCount, { count: e.count, labelType: "plusCount" })) : null, a.createElement(w.Z, { color: "white" }), e.title));
            }
            const x = s.default.create((e) => ({ pillTextContent: { flex: 1, marginStart: e.spaces.space4, marginEnd: e.spaces.space8 }, pillTextContent_title: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%", display: "inline-block" } }));
            r(136728);
            var Z = r(400752),
                k = r(107267),
                S = r(910626);
            const I = Object.freeze({ host: "host", cohost: "cohost", speaker: "speaker", listener: "listener" });
            var B = r(976145),
                M = r(674132),
                T = r.n(M),
                R = r(292484),
                A = r(952793),
                D = r(479506),
                z = r(582129),
                V = r(725516),
                F = r(125363),
                H = r(390387),
                L = r(919022),
                N = r(905710),
                O = r(427478),
                U = r(823180),
                W = r(449998);
            const $ = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                j = { Broadcast: T().e39b368e, Space: T().ab4fc8bc, EmployeeSpace: T().b6de83a0, PrivateBroadcast: T().g3f251f2, PrivateSpace: T().d08666ba, BeFirstJoin: T().eadb5a46, HostsBroadcast: T().f9629a8f, HostsSpace: T().ia3c0ab7, HostedBy: T().hd552761, RelativePosition: T().c3ea19a5, WithParticipants: T().a5235305, socialProof: { isListening: T().df9f8243, isSpeaking: T().g2445c2f, isHosting: T().fcfd5a67, isCohosting: T().f7882829 } };
            function G(e) {
                const t = (0, V.z)(),
                    r = (0, F.I0)(),
                    o = (0, k.useHistory)(),
                    s = (0, F.v9)(H.Qb),
                    n = (0, A.hC)("rweb_live_dock_enabled"),
                    i = (0, R.cm)() && n,
                    l = (0, Z.b9)(z.dq),
                    c = (function () {
                        const e = (0, F.I0)(),
                            t = (0, Z.b9)(W.wQ);
                        return a.useCallback(
                            (r, a) => {
                                t({ videoId: r, isLiveVideo: a }), e(O.bi(U.N.EXPANDED));
                            },
                            [e, t],
                        );
                    })(),
                    d = (0, Z.Dv)(W.Tc),
                    { participants_str: u, user_id: p, user_id_str: m } = e,
                    f = e.live_content.audiospace,
                    h = e.live_content.livevideo,
                    b = f?.broadcast_id ?? h?.id ?? "",
                    g = f?.is_employee_only ?? !1,
                    y = f?.is_locked ?? h?.is_locked ?? !1,
                    C = f?.title ?? h?.status ?? void 0,
                    _ = f?.total_participating ?? h?.n_total_watching ?? 0,
                    v = a.useMemo(() => (f ? "audiospace" : h ? "livevideo" : void 0), [f, h]),
                    E = a.useMemo(() => (u ? u.slice(0, 3) : []), [u]),
                    w = a.useMemo(() => (f?.social_proof?.length ? f.social_proof[0] : h ? { role: I.host, user_id: p, user_id_str: m } : void 0), [f, h, p, m]);
                a.useEffect(() => {
                    if (E.length) {
                        const e = [m, ...E];
                        w && e.push(w.user_id_str), r(L.ZP.fetchManyIfNeeded(E));
                    }
                }, [r, w, E, m]);
                const P = Math.max(0, _ - E.length),
                    x = (0, F.v9)((e) => L.ZP.selectMany(e, E)),
                    M = a.useMemo(() => (x.length ? x.map((e) => e.profile_image_url_https ?? $) : Array(E.length).fill($)), [E, x]),
                    T = a.useMemo(() => (x.length && "Square" === x[0].profile_image_shape ? "xSmall" : "infinite"), [x]),
                    G = (0, F.v9)((e) => (w ? L.ZP.select(e, w?.user_id_str) : void 0)),
                    K = a.useMemo(() => {
                        if (w && G) {
                            if (w.role === I.host) return j.socialProof.isHosting({ name: G.name });
                            if (w.role === I.cohost) return j.socialProof.isCohosting({ name: G.name });
                            if (w.role === I.speaker) return j.socialProof.isSpeaking({ name: G.name });
                            if (w.role === I.listener) return j.socialProof.isListening({ name: G.name });
                        }
                    }, [w, G]),
                    Q = a.useMemo(() => {
                        if (w && G && K) return { label: K, role: w.role, user: G };
                    }, [w, K, G]),
                    q = (0, F.v9)((e) => L.ZP.select(e, m));
                let J = "";
                C ? (J = C) : q && (f && (J = j.HostsSpace({ hostName: q.name })), h && (J = j.HostsBroadcast({ hostName: q.name })));
                const Y = [];
                if ((g ? Y.push(j.EmployeeSpace) : y ? (f && Y.push(j.PrivateSpace), h && Y.push(j.PrivateBroadcast)) : (f && Y.push(j.Space), h && Y.push(j.Broadcast)), Q?.label && Y.push(Q.label), q && Y.push(j.HostedBy({ hostName: q.name })), J && Y.push(J), x.length)) {
                    const e = x.map((e) => e.name),
                        t = (0, B.Z)(e);
                    Y.push(j.WithParticipants({ listOfPeople: t }));
                }
                x.length || P || Y.push(j.BeFirstJoin);
                const X = (0, B.Z)(Y, !0),
                    ee = a.useMemo(() => ({ items: [{ audio_space_details: { broadcast_id: b, is_logged_in: s }, item_type: h ? D.Z.ItemType.PERISCOPE_BROADCAST : D.Z.ItemType.AUDIO_SPACE }] }), [b, s, h]);
                return {
                    "aria-label": X,
                    borderRadius: T,
                    onImpression: a.useCallback(() => {
                        t.scribe({ action: "impression", data: ee, element: "audiospace_fleet" });
                    }, [t, ee]),
                    onPress: a.useCallback(
                        (e) => {
                            const r = f ? (0, N.e)(b) : (0, N.s)(b),
                                a = { origin: S.Y.spacebar };
                            e.ctrlKey || e.metaKey ? window.open(r) : h && i && d !== h.id ? (l({}), c(h.id, !0)) : o.push(r, a), t.scribe({ action: "click", data: ee, element: "audiospace_fleet" });
                        },
                        [t, f, i, d, o, b, l, h, c, ee],
                    ),
                    otherParticipantsCount: P,
                    socialProof: Q,
                    title: J,
                    type: v,
                    user: q,
                    userAvatarUrls: M,
                };
            }
            const K = { start: 1, press: 0.96 };
            function Q({ isFirst: e, thread: t }) {
                const { "aria-label": r, borderRadius: c, onImpression: u, onPress: p, otherParticipantsCount: m, title: f, type: h, userAvatarUrls: b } = G(t),
                    g = a.useRef(new o.Z.Value(K.start)).current,
                    y = a.useCallback(
                        (e) => {
                            o.Z.timing(g, { toValue: e, duration: 100, useNativeDriver: !1 }).start();
                        },
                        [g],
                    ),
                    _ = a.useCallback(() => {
                        y(K.press);
                    }, [y]),
                    v = a.useCallback(() => {
                        y(K.start);
                    }, [y]),
                    E = a.useMemo(() => [q.animatedViewPress, { transform: [{ scale: g }] }], [g]),
                    w = a.useMemo(() => [{ borderRadius: s.default.theme.borderRadiiPx[c] }, e && { paddingStart: s.default.theme.spaces.space16 }, q.rootContainer], [c, e]);
                return a.createElement(i.Z, { onImpression: u }, a.createElement(n.Z, { "aria-label": r, onPress: p, onPressIn: _, onPressOut: v, style: w }, a.createElement(o.Z.View, { style: E }, a.createElement(C, { borderRadius: c, type: h, userAvatarUrls: b }, a.createElement(P, { count: m, title: f }), a.createElement(d, null), a.createElement(l.L, { size: "space8" })))));
            }
            const q = s.default.create((e) => ({ rootContainer: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%", userSelect: "none" }, animatedViewPress: { width: "100%" } }));
            var J = r(952428),
                Y = r(823161),
                X = r(366635),
                ee = r(771099),
                te = r(443781);
            function re({ socialProof: e }) {
                const t = a.useMemo(() => a.createElement(X.Z, { affiliateBadgeInfo: e.user.highlightedLabel, avatarSize: "small", isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", profileImageUrl: e.user.profile_image_url_https, verifiedType: e.user.verified_type }), [e]),
                    r = a.useMemo(() => (e.role === I.host ? a.createElement(T().I18NFormatMessage, { $i18n: "d80a7547" }, t) : e.role === I.cohost ? a.createElement(T().I18NFormatMessage, { $i18n: "j7293d6b" }, t) : e.role === I.speaker ? a.createElement(T().I18NFormatMessage, { $i18n: "df79977f" }, t) : e.role === I.listener ? a.createElement(T().I18NFormatMessage, { $i18n: "ad960f39" }, t) : void 0), [t, e]);
                return a.createElement(v.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2", style: ae.socialProof }, r);
            }
            const ae = s.default.create((e) => ({ socialProof: { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: e.spaces.space8, marginEnd: e.spaces.space8, whiteSpace: "pre" } }));
            function oe({ thread: e }) {
                const { featureSwitches: t } = (0, te.QZ)(),
                    r = ee.eY(),
                    { "aria-label": o, borderRadius: s, onImpression: n, onPress: l, otherParticipantsCount: c, socialProof: d, title: m, type: f, user: h, userAvatarUrls: b } = G(e),
                    g = t.isTrue("rweb_sourcemap_migration");
                return h ? a.createElement(i.Z, { onImpression: n }, a.createElement(J.Z, { "aria-label": o, onPress: l, style: [se.container, g && se.redesignContainer], withDarkerInteractiveBackground: r }, g ? a.createElement(a.Fragment, null, a.createElement(Y.default, { "aria-label": h.name, borderColor: "livevideo" === f ? "magenta500" : "purple500", borderWidth: "medium", screenName: h.screen_name, size: "xLarge", uri: h.profile_image_url_https }), a.createElement(u.Z, { style: se.meta }, a.createElement(X.Z, { affiliateBadgeInfo: h.highlightedLabel, isBlueVerified: h.is_blue_verified, isVerified: h.verified, name: h.name, screenName: h.screen_name, verifiedType: h.verified_type }), a.createElement(v.ZP, { numberOfLines: 1, size: "subtext1" }, m)), a.createElement(u.Z, { style: se.participants }, "audiospace" === f ? a.createElement(p.Z, { userAvatarSize: "small", userAvatarUrls: b }) : null, c ? a.createElement(v.ZP, { color: "gray700", size: "subtext3" }, E.Z.formatCountShort(c)) : null)) : a.createElement(a.Fragment, null, d ? a.createElement(re, { socialProof: d }) : null, a.createElement(u.Z, { style: se.content }, a.createElement(u.Z, { style: se.textContent }, a.createElement(v.ZP, { numberOfLines: 2, size: "body", weight: "bold" }, m)), a.createElement(u.Z, { style: se.facepilesContainer }, a.createElement(C, { borderRadius: s, isInverted: !0, type: f, userAvatarUrls: b }, c ? a.createElement(v.ZP, { color: "text", size: "subtext2", style: se.participantsCountText, weight: "bold" }, a.createElement(E.Z.ParticipantsCount, { count: c, labelType: "plusCount" })) : null)))))) : null;
            }
            const se = s.default.create((e) => ({ container: { alignItems: "flex-start", flexDirection: "column", justifyContent: "space-between", paddingHorizontal: e.spacesPx.space16, paddingVertical: e.spacesPx.space12, userSelect: "none" }, redesignContainer: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start" }, content: { flexDirection: "row", justifyContent: "space-between", width: "100%" }, textContent: { flexShrink: 1 }, facepilesContainer: { marginStart: e.spaces.space16 }, meta: { flex: 1 }, participants: { flexDirection: "row", gap: e.spaces.space8 }, participantsCountText: { marginEnd: e.spaces.space8 } }));
        },
        22492: (e, t, r) => {
            r.d(t, { L: () => n });
            var a = r(202784),
                o = r(325686),
                s = r(392237);
            function n(e) {
                return a.createElement(o.Z, { style: i[e.size] });
            }
            const i = s.default.create(
                Object.keys(s.default.theme.spacesPx).reduce((e, t) => {
                    const r = s.default.theme.spacesPx[t];
                    return (e[t] = { width: r, height: r }), e;
                }, {}),
            );
        },
        782394: (e, t, r) => {
            r.d(t, { e: () => m });
            var a = r(202784),
                o = r(565058),
                s = r(400752),
                n = r(465233),
                i = r(952793),
                l = r(58255);
            const c = (0, o.cn)({ data: void 0, lastFetched: 0, errorCount: 0 }),
                d = (0, o.cn)(0),
                u = (0, o.cn)(
                    (e) => (e(d), e(c).data),
                    async (e, t) => {
                        try {
                            const { lastFetched: r } = e(c),
                                a = Date.now();
                            if (a - r < 3e4) return;
                            const o = await l.w.spacebar();
                            t(c, { data: o, lastFetched: a, errorCount: 0 }), t(d, e(d) + 1);
                        } catch (r) {
                            const a = e(c),
                                o = Date.now();
                            t(c, { ...a, lastFetched: o, errorCount: a.errorCount + 1 }), t(d, e(d) + 1);
                        }
                    },
                ),
                p = (0, o.cn)(
                    (e) => e(u),
                    (e, t) => {
                        let r;
                        const a = async () => {
                            await t(u);
                            const o = e(u),
                                s = f(o?.refresh_delay_secs) ? 1e3 * o.refresh_delay_secs : 3e4;
                            r = setTimeout(a, s);
                        };
                        return a(), () => clearTimeout(r);
                    },
                );
            function m() {
                const e = (function () {
                        const [e, t] = (0, s.KO)(p);
                        return a.useEffect(() => t(), [t]), e;
                    })(),
                    t = (function () {
                        const [e, t] = a.useState(),
                            o = (0, i.hC)("spaces_2022_h2_spacebar_use_mock_data");
                        return (
                            a.useEffect(
                                function () {
                                    o &&
                                        r
                                            .e("ondemand.Spacebar.Mocks")
                                            .then(r.bind(r, 731020))
                                            .then((e) => {
                                                t(e);
                                            });
                                },
                                [o],
                            ),
                            e ? e.default : []
                        );
                    })(),
                    o = (0, n.Z)(e);
                return Array.isArray(o?.threads) && (o.threads = o.threads.concat(t)), o;
            }
            const f = (e) => "number" == typeof e && e > 0;
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                o = r(325686),
                s = r(235902),
                n = r(885015),
                i = r(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: l } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? a.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] })), a.createElement(o.Z, { style: c.gapText }, r), a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] }))) : a.createElement(o.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                o = r(202784),
                s = r(325686),
                n = r(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...n } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, r && l.withGutterColumn] }));
                    return o.createElement(s.Z, (0, a.Z)({ style: [t, l.root, r && l.withGutter] }, n), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Spacebar~loader.SidebarSpacebar.b5d441ca.js.map
