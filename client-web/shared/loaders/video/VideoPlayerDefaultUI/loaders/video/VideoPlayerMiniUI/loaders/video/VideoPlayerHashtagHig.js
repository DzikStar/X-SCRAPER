"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"],
    {
        908629: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(202784);
            const n = { transitionDuration: "250ms", transitionProperty: "opacity, height", transitionTimingFunction: "ease", willChange: "opacity" };
            function a({ children: e, show: t }) {
                const [r, a] = o.useState(!t);
                return (
                    o.useEffect(() => {
                        t && r && a(!1);
                    }, [r, t]),
                    o.useMemo(() => {
                        const s = { ...n, opacity: t ? 1 : 0 };
                        return o.createElement(
                            "div",
                            {
                                onTransitionEnd: (e) => {
                                    t || r || a(!0);
                                },
                                style: s,
                            },
                            r ? null : e,
                        );
                    }, [e, t, r])
                );
            }
        },
        364779: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var o = r(202784),
                n = r(325686),
                a = r(111677),
                s = r.n(a),
                i = r(688715),
                l = r(224162),
                c = r(143670),
                u = r(392237),
                d = r(424713),
                p = r(251478);
            const h = s().d26d8730,
                E = s().f1b6bcec;
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { openContextMenu: !1, positionX: 0, positionY: 0 }),
                        (this._handleOpenContextMenu = (e) => (t) => {
                            if ((t.preventDefault(), e?.source?.id && (e.source.type === p.EB.TWEET || e.source.type === p.EB.BROADCAST))) {
                                const e = t.currentTarget.getBoundingClientRect();
                                this.setState({ openContextMenu: !0, positionX: t.clientX - e.left, positionY: t.clientY - e.top });
                            }
                        }),
                        (this._handleCloseContextMenu = () => {
                            this.state.openContextMenu && this.setState({ openContextMenu: !1 });
                        }),
                        (this._handleCopyVideoAddress = () => {
                            document.addEventListener("copy", this._handleCopy), document.execCommand("copy");
                        }),
                        (this._handleCopy = (e) => {
                            const { playerState: t } = this.props,
                                r = t?.source?.id,
                                o = t?.source?.type;
                            r && o && e.clipboardData && (o === p.EB.BROADCAST ? e.clipboardData.setData("text/plain", (0, i.ju)(`https://x.com/i/broadcasts/${r}`)) : o === p.EB.TWEET && e.clipboardData.setData("text/plain", (0, i.ju)(`https://x.com/i/status/${r}`)), e.preventDefault()), document.removeEventListener("copy", this._handleCopy);
                        }),
                        (this._isGif = (e) => {
                            const t = e && (0, d.sI)(e);
                            return t && t.contentType === p.wF.GIF;
                        });
                }
                componentDidMount() {
                    document.addEventListener("click", this._handleCloseContextMenu);
                }
                componentWillUnmount() {
                    document.removeEventListener("click", this._handleCloseContextMenu);
                }
                render() {
                    const { children: e, playerState: t } = this.props,
                        { openContextMenu: r, positionX: a, positionY: s } = this.state,
                        i = this._isGif(t);
                    return o.createElement(l.ZP.Consumer, null, ({ direction: l }) => o.createElement(n.Z, { onClick: this._handleCloseContextMenu, onContextMenu: this._handleOpenContextMenu(t), style: u.default.absoluteFill }, e, r && o.createElement(n.Z, { style: [y.menuWrapper, "rtl" === l ? { top: s, right: a } : { top: s, left: a }] }, o.createElement(c.Z, { actionText: i ? E : h, onClick: this._handleCopyVideoAddress }))));
                }
            }
            const _ = m,
                y = u.default.create((e) => ({ menuWrapper: { borderRadius: e.borderRadii.small, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium, display: "table" } }));
        },
        535814: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(325686),
                a = r(522171),
                s = r(392237),
                i = r(254740);
            const l = function (e) {
                const t = o.useRef(null),
                    { enabled: r, playerApi: l, playerState: c } = e;
                if (!r) return e.children || null;
                const u = (e) => {
                        l && c && (c.isPlaying ? l.pause() : l.play());
                    },
                    d = (e) => {
                        if (l && c) {
                            const t = parseInt(e.key, 10) / 10;
                            l.scrubToFraction(t);
                        }
                    };
                return o.createElement(
                    a.Z,
                    {
                        containerRef: t,
                        enabled: !0,
                        handlers: {
                            [i.Z.K]: u,
                            [i.Z.M]: (e) => {
                                l && c && (c.isMuted ? l.unmute() : l.mute());
                            },
                            [i.Z.Space]: u,
                            [i.Z.C]: (e) => {
                                l && c && l.toggleCaptions();
                            },
                            [i.Z.Home]: (e) => {
                                l && c && l.scrubToFraction(0);
                            },
                            [i.Z[0]]: d,
                            [i.Z[1]]: d,
                            [i.Z[2]]: d,
                            [i.Z[3]]: d,
                            [i.Z[4]]: d,
                            [i.Z[5]]: d,
                            [i.Z[6]]: d,
                            [i.Z[7]]: d,
                            [i.Z[8]]: d,
                            [i.Z[9]]: d,
                            [i.Z.End]: (e) => {
                                l && c && l.scrubToFraction(1);
                            },
                            [i.Z.ArrowLeft]: (e) => {
                                l && c && l.skipBy(-5);
                            },
                            [i.Z.ArrowRight]: (e) => {
                                l && c && l.skipBy(5);
                            },
                        },
                    },
                    o.createElement(n.Z, { focusable: !0, ref: t, style: s.default.absoluteFill }, e.children),
                );
            };
        },
        254740: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = { ArrowDown: "ArrowDown", ArrowUp: "ArrowUp", ArrowLeft: "left", ArrowRight: "right", Enter: "Enter", Escape: "Escape", Space: "space", Tab: "Tab", K: "k", M: "m", C: "c", 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", Home: "home", End: "end" };
        },
        251478: (e, t, r) => {
            r.d(t, { $2: () => o, CX: () => l, EB: () => i, Eq: () => n, ak: () => s, wF: () => a });
            const o = { VISIT: "url", WATCH: "watch" },
                n = { watch_now: "watch_now", visit_site: "visit_site", shop: "shop", see_more: "see_more", go_to: "go_to" },
                a = { MEDIA: "media_entity", GIF: "gif", VMAP: "vmap", BROADCAST: "broadcast" },
                s = { AD: "ad", CONTENT: "content" },
                i = { BROADCAST: "broadcast", DM: "dm", TWEET: "tweet" },
                l = 720;
        },
        424713: (e, t, r) => {
            r.d(t, { Ci: () => M, Fv: () => Z, MU: () => O, Ot: () => T, Ov: () => A, SY: () => g, XE: () => R, _5: () => v, aZ: () => S, c9: () => f, mr: () => w, sI: () => P, us: () => D, xB: () => k, zm: () => I });
            r(136728);
            var o = r(111677),
                n = r.n(o),
                a = r(837880),
                s = r(891198),
                i = r(251478);
            const l = n().i3b7a017,
                c = n().ie5d110f,
                u = n().df5f11b3,
                d = n().a7cd5cf4,
                p = n().b6eb8f6a,
                h = n().dcc2b9b3,
                E = n().hf4ffd4d,
                m = n().f6e90cd7,
                _ = n().e7d191ed,
                y = n().daa73df1,
                R = (e) => {
                    const { viewerCount: t } = e;
                    return t || 0 === t ? y({ viewerCount: ((r = t), "number" == typeof r ? (0, s.wl)(r) : r) }) : null;
                    var r;
                },
                f = (e) => {
                    if (!e) return "";
                    return (({ durationSeconds: e, isBroadcast: t, isLive: r, timecode: o, videoTrack: n } = {}) => {
                        const a = [],
                            s = t || r ? p : d,
                            i = r ? E : h;
                        if ((a.push(i({ locVideoType: s })), "number" == typeof e && e && !r)) {
                            const { hoursWord: t, minutesWord: r, secondsWord: o } = b(e);
                            a.push(m({ hoursWord: t, minutesWord: r, secondsWord: o }));
                        }
                        if ("number" == typeof o && o) {
                            const { hoursWord: e, minutesWord: t, secondsWord: r } = b(o);
                            a.push(_({ hoursWord: e, minutesWord: t, secondsWord: r }));
                        }
                        const l = n && R(n);
                        return l && a.push(l), a.join(". ");
                    })({ isLive: e.isLive, isBroadcast: e.contentType === i.wF.BROADCAST, durationSeconds: D(e), timecode: v(e), videoTrack: e });
                },
                b = (e) => {
                    const { hours: t, minutes: r, seconds: o } = W(e),
                        n = { hoursWord: "", minutesWord: "", secondsWord: "" };
                    return 0 === o && 0 === r && 0 === t && 0 === r ? ((n.secondsWord = l(0)), n) : ((n.hoursWord = t > 0 ? u(t) : ""), (n.minutesWord = r > 0 ? c(r) : ""), (n.secondsWord = o > 0 ? l(o) : ""), n);
                },
                T = (e) => (e ? (e.currentTimeMs || 0) / 1e3 : void 0),
                C = (e) => e.endTimeS - e.startTimeS,
                g = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        r = M(e),
                        o = T(r);
                    if (void 0 === o) return 0;
                    if (!t) return o;
                    const n = o - t.startTimeS;
                    return (0, a.Z)(n, 0, C(t));
                },
                O = (e) => (e ? (e.durationMs || 0) / 1e3 : void 0),
                I = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        r = M(e),
                        o = O(r);
                    return o ? (t ? C(t) : o) : 0;
                },
                A = (e) => {
                    const t = T(e);
                    return t && Math.round(t);
                },
                D = (e) => {
                    const t = O(e);
                    return t && Math.round(t);
                },
                S = (e, t) => {
                    const r = O(M(e));
                    if (!r) return;
                    const o = ((e?.controls?.playbackTimeRange?.startTimeS ?? 0) + t) / r;
                    return (0, a.Z)(o, 0, 1);
                },
                P = (e) => e.tracks.find((e) => 0 === e.id),
                M = (e) => e.tracks.find((t) => t.id === e.currentTrackId),
                k = (e) => (e.controls && e.controls.isPosterShown ? P(e) : M(e)),
                v = (e) => {
                    if (e) {
                        const t = e.requestedTimecode;
                        return t && t > 0 ? t : e.replayEditedStartTime;
                    }
                },
                Z = (e) => w(Math.round(e / 1e3)),
                w = (e) => {
                    const { hours: t, minutes: r, seconds: o } = W(e),
                        n = o < 10 ? `0${o}` : o,
                        a = r < 10 && t ? `0${r}` : r;
                    return t ? `${t}:${a}:${n}` : `${a}:${n}`;
                },
                W = (e) => ({ hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) });
        },
        523319: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                n = r(325686),
                a = r(167630),
                s = r(392237),
                i = r(424713);
            class l extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._playInitiatedTime = null),
                        (this.state = { waitingForPlayback: !1 }),
                        (this._checkPlayRequest = (e, t) => {
                            const r = t && "PLAY_REQUESTED" === t.controls.playState,
                                o = r && (!e || "PLAY_REQUESTED" !== e.controls.playState);
                            r ? o && this._startPlaybackWait() : this._clearPlaybackWait();
                        }),
                        (this._clearPlaybackWait = () => {
                            clearInterval(this._bufferingCheck), (this._playInitiatedTime = null);
                        }),
                        (this._startPlaybackWait = () => {
                            const { waitingForPlaybackThresholdMs: e } = this.props;
                            this._clearPlaybackWait(),
                                (this._playInitiatedTime = Date.now()),
                                (this._bufferingCheck = setInterval(() => {
                                    if (!this._playInitiatedTime) return this._clearPlaybackWait();
                                    const t = this._playInitiatedTime;
                                    Date.now() - t > e && (this.setState({ waitingForPlayback: !0 }), this._clearPlaybackWait());
                                }, 100));
                        });
                }
                static getDerivedStateFromProps(e) {
                    const { playerState: t } = e;
                    return t && "PLAY_REQUESTED" === t.controls.playState ? null : { waitingForPlayback: !1 };
                }
                componentWillUnmount() {
                    this._clearPlaybackWait();
                }
                componentDidMount() {
                    this._checkPlayRequest(null, this.props.playerState);
                }
                componentDidUpdate(e) {
                    this._checkPlayRequest(e.playerState, this.props.playerState);
                }
                render() {
                    const { playerState: e } = this.props;
                    if (!e) return null;
                    const t = (0, i.Ci)(e);
                    return (t && t.isBuffering) || this.state.waitingForPlayback ? o.createElement(n.Z, { pointerEvents: "none", style: [s.default.absoluteFill, c.buttonContainer] }, o.createElement(a.Z, { color: s.default.theme.colors.white, size: 60 })) : null;
                }
            }
            l.defaultProps = { waitingForPlaybackThresholdMs: 1e3 };
            const c = s.default.create((e) => ({ buttonContainer: { justifyContent: "center", alignItems: "center" } })),
                u = l;
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(202784),
                n = r(325686),
                a = r(111677),
                s = r.n(a),
                i = r(355830),
                l = r(731708),
                c = r(154003),
                u = r(992942),
                d = r(392237);
            const p = s().a9edea48;
            function h(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: a, imageSrc: s, onReloadPress: h } = e;
                return o.createElement(n.Z, { style: [d.default.absoluteFill, t ? null : E.blankOverlay] }, t ? o.createElement(o.Fragment, null, o.createElement(n.Z, { style: E.backgroundImage }, s && o.createElement(u.Z, { resizeMode: "cover", source: s, style: d.default.absoluteFill })), o.createElement(n.Z, { style: E.overlay })) : null, o.createElement(n.Z, { style: E.errorContainer }, o.createElement(n.Z, null, a ? o.createElement(i.default, { style: E.playErrorIcon }) : null), o.createElement(n.Z, { focusable: !0 }, o.createElement(l.ZP, { style: t ? E.errorMsgTextWhite : E.errorMsgTextGray }, r)), h ? o.createElement(c.ZP, { onPress: h, style: E.buttonContainer, type: "brandFilled" }, p) : null));
            }
            const E = d.default.create((e) => ({ backgroundImage: { ...d.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...d.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        38660: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                n = r(111677),
                a = r.n(n),
                s = r(731708),
                i = r(893164),
                l = r(320619);
            const c = "EUROPEAN_COPYRIGHT_VIOLATION";
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleReload = () => {
                            const { playerApi: e, playerState: t } = this.props;
                            if (!t || !t.errorInfo) return;
                            const { canRetry: r } = t.errorInfo;
                            return r
                                ? () => {
                                      e && e.reload();
                                  }
                                : void 0;
                        });
                }
                render() {
                    const { displayBackgroundImage: e = !1, imageSrc: t, playerApi: r, playerState: n } = this.props;
                    if (!r || !n) return null;
                    const a = this._getErrorAndData();
                    if (!a) return null;
                    const s = this._maybeUseCustomErrorElement(a) || this._buildMessage(a);
                    return o.createElement(i.Z, { displayBackgroundImage: e, errorMessage: s, iconPlayError: "BROADCAST_NOT_FOUND" === n.error, imageSrc: t || n.posterImage, onReloadPress: this._handleReload() });
                }
                _buildMessage(e) {
                    const { error: t, errorData: r } = e;
                    if ("LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR" === t || t === c) {
                        const { copyrightHolder: e } = r || {};
                        return e ? l.pB[t]({ holder: e }) : l.C2;
                    }
                    return (t && l.pB[t]) || l.I;
                }
                _getErrorAndData() {
                    const { playerState: e } = this.props,
                        { error: t, errorData: r } = e ?? {};
                    return t ? { error: t, errorData: r } : null;
                }
                _maybeUseCustomErrorElement(e) {
                    const { error: t, errorData: r } = e,
                        n = r?.copyrightHolder,
                        { includeDisputeLinkInCopyrightErrorMessage: i } = this.props;
                    return n && i && t === c ? o.createElement(a().I18NFormatMessage, { $i18n: "e570a97b", copyrightHolder: n }, o.createElement(s.ZP, { link: "https://help.x.com/forms/ipi/copyright-dispute" }, a().a15adf2c)) : null;
                }
            }
        },
        320619: (e, t, r) => {
            r.d(t, { C2: () => s, I: () => a, pB: () => i });
            var o = r(111677),
                n = r.n(o);
            const a = n().c1658fc6,
                s = n().h519ae04,
                i = { BROADCAST_REQUEST_ERROR: a, BROADCAST_ENDED_NO_REPLAY: n().ce871584, BROADCAST_NOT_FOUND: n().c101eb96, CONFIG_USER_DATA_NETWORK_ERROR: a, CONFIG_NETWORK_ERROR: a, DMCA_TAKEDOWN_ERROR: n().gb24a514, EUROPEAN_COPYRIGHT_VIOLATION: n().hcaf3e63, LIVE_PARSE_ERROR: a, LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: a, LIVE_STREAM_ACQUISITION_NETWORK_ERROR: a, LIVE_VIDEO_GEOBLOCK_ERROR: n().if05c038, LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: n().d420171b, LIVE_VIDEO_GEOLOCATION_PROMPT: n().b1eb72fa, MEDIA_NOT_SUPPORTED: n().c057680c, MEDIA_SRC_INVALID_ERROR: a, MEDIA_ABORTED: a, MEDIA_NETWORK_ERROR: a, MEDIA_DECODE_ERROR: a, MEDIA_GEOBLOCK_ERROR: n().i5dfae6e, MEDIA_UNKNOWN_CODE_ERROR: a, ORIGINAL_CONTEXT_DELETED: n().c2388276, UNSUPPORTED_TYPE: a, VMAP_NETWORK_ERROR: a, VMAP_PARSE_ERROR: a };
        },
        804455: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(807896),
                n = r(202784),
                a = r(992942),
                s = r(530732),
                i = r(537392),
                l = r(392237),
                c = r(336961),
                u = r(424713);
            const d = l.default.create((e) => ({ buttonContainer: { justifyContent: "center", alignItems: "center" } })),
                p = function (e) {
                    const { imageSrc: t, playerApi: r, playerState: p, withPlayButton: h = !0 } = e,
                        E = n.useCallback(
                            (e) => {
                                r?.play(), e?.stopPropagation();
                            },
                            [r],
                        ),
                        m = (0, i.Zx)(({ containerWidth: e }) => e < l.default.theme.breakpoints.micro);
                    if (!(r && p && p.controls && p.controls.isPosterShown)) return null;
                    const _ = (0, u.sI)(p),
                        y = t || p.posterImage,
                        R = (0, u.c9)(_);
                    return n.createElement(s.Z, (0, o.Z)({}, h ? null : { "aria-label": R }, { focusable: !h, interactiveStyles: null, onPress: E, style: [l.default.absoluteFill, d.buttonContainer] }), y && n.createElement(a.Z, { resizeMode: "cover", source: y, style: l.default.absoluteFill }), h && n.createElement(c.Z, { "aria-label": R, onPress: E, size: m ? "small" : "normal", type: "video" }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig.ffdc667a.js.map
