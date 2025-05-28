"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"],
    {
        389597: (e, t, n) => {
            n.d(t, { F: () => r, y: () => a });
            var o = n(163889),
                i = n(414742);
            function a({ exclude_reply_user_ids: e, media_ids: t, thread_tweets: n, ...o }) {
                return { ...o, exclude_reply_user_ids: e ? e.split(",") : [], media_ids: t ? t.split(",") : [], thread_tweets: n?.map(({ media_ids: e, ...t }) => ({ ...t, media_ids: e ? e.split(",") : [] })) };
            }
            const r = (e) => (t, n) => {
                const a = n && n.viewer && n.viewer.draft_list && n.viewer.draft_list.response_data,
                    r = n && n.viewer && !!n.viewer.scheduled_tweet_list && n.viewer.scheduled_tweet_list;
                return !a && !r && ((0, o.ZP)(`GQL: Failed to render ${e} Tweets List`), (0, i.jB)(t));
            };
        },
        873793: (e, t, n) => {
            n.d(t, { G: () => c, c: () => l });
            n(136728);
            var o = n(24949),
                i = n(122375),
                a = n(925873),
                r = n(900783),
                s = n(835305),
                d = n(370751);
            const c = (0, o.P1)([(e) => e.editorState], l);
            function l(e) {
                const t = [],
                    n = [],
                    o = [];
                let c,
                    l = new Set();
                const m = e.getCurrentContent(),
                    f = m.getBlocksAsArray();
                for (const e of f) {
                    switch (e.type) {
                        case i.UP: {
                            const t = a.Z.getAtomicEntity({ block: e, contentState: m });
                            if (!t) continue;
                            const n = y(),
                                i = t.getData();
                            switch (t.type) {
                                case r.Z.INLINE_IMAGE: {
                                    const e = String(i.media_id);
                                    o.push({ index: n, media_id: e });
                                    break;
                                }
                                default:
                                    continue;
                            }
                            continue;
                        }
                        case i.Wo:
                    }
                    const t = e.getCharacterList().toArray();
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e],
                            o = y() + e;
                        if (n.hasStyle(u) !== l.has(u) || n.hasStyle(p) !== l.has(p)) {
                            g();
                            const e = n.getStyle().toArray();
                            (c = { from_index: (h = { from_index: o, richtext_types: e }).from_index, to_index: h.from_index + 1, richtext_types: h.richtext_types }), (l = (0, d.Z)(e));
                        } else c && c.to_index++;
                    }
                    v(e);
                }
                var h;
                let _ = t.join("\n");
                f[f.length - 1].type === i.UP && (_ += "\n");
                const x = { text: _, richtext_options: void 0, media_options: void 0 };
                return n.length && (x.richtext_options = { richtext_tags: n }), o.length && (x.media_options = { inline_media: o }), x;
                function y() {
                    const e = t.join(""),
                        n = t.length;
                    return e.length + n;
                }
                function v(e) {
                    t.push(e.getText()), g();
                }
                function g() {
                    const e = c;
                    if (e?.richtext_types.length) {
                        const t = e.richtext_types.map(s.TV),
                            { from_index: o, to_index: i } = e;
                        n.push({ from_index: o, to_index: i, richtext_types: t });
                    }
                    (c = void 0), (l = new Set());
                }
            }
            const { Bold: u, Italic: p } = s.DraftJS;
        },
        976006: (e, t, n) => {
            n.d(t, { ZP: () => pe, eq: () => ue });
            n(136728);
            var o = n(24949),
                i = n(370751),
                a = n(71620),
                r = n(646522),
                s = n(339110),
                d = n(668214),
                c = n(702166),
                l = n(491963),
                u = n(287578),
                p = n(723819),
                m = n(497294),
                f = n(843138),
                h = n(24546),
                _ = n(390387),
                x = n(38562),
                y = n(88458),
                v = n(936572),
                g = n(601576),
                w = n(137204),
                T = n(632960),
                S = n(122868),
                I = n(836255),
                Z = n(17243),
                E = n(919022),
                P = n(312771),
                C = n(632552);
            function M(e) {
                return e.parentTweetId || (e.isInline ? S.x.homeTimeline : S.x.modal);
            }
            function A(e, t) {
                const n = M(t);
                return T.tS(e, n);
            }
            const D = (e, t) => {
                    const n = M(t);
                    return T.KS(e, n);
                },
                b = (e, t) => {
                    const n = O(e, t),
                        o = se(e, t).communityIdValue || void 0,
                        i = n?.community_id_str || o,
                        a = i ? l.ZP.select(e, i) : void 0;
                    return a ? a.name : void 0;
                },
                k = (e, t) => {
                    const n = M(t);
                    return T.WQ(e, n);
                },
                L = (e, t) => {
                    const n = M(t);
                    return T.Gz(e, n);
                },
                R = (e, t) => {
                    const n = M(t);
                    return T.E_(e, n);
                },
                N = (e) => (t, n) => {
                    const o = ((e, t) => t.location.state)(0, n);
                    return o ? e(o) : void 0;
                },
                U = (e, t) => t.activeUser || E.ZP.selectViewerUser(e),
                V = (e, t) => t.parentTweetId || F(e, t) || B(e, t),
                F = (e, t) => {
                    const {
                        location: { query: n },
                    } = t;
                    return n && "string" == typeof n.in_reply_to ? n.in_reply_to : void 0;
                },
                B = N((e) => e.inReplyToStatusId),
                O = (e, t) => {
                    const n = V(e, t);
                    return n ? I.Z.selectHydrated(e, n) : void 0;
                },
                W = (e, t) => {
                    const n = O(e, t);
                    if (n && n.conversation_id_str) return I.Z.selectHydrated(e, n.conversation_id_str);
                },
                q = (e, t) => t.location.pathname.indexOf("/intent/") > -1,
                G = N((e) => e.hasArticleNudge),
                j = N((e) => e.convoCardData),
                z = N((e) => e.externalMedia),
                H = N((e) => e.externalMediaFiles),
                $ = N((e) => e.previewTweetId),
                J = N((e) => e.defaultText);
            function K(e, t) {
                const n = J(e, t),
                    o = (0, r.Z)(t.location),
                    i = q(0, t),
                    a = ((e, t) => t.location.pathname.indexOf("/compose/post") > -1)(0, t);
                return (i || a) && o ? o : n;
            }
            const Q = N((e) => e.quotedStatusId),
                X = N((e) => e.quotedStatus),
                Y = (e, t) =>
                    ((e, t) => (t.quotedStatus ? t.quotedStatus : X(e, t)))(e, t) ||
                    ((e, t) => {
                        const n = Q(e, t);
                        return n ? I.Z.selectHydratedMemoized(e, n) : void 0;
                    })(e, t),
                ee = N((e) => e.isSelfThreadReply),
                te = N((e) => e.positionCursorAtBeginning),
                ne = N((e) => e.previousTweetId),
                oe = N((e) => e.isLastEdit),
                ie = (e, t) => {
                    const n = ne(e, t);
                    return n ? I.Z.createHydratedSelector(e)(n) : null;
                },
                ae = (0, o.P1)(
                    [
                        (e, t) => {
                            const n = ((e, t) => {
                                const n = ie(e, t),
                                    o = n?.extended_entities?.media?.[0]?.features?.all?.tags;
                                return o ? o.filter((t) => (0, E.K_)(["name"])(e, t.user_id) === P.ZP.LOADED) : [];
                            })(e, t);
                            return E.ZP.selectMany(
                                e,
                                n.map((e) => e.user_id),
                            );
                        },
                    ],
                    (e) => e.map((e) => (0, Z.z4)(e, s.vA.Prefetch)),
                ),
                re = (0, o.P1)(ie, (e) => {
                    const t = e?.extended_entities?.media;
                    return t ? t.map(({ ext_alt_text: e, features: t, id_str: n, media_url_https: o }) => ({ url: o, uploadId: n, altText: e ?? "", mediaTags: t?.all?.tags })) : [];
                }),
                se = (0, o.P1)(
                    ie,
                    (e, t) => T.oN(e, M(t)),
                    w.Ln,
                    (e, t) => T.SJ(e, M(t)),
                    (e, t, n, o) => (e ? (0, C.CB)(e, n, o) : t),
                ),
                de = N((e) => e.promotedContent),
                ce = ({ mediaIds: e, ...t }) => t;
            function le() {
                return (0, o.P1)(A, Y, m.gz, ie, (e, t, n, o) =>
                    e.map((e, a) => {
                        const r = (0, i.Z)(e.mediaIds || []),
                            s = n.filter((e) => r.has(e.id)),
                            d = e.editorStateRaw || ((c = e.text), (l = o?.note_tweet), (u = s), ue(c, l?.richtext_tags, u, l?.inline_media));
                        var c, l, u;
                        return { ...ce(e), media: s, quotedStatus: 0 === a ? t : void 0, editorStateRaw: d };
                    }),
                );
            }
            function ue(e, t, n, o) {
                if (!e) return;
                const i = e.split("\n"),
                    a = (function (e) {
                        const t = [];
                        e?.length &&
                            e.forEach((e) => {
                                e.richtext_types.forEach((n) => {
                                    t.push({ style: n.toUpperCase(), offset: e.from_index, length: e.to_index - e.from_index });
                                });
                            });
                        return t;
                    })(t);
                let r = 0;
                const s = [],
                    d = {};
                return (
                    i.forEach((e) => {
                        const t = r,
                            i = r + e.length,
                            c = (function (e, t, n, o, i, a) {
                                const r = [];
                                return (
                                    n?.forEach((t, n) => {
                                        if (t.index >= i && t.index <= a) {
                                            const i = o?.filter((e) => e.uploadId === t.media_id).pop();
                                            if (i && i.id) {
                                                e[n] = { type: "INLINE_IMAGE", mutability: "IMMUTABLE", data: { media_id: i.id } };
                                                const o = { type: "atomic", text: " ", depth: 0, data: {}, entityRanges: [{ offset: 0, length: 1, key: n }], key: void 0, inlineStyleRanges: [] };
                                                r.push({ block: o, beforeText: t.index !== a });
                                            }
                                        }
                                    }),
                                    r
                                );
                            })(d, 0, o, n, t, i),
                            l = c.filter((e) => e.beforeText),
                            u = c.filter((e) => !e.beforeText),
                            p = (function (e, t, n) {
                                const o = [];
                                return (
                                    e.forEach((e) => {
                                        const i = e.offset,
                                            a = e.offset + e.length;
                                        ((i >= t && i <= n) || (a <= n && a >= t)) && o.push({ style: e.style, offset: Math.max(e.offset - t, 0), length: Math.min(e.length, n - t, n - e.offset) });
                                    }),
                                    o
                                );
                            })(a, t, i),
                            m = { type: "unstyled", text: e || "", depth: void 0, entityRanges: void 0, key: void 0, inlineStyleRanges: p };
                        l.forEach((e) => {
                            s.push(e.block);
                        }),
                            s.push(m),
                            u.forEach((e) => {
                                s.push(e.block);
                            }),
                            (r = i + 1);
                    }),
                    { blocks: s, entityMap: d }
                );
            }
            const pe = (0, d.Z)()
                .propsFromState(() => ({ activeComposerIndex: R, activeUser: U, altTextNudgeType: y.jW, audienceControlsValue: se, composerData: le(), dataSaverMode: x.IX, withEditTweetLimitedMarketPrompt: u.io, excludedRecipients: D, externalMedia: z, externalMediaFiles: H, geoEnabled: x.JJ, hasArticleNudge: G, isLastEdit: oe, inReplyToStatus: O, rootTweet: W, inReplyToStatusId: V, isIntentRoute: q, isSelfThreadReply: ee, isSending: k, isAutoSaving: L, isSuperFollowsCreator: _.WM, positionCursorAtBeginning: te, viewerUser: E.ZP.selectViewerUser, prepopulatedText: K, previewTweetId: $, previousTweetId: ne, previousTweetMedia: re, previousTweetTags: ae, promotedContent: de, scheduledFor: T.R5, selectedCommunityName: b, sendingProgress: T.ZE, convoCardData: j, undoTweetSettings: v.zD, userLanguage: _.VT, quotedStatusId: Q, showGraduatedAccess: p.nQ }))
                .propsFromActions(() => ({ addComposer: T.Bv, addToast: g.fz, createLocalApiErrorHandler: (0, a.zr)("SCREEN_COMPOSE_V2"), deletePreviewTweet: h.Ox, disableEditTweet: I.Z.disableEdit, fetchAltTextPromptPreferenceIfNeeded: y.Xd, fetchAutotaggedLocationIfNeeded: f.Px, fetchTweetIfNeeded: I.Z.fetchOneIfNeeded, fetchUsersIfNeeded: E.ZP.fetchManyIfNeeded, removeComposer: T.$P, resetDraft: T.Es, retweet: I.Z.retweet, schedule: T.Os, draftTweet: T.oI, send: T.lW, updateActiveComposerIndex: T.JC, updateAudienceControlsValue: T.sU, updateConvoCardState: c.dy, setEditTweetLimitedMarketPromptDismissed: u.rS, uploadMedia: m.$i, addMedia: m.rA, processMultipleMedia: m.G$, removeMediaUpload: m.WU, removeToast: g.RS, updateSingleComposer: T.zi, setSingleComposer: T.tD, setActiveParentKey: T.jr, copyDataFromInlineComposerToModalComposer: T.Ol }));
        },
        632552: (e, t, n) => {
            n.d(t, { CB: () => f, Qg: () => p, TT: () => m, of: () => u });
            n(136728);
            var o = n(111677),
                i = n.n(o),
                a = n(459660);
            const r = i().ee69d769,
                s = i().ge8e4a38,
                d = i().d17df548,
                c = i().h735a98e,
                l = i().h3701ffe,
                u = (e) => {
                    const t = e.inReplyToStatus && !e.isSelfThreadReply;
                    return e.isScheduled ? c : e.isEdit ? l : t ? d : e.isThread ? s : r({ verb: "" });
                },
                p = (e, t, n) => () => {
                    if (n) {
                        t.state?.previousPath?.includes(n) && "/compose/post" === t.pathname ? window.scrollTo(0, 0) : e.push(`/i/communities/${n}`, { lockScroll: !0 });
                    } else {
                        const n = t.state?.previousPath?.includes("/home") && "/compose/post" === t.pathname;
                        t.pathname.includes("/home") || n ? window.scrollTo(0, 0) : e.push("/home", { lockScroll: !0 });
                    }
                },
                m = ({ isInline: e, isSelfThreadReply: t, parentTweetId: n }) => (e ? { pathname: "/compose/post", state: { inReplyToStatusId: n, isSelfThreadReply: t } } : void 0),
                f = (e, t, n) => (e?.exclusivity_info ? { _type: "super_followers_exclusive", conversationControlsValue: a.k.super_followers_exclusive, exclusivityControlValue: {} } : e?.community_id_str ? { _type: "community_members", communityIdValue: e.community_id_str, conversationControlsValue: a.k.community_members, broadcast: n } : e?.trusted_friends_info && t?.length ? { _type: "trusted_friends_tweet", conversationControlsValue: a.k.trusted_friends_tweet, trustedFriendsValue: { trusted_friends_list_id: t[0].rest_id } } : { _type: "conversation_controls", conversationControlsValue: e.conversation_control?.policy || a.k.all });
        },
        638873: (e, t, n) => {
            n.d(t, { Z: () => C });
            var o = n(111677),
                i = n.n(o),
                a = n(615656),
                r = n(601576);
            const s = i().i859a9d4,
                d = i().e520f166,
                c = i().c0554ca0,
                l = i().b25c5b2a,
                u = i().cef21114,
                p = i().cf369a0e,
                m = i().cd86efa8,
                f = i().e002f424,
                h = i().c2b4ae8c,
                _ = i().hf05f59e,
                x = i().dffb84c6,
                y = i().d7b21bc8,
                v = i().e4672ac2,
                g = i().he5ecf52,
                w = i().ac78e602,
                T = i().i251c738,
                S = i().ed3ac7ef,
                I = i().e23fe0cc,
                Z = i().ca4514c0,
                E = i().fb4a459c,
                P = i().ca1afa98,
                C = {
                    defaultToast: { text: c },
                    [a.ZP.OverStatusUpdateLimit]: { toast: { text: d, action: { label: s, link: "https://support.twitter.com/articles/15364" } } },
                    [a.ZP.DuplicateStatusError]: { toast: { text: l } },
                    [a.ZP.CurrentUserSuspended]: { toast: { text: u } },
                    [a.ZP.InReplyToTweetNotFound]: { toast: { text: p } },
                    [a.ZP.MentionLimitInTweetExceeded]: { toast: { text: m } },
                    [a.ZP.UrlLimitInTweetExceeded]: { toast: { text: f } },
                    [a.ZP.HashtagLimitInTweetExceeded]: { toast: { text: h } },
                    [a.ZP.CashtagLimitInTweetExceeded]: { toast: { text: _ } },
                    [a.ZP.HashtagLengthLimitInTweetExceeded]: { toast: { text: x } },
                    [a.ZP.AttachmentTypesLimitInTweetExceeded]: { toast: { text: y } },
                    [a.ZP.StatusMalwareError]: { toast: { text: v, action: { label: s, link: "https://support.twitter.com/articles/90491" } } },
                    [a.ZP.StatusTooLongError]: { toast: { text: g } },
                    [a.ZP.GenericBadRequest]: { toast: { text: w } },
                    [a.ZP.InvalidMediaId]: {
                        customAction(e) {
                            const t = e?.message;
                            if (t?.startsWith("Framerate too large")) {
                                const e = t && t.match(/Actual fps: ([\d]+)/),
                                    n = e && e[1];
                                return n ? (0, r.mf)({ text: S({ frameRate: n }) }) : (0, r.mf)({ text: T });
                            }
                            return t?.startsWith("Aspect ratio too large") ? (0, r.mf)({ text: I }) : t?.startsWith("Aspect ratio too small") ? (0, r.mf)({ text: Z }) : t?.startsWith("Duration too short") ? (0, r.mf)({ text: E }) : t?.startsWith("Duration too long") ? (0, r.mf)({ text: P }) : "SKIP";
                        },
                    },
                    showToast: !0,
                };
        },
        646522: (e, t, n) => {
            n.d(t, { U: () => c, Z: () => d });
            var o = n(111677),
                i = n.n(o),
                a = n(744531);
            const r = i().b2e94283,
                s = ["title", "screen_name", "text", "url", "hashtags", "via"],
                d = (e) => {
                    const t = e.state || {},
                        n = e.query || {},
                        [o, i, a, d, c, l] = s.map((e) => t[e] || n[e]),
                        u = [
                            o,
                            i && `@${i.toString()}`,
                            a,
                            d,
                            c &&
                                c
                                    .toString()
                                    .split(",")
                                    .map((e) => `#${e}`)
                                    .join(" "),
                            l && r({ viaScreenName: l }),
                        ]
                            .filter(Boolean)
                            .join(" ");
                    return u ? `${u} ` : void 0;
                },
                c = (e) => (0, a.Z)(e, s);
        },
        429650: (e, t, n) => {
            n.d(t, { Ph: () => l, SP: () => u, SZ: () => c, _2: () => d, m_: () => s, y8: () => r });
            var o = n(733357),
                i = n(908478),
                a = n(319662);
            function r(e, t) {
                const n = e.map((e) => e.uploadId);
                return !(0, i.Z)(n, t || []);
            }
            function s(e) {
                const t = e.mediaIds || [];
                return p(e.text, e.pollActive, t);
            }
            function d(e) {
                return p(e.text, e.pollActive, e.media);
            }
            function c(e, t, n, o) {
                const { media: a, mediaTags: r, text: s } = e,
                    d = s === t,
                    c = (function (e, t, n, o) {
                        const a = e.map((e) => e.uploadId),
                            r = (0, i.Z)(a, n || []),
                            s = (0, i.Z)(
                                t.map((e) => e.id),
                                (o || []).map((e) => e.id),
                            );
                        return r && s;
                    })(a, r, n, o);
                return d && c;
            }
            function l(e) {
                return "conversation_controls" === e._type && "all" === e.conversationControlsValue;
            }
            function u(e, t) {
                const { media: n, pollActive: i, pollValid: r, text: s } = e,
                    d = (0, o.Z)(s),
                    c = n && n.length > 0;
                if (d && c) return !0;
                if (d) return !1;
                const l = (0, a.k)(s, t).valid;
                return Boolean(l && (!i || r));
            }
            function p(e, t, n) {
                const i = !e || (0, o.Z)(e),
                    a = n.length > 0;
                return i && !a && !t;
            }
        },
        349745: (e, t, n) => {
            n.d(t, { BR: () => x, Dp: () => l, TO: () => h, Ul: () => p, WN: () => m, X5: () => c, bJ: () => f, g6: () => v, o3: () => _, vh: () => y });
            var o = n(111677),
                i = n.n(o),
                a = n(370751),
                r = n(184605);
            const s = 18,
                d = "13",
                c = Object.freeze({ CANCELED: "Canceled", COMPLETED: "Completed", DISMISSED: "Dismissed", DRAFT: "Draft", FAILED: "Failed", PENDING: "Pending", SCHEDULED: "Scheduled" });
            function l(e) {
                return {
                    externalMedia: e
                        .map((e) => {
                            const t = e && e.media_info,
                                n = e && e.media_origin,
                                o = e?.sensitive_media_warning
                                    ? (function (e) {
                                          const t = e.sensitive_media_warning;
                                          return (0, a.Z)(Object.keys(t).filter((e) => t[e]));
                                      })(e)
                                    : void 0,
                                i = n
                                    ? (function (e) {
                                          const { id: t, provider: n } = e;
                                          if (t && "giphy" === n) return `https://media.giphy.com/media/${t}/source.gif`;
                                      })(n)
                                    : null,
                                r = e.media_key ? e.media_key.split("_")[1] : void 0,
                                s = !(!e || !e.media_key) && e.media_key.split("_")[0] === d;
                            let c,
                                l = 0;
                            if (t)
                                switch (t.__typename) {
                                    case "ApiImage":
                                        return { url: t.original_img_url, altText: t.alt_text, sensitiveMediaWarning: o, uploadId: r };
                                    case "ApiVideo":
                                        return (
                                            t.variants.forEach((e) => {
                                                const t = (e && e.bit_rate) || 0;
                                                "video/mp4" === e.content_type && t >= l && ((c = e), (l = t));
                                            }),
                                            c ? { url: c.url, isAmplify: s, sensitiveMediaWarning: o, uploadId: r } : null
                                        );
                                    case "ApiGif":
                                        return { url: i || t.variants[0].url, altText: t.alt_text, uploadId: r };
                                    default:
                                        return;
                                }
                        })
                        .filter(Boolean),
                };
            }
            function u(e) {
                return e && (0, r.Z)(e.date.year) && (0, r.Z)(e.date.month) && (0, r.Z)(e.date.day) && (0, r.Z)(e.time.hour) && (0, r.Z)(e.time.minute) ? { date: { year: e.date.year, month: e.date.month, day: e.date.day }, time: { hour: e.time.hour, minute: e.time.minute } } : null;
            }
            function p(e, t) {
                const n = new Date(t.getTime());
                return n.setMonth(n.getMonth() + s), n < e;
            }
            function m(e, t, n) {
                const o = new Date(t.getTime());
                return o.setDate(o.getDate() + n), o < e;
            }
            const f = (e, t) => t >= e;
            function h(e) {
                return null !== u(e);
            }
            function _(e) {
                const t = u(e);
                return t ? new Date(t.date.year, t.date.month - 1, t.date.day, t.time.hour, t.time.minute) : null;
            }
            function x(e) {
                const t = new Date(e);
                return { date: { year: t.getFullYear(), month: t.getMonth() + 1, day: t.getDate() }, time: { hour: t.getHours(), minute: t.getMinutes() } };
            }
            const y = i().aa2aa1a1,
                v = i().d725a289;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f.b0bc457a.js.map
