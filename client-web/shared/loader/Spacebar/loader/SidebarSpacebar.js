"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Spacebar~loader.SidebarSpacebar"],
    {
        530568: (e, t, r) => {
            r.d(t, { B: () => oe, I: () => q });
            var a = r(202784),
                o = r(744610),
                n = r(392237),
                s = r(530732),
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
                    a.createElement(c.Z, { audioLevel: 0.5, color: n.default.theme.colors.white, size: n.default.theme.spacesPx.space20 })
                );
            }
            var u = r(325686),
                p = r(642153),
                m = r(757483);
            function f(e) {
                const t = { borderRadius: n.default.theme.borderRadiiPx[e.borderRadius] },
                    r = b("0", "livevideo" === e.type),
                    o = b("1", "livevideo" === e.type),
                    s = b("2", "livevideo" === e.type);
                return a.createElement(u.Z, { style: [t, s] }, a.createElement(u.Z, { style: [t, o] }, a.createElement(u.Z, { style: [t, r] }, e.children)));
            }
            const h = { 0: { opacity_start: 0.2, spread_end: g(2) }, 1: { opacity_start: 0.2, spread_end: g(4) }, 2: { opacity_start: 0.2, spread_end: g(6) } };
            function b(e, t) {
                const r = g(0),
                    a = h[e];
                n.default.isDarkMode() && (a.opacity_start = 2 * a.opacity_start);
                const o = t ? n.default.theme.colors.magenta500 : n.default.theme.colors.purple500,
                    s = m.Z.hexToCss(o, a.opacity_start),
                    i = m.Z.hexToCss(o, 0);
                return { animationDuration: "1.25s", animationIterationCount: "infinite", animationKeyframes: [{ "0%": { boxShadow: `0 0 0 ${r} ${s}` }, "100%": { boxShadow: `0 0 0 ${a.spread_end} ${i}` } }], animationTimingFunction: "linear" };
            }
            function g(e) {
                return `${e}px`;
            }
            function v({ borderRadius: e, children: t, isInverted: r, type: o }) {
                return r ? a.createElement(f, { borderRadius: e, type: o }, t) : t;
            }
            function y(e) {
                const { borderRadius: t, isInverted: r, type: o } = e,
                    s = a.useMemo(() => ({ borderRadius: n.default.theme.borderRadiiPx[t] }), [t]),
                    i = a.useMemo(() => [s, C.backgroundContainer, r ? C.withBorder : C.withPadding, r && "audiospace" === o && C.borderColorAudio, r && "livevideo" === o && C.borderColorVideo, !r && "audiospace" === o && C.backgroundColorAudio, !r && "livevideo" === o && C.backgroundColorVideo], [s, r, o]),
                    l = a.useMemo(() => [s, C.pillContainer], [s]);
                return a.createElement(v, { borderRadius: t, isInverted: r, type: o }, a.createElement(u.Z, { style: l, testID: "pill-contents-container" }, a.createElement(u.Z, { style: i }, a.createElement(u.Z, { style: C.pillContentsContainer }, a.createElement(p.Z, { borderColor: "cellBackground", borderWidth: "small", style: C.facepile, userAvatarSize: "large", userAvatarUrls: e.userAvatarUrls }), e.children))));
            }
            const C = n.default.create((e) => {
                const t = e.borderWidthsPx.medium;
                return { pillContainer: { display: "flex", flexDirection: "row", width: "100%" }, backgroundContainer: { flex: 1, height: "100%", justifyContent: "center", backgroundColor: e.colors.navigationBackground }, withBorder: { borderWidth: t }, withPadding: { padding: t }, backgroundColorAudio: { backgroundColor: e.colors.purple500 }, backgroundColorVideo: { backgroundColor: e.colors.magenta500 }, borderColorAudio: { borderColor: e.colors.purple500 }, borderColorVideo: { borderColor: e.colors.magenta500 }, pillContentsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, facepile: { pointerEvents: "none" } };
            });
            var _ = r(731708),
                E = r(279046),
                P = r(124964);
            function Z(e) {
                return a.createElement(u.Z, { style: x.pillTextContent }, a.createElement(_.ZP, { align: "left", color: "white", numberOfLines: 1, size: "subtext2", style: x.pillTextContent_title }, e.count ? a.createElement(_.ZP, { weight: "bold" }, a.createElement(E.Z.ParticipantsCount, { count: e.count, labelType: "plusCount" })) : null, a.createElement(P.Z, { color: "white" }), e.title));
            }
            const x = n.default.create((e) => ({ pillTextContent: { flex: 1, marginStart: e.spaces.space4, marginEnd: e.spaces.space8 }, pillTextContent_title: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%", display: "inline-block" } }));
            r(136728);
            var w = r(400752),
                k = r(107267),
                S = r(910626);
            const I = Object.freeze({ host: "host", cohost: "cohost", speaker: "speaker", listener: "listener" });
            var B = r(976145),
                M = r(111677),
                R = r.n(M),
                T = r(292484),
                z = r(952793),
                A = r(479506),
                D = r(582129),
                V = r(725516),
                N = r(125363),
                H = r(390387),
                L = r(919022),
                O = r(905710),
                W = r(427478),
                $ = r(823180),
                F = r(449998);
            const U = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                j = { Broadcast: R().e39b368e, Space: R().ab4fc8bc, EmployeeSpace: R().b6de83a0, PrivateBroadcast: R().g3f251f2, PrivateSpace: R().d08666ba, BeFirstJoin: R().eadb5a46, HostsBroadcast: R().f9629a8f, HostsSpace: R().ia3c0ab7, HostedBy: R().hd552761, RelativePosition: R().c3ea19a5, WithParticipants: R().a5235305, socialProof: { isListening: R().df9f8243, isSpeaking: R().g2445c2f, isHosting: R().fcfd5a67, isCohosting: R().f7882829 } };
            function G(e) {
                const t = (0, V.z)(),
                    r = (0, N.I0)(),
                    o = (0, k.useHistory)(),
                    n = (0, N.v9)(H.Qb),
                    s = (0, z.hC)("rweb_live_dock_enabled"),
                    i = (0, T.cm)() && s,
                    l = (0, w.b9)(D.dq),
                    c = (function () {
                        const e = (0, N.I0)(),
                            t = (0, w.b9)(F.wQ);
                        return a.useCallback(
                            (r, a) => {
                                t({ videoId: r, isLiveVideo: a }), e(W.bi($.N.EXPANDED));
                            },
                            [e, t],
                        );
                    })(),
                    d = (0, w.Dv)(F.Tc),
                    { participants_str: u, user_id: p, user_id_str: m } = e,
                    f = e.live_content.audiospace,
                    h = e.live_content.livevideo,
                    b = f?.broadcast_id ?? h?.id ?? "",
                    g = f?.is_employee_only ?? !1,
                    v = f?.is_locked ?? h?.is_locked ?? !1,
                    y = f?.title ?? h?.status ?? void 0,
                    C = f?.total_participating ?? h?.n_total_watching ?? 0,
                    _ = a.useMemo(() => (f ? "audiospace" : h ? "livevideo" : void 0), [f, h]),
                    E = a.useMemo(() => (u ? u.slice(0, 3) : []), [u]),
                    P = a.useMemo(() => (f?.social_proof?.length ? f.social_proof[0] : h ? { role: I.host, user_id: p, user_id_str: m } : void 0), [f, h, p, m]);
                a.useEffect(() => {
                    if (E.length) {
                        const e = [m, ...E];
                        P && e.push(P.user_id_str), r(L.ZP.fetchManyIfNeeded(E));
                    }
                }, [r, P, E, m]);
                const Z = Math.max(0, C - E.length),
                    x = (0, N.v9)((e) => L.ZP.selectMany(e, E)),
                    M = a.useMemo(() => (x.length ? x.map((e) => e.profile_image_url_https ?? U) : Array(E.length).fill(U)), [E, x]),
                    R = a.useMemo(() => (x.length && "Square" === x[0].profile_image_shape ? "xSmall" : "infinite"), [x]),
                    G = (0, N.v9)((e) => (P ? L.ZP.select(e, P?.user_id_str) : void 0)),
                    K = a.useMemo(() => {
                        if (P && G) {
                            if (P.role === I.host) return j.socialProof.isHosting({ name: G.name });
                            if (P.role === I.cohost) return j.socialProof.isCohosting({ name: G.name });
                            if (P.role === I.speaker) return j.socialProof.isSpeaking({ name: G.name });
                            if (P.role === I.listener) return j.socialProof.isListening({ name: G.name });
                        }
                    }, [P, G]),
                    q = a.useMemo(() => {
                        if (P && G && K) return { label: K, role: P.role, user: G };
                    }, [P, K, G]),
                    Q = (0, N.v9)((e) => L.ZP.select(e, m));
                let J = "";
                y ? (J = y) : Q && (f && (J = j.HostsSpace({ hostName: Q.name })), h && (J = j.HostsBroadcast({ hostName: Q.name })));
                const Y = [];
                if ((g ? Y.push(j.EmployeeSpace) : v ? (f && Y.push(j.PrivateSpace), h && Y.push(j.PrivateBroadcast)) : (f && Y.push(j.Space), h && Y.push(j.Broadcast)), q?.label && Y.push(q.label), Q && Y.push(j.HostedBy({ hostName: Q.name })), J && Y.push(J), x.length)) {
                    const e = x.map((e) => e.name),
                        t = (0, B.Z)(e);
                    Y.push(j.WithParticipants({ listOfPeople: t }));
                }
                x.length || Z || Y.push(j.BeFirstJoin);
                const X = (0, B.Z)(Y, !0),
                    ee = a.useMemo(() => ({ items: [{ audio_space_details: { broadcast_id: b, is_logged_in: n }, item_type: h ? A.Z.ItemType.PERISCOPE_BROADCAST : A.Z.ItemType.AUDIO_SPACE }] }), [b, n, h]);
                return {
                    "aria-label": X,
                    borderRadius: R,
                    onImpression: a.useCallback(() => {
                        t.scribe({ action: "impression", data: ee, element: "audiospace_fleet" });
                    }, [t, ee]),
                    onPress: a.useCallback(
                        (e) => {
                            const r = f ? (0, O.e)(b) : (0, O.s)(b),
                                a = { origin: S.Y.spacebar };
                            e.ctrlKey || e.metaKey ? window.open(r) : h && i && d !== h.id ? (l({}), c(h.id, !0)) : o.push(r, a), t.scribe({ action: "click", data: ee, element: "audiospace_fleet" });
                        },
                        [t, f, i, d, o, b, l, h, c, ee],
                    ),
                    otherParticipantsCount: Z,
                    socialProof: q,
                    title: J,
                    type: _,
                    user: Q,
                    userAvatarUrls: M,
                };
            }
            const K = { start: 1, press: 0.96 };
            function q({ isFirst: e, thread: t }) {
                const { "aria-label": r, borderRadius: c, onImpression: u, onPress: p, otherParticipantsCount: m, title: f, type: h, userAvatarUrls: b } = G(t),
                    g = a.useRef(new o.Z.Value(K.start)).current,
                    v = a.useCallback(
                        (e) => {
                            o.Z.timing(g, { toValue: e, duration: 100, useNativeDriver: !1 }).start();
                        },
                        [g],
                    ),
                    C = a.useCallback(() => {
                        v(K.press);
                    }, [v]),
                    _ = a.useCallback(() => {
                        v(K.start);
                    }, [v]),
                    E = a.useMemo(() => [Q.animatedViewPress, { transform: [{ scale: g }] }], [g]),
                    P = a.useMemo(() => [{ borderRadius: n.default.theme.borderRadiiPx[c] }, e && { paddingStart: n.default.theme.spaces.space16 }, Q.rootContainer], [c, e]);
                return a.createElement(i.Z, { onImpression: u }, a.createElement(s.Z, { "aria-label": r, onPress: p, onPressIn: C, onPressOut: _, style: P }, a.createElement(o.Z.View, { style: E }, a.createElement(y, { borderRadius: c, type: h, userAvatarUrls: b }, a.createElement(Z, { count: m, title: f }), a.createElement(d, null), a.createElement(l.L, { size: "space8" })))));
            }
            const Q = n.default.create((e) => ({ rootContainer: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%", userSelect: "none" }, animatedViewPress: { width: "100%" } }));
            var J = r(952428),
                Y = r(823161),
                X = r(366635),
                ee = r(771099),
                te = r(443781);
            function re({ socialProof: e }) {
                const t = a.useMemo(() => a.createElement(X.Z, { affiliateBadgeInfo: e.user.highlightedLabel, avatarSize: "small", isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", profileImageUrl: e.user.profile_image_url_https, verifiedType: e.user.verified_type }), [e]),
                    r = a.useMemo(() => (e.role === I.host ? a.createElement(R().I18NFormatMessage, { $i18n: "d80a7547" }, t) : e.role === I.cohost ? a.createElement(R().I18NFormatMessage, { $i18n: "j7293d6b" }, t) : e.role === I.speaker ? a.createElement(R().I18NFormatMessage, { $i18n: "df79977f" }, t) : e.role === I.listener ? a.createElement(R().I18NFormatMessage, { $i18n: "ad960f39" }, t) : void 0), [t, e]);
                return a.createElement(_.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2", style: ae.socialProof }, r);
            }
            const ae = n.default.create((e) => ({ socialProof: { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: e.spaces.space8, marginEnd: e.spaces.space8, whiteSpace: "pre" } }));
            function oe({ thread: e }) {
                const { featureSwitches: t } = (0, te.QZ)(),
                    r = ee.eY(),
                    { "aria-label": o, borderRadius: n, onImpression: s, onPress: l, otherParticipantsCount: c, socialProof: d, title: m, type: f, user: h, userAvatarUrls: b } = G(e),
                    g = t.isTrue("rweb_sourcemap_migration");
                return h ? a.createElement(i.Z, { onImpression: s }, a.createElement(J.Z, { "aria-label": o, onPress: l, style: [ne.container, g && ne.redesignContainer], withDarkerInteractiveBackground: r }, g ? a.createElement(a.Fragment, null, a.createElement(Y.default, { "aria-label": h.name, borderColor: "livevideo" === f ? "magenta500" : "purple500", borderWidth: "medium", screenName: h.screen_name, size: "xLarge", uri: h.profile_image_url_https }), a.createElement(u.Z, { style: ne.meta }, a.createElement(X.Z, { affiliateBadgeInfo: h.highlightedLabel, isBlueVerified: h.is_blue_verified, isVerified: h.verified, name: h.name, screenName: h.screen_name, verifiedType: h.verified_type }), a.createElement(_.ZP, { numberOfLines: 1, size: "subtext1" }, m)), a.createElement(u.Z, { style: ne.participants }, "audiospace" === f ? a.createElement(p.Z, { userAvatarSize: "small", userAvatarUrls: b }) : null, c ? a.createElement(_.ZP, { color: "gray700", size: "subtext3" }, E.Z.formatCountShort(c)) : null)) : a.createElement(a.Fragment, null, d ? a.createElement(re, { socialProof: d }) : null, a.createElement(u.Z, { style: ne.content }, a.createElement(u.Z, { style: ne.textContent }, a.createElement(_.ZP, { numberOfLines: 2, size: "body", weight: "bold" }, m)), a.createElement(u.Z, { style: ne.facepilesContainer }, a.createElement(y, { borderRadius: n, isInverted: !0, type: f, userAvatarUrls: b }, c ? a.createElement(_.ZP, { color: "text", size: "subtext2", style: ne.participantsCountText, weight: "bold" }, a.createElement(E.Z.ParticipantsCount, { count: c, labelType: "plusCount" })) : null)))))) : null;
            }
            const ne = n.default.create((e) => ({ container: { alignItems: "flex-start", flexDirection: "column", justifyContent: "space-between", paddingHorizontal: e.spacesPx.space16, paddingVertical: e.spacesPx.space12, userSelect: "none" }, redesignContainer: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start" }, content: { flexDirection: "row", justifyContent: "space-between", width: "100%" }, textContent: { flexShrink: 1 }, facepilesContainer: { marginStart: e.spaces.space16 }, meta: { flex: 1 }, participants: { flexDirection: "row", gap: e.spaces.space8 }, participantsCountText: { marginEnd: e.spaces.space8 } }));
        },
        22492: (e, t, r) => {
            r.d(t, { L: () => s });
            var a = r(202784),
                o = r(325686),
                n = r(392237);
            function s(e) {
                return a.createElement(o.Z, { style: i[e.size] });
            }
            const i = n.default.create(
                Object.keys(n.default.theme.spacesPx).reduce((e, t) => {
                    const r = n.default.theme.spacesPx[t];
                    return (e[t] = { width: r, height: r }), e;
                }, {}),
            );
        },
        109808: (e, t, r) => {
            r.d(t, { e: () => x });
            var a = r(202784),
                o = r(565058),
                n = r(400752),
                s = r(987809),
                i = r(516951),
                l = r(176340),
                c = r(420182),
                d = r(385322),
                u = r(333259),
                p = r(536387),
                m = r(526250),
                f = r(901910),
                h = r(2138);
            function b(e, t, r) {
                return (0, o.cn)(null, (0, h.Z)(e, t, r));
            }
            var g = r(390387);
            const v = (0, p.K9)((e) => e(c.dd).withEndpoint(l.Z).spacebar()),
                y = (0, s.xu)((e) =>
                    b(
                        (e, t) => {
                            t(v);
                        },
                        e,
                        { leading: !0, trailing: !1 },
                    ),
                ),
                C = (0, o.cn)((e) => {
                    const t = e(v.resolved)?.refresh_delay_secs;
                    return t ? y(t) : (0, o.cn)(null, () => {});
                }),
                _ = b((e, t) => {
                    t(v);
                }, 1e4),
                E = (0, f.W)((e, t) => {
                    t(e(C));
                    const r = setInterval(() => {
                        t(e(C));
                    }, 3e5);
                    return () => {
                        clearInterval(r);
                    };
                }),
                P = (0, f.W)((e, t) => {
                    const r = (0, g._h)(e(c.qc).getState());
                    if (!r) return i.Z;
                    const a = `/live_content/${r}`;
                    return (0, d.Cg)({ topic: a, featureSwitches: e(c.f0), onTopic: () => t(_) });
                }),
                Z = (0, o.cn)((e) => (e(v), e(v.resolved)));
            function x() {
                const e = (0, n.Dv)(Z),
                    t = (0, n.b9)(E);
                (0, m.N)(P);
                const r = (0, u.mr)();
                return (
                    a.useEffect(() => {
                        if ("active" === r) return t();
                    }, [r, t]),
                    e
                );
            }
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                o = r(325686),
                n = r(235902),
                s = r(885015),
                i = r(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: l } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? a.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] })), a.createElement(o.Z, { style: c.gapText }, r), a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] }))) : a.createElement(o.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                s = r(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...s } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, r && l.withGutterColumn] }));
                    return o.createElement(n.Z, (0, a.Z)({ style: [t, l.root, r && l.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Spacebar~loader.SidebarSpacebar.e8aee45a.js.map
