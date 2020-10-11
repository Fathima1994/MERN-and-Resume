import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = (props) => {
    const sign = props.transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
            <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
                {props.transaction.text} <span>{sign}${numberWithCommas(Math.abs(props.transaction.amount))}</span><button className="delete-btn" onClick={deleteTransaction.bind(this,props.transaction._id)}>x</button>
            </li>
    )
}
