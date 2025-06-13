"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.inlineTombstoneHandler"],
    {
        580051: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var o = n(942893),
                i = n(351322),
                r = n(202784),
                a = n(650028),
                s = n(686689),
                d = n(177371),
                c = n(400196),
                l = n(114054);
            const w = (0, n(668214).Z)().propsFromActions(({ module: e }) => ({ applyFeedbackAction: e.applyFeedbackAction })),
                p = (e) => {
                    const { alignment: t, entities: n, rtl: o, text: i } = e;
                    return r.createElement(s.Z, { alignment: t, entities: n, rtl: o, text: i });
                },
                u = ({ applyFeedbackAction: e, entry: t, isFocalTweet: n, isReaderMode: o, tweetDismissFeedbackKey: i, withHideReply: s }) => {
                    const {
                            content: { tombstoneInfo: { revealText: w, richRevealText: u, richText: T, text: m } = {}, tweet: { forwardPivot: v, id: y, innerForwardPivot: f, innerTombstoneInfo: b, nudges: h } = {} },
                            conversationPosition: x,
                            conversationTreeMetadata: I,
                            referringContext: { contextTweetId: P, socialContext: k } = {},
                        } = t,
                        C = u ? p(u) : w,
                        F = T ? p(T) : m,
                        [g, R] = r.useState(!0);
                    r.useEffect(() => {
                        R(!0);
                    }, [y]);
                    const Z = r.useCallback(() => {
                            R(!1);
                        }, []),
                        A = r.useCallback(() => {
                            i && e({ entry: t, feedbackKeys: [i] });
                        }, [e, t, i]);
                    return g || !y ? r.createElement(d.Z, { actionText: C, children: F, conversationPosition: x, conversationTreeMetadata: I, onClick: Z }) : y ? (n && !o ? r.createElement(l.ZP, { contextTweetId: P, forwardPivotInfo: v, innerForwardPivotInfo: f, nudges: h, onTweetDismiss: A, quotedTweetTombstoneInfo: b, socialContext: k, tweetId: y, withHideReply: s }) : r.createElement(c.ZP, { conversationPosition: x, conversationTreeMetadata: I, displayBlocked: !0, displayPromotedContent: !0, forwardPivotInfo: v, innerForwardPivotInfo: f, isReaderMode: o, nudges: h, onTweetDismiss: A, quotedTweetTombstoneInfo: b, replyContext: o ? a.ZP.ReplyContextTypes.None : void 0, shouldSelfThreadIncludeAvatar: !0, tweetId: y, withActions: !0, withHideReply: s, withInlineMedia: !0, withSocialContext: !0 })) : null;
                },
                T = w(r.memo(u)),
                m = (e) =>
                    i
                        .iH({
                            component: T,
                            shouldDisplayBorder: (e) => {
                                const { conversationPosition: t, treeDisplay: n } = e;
                                return "VerticalConversation" !== n?.displayType && (!t || !!t.isEnd);
                            },
                            getScribeDataItem: ({ content: e }) =>
                                ((e) => {
                                    const { displayType: t } = e;
                                    return o.Z.forTombstone(t);
                                })(e),
                        })
                        .getHandler(() => ({ ...e }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.inlineTombstoneHandler.06ac75fa.js.map
