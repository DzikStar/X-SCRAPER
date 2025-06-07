"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-e3794290"],
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
                b = (r(585488), r(277660)),
                g = r.n(b),
                w = r(530525),
                E = r(708852),
                y = r(433460),
                v = r(823161),
                Z = r(111677),
                P = r.n(Z),
                C = r(71620),
                I = r(690282),
                B = r(725516),
                k = r(125363),
                S = r(624479),
                O = r(412876),
                R = r(201123),
                x = r(668214);
            const N = (e, t) => (0, S.cY)(e, t.userId),
                U = (e, t) => {
                    const r = S.ZP.select(e, t.userId);
                    return r?.refresh_delay_secs ? 1e3 * r.refresh_delay_secs : 1e3 * S.vj;
                },
                T = (0, x.Z)().propsFromState(() => ({ userPresencePollingIntervalMs: U, userSpace: N })),
                D = w.Z.createLayoutCache(),
                F = { opensProfilePhoto: P().f30795d0 },
                W = n.memo((e) => {
                    const { isOwnProfile: t, isWithheld: r, profileImageUrlHttps: s, screenName: i, user: o, userId: a, userPresencePollingIntervalMs: c, userSpace: u } = e,
                        d = (0, E.tj)(),
                        f = (0, B.z)(),
                        { featureSwitches: p, viewerUserId: h } = (0, l.QZ)(),
                        b = (0, k.I0)(),
                        g = (0, C.n7)("SELECT_SPACE"),
                        w = Boolean(h && (p.isTrue("voice_rooms_recent_search_audiospace_ring_enabled") || p.isTrue("voice_rooms_typeahead_audiospace_ring_enabled"))),
                        Z = n.useCallback(() => {
                            if (w) return b(S.ZP.fetchManyIfNeeded([a])).catch(g({}));
                        }, [g, b, w, a]);
                    n.useEffect(() => {
                        Z();
                    }, [Z]),
                        (0, I.Z)(() => Z(), w ? c : void 0);
                    const P = !t && r,
                        x = P || !s ? void 0 : s,
                        N = n.useMemo(() => {
                            const e = {
                                imageLayoutCache: D,
                                onClick: (e) => {
                                    f.scribe({ element: "avatar", action: "click" });
                                },
                                size: "custom",
                                style: m.Z.avatar,
                            };
                            return u && w ? { ...e, "aria-label": u["aria-label"], link: u.link } : P ? e : { ...e, "aria-label": F.opensProfilePhoto, link: { pathname: `/${i}/photo` } };
                        }, [P, w, i, u, f]);
                    return u && w ? (o ? n.createElement(R.o, (0, _.Z)({ presenceRingType: u.presenceRingType, user: o }, N)) : n.createElement(y.Z, (0, _.Z)({ presenceRingType: u.presenceRingType, screenName: i, uri: x }, N))) : o ? n.createElement(O.Y, (0, _.Z)({ borderColor: "cellBackground", borderWidth: d ? "large" : "medium", user: o }, N)) : n.createElement(v.default, (0, _.Z)({ borderColor: "cellBackground", borderWidth: d ? "large" : "medium", screenName: i, uri: x }, N));
                }),
                L = n.memo((e) => {
                    const { user: t, ...r } = e,
                        s = g()(h.Z, t);
                    return n.createElement(W, (0, _.Z)({ profileImageUrlHttps: s.avatar?.image_url ?? "", screenName: s.core?.screen_name ?? "", user: s, userId: s.rest_id }, r));
                });
            const V = n.memo(
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
            var A = r(537500),
                M = r(682474),
                z = r(530732),
                j = r(439592),
                H = r(483677),
                $ = r(965728);
            const Q = w.Z.createLayoutCache(),
                X = n.memo(({ dominantColor: e, isOwnProfile: t, isWithheld: r, profileBannerUrl: l, screenName: o }) => {
                    const a = !t && r,
                        c = e ? (0, $.xr)(e) : i.default.theme.colors.gray200;
                    return a || !l ? n.createElement(s.Z, { "data-testid": "hiddenBanner", style: m.Z.banner }, n.createElement(M.Z, { ratio: i.default.theme.aspectRatios.profileBanner, style: { backgroundColor: c } })) : n.createElement(z.Z, { "aria-hidden": !0, link: `/${o}/header_photo` }, n.createElement(w.Z, { "aria-label": "", aspectMode: j.Z.exact(i.default.theme.aspectRatios.profileBanner), backgroundColor: c, image: l, layoutCache: Q }));
                }),
                Y = n.memo((e) => {
                    const t = g()(A.Z, e.user),
                        r = n.useMemo(() => {
                            const e = t.legacy?.profile_banner_extensions?.mediaColor?.r?.ok?.palette;
                            if (!e) return null;
                            const r = e.map(({ percentage: e, rgb: { blue: t, green: r, red: n } }) => ({ rgb: { red: n, green: r, blue: t }, percentage: e }));
                            return H.Z.get(r);
                        }, [t.legacy?.profile_banner_extensions]);
                    return n.createElement(X, { dominantColor: r, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, profileBannerUrl: t.legacy?.profile_banner_url, screenName: t.core?.screen_name ?? "" });
                });
            function q(e) {
                const t = n.useMemo(() => {
                    const t = e?.user?.profile_banner_extensions_media_color?.palette;
                    return t ? H.Z.get(t) : null;
                }, [e.user]);
                return e.user ? n.createElement(X, { dominantColor: t, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, profileBannerUrl: e.user.profile_banner_url, screenName: e.user.screen_name }) : e.userRef ? n.createElement(Y, { isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, user: e.userRef }) : null;
            }
            const G = n.memo(q);
            r(136728);
            var J = r(144956),
                K = r(107267),
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
            const be = "sendDMFromProfile",
                ge = "editProfileButton",
                we = P().g7088266,
                Ee = P().gd7acb84,
                ye = P().b7636014,
                ve = n.createElement(te.default, null),
                Ze = n.createElement(re.default, null),
                Pe = P().haad225c,
                Ce = P().fc7db594,
                Ie = n.memo(({ blockedBy: e, blocking: t, canDm: r, defaultProfileImage: i, description: o, following: a, isWithheld: c, notifications: u, onFollowButtonOffscreen: d, profileBannerUrl: m, promotedContent: f, superFollowEligible: p, superFollowing: _, user: h, userId: b, userRef: g, viewerUserId: w }) => {
                    const E = (0, B.z)(),
                        y = (0, K.useHistory)(),
                        { userClaims: v } = n.useContext(l.rC),
                        Z = (0, de.hC)("super_follow_android_web_subscription_enabled"),
                        P = (0, de.hC)("responsive_web_profile_header_search_button_enabled"),
                        C = (0, k.v9)(fe.Lz),
                        I = b === w,
                        S = c && !I,
                        O = r && w && !t && !e && !S,
                        R = w && !t && !e && !S && !C,
                        x = !I && h?.screen_name && P,
                        N = w && !I && !S,
                        U = (0, de.hC)("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") && u && !a,
                        T = ((0, de.hC)("responsive_web_device_follow_without_user_follow_enabled") || U) && !h?.protected,
                        D = (0, de.hC)("rweb_tipjar_consumption_enabled"),
                        F = (0, de.hC)("responsive_web_grok_profile_summary_enabled"),
                        W = (0, de.JY)("responsive_web_grok_profile_summary_min_followers", 1e6),
                        L = (0, de.JY)("responsive_web_grok_profile_summary_min_posts", 100),
                        V = !h?.verified_type || "User" === h?.verified_type,
                        A = F && !h?.protected && V && (h?.statuses_count ?? 0) > L && (h?.followers_count ?? 0) > W,
                        { openGrok: M } = (0, _e.Z)(),
                        z = (a || T) && w && !t && !e && !c,
                        j = (0, de.hC)("subscriptions_sign_up_enabled") && v.isTrueAndEnabled("subscriptions_feature_can_gift_premium") && h?.premium_gifting_eligible,
                        H = i && !o && !m,
                        $ = C;
                    return c
                        ? null
                        : n.createElement(
                              s.Z,
                              { style: Se.buttons },
                              N && n.createElement(he.Z, { buttonStyle: Se.button, promotedContent: f, user: h, userRef: g }),
                              D ? n.createElement(ue.Z, { style: Se.button, userId: b }) : null,
                              A
                                  ? n.createElement(ee.ZP, {
                                        "aria-label": Ce,
                                        hoverLabel: { label: Ce },
                                        icon: n.createElement(le.x1, null),
                                        onPress: () => {
                                            h?.screen_name && (E.scribe({ element: "grok_profile_summary", action: "click" }), M({ text: `@${h.screen_name}`, autoSubmit: !0, source: "user_profile_summary" }));
                                        },
                                        style: Se.button,
                                    })
                                  : null,
                              w && I && !$ ? n.createElement(ee.ZP, { link: H ? "/i/flow/setup_profile" : "/settings/profile", style: Se.lastButton, testID: ge, type: "primaryOutlined" }, H ? Ee : we) : null,
                              x && n.createElement(ae.r, { fullName: h?.name, screenName: h?.screen_name, style: Se.button, userId: b }),
                              !I &&
                                  O &&
                                  n.createElement(ee.ZP, {
                                      "aria-label": ye,
                                      hoverLabel: { label: ye },
                                      icon: ve,
                                      onPress: () => {
                                          if (w) {
                                              const e = (0, me.Z)(b, w);
                                              E.scribe({ element: "message", action: "click", data: { conversation_id: e, conversation_participant_count: 2, conversation_type: pe.NK.ONE_TO_ONE, inbox_type: pe.H6.NOT_AVAILABLE } }), y.push(`/messages/${e}`);
                                          }
                                      },
                                      style: Se.button,
                                      testID: be,
                                      type: "primaryOutlined",
                                  }),
                              !I && R && n.createElement(oe.Z, { buttonStyle: Se.button, userId: b }),
                              !I && z && n.createElement(se.Z, { allowPromptForPush: !0, isDeviceFollowWithoutUserFollow: T && !a, isFollowing: u, style: Se.button, userId: b }),
                              !I && h?.screen_name && j && n.createElement(ee.ZP, { "aria-label": Pe, hoverLabel: { label: Pe }, icon: Ze, link: `/${h?.screen_name}/gift-premium`, style: Se.button }),
                              !I && Z && p && !_ ? n.createElement(ce.Z, { isFollowing: a, isSuperFollowing: _, style: Se.button, userId: b }) : null,
                              !I && !e && !S && n.createElement(ne.Z, { onOffscreenChange: d }, n.createElement(ie.C, { isSuperFollowSubscriptionEnabled: Z, promotedContent: f, style: Se.lastButton, userId: b })),
                          );
                }),
                Be = (e) => {
                    const { user: t, ...r } = e,
                        s = g()(J.Z, e.user);
                    return n.createElement(Ie, (0, _.Z)({}, r, { blockedBy: s.relationship_perspectives?.blocked_by ?? !1, blocking: s.relationship_perspectives?.blocking ?? !1, canDm: Boolean(s.dm_permissions?.can_dm), defaultProfileImage: Boolean(s.legacy?.default_profile_image), description: s.legacy?.description || "", following: s.relationship_perspectives?.following ?? !1, notifications: Boolean(s.legacy?.notifications), profileBannerUrl: s.legacy?.profile_banner_url || "", superFollowEligible: Boolean(s.super_follow_eligible), superFollowing: Boolean(s.super_following), userId: s.rest_id, userRef: s }));
                };
            function ke(e) {
                if (e.user) {
                    const { user: t } = e;
                    return n.createElement(Ie, { blockedBy: t.blocked_by, blocking: t.blocking, canDm: t.can_dm, defaultProfileImage: t.default_profile_image, description: t.description, following: t.following, isWithheld: e.isWithheld, notifications: t.notifications, onFollowButtonOffscreen: e.onFollowButtonOffscreen, profileBannerUrl: t.profile_banner_url, promotedContent: e.promotedContent, superFollowEligible: t.super_follow_eligible, superFollowing: t.super_following, user: t, userId: t.id_str, viewerUserId: e.viewerUserId });
                }
                return e.userRef ? n.createElement(Be, { isWithheld: e.isWithheld, onFollowButtonOffscreen: e.onFollowButtonOffscreen, promotedContent: e.promotedContent, user: e.userRef, viewerUserId: e.viewerUserId }) : null;
            }
            const Se = i.default.create((e) => ({ buttons: { maxWidth: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", flexWrap: "wrap" }, button: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 }, lastButton: { marginBottom: e.spaces.space12 } })),
                Oe = n.memo(ke);
            var Re = r(332613),
                xe = r(14544),
                Ne = r(290213),
                Ue = r(12333),
                Te = r(731708),
                De = r(688715),
                Fe = r(529356);
            const We = P().df7cb6d4,
                Le = P().j24c37b2,
                Ve = { link: n.createElement(Te.ZP, { link: (0, De.ju)("https://help.x.com/rules-and-policies/profile-labels"), withInteractiveStyling: !0 }) },
                Ae = (e) => {
                    const { onAction: t } = e;
                    return n.createElement(Fe.Z, { actionLabel: Le, actionType: "primaryFilled", backButtonType: "close", graphicDisplayMode: "none", headline: We, isFullHeightOnMobile: !1, onAction: t, subtext: n.createElement(Te.ZP, null, n.createElement(P().I18NFormatMessage, { $i18n: "f575f533" }, n.cloneElement(Ve.link, null, P().ec429e79))), withCloseButton: !1 });
                },
                Me = n.memo(Ae);
            var ze = r(520385),
                je = r(462166),
                He = r(873302),
                $e = r(535338);
            const Qe = P().j04c717a,
                Xe = ({ sectionId: e }) => n.createElement(s.Z, { style: Ye.button }, n.createElement(ee.ZP, { link: { pathname: "/settings/bio", state: { addWorkExperience: !0, sectionId: e } } }, Qe)),
                Ye = i.default.create((e) => ({ button: { marginBottom: e.spaces.space12, alignItems: "flex-start" } })),
                qe = () => {
                    const e = (0, $e.p)(je.Bq, {}),
                        t = e.viewer.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results;
                    if (!e) return null;
                    const r = (0, He.uR)(t, ze.NB.WORK_EXPERIENCE);
                    return (0, He.hW)(r) ? null : n.createElement(Xe, { sectionId: r?.rest_id?.section_id });
                },
                Ge = "UserProfileHeader_Items",
                Je = "UserBirthdate",
                Ke = "UserDescription",
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
                          : n.createElement(dt.Z, { Icon: ot.default, key: Je, testID: Je }, n.createElement(ut.Z, { birthdate: e, withBornPrefixText: !0 }));
                },
                _t = n.memo((e) => {
                    const t = g()(it.Z, e.user),
                        r = t.legacy_extended_profile?.birthdate;
                    return n.createElement(pt, { birthdate: r, isOwnProfile: e.isOwnProfile });
                });
            function ht(e) {
                return e.user ? n.createElement(pt, { birthdate: e.user?.birthdate, isOwnProfile: e.isOwnProfile }) : e.userRef ? n.createElement(_t, { isOwnProfile: e.isOwnProfile, user: e.userRef }) : null;
            }
            const bt = n.memo(ht),
                gt = n.memo(({ children: e }) => n.createElement(s.Z, { style: wt.details }, n.createElement(Te.ZP, { style: wt.detailsText, testID: Ge }, e))),
                wt = i.default.create((e) => ({ details: { display: "block", marginBottom: e.spaces.space12 }, detailsText: { lineHeight: e.spaces.space12 } }));
            var Et = r(231684),
                yt = r(733357),
                vt = r(665468);
            const Zt = n.memo(({ location: e }) => (!e || (0, yt.Z)(e) ? null : n.createElement(dt.Z, { Icon: vt.default, testID: tt }, n.createElement(Te.ZP, null, e)))),
                Pt = n.memo((e) => {
                    const t = g()(Et.Z, e.user);
                    return n.createElement(Zt, { location: t.location?.location });
                });
            function Ct(e) {
                return e.location ? n.createElement(Zt, { location: e.location }) : e.user ? n.createElement(Pt, { user: e.user }) : null;
            }
            const It = n.memo(Ct);
            var Bt = r(720930),
                kt = r(912021),
                St = r(656520);
            const Ot = (0, kt.Z)((e) => (e ? r.c[r(626057).resolve(`./${e}.js`)]?.exports.default || Rt(e) : Bt.default)),
                Rt = (e) => {
                    const t = n.lazy(() => r(537212)(`./${e}.js`).catch(() => ({ default: Bt.default })));
                    return (e) => n.createElement(n.Suspense, { fallback: null }, n.createElement(t, e));
                },
                xt = (e) => {
                    const { categoryIcon: t, categoryName: r, isOwnProfile: s, onPress: i } = e,
                        l = (0, B.z)(),
                        o = n.useCallback(() => {
                            l.scribe({ page: s ? "me" : "profile", ...St.yL() }), i();
                        }, [l, s, i]);
                    return n.createElement(dt.Z, { Icon: Ot(t), style: Ut.root, testID: rt, withInteractiveStyling: !1 }, n.createElement(Te.ZP, { onPress: o }, r));
                },
                Nt = n.memo(xt),
                Ut = i.default.create((e) => ({ root: { cursor: "pointer" } }));
            var Tt = r(268723),
                Dt = r(179562),
                Ft = r(787379);
            const Wt = n.memo(({ description: e, entities: t, grokTranslatedBio: r, isProfileTranslatable: i, userId: l, withheldDescription: o, withheldEntities: a }) => (e ? n.createElement(s.Z, { style: Vt.description }, n.createElement(Dt.Z, { description: e, disableTranslation: !i, entities: t, grokTranslatedBio: r, testID: Ke, userId: l, withheldDescription: o || void 0, withheldEntities: a })) : null)),
                Lt = n.memo((e) => {
                    const { is_profile_translatable: t, legacy: r, rest_id: s } = g()(Tt.Z, e.user),
                        i = n.useMemo(() => (0, Ft._)(r?.entities), [r?.entities]),
                        l = n.useMemo(() => (0, Ft._)(r?.withheld_entities), [r?.withheld_entities]);
                    return n.createElement(Wt, { description: r?.description || "", entities: i, isProfileTranslatable: Boolean(t), userId: s, withheldDescription: r?.withheld_description, withheldEntities: l });
                });
            const Vt = i.default.create((e) => ({ description: { display: "block", marginBottom: e.spaces.space12 } })),
                At = function (e) {
                    if (e.user) {
                        const { user: t } = e;
                        return n.createElement(Wt, { description: t?.description || "", entities: t.entities, grokTranslatedBio: t.grok_translated_bio, isProfileTranslatable: Boolean(t.is_profile_translatable), userId: t.id_str, withheldDescription: t.withheld_description, withheldEntities: t.withheld_entities });
                    }
                    return e.userRef ? n.createElement(Lt, { user: e.userRef }) : null;
                };
            var Mt = r(973581),
                zt = r(630715);
            const jt = n.memo(({ display_url: e, url: t }) => (t ? n.createElement(dt.Z, { Icon: zt.default, key: nt, link: { pathname: t, external: !0 }, testID: nt }, e || t) : null)),
                Ht = n.memo((e) => {
                    const { display_url: t, url: r } = g()(Mt.Z, e.urlsEntitity);
                    return n.createElement(jt, { display_url: t, url: r });
                });
            function $t(e) {
                return e.urlsEntity ? n.createElement(jt, { display_url: e.urlsEntity.display_url, url: e.urlsEntity.url }) : e.urlsEntityRef ? n.createElement(Ht, { urlsEntitity: e.urlsEntityRef }) : null;
            }
            const Qt = n.memo($t);
            var Xt = r(586672),
                Yt = r(406727),
                qt = r(187669),
                Gt = r(725405);
            const Jt = P().f543dbf6,
                Kt = n.memo(({ verified_phone_status: e }) => {
                    const t = (0, Gt.Z)();
                    return (
                        (0, qt.q)(() => {
                            t.scribe({ element: "verified_phone_label", action: "impression" });
                        }),
                        e ? n.createElement(dt.Z, { Icon: Yt.default, testID: st }, n.createElement(Te.ZP, null, Jt)) : null
                    );
                }),
                er = n.memo((e) => {
                    const t = g()(Xt.Z, e.user);
                    return n.createElement(Kt, { verified_phone_status: t?.verified_phone_status || !1 });
                });
            const tr = function (e) {
                    return (0, de.hC)("verified_phone_label_enabled") ? (e.user ? n.createElement(Kt, { verified_phone_status: e.user?.verified_phone_status || !1 }) : e.userRef ? n.createElement(er, { user: e.userRef }) : null) : null;
                },
                rr = n.memo(({ createdAt: e, isOwnProfile: t, professionalCategoryIcon: r, professionalCategoryName: s, urlEntity: i, urlEntityRef: l, user: o, userRef: a }) => {
                    const [c, u] = n.useState(!1),
                        d = n.useCallback(() => {
                            u((e) => !e);
                        }, []),
                        m = (0, de.hC)("xprofile_profile_button_enabled");
                    return n.createElement(n.Fragment, null, n.createElement(xe.Z, null, n.createElement(At, { user: o, userRef: a })), n.createElement(Ue.Z, { screenName: o?.screen_name }), t && m && n.createElement(qe, null), n.createElement(gt, null, s ? n.createElement(Nt, { categoryIcon: r, categoryName: s, isOwnProfile: t, onPress: d }) : null, n.createElement(It, { location: o?.location, user: a }), n.createElement(Qt, { urlsEntity: i, urlsEntityRef: l }), n.createElement(bt, { isOwnProfile: t, user: o, userRef: a }), e ? n.createElement(Ne.Z, { joinDate: e, key: et, testID: et }) : null, n.createElement(tr, { user: o, userRef: a })), c ? n.createElement(Me, { onAction: d }) : null);
                }),
                nr = n.memo((e) => {
                    const t = g()(Re.Z, e.user),
                        r = t.legacy?.entities?.url?.urls?.[0];
                    return n.createElement(rr, { createdAt: t.core?.created_at, isOwnProfile: e.isOwnProfile, professionalCategoryIcon: e.professionalCategoryIcon, professionalCategoryName: e.professionalCategoryName, urlEntityRef: r, userRef: t });
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
                const r = (0, k.I0)(),
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
                            { color: "gray700", style: wr.mute },
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
                                    style: wr.unmuteButton,
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
                br = n.memo((e) => {
                    const t = g()(lr.Z, e.user);
                    return n.createElement(hr, { screenName: t.core?.screen_name || "", userId: t.rest_id });
                });
            function gr(e) {
                return e.user ? n.createElement(hr, { screenName: e.user.screen_name, userId: e.user.id_str }) : e.userRef ? n.createElement(br, { user: e.userRef }) : null;
            }
            const wr = i.default.create((e) => ({ mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: "pointer" } })),
                Er = n.memo(gr);
            var yr = r(696657),
                vr = r(360917),
                Zr = r.n(vr),
                Pr = r(59871),
                Cr = r(366635),
                Ir = r(392049),
                Br = r(797448),
                kr = r(799432),
                Sr = r(998118),
                Or = r(480056),
                Rr = r(728220),
                xr = r(32256);
            const Nr = "UserName";
            var Ur = r(622078),
                Tr = r(649846),
                Dr = r(686689),
                Fr = r(673096),
                Wr = r(273490),
                Lr = r(479506);
            function Vr(e, t, r) {
                const s = (0, B.z)();
                return n.useCallback(() => {
                    s.scribe({ ...e, element: "automated_label", action: "click", data: { items: [{ id: t, name: r, item_type: Lr.Z.ItemType.USER }] } });
                }, [s, e, t, r]);
            }
            const Ar = n.memo(({ namespace: e, user: t }) => {
                    const r = Vr(e, t.id_str, t.screen_name),
                        s = n.useMemo(() => (t.highlightedLabel?.longDescription?.entities ? n.createElement(Dr.Z, { entities: t.highlightedLabel.longDescription.entities, forceAutoTextDirection: !0, onEntityClick: r, text: t.highlightedLabel.longDescription.text }) : t.highlightedLabel?.description || null), [r, t.highlightedLabel]);
                    return null == t.highlightedLabel && null == s ? null : n.createElement(Tr.Z, { isIconLarge: !0, label: { ...t.highlightedLabel, description: s } });
                }),
                Mr = n.memo((e) => {
                    const t = g()(Ur.Z, e.user),
                        r = (function (e, t) {
                            const r = g()(Wr.Z, e);
                            return Vr(t, r.rest_id, r.core.screen_name);
                        })(t, e.namespace),
                        s = t.affiliates_highlighted_label?.label;
                    return s ? n.createElement(Fr.Z, { highlightedUserLabel: s, isIconLarge: !0, onRichTextEntityClick: r }) : null;
                });
            function zr(e) {
                return e.user ? n.createElement(Ar, { namespace: e.namespace, user: e.user }) : e.userRef ? n.createElement(Mr, { namespace: e.namespace, user: e.userRef }) : null;
            }
            const jr = n.memo(zr);
            var Hr = r(465067);
            const $r = n.memo(({ getVerifiedCardShouldShow: e, isBlueVerified: t, isFollowedBy: r, isOwnProfile: i, isProtected: o, isVerified: a, isWithheld: c, name: u, namespace: d, screenName: f, translatorType: p, user: h, userId: b, userRef: g }) => {
                    const w = h?.verified_type,
                        E = h?.auxiliaryUserLabels,
                        y = h?.highlightedLabel,
                        v = Boolean(u && f && !(c && !i)),
                        Z = v ? u : `@${f}`,
                        { featureSwitches: P, userClaims: C } = (0, l.QZ)(),
                        I = (0, de.hC)("blue_business_multi_affiliates_ui_enabled"),
                        B = (0, Rr.Z)(),
                        k = (0, Sr.Z)({ isOwnProfile: i, userClaims: C, user: h, verifiedType: h?.verified_type, featureSwitch: "subscriptions_upsells_get_verified_profile", featureSwitches: P }),
                        S = (0, Or.Z)(i, h?.screen_name, "x_vo_business_promotion");
                    let O = !1;
                    i && B && (O = P.isTrue("subscriptions_is_blue_verified_review_status_profile_enabled"));
                    const R = c ? Zr() : { affiliateBadgeInfo: y, isBlueVerified: !!t, isProtected: !!o, isVerified: a, translatorType: p, verifiedType: w, auxiliaryUserLabels: I ? E : void 0 },
                        x = h?.verification_info,
                        N = n.useMemo(() => {
                            if (Pr.Z.getVerifiedDisplayType({ isBlueVerified: t, isVerified: a, verifiedType: w }) !== Pr.K.none || o) return (e, r) => n.createElement(xr.Z, { affiliateBadgeInfo: y, auxiliaryUserLabels: E, dismiss: e, isBlueVerified: t, isOwnProfile: i, isProtected: o, isVerified: a, type: r, verificationInfo: x, verifiedType: w });
                        }, [a, t, w, x, o, y, E, i]);
                    return n.createElement(s.Z, { style: m.Z.names, testID: Nr }, n.createElement(s.Z, { style: m.Z.namesInner }, n.createElement(Cr.Z, (0, _.Z)({}, R, { badgeContext: "account", name: Z, nameSize: "headline1", renderVerifiedBadgeContext: N, screenName: f, weight: "heavy", withFollowsYou: r && !c, withNameWrap: !0, withScreenName: v, withStackedLayout: !0 })), n.createElement(jr, { namespace: d, user: h, userRef: g })), n.createElement(s.Z, { style: Z.length > 40 ? m.Z.longNameButtons : void 0 }, S ? n.createElement(kr.Z, null) : k && null !== e && !e ? n.createElement(Br.Z, null) : O ? n.createElement(Ir.Z, null) : null));
                }),
                Qr = n.memo((e) => {
                    const t = g()(yr.Z, e.user),
                        r = (function (e) {
                            const t = g()(Hr.Z, e);
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
                    return t.core ? n.createElement($r, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isBlueVerified: !!t.is_blue_verified, isFollowedBy: t.relationship_perspectives?.followed_by ?? !1, isOwnProfile: e.isOwnProfile, isProtected: t.privacy?.protected ?? !1, isVerified: !!t.verification?.verified, isWithheld: e.isWithheld, name: t.core.name || "", namespace: e.namespace, screenName: t.core.screen_name, translatorType: r, userId: t.rest_id, userRef: t }) : null;
                });
            function Xr(e) {
                if (e.user) {
                    const { user: t } = e;
                    return n.createElement($r, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isBlueVerified: t.is_blue_verified, isFollowedBy: t.followed_by, isOwnProfile: e.isOwnProfile, isProtected: t.protected, isVerified: t.verified, isWithheld: e.isWithheld, name: t.name, namespace: e.namespace, screenName: t.screen_name, translatorType: t.translator_type, user: t, userId: t.id_str });
                }
                return e.userRef ? n.createElement(Qr, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, namespace: e.namespace, user: e.userRef }) : null;
            }
            const Yr = n.memo(Xr);
            var qr = r(379920),
                Gr = r(312595),
                Jr = r(646797),
                Kr = r(288955),
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
                        b = t || !a;
                    return n.createElement(Kr.Z, null, (e) => n.createElement(Jr.Z, { followersCount: l, friendsCount: o, onPress: e(), screenName: c, subscribersCount: h, subscriptionsCount: f ? i : void 0, withLink: (0, en.n5)({ isOwnProfile: t, user: r, isSoftBlockEnabled: d }), withSubscriptionsCount: b }));
                },
                sn = (e) => {
                    const t = (0, de.hC)("xprofile_blocked_by_view_enabled"),
                        r = g()(Gr.Z, e.user),
                        s = g()(qr.Z, e.viewer),
                        i = (0, tn.g)({ user: r, isOwnProfile: e.isOwnProfile, isSoftBlockEnabled: t }),
                        l = Boolean(s?.is_active_creator) && e.isOwnProfile;
                    return n.createElement(Kr.Z, null, (e) => n.createElement(rn.V, { onPress: e(), user: r, viewer: s, withLink: i, withSubscribersCount: l }));
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
                bn = ({ dismiss: e, profileUser: { screen_name: t }, viewerUser: { screen_name: r } }) => {
                    const o = (0, Gt.Z)(),
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
                    (0, qt.q)(() => {
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
                            { style: [yn.cardBlock, { backgroundColor: i.default.theme.colors[h] }], testID: "verified_profile_visitor_upsell" },
                            n.createElement(ee.ZP, {
                                borderColor: "transparent",
                                icon: n.createElement(cn.default, null),
                                onPress: () => {
                                    o.scribe({ component: d, action: "dismiss" }), e();
                                },
                                size: "xSmall",
                                style: yn.dismissButton,
                            }),
                            n.createElement(
                                s.Z,
                                { style: yn.inner },
                                n.createElement(Te.ZP, { style: yn.heading, weight: "bold" }, gn(p)),
                                n.createElement(Te.ZP, { size: "body", style: yn.subheading }, f[0], n.createElement(Te.ZP, { weight: "bold" }, f[1]), f[2]),
                                n.createElement(
                                    ee.ZP,
                                    {
                                        link: { pathname: "/i/premium_sign_up", state: { referring_page: hn } },
                                        onPress: () => {
                                            o.scribe({ component: d, action: "click" });
                                        },
                                        style: yn.button,
                                        type: "primaryFilled",
                                    },
                                    _n,
                                ),
                            ),
                        )
                    );
                },
                gn = (e) => {
                    const t = e.lastIndexOf(" ");
                    return -1 !== t ? n.createElement(Te.ZP, { style: yn.heading, weight: "bold" }, e.slice(0, t + 1), n.createElement(Te.ZP, { style: yn.inlineVerified }, e.slice(t + 1), " ", n.createElement(un.default, { style: yn.verifiedIcon }))) : n.createElement(s.Z, null, e, " ", n.createElement(un.default, { style: yn.verifiedIcon }));
                },
                wn = (e) => {
                    const { dismiss: t, impress: r, shouldShow: s } = (0, c.ZP)({ showForMsec: null, reappearAfterMsec: null, dismissForMsec: c.$i, key: "verified_profile_visitor" });
                    return (
                        n.useEffect(() => {
                            r();
                        }),
                        s ? n.createElement(d.nO, { data: { referer: hn }, namespace: { component: "unified-upsell" } }, n.createElement(bn, (0, _.Z)({ dismiss: t }, e))) : null
                    );
                },
                En = ({ userData: e }) => {
                    const { featureSwitches: t, userClaims: r } = (0, l.QZ)(),
                        s = (0, k.v9)(dr.ZP.selectViewerUser),
                        i = s?.screen_name === e?.screen_name,
                        o = e && e.is_blue_verified,
                        a = "Business" === e?.verified_type || "Government" === e?.verified_type,
                        c = "Business" === s?.verified_type || "Government" === s?.verified_type,
                        u = r.isAnyVerifiedOrgOrAffiliate(),
                        d = r.hasSubscription("premium_basic"),
                        m = r.isAnyPremiumSubscriber();
                    return !s || !e || a || c || !o || i || s?.is_blue_verified || u || (m && !d) ? null : t.isTrue("subscriptions_upsells_verified_profile_visitor_upsell_enabled") ? n.createElement(wn, { profileUser: e, viewerUser: s }) : null;
                },
                yn = i.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, marginHorizontal: e.spaces.space16, overflow: "hidden", flexDirection: "row", justifyContent: "flex-start" }, dismissButton: { position: "absolute", end: e.spaces.space16, top: e.spaces.space12, zIndex: 1 }, inner: { padding: e.spaces.space16, maxWidth: "100%" }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { fontSize: e.fontSizes.headline2, marginBottom: e.spaces.space8, marginEnd: e.spaces.space24 }, subheading: { marginBottom: e.spaces.space8 }, verifiedIcon: { height: 20, width: 20 }, inlineVerified: { flexDirection: "row", flexWrap: "nowrap", display: "inline-flex" } })),
                vn = { page: "profile", section: "header" },
                Zn = (e) => {
                    const { isActiveCreator: t, isWithheld: r, onFollowButtonOffscreen: i, professionalCategoryIcon: _, professionalCategoryName: h, promotedContent: b, showBlockedTweets: g, superFollowersCount: w, user: E, viewerUserId: y } = e,
                        { featureSwitches: v } = (0, l.QZ)(),
                        Z = v.isTrue("xprofile_blocked_by_view_enabled"),
                        [P, C] = n.useState(!1),
                        I = n.useCallback(() => {
                            C(!1);
                        }, []),
                        [B, k] = n.useState(E.id_str),
                        [S, O] = n.useState(E.following),
                        R = { key: "verified_profile_card_upsell", showForMsec: c.IZ, reappearAfterMsec: c.IZ, dismissForMsec: null, dismissUntilNextReappear: !0 },
                        { dismiss: x, gotDismissed: N, impress: U, shouldShow: T } = (0, c.ZP)(R),
                        D = (0, a.z)();
                    n.useEffect(() => {
                        U();
                    }, [U, T, N]);
                    const F = v.isTrue("subscriptions_upsells_get_verified_profile_rotation_enabled") && T;
                    B !== E.id_str && (k(E.id_str), C(!1)), !1 === S && !0 === E.following && (O(E.following), C(!0));
                    const W = (0, an.nf)(y, E),
                        L = (0, an.ZQ)(y, r, E, Z),
                        A = (0, an.jB)(y, r, E, Z),
                        M = (0, an.Xy)(y, r, E, Z),
                        z = (0, an.zi)({ isSoftBlockEnabled: Z, isWithheld: r, showBlockedTweets: g, user: E, viewerUserId: y }),
                        [j, H] = n.useState(!1);
                    return n.createElement(d.nO, { namespace: vn }, n.createElement(s.Z, { style: D && Pn.rootRedesign }, n.createElement(G, { isOwnProfile: W, isWithheld: r, user: E }), n.createElement(s.Z, { style: [m.Z.content, Pn.content, L && m.Z.withheld] }, n.createElement(s.Z, { style: m.Z.avatarAndButton }, n.createElement(V, { isOwnProfile: W, isWithheld: r, user: E, userId: E.id_str }), n.createElement(Oe, { isWithheld: r, onFollowButtonOffscreen: i, promotedContent: b, user: E, viewerUserId: y })), n.createElement(Yr, { getVerifiedCardShouldShow: F, isOwnProfile: W, isWithheld: r, namespace: vn, user: E }), L ? null : n.createElement(ir, { isOwnProfile: W, professionalCategoryIcon: _, professionalCategoryName: h, user: E, userRef: void 0 }), A ? null : n.createElement(on, { isActiveCreator: t, isOwnProfile: W, subscribersCount: w, user: E }), M ? null : n.createElement(s.Z, { style: Pn.marginTopXSmall }, n.createElement(o.Z, { userId: E.id_str, userScreenName: E.screen_name })), E.muting ? n.createElement(Er, { user: E, userRef: void 0 }) : null), z ? null : n.createElement(f.U, { setIsRenderingProfileSpotlight: H, user: E, viewerUserId: y }), !j && !E.possibly_sensitive && n.createElement(En, { userData: E }), W && F ? n.createElement(p.Z, { dismissProfileUpsellCard: x, gotDismissedProfileUpsellCard: N, shouldShowProfileUpsellCard: F, user: E }) : null, P ? n.createElement(u.Z, { onRemoveClusterFollow: I, userId: E.id_str }) : null));
                },
                Pn = i.default.create((e) => ({ rootRedesign: { paddingHorizontal: e.spaces.space16 }, content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } })),
                Cn = n.memo(Zn);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-e3794290.075b469a.js.map
