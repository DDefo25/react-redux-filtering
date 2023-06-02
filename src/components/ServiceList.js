import { useSelector, useDispatch } from "react-redux";
import {removeService} from './actions/actions'

export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    const handleRemove = id => dispatch(removeService(id))

    return (
        <ul className="list-group list-group-flush">
            {items.map(o => (
                <li className="list-group-item" key={o.id}>
                    {o.name} {o.price}
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => handleRemove(o.id)} />
                </li>
            ))}
        </ul>
    )
}
