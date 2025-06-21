"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-3c20ad5c", "bundle.DirectMessages-6ac0f1a5"],
    {
        187268: (e, t, a) => {
            a.d(t, { CK: () => y, Ez: () => f, QK: () => g, Sd: () => x, eC: () => v, w$: () => w });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                r = a(392237),
                o = a(784732),
                s = a(14284),
                i = a(520913),
                c = a(913315),
                l = a(355586),
                d = a(492244),
                u = a(397159);
            const m = /<xai:tool_usage_card>\s*(?:<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>\s*)?<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)<\/xai:tool_usage_card>/g,
                p = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                _ = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/,
                h = /<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>/;
            function f(e) {
                return e.replace(m, (e) => {
                    const t = (function (e) {
                        const t = e.match(p),
                            a = e.match(_),
                            n = e.match(h),
                            r = t ? t[1] : "",
                            o = a ? a[1] : "",
                            s = n ? n[1] : "";
                        let i = "<tool_usage_card>";
                        return s && (i += `<tool_usage_card_id>${s}</tool_usage_card_id>`), (i += `<tool_name>${r}</tool_name>`), (i += `<tool_args>${o}</tool_args>`), (i += "</tool_usage_card>"), i;
                    })(e);
                    return t ?? e;
                });
            }
            function g(e) {
                const t = e.match(m);
                if (t) {
                    const {
                        args: e,
                        id: a,
                        name: n,
                    } = (function (e) {
                        let t = "",
                            a = "",
                            n = "";
                        const r = e.match(h);
                        r && (t = r[1]);
                        const o = e.match(p);
                        o && (a = o[1]);
                        const s = e.match(_);
                        s && (n = s[1].trim());
                        return { id: t, name: a, args: n };
                    })(t[0]);
                    return x(a, n, e);
                }
                return null;
            }
            function x(e, t, a) {
                const n = a.match(/^<!\[CDATA\[(.*?)\]\]>/ms);
                let r = {};
                if (n)
                    try {
                        r = JSON.parse(n[1]);
                    } catch (e) {
                        r = {};
                    }
                return { id: e, name: t, args: r };
            }
            const v = "Using tools";
            function y(e) {
                switch (e.name) {
                    case "web_search":
                        return u.XR.WebSearchQueryFormatter({ query: e.args.query });
                    case "x_search":
                    case "x_keyword_search":
                    case "x_semantic_search":
                    case "x_user_search":
                        return u.XR.XSearchQueryFormatter({ query: e.args.query });
                    case "browse_page": {
                        let t = e.args.url || "";
                        try {
                            t = new URL(t).hostname.replace("www.", "");
                        } catch (e) {}
                        return e.args.query ? u.XR.GenericURLQueryFormatter({ url: t, query: e.args.query }) : u.XR.BrowsePageFormatter({ url: t });
                    }
                    case "get_x_user_timeline":
                        return u.XR.XUsernameQuerySearchFormatter({ query: e.args.query, username: e.args.username });
                    default:
                        return e.name ?? v;
                }
            }
            function w(e) {
                const t = { style: { width: r.default.theme.spaces.space16, height: r.default.theme.spaces.space16 } };
                switch (e) {
                    case "search_news":
                        return n.createElement(o.default, t);
                    case "web_search":
                    case "browse_page":
                        return n.createElement(s.default, t);
                    case "x_search":
                    case "get_x_user_timeline":
                    case "x_keyword_search":
                    case "x_semantic_search":
                    case "x_user_search":
                        return n.createElement(i.default, t);
                    case "call_finance_api":
                        return n.createElement(c.default, t);
                    case "call_sports_api":
                        return n.createElement(l.default, t);
                    default:
                        return n.createElement(d.default, t);
                }
            }
        },
        620988: (e, t, a) => {
            a.d(t, { ZH: () => v, ZP: () => w, x9: () => y });
            a(136728);
            var n = a(202784),
                r = a(726426),
                o = a.n(r),
                s = a(111677),
                i = a.n(s),
                c = a(88656),
                l = a(952793),
                d = a(782642),
                u = a(725405);
            a(571372);
            var m = a(623494),
                p = a(737368);
            const _ = 4,
                h = i().h4d7cbcc,
                f = i().j77292b7,
                g = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, t) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                x = n.createContext(g);
            function v({ children: e }) {
                const [t, a] = n.useState({}),
                    r = (0, d.p)(),
                    s = (0, u.Z)(),
                    i = (0, p.k)(),
                    g = (0, l.JY)("responsive_web_grok_file_upload_max_files", _),
                    v = n.useCallback(
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
                                d = { abortController: l, isUploading: !0, isPendingAutomaticPromptSend: t?.awaitPromptSend, local: e };
                            if (e.type.startsWith("image/"))
                                try {
                                    d.dimensions = await ((u = e),
                                    new Promise((e, t) => {
                                        if (!u.type.startsWith("image/")) return void t(new Error("File is not an image"));
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
                                            a.readAsDataURL(u);
                                    }));
                                } catch (e) {}
                            var u;
                            a((e) => (Object.keys(e).length >= g ? (r({ text: f({ count: g }) }), e) : { ...e, [n]: d }));
                            try {
                                const t = await i(e, l);
                                (0, m.Jm)(s), (d.remote = { ...t, dimensions: d.dimensions }), a((e) => (e[n] ? { ...e, [n]: d } : e));
                            } catch (e) {
                                if (e instanceof c.Z && 0 === e.status) return;
                                (0, m.eV)(s, e.message),
                                    r({ text: h }),
                                    a((e) => {
                                        const t = { ...e };
                                        return delete t[n], t;
                                    });
                            } finally {
                                (d.isUploading = !1), a((e) => (e[n] ? { ...e, [n]: d } : e));
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
                return n.createElement(x.Provider, { value: { selectedFiles: t, onFileSelected: y, clearSelectedFile: v, onGrokFileSelected: w } }, e);
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
                return n.useContext(x);
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
                d = a(125363),
                u = a(458810),
                m = a(623494),
                p = a(620988);
            const _ = o().c74e87e0,
                h = o().bea50a2a,
                f = (e) => e.toLowerCase().replace(/\/$/, ""),
                g = () => {
                    const e = (0, c.p)(),
                        t = (0, l.z)(),
                        a = (0, d.I0)(),
                        r = (0, p.x9)(),
                        o = (0, i.hC)("responsive_web_grok_file_compression_enabled"),
                        g = (0, i.JY)("responsive_web_grok_file_max_size", 5242880);
                    return n.useCallback(
                        async (n, i) => {
                            let c = n;
                            if (
                                !((e, t) => {
                                    const a = f(t);
                                    return e.some((e) => {
                                        const t = f(e);
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
                                if (!a) throw (e({ text: _ }), (0, m.op)(t, "failed to compress the file"), new Error());
                                c = a;
                            } else if (n.size > g) throw (e({ text: _ }), (0, m.op)(t, "file is too large"), new Error());
                            const l = await a((0, u.t)(c, i));
                            return (0, m.Jm)(t), l;
                        },
                        [e, t, a, o, g, r],
                    );
                };
        },
        654917: (e, t, a) => {
            a.d(t, { ZP: () => h, eX: () => p, uf: () => _ });
            var n = a(202784),
                r = a(107267),
                o = a(323265),
                s = a(791632),
                i = a(443781),
                c = a(952793),
                l = a(125363),
                d = a(389071),
                u = a(63538),
                m = a(623494);
            function p() {
                const e = (0, r.useHistory)(),
                    t = (0, l.v9)(d.Es);
                return (0, s.HD)(e) ? (0, s.tT)(e) : t;
            }
            function _() {
                const e = p(),
                    t = (0, l.I0)(),
                    a = (0, l.v9)((t) => (0, d.YJ)(t, e));
                return (0, l.v9)(a.selectIsInitialized) || t((0, d.Ki)(e)), a;
            }
            function h() {
                const { userClaims: e } = (0, i.QZ)(),
                    t = p(),
                    a = _(),
                    r = (0, l.v9)(a.selectMessageIds),
                    s = (0, l.I0)(),
                    h = (0, l.v9)(a.selectFetchConversationIdStatus),
                    f = (0, l.v9)(a.selectFetchConversationIdError),
                    g = (0, l.v9)(a.selectMode),
                    x = (0, l.v9)(a.selectStatus),
                    v = (0, l.v9)(d.Pt),
                    y = (0, l.v9)(a.selectConversationId),
                    w = (0, l.v9)(d.pZ),
                    k = (0, l.v9)(d.uF),
                    S = (0, l.v9)(d.F9),
                    b = (0, l.v9)(a.selectAnalysisEntityId),
                    E = (0, l.v9)(a.selectUsingExperiment);
                let C = !1;
                const I = (0, c.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (C = "premium") : (I || k) && (C = w.length > 0 ? "restricted" : "free");
                const N = n.useCallback(
                        async (e, t) => {
                            g !== e && (s(a.setMode(e)), o.ZP.isTwitterApp() || (await s((0, u.O)(e, S))), (0, m.RC)(t, e));
                        },
                        [s, a, g, S],
                    ),
                    Z = n.useCallback(
                        async (e, t, a) => {
                            e !== S && (s((0, d.j1)(e, t)), o.ZP.isTwitterApp() || (await s((0, u.O)(g, e))), (0, m.JO)(a, e));
                        },
                        [s, g, S],
                    );
                return { messageIds: r, access: C, status: x, grokSettingsStatus: v, conversationKey: t, conversationId: y, analysisEntityId: b, accessRestrictedReasons: w, fetchConversationIdStatus: h, fetchConversationIdError: f, mode: g, model: S, changeMode: N, changeModel: Z, usingExperiment: E };
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
                d = a(443781),
                u = a(292484),
                m = a(952793),
                p = a(782642),
                _ = a(293115),
                h = a(252352),
                f = a(125363),
                g = a(550293),
                x = a(511582),
                v = a(389071),
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
                const e = n.useContext(_.ge),
                    t = n.useMemo(() => {
                        const { data: t, flushMethod: a, scribeMethod: n } = e;
                        return new h.Z(n, { page: "grok-drawer" }, t, a);
                    }, [e]),
                    a = (0, d.QZ)(),
                    o = (0, f.I0)(),
                    i = (0, p.p)(),
                    c = (0, r.useLocation)(),
                    F = (0, m.hC)("responsive_web_grok_show_citations"),
                    { conversationKey: O } = (0, N.ZP)(),
                    R = (0, u.cm)(),
                    P = !c.pathname.startsWith("/messages") && !c.pathname.match(".*/status/.+/photo/.+") && !c.pathname.startsWith("/i/grok/feed"),
                    U = (0, r.useHistory)(),
                    M = (0, I.k)(),
                    J = (0, Z.Z)("drawer"),
                    B = (0, f.v9)(g.kX) === x.S.EXPANDED;
                return {
                    openGrok: n.useCallback(
                        async ({ autoSubmit: e, conversationId: n, imageUrl: r, isDeepsearch: d, isImageEdit: u, isReasoning: m, mediaId: p, promptMetadata: _, source: h, text: f }) => {
                            if (!(0, C.$)(a)) return void U.push("/i/grok");
                            let I;
                            if ((("post_analysis_timeline" !== h && "post_analysis_details_page" !== h) || (0, E.HO)(t, "post_analysis_details_page" === h), r))
                                try {
                                    const e = await (0, l.o2)(r);
                                    I = await M(e, new AbortController());
                                } catch (e) {
                                    i({ text: A });
                                }
                            const N = {};
                            if ((("post_image_annotation" !== h && "post_image_annotation_fullscreen" !== h) || ((N.imageGen = !0), (0, E.u1)(t, "post_image_annotation_fullscreen" === h, p)), "grok_image_feed" === h && (N.imageGen = !0), c.pathname.startsWith("/i/grok") && !c.pathname.startsWith("/i/grok/feed"))) return void o((0, w.u)({ analytics: t, conversationKey: O })({ text: f, attachments: I ? [I] : void 0, mode: k.IK.REGULAR, returnCitations: F, promptMetadata: _, imageGenerationCount: J, toolOverrides: N, source: h, isDeepsearch: d, isReasoning: m }));
                            const Z = n ?? s()();
                            if (n) {
                                const e = n || "";
                                await o((0, y.d)(e, t));
                            } else o((0, v.Ki)(Z));
                            if ((R && P ? ((0, E.YW)(t, h), B && o(g.bi(x.S.COLLAPSED)), o((0, S.bi)(b.j.EXPANDED))) : U.push("/i/grok"), e)) o((0, w.u)({ analytics: t, conversationKey: Z })({ text: f, attachments: I ? [I] : void 0, mode: k.IK.REGULAR, promptMetadata: _, returnCitations: F, imageGenerationCount: J, toolOverrides: N, source: h, isDeepsearch: d, isReasoning: m }));
                            else {
                                const e = { text: f, attachments: I ? [I] : [] };
                                u && I ? (e.modeButtonFilterKey = "ImageEdit") : d ? (e.modeButtonFilterKey = "Research") : m && (e.modeButtonFilterKey = "Reasoning"), o((0, v.Uo)(Z, e));
                            }
                        },
                        [B, i, o, t, a, U, M, R, O, F, P, c.pathname, J],
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
            a.d(t, { DE: () => _, G$: () => i, HO: () => C, HR: () => A, JO: () => g, Jm: () => b, NH: () => F, RC: () => f, S7: () => Z, UV: () => R, Uk: () => k, YI: () => d, YW: () => N, ZY: () => h, az: () => c, c3: () => s, dP: () => v, dd: () => p, eS: () => S, eV: () => E, hf: () => x, hq: () => l, kl: () => w, mm: () => m, op: () => y, pv: () => o, qQ: () => U, u1: () => I, y6: () => u, zC: () => O, zX: () => P });
            var n = a(163889);
            function r() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function o(e, t) {
                M(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function s(e, t) {
                M(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function i(e, t) {
                M(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function c(e, t, a) {
                M(e)({ element: "client-home-log", action: t, data: { event_info: JSON.stringify(a) } });
            }
            function l(e, t) {
                M(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: t.errorMessage }), duration_ms: t.durationMs } });
            }
            function d(e, t) {
                M(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(t.messageTagCounts), duration_ms: t.durationMs } });
            }
            function u(e, t) {
                M(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: t } });
            }
            function m(e, t, a) {
                M(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: t, error: a }) } });
            }
            function p(e, t) {
                M(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function _(e) {
                M(e)({ element: "abort", action: "click" });
            }
            function h(e) {
                M(e)({ element: "clear-conversation", action: "click" });
            }
            function f(e, t) {
                M(e)({ element: "grok_mode", action: "change", data: { event_info: t } });
            }
            function g(e, t) {
                M(e)({ element: "grok_model", action: "change", data: { event_info: t } });
            }
            function x(e, t) {
                M(e)({ element: "tweet-carousel", action: "change", data: { event_info: t.toString() } });
            }
            function v(e, t) {
                M(e)({ element: "file-attachment", action: "add", data: { event_info: t } });
            }
            function y(e, t) {
                M(e)({ element: "file-attachment", action: "fail", data: { event_info: t } });
            }
            function w(e, t, a) {
                M(e)({ element: "api-add-response", action: "error", data: { event_info: `${t.message}\n${t.stack}\n${r()}` } }), (0, n.Hj)(t, { level: "warning", extra: a });
            }
            function k(e, t) {
                M(e)({ element: "api-add-response", action: "fail", data: { event_info: `${t}\n${r()}` } });
            }
            function S(e, t) {
                M(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: t ? "first_chunk" : void 0 } });
            }
            function b(e) {
                M(e)({ element: "file-upload", action: "success" });
            }
            function E(e, t) {
                M(e)({ element: "file-upload", action: "fail", data: { event_info: t } });
            }
            function C(e, t) {
                M(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: t ? "post_details" : "timeline" } });
            }
            function I(e, t, a) {
                M(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: t ? "post_details" : "timeline", event_info: a ? JSON.stringify({ mediaId: a }) : void 0 } });
            }
            function N(e, t) {
                M(e)({ element: "grok-drawer-open", action: "success", data: { event_source: t } });
            }
            function Z(e, t) {
                M(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant }) } });
            }
            function A(e, t, a) {
                M(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant, followUpText: a }) } });
            }
            function F(e) {
                M(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function O(e, t) {
                M(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            function R(e, t) {
                M(e)({ element: "grok-memory-forget", action: "click", data: { event_info: t } });
            }
            function P(e, t, a) {
                M(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: t, error: a }) } });
            }
            function U(e, t) {
                M(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            const M = (e) => (t) => {
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
                d = a(615027),
                u = a(71620),
                m = a(668214),
                p = a(919022),
                _ = a(312771);
            const h = (0, p.W3)([p.pL]),
                f = (e, t) => {
                    const a = g(e, t);
                    return a ? h(e, a) : _.ZP.LOADING;
                },
                g = (e, t) => t.match.params.screenName,
                x = (e, t) => {
                    const a = g(e, t);
                    return a ? p.ZP.selectByScreenName(e, a) : void 0;
                },
                v = (0, m.Z)()
                    .propsFromState(() => ({ fetchStatus: f, screenName: g, user: x }))
                    .adjustStateProps(({ fetchStatus: e, screenName: t, user: a }) => ({ fetchStatus: e, screenName: t, user: a, mediaItem: a ? { id_str: a.id_str, expanded_url: a.profile_image_url_https, media_url_https: a.profile_image_url_https, ext_alt_text: a.profile_image_extensions_alt_text, type: "photo", original_info: { width: 400, height: 400 } } : void 0 }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("USER_AVATAR"), fetchOneUserByScreenNameIfNeeded: p.ZP.fetchOneByScreenNameIfNeeded })),
                y = (e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: a, fetchStatus: u, history: m, mediaItem: p, screenName: _, user: h } = e,
                        f = (0, l.K2)(h),
                        { handleMediaDetailZoomed: g, handleMediaItemTapped: x, hideButtons: v } = (0, l.sI)(),
                        y = () => {
                            m.goBack({ backLocation: `/${_}` });
                        };
                    n.useEffect(() => {
                        ((e, t, a) => {
                            e(a).catch(t(c.F));
                        })(a, t, _);
                    }, [t, a, _]);
                    return n.createElement(
                        i.Z.Configure,
                        { headerless: !0 },
                        n.createElement(
                            s.Z,
                            { backgroundColor: f, hideButtons: v, mediaUrl: h && h.profile_image_url_https, onCloseButtonPress: y },
                            n.createElement(r.Z, {
                                fetchStatus: u,
                                render: () => {
                                    const e = (0, l.K2)(h);
                                    return h && p ? n.createElement(o.Z, { businessAvatar: "Business" === h.verified_type, dataSaver: !1, dominantColor: e.rgb, isAvatar: !0, mediaIndex: 0, mediaItems: [p], onDismiss: y, onMediaDetailZoomed: g, onTap: x }) : n.createElement(d.Z, { to: `/${_}` });
                                },
                                renderFailure: () => n.createElement(d.Z, { to: `/${_}` }),
                                retryable: !1,
                            }),
                        ),
                    );
                },
                w = v(y);
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
                d = a(615027),
                u = a(71620),
                m = a(668214),
                p = a(919022);
            const _ = (0, p.W3)([p.pL]),
                h = (e, t) => _(e, f(e, t)),
                f = (e, t) => t.match.params.screenName,
                g = (e, t) => p.ZP.selectByScreenName(e, f(e, t)),
                x = (0, m.Z)()
                    .propsFromState(() => ({ fetchStatus: h, screenName: f, user: g }))
                    .adjustStateProps(({ fetchStatus: e, screenName: t, user: a }) => ({ fetchStatus: e, screenName: t, user: a, mediaItem: a ? { id_str: a.id_str, expanded_url: a.profile_banner_url, media_url_https: a.profile_banner_url, ext_alt_text: a.profile_banner_extensions_alt_text, type: "photo", original_info: { width: 1500, height: 500 } } : void 0 }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("USER_HEADER"), fetchOneUserByScreenNameIfNeeded: p.ZP.fetchOneByScreenNameIfNeeded })),
                v = (e, t, a) => {
                    e(a).catch(t(c.F));
                },
                y = (e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: a, fetchStatus: c, history: u, mediaItem: m, screenName: p, user: _ } = e,
                        h = (0, l.C_)(_),
                        { handleMediaDetailZoomed: f, handleMediaItemTapped: g, hideButtons: x } = (0, l.sI)(),
                        y = () => {
                            u.goBack({ backLocation: `/${p}` });
                        };
                    return (
                        n.useEffect(() => {
                            v(a, t, p);
                        }, [t, a, p]),
                        n.createElement(
                            i.Z.Configure,
                            { headerless: !0 },
                            n.createElement(
                                s.Z,
                                { backgroundColor: h, hideButtons: x, mediaUrl: _ && _.profile_banner_url, onCloseButtonPress: y },
                                n.createElement(r.Z, {
                                    fetchStatus: c,
                                    onRequestRetry: () => v(a, t, p),
                                    render: () => {
                                        const e = (0, l.C_)(_);
                                        return _ && m ? n.createElement(o.Z, { dataSaver: !1, dominantColor: e.rgb, mediaIndex: 0, mediaItems: [m], onDismiss: y, onMediaDetailZoomed: f, onTap: g }) : n.createElement(d.Z, { to: `/${p}` });
                                    },
                                }),
                            ),
                        )
                    );
                },
                w = x(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-3c20ad5c.82f16f1a.js.map
