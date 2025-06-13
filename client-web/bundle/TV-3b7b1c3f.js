"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TV-3b7b1c3f"],
    {
        713428: (e, t, a) => {
            a.r(t), a.d(t, { SEARCH_BASED_PAGE_ELEMENT_NAME: () => m, default: () => p });
            var s = a(202784),
                r = a(325686),
                n = a(731708),
                o = a(392237),
                l = a(902641),
                i = a(273413),
                c = a(183822),
                d = a(283512),
                u = a(293115);
            const m = "searchBasedPage";
            function p({ pageName: e, query: t, searchTab: a = "search", title: o }) {
                const m = s.useRef({ id: 0, lastEventTimeMs: Date.now(), query: t }),
                    p = s.useRef(t),
                    { clearVoiceHandlers: y, registerVoiceHandlers: f } = (0, l.B)();
                return (
                    s.useEffect(
                        () => (
                            f({ onupdatestate: () => i.E.List }),
                            function () {
                                y();
                            }
                        ),
                        [y, f],
                    ),
                    s.createElement(u.nO, { namespace: { page: e || "search" } }, s.createElement(c.Z, null, s.createElement(r.Z, { style: b.root }, s.createElement(n.ZP, { size: "headline1", style: b.title, weight: "bold" }, o), s.createElement(r.Z, { style: b.content }, s.createElement(d.Z, { debounceStateRef: m, name: "search-based-content", product: "Latest", query: t, queryRef: p, searchTab: a, width: 4 })))))
                );
            }
            const b = o.default.create((e) => ({ root: { paddingTop: e.spaces.space64, paddingHorizontal: e.spaces.space32, height: "100%" }, title: { marginBottom: e.spaces.space16 }, content: { flex: 1, overflowY: "auto" } }));
        },
        240373: (e, t, a) => {
            a.r(t), a.d(t, { default: () => w });
            var s = a(202784),
                r = a(325686),
                n = a(731708),
                o = a(954110),
                l = a(392237),
                i = a(111677),
                c = a.n(i),
                d = a(467537),
                u = a(183822),
                m = a(725405),
                p = a(71620),
                b = a(668214),
                y = a(38562);
            const f = (0, b.Z)()
                    .propsFromState(() => ({ settings: y.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ displaySensitiveMediaEnabled: e.display_sensitive_media }))
                    .propsFromActions(() => ({ updateSettings: y.VP, createLocalApiErrorHandler: (0, p.zr)("TV_SETTINGS_SCREEN") }))
                    .withAnalytics({ page: "tv-settings" }),
                g = c().bb081ea2,
                E = c().fc1d217c,
                h = { page: "tv-settings" },
                v = l.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space24, height: "100%" }, title: { marginBottom: e.spaces.space64 }, settings: { width: "50%" } })),
                w = f(({ createLocalApiErrorHandler: e, displaySensitiveMediaEnabled: t, updateSettings: a }) => {
                    const l = (0, m.Z)(),
                        i = s.useCallback(
                            (t, s) => {
                                l.scribe({ ...h, element: t, action: s ? "enable" : "disable" }), a({ [t]: s }).catch(e({ showToast: !0 }));
                            },
                            [a, e, l],
                        ),
                        c = s.useCallback(() => {
                            i("display_sensitive_media", !t);
                        }, [t, i]);
                    return s.createElement(u.O, null, s.createElement(r.Z, { style: v.root }, s.createElement(n.ZP, { size: "headline1", style: v.title, weight: "bold" }, g), s.createElement(d.C, { "aria-label": void 0, name: "settings_display_sensitive_media", onPress: c, role: "button", style: v.settings }, s.createElement(o.Z, { checked: t, label: E, name: "display_sensitive_media", onChange: i }))));
                });
        },
        664269: (e, t, a) => {
            a.r(t), a.d(t, { TVTrend: () => E, default: () => v });
            a(136728);
            var s = a(202784),
                r = a(325686),
                n = a(392237),
                o = a(516951),
                l = a(290402),
                i = a(91946),
                c = a(650093),
                d = a(305332),
                u = a(183822),
                m = a(125363),
                p = a(903558),
                b = a(682461),
                y = a(312771),
                f = a(673932);
            const g = (e) => {
                    const t = e.tv?.trend;
                    return t;
                },
                E = ({ history: e, match: t }) => {
                    const a = t.params.trendId,
                        n = (0, m.v9)(g),
                        E = (0, m.I0)();
                    s.useEffect(() => {
                        a && E((0, b.fx)(a));
                    }, [E, a]);
                    const v = s.useCallback(
                            (t) => {
                                E(p.eX.playerOpen(t)), e.push((0, f.X5)(t));
                            },
                            [E, e],
                        ),
                        w = s.useCallback(() => {
                            const e = n?.timeline || [];
                            return e.length > 1 ? s.createElement(d.Z, { autoFocus: !0, categories: e, name: "tv-trend-content", onSelectVideo: v, returnToFirstElementOnEscape: !0 }) : s.createElement(c.Z, { autoFocus: !0, content: e?.[0]?.content, name: "tv-trend-content", onSelectVideo: v, returnToFirstElementOnEscape: !0 });
                        }, [v, n?.timeline]);
                    return s.createElement(s.Fragment, null, s.createElement(u.O, null, s.createElement(r.Z, { style: h.container }, s.createElement(r.Z, { style: h.header }, s.createElement(r.Z, { style: h.headerTextContainer }, n?.name ? s.createElement(i.Kh, { size: "title3", style: h.marginBottom8 }, n?.name || "") : null, n?.summary ? s.createElement(i.Kh, { numberOfLines: 6, size: "body", style: h.marginBottom8 }, n?.summary) : null)), s.createElement(r.Z, { style: h.scrollableArea }, s.createElement(l.Z, { fetchStatus: n ? y.ZP.LOADED : y.ZP.LOADING, onRequestRetry: o.Z, render: w, retryable: !1 })))));
                },
                h = n.default.create((e) => ({ container: { height: "100vh", paddingHorizontal: e.spaces.space32, display: "grid", gridTemplateRows: "fit-content 1fr" }, header: { width: "100%", minHeight: e.spaces.space48 }, headerTextContainer: { display: "flex", flexDirection: "column", width: `calc(100% - ${e.spaces.space80})`, paddingVertical: e.spaces.space16, marginBottom: `-${e.spaces.space8}` }, marginBottom8: { marginBottom: e.spaces.space8 }, scrollableArea: { overflowY: "auto", overflowX: "hidden" } })),
                v = E;
        },
        653122: (e, t, a) => {
            a.d(t, { r: () => U });
            var s = a(202784),
                r = a(214997),
                n = a(392237),
                o = a(111677),
                l = a.n(o),
                i = a(97301),
                c = a(459679),
                d = a(370751),
                u = a(91946),
                m = a(686010),
                p = a(467537),
                b = a(500529),
                y = a(873930),
                f = a(293115),
                g = a(87063),
                E = a(125363),
                h = a(682461),
                v = a(622333),
                w = a(270704),
                _ = a(366635),
                C = a(124964),
                k = a(966886),
                S = a(382880),
                P = a(187669),
                Z = a(833828),
                B = a(752475),
                x = a(334113),
                I = a(725516);
            const T = l().aaad27c8,
                L = l().d228a9a0,
                R = l().d227d19e,
                A = { threshold: [0.5] },
                M = { behavior: "smooth", block: "center", inline: "nearest" },
                z = ({ autoFocus: e, elementName: t, handlePress: a, isByAuthor: r, isExpanded: n, style: o, tweet: l }) => {
                    const i = (0, I.z)(),
                        c = s.useRef(null),
                        d = s.useMemo(
                            () =>
                                (0, S.Z)(() => {
                                    i.scribe({ element: t, action: "impression", data: { tweet_id: l.id_str, items: [(0, x.P_)(l)] } });
                                }),
                            [i, t, l],
                        );
                    (0, P.q)(() => {
                        (0, Z.go)(l.id_str);
                        if ("IntersectionObserver" in window) {
                            const e = new IntersectionObserver((e) => {
                                    e[0].intersectionRatio >= 0.5 && d();
                                }, A),
                                t = c.current;
                            null != t && e.observe(t);
                            return () => {
                                e.disconnect();
                            };
                        }
                    });
                    const m = 2 === l.display_text_range.length ? l.text?.substring(l.display_text_range[0], l.display_text_range[1] + 1) : l.text,
                        b = l.note_tweet?.text,
                        y = s.useCallback(() => {
                            i.scribe({ element: t, action: "focus", data: { tweet_id: l.id_str, items: [(0, x.P_)(l)] } });
                        }, [i, t, l]);
                    return s.createElement(p.C, { "aria-label": void 0, autoFocus: e, focusedStyle: N.focusedItem, key: `conversation-tweet-${l.id_str}`, name: `conversation-tweet-${l.id_str}`, onFocus: y, onPress: () => a(l.id_str), role: "text", scrollOptions: M, style: [N.conversationItemContainer, o] }, s.createElement(u.G7, { ref: c, style: N.conversationItem }, s.createElement(u.G7, { style: [N.conversationUserInfo, N.marginBottom8] }, s.createElement(B.Z, { source: l.user.profile_image_url_https, style: N.userAvatar, verifiedType: l.user.verified_type }), s.createElement(u.G7, { style: N.userInfoSectionBumpUp }, s.createElement(u.G7, { style: N.conversationUserInfo }, s.createElement(_.Z, { affiliateBadgeInfo: l.user.highlightedLabel, badgeContext: "content", isBlueVerified: l.user.is_blue_verified, isProtected: l.user.protected, isVerified: l.user.verified, name: l.user.name, nameSize: "body", screenName: l.user.screen_name, screenNameSize: "body", style: N.marginEnd4, verifiedType: l.user.verified_type, withLink: !1 }), s.createElement(C.Z, { style: N.marginEnd4 }), s.createElement(k.Z, { color: "gray700", size: "body", timestamp: l.created_at })), r ? s.createElement(u.G7, null, s.createElement(u.Kh, { size: "body", style: N.isByAuthorText, weight: "bold" }, T)) : null)), s.createElement(u.G7, { style: N.marginBottom8 }, s.createElement(u.Kh, { size: "body" }, b && n ? (0, x.m9)(b) : (0, x.m9)(m))), b ? s.createElement(u.G7, { style: [N.showMoreCta, N.marginBottom8] }, s.createElement(u.Kh, { color: "blue500", size: "body", weight: "bold" }, n ? R : L)) : null));
                },
                N = n.default.create((e) => ({ conversationItemContainer: { width: `calc(100% - ${e.spaces.space32}`, maxWidth: `calc(100% - ${e.spaces.space32}`, overflowX: "hidden", textOverflow: "ellipsis", padding: e.spaces.space12, backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.large }, userAvatar: { marginEnd: e.spaces.space8 }, focusedItem: { backgroundColor: e.colors.brandColor }, conversationItem: { display: "flex", flexDirection: "column", marginBottom: `-${e.spaces.space8}` }, marginEnd4: { marginEnd: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, conversationUserInfo: { alignItems: "center", display: "flex", flexDirection: "row" }, userInfoSectionBumpUp: { position: "relative", top: `-${e.spaces.space1}` }, isByAuthorText: { color: e.colors.blue500, paddingBottom: e.spaces.space4 }, showMoreCta: { textAlign: "center" } })),
                F = s.memo(z),
                D = l().jdceda60,
                O = l().ia5e7488,
                V = (e) => {
                    const t = e.tv?.player?.conversation || [];
                    return (0, c.Z)(t, (e) => e.tweet);
                },
                K = (e) => e.tv?.player?.conversationBottomCursor,
                G = (e) => e.tv?.player?.conversationFetchStatus,
                U = ({ onClose: e, tweet: t }) => {
                    const a = (0, E.I0)(),
                        n = (0, E.v9)(V),
                        o = (0, E.v9)(K),
                        l = (0, E.v9)(G),
                        [c, _] = s.useState(new Set()),
                        [C, k] = s.useState(void 0),
                        { closeConversation: S } = (0, w.L)(),
                        P = (0, y.Z)();
                    s.useEffect(() => {
                        a((0, h.b8)({ tweetId: t.id_str }));
                    }, [a, t.id_str]);
                    const Z = s.useCallback(() => {
                            o && a((0, h.b8)({ tweetId: t.id_str, cursor: o }));
                        }, [o, a, t.id_str]),
                        B = s.useCallback(() => (C ? k(void 0) : e(), !0), [e, C]),
                        x = s.useCallback(() => !0, []),
                        I = s.useCallback(
                            (e) => {
                                if (c.has(e)) {
                                    const t = Array.from(c).filter((t) => t !== e);
                                    _((0, d.Z)(t));
                                } else _((0, d.Z)([...Array.from(c), e]));
                            },
                            [c],
                        ),
                        T = s.useMemo(() => s.createElement(F, { autoFocus: !0, elementName: "original-tweet", handlePress: I, isByAuthor: !0, isExpanded: c.has(t.id_str), style: q.marginBottom16, tweet: t }), [c, I, t]);
                    return s.createElement(
                        f.nO,
                        { namespace: { section: "replies" } },
                        s.createElement(
                            m.Z,
                            { "aria-label": void 0, autoFocus: !0, isFocusBoundary: !0, name: "conversation", onEscapeOrBack: B, onPress: x, role: "list", style: q.conversationContainer, trackChildren: !0 },
                            P && s.createElement(u.G7, { style: q.closeButtonContainer }, s.createElement(p.C, { "aria-label": void 0, name: "close-button", onPress: S, role: "button", style: q.closeButton }, s.createElement(i.default, null), s.createElement(u.Kh, { size: "body" }, O))),
                            s.createElement(
                                r.Z,
                                { showsVerticalScrollIndicator: !1, style: { ...(P && q.scrollView) } },
                                s.createElement(
                                    u.G7,
                                    { style: q.conversationItemList },
                                    T,
                                    s.createElement(u.G7, { style: [q.titleContainer, q.marginBottom16] }, s.createElement(u.Kh, { size: "title4" }, D)),
                                    n &&
                                        n.length > 0 &&
                                        n[0].conversation_id_str === t.id_str &&
                                        s.createElement(b.Z, {
                                            identityFunction: (e) => e.id_str,
                                            items: n,
                                            onNearEnd: Z,
                                            renderer: (e) => {
                                                const a = e.user.id_str === t.user.id_str;
                                                return s.createElement(F, { elementName: "reply", handlePress: I, isByAuthor: a, isExpanded: c.has(e.id_str), tweet: e });
                                            },
                                        }),
                                    l === g.Z.LOADING && s.createElement(v.Z, null),
                                ),
                            ),
                        ),
                    );
                },
                q = n.default.create((e) => ({ scrollView: { marginTop: e.spaces.space36 }, conversationContainer: { display: "block", width: "100%", height: "100%", backgroundColor: e.colors.alwaysBaseGray1100, opacity: 1, paddingHorizontal: e.spaces.space24, paddingVertical: e.spaces.space24, overflowY: "auto", overflowX: "hidden" }, titleContainer: { height: e.lineHeights.title4 }, conversationItemList: { display: "flex", flexDirection: "column" }, marginBottom16: { marginBottom: e.spaces.space16 }, closeButtonContainer: { cursor: "pointer", position: "fixed", top: 0, zIndex: 2, width: `calc(100% - ${e.spaces.space32}`, backgroundColor: e.colors.alwaysBaseGray1100 }, closeButton: { width: "100%", display: "flex", flexDirection: "row", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 } }));
        },
        833453: (e, t, a) => {
            a.d(t, { K: () => i, U: () => c });
            var s = a(807896),
                r = a(202784),
                n = a(154003),
                o = a(392237),
                l = a(467537);
            const i = ({ style: e, ...t }) => r.createElement(l.C, (0, s.Z)({}, t, { style: [d.tvButton, e] })),
                c = ({ children: e, icon: t, ...a }) => r.createElement(i, a, r.createElement(n.ZP, { disableSemanticElement: !0, icon: t, size: "medium", type: "onMediaText" }, e)),
                d = o.default.create((e) => ({ tvButton: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.translucentBlack30, padding: `calc(${e.spaces.space4} + ${e.spaces.space2})` } }));
        },
        839661: (e, t, a) => {
            a.d(t, { C3: () => u, E_: () => m, Np: () => n, OP: () => o, _L: () => l, d9: () => p, f_: () => s, j4: () => b, kq: () => f, sI: () => c, tT: () => y, ui: () => i, yy: () => d, zD: () => r });
            const s = "play",
                r = "live",
                n = "rewind",
                o = "fastforward",
                l = "avatar",
                i = "captions",
                c = "like",
                d = "dislike",
                u = "bookmark",
                m = "settings",
                p = "conversation",
                b = "controls-bar",
                y = "scrubber",
                f = "buttons";
        },
        72552: (e, t, a) => {
            a.d(t, { Z: () => Me });
            var s = a(202784),
                r = a(325686),
                n = a(978053),
                o = a(167630),
                l = a(392237),
                i = a(731708),
                c = a(891198),
                d = a(908629),
                u = a(366635),
                m = a(124964),
                p = a(111677),
                b = a.n(p),
                y = a(837020),
                f = a(795290),
                g = a(686010),
                E = a(589743),
                h = a(406483),
                v = a(573359),
                w = a(334113),
                _ = a(988428),
                C = a(898063),
                k = a(442128),
                S = a(873930),
                P = a(952793),
                Z = a(530745),
                B = a(725516),
                x = a(125363),
                I = a(903558),
                T = a(682461),
                L = a(105788),
                R = a(471494),
                A = a(57431),
                M = a(270704),
                z = (a(136728), a(154003)),
                N = a(737691),
                F = a(643442),
                D = a(466445),
                O = a(521304),
                V = a(831489),
                K = a(38502),
                G = a(804579),
                U = a(922449),
                q = a(946474),
                $ = a(671212),
                H = a(517330),
                X = a(73416),
                j = a(883069),
                W = a(698891),
                Y = a(368761),
                Q = a(136483),
                J = a(988401),
                ee = a(752475),
                te = a(836255),
                ae = a(919022),
                se = a(708411),
                re = a(839661),
                ne = a(833453);
            const oe = b().gede4932,
                le = b().b89c5a50,
                ie = b().b7d7f606,
                ce = b().ee0f61ca,
                de = b().ic1e826e,
                ue = b().e674c120,
                me = b().f45bace4,
                pe = b().fe731016,
                be = b().i2d14148,
                ye = b().ca0f5894,
                fe = b().a1eb471a,
                ge = b().gb303814,
                Ee = b().e40051e8,
                he = b().j58e7b00,
                ve = b().bb081ea2,
                we = b().g9ecf0e8,
                _e = b().aa97ae7e,
                Ce = b().f2382014,
                ke = ({ history: e, isLiveBroadcast: t, name: a, onArrowPress: n, onPressConversation: o, onShowSettings: l, playbackIsLive: c, showTimestamp: d = !0, style: u, tweet: m }) => {
                    const { fastForward: p, playPause: b, playerApiRef: y, playerState: f, rewind: E, setPlaybackLive: h, showPlayNext: v } = (0, M.L)(),
                        C = (0, x.I0)(),
                        k = (0, B.z)(),
                        S = (0, x.v9)(ae.ZP.selectLoggedInUser),
                        [Z, I] = s.useState(m.favorited ? "LIKE" : "NONE"),
                        [T, L] = s.useState(m.bookmarked),
                        R = f && (0, _.Ci)(f)?.hasCaptions,
                        A = s.useMemo(() => s.createElement(ne.K, { "aria-label": v ? oe : f?.isPlaying ? le : de, name: re.f_, onPress: b, role: "button", style: [Se.playButton, Se.buttonStyle] }, s.createElement(z.ZP, { disableSemanticElement: !0, icon: v ? s.createElement(N.default, null) : f?.isPlaying ? s.createElement(F.default, null) : s.createElement(D.default, null), size: "xLarge", type: "primaryFilled" })), [v, f?.isPlaying, b]),
                        Q = s.useCallback(() => {
                            c || h();
                        }, [c, h]),
                        ke = s.useMemo(() => s.createElement(ne.U, { "aria-label": Ce, icon: c ? Ze : Pe, name: re.zD, onPress: Q, role: "button", style: [Se.buttonStyle, !c && Se.liveDisabled] }, Ce), [Q, c]),
                        Be = s.useMemo(() => s.createElement(ne.K, { "aria-label": ce, name: re.Np, onPress: E, role: "button", style: Se.buttonStyle }, s.createElement(z.ZP, { disableSemanticElement: !0, icon: s.createElement(O.default, null), size: "xLarge", type: "primaryFilled" })), [E]),
                        xe = s.useMemo(() => s.createElement(ne.K, { "aria-label": ie, name: re.OP, onPress: p, role: "button", style: Se.buttonStyle }, s.createElement(z.ZP, { disableSemanticElement: !0, icon: s.createElement(V.default, null), size: "xLarge", type: "primaryFilled" })), [p]),
                        Ie = s.useCallback(() => (y?.current?.toggleCaptions(), !0), [y]),
                        Te = s.useMemo(() => (R ? s.createElement(ne.U, { "aria-label": f?.areCaptionsShown ? me : ue, icon: f?.areCaptionsShown ? s.createElement(K.default, { style: Se.iconStyle }) : s.createElement(G.default, { style: Se.iconStyle }), name: re.ui, onPress: Ie, role: "button", style: Se.buttonStyle }) : null), [Ie, R, f?.areCaptionsShown]),
                        Le = s.useCallback(() => ("LIKE" === Z ? (C(te.Z.unlike(m.id_str, {})), k.scribe({ element: "like-button", action: "unfavorite", data: { tweet_id: m.id_str, items: [(0, w.P_)(m)] } })) : (k.scribe({ element: "like-button", action: "favorite", data: { tweet_id: m.id_str, items: [(0, w.P_)(m)] } }), C(te.Z.like(m.id_str, {}))), I("LIKE" === Z ? "NONE" : "LIKE"), !0), [k, C, Z, m]),
                        Re = s.useCallback(() => (m && m.user && e.push((0, se.dX)(m?.user?.screen_name)), !0), [e, m]),
                        Ae = s.useMemo(() => s.createElement(ne.U, { "aria-label": "LIKE" === Z ? be : pe, icon: "LIKE" === Z ? s.createElement(U.default, { style: Se.iconStyle }) : s.createElement(q.default, { style: Se.iconStyle }), name: re.sI, onPress: Le, role: "button", style: Se.buttonStyle }), [Le, Z]),
                        Me = s.useCallback(() => ("LIKE" === Z && (C(te.Z.unlike(m.id_str, {})), k.scribe({ element: "like-button", action: "unfavorite", data: { tweet_id: m.id_str, items: [(0, w.P_)(m)] } })), I("DISLIKE" === Z ? "NONE" : "DISLIKE"), !0), [k, C, Z, m]),
                        ze = (s.useMemo(() => s.createElement(ne.U, { "aria-label": "DISLIKE" === Z ? fe : ye, icon: "DISLIKE" === Z ? s.createElement($.default, { style: Se.iconStyle }) : s.createElement(H.default, { style: Se.iconStyle }), name: re.yy, onPress: Me, role: "button", style: Se.buttonStyle }), [Me, Z]), s.useCallback(() => (T ? (C(te.Z.unbookmark(m.id_str)), k.scribe({ element: "bookmark-button", action: "unbookmark", data: { tweet_id: m.id_str, items: [(0, w.P_)(m)] } })) : (k.scribe({ element: "bookmark-button", action: "bookmark", data: { tweet_id: m.id_str, items: [(0, w.P_)(m)] } }), C(te.Z.bookmark(m.id_str))), L(!T), !0), [k, C, T, m])),
                        Ne = s.useMemo(() => s.createElement(ne.U, { "aria-label": T ? Ee : ge, icon: T ? s.createElement(X.default, { style: Se.iconStyle }) : s.createElement(j.default, { style: Se.iconStyle }), name: re.C3, onPress: ze, role: "button", style: Se.buttonStyle }), [ze, T]),
                        Fe = s.useMemo(() => (m.user ? s.createElement(ne.K, { "aria-label": he, name: re._L, onPress: Re, role: "button", style: Se.buttonStyle }, s.createElement(ee.Z, { source: m.user.profile_image_url_https, style: Se.userAvatar, verifiedType: m.user.verified_type })) : null), [Re, m.user]),
                        De = s.useMemo(() => {
                            const e = f && (0, _.Ci)(f);
                            if (!e || !e.currentTimeMs || !e.durationMs) return null;
                            const t = (0, J.F)(e.currentTimeMs),
                                a = (0, J.F)(e.durationMs);
                            return s.createElement(i.ZP, { size: "headline2" }, t, " / ", a);
                        }, [f]),
                        Oe = s.useMemo(() => s.createElement(ne.U, { "aria-label": ve, icon: s.createElement(W.default, { style: Se.iconStyle }), name: re.E_, onPress: l, role: "button", style: Se.buttonStyle }), [l]),
                        Ve = s.useMemo(() => s.createElement(ne.U, { "aria-label": we, icon: s.createElement(Y.default, { style: Se.iconStyle }), name: re.d9, onPress: o, role: "button", style: Se.buttonStyle }), [o]),
                        Ke = (0, P.hC)("tv_app_show_ffwd_rwd_buttons");
                    return s.createElement(g.Z, { "aria-label": _e, name: a, onArrowPress: n, role: "rowgroup", style: [Se.buttonsRow, u], trackChildren: !0 }, s.createElement(r.Z, { style: Se.leftButtons }, Ke ? Be : null, A, t ? ke : null, Ke ? xe : null, S ? Fe : null, Te, S ? Ae : null, null, S ? Ne : null, Oe, S ? Ve : null), d ? s.createElement(r.Z, { style: Se.rightButtons }, De) : null);
                },
                Se = l.default.create((e) => ({ playButton: { padding: "0" }, buttonsRow: { flexDirection: "row" }, buttonStyle: { marginEnd: e.spaces.space12 }, leftButtons: { justifyContent: "flex-start", flexDirection: "row", alignItems: "center", flexGrow: "1" }, rightButtons: { justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }, userAvatar: { height: e.spacesPx.space36, width: e.spacesPx.space36 }, iconStyle: { width: e.spaces.space28, height: e.spaces.space28 }, liveDisabled: { color: e.colors.gray300 }, liveEnabled: { color: e.colors.red500 } })),
                Pe = s.createElement(Q.default, { style: Se.liveDisabled }),
                Ze = s.createElement(Q.default, { style: Se.liveEnabled });
            var Be = a(837880),
                xe = a(2138),
                Ie = a(674546);
            function Te(e) {
                const { currentTime: t = 0, duration: a = 0, isLiveBroadcast: r, isScrubbing: n, name: o, playbackIsLive: l, playerApi: i, style: c } = e,
                    d = s.useRef(),
                    [u, m] = s.useState(t),
                    p = s.useMemo(
                        () =>
                            (0, xe.Z)((e) => {
                                i?.scrubToFraction(
                                    (function (e, t) {
                                        return t > 0 ? (0, Be.Z)(e, 0, t) / t : 0;
                                    })(e, a),
                                );
                            }, R.PX),
                        [a, i],
                    ),
                    b = s.useCallback(
                        (e) => {
                            m(e), p(e);
                        },
                        [p],
                    ),
                    y = s.useCallback(() => {
                        n || ((d.current = t), i?.setScrubbing(!0));
                    }, [t, n, i]),
                    f = s.useCallback(() => {
                        n && ((d.current = void 0), i?.setScrubbing(!1), p.flush());
                    }, [n, i, p]),
                    g = s.useCallback(
                        (e) => {
                            e ? y() : f();
                        },
                        [y, f],
                    );
                return (
                    s.useEffect(() => {
                        m(r && l ? a : t), p.flush();
                    }, [t, a, r, l, p]),
                    s.createElement(Ie.ZP, { "aria-label": void 0, fasterStep: R.AZ, fastestStep: R.qx, formatLabel: J.F, max: a, name: o, onActive: g, onArrowPress: e.onArrowPress, onChange: b, onPress: f, role: "slider", step: R.PA, style: c, value: u, withLabel: !0 })
                );
            }
            const Le = b().jc81f6a7,
                Re = b().f2382014,
                Ae = b().d58baa7f,
                Me = ({ autoplayNextDisabled: e, broadcast: t, history: a, tweet: p }) => {
                    const b = (0, B.z)(),
                        z = s.useRef(),
                        N = (0, x.I0)(),
                        F = (0, S.Z)(),
                        D = (0, P.hC)("responsive_web_tv_video_player_swipe_scrolling") && F,
                        { googleCastReceiverLoaded: O, googleCastSenderConnected: V } = (0, f.Q)(),
                        { closeControls: K, closeConversation: G, closeRelatedVideos: U, closeSettings: q, isLoaded: $, openControls: H, openConversation: X, openRelatedVideos: j, openSettings: W, playerApiRef: Y, playerState: Q, playerStateRef: J, resetTimeout: ee, showControls: te, showConversation: ae, showPlayNext: se, showRelatedVideos: oe, showSettings: le, toggleControls: ie } = (0, M.L)();
                    s.useEffect(() => {
                        O && H();
                    }, [O, H]);
                    const ce = "Running" === t?.state,
                        de = te && !(ce && V),
                        ue = s.useCallback(
                            ({ key: e }) => {
                                if (e === Z.WX) return de || H(), !0;
                            },
                            [H, de],
                        ),
                        me = s.useCallback(
                            ({ key: e }) => {
                                if (e === Z.kl && J?.current?.isPlaying) return ie(), !0;
                            },
                            [J, ie],
                        );
                    (0, C.ZP)(Z.NW, () => {
                        if (!de && !le && !ae && !oe && $) return J?.current?.isPlaying ? Y?.current?.pause() : Y?.current?.play(), !0;
                    });
                    const pe = s.useRef(re.kq),
                        be = s.useCallback(
                            (e) => {
                                ee();
                                const { key: t } = e;
                                switch (t) {
                                    case Z.QK:
                                    case Z.Qs:
                                        return de || ((pe.current = re.tT), H()), !0;
                                    case Z.kl:
                                        return (pe.current = re.kq), de || H(), !0;
                                    case Z.WX:
                                        if (!de) return (pe.current = re.kq), H(), !0;
                                }
                            },
                            [H, ee, de],
                        ),
                        ye = (0, k.Z)(),
                        fe = s.useCallback(() => (N(I.eX.tvRelatedVideosClear()), L.X.onPauseVideo(), ye({ doNotRefreshHome: !0 }), b.scribe({ component: "tweet", action: "close", data: { tweet_id: p.id_str, items: [(0, w.P_)(p)] } }), !0), [b, N, ye, p]),
                        ge = Q && (0, _.Ci)(Q),
                        Ee = (ge?.durationMs || 0) - (ge?.currentTimeMs || 0) < 2e4,
                        he = s.useMemo(() => (void 0 !== ge?.currentTimeMs && void 0 !== ge?.durationMs ? s.createElement(Te, { currentTime: ge.currentTimeMs, duration: ge.durationMs, isLiveBroadcast: ce, isScrubbing: Q?.isScrubbing, name: re.tT, onArrowPress: me, playbackIsLive: Ee, playerApi: Y?.current, style: ze.marginBottom12 }) : null), [ce, ge?.currentTimeMs, ge?.durationMs, me, Ee, Y, Q?.isScrubbing]),
                        ve = s.useMemo(() => (0, w.Bq)(p), [p]),
                        we = s.useMemo(() => s.createElement(r.Z, { ref: z }, s.createElement(A.Z, { authorScreenName: p?.user?.screen_name || "", onSettingsClose: q, tweetUrl: `x.com/i/status/${p?.id_str}` || "" })), [q, p?.id_str, p?.user?.screen_name]),
                        _e = s.useCallback(() => (Y?.current?.scrubToFraction(0), Y?.current?.play(), !0), [Y]),
                        Ce = s.useMemo(() => s.createElement(E.Z, { autoplayNextDisabled: e, currentTweetId: p?.id_str, onEscapeOrBack: fe, onReplayVideo: _e }), [e, fe, _e, p?.id_str]),
                        Se = s.useCallback(() => !!F, [F]),
                        Pe = s.useCallback(() => {
                            if ($) return le ? (q(), H(), !0) : (de ? F && K() : (F || (J?.current?.isPlaying ? Y?.current?.pause() : Y?.current?.play()), H()), F && oe && U(), F && ae && G(), !0);
                        }, [$, le, de, F, oe, U, ae, G, q, H, J, Y, K]),
                        Ze = s.useCallback(() => {
                            j();
                        }, [j]);
                    s.useEffect(
                        () => (
                            document.addEventListener("android-on-resume", H),
                            function () {
                                document.removeEventListener("android-on-resume", H);
                            }
                        ),
                        [H],
                    ),
                        s.useEffect(() => {
                            p?.id_str && N((0, T._B)({ tweetId: p?.id_str }));
                        }, [N, p?.id_str]);
                    const Be = s.useCallback(() => (K(), X(), !0), [K, X]),
                        xe = n.default.formatTimeSinceDate(new Date(p.created_at));
                    return s.createElement(
                        s.Fragment,
                        null,
                        $ ? null : s.createElement(r.Z, { style: ze.activityIndicatorContainer }, s.createElement(o.Z, { color: l.default.theme.colors.gray900, size: 54 })),
                        !D && se ? Ce : null,
                        s.createElement(
                            g.Z,
                            { "aria-label": void 0, autoFocus: !0, forceFocus: !0, name: R.hf, onArrowPress: be, onEscapeOrBack: (de && J?.current?.isPlaying) || le ? void 0 : fe, onPress: Pe, role: "region", style: ze.root, trackChildren: !0 },
                            ce ? s.createElement(r.Z, { style: ze.livePill }, s.createElement(r.Z, { style: ze.liveText }, s.createElement(i.ZP, { "aria-label": Re, size: "subtext1", weight: "bold" }, Re)), s.createElement(r.Z, { style: ze.viewerCount }, s.createElement(i.ZP, { "aria-label": Le({ count: c.ZP.getTruncatedCount(t?.total_watched || 0) }), size: "subtext1" }, Le({ count: c.ZP.getTruncatedCount(t?.total_watched || 0) })))) : null,
                            le ? we : null,
                            oe ? s.createElement(h.Z, { currentTweetId: p?.id_str, onEscapeOrBack: U, onReplayVideo: _e }) : null,
                            s.createElement(d.Z, { show: de }, s.createElement(g.Z, { "aria-label": void 0, autoFocus: !0, focusable: !de, name: re.j4, onArrowPress: ee, onEscapeOrBack: K, onPress: Se, preferredChildName: pe.current, role: "region", style: ze.controlsContainer, trackChildren: !0 }, F ? s.createElement(ne.U, { "aria-label": void 0, icon: s.createElement(y.default, { style: ze.closeIcon }), name: "video-player-back", onPress: fe, role: "button", style: [ze.closeButton, ze.marginBottom12] }) : null, s.createElement(u.Z, { affiliateBadgeInfo: p.user.highlightedLabel, badgeContext: "content", isBlueVerified: p.user.is_blue_verified, isProtected: p.user.protected, isVerified: p.user.verified, name: p.user.name, nameSize: "headline1", screenName: p.user.screen_name, screenNameSize: "headline1", screenNameStyle: ze.screenName, style: ze.userName, verifiedType: p.user.verified_type, withLink: !1 }), s.createElement(i.ZP, { numberOfLines: 1, size: "title3", style: [ze.title, ze.marginBottom4], weight: "heavy" }, ve), s.createElement(r.Z, { style: [ze.headlineFooter, ze.marginBottom8] }, p.views?.count ? s.createElement(s.Fragment, null, s.createElement(i.ZP, { color: "gray900", size: "body" }, Ae(parseInt(p.views.count, 10))), s.createElement(m.Z, { size: "body" })) : null, s.createElement(i.ZP, { color: "gray900", size: "body" }, xe)), he, s.createElement(ke, { history: a, isLiveBroadcast: ce, name: re.kq, onArrowPress: ue, onPressConversation: Be, onShowSettings: W, playbackIsLive: Ee, showTimestamp: !ce || !Ee, style: ze.marginBottom12, tweet: p }), s.createElement(v.Z, { onFocus: Ze, style: ze.relatedVideosPreview }))),
                        ),
                    );
                },
                ze = l.default.create((e) => ({
                    root: { writingDirection: "ltr", height: "100%" },
                    controlsContainer: { display: "flex", width: "100%", flex: "1", padding: e.spaces.space32, paddingBottom: "0", flexDirection: "column", justifyContent: "flex-end", position: "absolute", bottom: 0, backgroundColor: e.colors.translucentBlack30 },
                    userAvatar: { height: e.spacesPx.space36, width: e.spacesPx.space36 },
                    title: { width: "76%", textOverflow: "ellipsis" },
                    marginBottom4: { marginBottom: e.spaces.space4 },
                    marginBottom8: { marginBottom: e.spaces.space8 },
                    marginBottom12: { marginBottom: e.spaces.space12 },
                    settingsContainer: { width: 300 * e.scaleMultiplier, height: "50%", backgroundColor: e.colors.gray50, opacity: 0.8, position: "absolute", end: e.spaces.space64, top: e.spaces.space64, borderRadius: e.borderRadii.xLarge, display: "flex", alignItems: "center" },
                    activityIndicatorContainer: { position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" },
                    closeButton: { alignItems: "center", justifyContent: "center", borderRadius: e.borderRadii.infinite, padding: 0, position: "fixed", start: e.spaces.space12, top: e.spaces.space12, height: e.spaces.space36, width: e.spaces.space36 },
                    closeIcon: { height: e.spaces.space20, width: e.spaces.space20 },
                    livePill: { top: e.spaces.space32, end: e.spaces.space32, position: "absolute", display: "flex", flexDirection: "row", width: "fit-content" },
                    liveText: { backgroundColor: e.colors.magenta500, borderTopStartRadius: e.borderRadii.small, borderBottomStartRadius: e.borderRadii.small, padding: e.spaces.space4, paddingEnd: e.spaces.space8, paddingStart: e.spaces.space8 },
                    viewerCount: { backgroundColor: e.colors.translucentBlack77, borderTopEndRadius: e.borderRadii.small, borderBottomEndRadius: e.borderRadii.small, padding: e.spaces.space4, paddingEnd: e.spaces.space8, paddingStart: e.spaces.space8 },
                    userName: { marginBottom: e.spaces.space8 },
                    screenName: { color: e.colors.gray900, position: "relative", top: `-${e.spaces.space1}` },
                    headlineFooter: { alignItems: "center", flexDirection: "row" },
                    relatedVideosPreview: { overflowX: "hidden", overflowY: "hidden" },
                }));
        },
        509423: (e, t, a) => {
            a.d(t, { K: () => r });
            var s = a(202784);
            const r = (e, t) => {
                const a = s.useRef(null),
                    r = s.useCallback(() => {
                        clearTimeout(a.current);
                    }, []),
                    n = s.useCallback(() => {
                        a.current = setTimeout(() => {
                            e();
                        }, t);
                    }, [e, t]);
                s.useEffect(
                    () => (
                        n(),
                        () => {
                            r();
                        }
                    ),
                    [r, n],
                );
                return [
                    s.useCallback(() => {
                        r(), n();
                    }, [r, n]),
                    r,
                ];
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TV-3b7b1c3f.3fc7e10a.js.map
