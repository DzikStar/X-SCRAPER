"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(202784),
                a = n(466999),
                o = n(325686),
                s = n(392237),
                d = n(332920);
            const r = n.n(d)().e5b0063d;
            let l = 0;
            class _ extends i.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${l}`), (l += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = r({ title: t });
                    return i.createElement(o.Z, { "aria-labelledby": this._listDomId, role: "region" }, i.createElement(a.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, t), i.createElement(o.Z, { "aria-label": n }, e));
                }
            }
            const c = _;
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => r });
            var i = n(202784),
                a = n(325686),
                o = n(392237);
            class s extends i.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return i.createElement(a.Z, { style: d.root });
                }
            }
            const d = o.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                r = s;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => r });
            var i = n(807896),
                a = n(202784),
                o = n(229333),
                s = n(414939),
                d = n(334346);
            const r = ({ accessibilityTitle: e, footer: t = a.createElement(s.Z, null), ...n }) => {
                const r = a.createElement(d.C, (0, i.Z)({}, n, { footer: t }));
                return e ? a.createElement(o.Z, { title: e }, r) : r;
            };
        },
        301758: (e, t, n) => {
            n.d(t, { Z: () => I });
            var i = n(807896),
                a = n(202784),
                o = n(235902),
                s = n(521288),
                d = n(401388),
                r = n(988566),
                l = n(725516),
                _ = n(443781),
                c = n(71620),
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
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: m.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: n, hydratedTweet: c, onAvatarClick: p, onMediaClick: m, onPress: u, onScreenNameClick: y, tweetId: E, withBirdwatchPivot: I = !0, ...C }) => {
                    const { featureSwitches: h, viewerUserId: T } = a.useContext(_.rC),
                        b = (0, l.z)(),
                        g = c?.community_id_str;
                    a.useEffect(() => {
                        g && (0, d.Z)(e) && n(g).catch(t());
                    }, [e, g, t, n]);
                    const A = a.useCallback(
                            (e) => {
                                b.scribeAction("click"), u && u(e);
                            },
                            [u, b],
                        ),
                        f = !!I,
                        v = c && (0, r.D$)(c, T, e),
                        D = v && (0, r.rl)(v);
                    return a.createElement(o.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => h.isTrue("responsive_web_edit_tweet_enabled") || h.isTrue("subscriptions_feature_labs_1004") } }, a.createElement(s.Z, (0, i.Z)({}, C, { loggedInUserId: T, onAvatarClick: p, onMediaClick: m, onPress: A, onScreenNameClick: y, shouldShowAltLabelAlways: !0, socialContextProps: D, tweet: c, withBirdwatchPivot: f })));
                });
        },
        734408: (e, t, n) => {
            n.d(t, { AU: () => f, O4: () => S, Vb: () => v });
            n(136728);
            var i = n(332920),
                a = n.n(i),
                o = n(817480),
                s = n(323265),
                d = n(538619),
                r = n(542908),
                l = n(85375),
                _ = n(94909);
            const c = { media: !0, details: !0, button_group: !0, app_store_details: !0, swipeable_media: !0, twitter_list_details: !0, community_details: !0, job_details: !0, dpa_details: !0, grok_share: !0, media_with_details_horizontal: !0 },
                p = (e) => {
                    const t = (t) => t.map((t) => e.find(({ type: e }) => e === t)).find(Boolean),
                        n = "android" === d.v.getMobileOS() ? t(["android_app", "iphone_app", "ipad_app"]) : t(["iphone_app", "ipad_app", "android_app"]);
                    if (!n) return;
                    n.category || (n.category = { is_rtl: !1, content: "android_app" === n.type ? "Play Store" : "App Store" });
                    const i = "android_app" === n.type ? `http://play.google.com/store/apps/details?id=${n.id}` : ((e) => `https://itunes.apple.com/app/id${e}`)(n.id);
                    return (n.url = s.ZP.isMobileOS() ? { pathname: i, external: !0, openInSameFrame: !0 } : i), n;
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
                    const { destination: t, employment_type: n, formatted_salary: i, formatted_salary_max: a, formatted_salary_min: o, location: s, profile_user: d, salary_interval: r, salary_max: _, salary_min: c, short_description: p, title: m } = e.data;
                    return { type: l.Qe.JOB_DETAILS, data: { destination: t, employment_type: n, formatted_salary: i, formatted_salary_min: o, formatted_salary_max: a, location: s, profile_user: d, salary_interval: r, salary_max: _, salary_min: c, short_description: p, title: m } };
                },
                C = (e, t) => {
                    let n = !1,
                        i = !1;
                    for (let a = 0; a < e.length; a++) {
                        const o = t[e[a]];
                        if (!o) continue;
                        const s = o.type;
                        if (((i = i || "photo" === s), (n = n || "video" === s), i && n)) break;
                    }
                    return { hasVideo: n, hasImage: i };
                },
                h = (e) => {
                    const { component_objects: t, display_options: n, media_entities: i } = e,
                        { should_auto_advance: a } = n || {};
                    if (void 0 !== a) return a;
                    const o = Object.keys(t);
                    let s = !1,
                        d = !1;
                    for (let e = 0; e < o.length; e++) {
                        const n = t[o[e]],
                            a = "swipeable_media" === n.type ? n.data.media_list.map((e) => e.id) : "media" === n.type ? [n.data.id] : [],
                            r = C(a, i);
                        if (((s = s || r.hasVideo), (d = d || r.hasImage), d && s)) break;
                    }
                    return s && !d;
                },
                T = (e, t) => {
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
                                a = "custom" === e.type ? (0, _.JP)(e.style) : "cta_dpa" === e.type ? "primaryFilled" : void 0;
                            return { type: r.lW.GENERIC, data: { index: n + 1, icon: e.icon_type, destination: e.destination, cta: "cta" === e.type || "cta_dpa" === e.type ? d.v.getCtaString(e.action) : e.text.content, is_rtl: "custom" === e.type ? e.text.is_rtl : void 0, isAppDetails: i.type === l._g.APP_STORE || i.type === l._g.APP_STORE_WITH_DOCKED_MEDIA, styleType: a } };
                        }),
                    },
                });
            function g(e, t, n, i, a, o, s) {
                const {
                        destination: d,
                        media_id: r,
                        topic_detail: { subtitle: _, title: c },
                    } = e.data,
                    p = Object.keys(t).reduce((e, n) => ((e[n] = { ...t[n], data: { ...t[n].data, scribe_element: "uc_media_with_details_horizontal" } }), e), {});
                return { cardState: l.uW.DEFAULT, layout: { [l.uW.DEFAULT]: { size: "small" }, [l.uW.CONDENSED]: { size: "small" }, [l.uW.STATIC]: { size: "small" } }, card: { card_name: n, on_visibility: { scribe: "show" }, id: i, components: { [l.uW.DEFAULT]: [l.Fw.MEDIA, l.Fw.TOPIC_DETAILS] }, destinations: p, media_entities: { ...o }, components_data: { [l.Fw.MEDIA]: { type: l.Qe.MEDIA, data: { id: r, aspect_ratio: 1, destination: d } }, [l.Fw.TOPIC_DETAILS]: { type: l.Qe.TOPIC_DETAILS, data: { destination: d, ...(_ && _.content ? { description: { ..._ } } : null), title: c } } }, ucLayout: s } };
            }
            const A = (e) => {
                    if ("string" == typeof e.unified_card?.string_value)
                        try {
                            return JSON.parse(e.unified_card.string_value);
                        } catch (e) {}
                    return null;
                },
                f = (e) => {
                    const t = A(e);
                    if (!t?.component_objects) return !1;
                    let n = t.components;
                    return t.layout?.data?.slides && (n = (0, o.Z)(t.layout.data.slides)), !!(n && n.length > 0 && n.every((e) => t.component_objects[e] && t.component_objects[e].type in c));
                },
                v = (e) => `${e}_static`;
            function D(e, t) {
                if (!e) return;
                return (e / 1e6).toLocaleString(a().language, { style: "currency", currency: t });
            }
            function O(e, t) {
                const n = e?.experiment_signals?.dpa_product_metadata;
                if (!n) return;
                (e.layout?.data?.slides ? (0, o.Z)(e.layout.data.slides).filter((t) => "details" === e.component_objects[t].type) : []).forEach((i, a) => {
                    const o = e.component_objects[i],
                        s = n[a];
                    if ("details" === o.type) {
                        e.component_objects[i] = (function (e, t, n) {
                            const i = { ...e, type: "dpa_details", data: { destination: e.data.destination, title: e.data.title, subtitle: e.data.subtitle, price: "" } };
                            return n.metadataEnabled?.() && ((i.data.price = D(t.regular_price_micros, t.currency_code) || ""), (i.data.sale_price = D(t.sale_price_micros, t.currency_code) || void 0)), i;
                        })(o, s, t);
                        const n = e.destination_objects[o.data.destination];
                        if ((n && n.data?.url_data && (n.data.url_data.vanity = o.data?.subtitle?.content), e.layout?.data?.slides && t.ctaEnabled?.())) {
                            const t = `button_group_${a + 1}`;
                            e.layout.data.slides[a].push(t), (e.component_objects[t] = { type: "button_group", data: { buttons: [{ type: "cta_dpa", action: "shopNow", destination: o.data.destination }] } });
                        }
                    }
                });
            }
            const S = ({ cardId: e, cardType: t, converterOptions: n, data: i }) => {
                const a = A(i);
                if (!a) return { cardState: l.uW.DEFAULT, layout: { [l.uW.DEFAULT]: { size: "large" }, [l.uW.CONDENSED]: { size: "small" }, [l.uW.STATIC]: { size: "large" } }, card: { id: e, card_name: t, components: { [l.uW.DEFAULT]: [], [l.uW.STATIC]: [] }, components_data: {}, destinations: {}, media_entities: {}, on_visibility: { scribe: "show" }, ucLayout: void 0, experiment_signals: {} } };
                const s =
                    ((_ = a),
                    (c = n.shouldConvertCollectionToImageWebsiteCard),
                    "collection" === _.layout?.type && void 0 !== c && c()
                        ? (function (e) {
                              const t = e.layout?.data.slides.length ? e.layout?.data.slides[0] : [];
                              return { ...e, layout: void 0, components: t };
                          })(a)
                        : a);
                var _, c;
                if (s.experiment_signals?.dpa_product_metadata) {
                    const e = { metadataEnabled: () => !1, ctaEnabled: () => !1 };
                    O(s, n.dpaConversionOptions || e);
                }
                const { app_store_data: C, component_objects: f, components: D, destination_objects: S, experiment_signals: w, layout: L, media_entities: x, users: P } = s,
                    R =
                        ((N = S),
                        (j = C),
                        Object.keys(N).reduce((e, t) => {
                            const n = N[t];
                            if ("app_store_with_docked_media" === n.type || "app_store" === n.type) {
                                const i = p(j[n.data.app_id]);
                                e[t] = { type: "browser", data: { url_data: { url: i ? i.url : l.$H }, scribe: "unified_card_app_store_open_link", promoted_log: r.YE.UNIFIED_CARD_COMPONENT_APP_STORE_CLICK } };
                            } else e[t] = { ...n, data: { ...n.data, url_data: { vanity: d.v.getDefaultVanityUrl(), ...n.data.url_data }, scribe: "open_link", promoted_log: r.YE.UNIFIED_CARD_COMPONENT_URL_CLICK } };
                            return e;
                        }, {}));
                var N, j;
                const { mediaEntities: M, photoEntitiesFromVideo: F } = ((e) => {
                        const t = {},
                            n = {};
                        for (const i in e) {
                            const a = e[i];
                            if (((t[i] = a), (n[v(i)] = { media_url_https: a.media_url_https, type: "photo", original_info: a.original_info }), "photo" === a.type || "model3d" === a.type)) {
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
                    U = L?.data?.slides ? (0, o.Z)(L.data.slides) : D,
                    W = {},
                    k = [],
                    K = [];
                let H, B;
                for (const n of U) {
                    const i = f[n];
                    if (i)
                        switch (i.type) {
                            case "media_with_details_horizontal":
                                return g(i, R, t, e, 0, M, L);
                            case "details":
                                W[n] = m(i);
                                break;
                            case "community_details":
                                W[n] = E(i, P);
                                break;
                            case "job_details":
                                W[n] = I(i);
                                break;
                            case "dpa_details":
                                W[n] = u(i);
                                break;
                            case "twitter_list_details":
                                W[n] = T(i, P);
                                break;
                            case "app_store_details":
                                W[n] = y(i, C);
                                break;
                            case "button_group":
                                W[n] = b(i, S);
                                break;
                            case "grok_share":
                                W[n] = ((z = i), { type: l.Qe.GROK_SHARE, data: z.data });
                                break;
                            case "swipeable_media":
                                (W[n] = i), (H = n), (B = i);
                                break;
                            case "media": {
                                W[n] = i;
                                const e = M[i.data.id],
                                    t = e && "uc_video" === e.type,
                                    a = v(n);
                                if ((t && (k.push(a), K.push(n)), t)) {
                                    const t = e ? e.original_info.width / e.original_info.height : null;
                                    W[a] = { type: l.Qe.MEDIA, data: { aspect_ratio: t || void 0, destination: i.data.destination || void 0, id: v(i.data.id), overlay: { type: l._5.PLAY } } };
                                }
                                break;
                            }
                            default:
                                continue;
                        }
                }
                var z;
                const Q = B?.data.media_list.some((e) => e.id && M[e.id] && ("uc_video" === M[e.id].type || "animated_gif" === M[e.id].type));
                Q && B && (W[l.Fw.SWIPEABLE_MEDIA_STATIC] = { type: l.Qe.SWIPEABLE_MEDIA, data: { media_list: B.data.media_list.map((e) => ({ destination: e.destination, id: v(e.id), overlay: { type: l._5.PLAY } })) } });
                const Z = [...(k.length ? k : []), ...(Q ? [l.Fw.SWIPEABLE_MEDIA_STATIC] : []), ...U.filter((e) => !(K.includes(e) || (Q && e === H)))];
                return { cardState: l.uW.DEFAULT, layout: { [l.uW.DEFAULT]: { size: "large" }, [l.uW.CONDENSED]: { size: "large" }, [l.uW.STATIC]: { size: "large" } }, card: { card_name: t, displayOptions: { shouldAutoAdvance: h(s) }, on_visibility: { scribe: "show" }, id: e, components: { [l.uW.DEFAULT]: U, [l.uW.STATIC]: Z }, destinations: R, media_entities: { ...M, ...F }, components_data: W, ucLayout: L, experiment_signals: w } };
            };
        },
        759469: (e, t, n) => {
            n.d(t, { gb: () => z, ZP: () => Q });
            n(571372);
            var i = n(233184),
                a = n(366458),
                o = n(701805),
                s = n(675498),
                d = n(784444),
                r = n(480878),
                l = n(610488),
                _ = n(429555),
                c = n(499078),
                p = n(168224),
                m = n(507334),
                u = n(174568),
                y = n(931386),
                E = n(174250),
                I = n(687415),
                C = n(649964),
                h = n(163336),
                T = n(824562),
                b = n(734408),
                g = (n(136728), n(85375)),
                A = n(323265),
                f = n(538619),
                v = n(542908);
            const D = "AndroidApp",
                O = "IphoneApp",
                S = "IpadApp",
                w = (e, t, n) => `destination_key_${e}_${t}_${n}`,
                L = (e, t, n) => `${e}_${t}_${n}`,
                x = (e) => `${e}_static`,
                P = (e) => {
                    const t = (t) => t.map((t) => e.find(({ type: e }) => e === t)).find(Boolean);
                    return "android" === f.v.getMobileOS() ? t([D, O, S]) : t([O, S, D]);
                },
                R = (e) => {
                    const t = P(e);
                    if (!t) return;
                    const n = "AndroidApp" === t.type ? `http://play.google.com/store/apps/details?id=${t.id}` : ((e) => `https://itunes.apple.com/app/id${e}`)(t.id);
                    return A.ZP.isMobileOS() ? { pathname: n, external: !0, openInSameFrame: !0 } : n;
                },
                N = (e) => ({ url_data: { url: e.url_data.full_url, vanity: e.url_data.vanity_url || f.v.getDefaultVanityUrl() }, scribe: v.bQ.OPEN_LINK, promoted_log: v.YE.UNIFIED_CARD_COMPONENT_URL_CLICK }),
                j = (e) => {
                    switch (e.__typename) {
                        case "CardAppStoreDestination":
                        case "CardAppStoreWithDockedMediaDestination":
                            return { type: "browser", data: { url_data: { url: R(e.app_store_data) || g.$H }, scribe: v.bQ.UC_APP_STORE_OPEN_LINK, promoted_log: v.YE.UNIFIED_CARD_COMPONENT_APP_STORE_CLICK } };
                        case "CardBrowserDestination":
                            return { type: "browser", data: { ...N(e) } };
                        case "CardBrowserWithDockedMediaDestination":
                            return { type: "browser_with_docked_media", data: { media_id: e.media.media_id, ...N(e) } };
                        case "CardProfileDestination":
                            return { type: "profile", data: { user_id: e.user_id, scribe: v.bQ.PROFILE_CLICK, promoted_log: v.YE.SCREEN_NAME_CLICK } };
                    }
                };
            function M(e) {
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
                U = ({ component: e }) => {
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
                        let s;
                        (s = "ApiVideo" === o?.__typename ? { type: "uc_video", id: Number.isNaN(n) ? 0 : n, id_str: e.media.media_id || "", ext_media_color: { palette: t?.color_info ? t.color_info.palette : [] }, media_url: t?.original_img_url || "", media_url_https: t?.original_img_url || "", url: t?.original_img_url || "", display_url: t?.original_img_url || "", expanded_url: t?.original_img_url || "", original_info: { width: t?.original_img_width || 0, height: t?.original_img_height || 0 }, sizes: { original: { h: t?.original_img_height || 0, resize: "fit", w: t?.original_img_width || 0 } }, video_info: { aspect_ratio: [o.aspect_ratio.numerator, o.aspect_ratio.denominator], duration_millis: o.duration_millis, variants: o.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } } : { type: "animated_gif", id: Number.isNaN(n) ? 0 : n, id_str: e.media.media_id || "", ext_media_color: { palette: t?.color_info ? t.color_info.palette : [] }, media_url: t?.original_img_url || "", media_url_https: t?.original_img_url || "", url: t?.original_img_url || "", display_url: t?.original_img_url || "", expanded_url: t?.original_img_url || "", original_info: { width: t?.original_img_width || 0, height: t?.original_img_height || 0 }, sizes: { original: { h: t?.original_img_height || 0, resize: "fit", w: t?.original_img_width || 0 } }, video_info: { aspect_ratio: [o.aspect_ratio.numerator, o.aspect_ratio.denominator], variants: o.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } }), (i = s), (a = { media_url_https: i.media_url_https, type: "photo", original_info: i.original_info });
                    }
                    return { mediaEntity: { key: t, entity: i }, staticMediaEntity: { key: n, entity: a } };
                },
                W = ({ component: e, componentDataIndex: t, componentIndex: n, slideIndex: i }) => {
                    const a = {},
                        o = w(i, n, t || 0),
                        s = e.destination_obj ? j(e.destination_obj) : {};
                    a[o] = s;
                    const d = L("media", i, n),
                        r = [d],
                        l = {},
                        _ = { type: g.Qe.MEDIA, data: { destination: o, id: e.media.media_id } };
                    l[d] = _;
                    const { mediaEntity: c, staticMediaEntity: p } = U({ component: e }),
                        m = [];
                    if ("uc_video" === c.entity?.type) {
                        const e = `${d}_static`,
                            t = c.entity ? c.entity.original_info.width / c.entity.original_info.height : null;
                        m.push(e), (l[e] = { type: g.Qe.MEDIA, data: { aspect_ratio: t || void 0, destination: o, id: e, overlay: { type: g._5.PLAY } } });
                    } else m.push(d);
                    return { componentKeys: r, staticComponentKeys: m, destinationObjects: a, mediaEntities: { [c.key]: c.entity, [p.key]: p.entity }, componentsData: l, destinationKey: o, mediaEntityKey: c.key };
                },
                k = (e) => {
                    const { display_options: t, layout: n } = e,
                        { should_auto_advance: i } = t || {};
                    if (void 0 !== i) return i;
                    if (!n) return !1;
                    const a = "CardVerticalStackLayout" === n.__typename ? n.components : n.full_slides ? n.full_slides.map((e) => e.components).flat() : [];
                    let o = !1,
                        s = !1;
                    for (let e = 0; e < a.length; e++) {
                        const t = a[e],
                            n = "CardSwipeableMediaComponent" === t.__typename ? t.full_media_list || [] : "CardMediaComponent" === t.__typename ? [t] : [];
                        for (let e = 0; e < n.length; e++) {
                            const t = n[e];
                            (o = o || "ApiVideo" === t.media.media_info?.__typename), (s = s || "ApiImage" === t.media.media_info?.__typename);
                        }
                        if (s && o) break;
                    }
                    return o && !s;
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
                                                a = { type: g.Qe.FOLLOW_BUTTON, data: { user_id: e.user.rest_id } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: {}, mediaEntities: {}, componentsData: { [i]: a } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardFacepileComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = {},
                                                a = w(n, t, 0),
                                                o = e.destination_obj ? j(e.destination_obj) : {};
                                            i[a] = o;
                                            const s = e.users_results ? e.users_results.map(F).filter(Boolean) : [],
                                                d = L("facepile", n, t),
                                                r = { type: g.Qe.FACEPILE, data: { facepileUsers: s.reduce((e, t) => ({ ...e, [t.id_str]: t }), {}), total_user_count: e.total_user_count, type: e.user_relationship_type, destination: a } };
                                            return { componentKeys: [d], staticComponentKeys: [d], destinationObjects: i, mediaEntities: {}, componentsData: { [d]: r } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardAppStoreDetailsComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("app_store_details", n, t),
                                                a = w(n, t, 0),
                                                o = e.destination_obj ? j(e.destination_obj) : {},
                                                s = { [a]: o },
                                                d = P(e.app_store_data) || {},
                                                r = d.title,
                                                l = d.category ? d.category.content : void 0,
                                                _ = { type: g.Qe.APP_STORE_DETAILS, data: { title: r, footer: l, destination: a } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: s, mediaEntities: {}, componentsData: { [i]: _ } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardButtonGroupComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = {},
                                                a = L("button_group", n, t),
                                                o = {
                                                    type: g.Qe.BUTTON_GROUP,
                                                    data: {
                                                        buttons: e.buttons.map((e, a) => {
                                                            const o = e.destination_obj?.__typename,
                                                                s = w(n, t, a),
                                                                d = e.destination_obj ? j(e.destination_obj) : {};
                                                            return (i[s] = d), { type: v.lW.GENERIC, data: { index: a + 1, icon: e.icon_type?.toLowerCase(), destination: s, cta: "Cta" === e.button_type ? f.v.getCtaString(e.action || "") : e.text ? e.text.content : "", is_rtl: "Custom" === e.button_type ? e.text?.is_rtl : void 0, isAppDetails: o === g.TW.APP_STORE || o === g.TW.APP_STORE_WITH_DOCKED_MEDIA, styleType: M(e.style) } };
                                                        }),
                                                    },
                                                };
                                            return { componentKeys: [a], staticComponentKeys: [a], destinationObjects: i, mediaEntities: {}, componentsData: { [a]: o } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardDetailsComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("details", n, t),
                                                a = w(n, t, 0),
                                                o = e.destination_obj ? j(e.destination_obj) : {},
                                                s = { [a]: o },
                                                d = { type: g.Qe.DETAILS, data: { title: e.title, destination: a } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: s, mediaEntities: {}, componentsData: { [i]: d } };
                                        })({ component: e, componentIndex: i, slideIndex: t });
                                        break;
                                    case "CardMediaComponent":
                                        a = (({ component: e, componentDataIndex: t, componentIndex: n, slideIndex: i }) => {
                                            const { componentKeys: a, componentsData: o, destinationObjects: s, mediaEntities: d, staticComponentKeys: r } = W({ component: e, componentIndex: n, slideIndex: i, componentDataIndex: t });
                                            return { componentKeys: a, staticComponentKeys: r, destinationObjects: s, mediaEntities: d, componentsData: o };
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
                                                s = {};
                                            const d = [];
                                            e.full_media_list &&
                                                e.full_media_list.forEach((e, i) => {
                                                    const r = W({ component: e, slideIndex: n, componentIndex: t, componentDataIndex: i }),
                                                        l = { destination: r.destinationKey, id: r.mediaEntityKey };
                                                    if ((a.push(l), (o = { ...o, ...r.destinationObjects }), (s = { ...s, ...r.mediaEntities }), "ApiVideo" === e.media.media_info?.__typename)) {
                                                        const e = { destination: r.destinationKey, id: x(r.mediaEntityKey), overlay: { type: g._5.PLAY } };
                                                        d.push(e);
                                                    }
                                                    if ("ApiGif" === e.media.media_info?.__typename) {
                                                        const e = { destination: r.destinationKey, id: x(r.mediaEntityKey) };
                                                        d.push(e);
                                                    }
                                                });
                                            const r = { type: g.Qe.SWIPEABLE_MEDIA, data: { media_list: a } },
                                                l = { [i]: r };
                                            return d.length && (l[g.Fw.SWIPEABLE_MEDIA_STATIC] = { type: g.Qe.SWIPEABLE_MEDIA, data: { media_list: d } }), { componentKeys: [i], staticComponentKeys: d.length ? [g.Fw.SWIPEABLE_MEDIA_STATIC] : [i], destinationObjects: o, mediaEntities: s, componentsData: l };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "CardTwitterListDetailsComponent":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("twitter_list_details", n, t),
                                                a = w(n, t, 0),
                                                o = e.destination_obj ? j(e.destination_obj) : {},
                                                s = { [a]: o };
                                            let d = {};
                                            const r = e.user_results?.result;
                                            r && r.core && (d = { id_str: r.id, profile_image_url_https: r.avatar?.image_url || "", protected: !!r.privacy?.protected, verified: !!r.verification?.verified, is_blue_verified: !!r.is_blue_verified, name: r.core.name || "", screen_name: r.core.screen_name || "" });
                                            const l = { type: g.Qe.TWITTER_LIST_DETAILS, data: { title: e.name, destination: a, memberCount: e.member_count, attribution: d } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: s, mediaEntities: {}, componentsData: { [i]: l } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "DeveloperBuiltCardRootContainer":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("developer_built_card", n, t),
                                                a = { type: g.Qe.DEVELOPER_BUILT_CARD, data: { config: e } };
                                            return { componentKeys: [i], staticComponentKeys: [i], destinationObjects: {}, mediaEntities: {}, componentsData: { [i]: a } };
                                        })({ component: e, slideIndex: t, componentIndex: i });
                                        break;
                                    case "DeveloperBuiltCardContainer":
                                        a = (({ component: e, componentIndex: t, slideIndex: n }) => {
                                            const i = L("developer_built_card_deprecated", n, t),
                                                a = { type: g.Qe.DEVELOPER_BUILT_CARD_DEPRECATED, data: { config: e } };
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
                                        const i = w(0, 0, 0),
                                            a = n.destination_obj ? j(n.destination_obj) : void 0;
                                        a && (a.data.scribe_element = "uc_media_with_details_horizontal");
                                        const o = { [i]: a },
                                            s = { type: g.Qe.MEDIA, data: { aspect_ratio: 1, destination: i, id: n.media.media_id } },
                                            d = n.topic_detail?.subtitle,
                                            r = n.topic_detail?.title,
                                            l = { type: g.Qe.TOPIC_DETAILS, data: { destination: i, ...(d?.content ? { description: { ...d } } : null), title: { content: r?.content || "", is_rtl: r?.is_rtl || !1 } } },
                                            { mediaEntity: _, staticMediaEntity: c } = U({ component: n });
                                        return { cardState: g.uW.DEFAULT, layout: { [g.uW.DEFAULT]: { size: "small" }, [g.uW.CONDENSED]: { size: "small" }, [g.uW.STATIC]: { size: "small" } }, card: { card_name: t || "", on_visibility: { scribe: "show" }, id: e, components: { [g.uW.DEFAULT]: [g.Fw.MEDIA, g.Fw.TOPIC_DETAILS] }, destinations: o, media_entities: { [_.key]: _.entity, [c.key]: c.entity }, components_data: { [g.Fw.MEDIA]: s, [g.Fw.TOPIC_DETAILS]: l }, ucLayout: void 0 } };
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
                    return { cardState: g.uW.DEFAULT, layout: { [g.uW.DEFAULT]: { size: "large" }, [g.uW.CONDENSED]: { size: "large" }, [g.uW.STATIC]: { size: "large" } }, card: { card_name: e.card_type || "", displayOptions: { shouldAutoAdvance: k(e) }, on_visibility: { scribe: "show" }, id: e.card_uri || "", components: { [g.uW.DEFAULT]: n.componentKeys, [g.uW.STATIC]: n.staticComponentKeys }, destinations: n.destinationObjects, media_entities: n.mediaEntities, components_data: n.componentsData, ucLayout: n.ucLayout } };
                };
            var H = n(94909);
            const B = Object.freeze({
                    [g.sj.AMPLIFY]: { conversionHandler: a.R, shouldRenderCard: a.r },
                    [g.sj.APP]: { conversionHandler: o.F, shouldRenderCard: o.V },
                    [g.sj.AUDIOSPACE]: { conversionHandler: s.x, shouldRenderCard: s.W },
                    [g.sj.BROADCAST]: { conversionHandler: d.K, shouldRenderCard: d.Q },
                    [g.sj.DIRECT_STORE_LINK_APP]: { conversionHandler: r.T, shouldRenderCard: r.B },
                    [g.sj.IMAGE_DIRECT_MESSAGE]: { conversionHandler: l.a, shouldRenderCard: l.R },
                    [g.sj.LIVE_EVENT]: { conversionHandler: _.q, shouldRenderCard: _.C },
                    [g.sj.MESSAGE_ME]: { conversionHandler: c.I, shouldRenderCard: c.i },
                    [g.sj.MOMENT]: { conversionHandler: p.l, shouldRenderCard: p.Z },
                    [g.sj.NEWSLETTER_ISSUE]: { conversionHandler: null, shouldRenderCard: () => !1 },
                    [g.sj.NEWSLETTER_PUBLICATION]: { conversionHandler: null, shouldRenderCard: () => !1 },
                    [g.sj.NOTE]: { conversionHandler: m.R, shouldRenderCard: m.q },
                    [g.sj.PERISCOPE_BROADCAST]: { conversionHandler: u.w, shouldRenderCard: u.y },
                    [g.sj.PLAYER]: { conversionHandler: y.L, shouldRenderCard: y.F },
                    [g.sj.POLL_2_CHOICE_TEXT]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.POLL_3_CHOICE_TEXT]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.POLL_4_CHOICE_TEXT]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.POLL_2_CHOICE_IMAGE]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.POLL_3_CHOICE_IMAGE]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.POLL_4_CHOICE_IMAGE]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.POLL_2_CHOICE_VIDEO]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.POLL_3_CHOICE_VIDEO]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.POLL_4_CHOICE_VIDEO]: { conversionHandler: E.J, shouldRenderCard: E.l },
                    [g.sj.PROMO_IMAGE_CONVO]: { conversionHandler: I.g, shouldRenderCard: I.o },
                    [g.sj.PROMO_VIDEO_CONVO]: { conversionHandler: C.G, shouldRenderCard: C.T },
                    [g.sj.SUMMARY]: { conversionHandler: h.n, shouldRenderCard: h.K },
                    [g.sj.SUMMARY_LARGE_IMAGE]: { conversionHandler: T.N, shouldRenderCard: T.a },
                    [g.sj.UNIFIED_CARD]: { conversionHandler: b.O4, shouldRenderCard: b.AU },
                    [g.sj.VIDEO_DIRECT_MESSAGE]: {
                        conversionHandler: ({ cardId: e, cardType: t, converterOptions: n, data: i, users: a }) => {
                            const o = (0, H.FL)(i, "image_value", "player_image_original"),
                                s = (0, H.SI)(i, "string_value", "player_stream_url"),
                                d = parseInt((0, H.SI)(i, "string_value", "player_width"), 10) / parseInt((0, H.SI)(i, "string_value", "player_height"), 10),
                                r = (0, H.SI)(i, "string_value", "content_duration_seconds"),
                                l = (e) =>
                                    [1, 2, 3, 4]
                                        .map((t) => {
                                            const n = (0, H.SI)(i, "string_value", `cta${t}`),
                                                a = (0, H.SI)(i, "string_value", `cta${t}_wm_id`);
                                            return n && a ? { type: v.lW.DM, data: { icon: "dm", index: t, cta: n, wm_id: a, destination: e } } : null;
                                        })
                                        .filter(Boolean),
                                _ = l(g.Fw.DESTINATION),
                                c = l(g.Fw.DESTINATION_STATIC),
                                p = (0, H.N8)(i, "user_value", "recipient"),
                                m = p && a[p.id_str],
                                u = p.id_str !== n.tweetUserId && m;
                            return { cardState: g.uW.DEFAULT, layout: { [g.uW.DEFAULT]: { size: "large" }, [g.uW.CONDENSED]: { size: "large" }, [g.uW.STATIC]: { size: "large" } }, card: { card_name: t, on_visibility: { scribe: "show" }, id: e, components: { [g.uW.DEFAULT]: [g.Fw.MEDIA, ...(u ? [g.Fw.DETAILS] : []), g.Fw.BUTTON_GROUP], [g.uW.STATIC]: [g.Fw.MEDIA_STATIC, ...(u ? [g.Fw.DETAILS] : []), g.Fw.BUTTON_GROUP_STATIC] }, destinations: { [g.Fw.DESTINATION]: { type: g._g.ACTION, data: { action_data: { persist: !1, type: "dm", recipient: p.id_str }, auth_required: !0, scribe: "click", promoted_log: v.YE.DM_BUTTON_CLICK } }, [g.Fw.DESTINATION_STATIC]: { type: g._g.BROWSER, data: { url_data: { url: n.tweetPermalink || g.$H }, scribe: "open_link", promoted_log: v.YE.CARD_URL_CLICK } } }, media_entities: { [g.Fw.IMAGE_ENTITY]: (0, H.WW)(o || {}), [g.Fw.VIDEO_ENTITY]: { type: "video", aspect_ratio: d, content_id: (0, H.SI)(i, "string_value", "player_content_id") || (0, H.cT)(s), ...(r ? { duration_ms: 1e3 * parseInt(r, 10) } : null), vmap_url: s, poster_image: o, publisher_id: (0, H.SI)(i, "string_value", "player_owner_id") || n.tweetUserId, variants: [{ src: (0, H.SI)(i, "string_value", "player_hls_url"), type: "application/x-mpegURL" }] } }, components_data: { [g.Fw.MEDIA]: { type: g.Qe.MEDIA, data: { id: g.Fw.VIDEO_ENTITY } }, [g.Fw.MEDIA_STATIC]: { type: g.Qe.MEDIA, data: { id: g.Fw.IMAGE_ENTITY, destination: g.Fw.DESTINATION_STATIC } }, ...(u ? { [g.Fw.DETAILS]: { type: g.Qe.DETAILS, data: { attribution: m } } } : null), [g.Fw.BUTTON_GROUP]: { type: g.Qe.BUTTON_GROUP, data: { buttons: _ } }, [g.Fw.BUTTON_GROUP_STATIC]: { type: g.Qe.BUTTON_GROUP, data: { buttons: c } } } } };
                        },
                        shouldRenderCard: (e) => (0, H.BY)(e, (e) => e("recipient").and("cta1").and("cta1_wm_id").and("player_width").and("player_height").and("player_stream_url")),
                    },
                }),
                z = (e, t) => {
                    if (!e.binding_values) return K({ card: e, shouldConvertCollectionToImageWebsiteCard: t.shouldConvertCollectionToImageWebsiteCard });
                    const { binding_values: n, name: a, url: o, users: s = {} } = e,
                        { conversionHandler: d, shouldRenderCard: r } = B[a] || {};
                    if (d || r) return d && r(n, t) ? d({ cardId: o, cardType: a, data: n, converterOptions: t, users: s }) : void 0;
                    i.Z.report(new Error(`Trying to convert a card of unknown type: [${a}]`));
                },
                Q = z;
        },
        801340: (e, t, n) => {
            n.d(t, { ZP: () => d, gc: () => o, oQ: () => a });
            var i = n(202784);
            const a = { initialPoll: !1, interval: 30 },
                o = () => a;
            class s extends i.Component {
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
            const d = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5.1d4de96a.js.map
