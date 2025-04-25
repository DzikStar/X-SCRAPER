"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-08eb30f7"],
    {
        534801: (e, s, n) => {
            n.d(s, { x: () => k });
            var r = n(552322),
                t = n(202784),
                o = n(844098),
                a = n(702024),
                i = n(941204),
                c = n(130629),
                l = n(436059),
                u = n(816828),
                d = n(921879),
                m = n(425522),
                x = n(611463),
                g = n(379342),
                p = n(533476),
                h = n(658358),
                f = n(518840),
                v = n(582440),
                w = n(517652),
                y = n(759746),
                j = n(466285);
            const C = ({ onClick: e, isSelected: s, suggestion: n }) => (n instanceof m.com.x.dms.NewDmSuggestion.User ? (0, r.jsx)(j.a, { onClick: e, isSelected: s, user: n.user }) : n instanceof m.com.x.dms.NewDmSuggestion.ExistingGroup ? (0, r.jsxs)("div", { className: "flex flex-row w-full gap-2 p-2 items-center hover:bg-gray-50 cursor-pointer", onClick: e, children: [(0, r.jsx)(y.M, { avatarSize: "large", users: n.otherUsers.asJsReadonlyArrayView(), isInlineFacepile: !0 }), (0, r.jsxs)("div", { className: "flex-1 flex-col", children: [(0, r.jsx)(i.x, { children: n.title }), (0, r.jsxs)(i.x, { size: "subtext2", color: "gray700", children: [n.numParticipants, " people"] })] })] }, n.id) : (0, r.jsx)(r.Fragment, {}));
            var N = n(620134);
            const b = m.com.x.dms.newdm,
                P = m.com.x.dms.mapToValueList,
                k = ({ onVisibilityChange: e }) => {
                    const [s, n] = (0, t.useState)(null),
                        i = (0, x.n)(),
                        c = (0, g.s)();
                    return (
                        (0, t.useEffect)(() => {
                            const s = new m.com.x.export.CancellationSignal(),
                                r = i.newDmComponent(
                                    s,
                                    () => {
                                        e(!1);
                                    },
                                    (s) => {
                                        e(!1), c.toConversation(s.id);
                                    },
                                );
                            return (
                                n(r),
                                () => {
                                    s.cancel();
                                }
                            );
                        }, [i, c, e]),
                        (0, r.jsx)(o.s, { isOpen: !0, onOpenChange: e, isDismissable: !0, children: (0, r.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: s ? (0, r.jsx)(S, { component: s }) : (0, r.jsx)("div", { className: "h-full flex items-center", children: (0, r.jsx)(a.P, {}) }) }) })
                    );
                };
            const S = ({ component: e }) => {
                const s = (0, p._)(e.state);
                (0, h.e)(e.toasts);
                const n = P(s.selectedGroupUsers).asJsReadonlyArrayView(),
                    t = [...(s.isCreateGroupMode ? [] : ["group-button"]), ...s.suggestions.asJsReadonlyArrayView()],
                    o = (s) => () => {
                        e.onEvent(new b.NewDmEvent.DeleteSelectedGroupUser(s));
                    };
                return (0, r.jsxs)("div", {
                    className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors",
                    children: [
                        (0, r.jsx)(c.x, {
                            title: s.isCreateGroupMode ? "Create a group" : "New message",
                            leftContent: (0, r.jsx)(l.z, {
                                variant: "primaryText",
                                icon: (0, r.jsx)(v.Z, {}),
                                onClick: () => {
                                    e.onEvent(b.NewDmEvent.BackButtonClicked);
                                },
                            }),
                            rightContent:
                                s.isCreateGroupMode &&
                                (0, r.jsx)(l.z, {
                                    onClick: () => {
                                        e.onEvent(b.NewDmEvent.CreateButtonClicked);
                                    },
                                    variant: "primaryFilled",
                                    children: "Next",
                                }),
                            subtitle: s.isCreateGroupMode ? "Add people" : void 0,
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(u._, {
                                autoFocus: !0,
                                leftContent: (0, r.jsx)(w.Z, { className: "text-gray-700" }),
                                placeholder: "Search people",
                                value: s.query,
                                onChange: (s) => {
                                    e.onEvent(new b.NewDmEvent.QueryChanged(s.target.value));
                                },
                                borderRadius: "none",
                                className: "w-full",
                            }),
                        }),
                        (0, r.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: n.length > 0 && n.map((e) => (0, r.jsx)(N.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: o(e.id) }, e.id.userIdString)) }),
                        s.isCreateConversationCallInProgress ? (0, r.jsx)(a.P, {}) : (0, r.jsx)(d.T, { items: t, renderItem: (n) => (n instanceof m.com.x.dms.NewDmSuggestion ? (0, r.jsx)(C, { onClick: () => e.onEvent(new b.NewDmEvent.SuggestionClicked(n)), suggestion: n, isSelected: n instanceof m.com.x.dms.NewDmSuggestion.User && s.selectedGroupUsers.asJsReadonlyMapView().has(n.user.id) }) : (0, r.jsxs)("div", { className: "flex flex-row items-center gap-1 p-2 py-2.5 hover:bg-gray-50 cursor-pointer", onClick: () => e.onEvent(b.NewDmEvent.CreateAGroupItemClicked), children: [(0, r.jsx)("div", { className: "p-2 border border-solid rounded-full", children: (0, r.jsx)(f.Z, { className: "text-blue-500 size-4" }) }), (0, r.jsx)(i.x, { size: "body", color: "blue500", weight: "bold", children: "Create a Group" })] })) }),
                    ],
                });
            };
        },
        466285: (e, s, n) => {
            n.d(s, { a: () => u });
            var r = n(552322),
                t = n(425522),
                o = n(256958),
                a = n(412035),
                i = n(338175),
                c = n(350311),
                l = n(336984);
            const u = ({ onClick: e, isSelected: s, isAlreadyParticipant: n, user: u }) => {
                const d = n || !!u.cannotMessageReason;
                return (0, r.jsxs)(
                    "div",
                    {
                        className: "flex flex-row w-full gap-3 p-2 items-center " + (d ? "opacity-20" : "hover:bg-gray-50 cursor-pointer"),
                        onClick: () => {
                            e();
                            const s = ((e) => {
                                switch (e) {
                                    case t.com.x.models.dm.CannotMessageReason.NO_PUBLIC_KEY:
                                        return "This account must set up their PIN before you're able to message them.";
                                    case t.com.x.models.dm.CannotMessageReason.NO_PERMISSION:
                                        return "Sorry! You cannot message this account.";
                                }
                                return null;
                            })(u.cannotMessageReason);
                            s && (0, o.Am)(s);
                        },
                        "aria-disabled": d,
                        children: [(0, r.jsx)(c.s, { url: u.profileImageUrl, size: "large" }), (0, r.jsx)("div", { className: "flex-1", children: (0, r.jsx)(a.R, { name: u.displayName, screenName: u.screenName, badges: (0, l.r)(u), isStacked: !0 }) }), s && (0, r.jsx)("div", { className: "justify-self-end", children: (0, r.jsx)(i.Z, { className: "text-blue-500" }) })],
                    },
                    u.screenName,
                );
            };
        },
        620134: (e, s, n) => {
            n.d(s, { w: () => i });
            var r = n(552322),
                t = n(350311),
                o = n(412035),
                a = n(304183);
            const i = ({ name: e, avatarUrl: s, onRemove: n }) => (0, r.jsxs)("div", { className: "flex items-center rounded-full px-2 py-1 gap-1.5 bg-gray-50 hover:bg-mix-text border border-gray-200 max-w-fit cursor-pointer", onClick: n, children: [(0, r.jsx)(t.s, { url: s, size: "small" }), (0, r.jsx)(o.R, { name: e, size: "subtext1" }), (0, r.jsx)(a.Z, { className: "size-4" })] });
        },
        922150: (e, s, n) => {
            n.d(s, { G: () => y });
            var r = n(552322),
                t = n(425522),
                o = n(202784),
                a = n(611463),
                i = n(702024),
                c = n(941204),
                l = n(533476),
                u = n(469745);
            const d = t.com.x.dms.pin.PinEntryTitle,
                m = t.com.x.dms.pin.PinEntrySubtitle,
                x = t.com.x.dms.pin.PinEntryError;
            function g({ component: e }) {
                const s = (0, u.a)("(max-width: 768px)"),
                    n = (0, l._)(e.state),
                    a = (0, o.useRef)(null);
                (0, o.useEffect)(() => {
                    a.current && a.current.focus();
                }, []);
                return n.isProcessing
                    ? (0, r.jsx)("div", { className: "flex w-full h-screen items-center", children: (0, r.jsx)(i.P, {}) })
                    : (0, r.jsxs)("div", {
                          className: `flex flex-col h-screen w-full ${s ? "items-start" : "items-center"} flex-grow gap-4 py-12 px-12`,
                          onClick: () => {
                              a.current && a.current.focus();
                          },
                          children: [
                              (0, r.jsx)(c.x, { size: "title2", weight: "bold", children: p(n.title) }),
                              n.subtitle ? (0, r.jsx)(c.x, { size: "body", color: "gray700", children: h(n.subtitle) }) : null,
                              (0, r.jsxs)("div", {
                                  className: "flex flex-col gap-3 " + (s ? "items-start" : "items-center"),
                                  children: [
                                      (0, r.jsx)("div", { className: "flex justify-center gap-4 mt-6 bg-background", children: [0, 1, 2, 3].map((e) => (0, r.jsx)("div", { className: "h-4 w-4 rounded-full " + (e < n.currentPinText.length ? "bg-text" : "bg-gray-600") }, e)) }),
                                      (0, r.jsx)("input", {
                                          ref: a,
                                          type: "tel",
                                          inputMode: "numeric",
                                          pattern: "[0-9]*",
                                          maxLength: 4,
                                          value: n.currentPinText,
                                          onChange: (s) => {
                                              e.handleEvent(new t.com.x.dms.pin.DmPinEntryEvent.OnPinValueChanged(s.target.value));
                                          },
                                          className: "opacity-0 absolute",
                                      }),
                                      n.error ? (0, r.jsx)(c.x, { size: "subtext1", weight: "medium", color: "red500", children: f(n.error) }) : null,
                                  ],
                              }),
                          ],
                      });
            }
            function p(e) {
                switch (e) {
                    case d.Create:
                        return "Create a 4-digit PIN";
                    case d.CreateConfirm:
                        return "Confirm you PIN";
                    case d.Recover:
                    case d.Verify:
                        return "Enter your PIN";
                    case d.Forgot:
                        return "Create a new PIN";
                    case d.ForgotConfirm:
                        return "Confirm you new PIN";
                }
                return "Create a 4-digit PIN";
            }
            function h(e) {
                switch (e) {
                    case m.Recover:
                        return "Your PIN is required to recover your encryption keys so we can decrypt your previous messages.";
                    case m.Verify:
                        return "To ensure you remember your PIN, we’ll request it periodically. These prompts will become less frequent over time.";
                    case m.Forgot:
                        return "Make sure to remember it, as we will occasionally need you to verify.";
                }
                return "";
            }
            function f(e) {
                if (e instanceof x.InvalidPin) {
                    const s = e.remainingGuesses;
                    return s ? `The PIN you entered was incorrect. After ${s} more incorrect attempts, your messages will be locked.` : "The PIN you entered was incorrect";
                }
                switch (e) {
                    case x.PinMismatch:
                        return "The PIN codes did not match. Please start over.";
                    case x.NotRegistered:
                        return "Could not find your registration. Please try again later.";
                    case x.InvalidAuth:
                        return "Invalid authentication. Please try again.";
                    case x.UpgradeRequired:
                        return "Your app is too old to use this feature. Please update.";
                    case x.Assertion:
                        return "Something was configured incorrectly. We are looking into it.";
                    case x.Transient:
                        return "Something went wrong. Please check your network connection and try again.";
                    case x.RateLimitExceeded:
                        return "Rate limit exceeded. Please try again later.";
                    case x.PublicKeysFetchFailed:
                        return "Unable to communicate with server. Please check your network connection and try again.";
                    case x.KeyReconstructionFailed:
                        return "Unable to recover your keys. We are looking into it.";
                    case x.NoJuiceboxTokens:
                        return "No authentication token available. We are looking into it.";
                    default:
                        return "An unknown error occurred.";
                }
            }
            var v = n(379342);
            const w = t.com.x.navigation.PinEntryMode;
            function y({ mode: e, shouldRegister: s }) {
                const [n, i] = (0, o.useState)(null),
                    l = (0, a.n)(),
                    u = (0, v.s)();
                return (
                    (0, o.useEffect)(() => {
                        const n = new t.com.x.export.CancellationSignal(),
                            r = l.dmPinEntryComponent(
                                (function (e, s) {
                                    switch (e) {
                                        case "recovery":
                                            return w.Recovery;
                                        case "new":
                                            return w.NewKeypair;
                                        case "forgot":
                                            return w.ForgotPin;
                                        case "verify":
                                            return new w.Verify(!!s);
                                    }
                                })(e, s),
                                new t.com.x.dms.pin.DmPinEntryCallbacks(() => {
                                    u.toInbox();
                                }),
                                n,
                            );
                        return (
                            i(r),
                            () => {
                                n.cancel();
                            }
                        );
                    }, [l, e, u, s]),
                    (0, r.jsx)(r.Fragment, { children: null != n ? (0, r.jsx)(g, { component: n }) : (0, r.jsx)(c.x, { children: "Loading" }) })
                );
            }
        },
        537335: (e, s, n) => {
            n.d(s, { Q: () => a });
            var r = n(552322),
                t = n(202784),
                o = n(167285);
            const a = ({ timestamp: e, updateIntervalMs: s = 3e4 }) => {
                const [n, a] = (0, t.useState)(Date.now() / 1e3 - e.epochSeconds),
                    i = (0, t.useCallback)(() => {
                        a(Date.now() / 1e3 - e.epochSeconds);
                    }, [e]);
                return (
                    (0, t.useEffect)(() => {
                        i();
                        const e = setInterval(i, s);
                        return () => clearInterval(e);
                    }, [s, i]),
                    (0, r.jsx)(r.Fragment, { children: (0, o.S)({ diffSeconds: n, epochSeconds: e.epochSeconds, style: "narrow" }) })
                );
            };
        },
        549862: (e, s, n) => {
            n.d(s, { J: () => a });
            var r = n(552322),
                t = n(436059),
                o = n(173399);
            const a = () =>
                (0, r.jsx)(t.z, {
                    onClick: () => {
                        (0, o.O)()
                            .then(() => {
                                location.reload();
                            })
                            .catch((e) => {});
                    },
                    children: "Reset",
                });
        },
        334038: (e, s, n) => {
            n.d(s, { Z: () => x });
            var r = n(552322),
                t = n(436059),
                o = n(844098),
                a = n(130629),
                i = n(941204),
                c = n(135548),
                l = n(582440),
                u = n(202784),
                d = n(264531),
                m = n(524098);
            const x = () => {
                const [e, s] = (0, u.useState)(!1),
                    { showDebugOptions: n } = (0, d.XE)();
                return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.z, { icon: (0, r.jsx)(c.Z, { className: "h-5 w-5" }), onClick: () => s(!0) }), e && (0, r.jsx)(o.s, { isOpen: !0, onOpenChange: s, isDismissable: !0, children: (0, r.jsxs)("div", { className: "flex flex-1 flex-col w-[40rem] h-[40rem] transition-colors", children: [(0, r.jsx)(a.x, { title: "Settings", leftContent: (0, r.jsx)(t.z, { variant: "primaryText", icon: (0, r.jsx)(l.Z, {}), onClick: () => s(!1) }) }), (0, r.jsx)("div", { className: "flex flex-col items-start gap-3 p-4 border-t overflow-y-auto", children: n && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(i.x, { size: "headline2", weight: "bold", children: "Debug Options" }), (0, r.jsx)(m.F, {})] }) })] }) })] });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-08eb30f7.f219a26a.js.map
