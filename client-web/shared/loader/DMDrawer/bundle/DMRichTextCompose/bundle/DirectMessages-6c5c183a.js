"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6c5c183a"],
    {
        477403: (e, t, n) => {
            n.d(t, { eY: () => p, si: () => g, vC: () => d });
            n(543673), n(240753), n(128399);
            var a = n(395337),
                o = n(202784),
                i = (n(585488), n(516951)),
                r = n(952793),
                s = n(16222),
                c = n(125363),
                l = n(919022),
                u = n(535338);
            function d(e) {
                return (0, c.v9)(p);
            }
            function p(e) {
                return (function (e) {
                    if (!e) return;
                    const t = (0, s.o)(() => new URL(e), i.Z);
                    if (!t || !m.includes(t.host)) return;
                    const n = t.pathname.slice(1).toLowerCase();
                    return v[n];
                })(l.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const m = ["twitter.com", "x.com"],
                v = { xai: "1661523610111193088" },
                f = Object.values(v),
                b = a.Z;
            function g() {
                const e = (0, u.p)(b, {}),
                    t = (0, r.hC)("spaces_conference_enabled");
                return o.useMemo(() => {
                    const n = e.affiliations?.affiliated_account_ids_results,
                        a = (
                            n?.flatMap(({ rest_id: e, result: t }) => {
                                if ("User" !== t?.__typename) return [];
                                return [{ name: t.legacy.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => f.includes(e));
                    return t && !a.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...a] : a;
                }, [e.affiliations?.affiliated_account_ids_results, t]);
            }
        },
        441790: (e, t, n) => {
            n.d(t, { N: () => s });
            var a = n(789990),
                o = (n(585488), n(351743)),
                i = n.n(o);
            const r = a.Z,
                s = () => {
                    const [e] = i()(r);
                    return (t) => {
                        e({ variables: { conversationId: t } }).dispose();
                    };
                };
        },
        164383: (e, t, n) => {
            n.d(t, { _g: () => U, fK: () => T });
            var a = n(807896),
                o = (n(136728), n(202784)),
                i = n(400752),
                r = n(565058),
                s = n(107267),
                c = n(154003),
                l = n(811176),
                u = n(213279),
                d = n(420182),
                p = n(297436),
                m = n(66242),
                v = n(908599),
                f = n(625555),
                b = n(125363),
                g = n(296196),
                h = n(798538),
                y = n(390387),
                _ = n(919022),
                C = n(477403);
            const E = "Create Conference",
                x = { label: E },
                S = o.createElement(u.default, null);
            function T(e) {
                return o.createElement(o.Suspense, { fallback: null }, o.createElement(M, e));
            }
            function M(e) {
                const t = (0, C.si)(),
                    n = o.useContext(U),
                    a = e.conversationId ?? n,
                    i = (function (e) {
                        return (0, b.v9)((t) => {
                            if (!e) return !0;
                            const n = g.selectConversation(t, e)?.data,
                                a = n?.participants.map(({ user_id: e }) => e),
                                o = (0, y._h)(t);
                            return !a || (1 === a.length && a[0] === o);
                        });
                    })(a);
                if (t.length && a && !i) return o.createElement(o.Suspense, { fallback: A }, o.createElement(k, { conversationId: a }));
            }
            const A = o.createElement(O, null);
            function k({ conversationId: e }) {
                (0, i.Dv)(N);
                const t = (0, i.b9)(N),
                    n = (0, s.useHistory)(),
                    r = (0, C.si)(),
                    l = r[0].id,
                    u = o.useCallback(() => {
                        t({ conversationId: e, conferenceAffiliateId: l, history: n });
                    }, [l, e, t, n]),
                    d = r.length > 1 ? { renderMenu: Z(e) } : { onPress: u };
                return o.createElement(c.ZP, (0, a.Z)({ "aria-label": E, hoverLabel: x, icon: S }, d, { type: "primaryText" }));
            }
            function O() {
                return o.createElement(c.ZP, { "aria-label": E, disabled: !0, hoverLabel: x, icon: S, type: "primaryText" });
            }
            const Z = (e) => (t) => o.createElement(w, { conversationId: e, onClose: t });
            function w({ conversationId: e, onClose: t }) {
                const n = (function (e) {
                    const t = (0, C.si)(),
                        [, n] = (0, i.KO)(N),
                        a = (0, s.useHistory)();
                    return t.map(({ id: t, name: o }) => ({
                        text: o,
                        onClick: () => {
                            n({ history: a, conversationId: e, conferenceAffiliateId: t });
                        },
                    }));
                })(e);
                return o.createElement(l.Z, { items: n, onCloseRequested: t, shouldCloseOnClick: !0 });
            }
            const N = (0, v.Y)(async (e, t, n) => {
                    const { conferenceAffiliateId: a, conversationId: o, history: i } = n,
                        { title: r, userIds: s } = t(P, o);
                    if (!r || !s) return;
                    const c = e(f.F6),
                        { key: l } = await c.scheduleConference({ title: r, attendeesUserIds: s, orgId: a }),
                        u = `/i/conferences/${l}`,
                        d = `https://x.com${u}`;
                    await t(I, { conversationId: o, text: `Join the conference: ${d}` }), i.push(u);
                }),
                P = (0, r.cn)(null, (e, t, n) => {
                    const a = e(d.qc).getState(),
                        o = g.selectConversation(a, n)?.data,
                        i = _.ZP.selectAll(a),
                        r = g.selectEntries(a),
                        s = o && (0, p.E5)(o, r, i),
                        c = s && (0, m.ZP)(s),
                        l = o?.participants.map(({ user_id: e }) => e);
                    return { title: c, userIds: l };
                });
            const I = (0, r.cn)(null, (e, t, n) => {
                    const a = e(d.qc),
                        o = (0, y._h)(a.getState());
                    return a.dispatch(h.bG({ senderId: o, ...n }));
                }),
                U = o.createContext();
        },
        664684: (e, t, n) => {
            n.d(t, { ZP: () => G });
            n(136728);
            var a = n(202784),
                o = n(325686),
                i = n(107267),
                r = n(731708),
                s = n(190286),
                c = n(392237),
                l = n(674132),
                u = n.n(l),
                d = n(443781),
                p = n(90411),
                m = n(376293),
                v = n(712816),
                f = n(879596),
                b = n(275365),
                g = (n(147143), n(340130)),
                h = n(593953),
                y = n(71620),
                _ = n(668214),
                C = n(296196),
                E = n(601576),
                x = n(919022);
            const S = (0, _.Z)()
                .propsFromActions(() => ({ addToast: E.fz, block: x.ZP.block, createLocalApiErrorHandler: (0, y.zr)("UNTRUSTED_CONVERSATION_ACTIONS"), muteDMUser: C.muteDMUser, unmuteDMUser: C.unmuteDMUser, unblock: x.ZP.unblock }))
                .withAnalytics({ element: "untrusted_interstitial" });
            var T = n(67369),
                M = n(154003),
                A = n(807896),
                k = n(30899),
                O = n(187891);
            const Z = u().ccf2f24e,
                w = u().ib3fe8aa,
                N = ({ isGroup: e, onBlockClick: t, onReportClick: n, requestorScreenName: o }) => {
                    const i = { type: "destructiveOutlined" },
                        r = a.createElement(M.ZP, (0, A.Z)({}, i, { role: "button" }), w),
                        s = a.createElement(M.ZP, (0, A.Z)({}, i, { onPress: n }), Z),
                        c = a.useCallback((e, i) => a.createElement(O.ZP, { dismiss: e, flatBorders: "sheet" === i, onBlockClick: t, onReportClick: n, requestorScreenName: o, showBlock: !0, showCancel: "sheet" === i }), [t, n, o]);
                    return e ? s : a.createElement(k.Z, { renderContent: c }, r);
                },
                P = (e) => {
                    const t = a.useContext(d.rC),
                        { viewerUserId: n } = t,
                        i = (0, T.yu)();
                    return a.createElement(o.Z, { style: I.actionsContainer }, a.createElement(M.ZP, { onPress: () => e.onAccept(), size: "medium", style: [I.actionFullWidth, I.actionMarginBottom], type: "primaryOutlined" }, e.acceptButtonText), a.createElement(o.Z, { style: i ? I.actionFullWidth : [I.actionHalfWidth, I.actionMarginEnd] }, a.createElement(N, { isGroup: e.isGroup, onBlockClick: () => e.onBlock(), onReportClick: () => e.onReport(), requestorScreenName: (0, h.vm)(e.conversation, n).screenName })), a.createElement(M.ZP, { onPress: () => e.onLeave(), size: "medium", style: i ? [I.actionFullWidth, I.actionMarginTop] : [I.actionHalfWidth, I.actionMarginStart], type: "destructiveOutlined" }, e.declineButtonText));
                },
                I = c.default.create((e) => ({ actionsContainer: { display: "flex", flexWrap: "wrap", flexDirection: "row" }, actionFullWidth: { width: "100%" }, actionHalfWidth: { width: `calc(50% - ${e.spaces.space4})` }, actionMarginEnd: { marginEnd: e.spaces.space4 }, actionMarginStart: { marginStart: e.spaces.space4 }, actionMarginTop: { marginTop: e.spaces.space12 }, actionMarginBottom: { marginBottom: e.spaces.space12 } })),
                U = u().da878dc0,
                R = u().d96cf7ce,
                B = (u().gde6b425, u().e308019b, u().gf5e9ea6, u().hc52446c),
                D = u().f7e1ad65,
                L = { headline: u().gdf4b790, text: u().bbf83d84, confirmButtonLabel: u().bb1d57b6 },
                V = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, copy: { paddingBottom: e.spaces.space20 } })),
                G = S((e) => {
                    const { analytics: t, conversation: n } = e,
                        c = a.useContext(d.rC),
                        l = (0, i.useHistory)(),
                        u = (0, i.useLocation)(),
                        [y, _] = a.useState(!1),
                        [C, E] = a.useState(!1),
                        x = a.useCallback(() => ({ items: [{ conversation_type: n.type === b.eD.GROUP ? g.NK.GROUP : g.NK.ONE_TO_ONE }] }), [n.type]),
                        S = a.useCallback(
                            (e, n) => {
                                t.scribe({ action: e, data: n || x() });
                            },
                            [t, x],
                        );
                    a.useEffect(() => {
                        S("impression");
                    }, [S]);
                    const T = () => {
                            _(!1);
                        },
                        M = () => {
                            E(!1);
                        },
                        A = () => {
                            const { conversationId: t, inboxType: a, leaveConversation: o } = e,
                                i = n.type === b.eD.GROUP ? "leave_group" : "delete_thread",
                                r = n?.participants.length || 0,
                                s = u?.state?.position || 0,
                                c = { conversation_type: n?.type === b.eD.GROUP ? g.NK.GROUP : g.NK.ONE_TO_ONE, conversation_id: t, conversation_participant_count: r, position: s, inbox_type: (0, h.e4)(a), entry_point: g.eR.REQUEST_ACTION_SHEET };
                            _(!1), o({ conversationId: t }), S(i, c), k();
                        },
                        k = () => {
                            const { inboxType: t } = e;
                            l.push((0, h.k2)(t));
                        },
                        O = (t) => () => {
                            const { addToast: n, block: a, createLocalApiErrorHandler: o } = e;
                            E(!1),
                                a(t).then(() => {
                                    n({ action: { label: p.F0, onAction: Z(t) }, text: p.KV });
                                }, o(v.d)),
                                S("block");
                        },
                        Z = (t) => () => {
                            const { createLocalApiErrorHandler: n, unblock: a } = e;
                            a(t).catch(n(f.D)), S("unblock");
                        },
                        w = (n && n.type) === b.eD.GROUP;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            o.Z,
                            { style: V.root },
                            ((e) => {
                                const { viewerUserId: t } = c;
                                return a.createElement(r.ZP, { style: V.copy }, e ? B : D({ senderName: (0, h.vm)(n, t).name }));
                            })(w),
                            a.createElement(P, {
                                acceptButtonText: U,
                                conversation: n,
                                declineButtonText: R,
                                isGroup: w,
                                onAccept: () => {
                                    (() => {
                                        const { acceptConversation: t, analytics: a, conversationId: o, inboxType: i } = e,
                                            r = n?.participants.length || 0,
                                            s = u?.state?.position || 0;
                                        o && (t(o), a.scribe({ action: "accept", data: { conversation_id: o, conversation_type: n.type === b.eD.GROUP ? g.NK.GROUP : g.NK.ONE_TO_ONE, conversation_participant_count: r, entry_point: g.eR.REQUEST_ACTION_SHEET, inbox_type: (0, h.e4)(i), position: s } }));
                                    })();
                                },
                                onBlock: () => {
                                    _(!1), E(!0);
                                },
                                onLeave: () => {
                                    _(!0), E(!1);
                                },
                                onReport: () => {
                                    const { analytics: t, conversationId: n, inboxType: a } = e;
                                    n && (S("report"), l.push((0, h.BB)(n, window.location.pathname, t.contextualScribeNamespace, a)));
                                },
                            }),
                        ),
                        y ? a.createElement(s.Z, { confirmButtonLabel: L.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: L.headline, onCancel: T, onConfirm: A, text: L.text }) : null,
                        C
                            ? (() => {
                                  const { featureSwitches: e, viewerUserId: t } = c,
                                      { idStr: a, screenName: o } = (0, h.vm)(n, t);
                                  return (0, m.ed)({ confirmation: (0, m.$f)(o, e.isTrue("xprofile_blocked_by_view_enabled")), onClose: M, handleConfirm: O(a) });
                              })()
                            : null,
                    );
                });
        },
        715913: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = n(202784).createContext({ isDrawer: !1 });
        },
        386714: (e, t, n) => {
            n.d(t, { F: () => s });
            n(136728);
            var a = n(461756),
                o = n(392237),
                i = n(912021),
                r = n(503196);
            const s = function (e, t) {
                    return c(e, a.Z.reducedMotionEnabled, t);
                },
                c = (0, i.Z)(function (e, t, n) {
                    const i = (function (e) {
                        const { DMUserAvatarSizePx: t, DMUserAvatarSpacerPx: n } = (0, r.Z)(o.default.theme.scale),
                            i = d[o.default.theme.scale],
                            s = l / i,
                            c = u / t,
                            v = u / 2,
                            f = u - v,
                            b = u - v - n;
                        return { cssTransition: a.Z.reducedMotionEnabled ? {} : { transition: `transform ${m}, opacity ${m}` }, messageContainer: { base: { transform: [{ translateX: 0 }] }, active: { sent: { transform: [{ translateX: (e ? 1 : -1) * f }] }, received: { transform: [{ translateX: (e ? -1 : 1) * b }] } } }, actionsContainer: { base: { transform: [{ translateX: 0 }] }, active: { sent: { transform: [{ translateX: (e ? 1 : -1) * p[o.default.theme.scale] }] }, received: { transform: [{ translateX: (e ? -1 : 1) * (p[o.default.theme.scale] + b) - v }] } } }, voiceMessage: { container: { base: { height: i }, active: { height: l } }, base: { height: i, transform: [{ scale: 1 }] }, active: { base: { transform: [{ scale: s }] }, sent: { paddingEnd: v / s, transformOrigin: e ? "bottom left" : "bottom right" }, received: { paddingStart: v / s, transformOrigin: e ? "bottom right" : "bottom left" } } }, userAvatar: { base: { transform: [{ scale: 1 }] }, sent: { transformOrigin: e ? "bottom left" : "bottom right" }, received: { transformOrigin: e ? "bottom right" : "bottom left" }, active: { opacity: 1, pointerEvents: "all", transform: [{ scale: c }] }, visuallyHidden: { opacity: 0, pointerEvents: "none" } } };
                    })(n);
                    return {
                        actionsContainer: function ({ isSent: e, isVoiceMessageActive: t }) {
                            const n = [i.cssTransition, i.actionsContainer.base];
                            return t && n.push(e ? i.actionsContainer.active.sent : i.actionsContainer.active.received), n;
                        },
                        messageContainer: function ({ isSent: e, isVoiceMessageActive: t }) {
                            const n = [i.cssTransition, i.messageContainer.base];
                            return t && n.push(e ? i.messageContainer.active.sent : i.messageContainer.active.received), n;
                        },
                        voiceMessageContainer: function ({ isSent: e, isVoiceMessageActive: t }) {
                            const n = [i.cssTransition, i.voiceMessage.container.base];
                            return t && n.push(i.voiceMessage.container.active), n;
                        },
                        voiceMessage: function ({ isSent: e, isVoiceMessageActive: t }) {
                            const n = [i.cssTransition, i.voiceMessage.base];
                            return t && (n.push(i.voiceMessage.active.base), n.push(e ? i.voiceMessage.active.sent : i.voiceMessage.active.received)), n;
                        },
                        userAvatar: function ({ isSent: e, isVoiceMessageActive: t }) {
                            const n = [i.cssTransition, i.userAvatar.base, e ? i.userAvatar.sent : i.userAvatar.received];
                            return t ? n.push(i.userAvatar.active) : e && n.push(i.userAvatar.visuallyHidden), n;
                        },
                    };
                });
            const l = 60,
                u = l,
                d = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
                p = { xSmall: 72.26, small: 165.61 - 89.3, normal: 158.22 - 94.4, large: 166.64 - 100.58, xLarge: 181.55 - 111.81 },
                m = "0.2s 0s ease-in-out";
        },
        313758: (e, t, n) => {
            n.d(t, { kr: () => g, Eg: () => b });
            var a = n(202784),
                o = n(443781),
                i = n(593953),
                r = n(135328);
            function s() {
                const e = a.useContext(g),
                    [t, n] = e.activeVoiceMessage,
                    [, o] = e.playerApi,
                    [, i] = e.playerState,
                    [, s] = t;
                const c = {
                    media: s,
                    onEnded: function () {
                        n([null, null]), e.scribeAction && e.scribeAction.complete();
                    },
                    onPlayerApi: o,
                    onPlayerState: i,
                };
                return a.createElement(r.Z, c);
            }
            n(571372);
            var c = n(481399),
                l = n(725405);
            function u(e) {
                const t = (function () {
                    const e = a.useState(m.activeVoiceMessage),
                        t = a.useState(m.playerApi),
                        n = a.useState(m.playerState),
                        o = (function () {
                            const e = (0, l.Z)();
                            return a.useMemo(() => {
                                const t = { page: "messages", section: "thread", component: "message", element: "voice" };
                                function n({ action: e, component: n = t.component }) {
                                    const { element: a, page: o, section: i } = t;
                                    return { page: o, section: i, component: n, element: a, action: e };
                                }
                                const a = (t, a) => (a ? (a.data ? e.scribe({ ...n({ action: t }), data: a.data }) : e.scribe({ ...n({ action: t, component: p(a) }) })) : e.scribe({ ...n({ action: t }) }));
                                return { impression: (e) => a("impression", e), report: (e) => a("report", e), play: (e) => a("play", e), pause: () => a("pause"), complete: () => a("complete") };
                            }, [e]);
                        })();
                    return { activeVoiceMessage: e, playerApi: t, playerState: n, scribeAction: o };
                })();
                return a.createElement(v.Provider, { value: t }, e.children);
            }
            const d = { Timelines: (0, c.Z)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }) };
            function p({ isLowQuality: e, isTrusted: t }) {
                return t ? d.Timelines.inbox_timeline : e ? d.Timelines.low_quality_timeline : d.Timelines.requests_timeline;
            }
            const m = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
                v = a.createContext({ activeVoiceMessage: [m.activeVoiceMessage, f], playerApi: [m.playerApi, f], playerState: [m.playerState, f], scribeAction: null });
            function f() {
                throw new Error("DMVoiceContext is not initialized");
            }
            function b(e) {
                const { featureSwitches: t } = a.useContext(o.rC);
                return (0, i.LK)(t) ? a.createElement(u, null, e.children, a.createElement(s, null)) : e.children;
            }
            const g = v;
        },
        956783: (e, t, n) => {
            n.d(t, { Q: () => o, R: () => i });
            var a = n(340130);
            const o = (e, t, n, o) => {
                    e.scribe({ ...e.contextualScribeNamespace, element: t, action: "send_dm", data: { conversation_id: n.conversation_id, conversation_participant_count: n?.participants ? n.participants.length : 0, conversation_type: o ? a.NK.GROUP : a.NK.ONE_TO_ONE } });
                },
                i = (e, t, n, o) => {
                    e.scribe({ ...e.contextualScribeNamespace, element: t, action: "send_dm", data: { conversation_id: n, conversation_participant_count: o ? o.length + 1 : 0, conversation_type: a.NK.GROUP } });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6c5c183a.4352229a.js.map
