"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a", "bundle.DirectMessages-6ac0f1a5"],
    {
        187268: (e, t, n) => {
            n.d(t, { CK: () => w, Ez: () => f, QK: () => g, Sd: () => x, eC: () => v, w$: () => y });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(392237),
                s = n(784732),
                r = n(14284),
                i = n(520913),
                c = n(913315),
                l = n(355586),
                u = n(492244),
                d = n(397159);
            const p = /<xai:tool_usage_card>\s*(?:<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>\s*)?<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)<\/xai:tool_usage_card>/g,
                m = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                _ = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/,
                h = /<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>/;
            function f(e) {
                return e.replace(p, (e) => {
                    const t = (function (e) {
                        const t = e.match(m),
                            n = e.match(_),
                            a = e.match(h),
                            o = t ? t[1] : "",
                            s = n ? n[1] : "",
                            r = a ? a[1] : "";
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
                        id: n,
                        name: a,
                    } = (function (e) {
                        let t = "",
                            n = "",
                            a = "";
                        const o = e.match(h);
                        o && (t = o[1]);
                        const s = e.match(m);
                        s && (n = s[1]);
                        const r = e.match(_);
                        r && (a = r[1].trim());
                        return { id: t, name: n, args: a };
                    })(t[0]);
                    return x(n, a, e);
                }
                return null;
            }
            function x(e, t, n) {
                const a = n.match(/^<!\[CDATA\[(.*?)\]\]>/ms);
                let o = {};
                if (a)
                    try {
                        o = JSON.parse(a[1]);
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
                        return a.createElement(s.default, t);
                    case "web_search":
                    case "browse_page":
                        return a.createElement(r.default, t);
                    case "x_search":
                    case "get_x_user_timeline":
                    case "x_keyword_search":
                    case "x_semantic_search":
                    case "x_user_search":
                        return a.createElement(i.default, t);
                    case "call_finance_api":
                        return a.createElement(c.default, t);
                    case "call_sports_api":
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
                s = n(443781),
                r = n(475647),
                i = n(461900);
            const c = (e) => {
                const t = a.useRef(),
                    n = a.useCallback((e) => {
                        if (t.current)
                            try {
                                t.current(e);
                            } catch (e) {}
                    }, []);
                return a.createElement(o.Z, { onMouseUp: n }, e.children, a.createElement(r.Z, { onMouseUpRef: t }));
            };
            function l(e) {
                const t = (0, s.QZ)();
                return t.featureSwitches.isTrue("responsive_web_grok_text_selection_enabled") && (0, i.$)(t) ? a.createElement(c, null, e.children) : e.children;
            }
        },
        620988: (e, t, n) => {
            n.d(t, { ZH: () => v, ZP: () => y, x9: () => w });
            n(136728);
            var a = n(202784),
                o = n(726426),
                s = n.n(o),
                r = n(111677),
                i = n.n(r),
                c = n(88656),
                l = n(952793),
                u = n(782642),
                d = n(725405);
            n(571372);
            var p = n(623494),
                m = n(737368);
            const _ = 4,
                h = i().h4d7cbcc,
                f = i().j77292b7,
                g = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, t) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                x = a.createContext(g);
            function v({ children: e }) {
                const [t, n] = a.useState({}),
                    o = (0, u.p)(),
                    r = (0, d.Z)(),
                    i = (0, m.k)(),
                    g = (0, l.JY)("responsive_web_grok_file_upload_max_files", _),
                    v = a.useCallback(
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
                            const a = s()(),
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
                            n((e) => (Object.keys(e).length >= g ? (o({ text: f({ count: g }) }), e) : { ...e, [a]: u }));
                            try {
                                const t = await i(e, l);
                                (0, p.Jm)(r), (u.remote = { ...t, dimensions: u.dimensions }), n((e) => (e[a] ? { ...e, [a]: u } : e));
                            } catch (e) {
                                if (e instanceof c.Z && 0 === e.status) return;
                                (0, p.eV)(r, e.message),
                                    o({ text: h }),
                                    n((e) => {
                                        const t = { ...e };
                                        return delete t[a], t;
                                    });
                            } finally {
                                (u.isUploading = !1), n((e) => (e[a] ? { ...e, [a]: u } : e));
                            }
                        },
                        [g, o, i, r],
                    ),
                    y = a.useCallback(
                        async (e) => {
                            const a = s()(),
                                o = { abortController: new AbortController(), isUploading: !1, remote: e };
                            n({ ...t, [a]: o });
                        },
                        [t],
                    );
                return a.createElement(x.Provider, { value: { selectedFiles: t, onFileSelected: w, clearSelectedFile: v, onGrokFileSelected: y } }, e);
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
                return a.useContext(x);
            }
        },
        737368: (e, t, n) => {
            n.d(t, { k: () => g });
            n(571372);
            var a = n(202784),
                o = n(111677),
                s = n.n(o),
                r = n(276259),
                i = n(952793),
                c = n(782642),
                l = n(725516),
                u = n(125363),
                d = n(458810),
                p = n(623494),
                m = n(620988);
            const _ = s().c74e87e0,
                h = s().bea50a2a,
                f = (e) => e.toLowerCase().replace(/\/$/, ""),
                g = () => {
                    const e = (0, c.p)(),
                        t = (0, l.z)(),
                        n = (0, u.I0)(),
                        o = (0, m.x9)(),
                        s = (0, i.hC)("responsive_web_grok_file_compression_enabled"),
                        g = (0, i.JY)("responsive_web_grok_file_max_size", 5242880);
                    return a.useCallback(
                        async (a, i) => {
                            let c = a;
                            if (
                                !((e, t) => {
                                    const n = f(t);
                                    return e.some((e) => {
                                        const t = f(e);
                                        if (t.endsWith("*")) {
                                            const e = t.slice(0, -1);
                                            return n.startsWith(e);
                                        }
                                        return n === t;
                                    });
                                })(o, a.type)
                            )
                                throw (e({ text: h }), (0, p.op)(t, `file has unsupported type: ${a.type}`), new Error());
                            if (s) {
                                let n;
                                try {
                                    n = await (0, r.hv)(a, g);
                                } catch (e) {}
                                if (!n) throw (e({ text: _ }), (0, p.op)(t, "failed to compress the file"), new Error());
                                c = n;
                            } else if (a.size > g) throw (e({ text: _ }), (0, p.op)(t, "file is too large"), new Error());
                            const l = await n((0, d.t)(c, i));
                            return (0, p.Jm)(t), l;
                        },
                        [e, t, n, s, g, o],
                    );
                };
        },
        654917: (e, t, n) => {
            n.d(t, { ZP: () => h, eX: () => m, uf: () => _ });
            var a = n(202784),
                o = n(107267),
                s = n(323265),
                r = n(791632),
                i = n(443781),
                c = n(952793),
                l = n(125363),
                u = n(389071),
                d = n(63538),
                p = n(623494);
            function m() {
                const e = (0, o.useHistory)(),
                    t = (0, l.v9)(u.Es);
                return (0, r.HD)(e) ? (0, r.tT)(e) : t;
            }
            function _() {
                const e = m(),
                    t = (0, l.I0)(),
                    n = (0, l.v9)((t) => (0, u.YJ)(t, e));
                return (0, l.v9)(n.selectIsInitialized) || t((0, u.Ki)(e)), n;
            }
            function h() {
                const { userClaims: e } = (0, i.QZ)(),
                    t = m(),
                    n = _(),
                    o = (0, l.v9)(n.selectMessageIds),
                    r = (0, l.I0)(),
                    h = (0, l.v9)(n.selectFetchConversationIdStatus),
                    f = (0, l.v9)(n.selectFetchConversationIdError),
                    g = (0, l.v9)(n.selectMode),
                    x = (0, l.v9)(n.selectStatus),
                    v = (0, l.v9)(u.Pt),
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
                            g !== e && (r(n.setMode(e)), s.ZP.isTwitterApp() || (await r((0, d.O)(e, b))), (0, p.RC)(t, e));
                        },
                        [r, n, g, b],
                    ),
                    F = a.useCallback(
                        async (e, t, n) => {
                            e !== b && (r((0, u.j1)(e, t)), s.ZP.isTwitterApp() || (await r((0, d.O)(g, e))), (0, p.JO)(n, e));
                        },
                        [r, g, b],
                    );
                return { messageIds: o, access: E, status: x, grokSettingsStatus: v, conversationKey: t, conversationId: w, analysisEntityId: C, accessRestrictedReasons: y, fetchConversationIdStatus: h, fetchConversationIdError: f, mode: g, model: b, changeMode: I, changeModel: F, usingExperiment: S };
            }
        },
        979512: (e, t, n) => {
            n.d(t, { Z: () => J });
            n(136728);
            var a = n(202784),
                o = n(107267),
                s = n(726426),
                r = n.n(s),
                i = n(111677),
                c = n.n(i),
                l = n(122123),
                u = n(443781),
                d = n(292484),
                p = n(952793),
                m = n(782642),
                _ = n(293115),
                h = n(252352),
                f = n(125363),
                g = n(550293),
                x = n(511582),
                v = n(389071),
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
                const e = a.useContext(_.ge),
                    t = a.useMemo(() => {
                        const { data: t, flushMethod: n, scribeMethod: a } = e;
                        return new h.Z(a, { page: "grok-drawer" }, t, n);
                    }, [e]),
                    n = (0, u.QZ)(),
                    s = (0, f.I0)(),
                    i = (0, m.p)(),
                    c = (0, o.useLocation)(),
                    J = (0, p.hC)("responsive_web_grok_show_citations"),
                    { conversationKey: Z } = (0, I.ZP)(),
                    M = (0, d.cm)(),
                    P = !c.pathname.startsWith("/messages") && !c.pathname.match(".*/status/.+/photo/.+") && !c.pathname.startsWith("/i/grok/feed"),
                    U = (0, o.useHistory)(),
                    A = (0, R.k)(),
                    N = (0, F.Z)("drawer"),
                    T = (0, f.v9)(g.kX) === x.S.EXPANDED;
                return {
                    openGrok: a.useCallback(
                        async ({ autoSubmit: e, conversationId: a, imageUrl: o, isDeepsearch: u, isImageEdit: d, isReasoning: p, mediaId: m, promptMetadata: _, source: h, text: f }) => {
                            if (!(0, E.$)(n)) return void U.push("/i/grok");
                            let R;
                            if ((("post_analysis_timeline" !== h && "post_analysis_details_page" !== h) || (0, S.HO)(t, "post_analysis_details_page" === h), o))
                                try {
                                    const e = await (0, l.o2)(o);
                                    R = await A(e, new AbortController());
                                } catch (e) {
                                    i({ text: O });
                                }
                            const I = {};
                            if ((("post_image_annotation" !== h && "post_image_annotation_fullscreen" !== h) || ((I.imageGen = !0), (0, S.u1)(t, "post_image_annotation_fullscreen" === h, m)), "grok_image_feed" === h && (I.imageGen = !0), c.pathname.startsWith("/i/grok") && !c.pathname.startsWith("/i/grok/feed"))) return void s((0, y.u)({ analytics: t, conversationKey: Z })({ text: f, attachments: R ? [R] : void 0, mode: k.IK.REGULAR, returnCitations: J, promptMetadata: _, imageGenerationCount: N, toolOverrides: I, source: h, isDeepsearch: u, isReasoning: p }));
                            const F = a ?? r()();
                            if (a) {
                                const e = a || "";
                                await s((0, w.d)(e, t));
                            } else s((0, v.Ki)(F));
                            if ((M && P ? ((0, S.YW)(t, h), T && s(g.bi(x.S.COLLAPSED)), s((0, b.bi)(C.j.EXPANDED))) : U.push("/i/grok"), e)) s((0, y.u)({ analytics: t, conversationKey: F })({ text: f, attachments: R ? [R] : void 0, mode: k.IK.REGULAR, promptMetadata: _, returnCitations: J, imageGenerationCount: N, toolOverrides: I, source: h, isDeepsearch: u, isReasoning: p }));
                            else {
                                const e = { text: f, attachments: R ? [R] : [] };
                                d && R ? (e.modeButtonFilterKey = "ImageEdit") : u ? (e.modeButtonFilterKey = "Research") : p && (e.modeButtonFilterKey = "Reasoning"), s((0, v.Uo)(F, e));
                            }
                        },
                        [T, i, s, t, n, U, A, M, Z, J, P, c.pathname, N],
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
            n.d(t, { DE: () => _, G$: () => i, HO: () => E, HR: () => O, JO: () => g, Jm: () => C, NH: () => J, RC: () => f, S7: () => F, UV: () => M, Uk: () => k, YI: () => u, YW: () => I, ZY: () => h, az: () => c, c3: () => r, dP: () => v, dd: () => m, eS: () => b, eV: () => S, hf: () => x, hq: () => l, kl: () => y, mm: () => p, op: () => w, pv: () => s, qQ: () => U, u1: () => R, y6: () => d, zC: () => Z, zX: () => P });
            var a = n(163889);
            function o() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function s(e, t) {
                A(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function r(e, t) {
                A(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function i(e, t) {
                A(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function c(e, t, n) {
                A(e)({ element: "client-home-log", action: t, data: { event_info: JSON.stringify(n) } });
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
            function p(e, t, n) {
                A(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: t, error: n }) } });
            }
            function m(e, t) {
                A(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function _(e) {
                A(e)({ element: "abort", action: "click" });
            }
            function h(e) {
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
            function y(e, t, n) {
                A(e)({ element: "api-add-response", action: "error", data: { event_info: `${t.message}\n${t.stack}\n${o()}` } }), (0, a.Hj)(t, { level: "warning", extra: n });
            }
            function k(e, t) {
                A(e)({ element: "api-add-response", action: "fail", data: { event_info: `${t}\n${o()}` } });
            }
            function b(e, t) {
                A(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: t ? "first_chunk" : void 0 } });
            }
            function C(e) {
                A(e)({ element: "file-upload", action: "success" });
            }
            function S(e, t) {
                A(e)({ element: "file-upload", action: "fail", data: { event_info: t } });
            }
            function E(e, t) {
                A(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: t ? "post_details" : "timeline" } });
            }
            function R(e, t, n) {
                A(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: t ? "post_details" : "timeline", event_info: n ? JSON.stringify({ mediaId: n }) : void 0 } });
            }
            function I(e, t) {
                A(e)({ element: "grok-drawer-open", action: "success", data: { event_source: t } });
            }
            function F(e, t) {
                A(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant }) } });
            }
            function O(e, t, n) {
                A(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant, followUpText: n }) } });
            }
            function J(e) {
                A(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function Z(e, t) {
                A(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            function M(e, t) {
                A(e)({ element: "grok-memory-forget", action: "click", data: { event_info: t } });
            }
            function P(e, t, n) {
                A(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: t, error: n }) } });
            }
            function U(e, t) {
                A(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            const A = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        545389: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = ({ featureSwitches: e, isOwnPost: t, isPremium: n, surface: a, tweet: s }) => {
                    const r = !s || s.favorite_count > 0;
                    if (!t || n || !r) return !1;
                    const i = o(a);
                    return e.isTrue(i);
                },
                o = (e) => ("detail_screen" === e ? "subscriptions_upsells_post_details_analytics_enabled" : "subscriptions_upsells_post_engagements_enabled");
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a.6121c78a.js.map
