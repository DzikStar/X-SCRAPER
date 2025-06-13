"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-6ac0f1a5"],
    {
        620988: (e, t, n) => {
            n.d(t, { ZH: () => x, ZP: () => k, x9: () => w });
            n(136728);
            var a = n(202784),
                o = n(726426),
                i = n.n(o),
                s = n(111677),
                r = n.n(s),
                c = n(88656),
                l = n(952793),
                d = n(782642),
                u = n(725405);
            n(571372);
            var p = n(623494),
                m = n(737368);
            const f = 4,
                h = r().h4d7cbcc,
                g = r().j77292b7,
                _ = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, t) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                v = a.createContext(_);
            function x({ children: e }) {
                const [t, n] = a.useState({}),
                    o = (0, d.p)(),
                    s = (0, u.Z)(),
                    r = (0, m.k)(),
                    _ = (0, l.JY)("responsive_web_grok_file_upload_max_files", f),
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
                            const a = i()(),
                                l = new AbortController(),
                                d = { abortController: l, isUploading: !0, isPendingAutomaticPromptSend: t?.awaitPromptSend, local: e };
                            if (e.type.startsWith("image/"))
                                try {
                                    d.dimensions = await ((u = e),
                                    new Promise((e, t) => {
                                        if (!u.type.startsWith("image/")) return void t(new Error("File is not an image"));
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
                                            n.readAsDataURL(u);
                                    }));
                                } catch (e) {}
                            var u;
                            n((e) => (Object.keys(e).length >= _ ? (o({ text: g({ count: _ }) }), e) : { ...e, [a]: d }));
                            try {
                                const t = await r(e, l);
                                (0, p.Jm)(s), (d.remote = { ...t, dimensions: d.dimensions }), n((e) => (e[a] ? { ...e, [a]: d } : e));
                            } catch (e) {
                                if (e instanceof c.Z && 0 === e.status) return;
                                (0, p.eV)(s, e.message),
                                    o({ text: h }),
                                    n((e) => {
                                        const t = { ...e };
                                        return delete t[a], t;
                                    });
                            } finally {
                                (d.isUploading = !1), n((e) => (e[a] ? { ...e, [a]: d } : e));
                            }
                        },
                        [_, o, r, s],
                    ),
                    k = a.useCallback(
                        async (e) => {
                            const a = i()(),
                                o = { abortController: new AbortController(), isUploading: !1, remote: e };
                            n({ ...t, [a]: o });
                        },
                        [t],
                    );
                return a.createElement(v.Provider, { value: { selectedFiles: t, onFileSelected: w, clearSelectedFile: x, onGrokFileSelected: k } }, e);
            }
            function w() {
                const e = (0, l.hC)("responsive_web_grok_pdf_upload_enabled"),
                    t = (0, l.hC)("responsive_web_grok_text_upload_enabled");
                return a.useMemo(() => {
                    const n = ["image/jpeg", "image/png", "image/webp"];
                    return e && n.push("application/pdf"), t && (n.push("text/plain"), n.push("text/xml"), n.push("text/csv"), n.push("text/markdown"), n.push("text/x-markdown"), n.push("text/md"), n.push("text/calendar"), n.push("text/vcard"), n.push("text/json"), n.push("text/yaml"), n.push("text/x-python"), n.push("text/x-csrc"), n.push("text/x-c++src"), n.push("text/x-csharp"), n.push("text/x-ruby"), n.push("text/x-java-source"), n.push("text/x-go"), n.push("text/x-rust"), n.push("text/x-swift"), n.push("text/x-kotlin"), n.push("text/x-sql"), n.push("text/x-lua"), n.push("text/x-scala"), n.push("text/x-haskell"), n.push("text/x-php"), n.push("text/x-perl"), n.push("text/x-shellscript"), n.push("text/x-rsrc"), n.push("text/x-dart"), n.push("application/markdown"), n.push("application/xml"), n.push("application/json"), n.push("application/x-yaml"), n.push("application/x-latex"), n.push("application/x-sh"), n.push("application/x-msdownload"), n.push("application/x-httpd-php"), n.push("application/sql"), n.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), n.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")), n;
                }, [e, t]);
            }
            function k() {
                return a.useContext(v);
            }
        },
        737368: (e, t, n) => {
            n.d(t, { k: () => _ });
            n(571372);
            var a = n(202784),
                o = n(111677),
                i = n.n(o),
                s = n(276259),
                r = n(952793),
                c = n(782642),
                l = n(725516),
                d = n(125363),
                u = n(458810),
                p = n(623494),
                m = n(620988);
            const f = i().c74e87e0,
                h = i().bea50a2a,
                g = (e) => e.toLowerCase().replace(/\/$/, ""),
                _ = () => {
                    const e = (0, c.p)(),
                        t = (0, l.z)(),
                        n = (0, d.I0)(),
                        o = (0, m.x9)(),
                        i = (0, r.hC)("responsive_web_grok_file_compression_enabled"),
                        _ = (0, r.JY)("responsive_web_grok_file_max_size", 5242880);
                    return a.useCallback(
                        async (a, r) => {
                            let c = a;
                            if (
                                !((e, t) => {
                                    const n = g(t);
                                    return e.some((e) => {
                                        const t = g(e);
                                        if (t.endsWith("*")) {
                                            const e = t.slice(0, -1);
                                            return n.startsWith(e);
                                        }
                                        return n === t;
                                    });
                                })(o, a.type)
                            )
                                throw (e({ text: h }), (0, p.op)(t, `file has unsupported type: ${a.type}`), new Error());
                            if (i) {
                                let n;
                                try {
                                    n = await (0, s.hv)(a, _);
                                } catch (e) {}
                                if (!n) throw (e({ text: f }), (0, p.op)(t, "failed to compress the file"), new Error());
                                c = n;
                            } else if (a.size > _) throw (e({ text: f }), (0, p.op)(t, "file is too large"), new Error());
                            const l = await n((0, u.t)(c, r));
                            return (0, p.Jm)(t), l;
                        },
                        [e, t, n, i, _, o],
                    );
                };
        },
        654917: (e, t, n) => {
            n.d(t, { ZP: () => h, eX: () => m, uf: () => f });
            var a = n(202784),
                o = n(107267),
                i = n(323265),
                s = n(791632),
                r = n(443781),
                c = n(952793),
                l = n(125363),
                d = n(389071),
                u = n(63538),
                p = n(623494);
            function m() {
                const e = (0, o.useHistory)(),
                    t = (0, l.v9)(d.Es);
                return (0, s.HD)(e) ? (0, s.tT)(e) : t;
            }
            function f() {
                const e = m(),
                    t = (0, l.I0)(),
                    n = (0, l.v9)((t) => (0, d.YJ)(t, e));
                return (0, l.v9)(n.selectIsInitialized) || t((0, d.Ki)(e)), n;
            }
            function h() {
                const { userClaims: e } = (0, r.QZ)(),
                    t = m(),
                    n = f(),
                    o = (0, l.v9)(n.selectMessageIds),
                    s = (0, l.I0)(),
                    h = (0, l.v9)(n.selectFetchConversationIdStatus),
                    g = (0, l.v9)(n.selectFetchConversationIdError),
                    _ = (0, l.v9)(n.selectMode),
                    v = (0, l.v9)(n.selectStatus),
                    x = (0, l.v9)(d.Pt),
                    w = (0, l.v9)(n.selectConversationId),
                    k = (0, l.v9)(d.pZ),
                    y = (0, l.v9)(d.uF),
                    b = (0, l.v9)(d.F9),
                    C = (0, l.v9)(n.selectAnalysisEntityId),
                    S = (0, l.v9)(n.selectUsingExperiment);
                let E = !1;
                const I = (0, c.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (E = "premium") : (I || y) && (E = k.length > 0 ? "restricted" : "free");
                const O = a.useCallback(
                        async (e, t) => {
                            _ !== e && (s(n.setMode(e)), i.ZP.isTwitterApp() || (await s((0, u.O)(e, b))), (0, p.RC)(t, e));
                        },
                        [s, n, _, b],
                    ),
                    J = a.useCallback(
                        async (e, t, n) => {
                            e !== b && (s((0, d.j1)(e, t)), i.ZP.isTwitterApp() || (await s((0, u.O)(_, e))), (0, p.JO)(n, e));
                        },
                        [s, _, b],
                    );
                return { messageIds: o, access: E, status: v, grokSettingsStatus: x, conversationKey: t, conversationId: w, analysisEntityId: C, accessRestrictedReasons: k, fetchConversationIdStatus: h, fetchConversationIdError: g, mode: _, model: b, changeMode: O, changeModel: J, usingExperiment: S };
            }
        },
        979512: (e, t, n) => {
            n.d(t, { Z: () => M });
            n(136728);
            var a = n(202784),
                o = n(107267),
                i = n(726426),
                s = n.n(i),
                r = n(111677),
                c = n.n(r),
                l = n(122123),
                d = n(443781),
                u = n(292484),
                p = n(952793),
                m = n(782642),
                f = n(293115),
                h = n(252352),
                g = n(125363),
                _ = n(550293),
                v = n(511582),
                x = n(389071),
                w = n(96275),
                k = n(327597),
                y = n(189953),
                b = n(456228),
                C = n(551864),
                S = n(623494),
                E = n(461900),
                I = n(737368),
                O = n(654917),
                J = n(305442);
            const F = c().h4d7cbcc;
            function M() {
                const e = a.useContext(f.ge),
                    t = a.useMemo(() => {
                        const { data: t, flushMethod: n, scribeMethod: a } = e;
                        return new h.Z(a, { page: "grok-drawer" }, t, n);
                    }, [e]),
                    n = (0, d.QZ)(),
                    i = (0, g.I0)(),
                    r = (0, m.p)(),
                    c = (0, o.useLocation)(),
                    M = (0, p.hC)("responsive_web_grok_show_citations"),
                    { conversationKey: P } = (0, O.ZP)(),
                    R = (0, u.cm)(),
                    Z = !c.pathname.startsWith("/messages") && !c.pathname.match(".*/status/.+/photo/.+") && !c.pathname.startsWith("/i/grok/feed"),
                    N = (0, o.useHistory)(),
                    A = (0, I.k)(),
                    D = (0, J.Z)("drawer"),
                    T = (0, g.v9)(_.kX) === v.S.EXPANDED;
                return {
                    openGrok: a.useCallback(
                        async ({ autoSubmit: e, conversationId: a, imageUrl: o, isDeepsearch: d, isImageEdit: u, isReasoning: p, mediaId: m, promptMetadata: f, source: h, text: g }) => {
                            if (!(0, E.$)(n)) return void N.push("/i/grok");
                            let I;
                            if ((("post_analysis_timeline" !== h && "post_analysis_details_page" !== h) || (0, S.HO)(t, "post_analysis_details_page" === h), o))
                                try {
                                    const e = await (0, l.o2)(o);
                                    I = await A(e, new AbortController());
                                } catch (e) {
                                    r({ text: F });
                                }
                            const O = {};
                            if ((("post_image_annotation" !== h && "post_image_annotation_fullscreen" !== h) || ((O.imageGen = !0), (0, S.u1)(t, "post_image_annotation_fullscreen" === h, m)), "grok_image_feed" === h && (O.imageGen = !0), c.pathname.startsWith("/i/grok") && !c.pathname.startsWith("/i/grok/feed"))) return void i((0, k.u)({ analytics: t, conversationKey: P })({ text: g, attachments: I ? [I] : void 0, mode: y.IK.REGULAR, returnCitations: M, promptMetadata: f, imageGenerationCount: D, toolOverrides: O, source: h, isDeepsearch: d, isReasoning: p }));
                            const J = a ?? s()();
                            if (a) {
                                const e = a || "";
                                await i((0, w.d)(e, t));
                            } else i((0, x.Ki)(J));
                            if ((R && Z ? ((0, S.YW)(t, h), T && i(_.bi(v.S.COLLAPSED)), i((0, b.bi)(C.j.EXPANDED))) : N.push("/i/grok"), e)) i((0, k.u)({ analytics: t, conversationKey: J })({ text: g, attachments: I ? [I] : void 0, mode: y.IK.REGULAR, promptMetadata: f, returnCitations: M, imageGenerationCount: D, toolOverrides: O, source: h, isDeepsearch: d, isReasoning: p }));
                            else {
                                const e = { text: g, attachments: I ? [I] : [] };
                                u && I ? (e.modeButtonFilterKey = "ImageEdit") : d ? (e.modeButtonFilterKey = "Research") : p && (e.modeButtonFilterKey = "Reasoning"), i((0, x.Uo)(J, e));
                            }
                        },
                        [T, r, i, t, n, N, A, R, P, M, Z, c.pathname, D],
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
            n.d(t, { DE: () => f, G$: () => r, HO: () => E, HR: () => F, JO: () => _, Jm: () => C, NH: () => M, RC: () => g, S7: () => J, UV: () => R, Uk: () => y, YI: () => d, YW: () => O, ZY: () => h, az: () => c, c3: () => s, dP: () => x, dd: () => m, eS: () => b, eV: () => S, hf: () => v, hq: () => l, kl: () => k, mm: () => p, op: () => w, pv: () => i, qQ: () => N, u1: () => I, y6: () => u, zC: () => P, zX: () => Z });
            var a = n(163889);
            function o() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function i(e, t) {
                A(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function s(e, t) {
                A(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function r(e, t) {
                A(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function c(e, t, n) {
                A(e)({ element: "client-home-log", action: t, data: { event_info: JSON.stringify(n) } });
            }
            function l(e, t) {
                A(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: t.errorMessage }), duration_ms: t.durationMs } });
            }
            function d(e, t) {
                A(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(t.messageTagCounts), duration_ms: t.durationMs } });
            }
            function u(e, t) {
                A(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: t } });
            }
            function p(e, t, n) {
                A(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: t, error: n }) } });
            }
            function m(e, t) {
                A(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(t) } });
            }
            function f(e) {
                A(e)({ element: "abort", action: "click" });
            }
            function h(e) {
                A(e)({ element: "clear-conversation", action: "click" });
            }
            function g(e, t) {
                A(e)({ element: "grok_mode", action: "change", data: { event_info: t } });
            }
            function _(e, t) {
                A(e)({ element: "grok_model", action: "change", data: { event_info: t } });
            }
            function v(e, t) {
                A(e)({ element: "tweet-carousel", action: "change", data: { event_info: t.toString() } });
            }
            function x(e, t) {
                A(e)({ element: "file-attachment", action: "add", data: { event_info: t } });
            }
            function w(e, t) {
                A(e)({ element: "file-attachment", action: "fail", data: { event_info: t } });
            }
            function k(e, t, n) {
                A(e)({ element: "api-add-response", action: "error", data: { event_info: `${t.message}\n${t.stack}\n${o()}` } }), (0, a.Hj)(t, { level: "warning", extra: n });
            }
            function y(e, t) {
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
            function I(e, t, n) {
                A(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: t ? "post_details" : "timeline", event_info: n ? JSON.stringify({ mediaId: n }) : void 0 } });
            }
            function O(e, t) {
                A(e)({ element: "grok-drawer-open", action: "success", data: { event_source: t } });
            }
            function J(e, t) {
                A(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant }) } });
            }
            function F(e, t, n) {
                A(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: t.cardType, variant: t.variant, followUpText: n }) } });
            }
            function M(e) {
                A(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function P(e, t) {
                A(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            function R(e, t) {
                A(e)({ element: "grok-memory-forget", action: "click", data: { event_info: t } });
            }
            function Z(e, t, n) {
                A(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: t, error: n }) } });
            }
            function N(e, t) {
                A(e)({ element: "grok-memory-detail", action: "click", data: { event_info: t } });
            }
            const A = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-6ac0f1a5.5947a6ea.js.map
