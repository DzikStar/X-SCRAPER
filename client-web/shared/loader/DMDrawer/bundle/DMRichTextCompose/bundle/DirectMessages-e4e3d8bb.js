"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-e4e3d8bb"],
    {
        524084: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(202784),
                s = r(523561),
                n = r(195560);
            const a = (0, s.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, t) => o.createElement(n.Z, { hasError: e, onRetry: t }) });
        },
        684511: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(202784);
            const o = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("loader.PushNotificationsPrompt"),
                    ]).then(r.bind(r, 529629)),
            });
        },
        376293: (e, t, r) => {
            r.d(t, { $f: () => _, KV: () => v, LI: () => w, SC: () => C, Vt: () => y, ed: () => M, op: () => k });
            var o = r(202784),
                s = r(190286),
                n = r(111677),
                a = r.n(n),
                i = r(616894),
                d = r(314948),
                c = r(516951),
                l = r(163390);
            const u = a().cfd2f35e,
                m = a().f9e45cfb,
                h = a().fcd4d489,
                p = a().a6450e84,
                f = a().ad00a739,
                v = a().a9fd20be,
                D = a().j546fb79,
                g = a().c9623eeb,
                y = a().e133be4e,
                b = a().f5f01af6,
                C = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                _ = (e) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: f({ screenName: e }) }),
                k = ({ blockAction: e, blockSubtext: t, source: r, testID: o, unblockAction: s, unblockSubtext: n, user: a }) => {
                    let i,
                        d = c.Z;
                    const u = w(a);
                    switch (r) {
                        case C.PROFILE:
                        case C.LIST_DETAIL:
                        case C.FOLLOWERS_LIST:
                            d = () => {
                                a.blocking ? s(u) : e(u);
                            };
                            break;
                        case C.TWEET:
                        case C.TWEET_CARET:
                        case C.RICH_FEEDBACK:
                            (i = l.uq.block),
                                (d = () => {
                                    a.blocking ? s(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: d, testID: o, shortcutKey: i, Icon: E(a.blocking), text: P(a), subText: S({ user: a, blockSubtext: t, unblockSubtext: n }) };
                },
                E = (e) => (e ? d.default : i.default),
                S = ({ blockSubtext: e, unblockSubtext: t, user: r }) => (!r.blocking && e ? e(r.screen_name) : r.blocking ? t : void 0),
                P = (e) => (e.blocking ? g({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                w = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: D({ screenName: t }), label: y, text: b }) : _(e.screen_name);
                    var t;
                },
                M = ({ confirmation: e, handleConfirm: t, onClose: r }) => {
                    const { confirmButtonType: n, headline: a, label: i, text: d } = e;
                    return o.createElement(s.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: n, headline: a, onCancel: r, onConfirm: t, text: d });
                };
        },
        545334: (e, t, r) => {
            r.d(t, { d: () => s });
            var o = r(111677);
            const s = r.n(o)().gf5e9ea6;
        },
        916585: (e, t, r) => {
            r.d(t, { k: () => a });
            var o = r(111677),
                s = r.n(o),
                n = r(437358);
            const a = (e, t) => {
                const { id_str: r } = e,
                    o = s().a599bbfa;
                return { Icon: n.default, text: o, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: t };
            };
        },
        847607: (e, t, r) => {
            r.d(t, { FK: () => p, GS: () => i, N1: () => c, X6: () => f, cm: () => d });
            r(202784);
            var o = r(111677),
                s = r.n(o),
                n = r(391366),
                a = r(40904);
            const i = s().hb568af4,
                d = s().bb1cbeb6,
                c =
                    (s().h2f62206,
                    (e, t, r) => {
                        const { muting: o } = e;
                        return { text: o ? d : i, onClick: o ? r : t, Icon: o ? n.default : a.default };
                    }),
                l = s().h59f52ee,
                u = s().eea0cbee,
                m = s().i29533b3,
                h = s().h129c3c3,
                p = (e) => (e ? ((e) => m({ screenName: e }))(e) : l),
                f = (e) => (e ? ((e) => h({ screenName: e }))(e) : u);
        },
        417714: (e, t, r) => {
            r.d(t, { l: () => l });
            r(202784);
            var o = r(111677),
                s = r.n(o),
                n = r(224823);
            const a = s().b3036480,
                i = s().b3036480,
                d = s().e68b09b4,
                c = s().h27b7407,
                l = ({ removeFollowerAction: e, user: t }) => {
                    const r = u(t);
                    return { Icon: n.default, text: a, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: d, text: c({ screenName: e.screen_name }) });
        },
        712816: (e, t, r) => {
            r.d(t, { d: () => s });
            var o = r(111677);
            const s = { defaultToast: { text: r.n(o)().b6878b0a }, showToast: !0 };
        },
        518966: (e, t, r) => {
            r.d(t, { h: () => d });
            var o = r(111677),
                s = r.n(o),
                n = r(615656);
            const a = s().ef504d80,
                i = s().cef96d5a,
                d = { defaultToast: { text: s().b2542f56 }, [n.ZP.DuplicateBookmark]: { toast: { text: i } }, [n.ZP.ProtectedTweetBookmarkError]: { toast: { text: a } }, showToast: !0 };
        },
        499456: (e, t, r) => {
            r.d(t, { f: () => c });
            var o = r(111677),
                s = r.n(o),
                n = r(615656),
                a = r(51525);
            const i = s().f58dff34,
                d = s().ad5a8e8e,
                c = { [n.ZP.MissingParameter]: { toast: (0, a.j)(i) }, [n.ZP.DirectMessageDestroyPermissionsError]: { toast: { text: d } }, showToast: !0 };
        },
        8448: (e, t, r) => {
            r.d(t, { q: () => a });
            var o = r(615656),
                s = r(613195),
                n = r(51525);
            const a = (e) => ({ [o.ZP.ClientNotPermitted]: { customAction: () => ((0, n.DR)("/messages/", { statusCode: 401 }), (0, s.Ae)(e)) } });
        },
        48886: (e, t, r) => {
            r.d(t, { q: () => s });
            var o = r(111677);
            const s = { defaultToast: { text: r.n(o)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, r) => {
            r.d(t, { D: () => s });
            var o = r(111677);
            const s = { defaultToast: { text: r.n(o)().ca96fe6e }, showToast: !0 };
        },
        349972: (e, t, r) => {
            r.d(t, { j: () => s });
            var o = r(111677);
            const s = { defaultToast: { text: r.n(o)().i14d7a46 }, showToast: !0 };
        },
        860174: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(615656),
                s = r(51525);
            const n = { [o.ZP.FollowError]: { customAction: s.w1 } };
        },
        481681: (e, t, r) => {
            r.d(t, { Bp: () => s, NF: () => o, nO: () => n });
            const o = "send-tweet",
                s = "dismiss-composer",
                n = 4;
        },
        47743: (e, t, r) => {
            r.d(t, { nO: () => o.nO, YT: () => D, yN: () => y, X2: () => b, FI: () => C });
            var o = r(481681),
                s = r(205074);
            function n(e) {
                return (t) => t.some((t) => !!t && e(t));
            }
            const a = (e) => !!e.mediaFile?.isGif,
                i = (e) => !!e.externalMediaDetails,
                d = (e) => !!e.mediaFile?.isImage,
                c = (e) => !(!e.mediaFile?.isVideo || e.mediaFile instanceof s.ZP),
                l = n((e) => a(e) || d(e) || c(e) || i(e));
            n(a), n(d), n(c), n(i);
            o.nO;
            var u = r(175848),
                m = r(276563),
                h = r(166852),
                p = r(450681),
                f = r(575211),
                v = r(456910);
            const D = ({ excludeReplyUser: e, inReplyToStatus: t, viewerUserId: r }) => {
                    const { retweeted_status: o } = t,
                        { entities: s, unmentioned_user_ids: n, user: a } = o || t,
                        i = o ? o.user : {},
                        d = o ? t.user : {},
                        c = s?.user_mentions || [],
                        l = u.ZP.mergeTaggedUsers(s?.media || []),
                        m = g(o || t) || {},
                        f = { [i.id_str]: i, [d.id_str]: d, [a.id_str]: a, [m.id_str]: m };
                    c.forEach((e) => {
                        f[e.id_str] = e;
                    }),
                        l.forEach(({ name: e, screen_name: t, user_id: r }) => {
                            f[r] = { id_str: r, name: e, screen_name: t };
                        });
                    const v = (e) => {
                            const t = n?.includes(e.id_str),
                                r = e.id_str === a.id_str;
                            return !t || r ? [e.id_str] : [];
                        },
                        D = (0, h.Z)((0, p.Z)([...v(i), ...v(d), a.id_str, ...c.flatMap((e) => v(e)), ...l.map((e) => e.user_id)])).filter((e) => e !== r);
                    let y = r && a.id_str === r ? [r, ...D] : D;
                    return e && (y = y.filter((e) => e !== a.id_str)), y.map((e) => f[e]);
                },
                g = ({ card: e }) => {
                    let t = null;
                    if (e) {
                        const r = m.default.getBindingValue(e.binding_values, "site");
                        r && e.users && (t = e.users[r.id_str]);
                    }
                    return t;
                },
                y =
                    ({ maxNumberOfMedia: e, mixedMediaUploadEnabled: t = !1 }) =>
                    (r) => {
                        if (0 === r.length) return !0;
                        if (t) {
                            return r.length <= e;
                        }
                        const o = r.some((e) => !!e.externalMediaDetails),
                            n = !o && r.some((e) => e.mediaFile && e.mediaFile.isGif),
                            a = r.some((e) => e.mediaFile && !(e.mediaFile instanceof s.ZP) && e.mediaFile.isVideo);
                        if (n || o || a) return 1 === r.length;
                        {
                            const t = r.length <= e,
                                o = r.every((e) => e.mediaFile && e.mediaFile.isImage);
                            return t && o;
                        }
                    },
                b = (e, t = !1, r = o.nO) => y({ mixedMediaUploadEnabled: t, maxNumberOfMedia: r })(e),
                C = (e, t = !1) => {
                    const r = e.split(f.V.WordBoundary);
                    return (
                        t && r.pop(),
                        !!r.find((e) => {
                            const t = (0, v.bR)(e, "compose");
                            return t && "users" === t.result_type;
                        })
                    );
                };
        },
        973572: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(476984),
                s = r.n(o),
                n = r(24949);
            const a = (0, n.wN)(n.PW, s());
        },
        207137: (e, t, r) => {
            r.d(t, { BC: () => c, FI: () => d, Pm: () => a, gO: () => n, zk: () => s });
            const o = () => new Date(Date.now());
            function s(e, t = o()) {
                return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
            }
            function n(e, t = o()) {
                const r = new Date(t);
                return r.setHours(r.getHours() - 24), s(e, r);
            }
            function a(e, t = o()) {
                const r = new Date(t);
                return r.setHours(r.getHours() + 24), s(e, r);
            }
            const i = 6048e5;
            function d(e, t = o()) {
                const r = t - e;
                return r >= 0 && r <= i;
            }
            function c(e, t) {
                const r = new Date();
                return t < r || t < e ? 0 : Math.min(1, (r - e) / (t - e));
            }
        },
        103335: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(856674);
            const s = (e, t) => [e, t].sort(o.ZP).join("-");
        },
        511985: (e, t, r) => {
            r.d(t, { AD: () => o, Qy: () => n, _f: () => a, zH: () => s });
            const o = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                s = 500,
                n = (e) => Object.values(o).indexOf(e) >= 0,
                a = (e, t) => ("boolean" == typeof e ? e : t);
        },
        163390: (e, t, r) => {
            r.d(t, { OX: () => m, Od: () => l, PN: () => h, uq: () => c, wR: () => f });
            var o = r(251067),
                s = r(522171),
                n = r(111677),
                a = r.n(n),
                i = r(912021),
                d = r(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                l = (0, i.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: c.nextItem, universal: !0 }, { description: a().g0048656, keys: c.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: c.refresh, universal: !1 }, { description: a().ha8209bc, keys: c.goHome, universal: !1 }, { description: a().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: a().eb75875e, keys: c.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: a().fa98627a, keys: c.goProfile, universal: !1 }, { description: a().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: a().b0041756, keys: c.goLists, universal: !1 }, { description: a().d4986f86, keys: c.goMessages, universal: !1 }, { description: a().h5860a68, keys: c.goGrok, universal: !1 }, { description: a().bb081ea2, keys: c.goSettings, universal: !1 }, { description: a().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: c.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = d.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: a().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: a().e736990a, keys: c.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: c.search, universal: !1 },
                    { description: a().fe731016, keys: s.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: s.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: s.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: s.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: c.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: c.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: c.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: s.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: a().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: a().b881560e, keys: c.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                p = (0, i.Z)((e) => {
                    const t = l(e),
                        r = m(),
                        o = h(),
                        s = {};
                    return (
                        [...r, ...o, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      s[t] = e;
                                  })
                                : (s[t] = e);
                        }),
                        JSON.stringify(s)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        965728: (e, t, r) => {
            r.d(t, { C_: () => D, I5: () => p, K2: () => v, L$: () => c, Rb: () => f, nk: () => h, sI: () => b, xr: () => g });
            var o = r(202784),
                s = r(483677),
                n = r(782578),
                a = r(401339),
                i = r(521514);
            const d = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                c = (e) => {
                    const t = e && s.Z.getForGallery(e);
                    return t ? { rgb: g(t), rgba: d(t, 0.9) } : m;
                },
                l = i.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                h = { transitionProperty: "background-color", transitionDuration: ".5s" },
                p = (e, t) => {
                    const { containerHeight: r, containerWidth: o, mediaHeight: s, mediaWidth: a } = e,
                        i = a && s ? a / s : 1,
                        d = i > 1,
                        c = t ? 400 : l,
                        m = d && (!a || a <= c) ? u(o, c) : o,
                        h = d || (s && !(s <= c)) ? r : u(r, c);
                    return n.Z.getContainDimensions({ width: m, height: h }, i);
                },
                f = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return c(t);
                },
                v = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return c(t);
                },
                D = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return c(t);
                },
                g = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                y = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                b = () => {
                    const [e, t] = o.useReducer(y, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            a.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        988566: (e, t, r) => {
            r.d(t, { D$: () => i, Du: () => l, GK: () => c, Iv: () => m, pz: () => h, rl: () => u });
            var o = r(202784),
                s = r(688715),
                n = r(946409),
                a = r(788993);
            const i = (e, t, r) => (e.retweeted_status ? d(e, t) : e.community_id_str && r ? c(e, r) : void 0),
                d = (e, t) => {
                    if (e.retweeted_status) return { contextType: a.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                c = (e, t) => ({ contextType: a.Z.Community, landingUrl: { url: (0, s.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                l = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: r }) => {
                    if (t?.topicContext) {
                        const o = t.topicContext;
                        return { contextType: e ? a.Z.TextOnly : a.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${o.topicId}`, urlType: "DeepLink" }, text: r?.name, topicContext: o };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                u = (e) => {
                    const { contextType: t, landingUrl: r, text: o } = e;
                    return { link: r ? (0, n.s9)(r) : void 0, text: o, contextType: t };
                },
                m = { contextType: a.Z.Pin, text: "" },
                h = o.createContext(void 0);
        },
        16222: (e, t, r) => {
            function o(e, t) {
                try {
                    return e();
                } catch (e) {
                    return t(e);
                }
            }
            r.d(t, { o: () => o });
        },
        961104: (e, t, r) => {
            function o(e, t) {
                return e.filter(t);
            }
            r.d(t, { b: () => o });
        },
        409438: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, r) => {
            r.d(t, { M: () => a });
            var o = r(807896),
                s = r(202784),
                n = r(190286);
            const a = (e) => (t) => {
                const [r, a] = s.useState(null),
                    i = (e) =>
                        new Promise((t, r) => {
                            a({ resolve: t, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = r;
                    return s.createElement(
                        n.Z,
                        (0, o.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return s.createElement(e, (0, o.Z)({}, t, { confirm: i }));
            };
        },
        296196: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    GLOBAL_STATE_KEY: () => f.Yf,
                    acceptConversation: () => n.tF,
                    addAvatarMedia: () => n._D,
                    addParticipants: () => n.ck,
                    addRecentSearches: () => T,
                    addWelcomeMessageToConversation: () => n.Qe,
                    clearRecentSearch: () => Z,
                    clearRecentSearches: () => x,
                    clearSearchCache: () => C,
                    default: () => O,
                    deleteConversations: () => n.S9,
                    disableMentionNotifications: () => n.BW,
                    disableNotifications: () => n.dq,
                    enableMentionNotifications: () => n.Ap,
                    enableNotifications: () => n.PZ,
                    fetchConversation: () => n.Um,
                    fetchConversationFromParticipants: () => n.sS,
                    fetchConversationFuture: () => n.OW,
                    fetchConversationHistoricalSnapshot: () => n.wm,
                    fetchConversationHistory: () => n.Be,
                    fetchConversationIfNeeded: () => n.sA,
                    fetchInbox: () => i.oH,
                    fetchInboxIfNeeded: () => i.C2,
                    fetchPermissions: () => n.qg,
                    fetchTrustedInboxHistory: () => i.vC,
                    fetchUntrustedInboxHistory: () => i.kK,
                    fetchUntrustedLowQualityInboxHistory: () => i.j7,
                    fetchUpdates: () => A.f9,
                    fetchUpdatesIfNeeded: () => A.hd,
                    leaveConversation: () => n.qH,
                    markAllAsRead: () => n.SF,
                    markConversationRead: () => n.v3,
                    markSpamStatus: () => a.kv,
                    muteDMUser: () => n.sj,
                    removeAvatarMedia: () => n.Xw,
                    removeConversation: () => n.Ae,
                    removeEntry: () => a.MY,
                    searchConversations: () => I,
                    selectConversation: () => n.xu,
                    selectConversationAvatarMediaId: () => n.aG,
                    selectConversationAvatarMediaIsUploading: () => n.W,
                    selectConversationAvatarMediaUploadProgress: () => n.UA,
                    selectConversationFetchStatus: () => n.Pr,
                    selectConversationIdsByInbox: () => i.g4,
                    selectConversationIsLoaded: () => n.gQ,
                    selectConversationIsRead: () => n.jT,
                    selectConversations: () => n.FS,
                    selectEntries: () => a.gm,
                    selectEntriesForConversation: () => a.iN,
                    selectEntry: () => a.WK,
                    selectFetchStatus: () => i.UD,
                    selectHasConversations: () => n.ax,
                    selectInboxCursor: () => i.Pt,
                    selectInboxIsLoaded: () => i.MB,
                    selectInboxTypeByConversation: () => n.Zg,
                    selectIsLoadingTop: () => i.xS,
                    selectLabelledConversationIds: () => i.Z3,
                    selectLastSeenEventIds: () => i.B7,
                    selectPinnedConversationIds: () => i.Kf,
                    selectRecentSearches: () => P,
                    selectRecipientCanNotDm: () => n.OF,
                    selectSearchConversations: () => M,
                    selectSearchFetchStatus: () => w,
                    selectUnreadCount: () => i.Sb,
                    selectUntrustedConversationCount: () => i.Oq,
                    selectUntrustedCounts: () => i.Re,
                    selectUntrustedCursor: () => i.aB,
                    selectUntrustedLowQualityConversationCount: () => i.ZI,
                    selectUntrustedLowQualityCursor: () => i.Gk,
                    selectUntrustedUnreadCount: () => i.k5,
                    selectUpdates: () => A.o8,
                    setConversationAvatar: () => n.X5,
                    toggleNotifications: () => n.$S,
                    unmuteDMUser: () => n.GP,
                    updateConversationAvatar: () => n.nI,
                    updateConversationName: () => n.FI,
                    updateConversationReadState: () => n.d0,
                    updateLastSeenEventId: () => i.kL,
                    updateTrustedLastSeenEventId: () => i.$7,
                    updateTyping: () => n.lT,
                    updateUntrustedLastSeenEventId: () => i.A4,
                });
            var o = r(118717),
                s = r(499627),
                n = r(613195),
                a = r(627279),
                i = r(720277),
                d = (r(136728), r(468811)),
                c = r.n(d),
                l = r(948322),
                u = r(917799),
                m = r(312771),
                h = r(390387),
                p = r(849585),
                f = r(147143);
            const v = "rweb.recentDMSearches",
                D = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                g = "rweb/directMessages/ADD_RECENT_SEARCHES",
                y = (e) => ({ payload: e, type: g }),
                b = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                C = () => ({ type: b }),
                _ = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                k = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                E = { searchResults: {}, recentSearches: [] };
            function S(e = E, t) {
                if (!t) return e;
                switch (t.type) {
                    case g:
                    case _:
                        return { ...e, recentSearches: t.payload || [] };
                    case k:
                        return { ...e, recentSearches: [] };
                    case D.REQUEST: {
                        const { fetchNextPage: r, preserveResults: o, query: s } = t.meta || {},
                            n = e.searchResults ? e.searchResults[s] : {},
                            a = { ...e.searchResults, [s]: { ...n, fetchStatus: o || r ? n?.fetchStatus : m.ZP.LOADING } };
                        return { ...e, searchResults: a };
                    }
                    case D.FAILURE: {
                        const { fetchNextPage: r, preserveResults: o, query: s } = t.meta || {},
                            n = e.searchResults ? e.searchResults[s] : {},
                            a = { ...e.searchResults, [s]: { ...n, fetchStatus: o || r ? n?.fetchStatus : m.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: a };
                    }
                    case D.SUCCESS: {
                        const { query: r } = t.meta || {},
                            o = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: s, error: n } = o || {},
                            a = o?.conversationIds ? o.conversationIds : s ? Object.keys(s) : [],
                            i = e.searchResults ? e.searchResults[r] : {},
                            d = i?.conversationIds || [],
                            c = d.length && a ? d.concat(a.filter((e) => !d.includes(e))) : a,
                            l = { ...e.searchResults, [r]: { ...i, lastCursor: o?.cursor, conversationIds: c, error: n, fetchStatus: m.ZP.LOADED } };
                        return { ...e, searchResults: l };
                    }
                    case b:
                    case p.t:
                        return { ...E, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const P = (e) => e[f.Yf].search?.recentSearches,
                w = (e, t) => {
                    const r = e[f.Yf].search?.searchResults;
                    if (r) {
                        const e = r[t];
                        return e?.fetchStatus || m.ZP.NONE;
                    }
                    return m.ZP.NONE;
                },
                M = (e, t) => {
                    const r = e[f.Yf].search?.searchResults;
                    return (r && r[t]?.conversationIds) || [];
                },
                I =
                    (e) =>
                    (t, r, { api: o }) => {
                        const s = r(),
                            { fetchNextPage: n, preserveResults: a, query: d } = e || {},
                            m = { query: d, search_type: "conversations", request_id: c().v4() },
                            h = ((e, t) => {
                                const r = e[f.Yf].search?.searchResults;
                                return (r && r[t]?.lastCursor) || null;
                            })(s, d),
                            p = ((e) => e[f.Yf].search?.searchResults)(s),
                            v = p ? p[d] : void 0,
                            g = !!h;
                        h && d && n && (m.cursor = h);
                        const y = u._O(t, { params: m, request: o.withEndpoint(l.Z).search }),
                            b = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: r } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, i.s0)({ conversations: t, users: r }) : null;
                                }
                            };
                        return !v || v?.error || a || (n && g) ? y({ actionTypes: D, context: "SEARCH", meta: { query: m.query, cursor: m.cursor, preserveResults: a, fetchNextPage: n } }, b) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: v }, meta: { query: d, cursor: h } }), Promise.resolve());
                    },
                T =
                    (e) =>
                    (t, r, { featureSwitches: o, userPersistence: s }) => {
                        const n = o.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return s.get(v).then((r) => {
                            const o = r?.recentSearches || [];
                            return !o.includes(e) && o.push(e), o.length > n && o.shift(), t(y(o)), s.set(v, { recentSearches: o });
                        });
                    },
                Z =
                    (e) =>
                    (t, r, { userPersistence: o }) =>
                        o.get(v).then((r) => {
                            const s = r?.recentSearches || [];
                            return s.splice(s.indexOf(e), 1), t({ payload: s, type: _ }), o.set(v, { recentSearches: s });
                        }),
                x =
                    () =>
                    (e, t, { userPersistence: r }) => (e({ type: k }), r.set(v, { recentSearches: [] }));
            s.Z.register(
                { [f.Yf]: S },
                () =>
                    (e, t, { userPersistence: r }) =>
                        h.Qb(t())
                            ? Promise.resolve(
                                  r.get(v).then((t) => {
                                      const r = t?.recentSearches;
                                      r && e(y(r));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var A = r(923965);
            const R = (0, o.UY)({ conversations: n.ZP, entries: a.ZP, inbox: i.ZP, search: S, updates: A.ZP });
            s.Z.register({ [f.Yf]: R });
            const O = R;
        },
        947650: (e, t, r) => {
            r.d(t, { Hq: () => y, c1: () => f, lP: () => D, og: () => v });
            var o = r(745123),
                s = r(961104),
                n = r(499627),
                a = r(917799),
                i = r(56519),
                d = r(919022);
            const c = "knownFollowers",
                l = `rweb/${c}`,
                u = [],
                m = (0, a.dg)(l, "FETCH_KNOWN_FOLLOWERS"),
                h = {};
            n.Z.register({
                [c]: function (e = h, t) {
                    if (!t) return e;
                    if (t.type === m.SUCCESS) {
                        const r = t.payload || {},
                            { total_count: o, users: s } = r && r.result,
                            { user_id: n } = t.meta || {};
                        return n ? { ...e, [n]: { knownFollowersCount: o, knownFollowerIds: s } } : e;
                    }
                    return e;
                },
            });
            const p = (e, t) => e[c][t],
                f = (e, t) => {
                    if (t) {
                        const r = g(e, t);
                        return (0, s.b)(d.ZP.selectMany(e, r), (e) => !!e);
                    }
                    return u;
                },
                v = (e, t) => f(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                D = (e, t) => {
                    let r;
                    if (t) {
                        const o = p(e, t);
                        r = o?.knownFollowersCount;
                    }
                    return r;
                },
                g = (e, t) => {
                    const r = p(e, t);
                    return r?.knownFollowerIds || u;
                },
                y =
                    (e) =>
                    (t, r, { api: s }) =>
                        void 0 !== D(r(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, r, { api: s }) =>
                                          (0, a._O)(t, { request: s.withEndpoint(o.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: m, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, i.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        465814: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(502909),
                s = r(600823);
            const n = { ...(0, o.ZP)({ namespace: "legacyAndUnifiedCards" }) },
                a = s.Z.register(n);
        },
        694180: (e, t, r) => {
            r.d(t, { cM: () => v, dS: () => f, iY: () => D });
            var o = r(370751),
                s = r(399896),
                n = r(663550),
                a = r(499627),
                i = r(917799);
            const d = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                l = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([n.dx.IMPRESSION, n.dx.DWELL]),
                m = (0, o.Z)([n.AJ.TREND_VIEW, n.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: l });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, r, { api: o }) => {
                        const { event: n, impression_id: a, promoted_trend_id: d } = e,
                            l = `trend-${d}-${n}`;
                        if (m.has(n) && p(r(), l)) return Promise.resolve();
                        const u = { promoted_trend_id: d, event: n, impression_id: a };
                        return (0, i._O)(t, { params: u, request: o.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(n)) return [h(l)];
                        });
                    },
                v =
                    ({ disclosureType: e, itemId: t, itemType: r, params: o }) =>
                    (n, a, { api: d }) => {
                        const { event: l, impression_id: m } = o,
                            f = `${r}-${t ?? "undefined"}-${m ?? "undefined"}-${l ?? "undefined"}`;
                        if (u.has(l) && p(a(), f)) return Promise.resolve();
                        const v = e && "earned" === e.toLowerCase() ? "1" : null,
                            D = { ...o, earned: v, epoch_ms: Date.now() };
                        return (0, i._O)(n, { params: D, request: d.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: D }, (e, t) => {
                            if (!t && u.has(l)) return [h(f)];
                        });
                    },
                D =
                    (e) =>
                    (t, r, { api: o }) =>
                        (0, i._O)(t, { params: e, request: o.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = d, t) {
                    if (!t) return e;
                    if (t.type === l) {
                        if (!t.payload) return e;
                        const { eventKey: r } = t.payload;
                        return { ...e, [r]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, t, r) => {
            r.d(t, { r: () => c });
            r(136728);
            var o = r(161821),
                s = r(390387),
                n = r(836255),
                a = r(255117),
                i = r(166506),
                d = r(919022);
            const c =
                (e, t) =>
                (r, c, { api: l, featureSwitches: u }) =>
                    r(d.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            d = (0, o.Z)(n.Z.selectAll(t)).reduce((r, o) => {
                                if (null != o)
                                    if (o.user === e) r[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const s = n.Z.select(t, o.retweeted_status);
                                        s?.user === e && (r[o.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            l = (0, s._h)(c()),
                            u = l ? [(0, a.ZP)({ useLatest: !1, userId: l }).removeTweets(d), (0, a.ZP)({ useLatest: !0, userId: l }).removeTweets(d)] : [],
                            m = (0, i.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const r = (0, i.f8)(e, t, m);
                            r && u.push(r);
                        }
                        return r(u);
                    });
        },
        818581: (e, t, r) => {
            r.d(t, { kQ: () => h, xQ: () => p });
            var o = r(226395),
                s = r(499627),
                n = r(917799),
                a = r(312771),
                i = r(390387);
            const d = `${r(291020).Y}/user_preferences`,
                c = `rweb/${d}`,
                l = n.dg(c, "FETCH_USER_PREFERENCES"),
                u = { userPreferences: {}, error: null, fetchStatus: a.ZP.NONE };
            function m(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case l.REQUEST:
                        return { ...e, fetchStatus: a.ZP.LOADING };
                    case l.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: a.ZP.FAILED };
                    case l.SUCCESS:
                        return { ...e, userPreferences: t.payload.user_preferences, error: null, fetchStatus: a.ZP.LOADED };
                    default:
                        return e;
                }
            }
            s.Z.register({ [d]: m });
            const h = (e) => e[d].userPreferences,
                p = () => (e, t) => (t()[d].fetchStatus === a.ZP.LOADED ? Promise.resolve() : e(f())),
                f =
                    () =>
                    (e, t, { api: r }) => {
                        const s = i.x0(t());
                        return n._O(e, { params: { userId: s }, request: r.withEndpoint(o.Z).fetchUserPreferences })({ actionTypes: l, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        977154: (e, t, r) => {
            r.d(t, { H$: () => u, ZP: () => c, m: () => l, qk: () => m });
            var o = r(403911),
                s = r(750085),
                n = r(555875),
                a = r(218951);
            const i = "bookmarks",
                d = (0, a.Z)({ timelineId: i, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: s.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                c = d,
                l = (e) => (0, a.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: s.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                u =
                    () =>
                    (e, t, { api: r, featureSwitches: s }) =>
                        r
                            .withEndpoint(o.Z)
                            .deleteAll()
                            .then(() => e(d.deleteTimeline())),
                m = n.CG.bind(null, i);
        },
        166506: (e, t, r) => {
            r.d(t, { du: () => l, f8: () => u, k9: () => c });
            var o = r(503768),
                s = r(750085),
                n = r(962741),
                a = r(466015),
                i = r(919022),
                d = r(218951);
            const c = () => (0, d.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: s.Z }),
                l = (e) => (t, r) => {
                    const o = r();
                    t(
                        e
                            .selectEntries(o)
                            .filter((e) => {
                                const t = e.type === n.ZP.User ? e.content.id : "",
                                    r = i.ZP.select(o, t);
                                return r && !r.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, r) => {
                    if (!r.selectEntries(t).find((t) => t.type === n.ZP.User && t.content.id === e)) {
                        const t = (0, a.OD)(e),
                            o = (0, a.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(o);
                    }
                };
        },
        127218: (e, t, r) => {
            r.d(t, { C: () => D });
            var o = r(202784),
                s = r(614983),
                n = r.n(s),
                a = r(437429),
                i = r.n(a),
                d = r(57074),
                c = r.n(d),
                l = r(10622),
                u = r.n(l),
                m = r(585488),
                h = r(71620),
                p = r(163889),
                f = r(312771),
                v = r(535338);
            function D(e, t, r) {
                const [s, a] = o.useState(!1),
                    [d, l] = o.useState(null),
                    D = i()(),
                    g = c()(t),
                    y = (0, h.po)(),
                    b = (0, v.p)(e, g, r);
                return o.useMemo(() => {
                    const t = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    n()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: r, previous_cursor: o } =
                            (function (e, t) {
                                try {
                                    n()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let r = e;
                                    for (const e of t) n()(!!r, "The provided path is invalid."), n()("string" == typeof e, "Unexpected value for path!"), (r = r?.[e]);
                                    return r;
                                } catch (e) {
                                    return void (0, p.ZP)(e.message);
                                }
                            })(b, t) || {},
                        i = (t) => {
                            s ||
                                (a(!0),
                                u()(D, e, { ...g, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), l(e), y(e);
                                    },
                                }));
                        },
                        c = () => {
                            r && i(r);
                        },
                        h = () => {
                            o && i(o);
                        },
                        v = () => {
                            i(void 0);
                        };
                    return d ? { subsequentFetchStatus: f.ZP.FAILED, error: d, fetchNext: c, fetchPrevious: h, refetch: v, data: b, hasNext: Boolean(r), hasPrevious: Boolean(o) } : { subsequentFetchStatus: s ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: h, refetch: v, data: b, hasNext: Boolean(r), hasPrevious: Boolean(o) };
                }, [e, b, s, d, D, g, y]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-e4e3d8bb.9151343a.js.map
