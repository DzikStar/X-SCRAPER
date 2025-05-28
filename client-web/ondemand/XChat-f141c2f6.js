"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f141c2f6"],
    {
        272795: (e, a, n) => {
            n.d(a, { c: () => o });
            var t = n(552322),
                r = n(159603),
                s = n(941204),
                l = n(466285),
                i = n(759746);
            const o = ({ onClick: e, isSelected: a, suggestion: n }) => (n instanceof r.com.x.dms.NewDmSuggestion.User ? (0, t.jsx)(l.a, { onClick: e, isSelected: a, user: n.user }) : n instanceof r.com.x.dms.NewDmSuggestion.ExistingGroup ? (0, t.jsxs)("div", { className: "flex flex-row w-full gap-2 p-2 items-center hover:bg-gray-50 cursor-pointer rounded-lg", onClick: e, children: [(0, t.jsx)(i.M, { avatarSize: "large", users: n.otherUsers.asJsReadonlyArrayView(), isInlineFacepile: !0 }), (0, t.jsxs)("div", { className: "flex-1 flex-col", children: [(0, t.jsx)(s.x, { children: n.title }), (0, t.jsxs)(s.x, { size: "subtext2", color: "gray700", children: [n.numParticipants, " people"] })] })] }, n.id) : (0, t.jsx)(t.Fragment, {}));
        },
        466285: (e, a, n) => {
            n.d(a, { a: () => u });
            var t = n(552322),
                r = n(159603),
                s = n(256958),
                l = n(703612),
                i = n(242782),
                o = n(350311),
                c = n(336984);
            const u = ({ onClick: e, isSelected: a, isAlreadyParticipant: n, user: u }) => {
                const d = n || !!u.cannotMessageReason;
                return (0, t.jsxs)(
                    "div",
                    {
                        className: "flex flex-row w-full gap-3 p-2 items-center rounded-lg " + (d ? "opacity-20" : "hover:bg-gray-50 cursor-pointer"),
                        onClick: () => {
                            e();
                            const a = ((e) => {
                                switch (e) {
                                    case r.com.x.models.dm.CannotMessageReason.NO_PUBLIC_KEY:
                                        return "This account must set up their PIN before you're able to message them.";
                                    case r.com.x.models.dm.CannotMessageReason.NO_PERMISSION:
                                        return "Sorry! You cannot message this account.";
                                }
                                return null;
                            })(u.cannotMessageReason);
                            a && (0, s.Am)(a);
                        },
                        "aria-disabled": d,
                        children: [(0, t.jsx)(o.s, { url: u.profileImageUrl, size: "xLarge" }), (0, t.jsx)("div", { className: "flex-1", children: (0, t.jsx)(l.R, { name: u.displayName, screenName: u.screenName, badges: (0, c.r)(u), isStacked: !0 }) }), a && (0, t.jsx)("div", { className: "justify-self-end", children: (0, t.jsx)(i.Z, { className: "text-blue-500" }) })],
                    },
                    u.screenName,
                );
            };
        },
        620134: (e, a, n) => {
            n.d(a, { w: () => i });
            var t = n(552322),
                r = n(350311),
                s = n(703612),
                l = n(887491);
            const i = ({ name: e, avatarUrl: a, onRemove: n }) => (0, t.jsxs)("div", { className: "flex items-center rounded-full px-2 py-1 gap-1.5 bg-gray-50 hover:bg-mix-text border border-gray-200 max-w-fit cursor-pointer", onClick: n, children: [(0, t.jsx)(r.s, { url: a, size: "small" }), (0, t.jsx)(s.R, { name: e, size: "subtext1" }), (0, t.jsx)(l.Z, { className: "size-4" })] });
        },
        517922: (e, a, n) => {
            n.d(a, { C: () => s });
            var t = n(552322),
                r = n(702024);
            function s() {
                return (0, t.jsx)("div", { className: "flex items-center gap-2 p-4 bg-gray-100", children: (0, t.jsx)(r.P, { size: "small" }) });
            }
        },
        556160: (e, a, n) => {
            n.d(a, { K: () => u });
            var t = n(552322),
                r = n(130844),
                s = n(26429),
                l = n(703612),
                i = n(559274),
                o = n(862399),
                c = n(796309);
            function u({ post: e, url: a, className: n }) {
                const u = e.post;
                return (0, t.jsxs)(r.r, { href: a, target: "_blank", className: (0, c.cn)("flex flex-col gap-2 h-full w-full border border-gray-200 py-2 px-4 cursor-pointer hover:bg-gray-50/50 transition-colors duration-100", n), children: [(0, t.jsxs)("div", { className: "flex gap-2 items-center", children: [(0, t.jsx)(s.q, { screenName: u.author.screenName, size: "small", url: u.author.profileImageUrl, withLink: "external", shape: u.author.profileImageShape, className: "size-5 shrink-0" }), (0, t.jsxs)("div", { className: "flex items-center gap-1 w-full", children: [(0, t.jsx)(l.R, { badges: u.author.badges, name: u.author.name, size: "subtext1", withLink: "external", screenNameColor: "gray800", screenName: u.author.screenName, isStacked: !1 }), (0, t.jsx)("div", { className: "shrink-0 size-0.5 bg-text/40 rounded-full" }), (0, t.jsx)("div", { className: "shrink-0", children: (0, t.jsx)(i.E, { timestamp: u.createdAt, size: "subtext1", color: "gray800" }) })] })] }), (0, t.jsx)(o.W, { text: u.text, displayTextRange: u.displayTextRange, entities: u.entities })] });
            }
        },
        537335: (e, a, n) => {
            n.d(a, { Q: () => l });
            var t = n(552322),
                r = n(202784),
                s = n(167285);
            const l = ({ timestamp: e, updateIntervalMs: a = 3e4 }) => {
                const [n, l] = (0, r.useState)(Date.now() / 1e3 - e.epochSeconds),
                    i = (0, r.useCallback)(() => {
                        l(Date.now() / 1e3 - e.epochSeconds);
                    }, [e]);
                return (
                    (0, r.useEffect)(() => {
                        i();
                        const e = setInterval(i, a);
                        return () => clearInterval(e);
                    }, [a, i]),
                    (0, t.jsx)(t.Fragment, { children: (0, s.S)({ diffSeconds: n, epochSeconds: e.epochSeconds, style: "narrow" }) })
                );
            };
        },
        910299: (e, a, n) => {
            n.d(a, { r: () => i });
            var t = n(552322),
                r = n(159603),
                s = n(941204),
                l = n(32161);
            const i = ({ conversations: e, onEvent: a }) =>
                (0, t.jsx)("div", {
                    className: "flex overflow-x-auto scrollbar-hide",
                    children: e.map((e) =>
                        (0, t.jsxs)(
                            "div",
                            {
                                className: "flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-lg py-2 px-3",
                                onClick: () => {
                                    a(new r.com.x.dms.convlist.ConversationListEvent.RowClicked(e.conversationId, e.preview?.lastReadSequenceNumber));
                                },
                                children: [(0, t.jsx)("div", { className: "size-14", children: (0, t.jsx)(l.x, { avatarSize: "fill", titleState: e.metadata.title, isInlineFacepile: !0, onCustomAvatarNeedsResolving: () => {} }) }), (0, t.jsx)(s.x, { size: "subtext3", className: "mt-2 text-center text-ellipsis max-w-14", numberOfLines: 2, children: e.metadata.title.title })],
                            },
                            e.conversationId.id,
                        ),
                    ),
                });
        },
        18671: (e, a, n) => {
            n.d(a, { Z: () => x });
            var t = n(552322),
                r = n(849436),
                s = n(458872),
                l = n(436059),
                i = n(844098),
                o = n(130629),
                c = n(941204),
                u = n(202784),
                d = n(264531),
                m = n(718278),
                g = n(664147),
                h = n(173399);
            const p = () =>
                    (0, t.jsx)(l.z, {
                        onClick: () => {
                            (0, h.O)()
                                .then(() => {
                                    location.reload();
                                })
                                .catch((e) => {});
                        },
                        children: "Reset",
                    }),
                y = () => (0, t.jsx)(l.z, { onClick: () => window.dispatchEvent(new Event("xchat_database_backup_event")), children: "Backup" });
            function f() {
                return (0, t.jsxs)("div", { className: "flex flex-col gap-1 w-full", children: [(0, t.jsx)(c.x, { children: "Please close all other tabs with XChat before hitting Reset" }), (0, t.jsxs)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: [(0, t.jsx)(p, {}), (0, t.jsx)(m.o, {})] }), (0, t.jsx)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: (0, t.jsx)(g.i, {}) }), (0, t.jsx)("div", { className: "flex flex-row px-3 py-1.5 gap-2", children: (0, t.jsx)(y, {}) })] });
            }
            const x = () => {
                const [e, a] = (0, u.useState)(!1),
                    { showDebugOptions: n } = (0, d.XE)();
                return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.z, { icon: (0, t.jsx)(r.Z, { className: "h-5 w-5" }), variant: "primaryText", onClick: () => a(!0) }), e && (0, t.jsx)(i.s, { isOpen: !0, onOpenChange: a, isDismissable: !0, children: (0, t.jsxs)("div", { className: "flex flex-1 flex-col w-[40rem] h-[40rem] transition-colors", children: [(0, t.jsx)(o.x, { title: "Settings", leftContent: (0, t.jsx)(l.z, { variant: "primaryText", icon: (0, t.jsx)(s.Z, {}), onClick: () => a(!1) }) }), (0, t.jsx)("div", { className: "flex flex-col items-start gap-3 p-4 border-t overflow-y-auto", children: n && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(c.x, { size: "headline2", weight: "bold", children: "Debug Options" }), (0, t.jsx)(f, {})] }) })] }) })] });
            };
        },
        676337: (e, a, n) => {
            n.d(a, { H: () => r });
            var t = n(202784);
            function r() {
                const [e, a] = (0, t.useState)("visible" === document.visibilityState);
                return (
                    (0, t.useEffect)(() => {
                        const e = () => {
                            a("visible" === document.visibilityState);
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
        176453: (e, a, n) => {
            n.d(a, { N: () => l });
            var t = n(552322),
                r = n(125550),
                s = n(139802);
            const l = ({ groupId: e, token: a, settings: n }) => (e && a ? (0, t.jsx)(s.A, { settings: n, children: (0, t.jsx)(r.M, { groupId: e, token: a }) }) : null);
        },
        671889: (e, a, n) => {
            n.d(a, { g: () => s });
            var t = n(552322),
                r = n(264531);
            function s({ children: e, ...a }) {
                const n = (0, r.XE)().bottomBarHeight;
                return (0, t.jsx)("div", { ...a, style: { paddingBottom: n }, children: e });
            }
        },
        700931: (e, a, n) => {
            n.d(a, { H: () => l });
            var t = n(552322),
                r = n(139802),
                s = n(92184);
            const l = ({ settings: e }) => (0, t.jsx)(r.A, { settings: e, children: (0, t.jsx)(s.p, {}) });
        },
        139802: (e, a, n) => {
            n.d(a, { A: () => y });
            var t = n(552322),
                r = n(446368),
                s = n(455091),
                l = n(668781),
                i = n(202784),
                o = n(107267),
                c = n(607499),
                u = n(968025),
                d = n(727071),
                m = n(768246),
                g = n(264531),
                h = n(368301),
                p = n(173399);
            const y = ({ children: e, settings: a }) => {
                const n = (0, o.useLocation)(),
                    y = (0, o.useHistory)(),
                    [f, x] = (0, i.useState)(new URLSearchParams(n.search)),
                    v = (0, o.useParams)(),
                    { t: w } = (0, s.$G)();
                (0, i.useEffect)(() => {
                    x(new URLSearchParams(n.search));
                }, [n.search]);
                const b = (0, i.useMemo)(() => ({ push: (e, a) => y.push(e, a) }), [y]);
                return (
                    (0, i.useEffect)(() => {
                        (0, p.z)();
                    }, []),
                    (0, t.jsx)(c.S, { message: w("Something went wrong while loading Chat. Please try again later."), children: (0, t.jsx)(u.p, { router: b, children: (0, t.jsx)(r.ng, { children: (0, t.jsx)(d.d, { useParams: () => v, children: (0, t.jsx)(m.x, { searchParams: f, children: (0, t.jsx)(g.mp, { settings: a, children: (0, t.jsxs)(h.U, { children: [e, (0, t.jsx)(l.x, {})] }) }) }) }) }) }) })
                );
            };
        },
        472008: (e, a, n) => {
            n.d(a, { x: () => T });
            var t = n(552322),
                r = n(139802),
                s = n(159603),
                l = n(202784),
                i = n(368301),
                o = n(702024),
                c = n(941204),
                u = n(533476),
                d = n(455091),
                m = n(788452),
                g = n(469745),
                h = n(671889);
            const p = s.com.x.dms.pin.PinEntryTitle,
                y = s.com.x.dms.pin.PinEntrySubtitle,
                f = s.com.x.dms.pin.PinEntryError;
            function x({ component: e }) {
                const { t: a } = (0, d.$G)();
                const n = (0, g.a)("(max-width: 768px)"),
                    r = (0, u._)(e.state),
                    i = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    i.current && i.current.focus();
                }, []);
                return r.isProcessing
                    ? (0, t.jsx)(h.g, { className: "flex w-full min-h-dvh md:h-dvh items-center", children: (0, t.jsx)(o.P, {}) })
                    : (0, t.jsxs)(h.g, {
                          className: `flex flex-col min-h-dvh md:h-dvh w-full ${n ? "items-start" : "items-center"} flex-grow gap-4 py-12 px-12`,
                          onClick: () => {
                              i.current && i.current.focus();
                          },
                          children: [
                              (0, t.jsx)(m.Z, { width: 76, height: 76, className: "rotate-[-8.29deg]" }),
                              (0, t.jsx)(c.x, {
                                  size: "title2",
                                  weight: "bold",
                                  children: (function (e) {
                                      switch (e) {
                                          case p.Create:
                                              return a("Create a 4-digit passcode");
                                          case p.CreateConfirm:
                                              return a("Confirm your passcode");
                                          case p.Recover:
                                          case p.Verify:
                                              return a("Enter your passcode");
                                          case p.Forgot:
                                              return a("Create a new passcode");
                                          case p.ForgotConfirm:
                                              return a("Confirm your new passcode");
                                      }
                                      return "Create a 4-digit passcode";
                                  })(r.title),
                              }),
                              r.subtitle
                                  ? (0, t.jsx)(c.x, {
                                        size: "body",
                                        color: "gray700",
                                        children: (function (e) {
                                            switch (e) {
                                                case y.Create:
                                                    return a("A personal key that secures your messages.");
                                                case y.Recover:
                                                    return a("Your PIN is required to recover your encryption keys so we can decrypt your previous messages.");
                                                case y.Verify:
                                                    return a("To ensure you remember your PIN, we'll request it periodically. These prompts will become less frequent over time.");
                                                case y.Forgot:
                                                    return a("Make sure to remember it, as we will occasionally need you to verify.");
                                            }
                                            return "";
                                        })(r.subtitle),
                                    })
                                  : null,
                              (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-3 " + (n ? "items-start" : "items-center"),
                                  children: [
                                      (0, t.jsx)("div", { className: "flex justify-center gap-4 mt-6 bg-background", children: [0, 1, 2, 3].map((e) => (0, t.jsx)("div", { className: "h-4 w-4 rounded-full " + (e < r.currentPinText.length ? "bg-text" : "bg-gray-600") }, e)) }),
                                      (0, t.jsx)("input", {
                                          ref: i,
                                          type: "number",
                                          inputMode: "numeric",
                                          pattern: "[0-9]*",
                                          maxLength: 4,
                                          value: r.currentPinText,
                                          onChange: (a) => {
                                              e.handleEvent(new s.com.x.dms.pin.DmPinEntryEvent.OnPinValueChanged(a.target.value));
                                          },
                                          className: "opacity-0 absolute",
                                      }),
                                      r.error
                                          ? (0, t.jsx)(c.x, {
                                                size: "subtext1",
                                                weight: "medium",
                                                color: "red500",
                                                children: (function (e) {
                                                    if (e instanceof f.InvalidPin) {
                                                        const n = e.remainingGuesses;
                                                        return n ? a("The PIN you entered was incorrect. After {remainingGuesses} more incorrect attempts, your messages will be locked.", { remainingGuesses: n }) : a("The PIN you entered was incorrect");
                                                    }
                                                    switch (e) {
                                                        case f.PinMismatch:
                                                            return a("The PIN codes did not match. Please start over.");
                                                        case f.NotRegistered:
                                                            return a("Could not find your registration. Please try again later.");
                                                        case f.InvalidAuth:
                                                            return a("Invalid authentication. Please try again.");
                                                        case f.UpgradeRequired:
                                                            return a("Your app is too old to use this feature. Please update.");
                                                        case f.Assertion:
                                                            return a("Something was configured incorrectly. We are looking into it.");
                                                        case f.Transient:
                                                            return a("Something went wrong. Please check your network connection and try again.");
                                                        case f.RateLimitExceeded:
                                                            return a("Rate limit exceeded. Please try again later.");
                                                        case f.PublicKeysFetchFailed:
                                                            return a("Unable to communicate with server. Please check your network connection and try again.");
                                                        case f.KeyReconstructionFailed:
                                                            return a("Unable to recover your keys. We are looking into it.");
                                                        case f.NoJuiceboxTokens:
                                                            return a("No authentication token available. We are looking into it.");
                                                        default:
                                                            return a("An unknown error occurred.");
                                                    }
                                                })(r.error),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      });
            }
            var v = n(379342),
                w = n(264531),
                b = n(18671),
                k = n(867400),
                _ = n(231037);
            const j = s.com.x.navigation.PinEntryMode;
            function S({ mode: e }) {
                const [a, n] = (0, l.useState)(null),
                    r = (0, i.n)(),
                    o = (0, v.s)(),
                    { showDebugOptions: u } = (0, w.XE)(),
                    d = (0, k.a)(),
                    m = (0, _.l)();
                return (
                    (0, l.useEffect)(() => {
                        const a = new s.com.x.export.CancellationSignal(),
                            t = r.dmPinEntryComponent(
                                (function (e, a, n) {
                                    switch (e) {
                                        case "recovery":
                                            return j.Recovery;
                                        case "new":
                                            return j.NewKeypair;
                                        case "forgot":
                                            return j.ForgotPin;
                                        case "verify":
                                            return new j.Verify(!!a, !!n);
                                    }
                                })(e, d, m),
                                new s.com.x.dms.pin.DmPinEntryCallbacks(() => {
                                    o.toInbox();
                                }),
                                a,
                            );
                        return (
                            n(t),
                            () => {
                                a.cancel();
                            }
                        );
                    }, [r, e, o, d, m]),
                    (0, t.jsxs)(t.Fragment, { children: [u && (0, t.jsx)("div", { className: "absolute top-4 right-4", children: (0, t.jsx)(b.Z, {}) }), null != a ? (0, t.jsx)(x, { component: a }) : (0, t.jsx)(c.x, { children: "Loading" })] })
                );
            }
            const F = ["recovery", "new", "forgot", "verify"],
                T = ({ mode: e, settings: a }) => (F.includes(e) ? (0, t.jsx)(r.A, { settings: a, children: (0, t.jsx)(S, { mode: e }) }) : null);
        },
        664147: (e, a, n) => {
            n.d(a, { e: () => i, i: () => o });
            var t = n(552322),
                r = n(941204),
                s = n(849335),
                l = n(202784);
            const i = "top_cursor",
                o = () => {
                    const [e, a] = (0, l.useState)("true" === localStorage.getItem(i) || !1);
                    return (0, t.jsxs)("div", {
                        className: "flex flex-row items-center gap-1 border border-solid rounded-lg p-2",
                        children: [
                            (0, t.jsx)(r.x, { weight: "bold", color: "gray700", children: "Top cursor" }),
                            (0, t.jsx)(s.r, {
                                checked: e,
                                onCheckedChange: (e) => {
                                    a(e), localStorage.setItem(i, e ? "true" : "false");
                                },
                            }),
                        ],
                    });
                };
        },
        686524: (e, a, n) => {
            n.r(a), n.d(a, { default: () => p });
            const t = {
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
                                                                                (h = {
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
                operation: { argumentDefinitions: r, kind: "Operation", name: "fetchPostQuery", selections: [{ alias: null, args: s, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [o, c, u, { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [u, d, m, g, h, c], type: "User", abstractKey: null }], storageKey: null }, c], storageKey: null }], storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }, c], storageKey: null }] },
                params: { id: "BrdmgaNbXWZa4D4KLY-hCA", metadata: {}, name: "fetchPostQuery", operationKind: "query", text: null },
            };
            var r, s, l, i, o, c, u, d, m, g, h;
            t.hash = "6b931e47d1ab528a8de40a76cc4aef9e";
            const p = t;
        },
        84504: (e, a, n) => {
            n.d(a, { n5: () => r });
            var t = n(625067);
            function r() {
                const e = (0, t.Qc)(document.cookie);
                return e.twid?.slice(2) || "0";
            }
        },
        842898: (e, a, n) => {
            n.d(a, { S: () => r });
            var t = n(889906);
            async function r(e, a) {
                return (0, t.fetchQuery)(a, s, { id: e }, { fetchPolicy: "store-or-network" })
                    .toPromise()
                    .then((a) => {
                        const n = a?.tweet_result_by_rest_id?.result;
                        if (!n || "Tweet" !== n.__typename) return null;
                        let t, r;
                        switch (("Badge" === n.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_display_type && "BusinessLabel" === n.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_type && n.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge && (t = { label: n.core?.user_results?.result?.affiliates_highlighted_label?.label?.description, url: n.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge?.url }), n.core?.user_results?.result?.legacy?.verified_type)) {
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
                        return { id: e, text: n.legacy?.full_text, author: { id: n.core?.user_results?.result?.rest_id, name: n.core?.user_results?.result?.legacy?.name, screenName: n.core?.user_results?.result?.legacy?.screen_name, avatar: n.core?.user_results?.result?.legacy?.profile_image_url_https, badges: { affiliation: t, verifiedType: r }, profileImageUrl: n.core?.user_results?.result?.legacy?.profile_image_url_https, profileImageShape: n.core?.user_results?.result?.profile_image_shape?.toLowerCase() }, displayTextRange: n.legacy?.display_text_range, entities: n.legacy?.entities, createdAt: n.legacy?.created_at };
                    });
            }
            const s = n(686524);
        },
        336984: (e, a, n) => {
            n.d(a, { r: () => s });
            var t = n(159603);
            const r = (e) => {
                    switch (e) {
                        case t.com.x.models.VerifiedType.User:
                            return "user";
                        case t.com.x.models.VerifiedType.Business:
                            return "business";
                        case t.com.x.models.VerifiedType.Government:
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
        173399: (e, a, n) => {
            n.d(a, { O: () => i, z: () => o });
            var t = n(84504);
            async function r(e) {
                return new Promise((a, n) => {
                    const t = setTimeout(() => {
                            n(new Error("Database deletion timeout"));
                        }, 5e3),
                        r = new BroadcastChannel(`${e}_chat`);
                    (r.onmessage = ({ data: e }) => {
                        "before_logout_done" === e?.action && (clearTimeout(t), r.close(), a());
                    }),
                        r.postMessage({ action: "before_logout" }),
                        window.dispatchEvent(new Event("xchat_before_unload_event")),
                        setTimeout(async () => {
                            try {
                                await s(e),
                                    await (async function (e) {
                                        try {
                                            const a = await navigator.storage.getDirectory(),
                                                n = await a.getDirectoryHandle("backups", { create: !0 }),
                                                t = `chat_${e}.db`;
                                            try {
                                                return await n.getFileHandle(t), await n.removeEntry(t), !0;
                                            } catch (e) {
                                                return !1;
                                            }
                                        } catch (e) {
                                            return !1;
                                        }
                                    })(e),
                                    clearTimeout(t),
                                    a();
                            } catch (e) {
                                clearTimeout(t), n(e instanceof Error ? e : new Error("Deletion failed"));
                            }
                        }, 300);
                });
            }
            async function s(e) {
                try {
                    const a = await navigator.storage.getDirectory();
                    for await (const n of a.values())
                        if ("directory" === n.kind && n.name.startsWith(`.${e}_chat_`))
                            try {
                                await a.removeEntry(n.name, { recursive: !0 });
                            } catch (e) {}
                } catch (e) {}
            }
            const l = async () => {
                try {
                    const e = await navigator.storage.getDirectory(),
                        a = await e.getDirectoryHandle("dm-dev-logs", { create: !0 }),
                        n = Date.now() - 1728e5;
                    for await (const [e] of a.entries())
                        try {
                            const t = e.match(/.*-(\d{4}-\d{2}-\d{2})\.txt$/);
                            if (!t) continue;
                            const r = t[1];
                            if (!r) continue;
                            new Date(r).getTime() < n && (await a.removeEntry(e));
                        } catch (e) {}
                } catch (e) {}
            };
            async function i() {
                const e = (0, t.n5)();
                await (async function (e) {
                    try {
                        const a = await navigator.storage.getDirectory();
                        await a.removeEntry(`dm-files-${e}`, { recursive: !0 });
                    } catch (e) {
                        e instanceof DOMException && e.name;
                    }
                })(e),
                    await r(e);
            }
            async function o() {
                const e = (0, t.n5)();
                await s(e), await l();
            }
        },
        167285: (e, a, n) => {
            n.d(a, { H: () => u, S: () => c });
            const t = 3600,
                r = 86400,
                s = 604800,
                l = 2592e3,
                i = { minute: { narrow: "m", long: "minute" }, hour: { narrow: "h", long: "hour" }, day: { narrow: "d", long: "day" }, week: { narrow: "w", long: "week" }, month: { narrow: "mo", long: "month" } },
                o = (e, a, n) => {
                    switch (n) {
                        case "narrow":
                            return i[a][n];
                        case "long": {
                            const t = 1 !== e;
                            return ` ${i[a][n]}${t ? "s" : ""}`;
                        }
                    }
                },
                c = ({ diffSeconds: e, epochSeconds: a, style: n }) => {
                    if (e < 60) return "Now";
                    if (e < t) {
                        const a = Math.floor(e / 60);
                        return `${a}${o(a, "minute", n)}`;
                    }
                    if (e < r) {
                        const a = Math.floor(e / t);
                        return `${a}${o(a, "hour", n)}`;
                    }
                    if (e < s) {
                        const a = Math.floor(e / r);
                        return `${a}${o(a, "day", n)}`;
                    }
                    if (e < l) {
                        const a = Math.floor(e / s);
                        return `${a}${o(a, "week", n)}`;
                    }
                    if (!a || e < 31536e3) {
                        const a = Math.floor(e / l);
                        return `${a}${o(a, "month", n)}`;
                    }
                    return new Date(1e3 * a).toLocaleDateString("en-US");
                },
                u = (e) => new Date(1e3 * e).toLocaleString("en-US", { timeStyle: "short" });
        },
        369962: (e, a, n) => {
            n.d(a, { L: () => t });
            const t = (e) => {
                const a = Math.floor(e / 1e3),
                    n = Math.floor(a / 60),
                    t = Math.floor(n / 60),
                    r = Math.floor(t / 24),
                    s = Math.floor(r / 7),
                    l = (e, a) => `${e} ${a}${1 !== e ? "s" : ""}`;
                return s > 0 ? l(s, "week") : r > 0 ? l(r, "day") : t > 0 ? l(t, "hour") : n > 0 ? l(n, "minute") : l(a, "second");
            };
        },
        595117: (e, a, n) => {
            n.d(a, { $: () => s });
            const t = "temp-files";
            async function r(e) {
                const a = await navigator.storage.getDirectory(),
                    n = await a.getDirectoryHandle(t, { create: !0 }),
                    r = (function (e) {
                        return `${Date.now()}-${e}`.replace(/\s/g, "_");
                    })(e.name),
                    s = await n.getFileHandle(r, { create: !0 }),
                    l = await s.createWritable();
                return await l.write(e), await l.close(), `${t}/${r}`;
            }
            async function s(e, a, n) {
                try {
                    a();
                    n(await r(e));
                } catch (e) {}
            }
        },
        950849: (e, a, n) => {
            n.d(a, { E: () => r });
            var t = n(202784);
            const r = (e, a) => {
                (0, t.useEffect)(() => {
                    const n = e.subscribe(a);
                    return () => {
                        n.cancel();
                    };
                }, [e, a]);
            };
        },
        748055: (e, a, n) => {
            n.d(a, { F: () => s });
            var t = n(202784),
                r = n(595117);
            function s({ onFileDrop: e, onFileAttached: a, isEnabled: n }) {
                const [s, l] = (0, t.useState)(!1);
                return {
                    isDragging: s,
                    handleDragOver: (0, t.useCallback)(
                        (e) => {
                            e.preventDefault(), e.stopPropagation(), n && l(!0);
                        },
                        [n],
                    ),
                    handleDragLeave: (0, t.useCallback)((e) => {
                        e.preventDefault(), e.stopPropagation(), l(!1);
                    }, []),
                    handleDrop: (0, t.useCallback)(
                        async (t) => {
                            if ((t.preventDefault(), t.stopPropagation(), l(!1), !n)) return;
                            const s = t.dataTransfer.files[0];
                            s && (await (0, r.$)(s, e, a));
                        },
                        [n, e, a],
                    ),
                };
            }
        },
        533476: (e, a, n) => {
            n.d(a, { _: () => r });
            var t = n(202784);
            function r(e) {
                const [a, n] = (0, t.useState)(e.state);
                return (
                    (0, t.useEffect)(() => {
                        const a = e.subscribe(n);
                        return () => {
                            a.cancel();
                        };
                    }, [e]),
                    a
                );
            }
        },
        658358: (e, a, n) => {
            n.d(a, { e: () => d });
            var t = n(159603),
                r = n(256958),
                s = n(202784);
            const l = t.com.x.dms.composer.composer.ComposerToastType,
                i = t.com.x.dms.convinfo.ConversationInfoToast,
                o = t.com.x.dms.ParticipantMenuItem,
                c = t.com.x.dms.newdm.NewDmToast,
                u = t.com.x.dms.addparticipants.AddGroupParticipantsToastType;
            function d(e) {
                (0, s.useEffect)(() => {
                    const a = e.subscribe((e) => {
                        const a = (function (e) {
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
                            if (e instanceof t.com.x.dms.convinfo.ConversationInfoToast.ParticipantMenuItemFailed)
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
                        a && (0, r.Am)(a);
                    });
                    return () => {
                        a.cancel();
                    };
                }, [e]);
            }
        },
        858108: (e, a, n) => {
            function t() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }
            n.d(a, { G: () => t });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f141c2f6.4912abea.js.map
