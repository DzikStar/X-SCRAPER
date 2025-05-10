"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e0975bf4"],
    {
        846742: (e, s, t) => {
            t.d(s, { C: () => j });
            var n = t(552322),
                i = t(425522),
                a = t(653748),
                o = t(193686),
                r = t(423011),
                l = t(993165),
                c = t(687521),
                d = t(983706),
                m = t(202784),
                x = t(611463),
                p = t(533476),
                u = t(658358),
                h = t(466285),
                f = t(620134),
                g = t(458872),
                v = t(875515);
            const j = ({ conversationId: e, onVisibilityChange: s }) => {
                    const [t, r] = (0, m.useState)(null),
                        l = (0, x.n)();
                    return (
                        (0, m.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.addGroupParticipantsComponent(t, e, {
                                    get onFinished() {
                                        return () => {
                                            s(!1);
                                        };
                                    },
                                });
                            return (
                                r(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [l, e, s]),
                        (0, n.jsx)(a.s, { isOpen: !0, onOpenChange: s, isDismissable: !0, children: (0, n.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: t ? (0, n.jsx)(y, { component: t }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(o.P, {}) }) }) })
                    );
                },
                y = ({ component: e }) => {
                    const s = (0, p._)(e.state);
                    (0, u.e)(e.toasts);
                    const t = i.com.x.dms.mapToValueList(s.selectedUserIds).asJsReadonlyArrayView(),
                        a = (s) => () => {
                            e.handleEvent(new i.com.x.dms.addparticipants.AddGroupParticipantsEvent.DeleteSelectedGroupUser(s));
                        };
                    return (0, n.jsxs)("div", {
                        className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors",
                        children: [
                            (0, n.jsx)(r.x, {
                                title: "Add people",
                                leftContent: (0, n.jsx)(l.z, {
                                    variant: "primaryText",
                                    icon: (0, n.jsx)(g.Z, {}),
                                    onClick: () => {
                                        e.handleEvent(i.com.x.dms.addparticipants.AddGroupParticipantsEvent.BackButtonClicked);
                                    },
                                }),
                                rightContent: (0, n.jsx)(l.z, {
                                    onClick: () => {
                                        e.handleEvent(i.com.x.dms.addparticipants.AddGroupParticipantsEvent.DoneClicked);
                                    },
                                    variant: "primaryFilled",
                                    children: "Next",
                                }),
                            }),
                            (0, n.jsx)("div", {
                                children: (0, n.jsx)(c._, {
                                    autoFocus: !0,
                                    leftContent: (0, n.jsx)(v.Z, { className: "text-gray-700" }),
                                    placeholder: "Search people",
                                    onChange: (s) => {
                                        e.handleEvent(new i.com.x.dms.addparticipants.AddGroupParticipantsEvent.QueryChanged(s.target.value));
                                    },
                                    borderRadius: "none",
                                    className: "w-full",
                                }),
                            }),
                            (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: t.length > 0 && t.map((e) => (0, n.jsx)(f.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: a(e.id) }, e.id.userIdString)) }),
                            s.isCallingApi
                                ? (0, n.jsx)(o.P, {})
                                : (0, n.jsx)(d.T, {
                                      items: s.suggestions?.asJsReadonlyArrayView() ?? [],
                                      renderItem: (t) =>
                                          (0, n.jsx)(h.a, {
                                              onClick: () => {
                                                  e.handleEvent(new i.com.x.dms.addparticipants.AddGroupParticipantsEvent.UserRowClicked(t.user));
                                              },
                                              user: t.user,
                                              isAlreadyParticipant: t.alreadyParticipant,
                                              isSelected: s.selectedUserIds.asJsReadonlyMapView().has(t.user.id) || t.alreadyParticipant,
                                          }),
                                  }),
                        ],
                    });
                };
        },
        707513: (e, s, t) => {
            t.d(s, { P: () => C });
            var n = t(552322),
                i = t(425522),
                a = t(289752),
                o = t(812115),
                r = t(332161),
                l = t(89195),
                c = t(517922),
                d = t(556160);
            const m = i.com.x.models.dm.PostLoadingState,
                x = i.com.x.dms.chat.DmEvent;
            function p({ post: e, onEvent: s, className: t }) {
                return e.postState instanceof m.NeedsResolution ? (s(new x.ResolvePost(e.id)), (0, n.jsx)(c.C, {})) : e.postState instanceof m.ResolvedPost ? (0, n.jsx)(d.K, { post: e.postState, url: e.url, className: t }) : (0, n.jsxs)(o.r, { href: e.url, target: "_blank", className: "gap-2 w-52 p-4 bg-gray-200 flex items-center justify-between", children: [(0, n.jsx)(r.x, { children: "x.com" }), (0, n.jsx)("div", { className: "text-headline1", children: (0, n.jsx)(l.Z, {}) })] });
            }
            var u = t(193686);
            const h = i.com.x.dms.model.MessageItemAttachment,
                f = i.com.x.dms.chat.DmEvent;
            function g({ urlCard: e, onEvent: s }) {
                e instanceof h.UrlCard.NeedsResolving && !e.showTapToLoadPrompt && s(new f.ResolveUrlCard(e, !1));
                let t = null;
                return e instanceof h.UrlCard.Resolved && (t = e.bannerImage && (0, n.jsx)("img", { src: e.bannerImage, loading: "lazy", alt: e.displayTitle || e.displayHostname, className: "max-w-[300px] max-h-[400px]" })), e instanceof h.UrlCard.Loading && (t = (0, n.jsx)("div", { className: "flex items-center justify-center h-32 pt-2 w-full", children: (0, n.jsx)(u.P, {}) })), (0, n.jsxs)("div", { className: "flex flex-col gap-0.5 bg-gray-100 cursor-pointer transition-colors duration-100", onClick: () => window.open(e.urlToOpen, "_blank"), children: [t, (0, n.jsxs)("div", { className: "flex flex-col gap-0.5 px-4 py-2 hover:bg-gray-50/50", children: [e.displayTitle && (0, n.jsx)(r.x, { weight: "medium", children: e.displayTitle }), (0, n.jsx)(r.x, { color: "gray900", size: "subtext2", children: e.displayHostname })] })] });
            }
            var v = t(83083);
            const j = i.com.x.dms.model.MessageItemAttachment,
                y = i.com.x.dms.chat.DmEvent,
                w = i.com.x.dms.model.MediaUriState;
            function C({ attachment: e, isReceived: s, onEvent: t, className: o }) {
                if (e instanceof j.Post) return (0, n.jsx)(p, { isReceived: s, post: e, onEvent: t, className: o });
                if (e instanceof j.UrlCard) return (0, n.jsx)(g, { urlCard: e, onEvent: t });
                if (e instanceof j.Media) {
                    if (e instanceof j.Media.FromServer) {
                        if ((e.uriState instanceof w.AttachmentNeedsResolving && t(new y.ResolveAttachment(e.uriState)), e.uriState instanceof w.ResolvedMedia)) return e.type === i.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(v.Q, { filename: e.filename, fileSize: e.fileSize, uriToLoad: e.uriState.uri, className: o }) : (0, n.jsx)(a.Et, { src: e.uriState.uri, type: e.type, dimensions: e.dimensions });
                        if (e.uriState instanceof w.Resolving) return (0, n.jsx)(a._9, { dimensions: e.dimensions });
                        if (e.uriState === w.FailedToLoad) return (0, n.jsx)(a.DM, { dimensions: e.dimensions });
                    }
                    if (e instanceof j.Media.Pending) return e.type === i.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(v.Q, { filename: e.filename, fileSize: e.fileSize, className: o }) : (0, n.jsx)(a._9, { dimensions: e.dimensions });
                }
                return null;
            }
        },
        83083: (e, s, t) => {
            t.d(s, { Q: () => c });
            var n = t(552322),
                i = t(332161),
                a = t(42630),
                o = t(1357),
                r = t(455091),
                l = t(31674);
            function c({ filename: e, fileType: s = "Document", fileSize: t, uriToLoad: c, className: d }) {
                const { t: m } = (0, r.$G)(),
                    x = t?.fileSizeMb.toPrecision(2) || 0,
                    p = (0, n.jsxs)("div", { className: (0, l.cn)("flex items-center gap-3 bg-gray-100 px-4 py-3 transition-colors", c && "cursor-pointer hover:bg-gray-200", d), children: [(0, n.jsx)("div", { className: "flex-shrink-0", children: (0, n.jsx)(o.Z, { className: "text-gray-500 size-5" }) }), (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(i.x, { weight: "medium", numberOfLines: 1, children: e }), (0, n.jsxs)(a.S, { children: [(0, n.jsx)(i.x, { size: "subtext2", color: "gray700", children: c ? m("Tap to download") : s }), (0, n.jsx)(i.x, { size: "subtext2", color: "gray700", children: m("{fileSize} MB", { fileSize: x }) })] })] })] });
                return c ? (0, n.jsx)("a", { href: c, download: e, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" }, children: p }) : p;
            }
        },
        289752: (e, s, t) => {
            t.d(s, { DM: () => x, Et: () => d, _9: () => m });
            var n = t(552322),
                i = t(472275),
                a = t(193686),
                o = t(332161),
                r = t(202784),
                l = t(59463),
                c = t(615014);
            function d({ src: e, type: s, dimensions: t }) {
                const { width: a, height: o } = p(t),
                    [l, d] = (0, r.useState)(!1),
                    m = [{ type: "Video" === s.name ? "video" : "Gif" === s.name ? "animated_gif" : "image", src: e, previewImage: e }];
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        "Video" === s.name ? (0, n.jsx)("div", { className: "max-w-[300px] max-h-[400px]", children: (0, n.jsx)(c.q, { src: e, poster: e, type: "video/mp4", autoPlay: !0, muted: !0, loop: !0, playsInline: !0, style: { width: `${a}px`, height: `${o}px` } }) }) : (0, n.jsx)("img", { src: e, loading: "lazy", alt: "attachment", className: "max-w-[300px] max-h-[400px] cursor-pointer bg-gray-50", style: { width: `${a}px`, height: `${o}px` }, onClick: () => d(!0) }),
                        (0, n.jsx)(i.e, {
                            mediaItems: m,
                            initialIndex: 0,
                            isOpen: l,
                            onClose: () => {
                                d(!1);
                            },
                        }),
                    ],
                });
            }
            function m({ dimensions: e }) {
                const { width: s, height: t } = p(e);
                return (0, n.jsx)("div", { className: "bg-gray-50 flex items-center justify-center", style: { width: `${s}px`, height: `${t}px` }, children: (0, n.jsx)(a.P, {}) });
            }
            function x({ dimensions: e }) {
                const { width: s, height: t } = p(e);
                return (0, n.jsxs)("div", { className: "bg-gray-50 flex flex-col gap-1.5 items-center justify-center text-gray-700", style: { width: `${s}px`, height: `${t}px` }, children: [(0, n.jsx)(l.Z, {}), (0, n.jsx)(o.x, { color: "gray700", children: "Failed to load" })] });
            }
            function p(e) {
                const s = e ? e.width / e.height : 1;
                let t = Math.min(300, e?.width || 200),
                    n = t / s;
                return n > 400 && ((n = 400), (t = n * s)), { width: t, height: n };
            }
        },
        125691: (e, s, t) => {
            t.d(s, { a: () => z });
            var n = t(552322),
                i = t(425522),
                a = t(332161),
                o = t(993165),
                r = t(436995),
                l = t(887491),
                c = t(25457),
                d = t(14313),
                m = t(202784),
                x = t(533476),
                p = t(658358),
                u = t(950849),
                h = t(595117),
                f = t(607499),
                g = t(455091);
            function v({ replyingTo: e, onRemoveReply: s }) {
                return (0, n.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.displayName ? (0, n.jsxs)(a.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", e.senderInfo.displayName] }) : null, (0, n.jsx)(a.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, n.jsx)(o.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(l.Z, {}), onClick: s })] });
            }
            var j = t(193686),
                y = t(556160),
                w = t(517922),
                C = t(83083),
                b = t(289752);
            function N({ media: e }) {
                const [s, t] = (0, m.useState)(null);
                return (
                    (0, m.useEffect)(() => {
                        e.media.previewUri &&
                            i.com.x.dms.getUrlFromUri(e.media.previewUri).then((e) => {
                                e && t(e);
                            });
                    }, [e.media.previewUri]),
                    e.shouldRender ? (e.shouldRender && s ? (0, n.jsx)("div", { className: "flex overflow-hidden rounded-2xl", children: (0, n.jsx)(b.Et, { src: s, type: i.com.x.models.dm.DmMediaType.Companion.from(e.media.mediaType), dimensions: e.media.dimension }) }) : (0, n.jsx)(a.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Media" })) : null
                );
            }
            function E({ attachment: e, onRemoveAttachment: s }) {
                if (!e.shouldRender) return null;
                let t = null;
                if (e === i.com.x.models.dm.ChatComposerAttachment.Loading) t = (0, n.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, n.jsx)(j.P, {}) });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Media) t = (0, n.jsx)(N, { media: e });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Post) t = e.post ? (0, n.jsx)(y.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, n.jsx)(w.C, {});
                else {
                    if (e instanceof i.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof i.com.x.models.dm.ChatComposerAttachment.File && (t = (0, n.jsx)(C.Q, { className: "rounded-2xl", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return (0, n.jsxs)("div", { className: "flex flex-col max-w-[300px] gap-2 relative", children: [t, (0, n.jsx)("div", { className: "w-full h-px bg-gray-200" }), e.showRemoveButton && (0, n.jsx)("div", { className: "absolute top-2 right-2 flex items-center", children: (0, n.jsx)(o.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(l.Z, {}), onClick: s }) })] });
            }
            var S = t(962639);
            const R = i.com.x.dms.composer.composer.RightButtonState,
                k = i.com.x.dms.composer.composer.ChatComposerEvent;
            function z({ component: e }) {
                const { t: s } = (0, g.$G)(),
                    t = (0, x._)(e.composer.state),
                    j = (0, m.useRef)(null),
                    y = (0, m.useRef)(null);
                (0, p.e)(e.composer.toasts);
                const w = (0, m.useCallback)(() => {
                        j.current?.focus();
                    }, []),
                    C = e.composer.triggerComposerFocusEvents;
                (0, u.E)(C, w),
                    (0, m.useEffect)(() => {
                        w();
                    }, [e]);
                const b = () => {
                        t.rightButton === R.SendActive && e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(t.rightButton));
                    },
                    N = (0, m.useCallback)(
                        async (s) => {
                            await (0, h.$)(
                                s,
                                () => e.composer.onEvent(k.OnFileAttachmentStarted),
                                (s) => e.composer.onEvent(new k.OnFileAttached(s)),
                            );
                        },
                        [e.composer],
                    );
                return (0, n.jsx)(f.S, {
                    children: (0, n.jsx)("div", {
                        className: "bg-background w-full p-2",
                        children: (0, n.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                t.isEditing ? (0, n.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(r.Z, {}), (0, n.jsx)(a.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, n.jsx)(o.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(l.Z, {}), onClick: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                t.replyingTo ? (0, n.jsx)(v, { replyingTo: t.replyingTo, onRemoveReply: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, n.jsxs)("div", {
                                    className: "flex items-end gap-2 w-full backdrop-blur-md bg-background/80",
                                    children: [
                                        (0, n.jsx)("input", {
                                            type: "file",
                                            ref: y,
                                            onChange: async (e) => {
                                                const s = e.target.files?.[0];
                                                s && (await N(s));
                                            },
                                            className: "hidden",
                                            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt",
                                        }),
                                        (0, n.jsx)(o.z, {
                                            size: "small",
                                            disabled: !t.canAddAttachment,
                                            icon: (0, n.jsx)(c.Z, {}),
                                            onClick: () => {
                                                y.current?.click();
                                            },
                                            className: "bg-gray-100 mb-1",
                                        }),
                                        (0, n.jsx)("form", {
                                            onSubmit: (e) => {
                                                e.preventDefault();
                                            },
                                            onPaste: async (e) => {
                                                if (!t.canAddAttachment) return;
                                                const s = e.clipboardData?.items;
                                                if (s)
                                                    for (const t of s)
                                                        if ("file" === t.kind) {
                                                            e.preventDefault();
                                                            const s = t.getAsFile();
                                                            if (!s) continue;
                                                            await N(s);
                                                            break;
                                                        }
                                            },
                                            className: "flex-1",
                                            children: (0, n.jsxs)("div", {
                                                className: "flex items-end gap-2 w-full px-2 overflow-hidden placeholder:text-gray-800 rounded-3xl border-2 border-solid border-gray-200",
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: "flex flex-col justify-end grow py-2",
                                                        children: [
                                                            t.attachment ? (0, n.jsx)(E, { attachment: t.attachment, onRemoveAttachment: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }) : null,
                                                            (0, n.jsx)(S.o, {
                                                                className: "max-h-60",
                                                                multiline: !0,
                                                                value: t.currentText,
                                                                onKeyDown: (e) => {
                                                                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), b());
                                                                },
                                                                onChange: (s) => {
                                                                    e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(s.target.value));
                                                                },
                                                                placeholder: s("Message"),
                                                                ref: j,
                                                            }),
                                                        ],
                                                    }),
                                                    t.rightButton !== R.SendInactive ? (0, n.jsx)(o.z, { className: "mb-1", onClick: b, icon: (0, n.jsx)(d.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
        },
        264531: (e, s, t) => {
            t.d(s, { BH: () => c, XE: () => l, mp: () => r });
            var n = t(552322),
                i = t(202784);
            const a = { path: "/dms", showDebugOptions: !1 },
                o = (0, i.createContext)(null),
                r = ({ children: e, settings: s }) => {
                    const t = { ...a, ...s };
                    return (0, n.jsx)(o.Provider, { value: t, children: e });
                },
                l = () => {
                    const e = (0, i.useContext)(o);
                    if (null === e) throw new Error("useXChatContext must be used within an XChatContextProvider");
                    return e;
                };
            function c() {
                return l().path;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e0975bf4.923cd7fa.js.map
