"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-3c20ad5c", "bundle.DirectMessages-6ac0f1a5"],
    {
        187268: (e, t, a) => {
            a.d(t, { Bv: () => _, Jw: () => v, cU: () => y, eC: () => x, rs: () => h, w$: () => w });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                r = a(392237),
                o = a(956272),
                s = a(520913),
                i = a(913315),
                c = a(355586),
                l = a(14284),
                u = a(492244),
                d = a(397159);
            const m = /<xai:tool_usage_card>\s*(?:<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)*)<\/xai:tool_usage_card>/g,
                p = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                f = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/;
            function h(e) {
                return e.replace(m, (e) => {
                    const t = (function (e) {
                        const { toolArgs: t, toolName: a } = g(e);
                        let n = `<tool_usage_card><tool_name>${a}</tool_name>`;
                        return (n += `<tool_args>${t}</tool_args>`), (n += "</tool_usage_card>"), n;
                    })(e);
                    return t ?? e;
                });
            }
            function _(e) {
                const t = e.match(m);
                if (t) {
                    const { toolArgs: e, toolName: a } = g(t[0]);
                    return v(a, e);
                }
                return null;
            }
            function g(e) {
                let t = "",
                    a = "";
                const n = e.match(p);
                n && (t = n[1]);
                const r = e.match(f);
                return r && (a = r[1].trim()), { toolName: t, toolArgs: a };
            }
            function v(e, t) {
                const a = t.match(/^<!\[CDATA\[(.*?)\]\]>/ms);
                let n = {};
                if (a)
                    try {
                        n = JSON.parse(a[1]);
                    } catch (e) {
                        n = {};
                    }
                return { name: e, args: n };
            }
            const x = "Using tools";
            function y(e) {
                switch (e.name) {
                    case "web_search":
                        return d.XR.WebSearchQueryFormatter({ query: e.args.query });
                    case "x_search":
                        return d.XR.XSearchQueryFormatter({ query: e.args.query });
                    case "browse_page": {
                        let t = e.args.url || "";
                        try {
                            t = new URL(t).hostname.replace("www.", "");
                        } catch (e) {}
                        return e.args.query ? d.XR.GenericURLQueryFormatter({ url: t, query: e.args.query }) : d.XR.BrowsePageFormatter({ url: t });
                    }
                    case "get_x_user_timeline":
                        return d.XR.XUsernameQuerySearchFormatter({ query: e.args.query, username: e.args.username });
                    default:
                        return e.name ?? x;
                }
            }
            function w(e) {
                const t = { style: { width: r.default.theme.spaces.space16, height: r.default.theme.spaces.space16 } };
                switch (e) {
                    case "search_news":
                    case "web_search":
                        return n.createElement(o.default, t);
                    case "x_search":
                    case "get_x_user_timeline":
                        return n.createElement(s.default, t);
                    case "call_finance_api":
                        return n.createElement(i.default, t);
                    case "call_sports_api":
                        return n.createElement(c.default, t);
                    case "browse_page":
                        return n.createElement(l.default, t);
                    default:
                        return n.createElement(u.default, t);
                }
            }
        },
        620988: (e, t, a) => {
            a.d(t, { ZH: () => x, ZP: () => w, x9: () => y });
            a(136728);
            var n = a(202784),
                r = a(726426),
                o = a.n(r),
                s = a(111677),
                i = a.n(s),
                c = a(88656),
                l = a(952793),
                u = a(782642),
                d = a(725405);
            a(571372);
            var m = a(623494),
                p = a(737368);
            const f = 4,
                h = i().h4d7cbcc,
                _ = i().j77292b7,
                g = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, t) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                v = n.createContext(g);
            function x({ children: e }) {
                const [t, a] = n.useState({}),
                    r = (0, u.p)(),
                    s = (0, d.Z)(),
                    i = (0, p.k)(),
                    g = (0, l.JY)("responsive_web_grok_file_upload_max_files", f),
                    x = n.useCallback(
                        (e) => {
                            const n = t[e];
                            n &&
                                (n.abortController?.abort(),
                                a((t) => {
                                    const a = { ...t };
                                    return delete a[e], a;
                                }));
                        },
                        [t, a],
                    ),
                    y = n.useCallback(
                        async (e, t) => {
                            const n = o()(),
                                l = new AbortController(),
                                u = { abortController: l, isUploading: !0, isPendingAutomaticPromptSend: t?.awaitPromptSend, local: e };
                            if (e.type.startsWith("image/"))
                                try {
                                    u.dimensions = await ((d = e),
                                    new Promise((e, t) => {
                                        if (!d.type.startsWith("image/")) return void t(new Error("File is not an image"));
                                        const a = new FileReader();
                                        (a.onload = (a) => {
                                            const n = new Image();
                                            (n.onload = () => {
                                                e({ width: n.width, height: n.height });
                                            }),
                                                (n.onerror = () => {
                                                    t(new Error("Failed to load image"));
                                                }),
                                                (n.src = a.target.result);
                                        }),
                                            (a.onerror = () => {
                                                t(new Error("Failed to read file"));
                                            }),
                                            a.readAsDataURL(d);
                                    }));
                                } catch (e) {}
                            var d;
                            a((e) => (Object.keys(e).length >= g ? (r({ text: _({ count: g }) }), e) : { ...e, [n]: u }));
                            try {
                                const t = await i(e, l);
                                (0, m.Jm)(s), (u.remote = { ...t, dimensions: u.dimensions }), a((e) => (e[n] ? { ...e, [n]: u } : e));
                            } catch (e) {
                                if (e instanceof c.Z && 0 === e.status) return;
                                (0, m.eV)(s, e.message),
                                    r({ text: h }),
                                    a((e) => {
                                        const t = { ...e };
                                        return delete t[n], t;
                                    });
                            } finally {
                                (u.isUploading = !1), a((e) => (e[n] ? { ...e, [n]: u } : e));
                            }
                        },
                        [g, r, i, s],
                    ),
                    w = n.useCallback(
                        async (e) => {
                            const n = o()(),
                                r = { abortController: new AbortController(), isUploading: !1, remote: e };
                            a({ ...t, [n]: r });
                        },
                        [t],
                    );
                return n.createElement(v.Provider, { value: { selectedFiles: t, onFileSelected: y, clearSelectedFile: x, onGrokFileSelected: w } }, e);
            }
            function y() {
                const e = (0, l.hC)("responsive_web_grok_pdf_upload_enabled"),
                    t = (0, l.hC)("responsive_web_grok_text_upload_enabled");
                return n.useMemo(() => {
                    const a = ["image/jpeg", "image/png", "image/webp"];
                    return e && a.push("application/pdf"), t && (a.push("text/plain"), a.push("text/xml"), a.push("text/csv"), a.push("text/markdown"), a.push("text/x-markdown"), a.push("text/md"), a.push("text/calendar"), a.push("text/vcard"), a.push("text/json"), a.push("text/yaml"), a.push("text/x-python"), a.push("text/x-csrc"), a.push("text/x-c++src"), a.push("text/x-csharp"), a.push("text/x-ruby"), a.push("text/x-java-source"), a.push("text/x-go"), a.push("text/x-rust"), a.push("text/x-swift"), a.push("text/x-kotlin"), a.push("text/x-sql"), a.push("text/x-lua"), a.push("text/x-scala"), a.push("text/x-haskell"), a.push("text/x-php"), a.push("text/x-perl"), a.push("text/x-shellscript"), a.push("text/x-rsrc"), a.push("text/x-dart"), a.push("application/markdown"), a.push("application/xml"), a.push("application/json"), a.push("application/x-yaml"), a.push("application/x-latex"), a.push("application/x-sh"), a.push("application/x-msdownload"), a.push("application/x-httpd-php"), a.push("application/sql"), a.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), a.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")), a;
                }, [e, t]);
            }
            function w() {
                return n.useContext(v);
            }
        },
        737368: (e, t, a) => {
            a.d(t, { k: () => g });
            a(571372);
            var n = a(202784),
                r = a(111677),
                o = a.n(r),
                s = a(276259),
                i = a(952793),
                c = a(782642),
                l = a(725516),
                u = a(125363),
                d = a(458810),
                m = a(623494),
                p = a(620988);
            const f = o().c74e87e0,
                h = o().bea50a2a,
                _ = (e) => e.toLowerCase().replace(/\/$/, ""),
                g = () => {
                    const e = (0, c.p)(),
                        t = (0, l.z)(),
                        a = (0, u.I0)(),
                        r = (0, p.x9)(),
                        o = (0, i.hC)("responsive_web_grok_file_compression_enabled"),
                        g = (0, i.JY)("responsive_web_grok_file_max_size", 5242880);
                    return n.useCallback(
                        async (n, i) => {
                            let c = n;
                            if (
                                !((e, t) => {
                                    const a = _(t);
                                    return e.some((e) => {
                                        const t = _(e);
                                        if (t.endsWith("*")) {
                                            const e = t.slice(0, -1);
                                            return a.startsWith(e);
                                        }
                                        return a === t;
                                    });
                                })(r, n.type)
                            )
                                throw (e({ text: h }), (0, m.op)(t, `file has unsupported type: ${n.type}`), new Error());
                            if (o) {
                                let a;
                                try {
                                    a = await (0, s.hv)(n, g);
                                } catch (e) {}
                                if (!a) throw (e({ text: f }), (0, m.op)(t, "failed to compress the file"), new Error());
                                c = a;
                            } else if (n.size > g) throw (e({ text: f }), (0, m.op)(t, "file is too large"), new Error());
                            const l = await a((0, d.t)(c, i));
                            return (0, m.Jm)(t), l;
                        },
                        [e, t, a, o, g, r],
                    );
                };
        },
        654917: (e, t, a) => {
            a.d(t, { ZP: () => h, eX: () => p, uf: () => f });
            var n = a(202784),
                r = a(107267),
                o = a(323265),
                s = a(791632),
                i = a(443781),
                c = a(952793),
                l = a(125363),
                u = a(389071),
                d = a(63538),
                m = a(623494);
            function p() {
                const e = (0, r.useHistory)(),
                    t = (0, l.v9)(u.Es);
                return (0, s.HD)(e) ? (0, s.tT)(e) : t;
            }
            function f() {
                const e = p(),
                    t = (0, l.I0)(),
                    a = (0, l.v9)((t) => (0, u.YJ)(t, e));
                return (0, l.v9)(a.selectIsInitialized) || t((0, u.Ki)(e)), a;
            }
            function h() {
                const { userClaims: e } = (0, i.QZ)(),
                    t = p(),
                    a = f(),
                    r = (0, l.v9)(a.selectMessageIds),
                    s = (0, l.I0)(),
                    h = (0, l.v9)(a.selectFetchConversationIdStatus),
                    _ = (0, l.v9)(a.selectFetchConversationIdError),
                    g = (0, l.v9)(a.selectMode),
                    v = (0, l.v9)(a.selectStatus),
                    x = (0, l.v9)(u.Pt),
                    y = (0, l.v9)(a.selectConversationId),
                    w = (0, l.v9)(u.pZ),
                    k = (0, l.v9)(u.uF),
                    S = (0, l.v9)(u.F9),
                    b = (0, l.v9)(a.selectAnalysisEntityId),
                    E = (0, l.v9)(a.selectUsingExperiment);
                let C = !1;
                const I = (0, c.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (C = "premium") : (I || k) && (C = w.length > 0 ? "restricted" : "free");
                const N = n.useCallback(
                        async (e, t) => {
                            g !== e && (s(a.setMode(e)), o.ZP.isTwitterApp() || (await s((0, d.O)(e, S))), (0, m.RC)(t, e));
                        },
                        [s, a, g, S],
                    ),
                    Z = n.useCallback(
                        async (e, t, a) => {
                            e !== S && (s((0, u.j1)(e, t)), o.ZP.isTwitterApp() || (await s((0, d.O)(g, e))), (0, m.JO)(a, e));
                        },
                        [s, g, S],
                    );
                return { messageIds: r, access: C, status: v, grokSettingsStatus: x, conversationKey: t, conversationId: y, analysisEntityId: b, accessRestrictedReasons: w, fetchConversationIdStatus: h, fetchConversationIdError: _, mode: g, model: S, changeMode: N, changeModel: Z, usingExperiment: E };
            }
        },
        979512: (e, t, a) => {
            a.d(t, { Z: () => F });
            a(136728);
            var n = a(202784),
                r = a(107267),
                o = a(726426),
                s = a.n(o),
                i = a(111677),
                c = a.n(i),
                l = a(122123),
                u = a(443781),
                d = a(292484),
                m = a(952793),
                p = a(782642),
                f = a(293115),
                h = a(252352),
                _ = a(125363),
                g = a(550293),
                v = a(511582),
                x = a(389071),
                y = a(96275),
                w = a(327597),
                k = a(189953),
                S = a(456228),
                b = a(551864),
                E = a(623494),
                C = a(461900),
                I = a(737368),
                N = a(654917),
                Z = a(305442);
            const A = c().h4d7cbcc;
            function F() {
                const e = n.useContext(f.ge),
                    t = n.useMemo(() => {
                        const { data: t, flushMethod: a, scribeMethod: n } = e;
                        return new h.Z(n, { page: "grok-drawer" }, t, a);
                    }, [e]),
                    a = (0, u.QZ)(),
                    o = (0, _.I0)(),
                    i = (0, p.p)(),
                    c = (0, r.useLocation)(),
                    F = (0, m.hC)("responsive_web_grok_show_citations"),
                    { conversationKey: O } = (0, N.ZP)(),
                    R = (0, d.cm)(),
                    U = !c.pathname.startsWith("/messages") && !c.pathname.match(".*/status/.+/photo/.+") && !c.pathname.startsWith("/i/grok/feed"),
                    P = (0, r.useHistory)(),
                    J = (0, I.k)(),
                    M = (0, Z.Z)("drawer"),
                    B = (0, _.v9)(g.kX) === v.S.EXPANDED;
                return {
                    openGrok: n.useCallback(
                        async ({ autoSubmit: e, conversationId: n, imageUrl: r, isDeepsearch: u, isImageEdit: d, isReasoning: m, mediaId: p, promptMetadata: f, source: h, text: _ }) => {
                            if (!(0, C.$)(a)) return void P.push("/i/grok");
                            let I;
                            if ((("post_analysis_timeline" !== h && "post_analysis_details_page" !== h) || (0, E.HO)(t, "post_analysis_details_page" === h), r))
                                try {
                                    const e = await (0, l.o2)(r);
                                    I = await J(e, new AbortController());
                                } catch (e) {
                                    i({ text: A });
                                }
                            const N = {};
                            if ((("post_image_annotation" !== h && "post_image_annotation_fullscreen" !== h) || ((N.imageGen = !0), (0, E.u1)(t, "post_image_annotation_fullscreen" === h, p)), "grok_image_feed" === h && (N.imageGen = !0), c.pathname.startsWith("/i/grok") && !c.pathname.startsWith("/i/grok/feed"))) return void o((0, w.u)({ analytics: t, conversationKey: O })({ text: _, attachments: I ? [I] : void 0, mode: k.IK.REGULAR, returnCitations: F, promptMetadata: f, imageGenerationCount: M, toolOverrides: N, source: h, isDeepsearch: u, isReasoning: m }));
                            const Z = n ?? s()();
                            if (n) {
                                const e = n || "";
                                await o((0, y.d)(e, t));
                            } else o((0, x.Ki)(Z));
                            if ((R && U ? ((0, E.YW)(t, h), B && o(g.bi(v.S.COLLAPSED)), o((0, S.bi)(b.j.EXPANDED))) : P.push("/i/grok"), e)) o((0, w.u)({ analytics: t, conversationKey: Z })({ text: _, attachments: I ? [I] : void 0, mode: k.IK.REGULAR, promptMetadata: f, returnCitations: F, imageGenerationCount: M, toolOverrides: N, source: h, isDeepsearch: u, isReasoning: m }));
                            else {
                                const e = { text: _, attachments: I ? [I] : [] };
                                d && I ? (e.modeButtonFilterKey = "ImageEdit") : u ? (e.modeButtonFilterKey = "Research") : m && (e.modeButtonFilterKey = "Reasoning"), o((0, x.Uo)(Z, e));
                            }
                        },
                        [B, i, o, t, a, P, J, R, O, F, U, c.pathname, M],
                    ),
                };
            }
        },
        305442: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(952793);
            function r(e) {
                return (0, n.JY)("responsive_web_grok_imggen_count", 1);
            }
        },
        623494: (e, t, a) => {
            a.d(t, { DE: () => f, G$: () => i, HO: () => C, HR: () => A, JO: () => g, Jm: () => b, NH: () => F, RC: () => _, S7: () => Z, UV: () => R, Uk: () => k, YI: () => u, YW: () => N, ZY: () => h, az: () => c, c3: () => s, dP: () => x, dd: () => p, eS: () => S, eV: () => E, hf: () => v, hq: () => l, kl: () => w, mm: () => m, op: () => y, pv: () => o, qQ: () => P, u1: () => I, y6: () => d, zC: () => O, zX: () => U });
            var n = a(163889);
            function r() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function o(e, t) {
                J(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function s(e, t) {
                J(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function i(e, t) {
                J(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function c(e, t, a) {
                J(e)({ element: "client-home-log", action: t, data: { event_info: JSON.stringify(a) } });
            }
            function l(e, t) {
                J(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: t.errorMessage }), duration_ms: t.durationMs } });
            }
            function u(e, t) {
                J(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(t.messageTagCounts), duration_ms: t.durationMs } });
            }
            function d(e, t) {
                J(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: t } });
            }
            function m(e, t, a) {
                J(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: t, error: a }) } });
            }
            function p(e, t) {
                J(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function f(e) {
                J(e)({ element: "abort", action: "click" });
            }
            function h(e) {
                J(e)({ element: "clear-conversation", action: "click" });
            }
            function _(e, t) {
                J(e)({ element: "grok_mode", action: "change", data: { event_info: t } });
            }
            function g(e, t) {
                J(e)({ element: "grok_model", action: "change", data: { event_info: t } });
            }
            function v(e, t) {
                J(e)({ element: "tweet-carousel", action: "change", data: { event_info: t.toString() } });
            }
            function x(e, t) {
                J(e)({ element: "file-attachment", action: "add", data: { event_info: t } });
            }
            function y(e, t) {
                J(e)({ element: "file-attachment", action: "fail", data: { event_info: t } });
            }
            function w(e, t, a) {
                J(e)({ element: "api-add-response", action: "error", data: { event_info: `${t.message}\n${t.stack}\n${r()}` } }), (0, n.Hj)(t, { level: "warning", extra: a });
            }
            function k(e, t) {
                J(e)({ element: "api-add-response", action: "fail", data: { event_info: `${t}\n${r()}` } });
            }
            function S(e, t) {
                J(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: t ? "first_chunk" : void 0 } });
            }
            function b(e) {
                J(e)({ element: "file-upload", action: "success" });
            }
            function E(e, t) {
                J(e)({ element: "file-upload", action: "fail", data: { event_info: t } });
            }
            function C(e, t) {
                J(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: t ? "post_details" : "timeline" } });
            }
            function I(e, t, a) {
                J(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: t ? "post_details" : "timeline", event_info: a ? JSON.stringify({ mediaId: a }) : void 0 } });
            }
            function N(e, t) {
                J(e)({ element: "grok-drawer-open", action: "success", data: { event_source: t } });
            }
            function Z(e, t) {
                J(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant }) } });
            }
            function A(e, t, a) {
                J(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant, followUpText: a }) } });
            }
            function F(e) {
                J(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function O(e, t) {
                J(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            function R(e, t) {
                J(e)({ element: "grok-memory-forget", action: "click", data: { event_info: t } });
            }
            function U(e, t, a) {
                J(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: t, error: a }) } });
            }
            function P(e, t) {
                J(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            const J = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        156607: (e, t, a) => {
            a.r(t), a.d(t, { UserAvatarScreen: () => y, default: () => w });
            var n = a(202784),
                r = a(290402),
                o = a(300234),
                s = a(827094),
                i = a(449067),
                c = a(666670),
                l = a(965728),
                u = a(615027),
                d = a(71620),
                m = a(668214),
                p = a(919022),
                f = a(312771);
            const h = (0, p.W3)([p.pL]),
                _ = (e, t) => {
                    const a = g(e, t);
                    return a ? h(e, a) : f.ZP.LOADING;
                },
                g = (e, t) => t.match.params.screenName,
                v = (e, t) => {
                    const a = g(e, t);
                    return a ? p.ZP.selectByScreenName(e, a) : void 0;
                },
                x = (0, m.Z)()
                    .propsFromState(() => ({ fetchStatus: _, screenName: g, user: v }))
                    .adjustStateProps(({ fetchStatus: e, screenName: t, user: a }) => ({ fetchStatus: e, screenName: t, user: a, mediaItem: a ? { id_str: a.id_str, expanded_url: a.profile_image_url_https, media_url_https: a.profile_image_url_https, ext_alt_text: a.profile_image_extensions_alt_text, type: "photo", original_info: { width: 400, height: 400 } } : void 0 }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("USER_AVATAR"), fetchOneUserByScreenNameIfNeeded: p.ZP.fetchOneByScreenNameIfNeeded })),
                y = (e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: a, fetchStatus: d, history: m, mediaItem: p, screenName: f, user: h } = e,
                        _ = (0, l.K2)(h),
                        { handleMediaDetailZoomed: g, handleMediaItemTapped: v, hideButtons: x } = (0, l.sI)(),
                        y = () => {
                            m.goBack({ backLocation: `/${f}` });
                        };
                    n.useEffect(() => {
                        ((e, t, a) => {
                            e(a).catch(t(c.F));
                        })(a, t, f);
                    }, [t, a, f]);
                    return n.createElement(
                        i.Z.Configure,
                        { headerless: !0 },
                        n.createElement(
                            s.Z,
                            { backgroundColor: _, hideButtons: x, mediaUrl: h && h.profile_image_url_https, onCloseButtonPress: y },
                            n.createElement(r.Z, {
                                fetchStatus: d,
                                render: () => {
                                    const e = (0, l.K2)(h);
                                    return h && p ? n.createElement(o.Z, { businessAvatar: "Business" === h.verified_type, dataSaver: !1, dominantColor: e.rgb, isAvatar: !0, mediaIndex: 0, mediaItems: [p], onDismiss: y, onMediaDetailZoomed: g, onTap: v }) : n.createElement(u.Z, { to: `/${f}` });
                                },
                                renderFailure: () => n.createElement(u.Z, { to: `/${f}` }),
                                retryable: !1,
                            }),
                        ),
                    );
                },
                w = x(y);
        },
        332912: (e, t, a) => {
            a.r(t), a.d(t, { UserHeaderScreen: () => y, default: () => w });
            var n = a(202784),
                r = a(290402),
                o = a(300234),
                s = a(827094),
                i = a(449067),
                c = a(666670),
                l = a(965728),
                u = a(615027),
                d = a(71620),
                m = a(668214),
                p = a(919022);
            const f = (0, p.W3)([p.pL]),
                h = (e, t) => f(e, _(e, t)),
                _ = (e, t) => t.match.params.screenName,
                g = (e, t) => p.ZP.selectByScreenName(e, _(e, t)),
                v = (0, m.Z)()
                    .propsFromState(() => ({ fetchStatus: h, screenName: _, user: g }))
                    .adjustStateProps(({ fetchStatus: e, screenName: t, user: a }) => ({ fetchStatus: e, screenName: t, user: a, mediaItem: a ? { id_str: a.id_str, expanded_url: a.profile_banner_url, media_url_https: a.profile_banner_url, ext_alt_text: a.profile_banner_extensions_alt_text, type: "photo", original_info: { width: 1500, height: 500 } } : void 0 }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("USER_HEADER"), fetchOneUserByScreenNameIfNeeded: p.ZP.fetchOneByScreenNameIfNeeded })),
                x = (e, t, a) => {
                    e(a).catch(t(c.F));
                },
                y = (e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: a, fetchStatus: c, history: d, mediaItem: m, screenName: p, user: f } = e,
                        h = (0, l.C_)(f),
                        { handleMediaDetailZoomed: _, handleMediaItemTapped: g, hideButtons: v } = (0, l.sI)(),
                        y = () => {
                            d.goBack({ backLocation: `/${p}` });
                        };
                    return (
                        n.useEffect(() => {
                            x(a, t, p);
                        }, [t, a, p]),
                        n.createElement(
                            i.Z.Configure,
                            { headerless: !0 },
                            n.createElement(
                                s.Z,
                                { backgroundColor: h, hideButtons: v, mediaUrl: f && f.profile_banner_url, onCloseButtonPress: y },
                                n.createElement(r.Z, {
                                    fetchStatus: c,
                                    onRequestRetry: () => x(a, t, p),
                                    render: () => {
                                        const e = (0, l.C_)(f);
                                        return f && m ? n.createElement(o.Z, { dataSaver: !1, dominantColor: e.rgb, mediaIndex: 0, mediaItems: [m], onDismiss: y, onMediaDetailZoomed: _, onTap: g }) : n.createElement(u.Z, { to: `/${p}` });
                                    },
                                }),
                            ),
                        )
                    );
                },
                w = v(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-3c20ad5c.082df29a.js.map
