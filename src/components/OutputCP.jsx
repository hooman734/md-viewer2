import { useSelector} from "react-redux";
import marked from 'marked';

const OutputCP = props => {
    const text  = useSelector(state => {
        return state.inputText
    });
    console.log(text)
    const output = { __html: `${ marked(text || 'Empty...') }`};

    return (
        <div>
            <p className="badge badge-info">The Result:</p>
            <div className="border border-gray mt-2">
                <div className="p-2 mt-2" dangerouslySetInnerHTML={ output }/>
            </div>
        </div>
    );
}

export default OutputCP;