"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-6ac0f1a5"],
    {
        187268: (e, t, a) => {
            a.d(t, { CK: () => w, Ez: () => f, QK: () => g, Sd: () => x, eC: () => v, w$: () => y });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                o = a(392237),
                s = a(784732),
                r = a(14284),
                i = a(520913),
                c = a(913315),
                l = a(355586),
                u = a(492244),
                d = a(397159);
            const p = /<xai:tool_usage_card>\s*(?:<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>\s*)?<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)<\/xai:tool_usage_card>/g,
                m = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                _ = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/,
                h = /<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>/;
            function f(e) {
                return e.replace(p, (e) => {
                    const t = (function (e) {
                        const t = e.match(m),
                            a = e.match(_),
                            n = e.match(h),
                            o = t ? t[1] : "",
                            s = a ? a[1] : "",
                            r = n ? n[1] : "";
                        let i = "<tool_usage_card>";
                        return r && (i += `<tool_usage_card_id>${r}</tool_usage_card_id>`), (i += `<tool_name>${o}</tool_name>`), (i += `<tool_args>${s}</tool_args>`), (i += "</tool_usage_card>"), i;
                    })(e);
                    return t ?? e;
                });
            }
            function g(e) {
                const t = e.match(p);
                if (t) {
                    const {
                        args: e,
                        id: a,
                        name: n,
                    } = (function (e) {
                        let t = "",
                            a = "",
                            n = "";
                        const o = e.match(h);
                        o && (t = o[1]);
                        const s = e.match(m);
                        s && (a = s[1]);
                        const r = e.match(_);
                        r && (n = r[1].trim());
                        return { id: t, name: a, args: n };
                    })(t[0]);
                    return x(a, n, e);
                }
                return null;
            }
            function x(e, t, a) {
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
            const v = "Using tools";
            function w(e) {
                switch (e.name) {
                    case "web_search":
                        return d.XR.WebSearchQueryFormatter({ query: e.args.query });
                    case "x_search":
                    case "x_keyword_search":
                    case "x_semantic_search":
                    case "x_user_search":
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
                        return e.name ?? v;
                }
            }
            function y(e) {
                const t = { style: { width: o.default.theme.spaces.space16, height: o.default.theme.spaces.space16 } };
                switch (e) {
                    case "search_news":
                        return n.createElement(s.default, t);
                    case "web_search":
                    case "browse_page":
                        return n.createElement(r.default, t);
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
                        return n.createElement(u.default, t);
                }
            }
        },
        620988: (e, t, a) => {
            a.d(t, { ZH: () => v, ZP: () => y, x9: () => w });
            a(136728);
            var n = a(202784),
                o = a(726426),
                s = a.n(o),
                r = a(111677),
                i = a.n(r),
                c = a(88656),
                l = a(952793),
                u = a(782642),
                d = a(725405);
            a(571372);
            var p = a(623494),
                m = a(737368);
            const _ = 4,
                h = i().h4d7cbcc,
                f = i().j77292b7,
                g = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, t) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                x = n.createContext(g);
            function v({ children: e }) {
                const [t, a] = n.useState({}),
                    o = (0, u.p)(),
                    r = (0, d.Z)(),
                    i = (0, m.k)(),
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
                    w = n.useCallback(
                        async (e, t) => {
                            const n = s()(),
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
                                (0, p.Jm)(r), (u.remote = { ...t, dimensions: u.dimensions }), a((e) => (e[n] ? { ...e, [n]: u } : e));
                            } catch (e) {
                                if (e instanceof c.Z && 0 === e.status) return;
                                (0, p.eV)(r, e.message),
                                    o({ text: h }),
                                    a((e) => {
                                        const t = { ...e };
                                        return delete t[n], t;
                                    });
                            } finally {
                                (u.isUploading = !1), a((e) => (e[n] ? { ...e, [n]: u } : e));
                            }
                        },
                        [g, o, i, r],
                    ),
                    y = n.useCallback(
                        async (e) => {
                            const n = s()(),
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
                s = a.n(o),
                r = a(276259),
                i = a(952793),
                c = a(782642),
                l = a(725516),
                u = a(125363),
                d = a(458810),
                p = a(623494),
                m = a(620988);
            const _ = s().c74e87e0,
                h = s().bea50a2a,
                f = (e) => e.toLowerCase().replace(/\/$/, ""),
                g = () => {
                    const e = (0, c.p)(),
                        t = (0, l.z)(),
                        a = (0, u.I0)(),
                        o = (0, m.x9)(),
                        s = (0, i.hC)("responsive_web_grok_file_compression_enabled"),
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
                                throw (e({ text: h }), (0, p.op)(t, `file has unsupported type: ${n.type}`), new Error());
                            if (s) {
                                let a;
                                try {
                                    a = await (0, r.hv)(n, g);
                                } catch (e) {}
                                if (!a) throw (e({ text: _ }), (0, p.op)(t, "failed to compress the file"), new Error());
                                c = a;
                            } else if (n.size > g) throw (e({ text: _ }), (0, p.op)(t, "file is too large"), new Error());
                            const l = await a((0, d.t)(c, i));
                            return (0, p.Jm)(t), l;
                        },
                        [e, t, a, s, g, o],
                    );
                };
        },
        654917: (e, t, a) => {
            a.d(t, { ZP: () => h, eX: () => m, uf: () => _ });
            var n = a(202784),
                o = a(107267),
                s = a(323265),
                r = a(791632),
                i = a(443781),
                c = a(952793),
                l = a(125363),
                u = a(389071),
                d = a(63538),
                p = a(623494);
            function m() {
                const e = (0, o.useHistory)(),
                    t = (0, l.v9)(u.Es);
                return (0, r.HD)(e) ? (0, r.tT)(e) : t;
            }
            function _() {
                const e = m(),
                    t = (0, l.I0)(),
                    a = (0, l.v9)((t) => (0, u.YJ)(t, e));
                return (0, l.v9)(a.selectIsInitialized) || t((0, u.Ki)(e)), a;
            }
            function h() {
                const { userClaims: e } = (0, i.QZ)(),
                    t = m(),
                    a = _(),
                    o = (0, l.v9)(a.selectMessageIds),
                    r = (0, l.I0)(),
                    h = (0, l.v9)(a.selectFetchConversationIdStatus),
                    f = (0, l.v9)(a.selectFetchConversationIdError),
                    g = (0, l.v9)(a.selectMode),
                    x = (0, l.v9)(a.selectStatus),
                    v = (0, l.v9)(u.Pt),
                    w = (0, l.v9)(a.selectConversationId),
                    y = (0, l.v9)(u.pZ),
                    k = (0, l.v9)(u.uF),
                    b = (0, l.v9)(u.F9),
                    C = (0, l.v9)(a.selectAnalysisEntityId),
                    S = (0, l.v9)(a.selectUsingExperiment);
                let E = !1;
                const I = (0, c.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (E = "premium") : (I || k) && (E = y.length > 0 ? "restricted" : "free");
                const F = n.useCallback(
                        async (e, t) => {
                            g !== e && (r(a.setMode(e)), s.ZP.isTwitterApp() || (await r((0, d.O)(e, b))), (0, p.RC)(t, e));
                        },
                        [r, a, g, b],
                    ),
                    R = n.useCallback(
                        async (e, t, a) => {
                            e !== b && (r((0, u.j1)(e, t)), s.ZP.isTwitterApp() || (await r((0, d.O)(g, e))), (0, p.JO)(a, e));
                        },
                        [r, g, b],
                    );
                return { messageIds: o, access: E, status: x, grokSettingsStatus: v, conversationKey: t, conversationId: w, analysisEntityId: C, accessRestrictedReasons: y, fetchConversationIdStatus: h, fetchConversationIdError: f, mode: g, model: b, changeMode: F, changeModel: R, usingExperiment: S };
            }
        },
        979512: (e, t, a) => {
            a.d(t, { Z: () => J });
            a(136728);
            var n = a(202784),
                o = a(107267),
                s = a(726426),
                r = a.n(s),
                i = a(111677),
                c = a.n(i),
                l = a(122123),
                u = a(443781),
                d = a(292484),
                p = a(952793),
                m = a(782642),
                _ = a(293115),
                h = a(252352),
                f = a(125363),
                g = a(550293),
                x = a(511582),
                v = a(389071),
                w = a(96275),
                y = a(327597),
                k = a(189953),
                b = a(456228),
                C = a(551864),
                S = a(623494),
                E = a(461900),
                I = a(737368),
                F = a(654917),
                R = a(305442);
            const O = c().h4d7cbcc;
            function J() {
                const e = n.useContext(_.ge),
                    t = n.useMemo(() => {
                        const { data: t, flushMethod: a, scribeMethod: n } = e;
                        return new h.Z(n, { page: "grok-drawer" }, t, a);
                    }, [e]),
                    a = (0, u.QZ)(),
                    s = (0, f.I0)(),
                    i = (0, m.p)(),
                    c = (0, o.useLocation)(),
                    J = (0, p.hC)("responsive_web_grok_show_citations"),
                    { conversationKey: P } = (0, F.ZP)(),
                    M = (0, d.cm)(),
                    A = !c.pathname.startsWith("/messages") && !c.pathname.match(".*/status/.+/photo/.+") && !c.pathname.startsWith("/i/grok/feed"),
                    N = (0, o.useHistory)(),
                    U = (0, I.k)(),
                    Z = (0, R.Z)("drawer"),
                    $ = (0, f.v9)(g.kX) === x.S.EXPANDED;
                return {
                    openGrok: n.useCallback(
                        async ({ autoSubmit: e, conversationId: n, imageUrl: o, isDeepsearch: u, isImageEdit: d, isReasoning: p, mediaId: m, promptMetadata: _, source: h, text: f }) => {
                            if (!(0, E.$)(a)) return void N.push("/i/grok");
                            let I;
                            if ((("post_analysis_timeline" !== h && "post_analysis_details_page" !== h) || (0, S.HO)(t, "post_analysis_details_page" === h), o))
                                try {
                                    const e = await (0, l.o2)(o);
                                    I = await U(e, new AbortController());
                                } catch (e) {
                                    i({ text: O });
                                }
                            const F = {};
                            if ((("post_image_annotation" !== h && "post_image_annotation_fullscreen" !== h) || ((F.imageGen = !0), (0, S.u1)(t, "post_image_annotation_fullscreen" === h, m)), "grok_image_feed" === h && (F.imageGen = !0), c.pathname.startsWith("/i/grok") && !c.pathname.startsWith("/i/grok/feed"))) return void s((0, y.u)({ analytics: t, conversationKey: P })({ text: f, attachments: I ? [I] : void 0, mode: k.IK.REGULAR, returnCitations: J, promptMetadata: _, imageGenerationCount: Z, toolOverrides: F, source: h, isDeepsearch: u, isReasoning: p }));
                            const R = n ?? r()();
                            if (n) {
                                const e = n || "";
                                await s((0, w.d)(e, t));
                            } else s((0, v.Ki)(R));
                            if ((M && A ? ((0, S.YW)(t, h), $ && s(g.bi(x.S.COLLAPSED)), s((0, b.bi)(C.j.EXPANDED))) : N.push("/i/grok"), e)) s((0, y.u)({ analytics: t, conversationKey: R })({ text: f, attachments: I ? [I] : void 0, mode: k.IK.REGULAR, promptMetadata: _, returnCitations: J, imageGenerationCount: Z, toolOverrides: F, source: h, isDeepsearch: u, isReasoning: p }));
                            else {
                                const e = { text: f, attachments: I ? [I] : [] };
                                d && I ? (e.modeButtonFilterKey = "ImageEdit") : u ? (e.modeButtonFilterKey = "Research") : p && (e.modeButtonFilterKey = "Reasoning"), s((0, v.Uo)(R, e));
                            }
                        },
                        [$, i, s, t, a, N, U, M, P, J, A, c.pathname, Z],
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
            a.d(t, { DE: () => _, G$: () => i, HO: () => E, HR: () => O, JO: () => g, Jm: () => C, NH: () => J, RC: () => f, S7: () => R, UV: () => M, Uk: () => k, YI: () => u, YW: () => F, ZY: () => h, az: () => c, c3: () => r, dP: () => v, dd: () => m, eS: () => b, eV: () => S, hf: () => x, hq: () => l, kl: () => y, mm: () => p, op: () => w, pv: () => s, qQ: () => N, u1: () => I, y6: () => d, zC: () => P, zX: () => A });
            var n = a(163889);
            function o() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function s(e, t) {
                U(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function r(e, t) {
                U(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function i(e, t) {
                U(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function c(e, t, a) {
                U(e)({ element: "client-home-log", action: t, data: { event_info: JSON.stringify(a) } });
            }
            function l(e, t) {
                U(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: t.errorMessage }), duration_ms: t.durationMs } });
            }
            function u(e, t) {
                U(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(t.messageTagCounts), duration_ms: t.durationMs } });
            }
            function d(e, t) {
                U(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: t } });
            }
            function p(e, t, a) {
                U(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: t, error: a }) } });
            }
            function m(e, t) {
                U(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function _(e) {
                U(e)({ element: "abort", action: "click" });
            }
            function h(e) {
                U(e)({ element: "clear-conversation", action: "click" });
            }
            function f(e, t) {
                U(e)({ element: "grok_mode", action: "change", data: { event_info: t } });
            }
            function g(e, t) {
                U(e)({ element: "grok_model", action: "change", data: { event_info: t } });
            }
            function x(e, t) {
                U(e)({ element: "tweet-carousel", action: "change", data: { event_info: t.toString() } });
            }
            function v(e, t) {
                U(e)({ element: "file-attachment", action: "add", data: { event_info: t } });
            }
            function w(e, t) {
                U(e)({ element: "file-attachment", action: "fail", data: { event_info: t } });
            }
            function y(e, t, a) {
                U(e)({ element: "api-add-response", action: "error", data: { event_info: `${t.message}\n${t.stack}\n${o()}` } }), (0, n.Hj)(t, { level: "warning", extra: a });
            }
            function k(e, t) {
                U(e)({ element: "api-add-response", action: "fail", data: { event_info: `${t}\n${o()}` } });
            }
            function b(e, t) {
                U(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: t ? "first_chunk" : void 0 } });
            }
            function C(e) {
                U(e)({ element: "file-upload", action: "success" });
            }
            function S(e, t) {
                U(e)({ element: "file-upload", action: "fail", data: { event_info: t } });
            }
            function E(e, t) {
                U(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: t ? "post_details" : "timeline" } });
            }
            function I(e, t, a) {
                U(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: t ? "post_details" : "timeline", event_info: a ? JSON.stringify({ mediaId: a }) : void 0 } });
            }
            function F(e, t) {
                U(e)({ element: "grok-drawer-open", action: "success", data: { event_source: t } });
            }
            function R(e, t) {
                U(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant }) } });
            }
            function O(e, t, a) {
                U(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant, followUpText: a }) } });
            }
            function J(e) {
                U(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function P(e, t) {
                U(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            function M(e, t) {
                U(e)({ element: "grok-memory-forget", action: "click", data: { event_info: t } });
            }
            function A(e, t, a) {
                U(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: t, error: a }) } });
            }
            function N(e, t) {
                U(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            const U = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-6ac0f1a5.88fa93fa.js.map
