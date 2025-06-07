"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-e4e3d8bb"],
    {
        524084: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(202784),
                n = r(523561),
                s = r(195560);
            const a = (0, n.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, t) => o.createElement(s.Z, { hasError: e, onRetry: t }) });
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
            r.d(t, { d: () => n });
            var o = r(111677);
            const n = r.n(o)().gf5e9ea6;
        },
        916585: (e, t, r) => {
            r.d(t, { k: () => a });
            var o = r(111677),
                n = r.n(o),
                s = r(437358);
            const a = (e, t) => {
                const { id_str: r, screen_name: o } = e,
                    a = (0, n().d78131b9)({ screenName: o });
                return { Icon: s.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: t };
            };
        },
        847607: (e, t, r) => {
            r.d(t, { Aq: () => u, FK: () => v, GS: () => d, N1: () => m, PY: () => h, X6: () => C, cm: () => i });
            r(202784);
            var o = r(111677),
                n = r.n(o),
                s = r(391366),
                a = r(40904);
            const d = n().hb568af4,
                i = n().bb1cbeb6,
                c = (n().h2f62206, n().e67b2d65),
                l = n().f05597b3,
                u = (e) => c({ screenName: e }),
                h = (e) => l({ screenName: e }),
                m = (e, t, r) => {
                    const { muting: o, screen_name: n } = e;
                    return { text: o ? h(n) : u(n), onClick: o ? r : t, Icon: o ? s.default : a.default };
                },
                f = n().h59f52ee,
                p = n().eea0cbee,
                _ = n().i29533b3,
                D = n().h129c3c3,
                v = (e) => (e ? ((e) => _({ screenName: e }))(e) : f),
                C = (e) => (e ? ((e) => D({ screenName: e }))(e) : p);
        },
        417714: (e, t, r) => {
            r.d(t, { l: () => l });
            r(202784);
            var o = r(111677),
                n = r.n(o),
                s = r(224823);
            const a = n().b3036480,
                d = n().b3036480,
                i = n().e68b09b4,
                c = n().h27b7407,
                l = ({ removeFollowerAction: e, user: t }) => {
                    const r = u(t);
                    return { Icon: s.default, text: a, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: d, label: i, text: c({ screenName: e.screen_name }) });
        },
        518966: (e, t, r) => {
            r.d(t, { h: () => i });
            var o = r(111677),
                n = r.n(o),
                s = r(615656);
            const a = n().ef504d80,
                d = n().cef96d5a,
                i = { defaultToast: { text: n().b2542f56 }, [s.ZP.DuplicateBookmark]: { toast: { text: d } }, [s.ZP.ProtectedTweetBookmarkError]: { toast: { text: a } }, showToast: !0 };
        },
        499456: (e, t, r) => {
            r.d(t, { f: () => c });
            var o = r(111677),
                n = r.n(o),
                s = r(615656),
                a = r(51525);
            const d = n().f58dff34,
                i = n().ad5a8e8e,
                c = { [s.ZP.MissingParameter]: { toast: (0, a.j)(d) }, [s.ZP.DirectMessageDestroyPermissionsError]: { toast: { text: i } }, showToast: !0 };
        },
        8448: (e, t, r) => {
            r.d(t, { q: () => a });
            var o = r(615656),
                n = r(613195),
                s = r(51525);
            const a = (e) => ({ [o.ZP.ClientNotPermitted]: { customAction: () => ((0, s.DR)("/messages/", { statusCode: 401 }), (0, n.Ae)(e)) } });
        },
        48886: (e, t, r) => {
            r.d(t, { q: () => n });
            var o = r(111677);
            const n = { defaultToast: { text: r.n(o)().a30b63da }, showToast: !0 };
        },
        349972: (e, t, r) => {
            r.d(t, { j: () => n });
            var o = r(111677);
            const n = { defaultToast: { text: r.n(o)().i14d7a46 }, showToast: !0 };
        },
        860174: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(615656),
                n = r(51525);
            const s = { [o.ZP.FollowError]: { customAction: n.w1 } };
        },
        481681: (e, t, r) => {
            r.d(t, { Bp: () => n, NF: () => o, nO: () => s });
            const o = "send-tweet",
                n = "dismiss-composer",
                s = 4;
        },
        47743: (e, t, r) => {
            r.d(t, { nO: () => o.nO, YT: () => D, yN: () => C, X2: () => E, FI: () => P });
            var o = r(481681),
                n = r(205074);
            function s(e) {
                return (t) => t.some((t) => !!t && e(t));
            }
            const a = (e) => !!e.mediaFile?.isGif,
                d = (e) => !!e.externalMediaDetails,
                i = (e) => !!e.mediaFile?.isImage,
                c = (e) => !(!e.mediaFile?.isVideo || e.mediaFile instanceof n.ZP),
                l = s((e) => a(e) || i(e) || c(e) || d(e));
            s(a), s(i), s(c), s(d);
            o.nO;
            var u = r(175848),
                h = r(276563),
                m = r(166852),
                f = r(450681),
                p = r(575211),
                _ = r(456910);
            const D = ({ excludeReplyUser: e, inReplyToStatus: t, viewerUserId: r }) => {
                    const { retweeted_status: o } = t,
                        { entities: n, unmentioned_user_ids: s, user: a } = o || t,
                        d = o ? o.user : {},
                        i = o ? t.user : {},
                        c = n?.user_mentions || [],
                        l = u.ZP.mergeTaggedUsers(n?.media || []),
                        h = v(o || t) || {},
                        p = { [d.id_str]: d, [i.id_str]: i, [a.id_str]: a, [h.id_str]: h };
                    c.forEach((e) => {
                        p[e.id_str] = e;
                    }),
                        l.forEach(({ name: e, screen_name: t, user_id: r }) => {
                            p[r] = { id_str: r, name: e, screen_name: t };
                        });
                    const _ = (e) => {
                            const t = s?.includes(e.id_str),
                                r = e.id_str === a.id_str;
                            return !t || r ? [e.id_str] : [];
                        },
                        D = (0, m.Z)((0, f.Z)([..._(d), ..._(i), a.id_str, ...c.flatMap((e) => _(e)), ...l.map((e) => e.user_id)])).filter((e) => e !== r);
                    let C = r && a.id_str === r ? [r, ...D] : D;
                    return e && (C = C.filter((e) => e !== a.id_str)), C.map((e) => p[e]);
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
                            s = !o && r.some((e) => e.mediaFile && e.mediaFile.isGif),
                            a = r.some((e) => e.mediaFile && !(e.mediaFile instanceof n.ZP) && e.mediaFile.isVideo);
                        if (s || o || a) return 1 === r.length;
                        {
                            const t = r.length <= e,
                                o = r.every((e) => e.mediaFile && e.mediaFile.isImage);
                            return t && o;
                        }
                    },
                E = (e, t = !1, r = o.nO) => C({ mixedMediaUploadEnabled: t, maxNumberOfMedia: r })(e),
                P = (e, t = !1) => {
                    const r = e.split(p.V.WordBoundary);
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
                n = r.n(o),
                s = r(24949);
            const a = (0, s.wN)(s.PW, n());
        },
        207137: (e, t, r) => {
            r.d(t, { BC: () => c, FI: () => i, Pm: () => a, gO: () => s, zk: () => n });
            const o = () => new Date(Date.now());
            function n(e, t = o()) {
                return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
            }
            function s(e, t = o()) {
                const r = new Date(t);
                return r.setHours(r.getHours() - 24), n(e, r);
            }
            function a(e, t = o()) {
                const r = new Date(t);
                return r.setHours(r.getHours() + 24), n(e, r);
            }
            const d = 6048e5;
            function i(e, t = o()) {
                const r = t - e;
                return r >= 0 && r <= d;
            }
            function c(e, t) {
                const r = new Date();
                return t < r || t < e ? 0 : Math.min(1, (r - e) / (t - e));
            }
        },
        103335: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(856674);
            const n = (e, t) => [e, t].sort(o.ZP).join("-");
        },
        511985: (e, t, r) => {
            r.d(t, { AD: () => o, Qy: () => s, _f: () => a, zH: () => n });
            const o = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                n = 500,
                s = (e) => Object.values(o).indexOf(e) >= 0,
                a = (e, t) => ("boolean" == typeof e ? e : t);
        },
        965728: (e, t, r) => {
            r.d(t, { C_: () => D, I5: () => f, K2: () => _, L$: () => c, Rb: () => p, nk: () => m, sI: () => E, xr: () => v });
            var o = r(202784),
                n = r(483677),
                s = r(782578),
                a = r(393058),
                d = r(521514);
            const i = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                c = (e) => {
                    const t = e && n.Z.getForGallery(e);
                    return t ? { rgb: v(t), rgba: i(t, 0.9) } : h;
                },
                l = d.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                m = { transitionProperty: "background-color", transitionDuration: ".5s" },
                f = (e, t) => {
                    const { containerHeight: r, containerWidth: o, mediaHeight: n, mediaWidth: a } = e,
                        d = a && n ? a / n : 1,
                        i = d > 1,
                        c = t ? 400 : l,
                        h = i && (!a || a <= c) ? u(o, c) : o,
                        m = i || (n && !(n <= c)) ? r : u(r, c);
                    return s.Z.getContainDimensions({ width: h, height: m }, d);
                },
                p = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return c(t);
                },
                _ = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return c(t);
                },
                D = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return c(t);
                },
                v = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                C = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
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
                            a.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        988566: (e, t, r) => {
            r.d(t, { D$: () => d, Du: () => l, GK: () => c, Iv: () => h, pz: () => m, rl: () => u });
            var o = r(202784),
                n = r(688715),
                s = r(946409),
                a = r(788993);
            const d = (e, t, r) => (e.retweeted_status ? i(e, t) : e.community_id_str && r ? c(e, r) : void 0),
                i = (e, t) => {
                    if (e.retweeted_status) return { contextType: a.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                c = (e, t) => ({ contextType: a.Z.Community, landingUrl: { url: (0, n.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                l = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: r }) => {
                    if (t?.topicContext) {
                        const o = t.topicContext;
                        return { contextType: e ? a.Z.TextOnly : a.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${o.topicId}`, urlType: "DeepLink" }, text: r?.name, topicContext: o };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                u = (e) => {
                    const { contextType: t, landingUrl: r, text: o } = e;
                    return { link: r ? (0, s.s9)(r) : void 0, text: o, contextType: t };
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
                n = r(202784),
                s = r(190286);
            const a = (e) => (t) => {
                const [r, a] = n.useState(null),
                    d = (e) =>
                        new Promise((t, r) => {
                            a({ resolve: t, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: t, resolve: d } = r;
                    return n.createElement(
                        s.Z,
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
                return n.createElement(e, (0, o.Z)({}, t, { confirm: d }));
            };
        },
        296196: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    GLOBAL_STATE_KEY: () => p.Yf,
                    acceptConversation: () => s.tF,
                    addAvatarMedia: () => s._D,
                    addParticipants: () => s.ck,
                    addRecentSearches: () => R,
                    addWelcomeMessageToConversation: () => s.Qe,
                    clearRecentSearch: () => x,
                    clearRecentSearches: () => A,
                    clearSearchCache: () => P,
                    default: () => N,
                    deleteConversations: () => s.S9,
                    disableMentionNotifications: () => s.BW,
                    disableNotifications: () => s.dq,
                    enableMentionNotifications: () => s.Ap,
                    enableNotifications: () => s.PZ,
                    fetchConversation: () => s.Um,
                    fetchConversationFromParticipants: () => s.sS,
                    fetchConversationFuture: () => s.OW,
                    fetchConversationHistoricalSnapshot: () => s.wm,
                    fetchConversationHistory: () => s.Be,
                    fetchConversationIfNeeded: () => s.sA,
                    fetchInbox: () => d.oH,
                    fetchInboxIfNeeded: () => d.C2,
                    fetchPermissions: () => s.qg,
                    fetchTrustedInboxHistory: () => d.vC,
                    fetchUntrustedInboxHistory: () => d.kK,
                    fetchUntrustedLowQualityInboxHistory: () => d.j7,
                    fetchUpdates: () => T.f9,
                    fetchUpdatesIfNeeded: () => T.hd,
                    leaveConversation: () => s.qH,
                    markAllAsRead: () => s.SF,
                    markConversationRead: () => s.v3,
                    markSpamStatus: () => a.kv,
                    muteDMUser: () => s.sj,
                    removeAvatarMedia: () => s.Xw,
                    removeConversation: () => s.Ae,
                    removeEntry: () => a.MY,
                    searchConversations: () => Z,
                    selectConversation: () => s.xu,
                    selectConversationAvatarMediaId: () => s.aG,
                    selectConversationAvatarMediaIsUploading: () => s.W,
                    selectConversationAvatarMediaUploadProgress: () => s.UA,
                    selectConversationFetchStatus: () => s.Pr,
                    selectConversationIdsByInbox: () => d.g4,
                    selectConversationIsLoaded: () => s.gQ,
                    selectConversationIsRead: () => s.jT,
                    selectConversations: () => s.FS,
                    selectEntries: () => a.gm,
                    selectEntriesForConversation: () => a.iN,
                    selectEntry: () => a.WK,
                    selectFetchStatus: () => d.UD,
                    selectHasConversations: () => s.ax,
                    selectInboxCursor: () => d.Pt,
                    selectInboxIsLoaded: () => d.MB,
                    selectInboxTypeByConversation: () => s.Zg,
                    selectIsLoadingTop: () => d.xS,
                    selectLabelledConversationIds: () => d.Z3,
                    selectLastSeenEventIds: () => d.B7,
                    selectPinnedConversationIds: () => d.Kf,
                    selectRecentSearches: () => b,
                    selectRecipientCanNotDm: () => s.OF,
                    selectSearchConversations: () => I,
                    selectSearchFetchStatus: () => M,
                    selectUnreadCount: () => d.Sb,
                    selectUntrustedConversationCount: () => d.Oq,
                    selectUntrustedCounts: () => d.Re,
                    selectUntrustedCursor: () => d.aB,
                    selectUntrustedLowQualityConversationCount: () => d.ZI,
                    selectUntrustedLowQualityCursor: () => d.Gk,
                    selectUntrustedUnreadCount: () => d.k5,
                    selectUpdates: () => T.o8,
                    setConversationAvatar: () => s.X5,
                    toggleNotifications: () => s.$S,
                    unmuteDMUser: () => s.GP,
                    updateConversationAvatar: () => s.nI,
                    updateConversationName: () => s.FI,
                    updateConversationReadState: () => s.d0,
                    updateLastSeenEventId: () => d.kL,
                    updateTrustedLastSeenEventId: () => d.$7,
                    updateTyping: () => s.lT,
                    updateUntrustedLastSeenEventId: () => d.A4,
                });
            var o = r(118717),
                n = r(499627),
                s = r(613195),
                a = r(627279),
                d = r(720277),
                i = (r(136728), r(468811)),
                c = r.n(i),
                l = r(948322),
                u = r(917799),
                h = r(312771),
                m = r(390387),
                f = r(849585),
                p = r(147143);
            const _ = "rweb.recentDMSearches",
                D = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                v = "rweb/directMessages/ADD_RECENT_SEARCHES",
                C = (e) => ({ payload: e, type: v }),
                E = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                P = () => ({ type: E }),
                y = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                S = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                g = { searchResults: {}, recentSearches: [] };
            function w(e = g, t) {
                if (!t) return e;
                switch (t.type) {
                    case v:
                    case y:
                        return { ...e, recentSearches: t.payload || [] };
                    case S:
                        return { ...e, recentSearches: [] };
                    case D.REQUEST: {
                        const { fetchNextPage: r, preserveResults: o, query: n } = t.meta || {},
                            s = e.searchResults ? e.searchResults[n] : {},
                            a = { ...e.searchResults, [n]: { ...s, fetchStatus: o || r ? s?.fetchStatus : h.ZP.LOADING } };
                        return { ...e, searchResults: a };
                    }
                    case D.FAILURE: {
                        const { fetchNextPage: r, preserveResults: o, query: n } = t.meta || {},
                            s = e.searchResults ? e.searchResults[n] : {},
                            a = { ...e.searchResults, [n]: { ...s, fetchStatus: o || r ? s?.fetchStatus : h.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: a };
                    }
                    case D.SUCCESS: {
                        const { query: r } = t.meta || {},
                            o = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: n, error: s } = o || {},
                            a = o?.conversationIds ? o.conversationIds : n ? Object.keys(n) : [],
                            d = e.searchResults ? e.searchResults[r] : {},
                            i = d?.conversationIds || [],
                            c = i.length && a ? i.concat(a.filter((e) => !i.includes(e))) : a,
                            l = { ...e.searchResults, [r]: { ...d, lastCursor: o?.cursor, conversationIds: c, error: s, fetchStatus: h.ZP.LOADED } };
                        return { ...e, searchResults: l };
                    }
                    case E:
                    case f.t:
                        return { ...g, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const b = (e) => e[p.Yf].search?.recentSearches,
                M = (e, t) => {
                    const r = e[p.Yf].search?.searchResults;
                    if (r) {
                        const e = r[t];
                        return e?.fetchStatus || h.ZP.NONE;
                    }
                    return h.ZP.NONE;
                },
                I = (e, t) => {
                    const r = e[p.Yf].search?.searchResults;
                    return (r && r[t]?.conversationIds) || [];
                },
                Z =
                    (e) =>
                    (t, r, { api: o }) => {
                        const n = r(),
                            { fetchNextPage: s, preserveResults: a, query: i } = e || {},
                            h = { query: i, search_type: "conversations", request_id: c().v4() },
                            m = ((e, t) => {
                                const r = e[p.Yf].search?.searchResults;
                                return (r && r[t]?.lastCursor) || null;
                            })(n, i),
                            f = ((e) => e[p.Yf].search?.searchResults)(n),
                            _ = f ? f[i] : void 0,
                            v = !!m;
                        m && i && s && (h.cursor = m);
                        const C = u._O(t, { params: h, request: o.withEndpoint(l.Z).search }),
                            E = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: r } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, d.s0)({ conversations: t, users: r }) : null;
                                }
                            };
                        return !_ || _?.error || a || (s && v) ? C({ actionTypes: D, context: "SEARCH", meta: { query: h.query, cursor: h.cursor, preserveResults: a, fetchNextPage: s } }, E) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: _ }, meta: { query: i, cursor: m } }), Promise.resolve());
                    },
                R =
                    (e) =>
                    (t, r, { featureSwitches: o, userPersistence: n }) => {
                        const s = o.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return n.get(_).then((r) => {
                            const o = r?.recentSearches || [];
                            return !o.includes(e) && o.push(e), o.length > s && o.shift(), t(C(o)), n.set(_, { recentSearches: o });
                        });
                    },
                x =
                    (e) =>
                    (t, r, { userPersistence: o }) =>
                        o.get(_).then((r) => {
                            const n = r?.recentSearches || [];
                            return n.splice(n.indexOf(e), 1), t({ payload: n, type: y }), o.set(_, { recentSearches: n });
                        }),
                A =
                    () =>
                    (e, t, { userPersistence: r }) => (e({ type: S }), r.set(_, { recentSearches: [] }));
            n.Z.register(
                { [p.Yf]: w },
                () =>
                    (e, t, { userPersistence: r }) =>
                        m.Qb(t())
                            ? Promise.resolve(
                                  r.get(_).then((t) => {
                                      const r = t?.recentSearches;
                                      r && e(C(r));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var T = r(923965);
            const k = (0, o.UY)({ conversations: s.ZP, entries: a.ZP, inbox: d.ZP, search: w, updates: T.ZP });
            n.Z.register({ [p.Yf]: k });
            const N = k;
        },
        882122: (e, t, r) => {
            r.d(t, { Hq: () => v, c1: () => f, lP: () => _, og: () => p });
            var o = r(745123);
            var n = r(499627),
                s = r(917799),
                a = r(56519),
                d = r(919022);
            const i = "knownFollowers",
                c = `rweb/${i}`,
                l = [],
                u = (0, s.dg)(c, "FETCH_KNOWN_FOLLOWERS"),
                h = {};
            n.Z.register({
                [i]: function (e = h, t) {
                    if (!t) return e;
                    if (t.type === u.SUCCESS) {
                        const r = t.payload || {},
                            { total_count: o, users: n } = r && r.result,
                            { user_id: s } = t.meta || {};
                        return s ? { ...e, [s]: { knownFollowersCount: o, knownFollowerIds: n } } : e;
                    }
                    return e;
                },
            });
            const m = (e, t) => e[i][t],
                f = (e, t) => {
                    if (t) {
                        const n = D(e, t);
                        return (r = d.ZP.selectMany(e, n)), (o = (e) => !!e), r.filter(o);
                    }
                    var r, o;
                    return l;
                },
                p = (e, t) => f(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                _ = (e, t) => {
                    let r;
                    if (t) {
                        const o = m(e, t);
                        r = o?.knownFollowersCount;
                    }
                    return r;
                },
                D = (e, t) => {
                    const r = m(e, t);
                    return r?.knownFollowerIds || l;
                },
                v =
                    (e) =>
                    (t, r, { api: n }) =>
                        void 0 !== _(r(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, r, { api: n }) =>
                                          (0, s._O)(t, { request: n.withEndpoint(o.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: u, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
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
                n = r(600823);
            const s = { ...(0, o.ZP)({ namespace: "legacyAndUnifiedCards" }) },
                a = n.Z.register(s);
        },
        694180: (e, t, r) => {
            r.d(t, { cM: () => _, dS: () => p, iY: () => D });
            var o = r(370751),
                n = r(399896),
                s = r(663550),
                a = r(499627),
                d = r(917799);
            const i = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                l = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                h = (0, o.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: l });
            const f = (e, t) => !!e.promotedContent[t],
                p =
                    (e) =>
                    (t, r, { api: o }) => {
                        const { event: s, impression_id: a, promoted_trend_id: i } = e,
                            l = `trend-${i}-${s}`;
                        if (h.has(s) && f(r(), l)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: s, impression_id: a };
                        return (0, d._O)(t, { params: u, request: o.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(s)) return [m(l)];
                        });
                    },
                _ =
                    ({ disclosureType: e, itemId: t, itemType: r, params: o }) =>
                    (s, a, { api: i }) => {
                        const { event: l, impression_id: h } = o,
                            p = `${r}-${t ?? "undefined"}-${h ?? "undefined"}-${l ?? "undefined"}`;
                        if (u.has(l) && f(a(), p)) return Promise.resolve();
                        const _ = e && "earned" === e.toLowerCase() ? "1" : null,
                            D = { ...o, earned: _, epoch_ms: Date.now() };
                        return (0, d._O)(s, { params: D, request: i.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: D }, (e, t) => {
                            if (!t && u.has(l)) return [m(p)];
                        });
                    },
                D =
                    (e) =>
                    (t, r, { api: o }) =>
                        (0, d._O)(t, { params: e, request: o.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
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
                n = r(390387),
                s = r(836255),
                a = r(255117),
                d = r(166506),
                i = r(919022);
            const c =
                (e, t) =>
                (r, c, { api: l, featureSwitches: u }) =>
                    r(i.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            i = (0, o.Z)(s.Z.selectAll(t)).reduce((r, o) => {
                                if (null != o)
                                    if (o.user === e) r[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const n = s.Z.select(t, o.retweeted_status);
                                        n?.user === e && (r[o.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            l = (0, n._h)(c()),
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
            r.d(t, { kQ: () => m, xQ: () => f });
            var o = r(226395),
                n = r(499627),
                s = r(917799),
                a = r(312771),
                d = r(390387);
            const i = `${r(291020).Y}/user_preferences`,
                c = `rweb/${i}`,
                l = s.dg(c, "FETCH_USER_PREFERENCES"),
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
            n.Z.register({ [i]: h });
            const m = (e) => e[i].userPreferences,
                f = () => (e, t) => (t()[i].fetchStatus === a.ZP.LOADED ? Promise.resolve() : e(p())),
                p =
                    () =>
                    (e, t, { api: r }) => {
                        const n = d.x0(t());
                        return s._O(e, { params: { userId: n }, request: r.withEndpoint(o.Z).fetchUserPreferences })({ actionTypes: l, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        977154: (e, t, r) => {
            r.d(t, { H$: () => u, ZP: () => c, m: () => l, qk: () => h });
            var o = r(403911),
                n = r(750085),
                s = r(555875),
                a = r(218951);
            const d = "bookmarks",
                i = (0, a.Z)({ timelineId: d, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: n.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                c = i,
                l = (e) => (0, a.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: n.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                u =
                    () =>
                    (e, t, { api: r, featureSwitches: n }) =>
                        r
                            .withEndpoint(o.Z)
                            .deleteAll()
                            .then(() => e(i.deleteTimeline())),
                h = s.CG.bind(null, d);
        },
        166506: (e, t, r) => {
            r.d(t, { du: () => l, f8: () => u, k9: () => c });
            var o = r(503768),
                n = r(750085),
                s = r(962741),
                a = r(466015),
                d = r(919022),
                i = r(218951);
            const c = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                l = (e) => (t, r) => {
                    const o = r();
                    t(
                        e
                            .selectEntries(o)
                            .filter((e) => {
                                const t = e.type === s.ZP.User ? e.content.id : "",
                                    r = d.ZP.select(o, t);
                                return r && !r.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, r) => {
                    if (!r.selectEntries(t).find((t) => t.type === s.ZP.User && t.content.id === e)) {
                        const t = (0, a.OD)(e),
                            o = (0, a.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(o);
                    }
                };
        },
        127218: (e, t, r) => {
            r.d(t, { C: () => D });
            var o = r(202784),
                n = r(614983),
                s = r.n(n),
                a = r(437429),
                d = r.n(a),
                i = r(57074),
                c = r.n(i),
                l = r(10622),
                u = r.n(l),
                h = r(585488),
                m = r(71620),
                f = r(163889),
                p = r(312771),
                _ = r(535338);
            function D(e, t, r) {
                const [n, a] = o.useState(!1),
                    [i, l] = o.useState(null),
                    D = d()(),
                    v = c()(t),
                    C = (0, m.po)(),
                    E = (0, _.p)(e, v, r);
                return o.useMemo(() => {
                    const t = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    s()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: r, previous_cursor: o } =
                            (function (e, t) {
                                try {
                                    s()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let r = e;
                                    for (const e of t) s()(!!r, "The provided path is invalid."), s()("string" == typeof e, "Unexpected value for path!"), (r = r?.[e]);
                                    return r;
                                } catch (e) {
                                    return void (0, f.ZP)(e.message);
                                }
                            })(E, t) || {},
                        d = (t) => {
                            n ||
                                (a(!0),
                                u()(D, e, { ...v, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), l(e), C(e);
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
                    return i ? { subsequentFetchStatus: p.ZP.FAILED, error: i, fetchNext: c, fetchPrevious: m, refetch: _, data: E, hasNext: Boolean(r), hasPrevious: Boolean(o) } : { subsequentFetchStatus: n ? p.ZP.LOADING : p.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: m, refetch: _, data: E, hasNext: Boolean(r), hasPrevious: Boolean(o) };
                }, [e, E, n, i, D, v, C]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-e4e3d8bb.77fe5f2a.js.map
