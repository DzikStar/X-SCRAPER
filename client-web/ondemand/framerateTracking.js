"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.framerateTracking"],
    {
        172004: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            r(136728);
            var s = r(774717),
                i = r(828611);
            const n = ({ reportNamespace: e, scrollTrailWindowMs: t = 144, minScrollDurationMs: r = 2e3 }) => {
                let n,
                    a = [];
                const l = () => {
                    const i = window.performance.now() + t;
                    n
                        ? n.updateDeadline(i)
                        : (n = o.start(i, (t) => {
                              t.durationMs() >= r && (s.IM(`framerate:longscroll:${e}`, { duration_ms: Math.round(t.averageFPS()) }), s.IM(`consecutive_frames_dropped:at_least_4:${e}`, { event_value: t.longFrames() })), (n = void 0);
                          }));
                };
                return (
                    window.addEventListener("scroll", l, !!i.Z && { passive: !0 }),
                    {
                        stop: () => {
                            window.removeEventListener("scroll", l, !!i.Z && { passive: !0 }), n && n.stop();
                        },
                        flushFpsMeasurements: () => {
                            const e = a;
                            return (a = []), e;
                        },
                    }
                );
            };
            class o {
                static start(e, t) {
                    const r = new o(e, t);
                    return r._start(), r;
                }
                constructor(e, t) {
                    (this._frameRequestId = void 0),
                        (this._scheduleNextFrameMeasurement = () => {
                            this._frameRequestId = window.requestAnimationFrame(this._handleFrame);
                        }),
                        (this._handleFrame = (e) => {
                            (this._frameRequestId = void 0), this._previousFrameStartTime ? this._metricReport.recordFrame(this._previousFrameStartTime, e) : this._metricReport.recordScrollingStartY(window.scrollY), (this._previousFrameStartTime = e), e < this._deadline ? this._scheduleNextFrameMeasurement() : (this._metricReport.recordScrollingEndY(window.scrollY), this._onCompletion.call(void 0, this._metricReport));
                        }),
                        (this._deadline = e),
                        (this._onCompletion = t),
                        (this._metricReport = new a());
                }
                updateDeadline(e) {
                    this._deadline = e;
                }
                stop() {
                    this._frameRequestId && (window.cancelAnimationFrame(this._frameRequestId), (this._frameRequestId = void 0));
                }
                _start() {
                    this._scheduleNextFrameMeasurement();
                }
            }
            class a {
                constructor() {
                    (this._frameCount = 0), (this._scrollingStartTime = 0), (this._scrollingStartY = 0), (this._scrollingEndTime = 0), (this._scrollingEndY = 0), (this._longFramesCount = 0);
                }
                recordFrame(e, t) {
                    this._scrollingStartTime || (this._scrollingStartTime = e), (this._scrollingEndTime = t), (this._frameCount += 1), this._countDroppedFrames(e, t) && (this._longFramesCount += 1);
                }
                recordScrollingStartY(e) {
                    this._scrollingStartY = e;
                }
                recordScrollingEndY(e) {
                    this._scrollingEndY = e;
                }
                averageFPS() {
                    const e = this.durationMs();
                    return e > 0 ? (1e3 * this._frameCount) / e : 0;
                }
                durationMs() {
                    return Math.max(0, this._scrollingEndTime - this._scrollingStartTime);
                }
                longFrames() {
                    const e = Math.abs(this._scrollingEndY - this._scrollingStartY) / 1e3;
                    return e > 0 ? Math.round(this._longFramesCount / e) : 0;
                }
                _countDroppedFrames(e, t) {
                    return (t - e) / 16 >= 5;
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.framerateTracking.7f6200aa.js.map
