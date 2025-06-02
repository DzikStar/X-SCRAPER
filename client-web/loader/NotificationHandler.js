"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NotificationHandler", "icons/IconBarChartHorizontal-js", "icons/IconNotificationsSafety-js", "icons/IconNotificationsSecurityAlert-js"],
    {
        41903: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Dt });
            var o = n(459643),
                l = n(942893),
                a = n(351322),
                i = n(807896),
                r = n(202784),
                c = n(325686),
                s = n(392237),
                d = n(638009),
                m = n(952428),
                u = n(872405),
                g = n(53674),
                f = n(996548),
                p = n(286406),
                y = n(720930),
                h = n(159340),
                E = n(597237),
                _ = n(761744),
                v = n(517890),
                b = n(544367),
                w = n(453333),
                x = n(213279),
                C = n(121791),
                Z = n(902673),
                z = n(772722),
                k = n(856151),
                I = n(25001),
                D = n(466445),
                A = n(259055),
                M = n(283379),
                S = n(720600),
                H = n(933288),
                P = n(672738),
                T = n(452693),
                j = n(520913),
                B = n(98440),
                O = n(134878),
                R = n(503089),
                V = n(278065),
                U = n(491831),
                F = n(211971),
                L = n(792618),
                N = n(144251),
                G = n(80361),
                Q = n(520489),
                W = n(791632),
                Y = n(823161);
            const $ = s.default.create((e) => ({ root: { flexWrap: "wrap", flexDirection: "row", overflow: "hidden", height: e.spaces.space32 }, rootCenter: { justifyContent: "center" }, item: { marginHorizontal: e.spaces.space4 }, itemLeftFirst: { marginStart: 0 } })),
                q = ({ align: e = "left", maxItems: t = 10, style: n, userDecorations: o, ...l }) => {
                    const a = r.useMemo(() => l.users.slice(0, t).filter(Boolean), [l.users, t]);
                    return r.createElement(
                        c.Z,
                        { role: "list", style: [$.root, "center" === e && $.rootCenter, n] },
                        a.map((t, n) => r.createElement(Y.default, { "aria-hidden": !0, decoration: o && o[n], key: n, screenName: t.screen_name, size: "large", style: [$.item, 0 === n && "left" === e && $.itemLeftFirst], uri: t.profile_image_url_https, withHoverCard: !0, withLink: !0 })),
                    );
                };
            var J = n(703738),
                K = n(952793),
                X = n(946409),
                ee = n(725516),
                te = n(125363),
                ne = n(908478),
                oe = n(506899),
                le = n(24949),
                ae = n(128737),
                ie = n(276001),
                re = n(502909),
                ce = n(600823),
                se = n(576469),
                de = n(542054),
                me = n(836255),
                ue = n(919022);
            const ge = (0, re.ZP)({ namespace: "genericNotifications" }),
                fe = {
                    selectNotification: (0, le.P1)(
                        ge.selectAll,
                        me.Z.selectAll,
                        ue.ZP.selectAll,
                        se.Z.selectAll,
                        ie.Z.selectAll,
                        de.Z.selectAll,
                        (e, t) => t,
                        (e, t, n, o, l, a, i) => (0, oe.cY)(e[i], ae.Z, { cards: l, tweets: t, users: n, lists: o, publishedArticles: a }),
                    ),
                };
            const pe = {
                    ...ge,
                    ...fe,
                    addNotification: function (e) {
                        return pe.add({ [e.id_str]: e });
                    },
                },
                ye = ce.Z.register(pe);
            var he = n(233040),
                Ee = n(443781),
                _e = n(686689),
                ve = n(988245),
                be = n(927389),
                we = n(731708);
            const xe = ({ focused: e, link: t, onClick: n, template: o }) => {
                    const {
                        aggregateUserActionsV1: { showAllLinkText: l },
                    } = o;
                    return l && t ? r.createElement(we.ZP, { id: e ? "notification-show-more-text" : void 0, link: t, onClick: n, style: Ce.showMore }, l) : null;
                },
                Ce = s.default.create((e) => ({ showMore: { marginTop: e.spaces.space12 } }));
            var Ze = n(530338),
                ze = n(451051);
            const ke = ({ focused: e, text: t }) => r.createElement(_e.Z, { alignment: t.alignment, color: "gray700", entities: t.entities, id: e ? "notification-additional-context" : void 0, rtl: t.rtl, text: t.text }),
                Ie = ({ focused: e, template: t }) => {
                    const { aggregateUserActionsV1: n } = t,
                        { additionalContext: o, targetObjects: l } = n,
                        a = l.filter((e) => e.tweet),
                        i = a.length ? a[0].tweet : null;
                    return i
                        ? r.createElement(
                              c.Z,
                              { style: De.target },
                              ((t) => {
                                  const n = t.retweeted_status || t,
                                      o = n.article;
                                  return o ? r.createElement(Ze.Z, { articleEntity: o, hasSensitiveContent: n.possibly_sensitive, mediaVisibilityResults: n.mediaVisibilityResults, style: De.article }) : r.createElement(ze.Z, { color: "gray700", displayTextRange: n.display_text_range, entities: n.entities, id: e ? "notification-tweet-text" : void 0, lang: n.lang, text: n.text, withMediaLinks: !0, withQuoteLinks: !0 });
                              })(i),
                          )
                        : o && o.contextText
                          ? r.createElement(c.Z, { style: De.target }, r.createElement(ke, { focused: e, text: o.contextText }))
                          : null;
                },
                De = s.default.create((e) => ({ target: { marginTop: e.spaces.space12 }, article: { marginTop: 0 } })),
                Ae = "notification",
                Me = "notification-message-text",
                Se = "notification-tweet-text",
                He = "notification-show-more-text",
                Pe = "notification-additional-context",
                Te = s.default.create((e) => ({ root: { cursor: "pointer", paddingVertical: e.componentDimensions.gutterVertical }, rootRedesign: { paddingHorizontal: e.spaces.space16 }, horizontalPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, reducedHorizontalPadding: { paddingHorizontal: "6px" }, compactContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, edgeToEdgeSocialContext: { paddingStart: "10px" }, isTweet: { padding: 0 }, unread: { backgroundColor: e.colors.unreadCellBackground }, itemIcon: { alignItems: "flex-end" }, itemIconRedesign: { alignItems: "flex-start" }, edgeToEdgeItemIcon: { alignItems: "center" }, itemContent: { flexGrow: 1 }, curationControl: { position: "absolute", top: e.componentDimensions.gutterVertical, end: e.componentDimensions.gutterHorizontal }, curationControlRedesign: { end: 0 }, curationPadding: { paddingEnd: e.spaces.space20 }, icon: { height: "2em" }, colorDeepGray: { color: e.colors.gray700 }, colorRed: { color: e.colors.magenta500 }, socialContext: { marginBottom: e.spaces.space4 }, twitterIcon: { color: e.colors.brandColor }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorPlum: { color: e.colors.plum500 }, colorPurple: { color: e.colors.purple500 }, userAvatarList: { marginBottom: e.spaces.space12, paddingEnd: e.spaces.space20 }, timelineRowText: { justifyContent: "center" }, avatarDecoration: { width: "1.2em", height: "1.2em", position: "absolute", top: "1em", end: 0 } })),
                je = Object.freeze([Te.colorPurple, Te.icon]),
                Be = Object.freeze([Te.colorBlue, Te.icon]),
                Oe = Object.freeze([Te.colorRed, Te.icon]),
                Re = Object.freeze([Te.colorDeepGray, Te.icon]),
                Ve = Object.freeze([Te.colorGreen, Te.icon]),
                Ue = Object.freeze([Te.colorOrange, Te.icon]),
                Fe = Object.freeze([Te.colorPlum, Te.icon]),
                Le = Object.freeze([Te.colorPrimary, Te.icon]),
                Ne = Object.freeze([Te.twitterIcon, Te.icon]),
                Ge = r.createElement(g.default, { style: je }),
                Qe = r.createElement(f.default, { style: Be }),
                We = r.createElement(p.default, { style: Be }),
                Ye = r.createElement(y.default, { style: Be }),
                $e = r.createElement(h.default, { style: Be }),
                qe = r.createElement(E.default, { style: Oe }),
                Je = r.createElement(_.default, { style: Oe }),
                Ke = r.createElement(v.default, { style: Oe }),
                Xe = r.createElement(b.default, { style: Re }),
                et = r.createElement(w.default, { style: Be }),
                tt = r.createElement(x.default, { style: Oe }),
                nt = r.createElement(C.default, { style: Re }),
                ot = r.createElement(Z.default, { style: Re }),
                lt = r.createElement(z.default, { style: Te.icon }),
                at = r.createElement(k.default, { style: Te.icon }),
                it = r.createElement(I.default, { style: Be }),
                rt = r.createElement(D.default, { style: Be }),
                ct = r.createElement(A.default, { style: Re }),
                st = r.createElement(M.default, { style: Be }),
                dt = r.createElement(S.default, { style: Ve }),
                mt = r.createElement(H.default, { style: Te.icon }),
                ut = r.createElement(P.default, { style: Te.icon }),
                gt = r.createElement(he.Z, { style: Te.icon }),
                ft = r.createElement(T.default, { style: Le }),
                pt = r.createElement(j.default, { style: Ne }),
                yt = r.createElement(B.default, { style: Ue }),
                ht = r.createElement(O.default, { style: Ue }),
                Et = r.createElement(R.default, { style: Te.icon }),
                _t = r.createElement(V.default, { style: Te.icon }),
                vt = r.createElement(U.default, { style: Fe }),
                bt = r.createElement(F.default, { style: Oe }),
                wt = r.createElement(L.default, { style: Be }),
                xt = r.createElement(N.default, { style: Be }),
                Ct = r.createElement(G.default, { style: Ve }),
                Zt = r.createElement(Q.default, { style: Te.icon }),
                zt = { alert_bell_icon: Qe, bar_chart_icon: Ge, bell_icon: Qe, birdwatch_icon: We, bird_icon: pt, briefcase_icon: Ye, coin_icon: at, communities_icon: $e, conversation_bubble_icon: yt, heart_icon: Je, heart_plus_icon: Ke, histogram_icon: ct, lightning_bolt_icon: et, list_icon: Xe, live_icon: tt, lock_icon: nt, magic_rec_icon: pt, milestone_icon: lt, news_icon: ot, person_icon: it, play_icon: rt, promoted_icon: st, radar_stroke_icon: Zt, reply_icon: yt, report_icon: qe, recommendation_icon: mt, retweet_icon: dt, safety_icon: ut, security_alert_icon: Et, security_unknown_icon: _t, shield_icon: ht, spaces_icon: gt, stacked_cards_icon: pt, super_follows_icon: vt, super_follows_error_icon: bt, topic_icon: ft, trending_icon: pt, verified_general_icon: wt, verified_notable_icon: xt, money_icon: Ct },
                kt = (e) => {
                    const { featureSwitches: t, history: n } = r.useContext(Ee.rC),
                        [o, l] = r.useState(!1),
                        {
                            analytics: a,
                            entry: { content: i },
                            feedbackItems: s,
                            isUnread: g,
                            notification: f,
                        } = e,
                        p = t.isTrue("media_edge_to_edge_content_enabled");
                    r.useEffect(() => {
                        a.scribeAction("impression");
                    }, []);
                    const y = r.useCallback(() => {
                            a.scribeAction("navigate");
                        }, [a]),
                        h = r.useCallback(() => {
                            l(!0);
                        }, [l]),
                        E = r.useCallback(() => {
                            l(!1);
                        }, [l]),
                        { icon: _, message: v, template: b } = f,
                        w = i.url && (0, X.s9)(i.url),
                        x = i.socialContext && i.socialContext.generalContext && i.socialContext.generalContext,
                        C = s ? r.createElement(be.Z, { feedbackItems: s }) : null,
                        Z = (0, W.HD)(n),
                        z = r.useMemo(() => b.aggregateUserActionsV1.fromUsers.map((e) => e.user).filter(Boolean), [b.aggregateUserActionsV1.fromUsers]),
                        k = C && !z.length && !x,
                        I = _ && _.id && zt[_.id] ? zt[_.id] : pt,
                        D = w && ("string" == typeof w ? { pathname: w } : w),
                        A = (0, K.hC)("rweb_sourcemap_migration"),
                        M = (0, J.z)(),
                        S = r.useMemo(() => [Te.root, p ? Te.reducedHorizontalPadding : Te.horizontalPadding, M && Te.rootRedesign, g && Te.unread, Z && Te.compactContainer], [p, M, g, Z]),
                        H = r.useMemo(() => [Te.itemContent, Te.timelineRowText, k && Te.curationPadding], [k]),
                        P = Z ? "medium" : void 0;
                    return r.createElement(d.$6, null, (e) => r.createElement(m.Z, { "aria-labelledby": o ? [Me, Se, He, Pe].join(" ") : void 0, link: D ? e.withAnchorless(D) : void 0, onBlur: E, onClick: y, onFocus: h, role: "article", style: S, testID: Ae }, x ? r.createElement(ve.Z, { avatarSize: P, contextType: x.contextType, link: x.landingUrl ? (0, X.s9)(x.landingUrl) : void 0, style: Te.socialContext, text: x.text }) : null, r.createElement(u.Z, { avatarCell: I, avatarCellStyle: [Te.itemIcon, p && Te.edgeToEdgeItemIcon, A && Te.itemIconRedesign], avatarSize: P, cellStyle: H, style: p && Te.edgeToEdgeSocialContext }, z.length ? r.createElement(c.Z, { style: Te.userAvatarList }, r.createElement(q, { users: z })) : null, r.createElement(_e.Z, { alignment: v.alignment, entities: v.entities, id: o ? Me : void 0, rtl: v.rtl, text: v.text }), r.createElement(Ie, { focused: o, template: b }), r.createElement(xe, { focused: o, link: w, template: b })), C ? r.createElement(c.Z, { style: [Te.curationControl, M && Te.curationControlRedesign] }, C) : null));
                },
                It = (e) => {
                    const t = ((n = e.entry.content.id), (0, te.v9)((e) => ye.selectNotification(e, n), ne.Z));
                    var n;
                    const o = (0, ee.z)(),
                        l = (0, te.v9)((t) => e.module.selectIsUnread(t, e.entry.entryId));
                    return t ? r.createElement(kt, (0, i.Z)({}, e, { analytics: o, isUnread: l, notification: t })) : null;
                },
                Dt = a.iH({ isFocusable: (0, o.Z)(!0), component: It, shouldDisplayBorder: (0, o.Z)(!0), getScribeDataItem: ({ itemMetadata: { clientEventInfo: e } }) => l.Z.getAllSurfaceDetails(e) }).getHandler();
        },
        927389: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                l = n(247056),
                a = n(392237);
            const i = (0, n(523561).Z)({ loader: () => n.e("loader.FeedbackSheet").then(n.bind(n, 774426)) });
            var r = n(725516),
                c = n(851623);
            const s = a.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, r.Z)((e) => {
                    const { analytics: t, feedbackItems: n, isDisplayedOnMedia: a } = e,
                        r = o.useCallback((e) => (n ? o.createElement(i, { actionItems: n, onClose: e }) : null), [n]),
                        d = o.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return n && n.length > 0 ? o.createElement(l.Z, { onClick: d, renderActionMenu: r, style: s.curationControl, testID: c.Z.caret, withDarkBackground: a }) : null;
                });
        },
        703738: (e, t, n) => {
            n.d(t, { z: () => i });
            var o = n(323265),
                l = n(655352),
                a = n(952793);
            const i = () => (0, a.hC)("rweb_sourcemap_migration") && (0, l.ZP)() && !o.ZP.isMobileOS();
        },
        259055: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M22 8.5H12v-3h10v3zm0 10H12v-3h10v3zM6 13c-2.21 0-4 1.791-4 4s1.79 4 4 4 4-1.791 4-4-1.79-4-4-4zm0 5.5c-.83 0-1.5-.672-1.5-1.5s.67-1.5 1.5-1.5 1.5.672 1.5 1.5-.67 1.5-1.5 1.5zM6 3C3.79 3 2 4.791 2 7s1.79 4 4 4 4-1.791 4-4-1.79-4-4-4z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        672738: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-.138 0-.276.038-.398.114-.044.028-4.515 2.8-9.21 3.494-.362.053-.632.358-.642.723-.003.118-.188 11.742 9.938 16.353.1.045.206.067.312.067V1.75z", fill: "#1DA1F2" }), o.createElement("path", { d: "M12 1.75c.138 0 .276.038.398.114.044.028 4.515 2.8 9.21 3.494.362.053.632.358.64.723.004.118.19 11.742-9.937 16.353-.098.045-.204.067-.31.067V1.75z", fill: "#78C6EE" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        503089: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z", fill: "#F4212E" }), o.createElement("path", { d: "M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z", fill: "#FFF" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NotificationHandler.967f01ba.js.map
