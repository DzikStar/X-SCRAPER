(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-43dd7041"],
    {
        812335: function (e, r, t) {
            var a, _, n, s, c;
            (c = "object" == typeof (s = this).sodium && "function" == typeof s.sodium.onload ? s.sodium.onload : null),
                (_ = [r, t(195641)]),
                (a = function (e, r) {
                    "use strict";
                    var t,
                        a = r.ready.then(function () {
                            function a() {
                                if (0 !== t._sodium_init()) throw new Error("libsodium was not correctly initialized.");
                                for (
                                    var r = [
                                            "crypto_aead_aegis128l_decrypt",
                                            "crypto_aead_aegis128l_decrypt_detached",
                                            "crypto_aead_aegis128l_encrypt",
                                            "crypto_aead_aegis128l_encrypt_detached",
                                            "crypto_aead_aegis128l_keygen",
                                            "crypto_aead_aegis256_decrypt",
                                            "crypto_aead_aegis256_decrypt_detached",
                                            "crypto_aead_aegis256_encrypt",
                                            "crypto_aead_aegis256_encrypt_detached",
                                            "crypto_aead_aegis256_keygen",
                                            "crypto_aead_chacha20poly1305_decrypt",
                                            "crypto_aead_chacha20poly1305_decrypt_detached",
                                            "crypto_aead_chacha20poly1305_encrypt",
                                            "crypto_aead_chacha20poly1305_encrypt_detached",
                                            "crypto_aead_chacha20poly1305_ietf_decrypt",
                                            "crypto_aead_chacha20poly1305_ietf_decrypt_detached",
                                            "crypto_aead_chacha20poly1305_ietf_encrypt",
                                            "crypto_aead_chacha20poly1305_ietf_encrypt_detached",
                                            "crypto_aead_chacha20poly1305_ietf_keygen",
                                            "crypto_aead_chacha20poly1305_keygen",
                                            "crypto_aead_xchacha20poly1305_ietf_decrypt",
                                            "crypto_aead_xchacha20poly1305_ietf_decrypt_detached",
                                            "crypto_aead_xchacha20poly1305_ietf_encrypt",
                                            "crypto_aead_xchacha20poly1305_ietf_encrypt_detached",
                                            "crypto_aead_xchacha20poly1305_ietf_keygen",
                                            "crypto_auth",
                                            "crypto_auth_hmacsha256",
                                            "crypto_auth_hmacsha256_final",
                                            "crypto_auth_hmacsha256_init",
                                            "crypto_auth_hmacsha256_keygen",
                                            "crypto_auth_hmacsha256_update",
                                            "crypto_auth_hmacsha256_verify",
                                            "crypto_auth_hmacsha512",
                                            "crypto_auth_hmacsha512_final",
                                            "crypto_auth_hmacsha512_init",
                                            "crypto_auth_hmacsha512_keygen",
                                            "crypto_auth_hmacsha512_update",
                                            "crypto_auth_hmacsha512_verify",
                                            "crypto_auth_keygen",
                                            "crypto_auth_verify",
                                            "crypto_box_beforenm",
                                            "crypto_box_curve25519xchacha20poly1305_beforenm",
                                            "crypto_box_curve25519xchacha20poly1305_detached",
                                            "crypto_box_curve25519xchacha20poly1305_detached_afternm",
                                            "crypto_box_curve25519xchacha20poly1305_easy",
                                            "crypto_box_curve25519xchacha20poly1305_easy_afternm",
                                            "crypto_box_curve25519xchacha20poly1305_keypair",
                                            "crypto_box_curve25519xchacha20poly1305_open_detached",
                                            "crypto_box_curve25519xchacha20poly1305_open_detached_afternm",
                                            "crypto_box_curve25519xchacha20poly1305_open_easy",
                                            "crypto_box_curve25519xchacha20poly1305_open_easy_afternm",
                                            "crypto_box_curve25519xchacha20poly1305_seal",
                                            "crypto_box_curve25519xchacha20poly1305_seal_open",
                                            "crypto_box_curve25519xchacha20poly1305_seed_keypair",
                                            "crypto_box_detached",
                                            "crypto_box_easy",
                                            "crypto_box_easy_afternm",
                                            "crypto_box_keypair",
                                            "crypto_box_open_detached",
                                            "crypto_box_open_easy",
                                            "crypto_box_open_easy_afternm",
                                            "crypto_box_seal",
                                            "crypto_box_seal_open",
                                            "crypto_box_seed_keypair",
                                            "crypto_core_ed25519_add",
                                            "crypto_core_ed25519_from_hash",
                                            "crypto_core_ed25519_from_uniform",
                                            "crypto_core_ed25519_is_valid_point",
                                            "crypto_core_ed25519_random",
                                            "crypto_core_ed25519_scalar_add",
                                            "crypto_core_ed25519_scalar_complement",
                                            "crypto_core_ed25519_scalar_invert",
                                            "crypto_core_ed25519_scalar_mul",
                                            "crypto_core_ed25519_scalar_negate",
                                            "crypto_core_ed25519_scalar_random",
                                            "crypto_core_ed25519_scalar_reduce",
                                            "crypto_core_ed25519_scalar_sub",
                                            "crypto_core_ed25519_sub",
                                            "crypto_core_hchacha20",
                                            "crypto_core_hsalsa20",
                                            "crypto_core_ristretto255_add",
                                            "crypto_core_ristretto255_from_hash",
                                            "crypto_core_ristretto255_is_valid_point",
                                            "crypto_core_ristretto255_random",
                                            "crypto_core_ristretto255_scalar_add",
                                            "crypto_core_ristretto255_scalar_complement",
                                            "crypto_core_ristretto255_scalar_invert",
                                            "crypto_core_ristretto255_scalar_mul",
                                            "crypto_core_ristretto255_scalar_negate",
                                            "crypto_core_ristretto255_scalar_random",
                                            "crypto_core_ristretto255_scalar_reduce",
                                            "crypto_core_ristretto255_scalar_sub",
                                            "crypto_core_ristretto255_sub",
                                            "crypto_generichash",
                                            "crypto_generichash_blake2b_salt_personal",
                                            "crypto_generichash_final",
                                            "crypto_generichash_init",
                                            "crypto_generichash_keygen",
                                            "crypto_generichash_update",
                                            "crypto_hash",
                                            "crypto_hash_sha256",
                                            "crypto_hash_sha256_final",
                                            "crypto_hash_sha256_init",
                                            "crypto_hash_sha256_update",
                                            "crypto_hash_sha512",
                                            "crypto_hash_sha512_final",
                                            "crypto_hash_sha512_init",
                                            "crypto_hash_sha512_update",
                                            "crypto_kdf_derive_from_key",
                                            "crypto_kdf_keygen",
                                            "crypto_kx_client_session_keys",
                                            "crypto_kx_keypair",
                                            "crypto_kx_seed_keypair",
                                            "crypto_kx_server_session_keys",
                                            "crypto_onetimeauth",
                                            "crypto_onetimeauth_final",
                                            "crypto_onetimeauth_init",
                                            "crypto_onetimeauth_keygen",
                                            "crypto_onetimeauth_update",
                                            "crypto_onetimeauth_verify",
                                            "crypto_pwhash",
                                            "crypto_pwhash_scryptsalsa208sha256",
                                            "crypto_pwhash_scryptsalsa208sha256_ll",
                                            "crypto_pwhash_scryptsalsa208sha256_str",
                                            "crypto_pwhash_scryptsalsa208sha256_str_verify",
                                            "crypto_pwhash_str",
                                            "crypto_pwhash_str_needs_rehash",
                                            "crypto_pwhash_str_verify",
                                            "crypto_scalarmult",
                                            "crypto_scalarmult_base",
                                            "crypto_scalarmult_ed25519",
                                            "crypto_scalarmult_ed25519_base",
                                            "crypto_scalarmult_ed25519_base_noclamp",
                                            "crypto_scalarmult_ed25519_noclamp",
                                            "crypto_scalarmult_ristretto255",
                                            "crypto_scalarmult_ristretto255_base",
                                            "crypto_secretbox_detached",
                                            "crypto_secretbox_easy",
                                            "crypto_secretbox_keygen",
                                            "crypto_secretbox_open_detached",
                                            "crypto_secretbox_open_easy",
                                            "crypto_secretstream_xchacha20poly1305_init_pull",
                                            "crypto_secretstream_xchacha20poly1305_init_push",
                                            "crypto_secretstream_xchacha20poly1305_keygen",
                                            "crypto_secretstream_xchacha20poly1305_pull",
                                            "crypto_secretstream_xchacha20poly1305_push",
                                            "crypto_secretstream_xchacha20poly1305_rekey",
                                            "crypto_shorthash",
                                            "crypto_shorthash_keygen",
                                            "crypto_shorthash_siphashx24",
                                            "crypto_sign",
                                            "crypto_sign_detached",
                                            "crypto_sign_ed25519_pk_to_curve25519",
                                            "crypto_sign_ed25519_sk_to_curve25519",
                                            "crypto_sign_ed25519_sk_to_pk",
                                            "crypto_sign_ed25519_sk_to_seed",
                                            "crypto_sign_final_create",
                                            "crypto_sign_final_verify",
                                            "crypto_sign_init",
                                            "crypto_sign_keypair",
                                            "crypto_sign_open",
                                            "crypto_sign_seed_keypair",
                                            "crypto_sign_update",
                                            "crypto_sign_verify_detached",
                                            "crypto_stream_chacha20",
                                            "crypto_stream_chacha20_ietf_xor",
                                            "crypto_stream_chacha20_ietf_xor_ic",
                                            "crypto_stream_chacha20_keygen",
                                            "crypto_stream_chacha20_xor",
                                            "crypto_stream_chacha20_xor_ic",
                                            "crypto_stream_keygen",
                                            "crypto_stream_xchacha20_keygen",
                                            "crypto_stream_xchacha20_xor",
                                            "crypto_stream_xchacha20_xor_ic",
                                            "randombytes_buf",
                                            "randombytes_buf_deterministic",
                                            "randombytes_close",
                                            "randombytes_random",
                                            "randombytes_set_implementation",
                                            "randombytes_stir",
                                            "randombytes_uniform",
                                            "sodium_version_string",
                                        ],
                                        a = [x, E, k, S, w, T, Y, B, A, K, M, I, N, L, O, U, C, R, P, G, X, F, D, j, V, H, q, z, W, $, J, Q, Z, ee, re, te, ae, _e, ne, se, ce, oe, he, pe, ie, ye, le, ue, de, ve, ge, be, fe, me, xe, Ee, ke, Se, we, Te, Ye, Be, Ae, Ke, Me, Ie, Ne, Le, Oe, Ue, Ce, Re, Pe, Ge, Xe, Fe, De, je, Ve, He, qe, ze, We, $e, Je, Qe, Ze, er, rr, tr, ar, _r, nr, sr, cr, or, hr, pr, ir, yr, lr, ur, dr, vr, gr, br, fr, mr, xr, Er, kr, Sr, wr, Tr, Yr, Br, Ar, Kr, Mr, Ir, Nr, Lr, Or, Ur, Cr, Rr, Pr, Gr, Xr, Fr, Dr, jr, Vr, Hr, qr, zr, Wr, $r, Jr, Qr, Zr, et, rt, tt, at, _t, nt, st, ct, ot, ht, pt, it, yt, lt, ut, dt, vt, gt, bt, ft, mt, xt, Et, kt, St, wt, Tt, Yt, Bt, At, Kt, Mt, It, Nt, Lt, Ot, Ut, Ct, Rt, Pt, Gt],
                                        _ = 0;
                                    _ < a.length;
                                    _++
                                )
                                    "function" == typeof t["_" + r[_]] && (e[r[_]] = a[_]);
                                var n = [
                                    "SODIUM_LIBRARY_VERSION_MAJOR",
                                    "SODIUM_LIBRARY_VERSION_MINOR",
                                    "crypto_aead_chacha20poly1305_ABYTES",
                                    "crypto_aead_chacha20poly1305_IETF_ABYTES",
                                    "crypto_aead_chacha20poly1305_IETF_KEYBYTES",
                                    "crypto_aead_chacha20poly1305_IETF_MESSAGEBYTES_MAX",
                                    "crypto_aead_chacha20poly1305_IETF_NPUBBYTES",
                                    "crypto_aead_chacha20poly1305_IETF_NSECBYTES",
                                    "crypto_aead_chacha20poly1305_KEYBYTES",
                                    "crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX",
                                    "crypto_aead_chacha20poly1305_NPUBBYTES",
                                    "crypto_aead_chacha20poly1305_NSECBYTES",
                                    "crypto_aead_chacha20poly1305_ietf_ABYTES",
                                    "crypto_aead_chacha20poly1305_ietf_KEYBYTES",
                                    "crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX",
                                    "crypto_aead_chacha20poly1305_ietf_NPUBBYTES",
                                    "crypto_aead_chacha20poly1305_ietf_NSECBYTES",
                                    "crypto_aead_xchacha20poly1305_IETF_ABYTES",
                                    "crypto_aead_xchacha20poly1305_IETF_KEYBYTES",
                                    "crypto_aead_xchacha20poly1305_IETF_MESSAGEBYTES_MAX",
                                    "crypto_aead_xchacha20poly1305_IETF_NPUBBYTES",
                                    "crypto_aead_xchacha20poly1305_IETF_NSECBYTES",
                                    "crypto_aead_xchacha20poly1305_ietf_ABYTES",
                                    "crypto_aead_xchacha20poly1305_ietf_KEYBYTES",
                                    "crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX",
                                    "crypto_aead_xchacha20poly1305_ietf_NPUBBYTES",
                                    "crypto_aead_xchacha20poly1305_ietf_NSECBYTES",
                                    "crypto_auth_BYTES",
                                    "crypto_auth_KEYBYTES",
                                    "crypto_auth_hmacsha256_BYTES",
                                    "crypto_auth_hmacsha256_KEYBYTES",
                                    "crypto_auth_hmacsha512256_BYTES",
                                    "crypto_auth_hmacsha512256_KEYBYTES",
                                    "crypto_auth_hmacsha512_BYTES",
                                    "crypto_auth_hmacsha512_KEYBYTES",
                                    "crypto_box_BEFORENMBYTES",
                                    "crypto_box_MACBYTES",
                                    "crypto_box_MESSAGEBYTES_MAX",
                                    "crypto_box_NONCEBYTES",
                                    "crypto_box_PUBLICKEYBYTES",
                                    "crypto_box_SEALBYTES",
                                    "crypto_box_SECRETKEYBYTES",
                                    "crypto_box_SEEDBYTES",
                                    "crypto_box_curve25519xchacha20poly1305_BEFORENMBYTES",
                                    "crypto_box_curve25519xchacha20poly1305_MACBYTES",
                                    "crypto_box_curve25519xchacha20poly1305_MESSAGEBYTES_MAX",
                                    "crypto_box_curve25519xchacha20poly1305_NONCEBYTES",
                                    "crypto_box_curve25519xchacha20poly1305_PUBLICKEYBYTES",
                                    "crypto_box_curve25519xchacha20poly1305_SEALBYTES",
                                    "crypto_box_curve25519xchacha20poly1305_SECRETKEYBYTES",
                                    "crypto_box_curve25519xchacha20poly1305_SEEDBYTES",
                                    "crypto_box_curve25519xsalsa20poly1305_BEFORENMBYTES",
                                    "crypto_box_curve25519xsalsa20poly1305_MACBYTES",
                                    "crypto_box_curve25519xsalsa20poly1305_MESSAGEBYTES_MAX",
                                    "crypto_box_curve25519xsalsa20poly1305_NONCEBYTES",
                                    "crypto_box_curve25519xsalsa20poly1305_PUBLICKEYBYTES",
                                    "crypto_box_curve25519xsalsa20poly1305_SECRETKEYBYTES",
                                    "crypto_box_curve25519xsalsa20poly1305_SEEDBYTES",
                                    "crypto_core_ed25519_BYTES",
                                    "crypto_core_ed25519_HASHBYTES",
                                    "crypto_core_ed25519_NONREDUCEDSCALARBYTES",
                                    "crypto_core_ed25519_SCALARBYTES",
                                    "crypto_core_ed25519_UNIFORMBYTES",
                                    "crypto_core_hchacha20_CONSTBYTES",
                                    "crypto_core_hchacha20_INPUTBYTES",
                                    "crypto_core_hchacha20_KEYBYTES",
                                    "crypto_core_hchacha20_OUTPUTBYTES",
                                    "crypto_core_hsalsa20_CONSTBYTES",
                                    "crypto_core_hsalsa20_INPUTBYTES",
                                    "crypto_core_hsalsa20_KEYBYTES",
                                    "crypto_core_hsalsa20_OUTPUTBYTES",
                                    "crypto_core_ristretto255_BYTES",
                                    "crypto_core_ristretto255_HASHBYTES",
                                    "crypto_core_ristretto255_NONREDUCEDSCALARBYTES",
                                    "crypto_core_ristretto255_SCALARBYTES",
                                    "crypto_core_salsa2012_CONSTBYTES",
                                    "crypto_core_salsa2012_INPUTBYTES",
                                    "crypto_core_salsa2012_KEYBYTES",
                                    "crypto_core_salsa2012_OUTPUTBYTES",
                                    "crypto_core_salsa20_CONSTBYTES",
                                    "crypto_core_salsa20_INPUTBYTES",
                                    "crypto_core_salsa20_KEYBYTES",
                                    "crypto_core_salsa20_OUTPUTBYTES",
                                    "crypto_generichash_BYTES",
                                    "crypto_generichash_BYTES_MAX",
                                    "crypto_generichash_BYTES_MIN",
                                    "crypto_generichash_KEYBYTES",
                                    "crypto_generichash_KEYBYTES_MAX",
                                    "crypto_generichash_KEYBYTES_MIN",
                                    "crypto_generichash_blake2b_BYTES",
                                    "crypto_generichash_blake2b_BYTES_MAX",
                                    "crypto_generichash_blake2b_BYTES_MIN",
                                    "crypto_generichash_blake2b_KEYBYTES",
                                    "crypto_generichash_blake2b_KEYBYTES_MAX",
                                    "crypto_generichash_blake2b_KEYBYTES_MIN",
                                    "crypto_generichash_blake2b_PERSONALBYTES",
                                    "crypto_generichash_blake2b_SALTBYTES",
                                    "crypto_hash_BYTES",
                                    "crypto_hash_sha256_BYTES",
                                    "crypto_hash_sha512_BYTES",
                                    "crypto_kdf_BYTES_MAX",
                                    "crypto_kdf_BYTES_MIN",
                                    "crypto_kdf_CONTEXTBYTES",
                                    "crypto_kdf_KEYBYTES",
                                    "crypto_kdf_blake2b_BYTES_MAX",
                                    "crypto_kdf_blake2b_BYTES_MIN",
                                    "crypto_kdf_blake2b_CONTEXTBYTES",
                                    "crypto_kdf_blake2b_KEYBYTES",
                                    "crypto_kx_PUBLICKEYBYTES",
                                    "crypto_kx_SECRETKEYBYTES",
                                    "crypto_kx_SEEDBYTES",
                                    "crypto_kx_SESSIONKEYBYTES",
                                    "crypto_onetimeauth_BYTES",
                                    "crypto_onetimeauth_KEYBYTES",
                                    "crypto_onetimeauth_poly1305_BYTES",
                                    "crypto_onetimeauth_poly1305_KEYBYTES",
                                    "crypto_pwhash_ALG_ARGON2I13",
                                    "crypto_pwhash_ALG_ARGON2ID13",
                                    "crypto_pwhash_ALG_DEFAULT",
                                    "crypto_pwhash_BYTES_MAX",
                                    "crypto_pwhash_BYTES_MIN",
                                    "crypto_pwhash_MEMLIMIT_INTERACTIVE",
                                    "crypto_pwhash_MEMLIMIT_MAX",
                                    "crypto_pwhash_MEMLIMIT_MIN",
                                    "crypto_pwhash_MEMLIMIT_MODERATE",
                                    "crypto_pwhash_MEMLIMIT_SENSITIVE",
                                    "crypto_pwhash_OPSLIMIT_INTERACTIVE",
                                    "crypto_pwhash_OPSLIMIT_MAX",
                                    "crypto_pwhash_OPSLIMIT_MIN",
                                    "crypto_pwhash_OPSLIMIT_MODERATE",
                                    "crypto_pwhash_OPSLIMIT_SENSITIVE",
                                    "crypto_pwhash_PASSWD_MAX",
                                    "crypto_pwhash_PASSWD_MIN",
                                    "crypto_pwhash_SALTBYTES",
                                    "crypto_pwhash_STRBYTES",
                                    "crypto_pwhash_argon2i_BYTES_MAX",
                                    "crypto_pwhash_argon2i_BYTES_MIN",
                                    "crypto_pwhash_argon2i_SALTBYTES",
                                    "crypto_pwhash_argon2i_STRBYTES",
                                    "crypto_pwhash_argon2id_BYTES_MAX",
                                    "crypto_pwhash_argon2id_BYTES_MIN",
                                    "crypto_pwhash_argon2id_SALTBYTES",
                                    "crypto_pwhash_argon2id_STRBYTES",
                                    "crypto_pwhash_scryptsalsa208sha256_BYTES_MAX",
                                    "crypto_pwhash_scryptsalsa208sha256_BYTES_MIN",
                                    "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE",
                                    "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX",
                                    "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN",
                                    "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE",
                                    "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE",
                                    "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX",
                                    "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN",
                                    "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE",
                                    "crypto_pwhash_scryptsalsa208sha256_SALTBYTES",
                                    "crypto_pwhash_scryptsalsa208sha256_STRBYTES",
                                    "crypto_scalarmult_BYTES",
                                    "crypto_scalarmult_SCALARBYTES",
                                    "crypto_scalarmult_curve25519_BYTES",
                                    "crypto_scalarmult_curve25519_SCALARBYTES",
                                    "crypto_scalarmult_ed25519_BYTES",
                                    "crypto_scalarmult_ed25519_SCALARBYTES",
                                    "crypto_scalarmult_ristretto255_BYTES",
                                    "crypto_scalarmult_ristretto255_SCALARBYTES",
                                    "crypto_secretbox_KEYBYTES",
                                    "crypto_secretbox_MACBYTES",
                                    "crypto_secretbox_MESSAGEBYTES_MAX",
                                    "crypto_secretbox_NONCEBYTES",
                                    "crypto_secretbox_xchacha20poly1305_KEYBYTES",
                                    "crypto_secretbox_xchacha20poly1305_MACBYTES",
                                    "crypto_secretbox_xchacha20poly1305_MESSAGEBYTES_MAX",
                                    "crypto_secretbox_xchacha20poly1305_NONCEBYTES",
                                    "crypto_secretbox_xsalsa20poly1305_KEYBYTES",
                                    "crypto_secretbox_xsalsa20poly1305_MACBYTES",
                                    "crypto_secretbox_xsalsa20poly1305_MESSAGEBYTES_MAX",
                                    "crypto_secretbox_xsalsa20poly1305_NONCEBYTES",
                                    "crypto_secretstream_xchacha20poly1305_ABYTES",
                                    "crypto_secretstream_xchacha20poly1305_HEADERBYTES",
                                    "crypto_secretstream_xchacha20poly1305_KEYBYTES",
                                    "crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX",
                                    "crypto_secretstream_xchacha20poly1305_TAG_FINAL",
                                    "crypto_secretstream_xchacha20poly1305_TAG_MESSAGE",
                                    "crypto_secretstream_xchacha20poly1305_TAG_PUSH",
                                    "crypto_secretstream_xchacha20poly1305_TAG_REKEY",
                                    "crypto_shorthash_BYTES",
                                    "crypto_shorthash_KEYBYTES",
                                    "crypto_shorthash_siphash24_BYTES",
                                    "crypto_shorthash_siphash24_KEYBYTES",
                                    "crypto_shorthash_siphashx24_BYTES",
                                    "crypto_shorthash_siphashx24_KEYBYTES",
                                    "crypto_sign_BYTES",
                                    "crypto_sign_MESSAGEBYTES_MAX",
                                    "crypto_sign_PUBLICKEYBYTES",
                                    "crypto_sign_SECRETKEYBYTES",
                                    "crypto_sign_SEEDBYTES",
                                    "crypto_sign_ed25519_BYTES",
                                    "crypto_sign_ed25519_MESSAGEBYTES_MAX",
                                    "crypto_sign_ed25519_PUBLICKEYBYTES",
                                    "crypto_sign_ed25519_SECRETKEYBYTES",
                                    "crypto_sign_ed25519_SEEDBYTES",
                                    "crypto_stream_KEYBYTES",
                                    "crypto_stream_MESSAGEBYTES_MAX",
                                    "crypto_stream_NONCEBYTES",
                                    "crypto_stream_chacha20_IETF_KEYBYTES",
                                    "crypto_stream_chacha20_IETF_MESSAGEBYTES_MAX",
                                    "crypto_stream_chacha20_IETF_NONCEBYTES",
                                    "crypto_stream_chacha20_KEYBYTES",
                                    "crypto_stream_chacha20_MESSAGEBYTES_MAX",
                                    "crypto_stream_chacha20_NONCEBYTES",
                                    "crypto_stream_chacha20_ietf_KEYBYTES",
                                    "crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX",
                                    "crypto_stream_chacha20_ietf_NONCEBYTES",
                                    "crypto_stream_salsa2012_KEYBYTES",
                                    "crypto_stream_salsa2012_MESSAGEBYTES_MAX",
                                    "crypto_stream_salsa2012_NONCEBYTES",
                                    "crypto_stream_salsa208_KEYBYTES",
                                    "crypto_stream_salsa208_MESSAGEBYTES_MAX",
                                    "crypto_stream_salsa208_NONCEBYTES",
                                    "crypto_stream_salsa20_KEYBYTES",
                                    "crypto_stream_salsa20_MESSAGEBYTES_MAX",
                                    "crypto_stream_salsa20_NONCEBYTES",
                                    "crypto_stream_xchacha20_KEYBYTES",
                                    "crypto_stream_xchacha20_MESSAGEBYTES_MAX",
                                    "crypto_stream_xchacha20_NONCEBYTES",
                                    "crypto_stream_xsalsa20_KEYBYTES",
                                    "crypto_stream_xsalsa20_MESSAGEBYTES_MAX",
                                    "crypto_stream_xsalsa20_NONCEBYTES",
                                    "crypto_verify_16_BYTES",
                                    "crypto_verify_32_BYTES",
                                    "crypto_verify_64_BYTES",
                                ];
                                for (_ = 0; _ < n.length; _++) "function" == typeof (c = t["_" + n[_].toLowerCase()]) && (e[n[_]] = c());
                                var s = ["SODIUM_VERSION_STRING", "crypto_pwhash_STRPREFIX", "crypto_pwhash_scryptsalsa208sha256_STRPREFIX"];
                                for (_ = 0; _ < s.length; _++) {
                                    var c;
                                    "function" == typeof (c = t["_" + s[_].toLowerCase()]) && (e[s[_]] = t.UTF8ToString(c()));
                                }
                            }
                            t = r;
                            try {
                                a();
                                var _ = new Uint8Array([98, 97, 108, 108, 115]),
                                    n = e.randombytes_buf(e.crypto_secretbox_NONCEBYTES),
                                    s = e.randombytes_buf(e.crypto_secretbox_KEYBYTES),
                                    c = e.crypto_secretbox_easy(_, n, s),
                                    o = e.crypto_secretbox_open_easy(c, n, s);
                                if (e.memcmp(_, o)) return;
                            } catch (e) {
                                if (null == t.useBackupModule) throw new Error("Both wasm and asm failed to load" + e);
                            }
                            t.useBackupModule(), a();
                        });
                    function _(e) {
                        if ("function" == typeof TextEncoder) return new TextEncoder().encode(e);
                        e = unescape(encodeURIComponent(e));
                        for (var r = new Uint8Array(e.length), t = 0, a = e.length; t < a; t++) r[t] = e.charCodeAt(t);
                        return r;
                    }
                    function n(e) {
                        if ("function" == typeof TextDecoder) return new TextDecoder("utf-8", { fatal: !0 }).decode(e);
                        var r = 8192,
                            t = Math.ceil(e.length / r);
                        if (t <= 1)
                            try {
                                return decodeURIComponent(escape(String.fromCharCode.apply(null, e)));
                            } catch (e) {
                                throw new TypeError("The encoded data was not valid.");
                            }
                        for (var a = "", _ = 0, s = 0; s < t; s++) {
                            var c = Array.prototype.slice.call(e, s * r + _, (s + 1) * r + _);
                            if (0 != c.length) {
                                var o,
                                    h = c.length,
                                    p = 0;
                                do {
                                    var i = c[--h];
                                    i >= 240 ? ((p = 4), (o = !0)) : i >= 224 ? ((p = 3), (o = !0)) : i >= 192 ? ((p = 2), (o = !0)) : i < 128 && ((p = 1), (o = !0));
                                } while (!o);
                                for (var y = p - (c.length - h), l = 0; l < y; l++) _--, c.pop();
                                a += n(c);
                            }
                        }
                        return a;
                    }
                    function s(e) {
                        e = m(null, e, "input");
                        for (var r, t, a, _ = "", n = 0; n < e.length; n++) (a = ((87 + (t = 15 & e[n]) + (((t - 10) >> 8) & -39)) << 8) | (87 + (r = e[n] >>> 4) + (((r - 10) >> 8) & -39))), (_ += String.fromCharCode(255 & a) + String.fromCharCode(a >>> 8));
                        return _;
                    }
                    var c = { ORIGINAL: 1, ORIGINAL_NO_PADDING: 3, URLSAFE: 5, URLSAFE_NO_PADDING: 7 };
                    function o(e) {
                        if (null == e) return c.URLSAFE_NO_PADDING;
                        if (e !== c.ORIGINAL && e !== c.ORIGINAL_NO_PADDING && e !== c.URLSAFE && e != c.URLSAFE_NO_PADDING) throw new Error("unsupported base64 variant");
                        return e;
                    }
                    function h(e, r) {
                        (r = o(r)), (e = m(_, e, "input"));
                        var a,
                            _ = [],
                            s = 0 | Math.floor(e.length / 3),
                            c = e.length - 3 * s,
                            h = 4 * s + (0 !== c ? (2 & r ? 2 + (c >>> 1) : 4) : 0),
                            p = new l(h + 1),
                            i = u(e);
                        return _.push(i), _.push(p.address), 0 === t._sodium_bin2base64(p.address, p.length, i, e.length, r) && g(_, "conversion failed"), (p.length = h), (a = n(p.to_Uint8Array())), v(_), a;
                    }
                    function p(e, r) {
                        var t = r || "uint8array";
                        if (!i(t)) throw new Error(t + " output format is not available");
                        if (e instanceof l) {
                            if ("uint8array" === t) return e.to_Uint8Array();
                            if ("text" === t) return n(e.to_Uint8Array());
                            if ("hex" === t) return s(e.to_Uint8Array());
                            if ("base64" === t) return h(e.to_Uint8Array(), c.URLSAFE_NO_PADDING);
                            throw new Error('What is output format "' + t + '"?');
                        }
                        if ("object" == typeof e) {
                            for (var a = Object.keys(e), _ = {}, o = 0; o < a.length; o++) _[a[o]] = p(e[a[o]], t);
                            return _;
                        }
                        if ("string" == typeof e) return e;
                        throw new TypeError("Cannot format output");
                    }
                    function i(e) {
                        for (var r = ["uint8array", "text", "hex", "base64"], t = 0; t < r.length; t++) if (r[t] === e) return !0;
                        return !1;
                    }
                    function y(e) {
                        if (e) {
                            if ("string" != typeof e) throw new TypeError("When defined, the output format must be a string");
                            if (!i(e)) throw new Error(e + " is not a supported output format");
                        }
                    }
                    function l(e) {
                        (this.length = e), (this.address = d(e));
                    }
                    function u(e) {
                        var r = d(e.length);
                        return t.HEAPU8.set(e, r), r;
                    }
                    function d(e) {
                        var r = t._malloc(e);
                        if (0 === r) throw { message: "_malloc() failed", length: e };
                        return r;
                    }
                    function v(e) {
                        if (e) for (var r = 0; r < e.length; r++) (a = e[r]), t._free(a);
                        var a;
                    }
                    function g(e, r) {
                        throw (v(e), new Error(r));
                    }
                    function b(e, r) {
                        throw (v(e), new TypeError(r));
                    }
                    function f(e, r, t) {
                        null == r && b(e, t + " cannot be null or undefined");
                    }
                    function m(e, r, t) {
                        return f(e, r, t), r instanceof Uint8Array ? r : "string" == typeof r ? _(r) : void b(e, "unsupported input type for " + t);
                    }
                    function x(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = null;
                        null != e && ((o = u((e = m(c, e, "secret_nonce")))), e.length, c.push(o)), (r = m(c, r, "ciphertext"));
                        var h,
                            i = t._crypto_aead_aegis128l_abytes(),
                            d = r.length;
                        d < i && b(c, "ciphertext is too short"), (h = u(r)), c.push(h);
                        var f = null,
                            x = 0;
                        null != a && ((f = u((a = m(c, a, "additional_data")))), (x = a.length), c.push(f)), (_ = m(c, _, "public_nonce"));
                        var E,
                            k = 0 | t._crypto_aead_aegis128l_npubbytes();
                        _.length !== k && b(c, "invalid public_nonce length"), (E = u(_)), c.push(E), (n = m(c, n, "key"));
                        var S,
                            w = 0 | t._crypto_aead_aegis128l_keybytes();
                        n.length !== w && b(c, "invalid key length"), (S = u(n)), c.push(S);
                        var T = new l((d - t._crypto_aead_aegis128l_abytes()) | 0),
                            Y = T.address;
                        if ((c.push(Y), 0 === t._crypto_aead_aegis128l_decrypt(Y, null, o, h, d, 0, f, x, 0, E, S))) {
                            var B = p(T, s);
                            return v(c), B;
                        }
                        g(c, "ciphertext cannot be decrypted using that key");
                    }
                    function E(e, r, a, _, n, s, c) {
                        var o = [];
                        y(c);
                        var h = null;
                        null != e && ((h = u((e = m(o, e, "secret_nonce")))), e.length, o.push(h));
                        var i = u((r = m(o, r, "ciphertext"))),
                            d = r.length;
                        o.push(i), (a = m(o, a, "mac"));
                        var f,
                            x = 0 | t._crypto_box_macbytes();
                        a.length !== x && b(o, "invalid mac length"), (f = u(a)), o.push(f);
                        var E = null,
                            k = 0;
                        null != _ && ((E = u((_ = m(o, _, "additional_data")))), (k = _.length), o.push(E)), (n = m(o, n, "public_nonce"));
                        var S,
                            w = 0 | t._crypto_aead_aegis128l_npubbytes();
                        n.length !== w && b(o, "invalid public_nonce length"), (S = u(n)), o.push(S), (s = m(o, s, "key"));
                        var T,
                            Y = 0 | t._crypto_aead_aegis128l_keybytes();
                        s.length !== Y && b(o, "invalid key length"), (T = u(s)), o.push(T);
                        var B = new l(0 | d),
                            A = B.address;
                        if ((o.push(A), 0 === t._crypto_aead_aegis128l_decrypt_detached(A, h, i, d, 0, f, E, k, 0, S, T))) {
                            var K = p(B, c);
                            return v(o), K;
                        }
                        g(o, "ciphertext cannot be decrypted using that key");
                    }
                    function k(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_aegis128l_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_aegis128l_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l((h + t._crypto_aead_aegis128l_abytes()) | 0),
                            T = w.address;
                        if ((c.push(T), 0 === t._crypto_aead_aegis128l_encrypt(T, null, o, h, 0, i, d, 0, f, x, k))) {
                            var Y = p(w, s);
                            return v(c), Y;
                        }
                        g(c, "invalid usage");
                    }
                    function S(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_aegis128l_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_aegis128l_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l(0 | h),
                            T = w.address;
                        c.push(T);
                        var Y = new l(0 | t._crypto_aead_aegis128l_abytes()),
                            B = Y.address;
                        if ((c.push(B), 0 === t._crypto_aead_aegis128l_encrypt_detached(T, B, null, o, h, 0, i, d, 0, f, x, k))) {
                            var A = p({ ciphertext: w, mac: Y }, s);
                            return v(c), A;
                        }
                        g(c, "invalid usage");
                    }
                    function w(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_aead_aegis128l_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_aead_aegis128l_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function T(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = null;
                        null != e && ((o = u((e = m(c, e, "secret_nonce")))), e.length, c.push(o)), (r = m(c, r, "ciphertext"));
                        var h,
                            i = t._crypto_aead_aegis256_abytes(),
                            d = r.length;
                        d < i && b(c, "ciphertext is too short"), (h = u(r)), c.push(h);
                        var f = null,
                            x = 0;
                        null != a && ((f = u((a = m(c, a, "additional_data")))), (x = a.length), c.push(f)), (_ = m(c, _, "public_nonce"));
                        var E,
                            k = 0 | t._crypto_aead_aegis256_npubbytes();
                        _.length !== k && b(c, "invalid public_nonce length"), (E = u(_)), c.push(E), (n = m(c, n, "key"));
                        var S,
                            w = 0 | t._crypto_aead_aegis256_keybytes();
                        n.length !== w && b(c, "invalid key length"), (S = u(n)), c.push(S);
                        var T = new l((d - t._crypto_aead_aegis256_abytes()) | 0),
                            Y = T.address;
                        if ((c.push(Y), 0 === t._crypto_aead_aegis256_decrypt(Y, null, o, h, d, 0, f, x, 0, E, S))) {
                            var B = p(T, s);
                            return v(c), B;
                        }
                        g(c, "ciphertext cannot be decrypted using that key");
                    }
                    function Y(e, r, a, _, n, s, c) {
                        var o = [];
                        y(c);
                        var h = null;
                        null != e && ((h = u((e = m(o, e, "secret_nonce")))), e.length, o.push(h));
                        var i = u((r = m(o, r, "ciphertext"))),
                            d = r.length;
                        o.push(i), (a = m(o, a, "mac"));
                        var f,
                            x = 0 | t._crypto_box_macbytes();
                        a.length !== x && b(o, "invalid mac length"), (f = u(a)), o.push(f);
                        var E = null,
                            k = 0;
                        null != _ && ((E = u((_ = m(o, _, "additional_data")))), (k = _.length), o.push(E)), (n = m(o, n, "public_nonce"));
                        var S,
                            w = 0 | t._crypto_aead_aegis256_npubbytes();
                        n.length !== w && b(o, "invalid public_nonce length"), (S = u(n)), o.push(S), (s = m(o, s, "key"));
                        var T,
                            Y = 0 | t._crypto_aead_aegis256_keybytes();
                        s.length !== Y && b(o, "invalid key length"), (T = u(s)), o.push(T);
                        var B = new l(0 | d),
                            A = B.address;
                        if ((o.push(A), 0 === t._crypto_aead_aegis256_decrypt_detached(A, h, i, d, 0, f, E, k, 0, S, T))) {
                            var K = p(B, c);
                            return v(o), K;
                        }
                        g(o, "ciphertext cannot be decrypted using that key");
                    }
                    function B(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_aegis256_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_aegis256_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l((h + t._crypto_aead_aegis256_abytes()) | 0),
                            T = w.address;
                        if ((c.push(T), 0 === t._crypto_aead_aegis256_encrypt(T, null, o, h, 0, i, d, 0, f, x, k))) {
                            var Y = p(w, s);
                            return v(c), Y;
                        }
                        g(c, "invalid usage");
                    }
                    function A(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_aegis256_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_aegis256_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l(0 | h),
                            T = w.address;
                        c.push(T);
                        var Y = new l(0 | t._crypto_aead_aegis256_abytes()),
                            B = Y.address;
                        if ((c.push(B), 0 === t._crypto_aead_aegis256_encrypt_detached(T, B, null, o, h, 0, i, d, 0, f, x, k))) {
                            var A = p({ ciphertext: w, mac: Y }, s);
                            return v(c), A;
                        }
                        g(c, "invalid usage");
                    }
                    function K(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_aead_aegis256_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_aead_aegis256_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function M(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = null;
                        null != e && ((o = u((e = m(c, e, "secret_nonce")))), e.length, c.push(o)), (r = m(c, r, "ciphertext"));
                        var h,
                            i = t._crypto_aead_chacha20poly1305_abytes(),
                            d = r.length;
                        d < i && b(c, "ciphertext is too short"), (h = u(r)), c.push(h);
                        var f = null,
                            x = 0;
                        null != a && ((f = u((a = m(c, a, "additional_data")))), (x = a.length), c.push(f)), (_ = m(c, _, "public_nonce"));
                        var E,
                            k = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
                        _.length !== k && b(c, "invalid public_nonce length"), (E = u(_)), c.push(E), (n = m(c, n, "key"));
                        var S,
                            w = 0 | t._crypto_aead_chacha20poly1305_keybytes();
                        n.length !== w && b(c, "invalid key length"), (S = u(n)), c.push(S);
                        var T = new l((d - t._crypto_aead_chacha20poly1305_abytes()) | 0),
                            Y = T.address;
                        if ((c.push(Y), 0 === t._crypto_aead_chacha20poly1305_decrypt(Y, null, o, h, d, 0, f, x, 0, E, S))) {
                            var B = p(T, s);
                            return v(c), B;
                        }
                        g(c, "ciphertext cannot be decrypted using that key");
                    }
                    function I(e, r, a, _, n, s, c) {
                        var o = [];
                        y(c);
                        var h = null;
                        null != e && ((h = u((e = m(o, e, "secret_nonce")))), e.length, o.push(h));
                        var i = u((r = m(o, r, "ciphertext"))),
                            d = r.length;
                        o.push(i), (a = m(o, a, "mac"));
                        var f,
                            x = 0 | t._crypto_box_macbytes();
                        a.length !== x && b(o, "invalid mac length"), (f = u(a)), o.push(f);
                        var E = null,
                            k = 0;
                        null != _ && ((E = u((_ = m(o, _, "additional_data")))), (k = _.length), o.push(E)), (n = m(o, n, "public_nonce"));
                        var S,
                            w = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
                        n.length !== w && b(o, "invalid public_nonce length"), (S = u(n)), o.push(S), (s = m(o, s, "key"));
                        var T,
                            Y = 0 | t._crypto_aead_chacha20poly1305_keybytes();
                        s.length !== Y && b(o, "invalid key length"), (T = u(s)), o.push(T);
                        var B = new l(0 | d),
                            A = B.address;
                        if ((o.push(A), 0 === t._crypto_aead_chacha20poly1305_decrypt_detached(A, h, i, d, 0, f, E, k, 0, S, T))) {
                            var K = p(B, c);
                            return v(o), K;
                        }
                        g(o, "ciphertext cannot be decrypted using that key");
                    }
                    function N(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_chacha20poly1305_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l((h + t._crypto_aead_chacha20poly1305_abytes()) | 0),
                            T = w.address;
                        if ((c.push(T), 0 === t._crypto_aead_chacha20poly1305_encrypt(T, null, o, h, 0, i, d, 0, f, x, k))) {
                            var Y = p(w, s);
                            return v(c), Y;
                        }
                        g(c, "invalid usage");
                    }
                    function L(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_chacha20poly1305_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l(0 | h),
                            T = w.address;
                        c.push(T);
                        var Y = new l(0 | t._crypto_aead_chacha20poly1305_abytes()),
                            B = Y.address;
                        if ((c.push(B), 0 === t._crypto_aead_chacha20poly1305_encrypt_detached(T, B, null, o, h, 0, i, d, 0, f, x, k))) {
                            var A = p({ ciphertext: w, mac: Y }, s);
                            return v(c), A;
                        }
                        g(c, "invalid usage");
                    }
                    function O(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = null;
                        null != e && ((o = u((e = m(c, e, "secret_nonce")))), e.length, c.push(o)), (r = m(c, r, "ciphertext"));
                        var h,
                            i = t._crypto_aead_chacha20poly1305_ietf_abytes(),
                            d = r.length;
                        d < i && b(c, "ciphertext is too short"), (h = u(r)), c.push(h);
                        var f = null,
                            x = 0;
                        null != a && ((f = u((a = m(c, a, "additional_data")))), (x = a.length), c.push(f)), (_ = m(c, _, "public_nonce"));
                        var E,
                            k = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
                        _.length !== k && b(c, "invalid public_nonce length"), (E = u(_)), c.push(E), (n = m(c, n, "key"));
                        var S,
                            w = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
                        n.length !== w && b(c, "invalid key length"), (S = u(n)), c.push(S);
                        var T = new l((d - t._crypto_aead_chacha20poly1305_ietf_abytes()) | 0),
                            Y = T.address;
                        if ((c.push(Y), 0 === t._crypto_aead_chacha20poly1305_ietf_decrypt(Y, null, o, h, d, 0, f, x, 0, E, S))) {
                            var B = p(T, s);
                            return v(c), B;
                        }
                        g(c, "ciphertext cannot be decrypted using that key");
                    }
                    function U(e, r, a, _, n, s, c) {
                        var o = [];
                        y(c);
                        var h = null;
                        null != e && ((h = u((e = m(o, e, "secret_nonce")))), e.length, o.push(h));
                        var i = u((r = m(o, r, "ciphertext"))),
                            d = r.length;
                        o.push(i), (a = m(o, a, "mac"));
                        var f,
                            x = 0 | t._crypto_box_macbytes();
                        a.length !== x && b(o, "invalid mac length"), (f = u(a)), o.push(f);
                        var E = null,
                            k = 0;
                        null != _ && ((E = u((_ = m(o, _, "additional_data")))), (k = _.length), o.push(E)), (n = m(o, n, "public_nonce"));
                        var S,
                            w = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
                        n.length !== w && b(o, "invalid public_nonce length"), (S = u(n)), o.push(S), (s = m(o, s, "key"));
                        var T,
                            Y = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
                        s.length !== Y && b(o, "invalid key length"), (T = u(s)), o.push(T);
                        var B = new l(0 | d),
                            A = B.address;
                        if ((o.push(A), 0 === t._crypto_aead_chacha20poly1305_ietf_decrypt_detached(A, h, i, d, 0, f, E, k, 0, S, T))) {
                            var K = p(B, c);
                            return v(o), K;
                        }
                        g(o, "ciphertext cannot be decrypted using that key");
                    }
                    function C(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l((h + t._crypto_aead_chacha20poly1305_ietf_abytes()) | 0),
                            T = w.address;
                        if ((c.push(T), 0 === t._crypto_aead_chacha20poly1305_ietf_encrypt(T, null, o, h, 0, i, d, 0, f, x, k))) {
                            var Y = p(w, s);
                            return v(c), Y;
                        }
                        g(c, "invalid usage");
                    }
                    function R(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l(0 | h),
                            T = w.address;
                        c.push(T);
                        var Y = new l(0 | t._crypto_aead_chacha20poly1305_ietf_abytes()),
                            B = Y.address;
                        if ((c.push(B), 0 === t._crypto_aead_chacha20poly1305_ietf_encrypt_detached(T, B, null, o, h, 0, i, d, 0, f, x, k))) {
                            var A = p({ ciphertext: w, mac: Y }, s);
                            return v(c), A;
                        }
                        g(c, "invalid usage");
                    }
                    function P(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_aead_chacha20poly1305_ietf_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_aead_chacha20poly1305_ietf_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function G(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_aead_chacha20poly1305_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_aead_chacha20poly1305_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function X(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = null;
                        null != e && ((o = u((e = m(c, e, "secret_nonce")))), e.length, c.push(o)), (r = m(c, r, "ciphertext"));
                        var h,
                            i = t._crypto_aead_xchacha20poly1305_ietf_abytes(),
                            d = r.length;
                        d < i && b(c, "ciphertext is too short"), (h = u(r)), c.push(h);
                        var f = null,
                            x = 0;
                        null != a && ((f = u((a = m(c, a, "additional_data")))), (x = a.length), c.push(f)), (_ = m(c, _, "public_nonce"));
                        var E,
                            k = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                        _.length !== k && b(c, "invalid public_nonce length"), (E = u(_)), c.push(E), (n = m(c, n, "key"));
                        var S,
                            w = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
                        n.length !== w && b(c, "invalid key length"), (S = u(n)), c.push(S);
                        var T = new l((d - t._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0),
                            Y = T.address;
                        if ((c.push(Y), 0 === t._crypto_aead_xchacha20poly1305_ietf_decrypt(Y, null, o, h, d, 0, f, x, 0, E, S))) {
                            var B = p(T, s);
                            return v(c), B;
                        }
                        g(c, "ciphertext cannot be decrypted using that key");
                    }
                    function F(e, r, a, _, n, s, c) {
                        var o = [];
                        y(c);
                        var h = null;
                        null != e && ((h = u((e = m(o, e, "secret_nonce")))), e.length, o.push(h));
                        var i = u((r = m(o, r, "ciphertext"))),
                            d = r.length;
                        o.push(i), (a = m(o, a, "mac"));
                        var f,
                            x = 0 | t._crypto_box_macbytes();
                        a.length !== x && b(o, "invalid mac length"), (f = u(a)), o.push(f);
                        var E = null,
                            k = 0;
                        null != _ && ((E = u((_ = m(o, _, "additional_data")))), (k = _.length), o.push(E)), (n = m(o, n, "public_nonce"));
                        var S,
                            w = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                        n.length !== w && b(o, "invalid public_nonce length"), (S = u(n)), o.push(S), (s = m(o, s, "key"));
                        var T,
                            Y = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
                        s.length !== Y && b(o, "invalid key length"), (T = u(s)), o.push(T);
                        var B = new l(0 | d),
                            A = B.address;
                        if ((o.push(A), 0 === t._crypto_aead_xchacha20poly1305_ietf_decrypt_detached(A, h, i, d, 0, f, E, k, 0, S, T))) {
                            var K = p(B, c);
                            return v(o), K;
                        }
                        g(o, "ciphertext cannot be decrypted using that key");
                    }
                    function D(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l((h + t._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0),
                            T = w.address;
                        if ((c.push(T), 0 === t._crypto_aead_xchacha20poly1305_ietf_encrypt(T, null, o, h, 0, i, d, 0, f, x, k))) {
                            var Y = p(w, s);
                            return v(c), Y;
                        }
                        g(c, "invalid usage");
                    }
                    function j(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "message"))),
                            h = e.length;
                        c.push(o);
                        var i = null,
                            d = 0;
                        null != r && ((i = u((r = m(c, r, "additional_data")))), (d = r.length), c.push(i));
                        var f = null;
                        null != a && ((f = u((a = m(c, a, "secret_nonce")))), a.length, c.push(f)), (_ = m(c, _, "public_nonce"));
                        var x,
                            E = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                        _.length !== E && b(c, "invalid public_nonce length"), (x = u(_)), c.push(x), (n = m(c, n, "key"));
                        var k,
                            S = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
                        n.length !== S && b(c, "invalid key length"), (k = u(n)), c.push(k);
                        var w = new l(0 | h),
                            T = w.address;
                        c.push(T);
                        var Y = new l(0 | t._crypto_aead_xchacha20poly1305_ietf_abytes()),
                            B = Y.address;
                        if ((c.push(B), 0 === t._crypto_aead_xchacha20poly1305_ietf_encrypt_detached(T, B, null, o, h, 0, i, d, 0, f, x, k))) {
                            var A = p({ ciphertext: w, mac: Y }, s);
                            return v(c), A;
                        }
                        g(c, "invalid usage");
                    }
                    function V(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_aead_xchacha20poly1305_ietf_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function H(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "key"));
                        var c,
                            o = 0 | t._crypto_auth_keybytes();
                        r.length !== o && b(_, "invalid key length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_auth_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_auth(i, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function q(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "key"));
                        var c,
                            o = 0 | t._crypto_auth_hmacsha256_keybytes();
                        r.length !== o && b(_, "invalid key length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_auth_hmacsha256_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_auth_hmacsha256(i, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function z(e, r) {
                        var a = [];
                        y(r), f(a, e, "state_address");
                        var _ = new l(0 | t._crypto_auth_hmacsha256_bytes()),
                            n = _.address;
                        if ((a.push(n), !(0 | t._crypto_auth_hmacsha256_final(e, n)))) {
                            var s = (t._free(e), p(_, r));
                            return v(a), s;
                        }
                        g(a, "invalid usage");
                    }
                    function W(e, r) {
                        var a = [];
                        y(r);
                        var _ = null,
                            n = 0;
                        null != e && ((_ = u((e = m(a, e, "key")))), (n = e.length), a.push(_));
                        var s = new l(208).address;
                        if (!(0 | t._crypto_auth_hmacsha256_init(s, _, n))) {
                            var c = s;
                            return v(a), c;
                        }
                        g(a, "invalid usage");
                    }
                    function $(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_auth_hmacsha256_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_auth_hmacsha256_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function J(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address");
                        var n = u((r = m(_, r, "message_chunk"))),
                            s = r.length;
                        _.push(n), !!(0 | t._crypto_auth_hmacsha256_update(e, n, s)) && g(_, "invalid usage"), v(_);
                    }
                    function Q(e, r, a) {
                        var _ = [];
                        e = m(_, e, "tag");
                        var n,
                            s = 0 | t._crypto_auth_hmacsha256_bytes();
                        e.length !== s && b(_, "invalid tag length"), (n = u(e)), _.push(n);
                        var c = u((r = m(_, r, "message"))),
                            o = r.length;
                        _.push(c), (a = m(_, a, "key"));
                        var h,
                            p = 0 | t._crypto_auth_hmacsha256_keybytes();
                        a.length !== p && b(_, "invalid key length"), (h = u(a)), _.push(h);
                        var i = !(0 | t._crypto_auth_hmacsha256_verify(n, c, o, 0, h));
                        return v(_), i;
                    }
                    function Z(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "key"));
                        var c,
                            o = 0 | t._crypto_auth_hmacsha512_keybytes();
                        r.length !== o && b(_, "invalid key length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_auth_hmacsha512_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_auth_hmacsha512(i, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function ee(e, r) {
                        var a = [];
                        y(r), f(a, e, "state_address");
                        var _ = new l(0 | t._crypto_auth_hmacsha512_bytes()),
                            n = _.address;
                        if ((a.push(n), !(0 | t._crypto_auth_hmacsha512_final(e, n)))) {
                            var s = (t._free(e), p(_, r));
                            return v(a), s;
                        }
                        g(a, "invalid usage");
                    }
                    function re(e, r) {
                        var a = [];
                        y(r);
                        var _ = null,
                            n = 0;
                        null != e && ((_ = u((e = m(a, e, "key")))), (n = e.length), a.push(_));
                        var s = new l(416).address;
                        if (!(0 | t._crypto_auth_hmacsha512_init(s, _, n))) {
                            var c = s;
                            return v(a), c;
                        }
                        g(a, "invalid usage");
                    }
                    function te(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_auth_hmacsha512_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_auth_hmacsha512_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function ae(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address");
                        var n = u((r = m(_, r, "message_chunk"))),
                            s = r.length;
                        _.push(n), !!(0 | t._crypto_auth_hmacsha512_update(e, n, s)) && g(_, "invalid usage"), v(_);
                    }
                    function _e(e, r, a) {
                        var _ = [];
                        e = m(_, e, "tag");
                        var n,
                            s = 0 | t._crypto_auth_hmacsha512_bytes();
                        e.length !== s && b(_, "invalid tag length"), (n = u(e)), _.push(n);
                        var c = u((r = m(_, r, "message"))),
                            o = r.length;
                        _.push(c), (a = m(_, a, "key"));
                        var h,
                            p = 0 | t._crypto_auth_hmacsha512_keybytes();
                        a.length !== p && b(_, "invalid key length"), (h = u(a)), _.push(h);
                        var i = !(0 | t._crypto_auth_hmacsha512_verify(n, c, o, 0, h));
                        return v(_), i;
                    }
                    function ne(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_auth_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_auth_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function se(e, r, a) {
                        var _ = [];
                        e = m(_, e, "tag");
                        var n,
                            s = 0 | t._crypto_auth_bytes();
                        e.length !== s && b(_, "invalid tag length"), (n = u(e)), _.push(n);
                        var c = u((r = m(_, r, "message"))),
                            o = r.length;
                        _.push(c), (a = m(_, a, "key"));
                        var h,
                            p = 0 | t._crypto_auth_keybytes();
                        a.length !== p && b(_, "invalid key length"), (h = u(a)), _.push(h);
                        var i = !(0 | t._crypto_auth_verify(n, c, o, 0, h));
                        return v(_), i;
                    }
                    function ce(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "publicKey"));
                        var n,
                            s = 0 | t._crypto_box_publickeybytes();
                        e.length !== s && b(_, "invalid publicKey length"), (n = u(e)), _.push(n), (r = m(_, r, "privateKey"));
                        var c,
                            o = 0 | t._crypto_box_secretkeybytes();
                        r.length !== o && b(_, "invalid privateKey length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_box_beforenmbytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_box_beforenm(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function oe(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "publicKey"));
                        var n,
                            s = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                        e.length !== s && b(_, "invalid publicKey length"), (n = u(e)), _.push(n), (r = m(_, r, "privateKey"));
                        var c,
                            o = 0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
                        r.length !== o && b(_, "invalid privateKey length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_box_curve25519xchacha20poly1305_beforenmbytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_box_curve25519xchacha20poly1305_beforenm(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function he(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "message"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "nonce"));
                        var h,
                            i = 0 | t._crypto_box_curve25519xchacha20poly1305_noncebytes();
                        r.length !== i && b(s, "invalid nonce length"), (h = u(r)), s.push(h), (a = m(s, a, "publicKey"));
                        var d,
                            f = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                        a.length !== f && b(s, "invalid publicKey length"), (d = u(a)), s.push(d), (_ = m(s, _, "privateKey"));
                        var x,
                            E = 0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
                        _.length !== E && b(s, "invalid privateKey length"), (x = u(_)), s.push(x);
                        var k = new l(0 | o),
                            S = k.address;
                        s.push(S);
                        var w = new l(0 | t._crypto_box_curve25519xchacha20poly1305_macbytes()),
                            T = w.address;
                        if ((s.push(T), !(0 | t._crypto_box_curve25519xchacha20poly1305_detached(S, T, c, o, 0, h, d, x)))) {
                            var Y = p({ ciphertext: k, mac: w }, n);
                            return v(s), Y;
                        }
                        g(s, "invalid usage");
                    }
                    function pe(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "message"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_box_curve25519xchacha20poly1305_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "sharedKey"));
                        var i,
                            d = 0 | t._crypto_box_curve25519xchacha20poly1305_beforenmbytes();
                        a.length !== d && b(n, "invalid sharedKey length"), (i = u(a)), n.push(i);
                        var f = new l(0 | c),
                            x = f.address;
                        n.push(x);
                        var E = new l(0 | t._crypto_box_curve25519xchacha20poly1305_macbytes()),
                            k = E.address;
                        if ((n.push(k), !(0 | t._crypto_box_curve25519xchacha20poly1305_detached_afternm(x, k, s, c, 0, o, i)))) {
                            var S = p({ ciphertext: f, mac: E }, _);
                            return v(n), S;
                        }
                        g(n, "invalid usage");
                    }
                    function ie(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "message"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "nonce"));
                        var h,
                            i = 0 | t._crypto_box_curve25519xchacha20poly1305_noncebytes();
                        r.length !== i && b(s, "invalid nonce length"), (h = u(r)), s.push(h), (a = m(s, a, "publicKey"));
                        var d,
                            f = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                        a.length !== f && b(s, "invalid publicKey length"), (d = u(a)), s.push(d), (_ = m(s, _, "privateKey"));
                        var x,
                            E = 0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
                        _.length !== E && b(s, "invalid privateKey length"), (x = u(_)), s.push(x);
                        var k = new l((o + t._crypto_box_curve25519xchacha20poly1305_macbytes()) | 0),
                            S = k.address;
                        if ((s.push(S), !(0 | t._crypto_box_curve25519xchacha20poly1305_easy(S, c, o, 0, h, d, x)))) {
                            var w = p(k, n);
                            return v(s), w;
                        }
                        g(s, "invalid usage");
                    }
                    function ye(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "message"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_box_curve25519xchacha20poly1305_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "sharedKey"));
                        var i,
                            d = 0 | t._crypto_box_curve25519xchacha20poly1305_beforenmbytes();
                        a.length !== d && b(n, "invalid sharedKey length"), (i = u(a)), n.push(i);
                        var f = new l((c + t._crypto_box_curve25519xchacha20poly1305_macbytes()) | 0),
                            x = f.address;
                        if ((n.push(x), !(0 | t._crypto_box_curve25519xchacha20poly1305_easy_afternm(x, s, c, 0, o, i)))) {
                            var E = p(f, _);
                            return v(n), E;
                        }
                        g(n, "invalid usage");
                    }
                    function le(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes()),
                            _ = a.address;
                        r.push(_);
                        var n = new l(0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes()),
                            s = n.address;
                        r.push(s), t._crypto_box_curve25519xchacha20poly1305_keypair(_, s);
                        var c = p({ publicKey: a, privateKey: n, keyType: "curve25519" }, e);
                        return v(r), c;
                    }
                    function ue(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "ciphertext"))),
                            h = e.length;
                        c.push(o), (r = m(c, r, "mac"));
                        var i,
                            d = 0 | t._crypto_box_curve25519xchacha20poly1305_macbytes();
                        r.length !== d && b(c, "invalid mac length"), (i = u(r)), c.push(i), (a = m(c, a, "nonce"));
                        var f,
                            x = 0 | t._crypto_box_curve25519xchacha20poly1305_noncebytes();
                        a.length !== x && b(c, "invalid nonce length"), (f = u(a)), c.push(f), (_ = m(c, _, "publicKey"));
                        var E,
                            k = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                        _.length !== k && b(c, "invalid publicKey length"), (E = u(_)), c.push(E), (n = m(c, n, "privateKey"));
                        var S,
                            w = 0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
                        n.length !== w && b(c, "invalid privateKey length"), (S = u(n)), c.push(S);
                        var T = new l(0 | h),
                            Y = T.address;
                        if ((c.push(Y), !(0 | t._crypto_box_curve25519xchacha20poly1305_open_detached(Y, o, i, h, 0, f, E, S)))) {
                            var B = p(T, s);
                            return v(c), B;
                        }
                        g(c, "incorrect key pair for the given ciphertext");
                    }
                    function de(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "ciphertext"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "mac"));
                        var h,
                            i = 0 | t._crypto_box_curve25519xchacha20poly1305_macbytes();
                        r.length !== i && b(s, "invalid mac length"), (h = u(r)), s.push(h), (a = m(s, a, "nonce"));
                        var d,
                            f = 0 | t._crypto_box_curve25519xchacha20poly1305_noncebytes();
                        a.length !== f && b(s, "invalid nonce length"), (d = u(a)), s.push(d), (_ = m(s, _, "sharedKey"));
                        var x,
                            E = 0 | t._crypto_box_curve25519xchacha20poly1305_beforenmbytes();
                        _.length !== E && b(s, "invalid sharedKey length"), (x = u(_)), s.push(x);
                        var k = new l(0 | o),
                            S = k.address;
                        if ((s.push(S), !(0 | t._crypto_box_curve25519xchacha20poly1305_open_detached_afternm(S, c, h, o, 0, d, x)))) {
                            var w = p(k, n);
                            return v(s), w;
                        }
                        g(s, "incorrect secret key for the given ciphertext");
                    }
                    function ve(e, r, a, _, n) {
                        var s = [];
                        y(n), (e = m(s, e, "ciphertext"));
                        var c,
                            o = t._crypto_box_curve25519xchacha20poly1305_macbytes(),
                            h = e.length;
                        h < o && b(s, "ciphertext is too short"), (c = u(e)), s.push(c), (r = m(s, r, "nonce"));
                        var i,
                            d = 0 | t._crypto_box_curve25519xchacha20poly1305_noncebytes();
                        r.length !== d && b(s, "invalid nonce length"), (i = u(r)), s.push(i), (a = m(s, a, "publicKey"));
                        var f,
                            x = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                        a.length !== x && b(s, "invalid publicKey length"), (f = u(a)), s.push(f), (_ = m(s, _, "privateKey"));
                        var E,
                            k = 0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
                        _.length !== k && b(s, "invalid privateKey length"), (E = u(_)), s.push(E);
                        var S = new l((h - t._crypto_box_curve25519xchacha20poly1305_macbytes()) | 0),
                            w = S.address;
                        if ((s.push(w), !(0 | t._crypto_box_curve25519xchacha20poly1305_open_easy(w, c, h, 0, i, f, E)))) {
                            var T = p(S, n);
                            return v(s), T;
                        }
                        g(s, "incorrect key pair for the given ciphertext");
                    }
                    function ge(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "ciphertext"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_box_curve25519xchacha20poly1305_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "sharedKey"));
                        var i,
                            d = 0 | t._crypto_box_curve25519xchacha20poly1305_beforenmbytes();
                        a.length !== d && b(n, "invalid sharedKey length"), (i = u(a)), n.push(i);
                        var f = new l((c - t._crypto_box_curve25519xchacha20poly1305_macbytes()) | 0),
                            x = f.address;
                        if ((n.push(x), !(0 | t._crypto_box_curve25519xchacha20poly1305_open_easy_afternm(x, s, c, 0, o, i)))) {
                            var E = p(f, _);
                            return v(n), E;
                        }
                        g(n, "incorrect secret key for the given ciphertext");
                    }
                    function be(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "publicKey"));
                        var c,
                            o = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                        r.length !== o && b(_, "invalid publicKey length"), (c = u(r)), _.push(c);
                        var h = new l((s + t._crypto_box_curve25519xchacha20poly1305_sealbytes()) | 0),
                            i = h.address;
                        _.push(i), t._crypto_box_curve25519xchacha20poly1305_seal(i, n, s, 0, c);
                        var d = p(h, a);
                        return v(_), d;
                    }
                    function fe(e, r, a, _) {
                        var n = [];
                        y(_), (e = m(n, e, "ciphertext"));
                        var s,
                            c = t._crypto_box_curve25519xchacha20poly1305_sealbytes(),
                            o = e.length;
                        o < c && b(n, "ciphertext is too short"), (s = u(e)), n.push(s), (r = m(n, r, "publicKey"));
                        var h,
                            i = 0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                        r.length !== i && b(n, "invalid publicKey length"), (h = u(r)), n.push(h), (a = m(n, a, "secretKey"));
                        var d,
                            g = 0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
                        a.length !== g && b(n, "invalid secretKey length"), (d = u(a)), n.push(d);
                        var f = new l((o - t._crypto_box_curve25519xchacha20poly1305_sealbytes()) | 0),
                            x = f.address;
                        n.push(x), t._crypto_box_curve25519xchacha20poly1305_seal_open(x, s, o, 0, h, d);
                        var E = p(f, _);
                        return v(n), E;
                    }
                    function me(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "seed"));
                        var _,
                            n = 0 | t._crypto_box_curve25519xchacha20poly1305_seedbytes();
                        e.length !== n && b(a, "invalid seed length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_box_curve25519xchacha20poly1305_publickeybytes()),
                            c = s.address;
                        a.push(c);
                        var o = new l(0 | t._crypto_box_curve25519xchacha20poly1305_secretkeybytes()),
                            h = o.address;
                        if ((a.push(h), !(0 | t._crypto_box_curve25519xchacha20poly1305_seed_keypair(c, h, _)))) {
                            var i = { publicKey: p(s, r), privateKey: p(o, r), keyType: "x25519" };
                            return v(a), i;
                        }
                        g(a, "invalid usage");
                    }
                    function xe(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "message"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "nonce"));
                        var h,
                            i = 0 | t._crypto_box_noncebytes();
                        r.length !== i && b(s, "invalid nonce length"), (h = u(r)), s.push(h), (a = m(s, a, "publicKey"));
                        var d,
                            f = 0 | t._crypto_box_publickeybytes();
                        a.length !== f && b(s, "invalid publicKey length"), (d = u(a)), s.push(d), (_ = m(s, _, "privateKey"));
                        var x,
                            E = 0 | t._crypto_box_secretkeybytes();
                        _.length !== E && b(s, "invalid privateKey length"), (x = u(_)), s.push(x);
                        var k = new l(0 | o),
                            S = k.address;
                        s.push(S);
                        var w = new l(0 | t._crypto_box_macbytes()),
                            T = w.address;
                        if ((s.push(T), !(0 | t._crypto_box_detached(S, T, c, o, 0, h, d, x)))) {
                            var Y = p({ ciphertext: k, mac: w }, n);
                            return v(s), Y;
                        }
                        g(s, "invalid usage");
                    }
                    function Ee(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "message"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "nonce"));
                        var h,
                            i = 0 | t._crypto_box_noncebytes();
                        r.length !== i && b(s, "invalid nonce length"), (h = u(r)), s.push(h), (a = m(s, a, "publicKey"));
                        var d,
                            f = 0 | t._crypto_box_publickeybytes();
                        a.length !== f && b(s, "invalid publicKey length"), (d = u(a)), s.push(d), (_ = m(s, _, "privateKey"));
                        var x,
                            E = 0 | t._crypto_box_secretkeybytes();
                        _.length !== E && b(s, "invalid privateKey length"), (x = u(_)), s.push(x);
                        var k = new l((o + t._crypto_box_macbytes()) | 0),
                            S = k.address;
                        if ((s.push(S), !(0 | t._crypto_box_easy(S, c, o, 0, h, d, x)))) {
                            var w = p(k, n);
                            return v(s), w;
                        }
                        g(s, "invalid usage");
                    }
                    function ke(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "message"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_box_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "sharedKey"));
                        var i,
                            d = 0 | t._crypto_box_beforenmbytes();
                        a.length !== d && b(n, "invalid sharedKey length"), (i = u(a)), n.push(i);
                        var f = new l((c + t._crypto_box_macbytes()) | 0),
                            x = f.address;
                        if ((n.push(x), !(0 | t._crypto_box_easy_afternm(x, s, c, 0, o, i)))) {
                            var E = p(f, _);
                            return v(n), E;
                        }
                        g(n, "invalid usage");
                    }
                    function Se(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_box_publickeybytes()),
                            _ = a.address;
                        r.push(_);
                        var n = new l(0 | t._crypto_box_secretkeybytes()),
                            s = n.address;
                        if ((r.push(s), !(0 | t._crypto_box_keypair(_, s)))) {
                            var c = { publicKey: p(a, e), privateKey: p(n, e), keyType: "x25519" };
                            return v(r), c;
                        }
                        g(r, "internal error");
                    }
                    function we(e, r, a, _, n, s) {
                        var c = [];
                        y(s);
                        var o = u((e = m(c, e, "ciphertext"))),
                            h = e.length;
                        c.push(o), (r = m(c, r, "mac"));
                        var i,
                            d = 0 | t._crypto_box_macbytes();
                        r.length !== d && b(c, "invalid mac length"), (i = u(r)), c.push(i), (a = m(c, a, "nonce"));
                        var f,
                            x = 0 | t._crypto_box_noncebytes();
                        a.length !== x && b(c, "invalid nonce length"), (f = u(a)), c.push(f), (_ = m(c, _, "publicKey"));
                        var E,
                            k = 0 | t._crypto_box_publickeybytes();
                        _.length !== k && b(c, "invalid publicKey length"), (E = u(_)), c.push(E), (n = m(c, n, "privateKey"));
                        var S,
                            w = 0 | t._crypto_box_secretkeybytes();
                        n.length !== w && b(c, "invalid privateKey length"), (S = u(n)), c.push(S);
                        var T = new l(0 | h),
                            Y = T.address;
                        if ((c.push(Y), !(0 | t._crypto_box_open_detached(Y, o, i, h, 0, f, E, S)))) {
                            var B = p(T, s);
                            return v(c), B;
                        }
                        g(c, "incorrect key pair for the given ciphertext");
                    }
                    function Te(e, r, a, _, n) {
                        var s = [];
                        y(n), (e = m(s, e, "ciphertext"));
                        var c,
                            o = t._crypto_box_macbytes(),
                            h = e.length;
                        h < o && b(s, "ciphertext is too short"), (c = u(e)), s.push(c), (r = m(s, r, "nonce"));
                        var i,
                            d = 0 | t._crypto_box_noncebytes();
                        r.length !== d && b(s, "invalid nonce length"), (i = u(r)), s.push(i), (a = m(s, a, "publicKey"));
                        var f,
                            x = 0 | t._crypto_box_publickeybytes();
                        a.length !== x && b(s, "invalid publicKey length"), (f = u(a)), s.push(f), (_ = m(s, _, "privateKey"));
                        var E,
                            k = 0 | t._crypto_box_secretkeybytes();
                        _.length !== k && b(s, "invalid privateKey length"), (E = u(_)), s.push(E);
                        var S = new l((h - t._crypto_box_macbytes()) | 0),
                            w = S.address;
                        if ((s.push(w), !(0 | t._crypto_box_open_easy(w, c, h, 0, i, f, E)))) {
                            var T = p(S, n);
                            return v(s), T;
                        }
                        g(s, "incorrect key pair for the given ciphertext");
                    }
                    function Ye(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "ciphertext"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_box_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "sharedKey"));
                        var i,
                            d = 0 | t._crypto_box_beforenmbytes();
                        a.length !== d && b(n, "invalid sharedKey length"), (i = u(a)), n.push(i);
                        var f = new l((c - t._crypto_box_macbytes()) | 0),
                            x = f.address;
                        if ((n.push(x), !(0 | t._crypto_box_open_easy_afternm(x, s, c, 0, o, i)))) {
                            var E = p(f, _);
                            return v(n), E;
                        }
                        g(n, "incorrect secret key for the given ciphertext");
                    }
                    function Be(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "publicKey"));
                        var c,
                            o = 0 | t._crypto_box_publickeybytes();
                        r.length !== o && b(_, "invalid publicKey length"), (c = u(r)), _.push(c);
                        var h = new l((s + t._crypto_box_sealbytes()) | 0),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_box_seal(i, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function Ae(e, r, a, _) {
                        var n = [];
                        y(_), (e = m(n, e, "ciphertext"));
                        var s,
                            c = t._crypto_box_sealbytes(),
                            o = e.length;
                        o < c && b(n, "ciphertext is too short"), (s = u(e)), n.push(s), (r = m(n, r, "publicKey"));
                        var h,
                            i = 0 | t._crypto_box_publickeybytes();
                        r.length !== i && b(n, "invalid publicKey length"), (h = u(r)), n.push(h), (a = m(n, a, "privateKey"));
                        var d,
                            f = 0 | t._crypto_box_secretkeybytes();
                        a.length !== f && b(n, "invalid privateKey length"), (d = u(a)), n.push(d);
                        var x = new l((o - t._crypto_box_sealbytes()) | 0),
                            E = x.address;
                        if ((n.push(E), !(0 | t._crypto_box_seal_open(E, s, o, 0, h, d)))) {
                            var k = p(x, _);
                            return v(n), k;
                        }
                        g(n, "incorrect key pair for the given ciphertext");
                    }
                    function Ke(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "seed"));
                        var _,
                            n = 0 | t._crypto_box_seedbytes();
                        e.length !== n && b(a, "invalid seed length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_box_publickeybytes()),
                            c = s.address;
                        a.push(c);
                        var o = new l(0 | t._crypto_box_secretkeybytes()),
                            h = o.address;
                        if ((a.push(h), !(0 | t._crypto_box_seed_keypair(c, h, _)))) {
                            var i = { publicKey: p(s, r), privateKey: p(o, r), keyType: "x25519" };
                            return v(a), i;
                        }
                        g(a, "invalid usage");
                    }
                    function Me(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "p"));
                        var n,
                            s = 0 | t._crypto_core_ed25519_bytes();
                        e.length !== s && b(_, "invalid p length"), (n = u(e)), _.push(n), (r = m(_, r, "q"));
                        var c,
                            o = 0 | t._crypto_core_ed25519_bytes();
                        r.length !== o && b(_, "invalid q length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ed25519_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_core_ed25519_add(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "input is an invalid element");
                    }
                    function Ie(e, r) {
                        var a = [];
                        y(r);
                        var _ = u((e = m(a, e, "r")));
                        e.length, a.push(_);
                        var n = new l(0 | t._crypto_core_ed25519_bytes()),
                            s = n.address;
                        if ((a.push(s), !(0 | t._crypto_core_ed25519_from_hash(s, _)))) {
                            var c = p(n, r);
                            return v(a), c;
                        }
                        g(a, "invalid usage");
                    }
                    function Ne(e, r) {
                        var a = [];
                        y(r);
                        var _ = u((e = m(a, e, "r")));
                        e.length, a.push(_);
                        var n = new l(0 | t._crypto_core_ed25519_bytes()),
                            s = n.address;
                        if ((a.push(s), !(0 | t._crypto_core_ed25519_from_uniform(s, _)))) {
                            var c = p(n, r);
                            return v(a), c;
                        }
                        g(a, "invalid usage");
                    }
                    function Le(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "repr"));
                        var _,
                            n = 0 | t._crypto_core_ed25519_bytes();
                        e.length !== n && b(a, "invalid repr length"), (_ = u(e)), a.push(_);
                        var s = 1 == (0 | t._crypto_core_ed25519_is_valid_point(_));
                        return v(a), s;
                    }
                    function Oe(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_core_ed25519_bytes()),
                            _ = a.address;
                        r.push(_), t._crypto_core_ed25519_random(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function Ue(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "x"));
                        var n,
                            s = 0 | t._crypto_core_ed25519_scalarbytes();
                        e.length !== s && b(_, "invalid x length"), (n = u(e)), _.push(n), (r = m(_, r, "y"));
                        var c,
                            o = 0 | t._crypto_core_ed25519_scalarbytes();
                        r.length !== o && b(_, "invalid y length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ed25519_scalarbytes()),
                            i = h.address;
                        _.push(i), t._crypto_core_ed25519_scalar_add(i, n, c);
                        var d = p(h, a);
                        return v(_), d;
                    }
                    function Ce(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "s"));
                        var _,
                            n = 0 | t._crypto_core_ed25519_scalarbytes();
                        e.length !== n && b(a, "invalid s length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ed25519_scalarbytes()),
                            c = s.address;
                        a.push(c), t._crypto_core_ed25519_scalar_complement(c, _);
                        var o = p(s, r);
                        return v(a), o;
                    }
                    function Re(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "s"));
                        var _,
                            n = 0 | t._crypto_core_ed25519_scalarbytes();
                        e.length !== n && b(a, "invalid s length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ed25519_scalarbytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_core_ed25519_scalar_invert(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid reciprocate");
                    }
                    function Pe(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "x"));
                        var n,
                            s = 0 | t._crypto_core_ed25519_scalarbytes();
                        e.length !== s && b(_, "invalid x length"), (n = u(e)), _.push(n), (r = m(_, r, "y"));
                        var c,
                            o = 0 | t._crypto_core_ed25519_scalarbytes();
                        r.length !== o && b(_, "invalid y length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ed25519_scalarbytes()),
                            i = h.address;
                        _.push(i), t._crypto_core_ed25519_scalar_mul(i, n, c);
                        var d = p(h, a);
                        return v(_), d;
                    }
                    function Ge(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "s"));
                        var _,
                            n = 0 | t._crypto_core_ed25519_scalarbytes();
                        e.length !== n && b(a, "invalid s length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ed25519_scalarbytes()),
                            c = s.address;
                        a.push(c), t._crypto_core_ed25519_scalar_negate(c, _);
                        var o = p(s, r);
                        return v(a), o;
                    }
                    function Xe(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_core_ed25519_scalarbytes()),
                            _ = a.address;
                        r.push(_), t._crypto_core_ed25519_scalar_random(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function Fe(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "sample"));
                        var _,
                            n = 0 | t._crypto_core_ed25519_nonreducedscalarbytes();
                        e.length !== n && b(a, "invalid sample length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ed25519_scalarbytes()),
                            c = s.address;
                        a.push(c), t._crypto_core_ed25519_scalar_reduce(c, _);
                        var o = p(s, r);
                        return v(a), o;
                    }
                    function De(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "x"));
                        var n,
                            s = 0 | t._crypto_core_ed25519_scalarbytes();
                        e.length !== s && b(_, "invalid x length"), (n = u(e)), _.push(n), (r = m(_, r, "y"));
                        var c,
                            o = 0 | t._crypto_core_ed25519_scalarbytes();
                        r.length !== o && b(_, "invalid y length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ed25519_scalarbytes()),
                            i = h.address;
                        _.push(i), t._crypto_core_ed25519_scalar_sub(i, n, c);
                        var d = p(h, a);
                        return v(_), d;
                    }
                    function je(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "p"));
                        var n,
                            s = 0 | t._crypto_core_ed25519_bytes();
                        e.length !== s && b(_, "invalid p length"), (n = u(e)), _.push(n), (r = m(_, r, "q"));
                        var c,
                            o = 0 | t._crypto_core_ed25519_bytes();
                        r.length !== o && b(_, "invalid q length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ed25519_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_core_ed25519_sub(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "input is an invalid element");
                    }
                    function Ve(e, r, a, _) {
                        var n = [];
                        y(_), (e = m(n, e, "input"));
                        var s,
                            c = 0 | t._crypto_core_hchacha20_inputbytes();
                        e.length !== c && b(n, "invalid input length"), (s = u(e)), n.push(s), (r = m(n, r, "privateKey"));
                        var o,
                            h = 0 | t._crypto_core_hchacha20_keybytes();
                        r.length !== h && b(n, "invalid privateKey length"), (o = u(r)), n.push(o);
                        var i = null;
                        null != a && ((i = u((a = m(n, a, "constant")))), a.length, n.push(i));
                        var d = new l(0 | t._crypto_core_hchacha20_outputbytes()),
                            f = d.address;
                        if ((n.push(f), !(0 | t._crypto_core_hchacha20(f, s, o, i)))) {
                            var x = p(d, _);
                            return v(n), x;
                        }
                        g(n, "invalid usage");
                    }
                    function He(e, r, a, _) {
                        var n = [];
                        y(_), (e = m(n, e, "input"));
                        var s,
                            c = 0 | t._crypto_core_hsalsa20_inputbytes();
                        e.length !== c && b(n, "invalid input length"), (s = u(e)), n.push(s), (r = m(n, r, "privateKey"));
                        var o,
                            h = 0 | t._crypto_core_hsalsa20_keybytes();
                        r.length !== h && b(n, "invalid privateKey length"), (o = u(r)), n.push(o);
                        var i = null;
                        null != a && ((i = u((a = m(n, a, "constant")))), a.length, n.push(i));
                        var d = new l(0 | t._crypto_core_hsalsa20_outputbytes()),
                            f = d.address;
                        if ((n.push(f), !(0 | t._crypto_core_hsalsa20(f, s, o, i)))) {
                            var x = p(d, _);
                            return v(n), x;
                        }
                        g(n, "invalid usage");
                    }
                    function qe(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "p"));
                        var n,
                            s = 0 | t._crypto_core_ristretto255_bytes();
                        e.length !== s && b(_, "invalid p length"), (n = u(e)), _.push(n), (r = m(_, r, "q"));
                        var c,
                            o = 0 | t._crypto_core_ristretto255_bytes();
                        r.length !== o && b(_, "invalid q length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ristretto255_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_core_ristretto255_add(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "input is an invalid element");
                    }
                    function ze(e, r) {
                        var a = [];
                        y(r);
                        var _ = u((e = m(a, e, "r")));
                        e.length, a.push(_);
                        var n = new l(0 | t._crypto_core_ristretto255_bytes()),
                            s = n.address;
                        if ((a.push(s), !(0 | t._crypto_core_ristretto255_from_hash(s, _)))) {
                            var c = p(n, r);
                            return v(a), c;
                        }
                        g(a, "invalid usage");
                    }
                    function We(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "repr"));
                        var _,
                            n = 0 | t._crypto_core_ristretto255_bytes();
                        e.length !== n && b(a, "invalid repr length"), (_ = u(e)), a.push(_);
                        var s = 1 == (0 | t._crypto_core_ristretto255_is_valid_point(_));
                        return v(a), s;
                    }
                    function $e(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_core_ristretto255_bytes()),
                            _ = a.address;
                        r.push(_), t._crypto_core_ristretto255_random(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function Je(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "x"));
                        var n,
                            s = 0 | t._crypto_core_ristretto255_scalarbytes();
                        e.length !== s && b(_, "invalid x length"), (n = u(e)), _.push(n), (r = m(_, r, "y"));
                        var c,
                            o = 0 | t._crypto_core_ristretto255_scalarbytes();
                        r.length !== o && b(_, "invalid y length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
                            i = h.address;
                        _.push(i), t._crypto_core_ristretto255_scalar_add(i, n, c);
                        var d = p(h, a);
                        return v(_), d;
                    }
                    function Qe(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "s"));
                        var _,
                            n = 0 | t._crypto_core_ristretto255_scalarbytes();
                        e.length !== n && b(a, "invalid s length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
                            c = s.address;
                        a.push(c), t._crypto_core_ristretto255_scalar_complement(c, _);
                        var o = p(s, r);
                        return v(a), o;
                    }
                    function Ze(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "s"));
                        var _,
                            n = 0 | t._crypto_core_ristretto255_scalarbytes();
                        e.length !== n && b(a, "invalid s length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_core_ristretto255_scalar_invert(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid reciprocate");
                    }
                    function er(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "x"));
                        var n,
                            s = 0 | t._crypto_core_ristretto255_scalarbytes();
                        e.length !== s && b(_, "invalid x length"), (n = u(e)), _.push(n), (r = m(_, r, "y"));
                        var c,
                            o = 0 | t._crypto_core_ristretto255_scalarbytes();
                        r.length !== o && b(_, "invalid y length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
                            i = h.address;
                        _.push(i), t._crypto_core_ristretto255_scalar_mul(i, n, c);
                        var d = p(h, a);
                        return v(_), d;
                    }
                    function rr(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "s"));
                        var _,
                            n = 0 | t._crypto_core_ristretto255_scalarbytes();
                        e.length !== n && b(a, "invalid s length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
                            c = s.address;
                        a.push(c), t._crypto_core_ristretto255_scalar_negate(c, _);
                        var o = p(s, r);
                        return v(a), o;
                    }
                    function tr(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
                            _ = a.address;
                        r.push(_), t._crypto_core_ristretto255_scalar_random(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function ar(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "sample"));
                        var _,
                            n = 0 | t._crypto_core_ristretto255_nonreducedscalarbytes();
                        e.length !== n && b(a, "invalid sample length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
                            c = s.address;
                        a.push(c), t._crypto_core_ristretto255_scalar_reduce(c, _);
                        var o = p(s, r);
                        return v(a), o;
                    }
                    function _r(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "x"));
                        var n,
                            s = 0 | t._crypto_core_ristretto255_scalarbytes();
                        e.length !== s && b(_, "invalid x length"), (n = u(e)), _.push(n), (r = m(_, r, "y"));
                        var c,
                            o = 0 | t._crypto_core_ristretto255_scalarbytes();
                        r.length !== o && b(_, "invalid y length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ristretto255_scalarbytes()),
                            i = h.address;
                        _.push(i), t._crypto_core_ristretto255_scalar_sub(i, n, c);
                        var d = p(h, a);
                        return v(_), d;
                    }
                    function nr(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "p"));
                        var n,
                            s = 0 | t._crypto_core_ristretto255_bytes();
                        e.length !== s && b(_, "invalid p length"), (n = u(e)), _.push(n), (r = m(_, r, "q"));
                        var c,
                            o = 0 | t._crypto_core_ristretto255_bytes();
                        r.length !== o && b(_, "invalid q length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_core_ristretto255_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_core_ristretto255_sub(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "input is an invalid element");
                    }
                    function sr(e, r, a, _) {
                        var n = [];
                        y(_), f(n, e, "hash_length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(n, "hash_length must be an unsigned integer");
                        var s = u((r = m(n, r, "message"))),
                            c = r.length;
                        n.push(s);
                        var o = null,
                            h = 0;
                        null != a && ((o = u((a = m(n, a, "key")))), (h = a.length), n.push(o));
                        var i = new l((e |= 0)),
                            d = i.address;
                        if ((n.push(d), !(0 | t._crypto_generichash(d, e, s, c, 0, o, h)))) {
                            var x = p(i, _);
                            return v(n), x;
                        }
                        g(n, "invalid usage");
                    }
                    function cr(e, r, a, _, n) {
                        var s = [];
                        y(n), f(s, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(s, "subkey_len must be an unsigned integer");
                        var c = null,
                            o = 0;
                        null != r && ((c = u((r = m(s, r, "key")))), (o = r.length), s.push(c));
                        var h = null,
                            i = 0;
                        null != a && ((a = m(s, a, "id")), (i = 0 | t._crypto_generichash_blake2b_saltbytes()), a.length !== i && b(s, "invalid id length"), (h = u(a)), s.push(h));
                        var d = null,
                            x = 0;
                        null != _ && ((_ = m(s, _, "ctx")), (x = 0 | t._crypto_generichash_blake2b_personalbytes()), _.length !== x && b(s, "invalid ctx length"), (d = u(_)), s.push(d));
                        var E = new l(0 | e),
                            k = E.address;
                        if ((s.push(k), !(0 | t._crypto_generichash_blake2b_salt_personal(k, e, null, 0, 0, c, o, h, d)))) {
                            var S = p(E, n);
                            return v(s), S;
                        }
                        g(s, "invalid usage");
                    }
                    function or(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address"), f(_, r, "hash_length"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(_, "hash_length must be an unsigned integer");
                        var n = new l((r |= 0)),
                            s = n.address;
                        if ((_.push(s), !(0 | t._crypto_generichash_final(e, s, r)))) {
                            var c = (t._free(e), p(n, a));
                            return v(_), c;
                        }
                        g(_, "invalid usage");
                    }
                    function hr(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = null,
                            s = 0;
                        null != e && ((n = u((e = m(_, e, "key")))), (s = e.length), _.push(n)), f(_, r, "hash_length"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(_, "hash_length must be an unsigned integer");
                        var c = new l(357).address;
                        if (!(0 | t._crypto_generichash_init(c, n, s, r))) {
                            var o = c;
                            return v(_), o;
                        }
                        g(_, "invalid usage");
                    }
                    function pr(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_generichash_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_generichash_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function ir(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address");
                        var n = u((r = m(_, r, "message_chunk"))),
                            s = r.length;
                        _.push(n), !!(0 | t._crypto_generichash_update(e, n, s)) && g(_, "invalid usage"), v(_);
                    }
                    function yr(e, r) {
                        var a = [];
                        y(r);
                        var _ = u((e = m(a, e, "message"))),
                            n = e.length;
                        a.push(_);
                        var s = new l(0 | t._crypto_hash_bytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_hash(c, _, n, 0)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid usage");
                    }
                    function lr(e, r) {
                        var a = [];
                        y(r);
                        var _ = u((e = m(a, e, "message"))),
                            n = e.length;
                        a.push(_);
                        var s = new l(0 | t._crypto_hash_sha256_bytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_hash_sha256(c, _, n, 0)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid usage");
                    }
                    function ur(e, r) {
                        var a = [];
                        y(r), f(a, e, "state_address");
                        var _ = new l(0 | t._crypto_hash_sha256_bytes()),
                            n = _.address;
                        if ((a.push(n), !(0 | t._crypto_hash_sha256_final(e, n)))) {
                            var s = (t._free(e), p(_, r));
                            return v(a), s;
                        }
                        g(a, "invalid usage");
                    }
                    function dr(e) {
                        var r = [];
                        y(e);
                        var a = new l(104).address;
                        if (!(0 | t._crypto_hash_sha256_init(a))) {
                            var _ = a;
                            return v(r), _;
                        }
                        g(r, "invalid usage");
                    }
                    function vr(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address");
                        var n = u((r = m(_, r, "message_chunk"))),
                            s = r.length;
                        _.push(n), !!(0 | t._crypto_hash_sha256_update(e, n, s)) && g(_, "invalid usage"), v(_);
                    }
                    function gr(e, r) {
                        var a = [];
                        y(r);
                        var _ = u((e = m(a, e, "message"))),
                            n = e.length;
                        a.push(_);
                        var s = new l(0 | t._crypto_hash_sha512_bytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_hash_sha512(c, _, n, 0)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid usage");
                    }
                    function br(e, r) {
                        var a = [];
                        y(r), f(a, e, "state_address");
                        var _ = new l(0 | t._crypto_hash_sha512_bytes()),
                            n = _.address;
                        if ((a.push(n), !(0 | t._crypto_hash_sha512_final(e, n)))) {
                            var s = (t._free(e), p(_, r));
                            return v(a), s;
                        }
                        g(a, "invalid usage");
                    }
                    function fr(e) {
                        var r = [];
                        y(e);
                        var a = new l(208).address;
                        if (!(0 | t._crypto_hash_sha512_init(a))) {
                            var _ = a;
                            return v(r), _;
                        }
                        g(r, "invalid usage");
                    }
                    function mr(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address");
                        var n = u((r = m(_, r, "message_chunk"))),
                            s = r.length;
                        _.push(n), !!(0 | t._crypto_hash_sha512_update(e, n, s)) && g(_, "invalid usage"), v(_);
                    }
                    function xr(e, r, a, n, s) {
                        var c = [];
                        y(s), f(c, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(c, "subkey_len must be an unsigned integer"), f(c, r, "subkey_id"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(c, "subkey_id must be an unsigned integer"), "string" != typeof a && b(c, "ctx must be a string"), (a = _(a + "\0")), null != h && a.length - 1 !== h && b(c, "invalid ctx length");
                        var o = u(a),
                            h = a.length - 1;
                        c.push(o), (n = m(c, n, "key"));
                        var i,
                            d = 0 | t._crypto_kdf_keybytes();
                        n.length !== d && b(c, "invalid key length"), (i = u(n)), c.push(i);
                        var g = new l(0 | e),
                            x = g.address;
                        c.push(x), t._crypto_kdf_derive_from_key(x, e, r, (r >>> 24) >>> 8, o, i);
                        var E = p(g, s);
                        return v(c), E;
                    }
                    function Er(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_kdf_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_kdf_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function kr(e, r, a, _) {
                        var n = [];
                        y(_), (e = m(n, e, "clientPublicKey"));
                        var s,
                            c = 0 | t._crypto_kx_publickeybytes();
                        e.length !== c && b(n, "invalid clientPublicKey length"), (s = u(e)), n.push(s), (r = m(n, r, "clientSecretKey"));
                        var o,
                            h = 0 | t._crypto_kx_secretkeybytes();
                        r.length !== h && b(n, "invalid clientSecretKey length"), (o = u(r)), n.push(o), (a = m(n, a, "serverPublicKey"));
                        var i,
                            d = 0 | t._crypto_kx_publickeybytes();
                        a.length !== d && b(n, "invalid serverPublicKey length"), (i = u(a)), n.push(i);
                        var f = new l(0 | t._crypto_kx_sessionkeybytes()),
                            x = f.address;
                        n.push(x);
                        var E = new l(0 | t._crypto_kx_sessionkeybytes()),
                            k = E.address;
                        if ((n.push(k), !(0 | t._crypto_kx_client_session_keys(x, k, s, o, i)))) {
                            var S = p({ sharedRx: f, sharedTx: E }, _);
                            return v(n), S;
                        }
                        g(n, "invalid usage");
                    }
                    function Sr(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_kx_publickeybytes()),
                            _ = a.address;
                        r.push(_);
                        var n = new l(0 | t._crypto_kx_secretkeybytes()),
                            s = n.address;
                        if ((r.push(s), !(0 | t._crypto_kx_keypair(_, s)))) {
                            var c = { publicKey: p(a, e), privateKey: p(n, e), keyType: "x25519" };
                            return v(r), c;
                        }
                        g(r, "internal error");
                    }
                    function wr(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "seed"));
                        var _,
                            n = 0 | t._crypto_kx_seedbytes();
                        e.length !== n && b(a, "invalid seed length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_kx_publickeybytes()),
                            c = s.address;
                        a.push(c);
                        var o = new l(0 | t._crypto_kx_secretkeybytes()),
                            h = o.address;
                        if ((a.push(h), !(0 | t._crypto_kx_seed_keypair(c, h, _)))) {
                            var i = { publicKey: p(s, r), privateKey: p(o, r), keyType: "x25519" };
                            return v(a), i;
                        }
                        g(a, "internal error");
                    }
                    function Tr(e, r, a, _) {
                        var n = [];
                        y(_), (e = m(n, e, "serverPublicKey"));
                        var s,
                            c = 0 | t._crypto_kx_publickeybytes();
                        e.length !== c && b(n, "invalid serverPublicKey length"), (s = u(e)), n.push(s), (r = m(n, r, "serverSecretKey"));
                        var o,
                            h = 0 | t._crypto_kx_secretkeybytes();
                        r.length !== h && b(n, "invalid serverSecretKey length"), (o = u(r)), n.push(o), (a = m(n, a, "clientPublicKey"));
                        var i,
                            d = 0 | t._crypto_kx_publickeybytes();
                        a.length !== d && b(n, "invalid clientPublicKey length"), (i = u(a)), n.push(i);
                        var f = new l(0 | t._crypto_kx_sessionkeybytes()),
                            x = f.address;
                        n.push(x);
                        var E = new l(0 | t._crypto_kx_sessionkeybytes()),
                            k = E.address;
                        if ((n.push(k), !(0 | t._crypto_kx_server_session_keys(x, k, s, o, i)))) {
                            var S = p({ sharedRx: f, sharedTx: E }, _);
                            return v(n), S;
                        }
                        g(n, "invalid usage");
                    }
                    function Yr(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "key"));
                        var c,
                            o = 0 | t._crypto_onetimeauth_keybytes();
                        r.length !== o && b(_, "invalid key length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_onetimeauth_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_onetimeauth(i, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function Br(e, r) {
                        var a = [];
                        y(r), f(a, e, "state_address");
                        var _ = new l(0 | t._crypto_onetimeauth_bytes()),
                            n = _.address;
                        if ((a.push(n), !(0 | t._crypto_onetimeauth_final(e, n)))) {
                            var s = (t._free(e), p(_, r));
                            return v(a), s;
                        }
                        g(a, "invalid usage");
                    }
                    function Ar(e, r) {
                        var a = [];
                        y(r);
                        var _ = null;
                        null != e && ((_ = u((e = m(a, e, "key")))), e.length, a.push(_));
                        var n = new l(144).address;
                        if (!(0 | t._crypto_onetimeauth_init(n, _))) {
                            var s = n;
                            return v(a), s;
                        }
                        g(a, "invalid usage");
                    }
                    function Kr(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_onetimeauth_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_onetimeauth_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function Mr(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address");
                        var n = u((r = m(_, r, "message_chunk"))),
                            s = r.length;
                        _.push(n), !!(0 | t._crypto_onetimeauth_update(e, n, s)) && g(_, "invalid usage"), v(_);
                    }
                    function Ir(e, r, a) {
                        var _ = [];
                        e = m(_, e, "hash");
                        var n,
                            s = 0 | t._crypto_onetimeauth_bytes();
                        e.length !== s && b(_, "invalid hash length"), (n = u(e)), _.push(n);
                        var c = u((r = m(_, r, "message"))),
                            o = r.length;
                        _.push(c), (a = m(_, a, "key"));
                        var h,
                            p = 0 | t._crypto_onetimeauth_keybytes();
                        a.length !== p && b(_, "invalid key length"), (h = u(a)), _.push(h);
                        var i = !(0 | t._crypto_onetimeauth_verify(n, c, o, 0, h));
                        return v(_), i;
                    }
                    function Nr(e, r, a, _, n, s, c) {
                        var o = [];
                        y(c), f(o, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(o, "keyLength must be an unsigned integer");
                        var h = u((r = m(o, r, "password"))),
                            i = r.length;
                        o.push(h), (a = m(o, a, "salt"));
                        var d,
                            x = 0 | t._crypto_pwhash_saltbytes();
                        a.length !== x && b(o, "invalid salt length"), (d = u(a)), o.push(d), f(o, _, "opsLimit"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && b(o, "opsLimit must be an unsigned integer"), f(o, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(o, "memLimit must be an unsigned integer"), f(o, s, "algorithm"), ("number" != typeof s || (0 | s) !== s || s < 0) && b(o, "algorithm must be an unsigned integer");
                        var E = new l(0 | e),
                            k = E.address;
                        if ((o.push(k), !(0 | t._crypto_pwhash(k, e, 0, h, i, 0, d, _, 0, n, s)))) {
                            var S = p(E, c);
                            return v(o), S;
                        }
                        g(o, "invalid usage");
                    }
                    function Lr(e, r, a, _, n, s) {
                        var c = [];
                        y(s), f(c, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(c, "keyLength must be an unsigned integer");
                        var o = u((r = m(c, r, "password"))),
                            h = r.length;
                        c.push(o), (a = m(c, a, "salt"));
                        var i,
                            d = 0 | t._crypto_pwhash_scryptsalsa208sha256_saltbytes();
                        a.length !== d && b(c, "invalid salt length"), (i = u(a)), c.push(i), f(c, _, "opsLimit"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && b(c, "opsLimit must be an unsigned integer"), f(c, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(c, "memLimit must be an unsigned integer");
                        var x = new l(0 | e),
                            E = x.address;
                        if ((c.push(E), !(0 | t._crypto_pwhash_scryptsalsa208sha256(E, e, 0, o, h, 0, i, _, 0, n)))) {
                            var k = p(x, s);
                            return v(c), k;
                        }
                        g(c, "invalid usage");
                    }
                    function Or(e, r, a, _, n, s, c) {
                        var o = [];
                        y(c);
                        var h = u((e = m(o, e, "password"))),
                            i = e.length;
                        o.push(h);
                        var d = u((r = m(o, r, "salt"))),
                            x = r.length;
                        o.push(d), f(o, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(o, "opsLimit must be an unsigned integer"), f(o, _, "r"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && b(o, "r must be an unsigned integer"), f(o, n, "p"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(o, "p must be an unsigned integer"), f(o, s, "keyLength"), ("number" != typeof s || (0 | s) !== s || s < 0) && b(o, "keyLength must be an unsigned integer");
                        var E = new l(0 | s),
                            k = E.address;
                        if ((o.push(k), !(0 | t._crypto_pwhash_scryptsalsa208sha256_ll(h, i, d, x, a, 0, _, n, k, s)))) {
                            var S = p(E, c);
                            return v(o), S;
                        }
                        g(o, "invalid usage");
                    }
                    function Ur(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "password"))),
                            c = e.length;
                        n.push(s), f(n, r, "opsLimit"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(n, "opsLimit must be an unsigned integer"), f(n, a, "memLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(n, "memLimit must be an unsigned integer");
                        var o = new l(0 | t._crypto_pwhash_scryptsalsa208sha256_strbytes()).address;
                        if ((n.push(o), !(0 | t._crypto_pwhash_scryptsalsa208sha256_str(o, s, c, 0, r, 0, a)))) {
                            var h = t.UTF8ToString(o);
                            return v(n), h;
                        }
                        g(n, "invalid usage");
                    }
                    function Cr(e, r, a) {
                        var n = [];
                        y(a), "string" != typeof e && b(n, "hashed_password must be a string"), (e = _(e + "\0")), null != c && e.length - 1 !== c && b(n, "invalid hashed_password length");
                        var s = u(e),
                            c = e.length - 1;
                        n.push(s);
                        var o = u((r = m(n, r, "password"))),
                            h = r.length;
                        n.push(o);
                        var p = !(0 | t._crypto_pwhash_scryptsalsa208sha256_str_verify(s, o, h, 0));
                        return v(n), p;
                    }
                    function Rr(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "password"))),
                            c = e.length;
                        n.push(s), f(n, r, "opsLimit"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(n, "opsLimit must be an unsigned integer"), f(n, a, "memLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(n, "memLimit must be an unsigned integer");
                        var o = new l(0 | t._crypto_pwhash_strbytes()).address;
                        if ((n.push(o), !(0 | t._crypto_pwhash_str(o, s, c, 0, r, 0, a)))) {
                            var h = t.UTF8ToString(o);
                            return v(n), h;
                        }
                        g(n, "invalid usage");
                    }
                    function Pr(e, r, a, n) {
                        var s = [];
                        y(n), "string" != typeof e && b(s, "hashed_password must be a string"), (e = _(e + "\0")), null != o && e.length - 1 !== o && b(s, "invalid hashed_password length");
                        var c = u(e),
                            o = e.length - 1;
                        s.push(c), f(s, r, "opsLimit"), ("number" != typeof r || (0 | r) !== r || r < 0) && b(s, "opsLimit must be an unsigned integer"), f(s, a, "memLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(s, "memLimit must be an unsigned integer");
                        var h = !!(0 | t._crypto_pwhash_str_needs_rehash(c, r, 0, a));
                        return v(s), h;
                    }
                    function Gr(e, r, a) {
                        var n = [];
                        y(a), "string" != typeof e && b(n, "hashed_password must be a string"), (e = _(e + "\0")), null != c && e.length - 1 !== c && b(n, "invalid hashed_password length");
                        var s = u(e),
                            c = e.length - 1;
                        n.push(s);
                        var o = u((r = m(n, r, "password"))),
                            h = r.length;
                        n.push(o);
                        var p = !(0 | t._crypto_pwhash_str_verify(s, o, h, 0));
                        return v(n), p;
                    }
                    function Xr(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "privateKey"));
                        var n,
                            s = 0 | t._crypto_scalarmult_scalarbytes();
                        e.length !== s && b(_, "invalid privateKey length"), (n = u(e)), _.push(n), (r = m(_, r, "publicKey"));
                        var c,
                            o = 0 | t._crypto_scalarmult_bytes();
                        r.length !== o && b(_, "invalid publicKey length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_scalarmult_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_scalarmult(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "weak public key");
                    }
                    function Fr(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "privateKey"));
                        var _,
                            n = 0 | t._crypto_scalarmult_scalarbytes();
                        e.length !== n && b(a, "invalid privateKey length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_scalarmult_bytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_scalarmult_base(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "unknown error");
                    }
                    function Dr(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "n"));
                        var n,
                            s = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
                        e.length !== s && b(_, "invalid n length"), (n = u(e)), _.push(n), (r = m(_, r, "p"));
                        var c,
                            o = 0 | t._crypto_scalarmult_ed25519_bytes();
                        r.length !== o && b(_, "invalid p length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_scalarmult_ed25519_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_scalarmult_ed25519(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid point or scalar is 0");
                    }
                    function jr(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "scalar"));
                        var _,
                            n = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
                        e.length !== n && b(a, "invalid scalar length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_scalarmult_ed25519_bytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_scalarmult_ed25519_base(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "scalar is 0");
                    }
                    function Vr(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "scalar"));
                        var _,
                            n = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
                        e.length !== n && b(a, "invalid scalar length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_scalarmult_ed25519_bytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_scalarmult_ed25519_base_noclamp(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "scalar is 0");
                    }
                    function Hr(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "n"));
                        var n,
                            s = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
                        e.length !== s && b(_, "invalid n length"), (n = u(e)), _.push(n), (r = m(_, r, "p"));
                        var c,
                            o = 0 | t._crypto_scalarmult_ed25519_bytes();
                        r.length !== o && b(_, "invalid p length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_scalarmult_ed25519_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_scalarmult_ed25519_noclamp(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid point or scalar is 0");
                    }
                    function qr(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "scalar"));
                        var n,
                            s = 0 | t._crypto_scalarmult_ristretto255_scalarbytes();
                        e.length !== s && b(_, "invalid scalar length"), (n = u(e)), _.push(n), (r = m(_, r, "element"));
                        var c,
                            o = 0 | t._crypto_scalarmult_ristretto255_bytes();
                        r.length !== o && b(_, "invalid element length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_scalarmult_ristretto255_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_scalarmult_ristretto255(i, n, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "result is identity element");
                    }
                    function zr(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "scalar"));
                        var _,
                            n = 0 | t._crypto_core_ristretto255_scalarbytes();
                        e.length !== n && b(a, "invalid scalar length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_core_ristretto255_bytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_scalarmult_ristretto255_base(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "scalar is 0");
                    }
                    function Wr(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "message"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_secretbox_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "key"));
                        var i,
                            d = 0 | t._crypto_secretbox_keybytes();
                        a.length !== d && b(n, "invalid key length"), (i = u(a)), n.push(i);
                        var f = new l(0 | c),
                            x = f.address;
                        n.push(x);
                        var E = new l(0 | t._crypto_secretbox_macbytes()),
                            k = E.address;
                        if ((n.push(k), !(0 | t._crypto_secretbox_detached(x, k, s, c, 0, o, i)))) {
                            var S = p({ mac: E, cipher: f }, _);
                            return v(n), S;
                        }
                        g(n, "invalid usage");
                    }
                    function $r(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "message"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_secretbox_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "key"));
                        var i,
                            d = 0 | t._crypto_secretbox_keybytes();
                        a.length !== d && b(n, "invalid key length"), (i = u(a)), n.push(i);
                        var f = new l((c + t._crypto_secretbox_macbytes()) | 0),
                            x = f.address;
                        if ((n.push(x), !(0 | t._crypto_secretbox_easy(x, s, c, 0, o, i)))) {
                            var E = p(f, _);
                            return v(n), E;
                        }
                        g(n, "invalid usage");
                    }
                    function Jr(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_secretbox_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_secretbox_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function Qr(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "ciphertext"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "mac"));
                        var h,
                            i = 0 | t._crypto_secretbox_macbytes();
                        r.length !== i && b(s, "invalid mac length"), (h = u(r)), s.push(h), (a = m(s, a, "nonce"));
                        var d,
                            f = 0 | t._crypto_secretbox_noncebytes();
                        a.length !== f && b(s, "invalid nonce length"), (d = u(a)), s.push(d), (_ = m(s, _, "key"));
                        var x,
                            E = 0 | t._crypto_secretbox_keybytes();
                        _.length !== E && b(s, "invalid key length"), (x = u(_)), s.push(x);
                        var k = new l(0 | o),
                            S = k.address;
                        if ((s.push(S), !(0 | t._crypto_secretbox_open_detached(S, c, h, o, 0, d, x)))) {
                            var w = p(k, n);
                            return v(s), w;
                        }
                        g(s, "wrong secret key for the given ciphertext");
                    }
                    function Zr(e, r, a, _) {
                        var n = [];
                        y(_), (e = m(n, e, "ciphertext"));
                        var s,
                            c = t._crypto_secretbox_macbytes(),
                            o = e.length;
                        o < c && b(n, "ciphertext is too short"), (s = u(e)), n.push(s), (r = m(n, r, "nonce"));
                        var h,
                            i = 0 | t._crypto_secretbox_noncebytes();
                        r.length !== i && b(n, "invalid nonce length"), (h = u(r)), n.push(h), (a = m(n, a, "key"));
                        var d,
                            f = 0 | t._crypto_secretbox_keybytes();
                        a.length !== f && b(n, "invalid key length"), (d = u(a)), n.push(d);
                        var x = new l((o - t._crypto_secretbox_macbytes()) | 0),
                            E = x.address;
                        if ((n.push(E), !(0 | t._crypto_secretbox_open_easy(E, s, o, 0, h, d)))) {
                            var k = p(x, _);
                            return v(n), k;
                        }
                        g(n, "wrong secret key for the given ciphertext");
                    }
                    function et(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "header"));
                        var n,
                            s = 0 | t._crypto_secretstream_xchacha20poly1305_headerbytes();
                        e.length !== s && b(_, "invalid header length"), (n = u(e)), _.push(n), (r = m(_, r, "key"));
                        var c,
                            o = 0 | t._crypto_secretstream_xchacha20poly1305_keybytes();
                        r.length !== o && b(_, "invalid key length"), (c = u(r)), _.push(c);
                        var h = new l(52).address;
                        if (!(0 | t._crypto_secretstream_xchacha20poly1305_init_pull(h, n, c))) {
                            var p = h;
                            return v(_), p;
                        }
                        g(_, "invalid usage");
                    }
                    function rt(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "key"));
                        var _,
                            n = 0 | t._crypto_secretstream_xchacha20poly1305_keybytes();
                        e.length !== n && b(a, "invalid key length"), (_ = u(e)), a.push(_);
                        var s = new l(52).address,
                            c = new l(0 | t._crypto_secretstream_xchacha20poly1305_headerbytes()),
                            o = c.address;
                        if ((a.push(o), !(0 | t._crypto_secretstream_xchacha20poly1305_init_push(s, o, _)))) {
                            var h = { state: s, header: p(c, r) };
                            return v(a), h;
                        }
                        g(a, "invalid usage");
                    }
                    function tt(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_secretstream_xchacha20poly1305_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_secretstream_xchacha20poly1305_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function at(e, r, a, _) {
                        var n = [];
                        y(_), f(n, e, "state_address"), (r = m(n, r, "cipher"));
                        var s,
                            c = t._crypto_secretstream_xchacha20poly1305_abytes(),
                            o = r.length;
                        o < c && b(n, "cipher is too short"), (s = u(r)), n.push(s);
                        var h = null,
                            i = 0;
                        null != a && ((h = u((a = m(n, a, "ad")))), (i = a.length), n.push(h));
                        var g = new l((o - t._crypto_secretstream_xchacha20poly1305_abytes()) | 0),
                            x = g.address;
                        n.push(x);
                        var E,
                            k = ((E = d(1)), n.push(E), (k = 0 === t._crypto_secretstream_xchacha20poly1305_pull(e, x, 0, E, s, o, 0, h, i) && { tag: t.HEAPU8[E], message: g }) && { message: p(k.message, _), tag: k.tag });
                        return v(n), k;
                    }
                    function _t(e, r, a, _, n) {
                        var s = [];
                        y(n), f(s, e, "state_address");
                        var c = u((r = m(s, r, "message_chunk"))),
                            o = r.length;
                        s.push(c);
                        var h = null,
                            i = 0;
                        null != a && ((h = u((a = m(s, a, "ad")))), (i = a.length), s.push(h)), f(s, _, "tag"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && b(s, "tag must be an unsigned integer");
                        var d = new l((o + t._crypto_secretstream_xchacha20poly1305_abytes()) | 0),
                            x = d.address;
                        if ((s.push(x), !(0 | t._crypto_secretstream_xchacha20poly1305_push(e, x, 0, c, o, 0, h, i, 0, _)))) {
                            var E = p(d, n);
                            return v(s), E;
                        }
                        g(s, "invalid usage");
                    }
                    function nt(e, r) {
                        var a = [];
                        return y(r), f(a, e, "state_address"), t._crypto_secretstream_xchacha20poly1305_rekey(e), v(a), !0;
                    }
                    function st(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "key"));
                        var c,
                            o = 0 | t._crypto_shorthash_keybytes();
                        r.length !== o && b(_, "invalid key length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_shorthash_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_shorthash(i, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function ct(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_shorthash_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_shorthash_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function ot(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "key"));
                        var c,
                            o = 0 | t._crypto_shorthash_siphashx24_keybytes();
                        r.length !== o && b(_, "invalid key length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_shorthash_siphashx24_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_shorthash_siphashx24(i, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function ht(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "privateKey"));
                        var c,
                            o = 0 | t._crypto_sign_secretkeybytes();
                        r.length !== o && b(_, "invalid privateKey length"), (c = u(r)), _.push(c);
                        var h = new l((e.length + t._crypto_sign_bytes()) | 0),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_sign(i, null, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function pt(e, r, a) {
                        var _ = [];
                        y(a);
                        var n = u((e = m(_, e, "message"))),
                            s = e.length;
                        _.push(n), (r = m(_, r, "privateKey"));
                        var c,
                            o = 0 | t._crypto_sign_secretkeybytes();
                        r.length !== o && b(_, "invalid privateKey length"), (c = u(r)), _.push(c);
                        var h = new l(0 | t._crypto_sign_bytes()),
                            i = h.address;
                        if ((_.push(i), !(0 | t._crypto_sign_detached(i, null, n, s, 0, c)))) {
                            var d = p(h, a);
                            return v(_), d;
                        }
                        g(_, "invalid usage");
                    }
                    function it(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "edPk"));
                        var _,
                            n = 0 | t._crypto_sign_publickeybytes();
                        e.length !== n && b(a, "invalid edPk length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_scalarmult_scalarbytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_sign_ed25519_pk_to_curve25519(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid key");
                    }
                    function yt(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "edSk"));
                        var _,
                            n = 0 | t._crypto_sign_secretkeybytes();
                        e.length !== n && b(a, "invalid edSk length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_scalarmult_scalarbytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_sign_ed25519_sk_to_curve25519(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid key");
                    }
                    function lt(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "privateKey"));
                        var _,
                            n = 0 | t._crypto_sign_secretkeybytes();
                        e.length !== n && b(a, "invalid privateKey length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_sign_publickeybytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_sign_ed25519_sk_to_pk(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid key");
                    }
                    function ut(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "privateKey"));
                        var _,
                            n = 0 | t._crypto_sign_secretkeybytes();
                        e.length !== n && b(a, "invalid privateKey length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_sign_seedbytes()),
                            c = s.address;
                        if ((a.push(c), !(0 | t._crypto_sign_ed25519_sk_to_seed(c, _)))) {
                            var o = p(s, r);
                            return v(a), o;
                        }
                        g(a, "invalid key");
                    }
                    function dt(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address"), (r = m(_, r, "privateKey"));
                        var n,
                            s = 0 | t._crypto_sign_secretkeybytes();
                        r.length !== s && b(_, "invalid privateKey length"), (n = u(r)), _.push(n);
                        var c = new l(0 | t._crypto_sign_bytes()),
                            o = c.address;
                        if ((_.push(o), !(0 | t._crypto_sign_final_create(e, o, null, n)))) {
                            var h = (t._free(e), p(c, a));
                            return v(_), h;
                        }
                        g(_, "invalid usage");
                    }
                    function vt(e, r, a, _) {
                        var n = [];
                        y(_), f(n, e, "state_address"), (r = m(n, r, "signature"));
                        var s,
                            c = 0 | t._crypto_sign_bytes();
                        r.length !== c && b(n, "invalid signature length"), (s = u(r)), n.push(s), (a = m(n, a, "publicKey"));
                        var o,
                            h = 0 | t._crypto_sign_publickeybytes();
                        a.length !== h && b(n, "invalid publicKey length"), (o = u(a)), n.push(o);
                        var p = !(0 | t._crypto_sign_final_verify(e, s, o));
                        return v(n), p;
                    }
                    function gt(e) {
                        var r = [];
                        y(e);
                        var a = new l(208).address;
                        if (!(0 | t._crypto_sign_init(a))) {
                            var _ = a;
                            return v(r), _;
                        }
                        g(r, "internal error");
                    }
                    function bt(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_sign_publickeybytes()),
                            _ = a.address;
                        r.push(_);
                        var n = new l(0 | t._crypto_sign_secretkeybytes()),
                            s = n.address;
                        if ((r.push(s), !(0 | t._crypto_sign_keypair(_, s)))) {
                            var c = { publicKey: p(a, e), privateKey: p(n, e), keyType: "ed25519" };
                            return v(r), c;
                        }
                        g(r, "internal error");
                    }
                    function ft(e, r, a) {
                        var _ = [];
                        y(a), (e = m(_, e, "signedMessage"));
                        var n,
                            s = t._crypto_sign_bytes(),
                            c = e.length;
                        c < s && b(_, "signedMessage is too short"), (n = u(e)), _.push(n), (r = m(_, r, "publicKey"));
                        var o,
                            h = 0 | t._crypto_sign_publickeybytes();
                        r.length !== h && b(_, "invalid publicKey length"), (o = u(r)), _.push(o);
                        var i = new l((c - t._crypto_sign_bytes()) | 0),
                            d = i.address;
                        if ((_.push(d), !(0 | t._crypto_sign_open(d, null, n, c, 0, o)))) {
                            var f = p(i, a);
                            return v(_), f;
                        }
                        g(_, "incorrect signature for the given public key");
                    }
                    function mt(e, r) {
                        var a = [];
                        y(r), (e = m(a, e, "seed"));
                        var _,
                            n = 0 | t._crypto_sign_seedbytes();
                        e.length !== n && b(a, "invalid seed length"), (_ = u(e)), a.push(_);
                        var s = new l(0 | t._crypto_sign_publickeybytes()),
                            c = s.address;
                        a.push(c);
                        var o = new l(0 | t._crypto_sign_secretkeybytes()),
                            h = o.address;
                        if ((a.push(h), !(0 | t._crypto_sign_seed_keypair(c, h, _)))) {
                            var i = { publicKey: p(s, r), privateKey: p(o, r), keyType: "ed25519" };
                            return v(a), i;
                        }
                        g(a, "invalid usage");
                    }
                    function xt(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "state_address");
                        var n = u((r = m(_, r, "message_chunk"))),
                            s = r.length;
                        _.push(n), !!(0 | t._crypto_sign_update(e, n, s, 0)) && g(_, "invalid usage"), v(_);
                    }
                    function Et(e, r, a) {
                        var _ = [];
                        e = m(_, e, "signature");
                        var n,
                            s = 0 | t._crypto_sign_bytes();
                        e.length !== s && b(_, "invalid signature length"), (n = u(e)), _.push(n);
                        var c = u((r = m(_, r, "message"))),
                            o = r.length;
                        _.push(c), (a = m(_, a, "publicKey"));
                        var h,
                            p = 0 | t._crypto_sign_publickeybytes();
                        a.length !== p && b(_, "invalid publicKey length"), (h = u(a)), _.push(h);
                        var i = !(0 | t._crypto_sign_verify_detached(n, c, o, 0, h));
                        return v(_), i;
                    }
                    function kt(e, r, a, _) {
                        var n = [];
                        y(_), f(n, e, "outLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(n, "outLength must be an unsigned integer"), (r = m(n, r, "key"));
                        var s,
                            c = 0 | t._crypto_stream_chacha20_keybytes();
                        r.length !== c && b(n, "invalid key length"), (s = u(r)), n.push(s), (a = m(n, a, "nonce"));
                        var o,
                            h = 0 | t._crypto_stream_chacha20_noncebytes();
                        a.length !== h && b(n, "invalid nonce length"), (o = u(a)), n.push(o);
                        var i = new l(0 | e),
                            d = i.address;
                        n.push(d), t._crypto_stream_chacha20(d, e, 0, o, s);
                        var g = p(i, _);
                        return v(n), g;
                    }
                    function St(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "input_message"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_stream_chacha20_ietf_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "key"));
                        var i,
                            d = 0 | t._crypto_stream_chacha20_ietf_keybytes();
                        a.length !== d && b(n, "invalid key length"), (i = u(a)), n.push(i);
                        var f = new l(0 | c),
                            x = f.address;
                        if ((n.push(x), 0 === t._crypto_stream_chacha20_ietf_xor(x, s, c, 0, o, i))) {
                            var E = p(f, _);
                            return v(n), E;
                        }
                        g(n, "invalid usage");
                    }
                    function wt(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "input_message"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "nonce"));
                        var h,
                            i = 0 | t._crypto_stream_chacha20_ietf_noncebytes();
                        r.length !== i && b(s, "invalid nonce length"), (h = u(r)), s.push(h), f(s, a, "nonce_increment"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(s, "nonce_increment must be an unsigned integer"), (_ = m(s, _, "key"));
                        var d,
                            x = 0 | t._crypto_stream_chacha20_ietf_keybytes();
                        _.length !== x && b(s, "invalid key length"), (d = u(_)), s.push(d);
                        var E = new l(0 | o),
                            k = E.address;
                        if ((s.push(k), 0 === t._crypto_stream_chacha20_ietf_xor_ic(k, c, o, 0, h, a, d))) {
                            var S = p(E, n);
                            return v(s), S;
                        }
                        g(s, "invalid usage");
                    }
                    function Tt(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_stream_chacha20_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_stream_chacha20_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function Yt(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "input_message"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_stream_chacha20_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "key"));
                        var i,
                            d = 0 | t._crypto_stream_chacha20_keybytes();
                        a.length !== d && b(n, "invalid key length"), (i = u(a)), n.push(i);
                        var f = new l(0 | c),
                            x = f.address;
                        if ((n.push(x), 0 === t._crypto_stream_chacha20_xor(x, s, c, 0, o, i))) {
                            var E = p(f, _);
                            return v(n), E;
                        }
                        g(n, "invalid usage");
                    }
                    function Bt(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "input_message"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "nonce"));
                        var h,
                            i = 0 | t._crypto_stream_chacha20_noncebytes();
                        r.length !== i && b(s, "invalid nonce length"), (h = u(r)), s.push(h), f(s, a, "nonce_increment"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(s, "nonce_increment must be an unsigned integer"), (_ = m(s, _, "key"));
                        var d,
                            x = 0 | t._crypto_stream_chacha20_keybytes();
                        _.length !== x && b(s, "invalid key length"), (d = u(_)), s.push(d);
                        var E = new l(0 | o),
                            k = E.address;
                        if ((s.push(k), 0 === t._crypto_stream_chacha20_xor_ic(k, c, o, 0, h, a, 0, d))) {
                            var S = p(E, n);
                            return v(s), S;
                        }
                        g(s, "invalid usage");
                    }
                    function At(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_stream_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_stream_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function Kt(e) {
                        var r = [];
                        y(e);
                        var a = new l(0 | t._crypto_stream_xchacha20_keybytes()),
                            _ = a.address;
                        r.push(_), t._crypto_stream_xchacha20_keygen(_);
                        var n = p(a, e);
                        return v(r), n;
                    }
                    function Mt(e, r, a, _) {
                        var n = [];
                        y(_);
                        var s = u((e = m(n, e, "input_message"))),
                            c = e.length;
                        n.push(s), (r = m(n, r, "nonce"));
                        var o,
                            h = 0 | t._crypto_stream_xchacha20_noncebytes();
                        r.length !== h && b(n, "invalid nonce length"), (o = u(r)), n.push(o), (a = m(n, a, "key"));
                        var i,
                            d = 0 | t._crypto_stream_xchacha20_keybytes();
                        a.length !== d && b(n, "invalid key length"), (i = u(a)), n.push(i);
                        var f = new l(0 | c),
                            x = f.address;
                        if ((n.push(x), 0 === t._crypto_stream_xchacha20_xor(x, s, c, 0, o, i))) {
                            var E = p(f, _);
                            return v(n), E;
                        }
                        g(n, "invalid usage");
                    }
                    function It(e, r, a, _, n) {
                        var s = [];
                        y(n);
                        var c = u((e = m(s, e, "input_message"))),
                            o = e.length;
                        s.push(c), (r = m(s, r, "nonce"));
                        var h,
                            i = 0 | t._crypto_stream_xchacha20_noncebytes();
                        r.length !== i && b(s, "invalid nonce length"), (h = u(r)), s.push(h), f(s, a, "nonce_increment"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(s, "nonce_increment must be an unsigned integer"), (_ = m(s, _, "key"));
                        var d,
                            x = 0 | t._crypto_stream_xchacha20_keybytes();
                        _.length !== x && b(s, "invalid key length"), (d = u(_)), s.push(d);
                        var E = new l(0 | o),
                            k = E.address;
                        if ((s.push(k), 0 === t._crypto_stream_xchacha20_xor_ic(k, c, o, 0, h, a, 0, d))) {
                            var S = p(E, n);
                            return v(s), S;
                        }
                        g(s, "invalid usage");
                    }
                    function Nt(e, r) {
                        var a = [];
                        y(r), f(a, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(a, "length must be an unsigned integer");
                        var _ = new l(0 | e),
                            n = _.address;
                        a.push(n), t._randombytes_buf(n, e);
                        var s = p(_, r);
                        return v(a), s;
                    }
                    function Lt(e, r, a) {
                        var _ = [];
                        y(a), f(_, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(_, "length must be an unsigned integer"), (r = m(_, r, "seed"));
                        var n,
                            s = 0 | t._randombytes_seedbytes();
                        r.length !== s && b(_, "invalid seed length"), (n = u(r)), _.push(n);
                        var c = new l(0 | e),
                            o = c.address;
                        _.push(o), t._randombytes_buf_deterministic(o, e, n);
                        var h = p(c, a);
                        return v(_), h;
                    }
                    function Ot(e) {
                        y(e), t._randombytes_close();
                    }
                    function Ut(e) {
                        y(e);
                        var r = t._randombytes_random() >>> 0;
                        return v([]), r;
                    }
                    function Ct(e, r) {
                        var a = [];
                        y(r);
                        for (var _ = t._malloc(24), n = 0; n < 6; n++) t.setValue(_ + 4 * n, t.Runtime.addFunction(e[["implementation_name", "random", "stir", "uniform", "buf", "close"][n]]), "i32");
                        !!(0 | t._randombytes_set_implementation(_)) && g(a, "unsupported implementation"), v(a);
                    }
                    function Rt(e) {
                        y(e), t._randombytes_stir();
                    }
                    function Pt(e, r) {
                        var a = [];
                        y(r), f(a, e, "upper_bound"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(a, "upper_bound must be an unsigned integer");
                        var _ = t._randombytes_uniform(e) >>> 0;
                        return v(a), _;
                    }
                    function Gt() {
                        var e = t._sodium_version_string(),
                            r = t.UTF8ToString(e);
                        return v([]), r;
                    }
                    return (
                        (l.prototype.to_Uint8Array = function () {
                            var e = new Uint8Array(this.length);
                            return e.set(t.HEAPU8.subarray(this.address, this.address + this.length)), e;
                        }),
                        (e.add = function (e, r) {
                            if (!(e instanceof Uint8Array && r instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can added");
                            var t = e.length,
                                a = 0,
                                _ = 0;
                            if (r.length != e.length) throw new TypeError("Arguments must have the same length");
                            for (_ = 0; _ < t; _++) (a >>= 8), (a += e[_] + r[_]), (e[_] = 255 & a);
                        }),
                        (e.base64_variants = c),
                        (e.compare = function (e, r) {
                            if (!(e instanceof Uint8Array && r instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared");
                            if (e.length !== r.length) throw new TypeError("Only instances of identical length can be compared");
                            for (var t = 0, a = 1, _ = e.length; _-- > 0; ) (t |= ((r[_] - e[_]) >> 8) & a), (a &= ((r[_] ^ e[_]) - 1) >> 8);
                            return t + t + a - 1;
                        }),
                        (e.from_base64 = function (e, r) {
                            r = o(r);
                            var a,
                                _ = [],
                                n = new l((3 * (e = m(_, e, "input")).length) / 4),
                                s = u(e),
                                c = d(4),
                                h = d(4);
                            return _.push(s), _.push(n.address), _.push(n.result_bin_len_p), _.push(n.b64_end_p), 0 !== t._sodium_base642bin(n.address, n.length, s, e.length, 0, c, h, r) && g(_, "invalid input"), t.getValue(h, "i32") - s !== e.length && g(_, "incomplete input"), (n.length = t.getValue(c, "i32")), (a = n.to_Uint8Array()), v(_), a;
                        }),
                        (e.from_hex = function (e) {
                            var r,
                                a = [],
                                _ = new l((e = m(a, e, "input")).length / 2),
                                n = u(e),
                                s = d(4);
                            return a.push(n), a.push(_.address), a.push(_.hex_end_p), 0 !== t._sodium_hex2bin(_.address, _.length, n, e.length, 0, 0, s) && g(a, "invalid input"), t.getValue(s, "i32") - n !== e.length && g(a, "incomplete input"), (r = _.to_Uint8Array()), v(a), r;
                        }),
                        (e.from_string = _),
                        (e.increment = function (e) {
                            if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be incremented");
                            for (var r = 256, t = 0, a = e.length; t < a; t++) (r >>= 8), (r += e[t]), (e[t] = 255 & r);
                        }),
                        (e.is_zero = function (e) {
                            if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be checked");
                            for (var r = 0, t = 0, a = e.length; t < a; t++) r |= e[t];
                            return 0 === r;
                        }),
                        (e.libsodium = r),
                        (e.memcmp = function (e, r) {
                            if (!(e instanceof Uint8Array && r instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared");
                            if (e.length !== r.length) throw new TypeError("Only instances of identical length can be compared");
                            for (var t = 0, a = 0, _ = e.length; a < _; a++) t |= e[a] ^ r[a];
                            return 0 === t;
                        }),
                        (e.memzero = function (e) {
                            if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be wiped");
                            for (var r = 0, t = e.length; r < t; r++) e[r] = 0;
                        }),
                        (e.output_formats = function () {
                            return ["uint8array", "text", "hex", "base64"];
                        }),
                        (e.pad = function (e, r) {
                            if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array");
                            if ((r |= 0) <= 0) throw new Error("block size must be > 0");
                            var a,
                                _ = [],
                                n = d(4),
                                s = 1,
                                c = 0,
                                o = 0 | e.length,
                                h = new l(o + r);
                            _.push(n), _.push(h.address);
                            for (var p = h.address, i = h.address + o + r; p < i; p++) (t.HEAPU8[p] = e[c]), (c += s = 1 & ~(((65535 & (((o -= s) >>> 48) | (o >>> 32) | (o >>> 16) | o)) - 1) >> 16));
                            return 0 !== t._sodium_pad(n, h.address, e.length, r, h.length) && g(_, "internal error"), (h.length = t.getValue(n, "i32")), (a = h.to_Uint8Array()), v(_), a;
                        }),
                        (e.unpad = function (e, r) {
                            if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array");
                            if ((r |= 0) <= 0) throw new Error("block size must be > 0");
                            var a = [],
                                _ = u(e),
                                n = d(4);
                            return a.push(_), a.push(n), 0 !== t._sodium_unpad(n, _, e.length, r) && g(a, "unsupported/invalid padding"), (e = (e = new Uint8Array(e)).subarray(0, t.getValue(n, "i32"))), v(a), e;
                        }),
                        (e.ready = a),
                        (e.symbols = function () {
                            return Object.keys(e).sort();
                        }),
                        (e.to_base64 = h),
                        (e.to_hex = s),
                        (e.to_string = n),
                        e
                    );
                }),
                void 0 !== (n = "function" == typeof a ? a.apply(r, _) : a) && (e.exports = n),
                c &&
                    s.sodium.ready.then(function () {
                        c(s.sodium);
                    });
        },
        750857: (e, r, t) => {
            var a = t(137772).Symbol;
            e.exports = a;
        },
        853366: (e, r, t) => {
            var a = t(750857),
                _ = t(662107),
                n = t(237157),
                s = a ? a.toStringTag : void 0;
            e.exports = function (e) {
                return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : s && s in Object(e) ? _(e) : n(e);
            };
        },
        251704: (e, r, t) => {
            var a = t(252153),
                _ = /^\s+/;
            e.exports = function (e) {
                return e ? e.slice(0, a(e) + 1).replace(_, "") : e;
            };
        },
        51242: (e, r, t) => {
            var a = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
            e.exports = a;
        },
        662107: (e, r, t) => {
            var a = t(750857),
                _ = Object.prototype,
                n = _.hasOwnProperty,
                s = _.toString,
                c = a ? a.toStringTag : void 0;
            e.exports = function (e) {
                var r = n.call(e, c),
                    t = e[c];
                try {
                    e[c] = void 0;
                    var a = !0;
                } catch (e) {}
                var _ = s.call(e);
                return a && (r ? (e[c] = t) : delete e[c]), _;
            };
        },
        237157: (e) => {
            var r = Object.prototype.toString;
            e.exports = function (e) {
                return r.call(e);
            };
        },
        137772: (e, r, t) => {
            var a = t(51242),
                _ = "object" == typeof self && self && self.Object === Object && self,
                n = a || _ || Function("return this")();
            e.exports = n;
        },
        252153: (e) => {
            var r = /\s/;
            e.exports = function (e) {
                for (var t = e.length; t-- && r.test(e.charAt(t)); );
                return t;
            };
        },
        254073: (e, r, t) => {
            var a = t(429259),
                _ = t(161100),
                n = t(707642),
                s = Math.max,
                c = Math.min;
            e.exports = function (e, r, t) {
                var o,
                    h,
                    p,
                    i,
                    y,
                    l,
                    u = 0,
                    d = !1,
                    v = !1,
                    g = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                function b(r) {
                    var t = o,
                        a = h;
                    return (o = h = void 0), (u = r), (i = e.apply(a, t));
                }
                function f(e) {
                    var t = e - l;
                    return void 0 === l || t >= r || t < 0 || (v && e - u >= p);
                }
                function m() {
                    var e = _();
                    if (f(e)) return x(e);
                    y = setTimeout(
                        m,
                        (function (e) {
                            var t = r - (e - l);
                            return v ? c(t, p - (e - u)) : t;
                        })(e),
                    );
                }
                function x(e) {
                    return (y = void 0), g && o ? b(e) : ((o = h = void 0), i);
                }
                function E() {
                    var e = _(),
                        t = f(e);
                    if (((o = arguments), (h = this), (l = e), t)) {
                        if (void 0 === y)
                            return (function (e) {
                                return (u = e), (y = setTimeout(m, r)), d ? b(e) : i;
                            })(l);
                        if (v) return clearTimeout(y), (y = setTimeout(m, r)), b(l);
                    }
                    return void 0 === y && (y = setTimeout(m, r)), i;
                }
                return (
                    (r = n(r) || 0),
                    a(t) && ((d = !!t.leading), (p = (v = "maxWait" in t) ? s(n(t.maxWait) || 0, r) : p), (g = "trailing" in t ? !!t.trailing : g)),
                    (E.cancel = function () {
                        void 0 !== y && clearTimeout(y), (u = 0), (o = l = h = y = void 0);
                    }),
                    (E.flush = function () {
                        return void 0 === y ? i : x(_());
                    }),
                    E
                );
            };
        },
        429259: (e) => {
            e.exports = function (e) {
                var r = typeof e;
                return null != e && ("object" == r || "function" == r);
            };
        },
        315125: (e) => {
            e.exports = function (e) {
                return null != e && "object" == typeof e;
            };
        },
        4795: (e, r, t) => {
            var a = t(853366),
                _ = t(315125);
            e.exports = function (e) {
                return "symbol" == typeof e || (_(e) && "[object Symbol]" == a(e));
            };
        },
        161100: (e, r, t) => {
            var a = t(137772);
            e.exports = function () {
                return a.Date.now();
            };
        },
        707642: (e, r, t) => {
            var a = t(251704),
                _ = t(429259),
                n = t(4795),
                s = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                o = /^0o[0-7]+$/i,
                h = parseInt;
            e.exports = function (e) {
                if ("number" == typeof e) return e;
                if (n(e)) return NaN;
                if (_(e)) {
                    var r = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = _(r) ? r + "" : r;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = a(e);
                var t = c.test(e);
                return t || o.test(e) ? h(e.slice(2), t ? 2 : 8) : s.test(e) ? NaN : +e;
            };
        },
        812053: () => {},
        724031: () => {},
        868484: () => {},
        313324: (e, r, t) => {
            "use strict";
            t.d(r, { J: () => s });
            const a = Symbol.for("react-aria.i18n.locale"),
                _ = Symbol.for("react-aria.i18n.strings");
            let n;
            class s {
                getStringForLocale(e, r) {
                    let t = this.getStringsForLocale(r)[e];
                    if (!t) throw new Error(`Could not find intl message ${e} in ${r} locale`);
                    return t;
                }
                getStringsForLocale(e) {
                    let r = this.strings[e];
                    return (
                        r ||
                            ((r = (function (e, r, t = "en-US") {
                                if (r[e]) return r[e];
                                let a = (function (e) {
                                    return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
                                })(e);
                                if (r[a]) return r[a];
                                for (let e in r) if (e.startsWith(a + "-")) return r[e];
                                return r[t];
                            })(e, this.strings, this.defaultLocale)),
                            (this.strings[e] = r)),
                        r
                    );
                }
                static getGlobalDictionaryForPackage(e) {
                    if ("undefined" == typeof window) return null;
                    let r = window[a];
                    if (void 0 === n) {
                        let e = window[_];
                        if (!e) return null;
                        n = {};
                        for (let t in e) n[t] = new s({ [r]: e[t] }, r);
                    }
                    let t = null == n ? void 0 : n[e];
                    if (!t) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
                    return t;
                }
                constructor(e, r = "en-US") {
                    (this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e))), (this.defaultLocale = r);
                }
            }
        },
        11425: (e, r, t) => {
            "use strict";
            t.d(r, { E: () => n });
            const a = new Map(),
                _ = new Map();
            class n {
                format(e, r) {
                    let t = this.strings.getStringForLocale(e, this.locale);
                    return "function" == typeof t ? t(r, this) : t;
                }
                plural(e, r, t = "cardinal") {
                    let _ = r["=" + e];
                    if (_) return "function" == typeof _ ? _() : _;
                    let n = this.locale + ":" + t,
                        s = a.get(n);
                    return s || ((s = new Intl.PluralRules(this.locale, { type: t })), a.set(n, s)), (_ = r[s.select(e)] || r.other), "function" == typeof _ ? _() : _;
                }
                number(e) {
                    let r = _.get(this.locale);
                    return r || ((r = new Intl.NumberFormat(this.locale)), _.set(this.locale, r)), r.format(e);
                }
                select(e, r) {
                    let t = e[r] || e.other;
                    return "function" == typeof t ? t() : t;
                }
                constructor(e, r) {
                    (this.locale = e), (this.strings = r);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-43dd7041.006a2aba.js.map
