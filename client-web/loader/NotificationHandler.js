"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NotificationHandler"],
    {
        814211: (e, t, n) => {
            n.r(t), n.d(t, { default: () => It });
            var l = n(459643),
                o = n(942893),
                a = n(351322),
                r = n(807896),
                i = n(202784),
                c = n(325686),
                s = n(392237),
                d = n(638009),
                m = n(952428),
                u = n(872405),
                g = n(966886),
                f = n(53674),
                p = n(996548),
                y = n(286406),
                _ = n(720930),
                E = n(159340),
                h = n(597237),
                b = n(761744),
                x = n(517890),
                C = n(544367),
                w = n(453333),
                v = n(213279),
                Z = n(121791),
                k = n(902673),
                z = n(772722),
                I = n(856151),
                A = n(25001),
                S = n(466445),
                T = n(259055),
                D = n(283379),
                P = n(720600),
                j = n(933288),
                O = n(672738),
                M = n(452693),
                B = n(520913),
                H = n(98440),
                U = n(134878),
                L = n(503089),
                V = n(278065),
                R = n(491831),
                N = n(211971),
                F = n(792618),
                G = n(144251),
                Q = n(80361),
                W = n(520489),
                Y = n(908478),
                $ = n(791632),
                q = n(823161);
            const J = s.default.create((e) => ({ root: { flexWrap: "wrap", flexDirection: "row", overflow: "hidden", height: e.spaces.space32 }, rootCenter: { justifyContent: "center" }, item: { marginHorizontal: e.spaces.space4 }, itemLeftFirst: { marginStart: 0 } })),
                K = ({ align: e = "left", maxItems: t = 10, style: n, userDecorations: l, ...o }) => {
                    const a = i.useMemo(() => o.users.slice(0, t).filter(Boolean), [o.users, t]);
                    return i.createElement(
                        c.Z,
                        { role: "list", style: [J.root, "center" === e && J.rootCenter, n] },
                        a.map((t, n) => i.createElement(q.default, { "aria-hidden": !0, decoration: l && l[n], key: n, screenName: t.screen_name, size: "large", style: [J.item, 0 === n && "left" === e && J.itemLeftFirst], uri: t.profile_image_url_https, withHoverCard: !0, withLink: !0 })),
                    );
                };
            var X = n(946409),
                ee = n(725516),
                te = n(125363),
                ne = n(506899),
                le = n(24949),
                oe = n(128737),
                ae = n(276001),
                re = n(502909),
                ie = n(600823),
                ce = n(576469),
                se = n(542054),
                de = n(836255),
                me = n(919022);
            const ue = (0, re.ZP)({ namespace: "genericNotifications" }),
                ge = {
                    selectNotification: (0, le.P1)(
                        ue.selectAll,
                        de.Z.selectAll,
                        me.ZP.selectAll,
                        ce.Z.selectAll,
                        ae.Z.selectAll,
                        se.Z.selectAll,
                        (e, t) => t,
                        (e, t, n, l, o, a, r) => (0, ne.cY)(e[r], oe.Z, { cards: o, tweets: t, users: n, lists: l, publishedArticles: a }),
                    ),
                };
            const fe = {
                    ...ue,
                    ...ge,
                    addNotification: function (e) {
                        return fe.add({ [e.id_str]: e });
                    },
                },
                pe = ie.Z.register(fe);
            var ye = n(233040),
                _e = n(443781),
                Ee = n(686689),
                he = n(988245),
                be = n(927389),
                xe = n(731708);
            const Ce = ({ focused: e, link: t, onClick: n, template: l }) => {
                    const {
                        aggregateUserActionsV1: { showAllLinkText: o },
                    } = l;
                    return o && t ? i.createElement(xe.ZP, { id: e ? "notification-show-more-text" : void 0, link: t, onClick: n, style: we.showMore }, o) : null;
                },
                we = s.default.create((e) => ({ showMore: { marginTop: e.spaces.space12 } }));
            var ve = n(530338),
                Ze = n(451051);
            const ke = ({ focused: e, text: t }) => i.createElement(Ee.Z, { alignment: t.alignment, color: "gray700", entities: t.entities, id: e ? "notification-additional-context" : void 0, rtl: t.rtl, text: t.text }),
                ze = ({ focused: e, template: t }) => {
                    const { aggregateUserActionsV1: n } = t,
                        { additionalContext: l, targetObjects: o } = n,
                        a = o.filter((e) => e.tweet),
                        r = a.length ? a[0].tweet : null;
                    return r
                        ? i.createElement(
                              c.Z,
                              { style: Ie.target },
                              ((t) => {
                                  const n = t.retweeted_status || t,
                                      l = n.article;
                                  return l ? i.createElement(ve.Z, { articleEntity: l, hasSensitiveContent: n.possibly_sensitive, mediaVisibilityResults: n.mediaVisibilityResults, style: Ie.article }) : i.createElement(Ze.Z, { color: "gray700", displayTextRange: n.display_text_range, entities: n.entities, id: e ? "notification-tweet-text" : void 0, lang: n.lang, text: n.text, withMediaLinks: !0, withQuoteLinks: !0 });
                              })(r),
                          )
                        : l && l.contextText
                          ? i.createElement(c.Z, { style: Ie.target }, i.createElement(ke, { focused: e, text: l.contextText }))
                          : null;
                },
                Ie = s.default.create((e) => ({ target: { marginTop: e.spaces.space12 }, article: { marginTop: 0 } })),
                Ae = "notification",
                Se = "notification-message-text",
                Te = "notification-tweet-text",
                De = "notification-show-more-text",
                Pe = "notification-additional-context",
                je = s.default.create((e) => ({ root: { cursor: "pointer", paddingVertical: e.componentDimensions.gutterVertical }, horizontalPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, reducedHorizontalPadding: { paddingHorizontal: "6px" }, compactContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, edgeToEdgeSocialContext: { paddingStart: "10px" }, isTweet: { padding: 0 }, unread: { backgroundColor: e.colors.unreadCellBackground }, itemIcon: { alignItems: "flex-end" }, edgeToEdgeItemIcon: { alignItems: "center" }, itemContent: { flexGrow: 1 }, rightControl: { alignItems: "end", display: "flex", gap: e.spaces.space4 }, timestamp: { marginStart: e.spaces.space20 }, icon: { height: "2em" }, colorDeepGray: { color: e.colors.gray700 }, colorRed: { color: e.colors.magenta500 }, socialContext: { marginBottom: e.spaces.space4 }, twitterIcon: { color: e.colors.brandColor }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorPlum: { color: e.colors.plum500 }, colorPurple: { color: e.colors.purple500 }, userAvatarList: { marginBottom: e.spaces.space12, paddingEnd: e.spaces.space20 }, timelineRowText: { justifyContent: "center" }, avatarDecoration: { width: "1.2em", height: "1.2em", position: "absolute", top: "1em", end: 0 } })),
                Oe = Object.freeze([je.colorPurple, je.icon]),
                Me = Object.freeze([je.colorBlue, je.icon]),
                Be = Object.freeze([je.colorRed, je.icon]),
                He = Object.freeze([je.colorDeepGray, je.icon]),
                Ue = Object.freeze([je.colorGreen, je.icon]),
                Le = Object.freeze([je.colorOrange, je.icon]),
                Ve = Object.freeze([je.colorPlum, je.icon]),
                Re = Object.freeze([je.colorPrimary, je.icon]),
                Ne = Object.freeze([je.twitterIcon, je.icon]),
                Fe = i.createElement(f.default, { style: Oe }),
                Ge = i.createElement(p.default, { style: Me }),
                Qe = i.createElement(y.default, { style: Me }),
                We = i.createElement(_.default, { style: Me }),
                Ye = i.createElement(E.default, { style: Me }),
                $e = i.createElement(h.default, { style: Be }),
                qe = i.createElement(b.default, { style: Be }),
                Je = i.createElement(x.default, { style: Be }),
                Ke = i.createElement(C.default, { style: He }),
                Xe = i.createElement(w.default, { style: Me }),
                et = i.createElement(v.default, { style: Be }),
                tt = i.createElement(Z.default, { style: He }),
                nt = i.createElement(k.default, { style: He }),
                lt = i.createElement(z.default, { style: je.icon }),
                ot = i.createElement(I.default, { style: je.icon }),
                at = i.createElement(A.default, { style: Me }),
                rt = i.createElement(S.default, { style: Me }),
                it = i.createElement(T.default, { style: He }),
                ct = i.createElement(D.default, { style: Me }),
                st = i.createElement(P.default, { style: Ue }),
                dt = i.createElement(j.default, { style: je.icon }),
                mt = i.createElement(O.default, { style: je.icon }),
                ut = i.createElement(ye.Z, { style: je.icon }),
                gt = i.createElement(M.default, { style: Re }),
                ft = i.createElement(B.default, { style: Ne }),
                pt = i.createElement(H.default, { style: Le }),
                yt = i.createElement(U.default, { style: Le }),
                _t = i.createElement(L.default, { style: je.icon }),
                Et = i.createElement(V.default, { style: je.icon }),
                ht = i.createElement(R.default, { style: Ve }),
                bt = i.createElement(N.default, { style: Be }),
                xt = i.createElement(F.default, { style: Me }),
                Ct = i.createElement(G.default, { style: Me }),
                wt = i.createElement(Q.default, { style: Ue }),
                vt = i.createElement(W.default, { style: je.icon }),
                Zt = { alert_bell_icon: Ge, bar_chart_icon: Fe, bell_icon: Ge, birdwatch_icon: Qe, bird_icon: ft, briefcase_icon: We, coin_icon: ot, communities_icon: Ye, conversation_bubble_icon: pt, heart_icon: qe, heart_plus_icon: Je, histogram_icon: it, lightning_bolt_icon: Xe, list_icon: Ke, live_icon: et, lock_icon: tt, magic_rec_icon: ft, milestone_icon: lt, news_icon: nt, person_icon: at, play_icon: rt, promoted_icon: ct, radar_stroke_icon: vt, reply_icon: pt, report_icon: $e, recommendation_icon: dt, retweet_icon: st, safety_icon: mt, security_alert_icon: _t, security_unknown_icon: Et, shield_icon: yt, spaces_icon: ut, stacked_cards_icon: ft, super_follows_icon: ht, super_follows_error_icon: bt, topic_icon: gt, trending_icon: ft, verified_general_icon: xt, verified_notable_icon: Ct, money_icon: wt },
                kt = (e) => {
                    const { featureSwitches: t, history: n } = i.useContext(_e.rC),
                        [l, o] = i.useState(!1),
                        {
                            analytics: a,
                            entry: { content: r },
                            feedbackItems: s,
                            isUnread: f,
                            notification: p,
                        } = e,
                        y = t.isTrue("media_edge_to_edge_content_enabled");
                    i.useEffect(() => {
                        a.scribeAction("impression");
                    }, [a]);
                    const _ = i.useCallback(() => {
                            a.scribeAction("navigate");
                        }, [a]),
                        E = i.useCallback(() => {
                            o(!0);
                        }, [o]),
                        h = i.useCallback(() => {
                            o(!1);
                        }, [o]),
                        { icon: b, message: x, template: C, timestampMs: w } = p,
                        v = r.url && (0, X.s9)(r.url),
                        Z = r.socialContext && r.socialContext.generalContext && r.socialContext.generalContext,
                        k = (0, $.HD)(n),
                        z = i.useMemo(() => C.aggregateUserActionsV1.fromUsers.map((e) => e.user).filter(Boolean), [C.aggregateUserActionsV1.fromUsers]),
                        I = b && b.id && Zt[b.id] ? Zt[b.id] : ft,
                        A = v && ("string" == typeof v ? { pathname: v } : v),
                        S = i.useMemo(() => [je.root, y ? je.reducedHorizontalPadding : je.horizontalPadding, f && je.unread, k && je.compactContainer], [k, f, y]),
                        T = i.useMemo(() => [je.itemContent, je.timelineRowText], []),
                        D = k ? "medium" : void 0;
                    return i.createElement(d.$6, null, (e) => i.createElement(m.Z, { "aria-labelledby": l ? [Se, Te, De, Pe].join(" ") : void 0, link: A ? e.withAnchorless(A) : void 0, onBlur: h, onClick: _, onFocus: E, role: "article", style: S, testID: Ae }, Z ? i.createElement(he.Z, { avatarSize: D, contextType: Z.contextType, link: Z.landingUrl ? (0, X.s9)(Z.landingUrl) : void 0, style: je.socialContext, text: Z.text }) : null, i.createElement(u.Z, { avatarCell: I, avatarCellStyle: [je.itemIcon, y && je.edgeToEdgeItemIcon], avatarSize: D, cellStyle: T, rightControl: i.createElement(c.Z, { style: je.rightControl }, s?.length ? i.createElement(be.Z, { feedbackItems: s }) : null, i.createElement(g.Z, { style: je.timestamp, timestamp: w })), style: y && je.edgeToEdgeSocialContext }, z.length ? i.createElement(c.Z, { style: je.userAvatarList }, i.createElement(K, { users: z })) : null, i.createElement(Ee.Z, { alignment: x.alignment, entities: x.entities, id: l ? Se : void 0, rtl: x.rtl, text: x.text }), i.createElement(ze, { focused: l, template: C }), i.createElement(Ce, { focused: l, link: v, template: C }))));
                },
                zt = (e) => {
                    const t = (0, ee.z)(),
                        n = (0, te.v9)((t) => pe.selectNotification(t, e.entry.content.id), Y.Z),
                        l = (0, te.v9)((t) => e.module.selectIsUnread(t, e.entry.entryId));
                    return n ? i.createElement(kt, (0, r.Z)({}, e, { analytics: t, isUnread: l, notification: n })) : null;
                },
                It = a.iH({ isFocusable: (0, l.Z)(!0), component: zt, shouldDisplayBorder: (0, l.Z)(!0), getScribeDataItem: ({ itemMetadata: { clientEventInfo: e } }) => o.Z.getAllSurfaceDetails(e) }).getHandler();
        },
        927389: (e, t, n) => {
            n.d(t, { Z: () => d });
            var l = n(202784),
                o = n(247056),
                a = n(392237);
            const r = (0, n(523561).Z)({ loader: () => n.e("loader.FeedbackSheet").then(n.bind(n, 774426)) });
            var i = n(725516),
                c = n(851623);
            const s = a.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, i.Z)((e) => {
                    const { analytics: t, feedbackItems: n, isDisplayedOnMedia: a } = e,
                        i = l.useCallback((e) => (n ? l.createElement(r, { actionItems: n, onClose: e }) : null), [n]),
                        d = l.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return n && n.length > 0 ? l.createElement(o.Z, { onClick: d, renderActionMenu: i, style: s.curationControl, testID: c.Z.caret, withDarkBackground: a }) : null;
                });
        },
        76388: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var l = n(202784),
                o = n(890601),
                a = n(783427),
                r = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NotificationHandler.f660a5ca.js.map
