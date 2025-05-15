"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-1347f5f8"],
    {
        90890: (e, t, a) => {
            a.d(t, { Tc: () => o, yt: () => l });
            a(136728), a(202784);
            var i = a(803224),
                s = a(67877),
                n = a(2138);
            const r = { autoplayPrioritizationPolicy: a(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class l {
                constructor(e = r) {
                    (this._players = []),
                        (this._setPlayerState = (e, t) => {
                            (e.previousPlaybackState = e.playbackState), (e.playbackState = t), this._updatePlayerStateForDocking(e, t);
                        }),
                        (this._updatePlayerStateForDocking = (e, t) => {
                            if (t === i.q.USER_PLAYING) {
                                const t = e.previousPlaybackState === i.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof e.registerDockElement && !t) {
                                    const t = e.registerDockElement();
                                    this._updateDockedVideo(t, e.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else t === i.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : t === i.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const e = this._players.find((e) => e.playbackState === i.q.USER_PLAYING && e.playbackPriority !== i.W.SPACE);
                            e && !this._canPlay(e) ? (this._pausePlayer(e), this._triggerAutoplay()) : e ? this._stopAllExcept(e) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, n.Z)((0, s.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (e) => window.requestIdleCallback(e, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: t, minimumVisibilityForAutoplay: a } = e;
                    (this._autoplayPrioritizationPolicy = t), (this._minimumVisibilityForAutoplay = a);
                }
                register({ autoplayGroupOptions: e, canAutoplay: t, id: a, onAutoPlayRequest: s, onFullscreenEntered: n, onFullscreenExited: r, onPauseRequest: l, isLooping: o, registerDockElement: c, updateDockedVideo: u, updateIsUserPaused: d, playbackPriority: p = i.W.NORMAL }) {
                    (this._updateDockedVideo = u), (this._updateIsUserPaused = d);
                    const y = { id: a, autoplayGroupEmitter: e?.autoplayGroupEmitter, placement: void 0, playbackPriority: p, playbackState: i.q.INITIAL, previousPlaybackState: i.q.INITIAL, commandHandlers: { onAutoPlayRequest: s, onFullscreenEntered: n, onFullscreenExited: r, onPauseRequest: l }, canAutoplay: t && p !== i.W.INELIGIBLE, isLooping: o, registerDockElement: c };
                    return e && e.autoplayGroupEmitter.registerAutoplayGroupPlayer(y, e.mediaIndex), this._players.push(y), { reset: () => this._handleReset(y), signalFullscreenChange: (e) => this._handleFullscreenChanged(e), signalPlacementChange: (e) => this._handlePlacementChange(y, e), signalPlay: () => this._handlePlay(y), signalPause: () => this._handlePause(y), signalPlaybackFinish: (e) => this._handlePlaybackFinished(y, e), signalPlaybackPriorityChange: (e, t) => this._handlePlaybackPriorityChange(y, e, t), unregister: () => this._handleUnregister(y) };
                }
                _handleFullscreenChanged(e) {
                    this._players.forEach((t) => {
                        const { onFullscreenEntered: a, onFullscreenExited: i } = t.commandHandlers;
                        e && a ? a() : !e && i && i();
                    });
                }
                _handlePlacementChange(e, t) {
                    const a = t.scrollY();
                    (e.placement = t), this._scrollY !== a && (this._scrollY = a), e.playbackState === i.q.FINISHED && 0 === t.visibleFraction() && this._setPlayerState(e, i.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(e) {
                    e.playbackState !== i.q.AUTO_PLAYING && (e.previousPlaybackState === i.q.AUTO_PLAYING && e.isLooping ? this._setPlayerState(e, i.q.AUTO_PLAYING) : this._setPlayerState(e, i.q.USER_PLAYING)), this._stopAllExcept(e);
                }
                _handlePause(e) {
                    e.playbackState !== i.q.AUTO_PAUSED && this._setPlayerState(e, i.q.USER_PAUSED);
                }
                _handlePlaybackFinished(e, t = !1) {
                    this._setPlayerState(e, i.q.FINISHED), e.autoplayGroupEmitter && e.autoplayGroupEmitter.signalPlaybackComplete(t);
                }
                _handlePlaybackPriorityChange(e, t, a) {
                    (e.playbackPriority = t), (e.canAutoplay = a && t !== i.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(e) {
                    this._setPlayerState(e, i.q.INITIAL), this._scheduleUpdate();
                }
                _handleUnregister(e) {
                    const t = this._players.indexOf(e);
                    t >= 0 && this._players.splice(t, 1), this._scheduleUpdate();
                }
                _triggerAutoplay() {
                    if (document.pictureInPictureElement) return;
                    const e = new WeakMap(),
                        t = this._players.filter((t) => {
                            const a = this._canAutoPlay(t);
                            return t.autoplayGroupEmitter ? a && this._canGroupAutoplay(t.autoplayGroupEmitter, e) : a;
                        }),
                        a = this._findBestAutoplayFit(t);
                    if (a) {
                        const { autoplayGroupEmitter: e } = a;
                        if (e) {
                            const t = e.signalGroupAutoplayRequest();
                            t && (this._stopAllExcept(t), this._autoPlayVideo(t));
                        } else this._stopAllExcept(a), this._autoPlayVideo(a);
                    } else
                        this._players.forEach((e) => {
                            e.playbackState === i.q.AUTO_PLAYING && this._pausePlayer(e);
                        });
                }
                _canGroupAutoplay(e, t) {
                    if (t.has(e)) return t.get(e);
                    const a = e.isAutoplayGroupEligibleForAutoplay();
                    return t.set(e, a), a;
                }
                _canAutoPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        a = e.playbackState === i.q.USER_PAUSED,
                        s = e.playbackState === i.q.FINISHED;
                    return e.canAutoplay && t && !a && !s;
                }
                _canPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        a = !!e.placement && e.placement.visibleFraction() > 0;
                    return e.playbackPriority !== i.W.INELIGIBLE && (!e.placement || a || t);
                }
                _stopAllExcept(e) {
                    this._players.forEach((t) => {
                        const a = t.playbackPriority !== i.W.SPACE;
                        t === e || !a || (t.playbackState !== i.q.USER_PLAYING && t.playbackState !== i.q.AUTO_PLAYING) || this._pausePlayer(t);
                    });
                }
                _pausePlayer(e) {
                    const { onPauseRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, i.q.AUTO_PAUSED), t();
                }
                _autoPlayVideo(e) {
                    const { onAutoPlayRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, i.q.AUTO_PLAYING), t();
                }
                _findBestAutoplayFit(e) {
                    return this._autoplayPrioritizationPolicy(e);
                }
                _getDistanceToCenter(e) {
                    return e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE;
                }
                _getDistanceToTop(e) {
                    return e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE;
                }
            }
            const o = new l();
        },
        22952: (e, t, a) => {
            a.d(t, { T: () => h, Z: () => I });
            var i = a(202784),
                s = a(688715),
                n = a(731708),
                r = a(457311),
                l = a(392237),
                o = a(674132),
                c = a.n(o);
            const u = (0, s.ju)("https://support.x.com/articles/117063"),
                d = "sensitive",
                p = "blocked",
                y = "blocked_by",
                h = Object.freeze({ SENSITIVE: d, BLOCKED: p, BLOCKED_BY: y }),
                m = { title: c().j32d345e, button: c().c3d89aca, body: void 0 },
                _ = { title: c().a01d5a7c, body: ({ screenName: e }) => i.createElement(c().I18NFormatMessage, { $i18n: "cc70dc63", screenName: e }, i.createElement(n.ZP, { link: u }, c().i859a9d4)), button: c().f277e94a },
                P = { title: c().b2311b70, body: c().cab51f93, button: void 0 },
                b = Object.freeze({ [d]: m, [p]: _, [y]: P }),
                g = (e, t) => ("function" == typeof e ? (t && e({ screenName: t })) || void 0 : e),
                E = l.default.create((e) => ({ style: { alignItems: "center", paddingHorizontal: e.spaces.space40, paddingVertical: `calc(2 * ${e.spaces.space40})` } })),
                I = ({ onPress: e, screenName: t, type: a }) => {
                    const { body: s, button: n, title: l } = b[a],
                        o = g(l, t),
                        c = g(s, t);
                    return i.createElement(r.Z, { buttonText: n, header: o, message: c, onButtonPress: e, style: E.style });
                };
        },
        849376: (e, t, a) => {
            a.d(t, { F: () => n });
            a(136728);
            var i = a(22952);
            const s = (e, t, a) => ({ isFullPageInterstitial: e, type: t, screenName: a }),
                n = ({ isBlockedBy: e = !1, isBlocking: t = !1, isSensitive: a = !1, screenName: n }) => {
                    const r = [];
                    return e ? r.push(s(!0, i.T.BLOCKED_BY, n)) : (t && r.push(s(!0, i.T.BLOCKED, n)), a && r.push(s(!1, i.T.SENSITIVE))), r.length ? r : void 0;
                };
        },
        538884: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                s = a(22952);
            const n = function (e) {
                const { children: t, onInterstitialSubmit: a } = e,
                    [n, r] = i.useState(e.interstitials || []),
                    l = () => {
                        const [e, ...t] = n;
                        r(t), a && a(e);
                    };
                return n
                    ? (() => {
                          const e = n && n[0];
                          return e
                              ? ((e) => {
                                    const { isFullPageInterstitial: a, screenName: n, type: r } = e,
                                        o = i.createElement(s.Z, { onPress: l, screenName: n, type: r });
                                    return a ? o : t(o);
                                })(e)
                              : t();
                      })()
                    : t();
            };
        },
        337069: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(202784),
                s = a(325686),
                n = a(187669);
            const r = { threshold: 0.01 },
                l = (e) => {
                    const { children: t, onImpression: a, style: l } = e,
                        o = i.useRef(null),
                        c = (e) => {
                            e.forEach((e) => {
                                e.isIntersecting && a();
                            });
                        };
                    return (
                        (0, n.q)(() => {
                            if ("IntersectionObserver" in window) {
                                const e = new IntersectionObserver(c, r),
                                    t = o.current;
                                null != t && e.observe(t);
                                const a = () => {
                                    const t = o.current;
                                    null != t && e.unobserve(t), e.disconnect();
                                };
                                return a;
                            }
                        }),
                        i.createElement(s.Z, { ref: o, style: l }, t)
                    );
                };
        },
        965245: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(807896),
                s = a(202784),
                n = a(229333),
                r = a(414939),
                l = a(334346);
            const o = ({ accessibilityTitle: e, footer: t = s.createElement(r.Z, null), ...a }) => {
                const o = s.createElement(l.C, (0, i.Z)({}, a, { footer: t }));
                return e ? s.createElement(n.Z, { title: e }, o) : o;
            };
        },
        983389: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                s = a(272175);
            const n = ({ description: e }) => i.createElement(s.ql, null, i.createElement("meta", { content: e, name: "description" }));
        },
        898948: (e, t, a) => {
            a.d(t, { Z: () => r });
            var i = a(202784),
                s = a(443781),
                n = a(163301);
            const r = (e) => {
                const { children: t, collectionName: a } = e,
                    r = i.useContext(s.rC);
                return (0, n.Kx)(r), t;
            };
        },
        741692: (e, t, a) => {
            a.d(t, { S3: () => p, nn: () => y, Vm: () => h });
            var i = a(202784),
                s = a(325686),
                n = a(366635),
                r = a(392237),
                l = a(453333),
                o = a(784732),
                c = a(689582),
                u = a(68290);
            const d = "placeholderIcon",
                p = ({ author: e, color: t = "text", size: a = "subtext2", style: s, withHoverCard: r = !0, withLink: l = !1, withScreenName: o = !1 }) => i.createElement(n.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[a], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: a, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: a, style: [m.authorUserName, s], verifiedType: e.verified_type, withHoverCard: r, withLink: l, withScreenName: o }),
                y = ({ style: e }) => i.createElement(s.Z, { style: [m.lightningBadge, e] }, i.createElement(l.default, { style: m.lightningIcon })),
                h = ({ icon: e }) => i.createElement(s.Z, { style: m.placeholderIconContainer, testID: d }, "news" === e ? i.createElement(o.default, { style: m.placeholderIcon }) : "lists" === e ? i.createElement(c.default, { style: m.placeholderIcon }) : i.createElement(u.default, { style: m.placeholderIcon })),
                m = r.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        954970: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(202784),
                s = a(154003),
                n = a(674132),
                r = a.n(n);
            const l = r().j1d352d8,
                o = r().d18909d4,
                c = { element: "reminder_button" },
                u = Object.freeze({ impression: "impression", click: "click" });
            const d = function (e) {
                const {
                        eventId: t,
                        onPress: a,
                        onRemindButtonScribe: n,
                        remindMeSubscription: { notification_id: r, subscribed: d },
                    } = e,
                    p = i.useRef({});
                (p.current.onRemindButtonScribe = n),
                    i.useEffect(() => {
                        p.current?.onRemindButtonScribe({ action: u.impression, ...c });
                    }, []);
                const y = d ? "primaryOutlined" : "primaryFilled",
                    h = d ? l : o;
                return i.createElement(
                    s.ZP,
                    {
                        onPress: () => {
                            a(t, { remind_me: !d, notification_id: r }), n({ action: u.click, ...c });
                        },
                        size: "medium",
                        type: y,
                    },
                    h,
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-1347f5f8.617a506a.js.map
