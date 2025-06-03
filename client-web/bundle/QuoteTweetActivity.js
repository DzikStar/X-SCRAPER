"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.QuoteTweetActivity"],
    {
        251699: (e, t, r) => {
            r.r(t), r.d(t, { QuoteTweetActivityScreen: () => v, default: () => C });
            var s = r(202784),
                a = r(457311),
                n = r(111677),
                o = r.n(n),
                i = r(718e3),
                c = r(252021),
                u = r(652904),
                l = r(886191),
                w = r(903019),
                m = r(883432),
                p = r(668214),
                d = r(836255),
                h = r(481918);
            const _ = (e, t) => t.match.params.statusId,
                y = (e, t) => t.match.params.screenName,
                T = (e, t) => d.Z.selectHydrated(e, _(0, t)),
                S = (0, p.Z)()
                    .propsFromState(() => ({ screenName: y, statusId: _, tweet: T }))
                    .adjustStateProps(({ screenName: e, statusId: t, tweet: r }) => ({ screenName: e, statusId: t, tweet: r, usersUrtModule: (0, h.Z)(t) }))
                    .withAnalytics({ page: "quote_tweets_timeline" }),
                Z = o().j45978a8,
                b = o().aea3c420,
                q = o().b40a22c0,
                Q = { vertical: "tweet_detail_quote" },
                k = s.createElement(a.Z, { header: b, message: q });
            class v extends s.Component {
                constructor(...e) {
                    super(...e), (this._quoteTweetSearchQueryString = `quoted_tweet_id:${this.props.statusId}`), (this._renderQuoteTweetTimeline = () => s.createElement(l.Z, { emptyStateComponent: k, fetchOptions: Q, query: this._quoteTweetSearchQueryString, querySrc: m.Z.TweetDetailQuoteTweet, searchMode: w.N3.Top }));
                }
                render() {
                    const { history: e, tweet: t } = this.props;
                    return s.createElement(u.Z, null, s.createElement(c.Z, { backLocation: t ? t.permalink : "/", history: e, primaryContent: this._renderQuoteTweetTimeline(), sidebarContent: s.createElement(i.Z, { withWhoToFollow: !1 }), title: Z }));
                }
            }
            const C = S(v);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.QuoteTweetActivity.f416be4a.js.map
