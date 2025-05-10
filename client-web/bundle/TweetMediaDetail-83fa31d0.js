"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetMediaDetail-83fa31d0"],
    {
        67534: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(202784),
                r = n(392237),
                a = n(715601),
                i = n(167496),
                c = n(927192),
                s = n(71620),
                l = n(340179),
                d = n(125363),
                u = n(360142),
                m = n(735313),
                f = n(904096);
            const p = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: f.p, borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid" } })),
                w = function ({ contextTweetId: e, location: t, promotedContent: n, rootTweet: r, screenName: f, socialContext: w, tweet: h, tweetId: v }) {
                    const [_, g] = o.useState(i.r.relevance),
                        b = (0, d.I0)(),
                        C = (0, s.n7)("CONVERSATION_DRAWER"),
                        E = o.useMemo(() => (0, l.i)(f), [f]),
                        y = (e, t) => {
                            let n = "Relevance";
                            return t === i.r.recency ? (n = "Recency") : t === i.r.likes && (n = "Likes"), (0, u.ZP)({ focalTweetId: e, rankingMode: n });
                        };
                    return o.createElement(
                        a.Z,
                        { "aria-expanded": !0, style: p.root },
                        o.createElement(c.Z, {
                            apiErrorHandlerMap: E,
                            changeDropdownState: (e) => {
                                g(e), b((0, m.Z)(y(v, e))).catch(C({}));
                            },
                            contextTweetId: e,
                            focalTweet: h,
                            focalTweetId: v,
                            location: t,
                            module: y(v, _),
                            promotedContent: n,
                            replyDropdownSelection: _,
                            rootTweet: r,
                            selectedTweet: { selectedTweetId: v },
                            socialContext: w,
                            withFocalTweetMedia: !1,
                        }),
                    );
                };
        },
        904096: (e, t, n) => {
            n.d(t, { J: () => a, p: () => r });
            var o = n(521514);
            const r = o.Z.columnWidths.secondary.normal,
                a = o.Z.columnWidths.primary;
        },
        640809: (e, t, n) => {
            n.r(t), n.d(t, { TweetMediaDetailScreen: () => ve, default: () => ge });
            var o = n(202784),
                r = n(614983),
                a = n.n(r),
                i = n(325686),
                c = n(386802),
                s = n(759469),
                l = n(276563),
                d = n(811176),
                u = n(154003),
                m = n(393058),
                f = n(537392),
                p = n(392237),
                w = n(674132),
                h = n.n(w),
                v = n(610357),
                _ = n(836397),
                g = n(149170),
                b = n(123751),
                C = n(290402),
                E = n(300234),
                y = n(827094),
                I = n(449067),
                T = n(231035),
                x = n(652904),
                Z = n(778955),
                S = n(952793),
                k = n(702001),
                M = n(965728),
                D = n(293115),
                R = n(942893),
                P = n(125363),
                F = n(175856),
                $ = n(67534),
                L = n(708852),
                N = n(292627),
                A = n(731708),
                B = n(797681),
                H = n(904096);
            const W = h().b7a898fa,
                z = h().e254fdd2;
            function O({ withDrawer: e }) {
                const t = (0, L.tj)(),
                    n = o.useRef(null),
                    [r, a] = o.useState({ top: 0, end: 0, opacity: 0 }),
                    c = o.useCallback(() => {
                        const e = n.current;
                        if (!e) return;
                        const o = (0, f.iv)();
                        if (t) {
                            const t = -(o.height + 48 + e.offsetHeight) / 2;
                            a({ top: t, end: 60, opacity: 1 });
                        } else a({ top: -(o.height - 60), end: (o.width - e.offsetWidth) / 2, opacity: 1 });
                    }, [t]);
                o.useEffect(
                    () => (
                        setTimeout(() => {
                            c();
                        }, 200),
                        window.addEventListener("scroll", c),
                        window.addEventListener("resize", c),
                        () => {
                            window.removeEventListener("scroll", c), window.removeEventListener("resize", c);
                        }
                    ),
                    [c],
                );
                const { end: s, opacity: l, top: d } = r;
                return o.createElement(N.Z.FixedDropdown, null, o.createElement(i.Z, { ref: n, role: "tooltip", style: [j.container, { top: d, end: e ? s + H.p : s, opacity: l }] }, o.createElement(A.ZP, { color: "white" }, t ? W : z), t && o.createElement(i.Z, { style: j.arrowContainer }, o.createElement(B.default, { style: j.arrow }))));
            }
            const j = p.default.create((e) => ({ container: { backgroundColor: e.colors.blue500, position: "absolute", borderRadius: e.borderRadii.medium, display: "flex", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, arrowContainer: { alignItems: "center", transform: "rotate(90deg)", position: "absolute", end: `-${e.spaces.space12}`, color: e.colors.blue500 }, arrow: { borderStyle: "none" } }));
            var V = n(71620),
                q = n(668214),
                J = n(38562),
                X = n(659773),
                G = n(836255);
            const U = (e, t) => t.match.params.screenName,
                Y = (e, t) => t.match.params.statusId,
                K = (e, t) => {
                    const {
                        match: {
                            params: { index: n },
                        },
                    } = t;
                    return parseInt(n, 10) - 1;
                },
                Q = (e, t) => G.Z.selectFetchStatus(e, Y(0, t)),
                ee = (e, t) => e.location && e.location.state && e.location.state[t],
                te = (e, t) => ee(t, "forwardPivotInfo"),
                ne = (e, t) => ee(t, "nudges"),
                oe = (e, t) => ee(t, "promotedContent"),
                re = (e, t) => ee(t, "socialContext"),
                ae = (e, t) => ee(t, "contextTweetId"),
                ie = (e, t) => {
                    const n = Y(0, t),
                        o = G.Z.select(e, n);
                    return (o && o.conversation_id_str) || void 0;
                },
                ce = (0, q.Z)()
                    .propsFromState(() => ({ fetchStatus: Q, forwardPivotInfo: te, nudges: ne, index: K, screenName: U, tweetId: Y, tweet: G.Z.createHydratedTweetSelector(Y), promotedContent: oe, dataSaver: X.IX, socialContext: re, contextTweetId: ae, rootTweet: G.Z.createHydratedTweetSelector(ie), showTweetMediaDetailDrawer: J.lr }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, V.zr)("TWEET_MEDIA_DETAIL_SCREEN"), fetchTweetIfNeeded: G.Z.fetchOneIfNeeded, updateSettings: J.VP }))
                    .withAnalytics({ page: "tweet", section: "media" });
            var se = n(360142);
            function le(e) {
                return (0, P.v9)((t) => {
                    if (null == e) return;
                    return t.urt[`conversation-${e}`];
                });
            }
            const de = h().a7f66562,
                ue = h().efe6ef9e,
                me = h().h63a5c3c,
                fe = h().f9f27fa2,
                pe = h().f1d9930c,
                we = h().a0e81a2e,
                he = (e) => e - H.p < H.J,
                ve = (e) => {
                    const { isModal: t } = o.useContext(c.Z),
                        { handleMediaDetailZoomed: n, handleMediaItemTapped: r, hideButtons: p } = (0, M.sI)(),
                        [w, h] = o.useState(!1),
                        L = (0, S.hC)("responsive_web_thread_media_tooltip"),
                        N = (0, P.v9)((e) => (0, F.t5)(e, F.CS)) && L,
                        [A, B] = o.useState(void 0),
                        H = (0, P.I0)(),
                        { analytics: W, contextTweetId: z, createLocalApiErrorHandler: j, dataSaver: V, fetchStatus: q, fetchTweetIfNeeded: J, forwardPivotInfo: X, history: U, index: Y, location: K, nudges: Q, promotedContent: ee, rootTweet: te, screenName: ne, showTweetMediaDetailDrawer: oe, socialContext: re, tweet: ae, tweetId: ie, updateSettings: ce } = e,
                        ve = () => {
                            const { state: e } = K;
                            if (!e) return;
                            const t = e.mediaItems;
                            return t && "index" in t && "items" in t ? t : void 0;
                        },
                        ge = () => {
                            const e = ve();
                            return e ? e.index : Y;
                        },
                        Ce = () => {
                            const e = ve();
                            if (e) return e.items;
                            if (!ae) return;
                            const t = ae.extended_entities?.media;
                            if (t) return t;
                            if (ae.card) {
                                const e = Ee();
                                if (e) return [e];
                            }
                        },
                        Ee = () => {
                            if (ae?.card) {
                                const e = { tweetId: ae.id_str, tweetUserId: ae.user.id_str, tweetPermalink: ae.permalink };
                                a()(void 0 !== ae.card, "tweet.card must be defined");
                                const t = ae.unified_card && Object.keys(ae.unified_card).length ? ae.unified_card : ae.card,
                                    n = (0, s.ZP)(t, e);
                                if (n) {
                                    const e = l.default.getImageEntityFromCard(n.card);
                                    if (e) return l.default.convertImageEntityToPhoto(e);
                                }
                            }
                        },
                        ye = () => {
                            const e = ge(),
                                t = Ce();
                            return t && t[e];
                        },
                        Ie = (e) => {
                            const t = ve();
                            return t ? { ...K.state, mediaItems: { ...t, index: e } } : K.state;
                        },
                        Te = (e) => (e && he(e) ? w : oe),
                        xe = o.useCallback(() => {
                            if (ae && ae.user && ne.toLowerCase() !== ae.user.screen_name.toLowerCase()) {
                                const e = ae && ae.user ? `/${ae.user.screen_name}/status/${ae.id_str}/photo/${Y + 1}` : null;
                                e && U.replace(e);
                            }
                        }, [U, Y, ne, ae]),
                        Ze = o.useCallback(() => {
                            if (ae) {
                                const e = R.Z.getTweetItem(ae);
                                W.scribe({ action: "show", data: { items: [e] } });
                            }
                        }, [W, ae]),
                        Se = () => {
                            U.goBackThroughModals();
                        },
                        ke = o.useCallback(() => {
                            J(ie).catch(j(k.c));
                        }, [j, J, ie]),
                        Me = (e) => () => {
                            e && he(e) ? (W.scribe({ component: "conversation_drawer", action: w ? "collapse" : "expand" }), h(!w)) : (W.scribe({ component: "conversation_drawer", action: oe ? "collapse" : "expand" }), ce({ showTweetMediaDetailDrawer: !oe }));
                        };
                    !(function (e) {
                        const t = (0, S.hC)("responsive_web_thread_media_ensure_root_urt"),
                            n = le(e),
                            r = (0, P.I0)();
                        o.useEffect(() => {
                            e && !n && t && r((0, se.ZP)({ focalTweetId: e, rankingMode: "Relevance" }).fetchInitialOrTop());
                        }, [r, t, e, n]);
                    })(ae?.conversation_id_str);
                    const [De, Re] = (function (e) {
                            let t, n;
                            const r = e?.id_str,
                                a = le(e?.conversation_id_str),
                                i = (0, S.hC)("responsive_web_thread_media_nav_enabled"),
                                [c, s] = o.useMemo(
                                    () =>
                                        i && a && r
                                            ? (function (e, t) {
                                                  let n, o;
                                                  if (e) {
                                                      const r = e?.entries ?? [];
                                                      let a;
                                                      for (let e = 0; e < r.length; e++) {
                                                          const i = r[e];
                                                          if ("tweet" === i.type) {
                                                              if ("SelfThread" !== i.content.displayType) break;
                                                              i.content.id === t && (n = a), a === t && (o = i.content.id), (a = i.content.id);
                                                          }
                                                          if ("timelineModule" === i.type)
                                                              for (const e of i.content.items)
                                                                  if ("tweet" === e.type) {
                                                                      if ("SelfThread" !== e.content.displayType) break;
                                                                      if ((e.content.id === t && (n = a), a === t)) {
                                                                          o = e.content.id;
                                                                          break;
                                                                      }
                                                                      a = e.content.id;
                                                                  }
                                                      }
                                                  }
                                                  return [n, o];
                                              })(a, r)
                                            : [void 0, void 0],
                                    [a, r, i],
                                ),
                                l = o.useMemo(() => G.Z.createHydratorForTweet(c || ""), [c]),
                                d = (0, P.v9)(l);
                            if (d) {
                                const e = d.extended_entities?.media;
                                e && e.length > 0 && (t = `/${d.user.screen_name}/status/${d.id_str}/photo/${e.length}`);
                            }
                            const u = o.useMemo(() => G.Z.createHydratorForTweet(s || ""), [s]),
                                m = (0, P.v9)(u);
                            if (m) {
                                const e = m.extended_entities?.media;
                                e && e.length > 0 && (n = `/${m.user.screen_name}/status/${m.id_str}/photo/1`);
                            }
                            return [t, n];
                        })(ae),
                        Pe = (e) => {
                            const t = ge(),
                                n = Ce(),
                                o = De ? e - 1 : e;
                            if (o === t) return;
                            if (0 === e && De) return W.scribe({ component: "gallery", element: "prev_tweet", action: "click" }), void U.replace({ pathname: De });
                            if ((N && B(!(o + 1 !== n?.length || !Re)), o === n?.length && Re)) return W.scribe({ component: "gallery", element: "next_tweet", action: "click" }), N && H((0, F.pj)(F.CS)), void U.replace({ pathname: Re });
                            W.scribe({ component: "gallery", element: t < o ? "next" : "prev", action: "click", data: { event_value: o + 1 } });
                            const r = n && n[o];
                            U.replace({ state: Ie(o), pathname: r && r.expanded_url });
                        },
                        Fe = (e) => o.createElement(d.Z, { isFixed: !0, items: [{ link: ae?.user ? `/${ae.user.screen_name}/status/${ae.id_str}` : "/", text: ue }], onCloseRequested: e }),
                        $e = (e) => {
                            const n = ye(),
                                r = (0, M.Rb)(n),
                                a = e && Te(e);
                            return t ? o.createElement(u.ZP, { "aria-label": a ? fe : ue, dominantColor: r.rgb, hoverLabel: { label: a ? pe : we }, icon: a ? o.createElement(v.default, null) : o.createElement(_.default, null), onClick: Me(e), type: "onMediaDominantColorFilled" }) : ae && !t ? o.createElement(u.ZP, { "aria-label": me, dominantColor: n ? r.rgb : void 0, icon: o.createElement(g.default, null), renderMenu: Fe, type: n ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }) : void 0;
                        },
                        Le = (e, a) => {
                            const i = ye(),
                                c = (0, M.Rb)(i),
                                s =
                                    m.Z.isTouchSupported() &&
                                    (() => {
                                        const e = ge(),
                                            t = Ce();
                                        if (!t) return !1;
                                        const n = t[e];
                                        return "photo" === n?.type || !1;
                                    })();
                            return o.createElement(
                                y.Z,
                                { backgroundColor: c, footerButtons: ae ? o.createElement(Z.Z, { actionSize: "large", activeColor: "white", color: "white", forwardPivotInfo: ae.softIntervention || X, nudges: Q, style: _e.actionsBar, tweet: ae, withAnalyticsAction: !0, withCount: !0 }) : void 0, hideButtons: p, mediaItem: i, onCloseButtonPress: Se, overlayFooter: s, topRightButton: $e(e) },
                                o.createElement(C.Z, {
                                    "aria-label": de,
                                    fetchStatus: q,
                                    onRequestRetry: ke,
                                    render: () =>
                                        ((e) => {
                                            const a = ge(),
                                                i = Ce();
                                            if (!i) return o.createElement(T.Z, null);
                                            const c = be("prev"),
                                                s = be("next"),
                                                l = [De ? c : null, ...i, Re ? s : null].filter(Boolean),
                                                d = i[a],
                                                u = (0, M.Rb)(d).rgb,
                                                m = De ? a + 1 : a,
                                                f = m + 1 === l.length - 1 && l[l.length - 1] === s,
                                                p = N && (A ?? f),
                                                w = ae ? { items: [R.Z.getTweetItem(ae)] } : {};
                                            return o.createElement(o.Fragment, null, p && o.createElement(O, { withDrawer: t && e }), o.createElement(D.nO, { data: w }, o.createElement(E.Z, { dataSaver: V, dominantColor: u, key: `media-detail-${ae?.id_str ?? ""}`, mediaIndex: m, mediaItems: l, onDismiss: Se, onMediaDetailZoomed: n, onMediaItemChanged: Pe, onTap: r, promotedContent: ee, videoId: 1 === i.length && ae ? b.Z.forTweet(ae.id_str) : void 0 })));
                                        })(a),
                                }),
                            );
                        },
                        Ne = o.useRef(null);
                    o.useEffect(() => {
                        Ne.current !== ie && (ke(), (Ne.current = ie));
                    }, [ke, ie]);
                    const Ae = o.useRef(null);
                    return (
                        o.useEffect(() => {
                            Ae.current?.id_str !== ae?.id_str && (Ze(), (Ae.current = ae));
                        }, [Ze, ae]),
                        o.useEffect(() => {
                            xe();
                        }, [xe]),
                        o.createElement(
                            x.Z,
                            null,
                            o.createElement(
                                I.Z.Configure,
                                { headerless: !0 },
                                t
                                    ? o.createElement(f.ZP, null, ({ windowWidth: e }) => {
                                          const t = Te(e);
                                          return o.createElement(i.Z, { style: _e.container }, o.createElement(i.Z, { style: _e.neighbor }, Le(e, t)), t ? o.createElement($.Z, { contextTweetId: z, location: K, promotedContent: ee, rootTweet: te, screenName: ne, socialContext: re, tweet: ae, tweetId: ie }) : null);
                                      })
                                    : Le(),
                            ),
                        )
                    );
                },
                _e = p.default.create((e) => ({ actionsBar: { height: e.spaces.space48, maxWidth: "none", paddingHorizontal: e.spaces.space12 }, container: { flexDirection: "row", overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%", position: "relative" }, neighbor: { flexGrow: 1, flexShrink: 1 } })),
                ge = ce(ve);
            function be(e) {
                return { type: "photo", id_str: `__placeholder_${e}`, ext_alt_text: "placeholder", original_info: { width: 1, height: 1 }, media_url_https: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221%22%20height=%221%22%3E%3C/svg%3E" };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetMediaDetail-83fa31d0.f960c08a.js.map
