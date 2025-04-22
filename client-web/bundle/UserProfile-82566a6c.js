"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-82566a6c"],
    {
        787379: (e, t, r) => {
            r.d(t, { _: () => l });
            var n = r(729002),
                s = (r(585488), r(990242)),
                i = r.n(s);
            const l = (e) => {
                const t = i()(n.Z, e);
                return t ? { description: t?.description ? { urls: t.description.urls ? t.description.urls.map((e) => ({ display_url: e.display_url || "", expanded_url: e.expanded_url || "", indices: e.indices ? e.indices.slice() : [], url: e.url || "" })) : [] } : {} } : {};
            };
        },
        932782: (e, t, r) => {
            r.d(t, { Z: () => Cn });
            var n = r(202784),
                s = r(325686),
                i = r(392237),
                l = r(443781),
                o = r(170371),
                a = r(703738),
                c = r(88660),
                u = r(507986),
                d = r(293115),
                m = r(621389),
                f = r(35468),
                p = r(975950),
                _ = r(807896),
                h = r(857196),
                g = (r(585488), r(277660)),
                b = r.n(g),
                y = r(530525),
                E = r(708852),
                w = r(433460),
                Z = r(823161),
                v = r(674132),
                P = r.n(v),
                C = r(71620),
                I = r(690282),
                k = r(725516),
                S = r(125363),
                B = r(624479),
                x = r(412876),
                N = r(201123),
                O = r(668214);
            const R = (e, t) => (0, B.cY)(e, t.userId),
                U = (e, t) => {
                    const r = B.ZP.select(e, t.userId);
                    return r?.refresh_delay_secs ? 1e3 * r.refresh_delay_secs : 1e3 * B.vj;
                },
                T = (0, O.Z)().propsFromState(() => ({ userPresencePollingIntervalMs: U, userSpace: R })),
                D = y.Z.createLayoutCache(),
                F = { opensProfilePhoto: P().f30795d0 },
                W = n.memo((e) => {
                    const { isOwnProfile: t, isWithheld: r, profileImageUrlHttps: s, screenName: i, user: o, userId: a, userPresencePollingIntervalMs: c, userSpace: u } = e,
                        d = (0, E.tj)(),
                        f = (0, k.z)(),
                        { featureSwitches: p, viewerUserId: h } = (0, l.QZ)(),
                        g = (0, S.I0)(),
                        b = (0, C.n7)("SELECT_SPACE"),
                        y = Boolean(h && (p.isTrue("voice_rooms_recent_search_audiospace_ring_enabled") || p.isTrue("voice_rooms_typeahead_audiospace_ring_enabled"))),
                        v = n.useCallback(() => {
                            if (y) return g(B.ZP.fetchManyIfNeeded([a])).catch(b({}));
                        }, [b, g, y, a]);
                    n.useEffect(() => {
                        v();
                    }, [v]),
                        (0, I.Z)(() => v(), y ? c : void 0);
                    const P = !t && r,
                        O = P || !s ? void 0 : s,
                        R = n.useMemo(() => {
                            const e = {
                                imageLayoutCache: D,
                                onClick: (e) => {
                                    f.scribe({ element: "avatar", action: "click" });
                                },
                                size: "custom",
                                style: m.Z.avatar,
                            };
                            return u && y ? { ...e, "aria-label": u["aria-label"], link: u.link } : P ? e : { ...e, "aria-label": F.opensProfilePhoto, link: { pathname: `/${i}/photo` } };
                        }, [P, y, i, u, f]);
                    return u && y ? (o ? n.createElement(N.o, (0, _.Z)({ presenceRingType: u.presenceRingType, user: o }, R)) : n.createElement(w.Z, (0, _.Z)({ presenceRingType: u.presenceRingType, screenName: i, uri: O }, R))) : o ? n.createElement(x.Y, (0, _.Z)({ borderColor: "cellBackground", borderWidth: d ? "large" : "medium", user: o }, R)) : n.createElement(Z.default, (0, _.Z)({ borderColor: "cellBackground", borderWidth: d ? "large" : "medium", screenName: i, uri: O }, R));
                }),
                L = n.memo((e) => {
                    const { user: t, ...r } = e,
                        s = b()(h.Z, t);
                    return n.createElement(W, (0, _.Z)({ profileImageUrlHttps: s.legacy?.profile_image_url_https ?? "", screenName: s.legacy?.screen_name ?? "", user: s, userId: s.rest_id }, r));
                });
            const M = n.memo(
                T(function (e) {
                    if (e.user) {
                        const { user: t, userRef: r, ...s } = e;
                        return n.createElement(W, (0, _.Z)({ profileImageUrlHttps: e.user.profile_image_url_https, screenName: e.user.screen_name, userId: e.user.id_str }, s));
                    }
                    if (e.userRef) {
                        const { user: t, userId: r, userRef: s, ...i } = e;
                        return n.createElement(L, (0, _.Z)({ user: e.userRef }, i));
                    }
                    return null;
                }),
            );
            var V = r(537500),
                A = r(682474),
                z = r(530732),
                H = r(439592),
                j = r(483677),
                $ = r(965728);
            const q = y.Z.createLayoutCache(),
                Q = n.memo(({ dominantColor: e, isOwnProfile: t, isWithheld: r, profileBannerUrl: l, screenName: o }) => {
                    const a = !t && r,
                        c = e ? (0, $.xr)(e) : i.default.theme.colors.gray200;
                    return a || !l ? n.createElement(s.Z, { "data-testid": "hiddenBanner", style: m.Z.banner }, n.createElement(A.Z, { ratio: i.default.theme.aspectRatios.profileBanner, style: { backgroundColor: c } })) : n.createElement(z.Z, { "aria-hidden": !0, link: `/${o}/header_photo` }, n.createElement(y.Z, { "aria-label": "", aspectMode: H.Z.exact(i.default.theme.aspectRatios.profileBanner), backgroundColor: c, image: l, layoutCache: q }));
                }),
                X = n.memo((e) => {
                    const t = b()(V.Z, e.user),
                        r = n.useMemo(() => {
                            const e = t.legacy?.profile_banner_extensions?.mediaColor?.r?.ok?.palette;
                            if (!e) return null;
                            const r = e.map(({ percentage: e, rgb: { blue: t, green: r, red: n } }) => ({ rgb: { red: n, green: r, blue: t }, percentage: e }));
                            return j.Z.get(r);
                        }, [t.legacy?.profile_banner_extensions]);
                    return n.createElement(Q, { dominantColor: r, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, profileBannerUrl: t.legacy?.profile_banner_url, screenName: t.legacy?.screen_name ?? "" });
                });
            function Y(e) {
                const t = n.useMemo(() => {
                    const t = e?.user?.profile_banner_extensions_media_color?.palette;
                    return t ? j.Z.get(t) : null;
                }, [e.user]);
                return e.user ? n.createElement(Q, { dominantColor: t, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, profileBannerUrl: e.user.profile_banner_url, screenName: e.user.screen_name }) : e.userRef ? n.createElement(X, { isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, user: e.userRef }) : null;
            }
            const J = n.memo(Y);
            r(136728);
            var K = r(144956),
                G = r(107267),
                ee = r(154003),
                te = r(717160),
                re = r(35785),
                ne = r(321835),
                se = r(293988),
                ie = r(23134),
                le = r(457566),
                oe = r(258199),
                ae = r(948503),
                ce = r(26088),
                ue = r(241304),
                de = r(952793),
                me = r(103335),
                fe = r(390387),
                pe = r(340130),
                _e = r(979512),
                he = r(935496);
            const ge = "sendDMFromProfile",
                be = "editProfileButton",
                ye = P().g7088266,
                Ee = P().gd7acb84,
                we = P().b7636014,
                Ze = n.createElement(te.default, null),
                ve = n.createElement(re.default, null),
                Pe = P().haad225c,
                Ce = P().fc7db594,
                Ie = n.memo(({ blockedBy: e, blocking: t, canDm: r, defaultProfileImage: i, description: o, following: a, isWithheld: c, notifications: u, onFollowButtonOffscreen: d, profileBannerUrl: m, promotedContent: f, superFollowEligible: p, superFollowing: _, user: h, userId: g, userRef: b, viewerUserId: y }) => {
                    const E = (0, k.z)(),
                        w = (0, G.useHistory)(),
                        { userClaims: Z } = n.useContext(l.rC),
                        v = (0, de.hC)("super_follow_android_web_subscription_enabled"),
                        P = (0, de.hC)("responsive_web_profile_header_search_button_enabled"),
                        C = (0, S.v9)(fe.Lz),
                        I = g === y,
                        B = c && !I,
                        x = r && y && !t && !e && !B,
                        N = y && !t && !e && !B && !C,
                        O = !I && h?.screen_name && P,
                        R = y && !I && !B,
                        U = (0, de.hC)("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") && u && !a,
                        T = ((0, de.hC)("responsive_web_device_follow_without_user_follow_enabled") || U) && !h?.protected,
                        D = (0, de.hC)("rweb_tipjar_consumption_enabled"),
                        F = (0, de.hC)("responsive_web_grok_profile_summary_enabled"),
                        W = (0, de.JY)("responsive_web_grok_profile_summary_min_followers", 1e6),
                        L = (0, de.JY)("responsive_web_grok_profile_summary_min_posts", 100),
                        M = !h?.verified_type || "User" === h?.verified_type,
                        V = F && !h?.protected && M && (h?.statuses_count ?? 0) > L && (h?.followers_count ?? 0) > W,
                        { openGrok: A } = (0, _e.Z)(),
                        z = (a || T) && y && !t && !e && !c,
                        H = (0, de.hC)("subscriptions_sign_up_enabled") && Z.isTrueAndEnabled("subscriptions_feature_can_gift_premium") && h?.premium_gifting_eligible,
                        j = i && !o && !m,
                        $ = C;
                    return c
                        ? null
                        : n.createElement(
                              s.Z,
                              { style: Be.buttons },
                              R && n.createElement(he.Z, { buttonStyle: Be.button, promotedContent: f, user: h, userRef: b }),
                              D ? n.createElement(ue.Z, { style: Be.button, userId: g }) : null,
                              V
                                  ? n.createElement(ee.ZP, {
                                        "aria-label": Ce,
                                        hoverLabel: { label: Ce },
                                        icon: n.createElement(le.x1, null),
                                        onPress: () => {
                                            h?.screen_name && (E.scribe({ element: "grok_profile_summary_button", action: "click" }), A({ text: `@${h.screen_name}`, autoSubmit: !0, source: "user_profile_summary" }));
                                        },
                                        style: Be.button,
                                    })
                                  : null,
                              y && I && !$ ? n.createElement(ee.ZP, { link: j ? "/i/flow/setup_profile" : "/settings/profile", style: Be.lastButton, testID: be, type: "primaryOutlined" }, j ? Ee : ye) : null,
                              O && n.createElement(ae.r, { fullName: h?.name, screenName: h?.screen_name, style: Be.button, userId: g }),
                              !I &&
                                  x &&
                                  n.createElement(ee.ZP, {
                                      "aria-label": we,
                                      hoverLabel: { label: we },
                                      icon: Ze,
                                      onPress: () => {
                                          if (y) {
                                              const e = (0, me.Z)(g, y);
                                              E.scribe({ element: "message", action: "click", data: { conversation_id: e, conversation_participant_count: 2, conversation_type: pe.NK.ONE_TO_ONE, inbox_type: pe.H6.NOT_AVAILABLE } }), w.push(`/messages/${e}`);
                                          }
                                      },
                                      style: Be.button,
                                      testID: ge,
                                      type: "primaryOutlined",
                                  }),
                              !I && N && n.createElement(oe.Z, { buttonStyle: Be.button, userId: g }),
                              !I && z && n.createElement(se.Z, { allowPromptForPush: !0, isDeviceFollowWithoutUserFollow: T && !a, isFollowing: u, style: Be.button, userId: g }),
                              !I && h?.screen_name && H && n.createElement(ee.ZP, { "aria-label": Pe, hoverLabel: { label: Pe }, icon: ve, link: `/${h?.screen_name}/gift-premium`, style: Be.button }),
                              !I && v && p && !_ ? n.createElement(ce.Z, { isFollowing: a, isSuperFollowing: _, style: Be.button, userId: g }) : null,
                              !I && !e && !B && n.createElement(ne.Z, { onOffscreenChange: d }, n.createElement(ie.C, { isSuperFollowSubscriptionEnabled: v, promotedContent: f, style: Be.lastButton, userId: g })),
                          );
                }),
                ke = (e) => {
                    const { user: t, ...r } = e,
                        s = b()(K.Z, e.user);
                    return n.createElement(Ie, (0, _.Z)({}, r, { blockedBy: s.legacy?.blocked_by, blocking: s.legacy?.blocking, canDm: Boolean(s.legacy?.can_dm), defaultProfileImage: Boolean(s.legacy?.default_profile_image), description: s.legacy?.description || "", following: s.legacy?.following ?? !1, notifications: Boolean(s.legacy?.notifications), profileBannerUrl: s.legacy?.profile_banner_url || "", superFollowEligible: Boolean(s.super_follow_eligible), superFollowing: Boolean(s.super_following), userId: s.rest_id, userRef: s }));
                };
            function Se(e) {
                if (e.user) {
                    const { user: t } = e;
                    return n.createElement(Ie, { blockedBy: t.blocked_by, blocking: t.blocking, canDm: t.can_dm, defaultProfileImage: t.default_profile_image, description: t.description, following: t.following, isWithheld: e.isWithheld, notifications: t.notifications, onFollowButtonOffscreen: e.onFollowButtonOffscreen, profileBannerUrl: t.profile_banner_url, promotedContent: e.promotedContent, superFollowEligible: t.super_follow_eligible, superFollowing: t.super_following, user: t, userId: t.id_str, viewerUserId: e.viewerUserId });
                }
                return e.userRef ? n.createElement(ke, { isWithheld: e.isWithheld, onFollowButtonOffscreen: e.onFollowButtonOffscreen, promotedContent: e.promotedContent, user: e.userRef, viewerUserId: e.viewerUserId }) : null;
            }
            const Be = i.default.create((e) => ({ buttons: { maxWidth: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", flexWrap: "wrap" }, button: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 }, lastButton: { marginBottom: e.spaces.space12 } })),
                xe = n.memo(Se);
            var Ne = r(332613),
                Oe = r(14544),
                Re = r(290213),
                Ue = r(12333),
                Te = r(731708),
                De = r(688715),
                Fe = r(529356);
            const We = P().df7cb6d4,
                Le = P().j24c37b2,
                Me = { link: n.createElement(Te.ZP, { link: (0, De.ju)("https://help.x.com/rules-and-policies/profile-labels"), withInteractiveStyling: !0 }) },
                Ve = (e) => {
                    const { onAction: t } = e;
                    return n.createElement(Fe.Z, { actionLabel: Le, actionType: "primaryFilled", backButtonType: "close", graphicDisplayMode: "none", headline: We, isFullHeightOnMobile: !1, onAction: t, subtext: n.createElement(Te.ZP, null, n.createElement(P().I18NFormatMessage, { $i18n: "f575f533" }, n.cloneElement(Me.link, null, P().ec429e79))), withCloseButton: !1 });
                },
                Ae = n.memo(Ve);
            var ze = r(520385),
                He = r(462166),
                je = r(873302),
                $e = r(535338);
            const qe = P().j04c717a,
                Qe = ({ sectionId: e }) => n.createElement(s.Z, { style: Xe.button }, n.createElement(ee.ZP, { link: { pathname: "/settings/bio", state: { addWorkExperience: !0, sectionId: e } } }, qe)),
                Xe = i.default.create((e) => ({ button: { marginBottom: e.spaces.space12, alignItems: "flex-start" } })),
                Ye = () => {
                    const e = (0, $e.p)(He.Bq, {}),
                        t = e.viewer.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results;
                    if (!e) return null;
                    const r = (0, je.uR)(t, ze.NB.WORK_EXPERIENCE);
                    return (0, je.hW)(r) ? null : n.createElement(Qe, { sectionId: r?.rest_id?.section_id });
                },
                Je = "UserProfileHeader_Items",
                Ke = "UserBirthdate",
                Ge = "UserDescription",
                et = "UserJoinDate",
                tt = "UserLocation",
                rt = "UserProfessionalCategory",
                nt = "UserUrl",
                st = "UserVerifiedPhone";
            var it = r(798990),
                lt = r(836842),
                ot = r(70882),
                at = r(401388),
                ct = r(614185),
                ut = r(160664),
                dt = r(252233);
            const mt = P().a1ea2f12,
                ft = P().g8191e78,
                pt = ({ birthdate: e, isOwnProfile: t }) => {
                    const r = n.useRef(),
                        s = n.useCallback(() => {
                            r.current && r.current.launch();
                        }, []);
                    return !e || (0, at.Z)(e) || ("self" === e?.visibility?.toLowerCase() && "self" === e?.year_visibility?.toLowerCase())
                        ? null
                        : ((e) => {
                                const { day: t, month: r } = e;
                                if (!t || !r) return;
                                const n = new Date();
                                return r === n.getMonth() + 1 && t === n.getDate();
                            })(e)
                          ? n.createElement(
                                n.Fragment,
                                null,
                                n.createElement(dt.Z, { Icon: lt.default, onPress: s }, t ? mt : ft),
                                n.createElement(ct.Z, {
                                    setRef: (e) => {
                                        r.current = e;
                                    },
                                }),
                            )
                          : n.createElement(dt.Z, { Icon: ot.default, key: Ke, testID: Ke }, n.createElement(ut.Z, { birthdate: e, withBornPrefixText: !0 }));
                },
                _t = n.memo((e) => {
                    const t = b()(it.Z, e.user),
                        r = t.legacy_extended_profile?.birthdate;
                    return n.createElement(pt, { birthdate: r, isOwnProfile: e.isOwnProfile });
                });
            function ht(e) {
                return e.user ? n.createElement(pt, { birthdate: e.user?.birthdate, isOwnProfile: e.isOwnProfile }) : e.userRef ? n.createElement(_t, { isOwnProfile: e.isOwnProfile, user: e.userRef }) : null;
            }
            const gt = n.memo(ht),
                bt = n.memo(({ children: e }) => n.createElement(s.Z, { style: yt.details }, n.createElement(Te.ZP, { style: yt.detailsText, testID: Je }, e))),
                yt = i.default.create((e) => ({ details: { display: "block", marginBottom: e.spaces.space12 }, detailsText: { lineHeight: e.spaces.space12 } }));
            var Et = r(231684),
                wt = r(733357),
                Zt = r(665468);
            const vt = n.memo(({ location: e }) => (!e || (0, wt.Z)(e) ? null : n.createElement(dt.Z, { Icon: Zt.default, testID: tt }, n.createElement(Te.ZP, null, e)))),
                Pt = n.memo((e) => {
                    const t = b()(Et.Z, e.user);
                    return n.createElement(vt, { location: t.legacy?.location });
                });
            function Ct(e) {
                return e.location ? n.createElement(vt, { location: e.location }) : e.user ? n.createElement(Pt, { user: e.user }) : null;
            }
            const It = n.memo(Ct);
            var kt = r(720930),
                St = r(912021),
                Bt = r(656520);
            const xt = (0, St.Z)((e) => (e ? r.c[r(626057).resolve(`./${e}.js`)]?.exports.default || Nt(e) : kt.default)),
                Nt = (e) => {
                    const t = n.lazy(() => r(537212)(`./${e}.js`).catch(() => ({ default: kt.default })));
                    return (e) => n.createElement(n.Suspense, { fallback: null }, n.createElement(t, e));
                },
                Ot = (e) => {
                    const { categoryIcon: t, categoryName: r, isOwnProfile: s, onPress: i } = e,
                        l = (0, k.z)(),
                        o = n.useCallback(() => {
                            l.scribe({ page: s ? "me" : "profile", ...Bt.yL() }), i();
                        }, [l, s, i]);
                    return n.createElement(dt.Z, { Icon: xt(t), style: Ut.root, testID: rt, withInteractiveStyling: !1 }, n.createElement(Te.ZP, { onPress: o }, r));
                },
                Rt = n.memo(Ot),
                Ut = i.default.create((e) => ({ root: { cursor: "pointer" } }));
            var Tt = r(268723),
                Dt = r(179562),
                Ft = r(787379);
            const Wt = n.memo(({ description: e, entities: t, isProfileTranslatable: r, userId: i, withheldDescription: l, withheldEntities: o }) => (e ? n.createElement(s.Z, { style: Mt.description }, n.createElement(Dt.Z, { description: e, disableTranslation: !r, entities: t, testID: Ge, userId: i, withheldDescription: l || void 0, withheldEntities: o })) : null)),
                Lt = n.memo((e) => {
                    const { is_profile_translatable: t, legacy: r, rest_id: s } = b()(Tt.Z, e.user),
                        i = n.useMemo(() => (0, Ft._)(r?.entities), [r?.entities]),
                        l = n.useMemo(() => (0, Ft._)(r?.withheld_entities), [r?.withheld_entities]);
                    return n.createElement(Wt, { description: r?.description || "", entities: i, isProfileTranslatable: Boolean(t), userId: s, withheldDescription: r?.withheld_description, withheldEntities: l });
                });
            const Mt = i.default.create((e) => ({ description: { display: "block", marginBottom: e.spaces.space12 } })),
                Vt = function (e) {
                    if (e.user) {
                        const { user: t } = e;
                        return n.createElement(Wt, { description: t?.description || "", entities: t.entities, isProfileTranslatable: Boolean(t.is_profile_translatable), userId: t.id_str, withheldDescription: t.withheld_description, withheldEntities: t.withheld_entities });
                    }
                    return e.userRef ? n.createElement(Lt, { user: e.userRef }) : null;
                };
            var At = r(973581),
                zt = r(630715);
            const Ht = n.memo(({ display_url: e, url: t }) => (t ? n.createElement(dt.Z, { Icon: zt.default, key: nt, link: { pathname: t, external: !0 }, testID: nt }, e || t) : null)),
                jt = n.memo((e) => {
                    const { display_url: t, url: r } = b()(At.Z, e.urlsEntitity);
                    return n.createElement(Ht, { display_url: t, url: r });
                });
            function $t(e) {
                return e.urlsEntity ? n.createElement(Ht, { display_url: e.urlsEntity.display_url, url: e.urlsEntity.url }) : e.urlsEntityRef ? n.createElement(jt, { urlsEntitity: e.urlsEntityRef }) : null;
            }
            const qt = n.memo($t);
            var Qt = r(586672),
                Xt = r(406727),
                Yt = r(187669),
                Jt = r(725405);
            const Kt = P().f543dbf6,
                Gt = n.memo(({ verified_phone_status: e }) => {
                    const t = (0, Jt.Z)();
                    return (
                        (0, Yt.q)(() => {
                            t.scribe({ element: "verified_phone_label", action: "impression" });
                        }),
                        e ? n.createElement(dt.Z, { Icon: Xt.default, testID: st }, n.createElement(Te.ZP, null, Kt)) : null
                    );
                }),
                er = n.memo((e) => {
                    const t = b()(Qt.Z, e.user);
                    return n.createElement(Gt, { verified_phone_status: t?.verified_phone_status || !1 });
                });
            const tr = function (e) {
                    return (0, de.hC)("verified_phone_label_enabled") ? (e.user ? n.createElement(Gt, { verified_phone_status: e.user?.verified_phone_status || !1 }) : e.userRef ? n.createElement(er, { user: e.userRef }) : null) : null;
                },
                rr = n.memo(({ createdAt: e, isOwnProfile: t, professionalCategoryIcon: r, professionalCategoryName: s, urlEntity: i, urlEntityRef: l, user: o, userRef: a }) => {
                    const [c, u] = n.useState(!1),
                        d = n.useCallback(() => {
                            u((e) => !e);
                        }, []),
                        m = (0, de.hC)("xprofile_profile_button_enabled");
                    return n.createElement(n.Fragment, null, n.createElement(Oe.Z, null, n.createElement(Vt, { user: o, userRef: a })), n.createElement(Ue.Z, { screenName: o?.screen_name }), t && m && n.createElement(Ye, null), n.createElement(bt, null, s ? n.createElement(Rt, { categoryIcon: r, categoryName: s, isOwnProfile: t, onPress: d }) : null, n.createElement(It, { location: o?.location, user: a }), n.createElement(qt, { urlsEntity: i, urlsEntityRef: l }), n.createElement(gt, { isOwnProfile: t, user: o, userRef: a }), e ? n.createElement(Re.Z, { joinDate: e, key: et, testID: et }) : null, n.createElement(tr, { user: o, userRef: a })), c ? n.createElement(Ae, { onAction: d }) : null);
                }),
                nr = n.memo((e) => {
                    const t = b()(Ne.Z, e.user),
                        r = t.legacy?.entities?.url?.urls?.[0];
                    return n.createElement(rr, { createdAt: t.legacy?.created_at, isOwnProfile: e.isOwnProfile, professionalCategoryIcon: e.professionalCategoryIcon, professionalCategoryName: e.professionalCategoryName, urlEntityRef: r, userRef: t });
                });
            function sr(e) {
                if (e.user) {
                    const { user: t } = e,
                        r = t.entities?.url?.urls?.[0];
                    return n.createElement(rr, { createdAt: t.created_at, isOwnProfile: e.isOwnProfile, professionalCategoryIcon: e.professionalCategoryIcon, professionalCategoryName: e.professionalCategoryName, urlEntity: r, user: t });
                }
                return e.userRef ? n.createElement(nr, { isOwnProfile: e.isOwnProfile, professionalCategoryIcon: e.professionalCategoryIcon, professionalCategoryName: e.professionalCategoryName, user: e.userRef }) : null;
            }
            const ir = n.memo(sr);
            var lr = r(564556),
                or = r(190286),
                ar = r(847607);
            const cr = "unmuteLink";
            var ur = r(601576),
                dr = r(919022);
            function mr({ screenName: e, userId: t }) {
                const r = (0, S.I0)(),
                    s = (0, C.n7)("USER_PROFILE_HEADER");
                return n.useCallback(
                    () =>
                        ((e) => r(dr.ZP.unmute(e)))(t).then(
                            () => {
                                return (t = (0, ar.X6)(e)), r(ur.fz({ text: t }));
                                var t;
                            },
                            s({ showToast: !0 }),
                        ),
                    [t, s, r, e],
                );
            }
            const fr = P().cef4e8cf,
                pr = P().h03a094a,
                _r = P().a6e94418,
                hr = ({ screenName: e, userId: t }) => {
                    const [r, s] = n.useState(!1),
                        i = mr({ screenName: e, userId: t });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            Te.ZP,
                            { color: "gray700", style: yr.mute },
                            _r,
                            " ",
                            n.createElement(
                                Te.ZP,
                                {
                                    color: "link",
                                    onPress: () => {
                                        s(!0);
                                    },
                                    role: "button",
                                    style: yr.unmuteButton,
                                    testID: cr,
                                    withInteractiveStyling: !0,
                                },
                                ar.cm,
                            ),
                        ),
                        r
                            ? n.createElement(or.Z, {
                                  confirmButtonLabel: ar.cm,
                                  headline: fr({ screenName: e }),
                                  onCancel: () => {
                                      s(!1);
                                  },
                                  onConfirm: () => {
                                      s(!1), i();
                                  },
                                  text: pr,
                              })
                            : null,
                    );
                },
                gr = n.memo((e) => {
                    const t = b()(lr.Z, e.user);
                    return n.createElement(hr, { screenName: t.legacy?.screen_name || "", userId: t.rest_id });
                });
            function br(e) {
                return e.user ? n.createElement(hr, { screenName: e.user.screen_name, userId: e.user.id_str }) : e.userRef ? n.createElement(gr, { user: e.userRef }) : null;
            }
            const yr = i.default.create((e) => ({ mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: "pointer" } })),
                Er = n.memo(br);
            var wr = r(696657),
                Zr = r(360917),
                vr = r.n(Zr),
                Pr = r(59871),
                Cr = r(366635),
                Ir = r(392049),
                kr = r(797448),
                Sr = r(799432),
                Br = r(966136),
                xr = r(54158),
                Nr = r(728220),
                Or = r(32256);
            const Rr = "UserName";
            var Ur = r(622078),
                Tr = r(649846),
                Dr = r(686689),
                Fr = r(673096),
                Wr = r(273490),
                Lr = r(479506);
            function Mr(e, t, r) {
                const s = (0, k.z)();
                return n.useCallback(() => {
                    s.scribe({ ...e, element: "automated_label", action: "click", data: { items: [{ id: t, name: r, item_type: Lr.Z.ItemType.USER }] } });
                }, [s, e, t, r]);
            }
            const Vr = n.memo(({ namespace: e, user: t }) => {
                    const r = Mr(e, t.id_str, t.screen_name),
                        s = n.useMemo(() => (t.highlightedLabel?.longDescription?.entities ? n.createElement(Dr.Z, { entities: t.highlightedLabel.longDescription.entities, forceAutoTextDirection: !0, onEntityClick: r, text: t.highlightedLabel.longDescription.text }) : t.highlightedLabel?.description || null), [r, t.highlightedLabel]);
                    return null == t.highlightedLabel && null == s ? null : n.createElement(Tr.Z, { isIconLarge: !0, label: { ...t.highlightedLabel, description: s } });
                }),
                Ar = n.memo((e) => {
                    const t = b()(Ur.Z, e.user),
                        r = (function (e, t) {
                            const r = b()(Wr.Z, e);
                            return Mr(t, r.rest_id, r.legacy.screen_name);
                        })(t, e.namespace),
                        s = t.affiliates_highlighted_label?.label;
                    return s ? n.createElement(Fr.Z, { highlightedUserLabel: s, isIconLarge: !0, onRichTextEntityClick: r }) : null;
                });
            function zr(e) {
                return e.user ? n.createElement(Vr, { namespace: e.namespace, user: e.user }) : e.userRef ? n.createElement(Ar, { namespace: e.namespace, user: e.userRef }) : null;
            }
            const Hr = n.memo(zr);
            var jr = r(465067);
            const $r = n.memo(({ getVerifiedCardShouldShow: e, isBlueVerified: t, isFollowedBy: r, isOwnProfile: i, isProtected: o, isVerified: a, isWithheld: c, name: u, namespace: d, screenName: f, translatorType: p, user: h, userId: g, userRef: b }) => {
                    const y = h?.verified_type,
                        E = h?.auxiliaryUserLabels,
                        w = h?.highlightedLabel,
                        Z = Boolean(u && f && !(c && !i)),
                        v = Z ? u : `@${f}`,
                        { featureSwitches: P, userClaims: C } = (0, l.QZ)(),
                        I = (0, de.hC)("blue_business_multi_affiliates_ui_enabled"),
                        k = (0, Nr.Z)(),
                        S = (0, Br.Z)({ isOwnProfile: i, userClaims: C, user: h, verifiedType: h?.verified_type, featureSwitch: "subscriptions_upsells_get_verified_profile", featureSwitches: P }),
                        B = (0, xr.Z)(i, h?.screen_name, "x_vo_business_promotion");
                    let x = !1;
                    i && k && (x = P.isTrue("subscriptions_is_blue_verified_review_status_profile_enabled"));
                    const N = c ? vr() : { affiliateBadgeInfo: w, isBlueVerified: !!t, isProtected: !!o, isVerified: a, translatorType: p, verifiedType: y, auxiliaryUserLabels: I ? E : void 0 },
                        O = h?.verification_info,
                        R = n.useMemo(() => {
                            if (Pr.Z.getVerifiedDisplayType({ isBlueVerified: t, isVerified: a, verifiedType: y }) !== Pr.K.none || o) return (e, r) => n.createElement(Or.Z, { affiliateBadgeInfo: w, auxiliaryUserLabels: E, dismiss: e, isBlueVerified: t, isOwnProfile: i, isProtected: o, isVerified: a, type: r, verificationInfo: O, verifiedType: y });
                        }, [a, t, y, O, o, w, E, i]);
                    return n.createElement(s.Z, { style: m.Z.names, testID: Rr }, n.createElement(s.Z, { style: m.Z.namesInner }, n.createElement(Cr.Z, (0, _.Z)({}, N, { badgeContext: "account", name: v, nameSize: "headline1", renderVerifiedBadgeContext: R, screenName: f, weight: "heavy", withFollowsYou: r && !c, withNameWrap: !0, withScreenName: Z, withStackedLayout: !0 })), n.createElement(Hr, { namespace: d, user: h, userRef: b })), n.createElement(s.Z, { style: v.length > 40 ? m.Z.longNameButtons : void 0 }, B ? n.createElement(Sr.Z, null) : S && null !== e && !e ? n.createElement(kr.Z, null) : x ? n.createElement(Ir.Z, null) : null));
                }),
                qr = n.memo((e) => {
                    const t = b()(wr.Z, e.user),
                        r = (function (e) {
                            const t = b()(jr.Z, e);
                            switch (t?.legacy?.translator_type_enum) {
                                case "None":
                                    return "none";
                                case "Badged":
                                    return "badged";
                                case "Moderator":
                                    return "moderator";
                                default:
                                    return "regular";
                            }
                        })(t);
                    return t.legacy ? n.createElement($r, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isBlueVerified: !!t.is_blue_verified, isFollowedBy: t.legacy.followed_by, isOwnProfile: e.isOwnProfile, isProtected: t.legacy.protected, isVerified: t.legacy.verified, isWithheld: e.isWithheld, name: t.legacy.name || "", namespace: e.namespace, screenName: t.legacy.screen_name, translatorType: r, userId: t.rest_id, userRef: t }) : null;
                });
            function Qr(e) {
                if (e.user) {
                    const { user: t } = e;
                    return n.createElement($r, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isBlueVerified: t.is_blue_verified, isFollowedBy: t.followed_by, isOwnProfile: e.isOwnProfile, isProtected: t.protected, isVerified: t.verified, isWithheld: e.isWithheld, name: t.name, namespace: e.namespace, screenName: t.screen_name, translatorType: t.translator_type, user: t, userId: t.id_str });
                }
                return e.userRef ? n.createElement(qr, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, namespace: e.namespace, user: e.userRef }) : null;
            }
            const Xr = n.memo(Qr);
            var Yr = r(379920),
                Jr = r(312595),
                Kr = r(646797),
                Gr = r(288955),
                en = r(835546),
                tn = r(893664),
                rn = r(421813);
            const nn = ({ isActiveCreator: e, isOwnProfile: t, user: r, viewerSubscribersCount: s }) => {
                    const { creator_subscriptions_count: i, followers_count: l, friends_count: o, has_hidden_subscriptions_on_profile: a, screen_name: c, subscribers_count: u } = r,
                        d = (0, de.hC)("xprofile_blocked_by_view_enabled"),
                        m = (0, de.hC)("creator_subscriptions_subscriber_count_enabled"),
                        f = (0, de.hC)("creator_subscriptions_subscription_count_enabled"),
                        p = (0, de.D2)("creator_subscriptions_subscriber_count_min_displayed").getNumberValue(0),
                        _ = e && t,
                        h = m ? (u && (_ || u >= p) ? u : void 0) : _ ? s : void 0,
                        g = t || !a;
                    return n.createElement(Gr.Z, null, (e) => n.createElement(Kr.Z, { followersCount: l, friendsCount: o, onPress: e(), screenName: c, subscribersCount: h, subscriptionsCount: f ? i : void 0, withLink: (0, en.n5)({ isOwnProfile: t, user: r, isSoftBlockEnabled: d }), withSubscriptionsCount: g }));
                },
                sn = (e) => {
                    const t = (0, de.hC)("xprofile_blocked_by_view_enabled"),
                        r = b()(Jr.Z, e.user),
                        s = b()(Yr.Z, e.viewer),
                        i = (0, tn.g)({ user: r, isOwnProfile: e.isOwnProfile, isSoftBlockEnabled: t }),
                        l = Boolean(s?.is_active_creator) && e.isOwnProfile;
                    return n.createElement(Gr.Z, null, (e) => n.createElement(rn.V, { onPress: e(), user: r, viewer: s, withLink: i, withSubscribersCount: l }));
                };
            function ln(e) {
                return e.user ? n.createElement(nn, { isActiveCreator: e.isActiveCreator || !1, isOwnProfile: e.isOwnProfile, user: e.user, viewerSubscribersCount: e.subscribersCount }) : e.userRef && e.viewer ? n.createElement(sn, { isOwnProfile: e.isOwnProfile, user: e.userRef, viewer: e.viewer }) : null;
            }
            const on = n.memo(ln);
            var an = r(731305),
                cn = r(837020),
                un = r(144251);
            const dn = P().ea8c425f,
                mn = P().b2d0c0f4,
                fn = P().f464d54d,
                pn = P().g47cdc0e,
                _n = P().b68c3784,
                hn = "get_verified_profile_card_visitor",
                gn = ({ dismiss: e, profileUser: { screen_name: t }, viewerUser: { screen_name: r } }) => {
                    const o = (0, Jt.Z)(),
                        { featureSwitches: a } = (0, l.QZ)(),
                        c = a.getStringValue("subscriptions_upsells_verified_profile_visitor_upsell_variant"),
                        u = n.useMemo(() => {
                            switch (c) {
                                case "variant_a":
                                default:
                                    return "variant_a";
                                case "variant_b":
                                    return "variant_b";
                                case "variant_c":
                                    return "variant_c";
                                case "variant_d":
                                    return "variant_d";
                            }
                        }, [c]),
                        d = "verified_profile_visitor_upsell";
                    (0, Yt.q)(() => {
                        o.scribe({ component: d, action: "impression" });
                    });
                    const {
                        color: m,
                        description: f,
                        header: p,
                        lightColor: _,
                    } = ((e, t, r) => {
                        const n = { header: dn({ viewerScreenName: r }), description: [mn, fn({ profileScreenName: t }), pn] };
                        return { variant_a: { ...n, color: "blue0" }, variant_b: { ...n, color: "green50" }, variant_c: { ...n, color: "gray100", lightColor: "gray50" }, variant_d: { ...n, color: "orange0", lightColor: "orange50" } }[e];
                    })(u, t, r);
                    let h = m;
                    return (
                        "light" === i.default.theme.paletteName && _ && (h = _),
                        n.createElement(
                            s.Z,
                            { style: [wn.cardBlock, { backgroundColor: i.default.theme.colors[h] }], testID: "verified_profile_visitor_upsell" },
                            n.createElement(ee.ZP, {
                                borderColor: "transparent",
                                icon: n.createElement(cn.default, null),
                                onPress: () => {
                                    o.scribe({ component: d, action: "dismiss" }), e();
                                },
                                size: "xSmall",
                                style: wn.dismissButton,
                            }),
                            n.createElement(
                                s.Z,
                                { style: wn.inner },
                                n.createElement(Te.ZP, { style: wn.heading, weight: "bold" }, bn(p)),
                                n.createElement(Te.ZP, { size: "body", style: wn.subheading }, f[0], n.createElement(Te.ZP, { weight: "bold" }, f[1]), f[2]),
                                n.createElement(
                                    ee.ZP,
                                    {
                                        link: { pathname: "/i/premium_sign_up", state: { referring_page: hn } },
                                        onPress: () => {
                                            o.scribe({ component: d, action: "click" });
                                        },
                                        style: wn.button,
                                        type: "primaryFilled",
                                    },
                                    _n,
                                ),
                            ),
                        )
                    );
                },
                bn = (e) => {
                    const t = e.lastIndexOf(" ");
                    return -1 !== t ? n.createElement(Te.ZP, { style: wn.heading, weight: "bold" }, e.slice(0, t + 1), n.createElement(Te.ZP, { style: wn.inlineVerified }, e.slice(t + 1), " ", n.createElement(un.default, { style: wn.verifiedIcon }))) : n.createElement(s.Z, null, e, " ", n.createElement(un.default, { style: wn.verifiedIcon }));
                },
                yn = (e) => {
                    const { dismiss: t, impress: r, shouldShow: s } = (0, c.ZP)({ showForMsec: null, reappearAfterMsec: null, dismissForMsec: c.$i, key: "verified_profile_visitor" });
                    return (
                        n.useEffect(() => {
                            r();
                        }),
                        s ? n.createElement(d.nO, { data: { referer: hn }, namespace: { component: "unified-upsell" } }, n.createElement(gn, (0, _.Z)({ dismiss: t }, e))) : null
                    );
                },
                En = ({ userData: e }) => {
                    const { featureSwitches: t, userClaims: r } = (0, l.QZ)(),
                        s = (0, S.v9)(dr.ZP.selectViewerUser),
                        i = s?.screen_name === e?.screen_name,
                        o = e && e.is_blue_verified,
                        a = "Business" === e?.verified_type || "Government" === e?.verified_type,
                        c = r.hasSubscription("premium_standard") || r.hasSubscription("premium_plus");
                    return !s || !e || a || !o || i || c ? null : t.isTrue("subscriptions_upsells_verified_profile_visitor_upsell_enabled") ? n.createElement(yn, { profileUser: e, viewerUser: s }) : null;
                },
                wn = i.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, marginHorizontal: e.spaces.space16, overflow: "hidden", flexDirection: "row", justifyContent: "flex-start" }, dismissButton: { position: "absolute", end: e.spaces.space16, top: e.spaces.space12, zIndex: 1 }, inner: { padding: e.spaces.space16, maxWidth: "100%" }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { fontSize: e.fontSizes.headline2, marginBottom: e.spaces.space8, marginEnd: e.spaces.space24 }, subheading: { marginBottom: e.spaces.space8 }, verifiedIcon: { height: 20, width: 20 }, inlineVerified: { flexDirection: "row", flexWrap: "nowrap", display: "inline-flex" } })),
                Zn = { page: "profile", section: "header" },
                vn = (e) => {
                    const { isActiveCreator: t, isWithheld: r, onFollowButtonOffscreen: i, professionalCategoryIcon: _, professionalCategoryName: h, promotedContent: g, showBlockedTweets: b, superFollowersCount: y, user: E, viewerUserId: w } = e,
                        { featureSwitches: Z, userClaims: v } = (0, l.QZ)(),
                        P = Z.isTrue("xprofile_blocked_by_view_enabled"),
                        [C, I] = n.useState(!1),
                        k = n.useCallback(() => {
                            I(!1);
                        }, []),
                        [S, B] = n.useState(E.id_str),
                        [x, N] = n.useState(E.following),
                        O = { key: "verified_profile_card_upsell", showForMsec: c.IZ, reappearAfterMsec: c.IZ, dismissForMsec: null, dismissUntilNextReappear: !0 },
                        { dismiss: R, gotDismissed: U, impress: T, shouldShow: D } = (0, c.ZP)(O),
                        F = (0, a.z)();
                    n.useEffect(() => {
                        T();
                    }, [T, D, U]);
                    const W = !v.isAnyPremiumSubscriber() && Z.isTrue("subscriptions_upsells_get_verified_profile_rotation_enabled") && D;
                    S !== E.id_str && (B(E.id_str), I(!1)), !1 === x && !0 === E.following && (N(E.following), I(!0));
                    const L = (0, an.nf)(w, E),
                        V = (0, an.ZQ)(w, r, E, P),
                        A = (0, an.jB)(w, r, E, P),
                        z = (0, an.Xy)(w, r, E, P),
                        H = (0, an.zi)({ isSoftBlockEnabled: P, isWithheld: r, showBlockedTweets: b, user: E, viewerUserId: w }),
                        [j, $] = n.useState(!1);
                    return n.createElement(d.nO, { namespace: Zn }, n.createElement(s.Z, { style: F && Pn.rootRedesign }, n.createElement(J, { isOwnProfile: L, isWithheld: r, user: E }), n.createElement(s.Z, { style: [m.Z.content, Pn.content, V && m.Z.withheld] }, n.createElement(s.Z, { style: m.Z.avatarAndButton }, n.createElement(M, { isOwnProfile: L, isWithheld: r, user: E, userId: E.id_str }), n.createElement(xe, { isWithheld: r, onFollowButtonOffscreen: i, promotedContent: g, user: E, viewerUserId: w })), n.createElement(Xr, { getVerifiedCardShouldShow: W, isOwnProfile: L, isWithheld: r, namespace: Zn, user: E }), V ? null : n.createElement(ir, { isOwnProfile: L, professionalCategoryIcon: _, professionalCategoryName: h, user: E, userRef: void 0 }), A ? null : n.createElement(on, { isActiveCreator: t, isOwnProfile: L, subscribersCount: y, user: E }), z ? null : n.createElement(s.Z, { style: Pn.marginTopXSmall }, n.createElement(o.Z, { userId: E.id_str, userScreenName: E.screen_name })), E.muting ? n.createElement(Er, { user: E, userRef: void 0 }) : null), H ? null : n.createElement(f.U, { setIsRenderingProfileSpotlight: $, user: E, viewerUserId: w }), !j && !E.possibly_sensitive && n.createElement(En, { userData: E }), L && null !== W ? n.createElement(p.Z, { dismissProfileUpsellCard: R, gotDismissedProfileUpsellCard: U, shouldShowProfileUpsellCard: W, user: E }) : null, C ? n.createElement(u.Z, { onRemoveClusterFollow: k, userId: E.id_str }) : null));
                },
                Pn = i.default.create((e) => ({ rootRedesign: { paddingHorizontal: e.spaces.space16 }, content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } })),
                Cn = n.memo(vn);
        },
        731305: (e, t, r) => {
            r.d(t, { Xy: () => l, ZQ: () => s, jB: () => i, nf: () => n, zi: () => o });
            const n = (e, t) => e === t.id_str,
                s = (e, t, r, s = !1) => !n(e, r) && (r.blocking || (!s && r.blocked_by) || t),
                i = (e, t, r, s = !1) => !n(e, r) && ((!s && r.blocked_by) || t),
                l = (e, t, r, s = !1) => !e || n(e, r) || r.blocking || (!s && r.blocked_by) || t || (!!r.protected && !r.following),
                o = ({ isSoftBlockEnabled: e = !1, isWithheld: t, showBlockedTweets: r, user: s, viewerUserId: i }) => !n(i, s) && (!i || (s.blocking && !r) || (!e && s.blocked_by) || t || (!!s.protected && !s.following));
        },
        217491: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                s = r(325686),
                i = r(682474),
                l = r(392237),
                o = r(621389),
                a = r(935496),
                c = r(708852),
                u = r(823161);
            const d = (e) => {
                    const t = (0, c.tj)();
                    return n.createElement(s.Z, { "aria-hidden": !0, style: o.Z.avatar }, n.createElement(u.default, { borderColor: "cellBackground", borderWidth: t ? "large" : "medium", focusable: !1, size: "custom" }));
                },
                m = n.memo(d);
            var f = r(366635);
            const p = (e) => {
                    const { fullUser: t, restrictedUser: r } = e,
                        i = t || r,
                        l = i.name && i.screen_name,
                        a = l ? i.name : `@${i.screen_name}`;
                    return n.createElement(s.Z, { style: o.Z.names }, n.createElement(f.Z, { name: a, nameSize: "headline1", screenName: l ? i.screen_name : void 0, withStackedLayout: !0 }));
                },
                _ = n.memo(p),
                h = (e) => {
                    const { fullUser: t, restrictedUser: r, shouldDisplayUserActionSheet: c } = e;
                    return n.createElement(s.Z, null, n.createElement(s.Z, { style: o.Z.banner }, n.createElement(i.Z, { ratio: l.default.theme.aspectRatios.profileBanner })), n.createElement(s.Z, { style: [o.Z.content, o.Z.withheld] }, n.createElement(s.Z, { style: o.Z.avatarAndButton }, n.createElement(m, null), n.createElement(s.Z, { style: o.Z.buttonAffordance }), c && t && n.createElement(a.Z, { buttonStyle: o.Z.menuSheetButton, user: t })), n.createElement(_, { fullUser: t, restrictedUser: r })));
                },
                g = n.memo(h);
        },
        935496: (e, t, r) => {
            r.d(t, { Z: () => y });
            var n = r(807896),
                s = r(537107),
                i = r(202784),
                l = (r(585488), r(277660)),
                o = r.n(l),
                a = r(154003),
                c = r(674132),
                u = r.n(c),
                d = r(149170),
                m = r(90411);
            const f = "userActions",
                p = u().h63a5c3c,
                _ = i.createElement(d.default, null),
                h = (e) => {
                    const { buttonStyle: t, promotedContent: r, user: n } = e,
                        s = i.useCallback((e) => i.createElement(m.ZP, { onClose: e, promotedContent: r, user: n, view: "profile" }), [r, n]);
                    return i.createElement(a.ZP, { "aria-label": p, hoverLabel: { label: p }, icon: _, renderMenu: s, style: t, testID: f, type: "primaryOutlined" });
                },
                g = i.memo((e) => {
                    const { user: t, ...r } = e,
                        l = o()(s.Z, t),
                        a = i.useMemo(() => {
                            const e = l.legacy;
                            return { id_str: l.rest_id, blocking: e?.blocking, blocked_by: e?.blocked_by, description: e?.description || "", following: e?.following ?? !1, followed_by: e?.followed_by ?? !1, muting: e?.muting || void 0, name: e?.name || "", profile_image_url_https: e?.profile_image_url_https || "", promoted_content: e?.promoted_content ? { impression_id: e.promoted_content.impression_id || void 0, disclosure_type: e.promoted_content.disclosure_type || void 0 } : void 0, protected: e?.protected ?? !1, screen_name: e?.screen_name || "", want_retweets: e?.want_retweets || void 0 };
                        }, [l]);
                    return i.createElement(h, (0, n.Z)({}, r, { user: a }));
                });
            function b(e) {
                return e.user ? i.createElement(h, { buttonStyle: e.buttonStyle, promotedContent: e.promotedContent, user: e.user }) : e.userRef ? i.createElement(g, { buttonStyle: e.buttonStyle, promotedContent: e.promotedContent, user: e.userRef }) : null;
            }
            const y = i.memo(b);
        },
        621389: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = r(392237).default.create((e) => {
                const t = { width: "25%", minWidth: e.spaces.space48 };
                return { avatar: { ...t, height: "auto", marginTop: "-15%", marginBottom: e.spaces.space12 }, avatarSize: t, avatarAndButton: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }, buttonAffordance: { height: e.spacesPx.space36 }, content: { paddingTop: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, withheld: { paddingBottom: e.spaces.space12 }, banner: { backgroundColor: e.colors.gray200 }, menuSheetButton: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 }, names: { marginTop: e.spaces.space4, marginBottom: e.spaces.space12, flexDirection: "row", flexWrap: "wrap" }, namesInner: { flexDirection: "column", marginEnd: e.spaces.space8, flexShrink: 1 }, longNameButtons: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space4 } };
            });
        },
        930351: (e, t, r) => {
            r.d(t, { Z: () => v });
            var n = r(202784),
                s = r(674132),
                i = r.n(s),
                l = r(163889),
                o = r(42508);
            const a = i().cb339f26,
                c = i().hf06085e,
                u = i().aa959f36,
                d = i().hf06085e,
                m = i().jf604336,
                f = i().c9bfda48,
                p = i().jf604336,
                _ = i().g29ebf26,
                h = i().aa959f36,
                g = i().jcfb7fba,
                b = { default: a, fake_account: u, offensive_profile_content: m, sensitive_media: p, timeout: h },
                y = { default: c, fake_account: d, offensive_profile_content: f, sensitive_media: _, timeout: g };
            var E = r(416699);
            const w = i().d834ab9c,
                Z = ({ onConfirm: e, screenName: t, userProfileInterstitialType: r }) => {
                    const { header: s, message: i } = ((e) => (e && Object.values(o.Z).indexOf(e) >= 0 ? { header: b[e], message: y[e] } : ((0, l.ZP)(`Unrecognized Profile Interstitial Type: ${String(e)}`), { header: b.default, message: y.default })))(r),
                        a = n.useCallback(() => {
                            e();
                        }, [e]);
                    return n.createElement(E.Z, { buttonText: w, header: s, message: i, onButtonPress: a, screenName: t });
                },
                v = n.memo(Z);
        },
        21437: (e, t, r) => {
            r.d(t, { X: () => d, Z: () => m });
            var n = r(202784),
                s = r(688715),
                i = r(731708),
                l = r(674132),
                o = r.n(l),
                a = r(416699);
            const c = o().bd598c70,
                u = (0, s.ju)("https://support.x.com/articles/14016"),
                d = (e) => {
                    const { screenName: t } = e,
                        r = n.useMemo(() => n.createElement(o().I18NFormatMessage, { $i18n: "i1824ce3", screenName: t }, n.createElement(i.ZP, { link: u }, o().e617164b)), [t]);
                    return n.createElement(a.Z, { header: c, message: r, screenName: t });
                },
                m = n.memo(d);
        },
        220544: (e, t, r) => {
            r.d(t, { Z: () => m, i: () => d });
            var n = r(202784),
                s = r(731708),
                i = r(674132),
                l = r.n(i),
                o = r(686689),
                a = r(416699);
            const c = l().g8475f82,
                u = n.createElement(l().I18NFormatMessage, { $i18n: "da9d52d7" }, n.createElement(s.ZP, { link: "https://support.x.com/articles/18311" }, l().j5e1cf59)),
                d = (e) => {
                    const { screenName: t, suspendHeader: r, suspendMessage: s } = e,
                        i = r ? n.createElement(o.Z, { entities: r.entities, rtl: r.rtl, text: r.text }) : c,
                        l = s ? n.createElement(o.Z, { entities: s.entities, rtl: s.rtl, text: s.text }) : u;
                    return n.createElement(a.Z, { header: i, message: l, screenName: t });
                },
                m = n.memo(d);
        },
        644917: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                s = r(310452),
                i = r(731708),
                l = r(354149),
                o = r(674132),
                a = r.n(o),
                c = r(416699);
            const u = (e) => {
                    const { user: t } = e,
                        r = a().gbf342a4;
                    if (!t) return null;
                    const { description: o, entities: u, id_str: d, screen_name: m } = t;
                    if (!o) return null;
                    const f = s.ZP.descriptionTextParts(o, u),
                        p = n.createElement(
                            i.ZP,
                            { align: "center", color: "gray700", dir: "auto" },
                            f.map((e, t) => n.createElement(l.ZP, { key: `user_${d}_textpart_${t}`, linkify: !0, part: e })),
                        );
                    return n.createElement(c.Z, { header: r, message: p, screenName: m });
                },
                d = n.memo(u);
        },
        923790: (e, t, r) => {
            r.d(t, { C: () => p });
            var n = r(202784),
                s = r(325686),
                i = r(310452),
                l = r(731708),
                o = r(354149),
                a = r(420412),
                c = r(392237),
                u = r(674132);
            const d = r.n(u)().gbf342a4,
                m = (e) => {
                    const { user: t } = e;
                    if (!t) return null;
                    const { description: r, entities: c, id_str: u } = t;
                    if (!r) return null;
                    const m = i.ZP.descriptionTextParts(r, c);
                    return n.createElement(
                        s.Z,
                        null,
                        n.createElement(
                            s.Z,
                            { style: f.withheldMessageRoot },
                            n.createElement(l.ZP, { align: "center", size: "title4", style: f.withheldMessageHeader, weight: "bold" }, d),
                            n.createElement(
                                l.ZP,
                                { align: "center", color: "gray700", dir: "auto" },
                                m.map((e, t) => n.createElement(o.ZP, { key: `user_${u}_textpart_${t}`, linkify: !0, part: e })),
                            ),
                        ),
                        n.createElement(a.Z, null),
                        e.children,
                    );
                },
                f = c.default.create((e) => ({ withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 }, withheldMessageHeader: { paddingBottom: e.spaces.space4 } })),
                p = n.memo(m);
        },
        303800: (e, t, r) => {
            r.r(t), r.d(t, { UserProfileScreenContainer: () => B, default: () => x });
            var n = r(807896),
                s = r(202784),
                i = r(71620),
                l = r(668214),
                o = r(704279),
                a = r(390387),
                c = r(38562),
                u = r(836255),
                d = r(919022);
            const m = (e, t) => {
                    const { location: r, match: n } = t;
                    return n && n.params && n.params.screenName ? n.params.screenName : r && r.query && r.query.screen_name && "string" == typeof r.query.screen_name ? r.query.screen_name : "";
                },
                f = (e, t) => d.ZP.selectIsUserSuspended(e, m(0, t)),
                p = (e, t) => d.ZP.selectUserSuspendedHeader(e, m(0, t)),
                _ = (e, t) => d.ZP.selectUserSuspendMessage(e, m(0, t)),
                h = (e, t) => d.ZP.selectIsUserWithheld(e, m(0, t)),
                g = (e, t) => d.ZP.selectByScreenName(e, m(0, t)),
                b = (0, d.W3)([d.pL]),
                y = (e, t) => b(e, m(0, t)),
                E = (e, t) => t.location.pathname.includes("/intent/"),
                w = (e, t) => d.ZP.selectIsUserNotFound(e, m(0, t)),
                Z = (e, t) => {
                    const r = g(e, t);
                    return !!r && d.ZP.selectIsLoading(e, r.id_str);
                },
                v = (e, t) => {
                    const { location: r } = t,
                        { promotedTweetState: n } = (r && r.state) || {},
                        s = g(e, t);
                    return n || (s && s.promoted_content);
                },
                P = (e, t) => {
                    const r = g(e, t);
                    return r && r.profile_interstitial_type ? r.profile_interstitial_type : null;
                },
                C = (e, t) => {
                    const r = ((e, t) => {
                        const r = g(e, t);
                        if (r?.pinned_tweet_ids_str?.length) return r.pinned_tweet_ids_str[0];
                    })(e, t);
                    return r ? u.Z.selectHydrated(e, r) : void 0;
                },
                I = (0, l.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: c.f1, fetchStatus: y, isActiveCreator: a.WM, isIntentRoute: E, isNotFound: w, isRefreshing: Z, isSuspended: f, suspendHeader: p, suspendMessage: _, isWithheld: h, pinnedTweet: C, promotedContent: v, screenName: m, superFollowersCount: a.cl, user: g, userProfileInterstitialType: P, userLanguage: a.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, i.zr)("USER_PROFILE_SCREEN"), fetchOneUser: d.ZP.fetchOne, fetchOneByScreenNameWithExtraFieldsIfNeeded: d.ZP.fetchOneByScreenNameWithExtraFieldsIfNeeded, fetchSettingsIfNeeded: c.Sb, scribeAction: o.n }));
            var k = r(984915),
                S = r(722176);
            const B = (e) => s.createElement(k.Z, { userId: e.user && e.user.id_str }, ({ scribeNamespace: t }) => s.createElement(S.Z, (0, n.Z)({}, e, { scribeNamespace: t }))),
                x = I(B);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-82566a6c.356e61aa.js.map
