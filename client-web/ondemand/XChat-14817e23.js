"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-14817e23"],
    {
        125691: (e, t, s) => {
            s.d(t, { a: () => z });
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
                h = s(658358),
                f = s(950849),
                v = s(595117),
                g = s(607499),
                C = s(455091),
                w = s(189599),
                E = s(731814),
                y = s(466285),
                j = s(193686),
                b = s(83083),
                k = s(556160),
                R = s(517922),
                N = s(289752);
            function A({ media: e, showAsStatic: t }) {
                const { t: s } = (0, C.$G)(),
                    [r, a] = (0, p.useState)(null);
                return (
                    (0, p.useEffect)(() => {
                        e.media.previewUri &&
                            n.com.x.dms.getUrlFromUri(e.media.previewUri).then((e) => {
                                e && a(e);
                            });
                    }, [e.media.previewUri]),
                    e.shouldRender ? (e.shouldRender && r ? (0, o.jsx)(N.Et, { src: r, type: n.com.x.models.dm.DmMediaType.Companion.from(e.media.mediaType), dimensions: e.media.dimension, className: " border border-gray-200 rounded-2xl", showAsStatic: t }) : (0, o.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: s("Media") })) : null
                );
            }
            function S({ attachment: e, onRemoveAttachment: t }) {
                if (!e.shouldRender) return null;
                let s = null;
                if (e === n.com.x.models.dm.ChatComposerAttachment.Loading) s = (0, o.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, o.jsx)(j.P, {}) });
                else if (e instanceof n.com.x.models.dm.ChatComposerAttachment.Media) s = (0, o.jsx)(A, { showAsStatic: !0, media: e });
                else if (e instanceof n.com.x.models.dm.ChatComposerAttachment.Post) s = e.post ? (0, o.jsx)(k.K, { post: e.post, url: e.url, className: "rounded-2xl max-w-[300px]" }) : (0, o.jsx)(R.C, {});
                else {
                    if (e instanceof n.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof n.com.x.models.dm.ChatComposerAttachment.File && (s = (0, o.jsx)(b.Q, { className: "rounded-2xl max-w-[300px]", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return null === s ? null : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("div", { className: "flex flex-col gap-2 p-2 overflow-auto max-h-[200px] scrollbar-thin-custom", children: (0, o.jsxs)("div", { className: "relative self-start", children: [s, e.showRemoveButton && (0, o.jsx)("div", { className: "absolute -top-2 -right-2", children: (0, o.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, o.jsx)(a.Z, {}), onClick: t }) })] }) }), (0, o.jsx)("div", { className: "w-full h-px bg-gray-200 ml-2" })] });
            }
            function D({ replyingTo: e, onRemoveReply: t }) {
                const { t: s } = (0, C.$G)();
                return (0, o.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, o.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, o.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: s("Replying to {name}", { name: e.senderInfo.user.displayName }) }) : null, (0, o.jsx)(i.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, o.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, o.jsx)(a.Z, {}), onClick: t })] });
            }
            const T = n.com.x.dms.composer.composer.RightButtonState,
                U = n.com.x.dms.composer.composer.ChatComposerEvent;
            function z({ component: e, showingMentionPicker: t }) {
                const { t: s } = (0, C.$G)(),
                    [E, y] = (0, p.useState)(!1),
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
                        j.rightButton === T.SendActive && e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(j.rightButton));
                    },
                    z = (0, p.useRef)(null),
                    B = (0, p.useCallback)(() => {
                        const t = b.current,
                            s = t?.selectionStart;
                        s && z.current !== s && ((z.current = s), e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.value, s)));
                    }, [e.composer]),
                    O = (0, p.useCallback)(
                        async (t) => {
                            await (0, v.$)(
                                t,
                                () => e.composer.onEvent(U.OnFileAttachmentStarted),
                                (t) => e.composer.onEvent(new U.OnFileAttached(t)),
                            );
                        },
                        [e.composer],
                    );
                return (0, o.jsx)(g.S, {
                    children: (0, o.jsx)("div", {
                        className: "w-full pt-3 px-4 pb-6",
                        children: (0, o.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                j.isEditing ? (0, o.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, o.jsxs)("div", { className: "flex gap-1", children: [(0, o.jsx)(r.Z, {}), (0, o.jsx)(i.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, o.jsx)(m.z, { variant: "primaryFilled", size: "xSmall", icon: (0, o.jsx)(a.Z, {}), onClick: () => e.composer.onEvent(n.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                j.replyingTo ? (0, o.jsx)(D, { replyingTo: j.replyingTo, onRemoveReply: () => e.composer.onEvent(n.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, o.jsxs)("div", {
                                    className: "flex items-center gap-2 w-full",
                                    children: [
                                        (0, o.jsx)("input", {
                                            type: "file",
                                            ref: k,
                                            onChange: async (e) => {
                                                const t = e.target.files?.[0];
                                                t && (await O(t));
                                            },
                                            className: "hidden",
                                            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt",
                                        }),
                                        (0, o.jsx)(m.z, {
                                            size: "large",
                                            disabled: !j.canAddAttachment,
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
                                                if (!j.canAddAttachment) return;
                                                const t = e.clipboardData?.items;
                                                if (t)
                                                    for (const s of t)
                                                        if ("file" === s.kind) {
                                                            e.preventDefault();
                                                            const t = s.getAsFile();
                                                            if (!t) continue;
                                                            await O(t);
                                                            break;
                                                        }
                                            },
                                            className: "flex-1",
                                            children: [
                                                (0, o.jsx)(F, { component: e, showingMentionPicker: t, anchor: b.current }),
                                                (0, o.jsxs)("div", {
                                                    className: "flex items-end gap-2 w-full px-1 overflow-hidden placeholder:text-gray-800 rounded-3xl border border-solid border-gray-200 bg-background/50",
                                                    children: [
                                                        (0, o.jsxs)("div", {
                                                            className: "flex flex-col justify-end grow",
                                                            children: [
                                                                j.attachment ? (0, o.jsx)(S, { attachment: j.attachment, onRemoveAttachment: () => e.composer.onEvent(n.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }) : null,
                                                                (0, o.jsx)("div", {
                                                                    className: "py-2 flex items-center",
                                                                    children: (0, o.jsx)(w.o, {
                                                                        className: "max-h-60 px-2 scrollbar-thin-custom",
                                                                        multiline: !0,
                                                                        value: j.currentText,
                                                                        onKeyDown: (s) => {
                                                                            if ("ArrowUp" === s.key && !j.hasEnteredAnyText) {
                                                                                s.preventDefault();
                                                                                const t = e.state.state.chatItems.items.asJsReadonlyArrayView()[0];
                                                                                t && t instanceof n.com.x.dms.model.MessageItemSent && e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.StartEditingMessage(t));
                                                                            }
                                                                            if (("Escape" === s.key && j.isEditing && (s.preventDefault(), e.composer.onEvent(n.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft)), (!t || ("Enter" !== s.key && "ArrowDown" !== s.key && "ArrowUp" !== s.key)) && ("Enter" !== s.key || s.shiftKey || (s.preventDefault(), A()), ":" === s.key))) {
                                                                                const t = b.current;
                                                                                if (t) {
                                                                                    const s = t.selectionStart ?? 0;
                                                                                    (t.value = `${t.value.slice(0, s)}:`), t.setSelectionRange(s + 1, s + 1), e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.value, s + 1));
                                                                                }
                                                                                s.preventDefault(), y(!0);
                                                                            }
                                                                        },
                                                                        onChange: (t) => {
                                                                            e.composer.onEvent(new n.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.target.value, t.target.selectionStart));
                                                                        },
                                                                        onSelect: B,
                                                                        placeholder: s("Message"),
                                                                        ref: b,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        j.rightButton !== T.SendInactive ? (0, o.jsx)(m.z, { className: "mb-1", icon: (0, o.jsx)(l.Z, {}), onClick: A, size: "small", variant: "brandFilled" }) : void 0,
                                                        (0, o.jsx)(d.J, {
                                                            borderRadius: "2xLarge",
                                                            open: E,
                                                            side: "top",
                                                            align: "start",
                                                            className: "p-0",
                                                            onOpenChange: (e) => {
                                                                y(e), e || b.current?.focus();
                                                            },
                                                            trigger: (0, o.jsx)("div", { className: "absolute w-0 h-0 top-0" }),
                                                            children: (0, o.jsx)(u.h, {
                                                                onReactionClicked: (t) => {
                                                                    const s = b.current;
                                                                    if (!s) return;
                                                                    ":" === s.value[s.selectionStart - 1] && ((s.value = s.value.slice(0, -1)), (s.selectionStart = s.selectionStart - 1));
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
                    a(!!t), l(0);
                }, [t]);
                const m = (0, p.useCallback)(
                    (t) => {
                        e.onEvent(new n.com.x.dms.chat.DmEvent.MentionPickerUserClicked(t)), a(!1);
                    },
                    [e],
                );
                (0, p.useEffect)(() => {
                    if (!r || !s) return;
                    const e = (e) => {
                        if (!t) return;
                        const s = t.asJsReadonlyArrayView();
                        switch (e.key) {
                            case "ArrowDown":
                                e.preventDefault(), l((e) => Math.min(e + 1, s.length - 1));
                                break;
                            case "ArrowUp":
                                e.preventDefault(), l((e) => Math.max(e - 1, 0));
                                break;
                            case "Enter": {
                                e.preventDefault();
                                const t = s[c];
                                t &&
                                    setTimeout(() => {
                                        m(t);
                                    }, 0);
                                break;
                            }
                        }
                    };
                    return s.addEventListener("keydown", e), () => s.removeEventListener("keydown", e);
                }, [r, s, t, c, m]),
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
                const d = t?.asJsReadonlyArrayView();
                return s?.parentElement && d && 0 !== d.length ? (0, o.jsx)(E.Z, { node: s.parentElement, defaultOpen: !0, onClose: () => a(!1), closeOnOutsideClick: !0, closeOnEsc: !0, children: ({ portal: e }) => e((0, o.jsx)("div", { ref: i, className: "absolute bottom-[calc(100%+1.5rem)] shadow-lg left-8 w-[380px] max-h-[450px] overflow-y-auto scrollbar-thin-custom bg-background rounded-2xl flex flex-col px-3 py-4 border", children: d.map((e, t) => (0, o.jsx)(y.a, { user: e, onClick: () => m(e), className: t === c ? "bg-gray-50" : "" }, e.id.userId)) })) }) : null;
            }
        },
        264531: (e, t, s) => {
            s.d(t, { B$: () => r, BH: () => m, XE: () => i, mp: () => l, tc: () => u, xq: () => d });
            var o = s(552322),
                n = s(202784);
            const r = { DEBUG: "DEBUG", INFO: "INFO", WARN: "WARN", ERROR: "ERROR" },
                a = { path: "/dms", showDebugOptions: !1, logLevel: r.ERROR, bottomBarHeight: 0, rwebElements: void 0 },
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
            function u(e) {
                const t = i();
                return t.rwebElements?.[e];
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-14817e23.d82d740a.js.map
