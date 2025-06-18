"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var i = n(202784),
                a = n(466999),
                o = n(325686),
                r = n(392237),
                s = n(111677);
            const d = n.n(s)().e5b0063d;
            let l = 0;
            class c extends i.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${l}`), (l += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = d({ title: t });
                    return i.createElement(o.Z, { "aria-labelledby": this._listDomId, role: "region" }, i.createElement(a.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, t), i.createElement(o.Z, { "aria-label": n }, e));
                }
            }
            const _ = c;
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                a = n(325686),
                o = n(392237);
            class r extends i.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return i.createElement(a.Z, { style: s.root });
                }
            }
            const s = o.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                d = r;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(807896),
                a = n(202784),
                o = n(229333),
                r = n(414939),
                s = n(334346);
            const d = ({ accessibilityTitle: e, footer: t = a.createElement(r.Z, null), ...n }) => {
                const d = a.createElement(s.C, (0, i.Z)({}, n, { footer: t }));
                return e ? a.createElement(o.Z, { title: e }, d) : d;
            };
        },
        301758: (e, t, n) => {
            n.d(t, { Z: () => I });
            var i = n(807896),
                a = n(202784),
                o = n(235902),
                r = n(521288),
                s = n(401388),
                d = n(988566),
                l = n(725516),
                c = n(443781),
                _ = n(71620),
                p = n(668214),
                m = n(491963),
                u = n(836255);
            const y = (e, t) => t.tweetId,
                E = (e, t) => {
                    const n = t.tweetId,
                        i = n && u.Z.select(e, n);
                    return i ? (0, m.z0)(e, i) : void 0;
                },
                I = (0, p.Z)()
                    .propsFromState(() => ({ community: E, hydratedTweet: u.Z.createHydratedTweetSelector(y) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: m.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: n, hydratedTweet: _, onAvatarClick: p, onMediaClick: m, onPress: u, onScreenNameClick: y, tweetId: E, withBirdwatchPivot: I = !0, ...h }) => {
                    const { featureSwitches: C, viewerUserId: g } = a.useContext(c.rC),
                        b = (0, l.z)(),
                        T = _?.community_id_str;
                    a.useEffect(() => {
                        T && (0, s.Z)(e) && n(T).catch(t());
                    }, [e, T, t, n]);
                    const v = a.useCallback(
                            (e) => {
                                b.scribeAction("click"), u && u(e);
                            },
                            [u, b],
                        ),
                        A = !!I,
                        f = _ && (0, d.D$)(_, g, e),
                        D = f && (0, d.rl)(f);
                    return a.createElement(o.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => C.isTrue("responsive_web_edit_tweet_enabled") || C.isTrue("subscriptions_feature_labs_1004") } }, a.createElement(r.Z, (0, i.Z)({}, h, { loggedInUserId: g, onAvatarClick: p, onMediaClick: m, onPress: v, onScreenNameClick: y, shouldShowAltLabelAlways: !0, socialContextProps: D, tweet: _, withBirdwatchPivot: A })));
                });
        },
        734408: (e, t, n) => {
            n.d(t, { AU: () => A, O4: () => w, Vb: () => f });
            n(136728);
            var i = n(111677),
                a = n.n(i),
                o = n(817480),
                r = n(323265),
                s = n(538619),
                d = n(542908),
                l = n(85375),
                c = n(94909);
            const _ = { media: !0, details: !0, button_group: !0, app_store_details: !0, swipeable_media: !0, twitter_list_details: !0, community_details: !0, job_details: !0, dpa_details: !0, grok_share: !0, media_with_details_horizontal: !0 },
                p = (e) => {
                    const t = (t) => t.map((t) => e.find(({ type: e }) => e === t)).find(Boolean),
                        n = "android" === s.v.getMobileOS() ? t(["android_app", "iphone_app", "ipad_app"]) : t(["iphone_app", "ipad_app", "android_app"]);
                    if (!n) return;
                    n.category || (n.category = { is_rtl: !1, content: "android_app" === n.type ? "Play Store" : "App Store" });
                    const i = "android_app" === n.type ? `http://play.google.com/store/apps/details?id=${n.id}` : ((e) => `https://itunes.apple.com/app/id${e}`)(n.id);
                    return (n.url = r.ZP.isMobileOS() ? { pathname: i, external: !0, openInSameFrame: !0 } : i), n;
                },
                m = (e) => {
                    const t = e ? e.data.destination : void 0;
                    let n;
                    return e && (n = { ...e.data.title }), { type: "details", data: { title: n, footer: undefined, destination: t } };
                },
                u = (e) => {
                    let t, n, i, a;
                    return e && ((t = e.data.destination), (n = e.data.price), (i = e.data.title), (a = e.data.sale_price)), { type: "dpa_details", data: { title: i, destination: t, price: n, salePrice: a } };
                },
                y = (e, t) => {
                    const n = e ? e.data.destination : void 0;
                    let i, a;
                    if (e) {
                        const n = e.data.app_id,
                            o = p(t[n]) || {};
                        (i = o.title), (a = o.category ? o.category.content : void 0);
                    }
                    return { type: "app_store_details", data: { title: i, footer: a, destination: n } };
                },
                E = (e, t) => {
                    const { destination: n, member_count: i, members_facepile: a, name: o } = e.data;
                    return { type: l.Qe.COMMUNITY_DETAILS, data: { title: o, memberCount: i, destination: n, facepileUserIds: a, facepileUsers: t } };
                },
                I = (e) => {
                    const { destination: t, employment_type: n, formatted_salary: i, formatted_salary_max: a, formatted_salary_min: o, location: r, profile_user: s, salary_interval: d, salary_max: c, salary_min: _, short_description: p, title: m } = e.data;
                    return { type: l.Qe.JOB_DETAILS, data: { destination: t, employment_type: n, formatted_salary: i, formatted_salary_min: o, formatted_salary_max: a, location: r, profile_user: s, salary_interval: d, salary_max: c, salary_min: _, short_description: p, title: m } };
                },
                h = (e, t) => {
                    let n = !1,
                        i = !1;
                    for (let a = 0; a < e.length; a++) {
                        const o = t[e[a]];
                        if (!o) continue;
                        const r = o.type;
                        if (((i = i || "photo" === r), (n = n || "video" === r), i && n)) break;
                    }
                    return { hasVideo: n, hasImage: i };
                },
                C = (e) => {
                    const { component_objects: t, display_options: n, media_entities: i } = e,
                        { should_auto_advance: a } = n || {};
                    if (void 0 !== a) return a;
                    const o = Object.keys(t);
                    let r = !1,
                        s = !1;
                    for (let e = 0; e < o.length; e++) {
                        const n = t[o[e]],
                            a = "swipeable_media" === n.type ? n.data.media_list.map((e) => e.id) : "media" === n.type ? [n.data.id] : [],
                            d = h(a, i);
                        if (((r = r || d.hasVideo), (s = s || d.hasImage), s && r)) break;
                    }
                    return r && !s;
                },
                g = (e, t) => {
                    const n = e.data.destination,
                        i = { ...e.data.name },
                        a = t[e.data.user_id],
                        o = e.data.member_count;
                    return { type: l.Qe.TWITTER_LIST_DETAILS, data: { title: i, destination: n, memberCount: o, attribution: a } };
                },
                b = (e, t) => ({
                    type: l.Qe.BUTTON_GROUP,
                    data: {
                        buttons: e.data.buttons.map((e, n) => {
                            const i = t[e.destination],
                                a = "custom" === e.type ? (0, c.JP)(e.style) : "cta_dpa" === e.type ? "primaryFilled" : void 0;
                            return { type: d.lW.GENERIC, data: { index: n + 1, icon: e.icon_type, destination: e.destination, cta: "cta" === e.type || "cta_dpa" === e.type ? s.v.getCtaString(e.action) : e.text.content, is_rtl: "custom" === e.type ? e.text.is_rtl : void 0, isAppDetails: i.type === l._g.APP_STORE || i.type === l._g.APP_STORE_WITH_DOCKED_MEDIA, styleType: a } };
                        }),
                    },
                });
            function T(e, t, n, i, a, o, r) {
                const {
                        destination: s,
                        media_id: d,
                        topic_detail: { subtitle: c, title: _ },
                    } = e.data,
                    p = Object.keys(t).reduce((e, n) => ((e[n] = { ...t[n], data: { ...t[n].data, scribe_element: "uc_media_with_details_horizontal" } }), e), {});
                return { cardState: l.uW.DEFAULT, layout: { [l.uW.DEFAULT]: { size: "small" }, [l.uW.CONDENSED]: { size: "small" }, [l.uW.STATIC]: { size: "small" } }, card: { card_name: n, on_visibility: { scribe: "show" }, id: i, components: { [l.uW.DEFAULT]: [l.Fw.MEDIA, l.Fw.TOPIC_DETAILS] }, destinations: p, media_entities: { ...o }, components_data: { [l.Fw.MEDIA]: { type: l.Qe.MEDIA, data: { id: d, aspect_ratio: 1, destination: s } }, [l.Fw.TOPIC_DETAILS]: { type: l.Qe.TOPIC_DETAILS, data: { destination: s, ...(c && c.content ? { description: { ...c } } : null), title: _ } } }, ucLayout: r } };
            }
            const v = (e) => {
                    if ("string" == typeof e.unified_card?.string_value)
                        try {
                            return JSON.parse(e.unified_card.string_value);
                        } catch (e) {}
                    return null;
                },
                A = (e) => {
                    const t = v(e);
                    if (!t?.component_objects) return !1;
                    let n = t.components;
                    return t.layout?.data?.slides && (n = (0, o.Z)(t.layout.data.slides)), !!(n && n.length > 0 && n.every((e) => t.component_objects[e] && t.component_objects[e].type in _));
                },
                f = (e) => `${e}_static`;
            function D(e, t) {
                if (!e) return;
                return (e / 1e6).toLocaleString(a().language, { style: "currency", currency: t });
            }
            function O(e, t) {
                const n = e?.experiment_signals?.dpa_product_metadata;
                if (!n) return;
                (e.layout?.data?.slides ? (0, o.Z)(e.layout.data.slides).filter((t) => "details" === e.component_objects[t].type) : []).forEach((i, a) => {
                    const o = e.component_objects[i],
                        r = n[a];
                    if ("details" === o.type) {
                        e.component_objects[i] = (function (e, t, n) {
                            const i = { ...e, type: "dpa_details", data: { destination: e.data.destination, title: e.data.title, subtitle: e.data.subtitle, price: "" } };
                            return n.metadataEnabled?.() && ((i.data.price = D(t.regular_price_micros, t.currency_code) || ""), (i.data.sale_price = D(t.sale_price_micros, t.currency_code) || void 0)), i;
                        })(o, r, t);
                        const n = e.destination_objects[o.data.destination];
                        if ((n && n.data?.url_data && (n.data.url_data.vanity = o.data?.subtitle?.content), e.layout?.data?.slides && t.ctaEnabled?.())) {
                            const t = `button_group_${a + 1}`;
                            e.layout.data.slides[a].push(t), (e.component_objects[t] = { type: "button_group", data: { buttons: [{ type: "cta_dpa", action: "shopNow", destination: o.data.destination }] } });
                        }
                    }
                });
            }
            const w = ({ cardId: e, cardType: t, converterOptions: n, data: i }) => {
                const a = v(i);
                if (!a) return { cardState: l.uW.DEFAULT, layout: { [l.uW.DEFAULT]: { size: "large" }, [l.uW.CONDENSED]: { size: "small" }, [l.uW.STATIC]: { size: "large" } }, card: { id: e, card_name: t, components: { [l.uW.DEFAULT]: [], [l.uW.STATIC]: [] }, components_data: {}, destinations: {}, media_entities: {}, on_visibility: { scribe: "show" }, ucLayout: void 0, experiment_signals: {} } };
                const r =
                    ((c = a),
                    (_ = n.shouldConvertCollectionToImageWebsiteCard),
                    "collection" === c.layout?.type && void 0 !== _ && _()
                        ? (function (e) {
                              const t = e.layout?.data.slides.length ? e.layout?.data.slides[0] : [];
                              return { ...e, layout: void 0, components: t };
                          })(a)
                        : a);
                var c, _;
                if (r.experiment_signals?.dpa_product_metadata) {
                    const e = { metadataEnabled: () => !1, ctaEnabled: () => !1 };
                    O(r, n.dpaConversionOptions || e);
                }
                const { app_store_data: h, component_objects: A, components: D, destination_objects: w, experiment_signals: S, layout: L, media_entities: x, users: P } = r,
                    R =
                        ((N = w),
                        (M = h),
                        Object.keys(N).reduce((e, t) => {
                            const n = N[t];
                            if ("app_store_with_docked_media" === n.type || "app_store" === n.type) {
                                const i = p(M[n.data.app_id]);
                                e[t] = { type: "browser", data: { url_data: { url: i ? i.url : l.$H }, scribe: "unified_card_app_store_open_link", promoted_log: d.YE.UNIFIED_CARD_COMPONENT_APP_STORE_CLICK } };
                            } else e[t] = { ...n, data: { ...n.data, url_data: { vanity: s.v.getDefaultVanityUrl(), ...n.data.url_data }, scribe: "open_link", promoted_log: d.YE.UNIFIED_CARD_COMPONENT_URL_CLICK } };
                            return e;
                        }, {}));
                var N, M;
                const { mediaEntities: j, photoEntitiesFromVideo: F } = ((e) => {
                        const t = {},
                            n = {};
                        for (const i in e) {
                            const a = e[i];
                            if (((t[i] = a), (n[f(i)] = { media_url_https: a.media_url_https, type: "photo", original_info: a.original_info }), "photo" === a.type || "model3d" === a.type)) {
                                const { ext: e, ...n } = a;
                                n.altText = e?.altText?.r?.ok?.text || "";
                                const o = e?.mediaColor?.r?.ok?.palette;
                                o && (n.ext_media_color = { palette: o }), (t[i] = n);
                            } else if ("video" === a.type) {
                                const { ext: e, ...n } = a;
                                n.type = "uc_video";
                                const o = e?.mediaColor?.r?.ok?.palette;
                                o && (n.ext_media_color = { palette: o }), (t[i] = n);
                            }
                        }
                        return { mediaEntities: t, photoEntitiesFromVideo: n };
                    })(x),
                    k = L?.data?.slides ? (0, o.Z)(L.data.slides) : D,
                    U = {},
                    W = [],
                    K = [];
                let H, Z;
                for (const n of k) {
                    const i = A[n];
                    if (i)
                        switch (i.type) {
                            case "media_with_details_horizontal":
                                return T(i, R, t, e, 0, j, L);
                            case "details":
                                U[n] = m(i);
                                break;
                            case "community_details":
                                U[n] = E(i, P);
                                break;
                            case "job_details":
                                U[n] = I(i);
                                break;
                            case "dpa_details":
                                U[n] = u(i);
                                break;
                            case "twitter_list_details":
                                U[n] = g(i, P);
                                break;
                            case "app_store_details":
                                U[n] = y(i, h);
                                break;
                            case "button_group":
                                U[n] = b(i, w);
                                break;
                            case "grok_share":
                                U[n] = ((z = i), { type: l.Qe.GROK_SHARE, data: z.data });
                                break;
                            case "swipeable_media":
                                (U[n] = i), (H = n), (Z = i);
                                break;
                            case "media": {
                                U[n] = i;
                                const e = j[i.data.id],
                                    t = e && "uc_video" === e.type,
                                    a = f(n);
                                if ((t && (W.push(a), K.push(n)), t)) {
                                    const t = e ? e.original_info.width / e.original_info.height : null;
                                    U[a] = { type: l.Qe.MEDIA, data: { aspect_ratio: t || void 0, destination: i.data.destination || void 0, id: f(i.data.id), overlay: { type: l._5.PLAY } } };
                                }
                                break;
                            }
                            default:
                                continue;
                        }
                }
                var z;
                const B = Z?.data.media_list.some((e) => e.id && j[e.id] && ("uc_video" === j[e.id].type || "animated_gif" === j[e.id].type));
                B && Z && (U[l.Fw.SWIPEABLE_MEDIA_STATIC] = { type: l.Qe.SWIPEABLE_MEDIA, data: { media_list: Z.data.media_list.map((e) => ({ destination: e.destination, id: f(e.id), overlay: { type: l._5.PLAY } })) } });
                const Q = [...(W.length ? W : []), ...(B ? [l.Fw.SWIPEABLE_MEDIA_STATIC] : []), ...k.filter((e) => !(K.includes(e) || (B && e === H)))];
                return { cardState: l.uW.DEFAULT, layout: { [l.uW.DEFAULT]: { size: "large" }, [l.uW.CONDENSED]: { size: "large" }, [l.uW.STATIC]: { size: "large" } }, card: { card_name: t, displayOptions: { shouldAutoAdvance: C(r) }, on_visibility: { scribe: "show" }, id: e, components: { [l.uW.DEFAULT]: k, [l.uW.STATIC]: Q }, destinations: R, media_entities: { ...j, ...F }, components_data: U, ucLayout: L, experiment_signals: S } };
            };
        },
        759469: (e, t, n) => {
            n.d(t, { gb: () => z, ZP: () => B });
            n(571372);
            var i = n(233184),
                a = n(366458),
                o = n(701805),
                r = n(675498),
                s = n(784444),
                d = n(480878),
                l = n(610488),
                c = n(429555),
                _ = n(499078),
                p = n(168224),
                m = n(507334),
                u = n(174568),
                y = n(931386),
                E = n(174250),
                I = n(687415),
                h = n(649964),
                C = n(163336),
                g = n(824562),
                b = n(734408),
                T = (n(136728), n(85375)),
                v = n(323265),
                A = n(538619),
                f = n(542908);
            const D = "AndroidApp",
                O = "IphoneApp",
                w = "IpadApp",
                S = (e, t, n) => `destination_key_${e}_${t}_${n}`,
                L = (e, t, n) => `${e}_${t}_${n}`,
                x = (e) => `${e}_static`,
                P = (e) => {
                    const t = (t) => t.map((t) => e.find(({ type: e }) => e === t)).find(Boolean);
                    return "android" === A.v.getMobileOS() ? t([D, O, w]) : t([O, w, D]);
                },
                R = (e) => {
                    const t = P(e);
                    if (!t) return;
                    const n = "AndroidApp" === t.type ? `http://play.google.com/store/apps/details?id=${t.id}` : ((e) => `https://itunes.apple.com/app/id${e}`)(t.id);
                    return v.ZP.isMobileOS() ? { pathname: n, external: !0, openInSameFrame: !0 } : n;
                },
                N = (e) => ({ url_data: { url: e.url_data.full_url, vanity: e.url_data.vanity_url || A.v.getDefaultVanityUrl() }, scribe: f.bQ.OPEN_LINK, promoted_log: f.YE.UNIFIED_CARD_COMPONENT_URL_CLICK }),
                M = (e) => {
                    switch (e.__typename) {
                        case "CardAppStoreDestination":
                        case "CardAppStoreWithDockedMediaDestination":
                            return { type: "browser", data: { url_data: { url: R(e.app_store_data) || T.$H }, scribe: f.bQ.UC_APP_STORE_OPEN_LINK, promoted_log: f.YE.UNIFIED_CARD_COMPONENT_APP_STORE_CLICK } };
                        case "CardBrowserDestination":
                            return { type: "browser", data: { ...N(e) } };
                        case "CardBrowserWithDockedMediaDestination":
                            return { type: "browser_with_docked_media", data: { media_id: e.media.media_id, ...N(e) } };
                        case "CardProfileDestination":
                            return { type: "profile", data: { user_id: e.user_id, scribe: f.bQ.PROFILE_CLICK, promoted_log: f.YE.SCREEN_NAME_CLICK } };
                    }
                };
            function j(e) {
                switch (e) {
                    case "OnMedia":
                        return "onMediaWhiteFilled";
                    case "Primary":
                        return "brandFilled";
                    case "Secondary":
                        return "DEPRECATED_secondary";
                }
            }
            const F = (e) => {
                    if (e.result?.core && e.result?.verification && e.result?.privacy) return { id_str: e.result.id, profile_image_url_https: e.result.avatar?.image_url || "", protected: e.result.privacy.protected || !1, verified: e.result.verification.verified || !1, is_blue_verified: !!e.result.is_blue_verified, name: e.result.core.name || "", screen_name: e.result.core.screen_name || "" };
                },
                k = ({ component: e }) => {
                    const t = e.media.media_id || "",
                        n = `${t}_static`;
                    let i, a;
                    const o = e.media.media_info;
                    if ("ApiImage" === o?.__typename) {
                        const t = { height: o.original_img_height, width: o.original_img_width },
                            n = parseInt(e.media.media_id, 10);
                        (i = { altText: o.alt_text, display_url: o.original_img_url, expanded_url: o.original_img_url, ...(o.color_info?.palette && { ext_media_color: { palette: o.color_info.palette } }), id: Number.isNaN(n) ? 0 : n, id_str: e.media.media_id, media_key: e.media.media_key, media_url: o.original_img_url, media_url_https: o.original_img_url, original_info: t, sizes: { original: { h: o.original_img_height, resize: "fit", w: o.original_img_width } }, type: "photo" }), (a = { media_url_https: i.media_url_https, type: "photo", original_info: i.original_info });
                    } else if ("ApiVideo" === o?.__typename || "ApiGif" === o?.__typename) {
                        const t = o.preview_image,
                            n = parseInt(e.media.media_id, 10);
                        let r;
                        (r = "ApiVideo" === o?.__typename ? { type: "uc_video", id: Number.isNaN(n) ? 0 : n, id_str: e.media.media_id || "", ext_media_color: { palette: t?.color_info ? t.color_info.palette : [] }, media_url: t?.original_img_url || "", media_url_https: t?.original_img_url || "", url: t?.original_img_url || "", display_url: t?.original_img_url || "", expanded_url: t?.original_img_url || "", original_info: { width: t?.original_img_width || 0, height: t?.original_img_height || 0 }, sizes: { original: { h: t?.original_img_height || 0, resize: "fit", w: t?.original_img_width || 0 } }, video_info: { aspect_ratio: [o.aspect_ratio.numerator, o.aspect_ratio.denominator], duration_millis: o.duration_millis, variants: o.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } } : { type: "animated_gif", id: Number.isNaN(n) ? 0 : n, id_str: e.media.media_id || "", ext_media_color: { palette: t?.color_info ? t.color_info.palette : [] }, media_url: t?.original_img_url || "", media_url_https: t?.original_img_url || "", url: t?.original_img_url || "", display_url: t?.original_img_url || "", expanded_url: t?.original_img_url || "", original_info: { width: t?.original_img_width || 0, height: t?.original_img_height || 0 }, sizes: { original: { h: t?.original_img_height || 0, resize: "fit", w: t?.original_img_width || 0 } }, video_info: { aspect_ratio: [o.aspect_ratio.numerator, o.aspect_ratio.denominator], variants: o.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } }), (i = r), (a = { media_url_https: i.media_url_https, type: "photo", original_info: i.original_info });
                    }
                    return { mediaEntity: { key: t, entity: i }, staticMediaEntity: { key: n, entity: a } };
                },
                U = ({ component: e, componentDataIndex: t, componentIndex: n, slideIndex: i }) => {
                    const a = {},
                        o = S(i, n, t || 0),
                        r = e.destination_obj ? M(e.destination_obj) : {};
                    a[o] = r;
                    const s = L("media", i, n),
                        d = [s],
                        l = {},
                        c = { type: T.Qe.MEDIA, data: { destination: o, id: e.media.media_id } };
                    l[s] = c;
                    const { mediaEntity: _, staticMediaEntity: p } = k({ component: e }),
                        m = [];
                    if ("uc_video" === _.entity?.type) {
                        const e = `${s}_static`,
                            t = _.entity ? _.entity.original_info.width / _.entity.original_info.height : null;
                        m.push(e), (l[e] = { type: T.Qe.MEDIA, data: { aspect_ratio: t || void 0, destination: o, id: e, overlay: { type: T._5.PLAY } } });
                    } else m.push(s);
                    return { componentKeys: d, staticComponentKeys: m, destinationObjects: a, mediaEntities: { [_.key]: _.entity, [p.key]: p.entity }, componentsData: l, destinationKey: o, mediaEntityKey: _.key };
                },
                W = (e) => {
                    const { display_options: t, layout: n } = e,
                        { should_auto_advance: i } = t || {};
                    if (void 0 !== i) return i;
                    if (!n) return !1;
                    const a = "CardVerticalStackLayout" === n.__typename ? n.components : n.full_slides ? n.full_slides.map((e) => e.components).flat() : [];
                    let o = !1,
                        r = !1;
                    for (let e = 0; e < a.length; e++) {
                        const t = a[e],
                            n = "CardSwipeableMediaComponent" === t.__typename ? t.full_media_list || [] : "CardMediaComponent" === t.__typename ? [t] : [];
                        for (let e = 0; e < n.length; e++) {
                            const t = n[e];
                            (o = o || "ApiVideo" === t.media.media_info?.__typename), (r = r || "ApiImage" === t.media.media_info?.__typename);
                        }
                        if (r && o) break;
                    }
                    return o && !r;
                },
                K = ({ card: e, shouldConvertCollectionToImageWebsiteCard: t }) => {
                    const n = { componentKeys: [], staticComponentKeys: [], destinationObjects: {}, mediaEntities: {}, componentsData: {} },
                        i = ({ components: e, slideIndex: t }) =>
                            e.map((e, i) => {
                                let a = { componentKeys: [], staticComponentKeys: [], destinationObjects: {}, mediaEntities: {}, componentsData: {} };
                                switch (e.__typename) {
                                    case "CardFollowButtonComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("follow_button", n, t),
                                                a = { type: T.Qe.FOLLOW_BUTTON, data: { user_id: e.user.rest_id } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: {}, mediaEntities: {}, componentsData: { [i]: a } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardFacepileComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = {},
                                                a = S(n, t, 0),
                                                o = e.destination_obj ? M(e.destination_obj) : {};
                                            i[a] = o;
                                            const r = e.users_results ? e.users_results.map(F).filter(Boolean) : [],
                                                s = L("facepile", n, t),
                                                d = { type: T.Qe.FACEPILE, data: { facepileUsers: r.reduce((e, t) => ({ ...e, [t.id_str]: t }), {}), total_user_count: e.total_user_count, type: e.user_relationship_type, destination: a } };
                                            return { componentKeys: [s], staticComponentKeys: [s], destinationObjects: i, mediaEntities: {}, componentsData: { [s]: d } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardAppStoreDetailsComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("app_store_details", n, t),
                                                a = S(n, t, 0),
                                                o = e.destination_obj ? M(e.destination_obj) : {},
                                                r = { [a]: o },
                                                s = P(e.app_store_data) || {},
                                                d = s.title,
                                                l = s.category ? s.category.content : void 0,
                                                c = { type: T.Qe.APP_STORE_DETAILS, data: { title: d, footer: l, destination: a } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: r, mediaEntities: {}, componentsData: { [i]: c } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardButtonGroupComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = {},
                                                a = L("button_group", n, t),
                                                o = {
                                                    type: T.Qe.BUTTON_GROUP,
                                                    data: {
                                                        buttons: e.buttons.map((e, a) => {
                                                            const o = e.destination_obj?.__typename,
                                                                r = S(n, t, a),
                                                                s = e.destination_obj ? M(e.destination_obj) : {};
                                                            return (i[r] = s), { type: f.lW.GENERIC, data: { index: a + 1, icon: e.icon_type?.toLowerCase(), destination: r, cta: "Cta" === e.button_type ? A.v.getCtaString(e.action || "") : e.text ? e.text.content : "", is_rtl: "Custom" === e.button_type ? e.text?.is_rtl : void 0, isAppDetails: o === T.TW.APP_STORE || o === T.TW.APP_STORE_WITH_DOCKED_MEDIA, styleType: j(e.style) } };
                                                        }),
                                                    },
                                                };
                                            return { componentKeys: [a], staticComponentKeys: [a], destinationObjects: i, mediaEntities: {}, componentsData: { [a]: o } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardDetailsComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("details", n, t),
                                                a = S(n, t, 0),
                                                o = e.destination_obj ? M(e.destination_obj) : {},
                                                r = { [a]: o },
                                                s = { type: T.Qe.DETAILS, data: { title: e.title, destination: a } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: r, mediaEntities: {}, componentsData: { [i]: s } };
                                        })({ component: e, componentIndex: i, slideIndex: t });
                                        break;
                                    case "CardMediaComponent":
                                        a = (({ component: e, componentDataIndex: t, componentIndex: n, slideIndex: i }) => {
                                            const { componentKeys: a, componentsData: o, destinationObjects: r, mediaEntities: s, staticComponentKeys: d } = U({ component: e, componentIndex: n, slideIndex: i, componentDataIndex: t });
                                            return { componentKeys: a, staticComponentKeys: d, destinationObjects: r, mediaEntities: s, componentsData: o };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardMediaWithDetailsHorizontal":
                                    default:
                                        break;
                                    case "CardSwipeableMediaComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("swipeable_media", n, t),
                                                a = [];
                                            let o = {},
                                                r = {};
                                            const s = [];
                                            e.full_media_list &&
                                                e.full_media_list.forEach((e, i) => {
                                                    const d = U({ component: e, slideIndex: n, componentIndex: t, componentDataIndex: i }),
                                                        l = { destination: d.destinationKey, id: d.mediaEntityKey };
                                                    if ((a.push(l), (o = { ...o, ...d.destinationObjects }), (r = { ...r, ...d.mediaEntities }), "ApiVideo" === e.media.media_info?.__typename)) {
                                                        const e = { destination: d.destinationKey, id: x(d.mediaEntityKey), overlay: { type: T._5.PLAY } };
                                                        s.push(e);
                                                    }
                                                    if ("ApiGif" === e.media.media_info?.__typename) {
                                                        const e = { destination: d.destinationKey, id: x(d.mediaEntityKey) };
                                                        s.push(e);
                                                    }
                                                });
                                            const d = { type: T.Qe.SWIPEABLE_MEDIA, data: { media_list: a } },
                                                l = { [i]: d };
                                            return s.length && (l[T.Fw.SWIPEABLE_MEDIA_STATIC] = { type: T.Qe.SWIPEABLE_MEDIA, data: { media_list: s } }), { componentKeys: [i], staticComponentKeys: s.length ? [T.Fw.SWIPEABLE_MEDIA_STATIC] : [i], destinationObjects: o, mediaEntities: r, componentsData: l };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardTwitterListDetailsComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("twitter_list_details", n, t),
                                                a = S(n, t, 0),
                                                o = e.destination_obj ? M(e.destination_obj) : {},
                                                r = { [a]: o };
                                            let s = {};
                                            const d = e.user_results?.result;
                                            d && d.core && (s = { id_str: d.id, profile_image_url_https: d.avatar?.image_url || "", protected: !!d.privacy?.protected, verified: !!d.verification?.verified, is_blue_verified: !!d.is_blue_verified, name: d.core.name || "", screen_name: d.core.screen_name || "" });
                                            const l = { type: T.Qe.TWITTER_LIST_DETAILS, data: { title: e.name, destination: a, memberCount: e.member_count, attribution: s } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: r, mediaEntities: {}, componentsData: { [i]: l } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "DeveloperBuiltCardRootContainer":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("developer_built_card", n, t),
                                                a = { type: T.Qe.DEVELOPER_BUILT_CARD, data: { config: e } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: {}, mediaEntities: {}, componentsData: { [i]: a } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "DeveloperBuiltCardContainer":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("developer_built_card_deprecated", n, t),
                                                a = { type: T.Qe.DEVELOPER_BUILT_CARD_DEPRECATED, data: { config: e } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: {}, mediaEntities: {}, componentsData: { [i]: a } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                }
                                return (n.componentsData = { ...n.componentsData, ...a.componentsData }), (n.componentKeys = [...n.componentKeys, ...a.componentKeys]), (n.staticComponentKeys = [...n.staticComponentKeys, ...a.staticComponentKeys]), (n.destinationObjects = { ...n.destinationObjects, ...a.destinationObjects }), (n.mediaEntities = { ...n.mediaEntities, ...a.mediaEntities }), a.componentKeys[0];
                            }),
                        a = [],
                        o = e.layout;
                    switch (o?.__typename) {
                        case "CardSwipeableLayout":
                        case "CardModelExplorerLayout":
                            o.full_slides?.forEach((e, t) => {
                                const n = i({ components: e.components, slideIndex: t });
                                a.push(n);
                            }),
                                (n.ucLayout = { data: { slides: a }, type: "swipeable" });
                            break;
                        case "CardVerticalStackLayout":
                            {
                                const t = o.components.find((e) => "CardMediaWithDetailsHorizontal" === e.__typename);
                                if ("CardMediaWithDetailsHorizontal" === t?.__typename)
                                    return (({ cardId: e, cardType: t, component: n }) => {
                                        const i = S(0, 0, 0),
                                            a = n.destination_obj ? M(n.destination_obj) : void 0;
                                        a && (a.data.scribe_element = "uc_media_with_details_horizontal");
                                        const o = { [i]: a },
                                            r = { type: T.Qe.MEDIA, data: { aspect_ratio: 1, destination: i, id: n.media.media_id } },
                                            s = n.topic_detail?.subtitle,
                                            d = n.topic_detail?.title,
                                            l = { type: T.Qe.TOPIC_DETAILS, data: { destination: i, ...(s?.content ? { description: { ...s } } : null), title: { content: d?.content || "", is_rtl: d?.is_rtl || !1 } } },
                                            { mediaEntity: c, staticMediaEntity: _ } = k({ component: n });
                                        return { cardState: T.uW.DEFAULT, layout: { [T.uW.DEFAULT]: { size: "small" }, [T.uW.CONDENSED]: { size: "small" }, [T.uW.STATIC]: { size: "small" } }, card: { card_name: t || "", on_visibility: { scribe: "show" }, id: e, components: { [T.uW.DEFAULT]: [T.Fw.MEDIA, T.Fw.TOPIC_DETAILS] }, destinations: o, media_entities: { [c.key]: c.entity, [_.key]: _.entity }, components_data: { [T.Fw.MEDIA]: r, [T.Fw.TOPIC_DETAILS]: l }, ucLayout: void 0 } };
                                    })({ component: t, cardId: e.card_uri || "", cardType: e.card_type });
                                i({ components: o.components, slideIndex: 0 });
                            }
                            break;
                        case "CardCollectionLayout":
                            if (o.full_slides && t?.()) {
                                const [e] = o.full_slides;
                                i({ components: e.components, slideIndex: 0 });
                                break;
                            }
                            o.full_slides?.forEach((e, t) => {
                                const n = i({ components: e.components, slideIndex: t });
                                a.push(n);
                            }),
                                (n.ucLayout = { data: { slides: a }, type: "collection" });
                    }
                    return { cardState: T.uW.DEFAULT, layout: { [T.uW.DEFAULT]: { size: "large" }, [T.uW.CONDENSED]: { size: "large" }, [T.uW.STATIC]: { size: "large" } }, card: { card_name: e.card_type || "", displayOptions: { shouldAutoAdvance: W(e) }, on_visibility: { scribe: "show" }, id: e.card_uri || "", components: { [T.uW.DEFAULT]: n.componentKeys, [T.uW.STATIC]: n.staticComponentKeys }, destinations: n.destinationObjects, media_entities: n.mediaEntities, components_data: n.componentsData, ucLayout: n.ucLayout } };
                };
            var H = n(94909);
            const Z = Object.freeze({
                    [T.sj.AMPLIFY]: { conversionHandler: a.R, shouldRenderCard: a.r },
                    [T.sj.APP]: { conversionHandler: o.F, shouldRenderCard: o.V },
                    [T.sj.AUDIOSPACE]: { conversionHandler: r.x, shouldRenderCard: r.W },
                    [T.sj.BROADCAST]: { conversionHandler: s.K, shouldRenderCard: s.Q },
                    [T.sj.DIRECT_STORE_LINK_APP]: { conversionHandler: d.T, shouldRenderCard: d.B },
                    [T.sj.IMAGE_DIRECT_MESSAGE]: { conversionHandler: l.a, shouldRenderCard: l.R },
                    [T.sj.LIVE_EVENT]: { conversionHandler: c.q, shouldRenderCard: c.C },
                    [T.sj.MESSAGE_ME]: { conversionHandler: _.I, shouldRenderCard: _.i },
                    [T.sj.MOMENT]: { conversionHandler: p.l, shouldRenderCard: p.Z },
                    [T.sj.NEWSLETTER_ISSUE]: { conversionHandler: null, shouldRenderCard: () => !1 },
                    [T.sj.NEWSLETTER_PUBLICATION]: { conversionHandler: null, shouldRenderCard: () => !1 },
                    [T.sj.NOTE]: { conversionHandler: m.R, shouldRenderCard: m.q },
                    [T.sj.PERISCOPE_BROADCAST]: { conversionHandler: u.w, shouldRenderCard: u.y },
                    [T.sj.PLAYER]: { conversionHandler: y.L, shouldRenderCard: y.F },
                    [T.sj.POLL_2_CHOICE_TEXT]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.POLL_3_CHOICE_TEXT]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.POLL_4_CHOICE_TEXT]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.POLL_2_CHOICE_IMAGE]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.POLL_3_CHOICE_IMAGE]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.POLL_4_CHOICE_IMAGE]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.POLL_2_CHOICE_VIDEO]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.POLL_3_CHOICE_VIDEO]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.POLL_4_CHOICE_VIDEO]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [T.sj.PROMO_IMAGE_CONVO]: { conversionHandler: I.g, shouldRenderCard: I.o },
                    [T.sj.PROMO_VIDEO_CONVO]: { conversionHandler: h.G, shouldRenderCard: h.T },
                    [T.sj.SUMMARY]: { conversionHandler: C.n, shouldRenderCard: C.K },
                    [T.sj.SUMMARY_LARGE_IMAGE]: { conversionHandler: g.N, shouldRenderCard: g.a },
                    [T.sj.UNIFIED_CARD]: { conversionHandler: b.O4, shouldRenderCard: b.AU },
                    [T.sj.VIDEO_DIRECT_MESSAGE]: {
                        conversionHandler: ({ cardId: e, cardType: t, converterOptions: n, data: i, users: a }) => {
                            const o = (0, H.FL)(i, "image_value", "player_image_original"),
                                r = (0, H.SI)(i, "string_value", "player_stream_url"),
                                s = parseInt((0, H.SI)(i, "string_value", "player_width"), 10) / parseInt((0, H.SI)(i, "string_value", "player_height"), 10),
                                d = (0, H.SI)(i, "string_value", "content_duration_seconds"),
                                l = (e) =>
                                    [1, 2, 3, 4]
                                        .map((t) => {
                                            const n = (0, H.SI)(i, "string_value", `cta${t}`),
                                                a = (0, H.SI)(i, "string_value", `cta${t}_wm_id`);
                                            return n && a ? { type: f.lW.DM, data: { icon: "dm", index: t, cta: n, wm_id: a, destination: e } } : null;
                                        })
                                        .filter(Boolean),
                                c = l(T.Fw.DESTINATION),
                                _ = l(T.Fw.DESTINATION_STATIC),
                                p = (0, H.N8)(i, "user_value", "recipient"),
                                m = p && a[p.id_str],
                                u = p.id_str !== n.tweetUserId && m;
                            return { cardState: T.uW.DEFAULT, layout: { [T.uW.DEFAULT]: { size: "large" }, [T.uW.CONDENSED]: { size: "large" }, [T.uW.STATIC]: { size: "large" } }, card: { card_name: t, on_visibility: { scribe: "show" }, id: e, components: { [T.uW.DEFAULT]: [T.Fw.MEDIA, ...(u ? [T.Fw.DETAILS] : []), T.Fw.BUTTON_GROUP], [T.uW.STATIC]: [T.Fw.MEDIA_STATIC, ...(u ? [T.Fw.DETAILS] : []), T.Fw.BUTTON_GROUP_STATIC] }, destinations: { [T.Fw.DESTINATION]: { type: T._g.ACTION, data: { action_data: { persist: !1, type: "dm", recipient: p.id_str }, auth_required: !0, scribe: "click", promoted_log: f.YE.DM_BUTTON_CLICK } }, [T.Fw.DESTINATION_STATIC]: { type: T._g.BROWSER, data: { url_data: { url: n.tweetPermalink || T.$H }, scribe: "open_link", promoted_log: f.YE.CARD_URL_CLICK } } }, media_entities: { [T.Fw.IMAGE_ENTITY]: (0, H.WW)(o || {}), [T.Fw.VIDEO_ENTITY]: { type: "video", aspect_ratio: s, content_id: (0, H.SI)(i, "string_value", "player_content_id") || (0, H.cT)(r), ...(d ? { duration_ms: 1e3 * parseInt(d, 10) } : null), vmap_url: r, poster_image: o, publisher_id: (0, H.SI)(i, "string_value", "player_owner_id") || n.tweetUserId, variants: [{ src: (0, H.SI)(i, "string_value", "player_hls_url"), type: "application/x-mpegURL" }] } }, components_data: { [T.Fw.MEDIA]: { type: T.Qe.MEDIA, data: { id: T.Fw.VIDEO_ENTITY } }, [T.Fw.MEDIA_STATIC]: { type: T.Qe.MEDIA, data: { id: T.Fw.IMAGE_ENTITY, destination: T.Fw.DESTINATION_STATIC } }, ...(u ? { [T.Fw.DETAILS]: { type: T.Qe.DETAILS, data: { attribution: m } } } : null), [T.Fw.BUTTON_GROUP]: { type: T.Qe.BUTTON_GROUP, data: { buttons: c } }, [T.Fw.BUTTON_GROUP_STATIC]: { type: T.Qe.BUTTON_GROUP, data: { buttons: _ } } } } };
                        },
                        shouldRenderCard: (e) => (0, H.BY)(e, (e) => e("recipient").and("cta1").and("cta1_wm_id").and("player_width").and("player_height").and("player_stream_url")),
                    },
                }),
                z = (e, t) => {
                    if (!e.binding_values) return K({ card: e, shouldConvertCollectionToImageWebsiteCard: t.shouldConvertCollectionToImageWebsiteCard });
                    const { binding_values: n, name: a, url: o, users: r = {} } = e,
                        { conversionHandler: s, shouldRenderCard: d } = Z[a] || {};
                    if (s || d) return s && d(n, t) ? s({ cardId: o, cardType: a, data: n, converterOptions: t, users: r }) : void 0;
                    i.Z.report(new Error(`Trying to convert a card of unknown type: [${a}]`));
                },
                B = z;
        },
        801340: (e, t, n) => {
            n.d(t, { ZP: () => s, gc: () => o, oQ: () => a });
            var i = n(202784);
            const a = { initialPoll: !1, interval: 30 },
                o = () => a;
            class r extends i.Component {
                render() {
                    return null;
                }
                componentDidMount() {
                    this._startTimer();
                }
                componentWillUnmount() {
                    this._stopTimer();
                }
                _startTimer() {
                    const { fetchIntervalConfig: e, requestCardUpdate: t } = this.props,
                        { initialPoll: n, interval: i } = e;
                    n && t(), (this._timer = setInterval(t, 1e3 * i));
                }
                _stopTimer() {
                    clearInterval(this._timer);
                }
            }
            const s = r;
        },
        58399: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                a = n(890601),
                o = n(783427),
                r = n(717683),
                s = n(347101);
            const d = (e = {}) => {
                const t = i.useContext(r.Z),
                    { direction: n } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            d.metadata = { width: 24, height: 24 };
            const l = d;
        },
        246492: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var i = n(202784),
                a = n(890601),
                o = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        264171: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var i = n(202784),
                a = n(890601),
                o = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var i = n(202784),
                a = n(890601),
                o = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        262009: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var i = n(202784),
                a = n(890601),
                o = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        465233: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(716406);
            function a(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(a) : (0, i.Z)(e, (e) => a(e));
            }
        },
        500914: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(136728);
            var i = n(832142);
            function a(e, t) {
                const n = [],
                    a = (0, i.Z)(e, t);
                for (let e = 0; e < a.length; e++) n.push(a[e].url);
                return n;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5.69a21a7a.js.map
