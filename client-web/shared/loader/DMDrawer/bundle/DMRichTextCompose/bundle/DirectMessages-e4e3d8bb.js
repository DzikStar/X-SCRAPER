"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-e4e3d8bb"],
    {
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
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("loader.PushNotificationsPrompt"),
                    ]).then(r.bind(r, 529629)),
            });
        },
        545334: (e, t, r) => {
            r.d(t, { d: () => n });
            var o = r(674132);
            const n = r.n(o)().gf5e9ea6;
        },
        916585: (e, t, r) => {
            r.d(t, { k: () => s });
            var o = r(674132),
                n = r.n(o),
                a = r(437358);
            const s = (e, t) => {
                const { id_str: r, screen_name: o } = e,
                    s = (0, n().d78131b9)({ screenName: o });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: t };
            };
        },
        847607: (e, t, r) => {
            r.d(t, { Aq: () => u, FK: () => v, GS: () => d, N1: () => m, PY: () => h, X6: () => C, cm: () => i });
            r(202784);
            var o = r(674132),
                n = r.n(o),
                a = r(391366),
                s = r(40904);
            const d = n().hb568af4,
                i = n().bb1cbeb6,
                l = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => l({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, t, r) => {
                    const { muting: o, screen_name: n } = e;
                    return { text: o ? h(n) : u(n), onClick: o ? r : t, Icon: o ? a.default : s.default };
                },
                f = n().h59f52ee,
                p = n().eea0cbee,
                D = n().i29533b3,
                _ = n().h129c3c3,
                v = (e) => (e ? ((e) => D({ screenName: e }))(e) : f),
                C = (e) => (e ? ((e) => _({ screenName: e }))(e) : p);
        },
        417714: (e, t, r) => {
            r.d(t, { l: () => c });
            r(202784);
            var o = r(674132),
                n = r.n(o),
                a = r(224823);
            const s = n().b3036480,
                d = n().b3036480,
                i = n().e68b09b4,
                l = n().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const r = u(t);
                    return { Icon: a.default, text: s, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: d, label: i, text: l({ screenName: e.screen_name }) });
        },
        518966: (e, t, r) => {
            r.d(t, { h: () => i });
            var o = r(674132),
                n = r.n(o),
                a = r(615656);
            const s = n().ef504d80,
                d = n().cef96d5a,
                i = { defaultToast: { text: n().b2542f56 }, [a.ZP.DuplicateBookmark]: { toast: { text: d } }, [a.ZP.ProtectedTweetBookmarkError]: { toast: { text: s } }, showToast: !0 };
        },
        499456: (e, t, r) => {
            r.d(t, { f: () => l });
            var o = r(674132),
                n = r.n(o),
                a = r(615656),
                s = r(51525);
            const d = n().f58dff34,
                i = n().ad5a8e8e,
                l = { [a.ZP.MissingParameter]: { toast: (0, s.j)(d) }, [a.ZP.DirectMessageDestroyPermissionsError]: { toast: { text: i } }, showToast: !0 };
        },
        8448: (e, t, r) => {
            r.d(t, { q: () => s });
            var o = r(615656),
                n = r(613195),
                a = r(51525);
            const s = (e) => ({ [o.ZP.ClientNotPermitted]: { customAction: () => ((0, a.DR)("/messages/", { statusCode: 401 }), (0, n.Ae)(e)) } });
        },
        48886: (e, t, r) => {
            r.d(t, { q: () => n });
            var o = r(674132);
            const n = { defaultToast: { text: r.n(o)().a30b63da }, showToast: !0 };
        },
        349972: (e, t, r) => {
            r.d(t, { j: () => n });
            var o = r(674132);
            const n = { defaultToast: { text: r.n(o)().i14d7a46 }, showToast: !0 };
        },
        860174: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(615656),
                n = r(51525);
            const a = { [o.ZP.FollowError]: { customAction: n.w1 } };
        },
        481681: (e, t, r) => {
            r.d(t, { Bp: () => n, NF: () => o, nO: () => a });
            const o = "send-tweet",
                n = "dismiss-composer",
                a = 4;
        },
        47743: (e, t, r) => {
            r.d(t, { nO: () => o.nO, YT: () => _, yN: () => C, X2: () => E, FI: () => M });
            var o = r(481681),
                n = r(205074);
            function a(e) {
                return (t) => t.some((t) => !!t && e(t));
            }
            const s = (e) => !!e.mediaFile?.isGif,
                d = (e) => !!e.externalMediaDetails,
                i = (e) => !!e.mediaFile?.isImage,
                l = (e) => !(!e.mediaFile?.isVideo || e.mediaFile instanceof n.ZP),
                c = a((e) => s(e) || i(e) || l(e) || d(e));
            a(s), a(i), a(l), a(d);
            o.nO;
            var u = r(175848),
                h = r(276563),
                m = r(166852),
                f = r(450681),
                p = r(575211),
                D = r(456910);
            const _ = ({ excludeReplyUser: e, inReplyToStatus: t, viewerUserId: r }) => {
                    const { retweeted_status: o } = t,
                        { entities: n, unmentioned_user_ids: a, user: s } = o || t,
                        d = o ? o.user : {},
                        i = o ? t.user : {},
                        l = n?.user_mentions || [],
                        c = u.ZP.mergeTaggedUsers(n?.media || []),
                        h = v(o || t) || {},
                        p = { [d.id_str]: d, [i.id_str]: i, [s.id_str]: s, [h.id_str]: h };
                    l.forEach((e) => {
                        p[e.id_str] = e;
                    }),
                        c.forEach(({ name: e, screen_name: t, user_id: r }) => {
                            p[r] = { id_str: r, name: e, screen_name: t };
                        });
                    const D = (e) => {
                            const t = a?.includes(e.id_str),
                                r = e.id_str === s.id_str;
                            return !t || r ? [e.id_str] : [];
                        },
                        _ = (0, m.Z)((0, f.Z)([...D(d), ...D(i), s.id_str, ...l.flatMap((e) => D(e)), ...c.map((e) => e.user_id)])).filter((e) => e !== r);
                    let C = r && s.id_str === r ? [r, ..._] : _;
                    return e && (C = C.filter((e) => e !== s.id_str)), C.map((e) => p[e]);
                },
                v = ({ card: e }) => {
                    let t = null;
                    if (e) {
                        const r = h.default.getBindingValue(e.binding_values, "site");
                        r && e.users && (t = e.users[r.id_str]);
                    }
                    return t;
                },
                C =
                    ({ maxNumberOfMedia: e, mixedMediaUploadEnabled: t = !1 }) =>
                    (r) => {
                        if (0 === r.length) return !0;
                        if (t) {
                            return r.length <= e;
                        }
                        const o = r.some((e) => !!e.externalMediaDetails),
                            a = !o && r.some((e) => e.mediaFile && e.mediaFile.isGif),
                            s = r.some((e) => e.mediaFile && !(e.mediaFile instanceof n.ZP) && e.mediaFile.isVideo);
                        if (a || o || s) return 1 === r.length;
                        {
                            const t = r.length <= e,
                                o = r.every((e) => e.mediaFile && e.mediaFile.isImage);
                            return t && o;
                        }
                    },
                E = (e, t = !1, r = o.nO) => C({ mixedMediaUploadEnabled: t, maxNumberOfMedia: r })(e),
                M = (e, t = !1) => {
                    const r = e.split(p.V.WordBoundary);
                    return (
                        t && r.pop(),
                        !!r.find((e) => {
                            const t = (0, D.bR)(e, "compose");
                            return t && "users" === t.result_type;
                        })
                    );
                };
        },
        103335: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(856674);
            const n = (e, t) => [e, t].sort(o.ZP).join("-");
        },
        511985: (e, t, r) => {
            r.d(t, { AD: () => o, Qy: () => a, _f: () => s, zH: () => n });
            const o = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                n = 500,
                a = (e) => Object.values(o).indexOf(e) >= 0,
                s = (e, t) => ("boolean" == typeof e ? e : t);
        },
        965728: (e, t, r) => {
            r.d(t, { C_: () => _, I5: () => f, K2: () => D, L$: () => l, Rb: () => p, nk: () => m, sI: () => E, xr: () => v });
            var o = r(202784),
                n = r(483677),
                a = r(782578),
                s = r(393058),
                d = r(521514);
            const i = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                l = (e) => {
                    const t = e && n.Z.getForGallery(e);
                    return t ? { rgb: v(t), rgba: i(t, 0.9) } : h;
                },
                c = d.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                m = { transitionProperty: "background-color", transitionDuration: ".5s" },
                f = (e, t) => {
                    const { containerHeight: r, containerWidth: o, mediaHeight: n, mediaWidth: s } = e,
                        d = s && n ? s / n : 1,
                        i = d > 1,
                        l = t ? 400 : c,
                        h = i && s <= l ? u(o, l) : o,
                        m = !i && n <= l ? u(r, l) : r;
                    return a.Z.getContainDimensions({ width: h, height: m }, d);
                },
                p = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return l(t);
                },
                D = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return l(t);
                },
                _ = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return l(t);
                },
                v = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                C = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload?.isZoomed, showControls: !t.payload?.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                E = () => {
                    const [e, t] = o.useReducer(C, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            s.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        988566: (e, t, r) => {
            r.d(t, { D$: () => d, Du: () => c, GK: () => l, Iv: () => h, pz: () => m, rl: () => u });
            var o = r(202784),
                n = r(688715),
                a = r(946409),
                s = r(788993);
            const d = (e, t, r) => (e.retweeted_status ? i(e, t) : e.community_id_str && r ? l(e, r) : void 0),
                i = (e, t) => {
                    if (e.retweeted_status) return { contextType: s.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                l = (e, t) => ({ contextType: s.Z.Community, landingUrl: { url: (0, n.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                c = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: r }) => {
                    if (t?.topicContext) {
                        const o = t.topicContext;
                        return { contextType: e ? s.Z.TextOnly : s.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${o.topicId}`, urlType: "DeepLink" }, text: r?.name, topicContext: o };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                u = (e) => {
                    const { contextType: t, landingUrl: r, text: o } = e;
                    return { link: r ? (0, a.s9)(r) : void 0, text: o, contextType: t };
                },
                h = { contextType: s.Z.Pin, text: "" },
                m = o.createContext(void 0);
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
        988823: (e, t, r) => {
            r.d(t, { M: () => s });
            var o = r(807896),
                n = r(202784),
                a = r(190286);
            const s = (e) => (t) => {
                const [r, s] = n.useState(null),
                    d = (e) =>
                        new Promise((t, r) => {
                            s({ resolve: t, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: t, resolve: d } = r;
                    return n.createElement(
                        a.Z,
                        (0, o.Z)({}, e, {
                            onCancel: () => {
                                t(), s(null);
                            },
                            onConfirm: () => {
                                d(), s(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, o.Z)({}, t, { confirm: d }));
            };
        },
        296196: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    GLOBAL_STATE_KEY: () => p.Yf,
                    acceptConversation: () => a.tF,
                    addAvatarMedia: () => a._D,
                    addParticipants: () => a.ck,
                    addRecentSearches: () => A,
                    addWelcomeMessageToConversation: () => a.Qe,
                    clearRecentSearch: () => R,
                    clearRecentSearches: () => x,
                    clearSearchCache: () => M,
                    default: () => N,
                    deleteConversations: () => a.S9,
                    disableMentionNotifications: () => a.BW,
                    disableNotifications: () => a.dq,
                    enableMentionNotifications: () => a.Ap,
                    enableNotifications: () => a.PZ,
                    fetchConversation: () => a.Um,
                    fetchConversationFromParticipants: () => a.sS,
                    fetchConversationFuture: () => a.OW,
                    fetchConversationHistoricalSnapshot: () => a.wm,
                    fetchConversationHistory: () => a.Be,
                    fetchConversationIfNeeded: () => a.sA,
                    fetchInbox: () => d.oH,
                    fetchInboxIfNeeded: () => d.C2,
                    fetchPermissions: () => a.qg,
                    fetchTrustedInboxHistory: () => d.vC,
                    fetchUntrustedInboxHistory: () => d.kK,
                    fetchUntrustedLowQualityInboxHistory: () => d.j7,
                    fetchUpdates: () => T.f9,
                    fetchUpdatesIfNeeded: () => T.hd,
                    leaveConversation: () => a.qH,
                    markAllAsRead: () => a.SF,
                    markConversationRead: () => a.v3,
                    markSpamStatus: () => s.kv,
                    muteDMUser: () => a.sj,
                    removeAvatarMedia: () => a.Xw,
                    removeConversation: () => a.Ae,
                    removeEntry: () => s.MY,
                    searchConversations: () => Z,
                    selectConversation: () => a.xu,
                    selectConversationAvatarMediaId: () => a.aG,
                    selectConversationAvatarMediaIsUploading: () => a.W,
                    selectConversationAvatarMediaUploadProgress: () => a.UA,
                    selectConversationFetchStatus: () => a.Pr,
                    selectConversationIdsByInbox: () => d.g4,
                    selectConversationIsLoaded: () => a.gQ,
                    selectConversationIsRead: () => a.jT,
                    selectConversations: () => a.FS,
                    selectEntries: () => s.gm,
                    selectEntriesForConversation: () => s.iN,
                    selectEntry: () => s.WK,
                    selectFetchStatus: () => d.UD,
                    selectHasConversations: () => a.ax,
                    selectInboxCursor: () => d.Pt,
                    selectInboxIsLoaded: () => d.MB,
                    selectInboxTypeByConversation: () => a.Zg,
                    selectIsLoadingTop: () => d.xS,
                    selectLabelledConversationIds: () => d.Z3,
                    selectLastSeenEventIds: () => d.B7,
                    selectPinnedConversationIds: () => d.Kf,
                    selectRecentSearches: () => w,
                    selectRecipientCanNotDm: () => a.OF,
                    selectSearchConversations: () => g,
                    selectSearchFetchStatus: () => I,
                    selectUnreadCount: () => d.Sb,
                    selectUntrustedConversationCount: () => d.Oq,
                    selectUntrustedCounts: () => d.Re,
                    selectUntrustedCursor: () => d.aB,
                    selectUntrustedLowQualityConversationCount: () => d.ZI,
                    selectUntrustedLowQualityCursor: () => d.Gk,
                    selectUntrustedUnreadCount: () => d.k5,
                    selectUpdates: () => T.o8,
                    setConversationAvatar: () => a.X5,
                    toggleNotifications: () => a.$S,
                    unmuteDMUser: () => a.GP,
                    updateConversationAvatar: () => a.nI,
                    updateConversationName: () => a.FI,
                    updateConversationReadState: () => a.d0,
                    updateLastSeenEventId: () => d.kL,
                    updateTrustedLastSeenEventId: () => d.$7,
                    updateTyping: () => a.lT,
                    updateUntrustedLastSeenEventId: () => d.A4,
                });
            var o = r(118717),
                n = r(499627),
                a = r(613195),
                s = r(627279),
                d = r(720277),
                i = (r(136728), r(468811)),
                l = r.n(i),
                c = r(948322),
                u = r(917799),
                h = r(312771),
                m = r(390387),
                f = r(849585),
                p = r(147143);
            const D = "rweb.recentDMSearches",
                _ = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                v = "rweb/directMessages/ADD_RECENT_SEARCHES",
                C = (e) => ({ payload: e, type: v }),
                E = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                M = () => ({ type: E }),
                y = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                P = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                S = { searchResults: {}, recentSearches: [] };
            function b(e = S, t) {
                if (!t) return e;
                switch (t.type) {
                    case v:
                    case y:
                        return { ...e, recentSearches: t.payload || [] };
                    case P:
                        return { ...e, recentSearches: [] };
                    case _.REQUEST: {
                        const { fetchNextPage: r, preserveResults: o, query: n } = t.meta || {},
                            a = e.searchResults ? e.searchResults[n] : {},
                            s = { ...e.searchResults, [n]: { ...a, fetchStatus: o || r ? a?.fetchStatus : h.ZP.LOADING } };
                        return { ...e, searchResults: s };
                    }
                    case _.FAILURE: {
                        const { fetchNextPage: r, preserveResults: o, query: n } = t.meta || {},
                            a = e.searchResults ? e.searchResults[n] : {},
                            s = { ...e.searchResults, [n]: { ...a, fetchStatus: o || r ? a?.fetchStatus : h.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: s };
                    }
                    case _.SUCCESS: {
                        const { query: r } = t.meta || {},
                            o = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: n, error: a } = o || {},
                            s = o?.conversationIds ? o.conversationIds : n ? Object.keys(n) : [],
                            d = e.searchResults ? e.searchResults[r] : {},
                            i = d?.conversationIds || [],
                            l = i.length && s ? i.concat(s.filter((e) => !i.includes(e))) : s,
                            c = { ...e.searchResults, [r]: { ...d, lastCursor: o?.cursor, conversationIds: l, error: a, fetchStatus: h.ZP.LOADED } };
                        return { ...e, searchResults: c };
                    }
                    case E:
                    case f.t:
                        return { ...S, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const w = (e) => e[p.Yf].search?.recentSearches,
                I = (e, t) => {
                    const r = e[p.Yf].search?.searchResults;
                    if (r) {
                        const e = r[t];
                        return e?.fetchStatus || h.ZP.NONE;
                    }
                    return h.ZP.NONE;
                },
                g = (e, t) => {
                    const r = e[p.Yf].search?.searchResults;
                    return (r && r[t]?.conversationIds) || [];
                },
                Z =
                    (e) =>
                    (t, r, { api: o }) => {
                        const n = r(),
                            { fetchNextPage: a, preserveResults: s, query: i } = e || {},
                            h = { query: i, search_type: "conversations", request_id: l().v4() },
                            m = ((e, t) => {
                                const r = e[p.Yf].search?.searchResults;
                                return (r && r[t]?.lastCursor) || null;
                            })(n, i),
                            f = ((e) => e[p.Yf].search?.searchResults)(n),
                            D = f ? f[i] : void 0,
                            v = !!m;
                        m && i && a && (h.cursor = m);
                        const C = u._O(t, { params: h, request: o.withEndpoint(c.Z).search }),
                            E = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: r } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, d.s0)({ conversations: t, users: r }) : null;
                                }
                            };
                        return !D || D?.error || s || (a && v) ? C({ actionTypes: _, context: "SEARCH", meta: { query: h.query, cursor: h.cursor, preserveResults: s, fetchNextPage: a } }, E) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: D }, meta: { query: i, cursor: m } }), Promise.resolve());
                    },
                A =
                    (e) =>
                    (t, r, { featureSwitches: o, userPersistence: n }) => {
                        const a = o.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return n.get(D).then((r) => {
                            const o = r?.recentSearches || [];
                            return !o.includes(e) && o.push(e), o.length > a && o.shift(), t(C(o)), n.set(D, { recentSearches: o });
                        });
                    },
                R =
                    (e) =>
                    (t, r, { userPersistence: o }) =>
                        o.get(D).then((r) => {
                            const n = r?.recentSearches || [];
                            return n.splice(n.indexOf(e), 1), t({ payload: n, type: y }), o.set(D, { recentSearches: n });
                        }),
                x =
                    () =>
                    (e, t, { userPersistence: r }) => (e({ type: P }), r.set(D, { recentSearches: [] }));
            n.Z.register(
                { [p.Yf]: b },
                () =>
                    (e, t, { userPersistence: r }) =>
                        m.Qb(t())
                            ? Promise.resolve(
                                  r.get(D).then((t) => {
                                      const r = t?.recentSearches;
                                      r && e(C(r));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var T = r(923965);
            const k = (0, o.UY)({ conversations: a.ZP, entries: s.ZP, inbox: d.ZP, search: b, updates: T.ZP });
            n.Z.register({ [p.Yf]: k });
            const N = k;
        },
        947650: (e, t, r) => {
            r.d(t, { Hq: () => C, c1: () => p, lP: () => _, og: () => D });
            var o = r(745123),
                n = r(961104),
                a = r(499627),
                s = r(917799),
                d = r(56519),
                i = r(919022);
            const l = "knownFollowers",
                c = `rweb/${l}`,
                u = [],
                h = (0, s.dg)(c, "FETCH_KNOWN_FOLLOWERS"),
                m = {};
            a.Z.register({
                [l]: function (e = m, t) {
                    if (!t) return e;
                    if (t.type === h.SUCCESS) {
                        const r = t.payload || {},
                            { total_count: o, users: n } = r && r.result,
                            { user_id: a } = t.meta || {};
                        return a ? { ...e, [a]: { knownFollowersCount: o, knownFollowerIds: n } } : e;
                    }
                    return e;
                },
            });
            const f = (e, t) => e[l][t],
                p = (e, t) => {
                    if (t) {
                        const r = v(e, t);
                        return (0, n.b)(i.ZP.selectMany(e, r), (e) => !!e);
                    }
                    return u;
                },
                D = (e, t) => p(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                _ = (e, t) => {
                    let r;
                    if (t) {
                        const o = f(e, t);
                        r = o?.knownFollowersCount;
                    }
                    return r;
                },
                v = (e, t) => {
                    const r = f(e, t);
                    return r?.knownFollowerIds || u;
                },
                C =
                    (e) =>
                    (t, r, { api: n }) =>
                        void 0 !== _(r(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, r, { api: n }) =>
                                          (0, s._O)(t, { request: n.withEndpoint(o.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: h, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, d.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        465814: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(502909),
                n = r(600823);
            const a = { ...(0, o.ZP)({ namespace: "legacyAndUnifiedCards" }) },
                s = n.Z.register(a);
        },
        694180: (e, t, r) => {
            r.d(t, { cM: () => D, dS: () => p, iY: () => _ });
            var o = r(370751),
                n = r(399896),
                a = r(663550),
                s = r(499627),
                d = r(917799);
            const i = {},
                l = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, o.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const f = (e, t) => !!e.promotedContent[t],
                p =
                    (e) =>
                    (t, r, { api: o }) => {
                        const { event: a, impression_id: s, promoted_trend_id: i } = e,
                            c = `trend-${i}-${a}`;
                        if (h.has(a) && f(r(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: a, impression_id: s };
                        return (0, d._O)(t, { params: u, request: o.withEndpoint(n.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(a)) return [m(c)];
                        });
                    },
                D =
                    ({ disclosureType: e, itemId: t, itemType: r, params: o }) =>
                    (a, s, { api: i }) => {
                        const { event: c, impression_id: h } = o,
                            p = `${r}-${t ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && f(s(), p)) return Promise.resolve();
                        const D = e && "earned" === e.toLowerCase() ? "1" : null,
                            _ = { ...o, earned: D, epoch_ms: Date.now() };
                        return (0, d._O)(a, { params: _, request: i.withEndpoint(n.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: _ }, (e, t) => {
                            if (!t && u.has(c)) return [m(p)];
                        });
                    },
                _ =
                    (e) =>
                    (t, r, { api: o }) =>
                        (0, d._O)(t, { params: e, request: o.withEndpoint(n.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = i, t) {
                    if (!t) return e;
                    if (t.type === c) {
                        if (!t.payload) return e;
                        const { eventKey: r } = t.payload;
                        return { ...e, [r]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, t, r) => {
            r.d(t, { r: () => l });
            r(136728);
            var o = r(161821),
                n = r(390387),
                a = r(836255),
                s = r(255117),
                d = r(166506),
                i = r(919022);
            const l =
                (e, t) =>
                (r, l, { api: c, featureSwitches: u }) =>
                    r(i.ZP.mute(e, t)).then(() => {
                        const t = l(),
                            i = (0, o.Z)(a.Z.selectAll(t)).reduce((r, o) => {
                                if (null != o)
                                    if (o.user === e) r[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const n = a.Z.select(t, o.retweeted_status);
                                        n?.user === e && (r[o.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            c = (0, n._h)(l()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(i), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(i)] : [],
                            h = (0, d.k9)();
                        if (h.selectInitialFetchStatus(t) && !h.selectCanRefresh(t)) {
                            const r = (0, d.f8)(e, t, h);
                            r && u.push(r);
                        }
                        return r(u);
                    });
        },
        818581: (e, t, r) => {
            r.d(t, { kQ: () => m, xQ: () => f });
            var o = r(226395),
                n = r(499627),
                a = r(917799),
                s = r(312771),
                d = r(390387);
            const i = `${r(291020).Y}/user_preferences`,
                l = `rweb/${i}`,
                c = a.dg(l, "FETCH_USER_PREFERENCES"),
                u = { userPreferences: {}, error: null, fetchStatus: s.ZP.NONE };
            function h(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.REQUEST:
                        return { ...e, fetchStatus: s.ZP.LOADING };
                    case c.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: s.ZP.FAILED };
                    case c.SUCCESS:
                        return { ...e, userPreferences: t.payload.user_preferences, error: null, fetchStatus: s.ZP.LOADED };
                    default:
                        return e;
                }
            }
            n.Z.register({ [i]: h });
            const m = (e) => e[i].userPreferences,
                f = () => (e, t) => (t()[i].fetchStatus === s.ZP.LOADED ? Promise.resolve() : e(p())),
                p =
                    () =>
                    (e, t, { api: r }) => {
                        const n = d.x0(t());
                        return a._O(e, { params: { userId: n }, request: r.withEndpoint(o.Z).fetchUserPreferences })({ actionTypes: c, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        977154: (e, t, r) => {
            r.d(t, { H$: () => u, ZP: () => l, m: () => c, qk: () => h });
            var o = r(403911),
                n = r(750085),
                a = r(555875),
                s = r(218951);
            const d = "bookmarks",
                i = (0, s.Z)({ timelineId: d, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: n.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                l = i,
                c = (e) => (0, s.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: n.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                u =
                    () =>
                    (e, t, { api: r, featureSwitches: n }) =>
                        r
                            .withEndpoint(o.Z)
                            .deleteAll()
                            .then(() => e(i.deleteTimeline())),
                h = a.CG.bind(null, d);
        },
        166506: (e, t, r) => {
            r.d(t, { du: () => c, f8: () => u, k9: () => l });
            var o = r(503768),
                n = r(750085),
                a = r(962741),
                s = r(466015),
                d = r(919022),
                i = r(218951);
            const l = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (t, r) => {
                    const o = r();
                    t(
                        e
                            .selectEntries(o)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    r = d.ZP.select(o, t);
                                return r && !r.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, r) => {
                    if (!r.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, s.OD)(e),
                            o = (0, s.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(o);
                    }
                };
        },
        127218: (e, t, r) => {
            r.d(t, { C: () => _ });
            var o = r(202784),
                n = r(614983),
                a = r.n(n),
                s = r(437429),
                d = r.n(s),
                i = r(57074),
                l = r.n(i),
                c = r(10622),
                u = r.n(c),
                h = r(585488),
                m = r(71620),
                f = r(163889),
                p = r(312771),
                D = r(535338);
            function _(e, t, r) {
                const [n, s] = o.useState(!1),
                    [i, c] = o.useState(null),
                    _ = d()(),
                    v = l()(t),
                    C = (0, m.po)(),
                    E = (0, D.p)(e, v, r);
                return o.useMemo(() => {
                    const t = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    a()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: r, previous_cursor: o } =
                            (function (e, t) {
                                try {
                                    a()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let r = e;
                                    for (const e of t) a()(!!r, "The provided path is invalid."), a()("string" == typeof e, "Unexpected value for path!"), (r = r?.[e]);
                                    return r;
                                } catch (e) {
                                    return void (0, f.ZP)(e.message);
                                }
                            })(E, t) || {},
                        d = (t) => {
                            n ||
                                (s(!0),
                                u()(_, e, { ...v, cursor: t }).subscribe({
                                    complete: () => {
                                        s(!1);
                                    },
                                    error: (e) => {
                                        s(!1), c(e), C(e);
                                    },
                                }));
                        },
                        l = () => {
                            r && d(r);
                        },
                        m = () => {
                            o && d(o);
                        },
                        D = () => {
                            d(void 0);
                        };
                    return i ? { subsequentFetchStatus: p.ZP.FAILED, error: i, fetchNext: l, fetchPrevious: m, refetch: D, data: E, hasNext: Boolean(r), hasPrevious: Boolean(o) } : { subsequentFetchStatus: n ? p.ZP.LOADING : p.ZP.NONE, error: void 0, fetchNext: l, fetchPrevious: m, refetch: D, data: E, hasNext: Boolean(r), hasPrevious: Boolean(o) };
                }, [e, E, n, i, _, v, C]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-e4e3d8bb.8bafc9ca.js.map
