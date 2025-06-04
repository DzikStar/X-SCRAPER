"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-e019dbda"],
    {
        784380: (e, t, o) => {
            o.d(t, { Z: () => d });
            o(136728);
            var n = o(444770),
                r = o(202784),
                i = (o(585488), o(277660)),
                a = o.n(i),
                s = o(642153);
            const l = n.Z,
                c = ({ community: e, style: t, userAvatarSize: o = "large" }) => {
                    const n = a()(l, e),
                        { members_facepile_results: i } = n,
                        c = r.useMemo(
                            () =>
                                ((e) =>
                                    e.reduce((e, { result: t }) => {
                                        if ("User" === t?.__typename) {
                                            const o = t.avatar?.image_url;
                                            o && e.push(o);
                                        }
                                        return e;
                                    }, []))(i),
                            [i],
                        );
                    return c.length > 0 ? r.createElement(s.Z, { style: t, userAvatarSize: o, userAvatarUrls: c }) : null;
                },
                d = r.memo(c);
        },
        281598: (e, t, o) => {
            o.d(t, { IN: () => n, ZC: () => r, eE: () => Z, ZP: () => y, L4: () => w });
            const n = Object.freeze({ Open: "CommunityOpenMembershipSettings", Restricted: "CommunityRestrictedMembershipSettings" }),
                r = Object.freeze({ Member: "MemberInvitesAllowed", Moderator: "ModeratorInvitesAllowed", Admin: "AdminInvitesAllowed" });
            var i = o(202784),
                a = o(731708),
                s = o(101890),
                l = o(954110),
                c = o(392237),
                d = o(111677),
                m = o.n(d);
            const u = [
                    { label: m().fd00a76a, value: n.Open, helpText: m().a0a16d38 },
                    { label: m().ce0523a8, value: n.Restricted, helpText: m().i1aad6ec },
                ],
                p = m().c85960a0,
                h = m().ca373cd2,
                g = m().dfdcc6b4,
                f = (e) => {
                    const { access: t, invitesPolicy: o } = e.state,
                        { setAccess: c, setInvitesPolicy: d } = e.setters,
                        m = !e.hideInvitePolicy,
                        f = i.useCallback(
                            (e, t) => {
                                c(t);
                            },
                            [c],
                        ),
                        y = i.useCallback(
                            (e, t) => {
                                d(t ? r.Member : r.Moderator);
                            },
                            [d],
                        );
                    return i.createElement(i.Fragment, null, i.createElement(a.ZP, { color: "gray700", size: "subtext2", style: E.settingsItem }, g), i.createElement(s.Z, { name: "membershipSetting", onChange: f, options: u, value: t }), m && t === n.Restricted && i.createElement(l.Z, { checked: o === r.Member, helpText: h, label: p, name: "allowInvites", onChange: y }));
                },
                y = i.memo(f),
                E = c.default.create((e) => ({ settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                b = { [n.Open]: r.Member, [n.Restricted]: r.Moderator },
                _ = { access: n.Open, invitesPolicy: b[n.Open] };
            function w(e = _) {
                const [t, o] = i.useState(e.access),
                    [n, r] = i.useState(e.invitesPolicy),
                    a = i.useMemo(
                        () => ({
                            setAccess(e) {
                                r(b[e]), o(e);
                            },
                            setInvitesPolicy: r,
                        }),
                        [],
                    );
                return [i.useMemo(() => ({ access: t, invitesPolicy: n }), [t, n]), a];
            }
            function Z(e) {
                let t, o;
                switch (e.access) {
                    case n.Open:
                        t = "Open";
                        break;
                    case n.Restricted:
                    default:
                        t = "RestrictedJoinRequestsRequireModeratorApproval";
                }
                switch (e.invitesPolicy) {
                    case r.Moderator:
                        o = "ModeratorInvitesAllowed";
                        break;
                    case r.Member:
                        o = "MemberInvitesAllowed";
                        break;
                    case r.Admin:
                        o = "AdminInvitesAllowed";
                        break;
                    default:
                        o = "NoInvitesAllowed";
                }
                return { joinPolicy: t, invitesPolicy: o };
            }
        },
        103686: (e, t, o) => {
            o.d(t, { Z: () => ge });
            o(136728);
            var n = o(202784),
                r = o(325686),
                i = o(811176),
                a = o(420412),
                s = o(537392),
                l = o(392237),
                c = o(154003),
                d = o(247056),
                m = o(111677),
                u = o.n(m),
                p = o(511323),
                h = o(415506),
                g = o(530813),
                f = o(395067),
                y = o(731708),
                E = o(891198),
                b = o(966886),
                _ = o(708852),
                w = o(673510),
                Z = o(872405),
                C = o(30899),
                I = o(124964),
                v = o(668214),
                S = o(502909),
                M = o(600823);
            const P = (0, S.ZP)({ namespace: "communityReports" }),
                T = M.Z.register(P);
            var A = o(919022);
            const F = (e, t) => {
                    const o = t.tweetCase?.reports;
                    return (o ? T.selectMany(e, o) : []).map((t) => {
                        const o = t.user;
                        return { ...t, reporter: A.ZP.select(e, o) };
                    });
                },
                k = (0, v.Z)().propsFromState(() => ({ reports: F })),
                x = (e, t) => {
                    const o = t ? Math.max(0, e - 1) : e;
                    return (({ count: e, formattedCount: t, isAutoReportedByX: o }) => (o ? (e > 0 ? n.createElement(u().I18NFormatMessage, { $i18n: "j5602f3b" }, n.createElement(y.ZP, { color: "primary" }, u().e2bc5db0), n.createElement(y.ZP, { color: "primary" }, u().d0a1b248({ count: e, formattedCount: t }))) : n.createElement(u().I18NFormatMessage, { $i18n: "dd132edd" }, n.createElement(y.ZP, { color: "primary" }, u().cd4d48d2))) : n.createElement(u().I18NFormatMessage, { $i18n: "je0779b7" }, n.createElement(y.ZP, { color: "primary" }, u().ff0f742a({ count: e, formattedCount: t })))))({ count: o, formattedCount: E.ZP.getFormattedCount(o), isAutoReportedByX: t });
                },
                N = (e) => {
                    const { report: t, withBottomBorder: o } = e,
                        { created_at: i, reporter: a } = t,
                        s = n.createElement(b.Z, { timestamp: i }),
                        l = (0, _.Y4)();
                    return a ? n.createElement(r.Z, { style: o ? L.bottomBorder : null }, n.createElement(w.ZP, { avatarUri: a.profile_image_url_https, decoration: s, displayMode: "UserCompact", isBlueVerified: a.is_blue_verified, isProtected: a.protected, isVerified: a.verified, name: a.name, screenName: a.screen_name, style: l ? L.userCell : void 0, userId: a.id_str }), n.createElement(Z.Z, { avatarCell: null }, n.createElement(y.ZP, { color: "gray700", size: "subtext2", style: L.rule }, t.rule.name))) : null;
                },
                R = k((e) => {
                    const [t, o] = n.useState(!1),
                        { reports: i, tweetCase: a } = e,
                        { report_count: s, report_created_at_max: l } = a,
                        c = i.some((e) => "783214" === e.reporter?.id_str);
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            C.Z,
                            {
                                contentStyle: L.popover,
                                onDismiss: () => {
                                    o(!1);
                                },
                                renderContent: () =>
                                    n.createElement(
                                        r.Z,
                                        { style: L.contentContainer },
                                        i.map((e, t) => n.createElement(N, { key: e.id_str, report: e, withBottomBorder: t < i.length - 1 })),
                                    ),
                                visibilityBehavior: t ? "forceVisible" : "forceHidden",
                            },
                            n.createElement(
                                y.ZP,
                                {
                                    onPress: () => {
                                        o(!0);
                                    },
                                },
                                x(s, c),
                            ),
                        ),
                        n.createElement(I.Z, null),
                        n.createElement(b.Z, { timestamp: l }),
                    );
                }),
                L = l.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small, paddingBottom: e.spaces.space12 }, contentContainer: { paddingBottom: e.componentDimensions.gutterVertical }, popover: { maxWidth: "100%" }, userCell: { width: e.breakpoints.small }, rule: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
            var O = o(301758),
                D = o(491963),
                H = o(715729),
                U = o(189676);
            const B = (0, S.ZP)({ namespace: "communityCases" }),
                $ = {
                    keepTweet: (0, S.Tx)(B, "keepTweet", {
                        getParams: (e) => ({ tweetId: e }),
                        getApiMethod: (e) => e.withEndpoint(U.Z).keepCommunityTweet,
                        reducer: (e, t) => {
                            const { entityId: o } = t.meta;
                            return (0, H.ZP)(e, (e) => {
                                e.entities[o].isKept = !0;
                            });
                        },
                        context: "KEEP_COMMUNITY_TWEET",
                    }),
                    dismissTweet: (0, S.Tx)(B, "dismissTweet", {
                        getParams: (e) => ({ tweetId: e }),
                        getApiMethod: (e) => e.withEndpoint(U.Z).keepCommunityTweet,
                        reducer: (e, t) => {
                            const { entityId: o } = t.meta;
                            return (0, H.ZP)(e, (e) => {
                                e.entities[o].isDismissed = !0;
                            });
                        },
                        context: "KEEP_COMMUNITY_TWEET",
                    }),
                },
                z = { ...B, ...$ },
                K = M.Z.register(z);
            var q = o(836255);
            const j = (e, t) => {
                    const { tweetId: o } = t;
                    return o ? q.Z.selectHydrated(e, o) : void 0;
                },
                W = (e, t) => {
                    const { tweetId: o } = t;
                    return K.select(e, o);
                },
                V = (e, t) => {
                    const o = j(e, t);
                    return !!o && (0, D.n9)(e, o);
                },
                G = (0, v.Z)()
                    .propsFromState(() => ({ tweet: j, tweetCase: W, disableRemoveFromCommunity: V }))
                    .propsFromActions(() => ({ keep: K.keepTweet, dismiss: K.dismissTweet }));
            var Y = o(593866),
                X = o(161335),
                Q = o(833458);
            const J = Object.freeze({ Hidden: "hidden", Kept: "kept" }),
                ee = u().dca19c06,
                te = u().dd641764,
                oe = (e) => n.createElement(y.ZP, null, e),
                ne = ({ screenName: e, type: t }) => {
                    switch (t) {
                        case J.Hidden: {
                            const t = ((e) => n.createElement(u().I18NFormatMessage, { $i18n: "a0071f71" }, e))(e),
                                o = [{ label: oe(t), decoration: ie }];
                            return n.createElement(Y.Z, { "aria-label": ee, containerStyle: re.container, items: o });
                        }
                        case J.Kept: {
                            const t = ((e) => n.createElement(u().I18NFormatMessage, { $i18n: "c4ec9d43" }, e))(e),
                                o = [{ label: oe(t), decoration: ae }];
                            return n.createElement(Y.Z, { "aria-label": te, containerStyle: re.container, items: o });
                        }
                        default:
                            return null;
                    }
                },
                re = l.default.create((e) => ({ icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                ie = n.createElement(X.default, { style: re.icon }),
                ae = n.createElement(Q.default, { style: re.icon }),
                se = { page: "reported_tweets", component: "tweet" },
                le = u().f1d9930c,
                ce = u().a219e218,
                de = u().fa524058,
                me = u().hb21cdb6,
                ue = u().g30bc699,
                pe = u().dc7a9436,
                he = u().a51d671b,
                ge = G((e) => {
                    const { dismiss: t, keep: o, tweet: m, tweetCase: u, tweetId: y } = e,
                        E = m?.user?.screen_name,
                        b = m?.community_id_str,
                        _ = m?.user?.id_str,
                        w = n.useCallback(
                            (t) => {
                                if (m && E) {
                                    const o = [
                                        { text: ue({ screenName: E }), Icon: p.default, link: `/${E}` },
                                        {
                                            text: pe,
                                            Icon: h.default,
                                            link: { pathname: `/i/report/${f.C2.Tweet}/${m.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: se } },
                                            onClick: () => {
                                                t();
                                            },
                                        },
                                    ];
                                    return (
                                        !e.disableRemoveFromCommunity &&
                                            _ &&
                                            b &&
                                            o.push({
                                                text: he({ screenName: E }),
                                                Icon: g.default,
                                                link: { pathname: `/i/report/${f.C2.RemoveCommunityMember}/${_}?community_id=${b}`, state: { clientReferer: window.location.pathname, scribeNamespace: se } },
                                                onClick: () => {
                                                    t();
                                                },
                                            }),
                                        n.createElement(i.Z, { items: o, onCloseRequested: t })
                                    );
                                }
                                return null;
                            },
                            [m, E, b, _, e.disableRemoveFromCommunity],
                        ),
                        Z = () => {
                            o(y);
                        },
                        C = () => {
                            t(y);
                        };
                    if (E && m?.reportingVisibility === f.az.HiddenCommunityTweet) return n.createElement(n.Fragment, null, n.createElement(ne, { screenName: E, type: J.Hidden }), n.createElement(a.Z, null));
                    if (u?.isDismissed || "community_tweet_member_removed" === m?.limited_actions) return null;
                    if (E && u?.isKept) return n.createElement(n.Fragment, null, n.createElement(ne, { screenName: E, type: J.Kept }), n.createElement(a.Z, null));
                    if (!u) return null;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            r.Z,
                            { style: fe.container },
                            n.createElement(r.Z, { style: fe.reportsBar }, n.createElement(R, { tweetCase: u }), n.createElement(d.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: w, style: fe.menu })),
                            n.createElement(O.Z, { tweetId: y }),
                            m
                                ? n.createElement(s.ZP, null, ({ containerHeight: t, containerWidth: o }) => {
                                      const i = o <= l.default.theme.breakpoints.small;
                                      return n.createElement(r.Z, { style: [fe.buttons, i && fe.buttonsMobile] }, n.createElement(c.ZP, { onPress: Z, size: "large", style: [fe.button, i && fe.buttonMobile], type: "primaryOutlined" }, de), n.createElement(c.ZP, { link: { pathname: `/i/report/${f.C2.HideCommunityTweet}/${y}`, state: { scribeNamespace: { ...se, action: "hide_tweet" } } }, size: "large", style: [fe.button, i && fe.buttonMobile], type: "primaryOutlined" }, le), !e.disableRemoveFromCommunity && _ && b ? n.createElement(c.ZP, { link: { pathname: `/i/report/${f.C2.RemoveCommunityMember}/${_}?community_id=${b}`, state: { clientReferer: window.location.pathname, scribeNamespace: se } }, size: "large", style: [fe.button, i && fe.buttonMobile], type: "primaryOutlined" }, me) : null);
                                  })
                                : n.createElement(r.Z, { style: fe.buttons }, n.createElement(c.ZP, { onPress: C, style: fe.button, type: "primaryOutlined" }, ce)),
                        ),
                        n.createElement(a.Z, null),
                    );
                }),
                fe = l.default.create((e) => ({ buttons: { flexDirection: "row", marginVertical: e.spaces.space16 }, buttonsMobile: { justifyContent: "space-between" }, button: { marginEnd: e.spaces.space12 }, buttonMobile: { flex: 1 }, container: { marginHorizontal: e.spaces.space20 }, icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, hiddenTweetContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, menu: { marginStart: "auto" }, reportsBar: { marginVertical: e.spaces.space16, flexDirection: "row" } }));
        },
        399037: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var n = o(202784),
                r = o(325686),
                i = o(844685),
                a = o(30183),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(699910),
                m = o(724328),
                u = o(71620),
                p = o(668214),
                h = o(491963);
            const g = (e, t) => {
                    const o = t.communityId;
                    return o ? h.ZP.select(e, o) : void 0;
                },
                f = (0, p.Z)()
                    .propsFromState(() => ({ community: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("COMMUNITY_RULES"), fetchCommunityIfNeeded: h.ZP.fetchOneIfNeeded })),
                y = c().d228a9a0;
            class E extends n.Component {
                componentDidMount() {
                    const { communityId: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: o } = this.props;
                    o(e).catch(t());
                }
                render() {
                    const { community: e, communityId: t, moderatorArea: o } = this.props;
                    if (!e || 0 === e.rules.length) return null;
                    const { name: s, rules: l } = e,
                        c = o ? l.length : 5;
                    return n.createElement(r.Z, null, n.createElement(i.Z, { text: (0, m.E)({ communityName: s }) }), n.createElement(d.Z, { badgeStyle: b.badgeStyle, limit: c, ruleContainerStyle: b.ruleContainerStyle, rules: l, withHeader: !1 }), l.length > c && n.createElement(a.Z, { link: `/i/communities/${t}/rules`, text: y, withBottomRadius: !0 }));
                }
            }
            const b = s.default.create((e) => ({ badgeStyle: { marginEnd: e.spaces.space12 }, ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: "normal" } })),
                _ = f(E);
        },
        282904: (e, t, o) => {
            o.d(t, { Z: () => re });
            var n = o(202784),
                r = o(325686),
                i = o(731708),
                a = o(811176),
                s = o(124964),
                l = o(966886),
                c = o(247056),
                d = o(40610),
                m = o(420412),
                u = o(392237),
                p = o(111677),
                h = o.n(p),
                g = o(648539),
                f = o(775042),
                y = o(492140),
                E = o(963879),
                b = o(511323),
                _ = o(297938),
                w = o(369676),
                Z = o(323265),
                C = o(125363),
                I = o(601576),
                v = o(301758),
                S = o(668214),
                M = o(715729),
                P = o(502909),
                T = o(600823);
            const A = (0, P.ZP)({ namespace: "communityModerationLog" }),
                F = {
                    setShowRevertedDialog: (0, P.Tx)(A, "setShowRevertedDialog", {
                        getParams: (e) => ({ logId: e }),
                        reducer: (e, t) => {
                            const { entityId: o } = t.meta;
                            return (0, M.ZP)(e, (e) => {
                                e.entities[o].should_show_reverted_dialog = !0;
                            });
                        },
                        context: "SET_SHOW_REVERTED_DIALOG",
                    }),
                },
                k = { ...A, ...F },
                x = T.Z.register(k);
            var N = o(836255);
            const R = (e, t) => {
                    const { logIdentifier: o } = t,
                        n = x.select(e, o),
                        r = n?.tweet_ref_results?.result?.rest_id;
                    return r ? N.Z.selectHydrated(e, r) : void 0;
                },
                L = (e, t) => {
                    const { logIdentifier: o } = t;
                    return x.select(e, o);
                },
                O = (0, S.Z)()
                    .propsFromState(() => ({ tweet: R, moderationLog: L }))
                    .propsFromActions(() => ({ setShowRevertedDialog: x.setShowRevertedDialog }));
            var D = o(282863),
                H = (o(585488), o(351743)),
                U = o.n(H),
                B = o(154003),
                $ = o(833458);
            const z = h().f6530972,
                K = h().j68fc824,
                q = h().j9541e18,
                j = D.Z,
                W = (e) => {
                    const { communityId: t, isAlreadyReverted: o, isRevertLog: i, logIdentifier: a, onRevertError: s, setShowRevertedDialog: l, shouldShowRevertedDialog: c, userScreenName: d } = e,
                        [m] = U()(j),
                        u = n.useCallback(() => {
                            m({
                                variables: { logIdentifier: a },
                                onCompleted(e) {
                                    l(a);
                                },
                                updater(e, t) {},
                                onError: s,
                            });
                        }, [m, a, s, l]);
                    return c || i || o ? n.createElement(r.Z, { style: V.buttons }, n.createElement(B.ZP, { icon: n.createElement($.default, null), size: "small", style: V.button, type: "secondaryFilled" }, K), n.createElement(B.ZP, { link: `/i/communities/${t}/search/?q=(from:${d})`, size: "small", style: V.button, type: "primaryOutlined" }, q)) : n.createElement(r.Z, { style: V.buttons }, n.createElement(B.ZP, { onPress: u, size: "small", style: V.button, type: "primaryOutlined" }, z), n.createElement(B.ZP, { link: `/i/communities/${t}/search/?q=(from:${d})`, size: "small", style: V.button, type: "primaryOutlined" }, q));
                },
                V = u.default.create((e) => ({ buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space4, marginBottom: e.spaces.space4 }, button: { alignSelf: "flex-start", flex: 1, marginEnd: e.spaces.space1, marginStart: e.spaces.space1 } })),
                G = h().e32e7e1a,
                Y = h().ab5a91a4,
                X = h().b53fb7c6,
                Q = h().c546ba07,
                J = h().h4516e4f,
                ee = h().j4d4a809,
                te = h().ja589ea5,
                oe = h().c904a2ff,
                ne = h().b43358cf,
                re = O((e) => {
                    const t = Z.ZP.isWebView(),
                        o = (0, C.I0)(),
                        { communityId: u, moderationLog: p, setShowRevertedDialog: S, tweet: M } = e,
                        P = p?.id,
                        T = p?.should_show_reverted_dialog ?? !1,
                        A = p?.action_timestamp,
                        F = p?.moderator_log_type,
                        k = p?.moderator_ref_results?.result,
                        x = p?.tweet_ref_results?.result,
                        N = p?.reverted_moderator_ref_results?.result,
                        R = !0 === p?.is_revert_log,
                        L = "TweetHidden" === F,
                        O = "TweetPinned" === F,
                        D = "TweetUnpinned" === F,
                        H = x?.rest_id,
                        U = null != M,
                        B = x?.core?.user_results?.result?.core?.screen_name,
                        $ = x?.core?.user_results?.result?.core?.name || Y,
                        z = k?.core?.name || G,
                        K = k?.core?.screen_name,
                        q = K ? `/${K}` : null,
                        j = p?.rule_ref?.name,
                        V = q ? n.createElement(h().I18NFormatMessage, { $i18n: "b160df39" }, n.createElement(i.ZP, { link: q }, h().bb6299a7({ moderatorName: z }))) : ee({ moderatorName: z }),
                        re = q ? n.createElement(h().I18NFormatMessage, { $i18n: "h1513297" }, n.createElement(i.ZP, { link: q }, h().f0347599({ moderatorName: z }))) : oe({ moderatorName: z }),
                        ae = q ? n.createElement(h().I18NFormatMessage, { $i18n: "e523e9f1" }, n.createElement(i.ZP, { link: q }, h().e33d133b({ moderatorName: z }))) : ne({ moderatorName: z }),
                        se = null != N?.core?.screen_name,
                        le = N?.core?.name || G,
                        ce = N?.core?.screen_name,
                        de = ce ? `/${ce}` : null,
                        me = de ? n.createElement(h().I18NFormatMessage, { $i18n: "g93119e7" }, n.createElement(i.ZP, { link: de }, h().c29ec092({ revertedModeratorName: le }))) : te({ revertedModeratorName: le }),
                        ue = n.createElement(n.Fragment, null, R ? n.createElement(n.Fragment, null, n.createElement(f.default, { style: ie.topIconStyle }), n.createElement(i.ZP, { style: ie.topMessageStyle }, me)) : n.createElement(n.Fragment, null, n.createElement(g.default, { style: ie.topIconStyle }), n.createElement(i.ZP, { style: ie.topMessageStyle }, V))),
                        pe = n.createElement(n.Fragment, null, n.createElement(y.default, { style: ie.topIconStyle }), n.createElement(i.ZP, { style: ie.topMessageStyle }, re)),
                        he = n.createElement(n.Fragment, null, n.createElement(E.default, { style: ie.topIconStyle }), n.createElement(i.ZP, { style: ie.topMessageStyle }, ae)),
                        ge = n.useCallback(
                            (e) => {
                                if (B && u) {
                                    const t = [
                                        { text: Q({ userName: $ }), Icon: b.default, link: `/${B}` },
                                        { text: J({ userName: $ }), Icon: _.default, link: `/i/communities/${u}/search/?q=(from:${B})` },
                                    ];
                                    return n.createElement(a.Z, { items: t, onCloseRequested: e });
                                }
                                return null;
                            },
                            [u, B, $],
                        ),
                        fe = n.useCallback(() => {
                            o((0, I.fz)({ text: X }));
                        }, [o]),
                        ye = n.createElement(
                            r.Z,
                            null,
                            L &&
                                P &&
                                u &&
                                H &&
                                U &&
                                B &&
                                n.createElement(W, {
                                    communityId: u,
                                    isAlreadyReverted: se,
                                    isRevertLog: R,
                                    logIdentifier: P,
                                    onRevertError: fe,
                                    setShowRevertedDialog: (e) => {
                                        S(e);
                                    },
                                    shouldShowRevertedDialog: T,
                                    tweetId: H,
                                    userName: $,
                                    userScreenName: B,
                                }),
                        );
                    return null == p || null == u ? null : n.createElement(r.Z, { style: ie.container }, n.createElement(n.Fragment, null, L && H && n.createElement(n.Fragment, null, n.createElement("div", { style: ie.topDividerPostStyle }, ue, n.createElement(s.Z, null), n.createElement(l.Z, { timestamp: Number(A) }), !t && n.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ge, style: ie.menu })), n.createElement(v.Z, { tweetId: H }), j && n.createElement(d.Z.Custom, { Icon: w.default, "aria-live": "polite", backgroundColor: "gray100", style: ie.communityRuleStyle, text: j }), ye, n.createElement(m.Z, null)), O && H && n.createElement(n.Fragment, null, n.createElement("div", { style: ie.topDividerPostStyle }, pe, n.createElement(s.Z, null), n.createElement(l.Z, { timestamp: Number(A) }), !t && n.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ge, style: ie.menu })), n.createElement(v.Z, { tweetId: H }), n.createElement(m.Z, null)), D && H && n.createElement(n.Fragment, null, n.createElement("div", { style: ie.topDividerPostStyle }, he, n.createElement(s.Z, null), n.createElement(l.Z, { timestamp: Number(A) }), !t && n.createElement(c.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ge, style: ie.menu }), "/>"), n.createElement(v.Z, { tweetId: H }), n.createElement(m.Z, null))));
                }),
                ie = u.default.create((e) => ({ menu: { marginStart: "auto", marginEnd: 2 }, actioned: { flexDirection: "row" }, bottomText: { marginTop: e.spaces.space12 }, icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, container: { marginEnd: e.spaces.space16, marginStart: e.spaces.space16 }, topDividerPostStyle: { display: "flex", alignItems: "center", marginTop: 8, marginBottom: 12 }, topIconStyle: { marginStart: 4 }, topMessageStyle: { marginStart: 6 }, communityRuleStyle: { marginTop: 1 } }));
        },
        449950: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(807896),
                r = o(202784),
                i = o(530525),
                a = o(659651),
                s = o(111677),
                l = o.n(s),
                c = o(632658);
            const d = "image",
                m = l().f93bb3ee;
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": o, hideAcceptOverlay: s, shouldShowAltLabel: l, ...c } = this.props;
                            return r.createElement(r.Fragment, null, r.createElement(i.Z, (0, n.Z)({}, c, { "aria-label": o, onVariantSelection: e, previewMode: t, testID: d })), l ? r.createElement(a.Z, { align: "left", altLabel: o }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return r.createElement(c.Z, { acceptLabel: m, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        25704: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                r = o(529356),
                i = o(111677),
                a = o.n(i),
                s = o(621416),
                l = o(443781);
            const c = a().j24c37b2,
                d = ({ Content: e, contentStyle: t, actionLabel: o = c, flag: i, graphic: a, graphicDisplayMode: d, headline: m, isFullHeightOnMobile: u, enableMaskForDismiss: p, onAction: h, onClose: g, onSecondaryAction: f, secondaryActionLabel: y, supportUrl: E, subtext: b, withCloseButton: _, shouldShowForLoggedOut: w = !1, shouldAddEducationFlagOnClose: Z = !0, shouldAddEducationFlagOnSecondary: C = !0, shouldAddEducationFlagOnPrimary: I = !0 }) => {
                    const { loggedInUserId: v } = n.useContext(l.rC),
                        [S, M] = (0, s.m)(i),
                        P = n.useCallback(
                            (e) => {
                                I && M(), h && h(e);
                            },
                            [M, h, I],
                        ),
                        T = n.useCallback(() => {
                            Z && M(), g && g();
                        }, [M, Z, g]),
                        A = n.useCallback(
                            (e) => {
                                C && M(), f && f(e);
                            },
                            [M, f, C],
                        );
                    if (!S || (!v && !w)) return null;
                    return n.createElement(r.Z, { actionLabel: o, contentStyle: t, enableMaskForDismiss: p, graphic: a, graphicDisplayMode: d || "none", headline: m, isFullHeightOnMobile: u, onAction: P, onClose: T, onSecondaryAction: A, secondaryActionLabel: y, subtext: b, supportUrl: E, withCloseButton: _ }, e ? n.createElement(e, null) : null);
                },
                m = n.memo(d);
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(807896),
                r = o(202784),
                i = o(325686),
                a = o(292627),
                s = o(537392),
                l = o(392237),
                c = o(365023),
                d = o(392027),
                m = o(774654),
                u = o(725516),
                p = o(443781);
            const h = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${m.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                g = (e) => {
                    const { "aria-label": t, label: o, onPress: g, scribeComponent: f, ...y } = e,
                        { loggedInUserId: E } = r.useContext(p.rC),
                        b = (0, u.z)(),
                        _ = r.useCallback(
                            (e) => {
                                b.scribe({ component: f, action: "click" }), g && g(e);
                            },
                            [b, g, f],
                        ),
                        w = m.ZM.useCollapsibleNavBars(),
                        Z = [...m.Ah({ elementPosition: "bottom" }), w && h.fabStaysAboveSafeArea];
                    return E
                        ? r.createElement(
                              a.Z.FloatingAction,
                              null,
                              r.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const a = e > l.default.theme.breakpoints.large,
                                      s = e > l.default.theme.breakpoints.medium,
                                      m = e < l.default.theme.breakpoints.micro,
                                      u = [h.root, s && h.rootMedium, a && h.rootLarge],
                                      p = [h.fab, a && h.fabLarge, m && h.fabMicro, Z];
                                  return r.createElement(
                                      i.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      r.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, s) => r.createElement(i.Z, (0, n.Z)({ ref: e() }, s({ style: p })), r.createElement(d.Z, (0, n.Z)({}, y, { "aria-label": t, label: a ? o : void 0, onPress: _, style: m && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => l });
            o(136728);
            var n = o(202784),
                r = o(387524),
                i = o(635510);
            const a = "/compose/post";
            class s extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                n = { pathname: a, state: (t && t()) || {} };
                            o.push(n);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: s } = this.props;
                    return n.createElement(r.Z, { "aria-label": e, href: a, icon: t, label: o, onPress: this._handlePress, scribeComponent: s, testID: i.Z.tweet });
                }
            }
            const l = s;
        },
        32677: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                r = o(111677),
                i = o.n(r),
                a = o(186444),
                s = o(355883);
            const l = i().j0179e90,
                c = i().ee69d769({ verb: "" }),
                d = n.createElement(a.default, null),
                m = ({ getLocationState: e, history: t }) => n.createElement(s.Z, { "aria-label": l, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        856522: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(9410),
                i = o(202784),
                a = (o(585488), o(277660)),
                s = o.n(a),
                l = o(23134);
            function c({ user: e, ...t }) {
                const o = s()(r.Z, e),
                    a = i.useMemo(() => (o ? { id_str: o.rest_id, screen_name: o.core?.screen_name || "", name: o.core?.name || "", follow_request_sent: o.legacy?.follow_request_sent || !1, protected: o.privacy?.protected || !1, following: o.relationship_perspectives?.following || !1, followed_by: o.relationship_perspectives?.followed_by || !1, super_following: o.super_following || void 0, super_follow_eligible: o.super_follow_eligible || void 0, super_followed_by: o.super_followed_by || void 0, blocking: o.relationship_perspectives?.blocking || void 0, highlightedLabel: o.affiliates_highlighted_label?.label ? { userLabelType: o.affiliates_highlighted_label.label.user_label_type || void 0 } : void 0 } : void 0), [o]);
                return i.createElement(l.C, (0, n.Z)({}, t, { isRelay: !0, user: a, userId: o?.rest_id ?? "" }));
            }
        },
        23134: (e, t, o) => {
            o.d(t, { C: () => B });
            o(136728);
            var n = o(202784),
                r = o(190286),
                i = o(723587),
                a = o(111677),
                s = o.n(a),
                l = o(615656),
                c = o(666670),
                d = o(757953),
                m = o(879596),
                u = o(323683),
                p = o(479506),
                h = o(942893),
                g = o(500002),
                f = o(233391),
                y = o(288955),
                E = o(71620),
                b = o(668214),
                _ = o(390387),
                w = o(601576),
                Z = o(919022);
            const C = (e, t) => t.user || Z.ZP.select(e, t.userId),
                I = (0, b.Z)()
                    .propsFromState(() => ({ isLoggedIn: _.Qb, user: C }))
                    .propsFromActions(() => ({ addToast: w.fz, cancelPendingFollow: Z.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, E.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: Z.ZP.fetchOneIfNeeded, follow: Z.ZP.follow, unblock: Z.ZP.unblock, unfollow: Z.ZP.unfollow }))
                    .withAnalytics(),
                v = (e) => `${e}-follow`,
                S = (e) => `${e}-unfollow`,
                M = (e) => `${e}-block`,
                P = (e) => `${e}-unblock`,
                T = (e) => `${e}-cancel`,
                A = (e) => `${e}-subscribe`,
                F = (e) => `${e}-manageSubscription`,
                k = s().hbe4feb5,
                x = s().df4c86b0,
                N = s().bba40ffa,
                R = s().f558829e,
                L = s().a6941096,
                O = s().j24c37b2,
                D = s().if8cd2a4,
                H = s().b5972260;
            class U extends n.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: t, isRelay: o, userId: n } = this.props;
                            n && !o && t(n).catch(e(c.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: t, user: o } = this.props;
                            o && e(o.id_str).catch(t({ defaultToast: { text: H }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, follow: o, isFollowNudge: n, onFollowClick: r, promotedContent: i, user: a } = this.props;
                            a && o(a.id_str, { promotedContent: i, isFollowNudge: n }).then(() => (a.protected && e({ text: k({ screenName: a.screen_name }) }), r && r(), this._scribe({ action: "follow" })), t({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unblock: o, user: n } = this.props;
                            n && (o(n.id_str, { promotedContent: t }).catch(e(m.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unfollow: o, user: n } = this.props;
                            if (n) return o(n.id_str, { promotedContent: t }).catch(e(u.X)), this._scribe({ action: "unfollow" });
                        }),
                        (this._handleSuperFollow = () => {
                            const { history: e, referringPage: t, user: o } = this.props;
                            if (o) return this._scribe({ element: "super_follow_subscribe_button", action: "click" }), e.push(`/${o.screen_name}/creator-subscriptions/subscribe`, { referring_page: t ?? "profile_intent" });
                        }),
                        (this._handleUnSuperFollow = () => {
                            const { history: e, user: t } = this.props;
                            if (t) return this._scribe({ element: "super_follow_unsubscribe_button", action: "click" }), e.push(`/${t.screen_name}/creator-subscriptions/manage`);
                        }),
                        (this.state = { showDialog: !1 });
                }
                componentDidMount() {
                    this.props.isLoggedIn && this._fetchUserIfNeeded(),
                        (this._followApiErrorHandlingConfiguration = {
                            ...d.H,
                            [l.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: D, dialogHeadline: N });
                                },
                            },
                            [l.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: L, dialogHeadline: N });
                                },
                            },
                            [l.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: R, dialogHeadline: x });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: t, isSuperFollowSubscriptionEnabled: o, isTransparent: a, relationshipMode: s, showRelationshipChangeConfirmation: l, size: c, style: d, user: m, userId: u } = this.props,
                        { dialogHeadline: p, dialogText: h, showDialog: g } = this.state,
                        E = m?.screen_name,
                        b = E ? `/${E}` : "",
                        _ = { follow: v(u), unfollow: S(u), cancel: T(u), block: M(u), unblock: P(u), subscribe: A(u), manageSubscription: F(u) },
                        w = !(!m?.follow_request_sent || !m.protected || m.following);
                    return (
                        !!m &&
                        n.createElement(
                            n.Fragment,
                            null,
                            g ? n.createElement(r.Z, { confirmButtonLabel: O, headline: p, onCancel: this._handleClose, onConfirm: this._handleClose, text: h, withCancelButton: !1 }) : null,
                            n.createElement(y.Z, { displayMode: f.BH.follow, postLoginPath: b, userFullName: m.name, userId: u }, (r) => n.createElement(i.Z, { buttonType: e, isBlocking: m.blocking, isFollowRequestSent: w, isFollowed: !!m.followed_by, isFollowing: !!m.following, isSuperFollowEligible: !!o && m.super_follow_eligible, isSuperFollowing: m.super_following, isTransparent: a, name: E, onCancelPendingFollow: r(this._handleCancelPendingFollow), onFollow: r(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: r(this._handleSuperFollow), onUnSuperFollow: r(this._handleUnSuperFollow), onUnblock: r(this._handleUnblock), onUnfollow: r(this._handleUnfollow), relationshipMode: s, showRelationshipChangeConfirmation: t && l, size: c, style: d, testIDs: _, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: t, element: o } = e,
                        { analytics: n, location: r, promotedContent: i, user: a } = this.props,
                        { items: s } = n.contextualScribeData,
                        l = s?.find((e) => e.item_type === p.Z.ItemType.USER && e.id === a?.id_str),
                        c = [];
                    a ? c.push({ ...l, ...h.Z.getUserItem(a, i) }) : l && c.push(l);
                    const d = r.query && r.query.screen_name ? { items: c, context: "profile_intent" } : { items: c };
                    return n.scribe({ element: o, action: t, data: d });
                }
            }
            const B = (0, g.ZP)(I(U));
        },
        330815: (e, t, o) => {
            o.d(t, { Z: () => I });
            var n = o(202784),
                r = o(392237),
                i = o(154003),
                a = o(111677),
                s = o.n(a),
                l = o(184605),
                c = o(980407),
                d = o(873637),
                m = o(668214),
                u = o(497294);
            const p = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, u.m3)(e, t.mediaId)[0] : void 0),
                h = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                g = (0, m.Z)()
                    .propsFromState(() => ({ media: p, mediaId: h }))
                    .propsFromActions(() => ({ processMedia: u.C4, updateMediaUpload: u._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                y = s().gd80afba,
                E = s().a753a870;
            class b extends n.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return n.createElement(i.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, E);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: o, media: n, mediaId: r, onDone: i, processMedia: a, updateMediaUpload: s } = this.props;
                                this.setState({ isProcessing: !0 });
                                const c = t.getCropData(),
                                    { originalMediaFile: d } = n || {},
                                    m = !d || (0 === c.top && 0 === c.left && c.width === d.width && c.height === d.height);
                                (0, l.Z)(r) &&
                                    (e
                                        ? (e(c), i())
                                        : (s({ id: r, cropData: m ? void 0 : c }),
                                          a(r).then(() => {
                                              this.setState({ isProcessing: !1 }), o.scribe({ action: "done" }), i();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = n.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: o, withAspectRatioOptions: r, withZoomControl: i } = this.props,
                        a = this._getMedia();
                    return n.createElement(c.Z, { backButtonType: "back", containerStyle: _.root, documentTitle: o || y, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: o || y }, n.createElement(d.Z, { defaultAspectRatio: e, media: a, ref: this._cropper, withAspectRatioOptions: r, withZoomControl: i }));
                }
            }
            const _ = r.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                w = g(b);
            var Z = o(757700);
            const C = r.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                I = (e) => n.createElement(Z.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: C.modal }, n.createElement(w, e));
        },
        253558: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(202784),
                r = o(154003),
                i = o(111677),
                a = o.n(i),
                s = o(71620),
                l = o(668214),
                c = o(92098),
                d = o(299226);
            const m = (e, t) => (t.communityId && t.userId ? c.Z.select(e, `${t.communityId}_${t.userId}`) : void 0),
                u = (0, l.Z)()
                    .propsFromState(() => ({ inviteActionResult: m }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, s.zr)("INVITE_TO_COMMUNITY_BUTTON"), inviteToCommunity: d.tV })),
                p = a().cd133486,
                h = a().hb1e378e,
                g = a().bcd6bb0e,
                f = "primaryFilled";
            const y = u(function (e) {
                const { communityId: t, createLocalApiErrorHandler: o, inviteActionResult: i, inviteToCommunity: a, onInvite: s, onInviteActionResultChange: l, userId: c, viewerInvited: d } = e,
                    m = (function (e) {
                        if (!e || "UserCommunityInviteAction" === e.__typename) return p;
                        switch (e.reason) {
                            case "UserIsMember":
                                return g;
                            case "UserIsInvited":
                                return h;
                            default:
                                return p;
                        }
                    })(i),
                    u = (function (e) {
                        return e && "UserCommunityInviteAction" !== e.__typename ? ("UserIsMember" === e.reason ? f : "primaryOutlined") : f;
                    })(i);
                n.useEffect(() => {
                    i && l(c, i);
                }, [i, c, l]);
                const y = "UserCommunityInviteAction" === i?.__typename;
                return !y && !d
                    ? null
                    : n.createElement(
                          r.ZP,
                          {
                              "aria-label": m,
                              disabled: !y,
                              onPress: () => {
                                  y &&
                                      a(t, c)
                                          .then(() => s && s(c))
                                          .catch(o());
                              },
                              size: "small",
                              type: u,
                          },
                          m,
                      );
            });
        },
        301758: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(807896),
                r = o(202784),
                i = o(235902),
                a = o(521288),
                s = o(401388),
                l = o(988566),
                c = o(725516),
                d = o(443781),
                m = o(71620),
                u = o(668214),
                p = o(491963),
                h = o(836255);
            const g = (e, t) => t.tweetId,
                f = (e, t) => {
                    const o = t.tweetId,
                        n = o && h.Z.select(e, o);
                    return n ? (0, p.z0)(e, n) : void 0;
                },
                y = (0, u.Z)()
                    .propsFromState(() => ({ community: f, hydratedTweet: h.Z.createHydratedTweetSelector(g) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: p.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: o, hydratedTweet: m, onAvatarClick: u, onMediaClick: p, onPress: h, onScreenNameClick: g, tweetId: f, withBirdwatchPivot: y = !0, ...E }) => {
                    const { featureSwitches: b, viewerUserId: _ } = r.useContext(d.rC),
                        w = (0, c.z)(),
                        Z = m?.community_id_str;
                    r.useEffect(() => {
                        Z && (0, s.Z)(e) && o(Z).catch(t());
                    }, [e, Z, t, o]);
                    const C = r.useCallback(
                            (e) => {
                                w.scribeAction("click"), h && h(e);
                            },
                            [h, w],
                        ),
                        I = !!y,
                        v = m && (0, l.D$)(m, _, e),
                        S = v && (0, l.rl)(v);
                    return r.createElement(i.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => b.isTrue("responsive_web_edit_tweet_enabled") || b.isTrue("subscriptions_feature_labs_1004") } }, r.createElement(a.Z, (0, n.Z)({}, E, { loggedInUserId: _, onAvatarClick: u, onMediaClick: p, onPress: C, onScreenNameClick: g, shouldShowAltLabelAlways: !0, socialContextProps: S, tweet: m, withBirdwatchPivot: I })));
                });
        },
        26232: (e, t, o) => {
            o.d(t, { Z: () => E });
            var n = o(202784),
                r = o(555874),
                i = o(111677),
                a = o.n(i),
                s = o(290402),
                l = o(965245),
                c = o(71620),
                d = o(668214);
            const m = (e, t) => t.module.selectFetchStatus(e),
                u = (e, t) => t.module.selectItems(e),
                p = (0, d.Z)()
                    .propsFromState((e) => ({ fetchStatus: m, items: u }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, c.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = a().i9028824,
                g = (e) => e,
                f = (e) => (t) => e(t.item);
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: o, numColumns: i, onScrollEnd: a, renderer: s, withoutHeadroom: c } = this.props;
                            return !t || i < 1 ? null : 1 === i ? n.createElement(l.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: g, items: t, noItemsRenderer: o, onNearEnd: this._handleNearEnd, onScrollEnd: a, renderer: s, withoutHeadroom: c }) : n.createElement(r.Z, { ListEmptyComponent: o, data: t, keyExtractor: g, numColumns: i, renderItem: f(s) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: o, fetchIfNeeded: n } = this.props;
                            (e ? o : n)().catch(t());
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
                    const { fetchStatus: e, module: t, retryMessage: o } = this.props;
                    return t ? n.createElement(s.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: o, retryable: !0 }) : null;
                }
            }
            y.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const E = p(y);
        },
        703738: (e, t, o) => {
            o.d(t, { z: () => a });
            var n = o(323265),
                r = o(655352),
                i = o(952793);
            const a = () => (0, i.hC)("rweb_sourcemap_migration") && (0, r.ZP)() && !n.ZP.isMobileOS();
        },
        621416: (e, t, o) => {
            o.d(t, { m: () => i });
            o(890103);
            var n = o(202784),
                r = o(175698);
            function i(e) {
                const t = (0, r.A)();
                return [
                    !!t && !t.flags[e],
                    n.useCallback(() => {
                        t?.addFlag(e);
                    }, [t, e]),
                ];
            }
        },
        753291: (e, t, o) => {
            o.d(t, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({ loader: () => Promise.all([o.e("icons.0"), o.e("icons.16"), o.e("icons.27"), o.e("icons.21"), o.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"), o.e("loader.MediaPickerWithPreview")]).then(o.bind(o, 199127)) });
        },
        666670: (e, t, o) => {
            o.d(t, { F: () => a });
            var n = o(516951),
                r = o(615656),
                i = o(51525);
            const a = { [r.ZP.AddressBookLookupNotFound]: { customAction: i.vv }, [r.ZP.GenericUserNotFound]: { customAction: n.Z }, [r.ZP.OtherUserSuspended]: { customAction: n.Z }, showToast: !0 };
        },
        757953: (e, t, o) => {
            o.d(t, { H: () => h });
            var n = o(111677),
                r = o.n(n),
                i = o(516951),
                a = o(615656),
                s = o(51525);
            const l = r().j4292c24,
                c = r().a0ba5842,
                d = r().i859a9d4,
                m = r().a5202b82,
                u = r().f8cbf714,
                p = r().f2e66452,
                h = { defaultToast: { text: m }, [a.ZP.CurrentUserSuspended]: { toast: { text: p, action: { label: d, link: "https://support.twitter.com/articles/15790" } } }, [a.ZP.DuplicateFollowRequest]: { customAction: i.Z }, [a.ZP.FollowBlockedUserError]: { toast: { text: l } }, [a.ZP.FollowError]: { customAction: s.w1 }, [a.ZP.FollowRateLimitExceeded]: { toast: { action: { label: d, link: "https://support.twitter.com/articles/66885" }, text: c } }, [a.ZP.TargetUserNotFound]: { toast: { text: u } } };
        },
        323683: (e, t, o) => {
            o.d(t, { X: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().e1a0aaca }, showToast: !0 };
        },
        854594: (e, t, o) => {
            o.d(t, { l: () => r, v: () => i });
            var n = o(202784);
            const r = n.createContext(void 0),
                i = () => n.useContext(r);
        },
        988566: (e, t, o) => {
            o.d(t, { D$: () => s, Du: () => d, GK: () => c, Iv: () => u, pz: () => p, rl: () => m });
            var n = o(202784),
                r = o(688715),
                i = o(946409),
                a = o(788993);
            const s = (e, t, o) => (e.retweeted_status ? l(e, t) : e.community_id_str && o ? c(e, o) : void 0),
                l = (e, t) => {
                    if (e.retweeted_status) return { contextType: a.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                c = (e, t) => ({ contextType: a.Z.Community, landingUrl: { url: (0, r.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                d = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: o }) => {
                    if (t?.topicContext) {
                        const n = t.topicContext;
                        return { contextType: e ? a.Z.TextOnly : a.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${n.topicId}`, urlType: "DeepLink" }, text: o?.name, topicContext: n };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                m = (e) => {
                    const { contextType: t, landingUrl: o, text: n } = e;
                    return { link: o ? (0, i.s9)(o) : void 0, text: n, contextType: t };
                },
                u = { contextType: a.Z.Pin, text: "" },
                p = n.createContext(void 0);
        },
        457268: (e, t, o) => {
            o.d(t, { V: () => i });
            var n = o(125363),
                r = o(742602);
            const i = (e) => (0, n.v9)((t) => (0, r.LO)(t, { communityId: e }));
        },
        797362: (e, t, o) => {
            o.d(t, { A: () => i, J: () => a });
            var n = o(189676),
                r = o(545521);
            const i = (e) => (0, r.Z)({ contextSuffix: "COMMUNITIES_MODERATION_CASES_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchModerationCasesSlice, getEndpointParams: (t) => ({ ...t, communityId: e }), sliceKey: `moderationCasesSlice-${e}` }),
                a = (e) => (0, r.Z)({ contextSuffix: "COMMUNITIES_TWEET_MODERATION_LOG_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchTweetModerationLogSlice, getEndpointParams: (t) => ({ ...t, communityId: e }), sliceKey: `tweetModerationLogSlice-${e}` });
        },
        874684: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(189676),
                r = o(750085),
                i = o(218951);
            const a = (e) => (0, i.Z)({ timelineId: `communityAbout-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchAboutTimeline, getEndpointParams: (t) => ({ communityId: e }) }, context: "FETCH_COMMUNITY_ABOUT_TIMELINE", perfKey: "communityAbout", formatResponse: r.Z });
        },
        688688: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(189676),
                r = o(750085);
            const i = (0, o(218951).Z)({ timelineId: "communitiesDiscoveryTimeline", network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchCommunityDiscoveryTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_COMMUNITIES_DISCOVERY_TIMELINE", perfKey: "communitiesDiscoveryTimeline", formatResponse: r.Z });
        },
        910212: (e, t, o) => {
            o.d(t, { L: () => s });
            var n = o(189676),
                r = o(750085),
                i = o(218951);
            const a = (e, t) => `communityHashtags-${e}-${t.join("-")}`,
                s = (e, t) => (0, i.Z)({ timelineId: a(e, t), network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchCommunityHashtagsTimeline, getEndpointParams: ({ count: o, cursor: n }) => ({ count: o, cursor: "string" == typeof n ? n : void 0, communityId: e, hashtags: t }) }, context: "FETCH_COMMUNITY_HASHTAGS_TIMELINE", perfKey: "communityHashtags", formatResponse: r.Z });
        },
        543066: (e, t, o) => {
            o.d(t, { F7: () => c, Kc: () => l, S_: () => s, tD: () => a });
            var n = o(189676),
                r = o(750085),
                i = o(218951);
            const a = (0, i.Z)({ timelineId: "communitiesMainDiscoveryModule", network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchCommunitiesMainDiscoveryModule, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_COMMUNITIES_DISCOVERY_MODULE", perfKey: "communitiesMainDiscoveryModule", formatResponse: r.Z }),
                s = (0, i.Z)({ timelineId: "communitiesMainTimeline", network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchCommunitiesMainTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_COMMUNITIES_MAIN_TIMELINE", perfKey: "communitiesMainTimeline", formatResponse: r.Z }),
                l = (0, i.Z)({ timelineId: "communitiesRankedTimeline", network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchCommunitiesRankedTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_COMMUNITIES_RANKED_TIMELINE", perfKey: "communitiesRankedTimeline", formatResponse: r.Z }),
                c = (e) => (0, i.Z)({ timelineId: `communitiesExploreTimeline-${e || ""}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchCommunitiesExploreTimeline, getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, topicId: e }) }, context: "FETCH_COMMUNITIES_EXPLORE_TIMELINE", perfKey: "communitiesExploreTimeline", formatResponse: r.Z });
        },
        764443: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(189676),
                r = o(750085),
                i = o(218951);
            const a = (e) => (0, i.Z)({ timelineId: `communityMemberships-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchCommunityMemberships, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_COMMUNITY_MEMBERSHIPS_TIMELINE", perfKey: "communityMemberships", formatResponse: r.Z });
        },
        35633: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(644829),
                r = o(750085),
                i = o(218951);
            function a(e) {
                return (0, i.Z)({ timelineId: "global-communities-latest-post-search-timeline", context: "FETCH_GLOBAL_COMMUNITIES_LATEST_POST_SEARCH_TIMELINE", formatResponse: r.Z, network: { getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(n.Z).fetchGlobalCommunitiesLatestPostSearch }, perfKey: "global-communities-latest-post-search" });
            }
        },
        65241: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(644829),
                r = o(750085),
                i = o(218951);
            function a(e) {
                return (0, i.Z)({ timelineId: "global-communities-post-search-timeline", context: "FETCH_GLOBAL_COMMUNITIES_POST_SEARCH_TIMELINE", formatResponse: r.Z, network: { getEndpointParams: ({ count: t, cursor: o }) => ({ count: t, cursor: "string" == typeof o ? o : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(n.Z).fetchGlobalCommunitiesPostSearch }, perfKey: "global-communities-post-search" });
            }
        },
        127218: (e, t, o) => {
            o.d(t, { C: () => y });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(437429),
                s = o.n(a),
                l = o(57074),
                c = o.n(l),
                d = o(10622),
                m = o.n(d),
                u = o(585488),
                p = o(71620),
                h = o(163889),
                g = o(312771),
                f = o(535338);
            function y(e, t, o) {
                const [r, a] = n.useState(!1),
                    [l, d] = n.useState(null),
                    y = s()(),
                    E = c()(t),
                    b = (0, p.po)(),
                    _ = (0, f.p)(e, E, o);
                return n.useMemo(() => {
                    const t = (0, u.getRequest)(e).params?.metadata?.sliceInfoPath;
                    i()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: o, previous_cursor: n } =
                            (function (e, t) {
                                try {
                                    i()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let o = e;
                                    for (const e of t) i()(!!o, "The provided path is invalid."), i()("string" == typeof e, "Unexpected value for path!"), (o = o?.[e]);
                                    return o;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(_, t) || {},
                        s = (t) => {
                            r ||
                                (a(!0),
                                m()(y, e, { ...E, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), d(e), b(e);
                                    },
                                }));
                        },
                        c = () => {
                            o && s(o);
                        },
                        p = () => {
                            n && s(n);
                        },
                        f = () => {
                            s(void 0);
                        };
                    return l ? { subsequentFetchStatus: g.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: p, refetch: f, data: _, hasNext: Boolean(o), hasPrevious: Boolean(n) } : { subsequentFetchStatus: r ? g.ZP.LOADING : g.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: p, refetch: f, data: _, hasNext: Boolean(o), hasPrevious: Boolean(n) };
                }, [e, _, r, l, y, E, b]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-e019dbda.7dbb8f2a.js.map
