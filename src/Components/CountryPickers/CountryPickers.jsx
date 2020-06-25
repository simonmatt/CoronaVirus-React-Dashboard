import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

import styles from './CountryPickers.module.css';

import { fetchCountries } from '../../API';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };

        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue=""
                onChange={(e) => handleCountryChange(e.target.value)}
                variant="filled">
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option
                    key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;


