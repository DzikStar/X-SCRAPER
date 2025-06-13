"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.FeedbackSheet"],
    {
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            n(136728);
            var i = n(202784),
                o = n(811176),
                a = n(190286),
                s = n(111677),
                r = n.n(s),
                c = n(912021);
            const l = r().cfd2f35e;
            class d extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { activeConfirmation: null }),
                        (this._handleConfirm = (e) => {
                            this.setState({ activeConfirmation: e });
                        }),
                        (this._handleConfirmed = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.confirmCallback(), this.setState({ activeConfirmation: null }), this.props.onClose();
                        }),
                        (this._handleCancelConfirm = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.cancelCallback?.(), this.setState({ activeConfirmation: null });
                        }),
                        (this._getMemoizedProcessedActionItems = (0, c.Z)((e, t, n, i) =>
                            e.reduce((e, { Icon: o, confirmation: a, disabled: s, excludeFromActionMenu: r, isEmphasized: c, link: l, onClick: d, subText: h, testID: C, text: m, withCancelButton: f }, u) => {
                                if (!r) {
                                    const r = d
                                        ? () => {
                                              a ? (a.render ? i({ cancelCallback: a.onCancel, confirmCallback: d, render: a.render }) : i({ cancelCallback: a.onCancel, confirmCallback: d, text: a.text, headline: a.headline, label: a.label, confirmButtonType: a.confirmButtonType, withCancelButton: a.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: s, Icon: o, isEmphasized: c, testID: C, subText: h, text: m, onClick: r, link: l, withBottomBorder: t && t.includes(u) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : i.createElement(o.Z, { cancelButtonLabel: l, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: n, label: o, text: s, withCancelButton: r } = e || {};
                        return i.createElement(a.Z, { confirmButtonLabel: o, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: s, withCancelButton: r });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: n } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, n, this._handleConfirm);
                }
            }
            const h = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.FeedbackSheet.2f140e1a.js.map
