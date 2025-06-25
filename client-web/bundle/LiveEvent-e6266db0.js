"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-e6266db0"],
    {
        703738: (e, t, i) => {
            i.d(t, { z: () => n });
            var r = i(323265),
                s = i(655352),
                a = i(952793);
            const n = () => (0, a.hC)("rweb_sourcemap_migration") && (0, s.ZP)() && !r.ZP.isMobileOS();
        },
        702001: (e, t, i) => {
            i.d(t, { c: () => a });
            var r = i(516951),
                s = i(615656);
            const a = { [s.ZP.OtherUserSuspended]: { customAction: r.Z }, [s.ZP.StatusViewForbidden]: { customAction: r.Z } };
        },
        97882: (e, t, i) => {
            i.d(t, { T: () => a, x: () => n });
            var r = i(111677),
                s = i.n(r);
            const a = { AED: s().d857e44d, ALL: s().cb87e3db, ARS: s().a9d5ffd1, AUD: s().a0e8371d, BAM: s().gcc50dc9, BDT: s().a6a43585, BGN: s().a0cc8f2d, BHD: s().i31c32c5, BRL: s().i7dc69e9, BYR: s().c14a6c03, CAD: s().jaa3d537, CHF: s().a824080b, CLP: s().d9c0bedb, CNY: s().bf8c0613, COP: s().i8163625, CZK: s().adb53ba1, DKK: s().iabf697d, DZD: s().a1a0555b, EGP: s().f266f3d9, EUR: s().a9a8652b, GBP: s().dbf40761, GHS: s().b0d993d9, GTQ: s().ac1308e1, HKD: s().a7889ab3, HRK: s().c614f5cd, HUF: s().i55d57e3, IDR: s().e4b6002b, ILS: s().d28e983b, INR: s().e8c9232d, IQD: s().c8994ae1, ISK: s().f821c2a5, JPY: s().j348b9c9, KES: s().i6f93b9b, KRW: s().c6150bd5, KWD: s().i8921e09, KZT: s().ef239279, LBP: s().hecdb149, MAD: s().fdd039b7, MKD: s().f30c2c37, MXN: s().d9ea7bff, MYR: s().ea3df4b7, NGN: s().jaac21bb, NOK: s().hb435ced, NZD: s().ce699d81, PEN: s().bc56d3d7, PHP: s().f8561913, PKR: s().g6485d53, PLN: s().ff561cc1, QAR: s().b42011d3, RON: s().a6660bcd, RSD: s().f9b80449, RUB: s().gdee4d5d, SAR: s().h36f2103, SEK: s().a19ad037, SGD: s().g713f699, THB: s().ff2e39af, TND: s().be34316d, TRY: s().aef81b75, TWD: s().fcce70a5, TZS: s().jc9d352f, UAH: s().be1cb8c5, UGX: s().j9371501, USD: s().j7d4397d, VEF: s().d61441dd, VND: s().e2a99e97, ZAR: s().f7ce19ab, ZMW: s().b2a0213f },
                n = ({ amount: e, currencyCode: t = "USD", formatter: i = 1e6, removeTrailingZeros: r = !1, strictAmount: s = !1 }) => {
                    const n = s ? e : parseInt(e, 10) / i,
                        d = a[t]?.(n);
                    return r ? o(d) : d;
                },
                o = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        635322: (e, t, i) => {
            i.d(t, { J: () => p });
            var r = i(202784),
                s = i(244448),
                a = i(107267),
                n = i(682830),
                o = (i(631673), i(553160)),
                d = i(725102),
                c = i(634125),
                l = (i(571372), i(736230));
            const u = r.createContext({ setSystemActionHandler: () => {} }),
                m = ({ children: e, systemActionHandlers: t }) => {
                    const i = r.useRef(new Map());
                    r.useEffect(() => {
                        (t ? Array.from(t?.entries()) : []).forEach(([e, t]) => {
                            i.current.set(e, t);
                        });
                    }, [t]);
                    const s = r.useCallback((e, t) => {
                            i.current.set(e, t);
                        }, []),
                        a = r.useCallback((e) => {
                            const t = e,
                                { matchupId: r, pickedByGrok: s, teamName: a } = t,
                                n = i.current.get(1);
                            n && n?.(a, r, s);
                        }, []),
                        n = { setSystemActionHandler: s, [l.bP.MARCH_MADNESS_PICK]: a };
                    return r.createElement(u.Provider, { value: n }, e);
                };
            var _ = i(39182);
            const f = "/i/jf";
            function p({ path: e, systemActionHandlers: t }) {
                const i = (0, a.useLocation)();
                return "undefined" == typeof window ? null : r.createElement(m, { systemActionHandlers: t }, r.createElement(r.Suspense, { fallback: r.createElement(n.J, null) }, r.createElement(b, { isHighlights: !1, path: e ?? i.pathname.slice(f.length) + i.search, renderEmptyState: () => null })));
            }
            const b = ({ isHighlights: e, path: t, renderEmptyState: i }) => {
                const a = (0, _.E)(),
                    n = (0, s.bk)();
                r.useEffect(() => {
                    if (n && n.Runtime) {
                        const e = { "x.com.GenericURT": o.Z, SignupArkoseSecurityChallenge: d.Z };
                        n.Runtime.addComponentOverride(e);
                    }
                }, [n]);
                const { Analytics: l } = n;
                return r.createElement(c.Z, null, r.createElement(s.mQ, { analytics: l, jfPath: t, key: `${t}-${a}` }));
            };
        },
        39182: (e, t, i) => {
            i.d(t, { E: () => n });
            i(571372);
            var r = i(202784),
                s = i(251067),
                a = i(355335);
            const n = () => {
                const e = r.useRef(null),
                    [t, i] = r.useState(Date.now()),
                    { isDev: n } = (0, a.Z)();
                return (
                    r.useEffect(() => {
                        if (!n || (0, s.fH)(s.vw.prod)) return;
                        const t = () => {
                            (e.current = new WebSocket("wss://localhost.x.com:3000/__dev")),
                                (e.current.onmessage = (e) => {
                                    if ("string" == typeof e.data) {
                                        const e = Date.now();
                                        i(e);
                                    }
                                }),
                                (e.current.onerror = (e) => {
                                    throw new Error(e.type);
                                }),
                                (e.current.onclose = () => {
                                    setTimeout(t, 3e3);
                                });
                        };
                        return (
                            t(),
                            () => {
                                e.current && e.current.close();
                            }
                        );
                    }, [n]),
                    t
                );
            };
        },
        810430: (e, t, i) => {
            i.d(t, { AJ: () => y, AZ: () => _, BG: () => Y, Ju: () => m, Op: () => A, Q_: () => N, Qv: () => C, Tr: () => g, a9: () => O, aE: () => p, d5: () => w, fF: () => k, mZ: () => z, r5: () => F, tO: () => M, to: () => Z, vy: () => L, yC: () => B, yU: () => H, zd: () => f });
            i(543673), i(240753), i(128399);
            var r = i(688715),
                s = i(309854),
                a = i(284702),
                n = i(111677),
                o = i.n(n),
                d = i(282874),
                c = i(912021),
                l = i(337637),
                u = i(197914);
            const m = (e) => (0, r.ju)(`https://x.com/i/events/${e}`),
                _ = o().c39b0e24,
                f = o().ad16f482,
                p = "1",
                b = "RUNNING",
                h = { "600x1200": 4, "1024x2048": 3, "340x680": 2, "150x150": 1 },
                v = o().i0ed3f4e,
                g = Object.freeze({ LIVE_BROADCAST: "liveBroadcast", REPLAY_BROADCAST: "replayBroadcast", AUDIOSPACE: "audiospace", VOD: "vod", GIF: "gif", SLATE: "slate" }),
                y = Object.freeze({ New: "New" }),
                w = (e, t, i) => {
                    if (i && i.url) return ((e) => -1 !== e.url.indexOf("pscp.tv"))(i) ? [...(e ? [{ width: 128, height: 128, uri: e }] : []), ...(t ? [{ width: 360, height: 360, uri: t }] : []), { width: i.width, height: i.height, uri: i.url }] : void 0;
                },
                E = (0, c.Z)((e, t) => e.slates && t && e.slates[t]),
                I = (e, t) => {
                    const i = (e.slate || e.fallback_slate || {}).id,
                        r = ((e, t) => {
                            const i = E(e, t),
                                r = (i && i.variants) || [];
                            return (0, d.Z)(r, (e) => {
                                const { name: t } = e;
                                return h[t] || 0;
                            });
                        })(t, i),
                        a = ((e, t, i) => {
                            const r = E(e, t);
                            let a;
                            if (i && r) {
                                const { focus_rects: i = [], tweet_id: n } = r;
                                if (((a = i.length ? i : void 0), !a && n)) {
                                    const i = e?.tweets && e?.tweets[n],
                                        r = (i?.extended_entities?.media || []).find((e) => e.media_key === t);
                                    a = r && s.Z.getCropCandidates(r);
                                }
                            }
                            return a;
                        })(t, i, r),
                        n = ((e, t, i) => (e ? t.slates[i].label : void 0))(r, t, i),
                        { attribution: o, tweet_id: c } = E(t, i) || {},
                        l =
                            ((e, t) => {
                                if (t.broadcast && t.broadcast.id) {
                                    const i = t.broadcast.id,
                                        r = S(e, i);
                                    return r && { small: r.image_url_small, medium: r.image_url_medium };
                                }
                            })(t, e) || {},
                        u = r && w(l.small, l.medium, r);
                    return i && r ? { id: i, image: r, imageAttribution: o, periscopeVariants: u, cropCandidates: a, label: n, tweetId: c } : void 0;
                },
                A = (e, t) => {
                    const i = ((e) => {
                            const { attribution_user_id: t } = e.liveEventDetails;
                            return e.users && t ? e.users[t] : void 0;
                        })(t),
                        { category: r, description: s, description_entities: a, remind_me_subscription: n, short_title: o, time_string: d, title: c } = t.liveEventDetails;
                    return { author: i, category: r, description: s, descriptionEntities: a, eventId: e, remindMeSubscription: n, shortTitle: o || c, timeString: d, title: c };
                },
                S = (e, t) => (e.broadcasts && t ? e.broadcasts[t] : void 0),
                T = (e, t) => {
                    const { extended_entities: i = {} } = e,
                        { media: r = [] } = i;
                    return r.find((e) => e.media_key === t || "photo" !== e.type);
                },
                D = (e, t, i) => {
                    const { media: r = {} } = e,
                        { mediaEntity: s } = r;
                    return !s || (s.broadcast_id !== t && s.media_tweet_id !== i) ? void 0 : e.promotedContent;
                },
                R = (e, t, i, r, s) => {
                    const a = t && r ? T(t, r) : void 0,
                        n = S(i, e),
                        o = n ? e : void 0,
                        d = n?.media_key,
                        c = n?.status,
                        l = n?.twitter_user_id,
                        u = n?.user_display_name,
                        m = n?.username,
                        _ = n?.width,
                        f = n?.height,
                        p = n?.broadcast_source,
                        h = n?.camera_rotation,
                        v = n?.image_url,
                        g = n?.media_id,
                        y = ((e) => !!e && e.state === b)(n);
                    return { mediaId: g, coverTweet: t, coverMedia: a, broadcastId: o, broadcastMediaKey: d, broadcastTitle: c, broadcastTwitterId: l, broadcastDisplayName: u, broadcastUsername: m, broadcastWidth: _, broadcastHeight: f, broadcastThumbnail: v, broadcastSource: p, broadcastOrientation: h, isLive: y, promotedContent: s && D(s, o, r) };
                },
                C = (e, t) => (e && e.image ? { media_url_https: e.image.url, original_info: { focus_rects: e.cropCandidates, height: e.image.height, width: e.image.width }, ext_alt_text: t ? t.ext_alt_text : v, id_str: e.id, expanded_url: "", type: "photo" } : void 0),
                P = (e, t) => t !== Y.SHOP || e,
                O = (e, t, i, r) => {
                    const s = t.liveEventDetails.timelines || [],
                        a = s.length ? s[0].timeline_id : p,
                        n = s.length ? s[0].hashtag : void 0,
                        o = s.length ? s[0].compose_semantic_core_id : void 0;
                    let d,
                        c,
                        l = 0;
                    const u = i && s.some((e) => e.timeline_id === i),
                        m = P(r, i),
                        _ = s
                            .filter(({ timeline_id: e }) => P(r, e))
                            .map(({ compose_semantic_core_id: t, customization_info: r, hashtag: s, label_type: n, timeline_id: o, timeline_source_id: m, timeline_source_type: _, title: f }, p) => {
                                const b = o === a;
                                return ((u && o === i) || b) && ((l = p), (d = s), (c = t)), { isActive: () => (u ? o === i : b), to: { pathname: `/i/events/${e}`, query: { timeline: o } }, label: f, labelType: n && y[n], customizationInfo: r, hashtag: s, timelineId: o, timelineSourceId: m, timelineSourceType: _ };
                            }),
                        f = d || n;
                    return { composeDetails: { composeSemanticCoreId: c || o, ...(f ? { defaultText: ` ${f}`, positionCursorAtBeginning: !0 } : { defaultText: "" }) }, eventId: e, hashtag: f, timelineId: u && m && i ? i : a, timelineIndex: l, timelineLinks: _ };
                },
                Z = (e, t) => {
                    if (!e) return;
                    const i = t && x(e, t),
                        r = N(e);
                    return i || e[r];
                },
                N = (e) => {
                    const t = (0, l.Z)(e, (e) => e.selected);
                    return -1 === t ? 0 : t;
                },
                x = (e, t) => e && e.find((e) => e.id === t),
                H = (e) => {
                    const t = e?.response?.polling_interval_seconds;
                    return t && t > 0 ? t : 0;
                },
                k = (e) => {
                    const { score: t } = e?.response || {};
                    return t && t.data && t.data.moments ? t.data : void 0;
                },
                L = (e) => e?.response?.betting_odds,
                B = (e, t) => {
                    const { carousel: i } = e.response,
                        r = (i || []).filter((e) => e.moment).length > 0;
                    return (i || [])
                        .filter((e) => !e.moment)
                        .map((i) => {
                            let s;
                            const { entry_id: a } = i,
                                n = I(i, e),
                                o = n && n.id,
                                d = (i.tweet_media && i.tweet_media.id) || (n && n.tweetId),
                                c = d ? u.Z.selectHydratedTweet(e, d) : void 0,
                                l = R(a, c, e, o, t);
                            let m;
                            if (i.broadcast) {
                                const t = e.broadcasts ? e.broadcasts[i.broadcast.id] : void 0;
                                (m = (t && t.twitter_user_id && e.users && e.users[t.twitter_user_id]) || void 0), (s = t ? K(m, t) : void 0);
                            } else if (i.audiospace) {
                                const t = e.audiospaces ? e.audiospaces[i.audiospace.id] : void 0;
                                (m = (t && t.creator_twitter_user_id && e.users && e.users[t.creator_twitter_user_id]) || void 0), (s = t ? G(m, t) : void 0);
                            } else if ((i.slate && d) || i.tweet_media) {
                                const t = d && e.tweets ? e.tweets[d] : void 0;
                                (m = t && e.users ? e.users[t.user] : void 0), (s = m ? j(m, !!i.tweet_media, o, t, e) : void 0);
                            } else i.slate && n && (s = { type: g.SLATE });
                            return s || !n || i.tweet_media || (s = { type: g.SLATE }), !U(m) && s && n ? { id: a, carouselItemInfo: { ...s, socialProof: i.social_proof }, mediaDetails: l, slate: n, selected: !!i.selected, isMoment: r } : void 0;
                        })
                        .filter(Boolean);
                },
                U = (e) => (e && (e.blocking || e.blocked_by)) || !1,
                M = Object.freeze({ TWITTER: "twitter", PERISCOPE: "periscope" }),
                K = (e, t) => ({ verified: !!e && e.verified, screenName: e ? e.screen_name : void 0, name: e ? e.name : t.user_display_name, userId: e ? e.id_str : t.user_id, type: t.state === b ? g.LIVE_BROADCAST : g.REPLAY_BROADCAST, accountType: e ? M.TWITTER : M.PERISCOPE, profileImageUrl: e ? e.profile_image_url_https : void 0 }),
                G = (e, t) => ({ audiospace: { ...t, hostPalette: e?.profile_image_extensions_media_color?.palette || [] }, verified: !!e && e.verified, screenName: e ? e.screen_name : t.host.username, name: e ? e.name : t.host.display_name, userId: e ? e.id_str : t.creator_twitter_user_id, type: g.AUDIOSPACE, accountType: e ? M.TWITTER : M.PERISCOPE, profileImageUrl: e ? e.profile_image_url_https : t.host.avatar_url }),
                j = (e, t, i, r, s) => {
                    let n, o, d;
                    if (t && r && i) {
                        const e = T(r, i);
                        if (e) {
                            const { type: t } = e;
                            o = W(t);
                            const i = a.Z.getVideoFromCoverMedia(e),
                                { source_user_id_str: r, video_info: c } = i || {};
                            (n = c && c.duration_millis), (d = r && $(r, s));
                        }
                    } else o = g.SLATE;
                    const { id_str: c, name: l, screen_name: u, verified: m } = d || e || {};
                    return o ? { accountType: M.TWITTER, verified: m, screenName: u, name: l, type: o, playbackDuration: n, userId: c } : void 0;
                },
                $ = (e, t) => t.users && t.users[e],
                W = (e) => {
                    switch (e) {
                        case "animated_gif":
                            return g.GIF;
                        case "vine":
                        case "video":
                            return g.VOD;
                        default:
                            return;
                    }
                },
                F = (e) => {
                    let t;
                    if (e) {
                        const i = new URL(e).pathname.split("/");
                        t = i[i.length - 1];
                    }
                    return t;
                },
                V = (e) => !!e && !!e.carouselItemInfo && e.carouselItemInfo.type !== g.GIF && e.carouselItemInfo.type !== g.AUDIOSPACE && e.carouselItemInfo.type !== g.SLATE,
                z = (e, t = []) => {
                    const i = e + 1,
                        r = t.slice(i).findIndex(V);
                    return r > -1 ? r + i : r;
                },
                Y = Object.freeze({ SHOP: "shop" });
        },
        62338: (e, t, i) => {
            i.d(t, { y: () => r });
            const r = (e) => {
                if (e) {
                    const t = Math.round(e / 1e3),
                        i = t % 60,
                        r = i < 10 ? `0${i}` : i,
                        s = (t - i) / 60;
                    if (s > 60) {
                        const e = s % 60;
                        return `${Math.floor(s / 60)}:${e % 60 < 10 ? `0${e}` : e}:${r}`;
                    }
                    return `${s}:${r}`;
                }
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-e6266db0.a399a26a.js.map
