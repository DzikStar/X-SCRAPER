"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-8ed0fac5"],
    {
        890655: (t, e, o) => {
            o.d(e, { Q: () => s });
            const s = (t, e = !1) =>
                t
                    .split("-")
                    .map((t) => (e ? t[0].toUpperCase() + t.substring(1) : t))
                    .join(" ");
        },
        337455: (t, e, o) => {
            o.d(e, { Z: () => E });
            var s = o(202784),
                r = o(411916),
                n = o.n(r),
                i = o(373463),
                a = o.n(i);
            function E(t) {
                class e extends s.Component {
                    constructor(t, e) {
                        super(t, e), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        n()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? s.createElement(t, this.props) : null;
                    }
                }
                return a()(e, t);
            }
        },
        553093: (t, e, o) => {
            o.d(e, { Sz: () => s });
            const s = (t) => {
                    const e = (JSON.stringify(t) || "").split("");
                    e.sort();
                    const o = e.join("");
                    return r(o, 0).toString();
                },
                r = (t, e) => {
                    const o = "string" == typeof t ? t : String(t);
                    let s = e;
                    for (let t = 0; t < o.length; t++) {
                        (s = (s << 5) - s + o.charCodeAt(t)), (s |= 0);
                    }
                    return s;
                };
        },
        647712: (t, e, o) => {
            o.d(e, { Z: () => a });
            var s = o(202784),
                r = o(187669),
                n = o(725516),
                i = o(942893);
            const a = (t, e) => {
                const o = (0, n.z)(),
                    { component: a, element: E } = e || {},
                    _ = s.useMemo(() => ({ items: [i.Z.forTopic(t, e)] }), [e, t]);
                return (
                    (0, r.q)(() => {
                        o.scribe({ component: a, element: E, action: "impression", data: _ });
                    }),
                    { namespace: { component: a, element: E }, data: _ }
                );
            };
        },
        68738: (t, e, o) => {
            o.d(e, { E: () => n });
            var s = o(106067),
                r = o(545521);
            const n = (t) => (0, r.Z)({ contextSuffix: "BIRDWATCH_CONTRIBUTOR_DELETED_NOTES_SLICE", getFetchApiEndpoint: (t) => t.withEndpoint(s.Z).fetchBirdwatchContributorDeletedNotesSlice, getEndpointParams: (e) => ({ ...e, alias: t }), sliceKey: `birdwatchContributorDeletedNotesSlice-${t}` });
        },
        44836: (t, e, o) => {
            o.d(e, { Z: () => c, f: () => _ });
            var s = o(979090),
                r = o(106067),
                n = o(917799),
                i = o(502909),
                a = o(600823);
            const E = (0, i.ZP)({ namespace: "birdwatchContributorNotes" }),
                _ =
                    (t) =>
                    (e, o, { api: i }) =>
                        n._O(e, { request: i.withEndpoint(r.Z).deleteNote, params: { note_id: t } })({ actionTypes: E.actionTypes.OPTIMISTIC_UPDATE, context: "DELETE_NOTE" }, (e) => {
                            if (e) return [E.deleteOne(t), (0, s.f_)(t)];
                        }),
                c = a.Z.register(E);
        },
        78014: (t, e, o) => {
            o.d(e, { _: () => n });
            var s = o(106067),
                r = o(545521);
            const n = (t) => (0, r.Z)({ contextSuffix: "BIRDWATCH_CONTRIBUTOR_NOTES_SLICE", getFetchApiEndpoint: (t) => t.withEndpoint(s.Z).fetchBirdwatchContributorNotesSlice, getEndpointParams: (e) => ({ ...e, alias: t }), sliceKey: `birdwatchContributorNotesSlice-${t}` });
        },
        979090: (t, e, o) => {
            o.d(e, { $e: () => lt, BG: () => tt, Bb: () => yt, Bs: () => ot, EW: () => bt, HO: () => ct, JL: () => it, Jn: () => Tt, Kc: () => Rt, Ld: () => Dt, Lt: () => Y, OV: () => X, PL: () => st, Pi: () => Ct, Qg: () => W, SZ: () => Zt, V0: () => ft, Wk: () => $, X3: () => Lt, _T: () => vt, _b: () => Pt, aZ: () => Ut, ap: () => nt, cS: () => et, dw: () => V, eD: () => rt, eY: () => It, et: () => k, f3: () => St, f_: () => mt, gH: () => _t, gP: () => Ht, jm: () => x, kT: () => Ft, kX: () => gt, lC: () => Ot, lW: () => at, lw: () => Nt, mZ: () => Gt, mv: () => wt, oV: () => Mt, pN: () => pt, qm: () => ht, r9: () => q, sz: () => K, tk: () => z, vF: () => ut, w6: () => Et, wK: () => Bt, wd: () => dt, ww: () => At });
            var s = o(744531),
                r = o(401388),
                n = o(106067),
                i = o(256563),
                a = o(497461),
                E = o(499627),
                _ = o(917799),
                c = o(312771),
                S = o(56519);
            const d = "birdwatchNotes",
                T = `rweb/${d}`,
                u = (0, _.dg)(T, "DELETE_NOTE"),
                C = (0, _.dg)(T, "CREATE_RATING"),
                w = (0, _.dg)(T, "DELETE_RATING"),
                I = (0, _.dg)(T, "SELECT_ALIAS"),
                A = (0, _.dg)(T, "CREATE_APPEAL"),
                p = (0, _.dg)(T, "EDIT_NOTIFICATION_SETTINGS"),
                b = Object.freeze({ REQUEST: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_SUCCESS", FAILURE: "rweb/birdwatchNotes/CREATE_BIRDWATCH_BAT_SIGNAL_FAILURE" }),
                N = Object.freeze({ REQUEST: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL", FAILURE: "rweb/birdwatchNotes/DELETE_BIRDWATCH_BAT_SIGNAL" }),
                l = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_BIRDWATCH_BAT_SIGNAL_FAILURE" }),
                O = (Object.freeze({ REQUEST: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_REQUEST", SUCCESS: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_SUCCESS", FAILURE: "rweb/birdwatchNotes/EDIT_SHOW_MOBILE_NAVIGATION_SETTINGS_FAILURE" }), Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_DATA_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_DATA_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_DATA_FAILURE" })),
                U = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_CAN_BE_MEDIA_NOTE_FAILURE" }),
                h = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_NOTE_TRANSLATION_FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/birdwatchNotes/ADMIT_USER_REQUEST", SUCCESS: "rweb/birdwatchNotes/ADMIT_USER_SUCCESS", FAILURE: "rweb/birdwatchNotes/ADMIT_USER_FAILURE" }),
                L = Object.freeze({ REQUEST: "rweb/birdwatchNotes/REMOVE_USER_REQUEST", SUCCESS: "rweb/birdwatchNotes/REMOVE_USER_SUCCESS", FAILURE: "rweb/birdwatchNotes/REMOVE_USER_FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_ALIAS_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_ALIAS_FAILURE" }),
                f = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SIGNUP_ELIGIBILITY_FAILURE" }),
                F = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SOURCE_LINK_TWEET_FAILURE" }),
                D = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE" }),
                y = Object.freeze({ REQUEST: "rweb/birdwatchNotes/CREATE_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/CREATE_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/CREATE_NOTE_FAILURE" }),
                B = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE" }),
                P = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE" }),
                Z = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/birdwatchNotes/FETCH_NOTE_REQUEST", SUCCESS: "rweb/birdwatchNotes/FETCH_NOTE_SUCCESS", FAILURE: "rweb/birdwatchNotes/FETCH_NOTE_FAILURE" }),
                H = Object.freeze({ REQUEST: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_REQUEST", SUCCESS: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_SUCCESS", FAILURE: "rweb/birdwatchNotes/PROFILE_ACKNOWLEDGE_EARN_OUT_FAILURE" }),
                G = "rweb/birdwatchNotes/SAVE_FORM_DRAFT",
                v = "rweb/birdwatchNotes/SAVE_BIRDWATCH_PATH",
                M = { drafts: {}, notes: {}, noteRequests: {}, tweetNotes: {}, contributor: {}, publicData: {}, matchData: { fetchStatus: c.ZP.LOADING }, sourceLinks: {}, sources: {}, paths: {} };
            E.Z.register({
                [d]: function (t = M, e) {
                    if (!e) return t;
                    switch (e.type) {
                        case y.SUCCESS: {
                            const o = e.payload?.result;
                            if (o) {
                                const s = e.payload?.entities?.birdwatchNotes[o],
                                    r = s.tweet.rest_id,
                                    n = "MisinformedOrPotentiallyMisleading" === s.data_v1?.classification;
                                return { ...t, notes: { ...t.notes, [o]: s }, tweetNotes: { ...t.tweetNotes, [r]: { ...(t.tweetNotes && t.tweetNotes[r]), misleadingIds: n ? [...t.tweetNotes[r].misleadingIds, o] : t.tweetNotes[r].misleadingIds, notMisleadingIds: n ? t.tweetNotes[r].notMisleadingIds : [...t.tweetNotes[r].notMisleadingIds, o], ownNoteId: o, fetchStatus: c.ZP.LOADED } } };
                            }
                            return t;
                        }
                        case N.SUCCESS: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, noteRequests: (0, s.Z)(t.noteRequests, o) } : t;
                        }
                        case u.SUCCESS: {
                            const o = e.meta?.note_id;
                            return o ? { ...t, notes: (0, s.Z)(t.notes, o) } : t;
                        }
                        case U.REQUEST: {
                            const o = e.meta?.tweetId;
                            return o ? { ...t, matchData: { fetchStatus: c.ZP.LOADING } } : t;
                        }
                        case U.SUCCESS: {
                            const o = e.meta?.tweetId;
                            return o ? { ...t, matchData: { canBeMediaNote: e.payload.tweet_result_by_rest_id.result.can_be_media_note, canBeUrlNote: e.payload.tweet_result_by_rest_id.result.can_be_url_note, mediaNoteCategory: e.payload.tweet_result_by_rest_id.result.media_note_category, noteMatchUrl: e.payload.tweet_result_by_rest_id.result.note_match_url, fetchStatus: c.ZP.LOADED } } : t;
                        }
                        case h.REQUEST: {
                            const o = e.meta?.note_id;
                            return o ? { ...t, notes: { ...t.notes, [o]: { ...t.notes[o], noteTranslation: { fetchStatus: c.ZP.LOADING } } } } : t;
                        }
                        case h.SUCCESS: {
                            const o = e.meta?.note_id;
                            if (o) {
                                const s = e.payload.birdwatch_note_by_rest_id.translated_summary;
                                return { ...t, notes: { ...t.notes, [o]: { ...t.notes[o], noteTranslation: { result: s && (0, i.Z)((0, a.$)(), s), fetchStatus: c.ZP.LOADED } } } };
                            }
                            return t;
                        }
                        case h.FAILURE: {
                            const o = e.meta?.noteId;
                            return o ? { ...t, notes: { ...t.notes, [o]: { ...t.notes[o], noteTranslation: { fetchStatus: c.ZP.FAILED } } } } : t;
                        }
                        case f.SUCCESS: {
                            const o = e.payload;
                            return { ...t, signupEligibility: o?.birdwatch_sign_up_eligibility?.eligible };
                        }
                        case l.REQUEST: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, noteRequests: { ...t.noteRequests, [o]: { fetchStatus: c.ZP.LOADING } } } : t;
                        }
                        case l.FAILURE: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, noteRequests: { ...t.noteRequests, [o]: { fetchStatus: c.ZP.FAILED } } } : t;
                        }
                        case l.SUCCESS: {
                            const o = e.meta?.tweet_id,
                                s = e.payload?.birdwatch_bat_signal_by_rest_id.created_at;
                            return o ? { ...t, noteRequests: { ...t.noteRequests, [o]: { created_at: s, fetchStatus: c.ZP.LOADED } } } : t;
                        }
                        case b.SUCCESS: {
                            const o = e.meta?.tweet_id,
                                s = e.payload?.created_at;
                            return o && s ? { ...t, noteRequests: { ...t.noteRequests, [o]: { created_at: s } } } : t;
                        }
                        case C.SUCCESS: {
                            const o = e.meta?.note_id,
                                s = e.payload;
                            return o ? { ...t, notes: { ...t.notes, [o]: { ...t.notes[o], rating: s } } } : t;
                        }
                        case w.SUCCESS: {
                            const o = e.meta?.note_id;
                            if (o) {
                                const { rating: e, ...s } = t.notes[o];
                                return { ...t, notes: { ...t.notes, [o]: { ...s } } };
                            }
                            return t;
                        }
                        case B.REQUEST: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, tweetNotes: { ...t.tweetNotes, [o]: { ...(t.tweetNotes && t.tweetNotes[o]), fetchStatus: c.ZP.LOADING } } } : t;
                        }
                        case B.FAILURE: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, tweetNotes: { ...t.tweetNotes, [o]: { ...t.tweetNotes[o], fetchStatus: c.ZP.FAILED } } } : t;
                        }
                        case B.SUCCESS: {
                            const o = e.payload?.result,
                                s = e.meta?.tweet_id;
                            if (o) {
                                const r = e.payload?.entities?.birdwatchNotes[o],
                                    n = r?.misleading_ids || [],
                                    i = n.reduce((t, e) => ((t[e.rest_id] = e), t), {}),
                                    a = n.map((t) => t.rest_id),
                                    E = r?.not_misleading_ids || [],
                                    _ = E.reduce((t, e) => ((t[e.rest_id] = e), t), {}),
                                    S = { misleadingIds: a, notMisleadingIds: E.map((t) => t.rest_id), fetchStatus: c.ZP.LOADED };
                                return r?.ownNoteId && (S.ownNoteId = r?.ownNoteId), e.meta ? { ...t, notes: { ...t.notes, ...i, ..._ }, tweetNotes: { ...t.tweetNotes, [s]: S } } : t;
                            }
                            return s ? { ...t, tweetNotes: { ...t.tweetNotes, [s]: { fetchStatus: c.ZP.LOADED } } } : t;
                        }
                        case P.REQUEST: {
                            const o = e.meta?.alias;
                            return o ? { ...t, contributor: { ...t.contributor, [o]: { ...t.contributor[o], fetchStatus: c.ZP.LOADING } } } : t;
                        }
                        case P.FAILURE: {
                            const o = e.meta?.alias;
                            return o ? { ...t, contributor: { ...t.contributor, [o]: { ...t.contributor[o], fetchStatus: c.ZP.FAILED } } } : t;
                        }
                        case P.SUCCESS: {
                            const o = e.meta?.alias,
                                s = e.payload?.result;
                            if (s && e.meta) {
                                const o = e.payload?.entities?.birdwatchNotes[s],
                                    r = o?.notes || [],
                                    n = r.reduce((t, e) => ((t[e.rest_id] = e), t), {}),
                                    i = r.map((t) => t.rest_id),
                                    a = o?.ratings_count,
                                    E = o?.notes_count,
                                    _ = o?.is_top_writer;
                                return { ...t, notes: { ...t.notes, ...n }, contributor: { ...t.contributor, [s]: { ratingsCount: a, notesCount: E, isTopWriter: _, deletedNotesCount: o?.deleted_notes_count, notes: i, fetchStatus: c.ZP.LOADED } } };
                            }
                            return o ? { ...t, contributor: { ...t.contributor, [o]: { ...t.contributor[o], fetchStatus: c.ZP.FAILED } } } : t;
                        }
                        case m.SUCCESS: {
                            const o = e.payload;
                            return { ...t, contributor: { ...t.contributor, notificationSettings: o?.notification_settings?.needs_your_help_frequency, ownAlias: o?.alias, canWriteNotes: o?.can_write_notes, enrollmentStatus: o?.user_enrollment, isTopWriter: o?.is_top_writer, showMobileNavigationSettings: o?.user_settings?.show_in_app_navigation } };
                        }
                        case Z.SUCCESS: {
                            const o = e.payload;
                            return { ...t, contributor: { ...t.contributor, showAliasSelfSelect: o?.can_select && !o?.has_selected } };
                        }
                        case D.SUCCESS: {
                            const o = e.payload;
                            return { ...t, contributor: { ...t.contributor, aliasSelfSelectOptions: o } };
                        }
                        case g.SUCCESS: {
                            const o = e.payload,
                                s = o?.result;
                            return s ? { ...t, notes: { ...t.notes, [s]: { ...o?.entities?.birdwatchNotes[s], fetchStatus: c.ZP.LOADED } } } : t;
                        }
                        case g.REQUEST: {
                            const o = e.meta?.note_id;
                            return { ...t, notes: { ...t.notes, [o]: { ...(t.notes && t.notes[o]), fetchStatus: c.ZP.LOADING } } };
                        }
                        case g.FAILURE: {
                            const o = e.meta?.note_id;
                            return { ...t, notes: { ...t.notes, [o]: { ...t.notes[o], fetchStatus: c.ZP.FAILED } } };
                        }
                        case O.SUCCESS: {
                            const o = e.payload;
                            return o ? { ...t, publicData: o } : t;
                        }
                        case I.SUCCESS: {
                            const o = e.meta?.alias;
                            return { ...t, contributor: { ...t.contributor, ownAlias: o } };
                        }
                        case G: {
                            const o = e.payload;
                            if ((0, r.Z)(o)) return t;
                            {
                                const e = o.updates,
                                    s = o.tweetId;
                                return { ...t, drafts: { ...t.drafts, [s]: e } };
                            }
                        }
                        case v: {
                            const o = e.payload;
                            if ((0, r.Z)(o)) return t;
                            {
                                const e = o.count,
                                    s = o.path;
                                return { ...t, paths: { ...t.paths, [e]: s } };
                            }
                        }
                        case H.SUCCESS:
                            return { ...t, contributor: { ...t.contributor, enrollmentStatus: { ...t.contributor.enrollmentStatus, enrollment_state: "EarnedOutAcknowledged" } } };
                        case F.REQUEST: {
                            const o = e.meta?.tweetId;
                            return o ? { ...t, matchData: { fetchStatus: c.ZP.LOADING } } : t;
                        }
                        case F.FAILURE: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, sourceLinks: { ...t.sourceLinks, [o]: { fetchStatus: c.ZP.FAILED } } } : t;
                        }
                        case F.SUCCESS: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, sourceLinks: { ...t.sourceLinks, [o]: { source_preview_tweet_for_notes: e.payload.tweet_result_by_rest_id.result.source_preview_tweet_for_notes, source_tweet_count_for_notes: e.payload.tweet_result_by_rest_id.result.source_tweet_count_for_notes, has_note_request: e.payload.tweet_result_by_rest_id.result.has_note_request, fetchStatus: c.ZP.LOADED } } } : t;
                        }
                        default:
                            return t;
                    }
                },
            });
            const Q = [],
                W = (t, e) => t[d].notes[e],
                q = (t, e) => t[d].noteRequests[e],
                x = (t) => t[d].paths,
                j = (t, e) => t[d].tweetNotes[e]?.misleadingIds,
                k = (t) => t[d].matchData,
                z = (t, e) => t[d].sourceLinks[e],
                V = (t, e) => {
                    if (!e) return null;
                    const o = ((t, e) => t[d].tweetNotes[e]?.ownNoteId)(t, e);
                    return o ? W(t, o) : null;
                },
                K = (t) => t[d].publicData,
                Y = (t, e) => {
                    const o = e ? j(t, e) : void 0;
                    if (o) {
                        return o.map((e) => W(t, e)).filter(Boolean);
                    }
                    return Q;
                },
                $ = (t, e) => {
                    const o = e ? ((t, e) => t[d].tweetNotes[e]?.notMisleadingIds)(t, e) : void 0;
                    if (o) {
                        return o.map((e) => W(t, e)).filter(Boolean);
                    }
                    return Q;
                },
                J = (t, e) => {
                    const o = t[d].contributor[e];
                    return o ? o.notes : void 0;
                },
                X = (t) => {
                    const e = t[d].contributor;
                    return e ? e.ownAlias : void 0;
                },
                tt = (t) => {
                    const e = t[d].contributor;
                    return e ? e.showAliasSelfSelect : void 0;
                },
                et = (t) => {
                    const e = t[d]?.contributor?.ownAlias;
                    if (!e) return !1;
                    const o = `birdwatchContributorNotesSlice-${e}`,
                        s = t.slices[o];
                    return s?.items?.length > 0 || !1;
                },
                ot = (t) => {
                    const e = t[d].contributor;
                    return e ? e.aliasSelfSelectOptions : void 0;
                },
                st = (t) => {
                    const e = t[d].contributor;
                    return e ? e.enrollmentStatus : void 0;
                },
                rt = (t, e) => !!(t[d].contributor[e]?.isTopWriter || t[d].contributor?.isTopWriter),
                nt = (t, e) => t[d].contributor[e]?.isTopWriter || !1,
                it = (t) => {
                    const e = t[d].contributor;
                    return e ? e.notificationSettings : void 0;
                },
                at = (t) => {
                    const e = t[d].contributor;
                    return e ? e.canWriteNotes : void 0;
                },
                Et = (t, e) => {
                    if (!e) return;
                    const o = t[d].contributor[e];
                    return o ? o.ratingsCount : void 0;
                },
                _t = (t, e) => {
                    if (!e) return;
                    const o = t[d].contributor[e];
                    return o ? o.notesCount : void 0;
                },
                ct = (t, e) => {
                    const o = t[d].contributor[e];
                    return o ? o.deletedNotesCount : void 0;
                },
                St = (t, e) => {
                    const o = t[d].tweetNotes[e];
                    return o ? o.fetchStatus : c.ZP.NONE;
                },
                dt = (t, e) => {
                    const o = t[d].notes[e];
                    return o ? o.fetchStatus : c.ZP.NONE;
                },
                Tt = (t, e) => {
                    if (!e) return;
                    const o = t[d].drafts;
                    return o ? o[e] : void 0;
                },
                ut =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).fetchBirdwatchBatSignal, params: t })({ actionTypes: l, context: "FETCH_BIRDWATCH_BAT_SIGNAL", meta: { tweet_id: t } }),
                Ct =
                    (t) =>
                    (e, o, { api: s }) => {
                        const r = !!j(o(), t),
                            i = St(o(), t) === c.ZP.LOADING;
                        return r || i
                            ? Promise.resolve()
                            : e(
                                  (
                                      (t) =>
                                      (e, o, { api: s }) =>
                                          (0, _._O)(e, { request: s.withEndpoint(n.Z).fetchNotes, params: { tweet_id: t } })({ actionTypes: B, context: "FETCH_TWEET_NOTES", meta: { tweet_id: t } }, (t) => {
                                              if (t) {
                                                  const { entities: e } = t;
                                                  return e ? [(0, S.dP)(e)] : void 0;
                                              }
                                          })
                                  )(t),
                              );
                    },
                wt =
                    (t) =>
                    (e, o, { api: s }) => {
                        const r = !!t && !!J(o(), t),
                            i =
                                ((t, e) => {
                                    const o = t[d].contributor[e];
                                    return o ? o.fetchStatus : c.ZP.NONE;
                                })(o(), t) === c.ZP.LOADING;
                        return r || i
                            ? Promise.resolve()
                            : e(
                                  (
                                      (t) =>
                                      (e, o, { api: s }) =>
                                          t
                                              ? (0, _._O)(e, { request: s.withEndpoint(n.Z).fetchBirdwatchProfile, params: { alias: t } })({ actionTypes: P, context: "FETCH_BIRDWATCH_PROFILE", meta: { alias: t } }, (t) => {
                                                    if (t) {
                                                        const { entities: e } = t;
                                                        return e && [(0, S.dP)(e)];
                                                    }
                                                })
                                              : Promise.resolve()
                                  )(t),
                              );
                    },
                It =
                    () =>
                    (t, e, { api: o }) =>
                        !!st(e()) ? Promise.resolve() : t(Ot()),
                At =
                    (t) =>
                    (e, o, { api: s }) => {
                        const r = !!W(o(), t),
                            i = dt(o(), t) === c.ZP.LOADING;
                        return r || i
                            ? Promise.resolve()
                            : e(
                                  (
                                      (t) =>
                                      (e, o, { api: s }) =>
                                          (0, _._O)(e, { request: s.withEndpoint(n.Z).fetchOneNote, params: { note_id: t } })({ actionTypes: g, context: "FETCH_NOTE", meta: { note_id: t } })
                                  )(t),
                              );
                    },
                pt =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).fetchCanTweetBeMediaNote, params: t })({ actionTypes: U, context: "FETCH_CAN_BE_MEDIA_NOTE", meta: { tweetId: t } }),
                bt =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).fetchNoteTranslation, params: t })({ actionTypes: h, context: "FETCH_NOTE_TRANSLATION", meta: { note_id: t } }),
                Nt =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).fetchTweetSourceLink, params: t })({ actionTypes: F, context: "FETCH_SOURCE_LINK_TWEET", meta: { tweet_id: t } }),
                lt =
                    () =>
                    (t, e, { api: o }) =>
                        (0, _._O)(t, { request: o.withEndpoint(n.Z).fetchSignUpEligiblity })({ actionTypes: f, context: "FETCH_SIGNUP_ELIGIBILITY" }),
                Ot =
                    () =>
                    (t, e, { api: o }) =>
                        (0, _._O)(t, { request: o.withEndpoint(n.Z).fetchAuthenticatedUserProfile, params: {} })({ actionTypes: m, context: "FETCH_AUTHENTICATED_USER_PROFILE" }),
                Ut =
                    () =>
                    (t, e, { api: o }) =>
                        (0, _._O)(t, { request: o.withEndpoint(n.Z).fetchAliasSelfSelectStatus, params: {} })({ actionTypes: Z, context: "FETCH_SHOW_ALIAS_SELECT", meta: {} }),
                ht =
                    () =>
                    (t, e, { api: o }) =>
                        (0, _._O)(t, { request: o.withEndpoint(n.Z).fetchAliasSelfSelectOptions, params: {} })({ actionTypes: D, context: "FETCH_ALIAS_SELECT_OPTIONS", meta: {} }),
                Rt =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).selectAlias, params: { alias: t } })({ actionTypes: I, context: "SELECT_ALIAS", meta: { alias: t } }),
                Lt =
                    () =>
                    (t, e, { api: o }) =>
                        (0, _._O)(t, { request: o.withEndpoint(n.Z).acknowledgeEarnOut, params: {} })({ actionTypes: H, context: "PROFILE_ACKNOWLEDGE_EARN_OUT", meta: {} }),
                mt = (t) => ({ meta: { note_id: t }, type: u.SUCCESS }),
                ft =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).deleteBirdwatchBatSignal, params: { tweet_id: t } })({ actionTypes: N, context: "DELETE_BIRDWATCH_BATSIGNAL", meta: { tweet_id: t } }),
                Ft =
                    (t, e, o, s) =>
                    (r, i, { api: a }) =>
                        (0, _._O)(r, { request: a.withEndpoint(n.Z).createNote, params: { tweet_id: t, is_media_note: o, is_helpful_for_all_posts: s, data: e } })({ actionTypes: y, context: "CREATE_NOTE" }),
                Dt = (t) => (e) => {
                    e(((t) => ({ type: G, payload: t }))(t));
                },
                yt = (t) => (e) => {
                    e(((t) => ({ type: v, payload: t }))(t));
                },
                Bt =
                    (t, e, o, s, r) =>
                    (i, a, { api: E }) =>
                        (0, _._O)(i, { request: E.withEndpoint(n.Z).createRating, params: { note_id: t, tweet_id: o, data: e, rating_source: s, source_platform: r } })({ actionTypes: C, context: "CREATE_RATING", meta: { note_id: t } }),
                Pt =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).deleteRating, params: { note_id: t } })({ actionTypes: w, context: "DELETE_RATING", meta: { note_id: t } }),
                Zt =
                    (t, e) =>
                    (o, s, { api: r }) =>
                        (0, _._O)(o, { request: r.withEndpoint(n.Z).admitUser, params: { admit_date: t, user_id: e } })({ actionTypes: R, context: "ADMIT_USER", meta: { admit_date: t, user_id: e } }),
                gt =
                    () =>
                    (t, e, { api: o }) =>
                        (0, _._O)(t, { request: o.withEndpoint(n.Z).removeUser, params: {} })({ actionTypes: L, context: "REMOVE_USER", meta: {} }),
                Ht =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).createAppeal, params: { note_id: t } })({ actionTypes: A, context: "CREATE_APPEAL", meta: { note_id: t } }),
                Gt =
                    (t, e) =>
                    (o, s, { api: r }) =>
                        (0, _._O)(o, { request: r.withEndpoint(n.Z).createBirdwatchBatSignal, params: { tweet_id: t, source_link: e } })({ actionTypes: b, context: "CREATE_BAT_SIGNAL", meta: { tweet_id: t } }),
                vt =
                    (t) =>
                    (e, o, { api: s }) =>
                        (0, _._O)(e, { request: s.withEndpoint(n.Z).editNotificationSettings, params: { settings: t } })({ actionTypes: p, context: "EDIT_NOTIFICATION_SETTINGS", meta: { settings: t } }),
                Mt =
                    () =>
                    (t, e, { api: o }) =>
                        (0, _._O)(t, { request: o.withEndpoint(n.Z).fetchPublicData, params: {} })({ actionTypes: O, context: "FETCH_DATA", meta: {} });
        },
        302101: (t, e, o) => {
            o.d(e, { N: () => n });
            var s = o(106067),
                r = o(545521);
            const n = (t) => (0, r.Z)({ contextSuffix: "BIRDWATCH_NOTE_MATCHES_SLICE", getFetchApiEndpoint: (t) => t.withEndpoint(s.Z).fetchAuthenticatedBirdwatchMatchSlice, getEndpointParams: (e) => ({ ...e, note_id: t }), sliceKey: `birdwatchNoteMatchesSlice-${t}` });
        },
        304373: (t, e, o) => {
            o.d(e, { d: () => n });
            var s = o(106067),
                r = o(545521);
            const n = (t) => (0, r.Z)({ contextSuffix: "BIRDWATCH_SOURCE_LINKS_SLICE", getFetchApiEndpoint: (t) => t.withEndpoint(s.Z).fetchBirdwatchSourceLinkSlice, getEndpointParams: (e) => ({ ...e, tweet_id: t }), sliceKey: `birdwatchSourceLinkSlice-${t}` });
        },
        245422: (t, e, o) => {
            o.d(e, { K2: () => C, Sl: () => T, aC: () => u, oI: () => d });
            var s = o(717193),
                r = o(499627),
                n = o(917799),
                i = o(312771);
            const a = "communityBoost",
                E = Object.freeze({ REQUEST: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_REQUEST", SUCCESS: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_SUCCESS", FAILURE: "rweb/communityBoost/FETCH_COMMUNITYBOOST_PIVOT_FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_REQUEST", SUCCESS: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_SUCCESS", FAILURE: "rweb/communityBoost/CREATE_COMMUNITYBOOST_PIVOT_RATING_FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_REQUEST", SUCCESS: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_SUCCESS", FAILURE: "rweb/communityBoost/DELETE_COMMUNITYBOOST_PIVOT_RATING_FAILURE" }),
                S = { pivots: {} };
            r.Z.register({
                [a]: function (t = S, e) {
                    if (!e) return t;
                    switch (e.type) {
                        case E.REQUEST: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, pivots: { ...t.pivots, [o]: { fetchStatus: i.ZP.LOADING } } } : t;
                        }
                        case E.FAILURE: {
                            const o = e.meta?.tweet_id;
                            return o ? { ...t, pivots: { ...t.pivots, [o]: { fetchStatus: i.ZP.FAILED } } } : t;
                        }
                        case E.SUCCESS: {
                            const o = e.meta?.tweet_id,
                                s = e.payload?.community_boost_pivot_by_rest_id,
                                r = s?.like_tags,
                                n = s?.has_pivot,
                                a = s?.dislike_tags,
                                E = s?.boost_id,
                                _ = s?.rating;
                            return o ? { ...t, pivots: { ...t.pivots, [o]: { like_tags: r, dislike_tags: a, has_pivot: n, boost_id: E, rating: _, fetchStatus: i.ZP.LOADED } } } : t;
                        }
                        case _.SUCCESS: {
                            const o = e.meta?.post_id,
                                s = e.payload;
                            return o ? { ...t, pivots: { ...t.pivots, [o]: { ...t.pivots[o], rating: s } } } : t;
                        }
                        case c.SUCCESS: {
                            const o = e.meta?.post_id;
                            return o ? { ...t, pivots: { ...t.pivots, [o]: { ...t.pivots[o], rating: void 0 } } } : t;
                        }
                        default:
                            return t;
                    }
                },
            });
            const d =
                    (t, e, o) =>
                    (r, i, { api: a }) =>
                        (0, n._O)(r, { request: a.withEndpoint(s.Z).createBoostRating, params: { postId: t, boostId: e, data: o } })({ actionTypes: _, context: "CREATE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: t } }),
                T =
                    (t, e) =>
                    (o, r, { api: i }) =>
                        (0, n._O)(o, { request: i.withEndpoint(s.Z).deleteBoostRating, params: { boost_id: e } })({ actionTypes: c, context: "DELETE_COMMUNITYBOOST_PIVOT_RATING", meta: { post_id: t } }),
                u =
                    (t) =>
                    (e, o, { api: r }) =>
                        (0, n._O)(e, { request: r.withEndpoint(s.Z).fetchCommunityBoostPivot, params: t })({ actionTypes: E, context: "FETCH_COMMUNITYBOOST_PIVOT", meta: { tweet_id: t } }),
                C = (t, e) => t[a].pivots[e];
        },
        371184: (t, e, o) => {
            o.d(e, { Z: () => i });
            var s = o(106067),
                r = o(740527),
                n = o(218951);
            const i = (t) => (0, n.Z)({ timelineId: "birdwatch-global-timeline", network: { getEndpoint: (t) => t.withEndpoint(s.Z).fetchGlobalTimeline, getEndpointParams: () => ({ tabId: t }) }, context: "FETCH_BIRDWATCH_GLOBAL_TIMELINE", perfKey: "birdwatch-global-timeline", formatResponse: r.Z });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-8ed0fac5.32b9239a.js.map
