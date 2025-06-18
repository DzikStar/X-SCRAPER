"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NotificationHandler", "icons/IconFollowArrowLeft-js", "icons/IconHeartPlus-js", "icons/IconSparkle-js"],
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
                h = n(720930),
                y = n(159340),
                v = n(597237),
                E = n(761744),
                _ = n(517890),
                b = n(544367),
                w = n(453333),
                x = n(213279),
                Z = n(121791),
                C = n(902673),
                z = n(772722),
                k = n(856151),
                I = n(25001),
                D = n(466445),
                A = n(259055),
                M = n(283379),
                P = n(720600),
                S = n(933288),
                H = n(672738),
                T = n(452693),
                j = n(520913),
                B = n(98440),
                O = n(134878),
                R = n(503089),
                V = n(278065),
                L = n(491831),
                U = n(211971),
                F = n(792618),
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
                he = ce.Z.register(pe);
            var ye = n(233040),
                ve = n(443781),
                Ee = n(686689),
                _e = n(988245),
                be = n(927389),
                we = n(731708);
            const xe = ({ focused: e, link: t, onClick: n, template: o }) => {
                    const {
                        aggregateUserActionsV1: { showAllLinkText: l },
                    } = o;
                    return l && t ? r.createElement(we.ZP, { id: e ? "notification-show-more-text" : void 0, link: t, onClick: n, style: Ze.showMore }, l) : null;
                },
                Ze = s.default.create((e) => ({ showMore: { marginTop: e.spaces.space12 } }));
            var Ce = n(530338),
                ze = n(451051);
            const ke = ({ focused: e, text: t }) => r.createElement(Ee.Z, { alignment: t.alignment, color: "gray700", entities: t.entities, id: e ? "notification-additional-context" : void 0, rtl: t.rtl, text: t.text }),
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
                                  return o ? r.createElement(Ce.Z, { articleEntity: o, hasSensitiveContent: n.possibly_sensitive, mediaVisibilityResults: n.mediaVisibilityResults, style: De.article }) : r.createElement(ze.Z, { color: "gray700", displayTextRange: n.display_text_range, entities: n.entities, id: e ? "notification-tweet-text" : void 0, lang: n.lang, text: n.text, withMediaLinks: !0, withQuoteLinks: !0 });
                              })(i),
                          )
                        : o && o.contextText
                          ? r.createElement(c.Z, { style: De.target }, r.createElement(ke, { focused: e, text: o.contextText }))
                          : null;
                },
                De = s.default.create((e) => ({ target: { marginTop: e.spaces.space12 }, article: { marginTop: 0 } })),
                Ae = "notification",
                Me = "notification-message-text",
                Pe = "notification-tweet-text",
                Se = "notification-show-more-text",
                He = "notification-additional-context",
                Te = s.default.create((e) => ({ root: { cursor: "pointer", paddingVertical: e.componentDimensions.gutterVertical }, rootRedesign: { paddingHorizontal: e.spaces.space16 }, horizontalPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, reducedHorizontalPadding: { paddingHorizontal: "6px" }, compactContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, edgeToEdgeSocialContext: { paddingStart: "10px" }, isTweet: { padding: 0 }, unread: { backgroundColor: e.colors.unreadCellBackground }, itemIcon: { alignItems: "flex-end" }, itemIconRedesign: { alignItems: "flex-start" }, edgeToEdgeItemIcon: { alignItems: "center" }, itemContent: { flexGrow: 1 }, curationControl: { position: "absolute", top: e.componentDimensions.gutterVertical, end: e.componentDimensions.gutterHorizontal }, curationControlRedesign: { end: 0 }, curationPadding: { paddingEnd: e.spaces.space20 }, icon: { height: "2em" }, colorDeepGray: { color: e.colors.gray700 }, colorRed: { color: e.colors.magenta500 }, socialContext: { marginBottom: e.spaces.space4 }, twitterIcon: { color: e.colors.brandColor }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorPlum: { color: e.colors.plum500 }, colorPurple: { color: e.colors.purple500 }, userAvatarList: { marginBottom: e.spaces.space12, paddingEnd: e.spaces.space20 }, timelineRowText: { justifyContent: "center" }, avatarDecoration: { width: "1.2em", height: "1.2em", position: "absolute", top: "1em", end: 0 } })),
                je = Object.freeze([Te.colorPurple, Te.icon]),
                Be = Object.freeze([Te.colorBlue, Te.icon]),
                Oe = Object.freeze([Te.colorRed, Te.icon]),
                Re = Object.freeze([Te.colorDeepGray, Te.icon]),
                Ve = Object.freeze([Te.colorGreen, Te.icon]),
                Le = Object.freeze([Te.colorOrange, Te.icon]),
                Ue = Object.freeze([Te.colorPlum, Te.icon]),
                Fe = Object.freeze([Te.colorPrimary, Te.icon]),
                Ne = Object.freeze([Te.twitterIcon, Te.icon]),
                Ge = r.createElement(g.default, { style: je }),
                Qe = r.createElement(f.default, { style: Be }),
                We = r.createElement(p.default, { style: Be }),
                Ye = r.createElement(h.default, { style: Be }),
                $e = r.createElement(y.default, { style: Be }),
                qe = r.createElement(v.default, { style: Oe }),
                Je = r.createElement(E.default, { style: Oe }),
                Ke = r.createElement(_.default, { style: Oe }),
                Xe = r.createElement(b.default, { style: Re }),
                et = r.createElement(w.default, { style: Be }),
                tt = r.createElement(x.default, { style: Oe }),
                nt = r.createElement(Z.default, { style: Re }),
                ot = r.createElement(C.default, { style: Re }),
                lt = r.createElement(z.default, { style: Te.icon }),
                at = r.createElement(k.default, { style: Te.icon }),
                it = r.createElement(I.default, { style: Be }),
                rt = r.createElement(D.default, { style: Be }),
                ct = r.createElement(A.default, { style: Re }),
                st = r.createElement(M.default, { style: Be }),
                dt = r.createElement(P.default, { style: Ve }),
                mt = r.createElement(S.default, { style: Te.icon }),
                ut = r.createElement(H.default, { style: Te.icon }),
                gt = r.createElement(ye.Z, { style: Te.icon }),
                ft = r.createElement(T.default, { style: Fe }),
                pt = r.createElement(j.default, { style: Ne }),
                ht = r.createElement(B.default, { style: Le }),
                yt = r.createElement(O.default, { style: Le }),
                vt = r.createElement(R.default, { style: Te.icon }),
                Et = r.createElement(V.default, { style: Te.icon }),
                _t = r.createElement(L.default, { style: Ue }),
                bt = r.createElement(U.default, { style: Oe }),
                wt = r.createElement(F.default, { style: Be }),
                xt = r.createElement(N.default, { style: Be }),
                Zt = r.createElement(G.default, { style: Ve }),
                Ct = r.createElement(Q.default, { style: Te.icon }),
                zt = { alert_bell_icon: Qe, bar_chart_icon: Ge, bell_icon: Qe, birdwatch_icon: We, bird_icon: pt, briefcase_icon: Ye, coin_icon: at, communities_icon: $e, conversation_bubble_icon: ht, heart_icon: Je, heart_plus_icon: Ke, histogram_icon: ct, lightning_bolt_icon: et, list_icon: Xe, live_icon: tt, lock_icon: nt, magic_rec_icon: pt, milestone_icon: lt, news_icon: ot, person_icon: it, play_icon: rt, promoted_icon: st, radar_stroke_icon: Ct, reply_icon: ht, report_icon: qe, recommendation_icon: mt, retweet_icon: dt, safety_icon: ut, security_alert_icon: vt, security_unknown_icon: Et, shield_icon: yt, spaces_icon: gt, stacked_cards_icon: pt, super_follows_icon: _t, super_follows_error_icon: bt, topic_icon: ft, trending_icon: pt, verified_general_icon: wt, verified_notable_icon: xt, money_icon: Zt },
                kt = (e) => {
                    const { featureSwitches: t, history: n } = r.useContext(ve.rC),
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
                    const h = r.useCallback(() => {
                            a.scribeAction("navigate");
                        }, [a]),
                        y = r.useCallback(() => {
                            l(!0);
                        }, [l]),
                        v = r.useCallback(() => {
                            l(!1);
                        }, [l]),
                        { icon: E, message: _, template: b } = f,
                        w = i.url && (0, X.s9)(i.url),
                        x = i.socialContext && i.socialContext.generalContext && i.socialContext.generalContext,
                        Z = s ? r.createElement(be.Z, { feedbackItems: s }) : null,
                        C = (0, W.HD)(n),
                        z = r.useMemo(() => b.aggregateUserActionsV1.fromUsers.map((e) => e.user).filter(Boolean), [b.aggregateUserActionsV1.fromUsers]),
                        k = Z && !z.length && !x,
                        I = E && E.id && zt[E.id] ? zt[E.id] : pt,
                        D = w && ("string" == typeof w ? { pathname: w } : w),
                        A = (0, K.hC)("rweb_sourcemap_migration"),
                        M = (0, J.z)(),
                        P = r.useMemo(() => [Te.root, p ? Te.reducedHorizontalPadding : Te.horizontalPadding, M && Te.rootRedesign, g && Te.unread, C && Te.compactContainer], [p, M, g, C]),
                        S = r.useMemo(() => [Te.itemContent, Te.timelineRowText, k && Te.curationPadding], [k]),
                        H = C ? "medium" : void 0;
                    return r.createElement(d.$6, null, (e) => r.createElement(m.Z, { "aria-labelledby": o ? [Me, Pe, Se, He].join(" ") : void 0, link: D ? e.withAnchorless(D) : void 0, onBlur: v, onClick: h, onFocus: y, role: "article", style: P, testID: Ae }, x ? r.createElement(_e.Z, { avatarSize: H, contextType: x.contextType, link: x.landingUrl ? (0, X.s9)(x.landingUrl) : void 0, style: Te.socialContext, text: x.text }) : null, r.createElement(u.Z, { avatarCell: I, avatarCellStyle: [Te.itemIcon, p && Te.edgeToEdgeItemIcon, A && Te.itemIconRedesign], avatarSize: H, cellStyle: S, style: p && Te.edgeToEdgeSocialContext }, z.length ? r.createElement(c.Z, { style: Te.userAvatarList }, r.createElement(q, { users: z })) : null, r.createElement(Ee.Z, { alignment: _.alignment, entities: _.entities, id: o ? Me : void 0, rtl: _.rtl, text: _.text }), r.createElement(Ie, { focused: o, template: b }), r.createElement(xe, { focused: o, link: w, template: b })), Z ? r.createElement(c.Z, { style: [Te.curationControl, M && Te.curationControlRedesign] }, Z) : null));
                },
                It = (e) => {
                    const t = ((n = e.entry.content.id), (0, te.v9)((e) => he.selectNotification(e, n), ne.Z));
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
        246492: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
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
        264171: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        262009: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                l = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NotificationHandler.1bce608a.js.map
