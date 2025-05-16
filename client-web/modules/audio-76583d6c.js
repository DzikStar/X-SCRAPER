"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["modules.audio-76583d6c"],
    {
        447854: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(202784),
                o = n(325686),
                i = n(819844),
                r = n(392237),
                c = n(757483),
                l = n(187669),
                s = n(656898),
                d = n(30242),
                u = n(610214),
                p = n(844857);
            const m = 28,
                f = 28;
            function g(e) {
                const { audioSpaceId: t, height: n } = e,
                    i = d.w9();
                return u.bQ() ? a.createElement(o.Z, { style: [b.container, { height: n }] }, a.createElement(o.Z, { style: b.fadeIn }), a.createElement(h, { audioSpaceId: t, captions: i }), a.createElement(o.Z, { style: b.fadeOut })) : null;
            }
            function h({ audioSpaceId: e, captions: t }) {
                const n = (0, s.bd)(),
                    o = (0, p.Z)(e);
                return (
                    (0, l.q)(() => {
                        n(":audiospace:::transcription:impression");
                    }),
                    a.createElement(i.Z, { captionTextSize: "body", captions: t, footerHeight: m, headerHeight: f, scrollContainerStyle: b.scrollContainerStyle, verifiedLookup: o, withSpeakerAvatar: !0, withSpeakerScreenName: !0 })
                );
            }
            const b = r.default.create((e) => {
                const t = c.Z.hexToCss(e.colors.navigationBackground, 0),
                    n = c.Z.hexToCss(e.colors.navigationBackground, 0.8);
                return { container: { width: "100%", paddingTop: e.spaces.space2, paddingHorizontal: e.spaces.space8, backgroundColor: e.colors.navigationBackground, boxShadow: `0 0 ${e.spacesPx.space4}px 0 ${e.colors.gray50}`, position: "relative" }, scrollContainerStyle: { paddingHorizontal: e.spaces.space8 }, fadeIn: { position: "absolute", top: 0, start: 0, width: "100%", height: e.spaces.space16, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to top, ${t}, ${n})`, pointerEvents: "none", zIndex: 1 }, fadeOut: { position: "absolute", bottom: 0, start: 0, width: "100%", height: e.spaces.space8, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})`, pointerEvents: "none", zIndex: 1 } };
            });
        },
        537801: (e, t, n) => {
            n.d(t, { O: () => m });
            var a = n(807896),
                o = n(202784),
                i = n(400752),
                r = n(332920),
                c = n.n(r),
                l = n(804417),
                s = n(656898),
                d = n(87682),
                u = n(610214),
                p = n(812702);
            function m(e) {
                const { isCreationEnabled: t } = (0, d.R)(e.audioSpaceId);
                return t ? o.createElement(f, e) : e.usePlaceholder ? o.createElement(f, (0, a.Z)({}, e, { disabled: !0 })) : null;
            }
            function f({ audioSpaceId: e, disabled: t, withBorder: n }) {
                const a = (0, s.bd)(),
                    r = (0, i.Dv)(s.Cm.spaceStateAtom),
                    { openSheet: c } = u.VE(),
                    d = (0, u.l4)();
                return o.createElement(p.B, {
                    "aria-label": g.createClip,
                    disabled: t,
                    icon: o.createElement(l.default, null),
                    onPress: function () {
                        t || (a(r?.Running ? ":audiospace::clipping:cta:click" : ":audiospace:replay:clipping:cta:click"), d(), c(u.IX.createClip));
                    },
                    type: n ? "primaryOutlined" : void 0,
                });
            }
            const g = { createClip: c().f91f00ba };
        },
        740386: (e, t, n) => {
            n.d(t, { B: () => B, k: () => z });
            var a = n(202784),
                o = n(400752),
                i = n(565058),
                r = n(325686),
                c = n(392237),
                l = n(529356),
                s = n(593866),
                d = n(332920),
                u = n.n(d),
                p = n(293723),
                m = n(263272),
                f = n(41065),
                g = n(582129),
                h = n(712612),
                b = n(484633);
            const E = u().i7a42e1c,
                y = u().e0b8f112,
                S = u().ee12263c,
                C = u().jee7002c,
                v = u().i95225d2,
                I = u().f07137fa,
                Z = u().j6cdf012,
                w = u().c727d116,
                x = u().g69084b8,
                k = u().hd50e064,
                P = c.default.create((e) => ({ infoItemsContainer: { paddingBottom: e.spaces.space32 }, itemContainer: { paddingHorizontal: 0 }, decorationIcon: { color: e.colors.text, height: e.spaces.space16, width: e.spaces.space16, marginEnd: e.spaces.space12 }, decorationIconContainer: { height: e.spaces.space24, display: "flex", justifyContent: "center", alignItems: "center" } })),
                D = a.createElement(r.Z, { style: P.decorationIconContainer }, a.createElement(p.default, { style: P.decorationIcon })),
                R = a.createElement(r.Z, { style: P.decorationIconContainer }, a.createElement(m.default, { style: P.decorationIcon })),
                O = [
                    { label: S, decoration: D },
                    { label: C, decoration: D },
                    { label: v, decoration: D },
                    { label: I, decoration: D },
                    { label: Z, decoration: R },
                    { label: w, decoration: R },
                ],
                B = (e) => {
                    const t = (0, o.Dv)(H),
                        n = (0, o.b9)(H),
                        { audioSpaceId: i } = e,
                        c = a.useCallback(() => n(!1), [n]),
                        d = (0, o.b9)(g.JE),
                        u = (0, o.b9)(h.F3);
                    return (
                        t &&
                        a.createElement(
                            l.Z,
                            {
                                actionLabel: x,
                                enableMaskForDismiss: !0,
                                graphic: f.default,
                                headline: E,
                                onAction: () => {
                                    u().then((e) => {
                                        e && d({ spaceId: i, role: b.Q.cohost, shouldAutoJoin: !0 });
                                    }),
                                        c();
                                },
                                onClose: c,
                                onSecondaryAction: c,
                                secondaryActionLabel: k,
                                subtext: y,
                                withCloseButton: !0,
                            },
                            a.createElement(r.Z, { style: P.infoItemsContainer }, a.createElement(s.Z, { containerStyle: P.itemContainer, items: O })),
                        )
                    );
                },
                H = (0, i.cn)(!1);
            function z() {
                return (0, o.b9)(H);
            }
        },
        192767: (e, t, n) => {
            n.d(t, { Z: () => F });
            var a = n(202784),
                o = n(744610),
                i = n(325686),
                r = n(537392),
                c = n(392237),
                l = n(610214),
                s = n(391542),
                d = n(375764),
                u = (n(543673), n(240753), n(128399), n(136728), n(400752)),
                p = n(555874),
                m = n(107267),
                f = n(154003),
                g = n(731708),
                h = n(30899),
                b = n(834324),
                E = n(688715),
                y = n(819844),
                S = n(332920),
                C = n.n(S),
                v = n(692165),
                I = n(656898),
                Z = n(321835),
                w = n(58255),
                x = n(30242),
                k = n(545937),
                P = n(988625),
                D = n(87682),
                R = n(844857);
            function O(e) {
                return a.createElement(
                    h.Z,
                    {
                        contentStyle: _.popoverContentStyles,
                        renderContent: function (t, n) {
                            return a.createElement(d.ZP, { audioSpaceId: e.audioSpaceId, onButtonClick: t, withPopoverLayout: "popover" === n });
                        },
                        withArrow: !0,
                        withFixedPosition: !0,
                        wrapperStyle: _.helpCircle,
                    },
                    a.createElement(f.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", icon: a.createElement(v.default, null), size: "xSmall" }),
                );
            }
            function B(e) {
                const t = l.gy(),
                    { id3NtpTime: n } = l.C_(),
                    o = (0, D.R)(e.audioSpaceId),
                    r = (0, R.Z)(e.audioSpaceId),
                    c = n && Math.floor(n - o.maxDurationSeconds);
                let s = [];
                const d = (0, u.oR)();
                if (c && n)
                    if (t) s = k.gJ(c, n);
                    else {
                        const e = (0, P.E)(c).getTime(),
                            t = x.qE(d);
                        s = t.filter((t) => t.timestamp >= e);
                    }
                if (!s.length) return a.createElement(b.Z, { action: { label: T.learnMore, link: (0, E.ju)("https://help.x.com/using-twitter/spaces") }, style: _.inlineCallout, text: T.captionsUnavailable });
                return a.createElement(
                    i.Z,
                    null,
                    a.createElement(p.Z, {
                        contentContainerStyle: _.clipContent,
                        data: s,
                        keyExtractor: (e) => e.sequenceId,
                        renderItem: function ({ index: e, item: t }) {
                            const n = s[e - 1]?.speaker,
                                o = !y.Z.areSpeakersIdentical(t.speaker, n),
                                i = t.speaker.screen_name,
                                { isBlueVerified: c, isVerified: l, verifiedType: d } = r[i] || {};
                            return a.createElement(y.Z.Caption, { caption: t, isBlueVerified: c, isVerified: l, key: t.sequenceId, verifiedType: d, withSpeaker: o });
                        },
                        role: "listbox",
                        scrollEventThrottle: 100,
                    }),
                );
            }
            function H(e) {
                const t = (0, m.useHistory)(),
                    { requestSheetDismissal: n } = l.VE(),
                    o = (0, I.bP)(),
                    i = (0, I.bd)(),
                    r = (0, I.$e)(),
                    c = (0, D.R)(e.audioSpaceId),
                    { currentTimeMs: s } = l.C_();
                return a.createElement(
                    f.ZP,
                    {
                        onClick: function () {
                            o && -1 !== s
                                ? (i(":audiospace:creation:clipping:cta:click"),
                                  w.w.proxsee.createClip({ broadcast_id: e.audioSpaceId, start_timecode_millis: Math.max(Math.floor(s - c.maxDurationMs), 0), end_timecode_millis: Math.floor(s) }).then((e) => {
                                      if (e?.clip) {
                                          n();
                                          const a = new URLSearchParams({ [z.clipId]: e.clip.clip_id });
                                          t.push({ pathname: "/compose/post", query: { text: V(e.clip.broadcast_id, a.toString()) }, state: { positionCursorAtBeginning: !0 } });
                                      }
                                  }))
                                : r("Unexpected exception was caught while creating the clip. Verify that the Space exists or currentTimeMs value is set.", { currentTimeMs: s });
                        },
                        type: "primaryFilled",
                    },
                    T.next,
                );
            }
            const z = Object.freeze({ clipId: "clipID" }),
                V = (e, t) => (0, E.ju)(`https://x.com/i/spaces/${e}?${t}`),
                T = { heading: C().cc724cb0, cancel: C().cfd2f35e, next: C().c1df579e, captionsUnavailable: C().e3146662, learnMore: C().i859a9d4 },
                _ = c.default.create((e) => {
                    const t = (0, s.Hx)(e);
                    return { container: { display: "flex", justifyContent: "space-between", height: "100%", padding: e.spaces.space16 }, headingContainer: { justifyContent: "center", alignItems: "center", marginTop: e.spaces.space4, marginBottom: e.spaces.space20, paddingHorizontal: t }, clipContent: { marginBottom: e.spaces.space8 }, cancelButton: { position: "absolute", start: 0 }, helpCircle: { position: "absolute", end: 0 }, popoverContentStyles: { padding: e.spaces.space8 }, inlineCallout: { marginBottom: e.spaces.space16 } };
                }),
                M = function (e) {
                    const t = (0, I.bd)(),
                        { requestSheetDismissal: n } = l.VE();
                    return a.createElement(
                        Z.Z,
                        {
                            onImpression: function () {
                                t(":audiospace:creation:clipping:preview:impression");
                            },
                        },
                        a.createElement(
                            i.Z,
                            { style: _.container },
                            a.createElement(
                                i.Z,
                                { style: _.headingContainer },
                                a.createElement(
                                    f.ZP,
                                    {
                                        backgroundColor: "transparent",
                                        borderColor: "transparent",
                                        color: "text",
                                        onClick: function () {
                                            t(":audiospace:creation:clipping:cancel:click"), n();
                                        },
                                        size: "xSmall",
                                        style: _.cancelButton,
                                    },
                                    T.cancel,
                                ),
                                a.createElement(g.ZP, { align: "center", size: "headline1", weight: "bold" }, T.heading),
                                a.createElement(O, e),
                            ),
                            a.createElement(B, e),
                            a.createElement(H, e),
                        ),
                    );
                };
            var L = n(637692),
                N = n(749361),
                j = n(279902);
            function A(e) {
                const { requestSheetDismissal: t } = (0, l.VE)();
                return a.createElement(o.Z.View, { onClick: t, style: [q.dockSheetOverlayBase, e.isSideNavLayout ? U.dockSheetOverlay : q.dockSheetOverlay, { opacity: e.animation.animatedPan.interpolate({ inputRange: [e.animation.shellHeights.half, e.animation.shellHeights.full], outputRange: [1, 0] }) }] });
            }
            function $(e) {
                return a.createElement(i.Z, { style: [e.style, e.hasDismissRequest && q.pointerEventsNone] }, a.createElement(o.Z.View, { style: [q.contentAnimatedContainer, { maxHeight: e.maxHeight, transform: [{ translate3d: "0, 0, 0" }, { translateY: e.animation.animatedPan }] }] }, a.createElement(i.Z, { style: q.contentWrapperContainer }, a.createElement(i.Z, { style: q.contentWrapper }, e.children))));
            }
            const q = c.default.create((e) => {
                    const t = (0, s.Hx)(e),
                        n = t.borderRadius;
                    return { dockSheetContainer: { position: "absolute", start: 0, bottom: 0, width: "100%", borderRadius: t.borderRadius }, contentAnimatedContainer: { overflowY: "auto", width: "100%", height: "100%", borderRadius: "inherit" }, contentContainer: { position: "fixed", width: "100%", bottom: "0", margin: 0, padding: 0, borderTopEndRadius: n, borderTopStartRadius: n }, contentWrapperContainer: { height: "100%", width: "100%", borderRadius: "inherit", backgroundColor: e.colors.navigationBackground }, contentWrapper: { height: "100%" }, dockSheetOverlayBase: { backgroundColor: e.colors.maskColor, width: "100%" }, dockSheetOverlay: { height: "100vh", position: "fixed", top: "0" }, pointerEventsNone: { pointerEvents: "none" } };
                }),
                U = c.default.create((e) => {
                    const t = (0, s.Hx)(e);
                    return { dockSheetContainer: { position: "absolute", start: t.shadowOffset, bottom: (-1 * t.shadowOffset) / 2, width: `calc(100% - ${t.shadowOffset}px)`, borderRadius: t.borderRadius }, dockSheetOverlay: { borderRadius: "inherit", height: "100%", position: "absolute", start: "0" }, contentContainer: { boxShadow: e.boxShadows.xSmall, position: "absolute", start: 0, bottom: 0, width: "100%", borderRadius: t.borderRadius, overflow: "hidden" } };
                }),
                F = function (e) {
                    const { audioSpaceId: t, dockAnimation: n, isSideNavLayout: i } = e,
                        { clearSheet: c, hasDismissRequest: u, sheetId: p } = (0, l.n_)(),
                        m = (function (e) {
                            const t = (0, r.iv)(),
                                n = (0, s.ss)(t.height, e),
                                i = a.useRef(new o.Z.Value(n.full)).current;
                            return { animatedPan: i, shellHeights: n, springToOpen: (e) => o.Z.spring(i, { toValue: 0, bounciness: 2, useNativeDriver: !1 }).start(e), springToClose: (e) => o.Z.spring(i, { toValue: n.full, useNativeDriver: !1 }).start(e) };
                        })(i),
                        f = n?.shellHeights?.sheetMaxHeight,
                        g = i ? U.contentContainer : q.contentContainer,
                        h = a.useMemo(() => {
                            switch (p) {
                                case l.IX.report:
                                    return a.createElement(N.ZP, { audioSpaceId: t });
                                case l.IX.recordingEducation:
                                    return a.createElement(L.ZP, null);
                                case l.IX.generalNux:
                                    return a.createElement(j.ZP, null);
                                case l.IX.clippingEducation:
                                    return a.createElement(d.ZP, { audioSpaceId: t });
                                case l.IX.createClip:
                                    return a.createElement(M, { audioSpaceId: t });
                                default:
                                    return null;
                            }
                        }, [p, t]);
                    if (
                        (a.useEffect(() => {
                            h && m.springToOpen();
                        }, [h, m]),
                        a.useEffect(() => {
                            u && m.springToClose(c);
                        }, [m, c, u]),
                        !h)
                    )
                        return null;
                    const b = i ? U.dockSheetContainer : q.dockSheetContainer;
                    return a.createElement(o.Z.View, { style: [b, u && q.pointerEventsNone, { height: n.shellHeights.full - n.animatedPan._value, opacity: m.animatedPan.interpolate({ inputRange: [0, m.shellHeights.half], outputRange: [1, 0] }) }] }, a.createElement(A, { animation: m, isSideNavLayout: i }), a.createElement($, { animation: m, hasDismissRequest: u, maxHeight: f, style: g }, h));
                };
        },
        375764: (e, t, n) => {
            n.d(t, { ZP: () => Z, Sd: () => w });
            var a = n(807896),
                o = n(202784),
                i = n(325686),
                r = n(530525),
                c = n(439592),
                l = n(731708),
                s = n(154003),
                d = n(392237),
                u = n(332920),
                p = n.n(u),
                m = n(692165),
                f = n(119232),
                g = n(620763),
                h = n(656898),
                b = n(321835),
                E = n(125363),
                y = n(175856),
                S = n(87682),
                C = n(610214);
            const v = n.p + "spaces_clipping_banner.21bdf4ba.png";
            var I = n(637692);
            function Z(e) {
                const t = (0, h.bd)(),
                    { requestSheetDismissal: n } = C.VE(),
                    d = (0, E.I0)();
                return o.createElement(
                    b.Z,
                    {
                        onImpression: function () {
                            t(":audiospace:nux:clipping::impression");
                        },
                    },
                    e.withPopoverLayout ? null : o.createElement(i.Z, { style: x.imageContainer }, o.createElement(r.Z, { "aria-label": "", aspectMode: c.Z.COVER, image: v })),
                    o.createElement(
                        i.Z,
                        { style: x.contentContainer },
                        o.createElement(l.ZP, { size: "title3", style: x.title, weight: "bold" }, P.title),
                        o.createElement(l.ZP, { color: "gray700" }, P.subtitle),
                        k.map((e, t) => o.createElement(I.$0, (0, a.Z)({ key: t }, e))),
                        e.withPopoverLayout
                            ? null
                            : o.createElement(
                                  s.ZP,
                                  {
                                      onClick:
                                          e.onButtonClick ||
                                          function () {
                                              t(":audiospace:nux:clipping:confirm:click"), n(), d((0, y.pj)(y.Ur));
                                          },
                                      style: x.button,
                                      type: "primaryOutlined",
                                  },
                                  P.gotIt,
                              ),
                    ),
                );
            }
            C.IX.clippingEducation;
            function w(e) {
                const { isCreationEnabled: t } = (0, S.R)(e),
                    n = (0, E.v9)((e) => (0, y.t5)(e, y.Ur)) && t;
                return { sheetId: C.IX.clippingEducation, canShow: n };
            }
            const x = d.default.create((e) => ({ imageContainer: { height: "180px", width: "100%", marginTop: e.spaces.space12 }, button: { marginTop: e.spaces.space24 }, contentContainer: { padding: e.spaces.space32 }, title: { marginBottom: e.spaces.space8 }, icon: { marginEnd: e.spaces.space12, fill: e.colors.purple500, fontSize: e.fontSizes.title2 } })),
                k = [
                    { icon: o.createElement(m.default, { style: x.icon }), title: p().f7c8617a, subtitle: p().ecc7d2ec },
                    { icon: o.createElement(f.default, { style: x.icon }), title: p().d575ee02, subtitle: p().dbc477a4 },
                    { icon: o.createElement(g.default, { style: x.icon }), title: p().ed1d1cc0, subtitle: p().e5d193c8 },
                ],
                P = { title: p().e1547ec0, subtitle: p().i154245e, gotIt: p().j24c37b2 };
        },
        637692: (e, t, n) => {
            n.d(t, { $0: () => Z, ZP: () => v, Sd: () => I });
            var a = n(202784),
                o = n(400752),
                i = n(325686),
                r = n(530525),
                c = n(439592),
                l = n(731708),
                s = n(154003),
                d = n(392237),
                u = n(332920),
                p = n.n(u),
                m = n(620763),
                f = n(737691),
                g = n(656898),
                h = n(125363),
                b = n(175856),
                E = n(280010),
                y = n(610214),
                S = n(901832);
            const C = n.p + "bird_spaces_transparent.4a7e719a.png";
            function v({ onDismiss: e }) {
                const { requestSheetDismissal: t } = y.VE(),
                    n = (0, h.I0)();
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(i.Z, { style: x.imageContainer }, a.createElement(r.Z, { "aria-label": "", aspectMode: c.Z.COVER, image: C })),
                    a.createElement(
                        i.Z,
                        { style: x.contentContainer },
                        a.createElement(S.Vs, { withoutPulse: !0 }),
                        a.createElement(l.ZP, { size: "title3", style: x.title, weight: "bold" }, w.title),
                        a.createElement(l.ZP, { color: "gray700" }, w.subtitle),
                        a.createElement(Z, { icon: a.createElement(m.default, { style: x.icon }), subtitle: w.sections.onlySpeakersRecorded.subtitle, title: w.sections.onlySpeakersRecorded.title }),
                        a.createElement(Z, { icon: a.createElement(f.default, { style: x.icon }), subtitle: w.sections.replayOrShare.subtitle, title: w.sections.replayOrShare.title, withOnlyMarginBottom: !0 }),
                        a.createElement(l.ZP, { color: "gray700", size: "body", style: x.disclaimer }, a.createElement(p().I18NFormatMessage, { $i18n: "bb85c49d" }, a.createElement(l.ZP, { color: "text", link: E.n.help, withUnderline: !0 }, p().fd05976b))),
                        a.createElement(
                            s.ZP,
                            {
                                onClick: function () {
                                    e ? e() : (t(), n((0, b.pj)(b.jv)));
                                },
                                type: "primaryOutlined",
                            },
                            w.gotIt,
                        ),
                    ),
                );
            }
            y.IX.recordingEducation;
            function I(e) {
                const t = (0, o.Dv)(g.Cm.spaceStateAtom),
                    n = (0, h.v9)((e) => (0, b.t5)(e, b.jv)) && Boolean(t?.recording);
                return { sheetId: y.IX.recordingEducation, canShow: n };
            }
            function Z(e) {
                return a.createElement(i.Z, { style: [x.sectionContainer, e.withOnlyMarginBottom ? x.sectionMarginBottom : x.sectionMarginVertical] }, e.icon, a.createElement(i.Z, { style: x.sectionContent }, a.createElement(l.ZP, { weight: "bold" }, e.title), a.createElement(l.ZP, { color: "gray700" }, e.subtitle)));
            }
            const w = { title: p().g1c6f16e, subtitle: p().e5609214, gotIt: p().j24c37b2, sections: { onlySpeakersRecorded: { title: p().g665514c, subtitle: p().ja196c5a }, replayOrShare: { title: p().dd317ed6, subtitle: p().jf03b37c } } },
                x = d.default.create((e) => ({ imageContainer: { height: "128px", width: "100%" }, contentContainer: { padding: e.spaces.space32 }, title: { marginTop: e.spaces.space4, marginBottom: e.spaces.space8 }, disclaimer: { marginVertical: e.spaces.space16 }, icon: { marginEnd: e.spaces.space12, fill: e.colors.purple500, fontSize: e.fontSizes.title3 }, sectionContent: { flexShrink: 1 }, sectionContainer: { flexFlow: "row nowrap" }, sectionMarginVertical: { marginVertical: e.spaces.space12 }, sectionMarginBottom: { marginBottom: e.spaces.space12 } }));
        },
        749361: (e, t, n) => {
            n.d(t, { Vs: () => h, ZP: () => y, p8: () => b });
            var a = n(202784),
                o = n(325686),
                i = n(731708),
                r = n(143670),
                c = n(154003),
                l = n(392237),
                s = n(332920),
                d = n.n(s),
                u = n(125363),
                p = n(601576),
                m = n(982790),
                f = n(610214),
                g = n(391542);
            function h(e) {
                const { requestSheetDismissal: t } = (0, f.VE)(),
                    n = h.useReportingItems({ audioSpaceId: e.audioSpaceId });
                return a.createElement(
                    o.Z,
                    { style: E.container },
                    a.createElement(
                        o.Z,
                        { style: E.menu },
                        a.createElement(i.ZP, { align: "center", size: "headline1", style: E.description, weight: "bold" }, b.reportThisSpace),
                        a.createElement(i.ZP, { align: "center", style: E.description }, b.describeTheIssue),
                        n?.map((e) =>
                            a.createElement(r.Z, {
                                actionText: e.label,
                                key: e.label,
                                onClick: () => {
                                    e.onClick(), t();
                                },
                                textColor: "red500",
                            }),
                        ),
                    ),
                    a.createElement(c.ZP, { onClick: t, type: "primaryOutlined" }, b.cancel),
                );
            }
            h.useReportingItems = function ({ audioSpaceId: e }) {
                const t = (0, u.I0)(),
                    { handlers: n } = (0, m.$)(e),
                    o = n.report;
                return a.useMemo(
                    () =>
                        Object.keys(o).map((e) => ({
                            label: b[e],
                            onClick: () => {
                                o && o[e](), t((0, p.fz)({ text: b.spaceReported }));
                            },
                        })),
                    [o, t],
                );
            };
            const b = { reportThisSpace: d().f123fea8, describeTheIssue: d().d0aebc28, SelfHarm: d().g971a4e8, Violence: d().b96e6682, SexualContent: d().e5bf9b3a, ChildSafety: d().d2a34320, PrivateInformation: d().a9ba3e28, AbusiveBehavior: d().d5519f4a, cancel: d().cfd2f35e, spaceReported: d().eb55363c },
                E = l.default.create((e) => {
                    const t = (0, g.Hx)(e);
                    return { container: { display: "flex", justifyContent: "space-between", height: "100%", padding: e.spaces.space16 }, menu: { marginBottom: e.spaces.space20 }, description: { marginTop: e.spaces.space4, marginBottom: e.spaces.space16, paddingHorizontal: t } };
                }),
                y = h;
        },
        279902: (e, t, n) => {
            n.d(t, { Sd: () => y, ZP: () => E });
            var a = n(202784),
                o = n(325686),
                i = n(731708),
                r = n(392237),
                c = n(332920),
                l = n.n(c),
                s = n(14284),
                d = n(133272),
                u = n(406727),
                p = n(125363),
                m = n(175856),
                f = n(64772),
                g = n(280010),
                h = n(233040),
                b = n(610214);
            function E({ onDismiss: e }) {
                const { requestSheetDismissal: t } = b.VE(),
                    n = (0, p.I0)();
                return a.createElement(
                    o.Z,
                    { style: I.container },
                    a.createElement(o.Z, { style: I.headingContainer }, a.createElement(o.Z, { style: I.headingIconContainer }, a.createElement(h.Z, { style: I.headingIcon })), a.createElement(o.Z, null, a.createElement(i.ZP, { align: "center", size: "title4", style: I.title, weight: "bold" }, v.title), a.createElement(i.ZP, { align: "center", color: "gray700", size: "body" }, v.subtitle))),
                    a.createElement(o.Z, { style: I.sectionsContainer }, a.createElement(S, { icon: a.createElement(s.default, { style: I.sectionIcon }), subtitle: a.createElement(C, null, a.createElement(l().I18NFormatMessage, { $i18n: "c9af3ff7" }, a.createElement(i.ZP, { link: g.n.help }, l().cb17a0f3))), title: v.sections.spacesArePublic.title }), a.createElement(S, { icon: a.createElement(d.default, { style: I.sectionIcon }), subtitle: a.createElement(C, null, v.sections.addUpTo10Speakers.subtitle), title: v.sections.addUpTo10Speakers.title }), a.createElement(S, { icon: a.createElement(u.default, { style: I.sectionIcon }), subtitle: a.createElement(a.Fragment, null, a.createElement(C, null, v.sections.yourSpaceYourRules.subtitle)), title: v.sections.yourSpaceYourRules.title, withMarginBottom: !1 })),
                    a.createElement(
                        o.Z,
                        { style: I.bottomItems },
                        a.createElement(o.Z, { style: I.finePrintContainer }, a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext1", style: I.finePrint }, a.createElement(l().I18NFormatMessage, { $i18n: "e60e51b3" }, a.createElement(i.ZP, { link: g.n.help }, l().dcd77941)))),
                        a.createElement(
                            o.Z,
                            { style: I.ctaContainer },
                            a.createElement(
                                f.Z,
                                {
                                    "aria-label": v.gotIt,
                                    onPress: function () {
                                        e ? e() : (t(), n((0, m.pj)(m.UN)));
                                    },
                                },
                                a.createElement(i.ZP, { align: "center", color: "white", numberOfLines: 1, size: "body", weight: "bold" }, v.gotIt),
                            ),
                        ),
                    ),
                );
            }
            function y() {
                const e = (0, p.v9)((e) => (0, m.t5)(e, m.UN));
                return { sheetId: b.IX.generalNux, canShow: e };
            }
            function S({ icon: e, subtitle: t, title: n, withMarginBottom: r = !0 }) {
                return a.createElement(o.Z, { style: [I.sectionContainer, r ? I.sectionMarginBottom : null] }, a.createElement(o.Z, { style: I.sectionIconContainer }, e), a.createElement(o.Z, { style: I.sectionContent }, a.createElement(i.ZP, { size: "body", weight: "bold" }, n), t));
            }
            function C({ children: e }) {
                return a.createElement(i.ZP, { color: "gray700", size: "body" }, e);
            }
            const v = { title: l().gb418012, subtitle: l().fec3c1e0, sections: { addUpTo10Speakers: { title: l().j32eb4f8, subtitle: l().j4f133a6 }, spacesArePublic: { title: l().ed434ac6 }, yourSpaceYourRules: { title: l().e0025688, subtitle: l().c1bc6f86, blockAndReport: l().b0bc8330 } }, gotIt: l().j24c37b2 },
                I = r.default.create((e) => ({ container: { display: "flex", justifyContent: "space-between", height: "100%", padding: e.spaces.space16 }, headingContainer: { marginBottom: e.spaces.space32 }, headingIconContainer: { paddingVertical: e.spaces.space28 }, headingIcon: { height: e.spaces.space40 }, title: { marginBottom: e.spaces.space1 }, sectionsContainer: { marginBottom: e.spaces.space48 }, sectionContainer: { flexDirection: "row", flexWrap: "nowrap", width: "100%", paddingHorizontal: e.spaces.space12 }, sectionContent: { flexShrink: 1 }, sectionMarginBottom: { marginBottom: e.spaces.space24 }, sectionIconContainer: { width: e.fontSizes.title3, height: e.fontSizes.title3, marginEnd: e.spaces.space16 }, sectionIcon: { fill: e.colors.purple500, width: "100%", height: "100%" }, bottomItems: { paddingBottom: e.spaces.space16 }, finePrintContainer: { paddingHorizontal: e.spaces.space16 }, finePrint: { marginBottom: e.spaces.space16 }, ctaContainer: { paddingHorizontal: e.spaces.space16 } }));
        },
        978658: (e, t, n) => {
            n.d(t, { D: () => f, R: () => g });
            n(136728);
            var a = n(202784),
                o = n(565058),
                i = n(400752),
                r = n(107267),
                c = n(529356),
                l = n(332920),
                s = n.n(l),
                d = n(123638),
                u = n(582129),
                p = n(905710);
            const m = { endSpaceLabel: s().j78ad1ca, noLabel: s().i62a03aa, yesLabel: s().db684264, content: s().je23178a },
                f = (0, o.cn)(!1),
                g = (e) => {
                    const { audioSpaceId: t } = e,
                        n = (0, i.Dv)(f),
                        o = (0, i.b9)(f),
                        l = (0, r.useHistory)(),
                        s = (0, i.b9)(u.Mf),
                        g = a.useCallback(() => o(!1), [o]),
                        h = a.useCallback(() => {
                            s(t), g(), l.push((0, p.e)(t), { forceRenderEnded: !0 });
                        }, [t, g, s, l]);
                    return n && a.createElement(c.Z, { actionLabel: m.yesLabel, enableMaskForDismiss: !0, graphic: d.default, headline: m.endSpaceLabel, onAction: h, onClose: g, onSecondaryAction: g, secondaryActionLabel: m.noLabel, subtext: m.content });
                };
        },
        153668: (e, t, n) => {
            n.d(t, { X: () => ce, x: () => ie });
            var a = n(202784),
                o = n(400752),
                i = n(325686),
                r = n(58881),
                c = n(392237),
                l = n(530732),
                s = n(731708),
                d = n(154003),
                u = n(332920),
                p = n.n(u),
                m = n(430895),
                f = n(400915),
                g = n(970197),
                h = n(443781),
                b = n(49998),
                E = n(537801),
                y = n(194661),
                S = n(656898);
            const C = { label: p().jdceda60 },
                v = p().d58baa7f,
                I = p().f9b2d343,
                Z = a.createElement(y.default, null);
            function w() {
                const e = (0, o.Dv)(S.Cm.tweetResultsAtom),
                    t = e?.result;
                if (!t) return null;
                const n = t.legacy?.reply_count,
                    i = t.rest_id,
                    r = t.core?.user_results.result?.legacy?.screen_name,
                    c = i && r ? `/${r}/status/${i}` : void 0;
                return a.createElement(d.ZP, { "aria-label": I({ count: n }), backgroundColor: "transparent", borderColor: "transparent", color: "text", hoverLabel: C, icon: Z, link: c, size: "medium", type: "primaryOutlined" }, n ? v(n) : void 0);
            }
            var x = n(610214),
                k = n(25252),
                P = n(293723),
                D = n(582129),
                R = n(625555),
                O = n(712612),
                B = n(125363),
                H = n(601576),
                z = n(484633),
                V = n(159246),
                T = n(905443),
                _ = n(837759);
            const M = p().jcc8306e,
                L = p().j41fd45a,
                N = p().d5b2aae8,
                j = p().b9945b98,
                A = p().b2cc6a54,
                $ = c.default.create((e) => ({ container: { alignItems: "center", gap: e.spaces.space4 }, iconCheckmark: { color: e.colors.green500 }, iconMicrophone: { color: e.colors.magenta500 } })),
                q = a.createElement(V.W, { style: $.iconMicrophone }),
                U = a.createElement(P.default, { style: $.iconCheckmark }),
                F = (e) => {
                    const { audioSpaceId: t, disabled: n, onDisabledClick: r } = e,
                        [c, l] = (0, o.KO)(f.ri),
                        s = (0, B.I0)(),
                        u = (0, o.Dv)(T.ZO),
                        p = (0, o.b9)(D.JE),
                        m = (0, o.b9)(O.F3),
                        g = (0, _.vW)(),
                        h = a.useCallback(() => {
                            m()
                                .then((e) => {
                                    e &&
                                        (l(!0),
                                        p({ spaceId: t, role: z.Q.speaker, shouldAutoJoin: u }).catch((e) => {
                                            l(!1), s((0, H.fz)({ text: 412 === e.status ? N : j }));
                                        }));
                                })
                                .catch(() => g(!0));
                        }, [t, u, s, p, m, l, g]),
                        b = (0, o.b9)(R.TU),
                        E = a.useCallback(() => {
                            b(t), l(!1);
                        }, [t, b, l]),
                        y = c ? L : u ? A : M,
                        S = { label: y },
                        C = c ? U : q,
                        v = c ? E : n ? r : h;
                    return a.createElement(i.Z, { style: $.container }, a.createElement(d.ZP, { "aria-label": y, borderColor: "transparent", color: "text", hoverLabel: S, icon: C, onPress: v, size: "xLarge", type: "primaryOutlined" }));
                };
            var X = n(736346),
                Q = n(979037),
                J = n(645903),
                W = n(265399),
                Y = n(947433),
                K = n(126420),
                G = n(391542);
            const ee = p().i65de934,
                te = p().b1037050,
                ne = { label: te },
                ae = a.createElement(m.default, null),
                oe = r.Z.generate({ color: c.default.theme.colors.white, backgroundColor: c.default.theme.colors.purple500 });
            function ie(e) {
                const { audioSpaceId: t, isSideNavLayout: n, onLayout: o, toggleSpaceDockContentState: r } = e,
                    [c, d] = a.useState(!1),
                    u = x.g5(),
                    p = x.gy(),
                    m = [le.footerContainer, n && le.footerContainerWide];
                function f() {
                    d(!0);
                }
                return a.createElement(
                    i.Z,
                    { onLayout: o, style: m, testID: void 0 },
                    !p && u && a.createElement(l.Z, { interactiveStyles: oe, onClick: f, style: le.footerAnonymousBanner }, a.createElement(s.ZP, { color: "white", weight: "bold" }, ee)),
                    a.createElement(i.Z, { style: le.footer }, p ? a.createElement(W.gt, { audioSpaceId: t }) : a.createElement(re, { audioSpaceId: t, disabled: u, onDisabledClick: f, toggleSpaceDockContentState: r })),
                    c &&
                        a.createElement(X.Z, {
                            onDismiss: function () {
                                d(!1);
                            },
                        }),
                );
            }
            function re(e) {
                const { disabled: t, onDisabledClick: n, toggleSpaceDockContentState: r, ...c } = e,
                    { featureSwitches: l } = (0, h.QZ)(),
                    { isUserSpeakingRole: s } = (0, f.l7)(),
                    u = (0, o.Dv)(k.Y),
                    p = s ? a.createElement(g.n, null, a.createElement(K.im, { audioSpaceId: c.audioSpaceId })) : a.createElement(F, { audioSpaceId: c.audioSpaceId, disabled: t, onDisabledClick: n }),
                    m = (0, o.Dv)(Q.Oy);
                return a.createElement(a.Fragment, null, a.createElement(i.Z, { style: le.footerLeft }, p, u && a.createElement(g.Z, null, a.createElement(b.t, null)), u && a.createElement(Y.v, null)), !m && a.createElement(i.Z, { style: le.footerRight }, l.isTrue("voice_rooms_cohosts_enabled") && a.createElement(d.ZP, { "aria-label": te, borderColor: "transparent", color: "text", hoverLabel: ne, icon: ae, onPress: t ? n : r, size: "medium", type: "primaryOutlined" }), a.createElement(J.Y, { audioSpaceId: c.audioSpaceId, disabled: t, onDisabledClick: n }), a.createElement(E.O, { audioSpaceId: c.audioSpaceId, withBorder: !0 }), a.createElement(w, null)));
            }
            const ce = 100,
                le = c.default.create((e) => {
                    const { borderRadius: t, paddingHorizontal: n } = (0, G.Hx)(e);
                    return { footer: { paddingHorizontal: n, width: "100%", height: `calc(${ce}px + ${c.default.iPhoneOffsetBottom})`, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, footerAnonymousBanner: { backgroundColor: e.colors.purple500, cursor: "pointer", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8 }, footerContainer: { boxShadow: `0px -1px 0px ${e.colors.gray50}`, backgroundColor: e.colors.navigationBackground }, footerContainerWide: { borderBottomStartRadius: t, borderBottomEndRadius: t, boxShadow: e.boxShadows.xSmall }, footerLeft: { flexDirection: "row", gap: e.spaces.space8 }, footerRight: { flexDirection: "row", gap: e.spaces.space16 } };
                });
        },
        610214: (e, t, n) => {
            n.d(t, { CP: () => C, C_: () => K, Cc: () => F, EJ: () => s.EJ, HM: () => f, HP: () => s.HP, Hz: () => R, IX: () => s.IX, Ie: () => X, O5: () => G, QH: () => ne, Qe: () => U, Qt: () => A, TO: () => Q, VE: () => $, _Z: () => g, bQ: () => te, bZ: () => b, dO: () => Z, g5: () => J, gc: () => h, gt: () => S, gy: () => W, jh: () => ae, l4: () => Y, n_: () => q, sd: () => ee, t: () => E, wM: () => D, zc: () => s.zc });
            var a = n(565058),
                o = n(400752),
                i = n(392237),
                r = n(827515),
                c = n(30242),
                l = n(877506),
                s = n(18873);
            const d = (0, a.cn)(null),
                u = (0, a.cn)(!1),
                p = (0, a.cn)(s.HP.Off),
                m = (0, a.cn)({ currentTimeMs: -1, id3NtpTime: -1 }),
                f = (0, a.cn)(s.zc.AUDIO),
                g = (0, a.cn)((e) => e(f) === s.zc.CONFERENCE || e(f) === s.zc.VIDEO),
                h = (0, a.cn)((e) => e(f) === s.zc.CONFERENCE),
                b = (0, a.cn)((e) => e(f) === s.zc.VIDEO),
                E = (0, a.cn)(!1),
                y = (0, a.cn)(!1);
            let S = !1;
            const C = (0, a.cn)(
                    (e) => e(y),
                    (e, t, n) => {
                        (S = n), t(y, n);
                    },
                ),
                v = (0, a.cn)(!1),
                I = { fn: () => Promise.resolve() },
                Z = (0, a.cn)(I),
                w = (0, a.cn)(null),
                x = (0, a.cn)(-1),
                k = (0, a.cn)(),
                P = (0, a.cn)(null, (e, t, n) => {
                    const { contentType: a, isAnonymous: o, isReplay: i, isSuperFollowersOnly: r, started_at: c } = n;
                    t(d, null), t(u, !1), t(p, s.HP.Off), t(m, { currentTimeMs: -1, id3NtpTime: -1 }), t(f, s.zc.AUDIO), t(E, !1), t(C, !1), t(v, !1), t(Z, I), t(w, null), t(x, -1), t(k, void 0), i ? t(N, c) : t(j), t(o ? T : _), a && t(f, a), t(r ? M : L);
                }),
                D = P;
            function R() {
                return (0, o.b9)(P);
            }
            const O = (0, a.cn)(null, (e, t, n) => {
                    e(u) || t(d, n);
                }),
                B = (0, a.cn)(null, (e, t) => {
                    e(d) && t(u, !0);
                }),
                H = (0, a.cn)(null, (e, t) => {
                    e(d) && (t(d, null), t(u, !1));
                }),
                z = (0, a.cn)(null, (e, t) => {
                    t(p, (e) => (e === s.HP.On ? s.HP.Off : e === s.HP.Off ? s.HP.On : e));
                });
            const V = (0, a.cn)(null, (e, t) => {
                    const n = e(l.Z.currentTrackAtom),
                        { currentTimeMs: a, id3NtpTime: o } = n || {};
                    (0, r.Z)(a) && (0, r.Z)(o) && t(m, { currentTimeMs: a, id3NtpTime: o });
                }),
                T = (0, a.cn)(null, (e, t) => {
                    t(E, !0);
                }),
                _ = (0, a.cn)(null, (e, t) => {
                    e(E) && t(E, !1);
                }),
                M = (0, a.cn)(null, (e, t) => {
                    t(k, i.default.theme.colors.plum500), t(v, !0);
                }),
                L = (0, a.cn)(null, (e, t) => {
                    e(v) && (t(k, void 0), t(v, !1));
                }),
                N = (0, a.cn)(null, (e, t, n) => {
                    t(C, !0), t(x, n);
                }),
                j = (0, a.cn)(null, (e, t) => {
                    e(C) && (t(C, !1), t(x, -1));
                });
            function A() {
                return (0, o.Dv)(x);
            }
            function $() {
                return { sheetId: (0, o.Dv)(d), openSheet: (0, o.b9)(O), requestSheetDismissal: (0, o.b9)(B) };
            }
            function q() {
                return { sheetId: (0, o.Dv)(d), hasDismissRequest: (0, o.Dv)(u), clearSheet: (0, o.b9)(H) };
            }
            function U() {
                return (0, o.Dv)(Z).fn;
            }
            function F() {
                return (0, o.Dv)(w);
            }
            function X() {
                return (0, o.b9)(w);
            }
            function Q() {
                return (0, o.b9)(Z);
            }
            function J() {
                return (0, o.Dv)(E);
            }
            function W() {
                return (0, o.Dv)(C);
            }
            function Y() {
                return (0, o.b9)(V);
            }
            function K() {
                return (0, o.Dv)(m);
            }
            function G() {
                return (0, o.Dv)(p);
            }
            function ee() {
                return (0, o.b9)(z);
            }
            function te() {
                const e = c.YS(),
                    t = G();
                return e && t === s.HP.On;
            }
            function ne() {
                return (0, o.Dv)(k);
            }
            function ae() {
                return (0, o.Dv)(v);
            }
        },
        18873: (e, t, n) => {
            n.d(t, { EJ: () => o, HP: () => i, IX: () => r, zc: () => a });
            const a = Object.freeze({ AUDIO: "visual_audio", CONFERENCE: "conference_spaces", VIDEO: "video_spaces" }),
                o = Object.freeze({ collapse: "collapse", exit: "exit", full: "full" }),
                i = Object.freeze({ On: "on", Off: "off", Unavailable: "unavailable" }),
                r = Object.freeze({ clippingEducation: "clipping-education", generalNux: "general-nux", recordingEducation: "recording-education", report: "report", createClip: "create-clip" });
        },
        25252: (e, t, n) => {
            n.d(t, { Y: () => l });
            var a = n(565058),
                o = n(610214),
                i = n(420182),
                r = n(42134),
                c = n(484633);
            const l = (0, a.cn)((e) => {
                if (!e(o.bZ)) return !1;
                const t = e(i.f0),
                    n = e(r.cI);
                return n === c.Q.host || (n === c.Q.cohost && t.isTrue("spaces_video_admins_enabled")) || (n === c.Q.speaker && t.isTrue("spaces_video_speakers_enabled"));
            });
        },
        821681: (e, t, n) => {
            n.d(t, { Q: () => T, r: () => V });
            var a = n(807896),
                o = n(202784),
                i = n(400752),
                r = n(744610),
                c = n(325686),
                l = n(537392),
                s = n(392237),
                d = n(365023),
                u = n(187669),
                p = n(610214),
                m = n(67291),
                f = n(702239),
                g = n(292627),
                h = n(666305),
                b = n(400915),
                E = n(952793),
                y = n(441737),
                S = n(977419),
                C = n(484633),
                v = n(381904),
                I = n(763126);
            function Z() {
                const { activeItem: e } = (0, v.Y)(),
                    t = e?.id,
                    n = (0, E.hC)("spaces_video_consumption_enabled"),
                    { role: a } = (0, b.l7)();
                return (0, i.Dv)(p._Z) && t ? (a === C.Q.listener && n ? o.createElement(w, null, o.createElement(x, null)) : o.createElement(w, null, o.createElement(S.ww, null), o.createElement(S.I0, null))) : null;
            }
            function w({ children: e }) {
                const [t, n] = o.useState(!1);
                return t ? o.createElement(g.Z.Modal, null, o.createElement(c.Z, { onClick: () => n(!1), style: k.fullScreen }, o.createElement(c.Z, { style: k.fullScreenInner }, o.createElement(y.W.Provider, null, o.createElement(y.X, { defaultAspectRatio: 16 / 9 }, e))))) : o.createElement(c.Z, { onClick: () => n(!0), style: k.wrapper }, e);
            }
            function x() {
                const e = (0, i.Dv)(I.listenerVideoPortalNodeAtom),
                    t = o.useRef(null),
                    n = (function (e) {
                        const [t, n] = o.useState(!0);
                        return (
                            o.useEffect(() => {
                                const t = e.current;
                                if (!t) return;
                                let a,
                                    o = !0;
                                return (
                                    (function (e) {
                                        return new Promise((t) => {
                                            const n = setInterval(a, 1e3);
                                            function a() {
                                                if (!document.body.contains(e)) return void clearInterval(n);
                                                const a = e.querySelector("video");
                                                a && (clearInterval(n), t(a));
                                            }
                                        });
                                    })(t).then((e) => {
                                        function t() {
                                            n(e.clientHeight > 0);
                                        }
                                        o &&
                                            (t(),
                                            h.Z.observe(e, t),
                                            (a = () => {
                                                h.Z.unobserve(e, t);
                                            }));
                                    }),
                                    () => {
                                        (o = !1), a?.();
                                    }
                                );
                            }, [e]),
                            t
                        );
                    })(t);
                return o.createElement(c.Z, { ref: t, style: n ? k.videoContainer : k.videoContainerHidden }, o.createElement(c.Z, { style: k.videoInnerContainer }, o.createElement(f.t0, { node: e })));
            }
            const k = s.default.create((e) => ({ videoContainer: { padding: e.spaces.space8, maxHeight: "100%" }, videoContainerHidden: { height: 0 }, videoInnerContainer: { contain: "paint", justifyContent: "center", backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large, maxHeight: "100%", overflow: "hidden" }, wrapper: { marginBottom: e.spaces.space8, cursor: "pointer" }, fullScreen: { cursor: "pointer", backgroundColor: e.colors.navigationBackground, position: "fixed", inset: 0, justifyContent: "center", padding: e.spaces.space8 }, fullScreenInner: { height: "100%" } }));
            var P = n(595561),
                D = n(338645),
                R = n(979037),
                O = n(890091),
                B = n(851336),
                H = n(283370),
                z = n(391542);
            function V(e, t, n) {
                const a = o.useRef({ state: p.EJ.full, animatedPanOffset: 0 }),
                    c = (0, l.iv)(),
                    s = (0, i.Dv)(R.ZZ),
                    d = (0, i.b9)(R.N$),
                    m = s ? s?.document.documentElement?.clientHeight : void 0,
                    f = o.useMemo(() => (0, z.ss)(m || c.height, e.isSideNavLayout, n), [c.height, e.isSideNavLayout, n, m]),
                    g = o.useMemo(
                        () =>
                            function (e) {
                                let t;
                                switch (e) {
                                    case p.EJ.exit:
                                    case p.EJ.collapse:
                                        t = 0;
                                        break;
                                    case p.EJ.full:
                                    default:
                                        t = f.full;
                                }
                                return f.full - t;
                            },
                        [f],
                    ),
                    h = o.useRef(new r.Z.Value(f.full)).current;
                (0, u.q)(() => {
                    const e = g(a.current.state);
                    r.Z.spring(h, { toValue: e, useNativeDriver: !1 }).start(t);
                });
                const { onRequestClose: b, onToggleCollapsed: E } = e,
                    y = (0, p.Ie)(),
                    S = o.useMemo(
                        () =>
                            function (e, t) {
                                (a.current.state = e), y(e);
                                const n = g(a.current.state),
                                    o = t?.vy;
                                return new Promise((t) => {
                                    if (e === p.EJ.exit) return b(), d(), t();
                                    r.Z.spring(h, { overshootClamping: !0, toValue: n, useNativeDriver: !1, velocity: o }).start(() => {
                                        e === p.EJ.collapse && E(), t();
                                    });
                                });
                            },
                        [y, g, h, b, E, d],
                    ),
                    C = (0, p.TO)();
                return (
                    o.useEffect(() => {
                        C({ fn: S });
                    }, [C, S]),
                    { animatedPan: h, shellHeights: f, springTo: S }
                );
            }
            function T(e) {
                const t = (0, z.Hx)(s.default.theme),
                    n = e.animation.shellHeights.full - t.shadowOffset;
                return o.createElement(r.Z.View, { style: [M.expandedShell, { height: n, transform: [{ translate3d: "0, 0, 0" }, { translateY: e.animation.animatedPan }] }] }, o.createElement(_, e));
            }
            function _(e) {
                const t = p.bQ(),
                    { footerHeight: n, setSpaceDockContentState: l, spaceDockContentState: s } = e,
                    u = o.useRef(new r.Z.Value(n));
                function f() {
                    l(m.A.manageView);
                }
                o.useEffect(() => {
                    r.Z.spring(u.current, { toValue: t ? n + H.t : n, useNativeDriver: !1 }).start();
                }, [t, n]);
                const g = (0, i.Dv)(R.Oy),
                    h = p.gy();
                return o.createElement(d.Z, { id: "SpaceDockExpanded" }, (t, n) => o.createElement(c.Z, (0, a.Z)({ ref: t() }, n({ style: M.expandedShellContent })), o.createElement(m.w, e), o.createElement(r.Z.View, { id: "ParticipantsWrapper", style: [M.participantsContainer, { paddingBottom: r.Z.add(u.current, e.animation.animatedPan) }] }, s === m.A.mainView && o.createElement(c.Z, { style: M.participantViewContainer }, o.createElement(Z, null), o.createElement(D.oG, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }), !g && !h && o.createElement(B.Y, { audioSpaceId: e.audioSpaceId, handleShowManageView: f })), s === m.A.manageView && o.createElement(P.j, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }), s === m.A.settingsView && o.createElement(O.U, { audioSpaceId: e.audioSpaceId }))));
            }
            const M = s.default.create((e) => {
                const t = (0, D.iK)(e);
                return { expandedShell: { boxShadow: e.boxShadows.xSmall, width: "100%", height: "100%", borderRadius: "inherit" }, expandedShellHeader: { userSelect: "none", borderRadius: "inherit" }, expandedShellContent: { borderRadius: "inherit", height: "100%", backgroundColor: e.colors.navigationBackground }, participantsContainer: { ...t.container, flex: 1, scrollbarWidth: "none", overflow: "scroll" }, participantViewContainer: { display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", paddingBottom: e.spaces.space8 } };
            });
        },
        67291: (e, t, n) => {
            n.d(t, { A: () => O, w: () => B });
            var a = n(202784),
                o = n(400752),
                i = n(325686),
                r = n(786998),
                c = n(154003),
                l = n(731708),
                s = n(392237),
                d = n(332920),
                u = n.n(d),
                p = n(894966),
                m = n(63274),
                f = n(149170),
                g = n(656898),
                h = n(400915),
                b = n(952793),
                E = n(582129),
                y = n(999769),
                S = n(484633),
                C = n(982790),
                v = n(978658),
                I = n(703533),
                Z = n(24461),
                w = n(143911),
                x = n(979037),
                k = n(774083),
                P = n(391542);
            const D = { collapse: u().d227d19e, guests: u().e51c2372, back: u().b08821f4, spaceSettings: u().fed1388a, pictureInPictureLabel: u().f027fed8 },
                R = { back: { label: D.back }, collapse: { label: D.collapse } },
                O = Object.freeze({ mainView: "mainView", manageView: "manageView", settingsView: "settingsView" });
            function B(e) {
                const { setSpaceDockContentState: t, spaceDockContentState: n } = e,
                    s = (0, b.hC)("rweb_picture_in_picture_enabled"),
                    d = "documentPictureInPicture" in window,
                    u = (0, o.b9)(x.cz),
                    P = a.useCallback(() => {
                        u({ width: e.width, height: x.w });
                    }, [u, e.width]),
                    B = (0, C.$)(e.audioSpaceId),
                    z = (0, x.UH)(),
                    V = (0, o.b9)(x.N$),
                    { role: T } = (0, h.l7)(),
                    _ = (0, g.bd)(),
                    M = (0, o.b9)(E.dq);
                function L() {
                    t(O.mainView);
                }
                const N = (0, o.b9)(v.D);
                return a.createElement(
                    i.Z,
                    { style: H.container },
                    n === O.manageView && a.createElement(r.Z, { leftControl: a.createElement(c.ZP, { "aria-label": D.back, hoverLabel: R.back, icon: a.createElement(p.default, { style: H.topBarButtonIcon }), onPress: L, pullLeft: !0, size: "medium", type: "primaryText" }), title: D.guests }),
                    n === O.settingsView && a.createElement(r.Z, { leftControl: a.createElement(c.ZP, { "aria-label": D.back, hoverLabel: R.back, icon: a.createElement(p.default, { style: H.topBarButtonIcon }), onPress: L, pullLeft: !0, size: "medium", type: "primaryText" }), title: D.spaceSettings }),
                    n === O.mainView &&
                        a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                                i.Z,
                                { style: H.expandedShellHeaderButtons },
                                a.createElement(c.ZP, {
                                    "aria-label": D.collapse,
                                    hoverLabel: R.collapse,
                                    icon: a.createElement(m.default, { style: H.topBarButtonIcon }),
                                    onPress: function () {
                                        e.animation.springTo("collapse");
                                    },
                                    pullLeft: !0,
                                    size: "medium",
                                    style: z ? H.hidden : void 0,
                                    type: "primaryText",
                                }),
                                a.createElement(
                                    i.Z,
                                    { style: H.expandedShellHeaderRight },
                                    d &&
                                        s &&
                                        a.createElement(w.D, {
                                            onPress: () => {
                                                z ? V() : P();
                                            },
                                        }),
                                    !z &&
                                        a.createElement(
                                            a.Fragment,
                                            null,
                                            a.createElement(y.ZP, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: "icon-borderless" }),
                                            a.createElement(Z.d, {
                                                audioSpaceId: e.audioSpaceId,
                                                handleShowSettingsView: function () {
                                                    t(O.settingsView);
                                                },
                                                icon: a.createElement(f.default, null),
                                                pullRight: !0,
                                                type: "primaryText",
                                            }),
                                        ),
                                    a.createElement(I.C, {
                                        onPress: function () {
                                            T === S.Q.host ? N(!0) : (_(":audiospace:::close:click"), M({}));
                                        },
                                        spaceUserRole: T,
                                    }),
                                ),
                            ),
                            a.createElement(
                                i.Z,
                                { style: H.expandedShellDescription },
                                a.createElement(k.L, { audioSpaceId: e.audioSpaceId }),
                                a.createElement(
                                    i.Z,
                                    { style: H.topics },
                                    B.space?.topics?.map((e, t) => a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, 0 !== t ? " • " : "", e?.topic?.name)),
                                ),
                            ),
                        ),
                );
            }
            const H = s.default.create((e) => {
                const t = (0, P.Hx)(e).paddingHorizontal;
                return { container: { marginTop: e.spaces.space8 }, expandedShellDescription: { marginTop: e.spaces.space4, marginBottom: e.spaces.space16, paddingHorizontal: t }, expandedShellHeaderButtons: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: t }, expandedShellHeaderRight: { flexDirection: "row" }, topBarButtonIcon: { color: e.colors.text, width: e.spaces.space16 }, topics: { flexDirection: "row", flexWrap: "wrap", marginTop: e.spaces.space4 }, hidden: { visibility: "hidden" } };
            });
        },
        947638: (e, t, n) => {
            n.d(t, { C: () => o });
            n(202784);
            var a = n(610214);
            function o({ children: e }) {
                return a.gy() ? null : e;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/modules.audio-76583d6c.5a7f359a.js.map
