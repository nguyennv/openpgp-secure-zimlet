/**
 * ***** BEGIN LICENSE BLOCK *****
 * OpenPGP Zimbra Secure is the open source digital signature and encrypt for Zimbra Collaboration Open Source Edition software
 * Copyright (C) 2016-present iWay Vietnam - http://www.iwayvietnam.com

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 * ***** END LICENSE BLOCK *****
 *
 * OpenPGP MIME Secure Email Zimlet
 *
 * Written by Nguyen Van Nguyen <nguyennv1981@gmail.com>
 */

ImportPublicKeyView = function(params, keyInfo) {
    params.className = params.className || 'DwtComposite ImportPublicKeyView';
    DwtComposite.call(this, params);

    this._createHtmlFromTemplate(this.TEMPLATE, {
        id: this.getHTMLElId()
    });

    this._initialize(keyInfo);
};

ImportPublicKeyView.prototype = new DwtComposite;
ImportPublicKeyView.prototype.constructor = ImportPublicKeyView;

ImportPublicKeyView.prototype.toString = function() {
    return 'ImportPublicKeyView';
};

ImportPublicKeyView.prototype.TEMPLATE = OpenPGPZimbraSecure.NAME + '#ImportPublicKeyView';

ImportPublicKeyView.prototype._initialize = function(keyInfo) {
    var id = this.getHTMLElId();
    document.getElementById(id + '_KeyInfo').innerHTML = OpenPGPUtils.renderTemplate('KeyInfo', keyInfo);
};
