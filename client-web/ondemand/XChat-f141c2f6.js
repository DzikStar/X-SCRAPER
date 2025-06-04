"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f141c2f6"],
    {
        272795: (e, t, a) => {
            a.d(t, { c: () => o });
            var n = a(552322),
                r = a(159603),
                s = a(941204),
                l = a(466285),
                i = a(759746);
            const o = ({ onClick: e, isSelected: t, suggestion: a }) => (a instanceof r.com.x.dms.NewDmSuggestion.User ? (0, n.jsx)(l.a, { onClick: e, isSelected: t, user: a.user }) : a instanceof r.com.x.dms.NewDmSuggestion.ExistingGroup ? (0, n.jsxs)("div", { className: "flex flex-row w-full gap-2 p-2 items-center hover:bg-gray-50 cursor-pointer rounded-lg", onClick: e, children: [(0, n.jsx)(i.M, { avatarSize: "large", users: a.otherUsers.asJsReadonlyArrayView(), isInlineFacepile: !0 }), (0, n.jsxs)("div", { className: "flex-1 flex-col", children: [(0, n.jsx)(s.x, { children: a.title }), (0, n.jsxs)(s.x, { size: "subtext2", color: "gray700", children: [a.numParticipants, " people"] })] })] }, a.id) : (0, n.jsx)(n.Fragment, {}));
        },
        466285: (e, t, a) => {
            a.d(t, { a: () => u });
            var n = a(552322),
                r = a(159603),
                s = a(256958),
                l = a(703612),
                i = a(242782),
                o = a(350311),
                c = a(336984);
            const u = ({ onClick: e, isSelected: t, isAlreadyParticipant: a, user: u }) => {
                const d = a || !!u.cannotMessageReason;
                return (0, n.jsxs)(
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
                        children: [(0, n.jsx)(o.s, { url: u.profileImageUrl, size: "xLarge" }), (0, n.jsx)("div", { className: "flex-1", children: (0, n.jsx)(l.R, { name: u.displayName, screenName: u.screenName, badges: (0, c.r)(u), isStacked: !0 }) }), t && (0, n.jsx)("div", { className: "justify-self-end", children: (0, n.jsx)(i.Z, { className: "text-blue-500" }) })],
                    },
                    u.screenName,
                );
            };
        },
        620134: (e, t, a) => {
            a.d(t, { w: () => i });
            var n = a(552322),
                r = a(350311),
                s = a(703612),
                l = a(887491);
            const i = ({ name: e, avatarUrl: t, onRemove: a }) => (0, n.jsxs)("div", { className: "flex items-center rounded-full px-2 py-1 gap-1.5 bg-gray-50 hover:bg-mix-text border border-gray-200 max-w-fit cursor-pointer", onClick: a, children: [(0, n.jsx)(r.s, { url: t, size: "small" }), (0, n.jsx)(s.R, { name: e, size: "subtext1" }), (0, n.jsx)(l.Z, { className: "size-4" })] });
        },
        517922: (e, t, a) => {
            a.d(t, { C: () => s });
            var n = a(552322),
                r = a(702024);
            function s() {
                return (0, n.jsx)("div", { className: "flex items-center gap-2 p-4 bg-gray-100", children: (0, n.jsx)(r.P, { size: "small" }) });
            }
        },
        556160: (e, t, a) => {
            a.d(t, { K: () => u });
            var n = a(552322),
                r = a(130844),
                s = a(26429),
                l = a(703612),
                i = a(559274),
                o = a(862399),
                c = a(796309);
            function u({ post: e, url: t, className: a }) {
                const u = e.post;
                return (0, n.jsxs)(r.r, { href: t, target: "_blank", className: (0, c.cn)("flex flex-col gap-2 h-full w-full border border-gray-200 py-2 px-4 cursor-pointer hover:bg-gray-50/50 transition-colors duration-100", a), children: [(0, n.jsxs)("div", { className: "flex gap-2 items-center", children: [(0, n.jsx)(s.q, { screenName: u.author.screenName, size: "small", url: u.author.profileImageUrl, withLink: !1, shape: u.author.profileImageShape, className: "size-5 shrink-0" }), (0, n.jsxs)("div", { className: "flex items-center gap-1 w-full", children: [(0, n.jsx)(l.R, { badges: u.author.badges, name: u.author.name, size: "subtext1", withLink: !1, screenNameColor: "gray800", screenName: u.author.screenName, isStacked: !1 }), (0, n.jsx)("div", { className: "shrink-0 size-0.5 bg-text/40 rounded-full" }), (0, n.jsx)("div", { className: "shrink-0", children: (0, n.jsx)(i.E, { timestamp: u.createdAt, size: "subtext1", color: "gray800" }) })] })] }), (0, n.jsx)(o.W, { text: u.text, displayTextRange: u.displayTextRange, entities: u.entities })] });
            }
        },
        537335: (e, t, a) => {
            a.d(t, { Q: () => l });
            var n = a(552322),
                r = a(202784),
                s = a(167285);
            const l = ({ timestamp: e, updateIntervalMs: t = 3e4 }) => {
                const [a, l] = (0, r.useState)(Date.now() / 1e3 - e.epochSeconds),
                    i = (0, r.useCallback)(() => {
                        l(Date.now() / 1e3 - e.epochSeconds);
                    }, [e]);
                return (
                    (0, r.useEffect)(() => {
                        i();
                        const e = setInterval(i, t);
                        return () => clearInterval(e);
                    }, [t, i]),
                    (0, n.jsx)(n.Fragment, { children: (0, s.S)({ diffSeconds: a, epochSeconds: e.epochSeconds, style: "narrow" }) })
                );
            };
        },
        910299: (e, t, a) => {
            a.d(t, { r: () => i });
            var n = a(552322),
                r = a(159603),
                s = a(941204),
                l = a(32161);
            const i = ({ conversations: e, onEvent: t }) =>
                (0, n.jsx)("div", {
                    className: "flex overflow-x-auto scrollbar-hide",
                    children: e.map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: "flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-lg py-2 px-3",
                                onClick: () => {
                                    t(new r.com.x.dms.convlist.ConversationListEvent.RowClicked(e.conversationId, e.preview?.lastReadSequenceNumber));
                                },
                                children: [(0, n.jsx)("div", { className: "size-14", children: (0, n.jsx)(l.x, { avatarSize: "fill", titleState: e.metadata.title, isInlineFacepile: !0, onCustomAvatarNeedsResolving: () => {} }) }), (0, n.jsx)(s.x, { size: "subtext3", className: "mt-2 text-center text-ellipsis max-w-14", numberOfLines: 2, children: e.metadata.title.title })],
                            },
                            e.conversationId.id,
                        ),
                    ),
                });
        },
        18671: (e, t, a) => {
            a.d(t, { Z: () => x });
            var n = a(552322),
                r = a(849436),
                s = a(458872),
                l = a(436059),
                i = a(844098),
                o = a(130629),
                c = a(941204),
                u = a(202784),
                d = a(264531),
                m = a(718278),
                g = a(664147),
                f = a(173399);
            const h = () =>
                    (0, n.jsx)(l.z, {
                        onClick: () => {
                            (0, f.O)()
                                .then(() => {
                                    location.reload();
                                })
                                .catch((e) => {});
                        },
                        children: "Reset",
                    }),
                p = () => (0, n.jsx)(l.z, { onClick: () => window.dispatchEvent(new Event("xchat_database_backup_event")), children: "Backup" });
            function y() {
                return (0, n.jsxs)("div", { className: "flex flex-col gap-1 w-full", children: [(0, n.jsx)(c.x, { children: "Please close all other tabs with XChat before hitting Reset" }), (0, n.jsxs)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: [(0, n.jsx)(h, {}), (0, n.jsx)(m.o, {})] }), (0, n.jsx)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: (0, n.jsx)(g.i, {}) }), (0, n.jsx)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: (0, n.jsx)(p, {}) })] });
            }
            const x = () => {
                const [e, t] = (0, u.useState)(!1),
                    { showDebugOptions: a } = (0, d.XE)();
                return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(l.z, { icon: (0, n.jsx)(r.Z, { className: "h-5 w-5" }), variant: "primaryText", onClick: () => t(!0) }), e && (0, n.jsx)(i.s, { isOpen: !0, onOpenChange: t, isDismissable: !0, children: (0, n.jsxs)("div", { className: "flex flex-1 flex-col w-[40rem] h-[40rem] transition-colors", children: [(0, n.jsx)(o.x, { title: "Settings", leftContent: (0, n.jsx)(l.z, { variant: "primaryText", icon: (0, n.jsx)(s.Z, {}), onClick: () => t(!1) }) }), (0, n.jsx)("div", { className: "flex flex-col items-start gap-3 p-4 border-t overflow-y-auto", children: a && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(c.x, { size: "headline2", weight: "bold", children: "Debug Options" }), (0, n.jsx)(y, {})] }) })] }) })] });
            };
        },
        676337: (e, t, a) => {
            a.d(t, { H: () => r });
            var n = a(202784);
            function r() {
                const [e, t] = (0, n.useState)("visible" === document.visibilityState);
                return (
                    (0, n.useEffect)(() => {
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
        176453: (e, t, a) => {
            a.d(t, { N: () => l });
            var n = a(552322),
                r = a(125550),
                s = a(139802);
            const l = ({ groupId: e, token: t, settings: a }) => (e && t ? (0, n.jsx)(s.A, { settings: a, children: (0, n.jsx)(r.M, { groupId: e, token: t }) }) : null);
        },
        671889: (e, t, a) => {
            a.d(t, { g: () => s });
            var n = a(552322),
                r = a(264531);
            function s({ children: e, ...t }) {
                const a = (0, r.XE)().bottomBarHeight;
                return (0, n.jsx)("div", { ...t, style: { paddingBottom: a }, children: e });
            }
        },
        700931: (e, t, a) => {
            a.d(t, { H: () => l });
            var n = a(552322),
                r = a(139802),
                s = a(92184);
            const l = ({ settings: e }) => (0, n.jsx)(r.A, { settings: e, children: (0, n.jsx)(s.p, {}) });
        },
        139802: (e, t, a) => {
            a.d(t, { A: () => p });
            var n = a(552322),
                r = a(446368),
                s = a(455091),
                l = a(668781),
                i = a(202784),
                o = a(107267),
                c = a(134877),
                u = a(968025),
                d = a(727071),
                m = a(768246),
                g = a(264531),
                f = a(155369),
                h = a(173399);
            const p = ({ children: e, settings: t }) => {
                const a = (0, o.useLocation)(),
                    p = (0, o.useHistory)(),
                    [y, x] = (0, i.useState)(new URLSearchParams(a.search)),
                    v = (0, o.useParams)(),
                    { t: b } = (0, s.$G)();
                (0, i.useEffect)(() => {
                    x(new URLSearchParams(a.search));
                }, [a.search]);
                const w = (0, i.useMemo)(() => ({ push: (e, t) => p.push(e, t) }), [p]);
                return (
                    (0, i.useEffect)(() => {
                        (0, h.z)();
                    }, []),
                    (0, n.jsx)(c.S, { message: b("Something went wrong while loading Chat. Please try again later."), children: (0, n.jsx)(u.p, { router: w, children: (0, n.jsx)(r.ng, { children: (0, n.jsx)(d.d, { useParams: () => v, children: (0, n.jsx)(m.x, { searchParams: y, children: (0, n.jsx)(g.mp, { settings: t, children: (0, n.jsxs)(f.U, { children: [e, (0, n.jsx)(l.x, {})] }) }) }) }) }) }) })
                );
            };
        },
        850697: (e, t, a) => {
            a.d(t, { x: () => C });
            var n = a(552322),
                r = a(139802),
                s = a(159603),
                l = a(202784),
                i = a(155369),
                o = a(702024),
                c = a(941204),
                u = a(533476),
                d = a(455091),
                m = a(788452),
                g = a(469745),
                f = a(671889),
                h = a(796309);
            function p({ value: e, onChange: t, digitVisible: a = !1, className: r, length: s = 4, autoFocus: i = !1 }) {
                const o = (0, l.useRef)([]),
                    u = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    o.current = o.current.slice(0, s);
                }, [s]),
                    (0, l.useEffect)(() => {
                        if (!u.current && i && o.current.length > 0) {
                            u.current = !0;
                            let t = 0;
                            for (let a = 0; a < s; a++)
                                if (!e[a]) {
                                    t = a;
                                    break;
                                }
                            o.current[t]?.focus();
                        }
                    }, [s, i, e]);
                const d = (0, l.useCallback)(
                        (a, n) => {
                            if ("Backspace" === a.key)
                                if ((a.preventDefault(), e[n])) {
                                    const a = e.slice(0, n) + e.slice(n + 1);
                                    t(a);
                                } else if (n > 0) {
                                    const a = e.slice(0, n - 1) + e.slice(n);
                                    t(a), o.current[n - 1]?.focus();
                                }
                        },
                        [e, t],
                    ),
                    m = (0, l.useCallback)(
                        (a, n) => {
                            const r = a.target.value;
                            if (r.length > 1) {
                                const e = r.slice(0, s).split(""),
                                    a = e.join("").padEnd(s, "");
                                t(a), o.current[Math.min(e.length, s - 1)]?.focus();
                            } else if (/^\d*$/.test(r)) {
                                const a = e.slice(0, n) + r + e.slice(n + 1);
                                t(a), r && n < s - 1 && o.current[n + 1]?.focus();
                            }
                        },
                        [e, t, s],
                    );
                return (0, n.jsx)("div", {
                    className: (0, h.cn)("flex gap-3", r),
                    children: Array.from({ length: s }).map((t, r) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: "relative w-10 h-12",
                                children: [
                                    (0, n.jsx)("input", {
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
                                        className: (0, h.cn)("absolute inset-0 w-full h-full text-transparent caret-primary bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors z-10 text-center", e[r] && "text-left pl-7"),
                                        placeholder: " ",
                                    }),
                                    (0, n.jsx)("div", { className: "absolute inset-0 flex items-center justify-center z-0", children: a ? (0, n.jsx)(c.x, { size: "title4", weight: "bold", children: e[r] || "" }) : (0, n.jsx)("div", { className: "flex items-center justify-center w-full", children: e[r] ? (0, n.jsx)("div", { className: "h-3 w-3 rounded-full bg-text" }) : null }) }),
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
            function b({ component: e }) {
                const { t } = (0, d.$G)();
                const a = (0, g.a)("(max-width: 768px)"),
                    r = (0, u._)(e.state),
                    i = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    i.current && i.current.focus();
                }, []);
                return r.isProcessing
                    ? (0, n.jsx)(f.g, { className: "flex w-full min-h-dvh md:h-dvh items-center", children: (0, n.jsx)(o.P, {}) })
                    : (0, n.jsxs)(f.g, {
                          className: `flex flex-col min-h-dvh md:h-dvh w-full ${a ? "items-start" : "items-center"} flex-grow gap-4 py-12 px-12`,
                          children: [
                              (0, n.jsx)(m.Z, { width: 76, height: 76, className: "rotate-[-8.29deg]" }),
                              (0, n.jsx)(c.x, {
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
                                  ? (0, n.jsx)(c.x, {
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
                              (0, n.jsxs)("div", {
                                  className: "flex flex-col gap-3 " + (a ? "items-start" : "items-center"),
                                  children: [
                                      (0, n.jsx)(
                                          p,
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
                                          ? (0, n.jsx)(c.x, {
                                                size: "subtext1",
                                                weight: "medium",
                                                color: "red500",
                                                children: (function (e) {
                                                    if (e instanceof v.InvalidPin) {
                                                        const a = e.remainingGuesses;
                                                        return a ? t("The PIN you entered was incorrect. After {remainingGuesses} more incorrect attempts, your messages will be locked.", { remainingGuesses: a }) : t("The PIN you entered was incorrect");
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
            var w = a(379342),
                k = a(264531),
                _ = a(18671),
                j = a(867400),
                S = a(231037);
            const F = s.com.x.dms.pin.PinEntryMode;
            function N({ mode: e }) {
                const [t, a] = (0, l.useState)(null),
                    r = (0, i.n)(),
                    o = (0, w.s)(),
                    { showDebugOptions: u } = (0, k.XE)(),
                    d = (0, j.a)(),
                    m = (0, S.l)();
                return (
                    (0, l.useEffect)(() => {
                        const t = new s.com.x.export.CancellationSignal(),
                            n = r.dmPinEntryComponent(
                                (function (e, t, a) {
                                    switch (e) {
                                        case "recovery":
                                            return F.Recovery;
                                        case "new":
                                            return F.NewKeypair;
                                        case "forgot":
                                            return F.ForgotPin;
                                        case "verify":
                                            return new F.Verify(!!t, !!a);
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
                            a(n),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [r, e, o, d, m]),
                    (0, n.jsxs)(n.Fragment, { children: [u && (0, n.jsx)("div", { className: "absolute top-4 right-4", children: (0, n.jsx)(_.Z, {}) }), null != t ? (0, n.jsx)(b, { component: t }) : (0, n.jsx)(c.x, { children: "Loading" })] })
                );
            }
            const T = ["recovery", "new", "forgot", "verify"],
                C = ({ mode: e, settings: t }) => (T.includes(e) ? (0, n.jsx)(r.A, { settings: t, children: (0, n.jsx)(N, { mode: e }) }) : null);
        },
        664147: (e, t, a) => {
            a.d(t, { e: () => i, i: () => o });
            var n = a(552322),
                r = a(941204),
                s = a(849335),
                l = a(202784);
            const i = "top_cursor",
                o = () => {
                    const [e, t] = (0, l.useState)("true" === localStorage.getItem(i) || !1);
                    return (0, n.jsxs)("div", {
                        className: "flex flex-row items-center gap-1 border border-solid rounded-lg p-2",
                        children: [
                            (0, n.jsx)(r.x, { weight: "bold", color: "gray700", children: "Top cursor" }),
                            (0, n.jsx)(s.r, {
                                checked: e,
                                onCheckedChange: (e) => {
                                    t(e), localStorage.setItem(i, e ? "true" : "false");
                                },
                            }),
                        ],
                    });
                };
        },
        686524: (e, t, a) => {
            a.r(t), a.d(t, { default: () => h });
            const n = {
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
            n.hash = "6b931e47d1ab528a8de40a76cc4aef9e";
            const h = n;
        },
        84504: (e, t, a) => {
            a.d(t, { n5: () => r });
            var n = a(625067);
            function r() {
                const e = (0, n.Qc)(document.cookie);
                return e.twid?.slice(2) || "0";
            }
        },
        842898: (e, t, a) => {
            a.d(t, { S: () => r });
            var n = a(889906);
            async function r(e, t) {
                return (0, n.fetchQuery)(t, s, { id: e }, { fetchPolicy: "store-or-network" })
                    .toPromise()
                    .then((t) => {
                        const a = t?.tweet_result_by_rest_id?.result;
                        if (!a || "Tweet" !== a.__typename) return null;
                        let n, r;
                        switch (("Badge" === a.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_display_type && "BusinessLabel" === a.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_type && a.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge && (n = { label: a.core?.user_results?.result?.affiliates_highlighted_label?.label?.description, url: a.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge?.url }), a.core?.user_results?.result?.legacy?.verified_type)) {
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
                                r = a.core?.user_results?.result?.is_blue_verified ? "user" : void 0;
                        }
                        return { id: e, text: a.legacy?.full_text, author: { id: a.core?.user_results?.result?.rest_id, name: a.core?.user_results?.result?.legacy?.name, screenName: a.core?.user_results?.result?.legacy?.screen_name, avatar: a.core?.user_results?.result?.legacy?.profile_image_url_https, badges: { affiliation: n, verifiedType: r }, profileImageUrl: a.core?.user_results?.result?.legacy?.profile_image_url_https, profileImageShape: a.core?.user_results?.result?.profile_image_shape?.toLowerCase() }, displayTextRange: a.legacy?.display_text_range, entities: a.legacy?.entities, createdAt: a.legacy?.created_at };
                    });
            }
            const s = a(686524);
        },
        336984: (e, t, a) => {
            a.d(t, { r: () => s });
            var n = a(159603);
            const r = (e) => {
                    switch (e) {
                        case n.com.x.models.VerifiedType.User:
                            return "user";
                        case n.com.x.models.VerifiedType.Business:
                            return "business";
                        case n.com.x.models.VerifiedType.Government:
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
        173399: (e, t, a) => {
            a.d(t, { O: () => i, z: () => o });
            var n = a(84504);
            async function r(e) {
                return new Promise((t, a) => {
                    const n = setTimeout(() => {
                            a(new Error("Database deletion timeout"));
                        }, 5e3),
                        r = new BroadcastChannel(`${e}_chat`);
                    (r.onmessage = ({ data: e }) => {
                        "before_logout_done" === e?.action && (clearTimeout(n), r.close(), t());
                    }),
                        r.postMessage({ action: "before_logout" }),
                        window.dispatchEvent(new Event("xchat_before_unload_event")),
                        setTimeout(async () => {
                            try {
                                await s(e),
                                    await (async function (e) {
                                        try {
                                            const t = await navigator.storage.getDirectory(),
                                                a = await t.getDirectoryHandle("backups", { create: !0 }),
                                                n = `chat_${e}.db`;
                                            try {
                                                return await a.getFileHandle(n), await a.removeEntry(n), !0;
                                            } catch (e) {
                                                return !1;
                                            }
                                        } catch (e) {
                                            return !1;
                                        }
                                    })(e),
                                    clearTimeout(n),
                                    t();
                            } catch (e) {
                                clearTimeout(n), a(e instanceof Error ? e : new Error("Deletion failed"));
                            }
                        }, 300);
                });
            }
            async function s(e) {
                try {
                    const t = await navigator.storage.getDirectory();
                    for await (const a of t.values())
                        if ("directory" === a.kind && a.name.startsWith(`.${e}_chat_`))
                            try {
                                await t.removeEntry(a.name, { recursive: !0 });
                            } catch (e) {}
                } catch (e) {}
            }
            const l = async () => {
                try {
                    const e = await navigator.storage.getDirectory(),
                        t = await e.getDirectoryHandle("dm-dev-logs", { create: !0 }),
                        a = Date.now() - 1728e5;
                    for await (const [e] of t.entries())
                        try {
                            const n = e.match(/.*-(\d{4}-\d{2}-\d{2})\.txt$/);
                            if (!n) continue;
                            const r = n[1];
                            if (!r) continue;
                            new Date(r).getTime() < a && (await t.removeEntry(e));
                        } catch (e) {}
                } catch (e) {}
            };
            async function i() {
                const e = (0, n.n5)();
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
                const e = (0, n.n5)();
                await s(e), await l();
            }
        },
        167285: (e, t, a) => {
            a.d(t, { H: () => u, S: () => c });
            const n = 3600,
                r = 86400,
                s = 604800,
                l = 2592e3,
                i = { minute: { narrow: "m", long: "minute" }, hour: { narrow: "h", long: "hour" }, day: { narrow: "d", long: "day" }, week: { narrow: "w", long: "week" }, month: { narrow: "mo", long: "month" } },
                o = (e, t, a) => {
                    switch (a) {
                        case "narrow":
                            return i[t][a];
                        case "long": {
                            const n = 1 !== e;
                            return ` ${i[t][a]}${n ? "s" : ""}`;
                        }
                    }
                },
                c = ({ diffSeconds: e, epochSeconds: t, style: a }) => {
                    if (e < 60) return "Now";
                    if (e < n) {
                        const t = Math.floor(e / 60);
                        return `${t}${o(t, "minute", a)}`;
                    }
                    if (e < r) {
                        const t = Math.floor(e / n);
                        return `${t}${o(t, "hour", a)}`;
                    }
                    if (e < s) {
                        const t = Math.floor(e / r);
                        return `${t}${o(t, "day", a)}`;
                    }
                    if (e < l) {
                        const t = Math.floor(e / s);
                        return `${t}${o(t, "week", a)}`;
                    }
                    if (!t || e < 31536e3) {
                        const t = Math.floor(e / l);
                        return `${t}${o(t, "month", a)}`;
                    }
                    return new Date(1e3 * t).toLocaleDateString("en-US");
                },
                u = (e) => new Date(1e3 * e).toLocaleString("en-US", { timeStyle: "short" });
        },
        369962: (e, t, a) => {
            a.d(t, { L: () => n });
            const n = (e) => {
                const t = Math.floor(e / 1e3),
                    a = Math.floor(t / 60),
                    n = Math.floor(a / 60),
                    r = Math.floor(n / 24),
                    s = Math.floor(r / 7),
                    l = (e, t) => `${e} ${t}${1 !== e ? "s" : ""}`;
                return s > 0 ? l(s, "week") : r > 0 ? l(r, "day") : n > 0 ? l(n, "hour") : a > 0 ? l(a, "minute") : l(t, "second");
            };
        },
        595117: (e, t, a) => {
            a.d(t, { $: () => s });
            const n = "temp-files";
            async function r(e) {
                const t = await navigator.storage.getDirectory(),
                    a = await t.getDirectoryHandle(n, { create: !0 }),
                    r = (function (e) {
                        return `${Date.now()}-${e}`.replace(/\s/g, "_");
                    })(e.name),
                    s = await a.getFileHandle(r, { create: !0 }),
                    l = await s.createWritable();
                return await l.write(e), await l.close(), `${n}/${r}`;
            }
            async function s(e, t, a) {
                try {
                    t();
                    a(await r(e));
                } catch (e) {}
            }
        },
        950849: (e, t, a) => {
            a.d(t, { E: () => r });
            var n = a(202784);
            const r = (e, t) => {
                (0, n.useEffect)(() => {
                    const a = e.subscribe(t);
                    return () => {
                        a.cancel();
                    };
                }, [e, t]);
            };
        },
        748055: (e, t, a) => {
            a.d(t, { F: () => s });
            var n = a(202784),
                r = a(595117);
            function s({ onFileDrop: e, onFileAttached: t, isEnabled: a }) {
                const [s, l] = (0, n.useState)(!1);
                return {
                    isDragging: s,
                    handleDragOver: (0, n.useCallback)(
                        (e) => {
                            e.preventDefault(), e.stopPropagation(), a && l(!0);
                        },
                        [a],
                    ),
                    handleDragLeave: (0, n.useCallback)((e) => {
                        e.preventDefault(), e.stopPropagation(), l(!1);
                    }, []),
                    handleDrop: (0, n.useCallback)(
                        async (n) => {
                            if ((n.preventDefault(), n.stopPropagation(), l(!1), !a)) return;
                            const s = n.dataTransfer.files[0];
                            s && (await (0, r.$)(s, e, t));
                        },
                        [a, e, t],
                    ),
                };
            }
        },
        533476: (e, t, a) => {
            a.d(t, { _: () => r });
            var n = a(202784);
            function r(e) {
                const [t, a] = (0, n.useState)(e.state);
                return (
                    (0, n.useEffect)(() => {
                        const t = e.subscribe(a);
                        return () => {
                            t.cancel();
                        };
                    }, [e]),
                    t
                );
            }
        },
        658358: (e, t, a) => {
            a.d(t, { e: () => d });
            var n = a(159603),
                r = a(256958),
                s = a(202784);
            const l = n.com.x.dms.composer.composer.ComposerToastType,
                i = n.com.x.dms.convinfo.ConversationInfoToast,
                o = n.com.x.dms.ParticipantMenuItem,
                c = n.com.x.dms.newdm.NewDmToast,
                u = n.com.x.dms.addparticipants.AddGroupParticipantsToastType;
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
                            if (e instanceof n.com.x.dms.convinfo.ConversationInfoToast.ParticipantMenuItemFailed)
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
        858108: (e, t, a) => {
            function n() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }
            a.d(t, { G: () => n });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f141c2f6.430a9aaa.js.map
