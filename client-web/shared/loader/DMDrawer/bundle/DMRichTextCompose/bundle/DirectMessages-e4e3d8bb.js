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
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
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
                const { id_str: r, screen_name: o } = e,
                    a = (0, s().d78131b9)({ screenName: o });
                return { Icon: n.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: t };
            };
        },
        847607: (e, t, r) => {
            r.d(t, { Aq: () => u, FK: () => D, GS: () => d, N1: () => m, PY: () => h, X6: () => E, cm: () => i });
            r(202784);
            var o = r(111677),
                s = r.n(o),
                n = r(391366),
                a = r(40904);
            const d = s().hb568af4,
                i = s().bb1cbeb6,
                c = (s().h2f62206, s().e67b2d65),
                l = s().f05597b3,
                u = (e) => c({ screenName: e }),
                h = (e) => l({ screenName: e }),
                m = (e, t, r) => {
                    const { muting: o, screen_name: s } = e;
                    return { text: o ? h(s) : u(s), onClick: o ? r : t, Icon: o ? n.default : a.default };
                },
                p = s().h59f52ee,
                f = s().eea0cbee,
                _ = s().i29533b3,
                v = s().h129c3c3,
                D = (e) => (e ? ((e) => _({ screenName: e }))(e) : p),
                E = (e) => (e ? ((e) => v({ screenName: e }))(e) : f);
        },
        417714: (e, t, r) => {
            r.d(t, { l: () => l });
            r(202784);
            var o = r(111677),
                s = r.n(o),
                n = r(224823);
            const a = s().b3036480,
                d = s().b3036480,
                i = s().e68b09b4,
                c = s().h27b7407,
                l = ({ removeFollowerAction: e, user: t }) => {
                    const r = u(t);
                    return { Icon: n.default, text: a, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: d, label: i, text: c({ screenName: e.screen_name }) });
        },
        518966: (e, t, r) => {
            r.d(t, { h: () => i });
            var o = r(111677),
                s = r.n(o),
                n = r(615656);
            const a = s().ef504d80,
                d = s().cef96d5a,
                i = { defaultToast: { text: s().b2542f56 }, [n.ZP.DuplicateBookmark]: { toast: { text: d } }, [n.ZP.ProtectedTweetBookmarkError]: { toast: { text: a } }, showToast: !0 };
        },
        499456: (e, t, r) => {
            r.d(t, { f: () => c });
            var o = r(111677),
                s = r.n(o),
                n = r(615656),
                a = r(51525);
            const d = s().f58dff34,
                i = s().ad5a8e8e,
                c = { [n.ZP.MissingParameter]: { toast: (0, a.j)(d) }, [n.ZP.DirectMessageDestroyPermissionsError]: { toast: { text: i } }, showToast: !0 };
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
            r.d(t, { nO: () => o.nO, YT: () => v, yN: () => E, X2: () => C, FI: () => y });
            var o = r(481681),
                s = r(205074);
            function n(e) {
                return (t) => t.some((t) => !!t && e(t));
            }
            const a = (e) => !!e.mediaFile?.isGif,
                d = (e) => !!e.externalMediaDetails,
                i = (e) => !!e.mediaFile?.isImage,
                c = (e) => !(!e.mediaFile?.isVideo || e.mediaFile instanceof s.ZP),
                l = n((e) => a(e) || i(e) || c(e) || d(e));
            n(a), n(i), n(c), n(d);
            o.nO;
            var u = r(175848),
                h = r(276563),
                m = r(166852),
                p = r(450681),
                f = r(575211),
                _ = r(456910);
            const v = ({ excludeReplyUser: e, inReplyToStatus: t, viewerUserId: r }) => {
                    const { retweeted_status: o } = t,
                        { entities: s, unmentioned_user_ids: n, user: a } = o || t,
                        d = o ? o.user : {},
                        i = o ? t.user : {},
                        c = s?.user_mentions || [],
                        l = u.ZP.mergeTaggedUsers(s?.media || []),
                        h = D(o || t) || {},
                        f = { [d.id_str]: d, [i.id_str]: i, [a.id_str]: a, [h.id_str]: h };
                    c.forEach((e) => {
                        f[e.id_str] = e;
                    }),
                        l.forEach(({ name: e, screen_name: t, user_id: r }) => {
                            f[r] = { id_str: r, name: e, screen_name: t };
                        });
                    const _ = (e) => {
                            const t = n?.includes(e.id_str),
                                r = e.id_str === a.id_str;
                            return !t || r ? [e.id_str] : [];
                        },
                        v = (0, m.Z)((0, p.Z)([..._(d), ..._(i), a.id_str, ...c.flatMap((e) => _(e)), ...l.map((e) => e.user_id)])).filter((e) => e !== r);
                    let E = r && a.id_str === r ? [r, ...v] : v;
                    return e && (E = E.filter((e) => e !== a.id_str)), E.map((e) => f[e]);
                },
                D = ({ card: e }) => {
                    let t = null;
                    if (e) {
                        const r = h.default.getBindingValue(e.binding_values, "site");
                        r && e.users && (t = e.users[r.id_str]);
                    }
                    return t;
                },
                E =
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
                C = (e, t = !1, r = o.nO) => E({ mixedMediaUploadEnabled: t, maxNumberOfMedia: r })(e),
                y = (e, t = !1) => {
                    const r = e.split(f.V.WordBoundary);
                    return (
                        t && r.pop(),
                        !!r.find((e) => {
                            const t = (0, _.bR)(e, "compose");
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
        965728: (e, t, r) => {
            r.d(t, { C_: () => v, I5: () => p, K2: () => _, L$: () => c, Rb: () => f, nk: () => m, sI: () => C, xr: () => D });
            var o = r(202784),
                s = r(483677),
                n = r(782578),
                a = r(393058),
                d = r(521514);
            const i = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                c = (e) => {
                    const t = e && s.Z.getForGallery(e);
                    return t ? { rgb: D(t), rgba: i(t, 0.9) } : h;
                },
                l = d.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                m = { transitionProperty: "background-color", transitionDuration: ".5s" },
                p = (e, t) => {
                    const { containerHeight: r, containerWidth: o, mediaHeight: s, mediaWidth: a } = e,
                        d = a && s ? a / s : 1,
                        i = d > 1,
                        c = t ? 400 : l,
                        h = i && (!a || a <= c) ? u(o, c) : o,
                        m = i || (s && !(s <= c)) ? r : u(r, c);
                    return n.Z.getContainDimensions({ width: h, height: m }, d);
                },
                f = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return c(t);
                },
                _ = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return c(t);
                },
                v = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return c(t);
                },
                D = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                E = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                C = () => {
                    const [e, t] = o.useReducer(E, { isZoomed: !1, showControls: !0 });
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
            r.d(t, { D$: () => d, Du: () => l, GK: () => c, Iv: () => h, pz: () => m, rl: () => u });
            var o = r(202784),
                s = r(688715),
                n = r(946409),
                a = r(788993);
            const d = (e, t, r) => (e.retweeted_status ? i(e, t) : e.community_id_str && r ? c(e, r) : void 0),
                i = (e, t) => {
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
                h = { contextType: a.Z.Pin, text: "" },
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
        988823: (e, t, r) => {
            r.d(t, { M: () => a });
            var o = r(807896),
                s = r(202784),
                n = r(190286);
            const a = (e) => (t) => {
                const [r, a] = s.useState(null),
                    d = (e) =>
                        new Promise((t, r) => {
                            a({ resolve: t, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: t, resolve: d } = r;
                    return s.createElement(
                        n.Z,
                        (0, o.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                d(), a(null);
                            },
                        }),
                    );
                }
                return s.createElement(e, (0, o.Z)({}, t, { confirm: d }));
            };
        },
        296196: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    GLOBAL_STATE_KEY: () => f.Yf,
                    acceptConversation: () => n.tF,
                    addAvatarMedia: () => n._D,
                    addParticipants: () => n.ck,
                    addRecentSearches: () => R,
                    addWelcomeMessageToConversation: () => n.Qe,
                    clearRecentSearch: () => x,
                    clearRecentSearches: () => A,
                    clearSearchCache: () => y,
                    default: () => N,
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
                    fetchInbox: () => d.oH,
                    fetchInboxIfNeeded: () => d.C2,
                    fetchPermissions: () => n.qg,
                    fetchTrustedInboxHistory: () => d.vC,
                    fetchUntrustedInboxHistory: () => d.kK,
                    fetchUntrustedLowQualityInboxHistory: () => d.j7,
                    fetchUpdates: () => T.f9,
                    fetchUpdatesIfNeeded: () => T.hd,
                    leaveConversation: () => n.qH,
                    markAllAsRead: () => n.SF,
                    markConversationRead: () => n.v3,
                    markSpamStatus: () => a.kv,
                    muteDMUser: () => n.sj,
                    removeAvatarMedia: () => n.Xw,
                    removeConversation: () => n.Ae,
                    removeEntry: () => a.MY,
                    searchConversations: () => Z,
                    selectConversation: () => n.xu,
                    selectConversationAvatarMediaId: () => n.aG,
                    selectConversationAvatarMediaIsUploading: () => n.W,
                    selectConversationAvatarMediaUploadProgress: () => n.UA,
                    selectConversationFetchStatus: () => n.Pr,
                    selectConversationIdsByInbox: () => d.g4,
                    selectConversationIsLoaded: () => n.gQ,
                    selectConversationIsRead: () => n.jT,
                    selectConversations: () => n.FS,
                    selectEntries: () => a.gm,
                    selectEntriesForConversation: () => a.iN,
                    selectEntry: () => a.WK,
                    selectFetchStatus: () => d.UD,
                    selectHasConversations: () => n.ax,
                    selectInboxCursor: () => d.Pt,
                    selectInboxIsLoaded: () => d.MB,
                    selectInboxTypeByConversation: () => n.Zg,
                    selectIsLoadingTop: () => d.xS,
                    selectLabelledConversationIds: () => d.Z3,
                    selectLastSeenEventIds: () => d.B7,
                    selectPinnedConversationIds: () => d.Kf,
                    selectRecentSearches: () => M,
                    selectRecipientCanNotDm: () => n.OF,
                    selectSearchConversations: () => I,
                    selectSearchFetchStatus: () => g,
                    selectUnreadCount: () => d.Sb,
                    selectUntrustedConversationCount: () => d.Oq,
                    selectUntrustedCounts: () => d.Re,
                    selectUntrustedCursor: () => d.aB,
                    selectUntrustedLowQualityConversationCount: () => d.ZI,
                    selectUntrustedLowQualityCursor: () => d.Gk,
                    selectUntrustedUnreadCount: () => d.k5,
                    selectUpdates: () => T.o8,
                    setConversationAvatar: () => n.X5,
                    toggleNotifications: () => n.$S,
                    unmuteDMUser: () => n.GP,
                    updateConversationAvatar: () => n.nI,
                    updateConversationName: () => n.FI,
                    updateConversationReadState: () => n.d0,
                    updateLastSeenEventId: () => d.kL,
                    updateTrustedLastSeenEventId: () => d.$7,
                    updateTyping: () => n.lT,
                    updateUntrustedLastSeenEventId: () => d.A4,
                });
            var o = r(118717),
                s = r(499627),
                n = r(613195),
                a = r(627279),
                d = r(720277),
                i = (r(136728), r(468811)),
                c = r.n(i),
                l = r(948322),
                u = r(917799),
                h = r(312771),
                m = r(390387),
                p = r(849585),
                f = r(147143);
            const _ = "rweb.recentDMSearches",
                v = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                D = "rweb/directMessages/ADD_RECENT_SEARCHES",
                E = (e) => ({ payload: e, type: D }),
                C = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                y = () => ({ type: C }),
                P = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                S = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                b = { searchResults: {}, recentSearches: [] };
            function w(e = b, t) {
                if (!t) return e;
                switch (t.type) {
                    case D:
                    case P:
                        return { ...e, recentSearches: t.payload || [] };
                    case S:
                        return { ...e, recentSearches: [] };
                    case v.REQUEST: {
                        const { fetchNextPage: r, preserveResults: o, query: s } = t.meta || {},
                            n = e.searchResults ? e.searchResults[s] : {},
                            a = { ...e.searchResults, [s]: { ...n, fetchStatus: o || r ? n?.fetchStatus : h.ZP.LOADING } };
                        return { ...e, searchResults: a };
                    }
                    case v.FAILURE: {
                        const { fetchNextPage: r, preserveResults: o, query: s } = t.meta || {},
                            n = e.searchResults ? e.searchResults[s] : {},
                            a = { ...e.searchResults, [s]: { ...n, fetchStatus: o || r ? n?.fetchStatus : h.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: a };
                    }
                    case v.SUCCESS: {
                        const { query: r } = t.meta || {},
                            o = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: s, error: n } = o || {},
                            a = o?.conversationIds ? o.conversationIds : s ? Object.keys(s) : [],
                            d = e.searchResults ? e.searchResults[r] : {},
                            i = d?.conversationIds || [],
                            c = i.length && a ? i.concat(a.filter((e) => !i.includes(e))) : a,
                            l = { ...e.searchResults, [r]: { ...d, lastCursor: o?.cursor, conversationIds: c, error: n, fetchStatus: h.ZP.LOADED } };
                        return { ...e, searchResults: l };
                    }
                    case C:
                    case p.t:
                        return { ...b, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const M = (e) => e[f.Yf].search?.recentSearches,
                g = (e, t) => {
                    const r = e[f.Yf].search?.searchResults;
                    if (r) {
                        const e = r[t];
                        return e?.fetchStatus || h.ZP.NONE;
                    }
                    return h.ZP.NONE;
                },
                I = (e, t) => {
                    const r = e[f.Yf].search?.searchResults;
                    return (r && r[t]?.conversationIds) || [];
                },
                Z =
                    (e) =>
                    (t, r, { api: o }) => {
                        const s = r(),
                            { fetchNextPage: n, preserveResults: a, query: i } = e || {},
                            h = { query: i, search_type: "conversations", request_id: c().v4() },
                            m = ((e, t) => {
                                const r = e[f.Yf].search?.searchResults;
                                return (r && r[t]?.lastCursor) || null;
                            })(s, i),
                            p = ((e) => e[f.Yf].search?.searchResults)(s),
                            _ = p ? p[i] : void 0,
                            D = !!m;
                        m && i && n && (h.cursor = m);
                        const E = u._O(t, { params: h, request: o.withEndpoint(l.Z).search }),
                            C = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: r } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, d.s0)({ conversations: t, users: r }) : null;
                                }
                            };
                        return !_ || _?.error || a || (n && D) ? E({ actionTypes: v, context: "SEARCH", meta: { query: h.query, cursor: h.cursor, preserveResults: a, fetchNextPage: n } }, C) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: _ }, meta: { query: i, cursor: m } }), Promise.resolve());
                    },
                R =
                    (e) =>
                    (t, r, { featureSwitches: o, userPersistence: s }) => {
                        const n = o.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return s.get(_).then((r) => {
                            const o = r?.recentSearches || [];
                            return !o.includes(e) && o.push(e), o.length > n && o.shift(), t(E(o)), s.set(_, { recentSearches: o });
                        });
                    },
                x =
                    (e) =>
                    (t, r, { userPersistence: o }) =>
                        o.get(_).then((r) => {
                            const s = r?.recentSearches || [];
                            return s.splice(s.indexOf(e), 1), t({ payload: s, type: P }), o.set(_, { recentSearches: s });
                        }),
                A =
                    () =>
                    (e, t, { userPersistence: r }) => (e({ type: S }), r.set(_, { recentSearches: [] }));
            s.Z.register(
                { [f.Yf]: w },
                () =>
                    (e, t, { userPersistence: r }) =>
                        m.Qb(t())
                            ? Promise.resolve(
                                  r.get(_).then((t) => {
                                      const r = t?.recentSearches;
                                      r && e(E(r));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var T = r(923965);
            const k = (0, o.UY)({ conversations: n.ZP, entries: a.ZP, inbox: d.ZP, search: w, updates: T.ZP });
            s.Z.register({ [f.Yf]: k });
            const N = k;
        },
        882122: (e, t, r) => {
            r.d(t, { Hq: () => D, c1: () => p, lP: () => _, og: () => f });
            var o = r(745123);
            var s = r(499627),
                n = r(917799),
                a = r(56519),
                d = r(919022);
            const i = "knownFollowers",
                c = `rweb/${i}`,
                l = [],
                u = (0, n.dg)(c, "FETCH_KNOWN_FOLLOWERS"),
                h = {};
            s.Z.register({
                [i]: function (e = h, t) {
                    if (!t) return e;
                    if (t.type === u.SUCCESS) {
                        const r = t.payload || {},
                            { total_count: o, users: s } = r && r.result,
                            { user_id: n } = t.meta || {};
                        return n ? { ...e, [n]: { knownFollowersCount: o, knownFollowerIds: s } } : e;
                    }
                    return e;
                },
            });
            const m = (e, t) => e[i][t],
                p = (e, t) => {
                    if (t) {
                        const s = v(e, t);
                        return (r = d.ZP.selectMany(e, s)), (o = (e) => !!e), r.filter(o);
                    }
                    var r, o;
                    return l;
                },
                f = (e, t) => p(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                _ = (e, t) => {
                    let r;
                    if (t) {
                        const o = m(e, t);
                        r = o?.knownFollowersCount;
                    }
                    return r;
                },
                v = (e, t) => {
                    const r = m(e, t);
                    return r?.knownFollowerIds || l;
                },
                D =
                    (e) =>
                    (t, r, { api: s }) =>
                        void 0 !== _(r(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, r, { api: s }) =>
                                          (0, n._O)(t, { request: s.withEndpoint(o.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: u, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, a.dP)(t)] : void 0;
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
            r.d(t, { cM: () => _, dS: () => f, iY: () => v });
            var o = r(370751),
                s = r(399896),
                n = r(663550),
                a = r(499627),
                d = r(917799);
            const i = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                l = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([n.dx.IMPRESSION, n.dx.DWELL]),
                h = (0, o.Z)([n.AJ.TREND_VIEW, n.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: l });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, r, { api: o }) => {
                        const { event: n, impression_id: a, promoted_trend_id: i } = e,
                            l = `trend-${i}-${n}`;
                        if (h.has(n) && p(r(), l)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: n, impression_id: a };
                        return (0, d._O)(t, { params: u, request: o.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(n)) return [m(l)];
                        });
                    },
                _ =
                    ({ disclosureType: e, itemId: t, itemType: r, params: o }) =>
                    (n, a, { api: i }) => {
                        const { event: l, impression_id: h } = o,
                            f = `${r}-${t ?? "undefined"}-${h ?? "undefined"}-${l ?? "undefined"}`;
                        if (u.has(l) && p(a(), f)) return Promise.resolve();
                        const _ = e && "earned" === e.toLowerCase() ? "1" : null,
                            v = { ...o, earned: _, epoch_ms: Date.now() };
                        return (0, d._O)(n, { params: v, request: i.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: v }, (e, t) => {
                            if (!t && u.has(l)) return [m(f)];
                        });
                    },
                v =
                    (e) =>
                    (t, r, { api: o }) =>
                        (0, d._O)(t, { params: e, request: o.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = i, t) {
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
                d = r(166506),
                i = r(919022);
            const c =
                (e, t) =>
                (r, c, { api: l, featureSwitches: u }) =>
                    r(i.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            i = (0, o.Z)(n.Z.selectAll(t)).reduce((r, o) => {
                                if (null != o)
                                    if (o.user === e) r[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const s = n.Z.select(t, o.retweeted_status);
                                        s?.user === e && (r[o.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            l = (0, s._h)(c()),
                            u = l ? [(0, a.ZP)({ useLatest: !1, userId: l }).removeTweets(i), (0, a.ZP)({ useLatest: !0, userId: l }).removeTweets(i)] : [],
                            h = (0, d.k9)();
                        if (h.selectInitialFetchStatus(t) && !h.selectCanRefresh(t)) {
                            const r = (0, d.f8)(e, t, h);
                            r && u.push(r);
                        }
                        return r(u);
                    });
        },
        818581: (e, t, r) => {
            r.d(t, { kQ: () => m, xQ: () => p });
            var o = r(226395),
                s = r(499627),
                n = r(917799),
                a = r(312771),
                d = r(390387);
            const i = `${r(291020).Y}/user_preferences`,
                c = `rweb/${i}`,
                l = n.dg(c, "FETCH_USER_PREFERENCES"),
                u = { userPreferences: {}, error: null, fetchStatus: a.ZP.NONE };
            function h(e = u, t) {
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
            s.Z.register({ [i]: h });
            const m = (e) => e[i].userPreferences,
                p = () => (e, t) => (t()[i].fetchStatus === a.ZP.LOADED ? Promise.resolve() : e(f())),
                f =
                    () =>
                    (e, t, { api: r }) => {
                        const s = d.x0(t());
                        return n._O(e, { params: { userId: s }, request: r.withEndpoint(o.Z).fetchUserPreferences })({ actionTypes: l, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        977154: (e, t, r) => {
            r.d(t, { H$: () => u, ZP: () => c, m: () => l, qk: () => h });
            var o = r(403911),
                s = r(750085),
                n = r(555875),
                a = r(218951);
            const d = "bookmarks",
                i = (0, a.Z)({ timelineId: d, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: s.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                c = i,
                l = (e) => (0, a.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: s.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                u =
                    () =>
                    (e, t, { api: r, featureSwitches: s }) =>
                        r
                            .withEndpoint(o.Z)
                            .deleteAll()
                            .then(() => e(i.deleteTimeline())),
                h = n.CG.bind(null, d);
        },
        166506: (e, t, r) => {
            r.d(t, { du: () => l, f8: () => u, k9: () => c });
            var o = r(503768),
                s = r(750085),
                n = r(962741),
                a = r(466015),
                d = r(919022),
                i = r(218951);
            const c = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: s.Z }),
                l = (e) => (t, r) => {
                    const o = r();
                    t(
                        e
                            .selectEntries(o)
                            .filter((e) => {
                                const t = e.type === n.ZP.User ? e.content.id : "",
                                    r = d.ZP.select(o, t);
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
            r.d(t, { C: () => v });
            var o = r(202784),
                s = r(614983),
                n = r.n(s),
                a = r(437429),
                d = r.n(a),
                i = r(57074),
                c = r.n(i),
                l = r(10622),
                u = r.n(l),
                h = r(585488),
                m = r(71620),
                p = r(163889),
                f = r(312771),
                _ = r(535338);
            function v(e, t, r) {
                const [s, a] = o.useState(!1),
                    [i, l] = o.useState(null),
                    v = d()(),
                    D = c()(t),
                    E = (0, m.po)(),
                    C = (0, _.p)(e, D, r);
                return o.useMemo(() => {
                    const t = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
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
                            })(C, t) || {},
                        d = (t) => {
                            s ||
                                (a(!0),
                                u()(v, e, { ...D, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), l(e), E(e);
                                    },
                                }));
                        },
                        c = () => {
                            r && d(r);
                        },
                        m = () => {
                            o && d(o);
                        },
                        _ = () => {
                            d(void 0);
                        };
                    return i ? { subsequentFetchStatus: f.ZP.FAILED, error: i, fetchNext: c, fetchPrevious: m, refetch: _, data: C, hasNext: Boolean(r), hasPrevious: Boolean(o) } : { subsequentFetchStatus: s ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: m, refetch: _, data: C, hasNext: Boolean(r), hasPrevious: Boolean(o) };
                }, [e, C, s, i, v, D, E]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-e4e3d8bb.61f699ca.js.map
