"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-14817e23"],
    {
        125691: (e, t, s) => {
            s.d(t, { a: () => U });
            var o = s(552322),
                n = s(159603),
                r = s(436995),
                a = s(887491),
                c = s(25457),
                l = s(14313),
                i = s(332161),
                m = s(993165),
                d = s(437712),
                u = s(470851),
                p = s(202784),
                x = s(533476),
                f = s(658358),
                h = s(950849),
                g = s(595117),
                v = s(134877),
                C = s(263033),
                w = s(962639),
                E = s(731814),
                y = s(466285),
                b = s(193686),
                j = s(157114),
                k = s(517922),
                R = s(83083),
                N = s(289752);
            function A({ media: e }) {
                const [t, s] = (0, p.useState)(null);
                return (
                    (0, p.useEffect)(() => {
                        e.media.previewUri &&
                            n.com.x.dms.getUrlFromUri(e.media.previewUri).then((e) => {
                                e && s(e);
                            });
                    }, [e.media.previewUri]),
                    e.shouldRender ? (e.shouldRender && t ? (0, o.jsx)(N.Et, { src: t, type: n.com.x.models.dm.DmMediaType.Companion.from(e.media.mediaType), dimensions: e.media.dimension, className: " border border-gray-200 rounded-2xl" }) : (0, o.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Media" })) : null
                );
            }
            function D({ attachment: e, onRemoveAttachment: t }) {
                if (!e.shouldRender) return null;
                let s = null;
                if (e === n.com.x.models.dm.ChatComposerAttachment.Loading) s = (0, o.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, o.jsx)(b.P, {}) });
                else if (e instanceof n.com.x.models.dm.ChatComposerAttachment.Media) s = (0, o.jsx)(A, { media: e });
                else if (e instanceof n.com.x.models.dm.ChatComposerAttachment.Post) s = e.post ? (0, o.jsx)(j.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, o.jsx)(k.C, {});
                else {
                    if (e instanceof n.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof n.com.x.models.dm.ChatComposerAttachment.File && (s = (0, o.jsx)(R.Q, { className: "rounded-2xl max-w-[300px]", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return null === s ? null : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("div", { className: "flex flex-col gap-2 pb-2", children: (0, o.jsxs)("div", { className: "relative self-start", children: [s, e.showRemoveButton && (0, o.jsx)("div", { className: "absolute -top-2 -right-2", children: (0, o.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, o.jsx)(a.Z, {}), onClick: t }) })] }) }), (0, o.jsx)("div", { className: "w-full h-px bg-gray-200 mb-2" })] });
            }
            function S({ replyingTo: e, onRemoveReply: t }) {
                const { t: s } = (0, C.$G)();
                return (0, o.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, o.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, o.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: s("Replying to {name}", { name: e.senderInfo.user.displayName }) }) : null, (0, o.jsx)(i.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, o.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, o.jsx)(a.Z, {}), onClick: t })] });
            }
            const T = n.com.x.dms.composer.composer.RightButtonState,
                z = n.com.x.dms.composer.composer.ChatComposerEvent;
            function U({ component: e, showingMentionPicker: t }) {
                const { t: s } = (0, C.$G)(),
                    [E, y] = (0, p.useState)(!1),
                    b = (0, x._)(e.composer.state),
                    j = (0, p.useRef)(null),
                    k = (0, p.useRef)(null);
                (0, f.e)(e.composer.toasts);
                const R = (0, p.useCallback)(() => {
                        j.current?.focus();
                    }, []),
                    N = e.composer.triggerComposerFocusEvents;
                (0, h.E)(N, R),
                    (0, p.useEffect)(() => {
                        R();
                    }, [e]),
                    (0, p.useEffect)(() => {
                        null == b.attachment && k.current && (k.current.value = "");
                    }, [b.attachment]);
                const A = () => {
                        b.rightButton === T.SendActive && e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(b.rightButton));
                    },
                    U = (0, p.useCallback)(
                        async (t) => {
                            await (0, g.$)(
                                t,
                                () => e.composer.onEvent(z.OnFileAttachmentStarted),
                                (t) => e.composer.onEvent(new z.OnFileAttached(t)),
                            );
                        },
                        [e.composer],
                    );
                return (0, o.jsx)(v.S, {
                    children: (0, o.jsx)("div", {
                        className: "w-full pt-3 px-4 pb-6",
                        children: (0, o.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                b.isEditing ? (0, o.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, o.jsxs)("div", { className: "flex gap-1", children: [(0, o.jsx)(r.Z, {}), (0, o.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, o.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, o.jsx)(a.Z, {}), onClick: () => e.composer.onEvent(n.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                b.replyingTo ? (0, o.jsx)(S, { replyingTo: b.replyingTo, onRemoveReply: () => e.composer.onEvent(n.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, o.jsxs)("div", {
                                    className: "flex items-center gap-2 w-full",
                                    children: [
                                        (0, o.jsx)("input", {
                                            type: "file",
                                            ref: k,
                                            onChange: async (e) => {
                                                const t = e.target.files?.[0];
                                                t && (await U(t));
                                            },
                                            className: "hidden",
                                            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt",
                                        }),
                                        (0, o.jsx)(m.z, {
                                            size: "large",
                                            disabled: !b.canAddAttachment,
                                            icon: (0, o.jsx)(c.Z, {}),
                                            onClick: () => {
                                                k.current?.click();
                                            },
                                            className: "bg-gray-100",
                                        }),
                                        (0, o.jsxs)("form", {
                                            onSubmit: (e) => {
                                                e.preventDefault();
                                            },
                                            onPaste: async (e) => {
                                                if (!b.canAddAttachment) return;
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
                                                (0, o.jsx)(F, { component: e, showingMentionPicker: t, anchor: j.current }),
                                                (0, o.jsxs)("div", {
                                                    className: "flex items-end gap-2 w-full px-2 overflow-hidden placeholder:text-gray-800 rounded-3xl border border-solid border-gray-200 bg-background/50",
                                                    children: [
                                                        (0, o.jsxs)("div", {
                                                            className: "flex flex-col justify-end grow py-2",
                                                            children: [
                                                                b.attachment ? (0, o.jsx)(D, { attachment: b.attachment, onRemoveAttachment: () => e.composer.onEvent(n.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }) : null,
                                                                (0, o.jsx)(w.o, {
                                                                    className: "max-h-60 px-2 scrollbar-thin-custom",
                                                                    multiline: !0,
                                                                    value: b.currentText,
                                                                    onKeyDown: (s) => {
                                                                        if ("ArrowUp" === s.key && !b.hasEnteredAnyText) {
                                                                            s.preventDefault();
                                                                            const t = e.state.state.chatItems.items.asJsReadonlyArrayView()[0];
                                                                            t && t instanceof n.com.x.dms.model.MessageItemSent && e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.StartEditingMessage(t));
                                                                        }
                                                                        "Escape" === s.key && b.isEditing && (s.preventDefault(), e.composer.onEvent(n.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft)), (!t || ("Enter" !== s.key && "ArrowDown" !== s.key && "ArrowUp" !== s.key)) && ("Enter" !== s.key || s.shiftKey || (s.preventDefault(), A()), ":" === s.key && (s.preventDefault(), y(!0)));
                                                                    },
                                                                    onChange: (t) => {
                                                                        e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.target.value, t.target.selectionStart));
                                                                    },
                                                                    placeholder: s("Message"),
                                                                    ref: j,
                                                                }),
                                                            ],
                                                        }),
                                                        b.rightButton !== T.SendInactive ? (0, o.jsx)(m.z, { className: "mb-1", onClick: A, icon: (0, o.jsx)(l.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
                                                        (0, o.jsx)(d.J, {
                                                            borderRadius: "2xLarge",
                                                            open: E,
                                                            side: "top",
                                                            align: "start",
                                                            className: "p-0",
                                                            onOpenChange: (e) => {
                                                                y(e), e || j.current?.focus();
                                                            },
                                                            trigger: (0, o.jsx)("div", { className: "absolute w-0 h-0 top-0" }),
                                                            children: (0, o.jsx)(u.h, {
                                                                onReactionClicked: (t) => {
                                                                    const s = j.current;
                                                                    if (!s) return;
                                                                    const o = s.selectionStart,
                                                                        r = s.value.substring(0, o) + t + s.value.substring(o);
                                                                    e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(r, o + t.length));
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
                    [c, l] = (0, p.useState)(0),
                    i = (0, p.useRef)(null);
                (0, p.useEffect)(() => {
                    const t = e.composer.composerTextModificationEvents.subscribe((t) => {
                        e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.text, t.cursor));
                    });
                    return () => t.cancel();
                }, [e.composer]),
                    (0, p.useEffect)(() => {
                        a(!!t), l(0);
                    }, [t]),
                    (0, p.useEffect)(() => {
                        if (!r || !s) return;
                        const o = (s) => {
                            if (!t) return;
                            const o = t.asJsReadonlyArrayView();
                            switch (s.key) {
                                case "ArrowDown":
                                    s.preventDefault(), l((e) => Math.min(e + 1, o.length - 1));
                                    break;
                                case "ArrowUp":
                                    s.preventDefault(), l((e) => Math.max(e - 1, 0));
                                    break;
                                case "Enter": {
                                    s.preventDefault();
                                    const t = o[c];
                                    t &&
                                        setTimeout(() => {
                                            e.onEvent(new n.com.x.dms.chat.DmEvent.MentionPickerUserClicked(t)), a(!1);
                                        }, 0);
                                    break;
                                }
                            }
                        };
                        return s.addEventListener("keydown", o), () => s.removeEventListener("keydown", o);
                    }, [r, s, t, c, e]),
                    (0, p.useEffect)(() => {
                        if (!i.current) return;
                        const e = i.current,
                            t = e.children[c];
                        if (t) {
                            const s = e.getBoundingClientRect(),
                                o = t.getBoundingClientRect(),
                                n = 16;
                            o.top < s.top + n ? (e.scrollTop = t.offsetTop - n) : o.bottom > s.bottom - n && (e.scrollTop = t.offsetTop - s.height + t.offsetHeight + n);
                        }
                    }, [c]);
                const m = t?.asJsReadonlyArrayView();
                return s?.parentElement && m && 0 !== m.length
                    ? (0, o.jsx)(E.Z, {
                          node: s.parentElement,
                          defaultOpen: !0,
                          onClose: () => a(!1),
                          closeOnOutsideClick: !0,
                          closeOnEsc: !0,
                          children: ({ portal: e }) =>
                              e(
                                  (0, o.jsx)("div", {
                                      ref: i,
                                      className: "absolute bottom-[calc(100%+1.5rem)] shadow-lg left-8 w-[380px] max-h-[450px] overflow-y-auto scrollbar-thin-custom bg-background rounded-2xl flex flex-col px-3 py-4 border",
                                      children: m.map((e, t) =>
                                          (0, o.jsx)(
                                              y.a,
                                              {
                                                  user: e,
                                                  onClick: () => {
                                                      a(!1);
                                                  },
                                                  className: t === c ? "bg-gray-50" : "",
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
            s.d(t, { B$: () => r, BH: () => m, VC: () => u, XE: () => i, mp: () => l, tc: () => p, xq: () => d });
            var o = s(552322),
                n = s(202784);
            const r = { DEBUG: "DEBUG", INFO: "INFO", WARN: "WARN", ERROR: "ERROR" },
                a = { path: "/dms", showDebugOptions: !1, logLevel: r.ERROR, bottomBarHeight: 0, fsWorker: !1, rwebElements: void 0 },
                c = (0, n.createContext)(null),
                l = ({ children: e, settings: t }) => {
                    const s = { ...a, ...t };
                    return (0, o.jsx)(c.Provider, { value: s, children: e });
                },
                i = () => {
                    const e = (0, n.useContext)(c);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-14817e23.2e7926fa.js.map
