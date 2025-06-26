"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-6ac0f1a5"],
    {
        187268: (e, t, a) => {
            a.d(t, { Ez: () => v, QK: () => w, Sd: () => y, eC: () => k, j: () => S, jU: () => b, ky: () => h, w$: () => C });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                r = a(392237),
                o = a(784732),
                s = a(956272),
                i = a(520913),
                c = a(913315),
                l = a(355586),
                u = a(14284),
                d = a(976898),
                m = a(492244),
                p = a(397159);
            const h = Object.freeze({ CodeExecution: "code_execution", BrowsePage: "browse_page", XSearch: "x_search", WebSearch: "web_search", XKeywordSearch: "x_keyword_search", XSemanticSearch: "x_semantic_search", XUserSearch: "x_user_search", GetXUserTimeline: "get_x_user_timeline", WebSearchWithSnippets: "web_search_with_snippets" }),
                _ = /<xai:tool_usage_card>\s*(?:<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>\s*)?<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)<\/xai:tool_usage_card>/g,
                f = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                g = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/,
                x = /<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>/;
            function v(e) {
                return e.replace(_, (e) => {
                    const t = (function (e) {
                        const t = e.match(f),
                            a = e.match(g),
                            n = e.match(x),
                            r = t ? t[1] : "",
                            o = a ? a[1] : "",
                            s = n ? n[1] : "";
                        let i = "<tool_usage_card>";
                        return s && (i += `<tool_usage_card_id>${s}</tool_usage_card_id>`), (i += `<tool_name>${r}</tool_name>`), (i += `<tool_args>${o}</tool_args>`), (i += "</tool_usage_card>"), i;
                    })(e);
                    return t ?? e;
                });
            }
            function w(e) {
                const t = e.match(_);
                if (t) {
                    const {
                        args: e,
                        id: a,
                        name: n,
                    } = (function (e) {
                        let t = "",
                            a = "",
                            n = "";
                        const r = e.match(x);
                        r && (t = r[1]);
                        const o = e.match(f);
                        o && (a = o[1]);
                        const s = e.match(g);
                        s && (n = s[1].trim());
                        return { id: t, name: a, args: n };
                    })(t[0]);
                    return y(a, n, e);
                }
                return null;
            }
            function y(e, t, a) {
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
            const k = "Using tools";
            function S(e) {
                switch (e.name) {
                    case h.WebSearch:
                    case h.WebSearchWithSnippets:
                        return p.uk.WebSearchQueryFormatter({ query: e.args.query });
                    case h.XSearch:
                    case h.XKeywordSearch:
                    case h.XSemanticSearch:
                        return p.uk.XSearchQueryFormatter({ query: e.args.query });
                    case h.XUserSearch:
                        return p.uk.XUserSearchFormatter({ query: e.args.query });
                    case h.BrowsePage: {
                        let t = e.args.url || "";
                        try {
                            t = new URL(t).hostname.replace("www.", "");
                        } catch (e) {}
                        return e.args.query ? p.uk.GenericURLQueryFormatter({ url: t, query: e.args.query }) : p.uk.BrowsePageFormatter({ url: t });
                    }
                    case h.GetXUserTimeline:
                        return p.uk.XUsernameQuerySearchFormatter({ query: e.args.query, username: e.args.username });
                    case h.CodeExecution:
                        return p.uk.CodeExecutionFormatter({ ttc_tool_usage_card: "" });
                    default:
                        return e.name ?? k;
                }
            }
            function b(e) {
                switch (e.name) {
                    case h.WebSearch:
                    case h.WebSearchWithSnippets:
                        return p.B2.WebSearchQueryFormatter;
                    case h.XSearch:
                    case h.XKeywordSearch:
                    case h.XSemanticSearch:
                        return p.B2.XSearchQueryFormatter;
                    case h.XUserSearch:
                        return p.B2.XUserSearchFormatter;
                    case h.BrowsePage:
                        return p.B2.BrowsePageFormatter;
                    case h.GetXUserTimeline:
                        return p.B2.XUsernameQuerySearchFormatter;
                    case h.CodeExecution:
                        return p.B2.CodeExecutionFormatter;
                    default:
                        return e.name ?? k;
                }
            }
            function C(e, t) {
                const a = { style: { width: t || r.default.theme.spaces.space16, height: t || r.default.theme.spaces.space16 } };
                switch (e) {
                    case "search_news":
                        return n.createElement(o.default, a);
                    case "web_search":
                        return n.createElement(s.default, a);
                    case "x_search":
                    case "get_x_user_timeline":
                    case "x_keyword_search":
                    case "x_semantic_search":
                    case "x_user_search":
                        return n.createElement(i.default, a);
                    case "call_finance_api":
                        return n.createElement(c.default, a);
                    case "call_sports_api":
                        return n.createElement(l.default, a);
                    case "browse_page":
                        return n.createElement(u.default, a);
                    case "code_execution":
                        return n.createElement(d.default, a);
                    default:
                        return n.createElement(m.default, a);
                }
            }
        },
        620988: (e, t, a) => {
            a.d(t, { ZH: () => v, ZP: () => y, x9: () => w });
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
            const h = 4,
                _ = i().h4d7cbcc,
                f = i().j77292b7,
                g = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, t) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                x = n.createContext(g);
            function v({ children: e }) {
                const [t, a] = n.useState({}),
                    r = (0, u.p)(),
                    s = (0, d.Z)(),
                    i = (0, p.k)(),
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
                            a((e) => (Object.keys(e).length >= g ? (r({ text: f({ count: g }) }), e) : { ...e, [n]: u }));
                            try {
                                const t = await i(e, l);
                                (0, m.Jm)(s), (u.remote = { ...t, dimensions: u.dimensions }), a((e) => (e[n] ? { ...e, [n]: u } : e));
                            } catch (e) {
                                if (e instanceof c.Z && 0 === e.status) return;
                                (0, m.eV)(s, e.message),
                                    r({ text: _ }),
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
                    y = n.useCallback(
                        async (e) => {
                            const n = o()(),
                                r = { abortController: new AbortController(), isUploading: !1, remote: e };
                            a({ ...t, [n]: r });
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
            const h = o().c74e87e0,
                _ = o().bea50a2a,
                f = (e) => e.toLowerCase().replace(/\/$/, ""),
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
                                throw (e({ text: _ }), (0, m.op)(t, `file has unsupported type: ${n.type}`), new Error());
                            if (o) {
                                let a;
                                try {
                                    a = await (0, s.hv)(n, g);
                                } catch (e) {}
                                if (!a) throw (e({ text: h }), (0, m.op)(t, "failed to compress the file"), new Error());
                                c = a;
                            } else if (n.size > g) throw (e({ text: h }), (0, m.op)(t, "file is too large"), new Error());
                            const l = await a((0, d.t)(c, i));
                            return (0, m.Jm)(t), l;
                        },
                        [e, t, a, o, g, r],
                    );
                };
        },
        654917: (e, t, a) => {
            a.d(t, { ZP: () => _, eX: () => p, uf: () => h });
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
            function h() {
                const e = p(),
                    t = (0, l.I0)(),
                    a = (0, l.v9)((t) => (0, u.YJ)(t, e));
                return (0, l.v9)(a.selectIsInitialized) || t((0, u.Ki)(e)), a;
            }
            function _() {
                const { userClaims: e } = (0, i.QZ)(),
                    t = p(),
                    a = h(),
                    r = (0, l.v9)(a.selectMessageIds),
                    s = (0, l.I0)(),
                    _ = (0, l.v9)(a.selectFetchConversationIdStatus),
                    f = (0, l.v9)(a.selectFetchConversationIdError),
                    g = (0, l.v9)(a.selectMode),
                    x = (0, l.v9)(a.selectStatus),
                    v = (0, l.v9)(u.Pt),
                    w = (0, l.v9)(a.selectConversationId),
                    y = (0, l.v9)(u.pZ),
                    k = (0, l.v9)(u.uF),
                    S = (0, l.v9)(u.F9),
                    b = (0, l.v9)(a.selectAnalysisEntityId),
                    C = (0, l.v9)(a.selectUsingExperiment);
                let E = !1;
                const F = (0, c.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (E = "premium") : (F || k) && (E = y.length > 0 ? "restricted" : "free");
                const I = n.useCallback(
                        async (e, t) => {
                            g !== e && (s(a.setMode(e)), o.ZP.isTwitterApp() || (await s((0, d.O)(e, S))), (0, m.RC)(t, e));
                        },
                        [s, a, g, S],
                    ),
                    U = n.useCallback(
                        async (e, t, a) => {
                            e !== S && (s((0, u.j1)(e, t)), o.ZP.isTwitterApp() || (await s((0, d.O)(g, e))), (0, m.JO)(a, e));
                        },
                        [s, g, S],
                    );
                return { messageIds: r, access: E, status: x, grokSettingsStatus: v, conversationKey: t, conversationId: w, analysisEntityId: b, accessRestrictedReasons: y, fetchConversationIdStatus: _, fetchConversationIdError: f, mode: g, model: S, changeMode: I, changeModel: U, usingExperiment: C };
            }
        },
        979512: (e, t, a) => {
            a.d(t, { Z: () => O });
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
                h = a(293115),
                _ = a(252352),
                f = a(125363),
                g = a(550293),
                x = a(511582),
                v = a(389071),
                w = a(96275),
                y = a(327597),
                k = a(189953),
                S = a(456228),
                b = a(551864),
                C = a(623494),
                E = a(461900),
                F = a(737368),
                I = a(654917),
                U = a(305442);
            const X = c().h4d7cbcc;
            function O() {
                const e = n.useContext(h.ge),
                    t = n.useMemo(() => {
                        const { data: t, flushMethod: a, scribeMethod: n } = e;
                        return new _.Z(n, { page: "grok-drawer" }, t, a);
                    }, [e]),
                    a = (0, u.QZ)(),
                    o = (0, f.I0)(),
                    i = (0, p.p)(),
                    c = (0, r.useLocation)(),
                    O = (0, m.hC)("responsive_web_grok_show_citations"),
                    { conversationKey: J } = (0, I.ZP)(),
                    P = (0, d.cm)(),
                    W = !c.pathname.startsWith("/messages") && !c.pathname.match(".*/status/.+/photo/.+") && !c.pathname.startsWith("/i/grok/feed"),
                    R = (0, r.useHistory)(),
                    M = (0, F.k)(),
                    A = (0, U.Z)("drawer"),
                    N = (0, f.v9)(g.kX) === x.S.EXPANDED;
                return {
                    openGrok: n.useCallback(
                        async ({ autoSubmit: e, conversationId: n, imageUrl: r, isDeepsearch: u, isImageEdit: d, isReasoning: m, mediaId: p, promptMetadata: h, source: _, text: f }) => {
                            if (!(0, E.$)(a)) return void R.push("/i/grok");
                            let F;
                            if ((("post_analysis_timeline" !== _ && "post_analysis_details_page" !== _) || (0, C.HO)(t, "post_analysis_details_page" === _), r))
                                try {
                                    const e = await (0, l.o2)(r);
                                    F = await M(e, new AbortController());
                                } catch (e) {
                                    i({ text: X });
                                }
                            const I = {};
                            if ((("post_image_annotation" !== _ && "post_image_annotation_fullscreen" !== _) || ((I.imageGen = !0), (0, C.u1)(t, "post_image_annotation_fullscreen" === _, p)), "grok_image_feed" === _ && (I.imageGen = !0), c.pathname.startsWith("/i/grok") && !c.pathname.startsWith("/i/grok/feed"))) return void o((0, y.u)({ analytics: t, conversationKey: J })({ text: f, attachments: F ? [F] : void 0, mode: k.IK.REGULAR, returnCitations: O, promptMetadata: h, imageGenerationCount: A, toolOverrides: I, source: _, isDeepsearch: u, isReasoning: m }));
                            const U = n ?? s()();
                            if (n) {
                                const e = n || "";
                                await o((0, w.d)(e, t));
                            } else o((0, v.Ki)(U));
                            if ((P && W ? ((0, C.YW)(t, _), N && o(g.bi(x.S.COLLAPSED)), o((0, S.bi)(b.j.EXPANDED))) : R.push("/i/grok"), e)) o((0, y.u)({ analytics: t, conversationKey: U })({ text: f, attachments: F ? [F] : void 0, mode: k.IK.REGULAR, promptMetadata: h, returnCitations: O, imageGenerationCount: A, toolOverrides: I, source: _, isDeepsearch: u, isReasoning: m }));
                            else {
                                const e = { text: f, attachments: F ? [F] : [] };
                                d && F ? (e.modeButtonFilterKey = "ImageEdit") : u ? (e.modeButtonFilterKey = "Research") : m && (e.modeButtonFilterKey = "Reasoning"), o((0, v.Uo)(U, e));
                            }
                        },
                        [N, i, o, t, a, R, M, P, J, O, W, c.pathname, A],
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
            a.d(t, { DE: () => h, G$: () => i, HO: () => E, HR: () => X, JO: () => g, Jm: () => b, NH: () => O, RC: () => f, S7: () => U, UV: () => P, Uk: () => k, YI: () => u, YW: () => I, ZY: () => _, az: () => c, c3: () => s, dP: () => v, dd: () => p, eS: () => S, eV: () => C, hf: () => x, hq: () => l, kl: () => y, mm: () => m, op: () => w, pv: () => o, qQ: () => R, u1: () => F, y6: () => d, zC: () => J, zX: () => W });
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
            function u(e, t) {
                M(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(t.messageTagCounts), duration_ms: t.durationMs } });
            }
            function d(e, t) {
                M(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: t } });
            }
            function m(e, t, a) {
                M(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: t, error: a }) } });
            }
            function p(e, t) {
                M(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function h(e) {
                M(e)({ element: "abort", action: "click" });
            }
            function _(e) {
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
            function w(e, t) {
                M(e)({ element: "file-attachment", action: "fail", data: { event_info: t } });
            }
            function y(e, t, a) {
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
            function C(e, t) {
                M(e)({ element: "file-upload", action: "fail", data: { event_info: t } });
            }
            function E(e, t) {
                M(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: t ? "post_details" : "timeline" } });
            }
            function F(e, t, a) {
                M(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: t ? "post_details" : "timeline", event_info: a ? JSON.stringify({ mediaId: a }) : void 0 } });
            }
            function I(e, t) {
                M(e)({ element: "grok-drawer-open", action: "success", data: { event_source: t } });
            }
            function U(e, t) {
                M(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant }) } });
            }
            function X(e, t, a) {
                M(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant, followUpText: a }) } });
            }
            function O(e) {
                M(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function J(e, t) {
                M(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            function P(e, t) {
                M(e)({ element: "grok-memory-forget", action: "click", data: { event_info: t } });
            }
            function W(e, t, a) {
                M(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: t, error: a }) } });
            }
            function R(e, t) {
                M(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            const M = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-6ac0f1a5.26335eea.js.map
