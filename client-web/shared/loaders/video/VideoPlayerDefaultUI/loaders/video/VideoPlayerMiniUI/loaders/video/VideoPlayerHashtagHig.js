"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"],
    {
        908629: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784);
            const n = { transitionDuration: "250ms", transitionProperty: "opacity, height", transitionTimingFunction: "ease", willChange: "opacity" };
            function s({ children: e, show: t }) {
                const [r, s] = o.useState(!t);
                return (
                    o.useEffect(() => {
                        t && r && s(!1);
                    }, [r, t]),
                    o.useMemo(() => {
                        const a = { ...n, opacity: t ? 1 : 0 };
                        return o.createElement(
                            "div",
                            {
                                onTransitionEnd: (e) => {
                                    t || r || s(!0);
                                },
                                style: a,
                            },
                            r ? null : e,
                        );
                    }, [e, t, r])
                );
            }
        },
        364779: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(202784),
                n = r(325686),
                s = r(111677),
                a = r.n(s),
                i = r(688715),
                c = r(224162),
                l = r(143670),
                d = r(392237),
                u = r(424713),
                p = r(251478);
            const h = a().d26d8730,
                E = a().f1b6bcec;
            class _ extends o.Component {
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
                            const t = e && (0, u.sI)(e);
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
                        { openContextMenu: r, positionX: s, positionY: a } = this.state,
                        i = this._isGif(t);
                    return o.createElement(c.ZP.Consumer, null, ({ direction: c }) => o.createElement(n.Z, { onClick: this._handleCloseContextMenu, onContextMenu: this._handleOpenContextMenu(t), style: d.default.absoluteFill }, e, r && o.createElement(n.Z, { style: [R.menuWrapper, "rtl" === c ? { top: a, right: s } : { top: a, left: s }] }, o.createElement(l.Z, { actionText: i ? E : h, onClick: this._handleCopyVideoAddress }))));
                }
            }
            const m = _,
                R = d.default.create((e) => ({ menuWrapper: { borderRadius: e.borderRadii.small, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium, display: "table" } }));
        },
        535814: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                n = r(325686),
                s = r(522171),
                a = r(392237),
                i = r(254740);
            const c = function (e) {
                const t = o.useRef(null),
                    { enabled: r, playerApi: c, playerState: l } = e;
                if (!r) return e.children || null;
                const d = (e) => {
                        c && l && (l.isPlaying ? c.pause() : c.play());
                    },
                    u = (e) => {
                        if (c && l) {
                            const t = parseInt(e.key, 10) / 10;
                            c.scrubToFraction(t);
                        }
                    };
                return o.createElement(
                    s.Z,
                    {
                        containerRef: t,
                        enabled: !0,
                        handlers: {
                            [i.Z.K]: d,
                            [i.Z.M]: (e) => {
                                c && l && (l.isMuted ? c.unmute() : c.mute());
                            },
                            [i.Z.Space]: d,
                            [i.Z.C]: (e) => {
                                c && l && c.toggleCaptions();
                            },
                            [i.Z.Home]: (e) => {
                                c && l && c.scrubToFraction(0);
                            },
                            [i.Z[0]]: u,
                            [i.Z[1]]: u,
                            [i.Z[2]]: u,
                            [i.Z[3]]: u,
                            [i.Z[4]]: u,
                            [i.Z[5]]: u,
                            [i.Z[6]]: u,
                            [i.Z[7]]: u,
                            [i.Z[8]]: u,
                            [i.Z[9]]: u,
                            [i.Z.End]: (e) => {
                                c && l && c.scrubToFraction(1);
                            },
                            [i.Z.ArrowLeft]: (e) => {
                                c && l && c.skipBy(-5);
                            },
                            [i.Z.ArrowRight]: (e) => {
                                c && l && c.skipBy(5);
                            },
                        },
                    },
                    o.createElement(n.Z, { focusable: !0, ref: t, style: a.default.absoluteFill }, e.children),
                );
            };
        },
        254740: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = { ArrowDown: "ArrowDown", ArrowUp: "ArrowUp", ArrowLeft: "left", ArrowRight: "right", Enter: "Enter", Escape: "Escape", Space: "space", Tab: "Tab", K: "k", M: "m", C: "c", 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", Home: "home", End: "end" };
        },
        251478: (e, t, r) => {
            r.d(t, { $2: () => o, CX: () => c, EB: () => i, Eq: () => n, ak: () => a, wF: () => s });
            const o = { VISIT: "url", WATCH: "watch" },
                n = { watch_now: "watch_now", visit_site: "visit_site", shop: "shop", see_more: "see_more", go_to: "go_to" },
                s = { MEDIA: "media_entity", GIF: "gif", VMAP: "vmap", BROADCAST: "broadcast" },
                a = { AD: "ad", CONTENT: "content" },
                i = { BROADCAST: "broadcast", DM: "dm", TWEET: "tweet" },
                c = 720;
        },
        424713: (e, t, r) => {
            r.d(t, { Ci: () => M, Fv: () => w, MU: () => I, Ot: () => C, Ov: () => D, SY: () => b, XE: () => y, _5: () => v, aZ: () => g, c9: () => f, mr: () => W, sI: () => P, us: () => S, xB: () => k, zm: () => A });
            r(136728);
            var o = r(111677),
                n = r.n(o),
                s = r(837880),
                a = r(891198),
                i = r(251478);
            const c = n().i3b7a017,
                l = n().ie5d110f,
                d = n().df5f11b3,
                u = n().a7cd5cf4,
                p = n().b6eb8f6a,
                h = n().dcc2b9b3,
                E = n().hf4ffd4d,
                _ = n().f6e90cd7,
                m = n().e7d191ed,
                R = n().daa73df1,
                y = (e) => {
                    const { viewerCount: t } = e;
                    return t || 0 === t ? R({ viewerCount: ((r = t), "number" == typeof r ? (0, a.wl)(r) : r) }) : null;
                    var r;
                },
                f = (e) => {
                    if (!e) return "";
                    return (({ durationSeconds: e, isBroadcast: t, isLive: r, timecode: o, videoTrack: n } = {}) => {
                        const s = [],
                            a = t || r ? p : u,
                            i = r ? E : h;
                        if ((s.push(i({ locVideoType: a })), "number" == typeof e && e && !r)) {
                            const { hoursWord: t, minutesWord: r, secondsWord: o } = T(e);
                            s.push(_({ hoursWord: t, minutesWord: r, secondsWord: o }));
                        }
                        if ("number" == typeof o && o) {
                            const { hoursWord: e, minutesWord: t, secondsWord: r } = T(o);
                            s.push(m({ hoursWord: e, minutesWord: t, secondsWord: r }));
                        }
                        const c = n && y(n);
                        return c && s.push(c), s.join(". ");
                    })({ isLive: e.isLive, isBroadcast: e.contentType === i.wF.BROADCAST, durationSeconds: S(e), timecode: v(e), videoTrack: e });
                },
                T = (e) => {
                    const { hours: t, minutes: r, seconds: o } = Z(e),
                        n = { hoursWord: "", minutesWord: "", secondsWord: "" };
                    return 0 === o && 0 === r && 0 === t && 0 === r ? ((n.secondsWord = c(0)), n) : ((n.hoursWord = t > 0 ? d(t) : ""), (n.minutesWord = r > 0 ? l(r) : ""), (n.secondsWord = o > 0 ? c(o) : ""), n);
                },
                C = (e) => (e ? (e.currentTimeMs || 0) / 1e3 : void 0),
                O = (e) => e.endTimeS - e.startTimeS,
                b = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        r = M(e),
                        o = C(r);
                    if (void 0 === o) return 0;
                    if (!t) return o;
                    const n = o - t.startTimeS;
                    return (0, s.Z)(n, 0, O(t));
                },
                I = (e) => (e ? (e.durationMs || 0) / 1e3 : void 0),
                A = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        r = M(e),
                        o = I(r);
                    return o ? (t ? O(t) : o) : 0;
                },
                D = (e) => {
                    const t = C(e);
                    return t && Math.round(t);
                },
                S = (e) => {
                    const t = I(e);
                    return t && Math.round(t);
                },
                g = (e, t) => {
                    const r = I(M(e));
                    if (!r) return;
                    const o = ((e?.controls?.playbackTimeRange?.startTimeS ?? 0) + t) / r;
                    return (0, s.Z)(o, 0, 1);
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
                w = (e) => W(Math.round(e / 1e3)),
                W = (e) => {
                    const { hours: t, minutes: r, seconds: o } = Z(e),
                        n = o < 10 ? `0${o}` : o,
                        s = r < 10 && t ? `0${r}` : r;
                    return t ? `${t}:${s}:${n}` : `${s}:${n}`;
                },
                Z = (e) => ({ hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) });
        },
        523319: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(325686),
                s = r(167630),
                a = r(392237),
                i = r(424713);
            class c extends o.Component {
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
                    return (t && t.isBuffering) || this.state.waitingForPlayback ? o.createElement(n.Z, { pointerEvents: "none", style: [a.default.absoluteFill, l.buttonContainer] }, o.createElement(s.Z, { color: a.default.theme.colors.white, size: 60 })) : null;
                }
            }
            c.defaultProps = { waitingForPlaybackThresholdMs: 1e3 };
            const l = a.default.create((e) => ({ buttonContainer: { justifyContent: "center", alignItems: "center" } })),
                d = c;
        },
        38660: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(111677),
                s = r.n(n),
                a = r(731708),
                i = r(893164),
                c = r(320619);
            const l = "EUROPEAN_COPYRIGHT_VIOLATION";
            class d extends o.Component {
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
                    const s = this._getErrorAndData();
                    if (!s) return null;
                    const a = this._maybeUseCustomErrorElement(s) || this._buildMessage(s);
                    return o.createElement(i.Z, { displayBackgroundImage: e, errorMessage: a, iconPlayError: "BROADCAST_NOT_FOUND" === n.error, imageSrc: t || n.posterImage, onReloadPress: this._handleReload() });
                }
                _buildMessage(e) {
                    const { error: t, errorData: r } = e;
                    if ("LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR" === t || t === l) {
                        const { copyrightHolder: e } = r || {};
                        return e ? c.pB[t]({ holder: e }) : c.C2;
                    }
                    return (t && c.pB[t]) || c.I;
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
                    return n && i && t === l ? o.createElement(s().I18NFormatMessage, { $i18n: "e570a97b", copyrightHolder: n }, o.createElement(a.ZP, { link: "https://help.x.com/forms/ipi/copyright-dispute" }, s().a15adf2c)) : null;
                }
            }
        },
        320619: (e, t, r) => {
            r.d(t, { C2: () => a, I: () => s, pB: () => i });
            var o = r(111677),
                n = r.n(o);
            const s = n().c1658fc6,
                a = n().h519ae04,
                i = { BROADCAST_REQUEST_ERROR: s, BROADCAST_ENDED_NO_REPLAY: n().ce871584, BROADCAST_NOT_FOUND: n().c101eb96, CONFIG_USER_DATA_NETWORK_ERROR: s, CONFIG_NETWORK_ERROR: s, DMCA_TAKEDOWN_ERROR: n().gb24a514, EUROPEAN_COPYRIGHT_VIOLATION: n().hcaf3e63, LIVE_PARSE_ERROR: s, LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: s, LIVE_STREAM_ACQUISITION_NETWORK_ERROR: s, LIVE_VIDEO_GEOBLOCK_ERROR: n().if05c038, LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: n().d420171b, LIVE_VIDEO_GEOLOCATION_PROMPT: n().b1eb72fa, MEDIA_NOT_SUPPORTED: n().c057680c, MEDIA_SRC_INVALID_ERROR: s, MEDIA_ABORTED: s, MEDIA_NETWORK_ERROR: s, MEDIA_DECODE_ERROR: s, MEDIA_GEOBLOCK_ERROR: n().i5dfae6e, MEDIA_UNKNOWN_CODE_ERROR: s, ORIGINAL_CONTEXT_DELETED: n().c2388276, UNSUPPORTED_TYPE: s, VMAP_NETWORK_ERROR: s, VMAP_PARSE_ERROR: s };
        },
        804455: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(807896),
                n = r(202784),
                s = r(992942),
                a = r(530732),
                i = r(537392),
                c = r(392237),
                l = r(336961),
                d = r(424713);
            const u = c.default.create((e) => ({ buttonContainer: { justifyContent: "center", alignItems: "center" } })),
                p = function (e) {
                    const { imageSrc: t, playerApi: r, playerState: p, withPlayButton: h = !0 } = e,
                        E = n.useCallback(
                            (e) => {
                                r?.play(), e?.stopPropagation();
                            },
                            [r],
                        ),
                        _ = (0, i.Zx)(({ containerWidth: e }) => e < c.default.theme.breakpoints.micro);
                    if (!(r && p && p.controls && p.controls.isPosterShown)) return null;
                    const m = (0, d.sI)(p),
                        R = t || p.posterImage,
                        y = (0, d.c9)(m);
                    return n.createElement(a.Z, (0, o.Z)({}, h ? null : { "aria-label": y }, { focusable: !h, interactiveStyles: null, onPress: E, style: [c.default.absoluteFill, u.buttonContainer] }), R && n.createElement(s.Z, { resizeMode: "cover", source: R, style: c.default.absoluteFill }), h && n.createElement(l.Z, { "aria-label": y, onPress: E, size: _ ? "small" : "normal", type: "video" }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig.3be6722a.js.map
