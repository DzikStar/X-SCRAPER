"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI"],
    {
        449479: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(202784),
                n = a(325686),
                l = a(913973),
                s = a(731708),
                i = a(950822),
                o = a(466792),
                c = a(58881),
                u = a(530732),
                d = a(352924),
                h = a(392237);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, d.F)()),
                        (this.descriptionId = (0, d.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: a } = this.props;
                            a && !t && a(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: a, disabled: d, helpText: p, label: b, name: y, testID: g } = this.props,
                        f = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        v = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        E = a ? f : v;
                    return r.createElement(o.Z, { disabled: d }, (o) => r.createElement(n.Z, { role: "label", style: [m.root, !d && m.interactive], testID: g }, r.createElement(n.Z, { style: m.topContainer }, r.createElement(s.ZP, { id: this.labelId }, b), r.createElement(n.Z, { style: m.radioContainer }, r.createElement(u.Z, { interactiveStyles: E, interactivityState: o, style: m.radioBackground }, r.createElement(n.Z, { style: [m.circle, a && m.circleActive, d && m.circleDisabled, a && d && m.circleCheckedAndDisabled] }, a ? r.createElement(l.default, { style: m.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: a, disabled: d, name: y, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), p ? r.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const m = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = p,
                y = "radioGroup";
            let g = 1;
            class f extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: a } = this.props;
                            a(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (a) => {
                            (this._radioRefs[e] = a), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${g}_LABEL`),
                        (g += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: a, label: l, name: i, options: o, value: c } = this.props;
                    return r.createElement(
                        n.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: a && v.disabled, testID: `${y}${i}` },
                        l ? r.createElement(n.Z, { id: this._labelId, role: "label", style: v.header }, r.createElement(s.ZP, { style: v.label, weight: "bold" }, l), t ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        o.map((e, t) => r.createElement(b, { "aria-posinset": t + 1, "aria-setsize": o.length, checked: e.value === c, disabled: a, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            f.defaultProps = { disabled: !1 };
            const v = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r = a(202784),
                n = a(325686),
                l = a(449479),
                s = a(392237);
            const i = (e) => r.createElement(n.Z, { style: o.root }, r.createElement(l.Z, e)),
                o = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        458774: (e, t, a) => {
            a.d(t, { U: () => n, c: () => r });
            const r = Object.freeze({ wide: "wide", narrow: "narrow", veryNarrow: "veryNarrow" }),
                n = Object.freeze({ [r.wide]: 500, [r.narrow]: 300, [r.veryNarrow]: 200 });
        },
        502089: (e, t, a) => {
            a.d(t, { Z: () => We });
            var r = a(202784),
                n = (a(136728), a(325686)),
                l = a(111677),
                s = a.n(l),
                i = a(136483),
                o = a(643442),
                c = a(737691),
                u = a(466445),
                d = a(360816),
                h = a(841972),
                p = a(647174),
                m = a(38502),
                b = a(804579),
                y = a(676066),
                g = a(323265),
                f = a(731708),
                v = a(392237),
                E = a(366635),
                k = a(41871),
                S = a(986460),
                w = a(424713),
                P = a(251478),
                C = a(890328),
                _ = a(738584),
                Z = a(864386),
                L = a(542610),
                R = a(445014),
                B = a(458774),
                I = a(420922),
                T = a(103849),
                D = a(70889),
                M = a(807896),
                x = a(466999),
                A = a(154003),
                F = a(591354);
            class O extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSkipPress = () => {
                            this.props.playerApi.nextTrack();
                        });
                }
                render() {
                    if (!this.props.playerState) return null;
                    const e = (0, w.Ci)(this.props.playerState);
                    if (!e || e.durationMs <= this.props.skipThreshold || e.displayType !== P.ak.AD) return null;
                    const t = Math.ceil((5e3 - e.currentTimeMs) / 1e3),
                        a = t > 0,
                        n = a ? (0, F.bl)({ seconds: (0, F.Cf)(t) }) : F.DP,
                        l = a ? (0, F.WB)({ seconds: (0, F.I_)(t) }) : F.Be;
                    return r.createElement(A.ZP, { "aria-label": n, disabled: a, onPress: a ? void 0 : this._handleSkipPress, pointerEvents: "auto", size: "small", testID: "ControlBar-skipButton", type: "onMediaDominantColorFilled" }, r.createElement(x.Z, { style: R.eR }, l));
                }
            }
            O.defaultProps = { skipThreshold: 7e3 };
            const z = r.memo(function (e) {
                return e.useRefactoredLayout
                    ? r.createElement(
                          n.Z,
                          { pointerEvents: "none", style: R.Xo },
                          r.createElement(_.o, { periodic: !0 }, ({ playerApi: t, playerState: a }) => r.createElement(O, (0, M.Z)({}, e, { playerApi: t, playerState: a }))),
                      )
                    : r.createElement(
                          n.Z,
                          { pointerEvents: "none", style: R.i3 },
                          r.createElement(
                              n.Z,
                              { style: R.Nk },
                              r.createElement(
                                  n.Z,
                                  { style: R.A9 },
                                  r.createElement(n.Z, { style: R.rq }),
                                  r.createElement(
                                      n.Z,
                                      { style: R.Xo },
                                      r.createElement(_.o, { periodic: !0 }, ({ playerApi: t, playerState: a }) => r.createElement(O, (0, M.Z)({}, e, { playerApi: t, playerState: a }))),
                                  ),
                              ),
                          ),
                      );
            });
            var N = a(698891),
                V = a(494394),
                H = a(235902),
                Q = a(30899),
                U = a(254740),
                $ = a(305845),
                G = a(234558),
                K = a(53674),
                j = a(72591),
                W = a(894966),
                q = a(143670);
            const X = s().ha3efce4,
                J = s().e8b5757c,
                Y = s().e7e954de,
                ee = s().g07ffe66,
                te = s().d8bede9e,
                ae = s().j41845c8,
                re = s().e9eeed9e,
                ne = s().fe45dc84,
                le = s().e791190a,
                se = s().dc5df829,
                ie = [
                    { label: J, value: "0.25" },
                    { label: Y, value: "0.5" },
                    { label: ee, value: "0.75" },
                    { label: te, value: "1" },
                    { label: ae, value: "1.25" },
                    { label: re, value: "1.5" },
                    { label: ne, value: "1.75" },
                    { label: le, value: "2" },
                ];
            function oe(e) {
                const t = new Map();
                e.forEach((e) => {
                    const a = Math.min(e.width, e.height).toString(),
                        r = Math.floor(e.frameRate),
                        n = se({ frameRate: 60 === r ? r : "", resolution: a }),
                        l = t.get(n);
                    (!l || e.bitrate < l.bitrate) && t.set(n, e);
                });
                const a = [{ label: X, value: "-1" }];
                return (
                    t.forEach((e, t) => {
                        a.push({ label: t, value: e.level.toString() });
                    }),
                    a
                );
            }
            var ce = a(101890);
            const ue = s().ccc97152;
            function de({ handleKeyDown: e, handlePlaybackRateChange: t, selectedPlaybackRate: a }) {
                return r.createElement(n.Z, { onKeyDown: e }, r.createElement(ce.Z, { "aria-label": ue, name: "playback_rate", onChange: t, options: ie, value: a }));
            }
            const he = s().c4d66d2e,
                pe = s().h531ade0;
            function me({ availableResolutions: e, handleKeyDown: t, handleQualityLevelChange: a, selectedQuality: l }) {
                const s = r.useMemo(() => oe(e), [e]),
                    i = r.useMemo(() => 1 === e.length && Math.min(e[0].height, e[0].width) <= 480, [e]);
                return r.createElement(n.Z, { onKeyDown: t }, r.createElement(ce.Z, { "aria-label": pe, name: "quality_level", onChange: a, options: s, value: l.toString() }), i && r.createElement(f.ZP, { style: be.text }, he));
            }
            const be = v.default.create((e) => ({ text: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 } })),
                ye = s().ha3efce4,
                ge = s().hd8d044d,
                fe = s().a7bf9962,
                ve = s().ccc97152,
                Ee = s().h531ade0;
            function ke({ availableResolutions: e, currentResolution: t, downloadLink: a, handlePlaybackRateChange: n, handlePlaybackRateKeyDown: l, handleQualityLevelChange: i, handleQualityLevelKeyDown: o, isPlaybackRateSupported: c, onDismiss: u, selectedPlaybackRate: d, selectedQuality: h }) {
                const [p, m] = r.useState("main"),
                    b = ie.find(({ value: e }) => e === d)?.label ?? te,
                    y = r.useMemo(() => {
                        if (e) {
                            const a = oe(e),
                                r = t?.level.toString();
                            if ("-1" === h) {
                                const e = t && a.find((e) => e.value === r)?.label;
                                return e ? ge({ quality: e }) : ye;
                            }
                            const n = a.find((e) => e.value === h);
                            return n?.label;
                        }
                    }, [e, t, h]),
                    g = r.useCallback(() => {
                        m("playbackRate");
                    }, []),
                    v = r.useCallback(() => {
                        m("videoQuality");
                    }, []),
                    E = r.useCallback(() => {
                        m("main");
                    }, []),
                    k = r.useMemo(() => ({ playbackRateLabel: r.createElement(f.ZP, null, ve), playbackRateValueLabel: r.createElement(f.ZP, { color: "gray700", size: "body", weight: "normal" }, b) }), [b]),
                    S = r.useMemo(() => r.createElement(s().I18NFormatMessage, { $i18n: "i6125da7" }, k.playbackRateLabel, k.playbackRateValueLabel), [k]),
                    w = r.useMemo(() => ({ qualityLevelLabel: r.createElement(f.ZP, null, Ee), qualityLevelValueLabel: r.createElement(f.ZP, { color: "gray700", size: "body", weight: "normal" }, y) }), [y]),
                    P = r.useMemo(() => r.createElement(s().I18NFormatMessage, { $i18n: "c4f28ae1" }, w.qualityLevelLabel, w.qualityLevelValueLabel), [w]);
                switch (p) {
                    case "main":
                        return r.createElement(
                            r.Fragment,
                            null,
                            c && r.createElement(q.Z, { Icon: G.default, actionText: S, onClick: g }),
                            e && r.createElement(q.Z, { Icon: K.default, actionText: P, onClick: v }),
                            a &&
                                r.createElement(q.Z, {
                                    Icon: j.default,
                                    actionText: fe,
                                    link: (function (e) {
                                        return "string" == typeof e ? { download: !0, pathname: e } : e;
                                    })(a),
                                    onClick: u,
                                }),
                        );
                    case "playbackRate":
                        return r.createElement(r.Fragment, null, r.createElement(q.Z, { Icon: W.default, actionText: ve, onClick: E }), r.createElement(de, { handleKeyDown: l, handlePlaybackRateChange: n, selectedPlaybackRate: d }));
                    case "videoQuality":
                        return e ? r.createElement(r.Fragment, null, r.createElement(q.Z, { Icon: W.default, actionText: Ee, onClick: E }), r.createElement(me, { availableResolutions: e, handleKeyDown: o, handleQualityLevelChange: i, selectedQuality: h })) : null;
                    default:
                        return null;
                }
            }
            const Se = s().e23b20a0;
            function we({ availableResolutions: e, currentResolution: t, handlePlaybackRateChange: a, handlePlaybackRateKeyDown: l, handleQualityLevelChange: s, handleQualityLevelKeyDown: i, isPlaybackRateSupported: o, onDismiss: c, selectedPlaybackRate: u, selectedQuality: d, type: h }) {
                const p = "sheet" === h,
                    { downloadLink: m } = r.useContext($.l);
                return r.createElement(n.Z, { role: "dialog", style: Pe.root }, r.createElement(ke, { availableResolutions: e, currentResolution: t, downloadLink: m, handlePlaybackRateChange: a, handlePlaybackRateKeyDown: l, handleQualityLevelChange: s, handleQualityLevelKeyDown: i, isPlaybackRateSupported: o, onDismiss: c, selectedPlaybackRate: u, selectedQuality: d }), p ? r.createElement(A.ZP, { onPress: c, style: Pe.cancelButton, testID: "Cancel", type: "primaryOutlined" }, Se) : null);
            }
            const Pe = v.default.create((e) => ({ root: { flexDirection: "column", paddingTop: e.spaces.space8, paddingBottom: e.spaces.space4, paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8, borderRadius: e.borderRadii.xLarge }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 } })),
                Ce = s().h9b3104e;
            const _e = function (e) {
                    const { playerApi: t, playerState: a } = e,
                        n = a.playbackRate?.toString(),
                        l = a.qualityLevel?.toString() ?? "-1",
                        [s, i] = r.useState({ keyboardSelected: !1, selectedPlaybackRate: n, selectedQuality: l }),
                        { children: o, onDismiss: c, showVideoSettings: u } = e,
                        { fullscreen: d } = a,
                        h = d.isFullscreen,
                        p = u ? V.J.forceVisible : V.J.forceHidden,
                        m = H.ZP.useProps().isDMDrawer,
                        b = (0, w.Ci)(a),
                        { availableResolutions: y, currentBitrate: g, playbackRateSupported: f } = b || {},
                        v = r.useMemo(() => y?.find((e) => e.bitrate === g), [y, g]);
                    function E(e, a) {
                        s.keyboardSelected ? i({ ...s, keyboardSelected: !1, selectedPlaybackRate: a }) : (t.setPlaybackRate(parseFloat(a)), c(), i({ ...s, selectedPlaybackRate: a }));
                    }
                    function k(e, a) {
                        s.keyboardSelected ? i({ ...s, keyboardSelected: !1, selectedQuality: a }) : (t.setQualityLevel(parseInt(a, 10)), c(), i({ ...s, selectedQuality: a }));
                    }
                    function S(e) {
                        return function (t) {
                            t.key === U.Z.ArrowDown || t.key === U.Z.ArrowUp || t.key === U.Z.ArrowLeft || t.key === U.Z.ArrowRight ? (t.stopPropagation(), i({ ...s, keyboardSelected: !0 })) : t.key === U.Z.Enter ? (e(), c()) : t.key === U.Z.Escape && i({ ...s, selectedPlaybackRate: n, selectedQuality: l });
                        };
                    }
                    function P() {
                        t.setPlaybackRate(parseFloat(s.selectedPlaybackRate));
                    }
                    function C() {
                        t.setQualityLevel(parseInt(s.selectedQuality, 10));
                    }
                    return r.createElement(
                        Q.Z,
                        {
                            onDismiss: c,
                            renderContent: (e, t) => {
                                const a = { availableResolutions: y, currentResolution: v, handlePlaybackRateKeyDown: S(P), handlePlaybackRateChange: E, handleQualityLevelChange: k, handleQualityLevelKeyDown: S(C), isPlaybackRateSupported: f, onDismiss: c, selectedPlaybackRate: s.selectedPlaybackRate, selectedQuality: s.selectedQuality, type: t };
                                return r.createElement(we, a);
                            },
                            visibilityBehavior: p,
                            withArrow: !0,
                            withFixedPosition: h || m(),
                            withoutLayer: h,
                        },
                        o,
                    );
                },
                Ze = { action: "click", element: "video_settings" };
            function Le(e) {
                const [t, a] = r.useState({ showVideoSettings: !1, resumePlaybackOnDismiss: !1 }),
                    { isNarrow: n, playerApi: l, playerState: s, ...i } = e,
                    o = (0, w.Ci)(s),
                    c = g.ZP.isLinux() && g.ZP.isChrome(),
                    u = o && o.playbackRateSupported && !c;
                return (o && o.availableResolutions) || u
                    ? r.createElement(
                          _e,
                          {
                              onDismiss: function () {
                                  a({ showVideoSettings: !1 });
                              },
                              playerApi: l,
                              playerState: s,
                              showVideoSettings: t.showVideoSettings,
                          },
                          r.createElement(
                              T.g,
                              (0, M.Z)({}, i, {
                                  "aria-label": Ce,
                                  icon: r.createElement(N.default, null),
                                  onPress: function () {
                                      a({ showVideoSettings: !0 });
                                  },
                                  scribeNamespace: Ze,
                                  size: n ? "xSmall" : "medium",
                              }),
                          ),
                      )
                    : null;
            }
            const Re = ({ data: e }) => {
                    const t = r.useRef(null);
                    return (
                        r.useEffect(() => {
                            const a = t.current,
                                r = () => {
                                    if (!a) return;
                                    const t = Math.min(...e),
                                        r = Math.max(...e);
                                    let n = [];
                                    const l = r - t;
                                    n = 0 === l ? e.map(() => 0) : e.map((e) => (e - t) / l);
                                    const s = n.length / 360,
                                        i = Math.max(2 * s, 1);
                                    n = (function (e, t) {
                                        const a = [];
                                        for (let r = 0; r < e.length; r++) {
                                            let n = 0,
                                                l = 0;
                                            for (let a = -Math.floor(3 * t); a <= Math.floor(3 * t); a++) {
                                                const s = r + a;
                                                if (s >= 0 && s < e.length) {
                                                    const r = Math.exp(-0.5 * (a / t) ** 2) / (Math.sqrt(2 * Math.PI) * t);
                                                    (n += e[s] * r), (l += r);
                                                }
                                            }
                                            a[r] = n / l;
                                        }
                                        return a;
                                    })(n, Math.min(i, 10));
                                    const o = a.getBoundingClientRect().width,
                                        c = a.getBoundingClientRect().height,
                                        u = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                    u.setAttribute("fill", "rgba(255,255,255, 0.5)"),
                                        u.setAttribute(
                                            "d",
                                            Be(
                                                n,
                                                (e) => (o / (n.length - 1)) * e,
                                                (e) => c - e * c,
                                            ),
                                        ),
                                        (a.innerHTML = ""),
                                        a.appendChild(u);
                                };
                            return (
                                r(),
                                document.addEventListener("fullscreenchange", r),
                                () => {
                                    document.removeEventListener("fullscreenchange", r);
                                }
                            );
                        }, [e]),
                        r.createElement("svg", { height: "6vh", ref: t })
                    );
                },
                Be = (e, t, a) => {
                    const r = ["M", t(0), a(e[0])];
                    for (let n = 0; n < e.length - 1; n++) {
                        const l = n > 0 ? e[n - 1] : e[n],
                            s = e[n],
                            i = e[n + 1],
                            o = n < e.length - 2 ? e[n + 2] : e[n + 1];
                        for (let e = 0; e < 1; e += 0.05) {
                            const c = a(0.5 * (2 * s + (-l + i) * e + (2 * l - 5 * s + 4 * i - o) * e * e + (3 * s - l - 3 * i + o) * e * e * e));
                            r.push("L", t(n + e), c);
                        }
                    }
                    return r.push("L", t(e.length - 1), a(e[e.length - 1])), r.push("L", t(e.length - 1), a(0)), r.push("L", t(0), a(0)), r.push("Z"), r.join(" ");
                },
                Ie = ({ barData: e }) => r.createElement(n.Z, { style: R.ZP.viewCountGraph }, r.createElement(Re, { data: e })),
                Te = /^https?:\/\/(?:www.)?(?:periscope|pscp).tv/,
                De = s().j25d7cca,
                Me = s().a858b25c,
                xe = s().faf9f484,
                Ae = s().ae2ea9e7,
                Fe = s().hea01798,
                Oe = s().f8a09386,
                ze = s().gf2b6eee,
                Ne = s().j190bf1a,
                Ve = "ControlBar-",
                He = { CAPTIONS: `${Ve}Captions`, FULLSCREEN: `${Ve}Fullscreen`, PERISCOPE: `${Ve}Periscope`, PICTURE_IN_PICTURE: `${Ve}PictureInPicture`, SETTING: `${Ve}Setting` },
                Qe = (e) => e === B.c.narrow || e === B.c.veryNarrow,
                Ue = r.createElement(i.default, { style: R.ZP.notLiveCircle }),
                $e = r.createElement(i.default, { style: R.ZP.liveCircle });
            class Ge extends r.PureComponent {
                constructor(e) {
                    if (
                        (super(e),
                        (this.state = { currentBreakpoint: B.c.wide, showScrubber: !0, scrubTime: 0, scrubberHovered: !1 }),
                        (this._parentRef = r.createRef()),
                        (this._renderActionButton = (e, t) => {
                            const { controls: a, isPlaying: n } = t,
                                { pause: l, play: s, replay: i } = e,
                                { currentBreakpoint: d } = this.state,
                                h = (0, w.Ci)(t),
                                p = Qe(d) ? "small" : "medium";
                            return !h || (h.isLive && !this.props.liveBroadcastRewindEnabled) ? null : n || (a && "PLAY_REQUESTED" === a.playState) ? r.createElement(T.Z, { "aria-label": S.gF, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: r.createElement(o.default, null), onPress: l, size: p }) : a.isReplayButtonShown ? r.createElement(T.Z, { "aria-label": S.Js, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: r.createElement(c.default, null), onPress: i, size: p }) : r.createElement(T.Z, { "aria-label": S.M2, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: r.createElement(u.default, null), onPress: s, size: p });
                        }),
                        (this._renderViewCount = (e) => {
                            const t = (0, w.Ci)(e);
                            if (!t || (t.isLive && this.props.liveBroadcastRewindEnabled)) return null;
                            const a = (0, w.XE)(t);
                            return a ? r.createElement(D.Z, null, a) : null;
                        }),
                        (this._jumpToLive = () => {
                            const { playerApi: e } = this.props;
                            e.scrubToFraction(1);
                        }),
                        (this._isLive = (e) => {
                            const t = (0, w.Ci)(e);
                            if (!t?.isLive) return !1;
                            const a = (0, w.us)(t),
                                { controls: r, isSeeking: n } = e,
                                { scrubToFraction: l } = r,
                                s = n && void 0 !== l && a ? l * a : (0, w.Ov)(t) || 0;
                            return !!a && a - s < 60;
                        }),
                        (this._renderLiveButton = (e) =>
                            r.createElement(_.o, { periodic: !0 }, ({ playerState: e }) => {
                                const t = (0, w.Ci)(e);
                                if (!t || !t.isLive || !this.props.liveBroadcastRewindEnabled) return null;
                                const a = this._isLive(e);
                                return r.createElement(r.Fragment, null, r.createElement(T.Z, { "aria-label": S.kA, icon: a ? $e : Ue, onPress: () => this._jumpToLive() }, r.createElement(f.ZP, { color: a ? "white" : "gray100", size: "subtext1" }, Ne)));
                            })),
                        (this._renderPublisherAttribution = (e) => {
                            const { publisherDisplayName: t, publisherProfileImageUrl: a } = this.props,
                                l = (0, w.Ci)(e);
                            return t && a && l ? r.createElement(n.Z, { style: R.ZP.flex }, r.createElement(n.Z, { style: [R.ZP.withMargin, R.ZP.flex] }, r.createElement(E.Z, { color: "white", name: t, profileImageUrl: a }))) : null;
                        }),
                        (this._renderMiddot = (e) => {
                            const { publisherDisplayName: t, publisherProfileImageUrl: a } = this.props,
                                n = (0, w.Ci)(e);
                            return !n || !t || !a || (!n.viewCount && !n.viewerCount) || (n.isLive && this.props.liveBroadcastRewindEnabled) ? null : r.createElement(D.Z, null, "·");
                        }),
                        (this._renderAdBadge = (e) => {
                            const t = (0, w.Ci)(e),
                                { currentBreakpoint: a } = this.state;
                            if (t && t.displayType === P.ak.AD) {
                                const { advertiserName: e } = t;
                                return r.createElement(D.Z, { style: Qe(a) && { fontSize: v.default.theme.fontSizes.subtext2 } }, e ? Ae({ advertiserName: e }) : xe);
                            }
                            return null;
                        }),
                        (this._renderFullScreenButton = (e, t) => {
                            const { fullscreenAdsDisabledOnIOS: a } = this.props,
                                n = (0, w.Ci)(t),
                                l = n?.displayType === P.ak.AD && g.ZP.isIOS(),
                                { fullscreen: s } = t,
                                { currentBreakpoint: i } = this.state,
                                o = this._fullScreenIcon,
                                c = Qe(i) ? "small" : "medium";
                            return a && l ? null : s.isFullscreen ? r.createElement(T.Z, { "aria-label": S.iG, hoverLabelPreferredHorizontalOrientation: "start", hoverLabelWithExtraSpace: this.props.showScrubber, icon: r.createElement(o, { isFullscreen: s.isFullscreen }), onPress: this._exitFullScreen(e), size: c }) : r.createElement(T.Z, { "aria-label": S.lO, hoverLabelPreferredHorizontalOrientation: "start", hoverLabelWithExtraSpace: this.props.showScrubber, icon: r.createElement(o, { isFullscreen: s.isFullscreen }), onPress: this._requestFullScreen(e), size: c });
                        }),
                        (this._renderPictureInPictureButton = (e) => {
                            const { currentBreakpoint: t } = this.state,
                                a = Qe(t) ? "small" : "medium";
                            return r.createElement(T.Z, { "aria-label": ze, icon: r.createElement(d.default, null), onPress: this._togglePictureInPicture(e), size: a });
                        }),
                        (this._togglePictureInPicture = (e) => () => {
                            e.unmute(), e.togglePiPMode();
                        }),
                        (this._fullScreenIcon = ({ isFullscreen: e, style: t }) => {
                            const { hidden: a, shown: n } = je;
                            return r.createElement(r.Fragment, null, r.createElement(h.default, { style: e ? a : n }), r.createElement(p.default, { style: e ? n : a }));
                        }),
                        (this._requestFullScreen = (e) => () => {
                            e.fullScreen(this.props.containerRef);
                        }),
                        (this._exitFullScreen = (e) => () => e.exitFullScreen()),
                        (this._renderScrubber = (e) =>
                            this.props.showScrubber && this.state.showScrubber
                                ? r.createElement(
                                      n.Z,
                                      { onMouseEnter: () => this.setState({ scrubberHovered: !0 }), onMouseLeave: () => this.setState({ scrubberHovered: !1 }), style: R.ZP.scrubber, testID: "scrubber" },
                                      r.createElement(_.o, { periodic: !0 }, ({ playerState: t }) => {
                                          const a = (0, w.Ci)(t),
                                              n = (0, w.MU)(a),
                                              l = this._isLive(t) ? n : (0, w.Ot)(a);
                                          return r.createElement(L.Z, { "aria-label": Fe, currentTime: l, duration: n, isScrubbing: t.isScrubbing, isSeeking: t.isSeeking, playerApi: e });
                                      }),
                                  )
                                : null),
                        (this._downsampleArray = (e, t) => {
                            const a = Math.ceil(e.length / t),
                                r = [];
                            for (let t = 0; t < e.length; t += a) {
                                const n = Math.min(t + a, e.length),
                                    l = e.slice(t, n),
                                    s = l.reduce((e, t) => e + t || 0, 0) / l.length;
                                r.push(s);
                            }
                            return r;
                        }),
                        (this._getBroadcastViewData = (e) => {
                            const t = (0, w.Ci)(e);
                            if (!t) return;
                            const { durationMs: a, viewCountGraphData: r } = t;
                            if (!r) return;
                            const n = Math.round(a / 1e3),
                                l = r.slice(0, n);
                            if (n > l.length) {
                                const e = n - l.length,
                                    t = Array.from({ length: e }).map(() => l[l.length - 1]);
                                return [...l, ...t];
                            }
                            return l;
                        }),
                        (this._renderViewCountGraph = (e) => {
                            if (this.state.scrubberHovered) {
                                const t = this._getBroadcastViewData(e);
                                if (!t) return null;
                                const a = this._downsampleArray(t, t.length / 5);
                                return r.createElement(Ie, { barData: a });
                            }
                        }),
                        (this._renderVolume = (e, t) => {
                            const { isMuted: a, volume: n } = t,
                                { mute: l, setVolume: s, unmute: i } = e,
                                { containerHeight: o, currentBreakpoint: c } = this.state,
                                u = a ? i : l,
                                d = a ? S.cm : S.GS;
                            return r.createElement(k.Z, { accessibilityLabelIcon: d, accessibilityLabelSlider: S.Nj, containerHeight: o, isMuted: a, onHideSlider: this._showScrubberHandler(!0), onMuteToggle: u, onShowSlider: this._showScrubberHandler(!1), onSliderChange: this._setVolumePercent(s), size: Qe(c) ? "small" : "medium", volumePercent: 100 * n });
                        }),
                        (this._renderCaptionsButton = (e, t) => {
                            const a = (0, w.Ci)(t);
                            if (a && a.hasCaptions) {
                                const { currentBreakpoint: a } = this.state,
                                    { areCaptionsShown: n } = t,
                                    { toggleCaptions: l } = e;
                                return r.createElement(T.Z, { "aria-label": n ? De : Me, hoverLabelWithExtraSpace: this.props.showScrubber, icon: n ? r.createElement(m.default, null) : r.createElement(b.default, null), onPress: l, size: Qe(a) ? "small" : "medium", testID: "captions" });
                            }
                        }),
                        (this._renderTimePlayed = () =>
                            r.createElement(_.o, { periodic: !0 }, ({ playerState: e }) => {
                                if (this._isLive(e) && !e.isSeeking && !e.isScrubbing) return null;
                                const { currentBreakpoint: t } = this.state,
                                    a = (0, w.Ci)(e),
                                    n = (0, w.Ov)(a),
                                    l = (0, w.us)(a),
                                    { controls: s, isSeeking: i } = e,
                                    { scrubToFraction: o } = s;
                                let c = i && void 0 !== o && l ? o * l : (0, w.Ov)(a) || 0;
                                if ((s.seekTarget && (c = s.seekTarget), a && "number" == typeof n && l && (!a.isLive || this.props.liveBroadcastRewindEnabled))) {
                                    const e = t === B.c.veryNarrow ? `${(0, w.mr)(l - c)}` : `${(0, w.mr)(c)} / ${(0, w.mr)(l)}`;
                                    return r.createElement(D.Z, { style: Qe(t) && { fontSize: v.default.theme.fontSizes.subtext2 } }, e);
                                }
                                return null;
                            })),
                        (this._renderPeriscopeOrCustomIconLink = (e, t, a) => {
                            const { pause: r } = e,
                                { customControlBarIcon: n } = this.props,
                                l = (0, w.Ci)(t),
                                s = a && a.hidePeriscopeLink,
                                i = l?.broadcastShareUrl;
                            return i && Te.test(i) ? this._renderPeriscopeLink(l, s, r) : n ? this._renderCustomIconLink(n) : void 0;
                        }),
                        (this._renderPeriscopeLink = (e, t, a) =>
                            r.createElement(_.o, { periodic: !0 }, ({ playerState: n }) => {
                                if (e && e.broadcastShareUrl && !e.unavailableInPeriscope && !t) {
                                    const { currentBreakpoint: t } = this.state,
                                        n = new C.Z(e.broadcastShareUrl),
                                        l = (0, w.Ov)(e),
                                        s = (0, w._5)(e);
                                    if (l && l > 0 && !e.isLive) n.addSearchParam("t", l.toString());
                                    else if (e.isLive && s) {
                                        const e = s + (l || 0);
                                        n.addSearchParam("t", e.toString());
                                    }
                                    return r.createElement(T.Z, { "aria-label": Oe, hoverLabelPreferredHorizontalOrientation: "start", hoverLabelWithExtraSpace: this.props.showScrubber, icon: r.createElement(y.default, null), link: { pathname: n.toString(), anchorless: !0 }, onPress: a, size: Qe(t) ? "small" : "medium", testID: "periscopeLink" });
                                }
                            })),
                        (this._renderCustomIconLink = (e) => {
                            const { currentBreakpoint: t } = this.state,
                                a = new C.Z(e.link),
                                n = e.tooltipLabel,
                                l = e.onPress;
                            return r.createElement(T.Z, { "aria-label": n, hoverLabelPreferredHorizontalOrientation: "start", hoverLabelWithExtraSpace: this.props.showScrubber, icon: e.icon, link: { pathname: a.toString(), anchorless: !0 }, onPress: l, size: Qe(t) ? "small" : "medium" });
                        }),
                        (this._showScrubberHandler = (e) => () => this.setState({ showScrubber: e })),
                        (this._setVolumePercent = (e) => (t) => {
                            e(t / 100);
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: a } = e.nativeEvent.layout,
                                { currentBreakpoint: r } = this.state,
                                { hideControls: n, playerApi: l, playerState: s } = this.props;
                            if (l) {
                                let e = 0;
                                (e = n ? (s?.isPreview ? v.default.theme.spacesPx.space40 : v.default.theme.spacesPx.space12) : t), this.props.playerApi.setCaptionDefaultOffset({ bottom: e });
                            }
                            const i = this._convertWidthToBreakpoint(a);
                            i !== r && this.setState((e) => ({ currentBreakpoint: i }));
                        }),
                        (this._convertWidthToBreakpoint = (e) => {
                            let t;
                            return e > B.U.wide ? (t = B.c.wide) : e < B.U.veryNarrow ? (t = B.c.veryNarrow) : e < B.U.narrow && (t = B.c.narrow), t;
                        }),
                        e.containerRef)
                    ) {
                        const { height: t, width: a } = e.containerRef.getBoundingClientRect();
                        this.state = { ...this.state, currentBreakpoint: this._convertWidthToBreakpoint(a), containerHeight: t };
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return e.hideControls ? { ...t, showScrubber: !0 } : t;
                }
                render() {
                    const { hideControls: e, playerApi: t, playerDisplayOptions: a, playerState: l } = this.props,
                        { currentBreakpoint: s } = this.state;
                    return t && l ? r.createElement(Z.Z.ObserverContext.Consumer, null, (i) => r.createElement(n.Z, { onLayout: this._handleLayout, pointerEvents: "auto", ref: this._parentRef, style: R.i3 }, r.createElement(I.Z, { actionButton: this._renderActionButton(t, l), displayDismissableControls: !e, leftContent: r.createElement(r.Fragment, null, this._renderAdBadge(l), this._renderPublisherAttribution(l), s === B.c.wide ? this._renderMiddot(l) : null, s === B.c.wide ? this._renderViewCount(l) : null, s === B.c.wide ? this._renderLiveButton(l) : null), rightContent: r.createElement(r.Fragment, null, this._renderTimePlayed(), r.createElement(i, { focus: !0, interactionKey: He.CAPTIONS, interactionTimeoutMs: 0, mouseover: !0 }, this._renderCaptionsButton(t, l)), this._renderVolume(t, l), r.createElement(i, { focus: !0, interactionKey: He.PERISCOPE, interactionTimeoutMs: 0, mouseover: !0 }, this._renderPeriscopeOrCustomIconLink(t, l, a)), r.createElement(i, { focus: !0, interactionKey: He.SETTING, interactionTimeoutMs: 0, mouseover: !0 }, r.createElement(Le, { isNarrow: Qe(s), playerApi: t, playerState: l })), document.pictureInPictureEnabled && this.props.enablePiP ? r.createElement(i, { focus: !0, interactionKey: He.PICTURE_IN_PICTURE, interactionTimeoutMs: 0, mouseover: !0 }, this._renderPictureInPictureButton(t)) : null, r.createElement(i, { focus: !0, interactionKey: He.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 }, this._renderFullScreenButton(t, l))), scrubber: this._renderScrubber(t), skipButton: r.createElement(z, { useRefactoredLayout: !0 }), viewCountGraph: this._renderViewCountGraph(l) }))) : null;
                }
            }
            Ge.defaultProps = { showScrubber: !0 };
            const Ke = Ge,
                je = { hidden: { display: "none" }, shown: { display: "block" } };
            function We(e) {
                return r.createElement(Ke, e);
            }
        },
        7632: (e, t, a) => {
            a.d(t, { X: () => n });
            const r = Object.freeze([
                { label: "Orange", value: "rgb(245, 166, 35)" },
                { label: "Purple", value: "rgb(171, 112, 212)" },
                { label: "Green", value: "rgb(153, 206, 98)" },
                { label: "Periwinkle", value: "rgb(92, 117, 220)" },
                { label: "Red", value: "rgb(213, 77, 129)" },
                { label: "Yellow", value: "rgb(222, 213, 105)" },
                { label: "Teal", value: "rgb(94, 213, 177)" },
                { label: "Pink", value: "rgb(230, 151, 220)" },
                { label: "Brown", value: "rgb(146, 100, 62)" },
                { label: "VividTangerine", value: "rgb(255, 169, 138)" },
                { label: "SkyBlue", value: "rgb(132, 225, 235)" },
                { label: "Fern", value: "rgb(105, 171, 99)" },
                { label: "Carnation", value: "rgb(248, 91, 91)" },
            ]);
            function n(e) {
                const t = (e - 1) % r.length;
                return (r[t] || r[0]).value;
            }
        },
        840940: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                n = a(325686);
            function l({ color: e }) {
                const t = { backgroundColor: e };
                return r.createElement(r.Fragment, null, r.createElement(n.Z, { style: [s.overlay, t] }), r.createElement(n.Z, { style: [s.overlay, s.blackOverlay] }));
            }
            const s = a(392237).default.create((e) => ({ overlay: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.translucentBlack77 }, blackOverlay: { backgroundColor: "rgba(0,0,0,0.2)" } }));
        },
        822682: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                n = a(325686),
                l = a(992942),
                s = a(392237),
                i = a(707816),
                o = a(794294);
            function c({ profileImageUrl: e = u, ...t }) {
                const a = (0, i.M8)(t.size),
                    s = { ...a, transform: [{ scale: `${t.scale}` }] };
                return r.createElement(n.Z, { style: [s, o.Z.transitionTransform, d.scalingAvatar] }, r.createElement(l.Z, { defaultSource: u, source: e, style: a }));
            }
            const u = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                d = s.default.create((e) => ({ scalingAvatar: { position: "absolute", borderRadius: e.borderRadii.infinite, overflow: "hidden" } }));
        },
        542610: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(111677),
                l = a.n(n),
                s = a(2138),
                i = a(173739),
                o = a(424713);
            const c = l().f06f2e53;
            class u extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleChange = (e) => {
                            this.setState({ scrubTo: e }), (this.scheduledSeekTargetSec = e), this._throttledPlayerSeek();
                        }),
                        (this._throttledPlayerSeek = (0, s.Z)(
                            () => {
                                const { scheduledSeekTargetSec: e } = this,
                                    { duration: t, playerApi: a } = this.props;
                                if (t) {
                                    const r = e / t;
                                    a.scrubToFraction(r);
                                }
                            },
                            50,
                            { leading: !0, trailing: !0 },
                        )),
                        (this._handleActive = (e) => (!this.state.isScrubbing && e && document.addEventListener("click", this._handleCaptureClick, !0), e ? this.props.playerApi.setScrubbing(e) : this._throttledPlayerSeek.flush(), this.setState({ isScrubbing: e }))),
                        (this._handleCaptureClick = (e) => {
                            e.preventDefault(), e.stopPropagation(), document.removeEventListener("click", this._handleCaptureClick, !0);
                        }),
                        (this.state = { isScrubbing: !1, scrubTo: 0 });
                }
                render() {
                    const { "aria-label": e, currentTime: t, duration: a } = this.props,
                        n = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : t;
                    if ("number" == typeof n && "number" == typeof a && a > 0) {
                        const t = (0, o.mr)(n),
                            l = (0, o.mr)(a);
                        return r.createElement(i.Z, { accessibilityLabelValueText: c({ currentTime: t, durationTime: l }), "aria-label": e, color: "white", keepLTR: !0, keyboardStep: 5, max: a, min: 0, onActive: this._handleActive, onChange: this._handleChange, step: "any", value: n, withHidingThumb: !0 });
                    }
                    return null;
                }
            }
            const d = u;
        },
        185737: (e, t, a) => {
            a.d(t, { Z: () => g });
            var r = a(202784),
                n = a(111677),
                l = a.n(n),
                s = a(630715),
                i = a(154003),
                o = a(392237),
                c = a(591354),
                u = a(424713),
                d = a(251478),
                h = a(890328);
            const p = l().a681babd,
                m = l().db3cd325;
            class b extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._buildMessage = (e) => {
                            const { playerState: t } = this.props,
                                a = t && (0, u.Ci)(t);
                            if (a && a.displayType === d.ak.AD) {
                                const { advertiserName: t } = a;
                                switch (e.type) {
                                    case d.Eq.watch_now:
                                        return t ? (0, c.Pr)({ advertiserName: t }) : c.iX;
                                    case d.Eq.shop:
                                        return t ? (0, c.LH)({ advertiserName: t }) : c.st;
                                    case d.Eq.see_more:
                                        return t ? (0, c.SH)({ advertiserName: t }) : c.C5;
                                    case d.Eq.go_to:
                                        return t ? (0, c._3)({ advertiserName: t }) : c.cB;
                                    case d.Eq.visit_site:
                                    default:
                                        return t ? (0, c.L7)({ advertiserName: t }) : c.PN;
                                }
                            }
                            const r = new h.Z(e.url).getHostname(),
                                n = 0 === r.indexOf("www.") ? r.substr(4) : r;
                            switch (e.type) {
                                case d.$2.WATCH:
                                    return p({ trimmedHostname: n });
                                case d.$2.VISIT:
                                default:
                                    return m({ trimmedHostname: n });
                            }
                        }),
                        (this._handlePress = (e, t) => () => {
                            e.callToActionClicked(), window.open(t.url, "_blank");
                        });
                }
                componentDidMount() {
                    const { playerApi: e, playerState: t } = this.props,
                        a = t && (0, u.Ci)(t);
                    a && a.cta && e && e.callToActionImpression();
                }
                render() {
                    const { playerApi: e, playerState: t } = this.props;
                    if (!t || !e) return null;
                    const a = (0, u.Ci)(t);
                    if (a && a.cta) {
                        const t = a.cta,
                            n = this._buildMessage(t);
                        return r.createElement(i.ZP, { "aria-label": n, icon: r.createElement(s.default, null), onPress: this._handlePress(e, t), style: y.root, type: "onMediaDominantColorFilled" }, n);
                    }
                    return null;
                }
            }
            const y = o.default.create((e) => ({ root: { position: "absolute", start: e.spaces.space12, top: e.spaces.space12 } })),
                g = b;
        },
        986460: (e, t, a) => {
            a.d(t, { GS: () => c, Js: () => s, M2: () => i, Nj: () => d, cm: () => u, gF: () => l, iG: () => p, kA: () => o, lO: () => h });
            var r = a(111677),
                n = a.n(r);
            const l = n().fb236728,
                s = n().e9bd453e,
                i = n().f17dfdb6,
                o = n().d46b00b0,
                c = n().ec8ab8b4,
                u = n().b8b6344a,
                d = n().c9a642fa,
                h = n().c27e60b0,
                p = n().d2969f10;
        },
        890328: (e, t, a) => {
            a.d(t, { Z: () => r });
            a(543673), a(240753), a(128399);
            const r = class {
                constructor(e) {
                    try {
                        this.parser = new URL(e);
                    } catch (t) {
                        (this.parser = document.createElement("a")), (this.parser.href = e);
                    }
                }
                getHostname() {
                    return this.parser.hostname;
                }
                getPath() {
                    return this.parser.pathname;
                }
                isSafe() {
                    return !!this.parser.protocol.match(/^https?:$/);
                }
                addSearchParam(e, t) {
                    this.parser.search ? (this.parser.search = `${this.parser.search}&${e}=${t}`) : (this.parser.search = `?${e}=${t}`);
                }
                toString() {
                    return this.parser.href;
                }
            };
        },
        867703: (e, t, a) => {
            a.d(t, { Z: () => v });
            a(136728);
            var r = a(202784),
                n = a(111677),
                l = a.n(n),
                s = a(715614),
                i = a(731708),
                o = a(868634),
                c = a(819329),
                u = a(392237),
                d = a(424713),
                h = a(251478),
                p = a(506707),
                m = a(197765);
            const b = l().ed617674,
                y = l().j190bf1a;
            class g extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderLeftBadges = (e) => {
                            const { additionalBadges: t, mediaAccessibilityLabel: a, playerApi: n } = this.props,
                                l = [],
                                s = (0, d.Ci)(e);
                            if ((s?.contentType === h.wF.GIF && (e && l.push(r.createElement(o.ZP, { key: "play-pause", pointerEvents: "auto", style: f.playLabel }, r.createElement(p.Z, { playerApi: n, playerState: e }))), l.push(r.createElement(o.ZP, { bold: !0, key: "gif", type: "gif" }))), a && l.push(r.createElement(o.ZP, { altLabel: a, bold: !0, key: "alt" })), 0 === l.length)) {
                                const a = [this._renderDurationBadge(e), this._renderViewerCountBadge(e)].concat(t).filter(Boolean);
                                l.push(...a);
                            }
                            return l.length > 0 ? l : null;
                        }),
                        (this._renderRightBadges = (e) => {
                            const t = [this._renderTimecodeBadge(e), this._render360Badge(e)].concat(this.props.additionalBadges).filter(Boolean);
                            return t.length > 0 ? t : null;
                        }),
                        (this._renderTopRightBadges = (e) => {
                            const t = (0, d.Ci)(e),
                                { playerDisplayOptions: a } = this.props;
                            if (!t || !a || !a?.showHDBadge) return null;
                            const { videoHeight: n, videoWidth: l } = t,
                                s = Math.min(n || 0, l || 0);
                            return !isNaN(s) && s > h.CX ? r.createElement(o.ZP, { bold: !0, key: "hd", type: "hd" }) : void 0;
                        }),
                        (this._render360Badge = (e) => {
                            const t = (0, d.Ci)(e);
                            if (t && t.is360) return r.createElement(o.ZP, { key: "360-badge" }, b);
                        }),
                        (this._renderTimecodeBadge = (e) => {
                            const t = (0, d._5)((0, d.Ci)(e));
                            if (t && t >= 1) return r.createElement(o.ZP, { key: "timecode-badge" }, r.createElement(i.ZP, null, r.createElement(s.default, { style: f.timecodeIcon }), (0, d.mr)(t)));
                        }),
                        (this._renderDurationBadge = (e) => {
                            const { playerDisplayOptions: t } = this.props;
                            if (t && t.badgeConfiguration && t.badgeConfiguration.hideDuration) return null;
                            const a = (0, d.sI)(e);
                            return a && a.isLive ? r.createElement(o.ZP, { key: "live-badge", type: "live" }, y) : r.createElement(o.ZP, { key: "time-badge" }, r.createElement(m.Z, { key: "time-badge-time" }));
                        }),
                        (this._renderViewerCountBadge = (e) => {
                            const { playerDisplayOptions: t } = this.props;
                            if (t && t.badgeConfiguration && t.badgeConfiguration.hideViewCount) return null;
                            const a = (0, d.xB)(e),
                                n = a && (0, d.XE)(a);
                            return n ? r.createElement(o.ZP, { key: "viewer-count-badge" }, n) : null;
                        });
                }
                render() {
                    const { playerState: e, position: t, show: a } = this.props;
                    if (!e || !a) return null;
                    let n;
                    switch (t) {
                        case "left":
                            n = this._renderLeftBadges(e);
                            break;
                        case "right":
                            n = this._renderRightBadges(e);
                            break;
                        case "topRight":
                            n = this._renderTopRightBadges(e);
                    }
                    return n ? r.createElement(c.Z, { align: t }, n) : null;
                }
            }
            g.defaultProps = { show: !0 };
            const f = u.default.create((e) => ({ root: { position: "relative" }, playLabel: { flexDirection: "row", paddingHorizontal: 0, paddingVertical: 0 }, rightBadges: { position: "absolute", end: e.spaces.space12, bottom: e.spaces.space12 }, leftBadges: { position: "absolute", start: e.spaces.space12, bottom: e.spaces.space12 }, timecodeIcon: { marginEnd: e.spaces.space2, marginBottom: e.spaces.space1, height: "1em" } })),
                v = g;
        },
        971765: (e, t, a) => {
            a.d(t, { Z: () => p });
            var r = a(202784),
                n = a(325686),
                l = a(111677),
                s = a.n(l),
                i = a(392237),
                o = a(230966),
                c = a(707816);
            const u = i.default.create((e) => ({ root: { userSelect: "none", overflow: "hidden", justifyContent: "center", alignItems: "center" } })),
                d = function ({ "aria-label": e, ...t }) {
                    const { size: a } = t,
                        l = { ...(0, c.M8)(a) };
                    return r.createElement(n.Z, { "aria-label": e, style: [l, u.root] }, r.createElement(o.Z, t));
                },
                h = s().d2c96140;
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { dimensions: { width: 0, height: 0 } }),
                        (this._renderGuests = (e, t) => {
                            const a = Object.keys(e.guests).map((t) => {
                                    const a = e.audioLevels.guests[t] || 0;
                                    return { ...e.guests[t], AudioLevel: a / 100 };
                                }),
                                { dimensions: l } = this.state;
                            if (!l.width || !a.length) return null;
                            const s = 0.1875 * l.width;
                            return r.createElement(
                                n.Z,
                                { style: m.guestIndicators },
                                a.map((e) => r.createElement(n.Z, { key: e.ParticipantIndex, style: m.guestIndicator }, r.createElement(d, { "aria-label": h, audioLevel: e.AudioLevel, participantIndex: e.ParticipantIndex, paused: !t.isPlaying, profileImageUrl: e.ProfileUrl, size: s }))),
                            );
                        }),
                        (this._handleLayout = (e) => {
                            this.setState(
                                ((e) => () => {
                                    const { height: t, width: a } = e.nativeEvent.layout;
                                    return { dimensions: { width: a, height: t } };
                                })(e),
                            );
                        });
                }
                render() {
                    const { guestsState: e, playerState: t } = this.props;
                    return e && e.guests && t ? r.createElement(n.Z, { onLayout: this._handleLayout, pointerEvents: "none", style: m.overlay }, this._renderGuests(e, t)) : null;
                }
            }
            const m = i.default.create((e) => ({ overlay: { ...i.default.absoluteFillObject, flexGrow: 1 }, guestIndicators: { marginTop: e.spaces.space20, marginStart: e.spaces.space20, flexDirection: "row" }, guestIndicator: { marginEnd: e.spaces.space16 } }));
        },
        197765: (e, t, a) => {
            a.d(t, { Z: () => y });
            var r = a(807896),
                n = a(202784),
                l = a(111677),
                s = a.n(l),
                i = a(731708),
                o = a(392237),
                c = a(738584),
                u = a(424713),
                d = a(251478);
            const h = s().f1ad0df1,
                p = s().ef16ab2b,
                m = n.memo(
                    ({ playerState: e, style: t }) => {
                        const a = n.useMemo(() => [b.label, t], [t]),
                            r = ((e) => {
                                const t = (0, u.Ci)(e);
                                if (!t) return null;
                                const { advertiserName: a, currentTimeMs: r, displayType: n, durationMs: l } = t;
                                if (l && (e.isPlaying || r < l)) {
                                    const e = (0, u.mr)((l - r) / 1e3);
                                    return n === d.ak.AD ? (a ? p({ advertiserName: a, timeRemaining: e }) : h({ timeRemaining: e })) : e;
                                }
                                return l ? (0, u.mr)(l / 1e3) : null;
                            })(e);
                        return r ? n.createElement(i.ZP, { style: a }, r) : null;
                    },
                    function (e, t) {
                        const a = (0, u.Ci)(e.playerState),
                            r = (0, u.Ci)(t.playerState);
                        if (!r || !a) return !1;
                        if (["advertiserName", "durationMs", "displayType"].some((e) => r[e] !== a[e])) return !1;
                        const n = (e) => e && (0, u.mr)((e.durationMs - e.currentTimeMs) / 1e3);
                        return !(n(a) !== n(r));
                    },
                ),
                b = o.default.create((e) => ({ label: { fontVariantNumeric: "tabular-nums" } })),
                y = (e) => n.createElement(c.o, { periodic: !0 }, ({ playerState: t }) => n.createElement(m, (0, r.Z)({}, e, { playerState: t })));
        },
        506707: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(807896),
                n = a(202784),
                l = a(643442),
                s = a(737691),
                i = a(466445),
                o = a(530732),
                c = a(392237),
                u = a(986460),
                d = a(424713);
            const h = { preferredVerticalOrientation: "up", preferredHorizontalOrientation: "end", withLayer: !1, withExtraSpace: !1 },
                p = { ...h, label: u.M2 },
                m = { ...h, label: u.gF },
                b = { ...h, label: u.Js },
                y = ({ iconStyle: e, liveBroadcastRewindEnabled: t, playerApi: a, playerState: c, style: h, ...y }) => {
                    const f = n.useMemo(() => [g.playButton, h], [h]),
                        v = n.useMemo(() => [g.playIcon, e], [e]);
                    if (!c || !a) return null;
                    const { controls: E, isPlaying: k } = c,
                        { pause: S, play: w, replay: P } = a,
                        C = (0, d.Ci)(c);
                    if (!C || (C.isLive && !t)) return null;
                    let _;
                    return (_ = k || (E && "PLAY_REQUESTED" === E.playState) ? { "aria-label": u.gF, children: n.createElement(l.default, { style: v }), hoverLabel: m, onPress: S } : E.isReplayButtonShown ? { "aria-label": u.Js, children: n.createElement(s.default, { style: v }), hoverLabel: b, onPress: P } : { "aria-label": u.M2, children: n.createElement(i.default, { style: v }), hoverLabel: p, onPress: w }), n.createElement(o.Z, (0, r.Z)({}, y, _, { style: f }));
                },
                g = c.default.create((e) => ({ playButton: { padding: e.spaces.space4 }, playIcon: { height: e.spaces.space12, width: e.spaces.space12 } })),
                f = n.memo(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI.b591cb1a.js.map
