"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-e019dbda"],
    {
        784380: (e, t, n) => {
            n.d(t, { Z: () => m });
            n(136728);
            var r = n(444770),
                o = n(202784),
                a = (n(585488), n(277660)),
                i = n.n(a),
                s = n(642153);
            const l = r.Z,
                c = ({ community: e, style: t, userAvatarSize: n = "large" }) => {
                    const r = i()(l, e),
                        { members_facepile_results: a } = r,
                        c = o.useMemo(
                            () =>
                                ((e) =>
                                    e.reduce((e, { result: t }) => {
                                        if ("User" === t?.__typename) {
                                            const n = t.avatar?.image_url;
                                            n && e.push(n);
                                        }
                                        return e;
                                    }, []))(a),
                            [a],
                        );
                    return c.length > 0 ? o.createElement(s.Z, { style: t, userAvatarSize: n, userAvatarUrls: c }) : null;
                },
                m = o.memo(c);
        },
        281598: (e, t, n) => {
            n.d(t, { IN: () => r, ZC: () => o, eE: () => v, ZP: () => g, L4: () => Z });
            const r = Object.freeze({ Open: "CommunityOpenMembershipSettings", Restricted: "CommunityRestrictedMembershipSettings" }),
                o = Object.freeze({ Member: "MemberInvitesAllowed", Moderator: "ModeratorInvitesAllowed", Admin: "AdminInvitesAllowed" });
            var a = n(202784),
                i = n(731708),
                s = n(101890),
                l = n(954110),
                c = n(392237),
                m = n(111677),
                d = n.n(m);
            const u = [
                    { label: d().fd00a76a, value: r.Open, helpText: d().a0a16d38 },
                    { label: d().ce0523a8, value: r.Restricted, helpText: d().i1aad6ec },
                ],
                p = d().c85960a0,
                h = d().ca373cd2,
                y = d().dfdcc6b4,
                E = (e) => {
                    const { access: t, invitesPolicy: n } = e.state,
                        { setAccess: c, setInvitesPolicy: m } = e.setters,
                        d = !e.hideInvitePolicy,
                        E = a.useCallback(
                            (e, t) => {
                                c(t);
                            },
                            [c],
                        ),
                        g = a.useCallback(
                            (e, t) => {
                                m(t ? o.Member : o.Moderator);
                            },
                            [m],
                        );
                    return a.createElement(a.Fragment, null, a.createElement(i.ZP, { color: "gray700", size: "subtext2", style: f.settingsItem }, y), a.createElement(s.Z, { name: "membershipSetting", onChange: E, options: u, value: t }), d && t === r.Restricted && a.createElement(l.Z, { checked: n === o.Member, helpText: h, label: p, name: "allowInvites", onChange: g }));
                },
                g = a.memo(E),
                f = c.default.create((e) => ({ settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                b = { [r.Open]: o.Member, [r.Restricted]: o.Moderator },
                _ = { access: r.Open, invitesPolicy: b[r.Open] };
            function Z(e = _) {
                const [t, n] = a.useState(e.access),
                    [r, o] = a.useState(e.invitesPolicy),
                    i = a.useMemo(
                        () => ({
                            setAccess(e) {
                                o(b[e]), n(e);
                            },
                            setInvitesPolicy: o,
                        }),
                        [],
                    );
                return [a.useMemo(() => ({ access: t, invitesPolicy: r }), [t, r]), i];
            }
            function v(e) {
                let t, n;
                switch (e.access) {
                    case r.Open:
                        t = "Open";
                        break;
                    case r.Restricted:
                    default:
                        t = "RestrictedJoinRequestsRequireModeratorApproval";
                }
                switch (e.invitesPolicy) {
                    case o.Moderator:
                        n = "ModeratorInvitesAllowed";
                        break;
                    case o.Member:
                        n = "MemberInvitesAllowed";
                        break;
                    case o.Admin:
                        n = "AdminInvitesAllowed";
                        break;
                    default:
                        n = "NoInvitesAllowed";
                }
                return { joinPolicy: t, invitesPolicy: n };
            }
        },
        103686: (e, t, n) => {
            n.d(t, { Z: () => ye });
            n(136728);
            var r = n(202784),
                o = n(325686),
                a = n(811176),
                i = n(420412),
                s = n(537392),
                l = n(392237),
                c = n(154003),
                m = n(247056),
                d = n(111677),
                u = n.n(d),
                p = n(511323),
                h = n(415506),
                y = n(530813),
                E = n(395067),
                g = n(731708),
                f = n(891198),
                b = n(966886),
                _ = n(708852),
                Z = n(673510),
                v = n(872405),
                C = n(30899),
                I = n(124964),
                w = n(668214),
                M = n(502909),
                S = n(600823);
            const P = (0, M.ZP)({ namespace: "communityReports" }),
                T = S.Z.register(P);
            var A = n(919022);
            const k = (e, t) => {
                    const n = t.tweetCase?.reports;
                    return (n ? T.selectMany(e, n) : []).map((t) => {
                        const n = t.user;
                        return { ...t, reporter: A.ZP.select(e, n) };
                    });
                },
                x = (0, w.Z)().propsFromState(() => ({ reports: k })),
                N = (e, t) => {
                    const n = t ? Math.max(0, e - 1) : e;
                    return (({ count: e, formattedCount: t, isAutoReportedByX: n }) => (n ? (e > 0 ? r.createElement(u().I18NFormatMessage, { $i18n: "j5602f3b" }, r.createElement(g.ZP, { color: "primary" }, u().e2bc5db0), r.createElement(g.ZP, { color: "primary" }, u().d0a1b248({ count: e, formattedCount: t }))) : r.createElement(u().I18NFormatMessage, { $i18n: "dd132edd" }, r.createElement(g.ZP, { color: "primary" }, u().cd4d48d2))) : r.createElement(u().I18NFormatMessage, { $i18n: "je0779b7" }, r.createElement(g.ZP, { color: "primary" }, u().ff0f742a({ count: e, formattedCount: t })))))({ count: n, formattedCount: f.ZP.getFormattedCount(n), isAutoReportedByX: t });
                },
                F = (e) => {
                    const { report: t, withBottomBorder: n } = e,
                        { created_at: a, reporter: i } = t,
                        s = r.createElement(b.Z, { timestamp: a }),
                        l = (0, _.Y4)();
                    return i ? r.createElement(o.Z, { style: n ? O.bottomBorder : null }, r.createElement(Z.ZP, { avatarUri: i.profile_image_url_https, decoration: s, displayMode: "UserCompact", isBlueVerified: i.is_blue_verified, isProtected: i.protected, isVerified: i.verified, name: i.name, screenName: i.screen_name, style: l ? O.userCell : void 0, userId: i.id_str }), r.createElement(v.Z, { avatarCell: null }, r.createElement(g.ZP, { color: "gray700", size: "subtext2", style: O.rule }, t.rule.name))) : null;
                },
                R = x((e) => {
                    const [t, n] = r.useState(!1),
                        { reports: a, tweetCase: i } = e,
                        { report_count: s, report_created_at_max: l } = i,
                        c = a.some((e) => "783214" === e.reporter?.id_str);
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            C.Z,
                            {
                                contentStyle: O.popover,
                                onDismiss: () => {
                                    n(!1);
                                },
                                renderContent: () =>
                                    r.createElement(
                                        o.Z,
                                        { style: O.contentContainer },
                                        a.map((e, t) => r.createElement(F, { key: e.id_str, report: e, withBottomBorder: t < a.length - 1 })),
                                    ),
                                visibilityBehavior: t ? "forceVisible" : "forceHidden",
                            },
                            r.createElement(
                                g.ZP,
                                {
                                    onPress: () => {
                                        n(!0);
                                    },
                                },
                                N(s, c),
                            ),
                        ),
                        r.createElement(I.Z, null),
                        r.createElement(b.Z, { timestamp: l }),
                    );
                }),
                O = l.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small, paddingBottom: e.spaces.space12 }, contentContainer: { paddingBottom: e.componentDimensions.gutterVertical }, popover: { maxWidth: "100%" }, userCell: { width: e.breakpoints.small }, rule: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
            var L = n(301758),
                D = n(491963),
                H = n(715729),
                B = n(189676);
            const U = (0, M.ZP)({ namespace: "communityCases" }),
                $ = {
                    keepTweet: (0, M.Tx)(U, "keepTweet", {
                        getParams: (e) => ({ tweetId: e }),
                        getApiMethod: (e) => e.withEndpoint(B.Z).keepCommunityTweet,
                        reducer: (e, t) => {
                            const { entityId: n } = t.meta;
                            return (0, H.ZP)(e, (e) => {
                                e.entities[n].isKept = !0;
                            });
                        },
                        context: "KEEP_COMMUNITY_TWEET",
                    }),
                    dismissTweet: (0, M.Tx)(U, "dismissTweet", {
                        getParams: (e) => ({ tweetId: e }),
                        getApiMethod: (e) => e.withEndpoint(B.Z).keepCommunityTweet,
                        reducer: (e, t) => {
                            const { entityId: n } = t.meta;
                            return (0, H.ZP)(e, (e) => {
                                e.entities[n].isDismissed = !0;
                            });
                        },
                        context: "KEEP_COMMUNITY_TWEET",
                    }),
                },
                z = { ...U, ...$ },
                K = S.Z.register(z);
            var W = n(836255);
            const j = (e, t) => {
                    const { tweetId: n } = t;
                    return n ? W.Z.selectHydrated(e, n) : void 0;
                },
                V = (e, t) => {
                    const { tweetId: n } = t;
                    return K.select(e, n);
                },
                q = (e, t) => {
                    const n = j(e, t);
                    return !!n && (0, D.n9)(e, n);
                },
                Y = (0, w.Z)()
                    .propsFromState(() => ({ tweet: j, tweetCase: V, disableRemoveFromCommunity: q }))
                    .propsFromActions(() => ({ keep: K.keepTweet, dismiss: K.dismissTweet }));
            var G = n(593866),
                J = n(161335),
                Q = n(833458);
            const X = Object.freeze({ Hidden: "hidden", Kept: "kept" }),
                ee = u().dca19c06,
                te = u().dd641764,
                ne = (e) => r.createElement(g.ZP, null, e),
                re = ({ screenName: e, type: t }) => {
                    switch (t) {
                        case X.Hidden: {
                            const t = ((e) => r.createElement(u().I18NFormatMessage, { $i18n: "a0071f71" }, e))(e),
                                n = [{ label: ne(t), decoration: ae }];
                            return r.createElement(G.Z, { "aria-label": ee, containerStyle: oe.container, items: n });
                        }
                        case X.Kept: {
                            const t = ((e) => r.createElement(u().I18NFormatMessage, { $i18n: "c4ec9d43" }, e))(e),
                                n = [{ label: ne(t), decoration: ie }];
                            return r.createElement(G.Z, { "aria-label": te, containerStyle: oe.container, items: n });
                        }
                        default:
                            return null;
                    }
                },
                oe = l.default.create((e) => ({ icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                ae = r.createElement(J.default, { style: oe.icon }),
                ie = r.createElement(Q.default, { style: oe.icon }),
                se = { page: "reported_tweets", component: "tweet" },
                le = u().f1d9930c,
                ce = u().a219e218,
                me = u().fa524058,
                de = u().hb21cdb6,
                ue = u().g30bc699,
                pe = u().dc7a9436,
                he = u().a51d671b,
                ye = Y((e) => {
                    const { dismiss: t, keep: n, tweet: d, tweetCase: u, tweetId: g } = e,
                        f = d?.user?.screen_name,
                        b = d?.community_id_str,
                        _ = d?.user?.id_str,
                        Z = r.useCallback(
                            (t) => {
                                if (d && f) {
                                    const n = [
                                        { text: ue({ screenName: f }), Icon: p.default, link: `/${f}` },
                                        {
                                            text: pe,
                                            Icon: h.default,
                                            link: { pathname: `/i/report/${E.C2.Tweet}/${d.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: se } },
                                            onClick: () => {
                                                t();
                                            },
                                        },
                                    ];
                                    return (
                                        !e.disableRemoveFromCommunity &&
                                            _ &&
                                            b &&
                                            n.push({
                                                text: he({ screenName: f }),
                                                Icon: y.default,
                                                link: { pathname: `/i/report/${E.C2.RemoveCommunityMember}/${_}?community_id=${b}`, state: { clientReferer: window.location.pathname, scribeNamespace: se } },
                                                onClick: () => {
                                                    t();
                                                },
                                            }),
                                        r.createElement(a.Z, { items: n, onCloseRequested: t })
                                    );
                                }
                                return null;
                            },
                            [d, f, b, _, e.disableRemoveFromCommunity],
                        ),
                        v = () => {
                            n(g);
                        },
                        C = () => {
                            t(g);
                        };
                    if (f && d?.reportingVisibility === E.az.HiddenCommunityTweet) return r.createElement(r.Fragment, null, r.createElement(re, { screenName: f, type: X.Hidden }), r.createElement(i.Z, null));
                    if (u?.isDismissed || "community_tweet_member_removed" === d?.limited_actions) return null;
                    if (f && u?.isKept) return r.createElement(r.Fragment, null, r.createElement(re, { screenName: f, type: X.Kept }), r.createElement(i.Z, null));
                    if (!u) return null;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            o.Z,
                            { style: Ee.container },
                            r.createElement(o.Z, { style: Ee.reportsBar }, r.createElement(R, { tweetCase: u }), r.createElement(m.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: Z, style: Ee.menu })),
                            r.createElement(L.Z, { tweetId: g }),
                            d
                                ? r.createElement(s.ZP, null, ({ containerHeight: t, containerWidth: n }) => {
                                      const a = n <= l.default.theme.breakpoints.small;
                                      return r.createElement(o.Z, { style: [Ee.buttons, a && Ee.buttonsMobile] }, r.createElement(c.ZP, { onPress: v, size: "large", style: [Ee.button, a && Ee.buttonMobile], type: "primaryOutlined" }, me), r.createElement(c.ZP, { link: { pathname: `/i/report/${E.C2.HideCommunityTweet}/${g}`, state: { scribeNamespace: { ...se, action: "hide_tweet" } } }, size: "large", style: [Ee.button, a && Ee.buttonMobile], type: "primaryOutlined" }, le), !e.disableRemoveFromCommunity && _ && b ? r.createElement(c.ZP, { link: { pathname: `/i/report/${E.C2.RemoveCommunityMember}/${_}?community_id=${b}`, state: { clientReferer: window.location.pathname, scribeNamespace: se } }, size: "large", style: [Ee.button, a && Ee.buttonMobile], type: "primaryOutlined" }, de) : null);
                                  })
                                : r.createElement(o.Z, { style: Ee.buttons }, r.createElement(c.ZP, { onPress: C, style: Ee.button, type: "primaryOutlined" }, ce)),
                        ),
                        r.createElement(i.Z, null),
                    );
                }),
                Ee = l.default.create((e) => ({ buttons: { flexDirection: "row", marginVertical: e.spaces.space16 }, buttonsMobile: { justifyContent: "space-between" }, button: { marginEnd: e.spaces.space12 }, buttonMobile: { flex: 1 }, container: { marginHorizontal: e.spaces.space20 }, icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, hiddenTweetContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, menu: { marginStart: "auto" }, reportsBar: { marginVertical: e.spaces.space16, flexDirection: "row" } }));
        },
        399037: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(202784),
                o = n(325686),
                a = n(844685),
                i = n(30183),
                s = n(392237),
                l = n(111677),
                c = n.n(l),
                m = n(699910),
                d = n(724328),
                u = n(71620),
                p = n(668214),
                h = n(491963);
            const y = (e, t) => {
                    const n = t.communityId;
                    return n ? h.ZP.select(e, n) : void 0;
                },
                E = (0, p.Z)()
                    .propsFromState(() => ({ community: y }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("COMMUNITY_RULES"), fetchCommunityIfNeeded: h.ZP.fetchOneIfNeeded })),
                g = c().d228a9a0;
            class f extends r.Component {
                componentDidMount() {
                    const { communityId: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: n } = this.props;
                    n(e).catch(t());
                }
                render() {
                    const { community: e, communityId: t, moderatorArea: n } = this.props;
                    if (!e || 0 === e.rules.length) return null;
                    const { name: s, rules: l } = e,
                        c = n ? l.length : 5;
                    return r.createElement(o.Z, null, r.createElement(a.Z, { text: (0, d.E)({ communityName: s }) }), r.createElement(m.Z, { badgeStyle: b.badgeStyle, limit: c, ruleContainerStyle: b.ruleContainerStyle, rules: l, withHeader: !1 }), l.length > c && r.createElement(i.Z, { link: `/i/communities/${t}/rules`, text: g, withBottomRadius: !0 }));
                }
            }
            const b = s.default.create((e) => ({ badgeStyle: { marginEnd: e.spaces.space12 }, ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: "normal" } })),
                _ = E(f);
        },
        282904: (e, t, n) => {
            n.d(t, { Z: () => oe });
            var r = n(202784),
                o = n(325686),
                a = n(731708),
                i = n(811176),
                s = n(124964),
                l = n(966886),
                c = n(247056),
                m = n(40610),
                d = n(420412),
                u = n(392237),
                p = n(111677),
                h = n.n(p),
                y = n(648539),
                E = n(775042),
                g = n(492140),
                f = n(963879),
                b = n(511323),
                _ = n(297938),
                Z = n(369676),
                v = n(323265),
                C = n(125363),
                I = n(601576),
                w = n(301758),
                M = n(668214),
                S = n(715729),
                P = n(502909),
                T = n(600823);
            const A = (0, P.ZP)({ namespace: "communityModerationLog" }),
                k = {
                    setShowRevertedDialog: (0, P.Tx)(A, "setShowRevertedDialog", {
                        getParams: (e) => ({ logId: e }),
                        reducer: (e, t) => {
                            const { entityId: n } = t.meta;
                            return (0, S.ZP)(e, (e) => {
                                e.entities[n].should_show_reverted_dialog = !0;
                            });
                        },
                        context: "SET_SHOW_REVERTED_DIALOG",
                    }),
                },
                x = { ...A, ...k },
                N = T.Z.register(x);
            var F = n(836255);
            const R = (e, t) => {
                    const { logIdentifier: n } = t,
                        r = N.select(e, n),
                        o = r?.tweet_ref_results?.result?.rest_id;
                    return o ? F.Z.selectHydrated(e, o) : void 0;
                },
                O = (e, t) => {
                    const { logIdentifier: n } = t;
                    return N.select(e, n);
                },
                L = (0, M.Z)()
                    .propsFromState(() => ({ tweet: R, moderationLog: O }))
                    .propsFromActions(() => ({ setShowRevertedDialog: N.setShowRevertedDialog }));
            var D = n(282863),
                H = (n(585488), n(351743)),
                B = n.n(H),
                U = n(154003),
                $ = n(833458);
            const z = h().f6530972,
                K = h().j68fc824,
                W = h().j9541e18,
                j = D.Z,
                V = (e) => {
                    const { communityId: t, isAlreadyReverted: n, isRevertLog: a, logIdentifier: i, onRevertError: s, setShowRevertedDialog: l, shouldShowRevertedDialog: c, userScreenName: m } = e,
                        [d] = B()(j),
                        u = r.useCallback(() => {
                            d({
                                variables: { logIdentifier: i },
                                onCompleted(e) {
                                    l(i);
                                },
                                updater(e, t) {},
                                onError: s,
                            });
                        }, [d, i, s, l]);
                    return c || a || n ? r.createElement(o.Z, { style: q.buttons }, r.createElement(U.ZP, { icon: r.createElement($.default, null), size: "small", style: q.button, type: "secondaryFilled" }, K), r.createElement(U.ZP, { link: `/i/communities/${t}/search/?q=(from:${m})`, size: "small", style: q.button, type: "primaryOutlined" }, W)) : r.createElement(o.Z, { style: q.buttons }, r.createElement(U.ZP, { onPress: u, size: "small", style: q.button, type: "primaryOutlined" }, z), r.createElement(U.ZP, { link: `/i/communities/${t}/search/?q=(from:${m})`, size: "small", style: q.button, type: "primaryOutlined" }, W));
                },
                q = u.default.create((e) => ({ buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space4, marginBottom: e.spaces.space4 }, button: { alignSelf: "flex-start", flex: 1, marginEnd: e.spaces.space1, marginStart: e.spaces.space1 } })),
                Y = h().e32e7e1a,
                G = h().ab5a91a4,
                J = h().b53fb7c6,
                Q = h().c546ba07,
                X = h().h4516e4f,
                ee = h().j4d4a809,
                te = h().ja589ea5,
                ne = h().c904a2ff,
                re = h().b43358cf,
                oe = L((e) => {
                    const t = v.ZP.isWebView(),
                        n = (0, C.I0)(),
                        { communityId: u, moderationLog: p, setShowRevertedDialog: M, tweet: S } = e,
                        P = p?.id,
                        T = p?.should_show_reverted_dialog ?? !1,
                        A = p?.action_timestamp,
                        k = p?.moderator_log_type,
                        x = p?.moderator_ref_results?.result,
                        N = p?.tweet_ref_results?.result,
                        F = p?.reverted_moderator_ref_results?.result,
                        R = !0 === p?.is_revert_log,
                        O = "TweetHidden" === k,
                        L = "TweetPinned" === k,
                        D = "TweetUnpinned" === k,
                        H = N?.rest_id,
                        B = null != S,
                        U = N?.core?.user_results?.result?.core?.screen_name,
                        $ = N?.core?.user_results?.result?.core?.name || G,
                        z = x?.core?.name || Y,
                        K = x?.core?.screen_name,
                        W = K ? `/${K}` : null,
                        j = p?.rule_ref?.name,
                        q = W ? r.createElement(h().I18NFormatMessage, { $i18n: "b160df39" }, r.createElement(a.ZP, { link: W }, h().bb6299a7({ moderatorName: z }))) : ee({ moderatorName: z }),
                        oe = W ? r.createElement(h().I18NFormatMessage, { $i18n: "h1513297" }, r.createElement(a.ZP, { link: W }, h().f0347599({ moderatorName: z }))) : ne({ moderatorName: z }),
                        ie = W ? r.createElement(h().I18NFormatMessage, { $i18n: "e523e9f1" }, r.createElement(a.ZP, { link: W }, h().e33d133b({ moderatorName: z }))) : re({ moderatorName: z }),
                        se = null != F?.core?.screen_name,
                        le = F?.core?.name || Y,
                        ce = F?.core?.screen_name,
                        me = ce ? `/${ce}` : null,
                        de = me ? r.createElement(h().I18NFormatMessage, { $i18n: "g93119e7" }, r.createElement(a.ZP, { link: me }, h().c29ec092({ revertedModeratorName: le }))) : te({ revertedModeratorName: le }),
                        ue = r.createElement(r.Fragment, null, R ? r.createElement(r.Fragment, null, r.createElement(E.default, { style: ae.topIconStyle }), r.createElement(a.ZP, { style: ae.topMessageStyle }, de)) : r.createElement(r.Fragment, null, r.createElement(y.default, { style: ae.topIconStyle }), r.createElement(a.ZP, { style: ae.topMessageStyle }, q))),
                        pe = r.createElement(r.Fragment, null, r.createElement(g.default, { style: ae.topIconStyle }), r.createElement(a.ZP, { style: ae.topMessageStyle }, oe)),
                        he = r.createElement(r.Fragment, null, r.createElement(f.default, { style: ae.topIconStyle }), r.createElement(a.ZP, { style: ae.topMessageStyle }, ie)),
                        ye = r.useCallback(
                            (e) => {
                                if (U && u) {
                                    const t = [
                                        { text: Q({ userName: $ }), Icon: b.default, link: `/${U}` },
                                        { text: X({ userName: $ }), Icon: _.default, link: `/i/communities/${u}/search/?q=(from:${U})` },
                                    ];
                                    return r.createElement(i.Z, { items: t, onCloseRequested: e });
                                }
                                return null;
                            },
                            [u, U, $],
                        ),
                        Ee = r.useCallback(() => {
                            n((0, I.fz)({ text: J }));
                        }, [n]),
                        ge = r.createElement(
                            o.Z,
                            null,
                            O &&
                                P &&
                                u &&
                                H &&
                                B &&
                                U &&
                                r.createElement(V, {
                                    communityId: u,
                                    isAlreadyReverted: se,
                                    isRevertLog: R,
                                    logIdentifier: P,
                                    onRevertError: Ee,
                                    setShowRevertedDialog: (e) => {
                                        M(e);
                                    },
                                    shouldShowRevertedDialog: T,
                                    tweetId: H,
                                    userName: $,
                                    userScreenName: U,
                                }),
                        );
                    return null == p || null == u ? null : r.createElement(o.Z, { style: ae.container }, r.createElement(r.Fragment, null, O && H && r.createElement(r.Fragment, null, r.createElement("div", { style: ae.topDividerPostStyle }, ue, r.createElement(s.Z, null), r.createElement(l.Z, { timestamp: Number(A) }), !t && r.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ye, style: ae.menu })), r.createElement(w.Z, { tweetId: H }), j && r.createElement(m.Z.Custom, { Icon: Z.default, "aria-live": "polite", backgroundColor: "gray100", style: ae.communityRuleStyle, text: j }), ge, r.createElement(d.Z, null)), L && H && r.createElement(r.Fragment, null, r.createElement("div", { style: ae.topDividerPostStyle }, pe, r.createElement(s.Z, null), r.createElement(l.Z, { timestamp: Number(A) }), !t && r.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ye, style: ae.menu })), r.createElement(w.Z, { tweetId: H }), r.createElement(d.Z, null)), D && H && r.createElement(r.Fragment, null, r.createElement("div", { style: ae.topDividerPostStyle }, he, r.createElement(s.Z, null), r.createElement(l.Z, { timestamp: Number(A) }), !t && r.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ye, style: ae.menu }), "/>"), r.createElement(w.Z, { tweetId: H }), r.createElement(d.Z, null))));
                }),
                ae = u.default.create((e) => ({ menu: { marginStart: "auto", marginEnd: 2 }, actioned: { flexDirection: "row" }, bottomText: { marginTop: e.spaces.space12 }, icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, container: { marginEnd: e.spaces.space16, marginStart: e.spaces.space16 }, topDividerPostStyle: { display: "flex", alignItems: "center", marginTop: 8, marginBottom: 12 }, topIconStyle: { marginStart: 4 }, topMessageStyle: { marginStart: 6 }, communityRuleStyle: { marginTop: 1 } }));
        },
        449950: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(807896),
                o = n(202784),
                a = n(530525),
                i = n(659651),
                s = n(111677),
                l = n.n(s),
                c = n(632658);
            const m = "image",
                d = l().f93bb3ee;
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": n, hideAcceptOverlay: s, shouldShowAltLabel: l, ...c } = this.props;
                            return o.createElement(o.Fragment, null, o.createElement(a.Z, (0, r.Z)({}, c, { "aria-label": n, onVariantSelection: e, previewMode: t, testID: m })), l ? o.createElement(i.Z, { align: "left", altLabel: n }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return o.createElement(c.Z, { acceptLabel: d, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        25704: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(529356),
                a = n(111677),
                i = n.n(a),
                s = n(621416),
                l = n(443781);
            const c = i().j24c37b2,
                m = ({ Content: e, contentStyle: t, actionLabel: n = c, flag: a, graphic: i, graphicDisplayMode: m, headline: d, isFullHeightOnMobile: u, enableMaskForDismiss: p, onAction: h, onClose: y, onSecondaryAction: E, secondaryActionLabel: g, supportUrl: f, subtext: b, withCloseButton: _, shouldShowForLoggedOut: Z = !1, shouldAddEducationFlagOnClose: v = !0, shouldAddEducationFlagOnSecondary: C = !0, shouldAddEducationFlagOnPrimary: I = !0 }) => {
                    const { loggedInUserId: w } = r.useContext(l.rC),
                        [M, S] = (0, s.m)(a),
                        P = r.useCallback(
                            (e) => {
                                I && S(), h && h(e);
                            },
                            [S, h, I],
                        ),
                        T = r.useCallback(() => {
                            v && S(), y && y();
                        }, [S, v, y]),
                        A = r.useCallback(
                            (e) => {
                                C && S(), E && E(e);
                            },
                            [S, E, C],
                        );
                    if (!M || (!w && !Z)) return null;
                    return r.createElement(o.Z, { actionLabel: n, contentStyle: t, enableMaskForDismiss: p, graphic: i, graphicDisplayMode: m || "none", headline: d, isFullHeightOnMobile: u, onAction: P, onClose: T, onSecondaryAction: A, secondaryActionLabel: g, subtext: b, supportUrl: f, withCloseButton: _ }, e ? r.createElement(e, null) : null);
                },
                d = r.memo(m);
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                i = n(292627),
                s = n(537392),
                l = n(392237),
                c = n(365023),
                m = n(392027),
                d = n(774654),
                u = n(725516),
                p = n(443781);
            const h = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${d.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                y = (e) => {
                    const { "aria-label": t, label: n, onPress: y, scribeComponent: E, ...g } = e,
                        { loggedInUserId: f } = o.useContext(p.rC),
                        b = (0, u.z)(),
                        _ = o.useCallback(
                            (e) => {
                                b.scribe({ component: E, action: "click" }), y && y(e);
                            },
                            [b, y, E],
                        ),
                        Z = d.ZM.useCollapsibleNavBars(),
                        v = [...d.Ah({ elementPosition: "bottom" }), Z && h.fabStaysAboveSafeArea];
                    return f
                        ? o.createElement(
                              i.Z.FloatingAction,
                              null,
                              o.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const i = e > l.default.theme.breakpoints.large,
                                      s = e > l.default.theme.breakpoints.medium,
                                      d = e < l.default.theme.breakpoints.micro,
                                      u = [h.root, s && h.rootMedium, i && h.rootLarge],
                                      p = [h.fab, i && h.fabLarge, d && h.fabMicro, v];
                                  return o.createElement(
                                      a.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      o.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, s) => o.createElement(a.Z, (0, r.Z)({ ref: e() }, s({ style: p })), o.createElement(m.Z, (0, r.Z)({}, g, { "aria-label": t, label: i ? n : void 0, onPress: _, style: d && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var r = n(202784),
                o = n(387524),
                a = n(635510);
            const i = "/compose/post";
            class s extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                r = { pathname: i, state: (t && t()) || {} };
                            n.push(r);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: s } = this.props;
                    return r.createElement(o.Z, { "aria-label": e, href: i, icon: t, label: n, onPress: this._handlePress, scribeComponent: s, testID: a.Z.tweet });
                }
            }
            const l = s;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                i = n(186444),
                s = n(355883);
            const l = a().j0179e90,
                c = a().ee69d769({ verb: "" }),
                m = r.createElement(i.default, null),
                d = ({ getLocationState: e, history: t }) => r.createElement(s.Z, { "aria-label": l, getLocationState: e, history: t, icon: m, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        856522: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(9410),
                a = n(202784),
                i = (n(585488), n(277660)),
                s = n.n(i),
                l = n(23134);
            function c({ user: e, ...t }) {
                const n = s()(o.Z, e),
                    i = a.useMemo(() => (n ? { id_str: n.rest_id, screen_name: n.core?.screen_name || "", name: n.core?.name || "", follow_request_sent: n.legacy?.follow_request_sent || !1, protected: n.privacy?.protected || !1, following: n.relationship_perspectives?.following || !1, followed_by: n.relationship_perspectives?.followed_by || !1, super_following: n.super_following || void 0, super_follow_eligible: n.super_follow_eligible || void 0, super_followed_by: n.super_followed_by || void 0, blocking: n.relationship_perspectives?.blocking || void 0, highlightedLabel: n.affiliates_highlighted_label?.label ? { userLabelType: n.affiliates_highlighted_label.label.user_label_type || void 0 } : void 0 } : void 0), [n]);
                return a.createElement(l.C, (0, r.Z)({}, t, { isRelay: !0, user: i, userId: n?.rest_id ?? "" }));
            }
        },
        330815: (e, t, n) => {
            n.d(t, { Z: () => I });
            var r = n(202784),
                o = n(392237),
                a = n(154003),
                i = n(111677),
                s = n.n(i),
                l = n(184605),
                c = n(980407),
                m = n(873637),
                d = n(668214),
                u = n(497294);
            const p = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, u.m3)(e, t.mediaId)[0] : void 0),
                h = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                y = (0, d.Z)()
                    .propsFromState(() => ({ media: p, mediaId: h }))
                    .propsFromActions(() => ({ processMedia: u.C4, updateMediaUpload: u._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                E = "applyButton",
                g = s().gd80afba,
                f = s().a753a870;
            class b extends r.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return r.createElement(a.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: E, type: "primaryFilled" }, f);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: n, media: r, mediaId: o, onDone: a, processMedia: i, updateMediaUpload: s } = this.props;
                                this.setState({ isProcessing: !0 });
                                const c = t.getCropData(),
                                    { originalMediaFile: m } = r || {},
                                    d = !m || (0 === c.top && 0 === c.left && c.width === m.width && c.height === m.height);
                                (0, l.Z)(o) &&
                                    (e
                                        ? (e(c), a())
                                        : (s({ id: o, cropData: d ? void 0 : c }),
                                          i(o).then(() => {
                                              this.setState({ isProcessing: !1 }), n.scribe({ action: "done" }), a();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = r.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: n, withAspectRatioOptions: o, withZoomControl: a } = this.props,
                        i = this._getMedia();
                    return r.createElement(c.Z, { backButtonType: "back", containerStyle: _.root, documentTitle: n || g, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: n || g }, r.createElement(m.Z, { defaultAspectRatio: e, media: i, ref: this._cropper, withAspectRatioOptions: o, withZoomControl: a }));
                }
            }
            const _ = o.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                Z = y(b);
            var v = n(757700);
            const C = o.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                I = (e) => r.createElement(v.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: C.modal }, r.createElement(Z, e));
        },
        253558: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                o = n(154003),
                a = n(111677),
                i = n.n(a),
                s = n(71620),
                l = n(668214),
                c = n(92098),
                m = n(299226);
            const d = (e, t) => (t.communityId && t.userId ? c.Z.select(e, `${t.communityId}_${t.userId}`) : void 0),
                u = (0, l.Z)()
                    .propsFromState(() => ({ inviteActionResult: d }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, s.zr)("INVITE_TO_COMMUNITY_BUTTON"), inviteToCommunity: m.tV })),
                p = i().cd133486,
                h = i().hb1e378e,
                y = i().bcd6bb0e,
                E = "primaryFilled";
            const g = u(function (e) {
                const { communityId: t, createLocalApiErrorHandler: n, inviteActionResult: a, inviteToCommunity: i, onInvite: s, onInviteActionResultChange: l, userId: c, viewerInvited: m } = e,
                    d = (function (e) {
                        if (!e || "UserCommunityInviteAction" === e.__typename) return p;
                        switch (e.reason) {
                            case "UserIsMember":
                                return y;
                            case "UserIsInvited":
                                return h;
                            default:
                                return p;
                        }
                    })(a),
                    u = (function (e) {
                        return e && "UserCommunityInviteAction" !== e.__typename ? ("UserIsMember" === e.reason ? E : "primaryOutlined") : E;
                    })(a);
                r.useEffect(() => {
                    a && l(c, a);
                }, [a, c, l]);
                const g = "UserCommunityInviteAction" === a?.__typename;
                return !g && !m
                    ? null
                    : r.createElement(
                          o.ZP,
                          {
                              "aria-label": d,
                              disabled: !g,
                              onPress: () => {
                                  g &&
                                      i(t, c)
                                          .then(() => s && s(c))
                                          .catch(n());
                              },
                              size: "small",
                              type: u,
                          },
                          d,
                      );
            });
        },
        301758: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(807896),
                o = n(202784),
                a = n(235902),
                i = n(521288),
                s = n(401388),
                l = n(988566),
                c = n(725516),
                m = n(443781),
                d = n(71620),
                u = n(668214),
                p = n(491963),
                h = n(836255);
            const y = (e, t) => t.tweetId,
                E = (e, t) => {
                    const n = t.tweetId,
                        r = n && h.Z.select(e, n);
                    return r ? (0, p.z0)(e, r) : void 0;
                },
                g = (0, u.Z)()
                    .propsFromState(() => ({ community: E, hydratedTweet: h.Z.createHydratedTweetSelector(y) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: p.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: n, hydratedTweet: d, onAvatarClick: u, onMediaClick: p, onPress: h, onScreenNameClick: y, tweetId: E, withBirdwatchPivot: g = !0, ...f }) => {
                    const { featureSwitches: b, viewerUserId: _ } = o.useContext(m.rC),
                        Z = (0, c.z)(),
                        v = d?.community_id_str;
                    o.useEffect(() => {
                        v && (0, s.Z)(e) && n(v).catch(t());
                    }, [e, v, t, n]);
                    const C = o.useCallback(
                            (e) => {
                                Z.scribeAction("click"), h && h(e);
                            },
                            [h, Z],
                        ),
                        I = !!g,
                        w = d && (0, l.D$)(d, _, e),
                        M = w && (0, l.rl)(w);
                    return o.createElement(a.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => b.isTrue("responsive_web_edit_tweet_enabled") || b.isTrue("subscriptions_feature_labs_1004") } }, o.createElement(i.Z, (0, r.Z)({}, f, { loggedInUserId: _, onAvatarClick: u, onMediaClick: p, onPress: C, onScreenNameClick: y, shouldShowAltLabelAlways: !0, socialContextProps: M, tweet: d, withBirdwatchPivot: I })));
                });
        },
        26232: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(555874),
                a = n(111677),
                i = n.n(a),
                s = n(290402),
                l = n(965245),
                c = n(71620),
                m = n(668214);
            const d = (e, t) => t.module.selectFetchStatus(e),
                u = (e, t) => t.module.selectItems(e),
                p = (0, m.Z)()
                    .propsFromState((e) => ({ fetchStatus: d, items: u }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, c.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = i().i9028824,
                y = (e) => e,
                E = (e) => (t) => e(t.item);
            class g extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: n, numColumns: a, onScrollEnd: i, renderer: s, withoutHeadroom: c } = this.props;
                            return !t || a < 1 ? null : 1 === a ? r.createElement(l.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: y, items: t, noItemsRenderer: n, onNearEnd: this._handleNearEnd, onScrollEnd: i, renderer: s, withoutHeadroom: c }) : r.createElement(o.Z, { ListEmptyComponent: n, data: t, keyExtractor: y, numColumns: a, renderItem: E(s) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: n, fetchIfNeeded: r } = this.props;
                            (e ? n : r)().catch(t());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentDidUpdate(e) {
                    const { module: t } = this.props;
                    e.module !== t && this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, module: t, retryMessage: n } = this.props;
                    return t ? r.createElement(s.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: n, retryable: !0 }) : null;
                }
            }
            g.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const f = p(g);
        },
        703738: (e, t, n) => {
            n.d(t, { z: () => i });
            var r = n(323265),
                o = n(655352),
                a = n(952793);
            const i = () => (0, a.hC)("rweb_sourcemap_migration") && (0, o.ZP)() && !r.ZP.isMobileOS();
        },
        621416: (e, t, n) => {
            n.d(t, { m: () => a });
            n(890103);
            var r = n(202784),
                o = n(175698);
            function a(e) {
                const t = (0, o.A)();
                return [
                    !!t && !t.flags[e],
                    r.useCallback(() => {
                        t?.addFlag(e);
                    }, [t, e]),
                ];
            }
        },
        753291: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({ loader: () => Promise.all([n.e("icons.20"), n.e("icons.2"), n.e("icons.17"), n.e("icons.23"), n.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"), n.e("loader.MediaPickerWithPreview")]).then(n.bind(n, 199127)) });
        },
        854594: (e, t, n) => {
            n.d(t, { l: () => o, v: () => a });
            var r = n(202784);
            const o = r.createContext(void 0),
                a = () => r.useContext(o);
        },
        988566: (e, t, n) => {
            n.d(t, { D$: () => s, Du: () => m, GK: () => c, Iv: () => u, pz: () => p, rl: () => d });
            var r = n(202784),
                o = n(688715),
                a = n(946409),
                i = n(788993);
            const s = (e, t, n) => (e.retweeted_status ? l(e, t) : e.community_id_str && n ? c(e, n) : void 0),
                l = (e, t) => {
                    if (e.retweeted_status) return { contextType: i.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                c = (e, t) => ({ contextType: i.Z.Community, landingUrl: { url: (0, o.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                m = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: n }) => {
                    if (t?.topicContext) {
                        const r = t.topicContext;
                        return { contextType: e ? i.Z.TextOnly : i.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${r.topicId}`, urlType: "DeepLink" }, text: n?.name, topicContext: r };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                d = (e) => {
                    const { contextType: t, landingUrl: n, text: r } = e;
                    return { link: n ? (0, a.s9)(n) : void 0, text: r, contextType: t };
                },
                u = { contextType: i.Z.Pin, text: "" },
                p = r.createContext(void 0);
        },
        457268: (e, t, n) => {
            n.d(t, { V: () => a });
            var r = n(125363),
                o = n(742602);
            const a = (e) => (0, r.v9)((t) => (0, o.LO)(t, { communityId: e }));
        },
        797362: (e, t, n) => {
            n.d(t, { A: () => a, J: () => i });
            var r = n(189676),
                o = n(545521);
            const a = (e) => (0, o.Z)({ contextSuffix: "COMMUNITIES_MODERATION_CASES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(r.Z).fetchModerationCasesSlice, getEndpointParams: (t) => ({ ...t, communityId: e }), sliceKey: `moderationCasesSlice-${e}` }),
                i = (e) => (0, o.Z)({ contextSuffix: "COMMUNITIES_TWEET_MODERATION_LOG_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(r.Z).fetchTweetModerationLogSlice, getEndpointParams: (t) => ({ ...t, communityId: e }), sliceKey: `tweetModerationLogSlice-${e}` });
        },
        874684: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(189676),
                o = n(750085),
                a = n(218951);
            const i = (e) => (0, a.Z)({ timelineId: `communityAbout-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchAboutTimeline, getEndpointParams: (t) => ({ communityId: e }) }, context: "FETCH_COMMUNITY_ABOUT_TIMELINE", perfKey: "communityAbout", formatResponse: o.Z });
        },
        688688: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(189676),
                o = n(750085);
            const a = (0, n(218951).Z)({ timelineId: "communitiesDiscoveryTimeline", network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchCommunityDiscoveryTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_COMMUNITIES_DISCOVERY_TIMELINE", perfKey: "communitiesDiscoveryTimeline", formatResponse: o.Z });
        },
        910212: (e, t, n) => {
            n.d(t, { L: () => s });
            var r = n(189676),
                o = n(750085),
                a = n(218951);
            const i = (e, t) => `communityHashtags-${e}-${t.join("-")}`,
                s = (e, t) => (0, a.Z)({ timelineId: i(e, t), network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchCommunityHashtagsTimeline, getEndpointParams: ({ count: n, cursor: r }) => ({ count: n, cursor: "string" == typeof r ? r : void 0, communityId: e, hashtags: t }) }, context: "FETCH_COMMUNITY_HASHTAGS_TIMELINE", perfKey: "communityHashtags", formatResponse: o.Z });
        },
        543066: (e, t, n) => {
            n.d(t, { F7: () => c, Kc: () => l, S_: () => s, tD: () => i });
            var r = n(189676),
                o = n(750085),
                a = n(218951);
            const i = (0, a.Z)({ timelineId: "communitiesMainDiscoveryModule", network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchCommunitiesMainDiscoveryModule, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_COMMUNITIES_DISCOVERY_MODULE", perfKey: "communitiesMainDiscoveryModule", formatResponse: o.Z }),
                s = (0, a.Z)({ timelineId: "communitiesMainTimeline", network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchCommunitiesMainTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_COMMUNITIES_MAIN_TIMELINE", perfKey: "communitiesMainTimeline", formatResponse: o.Z }),
                l = (0, a.Z)({ timelineId: "communitiesRankedTimeline", network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchCommunitiesRankedTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_COMMUNITIES_RANKED_TIMELINE", perfKey: "communitiesRankedTimeline", formatResponse: o.Z }),
                c = (e) => (0, a.Z)({ timelineId: `communitiesExploreTimeline-${e || ""}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchCommunitiesExploreTimeline, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, topicId: e }) }, context: "FETCH_COMMUNITIES_EXPLORE_TIMELINE", perfKey: "communitiesExploreTimeline", formatResponse: o.Z });
        },
        764443: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(189676),
                o = n(750085),
                a = n(218951);
            const i = (e) => (0, a.Z)({ timelineId: `communityMemberships-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchCommunityMemberships, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_COMMUNITY_MEMBERSHIPS_TIMELINE", perfKey: "communityMemberships", formatResponse: o.Z });
        },
        35633: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(644829),
                o = n(750085),
                a = n(218951);
            function i(e) {
                return (0, a.Z)({ timelineId: "global-communities-latest-post-search-timeline", context: "FETCH_GLOBAL_COMMUNITIES_LATEST_POST_SEARCH_TIMELINE", formatResponse: o.Z, network: { getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchGlobalCommunitiesLatestPostSearch }, perfKey: "global-communities-latest-post-search" });
            }
        },
        65241: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(644829),
                o = n(750085),
                a = n(218951);
            function i(e) {
                return (0, a.Z)({ timelineId: "global-communities-post-search-timeline", context: "FETCH_GLOBAL_COMMUNITIES_POST_SEARCH_TIMELINE", formatResponse: o.Z, network: { getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchGlobalCommunitiesPostSearch }, perfKey: "global-communities-post-search" });
            }
        },
        127218: (e, t, n) => {
            n.d(t, { C: () => g });
            var r = n(202784),
                o = n(614983),
                a = n.n(o),
                i = n(437429),
                s = n.n(i),
                l = n(57074),
                c = n.n(l),
                m = n(10622),
                d = n.n(m),
                u = n(585488),
                p = n(71620),
                h = n(163889),
                y = n(312771),
                E = n(535338);
            function g(e, t, n) {
                const [o, i] = r.useState(!1),
                    [l, m] = r.useState(null),
                    g = s()(),
                    f = c()(t),
                    b = (0, p.po)(),
                    _ = (0, E.p)(e, f, n);
                return r.useMemo(() => {
                    const t = (0, u.getRequest)(e).params?.metadata?.sliceInfoPath;
                    a()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: r } =
                            (function (e, t) {
                                try {
                                    a()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of t) a()(!!n, "The provided path is invalid."), a()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(_, t) || {},
                        s = (t) => {
                            o ||
                                (i(!0),
                                d()(g, e, { ...f, cursor: t }).subscribe({
                                    complete: () => {
                                        i(!1);
                                    },
                                    error: (e) => {
                                        i(!1), m(e), b(e);
                                    },
                                }));
                        },
                        c = () => {
                            n && s(n);
                        },
                        p = () => {
                            r && s(r);
                        },
                        E = () => {
                            s(void 0);
                        };
                    return l ? { subsequentFetchStatus: y.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: p, refetch: E, data: _, hasNext: Boolean(n), hasPrevious: Boolean(r) } : { subsequentFetchStatus: o ? y.ZP.LOADING : y.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: p, refetch: E, data: _, hasNext: Boolean(n), hasPrevious: Boolean(r) };
                }, [e, _, o, l, g, f, b]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-e019dbda.d0adac2a.js.map
