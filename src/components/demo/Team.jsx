import PropTypes from "prop-types";
import { capitalise } from "./capitalise";

export function Team(props) {
    return (
        <div>
            <h2>{capitalise(props.title)}</h2>
            {props.subtitle && <p>{props.subtitle}</p>}
            <p>Example prop (props.scores) is: {props.scores.join()}</p>
        </div>
    );
}

//Optional but recommended
//If you don't specify prop types, disable the rule in .eslintrc.cjs
Team.propTypes = {
    title: PropTypes.string.isRequired,
    scores: PropTypes.arrayOf(PropTypes.number).isRequired,
    subtitle: PropTypes.string,
};
