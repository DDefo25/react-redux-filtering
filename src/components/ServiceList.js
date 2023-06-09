import { useSelector, useDispatch } from "react-redux";
import {removeService, changeServiceField, clearServiceField} from '../store/actions/actions'
import ServiceFilter from "./ServiceFilter";

export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const filterField = useSelector(state => state.serviceFilterField);
    const dispatch = useDispatch();

    const handleRemove = o => {
        dispatch(removeService(o.id)) 
        Object.keys(o).forEach((name) => dispatch(clearServiceField(name)))
    }

    const handleEdit = (o) => Object.entries(o).forEach(([name, value]) => dispatch(changeServiceField(name, value)))

    const filter = (arr, field) => {
        return arr.filter(o => {
            if (field === '') {
                return true
            } else {
                const words = Object.values(o).map(word => word.toString().split(' ')).flat();
                return words.some(word => {
                    const subStr = word.substring(0, field.length);
                    const compare = subStr.localeCompare(field, ['ru', 'en'], { sensitivity: 'base' })
                    return compare === 0
                })
            }
        })
    }

    return (
        <>  
            <ServiceFilter />
            <ul className="list-group list-group-flush m-3">
                {filter(items, filterField)
                    .map(o => (
                    <li className="list-group-item" key={o.id}>
                        {o.name} {o.price}
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(o)} />
                        <i className="bi bi-trash3" onClick={() => handleRemove(o)} />
                    </li>
                ))}
            </ul>
        </>
    )
}
