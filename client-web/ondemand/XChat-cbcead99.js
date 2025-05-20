"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-cbcead99"],
    {
        38891: (e, s, t) => {
            t.d(s, { zo: () => i });
            t(552322);
            var n = t(202784);
            const a = (0, n.createContext)(
                new (class {
                    features;
                    constructor(e) {
                        this.features = e?.config ?? {};
                    }
                    getValue(e, s = null) {
                        const t = this.features[e];
                        return t ? t.value : s;
                    }
                    getArrayValue(e, s = []) {
                        const t = this.getValue(e);
                        return Array.isArray(t) ? t : s;
                    }
                    getNumberValue(e, s = 0) {
                        const t = this.getValue(e);
                        return "number" == typeof t ? t : s;
                    }
                    getStringValue(e, s = "") {
                        const t = this.getValue(e);
                        return "string" == typeof t ? t : s;
                    }
                    isTrue(e) {
                        return !0 === this.getValue(e);
                    }
                    allTrue(e) {
                        return e.every((e) => this.isTrue(e));
                    }
                    anyTrue(e) {
                        return e.some((e) => this.isTrue(e));
                    }
                })(),
            );
            function i() {
                return (0, n.useContext)(a);
            }
        },
        125550: (e, s, t) => {
            t.d(s, { M: () => u });
            var n = t(552322),
                a = t(159603),
                i = t(455091),
                r = t(193686),
                l = t(993165),
                o = t(917317),
                c = t(202784),
                d = t(611463),
                m = t(379342),
                x = t(533476);
            const u = ({ groupId: e, token: s }) => {
                    const [t, i] = (0, c.useState)(null),
                        l = (0, d.n)(),
                        o = (0, m.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new a.com.x.export.CancellationSignal(),
                                n = l.acceptGroupInviteComponent(
                                    t,
                                    new a.com.x.models.dm.XConversationId.Group(e.replace("g", "")),
                                    s,
                                    new a.com.x.dms.acceptinvite.AcceptGroupInviteCallbacks(() => {
                                        o.toInbox();
                                    }),
                                );
                            return (
                                i(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [l, e, s, o]),
                        (0, n.jsx)("div", { className: "flex flex-1 w-full h-full transition-colors", children: t ? (0, n.jsx)(p, { component: t, navigate: o }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(r.P, {}) }) })
                    );
                },
                p = ({ component: e, navigate: s }) => {
                    const { t } = (0, i.$G)(),
                        r = (0, x._)(e.state);
                    return (0, n.jsx)("div", {
                        className: "flex flex-1 flex-col items-center justify-center p-4",
                        children: (0, n.jsxs)(o.Zb, {
                            className: "w-full max-w-md",
                            children: [
                                (0, n.jsxs)(o.Ol, { children: [(0, n.jsx)(o.ll, { children: t("Group Invite") }), (0, n.jsx)(o.SZ, { children: t("You have been invited to join a group") })] }),
                                (0, n.jsxs)(o.eW, {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        (0, n.jsx)(l.z, {
                                            variant: "primaryFilled",
                                            onClick: () => {
                                                e.onEvent(a.com.x.dms.acceptinvite.AcceptGroupInviteEvent.InviteAccepted);
                                            },
                                            className: "w-full",
                                            children: r.requestStatus === a.com.x.dms.acceptinvite.AcceptInviteRequestStatus.Requesting ? t("Requesting...") : r.requestStatus === a.com.x.dms.acceptinvite.AcceptInviteRequestStatus.Requested ? t("Requested") : t("Request to join group"),
                                        }),
                                        (0, n.jsx)(l.z, { variant: "primaryText", onClick: () => s.toInbox(), className: "w-full", children: t("Dismiss") }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
        },
        846742: (e, s, t) => {
            t.d(s, { C: () => j });
            var n = t(552322),
                a = t(159603),
                i = t(653748),
                r = t(193686),
                l = t(423011),
                o = t(993165),
                c = t(687521),
                d = t(983706),
                m = t(202784),
                x = t(611463),
                u = t(533476),
                p = t(658358),
                h = t(466285),
                f = t(620134),
                g = t(458872),
                v = t(875515);
            const j = ({ conversationId: e, onVisibilityChange: s }) => {
                    const [t, l] = (0, m.useState)(null),
                        o = (0, x.n)();
                    return (
                        (0, m.useEffect)(() => {
                            const t = new a.com.x.export.CancellationSignal(),
                                n = o.addGroupParticipantsComponent(t, e, {
                                    get onFinished() {
                                        return () => {
                                            s(!1);
                                        };
                                    },
                                });
                            return (
                                l(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [o, e, s]),
                        (0, n.jsx)(i.s, { isOpen: !0, onOpenChange: s, isDismissable: !0, children: (0, n.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: t ? (0, n.jsx)(y, { component: t }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(r.P, {}) }) }) })
                    );
                },
                y = ({ component: e }) => {
                    const s = (0, u._)(e.state);
                    (0, p.e)(e.toasts);
                    const t = a.com.x.dms.mapToValueList(s.selectedUserIds).asJsReadonlyArrayView(),
                        i = (s) => () => {
                            e.handleEvent(new a.com.x.dms.addparticipants.AddGroupParticipantsEvent.DeleteSelectedGroupUser(s));
                        };
                    return (0, n.jsxs)("div", {
                        className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors",
                        children: [
                            (0, n.jsx)(l.x, {
                                title: "Add people",
                                leftContent: (0, n.jsx)(o.z, {
                                    variant: "primaryText",
                                    icon: (0, n.jsx)(g.Z, {}),
                                    onClick: () => {
                                        e.handleEvent(a.com.x.dms.addparticipants.AddGroupParticipantsEvent.BackButtonClicked);
                                    },
                                }),
                                rightContent: (0, n.jsx)(o.z, {
                                    onClick: () => {
                                        e.handleEvent(a.com.x.dms.addparticipants.AddGroupParticipantsEvent.DoneClicked);
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
                                        e.handleEvent(new a.com.x.dms.addparticipants.AddGroupParticipantsEvent.QueryChanged(s.target.value));
                                    },
                                    borderRadius: "none",
                                    className: "w-full",
                                }),
                            }),
                            (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: t.length > 0 && t.map((e) => (0, n.jsx)(f.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: i(e.id) }, e.id.userIdString)) }),
                            s.isCallingApi
                                ? (0, n.jsx)(r.P, {})
                                : (0, n.jsx)(d.T, {
                                      items: s.suggestions?.asJsReadonlyArrayView() ?? [],
                                      renderItem: (t) =>
                                          (0, n.jsx)(h.a, {
                                              onClick: () => {
                                                  e.handleEvent(new a.com.x.dms.addparticipants.AddGroupParticipantsEvent.UserRowClicked(t.user));
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
            t.d(s, { P: () => b });
            var n = t(552322),
                a = t(159603),
                i = t(289752),
                r = t(322506),
                l = t(332161),
                o = t(89195),
                c = t(517922),
                d = t(556160);
            const m = a.com.x.models.dm.PostLoadingState,
                x = a.com.x.dms.chat.DmEvent;
            function u({ post: e, onEvent: s, className: t }) {
                return e.postState instanceof m.NeedsResolution ? (s(new x.ResolvePost(e.postId)), (0, n.jsx)(c.C, {})) : e.postState instanceof m.ResolvedPost ? (0, n.jsx)(d.K, { post: e.postState, url: e.url, className: t }) : (0, n.jsxs)(r.r, { href: e.url, target: "_blank", className: "gap-2 w-52 p-4 bg-gray-200 flex items-center justify-between", children: [(0, n.jsx)(l.x, { children: "x.com" }), (0, n.jsx)("div", { className: "text-headline1", children: (0, n.jsx)(o.Z, {}) })] });
            }
            var p = t(193686);
            const h = a.com.x.dms.model.MessageItemAttachment,
                f = a.com.x.dms.chat.DmEvent;
            function g({ urlCard: e, onEvent: s }) {
                e instanceof h.UrlCard.NeedsResolving && !e.showTapToLoadPrompt && s(new f.ResolveUrlCard(e, !1));
                let t = null;
                return e instanceof h.UrlCard.Resolved && (t = e.bannerImage && (0, n.jsx)("img", { src: e.bannerImage, loading: "lazy", alt: e.displayTitle || e.displayHostname, className: "max-w-[320px] max-h-[400px] rounded-t-2xl rounded-b-none border border-gray-200 shadow-md" })), e instanceof h.UrlCard.Loading && (t = (0, n.jsx)("div", { className: "flex items-center justify-center h-32 pt-2 w-full", children: (0, n.jsx)(p.P, {}) })), (0, n.jsxs)("div", { className: "flex flex-col gap-0.5 bg-gray-100 cursor-pointer transition-colors duration-100", onClick: () => window.open(e.urlToOpen, "_blank"), children: [t, (0, n.jsxs)("div", { className: "flex flex-col gap-0.5 px-8 py-4 hover:bg-gray-50/50", children: [e.displayTitle && (0, n.jsx)(l.x, { weight: "medium", children: e.displayTitle }), (0, n.jsxs)("div", { className: "flex items-center gap-1", children: [(0, n.jsx)(l.x, { color: "gray900", size: "subtext2", children: e.displayHostname }), (0, n.jsx)(o.Z, { className: "text-gray-500 size-4" })] })] })] });
            }
            var v = t(83083);
            const j = a.com.x.dms.model.MessageItemAttachment,
                y = a.com.x.dms.chat.DmEvent,
                w = a.com.x.dms.model.MediaUriState;
            function b({ attachment: e, isReceived: s, onEvent: t, className: r }) {
                if (e instanceof j.Post) return (0, n.jsx)(u, { isReceived: s, post: e, onEvent: t, className: r });
                if (e instanceof j.UrlCard) return (0, n.jsx)(g, { urlCard: e, onEvent: t });
                if (e instanceof j.Media) {
                    if (e instanceof j.Media.FromServer) {
                        if ((e.uriState instanceof w.AttachmentNeedsResolving && t(new y.ResolveAttachment(e.uriState)), e.uriState instanceof w.ResolvedMedia)) return e.type === a.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(v.Q, { filename: e.filename, fileSize: e.fileSize, uriToLoad: e.uriState.uri, className: r }) : (0, n.jsx)(i.Et, { src: e.uriState.uri, type: e.type, dimensions: e.dimensions, className: r });
                        if (e.uriState instanceof w.Resolving) return (0, n.jsx)(i._9, { dimensions: e.dimensions });
                        if (e.uriState === w.FailedToLoad) return (0, n.jsx)(i.DM, { dimensions: e.dimensions });
                    }
                    if (e instanceof j.Media.Pending) return e.type === a.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(v.Q, { filename: e.filename, fileSize: e.fileSize, className: r }) : (0, n.jsx)(i._9, { dimensions: e.dimensions });
                }
                return null;
            }
        },
        83083: (e, s, t) => {
            t.d(s, { Q: () => d });
            var n = t(552322),
                a = t(332161),
                i = t(42630),
                r = t(1357),
                l = t(455091),
                o = t(31674),
                c = t(509597);
            function d({ filename: e, fileType: s = "Document", fileSize: t, uriToLoad: d, className: m }) {
                const { t: x } = (0, l.$G)(),
                    u = (0, n.jsxs)("div", { className: (0, o.cn)("flex items-center gap-3 bg-gray-100 px-6 py-3 transition-colors", d && "cursor-pointer hover:bg-gray-200", m), children: [(0, n.jsx)("div", { className: "flex-shrink-0", children: (0, n.jsx)(r.Z, { className: "text-gray-500 size-5" }) }), (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(a.x, { weight: "medium", numberOfLines: 1, children: e }), (0, n.jsxs)(i.S, { children: [(0, n.jsx)(a.x, { size: "subtext2", color: "gray700", children: d ? x("Tap to download") : s }), t?.fileSizeMb && (0, n.jsx)(a.x, { size: "subtext2", color: "gray700", children: (0, c.s)(t.fileSizeMb) })] })] })] });
                return d ? (0, n.jsx)("a", { href: d, download: e, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" }, children: u }) : u;
            }
        },
        617092: (e, s, t) => {
            t.d(s, { K: () => o });
            var n = t(552322),
                a = t(332161),
                i = t(1357),
                r = t(31674),
                l = t(509597);
            function o({ filename: e, fileSize: s, className: t }) {
                const o = (0, l.s)(s?.fileSizeMb ?? 0);
                return (0, n.jsxs)("div", { className: (0, r.cn)("flex items-center gap-2 rounded-2xl p-2 border border-gray-200", t), children: [(0, n.jsx)(i.Z, { className: "text-gray-500 size-4" }), (0, n.jsxs)(a.x, { size: "subtext2", numberOfLines: 1, children: [e, s && (0, n.jsxs)("span", { className: "text-gray-700 ml-1", children: ["(", o, ")"] })] })] });
            }
        },
        289752: (e, s, t) => {
            t.d(s, { DM: () => u, Et: () => m, _9: () => x });
            var n = t(552322),
                a = t(59463),
                i = t(472275),
                r = t(193686),
                l = t(332161),
                o = t(31674),
                c = t(202784),
                d = t(841227);
            function m({ src: e, type: s, dimensions: t, className: a }) {
                const { width: r, height: l } = p(t),
                    [m, x] = (0, c.useState)(!1),
                    u = [{ type: "Video" === s.name ? "video" : "Gif" === s.name ? "animated_gif" : "image", src: e, previewImage: e }];
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        "Video" === s.name ? (0, n.jsx)("div", { style: { width: `${r}px`, height: `${l}px` }, className: a, children: (0, n.jsx)(d.q, { src: e, poster: e, type: "video/mp4", autoPlay: !0, muted: !0, loop: !0, playsInline: !0 }) }) : (0, n.jsx)("img", { src: e, loading: "lazy", alt: "attachment", className: (0, o.cn)("max-w-[300px] max-h-[400px] cursor-pointer bg-gray-50 border border-gray-200 shadow-md", a), style: { width: `${r}px`, height: `${l}px` }, onClick: () => x(!0) }),
                        (0, n.jsx)(i.e, {
                            mediaItems: u,
                            initialIndex: 0,
                            isOpen: m,
                            onClose: () => {
                                x(!1);
                            },
                        }),
                    ],
                });
            }
            function x({ dimensions: e }) {
                const { width: s, height: t } = p(e);
                return (0, n.jsx)("div", { className: "bg-gray-50 flex items-center justify-center", style: { width: `${s}px`, height: `${t}px` }, children: (0, n.jsx)(r.P, {}) });
            }
            function u({ dimensions: e }) {
                const { width: s, height: t } = p(e);
                return (0, n.jsxs)("div", { className: "bg-gray-50 flex flex-col gap-1.5 items-center justify-center text-gray-700", style: { width: `${s}px`, height: `${t}px` }, children: [(0, n.jsx)(a.Z, {}), (0, n.jsx)(l.x, { color: "gray700", children: "Failed to load" })] });
            }
            function p(e) {
                const s = e ? e.width / e.height : 1;
                let t = Math.min(300, e?.width || 200),
                    n = t / s;
                return n > 400 && ((n = 400), (t = n * s)), { width: t, height: n };
            }
        },
        791266: (e, s, t) => {
            t.d(s, { C: () => o });
            var n = t(552322),
                a = t(159603),
                i = t(332161),
                r = t(89195);
            const l = a.com.x.dms.model.MessageItemAttachment;
            function o({ urlCard: e }) {
                let s = null;
                return e instanceof l.UrlCard.Resolved && (s = e.bannerImage && (0, n.jsx)("img", { src: e.bannerImage, loading: "lazy", alt: e.displayTitle || e.displayHostname, className: "max-w-[160px] max-h-[200px] rounded-xl object-cover" })), (0, n.jsxs)("div", { className: "flex flex-row gap-2 cursor-pointer bg-gray-100 transition-colors duration-100 hover:bg-gray-100/50 p-2 rounded-2xl items-center border border-gray-200", onClick: () => window.open(e.urlToOpen, "_blank"), children: [s, (0, n.jsx)(i.x, { weight: s ? "medium" : "normal", size: "subtext1", className: "truncate", children: e.displayHostname || e.urlToOpen }), (0, n.jsx)(r.Z, { className: "text-gray-500 size-3" })] });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-cbcead99.e9940b4a.js.map
