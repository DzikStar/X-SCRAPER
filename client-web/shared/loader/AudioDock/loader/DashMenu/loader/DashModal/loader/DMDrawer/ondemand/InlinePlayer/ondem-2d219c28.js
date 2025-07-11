"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"],
    {
        503115: (e, t, a) => {
            a.d(t, { Z: () => M });
            var r = a(202784),
                n = a(198506),
                i = a(325686),
                s = a(682474),
                o = a(530732),
                l = a(392237),
                c = a(691108),
                d = a(39623),
                _ = a(530525),
                m = a(439592),
                u = a(992942),
                E = a(823161),
                p = a(310088),
                g = a(111677),
                h = a.n(g),
                C = a(275365);
            const T = l.default.create((e) => ({ circle: { borderRadius: e.borderRadii.infinite, overflow: "hidden" }, container: { height: "auto", width: "100%" }, itemAccessory: { top: -e.spacesPx.space24 + e.spacesPx.space1, end: -e.spacesPx.space16 - e.spacesPx.space1 }, userDecoration: { fontSize: e.fontSizes.subtext3, position: "absolute", backgroundColor: e.colors.gray100, marginStart: e.spaces.space8, boxSizing: "border-box", width: e.spaces.space24, height: e.spaces.space24, fontWeight: e.fontWeights.regular } })),
                S = l.default.create((e) => ({ container: { flexDirection: "row" }, left: { flex: 1 }, right: { flex: 1, marginStart: e.borderWidths.small, marginEnd: `calc(-1 * ${e.borderWidths.small})` } })),
                A = l.default.create((e) => ({ container: { flexDirection: "column" }, top: { flex: 1, marginBottom: e.borderWidths.small }, bottom: { flex: 1 } })),
                O = T,
                f = "DMConversationAvatarBadge",
                N = "MutlipleParticipantAvatarContainer",
                v = h().fd48249b,
                b = ({ left: e, right: t }) => r.createElement(i.Z, { style: S.container }, r.createElement(i.Z, { style: S.left }, e), r.createElement(i.Z, { style: S.right }, t)),
                I = ({ bottom: e, top: t }) => r.createElement(i.Z, { style: A.container }, r.createElement(i.Z, { style: A.top }, t), r.createElement(i.Z, { style: A.bottom }, e)),
                P = (e) => {
                    const t = e.length,
                        a = e.map((e, a) => {
                            const n = 2 === t || (3 === t && 0 === a) ? 0.5 : 1;
                            return e.profile_image_url_https ? r.createElement(i.Z, { key: e.id_str, style: O.container }, r.createElement(E.default, { aspectRatio: n, shape: "none", size: "custom", uri: e.profile_image_url_https })) : null;
                        });
                    if (2 === t) return r.createElement(s.Z, { ratio: 1 }, r.createElement(b, { left: a[1], right: a[0] }));
                    {
                        const e = r.createElement(I, { bottom: a[2], top: a[1] }),
                            t = a[0];
                        return r.createElement(b, { left: e, right: t });
                    }
                },
                y = (e, t) => (e.profile_image_url_https ? r.createElement(i.Z, { key: e.id_str, style: O.container }, r.createElement(E.default, { size: t || E.default.defaultSize, uri: e.profile_image_url_https })) : null);
            function R(e) {
                const { avatar: t, avatarLink: a, badgeCount: n, size: l, withLock: _ } = e,
                    m = [x.lockContainer, "large" === l && x.lockPositionLarge];
                return r.createElement(r.Fragment, null, r.createElement(s.Z, { ratio: 1 }, a ? r.createElement(o.Z, { interactiveStyles: null, link: a, testID: c.Z.conversationAvatar }, t) : t), n ? (({ badgeCount: e }) => r.createElement(i.Z, { style: O.itemAccessory, testID: f }, r.createElement(p.Z, { count: e, standalone: !0, style: O.userDecoration, textColor: "text", truncatedCountFormatter: () => "", unreadCountLabel: v, withTruncatedCount: !1 })))({ badgeCount: n }) : null, _ ? r.createElement(i.Z, { style: m }, r.createElement(d.Z, { size: l })) : null);
            }
            const x = l.default.create((e) => ({ lockContainer: { display: "flex", alignItems: "center", top: -e.spacesPx.space24 + e.spacesPx.space1, end: -e.spacesPx.space16 - e.spacesPx.space1 }, lockPositionLarge: { top: -e.spacesPx.space20 + e.spacesPx.space1, end: -e.spacesPx.space12 - e.spacesPx.space1 } })),
                M = (e) => {
                    const { conversation: t, perspective: a, size: s, withBadge: o, withLock: c } = e;
                    if (t) {
                        const e = t.avatar_image_https,
                            h = (0, n.Z)(t, a)
                                .map(({ user: e }) => e)
                                .slice(0, 3)
                                .map(({ id_str: e, profile_image_url_https: t, screen_name: a }) => ({ id_str: e, profile_image_url_https: t, screen_name: a })),
                            T = t.avatar?.image?.original_info || void 0,
                            S =
                                ((g = T) ? r.createElement(_.Z, { "aria-label": "", aspectMode: m.Z.SQUARE, backgroundColor: l.default.theme.colors.gray50, image: g, rounded: !0 }) : null) ||
                                ((e) => (e ? r.createElement(u.Z, { source: e }) : null))(e) ||
                                ((e, t) => {
                                    const a = e.length;
                                    return 0 === a ? null : 1 === a ? y(e[0], t) : r.createElement(i.Z, { style: O.circle, testID: N }, P(e));
                                })(h, s),
                            A = ((d = t.conversation_id), (E = h), (p = t.type) === C.eD.GROUP ? `/messages/${d}/participants` : (p === C.eD.ONE_TO_ONE || p === C.eD.SECRET_ONE_TO_ONE) && E.length > 0 && E[0].screen_name ? `/${E[0].screen_name}` : void 0),
                            f = o && t?.participants ? t.participants.length - 1 : 0;
                        return S ? r.createElement(R, { avatar: S, avatarLink: A, badgeCount: f, size: s, withLock: c }) : null;
                    }
                    return null;
                    var d, E, p, g;
                };
        },
        39623: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                n = a(325686),
                i = a(392237),
                s = a(121791);
            function o(e) {
                const { size: t } = e;
                return r.createElement(n.Z, { style: [l.circle, "large" === t && l.largeCircle] }, r.createElement(s.default, { style: l.icon }));
            }
            const l = i.default.create((e) => ({ circle: { display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.infinite, borderColor: e.colors.white, borderWidth: e.borderWidths.small, height: e.spaces.space20, width: e.spaces.space20 }, largeCircle: { height: e.spaces.space16, width: e.spaces.space16 }, icon: { color: e.colors.gray700, position: "absolute", height: "80%", width: "80%" } }));
        },
        255534: (e, t, a) => {
            a.d(t, { E: () => A, Z: () => T });
            var r = a(202784),
                n = a(731708),
                i = a(198506),
                s = a(66242),
                o = a(275365),
                l = a(325686),
                c = a(366635),
                d = a(470397),
                _ = a(392237),
                m = a(111677),
                u = a.n(m),
                E = a(593953);
            const p = "DMGroupConversationTitle",
                g = u().b93ba92d,
                h = _.default.create((e) => ({ dmGroup: { display: "flex", flexDirection: "column" }, highlightedTitle: { backgroundColor: e.colors.yellow500 }, messageSearchMiddot: { alignItems: "center" }, messageSearchTitleContainer: { flexDirection: "row" }, title: { maxWidth: "50%" } })),
                C = ({ conversationType: e, highlightingTokens: t = null, isConversationSearchTitle: a = !1, isMessageSearchTitle: i = !1, participants: s, renderAvatarCell: _, renderTimestamp: m, textColor: u = "text", textSize: C, title: T, titleWeight: S = "bold", withParticipantsCount: A = !1, withScreenName: O = !0 }) => {
                    const f = m ? m() : null,
                        [N] = s;
                    if ((e !== o.eD.ONE_TO_ONE && e !== o.eD.SECRET_ONE_TO_ONE) || !N) {
                        const e = s.length,
                            o = T ? (0, E.Y)(t, T) : null,
                            c = T && o?.length ? (0, E.SM)(o, T) : void 0;
                        if (a) return r.createElement(d.Z, { color: u }, r.createElement(n.ZP, { color: u, numberOfLines: 1, size: C, style: h.title, weight: S }, c ? c() : T));
                        const m = r.createElement(n.ZP, { color: u, numberOfLines: 1, size: C, testID: p, weight: S }, T);
                        return !a || i ? r.createElement(l.Z, { style: [h.dmGroup, i && h.messageSearchTitleContainer] }, i && _ ? _() : null, r.createElement(d.Z, { style: i && h.messageSearchMiddot }, m, f), e > 0 && A && r.createElement(n.ZP, { color: "gray700", numberOfLines: 1, size: C }, g({ peopleCount: e }))) : m;
                    }
                    {
                        const e = N.name,
                            n = a ? (0, E.Y)(t, e) : null,
                            s = n?.length ? (0, E.SM)(n, e) : void 0,
                            o = r.createElement(c.Z, { affiliateBadgeInfo: N.highlightedLabel, badgeContext: "account", color: u, isBlueVerified: N.is_blue_verified, isSubscriber: N.subscribed_by, isVerified: N.verified, name: e, nameSize: C, renderUserNameHighlights: s && s, screenName: N.screen_name, verifiedType: N.verified_type, weight: S, withScreenName: O });
                        return !a || i ? r.createElement(l.Z, { style: h.messageSearchTitleContainer }, i && _ ? _() : null, r.createElement(d.Z, { style: i && h.messageSearchMiddot }, o, f)) : o;
                    }
                };
            function T({ conversation: e, highlightingTokens: t = null, isConversationSearchTitle: a = !1, isMessageSearchTitle: o = !1, newConversationParticipants: l, perspective: c, renderAvatarCell: d, renderTimestamp: _, textColor: m = "text", textSize: u, titleWeight: E = "bold", withParticipantsCount: p = !1, withScreenName: g = !0 }) {
                if (e) {
                    const n = e.type,
                        l = (0, i.Z)(e, c).map(({ user: e }) => e),
                        h = a ? (0, s.ZP)(e, c, a) : (0, s.ZP)(e, c, a, 2);
                    return r.createElement(C, { conversationType: n, highlightingTokens: t, isConversationSearchTitle: a, isMessageSearchTitle: o, participants: l, renderAvatarCell: d, renderTimestamp: _, textColor: m, textSize: u, title: h, titleWeight: E, withParticipantsCount: p, withScreenName: g });
                }
                {
                    const e = S(l);
                    return r.createElement(n.ZP, { color: m, numberOfLines: 1, size: u, weight: E }, (0, s.e7)(e, c));
                }
            }
            const S = (e = []) => e.map(({ data: e }) => e),
                A = ({ conversation: e, newConversationParticipants: t, perspective: a }) => {
                    if (e) {
                        if (e.type === o.eD.ONE_TO_ONE || e.type === o.eD.SECRET_ONE_TO_ONE) {
                            const [t] = (0, i.Z)(e, a).map(({ user: e }) => e);
                            return t.name;
                        }
                        return (0, s.ZP)(e, a);
                    }
                    {
                        const e = S(t);
                        return (0, s.e7)(e, a);
                    }
                };
        },
        340130: (e, t, a) => {
            a.d(t, { C7: () => m, EL: () => n, H6: () => _, I4: () => i, NK: () => c, TG: () => l, Yu: () => o, eR: () => d, lt: () => u });
            var r = a(275365);
            const n = "dmSearchSlice",
                i = Object.freeze([r.Cr.MESSAGE_DELETE, r.Cr.REACTION_DELETE, r.Cr.MESSAGE_MARK_AS_SPAM, r.Cr.MESSAGE_MARK_AS_NOT_SPAM, r.Cr.CONVO_METADATA_UPDATE, r.Cr.DISABLE_NOTIFICATIONS, r.Cr.ENABLE_NOTIFICATIONS]),
                s = Object.freeze({ CONVERSATION_CREATE: "ConversationCreate", CONVERSATION_NAME_UPDATE: "ConversationNameUpdate", JOIN_CONVERSATION: "JoinConversation", LAST_MESSAGE_READ_UPDATE: "LastMessageReadUpdate", MESSAGE_CREATE: "MessageCreate", MESSAGE_HIDE: "MessageHide", PARTICIPANTS_JOIN: "ParticipantsJoin", PARTICIPANTS_LEAVE: "ParticipantsLeave", UNKNOWN: "Unknown", WELCOME_MESSAGE_CREATE: "WelcomeMessageCreate" }),
                o = (s.CONVERSATION_NAME_UPDATE, r.Cr.CONVERSATION_NAME_UPDATE, s.JOIN_CONVERSATION, r.Cr.JOIN_CONVERSATION, s.MESSAGE_CREATE, r.Cr.MESSAGE, s.PARTICIPANTS_JOIN, r.Cr.PARTICIPANTS_JOIN, s.PARTICIPANTS_LEAVE, r.Cr.PARTICIPANTS_LEAVE, Object.freeze({ MAX_PINS_REACHED: "max_pins_reached" })),
                l = Object.freeze({ ALL: "all", GROUPS: "groups", PEOPLE: "people", MESSAGES: "messages" }),
                c = Object.freeze({ GROUP: 1, ONE_TO_ONE: 0 }),
                d = Object.freeze({ ALL: "all", CELL_X_BUTTON: "cell_x_button", CONVERSATION_INFO: "conversation_info", DM_TAB: "dm_tab", GLOBAL_SETTINGS_MENU: "global_settings_menu", GROUPS: "groups", MESSAGES: "messages", PEOPLE: "people", REQUEST_ACTION_SHEET: "request_action_sheet", THREE_DOT_MENU: "three_dot_menu" }),
                _ = Object.freeze({ PRIMARY: "primary", REQUEST: "requests", LOW_QUALITY: "low_quality", NOT_AVAILABLE: "not_available" }),
                m = Object.freeze({ CARD: "card", GIF: "gif", NOT_APPLICABLE: "not_applicable", PHOTO: "photo", TEXT: "text", TWEET: "tweet", UNKNOWN: "unknown", VIDEO: "video", VOICE: "voice" }),
                u = Object.freeze({ CONVERSATION: "conversation", MESSAGE: "message" });
        },
        691108: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { conversationAvatar: "DM_Conversation_Avatar", reaction: "DM_Reaction", reactions: "DM_Reactions", reactionUserCell: "DM_Reaction_UserCell", newDM: "NewDM_Button", untrustedThumbnail: "DM_Untrusted_Thumbnail" };
        },
        593953: (e, t, a) => {
            a.d(t, { BB: () => I, FW: () => T, Fb: () => y, KC: () => C, LK: () => v, Ly: () => x, NL: () => D, Qu: () => O, SM: () => S, Ss: () => p, Xx: () => M, Y: () => A, bZ: () => g, dI: () => b, e4: () => N, k2: () => R, oK: () => f, rR: () => h, vg: () => Z, vm: () => P, y9: () => w });
            a(543673), a(240753), a(128399);
            var r = a(202784),
                n = a(310452),
                i = a(354149),
                s = a(688715),
                o = a(166852),
                l = a(450681),
                c = a(7330),
                d = a(704762),
                _ = a(198506),
                m = a(147143),
                u = a(798538),
                E = a(340130);
            const p = (e, t) => t.location && t.location.state && t.location.state.tweetAttachment,
                g = (e, t) => t.location && t.location.state && t.location.state.participants,
                h = (e, t) => t.location && t.location.state && t.location.state.isNewGroupConversation,
                C = (e) => e && (0, o.Z)(e),
                T = (e, t) => {
                    if (e && t) {
                        const a = (0, d.Z)(e),
                            r = t.toLowerCase().indexOf(e.toLowerCase());
                        return { startIndex: r, endIndex: r + a };
                    }
                    return { startIndex: -1, endIndex: -1 };
                },
                S = (e, t) => {
                    const a = n.ZP.plainTextParts(t);
                    return () =>
                        r.createElement(
                            r.Fragment,
                            null,
                            a.map((t, a) => {
                                let n = t;
                                return "text" === t.entityType ? (n = { ...t, highlights: e, highlightType: "background" }) : "emoji" === t.entityType && (n = { ...t, highlights: e }), r.createElement(i.ZP, { key: `${a}`, part: n });
                            }),
                        );
                },
                A = (e, t) => {
                    const a = C(e),
                        r = a?.filter((e) => t && -1 !== t.toLowerCase().indexOf(e.toLowerCase())),
                        n = r?.length
                            ? (0, l.Z)(
                                  r.map((e) =>
                                      ((e, t) => {
                                          if (e && t) {
                                              const a = (0, d.Z)(e),
                                                  r = t.toLowerCase().indexOf(e.toLowerCase());
                                              return [r, r + a];
                                          }
                                      })(e, t),
                                  ),
                              )
                            : void 0;
                    return n && n?.length ? n.sort((e, t) => e[0] - t[0]) : void 0;
                },
                O = (e) => {
                    const { message_data: t } = e;
                    let a = E.C7.UNKNOWN;
                    const r = (t && t.attachment) || {};
                    return r.tweet ? (a = E.C7.TWEET) : r.photo ? (a = E.C7.PHOTO) : r.animated_gif ? (a = E.C7.GIF) : r.video ? (a = r.video.audio_only ? E.C7.VOICE : E.C7.VIDEO) : r.card ? (a = E.C7.CARD) : t?.text && (a = E.C7.TEXT), a;
                };
            function f(e, t) {
                return e.findIndex((e) => e.id === t);
            }
            function N(e) {
                return e === m._2.SECONDARY ? E.H6.REQUEST : e === m._2.TERTIARY ? E.H6.LOW_QUALITY : E.H6.PRIMARY;
            }
            function v(e) {
                return e.isTrue("dm_voice_rendering_enabled");
            }
            function b(e, t) {
                return !!(e && e.video && v(t)) && !!e.video.audio_only;
            }
            function I(e, t, a, r) {
                return { pathname: `/i/report/dm_conversation/${e}`, state: { clientReferer: t, inboxType: r, scribeNamespace: a } };
            }
            function P(e, t) {
                if (!e) return { name: "", screenName: "", idStr: "" };
                const a = (0, _.Z)(e, t).map(({ user: e }) => e),
                    r = a && a[0];
                return { name: (r && r.name) || "", screenName: (r && r.screen_name) || "", idStr: (r && r.id_str) || "" };
            }
            const y = (e) => (e === m._2.TERTIARY ? "low_quality_timeline" : e === m._2.SECONDARY ? "requests_timeline" : "inbox_timeline"),
                R = (e) => (e === m._2.TERTIARY ? "/messages/requests/additional" : e === m._2.SECONDARY ? "/messages/requests" : "/messages"),
                x = (e) => () => u.m1(e),
                M = (e) => (t) => u.De(e, t),
                w = (e, t) => {
                    const a = (0, c.Z)(e, (e) => !!e.message_data && e.message_data && e.message_data.recipient_id === t);
                    return a && a.message_data && a.message_data.quick_reply && a.message_data.quick_reply && "options" === a.message_data.quick_reply.type ? a.message_data.quick_reply : void 0;
                },
                D = (e) => !!e?.startsWith("e"),
                L = (0, s.ju)("https://help.x.com/forms/dsa/report"),
                Z = (e, t) => {
                    const a = new URL(e.getStringValue("dsa_report_illegal_content_url") || L);
                    return t.entry_id && a.searchParams.set("dm_id", t.entry_id), a.searchParams.set("content_type", "dm" === t.type ? "dm_message" : "dm_conversation"), a.searchParams.set("is_encrypted", t.is_encrypted ? "true" : "false"), t.conversation_id && a.searchParams.set("dm_convo_id", t.conversation_id), a.toString();
                };
        },
        280010: (e, t, a) => {
            a.d(t, { n: () => n });
            var r = a(688715);
            const n = { help: (0, r.ju)("https://help.x.com/using-twitter/spaces"), settings: (0, r.ju)("https://x.com/settings/spaces") };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28.d9acdd7a.js.map
