"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-cbcead99"],
    {
        38891: (e, s, t) => {
            t.d(s, { z: () => a });
            t(552322);
            var n = t(202784);
            const i = (0, n.createContext)({
                featureSwitches: new (class {
                    features;
                    constructor(e = { defaults: {} }) {
                        this.features = { ...(e.defaults ?? {}), ...(e.features ?? {}) };
                    }
                    getArrayValue(e, s = []) {
                        const t = this.features[e];
                        return Array.isArray(t) ? t : s;
                    }
                    getNumberValue(e, s = 0) {
                        const t = this.features[e];
                        return "number" == typeof t ? t : s;
                    }
                    getStringValue(e, s = "") {
                        const t = this.features[e];
                        return "string" == typeof t ? t : s;
                    }
                    isTrue(e) {
                        return !0 === this.features[e];
                    }
                    allTrue(e) {
                        return e.every((e) => this.isTrue(e));
                    }
                    anyTrue(e) {
                        return e.some((e) => this.isTrue(e));
                    }
                })(),
                isInitialized: !1,
            });
            function a() {
                const { featureSwitches: e, isInitialized: s } = (0, n.useContext)(i);
                return e;
            }
        },
        125550: (e, s, t) => {
            t.d(s, { M: () => u });
            var n = t(552322),
                i = t(159603),
                a = t(263033),
                r = t(193686),
                l = t(993165),
                o = t(917317),
                c = t(202784),
                d = t(155369),
                m = t(379342),
                x = t(533476);
            const u = ({ groupId: e, token: s }) => {
                    const [t, a] = (0, c.useState)(null),
                        l = (0, d.n)(),
                        o = (0, m.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.acceptGroupInviteComponent(
                                    t,
                                    new i.com.x.models.dm.XConversationId.Group(e.replace("g", "")),
                                    s,
                                    new i.com.x.dms.acceptinvite.AcceptGroupInviteCallbacks(
                                        () => {
                                            o.toInbox();
                                        },
                                        () => {
                                            o.toPinScreen("new");
                                        },
                                    ),
                                );
                            return (
                                a(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [l, e, s, o]),
                        (0, n.jsx)("div", { className: "flex flex-1 w-full h-full transition-colors", children: t ? (0, n.jsx)(p, { component: t, navigate: o }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(r.P, {}) }) })
                    );
                },
                p = ({ component: e, navigate: s }) => {
                    const { t } = (0, a.$G)(),
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
                                                e.onEvent(i.com.x.dms.acceptinvite.AcceptGroupInviteEvent.InviteAccepted);
                                            },
                                            className: "w-full",
                                            children: r.requestStatus === i.com.x.dms.acceptinvite.AcceptInviteRequestStatus.Requesting ? t("Requesting...") : r.requestStatus === i.com.x.dms.acceptinvite.AcceptInviteRequestStatus.Requested ? t("Requested") : t("Request to join group"),
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
            t.d(s, { C: () => y });
            var n = t(552322),
                i = t(159603),
                a = t(458872),
                r = t(875515),
                l = t(653748),
                o = t(193686),
                c = t(423011),
                d = t(993165),
                m = t(687521),
                x = t(983706),
                u = t(202784),
                p = t(155369),
                h = t(272795),
                f = t(620134),
                g = t(533476),
                v = t(658358),
                j = t(263033);
            const y = ({ conversationId: e, onVisibilityChange: s }) => {
                    const [t, a] = (0, u.useState)(null),
                        r = (0, p.n)();
                    return (
                        (0, u.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = r.addGroupParticipantsComponent(t, e, {
                                    get onFinished() {
                                        return () => {
                                            s(!1);
                                        };
                                    },
                                });
                            return (
                                a(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [r, e, s]),
                        (0, n.jsx)(l.s, { isOpen: !0, onOpenChange: s, isDismissable: !0, children: (0, n.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: t ? (0, n.jsx)(w, { component: t }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(o.P, {}) }) }) })
                    );
                },
                w = ({ component: e }) => {
                    const s = (0, g._)(e.state);
                    (0, v.e)(e.toasts);
                    const { t } = (0, j.$G)(),
                        l = t("Add people"),
                        u = i.com.x.dms.mapToValueList(s.selectedUserIds).asJsReadonlyArrayView(),
                        p = (s) => () => {
                            e.handleEvent(new i.com.x.dms.addparticipants.AddGroupParticipantsEvent.DeleteSelectedGroupUser(s));
                        };
                    return (0, n.jsxs)("div", {
                        className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors",
                        children: [
                            (0, n.jsx)(c.x, {
                                title: l,
                                leftContent: (0, n.jsx)(d.z, {
                                    variant: "primaryText",
                                    icon: (0, n.jsx)(a.Z, {}),
                                    onClick: () => {
                                        e.handleEvent(i.com.x.dms.addparticipants.AddGroupParticipantsEvent.BackButtonClicked);
                                    },
                                }),
                                rightContent: (0, n.jsx)(d.z, {
                                    onClick: () => {
                                        e.handleEvent(i.com.x.dms.addparticipants.AddGroupParticipantsEvent.DoneClicked);
                                    },
                                    variant: "primaryFilled",
                                    children: t("Next"),
                                }),
                            }),
                            (0, n.jsx)("div", {
                                children: (0, n.jsx)(m._, {
                                    autoFocus: !0,
                                    leftContent: (0, n.jsx)(r.Z, { className: "text-gray-700" }),
                                    placeholder: t("Search people"),
                                    onChange: (s) => {
                                        e.handleEvent(new i.com.x.dms.addparticipants.AddGroupParticipantsEvent.QueryChanged(s.target.value));
                                    },
                                    borderRadius: "none",
                                    className: "w-full",
                                }),
                            }),
                            (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: u.length > 0 && u.map((e) => (0, n.jsx)(f.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: p(e.id) }, e.id.userIdString)) }),
                            s.isCallingApi
                                ? (0, n.jsx)(o.P, {})
                                : (0, n.jsx)(x.T, {
                                      items: s.suggestions?.asJsReadonlyArrayView() ?? [],
                                      renderItem: (t) =>
                                          (0, n.jsx)(
                                              h.c,
                                              {
                                                  isSelected: s.selectedUserIds.asJsReadonlyMapView().has(t.user.id) || t.alreadyParticipant,
                                                  onClick: () => {
                                                      e.handleEvent(new i.com.x.dms.addparticipants.AddGroupParticipantsEvent.UserRowClicked(t.user));
                                                  },
                                                  suggestion: t,
                                              },
                                              t.user.id.userIdString,
                                          ),
                                  }),
                        ],
                    });
                };
        },
        205116: (e, s, t) => {
            t.d(s, { P: () => z });
            var n = t(552322),
                i = t(159603),
                a = t(289752),
                r = t(89195),
                l = t(322506),
                o = t(332161),
                c = t(517922),
                d = t(157114);
            const m = i.com.x.models.dm.PostLoadingState;
            function x({ post: e, className: s }) {
                return e.postState instanceof m.NeedsResolution ? (0, n.jsx)(c.C, {}) : e.postState instanceof m.ResolvedPost ? (0, n.jsx)(d.K, { post: e.postState, url: e.url, className: s }) : (0, n.jsxs)(l.r, { href: e.url, target: "_blank", className: "gap-2 w-52 p-4 bg-gray-200 flex items-center justify-between", children: [(0, n.jsx)(o.x, { children: "x.com" }), (0, n.jsx)("div", { className: "text-headline1", children: (0, n.jsx)(r.Z, {}) })] });
            }
            var u = t(193686),
                p = t(530361),
                h = t(202784);
            const f = i.com.x.dms.model.MessageItemAttachment;
            function g({ urlCard: e }) {
                const [s, t] = (0, h.useState)(!1);
                let i = null;
                e instanceof f.UrlCard.Resolved && !s && (i = e.bannerImage && (0, n.jsx)("img", { src: e.bannerImage, loading: "lazy", alt: e.displayTitle || e.displayHostname, className: "w-full h-full object-cover", onError: () => t(!0) })), e instanceof f.UrlCard.Loading && (i = (0, n.jsx)("div", { className: "flex items-center justify-center h-32 pt-2 w-full", children: (0, n.jsx)(u.P, {}) }));
                const a = (0, p.decode)(e.displayTitle || "");
                return (0, n.jsxs)("div", { className: "flex flex-col items-center gap-0.5 bg-gray-100 cursor-pointer transition-colors duration-100 max-w-sm hover:bg-gray-50/50", onClick: () => window.open(e.urlToOpen, "_blank"), children: [i, (0, n.jsxs)("div", { className: "flex flex-col gap-0.5 px-8 py-4", children: [a && (0, n.jsx)(o.x, { weight: "medium", children: a }), (0, n.jsxs)("div", { className: "flex items-center gap-1", children: [(0, n.jsx)(o.x, { color: "gray900", size: "subtext2", numberOfLines: 1, children: e.displayHostname }), (0, n.jsx)(r.Z, { className: "text-gray-500 size-4" })] })] })] });
            }
            var v = t(264531),
                j = t(858108),
                y = t(83083),
                w = t(263033);
            function b({ unifiedCard: e }) {
                const { t: s } = (0, w.$G)(),
                    t = e.url.startsWith("https://x.com/i/grok/share/") || e.url.startsWith("https://grok.com/share/") ? s("Grok share card") : e.url;
                return (0, n.jsx)("div", { className: "flex flex-col items-center gap-0.5 bg-gray-100 cursor-pointer transition-colors duration-100 max-w-sm hover:bg-gray-50/50", onClick: () => window.open(e.url, "_blank"), children: (0, n.jsx)("div", { className: "flex flex-col gap-0.5 px-8 py-4", children: (0, n.jsxs)("div", { className: "flex items-center gap-1", children: [(0, n.jsx)(o.x, { color: "gray900", size: "subtext2", numberOfLines: 1, children: t }), (0, n.jsx)(r.Z, { className: "text-gray-500 size-4" })] }) }) });
            }
            const N = i.com.x.dms.model.MessageItemAttachment,
                C = i.com.x.dms.chat.DmEvent,
                S = i.com.x.dms.model.MediaUriState,
                I = i.com.x.models.dm.PostLoadingState;
            function z({ attachment: e, isReceived: s, onEvent: t, className: r, isVisible: l }) {
                const o = !(0, j.G)() || (0, v.VC)();
                if (e instanceof N.Post) return e.postState instanceof I.NeedsResolution && l && t(new C.ResolvePost(e.postId)), (0, n.jsx)(x, { isReceived: s, post: e, className: r });
                if (e instanceof N.UrlCard) return e instanceof N.UrlCard.NeedsResolving && !e.showTapToLoadPrompt && l && t(new C.ResolveUrlCard(e, !1)), (0, n.jsx)(g, { urlCard: e });
                if (e instanceof N.UnifiedCard) return (0, n.jsx)(b, { unifiedCard: e });
                if (e instanceof N.Media) {
                    if (e instanceof N.Media.FromServer) {
                        if ((e.uriState instanceof S.AttachmentNeedsResolving && o && l && t(new C.ResolveAttachment(e.uriState)), e.uriState instanceof S.ResolvedMedia)) return e.type === i.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(y.Q, { filename: e.filename, fileSize: e.fileSize, uriToLoad: e.uriState.uri, className: r }) : (0, n.jsx)(a.Et, { src: e.uriState.uri, type: e.type, dimensions: e.dimensions, className: r });
                        if (e.uriState instanceof S.Resolving) return (0, n.jsx)(a._9, { dimensions: e.dimensions });
                        if (e.uriState === S.FailedToLoad) return (0, n.jsx)(a.DM, { dimensions: e.dimensions });
                    }
                    if (e instanceof N.Media.Pending) return e.type === i.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(y.Q, { filename: e.filename, fileSize: e.fileSize, className: r }) : (0, n.jsx)(a._9, { dimensions: e.dimensions });
                }
                return null;
            }
        },
        83083: (e, s, t) => {
            t.d(s, { Q: () => d });
            var n = t(552322),
                i = t(332161),
                a = t(42630),
                r = t(1357),
                l = t(263033),
                o = t(31674),
                c = t(509597);
            function d({ filename: e, fileType: s, fileSize: t, uriToLoad: d, className: m }) {
                const { t: x } = (0, l.$G)(),
                    u = s || x("Document"),
                    p = (0, n.jsxs)("div", { className: (0, o.cn)("flex items-center gap-3 bg-gray-100 px-6 py-3 transition-colors", d && "cursor-pointer hover:bg-gray-200", m), children: [(0, n.jsx)("div", { className: "flex-shrink-0", children: (0, n.jsx)(r.Z, { className: "text-gray-500 size-5" }) }), (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(i.x, { weight: "medium", numberOfLines: 1, breakText: "all", children: e }), (0, n.jsxs)(a.S, { children: [(0, n.jsx)(i.x, { size: "subtext2", color: "gray700", children: d ? x("Tap to download") : u }), t?.fileSizeMb && (0, n.jsx)(i.x, { size: "subtext2", color: "gray700", children: (0, c.s)(t.fileSizeMb) })] })] })] });
                return d ? (0, n.jsx)("a", { href: d, download: e, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" }, children: p }) : p;
            }
        },
        617092: (e, s, t) => {
            t.d(s, { K: () => o });
            var n = t(552322),
                i = t(332161),
                a = t(1357),
                r = t(31674),
                l = t(509597);
            function o({ filename: e, fileSize: s, className: t }) {
                const o = (0, l.s)(s?.fileSizeMb ?? 0);
                return (0, n.jsxs)("div", { className: (0, r.cn)("flex items-center gap-2 rounded-2xl p-2 border border-gray-200", t), children: [(0, n.jsx)(a.Z, { className: "text-gray-500 size-4" }), (0, n.jsxs)(i.x, { size: "subtext2", numberOfLines: 1, children: [e, s && (0, n.jsxs)("span", { className: "text-gray-700 ml-1", children: ["(", o, ")"] })] })] });
            }
        },
        289752: (e, s, t) => {
            t.d(s, { DM: () => p, Et: () => x, _9: () => u });
            var n = t(552322),
                i = t(59463),
                a = t(472275),
                r = t(193686),
                l = t(332161),
                o = t(31674),
                c = t(202784),
                d = t(841227),
                m = t(263033);
            function x({ src: e, type: s, dimensions: t, className: i, showAsStatic: r = !1 }) {
                const { width: l, height: m } = h(t),
                    [x, u] = (0, c.useState)(!1),
                    p = [{ type: "Video" === s.name ? "video" : "Gif" === s.name ? "animated_gif" : "image", src: e, previewImage: e }];
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        "Video" === s.name && r ? (0, n.jsx)("video", { src: e, preload: "metadata", width: `${l}px`, height: `${m}px`, className: i }) : "Video" === s.name ? (0, n.jsx)("div", { style: { width: `${l}px`, height: `${m}px` }, className: i, children: (0, n.jsx)(d.q, { src: e, poster: e, type: "video/mp4", autoPlay: !0, muted: !0, loop: !0, playsInline: !0 }) }) : (0, n.jsx)("img", { src: e, loading: "lazy", alt: "attachment", className: (0, o.cn)("max-w-[300px] max-h-[400px] cursor-pointer bg-gray-50", i), style: { width: `${l}px`, height: `${m}px` }, onClick: () => u(!0) }),
                        (0, n.jsx)(a.e, {
                            mediaItems: p,
                            initialIndex: 0,
                            isOpen: x,
                            onClose: () => {
                                u(!1);
                            },
                        }),
                    ],
                });
            }
            function u({ dimensions: e }) {
                const { width: s, height: t } = h(e);
                return (0, n.jsx)("div", { className: "bg-gray-50 flex items-center justify-center", style: { width: `${s}px`, height: `${t}px` }, children: (0, n.jsx)(r.P, {}) });
            }
            function p({ dimensions: e }) {
                const { width: s, height: t } = h(e),
                    { t: a } = (0, m.$G)();
                return (0, n.jsxs)("div", { className: "bg-gray-50 flex flex-col gap-1.5 items-center justify-center text-gray-700", style: { width: `${s}px`, height: `${t}px` }, children: [(0, n.jsx)(i.Z, {}), (0, n.jsx)(l.x, { color: "gray700", children: a("Failed to load") })] });
            }
            function h(e) {
                const s = e ? e.width / e.height : 1;
                let t = Math.min(300, e?.width || 200),
                    n = t / s;
                return n > 400 && ((n = 400), (t = n * s)), { width: t, height: n };
            }
        },
        791266: (e, s, t) => {
            t.d(s, { C: () => o });
            var n = t(552322),
                i = t(159603),
                a = t(332161),
                r = t(89195);
            const l = i.com.x.dms.model.MessageItemAttachment;
            function o({ urlCard: e }) {
                let s = null;
                return e instanceof l.UrlCard.Resolved && (s = e.bannerImage && (0, n.jsx)("img", { src: e.bannerImage, loading: "lazy", alt: e.displayTitle || e.displayHostname, className: "max-w-[160px] max-h-[200px] rounded-xl object-cover" })), (0, n.jsxs)("div", { className: "flex flex-row gap-2 cursor-pointer bg-gray-100 transition-colors duration-100 hover:bg-gray-100/50 p-2 rounded-2xl items-center border border-gray-200", onClick: () => window.open(e.urlToOpen, "_blank"), children: [s, (0, n.jsx)(a.x, { weight: s ? "medium" : "normal", size: "subtext1", className: "truncate", children: e.displayHostname || e.urlToOpen }), (0, n.jsx)(r.Z, { className: "text-gray-500 size-3" })] });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-cbcead99.e253a8ea.js.map
