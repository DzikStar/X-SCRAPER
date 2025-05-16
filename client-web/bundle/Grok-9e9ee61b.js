"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-9e9ee61b"],
    {
        617288: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                i = a(392237);
            function l({ query: e }) {
                const t = n.useMemo(() => ({ dots: n.createElement(n.Fragment, null, n.createElement(o.ZP, { size: "body", style: c.dot1 }, "."), n.createElement(o.ZP, { size: "body", style: c.dot2 }, "."), n.createElement(o.ZP, { size: "body", style: c.dot3 }, ".")) }), []);
                return n.createElement(r.Z, { style: c.container }, t.dots);
            }
            const s = { animationDuration: "1s", animationIterationCount: "infinite", animationKeyframes: [{ "0%": { opacity: 0 }, "50%": { opacity: 1 }, "100%": { opacity: 0 } }], animationTimingFunction: "linear" },
                c = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row" }, dot1: s, dot2: { ...s, animationDelay: "0.1s" }, dot3: { ...s, animationDelay: "0.2s" }, italic: { fontStyle: "italic" } }));
        },
        6337: (e, t, a) => {
            a.d(t, { Z: () => de });
            var n = a(202784),
                r = a(325686),
                o = a(392237),
                i = a(67369),
                l = a(530525),
                s = a(439592),
                c = a(731708),
                d = a(332920),
                m = a.n(d),
                p = a(323265),
                u = a(952793),
                g = a(125363),
                h = a(38562),
                b = a(661808),
                w = a(721266),
                y = a(992942),
                f = a(480241),
                E = a(335923);
            function Z({ children: e, description: t, title: a }) {
                const o = (0, i.LX)(),
                    l = n.useMemo(() => ({ width: o ? "100%" : 440 }), [o]);
                return n.createElement(r.Z, { style: l }, n.createElement(c.ZP, { size: "title4" }, a), n.createElement(w.Z, { size: "space8" }), n.createElement(r.Z, { style: { height: 50 } }, n.createElement(c.ZP, { color: "gray700", size: "headline2" }, t)), n.createElement(r.Z, { style: k.content }, e));
            }
            const k = o.default.create((e) => ({ content: { marginTop: e.spaces.space16, width: "100%" } }));
            var v = a(823161),
                x = a(919022);
            const _ = ({ children: e, prompt: t }) => {
                    const a = (0, g.v9)(x.ZP.selectViewerUser);
                    return n.createElement(r.Z, { style: z.container }, n.createElement(r.Z, { style: z.wrapper }, n.createElement(r.Z, { style: z.header }, n.createElement(v.default, { "aria-label": a?.name, screenName: a?.screen_name, size: "large", uri: a?.profile_image_url_https }), n.createElement(c.ZP, { weight: "medium" }, n.createElement("span", { style: z.prompt }, t))), n.createElement(w.Z, { size: "space4" }), n.createElement(r.Z, { style: z.content }, e)));
                },
                z = o.default.create((e) => ({ container: { width: "100%", borderRadius: e.borderRadii.xLarge, borderWidth: e.borderWidths.small, borderColor: e.colors.gray50, backgroundColor: e.colors.cellBackground, padding: e.spaces.space12, boxShadow: "0 20px 50px rgba(136,153,166,0.15)" }, wrapper: { height: 220, overflow: "hidden" }, header: { flexDirection: "row", alignItems: "center", justifyContent: "start", gap: e.spaces.space16 }, prompt: { backgroundImage: `linear-gradient(90deg, ${e.colors.text}, ${e.colors.gray700})`, backgroundClip: "text", color: "transparent" }, content: { marginTop: e.spaces.space8 } })),
                C = m().e6796748,
                P = m().db470fdc,
                I = () => n.createElement(Z, { description: P, title: C }, n.createElement(_, { prompt: "Help me write an email" }, n.createElement(r.Z, { style: B.container }, n.createElement(c.ZP, { color: "gray700" }, n.createElement(E.Z, { markdownText: "Sure, I can help you draft an email. Let's start by getting some details:\n\n1. **Purpose of the Email**: What is the main reason for writing this email? (e.g., business inquiry, follow-up, thank you, complaint, invitation, etc.)\n\n2. **Recipient**: Who is the email for? (e.g., colleague, client, friend, company, service provider)" })), n.createElement(r.Z, { style: B.shadow })))),
                B = o.default.create((e) => ({ container: { position: "relative", height: 200, overflow: "hidden" }, carousel: { position: "absolute", bottom: 0, start: 0, width: "100%", backgroundImage: `linear-gradient(${e.colors.transparent}, ${e.colors.cellBackground} 30%)`, zIndex: 10 }, shadow: { position: "absolute", bottom: 0, start: 0, height: 100, width: "100%", backgroundImage: `linear-gradient(${e.colors.transparent}, ${e.colors.cellBackground})`, zIndex: 10 }, tweet: { backgroundColor: e.colors.cellBackground }, tweets: {} })),
                M = m().e9adc2d0,
                W = m().aaab6cdc,
                H = () => n.createElement(Z, { description: W, title: M }, n.createElement(_, { prompt: "Solve the Two Sum problem in javascript" }, n.createElement(r.Z, { style: T.container }, n.createElement(c.ZP, { color: "gray700" }, n.createElement(E.Z, { markdownText: "Here's how you can solve the Two Sum problem in JavaScript:\n\n```javascript\nfunction twoSum(nums, target) {\n    const numMap = new Map();\n\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (numMap.has(complement)) {\n            return [numMap.get(complement), i];\n        }\n        numMap.set(nums[i], i);\n    }\n\n    // If no solution is found\n    return null;\n}\n```\n" })), n.createElement(r.Z, { style: T.shadow })))),
                T = o.default.create((e) => ({ container: { position: "relative", height: 200, overflow: "hidden" }, carousel: { position: "absolute", bottom: 0, start: 0, width: "100%", backgroundImage: `linear-gradient(${e.colors.transparent}, ${e.colors.cellBackground} 30%)`, zIndex: 10 }, tweet: { backgroundColor: e.colors.cellBackground }, shadow: { position: "absolute", bottom: 0, start: 0, height: 100, width: "100%", backgroundImage: `linear-gradient(${e.colors.transparent}, ${e.colors.cellBackground})`, zIndex: 10 }, tweets: {} }));
            var S = a(172016),
                V = a(623130),
                D = a(144199);
            const $ = m().jd08d606,
                j = m().he526d22,
                N = m().i6932876,
                G = () => {
                    const e = S.Z.get() > 1 ? D : V;
                    return n.createElement(Z, { description: j, title: $ }, n.createElement(_, { prompt: "Make a cyberpunk picture" }, n.createElement(r.Z, { style: R.imageContainer }, n.createElement(l.Z, { "aria-label": N, aspectMode: s.Z.exact(2), image: e }))));
                },
                R = o.default.create((e) => ({ imageContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" } }));
            var F = a(353644),
                L = a(263160);
            const q = m().j7cdee8e,
                J = m().f1f683c2,
                U = ["1818742213943427381", "1730278921248161877", "1788216376919765089"],
                X = () => {
                    const e = (0, L.Z)();
                    return n.createElement(Z, { description: J, title: q }, n.createElement(_, { prompt: "What's the latest Cybertruck news?" }, n.createElement(r.Z, { style: A.container }, n.createElement(c.ZP, { color: "gray700" }, n.createElement(E.Z, { markdownText: "Here are the key updates on the Tesla Cybertruck:\n\n**Production and Deliveries:** Tesla has significantly ramped up production of the Cybertruck, with more deliveries happening. A large fleet was spotted at Gigafactory Texas, indicating a serious push in manufacturing. Tesla aims for a production rate of 250,000 Cybertrucks per year, targeting mid-2025 for this milestone." })), n.createElement(r.Z, { style: A.carousel }, n.createElement(F.Z, { carouselProps: e, childrenStyle: A.tweet, style: A.tweets, tweetIds: U })))));
                },
                A = o.default.create((e) => ({ container: { position: "relative", overflow: "hidden", height: 170 }, carousel: { position: "absolute", bottom: 0, start: 0, width: "100%", backgroundImage: `linear-gradient(${e.colors.transparent}, ${e.colors.cellBackground} 30%)`, zIndex: 10 }, tweet: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge }, tweets: {} }));
            var K = a(154003),
                O = a(584770);
            const Y = "grok",
                Q = m().c9772e6e,
                ee = m().ca559b70;
            function te() {
                const e = !!p.ZP.isWebView(),
                    t = (0, i.Mv)(),
                    a = (0, O.Z)();
                return n.createElement(K.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: Y }, external: e, query: { referring_page: Y } }, size: "large", style: t ? null : ae.narrowButton, testID: "empty_state_button_text", type: "primaryFilled" }, a ? Q : ee);
            }
            const ae = o.default.create((e) => ({ narrowButton: { alignSelf: "center" } })),
                ne = m().b6abc25a,
                re = m().e1cdaf9e;
            function oe() {
                const e = (0, i.LX)(),
                    t = (0, i.Mv)(),
                    a = n.useMemo(() => ({ width: e ? "100%" : 920 }), [e]);
                return n.createElement(r.Z, { style: ie.container }, n.createElement(r.Z, { style: ie.scrollable }, n.createElement(r.Z, { style: ie.contentContainer }, n.createElement(r.Z, { style: ie.content }, n.createElement(r.Z, { style: a }, n.createElement(r.Z, { style: ie.header }, n.createElement(c.ZP, { size: "title1", weight: "medium" }, ne), n.createElement(w.Z, { size: "space4" }), n.createElement(c.ZP, { align: "center", color: "gray700", size: "headline1" }, re), n.createElement(w.Z, { size: "space36" }), n.createElement(r.Z, { style: ie.upsellButtonContainer }, n.createElement(te, null))), n.createElement(w.Z, { size: "space80" }), n.createElement(r.Z, { style: ie.upsellBlocks }, n.createElement(G, null), n.createElement(X, null), n.createElement(I, null), t ? null : n.createElement(H, null)))), n.createElement(y.Z, { resizeMode: "cover", source: { uri: f }, style: ie.topGrid }), n.createElement(y.Z, { resizeMode: "cover", source: { uri: f }, style: ie.bottomGrid }))));
            }
            const ie = o.default.create((e) => ({ container: { display: "grid", width: "100%", position: "relative" }, body: { width: "100%", height: "100%", maxHeight: "100%", flexDirection: "column" }, topGrid: { width: "100%", height: 200, position: "absolute", start: 0, top: 0, zIndex: 1, transform: "rotate(180deg)" }, bottomGrid: { width: "100%", height: 150, position: "absolute", start: 0, bottom: 0, zIndex: 1 }, header: { width: "100%", flexDirection: "column", alignItems: "center" }, scrollable: { width: "100%", flex: 1, flexGrow: 1, overflow: "auto", minHeight: "100%", height: "100%", alignItems: "center" }, content: { position: "relative", zIndex: 10, paddingTop: 100, boxSizing: "border-box", paddingHorizontal: o.default.theme.spaces.space16, paddingBottom: o.default.theme.spaces.space48 }, contentContainer: { minWidth: "100%", minHeight: "100%", alignItems: "center" }, upsellButtonContainer: { width: "min-content" }, upsellBlocks: { marginTop: e.spaces.space16, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", gap: e.spaces.space40, rowGap: e.spaces.space56 } })),
                le = m().e13591c0,
                se = m().b5df32b0,
                ce = m().c27ca452;
            function de() {
                const e = (0, u.D2)(
                        (function () {
                            switch (o.default.theme.paletteName) {
                                case "light":
                                    return "subscriptions_inapp_grok_video_upsell_light";
                                case "dark":
                                    return "subscriptions_inapp_grok_video_upsell_dim";
                                default:
                                    return "subscriptions_inapp_grok_video_upsell";
                            }
                        })(),
                    ).getStringValue(""),
                    t = e.length > 0,
                    a = window.innerHeight < window.innerWidth && p.ZP.isMobileOS(),
                    d = !!p.ZP.isWebView(),
                    m = (0, i.Mv)(),
                    w = "dark" === o.default.theme.paletteName,
                    y = "en" === (0, g.v9)(h.VT);
                if ((0, u.hC)("responsive_web_grok_v2_upsell_enabled")) return n.createElement(oe, null);
                const f = n.createElement(n.Fragment, null, !t || a || w ? null : ((E = n.createElement("video", { autoPlay: !0, loop: !0, muted: !0, playsInline: !0, src: e, style: pe.video })), m ? n.createElement(r.Z, { style: ue.narrowVideoContainer }, E) : E), w && n.createElement(r.Z, { style: [ue.imagePlaceholder, d && ue.imagePlaceholderWebView, !m && ue.imagePlaceholderWide] }, n.createElement(l.Z, { "aria-label": le, aspectMode: s.Z.exact(1), image: b })));
                var E;
                return n.createElement(r.Z, { style: y ? (m ? ue.contentNarrow : ue.content) : ue.contentWithoutVideo }, y ? f : null, n.createElement(r.Z, { style: y && m ? ue.upsellNarrow : ue.upsell }, n.createElement(c.ZP, { align: "center", size: "title1", style: ue.title, weight: "heavy" }, se), n.createElement(c.ZP, { align: "center", color: "gray700", size: "body", style: ue.description }, ce), n.createElement(te, null)));
            }
            const me = "550px",
                pe = { video: { overflow: "auto", maxWidth: me, maxHeight: me, alignSelf: "center", width: "100%" } },
                ue = o.default.create((e) => ({ narrowVideoContainer: { marginVertical: e.spaces.space16, marginHorizontal: e.spaces.space16 }, contentWithoutVideo: { justifyContent: "center" }, content: { justifyContent: "space-between", marginVertical: e.spaces.space32 }, contentNarrow: { justifyContent: "space-between" }, upsell: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space32, justifyContent: "center" }, upsellNarrow: { position: "absolute", bottom: "0px", backgroundColor: e.colors.cellBackground, paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space24, justifyContent: "center", paddingTop: e.spaces.space16, webkitMask: "var(--mask)", "--mask": "linear-gradient(to top, rgba(0,0,0, 1) 0%, rgba(0,0,0, 1) 84%, rgba(0,0,0, 0) 100%, rgba(0,0,0, 0) 0 ) 100% 50% / 100% 100%", mask: "var(--mask)" }, title: { marginBottom: e.spaces.space8 }, description: { marginBottom: e.spaces.space16 }, imagePlaceholder: { maxWidth: me, maxHeight: me, marginHorizontal: "auto", width: "100%" }, imagePlaceholderWebView: { marginTop: e.spaces.space28 }, imagePlaceholderWide: { paddingHorizontal: e.spaces.space48 } }));
        },
        464023: (e, t, a) => {
            a.d(t, { F4: () => i, J5: () => l, N_: () => r, UD: () => s, c0: () => n, oq: () => c, uY: () => o, vf: () => d });
            const n = "1720665183188922368",
                r = "grokWebviewEventMessageHandler",
                o = "tappedClearHistoryButton",
                i = "clearHistoryWithoutConfirm",
                l = "setModeFun",
                s = "setModeNormal",
                c = "setModel",
                d = 800;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-9e9ee61b.7671856a.js.map
