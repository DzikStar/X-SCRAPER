"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-6ac0f1a5"],
    {
        187268: (e, t, a) => {
            a.d(t, { CK: () => k, Ez: () => x, QK: () => v, Sd: () => w, eC: () => y, ky: () => m, w$: () => b });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                o = a(392237),
                r = a(784732),
                s = a(956272),
                i = a(520913),
                c = a(913315),
                l = a(355586),
                u = a(14284),
                d = a(492244),
                p = a(397159);
            const m = { CodeExecution: "code_execution", BrowsePage: "browse_page", XSearch: "x_search", WebSearch: "web_search", XKeywordSearch: "x_keyword_search", XSemanticSearch: "x_semantic_search", XUserSearch: "x_user_search", GetXUserTimeline: "get_x_user_timeline" },
                h = /<xai:tool_usage_card>\s*(?:<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>\s*)?<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)<\/xai:tool_usage_card>/g,
                _ = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                f = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/,
                g = /<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>/;
            function x(e) {
                return e.replace(h, (e) => {
                    const t = (function (e) {
                        const t = e.match(_),
                            a = e.match(f),
                            n = e.match(g),
                            o = t ? t[1] : "",
                            r = a ? a[1] : "",
                            s = n ? n[1] : "";
                        let i = "<tool_usage_card>";
                        return s && (i += `<tool_usage_card_id>${s}</tool_usage_card_id>`), (i += `<tool_name>${o}</tool_name>`), (i += `<tool_args>${r}</tool_args>`), (i += "</tool_usage_card>"), i;
                    })(e);
                    return t ?? e;
                });
            }
            function v(e) {
                const t = e.match(h);
                if (t) {
                    const {
                        args: e,
                        id: a,
                        name: n,
                    } = (function (e) {
                        let t = "",
                            a = "",
                            n = "";
                        const o = e.match(g);
                        o && (t = o[1]);
                        const r = e.match(_);
                        r && (a = r[1]);
                        const s = e.match(f);
                        s && (n = s[1].trim());
                        return { id: t, name: a, args: n };
                    })(t[0]);
                    return w(a, n, e);
                }
                return null;
            }
            function w(e, t, a) {
                const n = a.match(/^<!\[CDATA\[(.*?)\]\]>/ms);
                let o = {};
                if (n)
                    try {
                        o = JSON.parse(n[1]);
                    } catch (e) {
                        o = {};
                    }
                return { id: e, name: t, args: o };
            }
            const y = "Using tools";
            function k(e) {
                switch (e.name) {
                    case m.WebSearch:
                        return p.XR.WebSearchQueryFormatter({ query: e.args.query });
                    case m.XSearch:
                    case m.XKeywordSearch:
                    case m.XSemanticSearch:
                        return p.XR.XSearchQueryFormatter({ query: e.args.query });
                    case m.XUserSearch:
                        return p.XR.XUserSearchFormatter({ query: e.args.query });
                    case m.BrowsePage: {
                        let t = e.args.url || "";
                        try {
                            t = new URL(t).hostname.replace("www.", "");
                        } catch (e) {}
                        return e.args.query ? p.XR.GenericURLQueryFormatter({ url: t, query: e.args.query }) : p.XR.BrowsePageFormatter({ url: t });
                    }
                    case m.GetXUserTimeline:
                        return p.XR.XUsernameQuerySearchFormatter({ query: e.args.query, username: e.args.username });
                    case m.CodeExecution:
                        return p.XR.CodeExecutionFormatter({ ttc_tool_usage_card: "" });
                    default:
                        return e.name ?? y;
                }
            }
            function b(e) {
                const t = { style: { width: o.default.theme.spaces.space16, height: o.default.theme.spaces.space16 } };
                switch (e) {
                    case "search_news":
                        return n.createElement(r.default, t);
                    case "web_search":
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
                    case "browse_page":
                        return n.createElement(u.default, t);
                    default:
                        return n.createElement(d.default, t);
                }
            }
        },
        620988: (e, t, a) => {
            a.d(t, { ZH: () => v, ZP: () => y, x9: () => w });
            a(136728);
            var n = a(202784),
                o = a(726426),
                r = a.n(o),
                s = a(111677),
                i = a.n(s),
                c = a(88656),
                l = a(952793),
                u = a(782642),
                d = a(725405);
            a(571372);
            var p = a(623494),
                m = a(737368);
            const h = 4,
                _ = i().h4d7cbcc,
                f = i().j77292b7,
                g = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, t) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                x = n.createContext(g);
            function v({ children: e }) {
                const [t, a] = n.useState({}),
                    o = (0, u.p)(),
                    s = (0, d.Z)(),
                    i = (0, m.k)(),
                    g = (0, l.JY)("responsive_web_grok_file_upload_max_files", h),
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
                    w = n.useCallback(
                        async (e, t) => {
                            const n = r()(),
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
                            a((e) => (Object.keys(e).length >= g ? (o({ text: f({ count: g }) }), e) : { ...e, [n]: u }));
                            try {
                                const t = await i(e, l);
                                (0, p.Jm)(s), (u.remote = { ...t, dimensions: u.dimensions }), a((e) => (e[n] ? { ...e, [n]: u } : e));
                            } catch (e) {
                                if (e instanceof c.Z && 0 === e.status) return;
                                (0, p.eV)(s, e.message),
                                    o({ text: _ }),
                                    a((e) => {
                                        const t = { ...e };
                                        return delete t[n], t;
                                    });
                            } finally {
                                (u.isUploading = !1), a((e) => (e[n] ? { ...e, [n]: u } : e));
                            }
                        },
                        [g, o, i, s],
                    ),
                    y = n.useCallback(
                        async (e) => {
                            const n = r()(),
                                o = { abortController: new AbortController(), isUploading: !1, remote: e };
                            a({ ...t, [n]: o });
                        },
                        [t],
                    );
                return n.createElement(x.Provider, { value: { selectedFiles: t, onFileSelected: w, clearSelectedFile: v, onGrokFileSelected: y } }, e);
            }
            function w() {
                const e = (0, l.hC)("responsive_web_grok_pdf_upload_enabled"),
                    t = (0, l.hC)("responsive_web_grok_text_upload_enabled");
                return n.useMemo(() => {
                    const a = ["image/jpeg", "image/png", "image/webp"];
                    return e && a.push("application/pdf"), t && (a.push("text/plain"), a.push("text/xml"), a.push("text/csv"), a.push("text/markdown"), a.push("text/x-markdown"), a.push("text/md"), a.push("text/calendar"), a.push("text/vcard"), a.push("text/json"), a.push("text/yaml"), a.push("text/x-python"), a.push("text/x-csrc"), a.push("text/x-c++src"), a.push("text/x-csharp"), a.push("text/x-ruby"), a.push("text/x-java-source"), a.push("text/x-go"), a.push("text/x-rust"), a.push("text/x-swift"), a.push("text/x-kotlin"), a.push("text/x-sql"), a.push("text/x-lua"), a.push("text/x-scala"), a.push("text/x-haskell"), a.push("text/x-php"), a.push("text/x-perl"), a.push("text/x-shellscript"), a.push("text/x-rsrc"), a.push("text/x-dart"), a.push("application/markdown"), a.push("application/xml"), a.push("application/json"), a.push("application/x-yaml"), a.push("application/x-latex"), a.push("application/x-sh"), a.push("application/x-msdownload"), a.push("application/x-httpd-php"), a.push("application/sql"), a.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), a.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")), a;
                }, [e, t]);
            }
            function y() {
                return n.useContext(x);
            }
        },
        737368: (e, t, a) => {
            a.d(t, { k: () => g });
            a(571372);
            var n = a(202784),
                o = a(111677),
                r = a.n(o),
                s = a(276259),
                i = a(952793),
                c = a(782642),
                l = a(725516),
                u = a(125363),
                d = a(458810),
                p = a(623494),
                m = a(620988);
            const h = r().c74e87e0,
                _ = r().bea50a2a,
                f = (e) => e.toLowerCase().replace(/\/$/, ""),
                g = () => {
                    const e = (0, c.p)(),
                        t = (0, l.z)(),
                        a = (0, u.I0)(),
                        o = (0, m.x9)(),
                        r = (0, i.hC)("responsive_web_grok_file_compression_enabled"),
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
                                })(o, n.type)
                            )
                                throw (e({ text: _ }), (0, p.op)(t, `file has unsupported type: ${n.type}`), new Error());
                            if (r) {
                                let a;
                                try {
                                    a = await (0, s.hv)(n, g);
                                } catch (e) {}
                                if (!a) throw (e({ text: h }), (0, p.op)(t, "failed to compress the file"), new Error());
                                c = a;
                            } else if (n.size > g) throw (e({ text: h }), (0, p.op)(t, "file is too large"), new Error());
                            const l = await a((0, d.t)(c, i));
                            return (0, p.Jm)(t), l;
                        },
                        [e, t, a, r, g, o],
                    );
                };
        },
        654917: (e, t, a) => {
            a.d(t, { ZP: () => _, eX: () => m, uf: () => h });
            var n = a(202784),
                o = a(107267),
                r = a(323265),
                s = a(791632),
                i = a(443781),
                c = a(952793),
                l = a(125363),
                u = a(389071),
                d = a(63538),
                p = a(623494);
            function m() {
                const e = (0, o.useHistory)(),
                    t = (0, l.v9)(u.Es);
                return (0, s.HD)(e) ? (0, s.tT)(e) : t;
            }
            function h() {
                const e = m(),
                    t = (0, l.I0)(),
                    a = (0, l.v9)((t) => (0, u.YJ)(t, e));
                return (0, l.v9)(a.selectIsInitialized) || t((0, u.Ki)(e)), a;
            }
            function _() {
                const { userClaims: e } = (0, i.QZ)(),
                    t = m(),
                    a = h(),
                    o = (0, l.v9)(a.selectMessageIds),
                    s = (0, l.I0)(),
                    _ = (0, l.v9)(a.selectFetchConversationIdStatus),
                    f = (0, l.v9)(a.selectFetchConversationIdError),
                    g = (0, l.v9)(a.selectMode),
                    x = (0, l.v9)(a.selectStatus),
                    v = (0, l.v9)(u.Pt),
                    w = (0, l.v9)(a.selectConversationId),
                    y = (0, l.v9)(u.pZ),
                    k = (0, l.v9)(u.uF),
                    b = (0, l.v9)(u.F9),
                    S = (0, l.v9)(a.selectAnalysisEntityId),
                    C = (0, l.v9)(a.selectUsingExperiment);
                let E = !1;
                const F = (0, c.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (E = "premium") : (F || k) && (E = y.length > 0 ? "restricted" : "free");
                const I = n.useCallback(
                        async (e, t) => {
                            g !== e && (s(a.setMode(e)), r.ZP.isTwitterApp() || (await s((0, d.O)(e, b))), (0, p.RC)(t, e));
                        },
                        [s, a, g, b],
                    ),
                    R = n.useCallback(
                        async (e, t, a) => {
                            e !== b && (s((0, u.j1)(e, t)), r.ZP.isTwitterApp() || (await s((0, d.O)(g, e))), (0, p.JO)(a, e));
                        },
                        [s, g, b],
                    );
                return { messageIds: o, access: E, status: x, grokSettingsStatus: v, conversationKey: t, conversationId: w, analysisEntityId: S, accessRestrictedReasons: y, fetchConversationIdStatus: _, fetchConversationIdError: f, mode: g, model: b, changeMode: I, changeModel: R, usingExperiment: C };
            }
        },
        979512: (e, t, a) => {
            a.d(t, { Z: () => O });
            a(136728);
            var n = a(202784),
                o = a(107267),
                r = a(726426),
                s = a.n(r),
                i = a(111677),
                c = a.n(i),
                l = a(122123),
                u = a(443781),
                d = a(292484),
                p = a(952793),
                m = a(782642),
                h = a(293115),
                _ = a(252352),
                f = a(125363),
                g = a(550293),
                x = a(511582),
                v = a(389071),
                w = a(96275),
                y = a(327597),
                k = a(189953),
                b = a(456228),
                S = a(551864),
                C = a(623494),
                E = a(461900),
                F = a(737368),
                I = a(654917),
                R = a(305442);
            const X = c().h4d7cbcc;
            function O() {
                const e = n.useContext(h.ge),
                    t = n.useMemo(() => {
                        const { data: t, flushMethod: a, scribeMethod: n } = e;
                        return new _.Z(n, { page: "grok-drawer" }, t, a);
                    }, [e]),
                    a = (0, u.QZ)(),
                    r = (0, f.I0)(),
                    i = (0, m.p)(),
                    c = (0, o.useLocation)(),
                    O = (0, p.hC)("responsive_web_grok_show_citations"),
                    { conversationKey: J } = (0, I.ZP)(),
                    U = (0, d.cm)(),
                    P = !c.pathname.startsWith("/messages") && !c.pathname.match(".*/status/.+/photo/.+") && !c.pathname.startsWith("/i/grok/feed"),
                    M = (0, o.useHistory)(),
                    A = (0, F.k)(),
                    N = (0, R.Z)("drawer"),
                    Z = (0, f.v9)(g.kX) === x.S.EXPANDED;
                return {
                    openGrok: n.useCallback(
                        async ({ autoSubmit: e, conversationId: n, imageUrl: o, isDeepsearch: u, isImageEdit: d, isReasoning: p, mediaId: m, promptMetadata: h, source: _, text: f }) => {
                            if (!(0, E.$)(a)) return void M.push("/i/grok");
                            let F;
                            if ((("post_analysis_timeline" !== _ && "post_analysis_details_page" !== _) || (0, C.HO)(t, "post_analysis_details_page" === _), o))
                                try {
                                    const e = await (0, l.o2)(o);
                                    F = await A(e, new AbortController());
                                } catch (e) {
                                    i({ text: X });
                                }
                            const I = {};
                            if ((("post_image_annotation" !== _ && "post_image_annotation_fullscreen" !== _) || ((I.imageGen = !0), (0, C.u1)(t, "post_image_annotation_fullscreen" === _, m)), "grok_image_feed" === _ && (I.imageGen = !0), c.pathname.startsWith("/i/grok") && !c.pathname.startsWith("/i/grok/feed"))) return void r((0, y.u)({ analytics: t, conversationKey: J })({ text: f, attachments: F ? [F] : void 0, mode: k.IK.REGULAR, returnCitations: O, promptMetadata: h, imageGenerationCount: N, toolOverrides: I, source: _, isDeepsearch: u, isReasoning: p }));
                            const R = n ?? s()();
                            if (n) {
                                const e = n || "";
                                await r((0, w.d)(e, t));
                            } else r((0, v.Ki)(R));
                            if ((U && P ? ((0, C.YW)(t, _), Z && r(g.bi(x.S.COLLAPSED)), r((0, b.bi)(S.j.EXPANDED))) : M.push("/i/grok"), e)) r((0, y.u)({ analytics: t, conversationKey: R })({ text: f, attachments: F ? [F] : void 0, mode: k.IK.REGULAR, promptMetadata: h, returnCitations: O, imageGenerationCount: N, toolOverrides: I, source: _, isDeepsearch: u, isReasoning: p }));
                            else {
                                const e = { text: f, attachments: F ? [F] : [] };
                                d && F ? (e.modeButtonFilterKey = "ImageEdit") : u ? (e.modeButtonFilterKey = "Research") : p && (e.modeButtonFilterKey = "Reasoning"), r((0, v.Uo)(R, e));
                            }
                        },
                        [Z, i, r, t, a, M, A, U, J, O, P, c.pathname, N],
                    ),
                };
            }
        },
        305442: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(952793);
            function o(e) {
                return (0, n.JY)("responsive_web_grok_imggen_count", 1);
            }
        },
        623494: (e, t, a) => {
            a.d(t, { DE: () => h, G$: () => i, HO: () => E, HR: () => X, JO: () => g, Jm: () => S, NH: () => O, RC: () => f, S7: () => R, UV: () => U, Uk: () => k, YI: () => u, YW: () => I, ZY: () => _, az: () => c, c3: () => s, dP: () => v, dd: () => m, eS: () => b, eV: () => C, hf: () => x, hq: () => l, kl: () => y, mm: () => p, op: () => w, pv: () => r, qQ: () => M, u1: () => F, y6: () => d, zC: () => J, zX: () => P });
            var n = a(163889);
            function o() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function r(e, t) {
                A(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function s(e, t) {
                A(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function i(e, t) {
                A(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function c(e, t, a) {
                A(e)({ element: "client-home-log", action: t, data: { event_info: JSON.stringify(a) } });
            }
            function l(e, t) {
                A(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: t.errorMessage }), duration_ms: t.durationMs } });
            }
            function u(e, t) {
                A(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(t.messageTagCounts), duration_ms: t.durationMs } });
            }
            function d(e, t) {
                A(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: t } });
            }
            function p(e, t, a) {
                A(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: t, error: a }) } });
            }
            function m(e, t) {
                A(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function h(e) {
                A(e)({ element: "abort", action: "click" });
            }
            function _(e) {
                A(e)({ element: "clear-conversation", action: "click" });
            }
            function f(e, t) {
                A(e)({ element: "grok_mode", action: "change", data: { event_info: t } });
            }
            function g(e, t) {
                A(e)({ element: "grok_model", action: "change", data: { event_info: t } });
            }
            function x(e, t) {
                A(e)({ element: "tweet-carousel", action: "change", data: { event_info: t.toString() } });
            }
            function v(e, t) {
                A(e)({ element: "file-attachment", action: "add", data: { event_info: t } });
            }
            function w(e, t) {
                A(e)({ element: "file-attachment", action: "fail", data: { event_info: t } });
            }
            function y(e, t, a) {
                A(e)({ element: "api-add-response", action: "error", data: { event_info: `${t.message}\n${t.stack}\n${o()}` } }), (0, n.Hj)(t, { level: "warning", extra: a });
            }
            function k(e, t) {
                A(e)({ element: "api-add-response", action: "fail", data: { event_info: `${t}\n${o()}` } });
            }
            function b(e, t) {
                A(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: t ? "first_chunk" : void 0 } });
            }
            function S(e) {
                A(e)({ element: "file-upload", action: "success" });
            }
            function C(e, t) {
                A(e)({ element: "file-upload", action: "fail", data: { event_info: t } });
            }
            function E(e, t) {
                A(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: t ? "post_details" : "timeline" } });
            }
            function F(e, t, a) {
                A(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: t ? "post_details" : "timeline", event_info: a ? JSON.stringify({ mediaId: a }) : void 0 } });
            }
            function I(e, t) {
                A(e)({ element: "grok-drawer-open", action: "success", data: { event_source: t } });
            }
            function R(e, t) {
                A(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant }) } });
            }
            function X(e, t, a) {
                A(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant, followUpText: a }) } });
            }
            function O(e) {
                A(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function J(e, t) {
                A(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            function U(e, t) {
                A(e)({ element: "grok-memory-forget", action: "click", data: { event_info: t } });
            }
            function P(e, t, a) {
                A(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: t, error: a }) } });
            }
            function M(e, t) {
                A(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            const A = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-6ac0f1a5.3b58b65a.js.map
