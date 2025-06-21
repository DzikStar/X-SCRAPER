"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-14817e23"],
    {
        125691: (e, t, s) => {
            s.d(t, { a: () => U });
            var n = s(552322),
                o = s(159603),
                r = s(436995),
                a = s(887491),
                l = s(25457),
                c = s(14313),
                i = s(332161),
                m = s(993165),
                d = s(437712),
                u = s(470851),
                p = s(202784),
                x = s(533476),
                h = s(658358),
                f = s(950849),
                v = s(595117),
                g = s(607499),
                C = s(263033),
                w = s(962639),
                y = s(731814),
                E = s(466285),
                j = s(193686),
                b = s(556160),
                k = s(517922),
                R = s(83083),
                N = s(289752);
            function A({ media: e }) {
                const { t } = (0, C.$G)(),
                    [s, r] = (0, p.useState)(null);
                return (
                    (0, p.useEffect)(() => {
                        e.media.previewUri &&
                            o.com.x.dms.getUrlFromUri(e.media.previewUri).then((e) => {
                                e && r(e);
                            });
                    }, [e.media.previewUri]),
                    e.shouldRender ? (e.shouldRender && s ? (0, n.jsx)(N.Et, { src: s, type: o.com.x.models.dm.DmMediaType.Companion.from(e.media.mediaType), dimensions: e.media.dimension, className: " border border-gray-200 rounded-2xl" }) : (0, n.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: t("Media") })) : null
                );
            }
            function S({ attachment: e, onRemoveAttachment: t }) {
                if (!e.shouldRender) return null;
                let s = null;
                if (e === o.com.x.models.dm.ChatComposerAttachment.Loading) s = (0, n.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, n.jsx)(j.P, {}) });
                else if (e instanceof o.com.x.models.dm.ChatComposerAttachment.Media) s = (0, n.jsx)(A, { media: e });
                else if (e instanceof o.com.x.models.dm.ChatComposerAttachment.Post) s = e.post ? (0, n.jsx)(b.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, n.jsx)(k.C, {});
                else {
                    if (e instanceof o.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof o.com.x.models.dm.ChatComposerAttachment.File && (s = (0, n.jsx)(R.Q, { className: "rounded-2xl max-w-[300px]", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return null === s ? null : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: "flex flex-col gap-2 pb-2", children: (0, n.jsxs)("div", { className: "relative self-start", children: [s, e.showRemoveButton && (0, n.jsx)("div", { className: "absolute -top-2 -right-2", children: (0, n.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(a.Z, {}), onClick: t }) })] }) }), (0, n.jsx)("div", { className: "w-full h-px bg-gray-200 mb-2" })] });
            }
            function D({ replyingTo: e, onRemoveReply: t }) {
                const { t: s } = (0, C.$G)();
                return (0, n.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, n.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: s("Replying to {name}", { name: e.senderInfo.user.displayName }) }) : null, (0, n.jsx)(i.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, n.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(a.Z, {}), onClick: t })] });
            }
            const z = o.com.x.dms.composer.composer.RightButtonState,
                T = o.com.x.dms.composer.composer.ChatComposerEvent;
            function U({ component: e, showingMentionPicker: t }) {
                const { t: s } = (0, C.$G)(),
                    [y, E] = (0, p.useState)(!1),
                    j = (0, x._)(e.composer.state),
                    b = (0, p.useRef)(null),
                    k = (0, p.useRef)(null);
                (0, h.e)(e.composer.toasts);
                const R = (0, p.useCallback)(() => {
                        b.current?.focus();
                    }, []),
                    N = e.composer.triggerComposerFocusEvents;
                (0, f.E)(N, R),
                    (0, p.useEffect)(() => {
                        R();
                    }, [e]),
                    (0, p.useEffect)(() => {
                        null == j.attachment && k.current && (k.current.value = "");
                    }, [j.attachment]);
                const A = () => {
                        j.rightButton === z.SendActive && e.composer.onEvent(new o.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(j.rightButton));
                    },
                    U = (0, p.useCallback)(
                        async (t) => {
                            await (0, v.$)(
                                t,
                                () => e.composer.onEvent(T.OnFileAttachmentStarted),
                                (t) => e.composer.onEvent(new T.OnFileAttached(t)),
                            );
                        },
                        [e.composer],
                    );
                return (0, n.jsx)(g.S, {
                    children: (0, n.jsx)("div", {
                        className: "w-full pt-3 px-4 pb-6",
                        children: (0, n.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                j.isEditing ? (0, n.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(r.Z, {}), (0, n.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, n.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(a.Z, {}), onClick: () => e.composer.onEvent(o.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                j.replyingTo ? (0, n.jsx)(D, { replyingTo: j.replyingTo, onRemoveReply: () => e.composer.onEvent(o.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, n.jsxs)("div", {
                                    className: "flex items-center gap-2 w-full",
                                    children: [
                                        (0, n.jsx)("input", {
                                            type: "file",
                                            ref: k,
                                            onChange: async (e) => {
                                                const t = e.target.files?.[0];
                                                t && (await U(t));
                                            },
                                            className: "hidden",
                                            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt",
                                        }),
                                        (0, n.jsx)(m.z, {
                                            size: "large",
                                            disabled: !j.canAddAttachment,
                                            icon: (0, n.jsx)(l.Z, {}),
                                            onClick: () => {
                                                k.current?.click();
                                            },
                                            className: "bg-gray-100",
                                        }),
                                        (0, n.jsxs)("form", {
                                            onSubmit: (e) => {
                                                e.preventDefault();
                                            },
                                            onPaste: async (e) => {
                                                if (!j.canAddAttachment) return;
                                                const t = e.clipboardData?.items;
                                                if (t)
                                                    for (const s of t)
                                                        if ("file" === s.kind) {
                                                            e.preventDefault();
                                                            const t = s.getAsFile();
                                                            if (!t) continue;
                                                            await U(t);
                                                            break;
                                                        }
                                            },
                                            className: "flex-1",
                                            children: [
                                                (0, n.jsx)(F, { component: e, showingMentionPicker: t, anchor: b.current }),
                                                (0, n.jsxs)("div", {
                                                    className: "flex items-end gap-2 w-full px-2 overflow-hidden placeholder:text-gray-800 rounded-3xl border border-solid border-gray-200 bg-background/50",
                                                    children: [
                                                        (0, n.jsxs)("div", {
                                                            className: "flex flex-col justify-end grow py-2",
                                                            children: [
                                                                j.attachment ? (0, n.jsx)(S, { attachment: j.attachment, onRemoveAttachment: () => e.composer.onEvent(o.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }) : null,
                                                                (0, n.jsx)(w.o, {
                                                                    className: "max-h-60 px-2 scrollbar-thin-custom",
                                                                    multiline: !0,
                                                                    value: j.currentText,
                                                                    onKeyDown: (s) => {
                                                                        if ("ArrowUp" === s.key && !j.hasEnteredAnyText) {
                                                                            s.preventDefault();
                                                                            const t = e.state.state.chatItems.items.asJsReadonlyArrayView()[0];
                                                                            t && t instanceof o.com.x.dms.model.MessageItemSent && e.composer.onEvent(new o.com.x.dms.composer.composer.ChatComposerEvent.StartEditingMessage(t));
                                                                        }
                                                                        if (("Escape" === s.key && j.isEditing && (s.preventDefault(), e.composer.onEvent(o.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft)), (!t || ("Enter" !== s.key && "ArrowDown" !== s.key && "ArrowUp" !== s.key)) && ("Enter" !== s.key || s.shiftKey || (s.preventDefault(), A()), ":" === s.key))) {
                                                                            const t = b.current;
                                                                            if (t) {
                                                                                const s = t.selectionStart ?? 0;
                                                                                (t.value = `${t.value.slice(0, s)}:`), t.setSelectionRange(s + 1, s + 1), e.composer.onEvent(new o.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.value, s + 1));
                                                                            }
                                                                            s.preventDefault(), E(!0);
                                                                        }
                                                                    },
                                                                    onChange: (t) => {
                                                                        e.composer.onEvent(new o.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.target.value, t.target.selectionStart));
                                                                    },
                                                                    placeholder: s("Message"),
                                                                    ref: b,
                                                                }),
                                                            ],
                                                        }),
                                                        j.rightButton !== z.SendInactive ? (0, n.jsx)(m.z, { className: "mb-1", onClick: A, icon: (0, n.jsx)(c.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
                                                        (0, n.jsx)(d.J, {
                                                            borderRadius: "2xLarge",
                                                            open: y,
                                                            side: "top",
                                                            align: "start",
                                                            className: "p-0",
                                                            onOpenChange: (e) => {
                                                                E(e), e || b.current?.focus();
                                                            },
                                                            trigger: (0, n.jsx)("div", { className: "absolute w-0 h-0 top-0" }),
                                                            children: (0, n.jsx)(u.h, {
                                                                onReactionClicked: (t) => {
                                                                    const s = b.current;
                                                                    if (!s) return;
                                                                    ":" === s.value[s.selectionStart - 1] && ((s.value = s.value.slice(0, -1)), (s.selectionStart = s.selectionStart - 1));
                                                                    const n = s.selectionStart,
                                                                        r = s.value.substring(0, n) + t + s.value.substring(n);
                                                                    e.composer.onEvent(new o.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(r, n + t.length));
                                                                },
                                                                recentlyUsedEmojis: [],
                                                                t: s,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
            function F({ component: e, showingMentionPicker: t, anchor: s }) {
                const [r, a] = (0, p.useState)(!!t),
                    [l, c] = (0, p.useState)(0),
                    i = (0, p.useRef)(null);
                (0, p.useEffect)(() => {
                    a(!!t), c(0);
                }, [t]),
                    (0, p.useEffect)(() => {
                        if (!r || !s) return;
                        const n = (s) => {
                            if (!t) return;
                            const n = t.asJsReadonlyArrayView();
                            switch (s.key) {
                                case "ArrowDown":
                                    s.preventDefault(), c((e) => Math.min(e + 1, n.length - 1));
                                    break;
                                case "ArrowUp":
                                    s.preventDefault(), c((e) => Math.max(e - 1, 0));
                                    break;
                                case "Enter": {
                                    s.preventDefault();
                                    const t = n[l];
                                    t &&
                                        setTimeout(() => {
                                            e.onEvent(new o.com.x.dms.chat.DmEvent.MentionPickerUserClicked(t)), a(!1);
                                        }, 0);
                                    break;
                                }
                            }
                        };
                        return s.addEventListener("keydown", n), () => s.removeEventListener("keydown", n);
                    }, [r, s, t, l, e]),
                    (0, p.useEffect)(() => {
                        if (!i.current) return;
                        const e = i.current,
                            t = e.children[l];
                        if (t) {
                            const s = e.getBoundingClientRect(),
                                n = t.getBoundingClientRect(),
                                o = 16;
                            n.top < s.top + o ? (e.scrollTop = t.offsetTop - o) : n.bottom > s.bottom - o && (e.scrollTop = t.offsetTop - s.height + t.offsetHeight + o);
                        }
                    }, [l]);
                const m = t?.asJsReadonlyArrayView();
                return s?.parentElement && m && 0 !== m.length
                    ? (0, n.jsx)(y.Z, {
                          node: s.parentElement,
                          defaultOpen: !0,
                          onClose: () => a(!1),
                          closeOnOutsideClick: !0,
                          closeOnEsc: !0,
                          children: ({ portal: e }) =>
                              e(
                                  (0, n.jsx)("div", {
                                      ref: i,
                                      className: "absolute bottom-[calc(100%+1.5rem)] shadow-lg left-8 w-[380px] max-h-[450px] overflow-y-auto scrollbar-thin-custom bg-background rounded-2xl flex flex-col px-3 py-4 border",
                                      children: m.map((e, t) =>
                                          (0, n.jsx)(
                                              E.a,
                                              {
                                                  user: e,
                                                  onClick: () => {
                                                      a(!1);
                                                  },
                                                  className: t === l ? "bg-gray-50" : "",
                                              },
                                              e.id.userId,
                                          ),
                                      ),
                                  }),
                              ),
                      })
                    : null;
            }
        },
        264531: (e, t, s) => {
            s.d(t, { B$: () => r, BH: () => m, VC: () => u, XE: () => i, mp: () => c, tc: () => p, xq: () => d });
            var n = s(552322),
                o = s(202784);
            const r = { DEBUG: "DEBUG", INFO: "INFO", WARN: "WARN", ERROR: "ERROR" },
                a = { path: "/dms", showDebugOptions: !1, logLevel: r.ERROR, bottomBarHeight: 0, fsWorker: !1, rwebElements: void 0 },
                l = (0, o.createContext)(null),
                c = ({ children: e, settings: t }) => {
                    const s = { ...a, ...t };
                    return (0, n.jsx)(l.Provider, { value: s, children: e });
                },
                i = () => {
                    const e = (0, o.useContext)(l);
                    if (null === e) throw new Error("useXChatContext must be used within an XChatContextProvider");
                    return e;
                };
            function m() {
                return i().path;
            }
            function d() {
                return i().logLevel;
            }
            function u() {
                return i().fsWorker;
            }
            function p(e) {
                const t = i();
                return t.rwebElements?.[e];
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-14817e23.a3ac321a.js.map
