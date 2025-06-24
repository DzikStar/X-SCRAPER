"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NotificationHandler", "icons/IconNotificationsSecurityAlert-js"],
    {
        814211: (e, t, l) => {
            l.r(t), l.d(t, { default: () => It });
            var n = l(459643),
                o = l(942893),
                a = l(351322),
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
                _ = l(720930),
                E = l(159340),
                h = l(597237),
                b = l(761744),
                x = l(517890),
                v = l(544367),
                w = l(453333),
                C = l(213279),
                Z = l(121791),
                k = l(902673),
                z = l(772722),
                I = l(856151),
                A = l(25001),
                S = l(466445),
                D = l(259055),
                T = l(283379),
                j = l(720600),
                M = l(933288),
                P = l(672738),
                O = l(452693),
                B = l(520913),
                H = l(98440),
                U = l(134878),
                F = l(503089),
                L = l(278065),
                V = l(491831),
                N = l(211971),
                R = l(792618),
                G = l(144251),
                Q = l(80361),
                W = l(520489),
                Y = l(908478),
                $ = l(791632),
                q = l(823161);
            const J = s.default.create((e) => ({ root: { flexWrap: "wrap", flexDirection: "row", overflow: "hidden", height: e.spaces.space32 }, rootCenter: { justifyContent: "center" }, item: { marginHorizontal: e.spaces.space4 }, itemLeftFirst: { marginStart: 0 } })),
                K = ({ align: e = "left", maxItems: t = 10, style: l, userDecorations: n, ...o }) => {
                    const a = r.useMemo(() => o.users.slice(0, t).filter(Boolean), [o.users, t]);
                    return r.createElement(
                        c.Z,
                        { role: "list", style: [J.root, "center" === e && J.rootCenter, l] },
                        a.map((t, l) => r.createElement(q.default, { "aria-hidden": !0, decoration: n && n[l], key: l, screenName: t.screen_name, size: "large", style: [J.item, 0 === l && "left" === e && J.itemLeftFirst], uri: t.profile_image_url_https, withHoverCard: !0, withLink: !0 })),
                    );
                };
            var X = l(946409),
                ee = l(725516),
                te = l(125363),
                le = l(506899),
                ne = l(24949),
                oe = l(128737),
                ae = l(276001),
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
                        ae.Z.selectAll,
                        se.Z.selectAll,
                        (e, t) => t,
                        (e, t, l, n, o, a, i) => (0, le.cY)(e[i], oe.Z, { cards: o, tweets: t, users: l, lists: n, publishedArticles: a }),
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
                _e = l(443781),
                Ee = l(686689),
                he = l(988245),
                be = l(927389),
                xe = l(731708);
            const ve = ({ focused: e, link: t, onClick: l, template: n }) => {
                    const {
                        aggregateUserActionsV1: { showAllLinkText: o },
                    } = n;
                    return o && t ? r.createElement(xe.ZP, { id: e ? "notification-show-more-text" : void 0, link: t, onClick: l, style: we.showMore }, o) : null;
                },
                we = s.default.create((e) => ({ showMore: { marginTop: e.spaces.space12 } }));
            var Ce = l(530338),
                Ze = l(451051);
            const ke = ({ focused: e, text: t }) => r.createElement(Ee.Z, { alignment: t.alignment, color: "gray700", entities: t.entities, id: e ? "notification-additional-context" : void 0, rtl: t.rtl, text: t.text }),
                ze = ({ focused: e, template: t }) => {
                    const { aggregateUserActionsV1: l } = t,
                        { additionalContext: n, targetObjects: o } = l,
                        a = o.filter((e) => e.tweet),
                        i = a.length ? a[0].tweet : null;
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
                Se = "notification-message-text",
                De = "notification-tweet-text",
                Te = "notification-show-more-text",
                je = "notification-additional-context",
                Me = s.default.create((e) => ({ root: { cursor: "pointer", paddingVertical: e.componentDimensions.gutterVertical }, horizontalPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, reducedHorizontalPadding: { paddingHorizontal: "6px" }, compactContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, edgeToEdgeSocialContext: { paddingStart: "10px" }, isTweet: { padding: 0 }, unread: { backgroundColor: e.colors.unreadCellBackground }, itemIcon: { alignItems: "flex-end" }, edgeToEdgeItemIcon: { alignItems: "center" }, itemContent: { flexGrow: 1 }, rightControl: { alignItems: "end", display: "flex", gap: e.spaces.space4 }, timestamp: { marginStart: e.spaces.space20 }, icon: { height: "2em" }, colorDeepGray: { color: e.colors.gray700 }, colorRed: { color: e.colors.magenta500 }, socialContext: { marginBottom: e.spaces.space4 }, twitterIcon: { color: e.colors.brandColor }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorPlum: { color: e.colors.plum500 }, colorPurple: { color: e.colors.purple500 }, userAvatarList: { marginBottom: e.spaces.space12, paddingEnd: e.spaces.space20 }, timelineRowText: { justifyContent: "center" }, avatarDecoration: { width: "1.2em", height: "1.2em", position: "absolute", top: "1em", end: 0 } })),
                Pe = Object.freeze([Me.colorPurple, Me.icon]),
                Oe = Object.freeze([Me.colorBlue, Me.icon]),
                Be = Object.freeze([Me.colorRed, Me.icon]),
                He = Object.freeze([Me.colorDeepGray, Me.icon]),
                Ue = Object.freeze([Me.colorGreen, Me.icon]),
                Fe = Object.freeze([Me.colorOrange, Me.icon]),
                Le = Object.freeze([Me.colorPlum, Me.icon]),
                Ve = Object.freeze([Me.colorPrimary, Me.icon]),
                Ne = Object.freeze([Me.twitterIcon, Me.icon]),
                Re = r.createElement(f.default, { style: Pe }),
                Ge = r.createElement(p.default, { style: Oe }),
                Qe = r.createElement(y.default, { style: Oe }),
                We = r.createElement(_.default, { style: Oe }),
                Ye = r.createElement(E.default, { style: Oe }),
                $e = r.createElement(h.default, { style: Be }),
                qe = r.createElement(b.default, { style: Be }),
                Je = r.createElement(x.default, { style: Be }),
                Ke = r.createElement(v.default, { style: He }),
                Xe = r.createElement(w.default, { style: Oe }),
                et = r.createElement(C.default, { style: Be }),
                tt = r.createElement(Z.default, { style: He }),
                lt = r.createElement(k.default, { style: He }),
                nt = r.createElement(z.default, { style: Me.icon }),
                ot = r.createElement(I.default, { style: Me.icon }),
                at = r.createElement(A.default, { style: Oe }),
                it = r.createElement(S.default, { style: Oe }),
                rt = r.createElement(D.default, { style: He }),
                ct = r.createElement(T.default, { style: Oe }),
                st = r.createElement(j.default, { style: Ue }),
                dt = r.createElement(M.default, { style: Me.icon }),
                mt = r.createElement(P.default, { style: Me.icon }),
                ut = r.createElement(ye.Z, { style: Me.icon }),
                gt = r.createElement(O.default, { style: Ve }),
                ft = r.createElement(B.default, { style: Ne }),
                pt = r.createElement(H.default, { style: Fe }),
                yt = r.createElement(U.default, { style: Fe }),
                _t = r.createElement(F.default, { style: Me.icon }),
                Et = r.createElement(L.default, { style: Me.icon }),
                ht = r.createElement(V.default, { style: Le }),
                bt = r.createElement(N.default, { style: Be }),
                xt = r.createElement(R.default, { style: Oe }),
                vt = r.createElement(G.default, { style: Oe }),
                wt = r.createElement(Q.default, { style: Ue }),
                Ct = r.createElement(W.default, { style: Me.icon }),
                Zt = { alert_bell_icon: Ge, bar_chart_icon: Re, bell_icon: Ge, birdwatch_icon: Qe, bird_icon: ft, briefcase_icon: We, coin_icon: ot, communities_icon: Ye, conversation_bubble_icon: pt, heart_icon: qe, heart_plus_icon: Je, histogram_icon: rt, lightning_bolt_icon: Xe, list_icon: Ke, live_icon: et, lock_icon: tt, magic_rec_icon: ft, milestone_icon: nt, news_icon: lt, person_icon: at, play_icon: it, promoted_icon: ct, radar_stroke_icon: Ct, reply_icon: pt, report_icon: $e, recommendation_icon: dt, retweet_icon: st, safety_icon: mt, security_alert_icon: _t, security_unknown_icon: Et, shield_icon: yt, spaces_icon: ut, stacked_cards_icon: ft, super_follows_icon: ht, super_follows_error_icon: bt, topic_icon: gt, trending_icon: ft, verified_general_icon: xt, verified_notable_icon: vt, money_icon: wt },
                kt = (e) => {
                    const { featureSwitches: t, history: l } = r.useContext(_e.rC),
                        [n, o] = r.useState(!1),
                        {
                            analytics: a,
                            entry: { content: i },
                            feedbackItems: s,
                            isUnread: f,
                            notification: p,
                        } = e,
                        y = t.isTrue("media_edge_to_edge_content_enabled");
                    r.useEffect(() => {
                        a.scribeAction("impression");
                    }, [a]);
                    const _ = r.useCallback(() => {
                            a.scribeAction("navigate");
                        }, [a]),
                        E = r.useCallback(() => {
                            o(!0);
                        }, [o]),
                        h = r.useCallback(() => {
                            o(!1);
                        }, [o]),
                        { icon: b, message: x, template: v, timestampMs: w } = p,
                        C = i.url && (0, X.s9)(i.url),
                        Z = i.socialContext && i.socialContext.generalContext && i.socialContext.generalContext,
                        k = (0, $.HD)(l),
                        z = r.useMemo(() => v.aggregateUserActionsV1.fromUsers.map((e) => e.user).filter(Boolean), [v.aggregateUserActionsV1.fromUsers]),
                        I = b && b.id && Zt[b.id] ? Zt[b.id] : ft,
                        A = C && ("string" == typeof C ? { pathname: C } : C),
                        S = r.useMemo(() => [Me.root, y ? Me.reducedHorizontalPadding : Me.horizontalPadding, f && Me.unread, k && Me.compactContainer], [k, f, y]),
                        D = r.useMemo(() => [Me.itemContent, Me.timelineRowText], []),
                        T = k ? "medium" : void 0;
                    return r.createElement(d.$6, null, (e) => r.createElement(m.Z, { "aria-labelledby": n ? [Se, De, Te, je].join(" ") : void 0, link: A ? e.withAnchorless(A) : void 0, onBlur: h, onClick: _, onFocus: E, role: "article", style: S, testID: Ae }, Z ? r.createElement(he.Z, { avatarSize: T, contextType: Z.contextType, link: Z.landingUrl ? (0, X.s9)(Z.landingUrl) : void 0, style: Me.socialContext, text: Z.text }) : null, r.createElement(u.Z, { avatarCell: I, avatarCellStyle: [Me.itemIcon, y && Me.edgeToEdgeItemIcon], avatarSize: T, cellStyle: D, rightControl: r.createElement(c.Z, { style: Me.rightControl }, s?.length ? r.createElement(be.Z, { feedbackItems: s }) : null, r.createElement(g.Z, { style: Me.timestamp, timestamp: w })), style: y && Me.edgeToEdgeSocialContext }, z.length ? r.createElement(c.Z, { style: Me.userAvatarList }, r.createElement(K, { users: z })) : null, r.createElement(Ee.Z, { alignment: x.alignment, entities: x.entities, id: n ? Se : void 0, rtl: x.rtl, text: x.text }), r.createElement(ze, { focused: n, template: v }), r.createElement(ve, { focused: n, link: C, template: v }))));
                },
                zt = (e) => {
                    const t = (0, ee.z)(),
                        l = (0, te.v9)((t) => pe.selectNotification(t, e.entry.content.id), Y.Z),
                        n = (0, te.v9)((t) => e.module.selectIsUnread(t, e.entry.entryId));
                    return l ? r.createElement(kt, (0, i.Z)({}, e, { analytics: t, isUnread: n, notification: l })) : null;
                },
                It = a.iH({ isFocusable: (0, n.Z)(!0), component: zt, shouldDisplayBorder: (0, n.Z)(!0), getScribeDataItem: ({ itemMetadata: { clientEventInfo: e } }) => o.Z.getAllSurfaceDetails(e) }).getHandler();
        },
        927389: (e, t, l) => {
            l.d(t, { Z: () => d });
            var n = l(202784),
                o = l(247056),
                a = l(392237);
            const i = (0, l(523561).Z)({ loader: () => l.e("loader.FeedbackSheet").then(l.bind(l, 774426)) });
            var r = l(725516),
                c = l(851623);
            const s = a.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, r.Z)((e) => {
                    const { analytics: t, feedbackItems: l, isDisplayedOnMedia: a } = e,
                        r = n.useCallback((e) => (l ? n.createElement(i, { actionItems: l, onClose: e }) : null), [l]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return l && l.length > 0 ? n.createElement(o.Z, { onClick: d, renderActionMenu: r, style: s.curationControl, testID: c.Z.caret, withDarkBackground: a }) : null;
                });
        },
        503089: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var n = l(202784),
                o = l(890601),
                a = l(783427),
                i = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z", fill: "#F4212E" }), n.createElement("path", { d: "M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z", fill: "#FFF" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        98440: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var n = l(202784),
                o = l(890601),
                a = l(783427),
                i = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NotificationHandler.7112ea8a.js.map
