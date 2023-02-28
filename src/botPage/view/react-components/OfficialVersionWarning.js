import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../../../common/i18n';
import * as style from '../style';

const OfficialVersionWarning = ({ show }) =>
    show ? (
        <div style={style.bottomWarning}>
            <div id="end-note">
                {`${translate('Esta é uma pagina confiavel de operações automatizadas Binary.com.')} `}
                <a style={style.bottomWarningLink} href="https://cia-trader.com.br/bot.html">
                    {translate('Versão Oficial')}
                </a>
            </div>
        </div>
    ) : null;

OfficialVersionWarning.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default OfficialVersionWarning;
