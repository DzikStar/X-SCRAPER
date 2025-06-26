"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-65f95f73"],
    {
        646403: (e, t, r) => {
            r.d(t, { E: () => o });
            var s = r(420182);
            const o = ({ analytics: e, jotaiStore: t, query: r, responseAtom: o }) => {
                const i = t.get(s.dd);
                let a = "";
                return (
                    i.fetchClient
                        .dispatch("/2/grok/search.json", { method: "POST", credentials: "include", body: JSON.stringify({ query: r }) })
                        .then(async (e) => {
                            if (!e.ok) return void t.set(o, (e) => ({ ...e, status: "error" }));
                            const r = e.body?.getReader();
                            if (!r) return void t.set(o, (e) => ({ ...e, status: "error" }));
                            const s = new TextDecoder();
                            let i = "";
                            return (async function e({ done: n, value: c }) {
                                const d = t.get(o);
                                if (n) a ? t.set(o, (e) => ({ ...e, status: "completed" })) : t.set(o, (e) => ({ ...e, status: "error" }));
                                else if (c) {
                                    const n = s.decode(c);
                                    if (((i += n), i.includes("\n"))) {
                                        const e = i.split("\n");
                                        i = e.pop();
                                        for (const r of e)
                                            try {
                                                const e = JSON.parse(r);
                                                "error" === e.result?.responseType && t.set(o, { ...d, status: "error" }), e.result?.event?.universalSearch?.decision && t.set(o, (e) => ({ ...e, status: "streaming" }));
                                                const s = e.result?.event?.universalSearch?.id;
                                                s && t.set(o, (e) => ({ ...e, universalSearchId: s }));
                                                const i = e.result?.citedWebResults;
                                                i && i.length > 0 && t.set(o, (e) => ({ ...e, citedWebResults: i }));
                                                const n = e.result?.followUpSuggestions;
                                                n && t.set(o, (e) => ({ ...e, followUpSuggestions: n })), e.result?.message && !e.result?.postIds && (a += e.result?.message);
                                                const c = e.result?.imageAttachment;
                                                c && t.set(o, (e) => ({ ...e, fileAttachments: [...e.fileAttachments, { fileName: c.fileName, mimeType: c.mimeType, url: c.imageUrl, mediaId: c.mediaIdStr }] }));
                                            } catch (e) {}
                                    }
                                    if ((t.set(o, (e) => ({ ...e, text: a })), r)) {
                                        return e(await r.read());
                                    }
                                }
                            })(await r.read());
                        })
                        .catch((e) => {
                            t.set(o, (t) => ({ ...t, status: "completed", error: e.toString() }));
                        }),
                    o
                );
            };
        },
        309401: (e, t, r) => {
            r.d(t, { T: () => p, Z: () => m });
            r(136728), r(875640);
            var s = r(565058),
                o = r(323265),
                i = r(834949),
                a = r.n(i),
                n = r(420182),
                c = r(155918),
                d = r(623494),
                l = r(397159),
                u = r(774717);
            class m {
                constructor() {
                    (this.prompt = (0, s.cn)("")), (this.status = (0, s.cn)("idle")), (this.message = (0, s.cn)("")), (this.fileAttachments = (0, s.cn)([])), (this.upsell = (0, s.cn)(null));
                }
            }
            class p extends m {
                constructor(e) {
                    super(), (this.abortController = new AbortController()), (this.imageGenerationCount = 1), (this.conversationId = ""), (this.promptSource = "NATURAL"), (this._store = e);
                }
                abort() {
                    this.abortController.abort();
                }
                updateUpsell(e) {
                    this._store.set(this.upsell, e);
                }
                clearAttachments() {
                    this._store.set(this.fileAttachments, []);
                }
                updatePrompt(e) {
                    this._store.set(this.prompt, e);
                }
                updateMessage(e) {
                    this._store.set(this.message, e);
                }
                updateState(e) {
                    this._store.set(this.status, e);
                }
                addImageAttachmentUpdate(e) {
                    const t = { ...e };
                    this._store.set(this.fileAttachments, (r) => {
                        const s = [...r];
                        let o = !1;
                        for (let r = 0; r < s.length; r++)
                            if ((!s[r].imageId && !s[r].url) || s[r].imageId === e.imageIdStr) {
                                (s[r].imageId = t.imageIdStr), s[r].intermediateResults ? (s[r].intermediateResults = s[r].intermediateResults.concat([t])) : (s[r].intermediateResults = [t]), (o = !0);
                                break;
                            }
                        return o || s.push({ fileName: "image", mimeType: "image/jpeg", url: void 0, imageId: t.imageIdStr, intermediateResults: [t] }), s;
                    });
                }
                addAttachment(e) {
                    this._store.set(this.fileAttachments, (t) => {
                        const r = [...t];
                        let s = !1;
                        for (let t = 0; t < r.length; t++)
                            if ((!r[t].url && !r[t].imageId) || r[t].url === e.url || (e.url && r[t].imageId && e.url.includes(r[t].imageId))) {
                                (r[t] = { ...r[t], url: e.url, fileName: e.fileName, mimeType: e.mimeType }), (s = !0);
                                break;
                            }
                        return s || r.push({ ...e }), r;
                    });
                }
                setAttachmentCount(e) {
                    this._store.set(this.fileAttachments, (t) => {
                        if (t.length === e) return t;
                        const r = [...t];
                        let s = r.length;
                        for (r.length = Math.max(e, r.length); s < e; s++) r[s] = { imageId: "", fileName: "image", mimeType: "image/jpeg", url: void 0 };
                        return r;
                    });
                }
                async generate({ analytics: e, prompt: t }) {
                    (this.abortController = new AbortController()), this._store.set(this.fileAttachments, []);
                    const r = { message: this._store.get(this.prompt) ?? "", sender: c.CI.HUMAN },
                        s = this._store.get(n.dd);
                    if (!("POST_COMPOSER_IMAGE_GEN" === this.promptSource || "POST_COMPOSER_TEXT_GEN" === this.promptSource) && !this.conversationId) {
                        const t = await s.apiClient.graphQL(a(), {});
                        if (((this.conversationId = t.create_grok_conversation?.conversation_id || ""), !this.conversationId)) return void (0, d.Uk)(e, "conversation couln't be found or created");
                    }
                    const i = this.userChatItemId ? "REGENERATE" : "INPUT";
                    let l;
                    (l = "POST_COMPOSER_IMAGE_GEN" === this.promptSource ? { promptSource: "POST_COMPOSER_IMAGE_GEN", action: i } : "POST_COMPOSER_TEXT_GEN" === this.promptSource ? { promptSource: "POST_COMPOSER_TEXT_GEN", action: i } : { promptSource: "NATURAL", action: i }), t && t.toolOverrides && (this.toolOverrides = t.toolOverrides);
                    const u = { responses: [r], conversationId: this.conversationId || void 0, grokModelOptionId: this.model || "", systemPromptName: "", imageGenerationCount: this.imageGenerationCount, promptMetadata: l, resampleResponseId: this.userChatItemId, toolOverrides: this.toolOverrides || {} };
                    (0, d.pv)(e, { conversationLength: 1, isFileAttached: !1 }), this.updateMessage(""), t && t.onStart && t.onStart();
                    const m = this._store.get(n.f0),
                        p = !o.ZP.isTwitterApp() && m.isTrue("responsive_web_grok_api_enable_grok_host");
                    h({ api: s, analytics: e, requestBody: u, atoms: this, eventTag: this.userChatItemId ? "regenerate" : "", enableGrokApiHost: p });
                }
            }
            const h = ({ analytics: e, api: t, atoms: r, enableGrokApiHost: s, eventTag: i, requestBody: a }) => {
                const n = (function () {
                        const e = `grok-${o.ZP.isTwitterApp() ? (o.ZP.isAndroid() ? "android" : "ios") : "web"}:api-handler`,
                            t = u.P_();
                        function r(r) {
                            u.IM(`${e}:${r}`, t.end());
                        }
                        const s = new Set();
                        function i(e) {
                            s.has(e) || (s.add(e), r(e));
                        }
                        return { record: r, recordOnce: i };
                    })(),
                    c = i ? ` (${i})` : "";
                let m = "",
                    p = !1;
                return (
                    r.updateState("loading"),
                    t.fetchClient
                        .dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(a), signal: r.abortController?.signal }, s ? "https://grok.x.com" : void 0)
                        .then(async (t) => {
                            if (!t.ok) return n.record(`http-${t.status}`), r.updateState("error"), void (0, d.Uk)(e, `add-response failed with status ${t.status}${c}`);
                            const s = t.body?.getReader();
                            if (!s) return r.updateState("error"), void (0, d.Uk)(e, `reader was not found${c}`);
                            r.updateState("streaming");
                            const o = new TextDecoder();
                            let i = "";
                            const u = setTimeout(() => {
                                    (0, d.eS)(e, !0);
                                }, 5e3),
                                h = await s.read();
                            return (
                                clearTimeout(u),
                                (async function t({ done: u, value: h }) {
                                    if (u) m || p ? (r.updateState("complete"), n.record("time-to-last-chunk")) : (r.updateState("error"), (0, d.Uk)(e, `add-response failed to reach the network${c}`), n.record("network-error"));
                                    else if (h) {
                                        n.recordOnce("time-to-first-chunk");
                                        const c = o.decode(h);
                                        if (((i += c), i.includes("\n"))) {
                                            const t = i.split("\n");
                                            i = t.pop();
                                            for (const s of t)
                                                try {
                                                    const e = JSON.parse(s);
                                                    if ((e.userChatItemId && (r.userChatItemId = e.userChatItemId), e.result?.upsell && r.updateUpsell(e.result.upsell), e.result?.postIds || !e.result?.message || e.result?.isThinking || (e.result?.messageTag && e.result?.messageTag !== l.iS.FINAL) || ((m += e.result.message), r.updateMessage(m)), "error" === e.result?.responseType && r.clearAttachments(), e.result?.imageAttachmentCount)) {
                                                        let t = e.result.imageAttachmentCount;
                                                        a.imageGenerationCount && (t = Math.min(t, a.imageGenerationCount)), r.setAttachmentCount(t);
                                                    }
                                                    const t = e.result?.event;
                                                    if ((t && t.imageAttachmentUpdate && ((p = !0), r.addImageAttachmentUpdate({ imageIdStr: t.imageAttachmentUpdate.imageIdStr, imageId: t.imageAttachmentUpdate.imageId, progress: t.imageAttachmentUpdate.progress / 100, imageUrl: t.imageAttachmentUpdate.imageUrl })), "image" === e.result?.responseType || e.result?.imageAttachment?.imageUrl)) {
                                                        p = !0;
                                                        const t = { fileName: "image", mimeType: "image/jpeg", url: e.result.imageAttachment?.imageUrl ?? void 0 };
                                                        r.addAttachment(t);
                                                    }
                                                } catch (t) {
                                                    (0, d.kl)(e, t, { json: s });
                                                }
                                        }
                                        if (s) {
                                            const r = setTimeout(() => {
                                                    (0, d.eS)(e, !1);
                                                }, 5e3),
                                                o = await s.read();
                                            return clearTimeout(r), t(o);
                                        }
                                    }
                                })(h)
                            );
                        })
                        .catch((t) => {
                            t instanceof window.DOMException && "AbortError" === t.name ? n.record("abort") : ((0, d.kl)(e, t), n.record("error")), r.updateState("error");
                        })
                );
            };
        },
        965728: (e, t, r) => {
            r.d(t, { C_: () => f, I5: () => h, K2: () => _, L$: () => d, Rb: () => g, nk: () => p, sI: () => v, xr: () => S });
            var s = r(202784),
                o = r(483677),
                i = r(782578),
                a = r(401339),
                n = r(521514);
            const c = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                d = (e) => {
                    const t = e && o.Z.getForGallery(e);
                    return t ? { rgb: S(t), rgba: c(t, 0.9) } : m;
                },
                l = n.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                p = { transitionProperty: "background-color", transitionDuration: ".5s" },
                h = (e, t) => {
                    const { containerHeight: r, containerWidth: s, mediaHeight: o, mediaWidth: a } = e,
                        n = a && o ? a / o : 1,
                        c = n > 1,
                        d = t ? 400 : l,
                        m = c && (!a || a <= d) ? u(s, d) : s,
                        p = c || (o && !(o <= d)) ? r : u(r, d);
                    return i.Z.getContainDimensions({ width: m, height: p }, n);
                },
                g = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return d(t);
                },
                _ = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return d(t);
                },
                f = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return d(t);
                },
                S = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                b = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                v = () => {
                    const [e, t] = s.useReducer(b, { isZoomed: !1, showControls: !0 });
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
        584770: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s = r(202784),
                o = r(443781),
                i = r(337394);
            const a = () => {
                const { userClaims: e } = s.useContext(o.rC);
                return !i.cX.some((t) => e.hasSubscription(t)) && (e.hasSubscription("premium_standard") || e.hasSubscription("premium_basic"));
            };
        },
        15334: (e, t, r) => {
            r.d(t, { u: () => i });
            var s = r(202784),
                o = r(443781);
            const i = () => {
                const { userClaims: e } = s.useContext(o.rC);
                return e.hasSubscription("verified_org_full_access") || e.hasSubscription("verified_org_basic") || e.hasSubscription("verified_org_free") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_legacy") || e.hasSubscription("verified_org_affiliate") || e.hasSubscription("verified_org_gov_affiliate") || e.hasSubscription("premium_plus") ? "premium_plus" : e.hasSubscription("premium_standard") ? "premium_standard" : e.hasSubscription("premium_basic") ? "premium_basic" : "free";
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-65f95f73.7e17cada.js.map
