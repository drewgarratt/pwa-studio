import { getCountryName } from '../directory';

const countryId = 'US';
const countryName = 'United States';

test('getCountryName returns country name', () => {
    const state = {
        directory: {
            countries: [
                {
                    id: countryId,
                    full_name_locale: countryName
                }
            ]
        }
    };

    expect(getCountryName(state, countryId)).toBe(countryName);
});

test('getCountryName returns an empty string when country was not found', () => {
    const countryId = 'US';
    const state = {
        directory: {
            countries: []
        }
    };

    expect(getCountryName(state, countryId)).toBe('');
});
