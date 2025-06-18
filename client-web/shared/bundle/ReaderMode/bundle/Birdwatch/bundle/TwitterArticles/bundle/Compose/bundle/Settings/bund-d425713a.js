"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a", "bundle.DirectMessages-6ac0f1a5"],
    {
        187268: (e, t, n) => {
            n.d(t, { Bv: () => _, Jw: () => v, cU: () => w, eC: () => x, rs: () => h, w$: () => y });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(392237),
                r = n(956272),
                s = n(520913),
                i = n(913315),
                c = n(355586),
                l = n(14284),
                u = n(492244),
                d = n(397159);
            const p = /<xai:tool_usage_card>\s*(?:<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)*)<\/xai:tool_usage_card>/g,
                m = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                f = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/;
            function h(e) {
                return e.replace(p, (e) => {
                    const t = (function (e) {
                        const { toolArgs: t, toolName: n } = g(e);
                        let a = `<tool_usage_card><tool_name>${n}</tool_name>`;
                        return (a += `<tool_args>${t}</tool_args>`), (a += "</tool_usage_card>"), a;
                    })(e);
                    return t ?? e;
                });
            }
            function _(e) {
                const t = e.match(p);
                if (t) {
                    const { toolArgs: e, toolName: n } = g(t[0]);
                    return v(n, e);
                }
                return null;
            }
            function g(e) {
                let t = "",
                    n = "";
                const a = e.match(m);
                a && (t = a[1]);
                const o = e.match(f);
                return o && (n = o[1].trim()), { toolName: t, toolArgs: n };
            }
            function v(e, t) {
                const n = t.match(/^<!\[CDATA\[(.*?)\]\]>/ms);
                let a = {};
                if (n)
                    try {
                        a = JSON.parse(n[1]);
                    } catch (e) {
                        a = {};
                    }
                return { name: e, args: a };
            }
            const x = "Using tools";
            function w(e) {
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
            function y(e) {
                const t = { style: { width: o.default.theme.spaces.space16, height: o.default.theme.spaces.space16 } };
                switch (e) {
                    case "search_news":
                    case "web_search":
                        return a.createElement(r.default, t);
                    case "x_search":
                    case "get_x_user_timeline":
                        return a.createElement(s.default, t);
                    case "call_finance_api":
                        return a.createElement(i.default, t);
                    case "call_sports_api":
                        return a.createElement(c.default, t);
                    case "browse_page":
                        return a.createElement(l.default, t);
                    default:
                        return a.createElement(u.default, t);
                }
            }
        },
        14544: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                o = n(325686),
                r = n(443781),
                s = n(475647),
                i = n(461900);
            const c = (e) => {
                const t = a.useRef(),
                    n = a.useCallback((e) => {
                        if (t.current)
                            try {
                                t.current(e);
                            } catch (e) {}
                    }, []);
                return a.createElement(o.Z, { onMouseUp: n }, e.children, a.createElement(s.Z, { onMouseUpRef: t }));
            };
            function l(e) {
                const t = (0, r.QZ)();
                return t.featureSwitches.isTrue("responsive_web_grok_text_selection_enabled") && (0, i.$)(t) ? a.createElement(c, null, e.children) : e.children;
            }
        },
        620988: (e, t, n) => {
            n.d(t, { ZH: () => x, ZP: () => y, x9: () => w });
            n(136728);
            var a = n(202784),
                o = n(726426),
                r = n.n(o),
                s = n(111677),
                i = n.n(s),
                c = n(88656),
                l = n(952793),
                u = n(782642),
                d = n(725405);
            n(571372);
            var p = n(623494),
                m = n(737368);
            const f = 4,
                h = i().h4d7cbcc,
                _ = i().j77292b7,
                g = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, t) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                v = a.createContext(g);
            function x({ children: e }) {
                const [t, n] = a.useState({}),
                    o = (0, u.p)(),
                    s = (0, d.Z)(),
                    i = (0, m.k)(),
                    g = (0, l.JY)("responsive_web_grok_file_upload_max_files", f),
                    x = a.useCallback(
                        (e) => {
                            const a = t[e];
                            a &&
                                (a.abortController?.abort(),
                                n((t) => {
                                    const n = { ...t };
                                    return delete n[e], n;
                                }));
                        },
                        [t, n],
                    ),
                    w = a.useCallback(
                        async (e, t) => {
                            const a = r()(),
                                l = new AbortController(),
                                u = { abortController: l, isUploading: !0, isPendingAutomaticPromptSend: t?.awaitPromptSend, local: e };
                            if (e.type.startsWith("image/"))
                                try {
                                    u.dimensions = await ((d = e),
                                    new Promise((e, t) => {
                                        if (!d.type.startsWith("image/")) return void t(new Error("File is not an image"));
                                        const n = new FileReader();
                                        (n.onload = (n) => {
                                            const a = new Image();
                                            (a.onload = () => {
                                                e({ width: a.width, height: a.height });
                                            }),
                                                (a.onerror = () => {
                                                    t(new Error("Failed to load image"));
                                                }),
                                                (a.src = n.target.result);
                                        }),
                                            (n.onerror = () => {
                                                t(new Error("Failed to read file"));
                                            }),
                                            n.readAsDataURL(d);
                                    }));
                                } catch (e) {}
                            var d;
                            n((e) => (Object.keys(e).length >= g ? (o({ text: _({ count: g }) }), e) : { ...e, [a]: u }));
                            try {
                                const t = await i(e, l);
                                (0, p.Jm)(s), (u.remote = { ...t, dimensions: u.dimensions }), n((e) => (e[a] ? { ...e, [a]: u } : e));
                            } catch (e) {
                                if (e instanceof c.Z && 0 === e.status) return;
                                (0, p.eV)(s, e.message),
                                    o({ text: h }),
                                    n((e) => {
                                        const t = { ...e };
                                        return delete t[a], t;
                                    });
                            } finally {
                                (u.isUploading = !1), n((e) => (e[a] ? { ...e, [a]: u } : e));
                            }
                        },
                        [g, o, i, s],
                    ),
                    y = a.useCallback(
                        async (e) => {
                            const a = r()(),
                                o = { abortController: new AbortController(), isUploading: !1, remote: e };
                            n({ ...t, [a]: o });
                        },
                        [t],
                    );
                return a.createElement(v.Provider, { value: { selectedFiles: t, onFileSelected: w, clearSelectedFile: x, onGrokFileSelected: y } }, e);
            }
            function w() {
                const e = (0, l.hC)("responsive_web_grok_pdf_upload_enabled"),
                    t = (0, l.hC)("responsive_web_grok_text_upload_enabled");
                return a.useMemo(() => {
                    const n = ["image/jpeg", "image/png", "image/webp"];
                    return e && n.push("application/pdf"), t && (n.push("text/plain"), n.push("text/xml"), n.push("text/csv"), n.push("text/markdown"), n.push("text/x-markdown"), n.push("text/md"), n.push("text/calendar"), n.push("text/vcard"), n.push("text/json"), n.push("text/yaml"), n.push("text/x-python"), n.push("text/x-csrc"), n.push("text/x-c++src"), n.push("text/x-csharp"), n.push("text/x-ruby"), n.push("text/x-java-source"), n.push("text/x-go"), n.push("text/x-rust"), n.push("text/x-swift"), n.push("text/x-kotlin"), n.push("text/x-sql"), n.push("text/x-lua"), n.push("text/x-scala"), n.push("text/x-haskell"), n.push("text/x-php"), n.push("text/x-perl"), n.push("text/x-shellscript"), n.push("text/x-rsrc"), n.push("text/x-dart"), n.push("application/markdown"), n.push("application/xml"), n.push("application/json"), n.push("application/x-yaml"), n.push("application/x-latex"), n.push("application/x-sh"), n.push("application/x-msdownload"), n.push("application/x-httpd-php"), n.push("application/sql"), n.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), n.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")), n;
                }, [e, t]);
            }
            function y() {
                return a.useContext(v);
            }
        },
        737368: (e, t, n) => {
            n.d(t, { k: () => g });
            n(571372);
            var a = n(202784),
                o = n(111677),
                r = n.n(o),
                s = n(276259),
                i = n(952793),
                c = n(782642),
                l = n(725516),
                u = n(125363),
                d = n(458810),
                p = n(623494),
                m = n(620988);
            const f = r().c74e87e0,
                h = r().bea50a2a,
                _ = (e) => e.toLowerCase().replace(/\/$/, ""),
                g = () => {
                    const e = (0, c.p)(),
                        t = (0, l.z)(),
                        n = (0, u.I0)(),
                        o = (0, m.x9)(),
                        r = (0, i.hC)("responsive_web_grok_file_compression_enabled"),
                        g = (0, i.JY)("responsive_web_grok_file_max_size", 5242880);
                    return a.useCallback(
                        async (a, i) => {
                            let c = a;
                            if (
                                !((e, t) => {
                                    const n = _(t);
                                    return e.some((e) => {
                                        const t = _(e);
                                        if (t.endsWith("*")) {
                                            const e = t.slice(0, -1);
                                            return n.startsWith(e);
                                        }
                                        return n === t;
                                    });
                                })(o, a.type)
                            )
                                throw (e({ text: h }), (0, p.op)(t, `file has unsupported type: ${a.type}`), new Error());
                            if (r) {
                                let n;
                                try {
                                    n = await (0, s.hv)(a, g);
                                } catch (e) {}
                                if (!n) throw (e({ text: f }), (0, p.op)(t, "failed to compress the file"), new Error());
                                c = n;
                            } else if (a.size > g) throw (e({ text: f }), (0, p.op)(t, "file is too large"), new Error());
                            const l = await n((0, d.t)(c, i));
                            return (0, p.Jm)(t), l;
                        },
                        [e, t, n, r, g, o],
                    );
                };
        },
        654917: (e, t, n) => {
            n.d(t, { ZP: () => h, eX: () => m, uf: () => f });
            var a = n(202784),
                o = n(107267),
                r = n(323265),
                s = n(791632),
                i = n(443781),
                c = n(952793),
                l = n(125363),
                u = n(389071),
                d = n(63538),
                p = n(623494);
            function m() {
                const e = (0, o.useHistory)(),
                    t = (0, l.v9)(u.Es);
                return (0, s.HD)(e) ? (0, s.tT)(e) : t;
            }
            function f() {
                const e = m(),
                    t = (0, l.I0)(),
                    n = (0, l.v9)((t) => (0, u.YJ)(t, e));
                return (0, l.v9)(n.selectIsInitialized) || t((0, u.Ki)(e)), n;
            }
            function h() {
                const { userClaims: e } = (0, i.QZ)(),
                    t = m(),
                    n = f(),
                    o = (0, l.v9)(n.selectMessageIds),
                    s = (0, l.I0)(),
                    h = (0, l.v9)(n.selectFetchConversationIdStatus),
                    _ = (0, l.v9)(n.selectFetchConversationIdError),
                    g = (0, l.v9)(n.selectMode),
                    v = (0, l.v9)(n.selectStatus),
                    x = (0, l.v9)(u.Pt),
                    w = (0, l.v9)(n.selectConversationId),
                    y = (0, l.v9)(u.pZ),
                    k = (0, l.v9)(u.uF),
                    b = (0, l.v9)(u.F9),
                    C = (0, l.v9)(n.selectAnalysisEntityId),
                    S = (0, l.v9)(n.selectUsingExperiment);
                let E = !1;
                const R = (0, c.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (E = "premium") : (R || k) && (E = y.length > 0 ? "restricted" : "free");
                const I = a.useCallback(
                        async (e, t) => {
                            g !== e && (s(n.setMode(e)), r.ZP.isTwitterApp() || (await s((0, d.O)(e, b))), (0, p.RC)(t, e));
                        },
                        [s, n, g, b],
                    ),
                    F = a.useCallback(
                        async (e, t, n) => {
                            e !== b && (s((0, u.j1)(e, t)), r.ZP.isTwitterApp() || (await s((0, d.O)(g, e))), (0, p.JO)(n, e));
                        },
                        [s, g, b],
                    );
                return { messageIds: o, access: E, status: v, grokSettingsStatus: x, conversationKey: t, conversationId: w, analysisEntityId: C, accessRestrictedReasons: y, fetchConversationIdStatus: h, fetchConversationIdError: _, mode: g, model: b, changeMode: I, changeModel: F, usingExperiment: S };
            }
        },
        979512: (e, t, n) => {
            n.d(t, { Z: () => J });
            n(136728);
            var a = n(202784),
                o = n(107267),
                r = n(726426),
                s = n.n(r),
                i = n(111677),
                c = n.n(i),
                l = n(122123),
                u = n(443781),
                d = n(292484),
                p = n(952793),
                m = n(782642),
                f = n(293115),
                h = n(252352),
                _ = n(125363),
                g = n(550293),
                v = n(511582),
                x = n(389071),
                w = n(96275),
                y = n(327597),
                k = n(189953),
                b = n(456228),
                C = n(551864),
                S = n(623494),
                E = n(461900),
                R = n(737368),
                I = n(654917),
                F = n(305442);
            const O = c().h4d7cbcc;
            function J() {
                const e = a.useContext(f.ge),
                    t = a.useMemo(() => {
                        const { data: t, flushMethod: n, scribeMethod: a } = e;
                        return new h.Z(a, { page: "grok-drawer" }, t, n);
                    }, [e]),
                    n = (0, u.QZ)(),
                    r = (0, _.I0)(),
                    i = (0, m.p)(),
                    c = (0, o.useLocation)(),
                    J = (0, p.hC)("responsive_web_grok_show_citations"),
                    { conversationKey: Z } = (0, I.ZP)(),
                    A = (0, d.cm)(),
                    M = !c.pathname.startsWith("/messages") && !c.pathname.match(".*/status/.+/photo/.+") && !c.pathname.startsWith("/i/grok/feed"),
                    P = (0, o.useHistory)(),
                    N = (0, R.k)(),
                    U = (0, F.Z)("drawer"),
                    T = (0, _.v9)(g.kX) === v.S.EXPANDED;
                return {
                    openGrok: a.useCallback(
                        async ({ autoSubmit: e, conversationId: a, imageUrl: o, isDeepsearch: u, isImageEdit: d, isReasoning: p, mediaId: m, promptMetadata: f, source: h, text: _ }) => {
                            if (!(0, E.$)(n)) return void P.push("/i/grok");
                            let R;
                            if ((("post_analysis_timeline" !== h && "post_analysis_details_page" !== h) || (0, S.HO)(t, "post_analysis_details_page" === h), o))
                                try {
                                    const e = await (0, l.o2)(o);
                                    R = await N(e, new AbortController());
                                } catch (e) {
                                    i({ text: O });
                                }
                            const I = {};
                            if ((("post_image_annotation" !== h && "post_image_annotation_fullscreen" !== h) || ((I.imageGen = !0), (0, S.u1)(t, "post_image_annotation_fullscreen" === h, m)), "grok_image_feed" === h && (I.imageGen = !0), c.pathname.startsWith("/i/grok") && !c.pathname.startsWith("/i/grok/feed"))) return void r((0, y.u)({ analytics: t, conversationKey: Z })({ text: _, attachments: R ? [R] : void 0, mode: k.IK.REGULAR, returnCitations: J, promptMetadata: f, imageGenerationCount: U, toolOverrides: I, source: h, isDeepsearch: u, isReasoning: p }));
                            const F = a ?? s()();
                            if (a) {
                                const e = a || "";
                                await r((0, w.d)(e, t));
                            } else r((0, x.Ki)(F));
                            if ((A && M ? ((0, S.YW)(t, h), T && r(g.bi(v.S.COLLAPSED)), r((0, b.bi)(C.j.EXPANDED))) : P.push("/i/grok"), e)) r((0, y.u)({ analytics: t, conversationKey: F })({ text: _, attachments: R ? [R] : void 0, mode: k.IK.REGULAR, promptMetadata: f, returnCitations: J, imageGenerationCount: U, toolOverrides: I, source: h, isDeepsearch: u, isReasoning: p }));
                            else {
                                const e = { text: _, attachments: R ? [R] : [] };
                                d && R ? (e.modeButtonFilterKey = "ImageEdit") : u ? (e.modeButtonFilterKey = "Research") : p && (e.modeButtonFilterKey = "Reasoning"), r((0, x.Uo)(F, e));
                            }
                        },
                        [T, i, r, t, n, P, N, A, Z, J, M, c.pathname, U],
                    ),
                };
            }
        },
        305442: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(952793);
            function o(e) {
                return (0, a.JY)("responsive_web_grok_imggen_count", 1);
            }
        },
        623494: (e, t, n) => {
            n.d(t, { DE: () => f, G$: () => i, HO: () => E, HR: () => O, JO: () => g, Jm: () => C, NH: () => J, RC: () => _, S7: () => F, UV: () => A, Uk: () => k, YI: () => u, YW: () => I, ZY: () => h, az: () => c, c3: () => s, dP: () => x, dd: () => m, eS: () => b, eV: () => S, hf: () => v, hq: () => l, kl: () => y, mm: () => p, op: () => w, pv: () => r, qQ: () => P, u1: () => R, y6: () => d, zC: () => Z, zX: () => M });
            var a = n(163889);
            function o() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function r(e, t) {
                N(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function s(e, t) {
                N(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function i(e, t) {
                N(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function c(e, t, n) {
                N(e)({ element: "client-home-log", action: t, data: { event_info: JSON.stringify(n) } });
            }
            function l(e, t) {
                N(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: t.errorMessage }), duration_ms: t.durationMs } });
            }
            function u(e, t) {
                N(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(t.messageTagCounts), duration_ms: t.durationMs } });
            }
            function d(e, t) {
                N(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: t } });
            }
            function p(e, t, n) {
                N(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: t, error: n }) } });
            }
            function m(e, t) {
                N(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function f(e) {
                N(e)({ element: "abort", action: "click" });
            }
            function h(e) {
                N(e)({ element: "clear-conversation", action: "click" });
            }
            function _(e, t) {
                N(e)({ element: "grok_mode", action: "change", data: { event_info: t } });
            }
            function g(e, t) {
                N(e)({ element: "grok_model", action: "change", data: { event_info: t } });
            }
            function v(e, t) {
                N(e)({ element: "tweet-carousel", action: "change", data: { event_info: t.toString() } });
            }
            function x(e, t) {
                N(e)({ element: "file-attachment", action: "add", data: { event_info: t } });
            }
            function w(e, t) {
                N(e)({ element: "file-attachment", action: "fail", data: { event_info: t } });
            }
            function y(e, t, n) {
                N(e)({ element: "api-add-response", action: "error", data: { event_info: `${t.message}\n${t.stack}\n${o()}` } }), (0, a.Hj)(t, { level: "warning", extra: n });
            }
            function k(e, t) {
                N(e)({ element: "api-add-response", action: "fail", data: { event_info: `${t}\n${o()}` } });
            }
            function b(e, t) {
                N(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: t ? "first_chunk" : void 0 } });
            }
            function C(e) {
                N(e)({ element: "file-upload", action: "success" });
            }
            function S(e, t) {
                N(e)({ element: "file-upload", action: "fail", data: { event_info: t } });
            }
            function E(e, t) {
                N(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: t ? "post_details" : "timeline" } });
            }
            function R(e, t, n) {
                N(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: t ? "post_details" : "timeline", event_info: n ? JSON.stringify({ mediaId: n }) : void 0 } });
            }
            function I(e, t) {
                N(e)({ element: "grok-drawer-open", action: "success", data: { event_source: t } });
            }
            function F(e, t) {
                N(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant }) } });
            }
            function O(e, t, n) {
                N(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant, followUpText: n }) } });
            }
            function J(e) {
                N(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function Z(e, t) {
                N(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            function A(e, t) {
                N(e)({ element: "grok-memory-forget", action: "click", data: { event_info: t } });
            }
            function M(e, t, n) {
                N(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: t, error: n }) } });
            }
            function P(e, t) {
                N(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            const N = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        545389: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = ({ featureSwitches: e, isOwnPost: t, isPremium: n, surface: a, tweet: r }) => {
                    const s = !r || r.favorite_count > 0;
                    if (!t || n || !s) return !1;
                    const i = o(a);
                    return e.isTrue(i);
                },
                o = (e) => ("detail_screen" === e ? "subscriptions_upsells_post_details_analytics_enabled" : "subscriptions_upsells_post_engagements_enabled");
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a.03b94a2a.js.map
