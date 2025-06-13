"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-e4e3d8bb"],
    {
        119754: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = () => r.e("ondemand.qrcode").then(r.t.bind(r, 374061, 19));
        },
        376293: (e, t, r) => {
            r.d(t, { $f: () => O, KV: () => y, LI: () => x, SC: () => T, Vt: () => h, ed: () => A, op: () => E });
            var n = r(202784),
                o = r(190286),
                i = r(111677),
                s = r.n(i),
                a = r(616894),
                c = r(314948),
                l = r(516951),
                d = r(163390);
            const u = s().cfd2f35e,
                p = s().f9e45cfb,
                f = s().fcd4d489,
                g = s().a6450e84,
                b = s().g353ad73,
                m = s().ad00a739,
                y = s().a9fd20be,
                k = s().j546fb79,
                v = s().c9623eeb,
                h = s().e133be4e,
                w = s().he43bca4,
                C = s().f5f01af6,
                T = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                O = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: g, text: t ? m({ screenName: e }) : b({ screenName: e }) }),
                E = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: r, source: n, testID: o, unblockAction: i, unblockSubtext: s, user: a }) => {
                    let c,
                        u = l.Z;
                    const p = x(a, r);
                    switch (n) {
                        case T.PROFILE:
                        case T.LIST_DETAIL:
                        case T.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? i(p) : e(p);
                            };
                            break;
                        case T.TWEET:
                        case T.TWEET_CARET:
                        case T.RICH_FEEDBACK:
                            (c = d.uq.block),
                                (u = () => {
                                    a.blocking ? i(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: o, shortcutKey: c, Icon: S(a.blocking), text: D(a), subText: _({ user: a, blockSubtext: t, unblockSubtext: s }) };
                },
                S = (e) => (e ? c.default : a.default),
                _ = ({ blockSubtext: e, unblockSubtext: t, user: r }) => (!r.blocking && e ? e(r.screen_name) : r.blocking ? t : void 0),
                D = (e) => (e.blocking ? v({ screenName: e.screen_name }) : f({ screenName: e.screen_name })),
                x = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: k({ screenName: e }), label: h, text: t ? C : w }))(e.screen_name, t) : O(e.screen_name, t)),
                A = ({ confirmation: e, handleConfirm: t, onClose: r }) => {
                    const { confirmButtonType: i, headline: s, label: a, text: c } = e;
                    return n.createElement(o.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: i, headline: s, onCancel: r, onConfirm: t, text: c });
                };
        },
        712816: (e, t, r) => {
            r.d(t, { d: () => o });
            var n = r(111677);
            const o = { defaultToast: { text: r.n(n)().b6878b0a }, showToast: !0 };
        },
        511473: (e, t, r) => {
            r.d(t, { rf: () => l, uJ: () => u });
            var n = r(111677),
                o = r.n(n),
                i = r(71620),
                s = r(389073),
                a = r(615656);
            const c = o().e4ff75aa,
                l = o().e4f6bd9e,
                d = { [s.Z.Offline]: c },
                u = (e, t, r) => {
                    let n;
                    const o = {
                        [a.ZP.AccessDeniedByBouncer]: {
                            customAction: (t) => {
                                (0, i.BJ)(t, { flow: e });
                            },
                        },
                    };
                    if (r) n = { ...o, customErrorHandler: ({ errors: [n] }) => (n.code === a.ZP.AccessDeniedByBouncer ? (0, i.BJ)(n, { flow: e }) : r(t || (n.code && d[n.code]) || l), []) };
                    else if (t) {
                        const e = { toast: { text: t } };
                        n = { [a.ZP.ValidationFailure]: e, [a.ZP.OnboardingFlowRetriableFailure]: e, [a.ZP.OnboardingFlowFailure]: e, defaultToast: { text: t }, showToast: !0, ...o };
                    } else n = { ...o, [s.Z.Offline]: { toast: { text: d[s.Z.Offline] } }, defaultToast: { text: l }, showToast: !0 };
                    return n;
                };
        },
        879596: (e, t, r) => {
            r.d(t, { D: () => o });
            var n = r(111677);
            const o = { defaultToast: { text: r.n(n)().ca96fe6e }, showToast: !0 };
        },
        396987: (e, t, r) => {
            r.d(t, { QF: () => a, Qo: () => c, hZ: () => s });
            var n = r(918621);
            const o = "external_referer",
                i = 604800;
            function s(e) {
                return (0, n.ej)({ cookieName: o, featureSwitches: e });
            }
            function a(e, t) {
                const r = (t && t.encryptedReferralDetails) || "",
                    s = (t && t.encryptedReferer) || "",
                    a = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!r && !s && !a) return;
                const c = `${encodeURIComponent(s)}|${a}|${encodeURIComponent(r)}`;
                (0, n.d8)(o, c, { cookieOptions: { maxAge: i, encode: (e) => e }, featureSwitches: e });
            }
            const c = (e) => {
                const t = s(e);
                if (t && t.split("|").length > 1) {
                    const e = t.split("|");
                    return { encryptedReferer: e[0], referralType: e[1], encryptedReferralDetails: e[2] };
                }
            };
        },
        553093: (e, t, r) => {
            r.d(t, { Sz: () => n });
            const n = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const r = t.join("");
                    return o(r, 0).toString();
                },
                o = (e, t) => {
                    const r = "string" == typeof e ? e : String(e);
                    let n = t;
                    for (let e = 0; e < r.length; e++) {
                        (n = (n << 5) - n + r.charCodeAt(e)), (n |= 0);
                    }
                    return n;
                };
        },
        163390: (e, t, r) => {
            r.d(t, { OX: () => p, Od: () => d, PN: () => f, uq: () => l, wR: () => b });
            var n = r(251067),
                o = r(522171),
                i = r(111677),
                s = r.n(i),
                a = r(912021),
                c = r(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: l.nextItem, universal: !0 }, { description: s().g0048656, keys: l.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: l.refresh, universal: !1 }, { description: s().ha8209bc, keys: l.goHome, universal: !1 }, { description: s().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: s().eb75875e, keys: l.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: s().fa98627a, keys: l.goProfile, universal: !1 }, { description: s().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: s().b0041756, keys: l.goLists, universal: !1 }, { description: s().d4986f86, keys: l.goMessages, universal: !1 }, { description: s().h5860a68, keys: l.goGrok, universal: !1 }, { description: s().bb081ea2, keys: l.goSettings, universal: !1 }, { description: s().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: l.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: s().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: l.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: l.search, universal: !1 },
                    { description: s().fe731016, keys: o.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: o.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: o.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: o.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: l.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: l.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: l.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: o.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                f = () => [
                    { description: s().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: s().b881560e, keys: l.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                g = (0, a.Z)((e) => {
                    const t = d(e),
                        r = p(),
                        n = f(),
                        o = {};
                    return (
                        [...r, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      o[t] = e;
                                  })
                                : (o[t] = e);
                        }),
                        JSON.stringify(o)
                    );
                }),
                b = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": g(e) } };
                };
        },
        221973: (e, t, r) => {
            r.d(t, { ZP: () => c });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(875640);
            const n = Object.freeze({ enrollment: "enrollment", verification: "verification" }),
                o = (e) => {
                    const t = new Uint8Array(e);
                    let r = "";
                    return t.forEach((e) => (r += String.fromCharCode(e))), i(btoa(r));
                },
                i = (e) => e.replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, ""),
                s = (e) => {
                    const t = (r = e).replace(/-/g, "+").replace(/_/g, "/") + "====".substring(0, (4 - (r.length % 4)) % 4);
                    var r;
                    const n = window.atob(t);
                    return new Uint8Array(n.length).map((e, t) => n.charCodeAt(t)).buffer;
                },
                a = window.__CHALLENGE_2FA__;
            delete window.__CHALLENGE_2FA__;
            const c = (e, t) => {
                if (a) return Promise.resolve(a);
                const r = ((e, t) => {
                    if (t === n.enrollment) {
                        const t = { publicKey: { challenge: s(e.challenge), rp: e.rp, user: { ...e.user, id: s(e.user.id) }, pubKeyCredParams: e.pubKeyCredParams, attestation: e.attestation, excludeCredentials: e.excludeCredentials.map((e) => ({ ...e, id: s(e.id) })), extensions: e.extensions, timeout: 6e4, authenticatorSelection: { authenticatorAttachment: "cross-platform", userVerification: "discouraged" } } };
                        return () => navigator.credentials?.create(t) || Promise.resolve();
                    }
                    {
                        const { publicKeyCredentialRequestOptions: t } = e,
                            n = { publicKey: { rpId: t.rpId, extensions: { appid: t.extensions.appid }, challenge: s(t.challenge), userVerification: "discouraged", timeout: 6e4, allowCredentials: ((r = t.allowCredentials), r.map((e) => ({ type: "public-key", id: s(e.id) }))) } };
                        return () => navigator.credentials?.get(n) || Promise.resolve();
                    }
                    var r;
                })(e, t);
                return r().then((e) => {
                    if (e)
                        return ((e, t) => {
                            const { id: r, response: i, type: s } = e;
                            let a;
                            return t === n.enrollment && i.attestationObject ? (a = { id: r, type: s, response: { clientDataJSON: o(i.clientDataJSON), attestationObject: o(i.attestationObject) }, clientExtensionResults: {} }) : t === n.verification && i.authenticatorData && (a = { id: r, type: s, response: { clientDataJSON: o(i.clientDataJSON), authenticatorData: o(i.authenticatorData), signature: o(i.signature), userHandle: "" }, clientExtensionResults: { appid: !0 } }), JSON.stringify(a || "");
                        })(e, t);
                });
            };
        },
        343018: (e, t, r) => {
            r.d(t, { n: () => n });
            const n = Object.freeze({ TopicFollowCount: "topic_follow_count" });
        },
        449850: (e, t, r) => {
            r.d(t, { Zk: () => o, lq: () => n });
            Object.freeze({ icon: "icon", bullet_icon: "bullet_icon", image: "image" });
            const n = Object.freeze({ headerTitle: "header_title", headerSubtitle: "header_subtitle", sectionTitle: "section_title", detailText: "detail" }),
                o = Object.freeze({ TOP: "top", CENTER: "center", BOTTOM: "bottom" });
        },
        730996: (e, t, r) => {
            r.d(t, { W: () => o, g: () => n });
            r(571372);
            const n = Object.freeze({ AppealTweetWarning: "appealtweet", LimitedDiscoveryAppealTweet: "limiteddiscoveryappealtweet", ProfileOnlyDiscoveryAppealTweet: "profileonlydiscoveryappealtweet", DMConversation: "reportdmconversation", DMMessage: "reportdmconversation", HideCommunityTweet: "hidetweet", Moment: "reportmoment", RemoveCommunityMember: "removecommunitymember", Tweet: "reporttweet", List: "reportlist", User: "reportprofile", Space: "reportspace", AppealSuspension: "appealsuspension", Notification: "notification" });
            function o(e) {
                switch (e) {
                    case "appealtweet":
                    case "limiteddiscoveryappealtweet":
                    case "profileonlydiscoveryappealtweet":
                    case "reportdmconversation":
                    case "hidetweet":
                    case "reportmoment":
                    case "removecommunitymember":
                    case "reporttweet":
                    case "reportlist":
                    case "reportprofile":
                    case "reportspace":
                    case "appealsuspension":
                    case "notification":
                        return e;
                    default:
                        throw new Error(`unexpected source ${e}`);
                }
            }
        },
        946108: (e, t, r) => {
            r.d(t, { m: () => n });
            r(202784);
            const n = Object.freeze({ TopicCategory: "topic_category", Topic: "topic" });
        },
        158272: (e, t, r) => {
            r.d(t, { Kh: () => a, OQ: () => d, iW: () => l, xG: () => u, z_: () => c });
            r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(571372);
            var n = r(111677),
                o = r.n(n);
            function i(e) {
                const t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    r = atob(t),
                    n = r.length,
                    o = new ArrayBuffer(n),
                    i = new Uint8Array(o);
                for (let e = 0; e < n; e++) i[e] = r.charCodeAt(e);
                return o;
            }
            function s(e) {
                const t = new Uint8Array(e),
                    r = String.fromCharCode(...t);
                return btoa(r).replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, "");
            }
            const a = o().e4f6bd9e,
                c = o().ac966f94;
            function l() {
                return "undefined" != typeof window && !!window.PublicKeyCredential;
            }
            function d(e) {
                const t = JSON.parse(e);
                return (
                    (t.challenge = i(t.challenge)),
                    (t.user.id = i(t.user.id)),
                    t.excludeCredentials.forEach((e) => {
                        e.id = i(e.id);
                    }),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.create({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: {}, id: e.id, response: { attestationObject: s(e.response.attestationObject), clientDataJSON: s(e.response.clientDataJSON) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
            function u(e) {
                const t = JSON.parse(e).publicKeyCredentialRequestOptions;
                return (
                    (t.challenge = i(t.challenge)),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.get({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: { appid: !0 }, id: e.id, response: { authenticatorData: s(e.response.authenticatorData), clientDataJSON: s(e.response.clientDataJSON), signature: s(e.response.signature), userHandle: s(e.response.userHandle) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
        },
        409438: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-e4e3d8bb.b0d8926a.js.map
