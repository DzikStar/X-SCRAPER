"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["modules.audio-51f6e793"],
    {
        143911: (e, t, n) => {
            n.d(t, { D: () => u });
            var a = n(202784),
                r = n(154003),
                o = n(674132),
                i = n.n(o),
                l = n(530243),
                c = n(360816),
                s = n(979037);
            function u(e) {
                const t = (0, s.UH)() ? a.createElement(l.default, null) : a.createElement(c.default, null);
                return a.createElement(r.ZP, { "aria-label": d.pip, borderColor: "transparent", color: "text", hoverLabel: m, icon: t, onPress: e.onPress, size: "medium" });
            }
            const d = { pip: i().f027fed8 },
                m = { label: d.pip };
        },
        645903: (e, t, n) => {
            n.d(t, { Y: () => h });
            var a = n(202784),
                r = n(325686),
                o = n(157130),
                i = n(530732),
                l = n(731708),
                c = n(392237),
                s = n(674132),
                u = n.n(s),
                d = n(774447),
                m = n(656898),
                p = n(400915),
                f = n(321835),
                b = n(4427),
                g = n(217220),
                y = n(920325),
                E = n(812702);
            function h(e) {
                const { audioSpaceId: t, disabled: n, onDisabledClick: r } = e,
                    i = (0, b.Qg)();
                return a.createElement(
                    o.Z,
                    {
                        disabled: n,
                        dismissOnScroll: !1,
                        enableEnterKeyToggle: !0,
                        preferredHorizontalOrientation: "end",
                        preferredVerticalOrientation: "up",
                        renderContent: function (e) {
                            const n = { audioSpaceId: t, dismiss: e };
                            return a.createElement(v, n);
                        },
                        withFixedPosition: !0,
                    },
                    a.createElement(E.B, { "aria-label": S.reactions, borderColor: "transparent", color: "text", icon: a.createElement(d.default, null), onPress: n ? r : void 0, size: i ? "large" : "medium", type: "primaryOutlined" }),
                );
            }
            const k = "✋";
            function v(e) {
                const t = (0, m.bd)(),
                    n = a.useRef(new y.Z(e.audioSpaceId)).current;
                const o = w.map((r) => {
                        const o = S.reactWithEmoji({ emoji: r.emoji });
                        return a.createElement(
                            i.Z,
                            {
                                "aria-label": o,
                                focusable: !0,
                                key: r.emoji,
                                onPress: function () {
                                    t(r.scribe), n.sendReaction(r.emoji), e.dismiss();
                                },
                                style: C.reaction,
                            },
                            a.createElement(l.ZP, { key: r.emoji, size: "title4" }, r.emoji),
                        );
                    }),
                    { raisedHandEmoji: c, toggleRaiseHand: s } = (0, g.sv)(),
                    { isUserSpeakingRole: u } = (0, p.l7)(),
                    d = (0, b.Qg)();
                return a.createElement(
                    f.Z,
                    {
                        onImpression: function () {
                            t(":audiospace::reaction_picker::impression");
                        },
                    },
                    a.createElement(r.Z, { style: C.container }, a.createElement(r.Z, { style: C.reactionsContainer }, o), u && !d && a.createElement(i.Z, { "aria-label": S.reactWithEmoji({ emoji: k }), focusable: !0, onPress: s, style: C.raiseHandEmoji }, a.createElement(l.ZP, { size: "title3", style: [C.raiseHandEmoji, c && C.pressed] }, k))),
                );
            }
            const w = [
                    { emoji: "😂", scribe: ":audiospace::reaction_picker:face_with_tears_of_joy:click" },
                    { emoji: "😲", scribe: ":audiospace::reaction_picker:astonished_face:click" },
                    { emoji: "😢", scribe: ":audiospace::reaction_picker:crying_face:click" },
                    { emoji: "💜", scribe: ":audiospace::reaction_picker:heart:click" },
                    { emoji: "💯", scribe: ":audiospace::reaction_picker:hundred_points_symbol:click" },
                    { emoji: "👏", skinToneOption: { none: "👏", light: "👏🏻", "medium-light": "👏🏼", medium: "👏🏽", "medium-dark": "👏🏾", dark: "👏🏿" }, scribe: ":audiospace::reaction_picker:clapping_hands:click" },
                    { emoji: "✊", skinToneOption: { none: "✊", light: "✊🏻", "medium-light": "✊🏼", medium: "✊🏽", "medium-dark": "✊🏾", dark: "✊🏿" }, scribe: ":audiospace::reaction_picker:raised_fist:click" },
                    { emoji: "👍", skinToneOption: { none: "👍", light: "👍🏻", "medium-light": "👍🏼", medium: "👍🏽", "medium-dark": "👍🏾", dark: "👍🏿" }, scribe: ":audiospace::reaction_picker:thumbs_up:click" },
                    { emoji: "👎", skinToneOption: { none: "👎", light: "👎🏻", "medium-light": "👎🏼", medium: "👎🏽", "medium-dark": "👎🏾", dark: "👎🏿" }, scribe: ":audiospace::reaction_picker:thumbs_down:click" },
                    { emoji: "👋", skinToneOption: { none: "👋", light: "👋🏻", "medium-light": "👋🏼", medium: "👋🏽", "medium-dark": "👋🏾", dark: "👋🏿" }, scribe: ":audiospace::reaction_picker:waving:click" },
                ],
                C = c.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space4, padding: e.spaces.space4, justifyContent: "center", alignItems: "center" }, reactionsContainer: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", margin: e.spaces.space4, columnGap: e.spaces.space4, rowGap: e.spaces.space4 }, reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4, flexDirection: "row", alignItems: "center", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }, raiseHandEmojiContainer: { display: "block" }, raiseHandEmoji: { padding: e.spaces.space4, borderRadius: e.borderRadii.infinite, aspectRatio: 1 }, pressed: { backgroundColor: e.colors.primary } })),
                S = { reactions: u().cac1482a, reactWithEmoji: u().fc0e94b7 };
        },
        901832: (e, t, n) => {
            n.d(t, { Vs: () => p });
            var a = n(202784),
                r = n(466999),
                o = n(325686),
                i = n(530732),
                l = n(868634),
                c = n(392237),
                s = n(674132),
                u = n.n(s),
                d = n(656898),
                m = n(610214);
            function p(e) {
                return e.withEducationOnClick && e.audioSpaceId ? a.createElement(f, { audioSpaceId: e.audioSpaceId }) : a.createElement(b, e);
            }
            function f(e) {
                const { openSheet: t } = m.VE(),
                    n = (0, d.bd)();
                return a.createElement(
                    i.Z,
                    {
                        "aria-label": y.recordingActive,
                        onPress: () => {
                            t(m.IX.recordingEducation), n(":audiospace::recording:icon:click");
                        },
                    },
                    a.createElement(b, { audioSpaceId: e.audioSpaceId }),
                );
            }
            function b(e) {
                return a.createElement(o.Z, { style: g.indicatorWrapper }, a.createElement(l.ZP, { background: "navigationBackground" }, a.createElement(o.Z, { style: g.indicatorContainer }, a.createElement(o.Z, { style: [g.indicatorDot, e.withoutPulse ? null : g.indicatorDotAnimation] }), a.createElement(r.Z, { role: "none", selectable: !1, style: g.recordingIndicatorText }, y.REC))));
            }
            const g = c.default.create((e) => ({ indicatorWrapper: { width: "fit-content" }, recordingIndicatorText: { color: e.colors.text, fontWeight: e.fontWeights.bold }, indicatorContainer: { flexDirection: "row", alignItems: "center" }, indicatorDot: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.borderRadii.infinite, marginEnd: e.spaces.space4, backgroundColor: "#E0245E" }, indicatorDotAnimation: { opacity: 0.2, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0.2 }, "50%": { opacity: 1 }, "100%": { opacity: 0.2 } }], animationTimingFunction: "cubic-bezier(0.44, 0.01, 0.48, 0.96)", animationIterationCount: "infinite" } })),
                y = { REC: "REC", recordingActive: u().b4f91a8a };
        },
        812702: (e, t, n) => {
            n.d(t, { B: () => s });
            var a = n(202784),
                r = n(614983),
                o = n.n(r),
                i = n(154003),
                l = n(392237),
                c = n(516951);
            function s(e) {
                return o()(e["aria-label"], "ControlButton must have an accessibilityLabel"), a.createElement(i.ZP, { "aria-label": e["aria-label"], backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e.disabled, hoverLabel: e.hoverLabel, icon: e.icon, onPress: e.onPress || c.Z, renderMenu: e.renderMenu, size: e.size || "medium", style: u.button, type: e.type });
            }
            const u = l.default.create((e) => ({ button: { height: "100%" } }));
        },
        265399: (e, t, n) => {
            n.d(t, { gt: () => _ });
            var a = n(202784),
                r = n(400752),
                o = n(325686),
                i = n(625881),
                l = n(392237),
                c = n(674132),
                s = n.n(c),
                u = n(643442),
                d = n(466445),
                m = n(398170),
                p = n(415269),
                f = n(545937),
                b = n(877506),
                g = n(537801),
                y = n(610214),
                E = n(384509),
                h = n(812702),
                k = n(811176),
                v = n(731708),
                w = n(859918),
                C = n(656898);
            function S(e) {
                const t = (0, C.bd)(),
                    n = b.Z.usePlaybackRate(),
                    r = b.Z.useApi(),
                    o = I.map(({ rate: e, text: a }) => ({
                        text: a,
                        disabled: n === e,
                        onClick: () => {
                            t(":audiospace:replay:recording:speed:click"), r && r.setPlaybackRate(e);
                        },
                    }));
                return a.createElement(h.B, { "aria-label": P.accessibility({ rate: `${n}` }), icon: a.createElement(S.Icon, { playbackRate: n }), renderMenu: (e) => a.createElement(k.Z, { isFixed: !0, items: o, onCloseRequested: e, shouldCloseOnClick: !0 }) });
            }
            S.Icon = function ({ playbackRate: e }) {
                return a.createElement(o.Z, { style: Z.playbackRateIcon }, a.createElement(v.ZP, { style: Z.playbackRateIconText, weight: "normal" }, e), a.createElement(w.default, { style: Z.playbackRateIconSvg }));
            };
            const Z = l.default.create((e) => ({ playbackRateIcon: { flexDirection: "row", alignItems: "center" }, playbackRateIconText: { marginEnd: e.spaces.space2 }, playbackRateIconSvg: { height: e.spaces.space8 } })),
                P = { accessibility: s().e07f6e7d },
                I = [
                    { text: s().jd04fc66, rate: 0.5 },
                    { text: s().f03848b8, rate: 1 },
                    { text: s().j0e5c2ce, rate: 1.5 },
                    { text: s().b3f2318e, rate: 2 },
                ];
            function _(e) {
                return a.createElement(o.Z, { style: R.controlsContainer }, a.createElement(_.SeekSlider, null), a.createElement(o.Z, { style: R.buttonsContainer }, a.createElement(_.Captions, { audioSpaceId: e.audioSpaceId }), a.createElement(S, { audioSpaceId: e.audioSpaceId }), a.createElement(_.SkipRewind, null), a.createElement(_.Play, null), a.createElement(_.SkipAhead, null), a.createElement(g.O, { audioSpaceId: e.audioSpaceId, usePlaceholder: !0 })));
            }
            function x() {
                const e = (0, y.Qt)(),
                    t = a.useRef(e);
                t.current = e;
                const n = b.Z.useGetCurrentTrack(),
                    o = b.Z.useApi(),
                    i = (0, r.oR)();
                return a.useCallback(
                    (e) => {
                        const a = n();
                        if (!a?.durationMs || !o?.scrubToFraction) return;
                        const r = t.current;
                        f.O7(r, e, i);
                        const l = e / a.durationMs;
                        o.scrubToFraction(l);
                    },
                    [o, n, i],
                );
            }
            (_.SeekSlider = function () {
                const e = _.useSeekSliderProps();
                return a.createElement(i.S, { durationMs: e.durationMs, externalSeeking: e.externalSeeking, onSeek: e.onSeek, progressMs: e.currentTimeMs, withTimes: !0 });
            }),
                (_.useSeekSliderProps = function () {
                    const e = b.Z.useIsSeeking(),
                        t = b.Z.useCurrentTrackDurationMs();
                    return { currentTimeMs: b.Z.useCurrentTrackTimeMs() || 0, durationMs: t || 1, externalSeeking: e, onSeek: x() };
                }),
                (_.Captions = function (e) {
                    const t = (0, E.q)(e);
                    return a.createElement(h.B, { "aria-label": t.label, disabled: t.disabled, icon: a.createElement(t.Icon, null), onPress: t.onPress });
                }),
                (_.Play = function () {
                    const { isPlaying: e, togglePlayback: t } = _.usePlayButtonProps();
                    return a.createElement(h.B, { "aria-label": e ? D.pause : D.play, icon: e ? a.createElement(u.default, null) : a.createElement(d.default, null), onPress: t, size: "xLarge" });
                }),
                (_.usePlayButtonProps = () => {
                    const e = b.Z.useIsPlaying(),
                        t = b.Z.usePlayerApi();
                    return {
                        isPlaying: e,
                        togglePlayback: () => {
                            t && t.play && t.pause && (e ? t.pause() : t.play());
                        },
                    };
                }),
                (_.SkipRewind = function () {
                    const e = (function () {
                        const e = x(),
                            t = b.Z.useGetCurrentTrack();
                        return a.useCallback(() => {
                            const n = t();
                            n && n?.currentTimeMs && e(n.currentTimeMs - H);
                        }, [t, e]);
                    })();
                    return a.createElement(h.B, { "aria-label": D.skipRewind, icon: a.createElement(m.default, null), onPress: e });
                }),
                (_.SkipAhead = function () {
                    const e = (function () {
                        const e = x(),
                            t = b.Z.useGetCurrentTrack();
                        return a.useCallback(() => {
                            const n = t();
                            n && n?.currentTimeMs && e(n.currentTimeMs + H);
                        }, [t, e]);
                    })();
                    return a.createElement(h.B, { "aria-label": D.skipForward, icon: a.createElement(p.default, null), onPress: e });
                });
            const R = l.default.create((e) => ({ controlsContainer: { width: "100%", alignSelf: "start", marginVertical: e.spaces.space8 }, buttonsContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, buttonPlaceholderContainer: { opacity: 0, pointerEvents: "none" } })),
                D = { skipForward: s().jf9f3e54, skipRewind: s().hdd1aba0, play: s().ic1e826e, pause: s().b89c5a50 },
                H = 15e3;
        },
        890091: (e, t, n) => {
            n.d(t, { U: () => y });
            var a = n(202784),
                r = n(400752),
                o = n(325686),
                i = n(844685),
                l = n(525754),
                c = n(392237),
                s = n(674132),
                u = n.n(s),
                d = n(656898),
                m = n(625555);
            const p = { speakers: u().j245c654, speakersSubtitle: u().d8cc6ada, everyone: u().baffe39a, peopleYouFollow: u().af293dc2, onlyInvited: u().e3a87142 },
                f = Object.freeze({ onlyInvited: "onlyInvited", peopleYouFollow: "peopleYouFollow", everyone: "everyone" }),
                b = Object.freeze({ [f.onlyInvited]: 0, [f.peopleYouFollow]: 1, [f.everyone]: 2 }),
                g = [
                    { label: p.everyone, value: f.everyone },
                    { label: p.peopleYouFollow, value: f.peopleYouFollow },
                    { label: p.onlyInvited, value: f.onlyInvited },
                ];
            function y(e) {
                const { audioSpaceId: t } = e,
                    n = (0, r.Dv)(d.Cm.conversationControlsAtom),
                    c = 2 === n ? f.everyone : 1 === n ? f.peopleYouFollow : f.onlyInvited,
                    [s, u] = a.useState(c);
                a.useEffect(() => {
                    u(c);
                }, [c]);
                const y = (0, r.b9)(m.H_),
                    h = a.useCallback(
                        (e, n) => {
                            u(n), y(t, b[n]);
                        },
                        [t, y],
                    );
                return a.createElement(o.Z, { style: E.container }, a.createElement(i.Z, { subtext: p.speakersSubtitle, text: p.speakers }), a.createElement(l.Z, { name: "speaker settings", onChange: h, options: g, value: s }));
            }
            const E = c.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space8 } }));
        },
        947433: (e, t, n) => {
            n.d(t, { c: () => P, v: () => C });
            var a = n(202784),
                r = n(400752),
                o = n(708852),
                i = n(154003),
                l = n(811176),
                c = n(392237),
                s = n(674132),
                u = n.n(s),
                d = n(786272),
                m = n(837020),
                p = n(645708),
                f = n(4427),
                b = n(758614),
                g = n(251836),
                y = n(811233);
            const E = u().f17bc95a,
                h = u().b11a74b2,
                k = { label: E, preferredVerticalOrientation: "up" },
                v = { label: h, preferredVerticalOrientation: "up" },
                w = a.createElement(d.default, null);
            function C() {
                const e = (0, b.$t)(),
                    t = (0, g.eC)(),
                    n = (0, g.cj)(),
                    l = (0, o.tj)(),
                    c = (0, f.Qg)(),
                    s = (0, y.gt)(),
                    u = (0, r.b9)(p.dB);
                return !(0, g.Db)() || s || (!l && c) ? null : t ? a.createElement(i.ZP, { "aria-label": h, disabled: n, hoverLabel: v, icon: w, onClick: u, renderMenu: S, size: c ? "large" : "xLarge", type: "primaryFilled" }) : a.createElement(i.ZP, { "aria-label": E, disabled: n, hoverLabel: k, icon: w, onClick: e, size: c ? "large" : "xLarge", style: I.blurred, type: "primaryOutlined" });
            }
            const S = (e) => a.createElement(Z, { onClose: e });
            function Z({ onClose: e }) {
                const t = (0, b.$t)(),
                    n = (0, b.ZQ)(),
                    r = a.useMemo(
                        () => [
                            {
                                Icon: d.default,
                                text: "Present something else",
                                onClick: () => {
                                    t();
                                },
                            },
                            {
                                Icon: m.default,
                                text: h,
                                onClick: () => {
                                    n();
                                },
                            },
                        ],
                        [n, t],
                    );
                return a.createElement(l.Z, { items: r, onCloseRequested: e, preferredHorizontalOrientation: "right", shouldCloseOnClick: !0 });
            }
            function P() {
                const e = (0, b.$t)(),
                    t = (0, b.ZQ)(),
                    n = (0, g.eC)(),
                    a = (0, g.cj)(),
                    r = (0, o.tj)(),
                    i = (0, f.Qg)();
                return (0, g.Db)() ? (r && i ? null : n ? { Icon: d.default, text: h, disabled: a, onClick: t } : { Icon: d.default, text: E, disabled: a, onClick: e }) : null;
            }
            const I = c.default.create((e) => ({ blurred: { backdropFilter: "blur(12px)", backgroundColor: e.colors.appBarBackground } }));
        },
        851336: (e, t, n) => {
            n.d(t, { Y: () => R });
            var a = n(202784),
                r = n(251067),
                o = n(400752),
                i = n(325686),
                l = n(731708),
                c = n(154003),
                s = n(392237),
                u = n(674132),
                d = n.n(u),
                m = n(656898),
                p = n(304148),
                f = n(521799),
                b = n(400915),
                g = n(582129),
                y = n(625555),
                E = n(712612),
                h = n(443781),
                k = n(484633),
                v = n(36809),
                w = n(905443),
                C = n(740386),
                S = n(610214);
            const Z = d().db3de1d2,
                P = d().d7f4bc44,
                I = d().edcf15e9,
                _ = d().h13957aa,
                x = d().ge6372fa;
            function R(e) {
                const { audioSpaceId: t, handleShowManageView: n } = e,
                    [r, s] = (0, o.KO)(w.ZO),
                    [u] = (0, o.KO)(w.UD),
                    d = S.g5(),
                    { isUserAdminRole: R, isUserSpeakingRole: T, role: L } = (0, b.l7)(),
                    A = (0, p.zC)(),
                    { featureSwitches: F } = (0, h.QZ)(),
                    j = (0, o.b9)(E.F3),
                    M = (0, o.b9)(g.JE),
                    z = a.useCallback(() => {
                        j().then((e) => {
                            e && (M({ spaceId: t, role: k.Q.speaker, shouldAutoJoin: !0 }), s(!1));
                        });
                    }, [t, M, s, j]),
                    B = (0, C.k)(),
                    V = a.useCallback(() => {
                        B(!0);
                    }, [B]),
                    U = L === k.Q.listener && r,
                    N = F.isTrue("voice_rooms_cohosts_enabled") && (L === k.Q.listener || L === k.Q.speaker) && u,
                    { cohosts: W, speakers: Q } = (0, o.Dv)(v.Lg),
                    Y = (0, o.Dv)(m.Cm.isMutedAtom) ?? !1,
                    [G, $] = a.useState(Y),
                    K = (0, o.b9)(y.bX),
                    X = (0, o.b9)(y.cH),
                    q = a.useCallback(() => {
                        K(t).then(() => {
                            $(!0);
                        });
                    }, [t, K]),
                    J = a.useCallback(() => {
                        X(t).then(() => {
                            $(!1);
                        });
                    }, [t, X]);
                a.useEffect(() => {
                    $(Y);
                }, [Y]);
                const ee = R && (Q.length + W.length > 0 || G),
                    te = (0, o.Dv)(E.fg);
                return d ? null : a.createElement(i.Z, { style: O.container }, te && a.createElement(i.Z, { style: O.redBackground }, a.createElement(l.ZP, { color: "white", weight: "bold" }, "Muted by host")), U && a.createElement(c.ZP, { onPress: z }, Z), N && a.createElement(c.ZP, { onPress: V }, P), R && A.length > 0 && a.createElement(c.ZP, { onPress: n }, I({ count: A.length })), ee && (G ? a.createElement(c.ZP, { onPress: J, type: "destructiveFilled" }, x) : a.createElement(c.ZP, { onPress: q }, _)), D() && T && a.createElement(c.ZP, { onPress: f.yu }, H));
            }
            const D = () => !(0, r.fH)(r.vw.prod),
                H = "⇩ debug",
                O = s.default.create((e) => ({ container: { display: "flex", flexDirection: "row", overflow: "auto", gap: e.spaces.space12, scrollbarWidth: "none" }, redBackground: { backgroundColor: e.colors.red500, minWidth: e.spaces.space36, minHeight: e.spaces.space36, paddingHorizontal: e.spaces.space16, borderRadius: e.borderRadii.infinite, display: "flex", justifyContent: "center", alignItems: "center" } }));
        },
        283370: (e, t, n) => {
            n.d(t, { D: () => Z, t: () => _ });
            var a = n(807896),
                r = n(202784),
                o = n(400752),
                i = n(744610),
                l = n(325686),
                c = n(292627),
                s = n(392237),
                u = n(537392),
                d = n(198438),
                m = n(187669),
                p = n(656898),
                f = n(545457),
                b = n(125363),
                g = n(550293),
                y = n(447854),
                E = n(192767),
                h = n(153668),
                k = n(610214),
                v = n(821681),
                w = n(67291),
                C = n(979037),
                S = n(391542);
            function Z(e) {
                const t = e.isSideNavLayout ? c.Z.WideExpandedSpaceDock : c.Z.NarrowExpandedSpaceDock,
                    n = (0, p.bd)(),
                    i = (0, o.Dv)(C.ZZ);
                return (
                    (0, m.q)(() => {
                        n(":audiospace::::impression");
                    }),
                    r.createElement(t, null, i ? r.createElement(C.ZP, { pipWindow: i }, r.createElement(P, (0, a.Z)({}, e, { isSideNavLayout: !1 }))) : r.createElement(P, e))
                );
            }
            function P(e) {
                const t = (0, b.v9)(g.kX),
                    n = (0, S.Hx)(s.default.theme),
                    i = (0, o.Dv)(k.bZ),
                    c = (0, f.Q4)(),
                    m = i ? c : e.width + n.shadowOffset,
                    p = (0, C.UH)() ? x.fullHeight : e.isSideNavLayout ? [R.root, { width: m }] : null,
                    [y, E] = r.useState(),
                    h = r.useRef(null),
                    v = (0, u.iv)();
                function w() {
                    const e = h.current?.getBoundingClientRect();
                    e && E(e);
                }
                return (
                    r.useLayoutEffect(w, [v.height]),
                    r.useLayoutEffect(() => {
                        const e = setTimeout(w, d.s + 250);
                        return () => clearTimeout(e);
                    }, [t]),
                    r.createElement(l.Z, { ref: h, style: p }, r.createElement(I, (0, a.Z)({}, e, { layout: y })))
                );
            }
            function I(e) {
                const { layout: t, togglePip: n, ...o } = e,
                    [c, s] = r.useState(!1),
                    u = (0, C.UH)(),
                    d = (0, k.Ie)(),
                    m = (0, v.r)(
                        o,
                        () => {
                            s(!0), d(k.EJ.full);
                        },
                        t,
                    ),
                    p = r.useMemo(() => new i.Z.Value(m.shellHeights.full), [m.shellHeights.full]),
                    f = { ...e, mounted: c, animation: m },
                    b = r.useRef(p);
                (b.current = p),
                    r.useEffect(() => {
                        const e = b.current;
                        if (u || !e) return;
                        const t = m.shellHeights.full;
                        i.Z.spring(e, { toValue: t, useNativeDriver: !1 }).start();
                    }, [m?.shellHeights?.full, u]);
                const [g, S] = r.useState(h.X),
                    [Z, P] = r.useState(w.A.mainView),
                    I = r.useCallback(() => {
                        P(Z === w.A.mainView ? w.A.manageView : w.A.mainView);
                    }, [Z]),
                    D = r.useCallback(
                        ({ nativeEvent: e }) => {
                            const { height: t } = e.layout;
                            S(t);
                        },
                        [S],
                    ),
                    H = r.useRef({ animatedHeight: p, animation: m, contentProps: f, footerHeight: g, handleFooterLayout: D, spaceDockContentState: Z });
                return (
                    (H.current.animatedHeight = p),
                    (H.current.animation = m),
                    (H.current.contentProps = f),
                    (H.current.footerHeight = g),
                    (H.current.handleFooterLayout = D),
                    (H.current.spaceDockContentState = Z),
                    r.useMemo(() => {
                        e.layout;
                        const { animatedHeight: t, animation: o, contentProps: c, footerHeight: s, handleFooterLayout: d, spaceDockContentState: m } = H.current;
                        let p;
                        p = e.isSideNavLayout ? R.container : u ? x.containerPip : x.container;
                        const f = e.isSideNavLayout ? R.expandedShellContainer : x.expandedShellContainer,
                            b = e.isSideNavLayout ? R.footerContainer : x.footerContainer,
                            g = u ? { height: "100%" } : { height: t, opacity: o.animatedPan.interpolate({ inputRange: [o.shellHeights.collapse, o.shellHeights.full], outputRange: [1, 0] }) };
                        return r.createElement(i.Z.View, { style: [p, x.forceGPULayer, g] }, r.createElement(l.Z, { style: f }, r.createElement(v.Q, (0, a.Z)({}, c, { footerHeight: s, setSpaceDockContentState: P, spaceDockContentState: m, togglePip: n }))), r.createElement(l.Z, { style: b }, r.createElement(y.Z, { audioSpaceId: e.audioSpaceId, height: _ }), r.createElement(h.x, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout, onLayout: d, toggleSpaceDockContentState: I })), r.createElement(E.Z, { audioSpaceId: e.audioSpaceId, dockAnimation: o, isSideNavLayout: e.isSideNavLayout }));
                    }, [e.isSideNavLayout, e.audioSpaceId, u, n, I, e.layout, c])
                );
            }
            const _ = 100,
                x = s.default.create((e) => {
                    const t = (0, S.Hx)(e).borderRadius;
                    return { forceGPULayer: { transform: [{ translate3d: "0, 0, 0" }] }, fullHeight: { height: "100%" }, container: { position: "fixed", bottom: 0, width: "100%", backgroundColor: e.colors.maskColor }, containerPip: { bottom: 0, width: "100%" }, expandedShellContainer: { width: "100%", borderRadius: t }, footerContainer: { position: "absolute", bottom: 0, width: "100%" } };
                }),
                R = s.default.create((e) => {
                    const t = (0, S.Hx)(e);
                    return { root: { alignItems: "center", alignSelf: "flex-end", width: "100%", marginVertical: t.marginVertical, marginEnd: e.spacesPx.space20 }, container: { width: "100%" }, expandedShellContainer: { width: "100%", borderRadius: t.borderRadius, overflow: "hidden", paddingTop: t.shadowOffset / 2, paddingHorizontal: t.shadowOffset / 2, marginStart: t.shadowOffset / 2 }, footerContainer: { position: "absolute", bottom: 0, start: t.shadowOffset / 2, paddingHorizontal: t.shadowOffset / 2, width: "100%" } };
                });
        },
        774083: (e, t, n) => {
            n.d(t, { L: () => q });
            var a = n(202784),
                r = n(325686),
                o = n(371344),
                i = n(451051),
                l = n(154003),
                c = n(392237),
                s = n(674132),
                u = n.n(s),
                d = n(885724),
                m = n(925885),
                p = n(688356),
                f = n(741810),
                b = n(400915),
                g = n(484633),
                y = n(381904),
                E = n(982790),
                h = n(731708),
                k = n(776342),
                v = n(157130),
                w = n(868634),
                C = n(530732),
                S = n(646677),
                Z = n(159340),
                P = n(901832),
                I = n(400752),
                _ = n(470397),
                x = n(794215),
                R = n(279046),
                D = n(656898);
            function H(e) {
                const t = (0, I.Dv)(D.Cm.endedAtAtom),
                    n = (0, I.Dv)(D.Cm.tunedInCountAtom);
                return a.createElement(_.Z, { color: F.color, style: L.container }, a.createElement(O, { ended_at: t }), a.createElement(T, { count: n }));
            }
            function O({ ended_at: e }) {
                if (!e) return null;
                let t = null;
                const n = Date.now() - e;
                return (t = n < M ? a.createElement(u().I18NFormatMessage, { $i18n: "f0e84609" }, a.createElement(x.Z, { short: !0, timeMs: n })) : j(new Date(e))), a.createElement(h.ZP, F, t);
            }
            function T({ count: e }) {
                return e ? a.createElement(h.ZP, F, A.tunedIn({ count: R.Z.formatCountShort(e) })) : null;
            }
            const L = c.default.create((e) => ({ container: { marginBottom: e.spaces.space4 } })),
                A = { tunedIn: u().e111f531 },
                F = { color: "text", size: "subtext2" },
                j = u().e18e399b,
                M = 864e5;
            function z(e) {
                return a.createElement(a.Fragment, null, a.createElement(r.Z, { style: K.titleLabelRow }, a.createElement(U, e), a.createElement(B, e), a.createElement(V, e), a.createElement(W, e)), a.createElement(N, e));
            }
            function B(e) {
                const { space: t } = e;
                return t?.is_employee_only ? a.createElement(Y, null, a.createElement(h.ZP, null, $.employeesOnly)) : null;
            }
            function V(e) {
                const { space: t } = e;
                return t?.narrow_cast_space_type !== k.default.AudienceEnum.superFollowersOnly ? null : a.createElement(Y, null, a.createElement(S.default, { style: K.superFollowsIcon }), a.createElement(h.ZP, null, $.superFollowersOnly));
            }
            function U(e) {
                const { spaceState: t } = e;
                return t?.recording ? a.createElement(Q, null, a.createElement(P.Vs, { audioSpaceId: e.audioSpaceId, withEducationOnClick: !e.isOutsideDock })) : null;
            }
            function N(e) {
                const { spaceState: t } = e;
                return t?.replayable ? a.createElement(r.Z, { style: K.metadataLabelRow }, a.createElement(Q, null, a.createElement(H, { audioSpaceId: e.audioSpaceId }))) : null;
            }
            function W(e) {
                const { space: t } = e;
                if (!t || !t.community || !t.community.name) return null;
                return a.createElement(
                    v.Z,
                    {
                        contentStyle: K.communitiesPopover,
                        enableHover: !0,
                        renderContent: function () {
                            return a.createElement(h.ZP, null, $.communityToolTip);
                        },
                        withArrow: !0,
                    },
                    a.createElement(G, { link: `/i/communities/${t.community.rest_id}` }, a.createElement(Z.default, { style: [K.communitiesIcon, { color: t.community.color }] }), a.createElement(h.ZP, null, t.community.name)),
                );
            }
            function Q(e) {
                return a.createElement(r.Z, { style: K.titleLabelSpacer }, e.children);
            }
            function Y(e) {
                return a.createElement(Q, null, a.createElement(w.ZP, { background: "navigationBackground", bold: !0 }, a.createElement(r.Z, { style: K.centeredFlexRow }, e.children)));
            }
            function G(e) {
                return a.createElement(Q, null, a.createElement(C.Z, { link: e.link }, a.createElement(w.ZP, { background: "navigationBackground", bold: !0 }, a.createElement(r.Z, { style: K.centeredFlexRow }, e.children))));
            }
            const $ = { employeesOnly: u().b5d88f0c, superFollowersOnly: u().c855ab8e, communityToolTip: u().ddeb0a3c },
                K = c.default.create((e) => {
                    const t = { flexDirection: "row", marginBottom: e.spaces.space4 },
                        n = { ...t, flexFlow: "row wrap", marginBottom: e.spaces.space8, rowGap: e.spaces.space2 },
                        a = t,
                        r = { paddingEnd: e.spacesPx.space4 },
                        o = { height: 10, marginEnd: e.spaces.space4 };
                    return { centeredFlexRow: { alignItems: "center", flexDirection: "row" }, communitiesIcon: o, communitiesPopover: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8 }, titleLabelRow: n, titleLabelSpacer: r, metadataLabelRow: a, superFollowsIcon: { ...o, color: e.colors.plum500 } };
                }),
                X = { edit: u().abd845fe };
            function q(e) {
                const { audioSpaceId: t } = e,
                    n = (0, E.$)(t),
                    { isUserAdminRole: c } = (0, b.l7)(),
                    [s, u] = a.useState(""),
                    { activeItem: h } = (0, y.Y)(),
                    k = h?.type === g.W.space ? h?.id : null,
                    [v, w] = a.useState(!1),
                    C = n.utils.title();
                a.useEffect(() => {
                    u("");
                }, [C]);
                const S = c && t === k,
                    Z = a.useCallback((e) => {
                        u(e.target.value);
                    }, []),
                    P = a.useCallback(() => {
                        f.E.replayBroadcastEdit(t, { replay_edited_title: s }), w(!1);
                    }, [t, s]),
                    I = {
                        hashtags: (0, m.Z)(C).map((e) => {
                            const t = e.hashtag,
                                { indices: n } = e;
                            return { text: t, indices: n };
                        }),
                        user_mentions: (0, p.Z)(C),
                    },
                    _ = [0, C.length];
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(z, { audioSpaceId: t, isOutsideDock: e.isOutsideDock, space: n.space, spaceState: n.utils.is }),
                    v && a.createElement(o.Z, { appTextSize: "headline1", autoFocus: !0, inputStyle: J.titleInput, maxLength: 70, maxNumberOfLines: 3, onBlur: P, onChange: Z, onSubmitEditing: P, placeholder: "What do you want to talk about?", styleType: "selection", value: s }),
                    !v &&
                        a.createElement(
                            r.Z,
                            { style: J.spaceTitleRow },
                            a.createElement(i.Z, { displayTextRange: _, entities: I, linkify: !0, size: "headline1", style: J.spaceTitle, text: s || C, weight: "heavy" }),
                            S &&
                                a.createElement(l.ZP, {
                                    "aria-label": X.edit,
                                    hoverLabel: { label: X.edit },
                                    icon: a.createElement(d.default, null),
                                    onPress: () => {
                                        u(s || C), w(!0);
                                    },
                                    size: "xSmall",
                                    type: "primaryText",
                                }),
                        ),
                );
            }
            const J = c.default.create((e) => ({ titleInput: { fontWeight: e.fontWeights.heavy, padding: 0 }, spaceTitleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, spaceTitle: { flex: 1 } }));
        },
        220919: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                r = n(325686),
                o = n(823161),
                i = n(973014),
                l = n(371344),
                c = n(673510),
                s = n(154003),
                u = n(392237),
                d = n(674132),
                m = n.n(d),
                p = n(956272),
                f = n(666536);
            const b = m().gdb7bc25,
                g = m().fe7a1910,
                y = m().ic3c757e,
                E = u.default.create((e) => ({ root: { flex: 1, backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.medium, padding: e.spaces.space8 }, selectionPill: { margin: e.spaces.space4, maxWidth: `calc(100% - ${e.spaces.space16})` }, selectedUsersList: { flexDirection: "row", flexWrap: "wrap", padding: e.spaces.space4 }, modalDropdown: { backgroundColor: e.colors.cellBackground, flex: 1, minHeight: 300, maxHeight: "40vh", position: "relative", overflowY: "auto", overscrollBehavior: "auto" } })),
                h = (e) => {
                    const { handleInvites: t, users: n } = e,
                        [u, d] = a.useState([]),
                        m = a.useRef(null),
                        [h, k] = a.useState(n),
                        v = (e) => {
                            const t = a.createElement(o.default, { "aria-hidden": !0, focusable: !1, size: "custom", uri: e.avatar_url });
                            return a.createElement(i.Z, {
                                "aria-label": b({ name: e.display_name }),
                                avatar: t,
                                compact: !0,
                                key: e.user_id,
                                mode: "remove",
                                onClick: () => {
                                    d([...u].filter((t) => t.user_id !== e.user_id));
                                },
                                style: E.selectionPill,
                                text: e.display_name || "",
                            });
                        },
                        w = (e) => {
                            u.includes(e) || d([...u, e]);
                        },
                        C = (0, f.Z)((e) => {
                            const t = e.target.value,
                                a = n.filter((e) => {
                                    const n = t.toLowerCase();
                                    return [e.display_name, e.twitter_screen_name].some((e) => e?.toLowerCase().includes(n));
                                });
                            k(a);
                        }, 500);
                    return a.createElement(
                        r.Z,
                        { style: E.root },
                        a.createElement(l.Z, { Icon: p.default, onChange: C, placeholder: y, ref: m }),
                        a.createElement(r.Z, { style: E.selectedUsersList }, u.map(v)),
                        a.createElement(
                            r.Z,
                            { "aria-multiselectable": !0, role: "listbox", style: E.modalDropdown },
                            h.map((e) => {
                                const t = e;
                                if (t.user_id && t.display_name && t.twitter_screen_name && t.avatar_url)
                                    return a.createElement(c.ZP, {
                                        avatarUri: t.avatar_url,
                                        isVerified: !0,
                                        key: t.user_id,
                                        name: t.display_name,
                                        onAvatarClick: () => {
                                            w(e);
                                        },
                                        onCellClick: () => {
                                            w(e);
                                        },
                                        onScreenNameClick: () => {
                                            w(e);
                                        },
                                        screenName: t.twitter_screen_name,
                                        userId: t.user_id,
                                    });
                            }),
                        ),
                        a.createElement(s.ZP, { onPress: () => t(u), size: "medium", type: "primaryFilled" }, g),
                    );
                };
        },
        126420: (e, t, n) => {
            n.d(t, { E$: () => Z, ZP: () => P, im: () => C });
            var a = n(202784),
                r = n(400752),
                o = n(565058),
                i = n(154003),
                l = n(674132),
                c = n.n(l),
                s = n(123638),
                u = n(620763),
                d = n(323265),
                m = n(656898),
                p = n(400915),
                f = n(933794),
                b = n(4427),
                g = n(712612),
                y = n(254810),
                E = n(484633);
            const h = { mute: c().hb568af4, unmute: c().bb1cbeb6 },
                k = d.ZP.isMac() ? " (⌘+d)" : d.ZP.isDesktopOS() ? " (ctrl+d)" : "",
                v = `Mute${k}`,
                w = `Unmute${k}`,
                C = (e) => {
                    const [t, n] = (0, r.KO)(g.Dy),
                        o = (0, r.Dv)(g.fg),
                        l = (0, m.bd)(),
                        c = a.useCallback(() => {
                            l(t ? ":audiospace::speaker:unmute_button:click" : ":audiospace::controls:mute_button:click"), n(!t);
                        }, [t, n, l]),
                        d = (0, r.Dv)(y.pL),
                        k = t || o || !d,
                        C = k ? h.unmute : h.mute,
                        S = { label: C, preferredVerticalOrientation: "up" },
                        { role: Z } = (0, p.l7)(),
                        P = (0, r.Dv)(b.MG),
                        I = (0, y.LK)();
                    if (P) {
                        const e = k ? w : v,
                            t = { label: e, preferredVerticalOrientation: "up" },
                            n = { "mod+d": c };
                        return a.createElement(f.Z, { handlers: n }, a.createElement(i.ZP, { "aria-label": e, disabled: (o && Z !== E.Q.host) || I, hoverLabel: t, icon: k ? a.createElement(s.default, null) : a.createElement(u.default, null), onPress: c, size: "large", type: k ? "destructiveFilled" : "primaryFilled" }));
                    }
                    return a.createElement(i.ZP, { "aria-label": C, disabled: o && Z !== E.Q.host, hoverLabel: S, icon: k ? a.createElement(s.default, null) : a.createElement(u.default, null), onPress: c, size: "xLarge", type: k ? "destructiveFilled" : "primaryFilled" });
                },
                S = (0, o.cn)(null, (e, t, n) => t(g.Dy, !e(g.Dy))),
                Z = () => {
                    const e = (0, r.Dv)(y.pL),
                        t = (0, r.Dv)(g.Dy) || !e,
                        n = (0, y.LK)(),
                        o = t ? w : v,
                        l = a.useMemo(() => ({ label: o }), [o]),
                        c = (0, r.b9)(S),
                        d = a.useMemo(() => ({ "mod+d": c }), [c]);
                    return a.createElement(f.Z, { handlers: d }, a.createElement(i.ZP, { "aria-label": o, disabled: n, hoverLabel: l, icon: t ? a.createElement(s.default, null) : a.createElement(u.default, null), onPress: c, size: "large", type: t ? "destructiveFilled" : "primaryFilled" }));
                },
                P = C;
        },
        521454: (e, t, n) => {
            n.d(t, { D: () => a.D });
            var a = n(283370);
        },
        384509: (e, t, n) => {
            n.d(t, { q: () => a.q });
            var a = n(910245);
        },
        910245: (e, t, n) => {
            n.d(t, { q: () => m });
            n(202784);
            var a = n(400752),
                r = n(674132),
                o = n.n(r),
                i = n(38502),
                l = n(804579),
                c = n(498844),
                s = n(656898),
                u = n(58255),
                d = n(610214);
            function m(e) {
                const t = d.O5(),
                    n = t === d.HP.Unavailable,
                    r = (function (e) {
                        switch (e) {
                            case d.HP.On:
                                return i.default;
                            case d.HP.Off:
                                return l.default;
                            case d.HP.Unavailable:
                            default:
                                return c.default;
                        }
                    })(t),
                    o = (function (e) {
                        switch (e) {
                            case d.HP.On:
                                return p.hideCaptions;
                            case d.HP.Off:
                                return p.showCaptions;
                            case d.HP.Unavailable:
                            default:
                                return p.captionsUnavailable;
                        }
                    })(t),
                    m = (function (e) {
                        const t = (0, s.bd)(),
                            n = (0, d.sd)(),
                            r = (0, a.Dv)(s.Cm.spaceStateAtom);
                        return () => {
                            r?.Running && u.w.proxsee.enableSpacesCaption(e.audioSpaceId), n(), t(":audiospace::caret:view_transcriptions:click");
                        };
                    })(e);
                return { disabled: n, Icon: r, label: o, onPress: m };
            }
            const p = { showCaptions: o().e674c120, hideCaptions: o().f45bace4, captionsUnavailable: o().ce96f1dc };
        },
        844857: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(400752),
                o = n(36809);
            const i = function (e) {
                const { cohosts: t, host: n, listeners: i, speakers: l } = (0, r.Dv)(o.Lg),
                    c = a.useMemo(() => [...(n ? [n] : []), ...(l ?? []), ...(i ?? []), ...(t ?? [])], [t, n, i, l]);
                return a.useMemo(() => c.reduce((e, t) => (t.twitter_screen_name && (e[t.twitter_screen_name] = { isVerified: t.is_verified, isBlueVerified: t.is_blue_verified, verifiedType: t.verified_type }), e), {}), [c]);
            };
        },
        391542: (e, t, n) => {
            n.d(t, { Hx: () => i, ss: () => o });
            var a = n(392237);
            const r = { MAX_DOCK_SHEETS_RATIO: 0.85, HALF_SHEET_RATIO: 0.7635, COLLAPSE_RATIO: 0.5, MAX_HEIGHT: 812, MIN_HEIGHT: 300 };
            function o(e, t, n) {
                let o = e;
                if (t) {
                    o = Math.min(r.MAX_HEIGHT, e);
                    const { height: t, top: l } = n || {},
                        c = l + t;
                    if (c - o < 0) {
                        const e = c - i(a.default.theme).marginVerticalPx;
                        e > r.MIN_HEIGHT && (o = e);
                    }
                }
                return { collapse: o * r.COLLAPSE_RATIO, half: o * r.HALF_SHEET_RATIO, sheetMaxHeight: o * r.MAX_DOCK_SHEETS_RATIO, full: o };
            }
            function i(e) {
                const t = e.borderRadiiPx.large,
                    n = e.spaces.space16,
                    a = e.spacesPx.space8;
                return { borderRadius: t, paddingHorizontal: n, marginVertical: e.spaces.space20, marginVerticalPx: e.spacesPx.space20, shadowOffset: a };
            }
        },
        233040: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(807896),
                r = n(202784),
                o = n(392237),
                i = n(404971);
            function l(e) {
                return r.createElement(i.default, (0, a.Z)({}, e, { style: o.default.flatten([e ? e.style : null, c.icon]) }));
            }
            const c = o.default.create((e) => ({ icon: { fill: e.colors.purple500 } }));
        },
        905443: (e, t, n) => {
            n.d(t, { UD: () => d, ZO: () => u, d5: () => m });
            var a = n(202784),
                r = n(565058),
                o = n(400752),
                i = n(656898),
                l = n(400915),
                c = n(900147),
                s = n(443781);
            const u = (0, r.cn)(!1),
                d = (0, r.cn)(!1);
            function m(e) {
                const t = (0, o.Dv)(i.Cm.conversationControlsAtom),
                    n = (0, s.QZ)().viewerUserId ?? "",
                    { role: r } = (0, l.l7)(),
                    m = (0, o.Dv)(i.Cm.pendingAdminTwitterUserIdsAtom),
                    p = (0, o.Dv)(i.Cm.mentionedUsersAtom),
                    f = (0, o.Dv)(i.Cm.followedByHostAtom),
                    b = (0, o.b9)(u),
                    g = (0, o.b9)(d);
                a.useEffect(() => {
                    m?.map((e) => e.rest_id).includes(n) ? g(!0) : (g(!1), t === c.iY.InvitedOnly && p?.map((e) => e.rest_id).includes(n) ? b(!0) : b(!1)), t === c.iY.Everyone && b(!0), t === c.iY.FollowedOnly && f && (t === c.iY.Everyone || (t === c.iY.FollowedOnly && f)) && b(!0);
                }, [g, b, t, f, p, m, r, n]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/modules.audio-51f6e793.f375227a.js.map
