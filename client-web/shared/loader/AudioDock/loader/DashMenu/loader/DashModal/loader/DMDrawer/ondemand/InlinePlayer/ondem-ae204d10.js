"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"],
    {
        966886: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var n = a(202784),
                r = a(726499),
                l = a(111677),
                i = a.n(l),
                o = a(731708),
                c = a(392237);
            const s = 3600,
                d = 86400,
                u = 2592e3,
                m = 31449600,
                p = i().ccd32094,
                h = i().abfcce0d,
                f = i().e8733ed9,
                b = i().i3b7a017,
                y = i().be59d8c3,
                g = i().ie5d110f,
                v = i().i3d087db,
                E = i().df5f11b3,
                k = i().ga8d18c9,
                w = i().a91e7d49,
                S = i().id952a69,
                C = i().ga09ab65,
                Z = i().c83b901d,
                x = i().a55b9fed,
                A = i().ccaa970f,
                P = i().jade381b,
                I = i().d725a289;
            class L extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._onAppForegrounded = (e) => {
                            "active" === e && this.forceUpdate();
                        });
                }
                componentDidMount() {
                    this._listener = r.Z.addEventListener("change", this._onAppForegrounded);
                }
                componentWillUnmount() {
                    this._listener?.remove("change", this._onAppForegrounded);
                }
                render() {
                    const { "aria-describedby": e, "aria-label": t, color: a, cutoff: r, humanReadable: l, id: i, link: c, onPress: L, prefix: _, relative: R, size: D, style: B, timestamp: O } = this.props,
                        H = new Date(O),
                        M = !isNaN(H.getTime());
                    if (!M) return null;
                    const z = P(H),
                        W = `${I(H)} · ${z}`,
                        { aria: N, label: j } = M
                            ? ((e, t) => {
                                  const a = Date.now(),
                                      n = Math.floor((a - e) / 1e3),
                                      r = new Date(a).getFullYear(),
                                      l = new Date(e).getFullYear();
                                  if (n <= -5) return { label: A(e), aria: A(e) };
                                  if (n <= 0) return { label: p, aria: p };
                                  if (n < 60) return { label: f(n), aria: h({ amountOfTime: b(n) }) };
                                  if (n < s) {
                                      const e = Math.floor(n / 60);
                                      return { label: y(e), aria: h({ amountOfTime: g(e) }) };
                                  }
                                  if (n < d) {
                                      const e = Math.floor(n / s);
                                      return { label: v(e), aria: h({ amountOfTime: E(e) }) };
                                  }
                                  if (n < u && "years" === t) {
                                      const e = Math.floor(n / d);
                                      return { label: k(e), aria: h({ amountOfTime: w(e) }) };
                                  }
                                  if (n < m && "years" === t) {
                                      const e = Math.floor(n / u);
                                      return { label: S(e), aria: h({ amountOfTime: C(e) }) };
                                  }
                                  if ("years" === t) {
                                      const e = Math.floor(n / m);
                                      return { label: Z(e), aria: h({ amountOfTime: x(e) }) };
                                  }
                                  return l === r ? { label: A(e), aria: A(e) } : { label: P(e), aria: P(e) };
                              })(H, r)
                            : {},
                        F = R ? (l ? N : j) : W,
                        V = R ? N : W;
                    return n.createElement(o.ZP, { "aria-describedby": e, "aria-label": t || V, color: a, hoverLabel: { label: W }, id: i, link: c, onClick: L, size: D, style: [B, T.timestamp], withInteractiveStyling: !!c }, _, n.createElement("time", { dateTime: H.toISOString() }, F));
                }
            }
            L.defaultProps = { color: "gray700", humanReadable: !1, relative: !0 };
            const T = c.default.create((e) => ({ timestamp: { flexShrink: 0, whiteSpace: "nowrap", display: "inline-flex", flexWrap: "wrap", gap: e.spaces.space4 } })),
                _ = L;
        },
        973014: (e, t, a) => {
            a.d(t, { Z: () => g });
            var n = a(202784),
                r = a(325686),
                l = a(111677),
                i = a.n(l),
                o = a(837020),
                c = a(379327),
                s = a(913973),
                d = a(731708),
                u = a(58881),
                m = a(530732),
                p = a(392237),
                h = a(599190);
            const f = { active: i().e557ad8e, expand: i().e3a58c28, remove: i().h517e8d8 };
            class b extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: a, disabled: l, link: i, mode: o, onClick: c, secondaryAction: s, selected: h, style: b, testID: g, text: v } = this.props,
                        E = this._renderIcon(!0, o),
                        k = s && this._renderIcon(!1, s.mode),
                        w = [y.root, a && y.compact, l && y.disabled, h && y.selected, b],
                        S = [y.content, !!E && y.withIcon, !!t && ((a && y.withAvatarImageCompact) || y.withAvatarImage)],
                        C = u.Z.generate({ backgroundColor: h ? p.default.theme.colors.primary : "transparent", color: h ? p.default.theme.colors.white : p.default.theme.colors.primary });
                    return n.createElement(r.Z, { style: w, testID: g }, n.createElement(m.Z, { "aria-label": e || (o ? f[o] : ""), disabled: l, interactiveStyles: C, link: i, onPress: c, style: S }, this._renderAvatar(), n.createElement(d.ZP, { color: h ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: y.text, weight: "bold" }, v), E), s ? n.createElement(m.Z, { "aria-label": s["aria-label"] || (s.mode ? f[s.mode] : ""), disabled: l || s.disabled, hoverLabel: { label: s.hoverLabel || (s.mode ? f[s.mode] : "") }, interactiveStyles: C, onPress: this._handleSecondaryClick, style: y.secondaryControl }, n.createElement(r.Z, { style: y.secondaryBorder }, k)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: a } = this.props,
                        r = [y.icon, a && y.iconSelected],
                        l = [y.icon];
                    switch (t) {
                        case h.D.Remove:
                            return n.createElement(o.default, { style: [y.dismissIcon, e && r] });
                        case h.D.Expand:
                            return n.createElement(c.default, { style: e ? r : l });
                        case h.D.Active:
                            return n.createElement(s.default, { style: r });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? n.createElement(r.Z, { style: [y.avatarContainer, t ? y.avatarCompact : y.avatar] }, e) : null;
                }
            }
            b.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const y = p.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                g = b;
        },
        599190: (e, t, a) => {
            a.d(t, { D: () => n });
            const n = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        954110: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(325686),
                l = a(111677),
                i = a.n(l),
                o = a(731708),
                c = a(96083),
                s = a(392237),
                d = a(451566);
            const u = i().d7e50a66;
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { disabled: t, name: a, onChange: n } = this.props;
                            t || n(a, e);
                        }),
                        (this._renderHelpText = () => {
                            const { helpText: e, learnMoreLabel: t, learnMoreLink: a } = this.props;
                            if (!a) return e;
                            const r = t || u,
                                l = n.createElement(o.ZP, { key: "learnMoreText", link: a }, r);
                            return [e, l ? " " : null, l];
                        });
                }
                render() {
                    const { checked: e, disabled: t, helpText: a, label: l, testID: i, type: s, withBackground: u, withPaddingHorizontal: m } = this.props,
                        h = !!t;
                    return n.createElement(r.Z, { style: [p.root, u && p.background, m && p.paddingHorizontal, h && p.disabled] }, n.createElement(r.Z, { style: p.labelContainer }, "checkbox" === s ? n.createElement(c.Z, { checked: !!e, disabled: h, helpText: this._renderHelpText(), label: l, onChange: this._handleChange, testID: i }) : n.createElement(r.Z, { role: "label" }, n.createElement(r.Z, { style: p.switchContainer }, n.createElement(o.ZP, null, l), n.createElement(d.Z, { onValueChange: this._handleChange, value: !!e })), a ? n.createElement(o.ZP, { color: "gray700", size: "subtext2", style: p.switchHelpText }, this._renderHelpText()) : null)));
                }
            }
            m.defaultProps = { type: "checkbox", withBackground: !0, withPaddingHorizontal: !0 };
            const p = s.default.create((e) => ({ paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, background: { backgroundColor: e.colors.cellBackground }, root: { paddingVertical: e.spaces.space16 }, labelContainer: { justifyContent: "space-between" }, switchContainer: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, switchHelpText: { paddingTop: e.spaces.space12 }, disabled: { opacity: 0.5 } }));
        },
        173739: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(202784),
                r = a(31501),
                l = a(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: a, onDarkBackground: i, thumbLabel: o, value: c, ...s }) => {
                const { direction: d } = (0, l.Z)(),
                    u = { ...s, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: o, onDarkBackground: i, value: [s.min, c], onChange: (e) => a(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return n.createElement(r.Z, u);
            };
        },
        114519: (e, t, a) => {
            a.d(t, { L: () => c });
            var n = a(202784),
                r = a(325686),
                l = a(530732),
                i = a(157635),
                o = a(186061);
            function c(e) {
                const { contentStyle: t, interactiveViewProps: a } = (0, o.yL)(e);
                return n.createElement(l.Z, a, n.createElement(r.Z, { style: t }, n.createElement(i.Z, null)));
            }
        },
        355769: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(325686),
                l = a(254683),
                i = a(392237);
            const o = 100;
            function c(e) {
                const [t, a] = n.useState(1);
                return (
                    n.useEffect(() => {
                        const e = setInterval(() => {
                            a(Math.max(Math.random(), 0.1));
                        }, o);
                        return () => {
                            clearInterval(e);
                        };
                    }, []),
                    n.createElement(r.Z, { style: e.withoutMargin ? void 0 : s.liveSpeakingIndicator }, n.createElement(l.Z, { audioLevel: t, color: e.color || i.default.theme.colors.buttonWhite, size: i.default.theme.spacesPx.space16 }))
                );
            }
            const s = i.default.create((e) => ({ liveSpeakingIndicator: { marginEnd: e.spaces.space12 } }));
        },
        157635: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(325686);
            function l() {
                return n.createElement(r.Z, { style: i.loading });
            }
            const i = a(392237).default.create((e) => ({ loading: { height: "100%" } }));
        },
        561348: (e, t, a) => {
            a.d(t, { ZP: () => ee });
            var n = a(807896),
                r = a(202784),
                l = a(325686),
                i = a(530732),
                o = a(392237),
                c = a(111677),
                s = a.n(c),
                d = a(731708),
                u = a(642153),
                m = a(470397),
                p = a(279046),
                h = a(452505),
                f = a(794215),
                b = a(648347);
            function y(e) {
                return e.state === b.ku.live ? r.createElement(g, e) : e.state === b.ku.scheduled ? r.createElement(v, e) : e.state === b.ku.ended ? r.createElement(E, e) : e.state === b.ku.canceled ? r.createElement(k, e) : e.state === b.ku.replay ? r.createElement(w, e) : null;
            }
            function g(e) {
                const { participants: t, relatedParticipant: a, total: n } = e;
                if (!n || !t) return null;
                const i = t.map((e) => e.avatar_url).filter(Boolean),
                    o = p.Z.formatCountShort(n);
                let c = A.countInThisSpace({ count: o });
                return a?.participant?.display_name && (c = a.isSpeaker ? A.speakerPlusCountListening({ count: o, speaker: a.participant.display_name }) : A.participantPlusCountListening({ count: o, participant: a.participant.display_name })), r.createElement(l.Z, { style: Z.liveContainer }, r.createElement(u.Z, { borderColor: "transparent", style: Z.facePile, userAvatarSize: "medium", userAvatarUrls: i, withIncreasedSpacing: !0 }), r.createElement(S, null, c));
            }
            function v(e) {
                const { scheduledStart: t, totalInterested: a } = e;
                if (!t) return null;
                const { node: n } = (0, h.ZP)(t);
                let l = null;
                return a && (l = A.countInterested({ count: p.Z.formatCountShort(a) })), r.createElement(S, null, r.createElement(m.Z, { color: "white" }, n, a && r.createElement(d.ZP, null, l)));
            }
            function E(e) {
                return r.createElement(S, null, r.createElement(m.Z, { color: "white" }, r.createElement(d.ZP, null, A.ended), e.tunedIn && r.createElement(C, e)));
            }
            function k(e) {
                return r.createElement(S, null, A.canceled);
            }
            function w(e) {
                return e.replayDuration && e.replayStartTime ? r.createElement(S, null, r.createElement(m.Z, { color: "white" }, e.tunedIn && r.createElement(C, e), r.createElement(d.ZP, null, x(new Date(e.replayStartTime))), r.createElement(f.Z, { timeMs: e.replayDuration }))) : null;
            }
            function S({ children: e }) {
                return r.createElement(d.ZP, { color: "white", numberOfLines: 2, size: "subtext1" }, e);
            }
            function C(e) {
                return e.tunedIn ? A.tunedIn({ count: p.Z.formatCountShort(e.tunedIn) }) : null;
            }
            const Z = o.default.create((e) => ({ liveContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, facePile: { marginEnd: e.spaces.space8 } })),
                x = s().ccaa970f,
                A = { ended: s().fbc2003c, canceled: s().h5051dd8, countInThisSpace: s().bb5f91a3, participantPlusCountListening: s().c83eea99, speakerPlusCountListening: s().cdff6cd3, countInterested: s().df006f4f, countJoined: s().c889af33, tunedIn: s().d6f2056f };
            var P = a(868634),
                I = a(823161),
                L = a(366635);
            function T(e) {
                const { community: t, host: a } = e;
                if (!a && !t) return null;
                let n, i, o, c, s, d, u, m;
                return t ? ((i = t.image_url), (n = t.name), (o = void 0), (c = void 0), (d = "square"), (s = !1), (u = void 0), (m = void 0)) : a && ((n = a.display_name), (i = a.avatar_url), (o = a.is_blue_verified), (c = a.is_verified), (u = a.verified_type), (s = !0), (m = a.highlightedLabel)), r.createElement(l.Z, { style: D.hostInfoContainer }, r.createElement(l.Z, { style: D.hostNameContainer }, r.createElement(I.default, { "aria-hidden": !0, borderColor: "white", borderWidth: "small", focusable: !1, hasAdaptiveImage: s, shape: d, size: "medium", style: D.userAvatar, uri: i }), r.createElement(L.Z, { affiliateBadgeInfo: m, color: "white", isBlueVerified: o, isVerified: c, name: n, nameSize: "subtext1", verifiedType: u, weight: "normal", withStackedLayout: !0 })), r.createElement(_, e));
            }
            function _(e) {
                return r.createElement(r.Fragment, null, r.createElement(R, null, e.community ? B.community : B.host), e.audience === b.tz.superFollowersOnly && r.createElement(R, null, B.superFollowersOnly));
            }
            function R(e) {
                return r.createElement(P.ZP, { background: "translucentWhite", style: D.hostInfoLabel }, e.children);
            }
            const D = o.default.create((e) => ({ hostInfoContainer: { flexDirection: "row" }, hostInfoLabel: { marginStart: e.spaces.space8 }, userAvatar: { flexShrink: 0, marginEnd: e.spaces.space4 }, hostNameContainer: { flexDirection: "row", flexWrap: "nowrap", flexShrink: 1, alignItems: "center" } })),
                B = { host: s().f89a5d60, superFollowersOnly: s().ce2cfb36, community: s().df06241c };
            var O = a(157635),
                H = a(404971),
                M = a(293723),
                z = a(405303),
                W = a(466445),
                N = a(643442),
                j = a(154003),
                F = a(355769);
            const V = o.default.create((e) => ({ button: { marginTop: e.spaces.space16 } })),
                $ = { listenLive: s().b03e162a, joined: s().b3d828ee, pause: s().fb236728, play: s().f17dfdb6, playRecording: s().g519ec2a, reminderSet: s().c6000450, setReminder: s().db44ff5c, startNow: s().f7b6346a };
            var q = a(718480);
            function G(e) {
                const { isNarrow: t, isSmall: a, title: n } = e;
                if (!n) return null;
                const l = t || a,
                    { isLong: i, isMedium: o } = (function (e) {
                        const { weightedLength: t } = (0, q.Z)(e);
                        return { isLong: J(t, 45, 70), isMedium: J(t, 25, 44) };
                    })(n);
                let c = l ? "title4" : "title3",
                    s = 2;
                return i ? ((c = l ? "headline2" : "headline1"), (s = 3)) : o && (l ? ((c = "headline1"), (s = 3)) : ((c = "title4"), (s = 2))), r.createElement(d.ZP, { color: "white", numberOfLines: s, size: c, style: U.title, weight: "heavy" }, n);
            }
            function J(e, t, a) {
                return e >= t && e <= a;
            }
            const U = o.default.create((e) => ({ title: { marginVertical: e.spaces.space12 } }));
            function Q() {
                return r.createElement(r.Fragment, null, r.createElement(l.Z, { style: Y.unavailableHeading }, r.createElement(d.ZP, { align: "left", color: "white", numberOfLines: 1 }, K.spaces)), r.createElement(d.ZP, { align: "left", color: "white", weight: "bold" }, K.detailsNotAvailable));
            }
            const Y = o.default.create((e) => ({ unavailableHeading: { marginBottom: e.spaces.space16 } })),
                K = { spaces: s().cc1f75ac, detailsNotAvailable: s().bd08d1b2 };
            var X = a(186061);
            function ee(e) {
                const { borderStyles: t, contentStyle: a, interactiveViewProps: o, isNarrow: c, isSmall: s } = (0, X.yL)(e),
                    { host: d, participants: u, state: m } = e;
                return r.createElement(i.Z, o, r.createElement(l.Z, { style: a, testID: "wrapperView" }, m === b.ku.unavailable ? r.createElement(Q, null) : d && u && m ? r.createElement(te, (0, n.Z)({}, e, { borderStyles: t, isNarrow: c, isSmall: s })) : r.createElement(O.Z, null)));
            }
            function te(e) {
                return r.createElement(r.Fragment, null, r.createElement(T, e), r.createElement(G, e), r.createElement(y, e), r.createElement(ae, e));
            }
            function ae(e) {
                if (e.withoutButton) return null;
                const t = e.button || r.createElement(ee.Button, e);
                return r.createElement(l.Z, { style: ne.buttonContainer }, t);
            }
            ee.getMinHeight = X.Q5;
            const ne = o.default.create((e) => ({ buttonContainer: { justifyContent: "flex-end", flexGrow: 1 } }));
            (ee.Button = function (e) {
                const t = e.state === b.ku.canceled,
                    a = e.state === b.ku.ended,
                    n = e.state === b.ku.live,
                    l = e.state === b.ku.scheduled,
                    i = e.state === b.ku.replay;
                if (t || a) return null;
                let c = $.listenLive,
                    s = "onMediaWhiteFilled",
                    d = r.createElement(F.Z, { color: o.default.theme.colors[j.qh.onMediaWhiteFilled.color] });
                if (n && e.isJoined) (c = $.joined), (s = "onMediaOutlined"), (d = r.createElement(F.Z, { color: o.default.theme.colors.white }));
                else if (l) e.isHost ? ((c = $.startNow), (d = r.createElement(H.default, null))) : e.hasReminderSet ? ((c = $.reminderSet), (d = r.createElement(M.default, null)), (s = "onMediaOutlined")) : ((c = $.setReminder), (d = r.createElement(z.default, null)));
                else if (i) {
                    const t = r.createElement(W.default, null);
                    e.isJoined ? ((d = void 0), (s = "onMediaOutlined"), e.replayIsPlaying ? ((c = $.pause), (d = r.createElement(N.default, null))) : ((c = $.play), (d = t))) : ((c = $.playRecording), (d = t));
                }
                let { onButtonClick: u } = e;
                var m;
                return (
                    u &&
                        ((m = u),
                        (u = (e) => {
                            e.stopPropagation(), e.preventDefault(), "function" == typeof m && m();
                        })),
                    r.createElement(j.ZP, { icon: d, link: e.link, onPress: u, style: V.button, type: s }, c)
                );
            }),
                (ee.StateEnum = b.ku),
                (ee.AudienceEnum = b.tz);
        },
        648347: (e, t, a) => {
            a.d(t, { ku: () => n, tz: () => r });
            a(202784);
            Object.freeze({ Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" });
            const n = Object.freeze({ scheduled: "scheduled", ended: "ended", live: "live", canceled: "canceled", unavailable: "unavailable", replay: "replay" }),
                r = Object.freeze({ general: 0, employeesOnly: 1, superFollowersOnly: 2 });
        },
        186061: (e, t, a) => {
            a.d(t, { Q5: () => h, TZ: () => b, dF: () => f, yL: () => p });
            a(136728);
            var n = a(202784),
                r = a(111677),
                l = a.n(r),
                i = a(976145),
                o = a(295559),
                c = a(483677),
                s = a(977220),
                d = a(452505),
                u = a(392237),
                m = a(648347);
            function p(e) {
                const t = b(e),
                    [a, r] = n.useState(E.largeWidthBreakpoint),
                    l = a < E.largeWidthBreakpoint,
                    i = a < E.dmWidthBreakpoint,
                    o = n.useRef(!0);
                n.useEffect(
                    () => () => {
                        o.current = !1;
                    },
                    [],
                );
                const c = { onClick: void 0, link: void 0 };
                (e.onClick || e.link) &&
                    e.state !== m.ku.unavailable &&
                    (e.onClick
                        ? (c.onClick = e.onClick)
                        : (c.link = (function (e) {
                              let t;
                              "object" == typeof e.link ? (t = { ...e.link, anchorless: !0 }) : "string" == typeof e.link && (t = { pathname: e.link, anchorless: !0 });
                              return t;
                          })(e)));
                const s = f(e),
                    d = h(i);
                return {
                    interactiveViewProps: {
                        "aria-label": y(e),
                        disabled: e.disabled,
                        onLayout: function ({ nativeEvent: e }) {
                            if (!o.current) return;
                            const { width: t } = e.layout;
                            r(t);
                        },
                        style: [g.container, t, c.onClick ? {} : { cursor: "default" }],
                        ...c,
                    },
                    contentStyle: [g.content, { backgroundColor: s, minHeight: d }],
                    isNarrow: l,
                    isSmall: i,
                    borderStyles: t,
                };
            }
            function h(e) {
                return (e ? 220 : 205) * u.default.theme.scaleMultiplier;
            }
            function f(e) {
                const { community: t, palette: a, state: n } = e,
                    { alpha: r, blue: l, green: i, red: d } = t ? (0, o.FP)(t.color) : (0, o.xO)((0, s.ai)().secondary);
                let u,
                    p,
                    h = (0, o.py)({ red: d, green: i, blue: l }),
                    f = r;
                if (a && !t) {
                    const e = c.Z.get(a);
                    e && ((h = e.hsv), (f = 1), (u = 0.5), (p = 0.6));
                }
                return [m.ku.canceled, m.ku.ended, m.ku.unavailable].includes(n) && ((u = 0.1), (p = 0.25)), u && p && ((h.saturation = u), (h.value = p)), (0, o.rb)({ ...(0, o.WE)(h), alpha: f });
            }
            function b(e) {
                const { withSquareBottomBorderRadius: t, withStraightBorders: a } = e;
                let n = v.borderRadius;
                return a ? (n = null) : t && (n = v[t]), n;
            }
            function y(e) {
                const { hasReminderSet: t, participants: a, scheduledStart: n, state: r, title: l } = e,
                    o = e.host?.display_name;
                if (r && r === m.ku.unavailable) return k.detailsNotAvailable;
                if (r && r === m.ku.ended) return l && o ? k.endedA11yWithHostAndTitle({ title: l, host: o }) : k.endedA11y;
                if (r && r === m.ku.canceled) return l && o ? k.canceledA11yWithHostAndTitle({ title: l, host: o }) : k.canceledA11y;
                if (r && r === m.ku.scheduled && n) {
                    const { text: a } = (0, d.ZP)(n),
                        r = t ? k.reminderSet : k.setReminder;
                    return o && l ? (e.isHost ? k.scheduledStartNowAccessibilityLabel({ title: l, scheduledStart: a }) : k.scheduledAccessibilityLabel({ title: l, host: o, action: r, scheduledStart: a })) : k.scheduledAccessibilityLabelWithoutHostAndTitle({ action: r, scheduledStart: a });
                }
                if (r && r === m.ku.replay) return l ? k.playRecordingAccessibilityLabel({ title: l }) : k.playRecording;
                const c = [k.joinASpace],
                    s = Array.isArray(a) && a.length;
                return l && c.push(l), o && c.push(k.hostedBy({ host: o })), s && c.push(k.withOthers({ count: s })), (0, i.Z)(c, !0);
            }
            const g = u.default.create((e) => ({ container: { overflow: "hidden" }, content: { padding: e.spaces.space12 } })),
                v = u.default.create((e) => {
                    const t = e.borderRadii.large,
                        a = e.borderRadii.none;
                    return { borderRadius: { borderRadius: t }, both: { borderRadius: t, borderBottomEndRadius: a, borderBottomStartRadius: a }, left: { borderRadius: t, borderBottomStartRadius: a }, right: { borderRadius: t, borderBottomEndRadius: a } };
                }),
                E = { largeWidthBreakpoint: 343, dmWidthBreakpoint: 270 },
                k = { detailsNotAvailable: l().bd08d1b2, reminderSet: l().c6000450, setReminder: l().db44ff5c, canceledA11yWithHostAndTitle: l().j8b01b27, canceledA11y: l().fda9f48c, endedA11yWithHostAndTitle: l().jf7853f7, endedA11y: l().i1a29920, joinASpace: l().db467ffe, hostedBy: l().i8dc3993, withOthers: l().eb0b05b9, scheduledAccessibilityLabel: l().d19b9f77, scheduledStartNowAccessibilityLabel: l().e679d5d7, scheduledAccessibilityLabelWithoutHostAndTitle: l().ea4258b7, playRecording: l().g519ec2a, playRecordingAccessibilityLabel: l().dcbcaa23 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10.7560c08a.js.map
