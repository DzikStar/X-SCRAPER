"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-1347f5f8", "bundle.AudioSpaceDetail"],
    {
        90890: (e, t, a) => {
            a.d(t, { Tc: () => o, yt: () => s });
            a(136728), a(202784);
            var n = a(803224),
                i = a(67877),
                r = a(2138);
            const l = { autoplayPrioritizationPolicy: a(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class s {
                constructor(e = l) {
                    (this._players = []),
                        (this._setPlayerState = (e, t) => {
                            (e.previousPlaybackState = e.playbackState), (e.playbackState = t), this._updatePlayerStateForDocking(e, t);
                        }),
                        (this._updatePlayerStateForDocking = (e, t) => {
                            if (t === n.q.USER_PLAYING) {
                                const t = e.previousPlaybackState === n.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof e.registerDockElement && !t) {
                                    const t = e.registerDockElement();
                                    this._updateDockedVideo(t, e.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else t === n.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : t === n.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const e = this._players.find((e) => e.playbackState === n.q.USER_PLAYING && e.playbackPriority !== n.W.SPACE);
                            e && !this._canPlay(e) ? (this._pausePlayer(e), this._triggerAutoplay()) : e ? this._stopAllExcept(e) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, r.Z)((0, i.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (e) => window.requestIdleCallback(e, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: t, minimumVisibilityForAutoplay: a } = e;
                    (this._autoplayPrioritizationPolicy = t), (this._minimumVisibilityForAutoplay = a);
                }
                register({ autoplayGroupOptions: e, canAutoplay: t, id: a, onAutoPlayRequest: i, onFullscreenEntered: r, onFullscreenExited: l, onPauseRequest: s, isLooping: o, registerDockElement: c, updateDockedVideo: p, updateIsUserPaused: u, playbackPriority: d = n.W.NORMAL }) {
                    (this._updateDockedVideo = p), (this._updateIsUserPaused = u);
                    const y = { id: a, autoplayGroupEmitter: e?.autoplayGroupEmitter, placement: void 0, playbackPriority: d, playbackState: n.q.INITIAL, previousPlaybackState: n.q.INITIAL, commandHandlers: { onAutoPlayRequest: i, onFullscreenEntered: r, onFullscreenExited: l, onPauseRequest: s }, canAutoplay: t && d !== n.W.INELIGIBLE, isLooping: o, registerDockElement: c };
                    return e && e.autoplayGroupEmitter.registerAutoplayGroupPlayer(y, e.mediaIndex), this._players.push(y), { reset: () => this._handleReset(y), signalFullscreenChange: (e) => this._handleFullscreenChanged(e), signalPlacementChange: (e) => this._handlePlacementChange(y, e), signalPlay: () => this._handlePlay(y), signalPause: () => this._handlePause(y), signalPlaybackFinish: (e) => this._handlePlaybackFinished(y, e), signalPlaybackPriorityChange: (e, t) => this._handlePlaybackPriorityChange(y, e, t), unregister: () => this._handleUnregister(y) };
                }
                _handleFullscreenChanged(e) {
                    this._players.forEach((t) => {
                        const { onFullscreenEntered: a, onFullscreenExited: n } = t.commandHandlers;
                        e && a ? a() : !e && n && n();
                    });
                }
                _handlePlacementChange(e, t) {
                    const a = t.scrollY();
                    (e.placement = t), this._scrollY !== a && (this._scrollY = a), e.playbackState === n.q.FINISHED && 0 === t.visibleFraction() && this._setPlayerState(e, n.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(e) {
                    e.playbackState !== n.q.AUTO_PLAYING && (e.previousPlaybackState === n.q.AUTO_PLAYING && e.isLooping ? this._setPlayerState(e, n.q.AUTO_PLAYING) : this._setPlayerState(e, n.q.USER_PLAYING)), this._stopAllExcept(e);
                }
                _handlePause(e) {
                    e.playbackState !== n.q.AUTO_PAUSED && this._setPlayerState(e, n.q.USER_PAUSED);
                }
                _handlePlaybackFinished(e, t = !1) {
                    this._setPlayerState(e, n.q.FINISHED), e.autoplayGroupEmitter && e.autoplayGroupEmitter.signalPlaybackComplete(t);
                }
                _handlePlaybackPriorityChange(e, t, a) {
                    (e.playbackPriority = t), (e.canAutoplay = a && t !== n.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(e) {
                    this._setPlayerState(e, n.q.INITIAL), this._scheduleUpdate();
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
                            e.playbackState === n.q.AUTO_PLAYING && this._pausePlayer(e);
                        });
                }
                _canGroupAutoplay(e, t) {
                    if (t.has(e)) return t.get(e);
                    const a = e.isAutoplayGroupEligibleForAutoplay();
                    return t.set(e, a), a;
                }
                _canAutoPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        a = e.playbackState === n.q.USER_PAUSED,
                        i = e.playbackState === n.q.FINISHED;
                    return e.canAutoplay && t && !a && !i;
                }
                _canPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        a = !!e.placement && e.placement.visibleFraction() > 0;
                    return e.playbackPriority !== n.W.INELIGIBLE && (!e.placement || a || t);
                }
                _stopAllExcept(e) {
                    this._players.forEach((t) => {
                        const a = t.playbackPriority !== n.W.SPACE;
                        t === e || !a || (t.playbackState !== n.q.USER_PLAYING && t.playbackState !== n.q.AUTO_PLAYING) || this._pausePlayer(t);
                    });
                }
                _pausePlayer(e) {
                    const { onPauseRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, n.q.AUTO_PAUSED), t();
                }
                _autoPlayVideo(e) {
                    const { onAutoPlayRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, n.q.AUTO_PLAYING), t();
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
            const o = new s();
        },
        22952: (e, t, a) => {
            a.d(t, { T: () => m, Z: () => I });
            var n = a(202784),
                i = a(688715),
                r = a(731708),
                l = a(457311),
                s = a(392237),
                o = a(111677),
                c = a.n(o);
            const p = (0, i.ju)("https://support.x.com/articles/117063"),
                u = "sensitive",
                d = "blocked",
                y = "blocked_by",
                m = Object.freeze({ SENSITIVE: u, BLOCKED: d, BLOCKED_BY: y }),
                h = { title: c().j32d345e, button: c().c3d89aca, body: void 0 },
                _ = { title: c().a01d5a7c, body: ({ screenName: e }) => n.createElement(c().I18NFormatMessage, { $i18n: "cc70dc63", screenName: e }, n.createElement(r.ZP, { link: p }, c().i859a9d4)), button: c().f277e94a },
                P = { title: c().b2311b70, body: c().cab51f93, button: void 0 },
                g = Object.freeze({ [u]: h, [d]: _, [y]: P }),
                b = (e, t) => ("function" == typeof e ? (t && e({ screenName: t })) || void 0 : e),
                E = s.default.create((e) => ({ style: { alignItems: "center", paddingHorizontal: e.spaces.space40, paddingVertical: `calc(2 * ${e.spaces.space40})` } })),
                I = ({ onPress: e, screenName: t, type: a }) => {
                    const { body: i, button: r, title: s } = g[a],
                        o = b(s, t),
                        c = b(i, t);
                    return n.createElement(l.Z, { buttonText: r, header: o, message: c, onButtonPress: e, style: E.style });
                };
        },
        849376: (e, t, a) => {
            a.d(t, { F: () => r });
            a(136728);
            var n = a(22952);
            const i = (e, t, a) => ({ isFullPageInterstitial: e, type: t, screenName: a }),
                r = ({ isBlockedBy: e = !1, isBlocking: t = !1, isSensitive: a = !1, screenName: r }) => {
                    const l = [];
                    return e ? l.push(i(!0, n.T.BLOCKED_BY, r)) : (t && l.push(i(!0, n.T.BLOCKED, r)), a && l.push(i(!1, n.T.SENSITIVE))), l.length ? l : void 0;
                };
        },
        538884: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(202784),
                i = a(22952);
            const r = function (e) {
                const { children: t, onInterstitialSubmit: a } = e,
                    [r, l] = n.useState(e.interstitials || []),
                    s = () => {
                        const [e, ...t] = r;
                        l(t), a && a(e);
                    };
                return r
                    ? (() => {
                          const e = r && r[0];
                          return e
                              ? ((e) => {
                                    const { isFullPageInterstitial: a, screenName: r, type: l } = e,
                                        o = n.createElement(i.Z, { onPress: s, screenName: r, type: l });
                                    return a ? o : t(o);
                                })(e)
                              : t();
                      })()
                    : t();
            };
        },
        337069: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                i = a(325686),
                r = a(187669);
            const l = { threshold: 0.01 },
                s = (e) => {
                    const { children: t, onImpression: a, style: s } = e,
                        o = n.useRef(null),
                        c = (e) => {
                            e.forEach((e) => {
                                e.isIntersecting && a();
                            });
                        };
                    return (
                        (0, r.q)(() => {
                            if ("IntersectionObserver" in window) {
                                const e = new IntersectionObserver(c, l),
                                    t = o.current;
                                null != t && e.observe(t);
                                const a = () => {
                                    const t = o.current;
                                    null != t && e.unobserve(t), e.disconnect();
                                };
                                return a;
                            }
                        }),
                        n.createElement(i.Z, { ref: o, style: s }, t)
                    );
                };
        },
        651930: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(202784),
                i = a(99107),
                r = a(272175),
                l = a(111677);
            const s = a.n(l)().c39b0e24,
                o = ({ deepLink: e }) => {
                    const t = s;
                    return e ? n.createElement(r.ql, null, n.createElement("meta", { content: e, property: "al:ios:url" }), n.createElement("meta", { content: i.AF, property: "al:ios:app_store_id" }), n.createElement("meta", { content: t, property: "al:ios:app_name" }), n.createElement("meta", { content: e, property: "al:android:url" }), n.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), n.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        983389: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(202784),
                i = a(272175);
            const r = ({ description: e }) => n.createElement(i.ql, null, n.createElement("meta", { content: e, name: "description" }));
        },
        572067: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(202784),
                i = a(272175);
            const r = (e) => {
                const { canonical: t, description: a = "", image: r, imageAlt: l, imageH: s, imageType: o, imageW: c, title: p, ttl: u, type: d } = e;
                return n.createElement(i.ql, null, d ? n.createElement("meta", { content: d, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, p ? n.createElement("meta", { content: p, property: "og:title" }) : null, n.createElement("meta", { content: a, property: "og:description" }), r ? n.createElement("meta", { content: r, property: "og:image" }) : null, o ? n.createElement("meta", { content: o, property: "og:image:type" }) : null, c ? n.createElement("meta", { content: c, property: "og:image:width" }) : null, s ? n.createElement("meta", { content: s, property: "og:image:height" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:alt" }) : null, u ? n.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        898948: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                i = a(443781),
                r = a(163301);
            const l = (e) => {
                const { children: t, collectionName: a } = e,
                    l = n.useContext(i.rC);
                return (0, r.Kx)(l), t;
            };
        },
        741692: (e, t, a) => {
            a.d(t, { S3: () => d, nn: () => y, Vm: () => m });
            var n = a(202784),
                i = a(325686),
                r = a(366635),
                l = a(392237),
                s = a(453333),
                o = a(784732),
                c = a(689582),
                p = a(68290);
            const u = "placeholderIcon",
                d = ({ author: e, color: t = "text", size: a = "subtext2", style: i, withHoverCard: l = !0, withLink: s = !1, withScreenName: o = !1 }) => n.createElement(r.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[a], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: a, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: a, style: [h.authorUserName, i], verifiedType: e.verified_type, withHoverCard: l, withLink: s, withScreenName: o }),
                y = ({ style: e }) => n.createElement(i.Z, { style: [h.lightningBadge, e] }, n.createElement(s.default, { style: h.lightningIcon })),
                m = ({ icon: e }) => n.createElement(i.Z, { style: h.placeholderIconContainer, testID: u }, "news" === e ? n.createElement(o.default, { style: h.placeholderIcon }) : "lists" === e ? n.createElement(c.default, { style: h.placeholderIcon }) : n.createElement(p.default, { style: h.placeholderIcon })),
                h = l.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        954970: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                i = a(154003),
                r = a(111677),
                l = a.n(r);
            const s = l().j1d352d8,
                o = l().d18909d4,
                c = { element: "reminder_button" },
                p = Object.freeze({ impression: "impression", click: "click" });
            const u = function (e) {
                const {
                        eventId: t,
                        onPress: a,
                        onRemindButtonScribe: r,
                        remindMeSubscription: { notification_id: l, subscribed: u },
                    } = e,
                    d = n.useRef({});
                (d.current.onRemindButtonScribe = r),
                    n.useEffect(() => {
                        d.current?.onRemindButtonScribe({ action: p.impression, ...c });
                    }, []);
                const y = u ? "primaryOutlined" : "primaryFilled",
                    m = u ? s : o;
                return n.createElement(
                    i.ZP,
                    {
                        onPress: () => {
                            a(t, { remind_me: !u, notification_id: l }), r({ action: p.click, ...c });
                        },
                        size: "medium",
                        type: y,
                    },
                    m,
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-1347f5f8.1a483e3a.js.map
