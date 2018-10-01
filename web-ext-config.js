/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

module.exports = {
  run: {
    pref: [
      "toolkit.telemetry.enabled=true",
      "toolkit.telemetry.server=https://127.0.0.1/telemetry-dummy/",
      "xpinstall.signatures.required=false",
    ],
  },
};
