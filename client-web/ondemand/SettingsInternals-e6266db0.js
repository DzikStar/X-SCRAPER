"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-e6266db0"],
    {
        282559: (e, a, o) => {
            o.d(a, { v: () => d });
            o(571372);
            var r = o(96768),
                n = o(202784),
                t = (o(585488), o(351743)),
                s = o.n(t);
            const i = r.Z,
                d = ({ originProduct: e, returnUrl: a }) => {
                    const [o, r] = s()(i);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((r, n) => {
                                    o({
                                        variables: { return_url: a, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, a) => {
                                            const o = e?.customer_portal_session_url ?? void 0;
                                            o ? r(o) : n(new Error("Missing portal URL"));
                                        },
                                        onError: n,
                                    });
                                }),
                            [o, a, e],
                        ),
                        r,
                    ];
                };
        },
        177210: (e, a, o) => {
            o.d(a, { Z: () => c });
            var r = o(202784),
                n = o(111677),
                t = o.n(n),
                s = o(782826),
                i = o(282559),
                d = o(782642);
            const l = t().ef4602ec;
            function c(e) {
                const a = (0, d.p)(),
                    [o, n] = (0, i.v)(e),
                    t = r.useCallback(() => {
                        o()
                            .then((e) => {
                                s.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                a({ text: l });
                            });
                    }, [o, a]);
                return n ? void 0 : t;
            }
        },
        684511: (e, a, o) => {
            o.d(a, { Z: () => r });
            o(202784);
            const r = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("loader.PushNotificationsPrompt"),
                    ]).then(o.bind(o, 529629)),
            });
        },
        376293: (e, a, o) => {
            o.d(a, { $f: () => w, KV: () => k, LI: () => P, SC: () => M, Vt: () => b, ed: () => C, op: () => I });
            var r = o(202784),
                n = o(190286),
                t = o(111677),
                s = o.n(t),
                i = o(616894),
                d = o(314948),
                l = o(516951),
                c = o(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                g = s().fcd4d489,
                h = s().a6450e84,
                p = s().g353ad73,
                _ = s().ad00a739,
                k = s().a9fd20be,
                f = s().j546fb79,
                D = s().c9623eeb,
                b = s().e133be4e,
                y = s().he43bca4,
                v = s().f5f01af6,
                M = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                w = (e, a) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: h, text: a ? _({ screenName: e }) : p({ screenName: e }) }),
                I = ({ blockAction: e, blockSubtext: a, isSoftBlockEnabled: o, source: r, testID: n, unblockAction: t, unblockSubtext: s, user: i }) => {
                    let d,
                        u = l.Z;
                    const m = P(i, o);
                    switch (r) {
                        case M.PROFILE:
                        case M.LIST_DETAIL:
                        case M.FOLLOWERS_LIST:
                            u = () => {
                                i.blocking ? t(m) : e(m);
                            };
                            break;
                        case M.TWEET:
                        case M.TWEET_CARET:
                        case M.RICH_FEEDBACK:
                            (d = c.uq.block),
                                (u = () => {
                                    i.blocking ? t(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: n, shortcutKey: d, Icon: T(i.blocking), text: A(i), subText: x({ user: i, blockSubtext: a, unblockSubtext: s }) };
                },
                T = (e) => (e ? d.default : i.default),
                x = ({ blockSubtext: e, unblockSubtext: a, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? a : void 0),
                A = (e) => (e.blocking ? D({ screenName: e.screen_name }) : g({ screenName: e.screen_name })),
                P = (e, a) => (e.blocking ? ((e, a) => ({ confirmButtonType: "primary", headline: f({ screenName: e }), label: b, text: a ? v : y }))(e.screen_name, a) : w(e.screen_name, a)),
                C = ({ confirmation: e, handleConfirm: a, onClose: o }) => {
                    const { confirmButtonType: t, headline: s, label: i, text: d } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: t, headline: s, onCancel: o, onConfirm: a, text: d });
                };
        },
        545334: (e, a, o) => {
            o.d(a, { d: () => n });
            var r = o(111677);
            const n = o.n(r)().gf5e9ea6;
        },
        916585: (e, a, o) => {
            o.d(a, { k: () => s });
            var r = o(111677),
                n = o.n(r),
                t = o(437358);
            const s = (e, a) => {
                const { id_str: o, screen_name: r } = e,
                    s = (0, n().d78131b9)({ screenName: r });
                return { Icon: t.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: a };
            };
        },
        847607: (e, a, o) => {
            o.d(a, { Aq: () => u, FK: () => f, GS: () => i, N1: () => g, PY: () => m, X6: () => D, cm: () => d });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                t = o(391366),
                s = o(40904);
            const i = n().hb568af4,
                d = n().bb1cbeb6,
                l = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => l({ screenName: e }),
                m = (e) => c({ screenName: e }),
                g = (e, a, o) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? m(n) : u(n), onClick: r ? o : a, Icon: r ? t.default : s.default };
                },
                h = n().h59f52ee,
                p = n().eea0cbee,
                _ = n().i29533b3,
                k = n().h129c3c3,
                f = (e) => (e ? ((e) => _({ screenName: e }))(e) : h),
                D = (e) => (e ? ((e) => k({ screenName: e }))(e) : p);
        },
        417714: (e, a, o) => {
            o.d(a, { l: () => c });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                t = o(224823);
            const s = n().b3036480,
                i = n().b3036480,
                d = n().e68b09b4,
                l = n().h27b7407,
                c = ({ removeFollowerAction: e, user: a }) => {
                    const o = u(a);
                    return { Icon: t.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: d, text: l({ screenName: e.screen_name }) });
        },
        712816: (e, a, o) => {
            o.d(a, { d: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        775412: (e, a, o) => {
            o.d(a, { W: () => i });
            var r = o(111677),
                n = o.n(r),
                t = o(615656);
            const s = n().ee87e71c,
                i = { [t.ZP.SelfMuteError]: { toast: { text: s } }, showToast: !0 };
        },
        48886: (e, a, o) => {
            o.d(a, { q: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().a30b63da }, showToast: !0 };
        },
        670094: (e, a, o) => {
            o.d(a, { d: () => l });
            var r = o(111677),
                n = o.n(r),
                t = o(88656),
                s = o(601576),
                i = o(163889);
            const d = n().a5d4fda0,
                l = (e = d, a = !0) => ({
                    customErrorHandler: (o) => {
                        const { context: r } = o;
                        return (!o) instanceof t.Z && (o.message = `Strato error occurred in ${r.id}: ${r.action}`), (0, i.ZP)(o, { extra: { context: r, isStrato: !0 } }), a ? (0, s.mf)({ text: e }) : [];
                    },
                });
        },
        879596: (e, a, o) => {
            o.d(a, { D: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        837731: (e, a, o) => {
            o.d(a, { G: () => i });
            var r = o(111677),
                n = o.n(r),
                t = o(615656);
            const s = n().ed428a76,
                i = { [t.ZP.NotMutingTargetUser]: { toast: { text: s } }, showToast: !0 };
        },
        860174: (e, a, o) => {
            o.d(a, { Z: () => t });
            var r = o(615656),
                n = o(51525);
            const t = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        355335: (e, a, o) => {
            o.d(a, { Z: () => d, k: () => i });
            o(543673), o(240753), o(128399), o(136728);
            var r = o(202784),
                n = o(565058),
                t = o(400752),
                s = o(107267);
            const i = (0, n.cn)(!1),
                d = () => {
                    const e = (0, s.useHistory)(),
                        a = (0, s.useLocation)(),
                        [o, n] = (0, t.KO)(i);
                    r.useEffect(() => {
                        const e = new URLSearchParams(a.search).get("jfDev"),
                            o = sessionStorage.getItem("jfDev");
                        let r = !1;
                        e ? (("1" !== e && "true" !== e) || (r = !0), ("0" !== e && "false" !== e) || (r = !1)) : (r = "true" === o), r ? (n(!0), sessionStorage.setItem("jfDev", "true")) : (n(!1), sessionStorage.removeItem("jfDev"));
                    }, [a.search, n]);
                    const d = r.useCallback(
                        (o) => {
                            const r = new URLSearchParams(a.search);
                            o ? (r.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (r.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const t = r.toString();
                            e.push({ pathname: a.pathname, search: t }), n(o);
                        },
                        [e, a.pathname, a.search, n],
                    );
                    return {
                        isDev: o,
                        enableDev: r.useCallback(() => {
                            d(!0);
                        }, [d]),
                        disableDev: r.useCallback(() => {
                            d(!1);
                        }, [d]),
                    };
                };
        },
        163390: (e, a, o) => {
            o.d(a, { OX: () => m, Od: () => c, PN: () => g, uq: () => l, wR: () => p });
            var r = o(251067),
                n = o(522171),
                t = o(111677),
                s = o.n(t),
                i = o(912021),
                d = o(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, i.Z)((e) => {
                    const a = e ? [{ description: s().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: l.nextItem, universal: !0 }, { description: s().g0048656, keys: l.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: l.refresh, universal: !1 }, { description: s().ha8209bc, keys: l.goHome, universal: !1 }, { description: s().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: s().eb75875e, keys: l.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: s().fa98627a, keys: l.goProfile, universal: !1 }, { description: s().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: s().b0041756, keys: l.goLists, universal: !1 }, { description: s().d4986f86, keys: l.goMessages, universal: !1 }, { description: s().h5860a68, keys: l.goGrok, universal: !1 }, { description: s().bb081ea2, keys: l.goSettings, universal: !1 }, { description: s().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...a, { description: s().eee2ed92, keys: l.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = d.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: s().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: l.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: l.search, universal: !1 },
                    { description: s().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: l.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: l.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: l.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                g = () => [
                    { description: s().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: s().b881560e, keys: l.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                h = (0, i.Z)((e) => {
                    const a = c(e),
                        o = m(),
                        r = g(),
                        n = {};
                    return (
                        [...o, ...r, ...a].forEach(({ description: e, keys: a }) => {
                            Array.isArray(a)
                                ? a.forEach((a) => {
                                      n[a] = e;
                                  })
                                : (n[a] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                p = (e, a) => {
                    if (a) return { dataSet: { "at-shortcutkeys": h(e) } };
                };
        },
        967262: (e, a, o) => {
            o.d(a, { m: () => r });
            const r = (e, a) => {
                    const o = e?.media_info;
                    if ("ApiImage" === o?.__typename) {
                        return { altText: o.alt_text, display_url: o.original_img_url, expanded_url: a?.expandedURLFormatter?.(e.media_id) ?? o.original_img_url, ext_alt_text: o.alt_text, ...(o.color_info?.palette && { ext_media_color: { palette: o.color_info.palette } }), id: t(e.media_id), id_str: e.media_id || "", media_key: e.media_key, media_url: o.original_img_url, media_url_https: o.original_img_url, original_info: { height: o.original_img_height, width: o.original_img_width }, sizes: { original: { h: o.original_img_height, resize: "fit", w: o.original_img_width } }, type: "photo" };
                    }
                    if ("ApiVideo" === o?.__typename) {
                        const { __typename: a, ...r } = o;
                        return n(r, e.media_id, o?.__typename);
                    }
                    if ("ApiGif" === o?.__typename) {
                        const { __typename: a, ...r } = o;
                        return n(r, e.media_id, o?.__typename);
                    }
                },
                n = (e, a, o) => {
                    const r = "ApiGif" === o ? "animated_gif" : "video",
                        n = e.preview_image;
                    return { type: r, id: t(a), id_str: a || "", ext_alt_text: n?.alt_text, ext_media_color: { palette: n?.color_info?.palette || [] }, media_url: n?.original_img_url || "", media_url_https: n?.original_img_url || "", url: n?.original_img_url || "", display_url: n?.original_img_url || "", expanded_url: n?.original_img_url || "", original_info: { height: n?.original_img_height || 0, width: n?.original_img_width || 0 }, sizes: { original: { h: n?.original_img_height || 0, resize: "fit", w: n?.original_img_width || 0 } }, video_info: { aspect_ratio: [e.aspect_ratio.numerator, e.aspect_ratio.denominator], ...(e.duration_millis && { duration_millis: e.duration_millis }), variants: e.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } };
                },
                t = (e) => {
                    const a = parseInt(e, 10);
                    return Number.isNaN(a) ? 0 : a;
                };
        },
        554997: (e, a, o) => {
            o.d(a, { r: () => t });
            const r = 19,
                n = 12,
                t = (e) => e.placeType && (e.placeType.code === r || e.placeType.code === n);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-e6266db0.77a3929a.js.map
