import { mergeData } from "../utils";

export const props = {
    tag: {
        type: String,
        default: "div"
    }
};

export default {
    functional: true,
    props,
    render(h, { props, data, children }) {
        return h(
            props.tag,
            mergeData(data, {
                staticClass: "form-row"
            }),
            children
        );
    }
};
