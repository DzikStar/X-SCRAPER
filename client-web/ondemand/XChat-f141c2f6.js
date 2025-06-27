"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f141c2f6"],
    {
        272795: (e, t, n) => {
            n.d(t, { c: () => u });
            var a = n(552322),
                r = n(159603),
                s = n(455091),
                l = n(256958),
                i = n(332161),
                o = n(466285),
                c = n(759746);
            const u = ({ onClick: e, isSelected: t, suggestion: n }) => {
                    const { t: u } = (0, s.$G)();
                    return n instanceof r.com.x.dms.NewDmSuggestion.User || n instanceof r.com.x.dms.addparticipants.AddParticipantSuggestion
                        ? (0, a.jsx)(o.a, {
                              onClick: () => {
                                  e();
                                  const t = d(n.user.cannotMessageReason);
                                  t && (0, l.Am)(u(t));
                              },
                              isSelected: t,
                              user: n.user,
                              disabled: (n instanceof r.com.x.dms.addparticipants.AddParticipantSuggestion && n.alreadyParticipant) || !!n.user.cannotMessageReason,
                          })
                        : n instanceof r.com.x.dms.NewDmSuggestion.ExistingGroup
                          ? (0, a.jsxs)("div", { className: "flex flex-row w-full gap-2 p-2 items-center hover:bg-gray-50 cursor-pointer rounded-lg", onClick: e, children: [(0, a.jsx)(c.M, { avatarSize: "large", users: n.otherUsers.asJsReadonlyArrayView(), isInlineFacepile: !0 }), (0, a.jsxs)("div", { className: "flex-1 flex-col", children: [(0, a.jsx)(i.x, { children: n.title }), (0, a.jsx)(i.x, { size: "subtext2", color: "gray700", children: u("{count} {count, plural, one {person} other {people}}", { count: n.numParticipants }) })] })] }, n.id)
                          : (0, a.jsx)(a.Fragment, {});
                },
                d = (e) => {
                    switch (e) {
                        case r.com.x.models.dm.CannotMessageReason.NO_PUBLIC_KEY:
                            return "This account must set up their PIN before you're able to message them.";
                        case r.com.x.models.dm.CannotMessageReason.NO_PERMISSION:
                            return "Sorry! You cannot message this account.";
                    }
                    return null;
                };
        },
        466285: (e, t, n) => {
            n.d(t, { a: () => c });
            var a = n(552322),
                r = n(242782),
                s = n(589259),
                l = n(31674),
                i = n(350311),
                o = n(336984);
            const c = ({ onClick: e, isSelected: t, disabled: n, user: c, className: u }) => (0, a.jsxs)("div", { className: (0, l.cn)("flex flex-row w-full gap-3 p-2 items-center rounded-lg", n ? "opacity-20" : "hover:bg-gray-50 cursor-pointer", u), onClick: e, "aria-disabled": n, children: [(0, a.jsx)(i.s, { url: c.profileImageUrl, size: "xLarge" }), (0, a.jsx)("div", { className: "flex-1", children: (0, a.jsx)(s.R, { name: c.displayName, screenName: c.screenName, badges: (0, o.r)(c), isStacked: !0 }) }), t && (0, a.jsx)("div", { className: "justify-self-end", children: (0, a.jsx)(r.Z, { className: "text-blue-500" }) })] }, c.screenName);
        },
        620134: (e, t, n) => {
            n.d(t, { w: () => i });
            var a = n(552322),
                r = n(887491),
                s = n(589259),
                l = n(350311);
            const i = ({ name: e, avatarUrl: t, onRemove: n }) => (0, a.jsxs)("div", { className: "flex items-center rounded-full px-2 py-1 gap-1.5 bg-gray-50 hover:bg-mix-text border border-gray-200 max-w-fit cursor-pointer", onClick: n, children: [(0, a.jsx)(l.s, { url: t, size: "small" }), (0, a.jsx)(s.R, { name: e, size: "subtext1" }), (0, a.jsx)(r.Z, { className: "size-4" })] });
        },
        517922: (e, t, n) => {
            n.d(t, { C: () => s });
            var a = n(552322),
                r = n(193686);
            function s() {
                return (0, a.jsx)("div", { className: "flex items-center gap-2 p-4 bg-gray-100", children: (0, a.jsx)(r.P, { size: "small" }) });
            }
        },
        556160: (e, t, n) => {
            n.d(t, { K: () => d });
            var a = n(552322),
                r = n(322506),
                s = n(6937),
                l = n(589259),
                i = n(253511),
                o = n(123010),
                c = n(588377),
                u = n(31674);
            function d({ post: e, url: t, className: n }) {
                const d = e.post;
                return (0, a.jsxs)(r.r, { href: t, target: "_blank", className: (0, u.cn)("flex flex-col gap-2 h-full w-full max-w-[500px] border border-gray-200 py-2 px-4 cursor-pointer hover:bg-gray-50/50 transition-colors duration-100", n), children: [(0, a.jsxs)("div", { className: "flex gap-2 items-center", children: [(0, a.jsx)(s.q, { screenName: d.author.screenName, size: "small", url: d.author.profileImageUrl, withLink: !1, shape: d.author.profileImageShape, className: "size-5 shrink-0" }), (0, a.jsxs)("div", { className: "flex items-center gap-1 w-full", children: [(0, a.jsx)(l.R, { badges: d.author.badges, name: d.author.name, size: "subtext1", withLink: !1, screenNameColor: "gray800", screenName: d.author.screenName, isStacked: !1 }), (0, a.jsx)("div", { className: "shrink-0 size-0.5 bg-text/40 rounded-full" }), (0, a.jsx)("div", { className: "shrink-0", children: (0, a.jsx)(i.E, { timestamp: d.createdAt, size: "subtext1", color: "gray800" }) })] })] }), (0, a.jsx)(o.W, { text: d.text, displayTextRange: d.displayTextRange, entities: d.entities }), d.media && d.media.length > 0 && (0, a.jsx)("div", { className: "pb-2", children: (0, a.jsx)(c.s, { mediaItems: d.media }) })] });
            }
        },
        537335: (e, t, n) => {
            n.d(t, { Q: () => i });
            var a = n(552322),
                r = n(202784),
                s = n(167285),
                l = n(455091);
            const i = ({ timestamp: e, updateIntervalMs: t = 3e4 }) => {
                const [n, i] = (0, r.useState)(Date.now() / 1e3 - e.epochSeconds),
                    { t: o } = (0, l.$G)(),
                    c = (0, r.useCallback)(() => {
                        i(Date.now() / 1e3 - e.epochSeconds);
                    }, [e]);
                return (
                    (0, r.useEffect)(() => {
                        c();
                        const e = setInterval(c, t);
                        return () => clearInterval(e);
                    }, [t, c]),
                    (0, a.jsx)(a.Fragment, { children: (0, s.S)({ diffSeconds: n, epochSeconds: e.epochSeconds, style: "narrow", t: o }) })
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
        70625: (e, t, n) => {
            n.d(t, { Z: () => y });
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
                p = n(155369);
            const f = () =>
                (0, a.jsx)(l.z, {
                    onClick: () => {
                        (0, p.Iv)()
                            .then(() => {
                                location.reload();
                            })
                            .catch((e) => {});
                    },
                    variant: "brandOutlined",
                    children: "Reset",
                });
            function h() {
                return (0, a.jsxs)("div", { className: "flex flex-col gap-1 w-full", children: [(0, a.jsxs)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: [(0, a.jsx)(f, {}), (0, a.jsx)(m.o, {})] }), (0, a.jsx)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: (0, a.jsx)(g.i, {}) })] });
            }
            const y = () => {
                const [e, t] = (0, u.useState)(!1),
                    { showDebugOptions: n } = (0, d.XE)();
                return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(l.z, { icon: (0, a.jsx)(r.Z, { className: "h-5 w-5" }), variant: "primaryText", onClick: () => t(!0) }), e && (0, a.jsx)(i.s, { isOpen: !0, onOpenChange: t, isDismissable: !0, children: (0, a.jsxs)("div", { className: "flex flex-1 flex-col w-[40rem] h-[40rem] transition-colors", children: [(0, a.jsx)(o.x, { title: "Settings", leftContent: (0, a.jsx)(l.z, { variant: "primaryText", icon: (0, a.jsx)(s.Z, {}), onClick: () => t(!1) }) }), (0, a.jsx)("div", { className: "flex flex-col items-start gap-3 p-4 border-t overflow-y-auto", children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(c.x, { size: "headline2", weight: "bold", children: "Debug Options" }), (0, a.jsx)(h, {})] }) })] }) })] });
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
                s = n(657556);
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
                r = n(657556),
                s = n(92184);
            const l = ({ settings: e }) => (0, a.jsx)(r.A, { settings: e, children: (0, a.jsx)(s.p, {}) });
        },
        657556: (e, t, n) => {
            n.d(t, { A: () => y });
            var a = n(552322),
                r = n(446368),
                s = n(455091),
                l = n(202784),
                i = n(109871),
                o = n(607499),
                c = n(264531),
                u = n(155369),
                d = n(84504);
            async function m() {
                const e = (0, d.n5)();
                await (async function (e) {
                    try {
                        const t = await navigator.storage.getDirectory();
                        for await (const n of t.values())
                            if ("directory" === n.kind && n.name.startsWith(`.${e}_chat`))
                                try {
                                    await t.removeEntry(n.name, { recursive: !0 });
                                } catch (e) {}
                    } catch (e) {}
                })(e),
                    await (async () => {
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
                    })();
            }
            var g = n(34681),
                p = n(332161),
                f = n(993165);
            function h({ children: e }) {
                const [t, n] = (0, l.useState)(!1),
                    r = (0, u.n4)(),
                    { t: i } = (0, s.$G)();
                return (
                    (0, l.useEffect)(() => {
                        const e = r.databaseDowngradeObservable.subscribe((e) => {
                            n(e);
                        });
                        return () => {
                            e.cancel();
                        };
                    }, [r]),
                    t
                        ? (0, a.jsxs)(g.Vq, {
                              open: t,
                              children: [
                                  (0, a.jsx)(g.t9, { className: "bg-gray-0" }),
                                  (0, a.jsxs)(g.cZ, {
                                      className: "max-w-sm p-8 flex flex-col items-center text-center gap-6",
                                      withCloseButton: !1,
                                      children: [
                                          (0, a.jsx)(p.x, { className: "text-start", children: i("Your database version is newer than the app expects, please reset database and start from scratch.") }),
                                          (0, a.jsx)(f.z, {
                                              onClick: function () {
                                                  (0, u.Iv)()
                                                      .then(() => {
                                                          window.location.reload();
                                                      })
                                                      .catch((e) => {});
                                              },
                                              backgroundColor: "gray700",
                                              color: "background",
                                              size: "xLarge",
                                              className: "w-full rounded-full mx-4 border-transparent outline-text active:bg-mix-text active:bg-mix-amount-15 focus:bg-mix-text focus:bg-mix-amount-10 hover:bg-mix-text hover:bg-mix-amount-10",
                                              children: i("Reset"),
                                          }),
                                          (0, a.jsx)(p.x, { size: "subtext2", weight: "medium", children: i("All your data is safely stored") }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(a.Fragment, { children: e })
                );
            }
            const y = ({ children: e, settings: t }) => {
                const { t: n } = (0, s.$G)();
                return (
                    (0, l.useEffect)(() => {
                        m();
                    }, []),
                    (0, a.jsx)(o.S, { message: n("Something went wrong while loading Chat. Please try again later."), children: (0, a.jsx)(i.L, { children: (0, a.jsx)(r.ng, { children: (0, a.jsx)(c.mp, { settings: t, children: (0, a.jsx)(u.Us, { children: (0, a.jsxs)(h, { children: [e, " "] }) }) }) }) }) })
                );
            };
        },
        850697: (e, t, n) => {
            n.d(t, { x: () => T });
            var a = n(552322),
                r = n(657556),
                s = n(159603),
                l = n(202784),
                i = n(155369),
                o = n(193686),
                c = n(332161),
                u = n(993165),
                d = n(533476),
                m = n(455091),
                g = n(788452),
                p = n(3577),
                f = n(671889),
                h = n(31674);
            function y({ value: e, onChange: t, digitVisible: n = !1, className: r, length: s = 4, autoFocus: i = !1 }) {
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
                    className: (0, h.cn)("flex gap-3", r),
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
                                        className: (0, h.cn)("absolute inset-0 w-full h-full text-transparent caret-primary bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors z-10 text-center", e[r] && "text-left pl-7"),
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
            const x = s.com.x.dms.pin.PinEntryTitle,
                v = s.com.x.dms.pin.PinEntrySubtitle,
                b = s.com.x.dms.pin.PinEntryError;
            function w({ component: e }) {
                const { t } = (0, m.$G)();
                const n = (0, p.a)("(max-width: 768px)"),
                    r = (0, d._)(e.state),
                    i = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    i.current && i.current.focus();
                }, []);
                return r.isProcessing
                    ? (0, a.jsx)(f.g, { className: "flex w-full min-h-dvh md:h-dvh items-center", children: (0, a.jsx)(o.P, {}) })
                    : (0, a.jsxs)(f.g, {
                          className: `flex flex-col min-h-dvh md:h-dvh w-full ${n ? "items-start py-12" : "items-center justify-center py-0"} flex-grow gap-4  px-12`,
                          children: [
                              (0, a.jsx)(g.Z, { width: 76, height: 76, className: "rotate-[-8.29deg]" }),
                              (0, a.jsx)(c.x, {
                                  size: "title2",
                                  weight: "bold",
                                  children: (function (e) {
                                      switch (e) {
                                          case x.Create:
                                              return t("Create a 4-digit passcode");
                                          case x.CreateConfirm:
                                              return t("Confirm your passcode");
                                          case x.Recover:
                                          case x.Verify:
                                              return t("Enter your passcode");
                                          case x.Forgot:
                                              return t("Create a new passcode");
                                          case x.ForgotConfirm:
                                              return t("Confirm your new passcode");
                                          case x.ForgotWarning:
                                              return t("Are you sure you want to reset your passcode?");
                                      }
                                      return "Create a 4-digit passcode";
                                  })(r.title),
                              }),
                              r.subtitle
                                  ? (0, a.jsx)(c.x, {
                                        size: "body",
                                        color: r.title === x.ForgotWarning ? "red500" : "gray700",
                                        children: (function (e) {
                                            switch (e) {
                                                case v.Create:
                                                    return t("A personal key that secures your messages.");
                                                case v.Recover:
                                                    return t("Your PIN is required to recover your encryption keys so we can decrypt your previous messages.");
                                                case v.Verify:
                                                    return t("To ensure you remember your PIN, we'll request it periodically. These prompts will become less frequent over time.");
                                                case v.Forgot:
                                                    return t("Make sure to remember it, as we will occasionally need you to verify.");
                                                case v.ForgotWarning:
                                                    return t("You'll no longer be able to access your old messages.");
                                            }
                                            return "";
                                        })(r.subtitle),
                                    })
                                  : null,
                              (0, a.jsxs)("div", {
                                  className: "flex flex-col gap-3 " + (n ? "items-start" : "items-center"),
                                  children: [
                                      r.title === x.ForgotWarning
                                          ? (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, a.jsx)(u.z, { variant: "destructiveFilled", onClick: () => e.handleEvent(s.com.x.dms.pin.DmPinEntryEvent.WarningClick), children: t("Yes, reset passcode") }), (0, a.jsx)(u.z, { variant: "insightsGhost", onClick: () => e.handleEvent(s.com.x.dms.pin.DmPinEntryEvent.WarningClick), children: t("No, Cancel") })] })
                                          : (0, a.jsx)(
                                                y,
                                                {
                                                    value: r.currentPinText,
                                                    onChange: (t) => {
                                                        e.handleEvent(new s.com.x.dms.pin.DmPinEntryEvent.OnPinValueChanged(t));
                                                    },
                                                    length: 4,
                                                    autoFocus: !0,
                                                    digitVisible: (function (e) {
                                                        switch (e) {
                                                            case x.Create:
                                                            case x.CreateConfirm:
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
                                                    if (e instanceof b.InvalidPin) {
                                                        const n = e.remainingGuesses;
                                                        return n ? t("The PIN you entered was incorrect. After {remainingGuesses} more incorrect attempts, your messages will be locked.", { remainingGuesses: n }) : t("The PIN you entered was incorrect");
                                                    }
                                                    switch (e) {
                                                        case b.PinMismatch:
                                                            return t("The PIN codes did not match. Please start over.");
                                                        case b.NotRegistered:
                                                            return t("Could not find your registration. Please try again later.");
                                                        case b.InvalidAuth:
                                                            return t("Invalid authentication. Please try again.");
                                                        case b.UpgradeRequired:
                                                            return t("Your app is too old to use this feature. Please update.");
                                                        case b.Assertion:
                                                            return t("Something was configured incorrectly. We are looking into it.");
                                                        case b.Transient:
                                                            return t("Something went wrong. Please check your network connection and try again.");
                                                        case b.RateLimitExceeded:
                                                            return t("Rate limit exceeded. Please try again later.");
                                                        case b.PublicKeysFetchFailed:
                                                            return t("Unable to communicate with server. Please check your network connection and try again.");
                                                        case b.KeyReconstructionFailed:
                                                            return t("Unable to recover your keys. We are looking into it.");
                                                        case b.NoJuiceboxTokens:
                                                            return t("No authentication token available. We are looking into it.");
                                                        default:
                                                            return t("An unknown error occurred.");
                                                    }
                                                })(r.error),
                                            })
                                          : null,
                                  ],
                              }),
                              (r.title === x.Recover || r.title === x.Verify) && (0, a.jsx)("div", { className: "mt-4", children: (0, a.jsx)(u.z, { variant: "mutedText", onClick: () => e.handleEvent(s.com.x.dms.pin.DmPinEntryEvent.ForgotPinClicked), children: t("Forgot passcode") }) }),
                          ],
                      });
            }
            var _ = n(379342),
                k = n(264531),
                j = n(70625),
                F = n(867400),
                N = n(231037);
            const S = s.com.x.dms.pin.PinEntryMode;
            function C({ mode: e }) {
                const [t, n] = (0, l.useState)(null),
                    r = (0, i.n4)(),
                    o = (0, _.s)(),
                    { showDebugOptions: u } = (0, k.XE)(),
                    d = (0, F.a)(),
                    m = (0, N.l)();
                return (
                    (0, l.useEffect)(() => {
                        const t = new s.com.x.export.CancellationSignal(),
                            a = r.dmPinEntryComponent(
                                (function (e, t, n) {
                                    switch (e) {
                                        case "recovery":
                                            return S.Recovery;
                                        case "new":
                                            return S.NewKeypair;
                                        case "forgot":
                                            return S.ForgotPin;
                                        case "verify":
                                            return new S.Verify(!!t, !!n);
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
                    (0, a.jsxs)(a.Fragment, { children: [u && (0, a.jsx)("div", { className: "absolute top-4 right-4", children: (0, a.jsx)(j.Z, {}) }), null != t ? (0, a.jsx)(w, { component: t }) : (0, a.jsx)(c.x, { children: "Loading" })] })
                );
            }
            const E = ["recovery", "new", "forgot", "verify"],
                T = ({ mode: e, settings: t }) => (E.includes(e) ? (0, a.jsx)(r.A, { settings: t, children: (0, a.jsx)(C, { mode: e }) }) : null);
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
            n.r(t), n.d(t, { default: () => f });
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
                                                                                (p = {
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
                operation: { argumentDefinitions: r, kind: "Operation", name: "fetchPostQuery", selections: [{ alias: null, args: s, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [o, c, u, { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [u, d, m, g, p, c], type: "User", abstractKey: null }], storageKey: null }, c], storageKey: null }], storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }, c], storageKey: null }] },
                params: { id: "BrdmgaNbXWZa4D4KLY-hCA", metadata: {}, name: "fetchPostQuery", operationKind: "query", text: null },
            };
            var r, s, l, i, o, c, u, d, m, g, p;
            a.hash = "6b931e47d1ab528a8de40a76cc4aef9e";
            const f = a;
        },
        84504: (e, t, n) => {
            n.d(t, { n5: () => r });
            var a = n(625067);
            function r() {
                const e = (0, a.Qc)(document.cookie);
                return e.twid?.slice(2) || "0";
            }
        },
        565991: (e, t, n) => {
            n.d(t, { c: () => s, j: () => l });
            var a = n(84504);
            const r = "xchat_database_backup_event";
            function s() {
                window.dispatchEvent(new Event(r));
            }
            function l(e) {
                window.addEventListener(r, () => {
                    e.postMessage({ action: "backup_db", userId: (0, a.n5)(), id: "backup_1" });
                });
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
        167285: (e, t, n) => {
            n.d(t, { H: () => o, S: () => i });
            const a = 3600,
                r = 86400,
                s = 604800,
                l = 2592e3,
                i = ({ diffSeconds: e, epochSeconds: t, style: n, t: i }) => {
                    if (e < 60) return i("Now");
                    if (e < a) {
                        const t = Math.floor(e / 60);
                        return "narrow" === n ? i("{minutes}m", { minutes: t }) : i("{count} {count, plural, one {minute} other {minutes}}", { count: t });
                    }
                    if (e < r) {
                        const t = Math.floor(e / a);
                        return "narrow" === n ? i("{hours}h", { hours: t }) : i("{count} {count, plural, one {hour} other {hours}}", { count: t });
                    }
                    if (e < s) {
                        const t = Math.floor(e / r);
                        return "narrow" === n ? i("{days}d", { days: t }) : i("{count} {count, plural, one {day} other {days}}", { count: t });
                    }
                    if (e < l) {
                        const t = Math.floor(e / s);
                        return "narrow" === n ? i("{weeks}w", { weeks: t }) : i("{count} {count, plural, one {week} other {weeks}}", { count: t });
                    }
                    if (!t || e < 31536e3) {
                        const t = Math.floor(e / l);
                        return "narrow" === n ? i("{months}mo", { months: t }) : i("{count} {count, plural, one {month} other {months}}", { count: t });
                    }
                    return new Date(1e3 * t).toLocaleDateString("en-US");
                },
                o = (e) => new Date(1e3 * e).toLocaleString("en-US", { timeStyle: "short" });
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
            n.d(t, { $: () => s, F: () => l });
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
            async function l(e) {
                return new Promise((t) => {
                    const n = new Image(),
                        a = document.createElement("canvas"),
                        r = a.getContext("2d");
                    (n.onload = () => {
                        const s = Math.min(n.width, n.height);
                        (a.width = s),
                            (a.height = s),
                            r?.drawImage(n, (n.width - s) / 2, (n.height - s) / 2, s, s, 0, 0, s, s),
                            a.toBlob(
                                (n) => {
                                    if (n) {
                                        const a = new File([n], e.name, { type: e.type });
                                        t(a);
                                    }
                                },
                                "image/jpeg",
                                0.8,
                            );
                    }),
                        (n.src = URL.createObjectURL(e));
                });
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
        121113: (e, t, n) => {
            n.d(t, { g: () => r });
            var a = n(202784);
            function r(e) {
                const t = (0, a.useRef)(null != e ? e : void 0);
                return null != e && (t.current = e), t.current;
            }
        },
        48114: (e, t, n) => {
            n.d(t, { D: () => r });
            var a = n(202784);
            function r(e) {
                const t = (0, a.useRef)(void 0);
                return (
                    (0, a.useEffect)(() => {
                        t.current = e;
                    }, [e]),
                    t.current
                );
            }
        },
        14808: (e, t, n) => {
            n.d(t, { E: () => r });
            var a = n(202784);
            function r(e) {
                const t = (0, a.useRef)(e);
                return (t.current = e), (0, a.useCallback)((...e) => t.current(...e), []);
            }
        },
        658358: (e, t, n) => {
            n.d(t, { e: () => g });
            var a = n(159603),
                r = n(256958),
                s = n(202784),
                l = n(455091);
            const i = a.com.x.dms.composer.composer.ComposerToastType,
                o = a.com.x.dms.convinfo.ConversationInfoToast,
                c = a.com.x.dms.ParticipantMenuItem,
                u = a.com.x.dms.newdm.NewDmToast,
                d = a.com.x.dms.addparticipants.AddGroupParticipantsToastType,
                m = a.com.x.dms.convlist.ConvListToastType;
            function g(e) {
                const { t } = (0, l.$G)();
                (0, s.useEffect)(() => {
                    const n = e.subscribe((e) => {
                        const n = (function (e, t) {
                            switch (e) {
                                case i.ATTACHMENT_FAILED:
                                    return t("Unable to load attachment");
                                case i.EDIT_MESSAGE_FAILED:
                                    return t("Edit failed. Please try again later.");
                                case o.ResignAdminFailed:
                                    return t("Unable to resign as Admin");
                                case o.DeleteConversationFailed:
                                    return t("Unable to delete conversation");
                                case o.LeaveGroupFailed:
                                    return t("Unable to leave conversation");
                                case u.FetchError:
                                    return t("An error occurred");
                                case u.CreateGroupFailed:
                                    return t("Unable to create group");
                                case u.CreateOneOnOneFailed:
                                    return t("Unable to start conversation.");
                                case m.PIN_CONVO_FAILED:
                                    return t("Unable to pin conversation");
                                case m.UNPIN_CONVO_FAILED:
                                    return t("Unable to unpin conversation");
                            }
                            if (e instanceof a.com.x.dms.convinfo.ConversationInfoToast.ParticipantMenuItemFailed)
                                switch (e.item) {
                                    case c.AddAsAdmin:
                                        return t("Unable to add user as Admin");
                                    case c.RemoveAsAdmin:
                                        return t("Unable to remove user as Admin");
                                    case c.RemoveFromGroup:
                                        return t("Unable to remove user from group");
                                }
                            if (e instanceof d)
                                switch (e.name) {
                                    case "ADD_PARTICIPANTS_FAILURE":
                                        return t("Unable to add user");
                                    case "SEARCH_FAILURE":
                                        return t("Something went wrong while searching");
                                    case "TOO_MANY_MEMBERS":
                                        return t("Unable to add user. Too many members");
                                }
                            return null;
                        })(e, t);
                        n && (0, r.Am)(n);
                    });
                    return () => {
                        n.cancel();
                    };
                }, [e, t]);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f141c2f6.1d21a76a.js.map
