"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Account"],
    {
        906433: (e, t, n) => {
            n.d(t, { Z: () => g });
            n(136728);
            var r = n(202784),
                i = n(325686),
                a = n(952428),
                o = n(731708),
                l = n(310088),
                s = n(392237),
                c = n(332920),
                d = n.n(c),
                u = n(206962);
            const m = () => d().d9ef2842,
                p = d().d86bbf0f,
                f = d().h6beb5fb,
                g = ({ badgeCount: e, decoration: t, icon: n, iconColor: s, label: c, link: d, onClick: g, pip: E, rightControl: y, testID: b }) =>
                    r.createElement(
                        i.Z,
                        { style: h.dashMenuItem },
                        r.createElement(
                            a.Z,
                            { link: d, onClick: g, style: h.link, testID: b },
                            r.createElement(
                                i.Z,
                                { style: h.item },
                                n
                                    ? r.createElement(n, {
                                          style: (() => {
                                              const e = [h.icon, h.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                r.createElement(o.ZP, { numberOfLines: 1, size: "headline1", style: h.itemLabel, weight: "bold" }, c),
                                e || E ? r.createElement(i.Z, { style: h.itemAccessory }, r.createElement(l.Z, { count: e, pip: E, standalone: !0, truncatedCountFormatter: f, unreadCountLabel: E ? m : p })) : null,
                                t ? r.createElement(i.Z, { style: h.leftMargin }, t) : null,
                            ),
                        ),
                        y,
                    ),
                h = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                i = n(325686),
                a = n(661810),
                o = n(952428),
                l = n(731708),
                s = n(392237),
                c = n(516951),
                d = n(500002),
                u = n(443781),
                m = n(71620),
                p = n(668214),
                f = n(172497),
                g = n(466036),
                h = n(390387),
                E = n(919022);
            const y = (0, p.Z)()
                .propsFromState(() => ({ communitiesActions: h.yK, hasCommunityMemberships: f.fn, pendingFollowersInfo: g.sC, viewerUser: E.ZP.selectViewerUser, userFeatures: h.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: t, pendingFollowersInfo: n, userFeatures: r, viewerUser: i }) => {
                    const { acceptedIds: a, ids: o } = n;
                    return { communitiesActions: e, acceptedFollowerCount: a.length, hasCommunityMemberships: t, viewerUser: i, pendingFollowerCount: o.length - a.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: g.GE }))
                .withAnalytics();
            var b = n(906433),
                w = n(879526);
            const Z = ({ acceptedFollowerCount: e, analytics: t, pendingFollowerCount: n, viewerUser: s, onClose: d = c.Z }) => {
                    const { featureSwitches: m, userClaims: p } = (0, u.QZ)(),
                        { coreItems: f, countrySpecificItems: g } = (0, w.O)({ analytics: t, featureSwitches: m, onClose: d, userClaims: p, viewerUser: s, acceptedFollowerCount: e, pendingFollowerCount: n });
                    return r.createElement(
                        r.Fragment,
                        null,
                        ((e) =>
                            e.map((e, t) => {
                                const { component: n = b.Z, ...i } = e,
                                    a = { ...i },
                                    o = r.createElement(n, a);
                                return r.createElement(r.Fragment, { key: t }, o);
                            }))(f),
                        ((h = g),
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(i.Z, { style: v.redesignDivider }, r.createElement(a.Z, { space: "space12", style: v.divider })),
                            h.map((e, t) => r.createElement(o.Z, { key: t, link: e.link, onClick: e.onClick, style: v.countrySpecificItem }, r.createElement(l.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var h;
                },
                C = (0, d.ZP)(y(r.memo(Z))),
                v = s.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        64672: (e, t, n) => {
            n.r(t), n.d(t, { AccountScreen: () => E, default: () => b });
            var r = n(202784),
                i = n(325686),
                a = n(366635),
                o = n(392237),
                l = n(332920),
                s = n.n(l),
                c = n(449067),
                d = n(120735),
                u = n(652904),
                m = n(725516),
                p = n(668214),
                f = n(919022);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ loggedInUser: f.ZP.selectLoggedInUser }))
                    .withAnalytics({ page: "me" }),
                h = s().i5f7b6b8;
            class E extends r.Component {
                render() {
                    return r.createElement(u.Z, null, r.createElement(c.Z.Configure, { documentTitle: h, title: this._renderUserName() }, r.createElement(i.Z, { style: y.dashmenu }, r.createElement(d.Z, null))));
                }
                _renderUserName() {
                    const { loggedInUser: e } = this.props;
                    return e ? r.createElement(a.Z, { badgeContext: "account", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, translatorType: e.translator_type, withScreenName: !1 }) : null;
                }
            }
            const y = o.default.create((e) => ({ dashmenu: { marginBottom: e.componentDimensions.appBarHeight } })),
                b = (0, m.Z)(g(E));
        },
        621399: (e, t, n) => {
            n.r(t), n.d(t, { TVProfile: () => Ce, default: () => xe });
            n(136728);
            var r = n(202784),
                i = n(396342),
                a = n(214997),
                o = n(325686),
                l = n(731708),
                s = n(98538),
                c = n(891198),
                d = n(366635),
                u = n(392237),
                m = n(332920),
                p = n.n(m),
                f = n(516951),
                g = n(187669),
                h = n(290402),
                E = n(363047),
                y = n(902641),
                b = n(273413),
                w = n(602737),
                Z = n(905346),
                C = n(269653),
                v = n(686010),
                x = n(291394),
                _ = n(650093),
                P = n(183822),
                k = n(575626),
                F = n(752475),
                I = n(334113),
                T = n(873930),
                S = n(125363),
                A = n(919022),
                N = n(312771),
                D = n(673932),
                M = n(87063),
                L = n(668214),
                V = n(903558),
                B = n(682461);
            const $ = (e, t) => {
                    const { match: n } = t,
                        r = n.params.screenName,
                        i = e.tv?.profile?.[r?.toLowerCase() || ""];
                    return i;
                },
                U = (e) => e.tv?.player,
                z = (e, t) => {
                    const { match: n } = t,
                        r = n.params.screenName;
                    return e.tv?.profile?.[r?.toLowerCase() || ""]?.cursor;
                },
                O = (e) => e.tv?.profileFetchStatus === M.Z.LOADING,
                R = (0, L.Z)()
                    .propsFromState(() => ({ tvProfile: $, tvPlayer: U, cursor: z, isLoading: O }))
                    .propsFromActions(() => ({ playerOpen: V.eX.playerOpen, fetchUserProfileAndVideos: B.Sn }))
                    .withAnalytics({ page: "profile" });
            var H = n(708411),
                G = n(154003),
                j = n(524483),
                W = n(467537),
                q = n(725516);
            const K = "tv-follow-button",
                Q = p().eb5f060c,
                X = p().d960b55c,
                Y = p().c0f56044,
                J = p().cfd2f35e,
                ee = p().ja66a2b5,
                te = p().e4c91b70,
                ne = ({ style: e, user: t }) => {
                    const { closeModal: n, openModal: i } = (0, j.N)(),
                        a = (0, S.I0)(),
                        o = (0, q.z)(),
                        l = r.useCallback(() => {
                            t?.following
                                ? (o.scribe({ element: "unfollow-button", action: "click", data: { profile_id: t.id_str } }),
                                  i({
                                      primaryText: ee({ screenName: t.screen_name }),
                                      secondaryText: te,
                                      primaryAction: {
                                          buttonText: Y,
                                          onClick: () => {
                                              a(B.fv({ userId: t.id_str, screenName: t?.screen_name })), n();
                                          },
                                      },
                                      secondaryAction: {
                                          buttonText: J,
                                          onClick: () => {
                                              n();
                                          },
                                      },
                                      handleEscape: () => {
                                          n();
                                      },
                                  }))
                                : (o.scribe({ element: "follow-button", action: "click", data: { profile_id: t.id_str } }), a(B.ZN({ userId: t.id_str, screenName: t?.screen_name })));
                        }, [o, n, a, i, t?.following, t.id_str, t.screen_name]);
                    return r.createElement(W.C, { "aria-label": t?.following ? Y : Q, focusedStyle: t?.following ? re.interactiveViewUnfollowFocused : void 0, name: K, onPress: l, role: "button", style: [re.interactiveView, e] }, ({ hasFocus: e }) => {
                        const n = t?.following ? (e ? Y : X) : Q;
                        return r.createElement(G.ZP, { "aria-label": n, size: "small", style: re.button, type: t?.following ? (e ? "destructiveOutlined" : "primaryOutlined") : "primaryFilled" }, n);
                    });
                },
                re = u.default.create((e) => ({ interactiveView: { borderRadius: e.borderRadii.infinite }, interactiveViewUnfollowFocused: { borderColor: e.colors.red500 }, button: { width: 128 * e.scaleMultiplier } }));
            var ie = n(74514),
                ae = n(405303);
            const oe = p().j87c21f4,
                le = p().iebc30ca,
                se = ({ style: e, user: t }) => {
                    const n = (0, S.I0)(),
                        i = (0, q.z)(),
                        a = r.useCallback(() => {
                            i.scribe({ element: "notify-button", action: "click", data: { profile_id: t.id_str } }), n(B.BX({ userId: t.id_str, notificationsEnabled: !t.notifications, screenName: t?.screen_name }));
                        }, [i, n, t.id_str, t.notifications, t?.screen_name]);
                    return r.createElement(W.C, { "aria-label": t?.notifications ? le : oe, name: "tv-notify-button", onPress: a, role: "button", style: [ce.interactiveView, e] }, r.createElement(G.ZP, { icon: t?.notifications ? r.createElement(ie.default, null) : r.createElement(ae.default, null), size: "small", type: "primaryOutlined" }));
                },
                ce = u.default.create((e) => ({ interactiveView: { borderRadius: e.borderRadii.infinite } })),
                de = "profile-grid",
                ue = "profile-content",
                me = p().g7ee7019,
                pe = p().fb83778c,
                fe = p().e5b0e544,
                ge = p().dd4bbaea,
                he = p().i71d6193,
                Ee = p().adb512f0,
                ye = ({ history: e, user: t }) => {
                    const n = t ? me({ name: t?.screen_name }) : pe;
                    return r.createElement(
                        o.Z,
                        { style: ve.loggedOutProfilePrompt },
                        r.createElement(l.ZP, { size: "headline2", style: ve.marginBottom16 }, n),
                        r.createElement(
                            w.K,
                            {
                                autoFocus: !0,
                                name: "search-login-button",
                                onPress: () => {
                                    e.push(E.C2);
                                },
                            },
                            fe,
                        ),
                    );
                },
                be = ({ user: e }) => r.createElement(o.Z, { style: [ve.profileStats, ve.marginBottom6] }, r.createElement(o.Z, { style: [ve.profileStatsItem, ve.marginEnd8] }, r.createElement(p().I18NFormatMessage, { $i18n: "d2924acb" }, r.createElement(s.Z.Value, { style: ve.marginEnd4 }, p().ec08efe4({ formattedCount: c.ZP.getTruncatedCount(e?.followers_count || 0) })), r.createElement(s.Z.Label, { style: ve.marginEnd4 }, p().h9f711f0({ count: e?.followers_count || 0 })))), r.createElement(o.Z, { style: [ve.profileStatsItem, ve.marginEnd8] }, r.createElement(p().I18NFormatMessage, { $i18n: "a8f9642d" }, r.createElement(s.Z.Value, { style: ve.marginEnd4 }, p().bef78294({ formattedCount: c.ZP.getTruncatedCount(e?.friends_count || 0) })), r.createElement(s.Z.Label, { style: ve.marginEnd4 }, p().hda3bb87({ count: e?.friends_count || 0 }))))),
                we = (e) => `${k.sN}.${D.rQ}.${de}.carousel-${e}`,
                Ze = (e) => `${k.sN}.${D.rQ}.${de}.${ue}.video-${e}`,
                Ce = ({ cursor: e, fetchUserProfileAndVideos: t, history: n, isLoading: s, match: c, playerOpen: u, tvProfile: m }) => {
                    const p = c.params.screenName,
                        E = m?.user,
                        w = m?.modules,
                        M = m?.videos,
                        L = (0, S.v9)(A.ZP.selectViewerUser),
                        V = L && E && L.id_str === E.id_str,
                        B = (w?.length || 0) + 1,
                        $ = r.useRef(null),
                        U = r.useRef(Array(B).fill(null));
                    (0, g.q)(() => {
                        ((p && !E) || !M) && t({ screenName: p });
                    });
                    const { clearVoiceHandlers: z, registerVoiceHandlers: O } = (0, y.B)();
                    r.useEffect(
                        () => (
                            O({ onupdatestate: () => b.E.List }),
                            function () {
                                z();
                            }
                        ),
                        [z, O],
                    );
                    const R = r.useCallback(() => {
                            p && !s && t({ screenName: p, cursor: e });
                        }, [p, s, t, e]),
                        G = (0, S.I0)(),
                        j = r.useCallback(
                            (e) => {
                                G(u(e)), n.push((0, D.X5)(e));
                            },
                            [G, n, u],
                        ),
                        W = ((e) => ("https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" === e ? H.jz : e ? e.replace(H.KB, "_400x400.jpg") : H.jz))(E?.profile_image_url_https),
                        q = r.useCallback(() => !1, []),
                        Q = r.useMemo(
                            () =>
                                w?.map((e, t) => () => {
                                    $.current?.positionRef.current !== t && $.current?.setPosition(t);
                                }),
                            [w],
                        ),
                        X = r.useCallback(() => {
                            $.current?.positionRef.current !== B - 1 && $.current?.setPosition(B - 1);
                        }, [B]),
                        Y = r.useMemo(
                            () =>
                                w?.map((e, t) =>
                                    r.createElement(
                                        o.Z,
                                        {
                                            key: t,
                                            ref: (e) => {
                                                U.current[t] = e;
                                            },
                                        },
                                        r.createElement(Z.Z, { content: e.content, displayType: (0, I.qU)(e.displayType), handleNoriginArrowPress: q, name: `carousel-${t.toString()}`, onFocus: Q?.[t], onSelectVideo: j, title: e.title }),
                                    ),
                                ),
                            [q, w, Q, j],
                        ),
                        J = r.useMemo(() => {
                            const e = w && w.length > 0;
                            if (M && M?.length > 0)
                                return r.createElement(
                                    o.Z,
                                    {
                                        ref: (e) => {
                                            U.current[B - 1] = e;
                                        },
                                    },
                                    r.createElement(_.Z, { autoFocus: !e, content: M, handleNoriginArrowPress: q, name: ue, onFocus: X, onNearEnd: R, onSelectVideo: j, returnToFirstElementOnEscape: !0, style: ve.content, title: e ? Ee : void 0, width: 4 }),
                                );
                        }, [R, q, w, X, j, B, M]),
                        ee = r.useCallback((e) => {
                            $.current = e;
                        }, []),
                        te = r.useCallback(
                            (e) => {
                                if ($.current?.isAnimating.current) return !0;
                                const t = $.current?.positionRef.current || 0;
                                let n = 0;
                                switch (e.key) {
                                    case "ArrowUp":
                                        if (0 === t) return (0, i.setFocus)(`${k.sN}.${D.rQ}.${K}`), !0;
                                        (n = Math.max(t - 1, 0)), (0, i.setFocus)(we(n));
                                        break;
                                    case "ArrowDown":
                                        if (((n = Math.min(t + 1, B)), n === B)) return !1;
                                        if (n === B - 1) return (0, i.setFocus)(Ze(0)), !0;
                                        break;
                                    case "ArrowLeft":
                                        (0, i.setFocus)(`${k.sN}.${k.TZ}`);
                                }
                                return !0;
                            },
                            [B],
                        ),
                        re = (0, T.Z)(),
                        ie = r.useMemo(() => (re ? r.createElement(o.Z, null, Y, J) : r.createElement(x.k, { getGPUScrollerApi: ee, renderedItemRefs: U, scrollX: !1, scrollY: !0 }, Y, J)), [ee, Y, J, re]),
                        ae = (0, i.getCurrentFocusKey)(),
                        oe = r.useCallback((e) => (w?.length ? ae !== we(0) && ((0, i.setFocus)(we(0)), !0) : !!M?.length && ae !== Ze(0) && ((0, i.setFocus)(Ze(0)), !0)), [ae, w?.length, M?.length]),
                        le = r.useMemo(() => (M?.length || w?.length ? r.createElement(v.Z, { "aria-label": void 0, autoFocus: !0, name: de, onArrowPress: te, onEscapeOrBack: oe, role: "grid", saveLastFocusedChild: !0, trackChildren: !0 }, ie) : r.createElement(o.Z, { style: ve.noVideosContainer }, r.createElement(l.ZP, { size: "headline1", weight: "bold" }, V ? ge : he({ name: `@${E?.screen_name || ""}` })))), [te, oe, V, w?.length, ie, E?.screen_name, M?.length]),
                        ce = r.useCallback(() => (L ? le : r.createElement(ye, { history: n, user: E })), [n, le, E, L]),
                        me = r.useMemo(() => r.createElement(h.Z, { fetchStatus: E && M ? N.ZP.LOADED : N.ZP.LOADING, onRequestRetry: f.Z, render: ce, retryable: !1 }), [ce, E, M]);
                    return r.createElement(r.Fragment, null, r.createElement(P.Z, null, r.createElement(o.Z, { style: ve.header }, E ? r.createElement(o.Z, { style: ve.profileInfo }, r.createElement(F.Z, { source: W, style: [ve.userAvatar, ve.marginEnd16], verifiedType: E.verified_type, withOuterBorder: !0 }), r.createElement(o.Z, { style: [ve.profileDetails, V && ve.ownProfileDetails, ve.marginEnd16] }, r.createElement(d.Z, { affiliateBadgeInfo: E.highlightedLabel, badgeContext: "content", isBlueVerified: E.is_blue_verified, isProtected: E.protected, isVerified: E.verified, name: E.name, nameSize: "headline1", screenName: E.screen_name, screenNameSize: "body", style: ve.marginBottom6, verifiedType: E.verified_type, withLink: !1, withNameWrap: !0 }), E.description ? r.createElement(l.ZP, { style: [ve.profileDescription, ve.marginBottom6] }, r.createElement(C.x, { text: E.description })) : null, r.createElement(be, { user: E }), L && !V ? r.createElement(o.Z, { style: [ve.buttonSection, ve.marginBottom6] }, r.createElement(ne, { style: ve.marginEnd8, user: E }), r.createElement(se, { style: ve.marginEnd8, user: E })) : null)) : null), re ? r.createElement(a.Z, null, me) : r.createElement(o.Z, { style: re ? void 0 : ve.overflowHidden }, me)));
                },
                ve = u.default.create((e) => ({ header: { minHeight: 128 * e.scaleMultiplier, paddingHorizontal: e.spaces.space24, paddingTop: 60 * e.scaleMultiplier, paddingBottom: e.spaces.space32 }, userAvatar: { minHeight: 128 * e.scaleMultiplier, width: 128 * e.scaleMultiplier }, overflowHidden: { overflow: "hidden" }, marginBottom6: { marginBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, marginEnd4: { marginEnd: e.spaces.space4 }, marginEnd8: { marginEnd: e.spaces.space8 }, marginEnd16: { marginEnd: e.spaces.space16 }, marginBottom16: { marginBottom: e.spaces.space16 }, profileInfo: { flexDirection: "row" }, profileDetails: { justifyContent: "end" }, ownProfileDetails: { justifyContent: "center" }, profileDescription: { marginBottom: e.spaces.space4 }, profileStats: { marginBottom: e.spaces.space4, flexDirection: "row" }, profileStatsItem: { flexDirection: "row" }, buttonSection: { bottom: -e.borderWidthsPx.medium, flexDirection: "row", marginTop: e.spaces.space2, start: -e.borderWidthsPx.medium }, contentWrapper: { flex: 1 }, content: { paddingHorizontal: e.spaces.space24 }, loggedOutProfilePrompt: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: e.spaces.space64 }, noVideosContainer: { width: "100%", height: "100%", display: "flex", alignItems: "center", paddingTop: e.spaces.space64 } })),
                xe = R(Ce);
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                i = n(325686),
                a = n(827515),
                o = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                f = s.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [g, h] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        E = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (E.current = !0),
                                function () {
                                    E.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (E.current)
                                if (o.Z.reducedMotionEnabled) h((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, a.Z)(e.count) && g.count === e.count) ? h((e) => ({ ...e, pendingCount: null, pendingText: null })) : (h((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, h));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            E.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              E.current && h((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, h));
                        }, [g.animating, g.oldText]),
                        r.useMemo(() => {
                            const e = m[g.transitionDirection],
                                t = g.oldText && !o.Z.reducedMotionEnabled,
                                a = !g.animating && g.oldText && !o.Z.reducedMotionEnabled,
                                s = { ...p, ...(g.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                i.Z,
                                { style: [f.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, d, g.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(E.current, h),
                                        style: c,
                                    },
                                    r.createElement(l.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, E, h])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                i = n(325686),
                a = n(731708),
                o = n(891198),
                l = n(280278),
                s = n(392237);
            const c = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, o.Gb)(e) !== (0, o.wl)(e) ? { label: (0, o.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: i } = this.props;
                    return r.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: i }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                r.createElement(
                    i.Z,
                    { style: [m.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(i.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: i, weight: o = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: c, style: i, weight: o }) : r.createElement(a.ZP, { children: t, color: s ? "white" : "text", size: c, style: i, weight: o }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Account.776fc97a.js.map
