import usePlacesAutocomplete, {
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import './PlacesAutocomplete.css'
import {MdLocationOn} from "react-icons/md";

const PlacesAutocomplete = ({ setAddress }) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setAddress(e.target.value);
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }) =>
            () => {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                setAddress(description);
                clearSuggestions();
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <MdLocationOn/><strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <div id="input__container" ref={ref}>
            <input
                id="input__container-input"
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Where are you going?"
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" &&
                <div id="input__suggestions">
                    <ul id="input__suggestions-ul">{renderSuggestions()}</ul>
                </div>
            }
        </div>
    );
};

export default PlacesAutocomplete;