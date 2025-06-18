"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-9f4db315", "loader.directMessagesData-63cb1cc4"],
    {
        904940: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, i) => e.post("media/metadata/create", t, {}, { ...i, "content-type": "application/json" }), attachSubtitles: (t, i) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...i, "content-type": "application/json" }) });
        },
        708482: (e, t, i) => {
            i.d(t, { s: () => s });
            var a = i(10622),
                r = i.n(a);
            function s(e, t, i, a) {
                return r()(e, t, i, a ? { networkCacheConfig: { metadata: { isFatalError: a } } } : void 0).toPromise();
            }
        },
        866481: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = { tweet: "SideNav_NewTweet_Button" };
        },
        763881: (e, t, i) => {
            i.d(t, { Z: () => ge });
            i(136728);
            var a = i(202784),
                r = i(400752),
                s = i(111677),
                n = i.n(s),
                o = i(325686),
                l = i(58881),
                d = i(392237),
                c = i(157130),
                u = i(530732),
                m = i(443781),
                p = i(884161),
                h = i(521514),
                _ = i(614983),
                g = i.n(_),
                f = i(618186),
                b = i(366635),
                w = i(310088),
                I = i(149170),
                E = i(952793),
                y = i(125363),
                A = i(919022);
            const S = n().d86bbf0f,
                v = n().h6beb5fb;
            function C(e) {
                const { isExpanded: t } = e,
                    i = (0, E.hC)("rweb_sourcemap_migration"),
                    r = (0, y.v9)(A.ZP.selectViewerUser);
                g()(r, "user must be defined");
                const { highlightedLabel: s, is_blue_verified: n, name: l, profile_image_url_https: d, protected: c, screen_name: u, verified: m, verified_type: p } = r;
                return a.createElement(a.Fragment, null, a.createElement(o.Z, null, a.createElement(f.Z, { "aria-label": l, screenName: u, size: "xLarge", style: i && x.userAvatarRedesign, uri: d }), t ? null : U(e)), t ? a.createElement(a.Fragment, null, a.createElement(b.Z, { affiliateBadgeInfo: s, badgeContext: "account", isBlueVerified: n, isProtected: c, isVerified: m, name: l, screenName: u, style: x.userName, verifiedType: p, withStackedLayout: !0 }), a.createElement(o.Z, { style: x.iconContainer }, a.createElement(I.default, { style: x.icon }), t ? U(e) : null)) : null);
            }
            function U({ hasMultiAccountBadges: e, isExpanded: t }) {
                return e ? a.createElement(w.Z, { pip: !0, style: t && x.pip, truncatedCountFormatter: v, unreadCountLabel: S }) : null;
            }
            const x = d.default.create((e) => ({ icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, userAvatarRedesign: { width: e.spaces.space36, height: e.spaces.space36 } })),
                T = n().b8e1d524,
                M = n().gef27c4c;
            class D extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = () => {
                            const { renderEmptyState: e } = this.props;
                            return e ? a.createElement(o.Z, { style: O.emptyStateWrapper }, e()) : null;
                        }),
                        (this._handleAccountSwitcherClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "click" });
                        });
                }
                render() {
                    const { "aria-label": e, currentUser: t, delegateUser: i, hasMultiAccountBadges: r, hoverLabel: s, interactiveViewTestId: n, isExpanded: o, renderEmptyState: m, renderMenuSheet: h, style: _ } = this.props,
                        g = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        f = [O.anchorContainer, g && O.anchorContainerRedesign, _];
                    return t || m ? a.createElement(c.Z, { contentStyle: O.menuContainer, enableEnterKeyToggle: !0, renderContent: h, withArrow: !0, withFixedPosition: !0 }, a.createElement(u.Z, { "aria-label": e || M, hoverLabel: o ? void 0 : { label: s || T }, interactiveStyles: l.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.text }), onClick: this._handleAccountSwitcherClick, role: "button", style: f, testID: n }, i ? a.createElement(p.p, { forceUserId: i.userId }, a.createElement(C, { hasMultiAccountBadges: r, isExpanded: o })) : t ? a.createElement(C, { hasMultiAccountBadges: r, isExpanded: o }) : this._renderEmptyState())) : null;
                }
            }
            D.contextType = m.rC;
            const O = d.default.create((e) => ({ anchorContainer: { alignItems: "center", borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row", padding: e.spaces.space12 }, anchorContainerRedesign: { padding: 8 }, icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, menuContainer: { width: h.Z.cardWidth.normal }, emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: "100%" } }));
            var L = i(380155),
                P = i(755296),
                F = i(725516),
                N = i(193850),
                z = i(823161),
                B = i(879113),
                Z = i(266704),
                k = i(550475),
                V = i(516951),
                R = i(615656);
            const G = ({ children: e }) => {
                const t = a.useRef(null);
                return (
                    a.useLayoutEffect(() => {
                        const e = t.current;
                        if (!e) return;
                        const i = e.getElementsByTagName("svg")[0],
                            { height: a, width: r, x: s, y: n } = i.getBBox(),
                            o = [s, n, r, a].join(" ");
                        i.setAttribute("viewBox", o);
                    }),
                    a.createElement("div", { ref: t }, e)
                );
            };
            var H = i(725405);
            const j = n().h6beb5fb,
                $ = n().d86bbf0f,
                X = n().b7dc3885,
                W = d.default.create((e) => ({ avatarListWithOverflowContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", marginTop: e.spaces.space16, position: "absolute", end: e.spaces.space16, height: e.spaces.space64 }, notificationBadge: { paddingHorizontal: e.spaces.space4 }, IconMoreCircle: { width: e.spaces.space40, height: e.spaces.space40 }, IconMoreCircleContainer: { color: "inherit" } })),
                K = ({ accountSwitch: e, accountUsers: t, activeUser: i, createLocalApiErrorHandlerAccountsFetch: r, fetchAccounts: s, fetchStatus: n, handleClose: l, manageAccountsMenuItem: d, shouldDisplayFetchRenderer: c }) => {
                    const m = t.filter((e) => e.user_id !== i?.id_str),
                        p = m.slice(2).reduce((e, t) => e + (t.badgeCount ?? 0), 0),
                        h = (0, H.Z)(),
                        _ = a.useCallback(() => {
                            h.scribe({ element: d.scribeElement, action: "click" }), l();
                        }, [h, l, d]),
                        g = a.useMemo(() => a.createElement(u.Z, { link: d.link, onClick: _, style: W.IconMoreCircleContainer, testID: d.testID, withoutInteractiveStyles: !0 }, a.createElement(G, null, a.createElement(k.default, { style: W.IconMoreCircle })), p > 0 && a.createElement(w.Z, { count: p, style: p > 9 && W.notificationBadge, truncatedCountFormatter: j, unreadCountLabel: $ })), [_, d.link, d.testID, p]),
                        f = a.useCallback(
                            ({ hasBadge: t, isProtected: i, userId: a }) =>
                                () => {
                                    e({ hasBadge: t, isProtected: i, userId: a }), l?.();
                                },
                            [e, l],
                        ),
                        b = a.useMemo(
                            () => () =>
                                m.slice(0, 2).map((e) => {
                                    const t = e.badgeCount;
                                    return a.createElement(u.Z, { key: e.user_id, onClick: f({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }) }, a.createElement(z.default, { "aria-label": X({ screenName: e.screen_name }), decoration: t ? a.createElement(w.Z, { count: t, style: t > 9 && W.notificationBadge, truncatedCountFormatter: j, unreadCountLabel: $ }) : void 0, key: e.user_id, screenName: e.screen_name, size: "xLarge", uri: e.avatar_image_url, userId: e.user_id, withLink: !1 }));
                                }),
                            [f, m],
                        ),
                        I = a.useCallback(() => {
                            s().catch(r({ [R.ZP.AppInReadOnlyMode]: { customAction: V.Z } }));
                        }, [r, s]),
                        E = a.useMemo(() => a.createElement(a.Fragment, null, c ? a.createElement(B.Z, { fetchStatus: n, onRequestRetry: I, render: b }) : b()), [n, I, b, c]);
                    return a.createElement(o.Z, null, a.createElement(Z.Z, { isAllowedToViewOptions: { avatar: !0, badges: !0, description: !0, followButton: !1, followersYouKnow: !1, followIndicator: !0, fullName: !0, label: !0, stats: !0, subscriptionsCount: !0 }, isLoggedIn: !0, isUserBlueVerified: i.is_blue_verified, isUserStatsWithLink: !0, isUserVerified: i.verified, userAvatarUri: i.profile_image_url_https, userFollowersCount: i.followers_count, userFriendsCount: i.friends_count, userName: i.name, userScreenName: i.screen_name }), a.createElement(o.Z, { style: W.avatarListWithOverflowContainer }, E, g));
                };
            var Y = i(71620),
                q = i(668214),
                J = i(454319),
                Q = i(956817),
                ee = i(390387),
                te = i(312771);
            const ie = (0, q.Z)()
                .propsFromState(() => ({ delegateAccountCount: ee.BP, delegateUser: ee.sy, fetchStatus: J.UD, loggedInUser: A.ZP.selectLoggedInUser, multiAccountUsers: J.pc, hasMultiAccountBadges: J.pA }))
                .propsFromActions(() => ({ clearDelegateUser: ee.YJ, createLocalApiErrorHandlerAccountSwitch: (0, Y.zr)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"), createLocalApiErrorHandlerMultiListFetch: (0, Y.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountList: J.qc, switchAccount: Q.y }))
                .adjustStateProps(({ delegateAccountCount: e, delegateUser: t, fetchStatus: i, hasMultiAccountBadges: a, loggedInUser: r, multiAccountUsers: s }) => ({ delegateAccountCount: e, delegateUser: t, fetchStatus: i === te.ZP.NONE ? te.ZP.LOADING : i, hasMultiAccountBadges: !!r && a, loggedInUser: r, multiAccountUsers: s }))
                .withAnalytics({ page: "nav", section: "account_switcher" });
            var ae = i(143670),
                re = i(731708),
                se = i(229412);
            class ne extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAdditionalMenuItems = () => (this.props.additionalMenuItems || []).map((e) => a.createElement(ae.Z, { Icon: e.Icon, actionText: e.actionText, badge: e.badge, isSelected: e.isSelected, key: e.link, link: e.link, onClick: this._handleMenuItemClick(e.scribeElement, e.onClick), selectable: !0, testID: e.testID }))),
                        (this._renderTitle = () => {
                            const { title: e } = this.props;
                            return e ? a.createElement(re.ZP, { size: "headline1", style: oe.title, weight: "bold" }, e) : null;
                        }),
                        (this._renderUserAccounts = () => {
                            const { accountSwitch: e, accountUsers: t, activeUser: i, clearDelegateUser: r, delegateAccountCount: s, delegateUser: n, handleClose: o, withBadges: l = !1 } = this.props,
                                d = { accountSwitch: e, accountUsers: t, activeUser: i, clearDelegateUser: r, delegateAccountCount: s, delegateUser: n, isDelegateEnabled: this._isDelegateEnabled, onUserSwitch: o, onDelegateSwitch: o, withBadges: l };
                            return a.createElement(se.a, d);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandlerAccountsFetch: e, fetchAccounts: t } = this.props;
                            t().catch(e({ [R.ZP.AppInReadOnlyMode]: { customAction: V.Z } }));
                        }),
                        (this._handleMenuItemClick = (e, t) => () => {
                            const { analytics: i, handleClose: a } = this.props;
                            e && i.scribe({ element: e, action: "click" }), t?.(), a();
                        });
                }
                render() {
                    const { fetchStatus: e, shouldDisplayFetchRenderer: t } = this.props;
                    return (this._isDelegateEnabled = !0), a.createElement(o.Z, { style: oe.menuContainer }, this._renderTitle(), t ? a.createElement(B.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderUserAccounts }) : this._renderUserAccounts(), this._renderAdditionalMenuItems());
                }
            }
            ne.contextType = m.rC;
            const oe = d.default.create((e) => ({ menuContainer: { paddingVertical: e.spaces.space12 }, title: { paddingBottom: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                le = (0, F.Z)(ne);
            var de = i(22132);
            const ce = n().j0a8da6e,
                ue = n().c6f2bf00,
                me = n().a58e0e51,
                pe = n().j62f43a6,
                he = n().d4c52015,
                _e = { actionText: ue, link: "/account/switch", scribeElement: "manage_accounts", testID: de.Z.manageAccounts },
                ge = ie(({ clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: i, delegateAccountCount: s, delegateUser: n, fetchMultiAccountList: o, fetchStatus: l, hasMultiAccountBadges: d, isExpanded: c, loggedInUser: u, multiAccountUsers: m, style: p, switchAccount: h, withUpdatedAccountSwitcher: _ }) => {
                    const g = (0, F.z)();
                    (0, N.ip)();
                    const [f, b] = (0, r.KO)(N.lA),
                        w = a.useCallback(() => {
                            const e = m.length > 1,
                                t = [];
                            return m.length >= 5 || n || t.push({ actionText: ce, link: "/i/flow/login", scribeElement: "add_existing_account", testID: de.Z.addAccount }), e && t.push(_e), (s || f > 0) && t.push({ actionText: pe, link: s || f > 0 ? "/i/delegate/delegations" : "/settings/delegate", scribeElement: "manage_accounts", testID: de.Z.manageAccounts, badge: { count: f, label: he } }), u && t.push({ actionText: me({ screenName: u.screen_name }), link: "/logout", scribeElement: "log_out", testID: de.Z.logout }), t;
                        }, [s, n, u, m.length, f]),
                        I = a.useCallback(
                            ({ hasBadge: e, isProtected: i, userId: a }) => {
                                g.scribe({ component: i ? "switch_to_protected_account" : "switch_account", element: e ? "account_badged" : "account", action: "click" }), h({ user_id: a }).catch(t(L.y));
                            },
                            [g, t, h],
                        ),
                        E = a.useCallback(() => {
                            const { hasMultiAccountCookie: e } = (0, P.s)();
                            return e;
                        }, []),
                        y = a.useCallback((t) => (b(), u ? (_ ? a.createElement(K, { accountSwitch: I, accountUsers: m, activeUser: u, createLocalApiErrorHandlerAccountsFetch: i, fetchAccounts: o, fetchStatus: l, handleClose: t, manageAccountsMenuItem: _e, shouldDisplayFetchRenderer: E() }) : a.createElement(le, { accountSwitch: I, accountUsers: m, activeUser: u, additionalMenuItems: w(), clearDelegateUser: e, createLocalApiErrorHandlerAccountsFetch: i, delegateAccountCount: s, delegateUser: n, fetchAccounts: o, fetchStatus: l, handleClose: t, shouldDisplayFetchRenderer: E(), withBadges: !0 })) : null), [e, i, s, n, o, l, w, E, b, u, I, m, _]);
                    return a.createElement(D, { analytics: g, currentUser: u, delegateUser: n, hasMultiAccountBadges: d, interactiveViewTestId: de.Z.accountSwitcher, isExpanded: c, renderMenuSheet: y, style: p });
                });
        },
        464097: (e, t, i) => {
            i.d(t, { Z: () => b });
            var a = i(202784),
                r = i(111677),
                s = i.n(r),
                n = i(186444),
                o = i(379327),
                l = i(154003),
                d = i(815858),
                c = i(731708);
            const u = ({ disabled: e, icon: t, isExpanded: i, label: r, link: s, onPress: n, size: o = "xLarge", testID: u }) => a.createElement(l.ZP, { "aria-label": r, disabled: e, hoverLabel: { label: r }, icon: i ? void 0 : t, link: s, onPress: n, size: o, testID: u, type: "primaryFilled" }, i ? a.createElement(d.Z, { animateMount: !0, duration: "long", show: !0, type: "fade" }, a.createElement(c.ZP, null, r)) : null);
            var m = i(725516),
                p = i(443781);
            const h = s().ee69d769({ verb: "" });
            class _ extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ component: "new_tweet_button", action: "click" });
                        });
                }
                render() {
                    const { composeOptions: e, isExpanded: t, testID: i } = this.props,
                        r = this.context.featureSwitches.isTrue("rweb_sourcemap_migration");
                    return a.createElement(u, { icon: r ? f : g, isExpanded: t, label: h, link: { pathname: "/compose/post", state: e }, onPress: this._handlePress, size: r ? "medium" : void 0, testID: i });
                }
            }
            _.contextType = p.rC;
            const g = a.createElement(n.default, null),
                f = a.createElement(o.default, null),
                b = (0, m.Z)(_);
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => r, Q: () => s });
            const a = (e, t, i) => {
                    const a = new Date();
                    let r = a.getFullYear() - e;
                    const s = a.getMonth() + 1 - t;
                    if (s < 0) r -= 1;
                    else if (0 === s) {
                        a.getDate() - i < 0 && (r -= 1);
                    }
                    return r;
                },
                r = (e, t, i, r = !1) => (e && t && i ? a(e, t, i) < 18 : r),
                s = () => new Date().getFullYear() - 120;
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => Y, O9: () => W, ZP: () => q, vK: () => J });
            var a = i(688715),
                r = i(111677),
                s = i.n(r),
                n = i(653843),
                o = i(122123),
                l = i(417144),
                d = i(884495),
                c = i(716233),
                u = i(540387);
            const m = s().b8098028,
                p = s().b36f4170,
                h = s().hab3781e,
                _ = s().f6c4fb02,
                g = s().g0af3dd2,
                f = s().b8c8b0be,
                b = s().ica6d718,
                w = s().b28d44f7({ limit: 15 }),
                I = s().i1db7d13,
                E = s().baac0ed7,
                y = I({ limit: 512 }),
                A = s().a22385bb,
                S = s().be0440bf,
                v = A({ limit: 140 }),
                C = s().feeba512,
                U = s().db123c02,
                x = s().db6001e7({ limit: 5 }),
                T = s().eb96d952,
                M = s().i859a9d4,
                D = s().b3880588,
                O = s().ca058b68,
                L = s().id24379c,
                P = s().h4d7cbcc,
                F = (0, a.ju)("https://support.x.com/articles/20156423"),
                N = (0, a.ju)("https://help.x.com/using-twitter/twitter-videos"),
                z = (e) => ({ text: e }),
                B = (e) => ({ text: e, action: { label: M, link: F } }),
                Z = (e) => ({ text: e, action: { label: M, link: N } }),
                k = { [n.Y7.GIF_IS_TOO_LARGE]: z(w), [n.Y7.CANNOT_BE_PROCESSED]: z(m), [n.Y7.FILE_IS_NOT_AN_IMAGE]: z(h) },
                V = { [l.d.ZERO_FILE_LENGTH]: z(p), [l.d.TIMEOUT]: z(D) },
                R = { ...V, [l.d.FILE_TOO_LARGE]: z(x), [l.d.UNSUPPORTED_MEDIA]: B(U), [l.d.INVALID_MEDIA]: B(C) },
                G = { ...V, [l.d.FILE_TOO_LARGE]: z(w), [l.d.UNSUPPORTED_MEDIA]: B(g), [l.d.INVALID_MEDIA]: B(_) },
                H = { ...V, [l.d.FILE_TOO_LARGE]: z(y), [l.d.UNSUPPORTED_MEDIA]: Z(b), [l.d.INVALID_MEDIA]: Z(f) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                $ = 1048576,
                X = 1073741824,
                W = (e) => Object.values(j).includes(e.type),
                K = (e) => {
                    const { code: t, limit: i, type: a } = e;
                    if (t)
                        switch (a) {
                            case j.MAXSIZE:
                                return t === c.BW.GIF_IS_TOO_LARGE ? z(w) : t === c.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? z(i >= X ? E({ limit: Math.round(i / X) }) : I({ limit: Math.round(i / $) })) : z(y);
                            case j.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? z(S({ limit: Math.round(i / 60) })) : { text: A({ limit: Math.round(i) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : z(v);
                            case j.RESIZE:
                                return k[t];
                            case j.UPLOAD:
                                if (e.isImage) return R[t];
                                if (e.isGif) return G[t];
                                if (e.isVideo) return H[t];
                                break;
                            case j.METADATA:
                                return z(P);
                        }
                },
                Y = (e) => {
                    if (W(e)) return e;
                };
            function q(e, t = L) {
                const i = Y(e);
                if (i) {
                    const a = e.message ? `${t} ${e.message}` : t;
                    return K(i) || z(a);
                }
            }
            function J(e, t = O) {
                return e.type === o.gK.type && e.code === o.gK.NO_DIMENSIONS ? z(T) : e.type === u.hb.type && e.code === u.hb.NO_DIMENSIONS ? Z(f) : z(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => g, Uk: () => u, Xj: () => m, ZP: () => A });
            var a = i(468811),
                r = i.n(a),
                s = i(595088),
                n = i(161821),
                o = i(184605),
                l = i(716233),
                d = i(774717);
            const c = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                u = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                m = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                p = (e) => (e ? h(e) : void 0),
                h = (e) =>
                    (0, s.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${_(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                _ = (e) =>
                    (0, n.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                g = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                f = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                b = { [g.SruUpload]: f.SruUpload, [g.UploadSubmitUntilSruFinish]: f.UploadSubmitUntilSruFinish },
                w = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                I = (e, t) => ((0, o.Z)(e) && (0, o.Z)(t) ? Math.round(t - e) : void 0),
                E = () => (window.performance ? window.performance.now() : Date.now()),
                y = (e, t) => (e === l.xz.DMGif || e === l.xz.TweetGif ? w.All : (e !== l.xz.DMVideo && e !== l.xz.TweetVideo && e !== l.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? w.Short : t < 20 ? w.Medium : t < 45 ? w.Long : t < 90 ? w.XLong : t < 140 ? w.L90to140s : t < 300 ? w.L140to300s : t < 600 ? w.L300to600s : t < 1200 ? w.L600to1200s : t < 1800 ? w.L1200to1800s : t < 2700 ? w.L1800to2700s : t < 3600 ? w.L2700to3600s : t < 4500 ? w.L3600to4500s : t < 5400 ? w.L4500to5400s : t < 6300 ? w.L5400to6300s : t < 7200 ? w.L6300to7200s : t < 10800 ? w.L7200to10800s : t < 14400 ? w.L10800to14400s : w.LGT14400s);
            class A {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = r().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: a } = e;
                            return `${t ? c.Remote : c.LocalFile}:${i}:${y(i, a)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = I(this._startTimes[e], E());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const a = this._getKey(e, t);
                            this._record(a, i, e === g.Full ? this._metadata : e === g.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = E()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = I(this._startTimes[g.Full], E());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[g.Full] && (e -= this._pausedDuration[g.Full]);
                        const t = this._getKey(g.Full, "submit");
                        this._record(t, e, this._metadata);
                    }
                }
                setMetadata(e) {
                    this._metadata = { ...this._metadata, ...e };
                }
                setFileMetadata(e) {
                    this._fileMetadata = { ...this._fileMetadata, ...e };
                }
                toggleOperationPaused(e, t) {
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = E();
                    else if (!t) {
                        const t = I(this._pauseTimes[e], E());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && b[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const a = { duration_ms: t, impression_id: this._impressionId, metadata: p(i) };
                    d.IM(e, a, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, i) => {
            i.d(t, { BW: () => g, SB: () => y, TO: () => S, Tz: () => b, U$: () => E, ff: () => f, vC: () => I, vn: () => A, xz: () => w, y$: () => h });
            var a = i(182056),
                r = i(323265),
                s = i(540387);
            const n = 1024,
                o = 1024 * n,
                l = 1,
                d = 4096,
                c = 2048,
                u = 400,
                m = 1500,
                p = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                h = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                _ = 600,
                g = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                f = { VIDEO_IS_TOO_LONG: 1 },
                b = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                w = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                I = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                E = (e) => {
                    const { height: t, left: i, width: a } = e,
                        r = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + a / 2)},${r},1,1`;
                };
            function y(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function A(e, t, i, g, f) {
                const b = g?.location,
                    w = y({ featureSwitches: e, userClaims: t });
                let E, A;
                if (i.isSubtitles) E = 0;
                else if (i.isGif)
                    switch (b) {
                        case I.Avatar:
                            E = e.getNumberValue("media_async_upload_max_avatar_gif_size", p.Avatar_Gif) * o;
                            break;
                        case I.Dm:
                        case I.Tweet:
                        default:
                            E = e.getNumberValue("media_async_upload_max_gif_size", p.Gif) * o;
                    }
                else {
                    if (!(i instanceof s.ZP))
                        return (function (e, t, i) {
                            let s;
                            switch (t) {
                                case I.Avatar:
                                    s = u;
                                    break;
                                case I.CommunityBanner:
                                case I.ListBanner:
                                case I.ProfileBanner:
                                    s = m;
                                    break;
                                default:
                                    s = r.ZP.isDesktopOS() ? d : c;
                            }
                            const l = e.getNumberValue("media_async_upload_max_image_size", p.Image) * o;
                            return a.Z.getConnectionInfo().then(
                                (a) => {
                                    let o = l;
                                    return "slow-2g" === a.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * n) : i || "2g" === a.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * n) : "3g" === a.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * n) : "4g" !== a.effectiveType || r.ZP.isDesktopOS() || t !== I.Tweet || (s = d), { maxDimension: s, maxFileSize: Math.min(l, o) };
                                },
                                () => ({ maxDimension: s, maxFileSize: l }),
                            );
                        })(e, b, f);
                    if (1 === w) {
                        if ("dm" === b) A = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", _);
                        else A = e.getNumberValue("media_async_upload_longer_video_max_video_duration", h.Duration[w]) * l;
                        E = e.getNumberValue("media_async_upload_longer_video_max_video_size", h.Size[w]) * o;
                    } else (A = e.getNumberValue("media_async_upload_max_video_duration", h.Duration[w]) * l), (E = e.getNumberValue("media_async_upload_max_video_size", h.Size[w]) * o);
                }
                return Promise.resolve({ maxFileSize: E, maxDuration: A });
            }
            function S(e) {
                return !(r.ZP.isIOS() && e.size > 3e8);
            }
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => a, ZP: () => n, h_: () => r });
            i(543673), i(240753), i(128399);
            const a = [".srt", "text/plain", ""],
                r = (e) => -1 !== a.indexOf(e.type),
                s = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class n {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([s(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        540387: (e, t, i) => {
            i.d(t, { Wv: () => r, ZP: () => n, hb: () => s, jn: () => a });
            i(571372), i(543673), i(240753), i(128399);
            const a = ["video/mp4", "video/quicktime"],
                r = (e) => -1 !== a.indexOf(e.type),
                s = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class n {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((i, a) => {
                            const r = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = s.type), a(i);
                                },
                                n = document.createElement("video");
                            (n.onloadedmetadata = () => {
                                t || (n.videoWidth && n.videoHeight) ? i(n) : r("Video lacks height or width", s.NO_DIMENSIONS);
                            }),
                                (n.onerror = () => {
                                    r("Error loading image", s.LOAD_FAILED);
                                }),
                                (n.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: a } = e;
                        return (this.width = a), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === a)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        537052: (e, t, i) => {
            i.d(t, { Hf: () => n, OA: () => r, mL: () => s });
            i(571372);
            var a = i(837880);
            function r(e, t) {
                const i = (0, a.Z)(t / 100, 0, 1),
                    r = o[e],
                    s = i * (r.max - r.min);
                return d(r.min + s, 3);
            }
            function s(e) {
                const t = (0, a.Z)(e, 0, 1);
                for (let e = 0; e < l.length; e++) {
                    const i = l[e];
                    if ((0 === e && t <= i.min) || (e === l.length - 1 && t >= i.max) || (t >= i.min && t < i.max)) {
                        let e = c(t, i.min, i.max);
                        return (e = d(e, 3)), [i.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const n = Object.freeze({ uploading: "uploading", processing: "processing" }),
                o = { [n.uploading]: { name: n.uploading, min: 0, max: 0.5 }, [n.processing]: { name: n.processing, min: 0.5, max: 1 } },
                l = [o.uploading, o.processing];
            function d(e, t) {
                const i = Math.pow(10, t);
                return Math.round(e * i) / i;
            }
            function c(e, t, i) {
                return (e - t) / (i - t);
            }
            !(function () {
                let e,
                    t = 0;
                for (const i of l) {
                    if (((t += i.max - i.min), i.max <= i.min)) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX MUST BE GREATER THAN MIN [${e}]`);
                    }
                    if (i.min < 0) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MIN IS LESS THAN ZERO [${e}]`);
                    }
                    if (i.max > 1) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX IS GREATER THAN ONE [${e}]`);
                    }
                    if (e && i.min !== e.max) {
                        const t = JSON.stringify({ stage: i, last_stage: e });
                        throw new Error(`INVALID STAGE MIN MUST EQUAL PREVIOUS MAX [${t}]`);
                    }
                    e = i;
                }
                if (1 !== t) {
                    const e = JSON.stringify({ total: t });
                    throw new Error(`INVALID STAGE TOTAL MUST EQUAL EXACTLY 1.0 [${e}]`);
                }
            })();
        },
        111531: (e, t, i) => {
            i.d(t, { EM: () => u, K3: () => c, Xp: () => m });
            var a = i(882127),
                r = i(498510),
                s = (i(585488), i(277660)),
                n = i.n(s),
                o = i(708482),
                l = i(944681),
                d = i(535338);
            function c(e) {
                return (function (e) {
                    return (0, o.s)(e, h, {});
                })(e).then(
                    (e) =>
                        !p(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function u() {
                return p((0, d.p)(h, {}));
            }
            function m(e) {
                return (function (e) {
                    const t = e.user_results?.result;
                    if ("User" === t?.__typename) {
                        const e = t?.legacy_extended_profile?.birthdate;
                        if (e) {
                            const { day: t, month: i, year: a } = e;
                            return (0, l.k)(a, i, t, !0);
                        }
                    }
                    return !0;
                })(n()(_, e));
            }
            function p(e) {
                const t = e?.viewer?.user_results?.result;
                if ("User" === t?.__typename) {
                    const e = t?.legacy_extended_profile?.birthdate;
                    if (e) {
                        const { day: t, month: i, year: a } = e;
                        return (0, l.k)(a, i, t, !0);
                    }
                }
                return !0;
            }
            const h = r.Z,
                _ = a.Z;
        },
        497294: (e, t, i) => {
            i.d(t, { $i: () => me, C4: () => K, G$: () => Y, Q6: () => X, TU: () => J, WU: () => Q, _B: () => re, _J: () => ie, _T: () => R, dD: () => ae, gz: () => k, m3: () => V, o6: () => oe, oZ: () => pe, pJ: () => ce, rA: () => $ });
            i(571372), i(136728);
            var a = i(99107),
                r = i(411916),
                s = i.n(r),
                n = i(10622),
                o = i.n(n),
                l = i(111677),
                d = i.n(l),
                c = i(205074),
                u = i(653843),
                m = i(514354),
                p = i(908478),
                h = i(417144),
                _ = i(904940),
                g = i(918621),
                f = i(829053),
                b = i(716233),
                w = i(166677),
                I = i(221562),
                E = i(755296),
                y = i(946208),
                A = i(540387),
                S = i(653798),
                v = i(499627),
                C = i(917799),
                U = i(390387),
                x = i(38562),
                T = i(601576),
                M = i(111531),
                D = i(537052);
            const O = d().g40ff2b4,
                L = "mediaUpload",
                P = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                F = `rweb/${L}`,
                N = [],
                z = "upload";
            class B extends Error {
                constructor(e, { code: t, isGif: i, isImage: a, isVideo: r, type: s }) {
                    super(e), (this.code = t), (this.type = s), (this.isGif = !!i), (this.isImage = !!a), (this.isVideo = !!r);
                }
            }
            function Z(e, t, i) {
                let r = null,
                    s = {},
                    n = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (n = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, E.s)().isLoggedIn)) {
                    const e = (0, g.ej)({ cookieName: a.qj, featureSwitches: t });
                    if (e) {
                        const t = i?.actAsUserId;
                        n.sruHeaders = { ...(0, f.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, a.Oj)(!1), [a.d4]: e };
                    }
                }
                return (
                    i?.useLongVideoEndpoint && (n.uploadUrl = P),
                    {
                        upload(t) {
                            (r = new h.Z(e, n)), (s = t), r.upload(s);
                        },
                        amendUpload(e) {
                            (s = { ...s, ...e }), r && r.upload(s);
                        },
                        uploadExternalMedia(t, i, a, s) {
                            (r = new h.Z(e, n)), r.uploadExternalMedia(t, i, a, s);
                        },
                        cancel() {
                            r && r.cancel();
                        },
                    }
                );
            }
            const k = (e) => e[L],
                V = (e, t) => {
                    const i = Array.isArray(t) ? t : [t];
                    return e[L].filter((e) => i.some((t) => t === e.id));
                },
                R = (e, t) => {
                    const i = V(e, t);
                    if (!i.length) return 0;
                    const a = i.reduce((e, t) => e + (t.uploadProgress || 0), 0) / i.length;
                    return Math.min(a, 1);
                },
                G = "rweb/mediaUpload/ADD_MEDIA",
                H = (e) => ({ payload: e, type: G });
            let j = 1;
            function $(e, t) {
                return (i, a, { featureSwitches: r, relayEnvironment: s }) => {
                    const n = Array.from(e, (e) => {
                            if ((0, A.Wv)(e)) {
                                const i = new A.ZP(e, t.isAmplify);
                                if ((0, b.TO)(e)) {
                                    const e = r.isTrue("responsive_web_hevc_upload_preview_enabled") && r.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return i.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(i);
                            }
                            return (0, y.h_)(e) ? Promise.resolve(new y.ZP(e)) : new c.ZP(e).withDimensionsAndOrientation();
                        }),
                        l = i((e, t, { relayEnvironment: i }) =>
                            o()(i, S.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, M.K3)(s));
                    return Promise.all(n)
                        .then(
                            (e) => {
                                const a = i(
                                    (function (e, t) {
                                        return (i, a, { featureSwitches: r, userClaims: s }) => {
                                            const { uploadIds: n = [], altTexts: o = [] } = t,
                                                l = (0, x.IX)(a()),
                                                d = (Array.isArray(e) ? e : [e]).map((e, d) => {
                                                    const m = r.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let p;
                                                    t.location && (p = he(t.location, e, !1, { featureSwitches: r, userClaims: s }));
                                                    const h = e instanceof A.ZP ? e.duration : void 0,
                                                        _ = e instanceof c.ZP ? e.orientation : void 0,
                                                        g = m && p ? new I.ZP({ isExternal: !1, mediaCategory: p, videoDuration: h }, l) : void 0,
                                                        f = r.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof c.ZP,
                                                        w = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof A.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const i = document.createElement("canvas"),
                                                                            { height: a, width: r } = e;
                                                                        (i.width = r), (i.height = a);
                                                                        i.getContext("2d").drawImage(t, 0, 0, r, a), (e.thumbnail = i.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        g?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: h, width: e.width, height: e.height, orientation: _ }),
                                                        (0, b.vn)(r, s, e, t, l).then(({ maxDimension: l, maxFileSize: m }) => {
                                                            const p = e.isImage && e instanceof c.ZP && (0, u.m2)(e, { maxFileSize: m, maxDimension: l, jpgPixelsPerByteForResize: w }),
                                                                h = (0, b.SB)({ featureSwitches: r, userClaims: s }),
                                                                _ = { useLongVideoEndpoint: e.isVideo && h >= 1, actAsUserId: (0, U.dY)(a()) },
                                                                I = p ? void 0 : Z(e.fileHandle, r, _),
                                                                E = W({ originalMediaFile: e, mediaFile: e, mediaFileHash: f ? void 0 : null, needsProcessing: p, location: t.location, uploadId: n[d] ?? "", reporter: g, uploader: I, mediaMetadata: { altText: o[d] }, abortController: f ? new AbortController() : void 0 });
                                                            return f && ge(i, a, E.id, e.fileHandle, E.reporter, E.abortController), E;
                                                        })
                                                    );
                                                });
                                            return Promise.all(d).then((e) => (i(H(e)), e));
                                        };
                                    })(e, t),
                                );
                                return a;
                            },
                            (e) => {
                                const t = (0, w.vK)(e);
                                return t && i((0, T.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            l
                                .then((t) => {
                                    if (t) for (const t of e) i(re(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const X =
                ({ height: e, mediaCategory: t, mediaType: i, previewMediaType: a, previewUrl: r, sourceUrl: s, stillMediaUrl: n, width: o }) =>
                (l, d, { featureSwitches: c }) => {
                    const u = c.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new I.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    u?.reportOperationStart(I.BX.Full, !0);
                    const m = { actAsUserId: (0, U.dY)(d()) },
                        p = W({ externalMediaDetails: { mediaCategory: t, mediaType: i, previewUrl: r || s, previewMediaType: a || i, sourceUrl: s, stillMediaUrl: n, width: o, height: e }, reporter: u, uploader: Z(null, c, m) });
                    return l(H(p)), u?.toggleOperationPaused(I.BX.Full, !0), [p];
                };
            function W(e) {
                const t = { ...e, id: j, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (j += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const K =
                    (e) =>
                    (t, i, { featureSwitches: a, userClaims: r }) => {
                        const [s] = V(i(), e);
                        if (!s) return Promise.reject(new Error("media item not found"));
                        const { abortController: n, cropData: o, id: l, location: d, mediaFile: m, needsProcessing: p, originalMediaFile: h } = s;
                        if (!h) return Promise.reject(new Error("media item not found"));
                        const _ = a.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            g = (0, x.IX)(i()),
                            f = { location: d };
                        return (0, b.vn)(a, r, h, f, g).then((e) => {
                            const r = { cropData: o, jpgPixelsPerByteForResize: _, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                d = e.maxFileSize || 0,
                                g = e.maxDuration || 0;
                            if (h.isImage && h instanceof c.ZP)
                                return p
                                    ? (0, u.ZP)(h, r)
                                          .then(
                                              (e) => new c.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (n?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              h !== m && m && m.dispose(), s.uploader && s.uploader.cancel && s.uploader.cancel();
                                              const r = { actAsUserId: (0, U.dY)(i()) },
                                                  n = Z(e.fileHandle, a, r),
                                                  o = t(ie({ id: l, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: n }));
                                              return (s.uploadId || s.uploading) && t(me([l])), o;
                                          })
                                    : Promise.resolve(s);
                            if (h.size > d) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", h.isGif ? b.BW.GIF_IS_TOO_LARGE : b.BW.VIDEO_IS_TOO_LARGE, d]), Promise.reject(e);
                            }
                            if (h.isVideo && h instanceof A.ZP && h.duration > g) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", b.ff.VIDEO_IS_TOO_LONG, g]), Promise.reject(e);
                            }
                            return Promise.resolve(s);
                        });
                    },
                Y = (e, t) => (i, a) => {
                    const { onFailure: r } = t,
                        n = [];
                    return new Promise((t, a) => {
                        const o = (e) => {
                            if (!e.length) return t(n);
                            const [a] = e;
                            s()(() => {
                                a.reporter?.reportOperationStart(I.BX.Full, !0),
                                    a.reporter?.reportOperationStart([I.BX.Processing, I.BX.Metadata]),
                                    a.reporter?.reportOperationComplete(I.BX.Metadata, I.Uk.Complete),
                                    i(K(a.id)).then(
                                        (t) => {
                                            n.push(t), t?.reporter?.reportOperationComplete(I.BX.Processing, I.Uk.Success), t?.reporter?.toggleOperationPaused(I.BX.Full, !0), o(e.slice(1));
                                        },
                                        (t) => {
                                            const s = (0, w.ZP)(t, O);
                                            s && i((0, T.fz)(s));
                                            const { code: n, message: l, name: d, type: c } = t;
                                            a.reporter?.setMetadata({ reason: { name: d, message: l, code: n } });
                                            const m = "maxsize" === c || "maxduration" === c || ("resize" === c && (n === u.Y7.FILE_IS_NOT_AN_IMAGE || n === u.Y7.GIF_IS_TOO_LARGE)) ? I.Uk.Invalid : I.Uk.Failure;
                                            a.reporter?.reportOperationComplete([I.BX.Full, I.BX.Processing], m), r && r(a.id), o(e.slice(1));
                                        },
                                    );
                            });
                        };
                        o(e);
                    });
                },
                q = "rweb/mediaUpload/REMOVE_MEDIA",
                J = (e) => ({ payload: Array.isArray(e) ? e : [e], type: q });
            function Q(e) {
                return (t, i) => {
                    V(i(), e).forEach((e) => {
                        const { abortController: t, mediaFile: i, originalMediaFile: a, reporter: r, uploader: s } = e;
                        t?.abort(), s && s.cancel && s.cancel(), r?.reportOperationComplete(I.BX.Full, I.Uk.Cancel), i && i.dispose(), a && a.dispose();
                    }),
                        t(J(e));
                };
            }
            const ee = "rweb/mediaUpload/UPDATE_MEDIA",
                te = (e) => ({ payload: e, type: ee });
            function ie(e) {
                return (t, i) => {
                    t(te(e));
                    const [a] = V(i(), e.id);
                    return a;
                };
            }
            function ae(e) {
                return (t, i) => {
                    const [a] = V(i(), e);
                    a.uploader?.cancel(), t(me(e));
                };
            }
            function re(e, t) {
                return (i) => i(ie({ id: e, mediaMetadata: t }));
            }
            const se = "SEND_METADATA",
                ne = C.dg(F, se);
            function oe(e) {
                return (t, i, { api: a }) => C._O(t, { params: e, request: a.withEndpoint(_.Z).metadataCreate })({ actionTypes: ne, context: se });
            }
            const le = "ATTACH_SUBTITLES",
                de = C.dg(F, le);
            function ce(e) {
                return (t, i, a) => {
                    const { subtitlesDisplayName: r, subtitlesLang: s, subtitlesMediaUploadId: n, videoMediaUploadId: o } = e,
                        { api: l, featureSwitches: d, userClaims: c } = a,
                        u = _e(e.mediaItem, !1, { featureSwitches: d, userClaims: c }) || "";
                    return C._O(t, { params: { videoMediaUploadId: o, videoMediaCategory: u, subtitlesLang: s, subtitlesMediaUploadId: n, subtitlesDisplayName: r }, request: l.withEndpoint(_.Z).attachSubtitles })({ actionTypes: de, context: le });
                };
            }
            const ue = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const me =
                    (e, t = Object.freeze({})) =>
                    (i, a, { featureSwitches: r, userClaims: s }) => {
                        const n = V(a(), e),
                            o = (e) => i(ie(e));
                        function l(e, i = !1) {
                            const a = r.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: n, id: d, mediaFile: u, mediaFileHash: m, reporter: p, uploader: _ } = e,
                                g = a && u && u.isImage && u instanceof c.ZP,
                                f = void 0 === m;
                            return (
                                p?.toggleOperationPaused(I.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(o({ id: d, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (p?.reportOperationStart(I.BX.UploadSubmitUntilSruFinish), p?.reportUploadSubmit(), g && f && n?.abort(), e.uploading && _ && _.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ue(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : _
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: i, mediaItem: a, updateMediaItem: r, uploadMediaItem: s, uploadOptions: n, userClaims: o } = e,
                                                      { abortController: l, externalMediaDetails: d, id: c, reporter: u, uploader: m } = a,
                                                      p = new Promise((e, p) => {
                                                          const _ = (t) => {
                                                                  u?.setMetadata({ mediaId: t }), u?.reportOperationComplete([I.BX.Full, I.BX.UploadSubmitUntilSruFinish], I.Uk.Success), e(r({ id: c, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              g = (e, t, i) => {
                                                                  u?.setMetadata({ mediaId: i }), "uploading" === t ? (r({ id: c, uploadProgress: D.OA("uploading", e) }), 100 === e && u?.reportOperationComplete(I.BX.SruUpload, I.Uk.Success)) : "processing" === t && r({ id: c, uploadProgress: D.OA("processing", e) });
                                                              },
                                                              f = () => {
                                                                  u?.toggleOperationPaused(I.BX.Full, !0);
                                                              },
                                                              w = (t) => {
                                                                  const { code: n, detail_message: o, maxSizeBytes: d, mediaId: _, message: g, name: f } = t;
                                                                  if (a.mediaFile?.isGif && !i && n === b.Tz.INVALID_MEDIA_CODE) m?.amendUpload({ pauseBeforeFinalize: !1 }), r({ id: c, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), s(a, !0).then(e).catch(p);
                                                                  else {
                                                                      l?.abort(), r({ id: c, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: n, message: g, detail_message: o, maxSizeBytes: d }, uploadPromise: void 0 });
                                                                      const e = new B(g ? `${g}` : `Media upload failed [Error code: ${n}]${_ ? ` ${_}` : ""}`, { code: n, type: z, isGif: !!a.externalMediaDetails || (a.mediaFile && a.mediaFile.isGif), isImage: a.mediaFile && a.mediaFile.isImage, isVideo: a.mediaFile && a.mediaFile instanceof A.ZP && a.mediaFile.isVideo }),
                                                                          t = n === h.d.CANCELED ? I.Uk.Cancel : I.Uk.Failure;
                                                                      u?.setMetadata({ reason: { name: f, message: g, code: n } }), u?.reportOperationComplete([I.BX.Full, I.BX.SruUpload, I.BX.UploadSubmitUntilSruFinish], t), p(e);
                                                                  }
                                                              };
                                                          if (d && a.uploader) a.uploader?.uploadExternalMedia(d.sourceUrl, d.mediaType, d.mediaCategory, { success: _, progress: g, error: w, mediaItem: a });
                                                          else if (a.uploader) {
                                                              const { extraInitParams: e = "", preUpload: r = !1 } = n,
                                                                  { enable_1080p_variant: s, mediaFile: l, mediaFileHash: d } = a,
                                                                  c = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  m = l && l.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  p = _e(a, i, { featureSwitches: t, userClaims: o }),
                                                                  h = p ? `&media_category=${p}` : "";
                                                              u?.reportOperationStart(I.BX.SruUpload), a.uploader?.upload({ success: _, progress: g, pause: f, error: w, extraInitParams: e + h, extraFinalizeParams: d ? `&original_md5=${d}` : void 0, trimRanges: ue(a), pauseBeforeFinalize: r, withMultiRequests: m, withMultiRequestsDefaultPoolSize: t.getNumberValue("rweb_media_multi_requests_default_pool_size", l && l.size > 2e9 ? 4 : 1), enable_1080p_variant: !c || s, mediaItem: a });
                                                          }
                                                      });
                                                  return r({ id: c, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: p }), p;
                                              })({ mediaItem: e, updateMediaItem: o, uploadMediaItem: l, gifAsStaticImage: i, uploadOptions: t, featureSwitches: r, userClaims: s })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const d = n.map((e) => l(e));
                        return Promise.all(d).catch((e) => {
                            throw (e.type || (e.type = z), e);
                        });
                    },
                pe = (e, t) => {
                    const i = me(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        i(...e).catch((e) => {
                            if (e.code !== h.d.CANCELED) throw e;
                        });
                };
            function he(e, t, i, a) {
                const r = e === b.vC.Tweet || e === b.vC.TwitterArticle,
                    s = e === b.vC.TwitterArticle;
                if (t.isSubtitles) return b.xz.Subtitles;
                if (t.isGif && !i) return r ? b.xz.TweetGif : b.xz.DMGif;
                if (t.isAmplify) return b.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: i, userClaims: n } = a,
                        o = (0, b.SB)({ featureSwitches: i, userClaims: n }),
                        l = i.getNumberValue("media_async_upload_amplify_duration_threshold", b.y$.Duration[o]);
                    return "number" == typeof o && 1 === o && e > l ? b.xz.AmplifyVideo : s ? b.xz.TweetVideo : r ? b.xz.AmplifyVideo : b.xz.DMVideo;
                }
                return r ? b.xz.TweetImage : b.xz.DMImage;
            }
            function _e(e, t, i) {
                const { location: a, mediaFile: r } = e;
                if (!a || !r) return null;
                switch (a) {
                    case b.vC.Tweet:
                    case b.vC.Dm:
                    case b.vC.TwitterArticle:
                        return he(a, r, t, i);
                    case b.vC.CommunityBanner:
                        return b.xz.CommunityBanner;
                    case b.vC.ListBanner:
                        return b.xz.ListBanner;
                    case b.vC.ProfileBanner:
                        return b.xz.ProfileBanner;
                    default:
                        return null;
                }
            }
            const ge = (e, t, i, a, r, s) => {
                r?.reportOperationStart(I.BX.Hash, !0),
                    r?.setMetadata({ hashState: I.Xj.InProgress }),
                    (0, m.Q)(a, s)
                        .then((a) => {
                            const [s] = V(t(), i);
                            if (!s) {
                                throw new B("Media item was removed", { code: m.S.HASHING_ABORTED, type: z, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(ie({ id: i, mediaFileHash: a, abortController: void 0 }));
                            const { uploadPromise: n, uploader: o, uploading: l } = s;
                            n && l && o && o.amendUpload({ extraFinalizeParams: a ? `&original_md5=${a}` : void 0 }), r?.setMetadata({ hashState: I.Xj.Complete }), r?.reportOperationComplete(I.BX.Hash, I.Uk.Success);
                        })
                        .catch((a) => {
                            const [s] = V(t(), i);
                            s && e(ie({ id: i, mediaFileHash: null, abortController: void 0 })), a.code === m.S.HASHING_ABORTED ? (r?.setMetadata({ hashState: I.Xj.Canceled }), r?.reportOperationComplete(I.BX.Hash, I.Uk.Cancel)) : (r?.setMetadata({ hashState: I.Xj.Failure }), r?.reportOperationComplete(I.BX.Hash, I.Uk.Failure));
                        });
            };
            v.Z.register({
                [L]: function (e = N, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case G:
                            return t.payload ? e.concat(t.payload) : e;
                        case q: {
                            const i = t.payload;
                            return i && i.length ? e.filter((e) => -1 === i.indexOf(e.id)) : e;
                        }
                        case ee: {
                            const i = t.payload;
                            return i
                                ? e.map((e) => {
                                      if (e.id === i.id) {
                                          const t = e.needsProcessing || (i.hasOwnProperty("cropData") && !(0, p.Z)(i.cropData, e.cropData));
                                          return { ...e, needsProcessing: t, uploader: t ? void 0 : e.uploader, ...i };
                                      }
                                      return e;
                                  })
                                : e;
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        653798: (e, t, i) => {
            i.d(t, { S: () => r });
            var a = i(326439);
            i(585488);
            const r = a.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-9f4db315.5e1e3b3a.js.map
