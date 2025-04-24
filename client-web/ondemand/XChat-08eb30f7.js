"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-08eb30f7"],
    {
        534801: (e, n, r) => {
            r.d(n, { x: () => k });
            var s = r(552322),
                t = r(202784),
                o = r(844098),
                a = r(702024),
                i = r(941204),
                c = r(130629),
                l = r(436059),
                u = r(816828),
                d = r(989558),
                m = r(425522),
                x = r(611463),
                g = r(379342),
                p = r(533476),
                h = r(658358),
                f = r(518840),
                v = r(582440),
                w = r(517652),
                y = r(759746),
                j = r(466285);
            const C = ({ onClick: e, isSelected: n, suggestion: r }) => (r instanceof m.com.x.dms.NewDmSuggestion.User ? (0, s.jsx)(j.a, { onClick: e, isSelected: n, user: r.user }) : r instanceof m.com.x.dms.NewDmSuggestion.ExistingGroup ? (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 p-2 items-center hover:bg-gray-50 cursor-pointer", onClick: e, children: [(0, s.jsx)(y.M, { avatarSize: "large", users: r.otherUsers.asJsReadonlyArrayView(), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 flex-col", children: [(0, s.jsx)(i.x, { children: r.title }), (0, s.jsxs)(i.x, { size: "subtext2", color: "gray700", children: [r.numParticipants, " people"] })] })] }, r.id) : (0, s.jsx)(s.Fragment, {}));
            var N = r(620134);
            const b = m.com.x.dms.newdm,
                P = m.com.x.dms.mapToValueList,
                k = ({ onVisibilityChange: e }) => {
                    const [n, r] = (0, t.useState)(null),
                        i = (0, x.n)(),
                        c = (0, g.s)();
                    return (
                        (0, t.useEffect)(() => {
                            const n = new m.com.x.export.CancellationSignal(),
                                s = i.newDmComponent(
                                    n,
                                    () => {
                                        e(!1);
                                    },
                                    (n) => {
                                        e(!1), c.toConversation(n.id);
                                    },
                                );
                            return (
                                r(s),
                                () => {
                                    n.cancel();
                                }
                            );
                        }, [i, c, e]),
                        (0, s.jsx)(o.s, { isOpen: !0, onOpenChange: e, isDismissable: !0, children: (0, s.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: n ? (0, s.jsx)(E, { component: n }) : (0, s.jsx)("div", { className: "h-full flex items-center", children: (0, s.jsx)(a.P, {}) }) }) })
                    );
                };
            var S;
            !(function (e) {
                e.GroupButton = "group-button";
            })(S || (S = {}));
            const E = ({ component: e }) => {
                const n = (0, p._)(e.state);
                (0, h.e)(e.toasts);
                const r = P(n.selectedGroupUsers).asJsReadonlyArrayView(),
                    t = [...(n.isCreateGroupMode ? [] : ["group-button"]), ...n.suggestions.asJsReadonlyArrayView()],
                    o = (n) => () => {
                        e.onEvent(new b.NewDmEvent.DeleteSelectedGroupUser(n));
                    };
                return (0, s.jsxs)("div", {
                    className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors",
                    children: [
                        (0, s.jsx)(c.x, {
                            title: n.isCreateGroupMode ? "Create a group" : "New message",
                            leftContent: (0, s.jsx)(l.z, {
                                variant: "primaryText",
                                icon: (0, s.jsx)(v.Z, {}),
                                onClick: () => {
                                    e.onEvent(b.NewDmEvent.BackButtonClicked);
                                },
                            }),
                            rightContent:
                                n.isCreateGroupMode &&
                                (0, s.jsx)(l.z, {
                                    onClick: () => {
                                        e.onEvent(b.NewDmEvent.CreateButtonClicked);
                                    },
                                    variant: "primaryFilled",
                                    children: "Next",
                                }),
                            subtitle: n.isCreateGroupMode ? "Add people" : void 0,
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(u._, {
                                autoFocus: !0,
                                leftContent: (0, s.jsx)(w.Z, { className: "text-gray-700" }),
                                placeholder: "Search people",
                                value: n.query,
                                onChange: (n) => {
                                    e.onEvent(new b.NewDmEvent.QueryChanged(n.target.value));
                                },
                                borderRadius: "none",
                                className: "w-full",
                            }),
                        }),
                        (0, s.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: r.length > 0 && r.map((e) => (0, s.jsx)(N.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: o(e.id) }, e.id.userIdString)) }),
                        n.isCreateConversationCallInProgress ? (0, s.jsx)(a.P, {}) : (0, s.jsx)(d.T, { items: t, renderItem: (r) => (r instanceof m.com.x.dms.NewDmSuggestion ? (0, s.jsx)(C, { onClick: () => e.onEvent(new b.NewDmEvent.SuggestionClicked(r)), suggestion: r, isSelected: r instanceof m.com.x.dms.NewDmSuggestion.User && n.selectedGroupUsers.asJsReadonlyMapView().has(r.user.id) }) : (0, s.jsxs)("div", { className: "flex flex-row items-center gap-1 p-2 py-2.5 hover:bg-gray-50 cursor-pointer", onClick: () => e.onEvent(b.NewDmEvent.CreateAGroupItemClicked), children: [(0, s.jsx)("div", { className: "p-2 border border-solid rounded-full", children: (0, s.jsx)(f.Z, { className: "text-blue-500 size-4" }) }), (0, s.jsx)(i.x, { size: "body", color: "blue500", weight: "bold", children: "Create a Group" })] })) }),
                    ],
                });
            };
        },
        466285: (e, n, r) => {
            r.d(n, { a: () => u });
            var s = r(552322),
                t = r(425522),
                o = r(256958),
                a = r(412035),
                i = r(338175),
                c = r(350311),
                l = r(336984);
            const u = ({ onClick: e, isSelected: n, isAlreadyParticipant: r, user: u }) => {
                const d = r || !!u.cannotMessageReason;
                return (0, s.jsxs)(
                    "div",
                    {
                        className: "flex flex-row w-full gap-3 p-2 items-center " + (d ? "opacity-20" : "hover:bg-gray-50 cursor-pointer"),
                        onClick: () => {
                            e();
                            const n = ((e) => {
                                switch (e) {
                                    case t.com.x.models.dm.CannotMessageReason.NO_PUBLIC_KEY:
                                        return "This account must set up their PIN before you're able to message them.";
                                    case t.com.x.models.dm.CannotMessageReason.NO_PERMISSION:
                                        return "Sorry! You cannot message this account.";
                                }
                                return null;
                            })(u.cannotMessageReason);
                            n && (0, o.Am)(n);
                        },
                        "aria-disabled": d,
                        children: [(0, s.jsx)(c.s, { url: u.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(a.R, { name: u.displayName, screenName: u.screenName, badges: (0, l.r)(u), isStacked: !0 }) }), n && (0, s.jsx)("div", { className: "justify-self-end", children: (0, s.jsx)(i.Z, { className: "text-blue-500" }) })],
                    },
                    u.screenName,
                );
            };
        },
        620134: (e, n, r) => {
            r.d(n, { w: () => i });
            var s = r(552322),
                t = r(350311),
                o = r(412035),
                a = r(304183);
            const i = ({ name: e, avatarUrl: n, onRemove: r }) => (0, s.jsxs)("div", { className: "flex items-center rounded-full px-2 py-1 gap-1.5 bg-gray-50 hover:bg-mix-text border border-gray-200 max-w-fit cursor-pointer", onClick: r, children: [(0, s.jsx)(t.s, { url: n, size: "small" }), (0, s.jsx)(o.R, { name: e, size: "subtext1" }), (0, s.jsx)(a.Z, { className: "size-4" })] });
        },
        922150: (e, n, r) => {
            r.d(n, { G: () => y });
            var s = r(552322),
                t = r(425522),
                o = r(202784),
                a = r(611463),
                i = r(702024),
                c = r(941204),
                l = r(533476),
                u = r(469745);
            const d = t.com.x.dms.pin.PinEntryTitle,
                m = t.com.x.dms.pin.PinEntrySubtitle,
                x = t.com.x.dms.pin.PinEntryError;
            function g({ component: e }) {
                const n = (0, u.a)("(max-width: 768px)"),
                    r = (0, l._)(e.state),
                    a = (0, o.useRef)(null);
                (0, o.useEffect)(() => {
                    a.current && a.current.focus();
                }, []);
                return r.isProcessing
                    ? (0, s.jsx)("div", { className: "flex w-full h-screen items-center", children: (0, s.jsx)(i.P, {}) })
                    : (0, s.jsxs)("div", {
                          className: `flex flex-col h-screen w-full ${n ? "items-start" : "items-center"} flex-grow gap-4 py-12 px-12`,
                          onClick: () => {
                              a.current && a.current.focus();
                          },
                          children: [
                              (0, s.jsx)(c.x, { size: "title2", weight: "bold", children: p(r.title) }),
                              r.subtitle ? (0, s.jsx)(c.x, { size: "body", color: "gray700", children: h(r.subtitle) }) : null,
                              (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-3 " + (n ? "items-start" : "items-center"),
                                  children: [
                                      (0, s.jsx)("div", { className: "flex justify-center gap-4 mt-6 bg-background", children: [0, 1, 2, 3].map((e) => (0, s.jsx)("div", { className: "h-4 w-4 rounded-full " + (e < r.currentPinText.length ? "bg-text" : "bg-gray-600") }, e)) }),
                                      (0, s.jsx)("input", {
                                          ref: a,
                                          type: "tel",
                                          inputMode: "numeric",
                                          pattern: "[0-9]*",
                                          maxLength: 4,
                                          value: r.currentPinText,
                                          onChange: (n) => {
                                              e.handleEvent(new t.com.x.dms.pin.DmPinEntryEvent.OnPinValueChanged(n.target.value));
                                          },
                                          className: "opacity-0 absolute",
                                      }),
                                      r.error ? (0, s.jsx)(c.x, { size: "subtext1", weight: "medium", color: "red500", children: f(r.error) }) : null,
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
                    const n = e.remainingGuesses;
                    return n ? `The PIN you entered was incorrect. After ${n} more incorrect attempts, your messages will be locked.` : "The PIN you entered was incorrect";
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
            var v = r(379342);
            const w = t.com.x.navigation.PinEntryMode;
            function y({ mode: e, shouldRegister: n }) {
                const [r, i] = (0, o.useState)(null),
                    l = (0, a.n)(),
                    u = (0, v.s)();
                return (
                    (0, o.useEffect)(() => {
                        const r = new t.com.x.export.CancellationSignal(),
                            s = l.dmPinEntryComponent(
                                (function (e, n) {
                                    switch (e) {
                                        case "recovery":
                                            return w.Recovery;
                                        case "new":
                                            return w.NewKeypair;
                                        case "forgot":
                                            return w.ForgotPin;
                                        case "verify":
                                            return new w.Verify(!!n);
                                    }
                                })(e, n),
                                new t.com.x.dms.pin.DmPinEntryCallbacks(() => {
                                    u.toInbox();
                                }),
                                r,
                            );
                        return (
                            i(s),
                            () => {
                                r.cancel();
                            }
                        );
                    }, [l, e, u, n]),
                    (0, s.jsx)(s.Fragment, { children: null != r ? (0, s.jsx)(g, { component: r }) : (0, s.jsx)(c.x, { children: "Loading" }) })
                );
            }
        },
        537335: (e, n, r) => {
            r.d(n, { Q: () => a });
            var s = r(552322),
                t = r(202784),
                o = r(167285);
            const a = ({ timestamp: e, updateIntervalMs: n = 3e4 }) => {
                const [r, a] = (0, t.useState)(Date.now() / 1e3 - e.epochSeconds),
                    i = (0, t.useCallback)(() => {
                        a(Date.now() / 1e3 - e.epochSeconds);
                    }, [e]);
                return (
                    (0, t.useEffect)(() => {
                        i();
                        const e = setInterval(i, n);
                        return () => clearInterval(e);
                    }, [n, i]),
                    (0, s.jsx)(s.Fragment, { children: (0, o.S)({ diffSeconds: r, epochSeconds: e.epochSeconds, style: "narrow" }) })
                );
            };
        },
        549862: (e, n, r) => {
            r.d(n, { J: () => a });
            var s = r(552322),
                t = r(436059),
                o = r(439261);
            const a = () =>
                (0, s.jsx)(t.z, {
                    onClick: () => {
                        (0, o.K)(),
                            navigator.storage
                                .getDirectory()
                                .then((e) => {
                                    e.remove()
                                        .then(() => {
                                            location.reload();
                                        })
                                        .catch((e) => {});
                                })
                                .catch((e) => {});
                    },
                    children: "Reset",
                });
        },
        334038: (e, n, r) => {
            r.d(n, { Z: () => x });
            var s = r(552322),
                t = r(436059),
                o = r(844098),
                a = r(130629),
                i = r(941204),
                c = r(135548),
                l = r(582440),
                u = r(202784),
                d = r(264531),
                m = r(524098);
            const x = () => {
                const [e, n] = (0, u.useState)(!1),
                    { showDebugOptions: r } = (0, d.XE)();
                return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.z, { icon: (0, s.jsx)(c.Z, { className: "h-5 w-5" }), onClick: () => n(!0) }), e && (0, s.jsx)(o.s, { isOpen: !0, onOpenChange: n, isDismissable: !0, children: (0, s.jsxs)("div", { className: "flex flex-1 flex-col w-[40rem] h-[40rem] transition-colors", children: [(0, s.jsx)(a.x, { title: "Settings", leftContent: (0, s.jsx)(t.z, { variant: "primaryText", icon: (0, s.jsx)(l.Z, {}), onClick: () => n(!1) }) }), (0, s.jsx)("div", { className: "flex flex-col items-start gap-3 p-4 border-t overflow-y-auto", children: r && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.x, { size: "headline2", weight: "bold", children: "Debug Options" }), (0, s.jsx)(m.F, {})] }) })] }) })] });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-08eb30f7.2951c8da.js.map
