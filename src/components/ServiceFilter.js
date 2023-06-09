import { useSelector, useDispatch } from "react-redux";
import { changeFilterField, clearFilterField } from "../store/actions/actions";

export default function ServiceFilter() {
    const filterField = useSelector(state => state.serviceFilterField);
    const dispatch = useDispatch()
 
    return (
        <div className="position-relative m-3">
                <input type="text" className="form-control" name='name' onChange={(evt) => dispatch(changeFilterField(evt.target.value))} value={filterField} />
                <i className="bi bi-x position-absolute top-50 end-0 translate-middle-y" onClick={() => dispatch(clearFilterField())} />
        </div>
    );
}
