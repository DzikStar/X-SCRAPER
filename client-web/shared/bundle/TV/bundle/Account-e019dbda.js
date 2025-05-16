"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TV~bundle.Account-e019dbda"],
    {
        467537: (e, t, a) => {
            a.d(t, { C: () => c });
            var r = a(807896),
                n = a(202784),
                s = a(706307),
                o = a(392237),
                i = a(873930),
                l = a(686010);
            const c = (e) => {
                    const { focusedStyle: t, onMouseLeave: a, onMouseOver: o, scrollOptions: c, style: u, withBackgroundStyle: p, withBorderStyle: m = !0, ...h } = e,
                        [b, g] = n.useState(!1),
                        f = n.useCallback(({ hasFocus: e }) => [d.container, m && d.withBorderStyle, e && m && d.focusedBorder, e && p && d.focusedBackground, e && t, b && d.hovered, u], [t, b, u, p, m]),
                        y = n.useCallback(() => {
                            g(!0), o?.();
                        }, [o]),
                        _ = n.useCallback(() => {
                            g(!1), a?.();
                        }, [a]),
                        w = n.useMemo(() => n.createElement(l.Z, (0, r.Z)({}, h, { computeStyle: f, onMouseLeave: _, onMouseOver: y, scrollOptions: c })), [f, _, y, h, c]);
                    return (0, i.Z)() ? n.createElement(s.Z, { activeOpacity: 0.7 }, w) : w;
                },
                d = o.default.create((e) => ({ container: { backgroundColor: e.colors.transparent }, hovered: { filter: "brightness(75%)" }, focusedBorder: { borderColor: e.colors.brandColor }, focusedBackground: { backgroundColor: e.colors.gray50 }, withBorderStyle: { borderWidth: e.borderWidths.medium, borderStyle: "transparent", borderColor: e.colors.transparent } }));
        },
        968343: (e, t, a) => {
            a.d(t, { N: () => R });
            var r = a(202784),
                n = a(325686),
                s = a(392237),
                o = a(382880),
                i = a(516951),
                l = a(415805),
                c = a(284702),
                d = a(738584),
                u = a(905996),
                p = a(123751),
                m = a(614425),
                h = a(443781),
                b = a(725516),
                g = a(125363),
                f = a(689642),
                y = a(390387),
                _ = a(988428),
                w = a(62338),
                v = a(91946);
            a(571372);
            const C = r.createContext({ playerApi: null, playerState: null, setPlayerApi: i.Z, setPlayerState: i.Z });
            function E({ children: e }) {
                const [t, a] = r.useState(null),
                    [n, s] = r.useState(null),
                    o = { playerApi: n, playerState: t, setPlayerApi: s, setPlayerState: a };
                return r.createElement(C.Provider, { value: o }, e);
            }
            function x() {
                const e = r.useContext(C);
                if (void 0 === e) throw new Error("useTVMiniPlayerContext was used outside of its provider TVMiniPlayerContextProvider");
                return e;
            }
            const k = ({ showDuration: e }) => {
                    const { playerState: t } = x(),
                        a = (t && (0, _.Ci)(t)?.currentTimeMs) || 0,
                        s = ((t && (0, _.Ci)(t)?.durationMs) || 0) - a;
                    return r.createElement(n.Z, { style: S.container }, r.createElement(n.Z, { style: S.bottomContainer }, e ? r.createElement(n.Z, { style: S.duration }, r.createElement(v.Kh, { size: "subtext3" }, (0, w.y)(s))) : null));
                },
                S = s.default.create((e) => ({ container: { position: "relative", width: "100%", height: "100%" }, bottomContainer: { position: "absolute", bottom: 0, start: 0, display: "flex", flexDirection: "column-reverse", width: "100%" }, duration: { backgroundColor: e.colors.translucentBlack30, borderRadius: e.borderRadii.small, padding: e.spaces.space2, paddingEnd: e.spaces.space4, marginStart: e.spaces.space12, marginBottom: e.spaces.space8, width: "fit-content" } })),
                Z = ({ maxLoopCount: e, onApiReady: t, onStateUpdate: a, playerState: n, showDuration: s, tweet: o, video: i }) => {
                    const l = (0, b.z)(),
                        _ = (0, g.v9)(y.VT),
                        w = (0, g.I0)(),
                        { setPlayerApi: v, setPlayerState: C } = x(),
                        E = o?.card?.binding_values?.broadcast_id?.string_value;
                    r.useEffect(() => {
                        E && w(f.Z.fetchOne(E));
                    }, [w, E]);
                    const S = E ? p.Z.forBroadcast(E) : p.Z.forTweet(o?.id_str || ""),
                        Z = c.Z.extractVideoProps(S, i, void 0),
                        { featureSwitches: P } = r.useContext(h.rC),
                        R = r.useMemo(() => w((e, t, { api: a }) => a.getHttpClient()), [w]),
                        B = Z.source?.variants?.map((e) => ({ src: e.url, type: e.content_type })) || [];
                    let T;
                    if (Z.cta) {
                        const { type: e, url: t } = Z.cta;
                        e && t && (T = { type: e, url: t });
                    }
                    const I = r.useMemo(() => {
                            const e = { scribeContext: { ...l.contextualScribeNamespace }, enableShortFormCompleteLogging: P.isTrue("responsive_web_video_pcomplete_enabled") },
                                t = {
                                    log: (e) => {
                                        const { category: t, data: a, namespace: r } = e;
                                        r?.action && l.scribe({ ...r, data: { ...a, _category_: t } });
                                    },
                                };
                            return new u.Z(t, { log: () => {} }, R, e);
                        }, [l, P, R]),
                        A = r.useCallback(
                            (e) => {
                                C(e), a?.(e);
                            },
                            [a, C],
                        ),
                        M = r.useCallback(
                            (e) => {
                                v(e), t?.(e);
                            },
                            [t, v],
                        );
                    return Z && Z.source ? r.createElement(d.Z, { analytics: I, "aria-label": Z["aria-label"], aspectRatio: Z.aspectRatio, autoplay: !0, basePlayerClass: m.Y7, configType: "static", contentId: Z.source.contentId, contentType: "media_entity", cta: T, durationMs: Z.durationMs, enableVideoPlayerCaptionRendering: !0, eventId: Z.source.eventId, featureProvider: P, geolocationPrompt: Z.geolocationPrompt, httpClient: R, includeBroadcastEventAssociation: Z.includeBroadcastEventAssociation, intentToPlayTime: Z.intentToPlayTime, isFullScreen: !0, language: _, loop: !0, maxLoopCount: e, onApiReady: M, onStateUpdate: A, playbackSessionId: Z.tweetId, poster: Z.poster?.url, precache: !1, setPlayerApi: Z.setPlayer, size: "fill", variants: B, videoId: Z.source.videoId, viewCount: Z.viewCount, vmapUrl: Z.source.vmapUrl }, ({ playerApi: e }) => r.createElement(k, { showDuration: s })) : r.createElement(r.Fragment, null);
                },
                P = (e, t) => {
                    const a = performance.now();
                    let r;
                    const n = (s) => {
                        const o = (s - a) / e;
                        o >= 1 ? (r && cancelAnimationFrame(r), t(1)) : ((r = requestAnimationFrame(n)), t(o));
                    };
                    r = requestAnimationFrame(n);
                },
                R = ({ maxLoopCount: e, onPlayComplete: t, onStateUpdate: a, previewPlayTimeMs: s, showDuration: c, style: d, tweet: u, volumeAttackAndReleaseTimeMs: p }) => {
                    const m = r.useMemo(() => (0, o.Z)(t || i.Z), []),
                        h = r.useCallback(
                            (e) => {
                                p
                                    ? (e.setVolume(0),
                                      P(p, (t) => {
                                          e.setVolume(t);
                                      }))
                                    : e.setVolume(1);
                            },
                            [p],
                        ),
                        b = r.useCallback(
                            (e) => {
                                p
                                    ? (e.setVolume(1),
                                      P(p, (t) => {
                                          e.setVolume(1 - t);
                                      }))
                                    : e.setVolume(0);
                            },
                            [p],
                        ),
                        g = r.useCallback(
                            (e) => {
                                h(e),
                                    s &&
                                        setTimeout(() => {
                                            b(e),
                                                setTimeout(() => {
                                                    e.pause(), m();
                                                }, p || 0);
                                        }, s);
                            },
                            [h, b, m, s, p],
                        );
                    if (!u) return null;
                    const f = (0, l.Rq)(u);
                    return f
                        ? r.createElement(
                              n.Z,
                              { style: [B.playerContainer, d] },
                              r.createElement(
                                  E,
                                  null,
                                  r.createElement(Z, {
                                      maxLoopCount: e || 1,
                                      onApiReady: g,
                                      onStateUpdate: (e) => {
                                          a?.(e), e.tracksFinished && m();
                                      },
                                      showDuration: c,
                                      tweet: u,
                                      video: f,
                                  }),
                              ),
                          )
                        : null;
                },
                B = s.default.create((e) => ({ playerContainer: { position: "relative", zIndex: 100, width: "100%", height: "100%", backgroundColor: e.colors.cellBackground } }));
        },
        153295: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(202784),
                n = a(325686),
                s = a(67369),
                o = a(976145),
                i = a(731708),
                l = a(392237),
                c = a(674132),
                d = a.n(c),
                u = a(161335);
            const p = { adult_content: d().faf745fa, graphic_violence: d().b96e6682, other: d().e1b4e672 },
                m = d().acc48c15,
                h = d().a7a90902;
            function b({ children: e, isRevealed: t, media: a, tweetPossiblySensitive: l }) {
                const c = (0, s.Mv)() ? "subtext2" : "body",
                    d = { ...a?.sensitive_media_warning };
                if ((l && (d.other = !0), !t && d)) {
                    const t = Object.keys(d)
                            .filter((e) => d[e])
                            .map((e, t) => {
                                const a = p[e];
                                return t > 0 ? a.toLowerCase() : a;
                            }),
                        a = (0, o.Z)(t);
                    return r.createElement(n.Z, { style: g.container }, r.createElement(n.Z, { style: g.media }, e), r.createElement(n.Z, { style: g.warning }, r.createElement(u.default, { style: g.icon }), r.createElement(i.ZP, { align: "center", color: "white", size: c }, m({ formattedWarningList: a })), r.createElement(i.ZP, { align: "center", color: "white", size: c }, h)));
                }
                return e;
            }
            const g = l.default.create((e) => ({ container: { overflow: "hidden", height: "100%", width: "100%", borderRadius: e.borderRadii.medium }, icon: { color: e.colors.whiteOnColor }, media: { filter: "blur(30px)", height: "100%", width: "100%" }, show: { cursor: "pointer" }, warning: { alignItems: "center", bottom: 0, end: 0, gap: e.spaces.space8, justifyContent: "center", padding: e.spaces.space8, position: "absolute", start: 0, top: 0 } }));
        },
        481115: (e, t, a) => {
            a.d(t, { F: () => s });
            var r = a(674132),
                n = a.n(r);
            function s(e, t) {
                return { primaryText: n().h9f2da68, secondaryText: n().cb0a3b5e, primaryAction: { onClick: e, buttonText: n().a0e81a2e }, secondaryAction: { onClick: t, buttonText: n().cfd2f35e } };
            }
        },
        547765: (e, t, a) => {
            a.d(t, { Q: () => r });
            const r = (e, t) => Boolean(e.possibly_sensitive || Object.keys({ ...t?.sensitive_media_warning }).length);
        },
        788958: (e, t, a) => {
            a.d(t, { e: () => A });
            var r = a(202784),
                n = a(396342),
                s = a(325686),
                o = a(978053),
                i = a(392237),
                l = a(674132),
                c = a.n(l),
                d = a(382880),
                u = a(187669),
                p = a(833828),
                m = a(334522),
                h = a(725516),
                b = a(673932),
                g = a(415805),
                f = a(965612),
                y = a(524483),
                _ = a(91946),
                w = a(467537),
                v = a(968343),
                C = a(153295),
                E = a(481115),
                x = a(547765),
                k = a(408124),
                S = a(334113),
                Z = a(709406);
            const P = () => r.createElement(Z.Z, { style: R.placeholder }),
                R = i.default.create((e) => ({ placeholder: { aspectRatio: "4 / 5", height: "100%" } })),
                B = r.memo(P),
                T = c().hf836e5f,
                I = { threshold: [0.5] },
                A = ({ handleNoriginArrowPress: e, isNearView: t, name: a, onFocus: i, onPress: l, playVideoPreview: c, scrollOptions: b, tweet: Z }) => {
                    const { closeModal: P, openModal: R } = (0, y.N)(),
                        A = (0, m.Z)(a) || a,
                        $ = (0, h.z)(),
                        O = (0, g.JY)(Z),
                        [F, D] = r.useState((0, x.Q)(Z, O)),
                        [N, V] = r.useState(!1),
                        L = r.useRef(null),
                        z = r.useRef(null),
                        K = r.useMemo(
                            () =>
                                (0, d.Z)(() => {
                                    $.scribe({ element: "short-video-card", action: "impression", data: { tweet_id: Z.id_str, items: [(0, S.P_)(Z)] } });
                                }),
                            [$, Z],
                        );
                    (0, u.q)(() => {
                        (0, p.go)(Z.id_str);
                        if ("IntersectionObserver" in window) {
                            const e = new IntersectionObserver((e) => {
                                    e[0].intersectionRatio >= 0.5 && K();
                                }, I),
                                t = z.current;
                            null != t && e.observe(t);
                            return () => {
                                e.disconnect();
                            };
                        }
                    });
                    const W = r.useCallback(
                            (e, t) => {
                                (L.current = setTimeout(() => {
                                    A === (0, n.getCurrentFocusKey)() && V(e);
                                }, k.K)),
                                    i?.(e, t, A),
                                    $.scribe({ element: "tv-short-video-card", action: "focus", data: { tweet_id: Z.id_str, items: [(0, S.P_)(Z)] } });
                            },
                            [$, A, i, Z],
                        ),
                        H = r.useCallback(() => {
                            L.current && clearTimeout(L.current), V(!1);
                        }, []),
                        q = r.useCallback(() => {
                            $.scribe({ element: "tv-short-video-card", action: "click", data: { tweet_id: Z.id_str, items: [(0, S.P_)(Z)] } }),
                                F
                                    ? R(
                                          (0, E.F)(() => {
                                              D(!1), P();
                                          }, P),
                                      )
                                    : l && l(Z);
                        }, [$, P, l, R, F, Z]),
                        U = r.useMemo(() => (0, S.Bq)(Z), [Z]),
                        j = o.default.formatTimeSinceDate(new Date(Z.created_at));
                    return r.createElement(s.Z, { ref: z }, r.createElement(w.C, { "aria-label": T({ tweetText: U, username: Z.user.name, screenName: Z.user.screen_name, views: Z.views?.count || 0, timeAgo: j }), focusedStyle: M.interactiveViewFocused, handleNoriginArrowPress: e, name: a, onBlur: H, onFocus: () => W(!0, !1), onPress: q, role: "link", scrollOptions: b, style: [M.interactiveView, N && M.noBorderRadius], testID: `tv-video-card-${Z.id_str}` }, r.createElement(f.Z, { placeholder: r.createElement(B, null), priority: t }, c && N && !Z.possibly_sensitive ? r.createElement(s.Z, { style: M.tvMiniPlayerContainer }, r.createElement(v.N, { tweet: Z })) : r.createElement(C.Z, { isRevealed: !F, media: O, tweetPossiblySensitive: Boolean(Z.possibly_sensitive) }, r.createElement(_.Ee, { "aria-label": O?.ext_alt_text, role: "img", source: O?.media_url_https, style: M.mediaTweetCardStyle })))));
                },
                M = i.default.create((e) => ({ interactiveView: { borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.large, color: e.colors.text, height: 250 * e.scaleMultiplier, width: 200 * e.scaleMultiplier, overflow: "hidden", transition: `border-radius ${b.$P}ms linear` }, interactiveViewFocused: { backgroundColor: e.colors.text }, mediaTweetCardStyle: { borderRadius: e.borderRadiiPx.large - e.borderWidthsPx.large, height: "100%", marginStart: 0, position: "absolute", width: "100%", transition: `border-radius ${b.$P}ms linear` }, tvMiniPlayerContainer: { width: "100%", height: "100%", overflow: "hidden" }, noBorderRadius: { borderRadius: "0" } }));
        },
        575626: (e, t, a) => {
            a.d(t, { TZ: () => o, Yn: () => i, ZR: () => r, j: () => n, sN: () => s });
            const r = 64,
                n = 320,
                s = "tv-sidebar-container",
                o = "tv-sidebar",
                i = "expand-collapse";
        },
        183822: (e, t, a) => {
            a.d(t, { O: () => re, Z: () => se });
            var r = a(202784),
                n = a(325686),
                s = a(392237),
                o = a(879891),
                i = a(520913),
                l = a(442128),
                c = a(673932),
                d = a(686010),
                u = a(575626),
                p = a(807896),
                m = (a(136728), a(396342)),
                h = a(107267),
                b = a(366635),
                g = a(674132),
                f = a.n(g),
                y = a(97301),
                _ = a(58399),
                w = a(535280),
                v = a(178519),
                C = a(348256),
                E = a(511323),
                x = a(883069),
                k = a(698891),
                S = a(297896),
                Z = a(873930),
                P = a(952793),
                R = a(530745),
                B = a(125363),
                T = a(680997),
                I = a(919022),
                A = a(708411),
                M = a(363047),
                $ = a(524483),
                O = a(752475),
                F = a(91946),
                D = a(467537);
            const N = ({ expanded: e, iconComponent: t, name: a, onSelect: s, renderCustomIcon: o, renderCustomText: i, style: l, text: c, withHideIcon: d }) => {
                    const u = r.useMemo(() => [L.iconContainer, d && L.hidden, e && L.visible], [e, d]),
                        p = r.useMemo(() => (o ? o() : t ? r.createElement(t, { style: L.icon }) : null), [t, o]),
                        m = r.useMemo(() => (i ? i() : r.createElement(F.Kh, { size: "body" }, c)), [i, c]);
                    return r.createElement(D.C, { "aria-label": void 0, name: a, onPress: s, role: "button", style: [L.root, l], withBackgroundStyle: e, withBorderStyle: !1 }, r.createElement(n.Z, { "aria-label": "string" != typeof m || e ? void 0 : m, style: u, testID: "sidebar-item-icon" }, p), r.createElement(n.Z, { style: L.textStyle }, m));
                },
                V = r.memo(N),
                L = s.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", overflow: "hidden", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, width: "100%" }, iconContainer: { alignItems: "center", justifyContent: "center", marginEnd: e.spaces.space24, height: e.spaces.space32, width: e.spaces.space32 }, icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.white }, textStyle: { userSelect: "none" }, hidden: { opacity: 0, transitionDuration: "100ms", transitionProperty: "opacity", transitionTimingFunction: "ease", userSelect: "none" }, visible: { opacity: 1 } })),
                z = f().f5edfbde,
                K = f().a4eb1304,
                W = f().ae1bbb26,
                H = f().cfd2f35e,
                q = f().ha8209bc,
                U = f().a9ae1e78,
                j = f().ae1bbb26,
                Q = f().bb081ea2,
                Y = f().e5b0e544,
                X = f().d960b55c,
                J = f().i3145aa0,
                G = s.default.create((e) => ({ root: { backgroundColor: e.colors.navigationBackground95, height: "100vh", overflow: "hidden", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space16, position: "absolute", width: u.j * e.scaleMultiplier, zIndex: 1 }, userAvatar: { height: e.spaces.space32, minHeight: e.spaces.space32, minWidth: e.spaces.space32, width: e.spaces.space32 }, gap: { flexGrow: 1 }, expandCollapseButton: { alignItems: "center", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, justifyContent: "center", marginStart: e.spaces.space16, width: e.spaces.space32 }, expandCollapseIcon: { height: e.spaces.space24, width: e.spaces.space24 }, sidebarItem: { marginBottom: e.spaces.space8 } })),
                ee = ({ onExpandOrCollapse: e }) => {
                    const t = (0, B.v9)(I.ZP.selectViewerUser),
                        a = (0, h.useHistory)(),
                        [s, i] = r.useState(!1),
                        { closeModal: l, openModal: g } = (0, $.N)(),
                        { direction: f } = (0, o.Z)(),
                        F = "rtl" === f,
                        D = F ? y.default : _.default,
                        N = F ? _.default : y.default,
                        L = (0, B.I0)(),
                        ee = (0, P.hC)("responsive_web_tv_settings_enabled"),
                        te = r.useCallback(() => {
                            requestAnimationFrame(() => {
                                (0, m.getCurrentFocusKey)()?.startsWith(`${u.sN}.${c.rQ}`) || (0, m.setFocus)(`${u.sN}.${c.rQ}`);
                            });
                        }, []),
                        ae = r.useCallback(() => {
                            e?.(!1), i(!1);
                        }, [e]),
                        re = r.useCallback(() => {
                            e?.(!0), i(!0);
                        }, [e]),
                        ne = r.useCallback(() => (t ? r.createElement(O.Z, { source: t.profile_image_url_https, style: G.userAvatar, verifiedType: t.verified_type }) : null), [t]),
                        se = r.useCallback(() => (t ? r.createElement(b.Z, { affiliateBadgeInfo: t.highlightedLabel, badgeContext: "content", isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, nameSize: "body", screenName: t.screen_name, screenNameSize: "body", verifiedType: t.verified_type, withLink: !1, withNameWrap: !0, withStackedLayout: !0 }) : null), [t]),
                        oe = r.useMemo(
                            () =>
                                [
                                    {
                                        hide: !t,
                                        renderCustomText: se,
                                        renderCustomIcon: ne,
                                        onSelect: () => {
                                            a.push((0, A.dX)(t?.screen_name || ""));
                                        },
                                    },
                                    {
                                        iconComponent: w.default,
                                        text: Y,
                                        hide: t,
                                        onSelect: () => {
                                            a.push(M.C2);
                                        },
                                    },
                                    {
                                        iconComponent: v.default,
                                        text: U,
                                        onSelect: () => {
                                            a.push(M.sH);
                                        },
                                    },
                                    {
                                        iconComponent: C.default,
                                        text: q,
                                        onSelect: () => {
                                            a.push(`${c.bb}?refresh=true`);
                                        },
                                    },
                                    {
                                        iconComponent: E.default,
                                        text: X,
                                        hide: !t,
                                        onSelect: () => {
                                            a.push(c.CW);
                                        },
                                    },
                                    {
                                        iconComponent: x.default,
                                        text: J,
                                        hide: !t,
                                        onSelect: () => {
                                            a.push(c.Qf);
                                        },
                                    },
                                    {
                                        hide: !ee || !t,
                                        iconComponent: k.default,
                                        text: Q,
                                        onSelect: () => {
                                            a.push(c.n4);
                                        },
                                    },
                                    {
                                        iconComponent: S.default,
                                        text: j,
                                        hide: !t,
                                        onSelect: () => {
                                            g({ primaryText: z, secondaryText: K, primaryAction: { buttonText: W, onClick: () => L((0, T.Z)({ redirectAfterLogout: `${window?.location?.origin || "x.com"}${c.bb}` })) }, secondaryAction: { buttonText: H, onClick: l } });
                                        },
                                        withHideIcon: !0,
                                    },
                                ].filter(({ hide: e }) => !e),
                            [t, se, ne, a, g, l, L, ee],
                        ),
                        ie = r.useMemo(
                            () =>
                                oe.map(({ hide: e, ...t }, a) => {
                                    return r.createElement(V, (0, p.Z)({}, t, { expanded: s, key: a, name: ((n = a), `sidebar-item-${String(n)}`), style: G.sidebarItem }));
                                    var n;
                                }),
                            [s, oe],
                        ),
                        le = r.useCallback(
                            ({ key: e }) => {
                                ((!F && e === R.Qs) || (F && e === R.QK)) && te();
                            },
                            [F, te],
                        );
                    return r.useEffect(() => a.listen(te), [a, te]), r.createElement(d.Z, { "aria-label": void 0, name: u.TZ, onArrowPress: le, onBlur: ae, onEscapeOrBack: te, onFocus: re, onMouseEnter: re, onMouseLeave: ae, role: "list", style: G.root, trackChildren: !0 }, ie, r.createElement(n.Z, { style: G.gap }), (0, Z.Z)() ? r.createElement(V, { expanded: s, iconComponent: s ? N : D, name: u.Yn, onSelect: s ? ae : re, style: G.sidebarItem, text: "Close" }) : null);
                },
                te = `translate(-${(u.j - u.ZR) * s.default.theme.scaleMultiplier}px,0)`,
                ae = `translate(${(u.j - u.ZR) * s.default.theme.scaleMultiplier}px,0)`,
                re = ({ autoFocus: e = !0, children: t, onEscapeOrBack: a, preferredChildName: s }) => {
                    const u = r.useRef(null),
                        p = (0, l.Z)(),
                        { direction: m } = (0, o.Z)(),
                        h = "rtl" === m,
                        b = r.useCallback(
                            (e) => {
                                const t = u.current;
                                t && (t.style.transform = e ? "translate(0,0)" : h ? ae : te);
                            },
                            [h],
                        ),
                        g = r.useCallback(() => {
                            p();
                        }, [p]);
                    return r.createElement(n.Z, { style: ne.root }, r.createElement(i.default, { style: ne.logo }), r.createElement(d.Z, { "aria-label": void 0, focusable: !1, name: "tv-sidebar-container", role: "layout", saveLastFocusedChild: !0, style: ne.sidebarContainer }, r.createElement(ee, { onExpandOrCollapse: b }), r.createElement(n.Z, { ref: u, style: [ne.slidingContainer, h && ne.slidingContainerRTL] }, r.createElement(d.Z, { "aria-label": void 0, autoFocus: e, forceFocus: !0, name: c.rQ, onEscapeOrBack: a || g, preferredChildName: s, role: "list", style: ne.content, trackChildren: !0 }, t))));
                },
                ne = s.default.create((e) => ({ root: { height: "100%", flex: 1 }, sidebarContainer: { flex: 1, height: "100%" }, logo: { zIndex: e.componentZIndices.appBarZIndex, end: e.spaces.space28, height: e.spaces.space40, position: "absolute", top: e.spacesPx.space28 - e.spacesPx.space2, width: e.spaces.space40 }, slidingContainer: { zIndex: e.componentZIndices.appBarZIndex, flex: 1, height: "100%", minHeight: "100%", width: `calc(100% - ${e.spaces.space64})`, marginStart: u.j * e.scaleMultiplier, position: "absolute", willChange: "transform", transition: `transform ${c.$P}ms ease`, transform: te, backgroundColor: "#000000" }, slidingContainerRTL: { transform: ae }, content: { flex: 1, height: "100%", minHeight: "100%" } })),
                se = re;
        },
        752475: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r = a(807896),
                n = a(202784),
                s = a(392237),
                o = a(91946);
            function i(e) {
                const { altText: t, borderStyle: a, source: s, style: i, verifiedType: c, withOuterBorder: d, ...u } = e,
                    p = n.useMemo(() => [l.root, d && ("Business" === c ? l.businessOuterBorder : l.userBorder), i], [i, d, c]),
                    m = n.useMemo(() => ["Business" === c ? l.businessInnerBorder : l.userBorder, a], [a, c]);
                return n.createElement(o.Ee, (0, r.Z)({}, u, { "aria-label": t, borderStyle: m, source: s, style: p }));
            }
            const l = s.default.create((e) => ({ root: { height: e.spaces.space32, width: e.spaces.space32 }, userBorder: { borderRadius: e.borderRadii.infinite }, businessInnerBorder: { borderRadius: e.borderRadii.small }, businessOuterBorder: { borderRadius: e.borderRadii.medium } }));
        },
        408124: (e, t, a) => {
            a.d(t, { K: () => r });
            const r = 2500;
        },
        334113: (e, t, a) => {
            a.d(t, { Bq: () => i, P_: () => l, m9: () => o, qU: () => s });
            a(136728);
            var r = a(479506),
                n = a(596219);
            const s = (e) => {
                switch (e) {
                    case "CompactCarousel":
                    case "TVShortCarousel":
                        return n.Y.SHORT_VIDEO;
                    default:
                        return n.Y.VIDEO;
                }
            };
            function o(e) {
                const t = document.createElement("span");
                return (t.innerHTML = e), t.textContent;
            }
            const i = (e) => {
                    const t = e.text?.substring(e.display_text_range[1] - 1, e.display_text_range[1] + 1),
                        a = /\p{Emoji}/u.test(t);
                    let r = 2 === e.display_text_range.length ? e.text?.substring(e.display_text_range[0], a ? e.display_text_range[1] + 1 : e.display_text_range[1]) : e.text;
                    const n = [];
                    return (
                        e.entities?.urls?.forEach((e) => {
                            n.push([e.indices[0], e.indices[1]]);
                        }),
                        e.entities?.media?.forEach((e) => {
                            e.indices && e.indices.length >= 2 && n.push([e.indices[0], e.indices[1]]);
                        }),
                        n.sort((e, t) => t[0] - e[0]),
                        n.forEach((e) => {
                            r = r.slice(0, e[0]) + r.slice(e[1]);
                        }),
                        o(r)
                    );
                },
                l = (e) => ({ id: e.id_str, item_type: r.Z.ItemType.TWEET, author_id: e.user.id_str, is_tweet_author_follows_viewer: !!e.user?.followed_by || !!e.retweeted_status?.user?.followed_by, is_viewer_follows_tweet_author: !!e.user?.following || !!e.retweeted_status?.user?.following, in_reply_to_tweet_id: e.in_reply_to_status_id_str, quoted_tweet_id: e.quoted_status?.id_str, retweeting_tweet_id: e.retweeted_status?.id_str, in_reply_to_author_id: e.in_reply_to_user_id_str, quoted_author_id: e.quoted_status?.user?.id_str || e.retweeted_status?.quoted_status?.user?.id_str, retweet_author_id: e?.retweeted_status?.user?.id_str, promoted_id: e?.promoted_content?.impression_id });
        },
        905979: (e, t, a) => {
            a.d(t, { K: () => U, Z: () => Q });
            var r = a(202784),
                n = a(396342),
                s = a(325686),
                o = a(891198),
                i = a(978053),
                l = a(366635),
                c = a(124964),
                d = a(392237),
                u = a(674132),
                p = a.n(u),
                m = a(720600),
                h = a(382880),
                b = a(187669),
                g = a(833828),
                f = a(988428),
                y = a(334522),
                _ = a(952793),
                w = a(62338),
                v = a(725516),
                C = a(125363),
                E = a(689642),
                x = a(145177),
                k = a(673932),
                S = a(415805),
                Z = a(949626),
                P = a(965612),
                R = a(709406),
                B = a(524483),
                T = a(729922),
                I = a(91946),
                A = a(269653),
                M = a(467537),
                $ = a(968343),
                O = a(153295),
                F = a(481115),
                D = a(547765),
                N = a(408124),
                V = a(334113);
            const L = p().jc81f6a7,
                z = p().hf836e5f,
                K = p().d58baa7f,
                W = p().g062295e,
                H = p().f2382014,
                q = { threshold: [0.5] },
                U = ({ authorTextSize: e = "subtext2", handleNoriginArrowPress: t, isNearView: a, name: d, onFocus: u, onPress: p, onReady: k, playVideoPreview: U, scrollOptions: Q, showViewCount: Y = !0, style: X, tweet: J }) => {
                    const { closeModal: G, openModal: ee } = (0, B.N)(),
                        te = (0, v.z)(),
                        ae = (0, C.I0)(),
                        re = (0, y.Z)(d) || d,
                        ne = (0, S.JY)(J),
                        se = r.useRef(null),
                        oe = r.useRef(0),
                        [ie, le] = r.useState(!1),
                        ce = (0, _.hC)("responsive_web_messages_continue_enabled"),
                        de = ne?.media_results?.result?.watch_info?.last_watched_seconds || 0,
                        ue = ne?.video_info?.duration_millis || 0,
                        pe = ue > 0 ? (de / (ue / 1e3)) * 100 : 0,
                        [me, he] = r.useState((0, D.Q)(J, ne)),
                        be = r.useRef(null),
                        ge = r.useMemo(
                            () =>
                                (0, h.Z)(() => {
                                    te.scribe({ element: "video-card", action: "impression", data: { tweet_id: J.id_str, items: [(0, V.P_)(J)] } });
                                }),
                            [te, J],
                        );
                    (0, b.q)(() => {
                        (0, g.go)(J.id_str);
                        if ("IntersectionObserver" in window) {
                            const e = new IntersectionObserver((e) => {
                                    e[0].intersectionRatio >= 0.5 && ge();
                                }, q),
                                t = be.current;
                            null != t && e.observe(t);
                            return () => {
                                e.disconnect();
                            };
                        }
                    });
                    const fe = r.useCallback(
                            (e, t, a = !1) => {
                                a ||
                                    (se.current = setTimeout(() => {
                                        re === (0, n.getCurrentFocusKey)() && le(e);
                                    }, N.K)),
                                    u?.(e, t, re),
                                    te.scribe({ element: "tv-video-card", action: "focus", data: { tweet_id: J.id_str, items: [(0, V.P_)(J)] } });
                            },
                            [te, re, u, J],
                        ),
                        ye = r.useCallback(() => {
                            se.current && clearTimeout(se.current), le(!1);
                        }, []),
                        _e = r.useCallback((e) => {
                            const t = (e && (0, f.Ci)(e)?.currentTimeMs) || 0;
                            oe.current = t;
                        }, []),
                        we = r.useCallback(() => {
                            if ((te.scribe({ element: "tv-video-card", action: "click", data: { tweet_id: J.id_str, items: [(0, V.P_)(J)] } }), !me)) return p && p(J, oe.current);
                            ee(
                                (0, F.F)(() => {
                                    he(!1), G();
                                }, G),
                            );
                        }, [te, G, p, ee, me, J]),
                        ve = r.useCallback(
                            (e) => {
                                e.stopPropagation(), p && p(J, oe.current);
                            },
                            [p, J],
                        ),
                        Ce = r.useMemo(() => (0, V.Bq)(J), [J]),
                        Ee = J?.card?.binding_values?.broadcast_id?.string_value;
                    r.useEffect(() => {
                        Ee && ae(E.Z.fetchOne(Ee));
                    }, [ae, Ee]);
                    const xe = (0, C.v9)((0, x.C)(Ee)),
                        ke = J?.card?.binding_values?.broadcast_thumbnail?.image_value.url,
                        Se = ke || ne?.media_url_https,
                        Ze = "Running" === xe?.state,
                        Pe = !me && !Ze,
                        Re = r.useMemo(() => r.createElement(Z.Z, { ref: be }, r.createElement(M.C, { "aria-label": void 0, focusedStyle: j.focusedPreviewWrapper, handleNoriginArrowPress: t, name: d, onBlur: () => ye(), onFocus: () => fe(!0, !1, !0), onPress: we, role: "status", scrollOptions: Q, style: [j.preview, ie && j.noBorderRadius], testID: `tv-video-card-${J.id_str}` }, r.createElement(T.M, { aspectRatio: 16 / 9 }, r.createElement(R.Z, { style: j.placeholderImage }))), r.createElement(Z.Z, { style: j.headline }, r.createElement(Z.Z, { style: j.headlineContent }, r.createElement(R.Z, { style: j.placeholderTitle }), r.createElement(R.Z, { style: j.placeholderDescription }), r.createElement(R.Z, { style: j.placeholderDescription })))), [ye, we, fe, t, d, ie, Q, J.id_str]),
                        Be = L({ count: o.ZP.getTruncatedCount(xe?.total_watched || 0) }),
                        Te = i.default.formatTimeSinceDate(new Date(J.created_at));
                    return r.createElement(
                        s.Z,
                        { onClick: ve, ref: be, role: "link", style: [j.root, X] },
                        r.createElement(
                            P.Z,
                            { onReady: k, placeholder: Re, priority: a },
                            r.createElement(
                                M.C,
                                { "aria-label": z({ tweetText: Ce, username: J.user.name, screenName: J.user.screen_name, views: J.views?.count || xe?.total_watched || 0, timeAgo: Te }), focusedStyle: j.focusedPreviewWrapper, handleNoriginArrowPress: t, name: d, onBlur: () => ye(), onFocus: () => fe(!0, !1), onPress: we, role: "link", scrollOptions: Q, style: [j.preview, U && ie && j.noBorderRadius], testID: `tv-video-card-${J.id_str}` },
                                r.createElement(
                                    T.M,
                                    { aspectRatio: 16 / 9 },
                                    U && ie && !J.possibly_sensitive
                                        ? r.createElement(
                                              s.Z,
                                              { style: j.tvMiniPlayerContainer },
                                              r.createElement($.N, {
                                                  onPlayComplete: () => {
                                                      le(!1);
                                                  },
                                                  onStateUpdate: _e,
                                                  previewPlayTimeMs: 3e4,
                                                  showDuration: !0,
                                                  tweet: J,
                                                  volumeAttackAndReleaseTimeMs: 3e3,
                                              }),
                                          )
                                        : r.createElement(O.Z, { isRevealed: !me, media: ne, tweetPossiblySensitive: Boolean(J.possibly_sensitive) }, r.createElement(I.Ee, { source: Se, style: [j.previewImage, U && ie && j.noBorderRadius] })),
                                    r.createElement(s.Z, { style: j.bottomContainer }, !(ce && pe > 0) || (U && ie) ? null : r.createElement(s.Z, { style: [j.watchedLine, { width: `${pe}%` }] }), !Pe || Ee || (U && ie) ? null : r.createElement(s.Z, { style: j.duration }, r.createElement(I.Kh, { size: "subtext3" }, (0, w.y)(ne?.video_info.duration_millis))), Ze ? r.createElement(s.Z, { style: j.livePill }, r.createElement(s.Z, { style: j.liveText }, r.createElement(I.Kh, { "aria-label": H, size: "subtext3", weight: "bold" }, H)), r.createElement(s.Z, { style: j.viewerCount }, r.createElement(I.Kh, { size: "subtext3" }, Be))) : null),
                                ),
                            ),
                            r.createElement(s.Z, { style: j.headline }, r.createElement(s.Z, { style: j.headlineContent }, r.createElement(I.Kh, { numberOfLines: 2, size: "headline2", style: j.title, weight: "bold" }, J.retweeted ? r.createElement(m.default, { "aria-label": W, style: j.retweetedIcon }) : null, r.createElement(A.x, { text: Ce })), r.createElement(l.Z, { affiliateBadgeInfo: J.user.highlightedLabel, badgeContext: "content", isBlueVerified: J.user.is_blue_verified, isProtected: J.user.protected, isVerified: J.user.verified, name: J.user.name, nameSize: e, screenName: J.user.screen_name, screenNameSize: e, style: j.userName, verifiedType: J.user.verified_type, withLink: !1 }), r.createElement(s.Z, { style: j.headlineFooter }, J.views?.count && Y ? r.createElement(r.Fragment, null, r.createElement(I.Kh, { color: "gray700", size: e }, K(parseInt(J.views.count, 10))), r.createElement(c.Z, { size: e })) : null, r.createElement(I.Kh, { color: "gray700", size: e }, Te)))),
                        ),
                    );
                },
                j = d.default.create((e) => ({
                    root: {},
                    placeholderImage: { width: "100%", height: "100%" },
                    placeholderAvatar: { width: e.spaces.space32, borderRadius: e.borderRadii.infinite, height: e.spaces.space32 },
                    placeholderTitle: { width: "100%", height: `calc(${e.spaces.space36} - ${e.spaces.space2})`, marginTop: e.spaces.space2, marginBottom: e.spaces.space2 },
                    placeholderDescription: { width: "100%", height: e.spaces.space16, marginTop: e.spaces.space2, marginBottom: e.spaces.space2 },
                    userAvatar: { flexBasis: e.spaces.space32, marginTop: e.spaces.space4, height: e.spaces.space32, width: e.spaces.space32 },
                    preview: { borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.large, transition: `border-radius ${k.$P}ms linear`, marginBottom: e.spaces.space12 },
                    previewImage: { borderRadius: e.borderRadiiPx.large - e.borderWidthsPx.medium, height: "100%", width: "100%", transition: `border-radius ${k.$P}ms linear` },
                    focusedPreviewWrapper: { backgroundColor: e.colors.brandColor },
                    headline: { display: "flex", flexDirection: "row", boxSizing: "border-box", paddingStart: e.borderWidths.large, paddingEnd: e.borderWidths.large, width: "100%" },
                    headlineContent: { display: "flex", flexDirection: "column", flex: 1 },
                    title: { textOverflow: "ellipsis", width: "100%", marginBottom: e.spaces.space8 },
                    userName: { marginBottom: e.spaces.space8 },
                    headlineFooter: { alignItems: "center", flexDirection: "row" },
                    bottomContainer: { position: "absolute", bottom: 0, start: 0, display: "flex", flexDirection: "column-reverse", width: "100%" },
                    watchedLine: { backgroundColor: e.colors.red400, marginStart: e.spaces.space4, height: e.spaces.space4, borderBottomStartRadius: e.borderRadii.large, borderBottomEndRadius: e.borderRadii.large, borderTopEndRadius: e.borderRadii.large },
                    duration: { backgroundColor: e.colors.translucentBlack30, borderRadius: e.borderRadii.small, padding: e.spaces.space2, paddingEnd: e.spaces.space4, marginStart: e.spaces.space12, marginBottom: e.spaces.space8, width: "fit-content" },
                    livePill: { bottom: e.spaces.space8, start: e.spaces.space8, display: "flex", flexDirection: "row", width: "fit-content" },
                    liveText: { backgroundColor: e.colors.magenta500, borderTopStartRadius: e.borderRadii.small, borderBottomStartRadius: e.borderRadii.small, padding: e.spaces.space2, paddingEnd: e.spaces.space4, paddingStart: e.spaces.space4 },
                    viewerCount: { backgroundColor: e.colors.translucentBlack77, borderTopEndRadius: e.borderRadii.small, borderBottomEndRadius: e.borderRadii.small, padding: e.spaces.space2, paddingEnd: e.spaces.space4, paddingStart: e.spaces.space4 },
                    retweetedIcon: { color: e.colors.gray900, height: e.spaces.space20, marginEnd: e.spaces.space4 },
                    tvMiniPlayerContainer: { width: "100%", height: "100%", overflow: "hidden" },
                    noBorderRadius: { borderRadius: "0" },
                })),
                Q = r.memo(U);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(500002),
                s = a(668214),
                o = a(997174),
                i = a(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: s, search: o },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (l = !0));
                    const c = n || i;
                    ((c && n !== i) || (!c && a !== s) || r !== o || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(l(c));
        },
        334522: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                n = a(396342);
            function s(e, t = !0) {
                const a = r.useContext(n.FocusContext),
                    s = a === n.ROOT_FOCUS_KEY;
                return void 0 !== e && t ? `${s ? "" : `${a}.`}${e}` : e;
            }
        },
        898063: (e, t, a) => {
            a.d(t, { $R: () => d, ZP: () => p, bH: () => u });
            var r = a(202784),
                n = a(396342),
                s = a(426200),
                o = a(530745),
                i = a(721645);
            const l = { Play: i.Je, PauseOrStop: i.xb, PlayPause: i.zA, FastForward: i.FA, Rewind: i.t, EscapeOrBack: i.S9, Arrow: i.Wl, AlphaNumeric: i.bJ, Space: i.Xq, Backspace: i.oD, Delete: i.rH };
            let c = {};
            function d() {
                const { logMessageToScreen: e } = (0, s.n)(),
                    t = r.useCallback(
                        (t) => {
                            const a = (0, n.getCurrentFocusKey)() || "",
                                r = a.split("."),
                                s = Object.keys(c).find((e) => (l[e] ? l[e](t.key) || l[e](t.keyCode) : e === t.key));
                            if ((e(`keyDown: ${s || "no match"}(${t.key}) ${a}`, "aqua"), !s)) return;
                            const o = (e) => {
                                const a = c[s] && c[s][e];
                                return a && a(t);
                            };
                            for (; r.length; ) {
                                if (o(r.join("."))) return;
                                r.pop();
                            }
                            o(n.ROOT_FOCUS_KEY);
                        },
                        [e],
                    );
                r.useEffect(
                    () => (
                        document.addEventListener("keydown", t),
                        () => {
                            document.removeEventListener("keydown", t), (c = {});
                        }
                    ),
                    [t],
                );
            }
            function u() {
                const e = r.useCallback(() => {
                    document?.dispatchEvent?.(new KeyboardEvent("keydown", { key: o.nQ }));
                }, []);
                r.useEffect(
                    () => (
                        document.addEventListener("back-key-pressed", e),
                        () => {
                            document.removeEventListener("back-key-pressed", e);
                        }
                    ),
                    [e],
                );
            }
            function p(e, t, a = n.ROOT_FOCUS_KEY) {
                const s = r.useMemo(() => (Array.isArray(e) ? e : [e]), [e]);
                r.useEffect(() => {
                    if (t)
                        return (
                            s.forEach((e) =>
                                (function (e, t, a) {
                                    c[e] || (c[e] = {}), (c[e][t] = a);
                                })(e, a, t),
                            ),
                            () => {
                                s.forEach((e) =>
                                    (function (e, t) {
                                        c[e] && c[e][t] && delete c[e][t];
                                    })(e, a),
                                );
                            }
                        );
                }, [t, a, e, s]);
            }
        },
        442128: (e, t, a) => {
            a.d(t, { Z: () => i });
            a(543673), a(240753), a(128399);
            var r = a(202784),
                n = a(107267);
            const s = "/i/tv",
                o = /\/i\/tv(\?.*|$)/;
            function i() {
                const e = (0, n.useHistory)();
                return r.useCallback(
                    (t) => {
                        e.goBack({ backLocation: s });
                        const a = e.listen((r) => {
                            a();
                            const n = Boolean(t?.doNotRefreshHome);
                            if (r.pathname.match(o) && !n) {
                                const t = new URLSearchParams(r.search);
                                t.delete("refresh"), t.set("refresh", "true"), e.replace(`${r.pathname}?${t.toString()}`);
                            }
                        });
                    },
                    [e],
                );
            }
        },
        602070: (e, t, a) => {
            a.d(t, { KN: () => p, ZP: () => m, nP: () => d });
            a(136728);
            var r = a(202784),
                n = a(396342),
                s = a(107267),
                o = a(187669);
            const i = [];
            let l,
                c = !1;
            function d() {
                const e = (0, s.useHistory)(),
                    t = r.useRef(e.index);
                r.useEffect(
                    () =>
                        e.listen(() => {
                            (c = (e.index || 0) < t.current), (t.current = e.index), c ? (l = i.pop()) : i.push((0, n.getCurrentFocusKey)());
                        }),
                    [e],
                );
            }
            const u = (e = !0, t, a) => {
                    e && c && (l?.startsWith(a) || a === n.ROOT_FOCUS_KEY) && ((0, n.setFocus)(l, { isScrollRestoration: !0 }), t?.(l));
                },
                p = (e = !0, t) => {
                    const a = r.useContext(n.FocusContext);
                    return r.useCallback(() => {
                        u(e, t, a);
                    }, [e, a, t]);
                };
            function m(e = !0, t) {
                const a = r.useContext(n.FocusContext);
                (0, o.q)(() => {
                    u(e, t, a);
                });
            }
        },
        873930: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(393058),
                n = a(323265),
                s = a(952793);
            function o() {
                const e = (0, s.hC)("responsive_web_tv_touch_enabled"),
                    t = n.ZP.isTesla();
                return (r.Z.isTouchSupported() && e) || t;
            }
        },
        62338: (e, t, a) => {
            a.d(t, { y: () => r });
            const r = (e) => {
                if (e) {
                    const t = Math.round(e / 1e3),
                        a = t % 60,
                        r = a < 10 ? `0${a}` : a,
                        n = (t - a) / 60;
                    if (n > 60) {
                        const e = n % 60;
                        return `${Math.floor(n / 60)}:${e % 60 < 10 ? `0${e}` : e}:${r}`;
                    }
                    return `${n}:${r}`;
                }
            };
        },
        145177: (e, t, a) => {
            a.d(t, { C: () => r });
            const r = (e) => (t) => {
                if (!e) return;
                return t.entities.broadcasts.entities[e];
            };
        },
        673932: (e, t, a) => {
            a.d(t, { $P: () => l, CW: () => s, Lc: () => u, Qf: () => o, X5: () => d, bb: () => n, jP: () => c, n4: () => i, rQ: () => r });
            a(543673), a(240753), a(128399);
            const r = "main",
                n = "/i/tv",
                s = "/i/tv/following",
                o = "/i/tv/bookmarks",
                i = "/i/tv/settings",
                l = 140,
                c = l + 10,
                d = (e, t) => {
                    const a = t ? new URLSearchParams({ t: t.toString() }) : void 0,
                        r = a ? `?${a?.toString()}` : "";
                    return `/i/tv/player/${e.id_str}${r}`;
                },
                u = (e) => `/i/tv/trend/${e}`;
        },
        721645: (e, t, a) => {
            a.d(t, { FA: () => d, Je: () => i, S9: () => o, Wl: () => p, Xq: () => b, bJ: () => h, oD: () => g, rH: () => f, sN: () => s, t: () => u, xb: () => l, zA: () => c });
            var r = a(530745),
                n = a(105788);
            const s = (e) => {
                    const t = window?.webOSSystem || window?.webOS,
                        a = window?.VIZIO,
                        r = window?.tizen,
                        s = window?.Android;
                    t ? t.platformBack() : r ? ("EXIT" === e?.samsungExitConfiguration ? r?.application?.getCurrentApplication().exit() : "HIDE" === e?.samsungExitConfiguration ? r?.application?.getCurrentApplication().hide() : e?.unhandledCallback?.()) : s ? n.X.platformBack() : a ? a?.exitApplication() : e?.unhandledCallback?.();
                },
                o = (e) => ("number" == typeof e ? e === r.cY || e === r.Rv : e === r.UH || e === r.uR || e === r.Ct || e === r.i_ || e === r.nQ || e === r.F$ || e === r.Ci),
                i = (e) => ("number" == typeof e ? e === r.Si : e === r.Zd || e === r.ZP),
                l = (e) => ("number" == typeof e ? e === r.Pf || e === r.W2 : e === r.E4 || e === r.oh || e === r.KH || e === r.EF),
                c = (e) => e === r.tI || e === r.Yt || e === r.L_,
                d = (e) => ("number" == typeof e ? e === r.xp : e === r.G0),
                u = (e) => ("number" == typeof e ? e === r.Dy : e === r.R2),
                p = (e) => e === r.WX || e === r.QK || e === r.kl || e === r.Qs,
                m = new RegExp("[a-zA-Z0-9]"),
                h = (e) => 1 === e.length && !!m.exec(e),
                b = (e) => 32 === e || "Space" === e,
                g = (e) => 8 === e || "Backspace" === e,
                f = (e) => 46 === e || "Delete" === e;
        },
        105788: (e, t, a) => {
            a.d(t, { X: () => r });
            class r {
                static getAndroidDeviceId() {
                    if (window) return window?.Android?.getAndroidDeviceId?.();
                }
                static platformBack() {
                    window?.Android?.platformBack();
                }
                static onPlayVideo() {
                    window?.Android?.onPlayVideo();
                }
                static onPauseVideo() {
                    window?.Android?.onPauseVideo();
                }
            }
        },
        708411: (e, t, a) => {
            a.d(t, { KB: () => n, dX: () => r, jz: () => s });
            const r = (e) => `/i/tv/profile/${e}`,
                n = /_normal\.(jpg|jpeg|png)$/,
                s = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
        },
        415805: (e, t, a) => {
            a.d(t, { JY: () => n, Rq: () => r, uS: () => s });
            const r = (e) => {
                    const t = n(e),
                        a = o(e);
                    return t || a ? a || t : null;
                },
                n = (e) => {
                    let t = e.extended_entities?.media?.find((e) => "video" === e.type);
                    return t || (t = e?.retweeted_status?.extended_entities?.media?.find((e) => "video" === e.type)), t && "video" === t.type ? t : null;
                },
                s = (e) => r(e)?.media_url_https,
                o = (e) => {
                    const t = e.card;
                    if (t?.binding_values?.broadcast_id?.string_value) {
                        const a = { id: t.binding_values.broadcast_id?.string_value, tweetId: e.id_str, type: "broadcast" };
                        return { poster: t.binding_values.broadcast_thumbnail?.image_value, id_str: t.binding_values.broadcast_id.string_value, tweetId: t.binding_values.broadcast_id?.string_value, media_url_https: t.binding_values.broadcast_url?.string_value || "", type: "video", video_info: { aspect_ratio: [parseInt(t.binding_values.broadcast_width?.string_value, 10), parseInt(t.binding_values.broadcast_height?.string_value, 10)], variants: [] }, videoId: a, contentType: "vmap", includeBroadcastEventAssociation: !1, ext_alt_text: t?.binding_values?.broadcast_title?.string_value || "" };
                    }
                    return null;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TV~bundle.Account-e019dbda.d1e7cf9a.js.map
