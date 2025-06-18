"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Spacebar~loader.SidebarSpacebar", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        530568: (e, t, r) => {
            r.d(t, { B: () => oe, I: () => q });
            var a = r(202784),
                o = r(744610),
                i = r(392237),
                n = r(530732),
                s = r(321835),
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
                    a.createElement(c.Z, { audioLevel: 0.5, color: i.default.theme.colors.white, size: i.default.theme.spacesPx.space20 })
                );
            }
            var u = r(325686),
                m = r(642153),
                p = r(757483);
            function f(e) {
                const t = { borderRadius: i.default.theme.borderRadiiPx[e.borderRadius] },
                    r = g("0", "livevideo" === e.type),
                    o = g("1", "livevideo" === e.type),
                    n = g("2", "livevideo" === e.type);
                return a.createElement(u.Z, { style: [t, n] }, a.createElement(u.Z, { style: [t, o] }, a.createElement(u.Z, { style: [t, r] }, e.children)));
            }
            const h = { 0: { opacity_start: 0.2, spread_end: b(2) }, 1: { opacity_start: 0.2, spread_end: b(4) }, 2: { opacity_start: 0.2, spread_end: b(6) } };
            function g(e, t) {
                const r = b(0),
                    a = h[e];
                i.default.isDarkMode() && (a.opacity_start = 2 * a.opacity_start);
                const o = t ? i.default.theme.colors.magenta500 : i.default.theme.colors.purple500,
                    n = p.Z.hexToCss(o, a.opacity_start),
                    s = p.Z.hexToCss(o, 0);
                return { animationDuration: "1.25s", animationIterationCount: "infinite", animationKeyframes: [{ "0%": { boxShadow: `0 0 0 ${r} ${n}` }, "100%": { boxShadow: `0 0 0 ${a.spread_end} ${s}` } }], animationTimingFunction: "linear" };
            }
            function b(e) {
                return `${e}px`;
            }
            function v({ borderRadius: e, children: t, isInverted: r, type: o }) {
                return r ? a.createElement(f, { borderRadius: e, type: o }, t) : t;
            }
            function y(e) {
                const { borderRadius: t, isInverted: r, type: o } = e,
                    n = a.useMemo(() => ({ borderRadius: i.default.theme.borderRadiiPx[t] }), [t]),
                    s = a.useMemo(() => [n, C.backgroundContainer, r ? C.withBorder : C.withPadding, r && "audiospace" === o && C.borderColorAudio, r && "livevideo" === o && C.borderColorVideo, !r && "audiospace" === o && C.backgroundColorAudio, !r && "livevideo" === o && C.backgroundColorVideo], [n, r, o]),
                    l = a.useMemo(() => [n, C.pillContainer], [n]);
                return a.createElement(v, { borderRadius: t, isInverted: r, type: o }, a.createElement(u.Z, { style: l, testID: "pill-contents-container" }, a.createElement(u.Z, { style: s }, a.createElement(u.Z, { style: C.pillContentsContainer }, a.createElement(m.Z, { borderColor: "cellBackground", borderWidth: "small", style: C.facepile, userAvatarSize: "large", userAvatarUrls: e.userAvatarUrls }), e.children))));
            }
            const C = i.default.create((e) => {
                const t = e.borderWidthsPx.medium;
                return { pillContainer: { display: "flex", flexDirection: "row", width: "100%" }, backgroundContainer: { flex: 1, height: "100%", justifyContent: "center", backgroundColor: e.colors.navigationBackground }, withBorder: { borderWidth: t }, withPadding: { padding: t }, backgroundColorAudio: { backgroundColor: e.colors.purple500 }, backgroundColorVideo: { backgroundColor: e.colors.magenta500 }, borderColorAudio: { borderColor: e.colors.purple500 }, borderColorVideo: { borderColor: e.colors.magenta500 }, pillContentsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, facepile: { pointerEvents: "none" } };
            });
            var _ = r(731708),
                E = r(279046),
                Z = r(124964);
            function w(e) {
                return a.createElement(u.Z, { style: x.pillTextContent }, a.createElement(_.ZP, { align: "left", color: "white", numberOfLines: 1, size: "subtext2", style: x.pillTextContent_title }, e.count ? a.createElement(_.ZP, { weight: "bold" }, a.createElement(E.Z.ParticipantsCount, { count: e.count, labelType: "plusCount" })) : null, a.createElement(Z.Z, { color: "white" }), e.title));
            }
            const x = i.default.create((e) => ({ pillTextContent: { flex: 1, marginStart: e.spaces.space4, marginEnd: e.spaces.space8 }, pillTextContent_title: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%", display: "inline-block" } }));
            r(136728);
            var P = r(400752),
                k = r(107267),
                S = r(910626);
            const I = Object.freeze({ host: "host", cohost: "cohost", speaker: "speaker", listener: "listener" });
            var B = r(976145),
                z = r(111677),
                M = r.n(z),
                D = r(292484),
                R = r(952793),
                T = r(479506),
                A = r(582129),
                L = r(725516),
                V = r(125363),
                H = r(390387),
                N = r(919022),
                j = r(905710),
                O = r(427478),
                W = r(823180),
                F = r(449998);
            const $ = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                U = { Broadcast: M().e39b368e, Space: M().ab4fc8bc, EmployeeSpace: M().b6de83a0, PrivateBroadcast: M().g3f251f2, PrivateSpace: M().d08666ba, BeFirstJoin: M().eadb5a46, HostsBroadcast: M().f9629a8f, HostsSpace: M().ia3c0ab7, HostedBy: M().hd552761, RelativePosition: M().c3ea19a5, WithParticipants: M().a5235305, socialProof: { isListening: M().df9f8243, isSpeaking: M().g2445c2f, isHosting: M().fcfd5a67, isCohosting: M().f7882829 } };
            function G(e) {
                const t = (0, L.z)(),
                    r = (0, V.I0)(),
                    o = (0, k.useHistory)(),
                    i = (0, V.v9)(H.Qb),
                    n = (0, R.hC)("rweb_live_dock_enabled"),
                    s = (0, D.cm)() && n,
                    l = (0, P.b9)(A.dq),
                    c = (function () {
                        const e = (0, V.I0)(),
                            t = (0, P.b9)(F.wQ);
                        return a.useCallback(
                            (r, a) => {
                                t({ videoId: r, isLiveVideo: a }), e(O.bi(W.N.EXPANDED));
                            },
                            [e, t],
                        );
                    })(),
                    d = (0, P.Dv)(F.Tc),
                    { participants_str: u, user_id: m, user_id_str: p } = e,
                    f = e.live_content.audiospace,
                    h = e.live_content.livevideo,
                    g = f?.broadcast_id ?? h?.id ?? "",
                    b = f?.is_employee_only ?? !1,
                    v = f?.is_locked ?? h?.is_locked ?? !1,
                    y = f?.title ?? h?.status ?? void 0,
                    C = f?.total_participating ?? h?.n_total_watching ?? 0,
                    _ = a.useMemo(() => (f ? "audiospace" : h ? "livevideo" : void 0), [f, h]),
                    E = a.useMemo(() => (u ? u.slice(0, 3) : []), [u]),
                    Z = a.useMemo(() => (f?.social_proof?.length ? f.social_proof[0] : h ? { role: I.host, user_id: m, user_id_str: p } : void 0), [f, h, m, p]);
                a.useEffect(() => {
                    if (E.length) {
                        const e = [p, ...E];
                        Z && e.push(Z.user_id_str), r(N.ZP.fetchManyIfNeeded(E));
                    }
                }, [r, Z, E, p]);
                const w = Math.max(0, C - E.length),
                    x = (0, V.v9)((e) => N.ZP.selectMany(e, E)),
                    z = a.useMemo(() => (x.length ? x.map((e) => e.profile_image_url_https ?? $) : Array(E.length).fill($)), [E, x]),
                    M = a.useMemo(() => (x.length && "Square" === x[0].profile_image_shape ? "xSmall" : "infinite"), [x]),
                    G = (0, V.v9)((e) => (Z ? N.ZP.select(e, Z?.user_id_str) : void 0)),
                    K = a.useMemo(() => {
                        if (Z && G) {
                            if (Z.role === I.host) return U.socialProof.isHosting({ name: G.name });
                            if (Z.role === I.cohost) return U.socialProof.isCohosting({ name: G.name });
                            if (Z.role === I.speaker) return U.socialProof.isSpeaking({ name: G.name });
                            if (Z.role === I.listener) return U.socialProof.isListening({ name: G.name });
                        }
                    }, [Z, G]),
                    q = a.useMemo(() => {
                        if (Z && G && K) return { label: K, role: Z.role, user: G };
                    }, [Z, K, G]),
                    Q = (0, V.v9)((e) => N.ZP.select(e, p));
                let J = "";
                y ? (J = y) : Q && (f && (J = U.HostsSpace({ hostName: Q.name })), h && (J = U.HostsBroadcast({ hostName: Q.name })));
                const Y = [];
                if ((b ? Y.push(U.EmployeeSpace) : v ? (f && Y.push(U.PrivateSpace), h && Y.push(U.PrivateBroadcast)) : (f && Y.push(U.Space), h && Y.push(U.Broadcast)), q?.label && Y.push(q.label), Q && Y.push(U.HostedBy({ hostName: Q.name })), J && Y.push(J), x.length)) {
                    const e = x.map((e) => e.name),
                        t = (0, B.Z)(e);
                    Y.push(U.WithParticipants({ listOfPeople: t }));
                }
                x.length || w || Y.push(U.BeFirstJoin);
                const X = (0, B.Z)(Y, !0),
                    ee = a.useMemo(() => ({ items: [{ audio_space_details: { broadcast_id: g, is_logged_in: i }, item_type: h ? T.Z.ItemType.PERISCOPE_BROADCAST : T.Z.ItemType.AUDIO_SPACE }] }), [g, i, h]);
                return {
                    "aria-label": X,
                    borderRadius: M,
                    onImpression: a.useCallback(() => {
                        t.scribe({ action: "impression", data: ee, element: "audiospace_fleet" });
                    }, [t, ee]),
                    onPress: a.useCallback(
                        (e) => {
                            const r = f ? (0, j.e)(g) : (0, j.s)(g),
                                a = { origin: S.Y.spacebar };
                            e.ctrlKey || e.metaKey ? window.open(r) : h && s && d !== h.id ? (l({}), c(h.id, !0)) : o.push(r, a), t.scribe({ action: "click", data: ee, element: "audiospace_fleet" });
                        },
                        [t, f, s, d, o, g, l, h, c, ee],
                    ),
                    otherParticipantsCount: w,
                    socialProof: q,
                    title: J,
                    type: _,
                    user: Q,
                    userAvatarUrls: z,
                };
            }
            const K = { start: 1, press: 0.96 };
            function q({ isFirst: e, thread: t }) {
                const { "aria-label": r, borderRadius: c, onImpression: u, onPress: m, otherParticipantsCount: p, title: f, type: h, userAvatarUrls: g } = G(t),
                    b = a.useRef(new o.Z.Value(K.start)).current,
                    v = a.useCallback(
                        (e) => {
                            o.Z.timing(b, { toValue: e, duration: 100, useNativeDriver: !1 }).start();
                        },
                        [b],
                    ),
                    C = a.useCallback(() => {
                        v(K.press);
                    }, [v]),
                    _ = a.useCallback(() => {
                        v(K.start);
                    }, [v]),
                    E = a.useMemo(() => [Q.animatedViewPress, { transform: [{ scale: b }] }], [b]),
                    Z = a.useMemo(() => [{ borderRadius: i.default.theme.borderRadiiPx[c] }, e && { paddingStart: i.default.theme.spaces.space16 }, Q.rootContainer], [c, e]);
                return a.createElement(s.Z, { onImpression: u }, a.createElement(n.Z, { "aria-label": r, onPress: m, onPressIn: C, onPressOut: _, style: Z }, a.createElement(o.Z.View, { style: E }, a.createElement(y, { borderRadius: c, type: h, userAvatarUrls: g }, a.createElement(w, { count: p, title: f }), a.createElement(d, null), a.createElement(l.L, { size: "space8" })))));
            }
            const Q = i.default.create((e) => ({ rootContainer: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%", userSelect: "none" }, animatedViewPress: { width: "100%" } }));
            var J = r(952428),
                Y = r(823161),
                X = r(366635),
                ee = r(771099),
                te = r(443781);
            function re({ socialProof: e }) {
                const t = a.useMemo(() => a.createElement(X.Z, { affiliateBadgeInfo: e.user.highlightedLabel, avatarSize: "small", isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", profileImageUrl: e.user.profile_image_url_https, verifiedType: e.user.verified_type }), [e]),
                    r = a.useMemo(() => (e.role === I.host ? a.createElement(M().I18NFormatMessage, { $i18n: "d80a7547" }, t) : e.role === I.cohost ? a.createElement(M().I18NFormatMessage, { $i18n: "j7293d6b" }, t) : e.role === I.speaker ? a.createElement(M().I18NFormatMessage, { $i18n: "df79977f" }, t) : e.role === I.listener ? a.createElement(M().I18NFormatMessage, { $i18n: "ad960f39" }, t) : void 0), [t, e]);
                return a.createElement(_.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2", style: ae.socialProof }, r);
            }
            const ae = i.default.create((e) => ({ socialProof: { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: e.spaces.space8, marginEnd: e.spaces.space8, whiteSpace: "pre" } }));
            function oe({ thread: e }) {
                const { featureSwitches: t } = (0, te.QZ)(),
                    r = ee.eY(),
                    { "aria-label": o, borderRadius: i, onImpression: n, onPress: l, otherParticipantsCount: c, socialProof: d, title: p, type: f, user: h, userAvatarUrls: g } = G(e),
                    b = t.isTrue("rweb_sourcemap_migration");
                return h ? a.createElement(s.Z, { onImpression: n }, a.createElement(J.Z, { "aria-label": o, onPress: l, style: [ie.container, b && ie.redesignContainer], withDarkerInteractiveBackground: r }, b ? a.createElement(a.Fragment, null, a.createElement(Y.default, { "aria-label": h.name, borderColor: "livevideo" === f ? "magenta500" : "purple500", borderWidth: "medium", screenName: h.screen_name, size: "xLarge", uri: h.profile_image_url_https }), a.createElement(u.Z, { style: ie.meta }, a.createElement(X.Z, { affiliateBadgeInfo: h.highlightedLabel, isBlueVerified: h.is_blue_verified, isVerified: h.verified, name: h.name, screenName: h.screen_name, verifiedType: h.verified_type }), a.createElement(_.ZP, { numberOfLines: 1, size: "subtext1" }, p)), a.createElement(u.Z, { style: ie.participants }, "audiospace" === f ? a.createElement(m.Z, { userAvatarSize: "small", userAvatarUrls: g }) : null, c ? a.createElement(_.ZP, { color: "gray700", size: "subtext3" }, E.Z.formatCountShort(c)) : null)) : a.createElement(a.Fragment, null, d ? a.createElement(re, { socialProof: d }) : null, a.createElement(u.Z, { style: ie.content }, a.createElement(u.Z, { style: ie.textContent }, a.createElement(_.ZP, { numberOfLines: 2, size: "body", weight: "bold" }, p)), a.createElement(u.Z, { style: ie.facepilesContainer }, a.createElement(y, { borderRadius: i, isInverted: !0, type: f, userAvatarUrls: g }, c ? a.createElement(_.ZP, { color: "text", size: "subtext2", style: ie.participantsCountText, weight: "bold" }, a.createElement(E.Z.ParticipantsCount, { count: c, labelType: "plusCount" })) : null)))))) : null;
            }
            const ie = i.default.create((e) => ({ container: { alignItems: "flex-start", flexDirection: "column", justifyContent: "space-between", paddingHorizontal: e.spacesPx.space16, paddingVertical: e.spacesPx.space12, userSelect: "none" }, redesignContainer: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start" }, content: { flexDirection: "row", justifyContent: "space-between", width: "100%" }, textContent: { flexShrink: 1 }, facepilesContainer: { marginStart: e.spaces.space16 }, meta: { flex: 1 }, participants: { flexDirection: "row", gap: e.spaces.space8 }, participantsCountText: { marginEnd: e.spaces.space8 } }));
        },
        22492: (e, t, r) => {
            r.d(t, { L: () => n });
            var a = r(202784),
                o = r(325686),
                i = r(392237);
            function n(e) {
                return a.createElement(o.Z, { style: s[e.size] });
            }
            const s = i.default.create(
                Object.keys(i.default.theme.spacesPx).reduce((e, t) => {
                    const r = i.default.theme.spacesPx[t];
                    return (e[t] = { width: r, height: r }), e;
                }, {}),
            );
        },
        109808: (e, t, r) => {
            r.d(t, { e: () => x });
            var a = r(202784),
                o = r(565058),
                i = r(400752),
                n = r(987809),
                s = r(516951),
                l = r(176340),
                c = r(420182),
                d = r(385322),
                u = r(333259),
                m = r(536387),
                p = r(526250),
                f = r(901910),
                h = r(2138);
            function g(e, t, r) {
                return (0, o.cn)(null, (0, h.Z)(e, t, r));
            }
            var b = r(390387);
            const v = (0, m.K9)((e) => e(c.dd).withEndpoint(l.Z).spacebar()),
                y = (0, n.xu)((e) =>
                    g(
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
                _ = g((e, t) => {
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
                Z = (0, f.W)((e, t) => {
                    const r = (0, b._h)(e(c.qc).getState());
                    if (!r) return s.Z;
                    const a = `/live_content/${r}`;
                    return (0, d.Cg)({ topic: a, featureSwitches: e(c.f0), onTopic: () => t(_) });
                }),
                w = (0, o.cn)((e) => (e(v), e(v.resolved)));
            function x() {
                const e = (0, i.Dv)(w),
                    t = (0, i.b9)(E);
                (0, p.N)(Z);
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
                i = r(235902),
                n = r(885015),
                s = r(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: l } = i.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? a.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] })), a.createElement(o.Z, { style: c.gapText }, r), a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] }))) : a.createElement(o.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                o = r(202784),
                i = r(325686),
                n = r(392237);
            class s extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...n } = this.props,
                        s = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, r && l.withGutterColumn] }));
                    return o.createElement(i.Z, (0, a.Z)({ style: [t, l.root, r && l.withGutter] }, n), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                o = r(890601),
                i = r(783427),
                n = r(717683),
                s = r(347101);
            const l = (e = {}) => {
                const t = a.useContext(n.Z),
                    { direction: r } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                o = r(890601),
                i = r(783427),
                n = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                o = r(890601),
                i = r(783427),
                n = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                o = r(890601),
                i = r(783427),
                n = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                o = r(890601),
                i = r(783427),
                n = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(716406);
            function o(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(o) : (0, a.Z)(e, (e) => o(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Spacebar~loader.SidebarSpacebar.10c3491a.js.map
