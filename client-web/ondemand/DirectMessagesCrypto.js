"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.DirectMessagesCrypto"],
    {
        858883: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n,
                r,
                s,
                i,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (s = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationAddMutation",
                        selections: (o = [
                            {
                                alias: null,
                                args: [
                                    {
                                        fields: [
                                            { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                            { kind: "Variable", name: "emoji_reactions", variableName: "emojiReactions" },
                                            { kind: "Variable", name: "message_id", variableName: "messageId" },
                                            { kind: "Variable", name: "reaction_types", variableName: "reactionTypes" },
                                        ],
                                        kind: "ObjectValue",
                                        name: "dm_reactions",
                                    },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_dm_reaction",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, s, i, r], kind: "Operation", name: "useDMReactionMutationAddMutation", selections: o },
                    params: { id: "VyDyV9pC2oZEj6g52hgnhA", metadata: {}, name: "useDMReactionMutationAddMutation", operationKind: "mutation", text: null },
                };
            d.hash = "a57cdb58c1da320b32c0a3a4d4202090";
            const c = d;
        },
        781054: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n,
                r,
                s,
                i,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (s = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationRemoveMutation",
                        selections: (o = [
                            {
                                alias: null,
                                args: [
                                    {
                                        fields: [
                                            { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                            { kind: "Variable", name: "emoji_reactions", variableName: "emojiReactions" },
                                            { kind: "Variable", name: "message_id", variableName: "messageId" },
                                            { kind: "Variable", name: "reaction_types", variableName: "reactionTypes" },
                                        ],
                                        kind: "ObjectValue",
                                        name: "dm_reactions",
                                    },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "delete_dm_reaction",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, s, i, r], kind: "Operation", name: "useDMReactionMutationRemoveMutation", selections: o },
                    params: { id: "bV_Nim3RYHsaJwMkTXJ6ew", metadata: {}, name: "useDMReactionMutationRemoveMutation", operationKind: "mutation", text: null },
                };
            d.hash = "408e23aa034ffc8f2480a6fab3532c39";
            const c = d;
        },
        878636: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = ({ apiClient: e }) => ({ register: ({ device_id: t, ...a }) => e.post("keyregistry/register", a, {}, { "X-Client-UUID": t, "content-type": "application/json" }, ""), extractPublicKeys: (t = []) => Promise.all(t.map((t) => e.get(`keyregistry/extract_public_keys/${t}`, {}, {}, "").then(({ public_keys: e = [] }) => e.map(({ identity_key: e, ...a }) => ({ user_id: t, identity_key: e, ...a }))))).then((e) => e.flat()) });
        },
        741067: (e, t, a) => {
            a.r(t), a.d(t, { default: () => E });
            a(571372), a(136728);
            const n = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#39;" },
                r = (e) => e && e.replace(/[&"'><]/g, (e) => n[e]);
            var s = a(925885),
                i = a(814187),
                o = a(688356),
                d = a(832142),
                c = a(878636),
                l = a(206669),
                y = a(163889),
                u = (a(694898), a(38857), a(540171), a(157093), a(265688), a(270315), a(592529), a(86943), a(691157), a(831558)),
                _ = a(704879);
            class p {
                constructor(e) {
                    this._key = e ? u.pe(e).then((e) => crypto.subtle.importKey("raw", (0, _.RG)(e), { name: "AES-GCM", length: 256 }, !1, ["encrypt", "decrypt"])) : crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]);
                }
                async encrypt(e) {
                    const t = crypto.getRandomValues(new Uint8Array(12)),
                        a = await crypto.subtle.encrypt({ name: "AES-GCM", iv: t }, await this._key, (0, _.cv)(e)),
                        n = new Uint8Array(a),
                        r = new Uint8Array(t.length + n.length);
                    return r.set(t), r.set(n, 12), (0, _.sM)(r);
                }
                async decrypt(e) {
                    const t = (0, _.RG)(e),
                        a = new Uint8Array(t, 0, 12),
                        n = await crypto.subtle.decrypt({ name: "AES-GCM", iv: a }, await this._key, new Uint8Array(t, 12)).catch(() => new Uint8Array([]));
                    return (0, _.Jx)(n);
                }
            }
            var m = a(928233);
            async function E(e, { sendMessagePath: t }) {
                const a = await e.dispatch(async (e, t, a) => (await e(m.qi), a.api)),
                    n = {};
                async function l(t, a) {
                    const c = await a(t);
                    if (!I(c)) return c;
                    const l = [];
                    const u = JSON.parse(c.body, function (t, a) {
                        const c = this.conversation_id || a?.conversation_id;
                        if (
                            ("key_registry_state" === t &&
                                "UNREGISTERED" === a?.status &&
                                e.dispatch(async (e, t, a) => {
                                    await e(m.eY);
                                }),
                            A(c) && a)
                        ) {
                            const e = ((e, t) => (a, r, s) => {
                                const i = Promise.resolve()
                                    .then(() => {
                                        const t = `encrypted_${a}`;
                                        if (!(t in r)) return;
                                        const s = r[t];
                                        return n[e]
                                            .decrypt(s)
                                            .then((e) => (r[a] = e))
                                            .catch((e) => {
                                                (0, y.Hj)(new Error((r[a] = `Unable to decrypt ${JSON.stringify(s)}`), { cause: e }));
                                            })
                                            .finally(() => {
                                                delete r[t];
                                            });
                                    })
                                    .then((e) => (void 0 !== e && s ? s(e) : e));
                                return t.push(i), i;
                            })(c, l);
                            if (("device_info" === t && "encrypted_conversation_key" in a && (n[c] = n[c] || new p(a.encrypted_conversation_key)), "message_data" === t)) {
                                const t = e("text", a, (e) => {
                                        a.entities = (function (e) {
                                            if (void 0 !== e) {
                                                const t = r(e || "");
                                                return { hashtags: (0, s.Z)(t).map((e) => ({ ...e, text: e.hashtag })), symbols: (0, i.Z)(t).map((e) => ({ ...e, text: e.cashtag })), user_mentions: (0, o.Z)(t).map((e) => ({ ...e })), urls: (0, d.Z)(t).map((e) => ({ ...e, url: /^(http|mailto)/.test(e.url) ? e.url : `https://${e.url}`, expanded_url: e.url })) };
                                            }
                                        })(e);
                                    }),
                                    n = e("franking_key", a);
                                Promise.all([t, n]).then(() => {
                                    a.franking_tag;
                                });
                            }
                            a.reply_data && e("text", a.reply_data),
                                "message_reactions" === t &&
                                    a &&
                                    a.length &&
                                    a.forEach &&
                                    a.forEach((t) => {
                                        e("emoji_reaction", t, (e) => {
                                            t.reaction_key = g[e];
                                        });
                                    }),
                                ("reaction_create" !== t && "reaction_delete" !== t) ||
                                    e("emoji_reaction", a, (e) => {
                                        a.reaction_key = g[e];
                                    });
                        }
                        return a;
                    });
                    return await Promise.all(l), { ...c, body: u };
                }
                const E = [
                    {
                        test: (e) => e.path.endsWith(t),
                        filter: async function (e, t) {
                            const { ...r } = e.data,
                                s = r.conversation_id,
                                i = (function (e) {
                                    return (e || "").replace(new RegExp(`${v}$`, "gui"), "").replace(new RegExp(`^${v}`, "gui"), "");
                                })(r.text),
                                o = (n[s] =
                                    n[s] ||
                                    (await (async function (e, t) {
                                        const n = new p(),
                                            r = e.replace(/^e/, "").split("-"),
                                            s = await a.withEndpoint(c.Z).extractPublicKeys(r),
                                            i = (0, _.sM)(await crypto.subtle.exportKey("raw", await n._key));
                                        return (
                                            (t.encrypted_conversation_keys = await Promise.all(
                                                s.map(async ({ identity_key: e, ...t }) => {
                                                    const a = await crypto.subtle.importKey("spki", (0, _.RG)(e), { name: "ECDH", namedCurve: "P-256" }, !1, []);
                                                    return { ...t, encrypted_conversation_key: await u.HI(i, a) };
                                                }),
                                            )),
                                            n
                                        );
                                    })(s, r)));
                            return (
                                (r.text = await o.encrypt(i)),
                                await (async function (e, t, a) {
                                    const n = new TextEncoder().encode(t),
                                        r = await crypto.subtle.generateKey({ name: "HMAC", hash: { name: "SHA-256" }, length: 256 }, !0, ["sign"]),
                                        s = (0, _.sM)(await crypto.subtle.sign("HMAC", r, n)),
                                        i = await crypto.subtle.exportKey("raw", r),
                                        o = await a.encrypt((0, _.sM)(i));
                                    (e.encrypted_franking_key = o), (e.franking_tag = s);
                                })(r, i, o),
                                await l({ ...e, data: r }, t)
                            );
                        },
                    },
                    {
                        test: (e) => "Emoji" === e.data?.variables?.reactionTypes?.[0] && Array.isArray(e.data.variables.emojiReactions) && A(e.data.variables.conversationId),
                        filter: async function (e, t) {
                            const { ...a } = e.data,
                                { conversationId: r, emojiReactions: s } = a.variables;
                            return (a.variables = { ...a.variables }), (a.variables.emojiReactions = await Promise.all(s.map((e) => n[r].encrypt(e)))), await l({ ...e, data: a }, t);
                        },
                    },
                    { test: (e) => e.path.match(/inbox_initial_state\.json|user_updates\.json|dm\/([a-zA-Z0-9._-]+)/), filter: l },
                ];
                return async (e, t) => {
                    for (const { filter: a, test: n } of E) if (n(e)) return await a(e, t);
                    return await t(e);
                };
            }
            const I = (e) => e.headers["content-type"]?.includes("application/json"),
                g = Object.fromEntries(Object.entries(l.k2).map((e) => e.reverse())),
                A = (e) => e?.startsWith("e");
            const v = "[\\s\\p{Z}\\u180E\\u0085\\u200B\\uFEFF]*";
        },
        831558: (e, t, a) => {
            a.d(t, { HI: () => c, W1: () => u, oo: () => l, pe: () => d });
            a(694898), a(38857), a(540171), a(157093), a(265688), a(270315), a(592529), a(86943), a(691157);
            var n = a(468811),
                r = a.n(n),
                s = a(704879);
            const i = new Uint8Array([0, 0, 0, 1]);
            async function o(e, t) {
                return new Uint8Array(await crypto.subtle.digest("SHA-256", (0, s.cL)(e, i, t)));
            }
            const d = async (e) => {
                const t = new Uint8Array((0, s.RG)(e)),
                    a = await crypto.subtle.importKey("raw", t.subarray(0, 65), { name: "ECDH", namedCurve: "P-256" }, !0, []),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: a }, y, 256),
                    r = await o(n, await crypto.subtle.exportKey("raw", a)),
                    i = r.slice(0, 16),
                    d = r.slice(16, 32),
                    c = await crypto.subtle.importKey("raw", i, { name: "AES-GCM", length: 128 }, !0, ["decrypt"]);
                return (0, s.Jx)(await crypto.subtle.decrypt({ name: "AES-GCM", iv: d }, c, t.subarray(65)));
            };
            async function c(e, t) {
                const a = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !0, ["deriveBits"]),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: t }, a.privateKey, 256),
                    r = await o(n, await crypto.subtle.exportKey("raw", a.publicKey)),
                    i = r.slice(0, 16),
                    d = r.slice(16, 32),
                    c = await crypto.subtle.importKey("raw", i, { name: "AES-GCM", length: 128 }, !1, ["encrypt"]),
                    l = await crypto.subtle.encrypt({ name: "AES-GCM", iv: d }, c, (0, s.cv)(e)),
                    y = await crypto.subtle.exportKey("raw", a.publicKey);
                return (0, s.sM)((0, s.cL)(y, l));
            }
            const l = async (e) => ({ ...(await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !1, ["deriveBits"])), deviceId: e ?? r().v4(), isRegistered: !1 });
            let y;
            const u = (e) => {
                y = e;
            };
        },
        928233: (e, t, a) => {
            a.d(t, { FM: () => p, eY: () => _, qi: () => u });
            a(571372);
            var n = a(961111),
                r = a.n(n),
                s = a(878636),
                i = a(390387),
                o = a(163889),
                d = a(831558),
                c = a(704879);
            const l = "rweb.dmCryptoKeys";
            function y(e) {
                return l + 1 + e;
            }
            const u = async (e, t, { api: a, devicePersistence: n }) => {
                    try {
                        const o = i.x0(t());
                        if (!o) return;
                        await n.delete(l + "" + o);
                        const u = y(o);
                        let _ = await n.get(u);
                        const p = async () => {
                            const e = (0, c.sM)(await crypto.subtle.exportKey("spki", _.publicKey));
                            await r()(
                                async (t) => {
                                    try {
                                        await n.set(u, _), (await n.get(u)) ? await a.withEndpoint(s.Z).register({ registration_id: Math.round(1e5 * Math.random()), identity_key: e, device_id: _.deviceId }) : t(new Error("Could not set value in IndexedDB. Bailing out."));
                                    } catch (e) {
                                        if ((await n.delete(u), 403 !== e.status)) throw e;
                                        t(e);
                                    }
                                },
                                { minTimeout: 2e3, retries: 2 },
                            ),
                                await n.set(u, { ..._, isRegistered: !0 });
                        };
                        _ || (_ = await (0, d.oo)()), _.isRegistered || (await p()), (0, d.W1)(_.privateKey), e(i.Pv(_.deviceId));
                    } catch (e) {
                        403 !== e.status && (0, o.Hj)(e);
                    }
                },
                _ = async (e, t, { api: a, devicePersistence: n }) => {
                    const r = i.x0(t());
                    if (!r) return;
                    const s = y(r),
                        o = await n.get(s);
                    o && "unregistered" !== o.status && ((o.status = "unregistered"), delete o.privateKey, delete o.publicKey, await n.set(s, o), (0, d.W1)(void 0));
                },
                p = async (e, t, { api: a, devicePersistence: n }) => {
                    const r = i.x0(t());
                    if (!r) return;
                    const s = y(r),
                        o = await n.get(s);
                    if (!o || "unregistered" !== o.status) return;
                    const c = o.deviceId,
                        l = await (0, d.oo)(c);
                    await n.delete(s), await n.set(s, l), await e(u);
                };
        },
        704879: (e, t, a) => {
            a.d(t, { Jx: () => i, RG: () => n, cL: () => o, cv: () => s, sM: () => r });
            a(875640), a(694898), a(38857), a(540171), a(157093), a(265688), a(270315), a(592529), a(86943), a(691157);
            function n(e) {
                const t = atob(e),
                    a = t.length,
                    n = new Uint8Array(a);
                for (let e = 0; e < a; e++) n[e] = t.charCodeAt(e);
                return n.buffer;
            }
            function r(e) {
                let t = "";
                const a = new Uint8Array(e),
                    n = a.byteLength;
                for (let e = 0; e < n; e++) t += String.fromCharCode(a[e]);
                return btoa(t);
            }
            const s = (e) => new TextEncoder().encode(e),
                i = (e) => new TextDecoder().decode(e);
            function o(...e) {
                const t = e.map((e) => (e instanceof Uint8Array ? e : new Uint8Array(e))),
                    a = new Uint8Array(t.reduce((e, t) => e + t.length, 0));
                let n = 0;
                for (const e of t) a.set(e, n), (n += e.length);
                return a;
            }
        },
        275365: (e, t, a) => {
            a.d(t, { BU: () => c, Cr: () => s, To: () => r, UN: () => d, eD: () => n, td: () => i, v1: () => o });
            const n = Object.freeze({ ONE_TO_ONE: "ONE_TO_ONE", GROUP: "GROUP_DM", SECRET_ONE_TO_ONE: "SECRET_ONE_TO_ONE" }),
                r = Object.freeze({ AT_END: "AT_END", HAS_MORE: "HAS_MORE" }),
                s = Object.freeze({ CONVERSATION_AVATAR_UPDATE: "conversation_avatar_update", CONVERSATION_NAME_UPDATE: "conversation_name_update", CONVERSATION_PROFILE_INFO_HEADER: "conversation_profile_info_header", CONVERSATION_READ: "conversation_read", CONVO_METADATA_UPDATE: "convo_metadata_update", DELEGATE_ALERT_BANNER: "delegate_alert_banner", DISABLE_NOTIFICATIONS: "disable_notifications", ENABLE_NOTIFICATIONS: "enable_notifications", END_AV_BROADCAST: "end_av_broadcast", ENCRYPTED_CONVERSATION: "encrypted_conversation", JOIN_CONVERSATION: "join_conversation", LOADING_INDICATOR: "loading_indicator", MARK_ALL_AS_READ: "mark_all_as_read", MENTION_NOTIFICATIONS_UPDATE: "mention_notifications_setting_update", MESSAGE: "message", MESSAGE_DELETE: "message_delete", MESSAGE_MARK_AS_NOT_SPAM: "message_unmark_as_spam", MESSAGE_MARK_AS_SPAM: "message_mark_as_spam", NEW_MESSAGES_DIVIDER: "new_messages_divider", PARTICIPANTS_JOIN: "participants_join", PARTICIPANTS_LEAVE: "participants_leave", REACTION_CREATE: "reaction_create", REACTION_DELETE: "reaction_delete", READ_ONLY_INDICATOR: "read_only_indicator", REMOVE_CONVERSATION: "remove_conversation", TRUST_CONVERSATION: "trust_conversation", TYPING_INDICATOR: "typing_indicator", WELCOME_MESSAGE: "welcome_message_create" }),
                i = Object.freeze({ MISSED: "MISSED", CANCELED: "CANCELED", DECLINED: "DECLINED", HUNG_UP: "HUNG_UP", TIMED_OUT: "TIMED_OUT" }),
                o = Object.freeze({ AUDIO_ONLY: "AUDIO_ONLY", VIDEO: "VIDEO" }),
                d = Object.freeze({ MUTUAL_FRIENDS: "mutual_friends" }),
                c = Object.freeze({ UNINITIATED: "UNINITIATED", EXISTING: "EXISTING", DEVICE_NOT_A_MEMBER: "DEVICE_NOT_A_MEMBER" });
        },
        627279: (e, t, a) => {
            a.d(t, { I7: () => N, J_: () => D, MY: () => V, Ob: () => G, WK: () => Y, WO: () => O, ZP: () => w, _d: () => q, gm: () => H, gz: () => F, iN: () => z, kv: () => h, pt: () => k, px: () => U, rU: () => K, s$: () => j, wC: () => C, zT: () => W });
            var n = a(468811),
                r = a.n(n),
                s = a(744531),
                i = a(933277),
                o = a(973710),
                d = a(166852),
                c = a(450681),
                l = a(948322),
                y = a(856674),
                u = a(163889),
                _ = a(917799),
                p = a(275365),
                m = a(849585),
                E = a(147143);
            const I = (0, _.dg)(E.A7, "DELETE_MESSAGE"),
                g = (0, _.dg)(E.A7, "MARK_ENTRIES_AS_SPAM"),
                A = (0, _.dg)(E.A7, "MARK_ENTRIES_AS_NOT_SPAM"),
                v = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} };
            function w(e = v, t) {
                if (!t) return e;
                const { conversationId: a = t.payload?.conversation_id, requestId: n = t.payload?.id } = t.meta || {};
                switch (t.type) {
                    case B: {
                        const { id: n } = t.payload,
                            r = { ...e.entries, [n]: R(e.entries[n], { data: t.payload }) };
                        return { ...e, entries: r, entryIdsByConversationId: { ...e.entryIdsByConversationId, [a]: T([...(e.entryIdsByConversationId[a] || []), n], r) } };
                    }
                    case L: {
                        const { id: n } = t.payload,
                            r = { ...e.entries, [n]: b(e.entries[n], t.payload) };
                        return { ...e, entries: r, entryIdsByConversationId: { ...e.entryIdsByConversationId, [a]: T([...(e.entryIdsByConversationId[a] || []), n], r) } };
                    }
                    case f: {
                        const a = Object.values(t.payload)
                                .filter((e) => e.type !== p.Cr.CONVERSATION_READ)
                                .reduce(
                                    (t, a) => {
                                        "message_edit" === a.type && ((a.id = a.message_data.id), (a.type = "message"));
                                        const { id: n } = a,
                                            r = (0, s.Z)(a, "message_reactions");
                                        return (
                                            (t.allEntries[n] = R(e.entries[n], { data: r, isLoading: !1, isLoaded: !0 })),
                                            a.message_reactions &&
                                                (a.message_reactions.forEach((n) => {
                                                    const r = { ...n, affects_sort: !0, message_id: a.id, type: p.Cr.REACTION_CREATE };
                                                    t.allEntries[r.id] = R(e.entries[r.id], { data: r, isLoading: !1, isLoaded: !0 });
                                                }),
                                                (t.embeddedReactionsByMessageId[n] = T([...(e.reactionsByMessageId[n] || []), ...a.message_reactions.map((e) => e.id)], { ...e.entries, ...t.allEntries }))),
                                            t
                                        );
                                    },
                                    { allEntries: {}, embeddedReactionsByMessageId: {} },
                                ),
                            n = { ...e.entries, ...a.allEntries },
                            r = (0, i.Z)(Object.values(a.allEntries), (e) => e.data.conversation_id),
                            o = Object.keys(r).reduce((t, a) => {
                                const s = r[a].map((e) => e.data.id);
                                return (t[a] = T([...(e.entryIdsByConversationId[a] || []), ...s], n)), t;
                            }, {});
                        return { ...e, entries: n, entryIdsByConversationId: { ...e.entryIdsByConversationId, ...o }, reactionsByMessageId: { ...e.reactionsByMessageId, ...a.embeddedReactionsByMessageId } };
                    }
                    case g.REQUEST:
                    case A.REQUEST: {
                        const a = t.type === g.REQUEST,
                            n = t.payload.reduce((t, n) => {
                                const r = e.entries[n] && e.entries[n].data;
                                return { ...t, [n]: { ...e.entries[n], data: { ...r, marked_as_spam: a } } };
                            }, {});
                        return { ...e, entries: { ...e.entries, ...n } };
                    }
                    case I.REQUEST:
                    case S: {
                        const n = t.type === S && !Array.isArray(t.payload),
                            r = e.entryIdsByConversationId[a] || [],
                            i = t.type === S ? (n ? r : t.payload) : [t.payload, ...(e.reactionsByMessageId[t.payload] || [])];
                        return { ...e, entries: (0, s.Z)(e.entries, i), entryIdsByConversationId: { ...(0, s.Z)(e.entryIdsByConversationId, a), ...(n ? {} : { [a]: (0, o.Z)(r, i) }) }, reactionsByMessageId: (0, s.Z)(e.reactionsByMessageId, i) };
                    }
                    case P: {
                        const r = t.payload.id || n,
                            i = { ...(0, s.Z)(e.entries, r) },
                            o = T(
                                (e.entryIdsByConversationId[a] || []).filter((e) => e !== r),
                                i,
                            ),
                            d = o ? { [a]: o } : {};
                        return { ...e, entries: i, entryIdsByConversationId: { ...(0, s.Z)(e.entryIdsByConversationId, a), ...d }, reactionsByMessageId: (0, s.Z)(e.reactionsByMessageId, r) };
                    }
                    case x: {
                        const a = t.payload,
                            n = [...(e.reactionsByMessageId[a.message_id] || []), a.id],
                            r = n.filter((t) => e.entries[t]);
                        n.length !== r.length && (0, u.ZP)("DM add reaction is missing a backing entry", { extra: { filteredMessageReactionIds: r, messageReactionIds: n, currentId: a.id } });
                        const s = T(r, e.entries);
                        return { ...e, reactionsByMessageId: { ...e.reactionsByMessageId, [a.message_id]: s } };
                    }
                    case Z: {
                        const a = t.payload,
                            n = (e.reactionsByMessageId[a.message_id] || []).find((t) => e.entries[t].data.sender_id === a.sender_id);
                        if (!n) return e;
                        const r = (0, o.Z)(e.entryIdsByConversationId[a.conversation_id], n),
                            i = (0, o.Z)(e.reactionsByMessageId[a.message_id], n);
                        return { ...e, entries: (0, s.Z)(e.entries, n), entryIdsByConversationId: { ...e.entryIdsByConversationId, [a.conversation_id]: r }, reactionsByMessageId: { ...e.reactionsByMessageId, [a.message_id]: i } };
                    }
                    case m.t:
                        return v;
                    default:
                        return e;
                }
            }
            const R = (e, t) => {
                    const { error: a, isLoaded: n, isLoading: r, ...s } = e || {},
                        { data: i, ...o } = t || {};
                    return { ...s, data: { ...(s && s.data), ...i }, ...o };
                },
                b = (e, t) => {
                    const { data: a, ...n } = e || {};
                    return { ...n, data: { ...a, message_data: t } };
                },
                T = (e = [], t) => {
                    const a = (0, d.Z)(e).sort((e, a) => {
                        const n = (0, y.ZP)(t[e].data.time, t[a].data.time);
                        return 0 === n ? (0, y.ZP)(t[e].id, t[a].id) : n;
                    });
                    return a.length ? a : void 0;
                },
                M = (e, t, a, n) => ({ id: r().v1(), time: new Date().getTime().toString(), emoji_reaction: n, reaction_key: "Emoji", conversation_id: e, message_id: t, sender_id: a }),
                f = "rweb/directMessages/ADD_ENTRIES",
                N = (e) => ({ payload: e, type: f }),
                C =
                    (...e) =>
                    (t, a, { api: n }) => {
                        const r = M(...e);
                        return t([U(r.conversation_id, r.id, r), G(r), K(r)]);
                    },
                O =
                    (...e) =>
                    (t, a, { api: n }) => {
                        const r = M(...e);
                        return t([G(r)]);
                    },
                S = "rweb/dm/REMOVE_CONVERSATION_ENTRIES",
                D = (e, t) => ({ meta: { conversationId: e }, payload: t, type: S }),
                k = (e, t) => ({ payload: e, type: t ? g.REQUEST : A.REQUEST }),
                h =
                    ({ conversationId: e, dmId: t, markSpam: a }) =>
                    (n, r, { api: s }) =>
                        (0, _.AB)(n, { params: { dm_id: t, report_as: a ? "spam" : "not_spam" }, request: s.withEndpoint(l.Z).reportSpam })({ actionTypes: a ? I : A, payload: a ? t : [t], meta: { conversationId: e } }),
                B = "rweb/directMessages/ADD_ENTRY",
                U = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: B }),
                L = "rweb/directMessages/EDIT_ENTRY",
                j = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: L }),
                P = "rweb/directMessages/REMOVE_ENTRY",
                V = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: P }),
                x = "rweb/directMessages/ADD_REACTION",
                K = (e) => ({ payload: { ...e, type: p.Cr.REACTION_CREATE }, type: x }),
                Z = "rweb/directMessages/DELETE_REACTION",
                G = ({ emoji_reaction: e, reaction_key: t, ...a }) => ({ payload: { ...a, type: p.Cr.REACTION_DELETE }, type: Z }),
                H = (e) => e[E.Yf].entries,
                Y = (e, t) => {
                    const a = H(e).entries[t];
                    return a && a.data;
                },
                F = (e, t) => e[E.Yf].entries.entryIdsByConversationId[t],
                z = (e, t) => {
                    const a = F(e, t);
                    return a ? (0, c.Z)(a.map((t) => Y(e, t))) : [];
                },
                q = (e, t) => H(e).reactionsByMessageId[t],
                W = (e, t) => (q(e, t) || []).map((t) => Y(e, t).sender_id);
        },
        849585: (e, t, a) => {
            a.d(t, { m: () => r, t: () => n });
            const n = "rweb/directMessages/RESET",
                r = () => ({ type: n });
        },
        147143: (e, t, a) => {
            a.d(t, { A7: () => r, Yf: () => n, _2: () => i, w1: () => s, xR: () => o });
            const n = "directMessages",
                r = `rweb/${n}`,
                s = Object.freeze({ PINNED: "Pinned", REPLY_LATER: "ReplyLater" }),
                i = Object.freeze({ PRIMARY: "primary", SECONDARY: "secondary", TERTIARY: "tertiary" }),
                o = { Inbox: "inbox", Trusted: "trusted", Untrusted: "untrusted", UntrustedLowQuality: "untrusted_low_quality" };
        },
        206669: (e, t, a) => {
            a.d(t, { _h: () => m, k2: () => y, ly: () => p });
            var n = a(781054),
                r = a(858883),
                s = a(202784),
                i = (a(585488), a(351743)),
                o = a.n(i),
                d = a(443781),
                c = a(125363),
                l = a(627279);
            const y = { funny: "😂", surprised: "😲", sad: "😢", like: "❤️", excited: "🔥", agree: "👍", disagree: "👎", angry: "😠", mask: "😷" },
                u = r.Z,
                _ = n.Z,
                p = () => {
                    const { viewerUserId: e } = s.useContext(d.rC),
                        t = (0, c.I0)(),
                        [a] = o()(u);
                    return (n, r, s) => {
                        a({ variables: { conversationId: n, messageId: r, emojiReactions: [s], reactionTypes: ["Emoji"] }, optimisticUpdater: () => t((0, l.wC)(n, r, e, s)), onError: () => t((0, l.WO)(n, r, e, s)) });
                    };
                },
                m = () => {
                    const { viewerUserId: e } = s.useContext(d.rC),
                        t = (0, c.I0)(),
                        [a] = o()(_);
                    return (n, r, s) => {
                        a({ variables: { conversationId: n, messageId: r, emojiReactions: [s], reactionTypes: ["Emoji"] }, optimisticUpdater: () => t((0, l.WO)(n, r, e, s)), onError: () => t((0, l.wC)(n, r, e, s)) });
                    };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.DirectMessagesCrypto.0fd4cd0a.js.map
