"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NotificationHandler", "icons/IconHeartPlus-js", "icons/IconNotificationsMilestone-js"],
    {
        41903: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Dt });
            var l = n(459643),
                o = n(942893),
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
                E = n(159340),
                h = n(597237),
                _ = n(761744),
                v = n(517890),
                b = n(544367),
                x = n(453333),
                w = n(213279),
                C = n(121791),
                Z = n(902673),
                k = n(772722),
                z = n(856151),
                I = n(25001),
                D = n(466445),
                A = n(259055),
                M = n(283379),
                F = n(720600),
                P = n(933288),
                S = n(672738),
                T = n(452693),
                H = n(520913),
                j = n(98440),
                B = n(134878),
                O = n(503089),
                R = n(278065),
                U = n(491831),
                V = n(211971),
                L = n(792618),
                N = n(144251),
                G = n(80361),
                Q = n(520489),
                W = n(791632),
                Y = n(823161);
            const $ = s.default.create((e) => ({ root: { flexWrap: "wrap", flexDirection: "row", overflow: "hidden", height: e.spaces.space32 }, rootCenter: { justifyContent: "center" }, item: { marginHorizontal: e.spaces.space4 }, itemLeftFirst: { marginStart: 0 } })),
                q = ({ align: e = "left", maxItems: t = 10, style: n, userDecorations: l, ...o }) => {
                    const a = r.useMemo(() => o.users.slice(0, t).filter(Boolean), [o.users, t]);
                    return r.createElement(
                        c.Z,
                        { role: "list", style: [$.root, "center" === e && $.rootCenter, n] },
                        a.map((t, n) => r.createElement(Y.default, { "aria-hidden": !0, decoration: l && l[n], key: n, screenName: t.screen_name, size: "large", style: [$.item, 0 === n && "left" === e && $.itemLeftFirst], uri: t.profile_image_url_https, withHoverCard: !0, withLink: !0 })),
                    );
                };
            var J = n(703738),
                K = n(952793),
                X = n(946409),
                ee = n(725516),
                te = n(125363),
                ne = n(908478),
                le = n(506899),
                oe = n(24949),
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
                    selectNotification: (0, oe.P1)(
                        ge.selectAll,
                        me.Z.selectAll,
                        ue.ZP.selectAll,
                        se.Z.selectAll,
                        ie.Z.selectAll,
                        de.Z.selectAll,
                        (e, t) => t,
                        (e, t, n, l, o, a, i) => (0, le.cY)(e[i], ae.Z, { cards: o, tweets: t, users: n, lists: l, publishedArticles: a }),
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
            var Ee = n(233040),
                he = n(443781),
                _e = n(686689),
                ve = n(988245),
                be = n(927389),
                xe = n(731708);
            const we = ({ focused: e, link: t, onClick: n, template: l }) => {
                    const {
                        aggregateUserActionsV1: { showAllLinkText: o },
                    } = l;
                    return o && t ? r.createElement(xe.ZP, { id: e ? "notification-show-more-text" : void 0, link: t, onClick: n, style: Ce.showMore }, o) : null;
                },
                Ce = s.default.create((e) => ({ showMore: { marginTop: e.spaces.space12 } }));
            var Ze = n(530338),
                ke = n(451051);
            const ze = ({ focused: e, text: t }) => r.createElement(_e.Z, { alignment: t.alignment, color: "gray700", entities: t.entities, id: e ? "notification-additional-context" : void 0, rtl: t.rtl, text: t.text }),
                Ie = ({ focused: e, template: t }) => {
                    const { aggregateUserActionsV1: n } = t,
                        { additionalContext: l, targetObjects: o } = n,
                        a = o.filter((e) => e.tweet),
                        i = a.length ? a[0].tweet : null;
                    return i
                        ? r.createElement(
                              c.Z,
                              { style: De.target },
                              ((t) => {
                                  const n = t.retweeted_status || t,
                                      l = n.article;
                                  return l ? r.createElement(Ze.Z, { articleEntity: l, hasSensitiveContent: n.possibly_sensitive, mediaVisibilityResults: n.mediaVisibilityResults, style: De.article }) : r.createElement(ke.Z, { color: "gray700", displayTextRange: n.display_text_range, entities: n.entities, id: e ? "notification-tweet-text" : void 0, lang: n.lang, text: n.text, withMediaLinks: !0, withQuoteLinks: !0 });
                              })(i),
                          )
                        : l && l.contextText
                          ? r.createElement(c.Z, { style: De.target }, r.createElement(ze, { focused: e, text: l.contextText }))
                          : null;
                },
                De = s.default.create((e) => ({ target: { marginTop: e.spaces.space12 }, article: { marginTop: 0 } })),
                Ae = "notification",
                Me = "notification-message-text",
                Fe = "notification-tweet-text",
                Pe = "notification-show-more-text",
                Se = "notification-additional-context",
                Te = s.default.create((e) => ({ root: { cursor: "pointer", paddingVertical: e.componentDimensions.gutterVertical }, rootRedesign: { paddingHorizontal: e.spaces.space16 }, horizontalPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, reducedHorizontalPadding: { paddingHorizontal: "6px" }, compactContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, edgeToEdgeSocialContext: { paddingStart: "10px" }, isTweet: { padding: 0 }, unread: { backgroundColor: e.colors.unreadCellBackground }, itemIcon: { alignItems: "flex-end" }, itemIconRedesign: { alignItems: "flex-start" }, edgeToEdgeItemIcon: { alignItems: "center" }, itemContent: { flexGrow: 1 }, curationControl: { position: "absolute", top: e.componentDimensions.gutterVertical, end: e.componentDimensions.gutterHorizontal }, curationControlRedesign: { end: 0 }, curationPadding: { paddingEnd: e.spaces.space20 }, icon: { height: "2em" }, colorDeepGray: { color: e.colors.gray700 }, colorRed: { color: e.colors.magenta500 }, socialContext: { marginBottom: e.spaces.space4 }, twitterIcon: { color: e.colors.brandColor }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorPlum: { color: e.colors.plum500 }, colorPurple: { color: e.colors.purple500 }, userAvatarList: { marginBottom: e.spaces.space12, paddingEnd: e.spaces.space20 }, timelineRowText: { justifyContent: "center" }, avatarDecoration: { width: "1.2em", height: "1.2em", position: "absolute", top: "1em", end: 0 } })),
                He = Object.freeze([Te.colorPurple, Te.icon]),
                je = Object.freeze([Te.colorBlue, Te.icon]),
                Be = Object.freeze([Te.colorRed, Te.icon]),
                Oe = Object.freeze([Te.colorDeepGray, Te.icon]),
                Re = Object.freeze([Te.colorGreen, Te.icon]),
                Ue = Object.freeze([Te.colorOrange, Te.icon]),
                Ve = Object.freeze([Te.colorPlum, Te.icon]),
                Le = Object.freeze([Te.colorPrimary, Te.icon]),
                Ne = Object.freeze([Te.twitterIcon, Te.icon]),
                Ge = r.createElement(g.default, { style: He }),
                Qe = r.createElement(f.default, { style: je }),
                We = r.createElement(p.default, { style: je }),
                Ye = r.createElement(y.default, { style: je }),
                $e = r.createElement(E.default, { style: je }),
                qe = r.createElement(h.default, { style: Be }),
                Je = r.createElement(_.default, { style: Be }),
                Ke = r.createElement(v.default, { style: Be }),
                Xe = r.createElement(b.default, { style: Oe }),
                et = r.createElement(x.default, { style: je }),
                tt = r.createElement(w.default, { style: Be }),
                nt = r.createElement(C.default, { style: Oe }),
                lt = r.createElement(Z.default, { style: Oe }),
                ot = r.createElement(k.default, { style: Te.icon }),
                at = r.createElement(z.default, { style: Te.icon }),
                it = r.createElement(I.default, { style: je }),
                rt = r.createElement(D.default, { style: je }),
                ct = r.createElement(A.default, { style: Oe }),
                st = r.createElement(M.default, { style: je }),
                dt = r.createElement(F.default, { style: Re }),
                mt = r.createElement(P.default, { style: Te.icon }),
                ut = r.createElement(S.default, { style: Te.icon }),
                gt = r.createElement(Ee.Z, { style: Te.icon }),
                ft = r.createElement(T.default, { style: Le }),
                pt = r.createElement(H.default, { style: Ne }),
                yt = r.createElement(j.default, { style: Ue }),
                Et = r.createElement(B.default, { style: Ue }),
                ht = r.createElement(O.default, { style: Te.icon }),
                _t = r.createElement(R.default, { style: Te.icon }),
                vt = r.createElement(U.default, { style: Ve }),
                bt = r.createElement(V.default, { style: Be }),
                xt = r.createElement(L.default, { style: je }),
                wt = r.createElement(N.default, { style: je }),
                Ct = r.createElement(G.default, { style: Re }),
                Zt = r.createElement(Q.default, { style: Te.icon }),
                kt = { alert_bell_icon: Qe, bar_chart_icon: Ge, bell_icon: Qe, birdwatch_icon: We, bird_icon: pt, briefcase_icon: Ye, coin_icon: at, communities_icon: $e, conversation_bubble_icon: yt, heart_icon: Je, heart_plus_icon: Ke, histogram_icon: ct, lightning_bolt_icon: et, list_icon: Xe, live_icon: tt, lock_icon: nt, magic_rec_icon: pt, milestone_icon: ot, news_icon: lt, person_icon: it, play_icon: rt, promoted_icon: st, radar_stroke_icon: Zt, reply_icon: yt, report_icon: qe, recommendation_icon: mt, retweet_icon: dt, safety_icon: ut, security_alert_icon: ht, security_unknown_icon: _t, shield_icon: Et, spaces_icon: gt, stacked_cards_icon: pt, super_follows_icon: vt, super_follows_error_icon: bt, topic_icon: ft, trending_icon: pt, verified_general_icon: xt, verified_notable_icon: wt, money_icon: Ct },
                zt = (e) => {
                    const { featureSwitches: t, history: n } = r.useContext(he.rC),
                        [l, o] = r.useState(!1),
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
                        E = r.useCallback(() => {
                            o(!0);
                        }, [o]),
                        h = r.useCallback(() => {
                            o(!1);
                        }, [o]),
                        { icon: _, message: v, template: b } = f,
                        x = i.url && (0, X.s9)(i.url),
                        w = i.socialContext && i.socialContext.generalContext && i.socialContext.generalContext,
                        C = s ? r.createElement(be.Z, { feedbackItems: s }) : null,
                        Z = (0, W.HD)(n),
                        k = r.useMemo(() => b.aggregateUserActionsV1.fromUsers.map((e) => e.user).filter(Boolean), [b.aggregateUserActionsV1.fromUsers]),
                        z = C && !k.length && !w,
                        I = _ && _.id && kt[_.id] ? kt[_.id] : pt,
                        D = x && ("string" == typeof x ? { pathname: x } : x),
                        A = (0, K.hC)("rweb_sourcemap_migration"),
                        M = (0, J.z)(),
                        F = r.useMemo(() => [Te.root, p ? Te.reducedHorizontalPadding : Te.horizontalPadding, M && Te.rootRedesign, g && Te.unread, Z && Te.compactContainer], [p, M, g, Z]),
                        P = r.useMemo(() => [Te.itemContent, Te.timelineRowText, z && Te.curationPadding], [z]),
                        S = Z ? "medium" : void 0;
                    return r.createElement(d.$6, null, (e) => r.createElement(m.Z, { "aria-labelledby": l ? [Me, Fe, Pe, Se].join(" ") : void 0, link: D ? e.withAnchorless(D) : void 0, onBlur: h, onClick: y, onFocus: E, role: "article", style: F, testID: Ae }, w ? r.createElement(ve.Z, { avatarSize: S, contextType: w.contextType, link: w.landingUrl ? (0, X.s9)(w.landingUrl) : void 0, style: Te.socialContext, text: w.text }) : null, r.createElement(u.Z, { avatarCell: I, avatarCellStyle: [Te.itemIcon, p && Te.edgeToEdgeItemIcon, A && Te.itemIconRedesign], avatarSize: S, cellStyle: P, style: p && Te.edgeToEdgeSocialContext }, k.length ? r.createElement(c.Z, { style: Te.userAvatarList }, r.createElement(q, { users: k })) : null, r.createElement(_e.Z, { alignment: v.alignment, entities: v.entities, id: l ? Me : void 0, rtl: v.rtl, text: v.text }), r.createElement(Ie, { focused: l, template: b }), r.createElement(we, { focused: l, link: x, template: b })), C ? r.createElement(c.Z, { style: [Te.curationControl, M && Te.curationControlRedesign] }, C) : null));
                },
                It = (e) => {
                    const t = ((n = e.entry.content.id), (0, te.v9)((e) => ye.selectNotification(e, n), ne.Z));
                    var n;
                    const l = (0, ee.z)(),
                        o = (0, te.v9)((t) => e.module.selectIsUnread(t, e.entry.entryId));
                    return t ? r.createElement(zt, (0, i.Z)({}, e, { analytics: l, isUnread: o, notification: t })) : null;
                },
                Dt = a.iH({ isFocusable: (0, l.Z)(!0), component: It, shouldDisplayBorder: (0, l.Z)(!0), getScribeDataItem: ({ itemMetadata: { clientEventInfo: e } }) => o.Z.getAllSurfaceDetails(e) }).getHandler();
        },
        927389: (e, t, n) => {
            n.d(t, { Z: () => d });
            var l = n(202784),
                o = n(247056),
                a = n(392237);
            const i = (0, n(523561).Z)({ loader: () => n.e("loader.FeedbackSheet").then(n.bind(n, 774426)) });
            var r = n(725516),
                c = n(851623);
            const s = a.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, r.Z)((e) => {
                    const { analytics: t, feedbackItems: n, isDisplayedOnMedia: a } = e,
                        r = l.useCallback((e) => (n ? l.createElement(i, { actionItems: n, onClose: e }) : null), [n]),
                        d = l.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return n && n.length > 0 ? l.createElement(o.Z, { onClick: d, renderActionMenu: r, style: s.curationControl, testID: c.Z.caret, withDarkBackground: a }) : null;
                });
        },
        703738: (e, t, n) => {
            n.d(t, { z: () => i });
            var l = n(323265),
                o = n(655352),
                a = n(952793);
            const i = () => (0, a.hC)("rweb_sourcemap_migration") && (0, o.ZP)() && !l.ZP.isMobileOS();
        },
        517890: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var l = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M15.002 19v.097c-.766.537-1.585 1.072-2.497 1.603l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.737 1.488.82 3.351.075 5.356-.139-.969-.964-1.716-1.971-1.716h-2.501c-1.104 0-2 .896-2 2v1h-.998c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h1zM19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        772722: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var l = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)(
                    "svg",
                    {
                        ...e,
                        role: e["aria-label"] ? e.role || "img" : void 0,
                        "aria-hidden": void 0 === e["aria-label"],
                        style: [i.Z.root, e.style],
                        viewBox: "0 0 24 24",
                        children: l.createElement(
                            "g",
                            null,
                            l.createElement("path", { d: "M8.18 5.317c-.067.067-.118.148-.16.236l-.006-.005-6.722 15.145.006.006c-.125.24.084.732.51 1.16.428.427.92.636 1.16.51l.007.007 15.145-6.722-.005-.005c.088-.042.17-.093.237-.16.937-.937-.582-3.973-3.39-6.782-2.81-2.81-5.845-4.328-6.782-3.39z", fill: "#E0245E" }),
                            l.createElement("path", { d: "M15.005 8.66c2.8 2.8 4.353 5.785 3.47 6.668-.883.883-3.868-.67-6.67-3.47-2.8-2.8-4.352-5.786-3.47-6.67.884-.882 3.87.672 6.67 3.472z", fill: "#A01744" }),
                            l.createElement("path", { d: "M15.186 12.756c-.176 0-.35-.077-.47-.225-.206-.258-.164-.635.095-.842.132-.105 3.25-2.553 7.653-1.923.328.047.556.35.51.678-.048.328-.35.557-.68.508-3.89-.552-6.705 1.652-6.732 1.674-.11.09-.243.132-.374.132z", fill: "#FFAD1F" }),
                            l.createElement("path", { d: "M20.177 14.654c1.182-.334 1.998.194 2.193.886.194.692-.227 1.568-1.408 1.9-.46.13-.6.35-.58.42.02.07.254.187.714.057 1.182-.332 1.998.195 2.192.887.196.692-.227 1.567-1.41 1.9-.46.13-.6.35-.58.42.02.07.254.187.716.058.318-.09.65.096.74.414.088.32-.098.65-.417.74-1.18.332-1.998-.194-2.193-.887-.194-.693.227-1.567 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.188-.714-.058-1.183.333-1.998-.193-2.193-.886-.195-.692.227-1.566 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.187-.715-.057-.32.09-.65-.097-.74-.415-.09-.32.096-.652.415-.74zM3.864 10.42c-.057 0-.115-.01-.173-.026-.316-.096-.496-.43-.4-.747.68-2.262 1.295-5.87.54-6.812-.087-.106-.214-.21-.507-.19-.563.044-.51 1.23-.508 1.242.025.33-.223.618-.553.643-.335.02-.618-.223-.642-.553-.062-.827.195-2.42 1.613-2.526.633-.047 1.16.173 1.53.635 1.42 1.77-.02 6.897-.325 7.907-.078.26-.317.427-.574.427z", fill: "#794BC4" }),
                            l.createElement("circle", { cx: "1.826", cy: "12.857", fill: "#FFAD1F", r: "1.076" }),
                            l.createElement("circle", { cx: "17.702", cy: "6.814", fill: "#E0245E", r: ".899" }),
                            l.createElement("circle", { cx: "15.628", cy: "20.377", fill: "#DF235F", r: "1.064" }),
                            l.createElement("circle", { cx: "21.878", cy: "5.9", fill: "#FFAD1F", r: "1.004" }),
                            l.createElement("circle", { cx: "18.458", cy: "2.733", fill: "#E0245E", r: "1.199" }),
                            l.createElement("path", { d: "M12.313 8.463c-.12.096-.275.147-.44.13-.52-.057-.958-.238-1.264-.524-.325-.304-.485-.71-.442-1.117.077-.714.794-1.37 2.016-1.238.476.05.688-.102.695-.175.007-.073-.167-.268-.642-.32-.52-.055-.958-.236-1.265-.522-.324-.303-.485-.71-.44-1.116.078-.715.794-1.37 2.015-1.238.347.037.53-.034.606-.08.062-.04.087-.075.09-.096.006-.072-.166-.267-.643-.32-.328-.035-.567-.33-.53-.66.035-.328.33-.566.66-.53 1.22.13 1.782.924 1.705 1.64-.077.714-.794 1.37-2.016 1.237-.347-.038-.53.034-.607.08-.06.037-.087.074-.09.094-.007.072.167.267.643.318 1.22.132 1.782.925 1.705 1.64-.076.715-.793 1.37-2.014 1.238-.347-.037-.53.035-.606.08-.062.04-.086.075-.088.096-.008.073.166.267.642.32.33.035.568.33.53.66-.02.163-.102.304-.22.4z", fill: "#FFAD1F" }),
                        ),
                    },
                    { writingDirection: t },
                );
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var l = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const c = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NotificationHandler.a0e1d5ea.js.map
