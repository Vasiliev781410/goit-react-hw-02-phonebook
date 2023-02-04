import css from "./Filter.module.css";
import PropTypes from 'prop-types';

export const Filter = ({onChange, value})=>{
    return (
        <>
            <label className={css.filter__label} htmlFor="filterInput">Find contact by name</label>
            <input onChange={onChange} className={css.filter__input} id="filterInput" type="text" value={value}/>
        </>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}