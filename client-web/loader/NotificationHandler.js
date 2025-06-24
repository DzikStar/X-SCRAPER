"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NotificationHandler", "icons/IconBarChartHorizontal-js", "icons/IconNotificationsSafety-js", "icons/IconNotificationsSecurityAlert-js"],
    {
        814211: (e, t, l) => {
            l.r(t), l.d(t, { default: () => It });
            var n = l(459643),
                a = l(942893),
                o = l(351322),
                i = l(807896),
                r = l(202784),
                c = l(325686),
                s = l(392237),
                d = l(638009),
                m = l(952428),
                u = l(872405),
                g = l(966886),
                f = l(53674),
                p = l(996548),
                y = l(286406),
                h = l(720930),
                E = l(159340),
                _ = l(597237),
                v = l(761744),
                b = l(517890),
                w = l(544367),
                x = l(453333),
                C = l(213279),
                Z = l(121791),
                k = l(902673),
                z = l(772722),
                I = l(856151),
                A = l(25001),
                D = l(466445),
                M = l(259055),
                S = l(283379),
                T = l(720600),
                j = l(933288),
                H = l(672738),
                B = l(452693),
                P = l(520913),
                O = l(98440),
                U = l(134878),
                V = l(503089),
                F = l(278065),
                L = l(491831),
                N = l(211971),
                R = l(792618),
                G = l(144251),
                Q = l(80361),
                W = l(520489),
                Y = l(908478),
                $ = l(791632),
                q = l(823161);
            const J = s.default.create((e) => ({ root: { flexWrap: "wrap", flexDirection: "row", overflow: "hidden", height: e.spaces.space32 }, rootCenter: { justifyContent: "center" }, item: { marginHorizontal: e.spaces.space4 }, itemLeftFirst: { marginStart: 0 } })),
                K = ({ align: e = "left", maxItems: t = 10, style: l, userDecorations: n, ...a }) => {
                    const o = r.useMemo(() => a.users.slice(0, t).filter(Boolean), [a.users, t]);
                    return r.createElement(
                        c.Z,
                        { role: "list", style: [J.root, "center" === e && J.rootCenter, l] },
                        o.map((t, l) => r.createElement(q.default, { "aria-hidden": !0, decoration: n && n[l], key: l, screenName: t.screen_name, size: "large", style: [J.item, 0 === l && "left" === e && J.itemLeftFirst], uri: t.profile_image_url_https, withHoverCard: !0, withLink: !0 })),
                    );
                };
            var X = l(946409),
                ee = l(725516),
                te = l(125363),
                le = l(506899),
                ne = l(24949),
                ae = l(128737),
                oe = l(276001),
                ie = l(502909),
                re = l(600823),
                ce = l(576469),
                se = l(542054),
                de = l(836255),
                me = l(919022);
            const ue = (0, ie.ZP)({ namespace: "genericNotifications" }),
                ge = {
                    selectNotification: (0, ne.P1)(
                        ue.selectAll,
                        de.Z.selectAll,
                        me.ZP.selectAll,
                        ce.Z.selectAll,
                        oe.Z.selectAll,
                        se.Z.selectAll,
                        (e, t) => t,
                        (e, t, l, n, a, o, i) => (0, le.cY)(e[i], ae.Z, { cards: a, tweets: t, users: l, lists: n, publishedArticles: o }),
                    ),
                };
            const fe = {
                    ...ue,
                    ...ge,
                    addNotification: function (e) {
                        return fe.add({ [e.id_str]: e });
                    },
                },
                pe = re.Z.register(fe);
            var ye = l(233040),
                he = l(443781),
                Ee = l(686689),
                _e = l(988245),
                ve = l(927389),
                be = l(731708);
            const we = ({ focused: e, link: t, onClick: l, template: n }) => {
                    const {
                        aggregateUserActionsV1: { showAllLinkText: a },
                    } = n;
                    return a && t ? r.createElement(be.ZP, { id: e ? "notification-show-more-text" : void 0, link: t, onClick: l, style: xe.showMore }, a) : null;
                },
                xe = s.default.create((e) => ({ showMore: { marginTop: e.spaces.space12 } }));
            var Ce = l(530338),
                Ze = l(451051);
            const ke = ({ focused: e, text: t }) => r.createElement(Ee.Z, { alignment: t.alignment, color: "gray700", entities: t.entities, id: e ? "notification-additional-context" : void 0, rtl: t.rtl, text: t.text }),
                ze = ({ focused: e, template: t }) => {
                    const { aggregateUserActionsV1: l } = t,
                        { additionalContext: n, targetObjects: a } = l,
                        o = a.filter((e) => e.tweet),
                        i = o.length ? o[0].tweet : null;
                    return i
                        ? r.createElement(
                              c.Z,
                              { style: Ie.target },
                              ((t) => {
                                  const l = t.retweeted_status || t,
                                      n = l.article;
                                  return n ? r.createElement(Ce.Z, { articleEntity: n, hasSensitiveContent: l.possibly_sensitive, mediaVisibilityResults: l.mediaVisibilityResults, style: Ie.article }) : r.createElement(Ze.Z, { color: "gray700", displayTextRange: l.display_text_range, entities: l.entities, id: e ? "notification-tweet-text" : void 0, lang: l.lang, text: l.text, withMediaLinks: !0, withQuoteLinks: !0 });
                              })(i),
                          )
                        : n && n.contextText
                          ? r.createElement(c.Z, { style: Ie.target }, r.createElement(ke, { focused: e, text: n.contextText }))
                          : null;
                },
                Ie = s.default.create((e) => ({ target: { marginTop: e.spaces.space12 }, article: { marginTop: 0 } })),
                Ae = "notification",
                De = "notification-message-text",
                Me = "notification-tweet-text",
                Se = "notification-show-more-text",
                Te = "notification-additional-context",
                je = s.default.create((e) => ({ root: { cursor: "pointer", paddingVertical: e.componentDimensions.gutterVertical }, horizontalPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, reducedHorizontalPadding: { paddingHorizontal: "6px" }, compactContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, edgeToEdgeSocialContext: { paddingStart: "10px" }, isTweet: { padding: 0 }, unread: { backgroundColor: e.colors.unreadCellBackground }, itemIcon: { alignItems: "flex-end" }, edgeToEdgeItemIcon: { alignItems: "center" }, itemContent: { flexGrow: 1 }, rightControl: { alignItems: "end", display: "flex", gap: e.spaces.space4 }, timestamp: { marginStart: e.spaces.space20 }, icon: { height: "2em" }, colorDeepGray: { color: e.colors.gray700 }, colorRed: { color: e.colors.magenta500 }, socialContext: { marginBottom: e.spaces.space4 }, twitterIcon: { color: e.colors.brandColor }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorPlum: { color: e.colors.plum500 }, colorPurple: { color: e.colors.purple500 }, userAvatarList: { marginBottom: e.spaces.space12, paddingEnd: e.spaces.space20 }, timelineRowText: { justifyContent: "center" }, avatarDecoration: { width: "1.2em", height: "1.2em", position: "absolute", top: "1em", end: 0 } })),
                He = Object.freeze([je.colorPurple, je.icon]),
                Be = Object.freeze([je.colorBlue, je.icon]),
                Pe = Object.freeze([je.colorRed, je.icon]),
                Oe = Object.freeze([je.colorDeepGray, je.icon]),
                Ue = Object.freeze([je.colorGreen, je.icon]),
                Ve = Object.freeze([je.colorOrange, je.icon]),
                Fe = Object.freeze([je.colorPlum, je.icon]),
                Le = Object.freeze([je.colorPrimary, je.icon]),
                Ne = Object.freeze([je.twitterIcon, je.icon]),
                Re = r.createElement(f.default, { style: He }),
                Ge = r.createElement(p.default, { style: Be }),
                Qe = r.createElement(y.default, { style: Be }),
                We = r.createElement(h.default, { style: Be }),
                Ye = r.createElement(E.default, { style: Be }),
                $e = r.createElement(_.default, { style: Pe }),
                qe = r.createElement(v.default, { style: Pe }),
                Je = r.createElement(b.default, { style: Pe }),
                Ke = r.createElement(w.default, { style: Oe }),
                Xe = r.createElement(x.default, { style: Be }),
                et = r.createElement(C.default, { style: Pe }),
                tt = r.createElement(Z.default, { style: Oe }),
                lt = r.createElement(k.default, { style: Oe }),
                nt = r.createElement(z.default, { style: je.icon }),
                at = r.createElement(I.default, { style: je.icon }),
                ot = r.createElement(A.default, { style: Be }),
                it = r.createElement(D.default, { style: Be }),
                rt = r.createElement(M.default, { style: Oe }),
                ct = r.createElement(S.default, { style: Be }),
                st = r.createElement(T.default, { style: Ue }),
                dt = r.createElement(j.default, { style: je.icon }),
                mt = r.createElement(H.default, { style: je.icon }),
                ut = r.createElement(ye.Z, { style: je.icon }),
                gt = r.createElement(B.default, { style: Le }),
                ft = r.createElement(P.default, { style: Ne }),
                pt = r.createElement(O.default, { style: Ve }),
                yt = r.createElement(U.default, { style: Ve }),
                ht = r.createElement(V.default, { style: je.icon }),
                Et = r.createElement(F.default, { style: je.icon }),
                _t = r.createElement(L.default, { style: Fe }),
                vt = r.createElement(N.default, { style: Pe }),
                bt = r.createElement(R.default, { style: Be }),
                wt = r.createElement(G.default, { style: Be }),
                xt = r.createElement(Q.default, { style: Ue }),
                Ct = r.createElement(W.default, { style: je.icon }),
                Zt = { alert_bell_icon: Ge, bar_chart_icon: Re, bell_icon: Ge, birdwatch_icon: Qe, bird_icon: ft, briefcase_icon: We, coin_icon: at, communities_icon: Ye, conversation_bubble_icon: pt, heart_icon: qe, heart_plus_icon: Je, histogram_icon: rt, lightning_bolt_icon: Xe, list_icon: Ke, live_icon: et, lock_icon: tt, magic_rec_icon: ft, milestone_icon: nt, news_icon: lt, person_icon: ot, play_icon: it, promoted_icon: ct, radar_stroke_icon: Ct, reply_icon: pt, report_icon: $e, recommendation_icon: dt, retweet_icon: st, safety_icon: mt, security_alert_icon: ht, security_unknown_icon: Et, shield_icon: yt, spaces_icon: ut, stacked_cards_icon: ft, super_follows_icon: _t, super_follows_error_icon: vt, topic_icon: gt, trending_icon: ft, verified_general_icon: bt, verified_notable_icon: wt, money_icon: xt },
                kt = (e) => {
                    const { featureSwitches: t, history: l } = r.useContext(he.rC),
                        [n, a] = r.useState(!1),
                        {
                            analytics: o,
                            entry: { content: i },
                            feedbackItems: s,
                            isUnread: f,
                            notification: p,
                        } = e,
                        y = t.isTrue("media_edge_to_edge_content_enabled");
                    r.useEffect(() => {
                        o.scribeAction("impression");
                    }, [o]);
                    const h = r.useCallback(() => {
                            o.scribeAction("navigate");
                        }, [o]),
                        E = r.useCallback(() => {
                            a(!0);
                        }, [a]),
                        _ = r.useCallback(() => {
                            a(!1);
                        }, [a]),
                        { icon: v, message: b, template: w, timestampMs: x } = p,
                        C = i.url && (0, X.s9)(i.url),
                        Z = i.socialContext && i.socialContext.generalContext && i.socialContext.generalContext,
                        k = (0, $.HD)(l),
                        z = r.useMemo(() => w.aggregateUserActionsV1.fromUsers.map((e) => e.user).filter(Boolean), [w.aggregateUserActionsV1.fromUsers]),
                        I = v && v.id && Zt[v.id] ? Zt[v.id] : ft,
                        A = C && ("string" == typeof C ? { pathname: C } : C),
                        D = r.useMemo(() => [je.root, y ? je.reducedHorizontalPadding : je.horizontalPadding, f && je.unread, k && je.compactContainer], [k, f, y]),
                        M = r.useMemo(() => [je.itemContent, je.timelineRowText], []),
                        S = k ? "medium" : void 0;
                    return r.createElement(d.$6, null, (e) => r.createElement(m.Z, { "aria-labelledby": n ? [De, Me, Se, Te].join(" ") : void 0, link: A ? e.withAnchorless(A) : void 0, onBlur: _, onClick: h, onFocus: E, role: "article", style: D, testID: Ae }, Z ? r.createElement(_e.Z, { avatarSize: S, contextType: Z.contextType, link: Z.landingUrl ? (0, X.s9)(Z.landingUrl) : void 0, style: je.socialContext, text: Z.text }) : null, r.createElement(u.Z, { avatarCell: I, avatarCellStyle: [je.itemIcon, y && je.edgeToEdgeItemIcon], avatarSize: S, cellStyle: M, rightControl: r.createElement(c.Z, { style: je.rightControl }, s?.length ? r.createElement(ve.Z, { feedbackItems: s }) : null, r.createElement(g.Z, { style: je.timestamp, timestamp: x })), style: y && je.edgeToEdgeSocialContext }, z.length ? r.createElement(c.Z, { style: je.userAvatarList }, r.createElement(K, { users: z })) : null, r.createElement(Ee.Z, { alignment: b.alignment, entities: b.entities, id: n ? De : void 0, rtl: b.rtl, text: b.text }), r.createElement(ze, { focused: n, template: w }), r.createElement(we, { focused: n, link: C, template: w }))));
                },
                zt = (e) => {
                    const t = (0, ee.z)(),
                        l = (0, te.v9)((t) => pe.selectNotification(t, e.entry.content.id), Y.Z),
                        n = (0, te.v9)((t) => e.module.selectIsUnread(t, e.entry.entryId));
                    return l ? r.createElement(kt, (0, i.Z)({}, e, { analytics: t, isUnread: n, notification: l })) : null;
                },
                It = o.iH({ isFocusable: (0, n.Z)(!0), component: zt, shouldDisplayBorder: (0, n.Z)(!0), getScribeDataItem: ({ itemMetadata: { clientEventInfo: e } }) => a.Z.getAllSurfaceDetails(e) }).getHandler();
        },
        927389: (e, t, l) => {
            l.d(t, { Z: () => d });
            var n = l(202784),
                a = l(247056),
                o = l(392237);
            const i = (0, l(523561).Z)({ loader: () => l.e("loader.FeedbackSheet").then(l.bind(l, 774426)) });
            var r = l(725516),
                c = l(851623);
            const s = o.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, r.Z)((e) => {
                    const { analytics: t, feedbackItems: l, isDisplayedOnMedia: o } = e,
                        r = n.useCallback((e) => (l ? n.createElement(i, { actionItems: l, onClose: e }) : null), [l]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return l && l.length > 0 ? n.createElement(a.Z, { onClick: d, renderActionMenu: r, style: s.curationControl, testID: c.Z.caret, withDarkBackground: o }) : null;
                });
        },
        259055: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var n = l(202784),
                a = l(890601),
                o = l(783427),
                i = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M22 8.5H12v-3h10v3zm0 10H12v-3h10v3zM6 13c-2.21 0-4 1.791-4 4s1.79 4 4 4 4-1.791 4-4-1.79-4-4-4zm0 5.5c-.83 0-1.5-.672-1.5-1.5s.67-1.5 1.5-1.5 1.5.672 1.5 1.5-.67 1.5-1.5 1.5zM6 3C3.79 3 2 4.791 2 7s1.79 4 4 4 4-1.791 4-4-1.79-4-4-4z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        672738: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var n = l(202784),
                a = l(890601),
                o = l(783427),
                i = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-.138 0-.276.038-.398.114-.044.028-4.515 2.8-9.21 3.494-.362.053-.632.358-.642.723-.003.118-.188 11.742 9.938 16.353.1.045.206.067.312.067V1.75z", fill: "#1DA1F2" }), n.createElement("path", { d: "M12 1.75c.138 0 .276.038.398.114.044.028 4.515 2.8 9.21 3.494.362.053.632.358.64.723.004.118.19 11.742-9.937 16.353-.098.045-.204.067-.31.067V1.75z", fill: "#78C6EE" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        503089: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var n = l(202784),
                a = l(890601),
                o = l(783427),
                i = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z", fill: "#F4212E" }), n.createElement("path", { d: "M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z", fill: "#FFF" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        452693: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var n = l(202784),
                a = l(890601),
                o = l(783427),
                i = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NotificationHandler.8ef8235a.js.map
