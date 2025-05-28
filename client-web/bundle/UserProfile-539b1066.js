"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-539b1066"],
    {
        731305: (e, t, n) => {
            n.d(t, { Xy: () => o, ZQ: () => s, jB: () => a, nf: () => r, zi: () => c });
            const r = (e, t) => e === t.id_str,
                s = (e, t, n, s = !1) => !r(e, n) && (n.blocking || (!s && n.blocked_by) || t),
                a = (e, t, n, s = !1) => !r(e, n) && ((!s && n.blocked_by) || t),
                o = (e, t, n, s = !1) => !e || r(e, n) || n.blocking || (!s && n.blocked_by) || t || (!!n.protected && !n.following),
                c = ({ isSoftBlockEnabled: e = !1, isWithheld: t, showBlockedTweets: n, user: s, viewerUserId: a }) => !r(a, s) && (!a || (s.blocking && !n) || (!e && s.blocked_by) || t || (!!s.protected && !s.following));
        },
        217491: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                s = n(325686),
                a = n(682474),
                o = n(392237),
                c = n(621389),
                i = n(935496),
                l = n(708852),
                d = n(823161);
            const m = (e) => {
                    const t = (0, l.tj)();
                    return r.createElement(s.Z, { "aria-hidden": !0, style: c.Z.avatar }, r.createElement(d.default, { borderColor: "cellBackground", borderWidth: t ? "large" : "medium", focusable: !1, size: "custom" }));
                },
                u = r.memo(m);
            var p = n(366635);
            const f = (e) => {
                    const { fullUser: t, restrictedUser: n } = e,
                        a = t || n,
                        o = a.name && a.screen_name,
                        i = o ? a.name : `@${a.screen_name}`;
                    return r.createElement(s.Z, { style: c.Z.names }, r.createElement(p.Z, { name: i, nameSize: "headline1", screenName: o ? a.screen_name : void 0, withStackedLayout: !0 }));
                },
                _ = r.memo(f),
                g = (e) => {
                    const { fullUser: t, restrictedUser: n, shouldDisplayUserActionSheet: l } = e;
                    return r.createElement(s.Z, null, r.createElement(s.Z, { style: c.Z.banner }, r.createElement(a.Z, { ratio: o.default.theme.aspectRatios.profileBanner })), r.createElement(s.Z, { style: [c.Z.content, c.Z.withheld] }, r.createElement(s.Z, { style: c.Z.avatarAndButton }, r.createElement(u, null), r.createElement(s.Z, { style: c.Z.buttonAffordance }), l && t && r.createElement(i.Z, { buttonStyle: c.Z.menuSheetButton, user: t })), r.createElement(_, { fullUser: t, restrictedUser: n })));
                },
                h = r.memo(g);
        },
        935496: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(807896),
                s = n(537107),
                a = n(202784),
                o = (n(585488), n(277660)),
                c = n.n(o),
                i = n(154003),
                l = n(111677),
                d = n.n(l),
                m = n(149170),
                u = n(90411);
            const p = "userActions",
                f = d().h63a5c3c,
                _ = a.createElement(m.default, null),
                g = (e) => {
                    const { buttonStyle: t, promotedContent: n, user: r } = e,
                        s = a.useCallback((e) => a.createElement(u.ZP, { onClose: e, promotedContent: n, user: r, view: "profile" }), [n, r]);
                    return a.createElement(i.ZP, { "aria-label": f, hoverLabel: { label: f }, icon: _, renderMenu: s, style: t, testID: p, type: "primaryOutlined" });
                },
                h = a.memo((e) => {
                    const { user: t, ...n } = e,
                        o = c()(s.Z, t),
                        i = a.useMemo(() => {
                            const { avatar: e, core: t, legacy: n, privacy: r, relationship_perspectives: s } = o;
                            return { id_str: o.rest_id, blocking: s?.blocking ?? !1, blocked_by: s?.blocked_by ?? !1, description: n?.description || "", following: s?.following ?? !1, followed_by: s?.followed_by ?? !1, muting: s?.muting || void 0, name: t?.name || "", profile_image_url_https: e?.image_url || "", promoted_content: n?.promoted_content ? { impression_id: n.promoted_content.impression_id || void 0, disclosure_type: n.promoted_content.disclosure_type || void 0 } : void 0, protected: r?.protected ?? !1, screen_name: t?.screen_name || "", want_retweets: n?.want_retweets || void 0 };
                        }, [o]);
                    return a.createElement(g, (0, r.Z)({}, n, { user: i }));
                });
            function Z(e) {
                return e.user ? a.createElement(g, { buttonStyle: e.buttonStyle, promotedContent: e.promotedContent, user: e.user }) : e.userRef ? a.createElement(h, { buttonStyle: e.buttonStyle, promotedContent: e.promotedContent, user: e.userRef }) : null;
            }
            const b = a.memo(Z);
        },
        621389: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => {
                const t = { width: "25%", minWidth: e.spaces.space48 };
                return { avatar: { ...t, height: "auto", marginTop: "-15%", marginBottom: e.spaces.space12 }, avatarSize: t, avatarAndButton: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }, buttonAffordance: { height: e.spacesPx.space36 }, content: { paddingTop: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, withheld: { paddingBottom: e.spaces.space12 }, banner: { backgroundColor: e.colors.gray200 }, menuSheetButton: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 }, names: { marginTop: e.spaces.space4, marginBottom: e.spaces.space12, flexDirection: "row", flexWrap: "wrap" }, namesInner: { flexDirection: "column", marginEnd: e.spaces.space8, flexShrink: 1 }, longNameButtons: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space4 } };
            });
        },
        930351: (e, t, n) => {
            n.d(t, { Z: () => w });
            var r = n(202784),
                s = n(111677),
                a = n.n(s),
                o = n(163889),
                c = n(42508);
            const i = a().cb339f26,
                l = a().hf06085e,
                d = a().aa959f36,
                m = a().hf06085e,
                u = a().jf604336,
                p = a().c9bfda48,
                f = a().jf604336,
                _ = a().g29ebf26,
                g = a().aa959f36,
                h = a().jcfb7fba,
                Z = { default: i, fake_account: d, offensive_profile_content: u, sensitive_media: f, timeout: g },
                b = { default: l, fake_account: m, offensive_profile_content: p, sensitive_media: _, timeout: h };
            var y = n(416699);
            const E = a().d834ab9c,
                v = ({ onConfirm: e, screenName: t, userProfileInterstitialType: n }) => {
                    const { header: s, message: a } = ((e) => (e && Object.values(c.Z).indexOf(e) >= 0 ? { header: Z[e], message: b[e] } : ((0, o.ZP)(`Unrecognized Profile Interstitial Type: ${String(e)}`), { header: Z.default, message: b.default })))(n),
                        i = r.useCallback(() => {
                            e();
                        }, [e]);
                    return r.createElement(y.Z, { buttonText: E, header: s, message: a, onButtonPress: i, screenName: t });
                },
                w = r.memo(v);
        },
        21437: (e, t, n) => {
            n.d(t, { X: () => m, Z: () => u });
            var r = n(202784),
                s = n(688715),
                a = n(731708),
                o = n(111677),
                c = n.n(o),
                i = n(416699);
            const l = c().bd598c70,
                d = (0, s.ju)("https://support.x.com/articles/14016"),
                m = (e) => {
                    const { screenName: t } = e,
                        n = r.useMemo(() => r.createElement(c().I18NFormatMessage, { $i18n: "i1824ce3", screenName: t }, r.createElement(a.ZP, { link: d }, c().e617164b)), [t]);
                    return r.createElement(i.Z, { header: l, message: n, screenName: t });
                },
                u = r.memo(m);
        },
        220544: (e, t, n) => {
            n.d(t, { Z: () => u, i: () => m });
            var r = n(202784),
                s = n(731708),
                a = n(111677),
                o = n.n(a),
                c = n(686689),
                i = n(416699);
            const l = o().g8475f82,
                d = r.createElement(o().I18NFormatMessage, { $i18n: "da9d52d7" }, r.createElement(s.ZP, { link: "https://support.x.com/articles/18311" }, o().j5e1cf59)),
                m = (e) => {
                    const { screenName: t, suspendHeader: n, suspendMessage: s } = e,
                        a = n ? r.createElement(c.Z, { entities: n.entities, rtl: n.rtl, text: n.text }) : l,
                        o = s ? r.createElement(c.Z, { entities: s.entities, rtl: s.rtl, text: s.text }) : d;
                    return r.createElement(i.Z, { header: a, message: o, screenName: t });
                },
                u = r.memo(m);
        },
        644917: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                s = n(310452),
                a = n(731708),
                o = n(354149),
                c = n(111677),
                i = n.n(c),
                l = n(416699);
            const d = (e) => {
                    const { user: t } = e,
                        n = i().gbf342a4;
                    if (!t) return null;
                    const { description: c, entities: d, id_str: m, screen_name: u } = t;
                    if (!c) return null;
                    const p = s.ZP.descriptionTextParts(c, d),
                        f = r.createElement(
                            a.ZP,
                            { align: "center", color: "gray700", dir: "auto" },
                            p.map((e, t) => r.createElement(o.ZP, { key: `user_${m}_textpart_${t}`, linkify: !0, part: e })),
                        );
                    return r.createElement(l.Z, { header: n, message: f, screenName: u });
                },
                m = r.memo(d);
        },
        923790: (e, t, n) => {
            n.d(t, { C: () => f });
            var r = n(202784),
                s = n(325686),
                a = n(310452),
                o = n(731708),
                c = n(354149),
                i = n(420412),
                l = n(392237),
                d = n(111677);
            const m = n.n(d)().gbf342a4,
                u = (e) => {
                    const { user: t } = e;
                    if (!t) return null;
                    const { description: n, entities: l, id_str: d } = t;
                    if (!n) return null;
                    const u = a.ZP.descriptionTextParts(n, l);
                    return r.createElement(
                        s.Z,
                        null,
                        r.createElement(
                            s.Z,
                            { style: p.withheldMessageRoot },
                            r.createElement(o.ZP, { align: "center", size: "title4", style: p.withheldMessageHeader, weight: "bold" }, m),
                            r.createElement(
                                o.ZP,
                                { align: "center", color: "gray700", dir: "auto" },
                                u.map((e, t) => r.createElement(c.ZP, { key: `user_${d}_textpart_${t}`, linkify: !0, part: e })),
                            ),
                        ),
                        r.createElement(i.Z, null),
                        e.children,
                    );
                },
                p = l.default.create((e) => ({ withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 }, withheldMessageHeader: { paddingBottom: e.spaces.space4 } })),
                f = r.memo(u);
        },
        303800: (e, t, n) => {
            n.r(t), n.d(t, { UserProfileScreenContainer: () => C, default: () => I });
            var r = n(807896),
                s = n(202784),
                a = n(71620),
                o = n(668214),
                c = n(704279),
                i = n(390387),
                l = n(38562),
                d = n(836255),
                m = n(919022);
            const u = (e, t) => {
                    const { location: n, match: r } = t;
                    return r && r.params && r.params.screenName ? r.params.screenName : n && n.query && n.query.screen_name && "string" == typeof n.query.screen_name ? n.query.screen_name : "";
                },
                p = (e, t) => m.ZP.selectIsUserSuspended(e, u(0, t)),
                f = (e, t) => m.ZP.selectUserSuspendedHeader(e, u(0, t)),
                _ = (e, t) => m.ZP.selectUserSuspendMessage(e, u(0, t)),
                g = (e, t) => m.ZP.selectIsUserWithheld(e, u(0, t)),
                h = (e, t) => m.ZP.selectByScreenName(e, u(0, t)),
                Z = (0, m.W3)([m.pL]),
                b = (e, t) => Z(e, u(0, t)),
                y = (e, t) => t.location.pathname.includes("/intent/"),
                E = (e, t) => m.ZP.selectIsUserNotFound(e, u(0, t)),
                v = (e, t) => {
                    const n = h(e, t);
                    return !!n && m.ZP.selectIsLoading(e, n.id_str);
                },
                w = (e, t) => {
                    const { location: n } = t,
                        { promotedTweetState: r } = (n && n.state) || {},
                        s = h(e, t);
                    return r || (s && s.promoted_content);
                },
                k = (e, t) => {
                    const n = h(e, t);
                    return n && n.profile_interstitial_type ? n.profile_interstitial_type : null;
                },
                P = (e, t) => {
                    const n = ((e, t) => {
                        const n = h(e, t);
                        if (n?.pinned_tweet_ids_str?.length) return n.pinned_tweet_ids_str[0];
                    })(e, t);
                    return n ? d.Z.selectHydrated(e, n) : void 0;
                },
                S = (0, o.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: l.f1, fetchStatus: b, isActiveCreator: i.WM, isIntentRoute: y, isNotFound: E, isRefreshing: v, isSuspended: p, suspendHeader: f, suspendMessage: _, isWithheld: g, pinnedTweet: P, promotedContent: w, screenName: u, superFollowersCount: i.cl, user: h, userProfileInterstitialType: k, userLanguage: i.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, a.zr)("USER_PROFILE_SCREEN"), fetchOneUser: m.ZP.fetchOne, fetchOneByScreenNameWithExtraFieldsIfNeeded: m.ZP.fetchOneByScreenNameWithExtraFieldsIfNeeded, fetchSettingsIfNeeded: l.Sb, scribeAction: c.n }));
            var N = n(984915),
                x = n(722176);
            const C = (e) => s.createElement(N.Z, { userId: e.user && e.user.id_str }, ({ scribeNamespace: t }) => s.createElement(x.Z, (0, r.Z)({}, e, { scribeNamespace: t }))),
                I = S(C);
        },
        918588: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(380327),
                s = (n(585488), n(712696)),
                a = n.n(s);
            const o = r.Z;
            const c = function () {
                const e = a()(o, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, t) => e + (t?.campaigns?.total_count ?? 0), 0);
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-539b1066.ede5b03a.js.map
