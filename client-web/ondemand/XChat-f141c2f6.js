"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f141c2f6"],
    {
        272795: (e, s, r) => {
            r.d(s, { c: () => c });
            var t = r(552322),
                n = r(159603),
                a = r(941204),
                i = r(759746),
                o = r(466285);
            const c = ({ onClick: e, isSelected: s, suggestion: r }) => (r instanceof n.com.x.dms.NewDmSuggestion.User ? (0, t.jsx)(o.a, { onClick: e, isSelected: s, user: r.user }) : r instanceof n.com.x.dms.NewDmSuggestion.ExistingGroup ? (0, t.jsxs)("div", { className: "flex flex-row w-full gap-2 p-2 items-center hover:bg-gray-50 cursor-pointer", onClick: e, children: [(0, t.jsx)(i.M, { avatarSize: "large", users: r.otherUsers.asJsReadonlyArrayView(), isInlineFacepile: !0 }), (0, t.jsxs)("div", { className: "flex-1 flex-col", children: [(0, t.jsx)(a.x, { children: r.title }), (0, t.jsxs)(a.x, { size: "subtext2", color: "gray700", children: [r.numParticipants, " people"] })] })] }, r.id) : (0, t.jsx)(t.Fragment, {}));
        },
        466285: (e, s, r) => {
            r.d(s, { a: () => u });
            var t = r(552322),
                n = r(159603),
                a = r(256958),
                i = r(964655),
                o = r(266917),
                c = r(350311),
                l = r(336984);
            const u = ({ onClick: e, isSelected: s, isAlreadyParticipant: r, user: u }) => {
                const d = r || !!u.cannotMessageReason;
                return (0, t.jsxs)(
                    "div",
                    {
                        className: "flex flex-row w-full gap-3 p-2 items-center " + (d ? "opacity-20" : "hover:bg-gray-50 cursor-pointer"),
                        onClick: () => {
                            e();
                            const s = ((e) => {
                                switch (e) {
                                    case n.com.x.models.dm.CannotMessageReason.NO_PUBLIC_KEY:
                                        return "This account must set up their PIN before you're able to message them.";
                                    case n.com.x.models.dm.CannotMessageReason.NO_PERMISSION:
                                        return "Sorry! You cannot message this account.";
                                }
                                return null;
                            })(u.cannotMessageReason);
                            s && (0, a.Am)(s);
                        },
                        "aria-disabled": d,
                        children: [(0, t.jsx)(c.s, { url: u.profileImageUrl, size: "large" }), (0, t.jsx)("div", { className: "flex-1", children: (0, t.jsx)(i.R, { name: u.displayName, screenName: u.screenName, badges: (0, l.r)(u), isStacked: !0 }) }), s && (0, t.jsx)("div", { className: "justify-self-end", children: (0, t.jsx)(o.Z, { className: "text-blue-500" }) })],
                    },
                    u.screenName,
                );
            };
        },
        620134: (e, s, r) => {
            r.d(s, { w: () => o });
            var t = r(552322),
                n = r(350311),
                a = r(964655),
                i = r(952333);
            const o = ({ name: e, avatarUrl: s, onRemove: r }) => (0, t.jsxs)("div", { className: "flex items-center rounded-full px-2 py-1 gap-1.5 bg-gray-50 hover:bg-mix-text border border-gray-200 max-w-fit cursor-pointer", onClick: r, children: [(0, t.jsx)(n.s, { url: s, size: "small" }), (0, t.jsx)(a.R, { name: e, size: "subtext1" }), (0, t.jsx)(i.Z, { className: "size-4" })] });
        },
        922150: (e, s, r) => {
            r.d(s, { G: () => b });
            var t = r(552322),
                n = r(159603),
                a = r(202784),
                i = r(611463),
                o = r(702024),
                c = r(941204),
                l = r(533476),
                u = r(455091),
                d = r(125718),
                m = r(469745),
                x = r(671889);
            const h = n.com.x.dms.pin.PinEntryTitle,
                g = n.com.x.dms.pin.PinEntrySubtitle,
                p = n.com.x.dms.pin.PinEntryError;
            function f({ component: e }) {
                const { t: s } = (0, u.$G)();
                const r = (0, m.a)("(max-width: 768px)"),
                    i = (0, l._)(e.state),
                    f = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                    f.current && f.current.focus();
                }, []);
                return i.isProcessing
                    ? (0, t.jsx)(x.g, { className: "flex w-full min-h-dvh md:h-dvh items-center", children: (0, t.jsx)(o.P, {}) })
                    : (0, t.jsxs)(x.g, {
                          className: `flex flex-col min-h-dvh md:h-dvh w-full ${r ? "items-start" : "items-center"} flex-grow gap-4 py-12 px-12`,
                          onClick: () => {
                              f.current && f.current.focus();
                          },
                          children: [
                              (0, t.jsx)(d.Z, { width: 76, height: 76, className: "rotate-[-8.29deg]" }),
                              (0, t.jsx)(c.x, {
                                  size: "title2",
                                  weight: "bold",
                                  children: (function (e) {
                                      switch (e) {
                                          case h.Create:
                                              return s("Create a 4-digit passcode");
                                          case h.CreateConfirm:
                                              return s("Confirm your passcode");
                                          case h.Recover:
                                          case h.Verify:
                                              return s("Enter your passcode");
                                          case h.Forgot:
                                              return s("Create a new passcode");
                                          case h.ForgotConfirm:
                                              return s("Confirm your new passcode");
                                      }
                                      return "Create a 4-digit passcode";
                                  })(i.title),
                              }),
                              i.subtitle
                                  ? (0, t.jsx)(c.x, {
                                        size: "body",
                                        color: "gray700",
                                        children: (function (e) {
                                            switch (e) {
                                                case g.Create:
                                                    return s("A personal key that secures your messages.");
                                                case g.Recover:
                                                    return s("Your PIN is required to recover your encryption keys so we can decrypt your previous messages.");
                                                case g.Verify:
                                                    return s("To ensure you remember your PIN, we'll request it periodically. These prompts will become less frequent over time.");
                                                case g.Forgot:
                                                    return s("Make sure to remember it, as we will occasionally need you to verify.");
                                            }
                                            return "";
                                        })(i.subtitle),
                                    })
                                  : null,
                              (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-3 " + (r ? "items-start" : "items-center"),
                                  children: [
                                      (0, t.jsx)("div", { className: "flex justify-center gap-4 mt-6 bg-background", children: [0, 1, 2, 3].map((e) => (0, t.jsx)("div", { className: "h-4 w-4 rounded-full " + (e < i.currentPinText.length ? "bg-text" : "bg-gray-600") }, e)) }),
                                      (0, t.jsx)("input", {
                                          ref: f,
                                          type: "tel",
                                          inputMode: "numeric",
                                          pattern: "[0-9]*",
                                          maxLength: 4,
                                          value: i.currentPinText,
                                          onChange: (s) => {
                                              e.handleEvent(new n.com.x.dms.pin.DmPinEntryEvent.OnPinValueChanged(s.target.value));
                                          },
                                          className: "opacity-0 absolute",
                                      }),
                                      i.error
                                          ? (0, t.jsx)(c.x, {
                                                size: "subtext1",
                                                weight: "medium",
                                                color: "red500",
                                                children: (function (e) {
                                                    if (e instanceof p.InvalidPin) {
                                                        const r = e.remainingGuesses;
                                                        return r ? s("The PIN you entered was incorrect. After {remainingGuesses} more incorrect attempts, your messages will be locked.", { remainingGuesses: r }) : s("The PIN you entered was incorrect");
                                                    }
                                                    switch (e) {
                                                        case p.PinMismatch:
                                                            return s("The PIN codes did not match. Please start over.");
                                                        case p.NotRegistered:
                                                            return s("Could not find your registration. Please try again later.");
                                                        case p.InvalidAuth:
                                                            return s("Invalid authentication. Please try again.");
                                                        case p.UpgradeRequired:
                                                            return s("Your app is too old to use this feature. Please update.");
                                                        case p.Assertion:
                                                            return s("Something was configured incorrectly. We are looking into it.");
                                                        case p.Transient:
                                                            return s("Something went wrong. Please check your network connection and try again.");
                                                        case p.RateLimitExceeded:
                                                            return s("Rate limit exceeded. Please try again later.");
                                                        case p.PublicKeysFetchFailed:
                                                            return s("Unable to communicate with server. Please check your network connection and try again.");
                                                        case p.KeyReconstructionFailed:
                                                            return s("Unable to recover your keys. We are looking into it.");
                                                        case p.NoJuiceboxTokens:
                                                            return s("No authentication token available. We are looking into it.");
                                                        default:
                                                            return s("An unknown error occurred.");
                                                    }
                                                })(i.error),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      });
            }
            var y = r(379342),
                v = r(264531),
                w = r(334038);
            const j = n.com.x.navigation.PinEntryMode;
            function b({ mode: e, shouldRegister: s, shouldGenerate: r }) {
                const [o, l] = (0, a.useState)(null),
                    u = (0, i.n)(),
                    d = (0, y.s)(),
                    { showDebugOptions: m } = (0, v.XE)();
                return (
                    (0, a.useEffect)(() => {
                        const t = new n.com.x.export.CancellationSignal(),
                            a = u.dmPinEntryComponent(
                                (function (e, s, r) {
                                    switch (e) {
                                        case "recovery":
                                            return j.Recovery;
                                        case "new":
                                            return j.NewKeypair;
                                        case "forgot":
                                            return j.ForgotPin;
                                        case "verify":
                                            return new j.Verify(!!s, !!r);
                                    }
                                })(e, s, r),
                                new n.com.x.dms.pin.DmPinEntryCallbacks(() => {
                                    d.toInbox();
                                }),
                                t,
                            );
                        return (
                            l(a),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [u, e, d, s, r]),
                    (0, t.jsxs)(t.Fragment, { children: [m && (0, t.jsx)("div", { className: "absolute top-4 right-4", children: (0, t.jsx)(w.Z, {}) }), null != o ? (0, t.jsx)(f, { component: o }) : (0, t.jsx)(c.x, { children: "Loading" })] })
                );
            }
        },
        517922: (e, s, r) => {
            r.d(s, { C: () => a });
            var t = r(552322),
                n = r(702024);
            function a() {
                return (0, t.jsx)("div", { className: "flex items-center gap-2 p-4 bg-gray-100", children: (0, t.jsx)(n.P, { size: "small" }) });
            }
        },
        556160: (e, s, r) => {
            r.d(s, { K: () => u });
            var t = r(552322),
                n = r(130844),
                a = r(26429),
                i = r(964655),
                o = r(559274),
                c = r(862399),
                l = r(796309);
            function u({ post: e, url: s, className: r }) {
                const u = e.post;
                return (0, t.jsxs)(n.r, { href: s, target: "_blank", className: (0, l.cn)("flex flex-col gap-2 h-full w-full border border-gray-200 py-2 px-4 cursor-pointer hover:bg-gray-50/50 transition-colors duration-100", r), children: [(0, t.jsxs)("div", { className: "flex gap-2 items-center", children: [(0, t.jsx)(a.q, { screenName: u.author.screenName, size: "small", url: u.author.profileImageUrl, withLink: "external", shape: u.author.profileImageShape, className: "size-5 shrink-0" }), (0, t.jsxs)("div", { className: "flex items-center gap-1 w-full", children: [(0, t.jsx)(i.R, { badges: u.author.badges, name: u.author.name, size: "subtext1", withLink: "external", screenNameColor: "gray800", screenName: u.author.screenName, isStacked: !1 }), (0, t.jsx)("div", { className: "shrink-0 size-0.5 bg-text/40 rounded-full" }), (0, t.jsx)("div", { className: "shrink-0", children: (0, t.jsx)(o.E, { timestamp: u.createdAt, size: "subtext1", color: "gray800" }) })] })] }), (0, t.jsx)(c.W, { text: u.text, displayTextRange: u.displayTextRange, entities: u.entities })] });
            }
        },
        537335: (e, s, r) => {
            r.d(s, { Q: () => i });
            var t = r(552322),
                n = r(202784),
                a = r(167285);
            const i = ({ timestamp: e, updateIntervalMs: s = 3e4 }) => {
                const [r, i] = (0, n.useState)(Date.now() / 1e3 - e.epochSeconds),
                    o = (0, n.useCallback)(() => {
                        i(Date.now() / 1e3 - e.epochSeconds);
                    }, [e]);
                return (
                    (0, n.useEffect)(() => {
                        o();
                        const e = setInterval(o, s);
                        return () => clearInterval(e);
                    }, [s, o]),
                    (0, t.jsx)(t.Fragment, { children: (0, a.S)({ diffSeconds: r, epochSeconds: e.epochSeconds, style: "narrow" }) })
                );
            };
        },
        549862: (e, s, r) => {
            r.d(s, { J: () => i });
            var t = r(552322),
                n = r(436059),
                a = r(173399);
            const i = () =>
                (0, t.jsx)(n.z, {
                    onClick: () => {
                        (0, a.O)()
                            .then(() => {
                                location.reload();
                            })
                            .catch((e) => {});
                    },
                    children: "Reset",
                });
        },
        334038: (e, s, r) => {
            r.d(s, { Z: () => x });
            var t = r(552322),
                n = r(394729),
                a = r(889198),
                i = r(436059),
                o = r(844098),
                c = r(130629),
                l = r(941204),
                u = r(202784),
                d = r(264531),
                m = r(524098);
            const x = () => {
                const [e, s] = (0, u.useState)(!1),
                    { showDebugOptions: r } = (0, d.XE)();
                return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.z, { icon: (0, t.jsx)(n.Z, { className: "h-5 w-5" }), variant: "primaryText", onClick: () => s(!0) }), e && (0, t.jsx)(o.s, { isOpen: !0, onOpenChange: s, isDismissable: !0, children: (0, t.jsxs)("div", { className: "flex flex-1 flex-col w-[40rem] h-[40rem] transition-colors", children: [(0, t.jsx)(c.x, { title: "Settings", leftContent: (0, t.jsx)(i.z, { variant: "primaryText", icon: (0, t.jsx)(a.Z, {}), onClick: () => s(!1) }) }), (0, t.jsx)("div", { className: "flex flex-col items-start gap-3 p-4 border-t overflow-y-auto", children: r && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.x, { size: "headline2", weight: "bold", children: "Debug Options" }), (0, t.jsx)(m.F, {})] }) })] }) })] });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f141c2f6.87c9ab3a.js.map
