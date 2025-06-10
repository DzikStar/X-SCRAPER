"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f141c2f6"],
    {
        272795: (e, t, n) => {
            n.d(t, { c: () => o });
            var a = n(552322),
                r = n(159603),
                s = n(332161),
                l = n(466285),
                i = n(759746);
            const o = ({ onClick: e, isSelected: t, suggestion: n }) => (n instanceof r.com.x.dms.NewDmSuggestion.User ? (0, a.jsx)(l.a, { onClick: e, isSelected: t, user: n.user }) : n instanceof r.com.x.dms.NewDmSuggestion.ExistingGroup ? (0, a.jsxs)("div", { className: "flex flex-row w-full gap-2 p-2 items-center hover:bg-gray-50 cursor-pointer rounded-lg", onClick: e, children: [(0, a.jsx)(i.M, { avatarSize: "large", users: n.otherUsers.asJsReadonlyArrayView(), isInlineFacepile: !0 }), (0, a.jsxs)("div", { className: "flex-1 flex-col", children: [(0, a.jsx)(s.x, { children: n.title }), (0, a.jsxs)(s.x, { size: "subtext2", color: "gray700", children: [n.numParticipants, " people"] })] })] }, n.id) : (0, a.jsx)(a.Fragment, {}));
        },
        466285: (e, t, n) => {
            n.d(t, { a: () => u });
            var a = n(552322),
                r = n(159603),
                s = n(256958),
                l = n(589259),
                i = n(242782),
                o = n(350311),
                c = n(336984);
            const u = ({ onClick: e, isSelected: t, isAlreadyParticipant: n, user: u }) => {
                const d = n || !!u.cannotMessageReason;
                return (0, a.jsxs)(
                    "div",
                    {
                        className: "flex flex-row w-full gap-3 p-2 items-center rounded-lg " + (d ? "opacity-20" : "hover:bg-gray-50 cursor-pointer"),
                        onClick: () => {
                            e();
                            const t = ((e) => {
                                switch (e) {
                                    case r.com.x.models.dm.CannotMessageReason.NO_PUBLIC_KEY:
                                        return "This account must set up their PIN before you're able to message them.";
                                    case r.com.x.models.dm.CannotMessageReason.NO_PERMISSION:
                                        return "Sorry! You cannot message this account.";
                                }
                                return null;
                            })(u.cannotMessageReason);
                            t && (0, s.Am)(t);
                        },
                        "aria-disabled": d,
                        children: [(0, a.jsx)(o.s, { url: u.profileImageUrl, size: "xLarge" }), (0, a.jsx)("div", { className: "flex-1", children: (0, a.jsx)(l.R, { name: u.displayName, screenName: u.screenName, badges: (0, c.r)(u), isStacked: !0 }) }), t && (0, a.jsx)("div", { className: "justify-self-end", children: (0, a.jsx)(i.Z, { className: "text-blue-500" }) })],
                    },
                    u.screenName,
                );
            };
        },
        620134: (e, t, n) => {
            n.d(t, { w: () => i });
            var a = n(552322),
                r = n(350311),
                s = n(589259),
                l = n(887491);
            const i = ({ name: e, avatarUrl: t, onRemove: n }) => (0, a.jsxs)("div", { className: "flex items-center rounded-full px-2 py-1 gap-1.5 bg-gray-50 hover:bg-mix-text border border-gray-200 max-w-fit cursor-pointer", onClick: n, children: [(0, a.jsx)(r.s, { url: t, size: "small" }), (0, a.jsx)(s.R, { name: e, size: "subtext1" }), (0, a.jsx)(l.Z, { className: "size-4" })] });
        },
        517922: (e, t, n) => {
            n.d(t, { C: () => s });
            var a = n(552322),
                r = n(193686);
            function s() {
                return (0, a.jsx)("div", { className: "flex items-center gap-2 p-4 bg-gray-100", children: (0, a.jsx)(r.P, { size: "small" }) });
            }
        },
        157114: (e, t, n) => {
            n.d(t, { K: () => p });
            var a = n(552322),
                r = n(322506),
                s = n(378364),
                l = n(589259),
                i = n(253511),
                o = n(983955),
                c = n(31674),
                u = n(472275),
                d = n(840489),
                m = n(202784);
            function g({ mediaItems: e }) {
                const [t, n] = (0, m.useState)(!1),
                    [r, s] = (0, m.useState)(0),
                    l = (e, t) => (e.preventDefault(), e.stopPropagation(), s(t), n(!0), !1);
                if (!e || 0 === e.length) return null;
                if (1 === e.length) {
                    const i = e[0];
                    return i
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: "border border-gray-200 rounded-xl overflow-hidden cursor-pointer w-full h-auto max-h-auto",
                                      onClick: (e) => {
                                          e.preventDefault(), e.stopPropagation(), l(e, 0);
                                      },
                                      onMouseDown: (e) => e.stopPropagation(),
                                      onTouchStart: (e) => e.stopPropagation(),
                                      children: (0, a.jsx)(f, { mediaItem: i, gridItem: !1 }),
                                  }),
                                  (0, a.jsx)(u.e, {
                                      mediaItems: e,
                                      initialIndex: r,
                                      isOpen: t,
                                      onClose: () => {
                                          n(!1), s(0);
                                      },
                                  }),
                              ],
                          })
                        : null;
                }
                const i = e.slice(0, 4),
                    o = 3 === i.length,
                    c = i.length <= 2 ? 1 : 2,
                    d = (e) => {
                        const t = "lg";
                        if (2 === i.length) return 0 === e ? `rounded-l-${t}` : `rounded-r-${t}`;
                        if (o) {
                            if (0 === e) return `rounded-l-${t}`;
                            if (1 === e) return `rounded-tr-${t}`;
                            if (2 === e) return `rounded-br-${t}`;
                        }
                        if (4 === i.length) {
                            if (0 === e) return `rounded-tl-${t}`;
                            if (1 === e) return `rounded-tr-${t}`;
                            if (2 === e) return `rounded-bl-${t}`;
                            if (3 === e) return `rounded-br-${t}`;
                        }
                        return "";
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: "grid gap-0.5 border border-gray-200 overflow-hidden flex-shrink-0 rounded-lg aspect-video p-0",
                            style: { gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: o ? "1fr 1fr" : `repeat(${c}, 1fr)` },
                            children: i.map((e, t) =>
                                (0, a.jsx)(
                                    "div",
                                    {
                                        className: "w-full h-full overflow-hidden cursor-pointer",
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), l(e, t);
                                        },
                                        onMouseDown: (e) => e.stopPropagation(),
                                        onTouchStart: (e) => e.stopPropagation(),
                                        style: { ...(o && 0 === t ? { gridRow: "span 2" } : void 0) },
                                        children: (0, a.jsx)(f, { mediaItem: e, gridItem: !0, cornerClass: d(t) }),
                                    },
                                    `media-${e.src}-${t}`,
                                ),
                            ),
                        }),
                        (0, a.jsx)(u.e, {
                            mediaItems: e,
                            initialIndex: r,
                            isOpen: t,
                            onClose: () => {
                                n(!1), s(0);
                            },
                        }),
                    ],
                });
            }
            function f({ mediaItem: e, gridItem: t = !1, cornerClass: n }) {
                if (!e) return null;
                const r = "video" === e.type,
                    s = "animated_gif" === e.type;
                return (0, a.jsx)("div", { className: (0, d.Z)("relative overflow-hidden", t ? (0, d.Z)("w-full h-full", n) : "w-full h-full flex-shrink-0"), children: r || s ? (0, a.jsx)("video", { src: e.src, autoPlay: !0, muted: !0, loop: !0, playsInline: !0, className: (0, d.Z)("w-full h-full object-cover") }) : (0, a.jsx)("img", { src: e.previewImage, alt: "Media content", className: (0, d.Z)("w-full h-full object-cover") }) });
            }
            function p({ post: e, url: t, className: n }) {
                const u = e.post;
                return (0, a.jsxs)(r.r, { href: t, target: "_blank", className: (0, c.cn)("flex flex-col gap-2 h-full w-full border border-gray-200 py-2 px-4 cursor-pointer hover:bg-gray-50/50 transition-colors duration-100", n), children: [(0, a.jsxs)("div", { className: "flex gap-2 items-center", children: [(0, a.jsx)(s.q, { screenName: u.author.screenName, size: "small", url: u.author.profileImageUrl, withLink: !1, shape: u.author.profileImageShape, className: "size-5 shrink-0" }), (0, a.jsxs)("div", { className: "flex items-center gap-1 w-full", children: [(0, a.jsx)(l.R, { badges: u.author.badges, name: u.author.name, size: "subtext1", withLink: !1, screenNameColor: "gray800", screenName: u.author.screenName, isStacked: !1 }), (0, a.jsx)("div", { className: "shrink-0 size-0.5 bg-text/40 rounded-full" }), (0, a.jsx)("div", { className: "shrink-0", children: (0, a.jsx)(i.E, { timestamp: u.createdAt, size: "subtext1", color: "gray800" }) })] })] }), (0, a.jsx)(o.W, { text: u.text, displayTextRange: u.displayTextRange, entities: u.entities }), u.media && u.media.length > 0 && (0, a.jsx)("div", { className: "pb-2", children: (0, a.jsx)(g, { mediaItems: u.media }) })] });
            }
        },
        537335: (e, t, n) => {
            n.d(t, { Q: () => l });
            var a = n(552322),
                r = n(202784),
                s = n(167285);
            const l = ({ timestamp: e, updateIntervalMs: t = 3e4 }) => {
                const [n, l] = (0, r.useState)(Date.now() / 1e3 - e.epochSeconds),
                    i = (0, r.useCallback)(() => {
                        l(Date.now() / 1e3 - e.epochSeconds);
                    }, [e]);
                return (
                    (0, r.useEffect)(() => {
                        i();
                        const e = setInterval(i, t);
                        return () => clearInterval(e);
                    }, [t, i]),
                    (0, a.jsx)(a.Fragment, { children: (0, s.S)({ diffSeconds: n, epochSeconds: e.epochSeconds, style: "narrow" }) })
                );
            };
        },
        910299: (e, t, n) => {
            n.d(t, { r: () => i });
            var a = n(552322),
                r = n(159603),
                s = n(332161),
                l = n(32161);
            const i = ({ conversations: e, onEvent: t }) =>
                (0, a.jsx)("div", {
                    className: "flex overflow-x-auto scrollbar-hide",
                    children: e.map((e) =>
                        (0, a.jsxs)(
                            "div",
                            {
                                className: "flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-lg py-2 px-3",
                                onClick: () => {
                                    t(new r.com.x.dms.convlist.ConversationListEvent.RowClicked(e.conversationId, e.preview?.lastReadSequenceNumber));
                                },
                                children: [(0, a.jsx)("div", { className: "size-14", children: (0, a.jsx)(l.x, { avatarSize: "fill", titleState: e.metadata.title, isInlineFacepile: !0, onCustomAvatarNeedsResolving: () => {}, withLink: !1 }) }), (0, a.jsx)(s.x, { size: "subtext3", className: "mt-2 text-center text-ellipsis max-w-14", numberOfLines: 2, children: e.metadata.title.title })],
                            },
                            e.conversationId.id,
                        ),
                    ),
                });
        },
        18671: (e, t, n) => {
            n.d(t, { Z: () => x });
            var a = n(552322),
                r = n(849436),
                s = n(458872),
                l = n(993165),
                i = n(653748),
                o = n(423011),
                c = n(332161),
                u = n(202784),
                d = n(264531),
                m = n(718278),
                g = n(664147),
                f = n(173399);
            const p = () =>
                    (0, a.jsx)(l.z, {
                        onClick: () => {
                            (0, f.O)()
                                .then(() => {
                                    location.reload();
                                })
                                .catch((e) => {});
                        },
                        children: "Reset",
                    }),
                h = () => (0, a.jsx)(l.z, { onClick: () => window.dispatchEvent(new Event("xchat_database_backup_event")), children: "Backup" });
            function y() {
                return (0, a.jsxs)("div", { className: "flex flex-col gap-1 w-full", children: [(0, a.jsx)(c.x, { children: "Please close all other tabs with XChat before hitting Reset" }), (0, a.jsxs)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: [(0, a.jsx)(p, {}), (0, a.jsx)(m.o, {})] }), (0, a.jsx)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: (0, a.jsx)(g.i, {}) }), (0, a.jsx)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: (0, a.jsx)(h, {}) })] });
            }
            const x = () => {
                const [e, t] = (0, u.useState)(!1),
                    { showDebugOptions: n } = (0, d.XE)();
                return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(l.z, { icon: (0, a.jsx)(r.Z, { className: "h-5 w-5" }), variant: "primaryText", onClick: () => t(!0) }), e && (0, a.jsx)(i.s, { isOpen: !0, onOpenChange: t, isDismissable: !0, children: (0, a.jsxs)("div", { className: "flex flex-1 flex-col w-[40rem] h-[40rem] transition-colors", children: [(0, a.jsx)(o.x, { title: "Settings", leftContent: (0, a.jsx)(l.z, { variant: "primaryText", icon: (0, a.jsx)(s.Z, {}), onClick: () => t(!1) }) }), (0, a.jsx)("div", { className: "flex flex-col items-start gap-3 p-4 border-t overflow-y-auto", children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(c.x, { size: "headline2", weight: "bold", children: "Debug Options" }), (0, a.jsx)(y, {})] }) })] }) })] });
            };
        },
        165272: (e, t, n) => {
            n.d(t, { F: () => a });
            const a = () => "dms.x.com" === location.host;
        },
        676337: (e, t, n) => {
            n.d(t, { H: () => r });
            var a = n(202784);
            function r() {
                const [e, t] = (0, a.useState)("visible" === document.visibilityState);
                return (
                    (0, a.useEffect)(() => {
                        const e = () => {
                            t("visible" === document.visibilityState);
                        };
                        return (
                            document.addEventListener("visibilitychange", e),
                            () => {
                                document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, []),
                    e
                );
            }
        },
        176453: (e, t, n) => {
            n.d(t, { N: () => l });
            var a = n(552322),
                r = n(125550),
                s = n(139802);
            const l = ({ groupId: e, token: t, settings: n }) => (e && t ? (0, a.jsx)(s.A, { settings: n, children: (0, a.jsx)(r.M, { groupId: e, token: t }) }) : null);
        },
        671889: (e, t, n) => {
            n.d(t, { g: () => s });
            var a = n(552322),
                r = n(264531);
            function s({ children: e, ...t }) {
                const n = (0, r.XE)().bottomBarHeight;
                return (0, a.jsx)("div", { ...t, style: { paddingBottom: n }, children: e });
            }
        },
        700931: (e, t, n) => {
            n.d(t, { H: () => l });
            var a = n(552322),
                r = n(139802),
                s = n(92184);
            const l = ({ settings: e }) => (0, a.jsx)(r.A, { settings: e, children: (0, a.jsx)(s.p, {}) });
        },
        139802: (e, t, n) => {
            n.d(t, { A: () => h });
            var a = n(552322),
                r = n(446368),
                s = n(455091),
                l = n(19745),
                i = n(202784),
                o = n(107267),
                c = n(134877),
                u = n(968025),
                d = n(727071),
                m = n(768246),
                g = n(264531),
                f = n(155369),
                p = n(173399);
            const h = ({ children: e, settings: t }) => {
                const n = (0, o.useLocation)(),
                    h = (0, o.useHistory)(),
                    [y, x] = (0, i.useState)(new URLSearchParams(n.search)),
                    v = (0, o.useParams)(),
                    { t: w } = (0, s.$G)();
                (0, i.useEffect)(() => {
                    x(new URLSearchParams(n.search));
                }, [n.search]);
                const b = (0, i.useMemo)(() => ({ push: (e, t) => h.push(e, t) }), [h]);
                return (
                    (0, i.useEffect)(() => {
                        (0, p.z)();
                    }, []),
                    (0, a.jsx)(c.S, { message: w("Something went wrong while loading Chat. Please try again later."), children: (0, a.jsx)(u.p, { router: b, children: (0, a.jsx)(r.ng, { children: (0, a.jsx)(d.d, { useParams: () => v, children: (0, a.jsx)(m.x, { searchParams: y, children: (0, a.jsx)(g.mp, { settings: t, children: (0, a.jsxs)(f.U, { children: [e, (0, a.jsx)(l.x, {})] }) }) }) }) }) }) })
                );
            };
        },
        850697: (e, t, n) => {
            n.d(t, { x: () => T });
            var a = n(552322),
                r = n(139802),
                s = n(159603),
                l = n(202784),
                i = n(155369),
                o = n(193686),
                c = n(332161),
                u = n(533476),
                d = n(455091),
                m = n(788452),
                g = n(305399),
                f = n(671889),
                p = n(31674);
            function h({ value: e, onChange: t, digitVisible: n = !1, className: r, length: s = 4, autoFocus: i = !1 }) {
                const o = (0, l.useRef)([]),
                    u = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    o.current = o.current.slice(0, s);
                }, [s]),
                    (0, l.useEffect)(() => {
                        if (!u.current && i && o.current.length > 0) {
                            u.current = !0;
                            let t = 0;
                            for (let n = 0; n < s; n++)
                                if (!e[n]) {
                                    t = n;
                                    break;
                                }
                            o.current[t]?.focus();
                        }
                    }, [s, i, e]);
                const d = (0, l.useCallback)(
                        (n, a) => {
                            if ("Backspace" === n.key)
                                if ((n.preventDefault(), e[a])) {
                                    const n = e.slice(0, a) + e.slice(a + 1);
                                    t(n);
                                } else if (a > 0) {
                                    const n = e.slice(0, a - 1) + e.slice(a);
                                    t(n), o.current[a - 1]?.focus();
                                }
                        },
                        [e, t],
                    ),
                    m = (0, l.useCallback)(
                        (n, a) => {
                            const r = n.target.value;
                            if (r.length > 1) {
                                const e = r.slice(0, s).split(""),
                                    n = e.join("").padEnd(s, "");
                                t(n), o.current[Math.min(e.length, s - 1)]?.focus();
                            } else if (/^\d*$/.test(r)) {
                                const n = e.slice(0, a) + r + e.slice(a + 1);
                                t(n), r && a < s - 1 && o.current[a + 1]?.focus();
                            }
                        },
                        [e, t, s],
                    );
                return (0, a.jsx)("div", {
                    className: (0, p.cn)("flex gap-3", r),
                    children: Array.from({ length: s }).map((t, r) =>
                        (0, a.jsxs)(
                            "div",
                            {
                                className: "relative w-10 h-12",
                                children: [
                                    (0, a.jsx)("input", {
                                        ref: (e) => {
                                            o.current[r] = e;
                                        },
                                        type: "text",
                                        inputMode: "numeric",
                                        pattern: "[0-9]*",
                                        maxLength: 1,
                                        value: "",
                                        onChange: (e) => m(e, r),
                                        onKeyDown: (e) => d(e, r),
                                        className: (0, p.cn)("absolute inset-0 w-full h-full text-transparent caret-primary bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors z-10 text-center", e[r] && "text-left pl-7"),
                                        placeholder: " ",
                                    }),
                                    (0, a.jsx)("div", { className: "absolute inset-0 flex items-center justify-center z-0", children: n ? (0, a.jsx)(c.x, { size: "title4", weight: "bold", children: e[r] || "" }) : (0, a.jsx)("div", { className: "flex items-center justify-center w-full", children: e[r] ? (0, a.jsx)("div", { className: "h-3 w-3 rounded-full bg-text" }) : null }) }),
                                ],
                            },
                            `pin-digit-${r}`,
                        ),
                    ),
                });
            }
            const y = s.com.x.dms.pin.PinEntryTitle,
                x = s.com.x.dms.pin.PinEntrySubtitle,
                v = s.com.x.dms.pin.PinEntryError;
            function w({ component: e }) {
                const { t } = (0, d.$G)();
                const n = (0, g.a)("(max-width: 768px)"),
                    r = (0, u._)(e.state),
                    i = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    i.current && i.current.focus();
                }, []);
                return r.isProcessing
                    ? (0, a.jsx)(f.g, { className: "flex w-full min-h-dvh md:h-dvh items-center", children: (0, a.jsx)(o.P, {}) })
                    : (0, a.jsxs)(f.g, {
                          className: `flex flex-col min-h-dvh md:h-dvh w-full ${n ? "items-start py-12" : "items-center justify-center py-0"} flex-grow gap-4  px-12`,
                          children: [
                              (0, a.jsx)(m.Z, { width: 76, height: 76, className: "rotate-[-8.29deg]" }),
                              (0, a.jsx)(c.x, {
                                  size: "title2",
                                  weight: "bold",
                                  children: (function (e) {
                                      switch (e) {
                                          case y.Create:
                                              return t("Create a 4-digit passcode");
                                          case y.CreateConfirm:
                                              return t("Confirm your passcode");
                                          case y.Recover:
                                          case y.Verify:
                                              return t("Enter your passcode");
                                          case y.Forgot:
                                              return t("Create a new passcode");
                                          case y.ForgotConfirm:
                                              return t("Confirm your new passcode");
                                      }
                                      return "Create a 4-digit passcode";
                                  })(r.title),
                              }),
                              r.subtitle
                                  ? (0, a.jsx)(c.x, {
                                        size: "body",
                                        color: "gray700",
                                        children: (function (e) {
                                            switch (e) {
                                                case x.Create:
                                                    return t("A personal key that secures your messages.");
                                                case x.Recover:
                                                    return t("Your PIN is required to recover your encryption keys so we can decrypt your previous messages.");
                                                case x.Verify:
                                                    return t("To ensure you remember your PIN, we'll request it periodically. These prompts will become less frequent over time.");
                                                case x.Forgot:
                                                    return t("Make sure to remember it, as we will occasionally need you to verify.");
                                            }
                                            return "";
                                        })(r.subtitle),
                                    })
                                  : null,
                              (0, a.jsxs)("div", {
                                  className: "flex flex-col gap-3 " + (n ? "items-start" : "items-center"),
                                  children: [
                                      (0, a.jsx)(
                                          h,
                                          {
                                              value: r.currentPinText,
                                              onChange: (t) => {
                                                  e.handleEvent(new s.com.x.dms.pin.DmPinEntryEvent.OnPinValueChanged(t));
                                              },
                                              length: 4,
                                              autoFocus: !0,
                                              digitVisible: (function (e) {
                                                  switch (e) {
                                                      case y.Create:
                                                      case y.CreateConfirm:
                                                          return !0;
                                                      default:
                                                          return !1;
                                                  }
                                              })(r.title),
                                          },
                                          r.title.toString(),
                                      ),
                                      r.error
                                          ? (0, a.jsx)(c.x, {
                                                size: "subtext1",
                                                weight: "medium",
                                                color: "red500",
                                                children: (function (e) {
                                                    if (e instanceof v.InvalidPin) {
                                                        const n = e.remainingGuesses;
                                                        return n ? t("The PIN you entered was incorrect. After {remainingGuesses} more incorrect attempts, your messages will be locked.", { remainingGuesses: n }) : t("The PIN you entered was incorrect");
                                                    }
                                                    switch (e) {
                                                        case v.PinMismatch:
                                                            return t("The PIN codes did not match. Please start over.");
                                                        case v.NotRegistered:
                                                            return t("Could not find your registration. Please try again later.");
                                                        case v.InvalidAuth:
                                                            return t("Invalid authentication. Please try again.");
                                                        case v.UpgradeRequired:
                                                            return t("Your app is too old to use this feature. Please update.");
                                                        case v.Assertion:
                                                            return t("Something was configured incorrectly. We are looking into it.");
                                                        case v.Transient:
                                                            return t("Something went wrong. Please check your network connection and try again.");
                                                        case v.RateLimitExceeded:
                                                            return t("Rate limit exceeded. Please try again later.");
                                                        case v.PublicKeysFetchFailed:
                                                            return t("Unable to communicate with server. Please check your network connection and try again.");
                                                        case v.KeyReconstructionFailed:
                                                            return t("Unable to recover your keys. We are looking into it.");
                                                        case v.NoJuiceboxTokens:
                                                            return t("No authentication token available. We are looking into it.");
                                                        default:
                                                            return t("An unknown error occurred.");
                                                    }
                                                })(r.error),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      });
            }
            var b = n(379342),
                _ = n(264531),
                k = n(18671),
                j = n(867400),
                S = n(231037);
            const F = s.com.x.dms.pin.PinEntryMode;
            function N({ mode: e }) {
                const [t, n] = (0, l.useState)(null),
                    r = (0, i.n)(),
                    o = (0, b.s)(),
                    { showDebugOptions: u } = (0, _.XE)(),
                    d = (0, j.a)(),
                    m = (0, S.l)();
                return (
                    (0, l.useEffect)(() => {
                        const t = new s.com.x.export.CancellationSignal(),
                            a = r.dmPinEntryComponent(
                                (function (e, t, n) {
                                    switch (e) {
                                        case "recovery":
                                            return F.Recovery;
                                        case "new":
                                            return F.NewKeypair;
                                        case "forgot":
                                            return F.ForgotPin;
                                        case "verify":
                                            return new F.Verify(!!t, !!n);
                                    }
                                })(e, d, m),
                                new s.com.x.dms.pin.DmPinEntryCallbacks(
                                    () => {
                                        o.toClassicInbox();
                                    },
                                    () => {
                                        o.toInbox();
                                    },
                                ),
                                t,
                            );
                        return (
                            n(a),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [r, e, o, d, m]),
                    (0, a.jsxs)(a.Fragment, { children: [u && (0, a.jsx)("div", { className: "absolute top-4 right-4", children: (0, a.jsx)(k.Z, {}) }), null != t ? (0, a.jsx)(w, { component: t }) : (0, a.jsx)(c.x, { children: "Loading" })] })
                );
            }
            const C = ["recovery", "new", "forgot", "verify"],
                T = ({ mode: e, settings: t }) => (C.includes(e) ? (0, a.jsx)(r.A, { settings: t, children: (0, a.jsx)(N, { mode: e }) }) : null);
        },
        664147: (e, t, n) => {
            n.d(t, { e: () => i, i: () => o });
            var a = n(552322),
                r = n(332161),
                s = n(261012),
                l = n(202784);
            const i = "top_cursor",
                o = () => {
                    const [e, t] = (0, l.useState)("true" === localStorage.getItem(i) || !1);
                    return (0, a.jsxs)("div", {
                        className: "flex flex-row items-center gap-1 border border-solid rounded-lg p-2",
                        children: [
                            (0, a.jsx)(r.x, { weight: "bold", color: "gray700", children: "Top cursor" }),
                            (0, a.jsx)(s.r, {
                                checked: e,
                                onCheckedChange: (e) => {
                                    t(e), localStorage.setItem(i, e ? "true" : "false");
                                },
                            }),
                        ],
                    });
                };
        },
        686524: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            const a = {
                fragment: {
                    argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "fetchPostQuery",
                    selections: [
                        {
                            alias: null,
                            args: (s = [
                                { kind: "Variable", name: "rest_id", variableName: "id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: "TweetResults",
                            kind: "LinkedField",
                            name: "tweet_result_by_rest_id",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "result",
                                    plural: !1,
                                    selections: [
                                        (l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                (o = {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "LegacyTweet",
                                                    kind: "LinkedField",
                                                    name: "legacy",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "EntitySet",
                                                            kind: "LinkedField",
                                                            name: "entities",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "ApiMediaEntity",
                                                                    kind: "LinkedField",
                                                                    name: "media",
                                                                    plural: !0,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "media_url_https", storageKey: null },
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "ApiMediaEntityVideoInfo",
                                                                            kind: "LinkedField",
                                                                            name: "video_info",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "duration_millis", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "aspect_ratio", storageKey: null },
                                                                                { alias: null, args: null, concreteType: "ApiMediaEntityVideoVariant", kind: "LinkedField", name: "variants", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "content_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bitrate", storageKey: null }], storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "ext_alt_text", storageKey: null },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                    ],
                                                    storageKey: null,
                                                }),
                                                (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                (u = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "TweetCore",
                                                    kind: "LinkedField",
                                                    name: "core",
                                                    plural: !1,
                                                    selections: [
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "UserResults",
                                                            kind: "LinkedField",
                                                            name: "user_results",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: null,
                                                                    kind: "LinkedField",
                                                                    name: "result",
                                                                    plural: !1,
                                                                    selections: [
                                                                        {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                u,
                                                                                (d = { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null }),
                                                                                (m = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "ApiUser",
                                                                                    kind: "LinkedField",
                                                                                    name: "legacy",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                }),
                                                                                (g = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                                (f = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "HighlightedUserLabelResponse",
                                                                                    kind: "LinkedField",
                                                                                    name: "affiliates_highlighted_label",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: "HighlightedUserLabel",
                                                                                            kind: "LinkedField",
                                                                                            name: "label",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [i], storageKey: null },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                }),
                                                                            ],
                                                                            type: "User",
                                                                            abstractKey: null,
                                                                        },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            type: "Tweet",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: r, kind: "Operation", name: "fetchPostQuery", selections: [{ alias: null, args: s, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [o, c, u, { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [u, d, m, g, f, c], type: "User", abstractKey: null }], storageKey: null }, c], storageKey: null }], storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }, c], storageKey: null }] },
                params: { id: "BrdmgaNbXWZa4D4KLY-hCA", metadata: {}, name: "fetchPostQuery", operationKind: "query", text: null },
            };
            var r, s, l, i, o, c, u, d, m, g, f;
            a.hash = "6b931e47d1ab528a8de40a76cc4aef9e";
            const p = a;
        },
        84504: (e, t, n) => {
            n.d(t, { n5: () => r });
            var a = n(625067);
            function r() {
                const e = (0, a.Qc)(document.cookie);
                return e.twid?.slice(2) || "0";
            }
        },
        842898: (e, t, n) => {
            n.d(t, { S: () => r });
            var a = n(889906);
            async function r(e, t) {
                return (0, a.fetchQuery)(t, s, { id: e }, { fetchPolicy: "store-or-network" })
                    .toPromise()
                    .then((t) => {
                        const n = t?.tweet_result_by_rest_id?.result;
                        if (!n || "Tweet" !== n.__typename) return null;
                        let a, r, s;
                        switch (("Badge" === n.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_display_type && "BusinessLabel" === n.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_type && n.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge && (a = { label: n.core?.user_results?.result?.affiliates_highlighted_label?.label?.description, url: n.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge?.url }), n.core?.user_results?.result?.legacy?.verified_type)) {
                            case "Business":
                                r = "business";
                                break;
                            case "Government":
                                r = "government";
                                break;
                            case "User":
                                r = "user";
                                break;
                            default:
                                r = n.core?.user_results?.result?.is_blue_verified ? "user" : void 0;
                        }
                        return (
                            n.legacy?.entities?.media?.length &&
                                (s = n.legacy.entities.media
                                    .filter((e) => null != e && "string" == typeof e.type && "string" == typeof e.media_url_https && "string" == typeof e.id_str)
                                    .map((e) => {
                                        const t = [...(e.video_info?.variants?.filter((e) => e && "string" == typeof e.url && "string" == typeof e.content_type).map((e) => ({ url: e.url, contentType: e.content_type, bitrate: e.bitrate ?? 0 })) ?? [])].sort((e, t) => (t.bitrate || 0) - (e.bitrate || 0)),
                                            n = ("animated_gif" === e.type || "video" === e.type) && t.length > 0 ? t[0]?.url || e.media_url_https || "" : e.media_url_https || "",
                                            a = null === e.video_info?.duration_millis ? void 0 : e.video_info?.duration_millis,
                                            r = e.media_url_https || "";
                                        return { type: e.type || "", src: n, duration: a, aspectRatio: e.video_info?.aspect_ratio ? Array.from(e.video_info.aspect_ratio) : void 0, altText: e.ext_alt_text ?? void 0, variants: t, previewImage: r };
                                    })),
                            { id: e, text: n.legacy?.full_text, author: { id: n.core?.user_results?.result?.rest_id, name: n.core?.user_results?.result?.legacy?.name, screenName: n.core?.user_results?.result?.legacy?.screen_name, avatar: n.core?.user_results?.result?.legacy?.profile_image_url_https, badges: { affiliation: a, verifiedType: r }, profileImageUrl: n.core?.user_results?.result?.legacy?.profile_image_url_https, profileImageShape: n.core?.user_results?.result?.profile_image_shape?.toLowerCase() }, displayTextRange: n.legacy?.display_text_range, entities: n.legacy?.entities, createdAt: n.legacy?.created_at, media: s }
                        );
                    });
            }
            const s = n(686524);
        },
        336984: (e, t, n) => {
            n.d(t, { r: () => s });
            var a = n(159603);
            const r = (e) => {
                    switch (e) {
                        case a.com.x.models.VerifiedType.User:
                            return "user";
                        case a.com.x.models.VerifiedType.Business:
                            return "business";
                        case a.com.x.models.VerifiedType.Government:
                            return "government";
                        default:
                            return;
                    }
                },
                s = (e) => {
                    if (!e) return;
                    return { affiliation: e.userLabel?.shouldDisplayBadge() && e.userLabel.description && e.userLabel.badgeImageUrl ? { label: e.userLabel.description, url: e.userLabel.badgeImageUrl } : void 0, isProtected: e.isProtected, isSubscriber: e.friendship.isSuperFollowingMe, verifiedType: r(e.verifiedType) };
                };
        },
        173399: (e, t, n) => {
            n.d(t, { O: () => i, z: () => o });
            var a = n(84504);
            async function r(e) {
                return new Promise((t, n) => {
                    const a = setTimeout(() => {
                            n(new Error("Database deletion timeout"));
                        }, 5e3),
                        r = new BroadcastChannel(`${e}_chat`);
                    (r.onmessage = ({ data: e }) => {
                        "before_logout_done" === e?.action && (clearTimeout(a), r.close(), t());
                    }),
                        r.postMessage({ action: "before_logout" }),
                        window.dispatchEvent(new Event("xchat_before_unload_event")),
                        setTimeout(async () => {
                            try {
                                await s(e),
                                    await (async function (e) {
                                        try {
                                            const t = await navigator.storage.getDirectory(),
                                                n = await t.getDirectoryHandle("backups", { create: !0 }),
                                                a = `chat_${e}.db`;
                                            try {
                                                return await n.getFileHandle(a), await n.removeEntry(a), !0;
                                            } catch (e) {
                                                return !1;
                                            }
                                        } catch (e) {
                                            return !1;
                                        }
                                    })(e),
                                    clearTimeout(a),
                                    t();
                            } catch (e) {
                                clearTimeout(a), n(e instanceof Error ? e : new Error("Deletion failed"));
                            }
                        }, 300);
                });
            }
            async function s(e) {
                try {
                    const t = await navigator.storage.getDirectory();
                    for await (const n of t.values())
                        if ("directory" === n.kind && n.name.startsWith(`.${e}_chat_`))
                            try {
                                await t.removeEntry(n.name, { recursive: !0 });
                            } catch (e) {}
                } catch (e) {}
            }
            const l = async () => {
                try {
                    const e = await navigator.storage.getDirectory(),
                        t = await e.getDirectoryHandle("dm-dev-logs", { create: !0 }),
                        n = Date.now() - 1728e5;
                    for await (const [e] of t.entries())
                        try {
                            const a = e.match(/.*-(\d{4}-\d{2}-\d{2})\.txt$/);
                            if (!a) continue;
                            const r = a[1];
                            if (!r) continue;
                            new Date(r).getTime() < n && (await t.removeEntry(e));
                        } catch (e) {}
                } catch (e) {}
            };
            async function i() {
                const e = (0, a.n5)();
                await (async function (e) {
                    try {
                        const t = await navigator.storage.getDirectory();
                        await t.removeEntry(`dm-files-${e}`, { recursive: !0 });
                    } catch (e) {
                        e instanceof DOMException && e.name;
                    }
                })(e),
                    await r(e);
            }
            async function o() {
                const e = (0, a.n5)();
                await s(e), await l();
            }
        },
        167285: (e, t, n) => {
            n.d(t, { H: () => u, S: () => c });
            const a = 3600,
                r = 86400,
                s = 604800,
                l = 2592e3,
                i = { minute: { narrow: "m", long: "minute" }, hour: { narrow: "h", long: "hour" }, day: { narrow: "d", long: "day" }, week: { narrow: "w", long: "week" }, month: { narrow: "mo", long: "month" } },
                o = (e, t, n) => {
                    switch (n) {
                        case "narrow":
                            return i[t][n];
                        case "long": {
                            const a = 1 !== e;
                            return ` ${i[t][n]}${a ? "s" : ""}`;
                        }
                    }
                },
                c = ({ diffSeconds: e, epochSeconds: t, style: n }) => {
                    if (e < 60) return "Now";
                    if (e < a) {
                        const t = Math.floor(e / 60);
                        return `${t}${o(t, "minute", n)}`;
                    }
                    if (e < r) {
                        const t = Math.floor(e / a);
                        return `${t}${o(t, "hour", n)}`;
                    }
                    if (e < s) {
                        const t = Math.floor(e / r);
                        return `${t}${o(t, "day", n)}`;
                    }
                    if (e < l) {
                        const t = Math.floor(e / s);
                        return `${t}${o(t, "week", n)}`;
                    }
                    if (!t || e < 31536e3) {
                        const t = Math.floor(e / l);
                        return `${t}${o(t, "month", n)}`;
                    }
                    return new Date(1e3 * t).toLocaleDateString("en-US");
                },
                u = (e) => new Date(1e3 * e).toLocaleString("en-US", { timeStyle: "short" });
        },
        369962: (e, t, n) => {
            n.d(t, { L: () => a });
            const a = (e) => {
                const t = Math.floor(e / 1e3),
                    n = Math.floor(t / 60),
                    a = Math.floor(n / 60),
                    r = Math.floor(a / 24),
                    s = Math.floor(r / 7),
                    l = (e, t) => `${e} ${t}${1 !== e ? "s" : ""}`;
                return s > 0 ? l(s, "week") : r > 0 ? l(r, "day") : a > 0 ? l(a, "hour") : n > 0 ? l(n, "minute") : l(t, "second");
            };
        },
        595117: (e, t, n) => {
            n.d(t, { $: () => s });
            const a = "temp-files";
            async function r(e) {
                const t = await navigator.storage.getDirectory(),
                    n = await t.getDirectoryHandle(a, { create: !0 }),
                    r = (function (e) {
                        return `${Date.now()}-${e}`.replace(/\s/g, "_");
                    })(e.name),
                    s = await n.getFileHandle(r, { create: !0 }),
                    l = await s.createWritable();
                return await l.write(e), await l.close(), `${a}/${r}`;
            }
            async function s(e, t, n) {
                try {
                    t();
                    n(await r(e));
                } catch (e) {}
            }
        },
        950849: (e, t, n) => {
            n.d(t, { E: () => r });
            var a = n(202784);
            const r = (e, t) => {
                (0, a.useEffect)(() => {
                    const n = e.subscribe(t);
                    return () => {
                        n.cancel();
                    };
                }, [e, t]);
            };
        },
        748055: (e, t, n) => {
            n.d(t, { F: () => s });
            var a = n(202784),
                r = n(595117);
            function s({ onFileDrop: e, onFileAttached: t, isEnabled: n }) {
                const [s, l] = (0, a.useState)(!1);
                return {
                    isDragging: s,
                    handleDragOver: (0, a.useCallback)(
                        (e) => {
                            e.preventDefault(), e.stopPropagation(), n && l(!0);
                        },
                        [n],
                    ),
                    handleDragLeave: (0, a.useCallback)((e) => {
                        e.preventDefault(), e.stopPropagation(), l(!1);
                    }, []),
                    handleDrop: (0, a.useCallback)(
                        async (a) => {
                            if ((a.preventDefault(), a.stopPropagation(), l(!1), !n)) return;
                            const s = a.dataTransfer.files[0];
                            s && (await (0, r.$)(s, e, t));
                        },
                        [n, e, t],
                    ),
                };
            }
        },
        533476: (e, t, n) => {
            n.d(t, { _: () => r });
            var a = n(202784);
            function r(e) {
                const [t, n] = (0, a.useState)(e.state);
                return (
                    (0, a.useEffect)(() => {
                        const t = e.subscribe(n);
                        return () => {
                            t.cancel();
                        };
                    }, [e]),
                    t
                );
            }
        },
        658358: (e, t, n) => {
            n.d(t, { e: () => d });
            var a = n(159603),
                r = n(256958),
                s = n(202784);
            const l = a.com.x.dms.composer.composer.ComposerToastType,
                i = a.com.x.dms.convinfo.ConversationInfoToast,
                o = a.com.x.dms.ParticipantMenuItem,
                c = a.com.x.dms.newdm.NewDmToast,
                u = a.com.x.dms.addparticipants.AddGroupParticipantsToastType;
            function d(e) {
                (0, s.useEffect)(() => {
                    const t = e.subscribe((e) => {
                        const t = (function (e) {
                            switch (e) {
                                case l.ATTACHMENT_FAILED:
                                    return "Unable to load attachment";
                                case l.EDIT_MESSAGE_FAILED:
                                    return "Edit failed. Please try again later.";
                                case i.ResignAdminFailed:
                                    return "Unable to resign as Admin";
                                case i.DeleteConversationFailed:
                                    return "Unable to delete conversation";
                                case i.LeaveGroupFailed:
                                    return "Unable to leave conversation";
                                case c.FetchError:
                                    return "An error occurred";
                                case c.CreateGroupFailed:
                                    return "Unable to create group";
                                case c.CreateOneOnOneFailed:
                                    return "Unable to start conversation.";
                            }
                            if (e instanceof a.com.x.dms.convinfo.ConversationInfoToast.ParticipantMenuItemFailed)
                                switch (e.item) {
                                    case o.AddAsAdmin:
                                        return "Unable to add user as Admin";
                                    case o.RemoveAsAdmin:
                                        return "Unable to remove user as Admin";
                                    case o.RemoveFromGroup:
                                        return "Unable to remove user from group";
                                }
                            if (e instanceof u)
                                switch (e.name) {
                                    case "ADD_PARTICIPANTS_FAILURE":
                                        return "Unable to add user";
                                    case "SEARCH_FAILURE":
                                        return "Something went wrong while searching";
                                    case "TOO_MANY_MEMBERS":
                                        return "Unable to add user. Too many members";
                                }
                            return null;
                        })(e);
                        t && (0, r.Am)(t);
                    });
                    return () => {
                        t.cancel();
                    };
                }, [e]);
            }
        },
        858108: (e, t, n) => {
            function a() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }
            n.d(t, { G: () => a });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f141c2f6.b09a8cca.js.map
