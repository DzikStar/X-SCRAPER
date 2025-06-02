"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NotificationHandler", "icons/IconHeartPlus-js"],
    {
        41903: (e, t, n) => {
            n.r(t), n.d(t, { default: () => At });
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
                _ = n(159340),
                E = n(597237),
                h = n(761744),
                v = n(517890),
                b = n(544367),
                x = n(453333),
                w = n(213279),
                C = n(121791),
                Z = n(902673),
                k = n(772722),
                z = n(856151),
                I = n(25001),
                A = n(466445),
                D = n(259055),
                P = n(283379),
                S = n(720600),
                T = n(933288),
                H = n(672738),
                M = n(452693),
                j = n(520913),
                O = n(98440),
                R = n(134878),
                B = n(503089),
                U = n(278065),
                V = n(491831),
                L = n(211971),
                N = n(792618),
                F = n(144251),
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
            var _e = n(233040),
                Ee = n(443781),
                he = n(686689),
                ve = n(988245),
                be = n(927389),
                xe = n(731708);
            const we = ({ focused: e, link: t, onClick: n, template: o }) => {
                    const {
                        aggregateUserActionsV1: { showAllLinkText: l },
                    } = o;
                    return l && t ? r.createElement(xe.ZP, { id: e ? "notification-show-more-text" : void 0, link: t, onClick: n, style: Ce.showMore }, l) : null;
                },
                Ce = s.default.create((e) => ({ showMore: { marginTop: e.spaces.space12 } }));
            var Ze = n(530338),
                ke = n(451051);
            const ze = ({ focused: e, text: t }) => r.createElement(he.Z, { alignment: t.alignment, color: "gray700", entities: t.entities, id: e ? "notification-additional-context" : void 0, rtl: t.rtl, text: t.text }),
                Ie = ({ focused: e, template: t }) => {
                    const { aggregateUserActionsV1: n } = t,
                        { additionalContext: o, targetObjects: l } = n,
                        a = l.filter((e) => e.tweet),
                        i = a.length ? a[0].tweet : null;
                    return i
                        ? r.createElement(
                              c.Z,
                              { style: Ae.target },
                              ((t) => {
                                  const n = t.retweeted_status || t,
                                      o = n.article;
                                  return o ? r.createElement(Ze.Z, { articleEntity: o, hasSensitiveContent: n.possibly_sensitive, mediaVisibilityResults: n.mediaVisibilityResults, style: Ae.article }) : r.createElement(ke.Z, { color: "gray700", displayTextRange: n.display_text_range, entities: n.entities, id: e ? "notification-tweet-text" : void 0, lang: n.lang, text: n.text, withMediaLinks: !0, withQuoteLinks: !0 });
                              })(i),
                          )
                        : o && o.contextText
                          ? r.createElement(c.Z, { style: Ae.target }, r.createElement(ze, { focused: e, text: o.contextText }))
                          : null;
                },
                Ae = s.default.create((e) => ({ target: { marginTop: e.spaces.space12 }, article: { marginTop: 0 } })),
                De = "notification",
                Pe = "notification-message-text",
                Se = "notification-tweet-text",
                Te = "notification-show-more-text",
                He = "notification-additional-context",
                Me = s.default.create((e) => ({ root: { cursor: "pointer", paddingVertical: e.componentDimensions.gutterVertical }, rootRedesign: { paddingHorizontal: e.spaces.space16 }, horizontalPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, reducedHorizontalPadding: { paddingHorizontal: "6px" }, compactContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, edgeToEdgeSocialContext: { paddingStart: "10px" }, isTweet: { padding: 0 }, unread: { backgroundColor: e.colors.unreadCellBackground }, itemIcon: { alignItems: "flex-end" }, itemIconRedesign: { alignItems: "flex-start" }, edgeToEdgeItemIcon: { alignItems: "center" }, itemContent: { flexGrow: 1 }, curationControl: { position: "absolute", top: e.componentDimensions.gutterVertical, end: e.componentDimensions.gutterHorizontal }, curationControlRedesign: { end: 0 }, curationPadding: { paddingEnd: e.spaces.space20 }, icon: { height: "2em" }, colorDeepGray: { color: e.colors.gray700 }, colorRed: { color: e.colors.magenta500 }, socialContext: { marginBottom: e.spaces.space4 }, twitterIcon: { color: e.colors.brandColor }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorPlum: { color: e.colors.plum500 }, colorPurple: { color: e.colors.purple500 }, userAvatarList: { marginBottom: e.spaces.space12, paddingEnd: e.spaces.space20 }, timelineRowText: { justifyContent: "center" }, avatarDecoration: { width: "1.2em", height: "1.2em", position: "absolute", top: "1em", end: 0 } })),
                je = Object.freeze([Me.colorPurple, Me.icon]),
                Oe = Object.freeze([Me.colorBlue, Me.icon]),
                Re = Object.freeze([Me.colorRed, Me.icon]),
                Be = Object.freeze([Me.colorDeepGray, Me.icon]),
                Ue = Object.freeze([Me.colorGreen, Me.icon]),
                Ve = Object.freeze([Me.colorOrange, Me.icon]),
                Le = Object.freeze([Me.colorPlum, Me.icon]),
                Ne = Object.freeze([Me.colorPrimary, Me.icon]),
                Fe = Object.freeze([Me.twitterIcon, Me.icon]),
                Ge = r.createElement(g.default, { style: je }),
                Qe = r.createElement(f.default, { style: Oe }),
                We = r.createElement(p.default, { style: Oe }),
                Ye = r.createElement(y.default, { style: Oe }),
                $e = r.createElement(_.default, { style: Oe }),
                qe = r.createElement(E.default, { style: Re }),
                Je = r.createElement(h.default, { style: Re }),
                Ke = r.createElement(v.default, { style: Re }),
                Xe = r.createElement(b.default, { style: Be }),
                et = r.createElement(x.default, { style: Oe }),
                tt = r.createElement(w.default, { style: Re }),
                nt = r.createElement(C.default, { style: Be }),
                ot = r.createElement(Z.default, { style: Be }),
                lt = r.createElement(k.default, { style: Me.icon }),
                at = r.createElement(z.default, { style: Me.icon }),
                it = r.createElement(I.default, { style: Oe }),
                rt = r.createElement(A.default, { style: Oe }),
                ct = r.createElement(D.default, { style: Be }),
                st = r.createElement(P.default, { style: Oe }),
                dt = r.createElement(S.default, { style: Ue }),
                mt = r.createElement(T.default, { style: Me.icon }),
                ut = r.createElement(H.default, { style: Me.icon }),
                gt = r.createElement(_e.Z, { style: Me.icon }),
                ft = r.createElement(M.default, { style: Ne }),
                pt = r.createElement(j.default, { style: Fe }),
                yt = r.createElement(O.default, { style: Ve }),
                _t = r.createElement(R.default, { style: Ve }),
                Et = r.createElement(B.default, { style: Me.icon }),
                ht = r.createElement(U.default, { style: Me.icon }),
                vt = r.createElement(V.default, { style: Le }),
                bt = r.createElement(L.default, { style: Re }),
                xt = r.createElement(N.default, { style: Oe }),
                wt = r.createElement(F.default, { style: Oe }),
                Ct = r.createElement(G.default, { style: Ue }),
                Zt = r.createElement(Q.default, { style: Me.icon }),
                kt = { alert_bell_icon: Qe, bar_chart_icon: Ge, bell_icon: Qe, birdwatch_icon: We, bird_icon: pt, briefcase_icon: Ye, coin_icon: at, communities_icon: $e, conversation_bubble_icon: yt, heart_icon: Je, heart_plus_icon: Ke, histogram_icon: ct, lightning_bolt_icon: et, list_icon: Xe, live_icon: tt, lock_icon: nt, magic_rec_icon: pt, milestone_icon: lt, news_icon: ot, person_icon: it, play_icon: rt, promoted_icon: st, radar_stroke_icon: Zt, reply_icon: yt, report_icon: qe, recommendation_icon: mt, retweet_icon: dt, safety_icon: ut, security_alert_icon: Et, security_unknown_icon: ht, shield_icon: _t, spaces_icon: gt, stacked_cards_icon: pt, super_follows_icon: vt, super_follows_error_icon: bt, topic_icon: ft, trending_icon: pt, verified_general_icon: xt, verified_notable_icon: wt, money_icon: Ct },
                zt = (e) => {
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
                        _ = r.useCallback(() => {
                            l(!0);
                        }, [l]),
                        E = r.useCallback(() => {
                            l(!1);
                        }, [l]),
                        { icon: h, message: v, template: b } = f,
                        x = i.url && (0, X.s9)(i.url),
                        w = i.socialContext && i.socialContext.generalContext && i.socialContext.generalContext,
                        C = s ? r.createElement(be.Z, { feedbackItems: s }) : null,
                        Z = (0, W.HD)(n),
                        k = r.useMemo(() => b.aggregateUserActionsV1.fromUsers.map((e) => e.user).filter(Boolean), [b.aggregateUserActionsV1.fromUsers]),
                        z = C && !k.length && !w,
                        I = h && h.id && kt[h.id] ? kt[h.id] : pt,
                        A = x && ("string" == typeof x ? { pathname: x } : x),
                        D = (0, K.hC)("rweb_sourcemap_migration"),
                        P = (0, J.z)(),
                        S = r.useMemo(() => [Me.root, p ? Me.reducedHorizontalPadding : Me.horizontalPadding, P && Me.rootRedesign, g && Me.unread, Z && Me.compactContainer], [p, P, g, Z]),
                        T = r.useMemo(() => [Me.itemContent, Me.timelineRowText, z && Me.curationPadding], [z]),
                        H = Z ? "medium" : void 0;
                    return r.createElement(d.$6, null, (e) => r.createElement(m.Z, { "aria-labelledby": o ? [Pe, Se, Te, He].join(" ") : void 0, link: A ? e.withAnchorless(A) : void 0, onBlur: E, onClick: y, onFocus: _, role: "article", style: S, testID: De }, w ? r.createElement(ve.Z, { avatarSize: H, contextType: w.contextType, link: w.landingUrl ? (0, X.s9)(w.landingUrl) : void 0, style: Me.socialContext, text: w.text }) : null, r.createElement(u.Z, { avatarCell: I, avatarCellStyle: [Me.itemIcon, p && Me.edgeToEdgeItemIcon, D && Me.itemIconRedesign], avatarSize: H, cellStyle: T, style: p && Me.edgeToEdgeSocialContext }, k.length ? r.createElement(c.Z, { style: Me.userAvatarList }, r.createElement(q, { users: k })) : null, r.createElement(he.Z, { alignment: v.alignment, entities: v.entities, id: o ? Pe : void 0, rtl: v.rtl, text: v.text }), r.createElement(Ie, { focused: o, template: b }), r.createElement(we, { focused: o, link: x, template: b })), C ? r.createElement(c.Z, { style: [Me.curationControl, P && Me.curationControlRedesign] }, C) : null));
                },
                It = (e) => {
                    const t = ((n = e.entry.content.id), (0, te.v9)((e) => ye.selectNotification(e, n), ne.Z));
                    var n;
                    const o = (0, ee.z)(),
                        l = (0, te.v9)((t) => e.module.selectIsUnread(t, e.entry.entryId));
                    return t ? r.createElement(zt, (0, i.Z)({}, e, { analytics: o, isUnread: l, notification: t })) : null;
                },
                At = a.iH({ isFocusable: (0, o.Z)(!0), component: It, shouldDisplayBorder: (0, o.Z)(!0), getScribeDataItem: ({ itemMetadata: { clientEventInfo: e } }) => l.Z.getAllSurfaceDetails(e) }).getHandler();
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
        517890: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M15.002 19v.097c-.766.537-1.585 1.072-2.497 1.603l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.737 1.488.82 3.351.075 5.356-.139-.969-.964-1.716-1.971-1.716h-2.501c-1.104 0-2 .896-2 2v1h-.998c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h1zM19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NotificationHandler.76d5c48a.js.map
